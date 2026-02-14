import { Lightbulb, Zap } from 'lucide-react';

export const AIInsights = () => (
    <div className="bg-gradient-to-br from-indigo-600/20 to-zinc-900 border border-indigo-500/30 p-8 rounded-3xl relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 text-indigo-500 opacity-10 group-hover:rotate-12 transition-transform duration-700">
            <Zap size={120} />
        </div>
        <div className="relative z-10">
            <Lightbulb className="text-indigo-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Insight Estratégico</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                "O mercado de micro-learning no Telegram está a explodir no Brasil. Criar um MVP focado apenas em <strong className="text-zinc-200">quiz de retenção</strong> tem 3x mais chance de viralizar do que um LMS completo."
            </p>
            <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40">
                Ver Roadmap Sugerido
            </button>
        </div>
    </div>
);
