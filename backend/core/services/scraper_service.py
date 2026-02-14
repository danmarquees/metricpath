import requests
from bs4 import BeautifulSoup
import logging

logger = logging.getLogger(__name__)

class ScraperService:
    @staticmethod
    def fetch_serp_data(query, location='US'):
        """
        Fetches Search Engine Results Page data using DataForSEO.
        """
        import os
        import base64
        import requests

        login = os.getenv('DATAFORSEO_LOGIN')
        password = os.getenv('DATAFORSEO_PASSWORD')

        if not login or not password:
            logger.warning("DataForSEO credentials not found. Using mock SERP data.")
            return ScraperService._mock_serp_data(query)

        logger.info(f"Fetching real SERP for {query} in {location}...")

        try:
            # DataForSEO Live Advanced Endpoint
            url = "https://api.dataforseo.com/v3/serp/google/organic/live/advanced"
            
            # Create payload
            payload = [{
                "keyword": query,
                "location_code": 2840, # Default US (2840). Ideally map 'location' string to ID.
                "language_code": "en",
                "depth": 10
            }]
            
            # Auth
            creds = base64.b64encode(f"{login}:{password}".encode('utf-8')).decode('utf-8')
            headers = {
                "Authorization": f"Basic {creds}",
                "Content-Type": "application/json"
            }

            response = requests.post(url, json=payload, headers=headers, timeout=30)
            response.raise_for_status()
            data = response.json()

            # Parse Response
            if data['tasks'][0]['status_code'] == 20000:
                result_item = data['tasks'][0]['result'][0]
                items = result_item.get('items', [])
                
                organic_results = []
                for item in items:
                    if item['type'] == 'organic':
                        organic_results.append({
                            "title": item.get('title', 'No Title'),
                            "url": item.get('url', '#'),
                            "snippet": item.get('description', '')
                        })

                # Volume is not in SERP API. Mocking or fetching separately.
                # For now, returning existing mock volume structure but with real results.
                return {
                    "search_volume": 12500, # Still mocked as it requires separate API
                    "cpc": 2.50, # Mocked
                    "competition": 0.45, # Mocked
                    "results": organic_results[:5] # Top 5
                }
            else:
                logger.error(f"DataForSEO Task Failed: {data}")
                return ScraperService._mock_serp_data(query)

        except Exception as e:
            logger.error(f"DataForSEO Request Failed: {e}")
            return ScraperService._mock_serp_data(query)

    @staticmethod
    def _mock_serp_data(query):
        return {
            "search_volume": 12500,
            "cpc": 2.50,
            "competition": 0.45,
            "results": [
                {"title": f"Result for {query} A", "url": "https://example.com/a"},
                {"title": f"Competitor B ({query})", "url": "https://example.com/b"},
                {"title": "Another Solution C", "url": "https://example.com/c"},
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
