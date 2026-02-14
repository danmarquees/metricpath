from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AnalysisViewSet, RegisterView, CustomAuthToken, UserDetailView, CreateCheckoutSessionView, StripeWebhookView

router = DefaultRouter()
router.register(r'analysis', AnalysisViewSet, basename='analysis')

urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', CustomAuthToken.as_view(), name='login'),
    path('auth/me/', UserDetailView.as_view(), name='user-detail'),
    path('billing/checkout/', CreateCheckoutSessionView.as_view(), name='checkout'),
    path('billing/webhook/', StripeWebhookView.as_view(), name='stripe-webhook'),
    path('', include(router.urls)),
]
