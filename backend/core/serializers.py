from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import SearchQuery, AnalysisResult, Competitor

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'credits_balance', 'subscription_status']
        read_only_fields = ['credits_balance', 'subscription_status']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class CompetitorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Competitor
        fields = ['name', 'url', 'metrics']

class AnalysisResultSerializer(serializers.ModelSerializer):
    competitors = CompetitorSerializer(many=True, read_only=True)
    niche = serializers.CharField(source='search_query.niche', read_only=True)
    
    class Meta:
        model = AnalysisResult
        fields = ['id', 'status', 'ivm_score', 'raw_data', 'competitors', 'created_at', 'updated_at', 'niche']

class SearchQuerySerializer(serializers.ModelSerializer):
    result = AnalysisResultSerializer(read_only=True)
    
    class Meta:
        model = SearchQuery
        fields = ['id', 'niche', 'location', 'language', 'created_at', 'result']
        read_only_fields = ['id', 'created_at']

class CreateAnalysisSerializer(serializers.Serializer):
    niche = serializers.CharField(max_length=255)
    location = serializers.CharField(max_length=100, default='US')
    language = serializers.CharField(max_length=10, default='en')
