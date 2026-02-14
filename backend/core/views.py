from rest_framework import viewsets, status, mixins, generics
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from .models import SearchQuery, AnalysisResult
from .serializers import SearchQuerySerializer, CreateAnalysisSerializer, AnalysisResultSerializer, UserSerializer
from .tasks import run_analysis_task

class RegisterView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'credits': user.credits_balance
        })

class UserDetailView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user

class AnalysisViewSet(viewsets.GenericViewSet, 
                     mixins.CreateModelMixin, 
                     mixins.RetrieveModelMixin, 
                     mixins.ListModelMixin):
    """
    API endpoint that allows analysis to be started and viewed.
    """
    permission_classes = [IsAuthenticated]
    serializer_class = SearchQuerySerializer

    def get_queryset(self):
        # Only view own queries
        return SearchQuery.objects.filter(user=self.request.user).order_by('-created_at')

    def get_serializer_class(self):
        if self.action == 'create':
            return CreateAnalysisSerializer
        return SearchQuerySerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        query = SearchQuery.objects.create(
            user=request.user,
            niche=serializer.validated_data['niche'],
            location=serializer.validated_data.get('location', 'US'),
            language=serializer.validated_data.get('language', 'en')
        )

        # Trigger Celery Task
        task_result = run_analysis_task.delay(query.id)
        
        return Response({
            "query_id": query.id,
            "task_id": task_result.id,
            "message": "Analysis started successfully"
        }, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['get'])
    def status(self, request, pk=None):
        """
        Check status of an analysis.
        """
        try:
            # get_object() uses get_queryset, so it ensures user ownership
            query = self.get_object()
            if hasattr(query, 'result'):
                return Response(AnalysisResultSerializer(query.result).data)
            else:
                return Response({"status": "PENDING", "message": "Analysis hasn't started processing yet"}, status=status.HTTP_200_OK)
        except SearchQuery.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
