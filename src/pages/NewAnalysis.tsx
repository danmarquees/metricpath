import { ArrowRight, Clock, Search, Sparkles, TrendingUp, Loader2, Globe, FileText, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnalysisService } from '../services/analysis';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../context/ToastContext';

export default function NewAnalysis() {
    const navigate = useNavigate();
    const { toast, error: showError } = useToast();
    const [niche, setNiche] = useState('');
    const [status, setStatus] = useState<'idle' | 'scanning' | 'analyzing' | 'redirecting'>('idle');
    const [scanText, setScanText] = useState('Iniciando...');

    useEffect(() => {
        if (status === 'scanning') {
            const texts = ['Escaneando Google SERP...', 'Identificando competidores...', 'Coletando métricas...'];
            let i = 0;
            const interval = setInterval(() => {
                setScanText(texts[i % texts.length]);
                i++;
            }, 1200);
            return () => clearInterval(interval);
        }
    }, [status]);

    const handleAnalyze = async () => {
        if (!niche.trim()) return;

        setStatus('scanning');

        // Enhance perceived speed with immediate feedback
        toast("Iniciando análise de mercado...", "info");

        try {
            // Fake delay for "scanning" visual effect if the API is too fast, 
            // but since we have real API it might take 2-4 seconds anyway.
            // Let's just call it.
            const startTime = Date.now();

            const response = await AnalysisService.startAnalysis(niche);

            // Ensure at least 2 seconds of "scanning" animation for UX
            const elapsed = Date.now() - startTime;
            if (elapsed < 2000) {
                await new Promise(r => setTimeout(r, 2000 - elapsed));
            }

            setStatus('analyzing');
            setScanText("Processando Inteligência Artificial...");

            await new Promise(r => setTimeout(r, 1500)); // Another brief moment for "AI" feel

            setStatus('redirecting');
            navigate(`/report/${response.query_id}`);

            toast("Análise concluída com sucesso!", "success");

        } catch (err) {
            console.error(err);
            setStatus('idle');
            showError("Falha ao iniciar análise. Tente novamente.");
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
            <AnimatePresence mode="wait">
                {status === 'idle' ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                        className="w-full flex flex-col items-center"
                        key="input-stage"
                    >
                        <div className="text-center mb-12">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6"
                            >
                                <Sparkles size={12} fill="currentColor" />
                                AI-Powered Market Validation
                            </motion.div>
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
                                    disabled={status !== 'idle'}
                                />
                                <button
                                    onClick={handleAnalyze}
                                    disabled={status !== 'idle' || !niche.trim()}
                                    className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2"
                                >
                                    Analisar <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                            {/* Recent Searches */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6"
                            >
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
                            </motion.div>

                            {/* Trending */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6"
                            >
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
                            </motion.div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="loading-stage"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="flex flex-col items-center justify-center space-y-8"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-24 h-24 rounded-full border-b-2 border-indigo-500"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-2 rounded-full border-t-2 border-cyan-500 opacity-50"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                {status === 'scanning' && <Globe className="w-8 h-8 text-indigo-400 animate-pulse" />}
                                {status === 'analyzing' && <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />}
                                {status === 'redirecting' && <CheckCircle2 className="w-8 h-8 text-emerald-400" />}
                            </div>
                        </div>

                        <div className="text-center space-y-2">
                            <motion.h2
                                key={status}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-2xl font-bold text-white"
                            >
                                {status === 'redirecting' ? 'Análise Pronta!' : scanText}
                            </motion.h2>
                            <p className="text-zinc-500 max-w-sm">
                                {niche}
                            </p>
                        </div>

                        {/* Animated Steps Checklist */}
                        <div className="w-64 space-y-3 pt-4">
                            <div className={`flex items-center gap-3 text-sm ${status !== 'idle' ? 'text-indigo-300' : 'text-zinc-600'}`}>
                                <div className={`w-2 h-2 rounded-full ${status !== 'idle' ? 'bg-indigo-500 animate-pulse' : 'bg-zinc-800'}`} />
                                Coletando dados SERP
                            </div>
                            <div className={`flex items-center gap-3 text-sm ${status === 'analyzing' || status === 'redirecting' ? 'text-indigo-300' : 'text-zinc-600'}`}>
                                <div className={`w-2 h-2 rounded-full ${status === 'analyzing' || status === 'redirecting' ? 'bg-indigo-500 animate-pulse' : 'bg-zinc-800'}`} />
                                Analisando concorrência
                            </div>
                            <div className={`flex items-center gap-3 text-sm ${status === 'redirecting' ? 'text-indigo-300' : 'text-zinc-600'}`}>
                                <div className={`w-2 h-2 rounded-full ${status === 'redirecting' ? 'bg-indigo-500 animate-pulse' : 'bg-zinc-800'}`} />
                                Calculando viabilidade
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
