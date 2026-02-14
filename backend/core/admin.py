from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'subscription_status', 'credits_balance', 'is_staff')
    fieldsets = UserAdmin.fieldsets + (
        ('MetricPath Info', {'fields': ('subscription_status', 'credits_balance')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('MetricPath Info', {'fields': ('subscription_status', 'credits_balance')}),
    )

from .models import SearchQuery, AnalysisResult, Competitor

@admin.register(SearchQuery)
class SearchQueryAdmin(admin.ModelAdmin):
    list_display = ('user', 'niche', 'location', 'created_at')
    list_filter = ('created_at', 'location')
    search_fields = ('niche', 'user__username')

@admin.register(AnalysisResult)
class AnalysisResultAdmin(admin.ModelAdmin):
    list_display = ('search_query', 'status', 'ivm_score', 'updated_at')
    list_filter = ('status', 'updated_at')

@admin.register(Competitor)
class CompetitorAdmin(admin.ModelAdmin):
    list_display = ('name', 'url', 'analysis_result')
    search_fields = ('name', 'url')

