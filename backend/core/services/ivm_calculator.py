class IVMCalculator:
    """
    IVM (Idea Validation Metric) Calculator.
    Standardizes the logic for scoring a business idea based on
    market data, competition, and sentiment.
    """

    @staticmethod
    def calculate(search_volume, competition_level, sentiment_score, cpc):
        """
        Calculate the IVM Score (0-100).
        
        Args:
            search_volume (int): Monthly search volume.
            competition_level (float): 0.0 to 1.0 (1.0 = High Competition).
            sentiment_score (float): -1.0 to 1.0 (Positive sentiment is better for existing solutions? 
                                    actually, negative sentiment on competitors is opportunity).
            cpc (float): Cost Per Click in currency.
            
        Returns:
            float: IVM Score
        """
        # 1. Demand Score (40% weight)
        # Logarithmic scale for volume to handle 100 vs 100k
        demand_score = min((search_volume / 10000) * 100, 100)
        
        # 2. Market Gap Score (30% weight)
        # Low competition is better.
        # If competition is high but sentiment is low (users hate current solutions), that's a gap!
        competitor_weakness = 0
        if sentiment_score < 0:
            competitor_weakness = abs(sentiment_score) * 100
        
        gap_score = (1 - competition_level) * 100
        # Boost gap score if competitors are weak
        gap_score = (gap_score + competitor_weakness) / 2
        
        # 3. Viability/Monetization (30% weight)
        # Higher CPC implies higher value customers
        money_score = min((cpc / 5.0) * 100, 100) # Assuming $5 CPC is "High"
        
        final_score = (demand_score * 0.4) + (gap_score * 0.3) + (money_score * 0.3)
        return round(final_score, 1)
