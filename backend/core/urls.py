from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AnalysisViewSet, RegisterView, CustomAuthToken, UserDetailView

router = DefaultRouter()
router.register(r'analysis', AnalysisViewSet, basename='analysis')

urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', CustomAuthToken.as_view(), name='login'),
    path('auth/me/', UserDetailView.as_view(), name='user-detail'),
    path('', include(router.urls)),
]
