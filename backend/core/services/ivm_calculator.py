import math

class IVMCalculator:
    def __init__(self, volume_busca, dificuldade_seo, sentimento_negativo, saturacao_concorrencia):
        """
        Pesos definidos na documentação:
        w_v (Volume) = 0.2
        w_s (SEO/Dificuldade) = 0.2
        w_f (Sentimento/Gaps) = 0.4  <-- O maior peso
        w_c (Saturação) = 0.2
        """
        self.wv, self.ws, self.wf, self.wc = 0.2, 0.2, 0.4, 0.2
        
        self.v = volume_busca
        self.d_seo = dificuldade_seo
        self.sent_neg = sentimento_negativo  # Score de 0 a 100 vindo do NLP (Quanto maior, melhor para a oportunidade)
        self.c_sat = saturacao_concorrencia   # Qtd de concorrentes diretos

    def calcular_score_bruto(self):
        # Normalização do Volume usando logaritmo para evitar distorções de grandes números
        # Adiciona 1 para evitar log(0) se volume for 0
        v_norm = math.log1p(self.v) 
        
        # Fórmula: S = wv*ln(V) + ws*(100-Dseo) + wf*(SentNeg) - wc*(Csat)
        # Nota: (100 - self.d_seo) inverte a dificuldade: Dificuldade baixa (0) = Score alto (100)
        # Nota: sent_neg alto (muita reclamação) = Score alto (Oportunidade)
        # Nota: c_sat alto (muitos concorrentes) = Score baixo (Penalização)
        score = (
            (self.wv * v_norm) + 
            (self.ws * (100 - self.d_seo)) + 
            (self.wf * self.sent_neg) - 
            (self.wc * (self.c_sat * 10)) # Penalização por concorrente (ex: 5 concorrentes * 10 = 50 pts de penalidade ponderada)
        )
        return score

    def aplicar_sigmoide(self, x):
        """
        Normaliza o score bruto para uma escala de 0 a 100
        usando uma função logística adaptada.
        """
        # Se o score bruto for muito baixo, retorna 0
        if x < 0: return 0
        
        # Ajuste de escala (Sigmoide) para que o resultado final seja intuitivo (0-100)
        # O fator 50 centraliza a curva, o 0.1 ajusta a inclinação
        return 100 / (1 + math.exp(-0.1 * (x - 20))) 
        # Ajustei o ponto central (offset) para 20 pois os valores brutos podem ser baixos dependendo do log(volume)

    def obter_ivm_final(self):
        bruto = self.calcular_score_bruto()
        final = self.aplicar_sigmoide(bruto)
        return round(final, 2)
