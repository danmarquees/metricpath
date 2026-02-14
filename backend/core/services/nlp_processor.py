import logging
import os
import json
from openai import OpenAI

logger = logging.getLogger(__name__)

class NLPProcessor:
    @staticmethod
    def analyze_sentiment(text):
        """
        Analyzes sentiment of the text using OpenAI GPT-4o-mini.
        Returns a score from -1.0 (Negative) to 1.0 (Positive).
        """
        api_key = os.getenv('OPENAI_API_KEY')
        if not api_key:
            logger.warning("OPENAI_API_KEY not found. Using mock sentiment.")
            return NLPProcessor._mock_sentiment(text)
            
        if not text:
            return 0.0
            
        try:
            client = OpenAI(api_key=api_key)
            
            prompt = f"""
            Analyze the sentiment of the following text representing user reviews or market feedback.
            Return a JSON object with:
            - "score": A float between -1.0 (Very Negative) and 1.0 (Very Positive).
            - "pain_points": A list of strings identifying key complaints or problems.
            
            Text: "{text[:2000]}"
            """
            
            response = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[{"role": "user", "content": prompt}],
                response_format={"type": "json_object"},
                temperature=0.2
            )
            
            content = response.choices[0].message.content
            data = json.loads(content)
            
            logger.info(f"OpenAI Analysis: {data}")
            return data.get('score', 0.0)

        except Exception as e:
            logger.error(f"OpenAI Analysis failed: {e}")
            return NLPProcessor._mock_sentiment(text)

    @staticmethod
    def _mock_sentiment(text):
        # Fallback heuristic
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
        Extracts key pain points using OpenAI.
        """
        api_key = os.getenv('OPENAI_API_KEY')
        if not api_key or not text:
            return ["Lack of integration", "High pricing", "Slow support"] # Mock

        try:
            client = OpenAI(api_key=api_key)
            prompt = f"""
            Identify up to 3 key pain points or complaints from this text.
            Return JSON: {{ "pain_points": ["point 1", "point 2"] }}
            Text: "{text[:2000]}"
            """
            
            response = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[{"role": "user", "content": prompt}],
                response_format={"type": "json_object"}
            )
            
            data = json.loads(response.choices[0].message.content)
            return data.get('pain_points', [])
        except Exception as e:
            logger.error(f"OpenAI Pain Points failed: {e}")
            return ["Error extracting pain points"]
