import { Lightbulb, Zap } from 'lucide-react';

interface AIInsightsProps {
    niche?: string;
    sentiment?: number;
}

export const AIInsights = ({ niche = "Market", sentiment = 0 }: AIInsightsProps) => {
    
    // Generate a contextual insight. In the future this should come pre-generated from the Backend NLP task.
    const sentimentDesc = sentiment > 0 
        ? "tem exibido um tom positivo nas reviews, focar em escalar a UX atual" 
        : "tem fortes reclamações dos utilizadores, a oportunidade foca-se em colmatar os bugs dos competidores";
        
    return (
        <div className="bg-gradient-to-br from-indigo-600/20 to-zinc-900 border border-indigo-500/30 p-8 rounded-3xl relative overflow-hidden group h-full">
            <div className="absolute -right-4 -top-4 text-indigo-500 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Zap size={120} />
            </div>
            <div className="relative z-10">
                <Lightbulb className="text-indigo-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Insight Estratégico AI</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    "O nicho de <strong className="text-zinc-200">{niche}</strong> {sentimentDesc}. Criar um MVP rapidamente tem alta chance de atrair a audiência insatisfeita."
                </p>
                <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40">
                    Ver Roadmap Sugerido
                </button>
            </div>
        </div>
    );
};
