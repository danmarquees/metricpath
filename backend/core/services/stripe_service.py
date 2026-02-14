import stripe
from django.conf import settings
from django.urls import reverse
import logging

logger = logging.getLogger(__name__)

# Configure Stripe
stripe.api_key = settings.STRIPE_SECRET_KEY

class StripeService:
    @staticmethod
    def create_checkout_session(user_id, price_id, domain_url):
        """
        Creates a Stripe Checkout Session for a one-time payment or subscription.
        """
        try:
            checkout_session = stripe.checkout.Session.create(
                client_reference_id=str(user_id),
                payment_method_types=['card'],
                line_items=[
                    {
                        'price': price_id,
                        'quantity': 1,
                    },
                ],
                mode='payment', # Use 'subscription' for recurring, 'payment' for one-time
                success_url=domain_url + '/settings?success=true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=domain_url + '/settings?canceled=true',
                metadata={
                    'user_id': str(user_id),
                    'type': 'credits_purchase' 
                }
            )
            return checkout_session.url
        except Exception as e:
            logger.error(f"Error creating Stripe session: {e}")
            raise e

    @staticmethod
    def handle_checkout_session_completed(session):
        from ..models import User
        
        user_id = session.get('client_reference_id') or session.get('metadata', {}).get('user_id')
        payment_status = session.get('payment_status')
        
        if payment_status == 'paid' and user_id:
            try:
                user = User.objects.get(id=user_id)
                
                # Logic to add credits based on price_id logic or metadata
                # For MVP, assuming any successful checkout adds 10 credits
                user.credits_balance += 10
                user.save()
                
                logger.info(f"Added 10 credits to user {user.username} via Stripe.")
                return True
            except User.DoesNotExist:
                logger.error(f"User {user_id} not found processing webhook.")
                return False
        return False
