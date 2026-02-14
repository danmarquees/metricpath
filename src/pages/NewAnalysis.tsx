import { ArrowRight, Clock, Search, Sparkles, TrendingUp, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnalysisService } from '../services/analysis';

export default function NewAnalysis() {
    const navigate = useNavigate();
    const [niche, setNiche] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleAnalyze = async () => {
        if (!niche.trim()) return;

        setIsLoading(true);
        setError(null);

        try {
            const response = await AnalysisService.startAnalysis(niche);
            // Redirect to report view with query ID (or task ID if we want to poll there)
            // Ideally backend returns query_id, let's assume it does based on our view
            navigate(`/report/${response.query_id}`);
        } catch (err) {
            console.error(err);
            setError("Falha ao iniciar análise. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6">
                    <Sparkles size={12} fill="currentColor" />
                    AI-Powered Market Validation
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    O que vamos validar hoje?
                </h1>
                <p className="text-zinc-500 text-lg max-w-xl mx-auto">
                    Analise a viabilidade do seu próximo SaaS com dados em tempo real sobre demanda, competição e sentimento.
                </p>
            </div>

            <div className="w-full max-w-2xl relative mb-12 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative flex items-center bg-zinc-900 border border-zinc-700/50 rounded-xl p-2 shadow-2xl">
                    <Search className="ml-4 text-zinc-500" size={24} />
                    <input
                        type="text"
                        placeholder="Ex: CRM para fotógrafos de casamento..."
                        className="w-full bg-transparent border-none focus:ring-0 text-white text-lg placeholder:text-zinc-600 px-4 py-2 outline-none"
                        autoFocus
                        value={niche}
                        onChange={(e) => setNiche(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleAnalyze}
                        disabled={isLoading || !niche.trim()}
                        className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2"
                    >
                        {isLoading ? <Loader2 size={18} className="animate-spin" /> : <>Analisar <ArrowRight size={18} /></>}
                    </button>
                </div>
                {error && <p className="text-rose-400 text-sm mt-2 ml-2">{error}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                {/* Recent Searches */}
                <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6">
                    <h3 className="text-sm font-bold text-zinc-400 mb-4 flex items-center gap-2 uppercase tracking-wider">
                        <Clock size={14} /> Recentes
                    </h3>
                    <div className="space-y-3">
                        {["SaaS de automação para criadores", "Platforma de Jobs para Editores", "Noting App com AI"].map((item, i) => (
                            <button key={i} className="w-full text-left p-3 rounded-xl hover:bg-zinc-800/50 transition-colors flex items-center justify-between group">
                                <span className="text-zinc-300 text-sm font-medium group-hover:text-white">{item}</span>
                                <ArrowRight size={14} className="text-zinc-600 group-hover:text-zinc-400 -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Trending */}
                <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6">
                    <h3 className="text-sm font-bold text-zinc-400 mb-4 flex items-center gap-2 uppercase tracking-wider">
                        <TrendingUp size={14} /> Em Alta
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["Micro-SaaS", "Telegram Bots", "Hiring Platforms", "AI Wrappers", "Habit Trackers"].map((tag, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-colors cursor-pointer">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
