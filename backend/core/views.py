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

    @action(detail=True, methods=['get'])
    def export_pdf(self, request, pk=None):
        """
        Generate and download PDF report.
        """
        from django.template.loader import get_template
        from xhtml2pdf import pisa
        from django.http import HttpResponse

        try:
            query = self.get_object()
            if not hasattr(query, 'result') or query.result.status != AnalysisResult.Status.COMPLETED:
                return Response({'error': 'Analysis not completed yet'}, status=status.HTTP_400_BAD_REQUEST)
            
            result = query.result
            raw_data = result.raw_data or {}
            serp_data = raw_data.get('serp', {})
            
            context = {
                'niche': query.niche,
                'ivm_score': result.ivm_score,
                'volume': serp_data.get('search_volume', 0),
                'cpc': serp_data.get('cpc', 0),
                'sentiment_score': raw_data.get('sentiment_summary', 0),
                'competitors': serp_data.get('results', [])
            }

            template_path = 'report_pdf.html'
            template = get_template(template_path)
            html = template.render(context)

            response = HttpResponse(content_type='application/pdf')
            response['Content-Disposition'] = f'attachment; filename="metricpath_report_{query.niche}.pdf"'
            
            pisa_status = pisa.CreatePDF(
                html, dest=response
            )

            if pisa_status.err:
                return Response({'error': 'PDF generation error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
            return response

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CreateCheckoutSessionView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        from .services.stripe_service import StripeService
        
        price_id = request.data.get('price_id')
        if not price_id:
            return Response({'error': 'price_id is required'}, status=status.HTTP_400_BAD_REQUEST)

        # Build absolute URL for success/cancel redirects
        domain_url = f"{request.scheme}://{request.get_host()}"
        # If running behind proxy (e.g. ngrok or production), scheme might need adjustment
        # For now, simplistic approach. In frontend we can also pass the return url.
        # Actually, let's use a hardcoded or env var for frontend URL to be safe in split deployment
        frontend_url = request.data.get('return_url', 'http://localhost:5173')

        try:
            checkout_url = StripeService.create_checkout_session(
                user_id=request.user.id,
                price_id=price_id,
                domain_url=frontend_url
            )
            return Response({'url': checkout_url})
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class StripeWebhookView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    authentication_classes = [] # Disable auth for webhook

    def post(self, request, *args, **kwargs):
        from .services.stripe_service import StripeService
        from django.conf import settings
        import stripe

        payload = request.body
        sig_header = request.META.get('HTTP_STRIPE_SIGNATURE')
        event = None

        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, settings.STRIPE_WEBHOOK_SECRET
            )
        except ValueError as e:
            # Invalid payload
            return Response(status=status.HTTP_400_BAD_REQUEST)
        except stripe.error.SignatureVerificationError as e:
            # Invalid signature
            return Response(status=status.HTTP_400_BAD_REQUEST)

        # Handle the event
        if event['type'] == 'checkout.session.completed':
            session = event['data']['object']
            success = StripeService.handle_checkout_session_completed(session)
            if success:
                return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)

        return Response(status=status.HTTP_200_OK)
