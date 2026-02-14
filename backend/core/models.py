from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    class SubscriptionStatus(models.TextChoices):
        FREE = 'FREE', 'Free'
        PRO = 'PRO', 'Pro'
        ENTERPRISE = 'ENTERPRISE', 'Enterprise'

    credits_balance = models.IntegerField(default=10)
    subscription_status = models.CharField(
        max_length=20,
        choices=SubscriptionStatus.choices,
        default=SubscriptionStatus.FREE
    )

    def __str__(self):
        return self.username


class SearchQuery(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='queries')
    niche = models.CharField(max_length=255)
    location = models.CharField(max_length=100, default='US')
    language = models.CharField(max_length=10, default='en')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.niche} ({self.location})"


class AnalysisResult(models.Model):
    class Status(models.TextChoices):
        PENDING = 'PENDING', 'Pending'
        PROCESSING = 'PROCESSING', 'Processing'
        COMPLETED = 'COMPLETED', 'Completed'
        FAILED = 'FAILED', 'Failed'

    search_query = models.OneToOneField(SearchQuery, on_delete=models.CASCADE, related_name='result')
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.PENDING)
    ivm_score = models.FloatField(null=True, blank=True)
    raw_data = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Result for {self.search_query} - {self.status}"


class Competitor(models.Model):
    analysis_result = models.ForeignKey(AnalysisResult, on_delete=models.CASCADE, related_name='competitors')
    name = models.CharField(max_length=255)
    url = models.URLField()
    metrics = models.JSONField(default=dict, blank=True)
    
    def __str__(self):
        return self.name

