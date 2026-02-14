from celery import shared_task
from django.utils import timezone
from .models import SearchQuery, AnalysisResult, Competitor
from .services.scraper_service import ScraperService
from .services.nlp_processor import NLPProcessor
from .services.ivm_calculator import IVMCalculator
import logging
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

logger = logging.getLogger(__name__)

def broadcast_update(query_id, status, message, score=None):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        f'analysis_{query_id}',
        {
            'type': 'analysis_update',
            'status': status,
            'message': message,
            'score': score
        }
    )

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
        broadcast_update(query_id, 'PROCESSING', 'Iniciando análise de mercado...', None)
        
        # 1. Scraping
        broadcast_update(query_id, 'PROCESSING', 'Minerando dados da SERP...', None)
        serp_data = ScraperService.fetch_serp_data(query.niche, query.location)
        
        # 2. NLP Analysis (Mocked loop over competitors)
        # Real implementation would visit each URL
        competitors_data = []
        overall_sentiment = 0
        
        broadcast_update(query_id, 'PROCESSING', 'Analisando sentimento e concorrentes...', None)
        for comp in serp_data.get('results', []):
            # Scrape content (lightweight)
            try:
                content = ScraperService.scrape_url(comp['url']) 
                sentiment = NLPProcessor.analyze_sentiment(content)
            except Exception as e:
                logger.warning(f"Failed to analyze {comp['url']}: {e}")
                sentiment = 0.0
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
        broadcast_update(query_id, 'PROCESSING', 'Calculando Score IVM...', None)
        
        # Map mocked/real data to calculator inputs
        search_volume = serp_data.get('search_volume', 0)
        
        # SEO Difficulty (0-100). Mocked based on competition (0-1)
        dificuldade_seo = serp_data.get('competition', 0.5) * 100
        
        # Negative Sentiment (0-100). 
        # Our NLP returns -1 to 1.
        # If avg_sentiment is negative (e.g. -0.5), it means people are complaining.
        # Complaining is GOOD for opportunity.
        # So we map: -1.0 -> 100 (High Negative Sentiment), 1.0 -> 0 (Low Negative Sentiment)
        # Formula: (1 - sentiment) * 50
        # Ex: -1 -> (1 - (-1)) * 50 = 2 * 50 = 100
        # Ex: 0 -> (1 - 0) * 50 = 50
        # Ex: 1 -> (1 - 1) * 50 = 0
        sentimento_negativo = (1 - avg_sentiment) * 50
        
        # Competitor Saturation (Count)
        saturacao_concorrencia = len(competitors_data)

        calculator = IVMCalculator(
            volume_busca=search_volume,
            dificuldade_seo=dificuldade_seo,
            sentimento_negativo=sentimento_negativo,
            saturacao_concorrencia=saturacao_concorrencia
        )
        
        ivm_score = calculator.obter_ivm_final()
        
        # 4. Save Final Result
        result.ivm_score = ivm_score
        result.raw_data = {
            "serp": serp_data,
            "sentiment_summary": avg_sentiment
        }
        result.status = AnalysisResult.Status.COMPLETED
        result.save()
        
        logger.info(f"Analysis completed for query_id {query_id}. IVM: {ivm_score}")
        broadcast_update(query_id, 'COMPLETED', 'Análise concluída com sucesso!', ivm_score)
        return result.id

    except SearchQuery.DoesNotExist:
        logger.error(f"SearchQuery {query_id} not found.")
    except Exception as e:
        logger.error(f"Analysis failed: {e}")
        broadcast_update(query_id, 'FAILED', f'Erro na análise: {str(e)}', None)
        if 'result' in locals():
            result.status = AnalysisResult.Status.FAILED
            result.save()
