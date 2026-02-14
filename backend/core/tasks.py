from celery import shared_task
from django.utils import timezone
from .models import SearchQuery, AnalysisResult, Competitor
from .services.scraper_service import ScraperService
from .services.nlp_processor import NLPProcessor
from .services.ivm_calculator import IVMCalculator
import logging

logger = logging.getLogger(__name__)

@shared_task
def run_analysis_task(query_id):
    """
    Orchestrates the analysis process:
    1. Fetch SERP data
    2. Analyze sentiment/gaps
    3. Calculate IVM Score
    4. Save results
    """
    logger.info(f"Starting analysis for query_id: {query_id}")
    
    try:
        query = SearchQuery.objects.get(id=query_id)
        
        # Create or update result to PROCESSING
        result, created = AnalysisResult.objects.get_or_create(search_query=query)
        result.status = AnalysisResult.Status.PROCESSING
        result.save()
        
        # 1. Scraping
        serp_data = ScraperService.fetch_serp_data(query.niche, query.location)
        
        # 2. NLP Analysis (Mocked loop over competitors)
        # Real implementation would visit each URL
        competitors_data = []
        overall_sentiment = 0
        
        for comp in serp_data.get('results', []):
            # Scrape content (lightweight)
            # content = ScraperService.scrape_url(comp['url']) 
            # sentiment = NLPProcessor.analyze_sentiment(content)
            
            # Mocking sentiment for now
            sentiment = 0.5 if 'a' in comp['url'] else -0.2
            overall_sentiment += sentiment
            
            competitors_data.append({
                "name": comp['title'],
                "url": comp['url'],
                "sentiment": sentiment
            })
            
            # Save Competitor
            Competitor.objects.create(
                analysis_result=result,
                name=comp['title'],
                url=comp['url'],
                metrics={"sentiment": sentiment}
            )

        avg_sentiment = overall_sentiment / len(competitors_data) if competitors_data else 0
        
        # 3. Calculate IVM
        ivm_score = IVMCalculator.calculate(
            search_volume=serp_data.get('search_volume', 0),
            competition_level=serp_data.get('competition', 0.5),
            sentiment_score=avg_sentiment,
            cpc=serp_data.get('cpc', 0.0)
        )
        
        # 4. Save Final Result
        result.ivm_score = ivm_score
        result.raw_data = {
            "serp": serp_data,
            "sentiment_summary": avg_sentiment
        }
        result.status = AnalysisResult.Status.COMPLETED
        result.save()
        
        logger.info(f"Analysis completed for query_id {query_id}. IVM: {ivm_score}")
        return result.id

    except SearchQuery.DoesNotExist:
        logger.error(f"SearchQuery {query_id} not found.")
    except Exception as e:
        logger.error(f"Analysis failed: {e}")
        if 'result' in locals():
            result.status = AnalysisResult.Status.FAILED
            result.save()
