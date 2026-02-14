import requests
from bs4 import BeautifulSoup
import logging

logger = logging.getLogger(__name__)

class ScraperService:
    @staticmethod
    def fetch_serp_data(query, location='US'):
        """
        Fetches Search Engine Results Page data.
        Currently a mock/placeholder. Connect to DataForSEO/SerpApi here.
        """
        logger.info(f"Fetching SERP for {query} in {location}")
        
        # MOCK DATA
        return {
            "search_volume": 12500,
            "cpc": 2.50,
            "competition": 0.45,
            "results": [
                {"title": "Existing Solution A", "url": "https://example.com/a"},
                {"title": "Competitor B", "url": "https://example.com/b"},
            ]
        }

    @staticmethod
    def scrape_url(url):
        """
        Scrapes content from a specific URL for text analysis.
        """
        try:
            # Add headers to mimic browser
            headers = {'User-Agent': 'Mozilla/5.0'}
            response = requests.get(url, headers=headers, timeout=10)
            if response.status_code == 200:
                soup = BeautifulSoup(response.text, 'html.parser')
                # Extract text (p, h1-h6, li)
                text_elements = soup.find_all(['p', 'h1', 'h2', 'h3', 'li'])
                return " ".join([elem.get_text().strip() for elem in text_elements])
            return ""
        except Exception as e:
            logger.error(f"Failed to scrape {url}: {e}")
            return ""
