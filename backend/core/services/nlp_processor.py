import logging

logger = logging.getLogger(__name__)

class NLPProcessor:
    @staticmethod
    def analyze_sentiment(text):
        """
        Analyzes sentiment of the text using OpenAI (mocked for now).
        Returns a score from -1.0 (Negative) to 1.0 (Positive).
        """
        if not text:
            return 0.0
            
        logger.info("Analyzing sentiment for text...")
        # MOCK: In real imp, use openai.chat.completions.create(...)
        
        # Simple heuristic for mock
        negative_words = ['bad', 'slow', 'expensive', 'buggy', 'error', 'hate']
        positive_words = ['good', 'fast', 'cheap', 'reliable', 'love', 'great']
        
        text_lower = text.lower()
        score = 0
        for w in negative_words:
            if w in text_lower: score -= 0.1
        for w in positive_words:
            if w in text_lower: score += 0.1
            
        return max(min(score, 1.0), -1.0)

    @staticmethod
    def extract_pain_points(text):
        """
        Extracts key pain points from text.
        """
        # MOCK
        return ["Lack of integration", "High pricing", "Slow support"]
