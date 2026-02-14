import { ArrowLeft, Download, Share2, Loader2, AlertCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AIInsights } from '../components/dashboard/AIInsights';
import { MarketHeatmap } from '../components/dashboard/MarketHeatmap';
import { MetricCard } from '../components/dashboard/MetricCard';
import { SentimentFeed } from '../components/dashboard/SentimentFeed';
import { SubNicheBreakdown } from '../components/dashboard/SubNicheBreakdown';
import { TrendChart } from '../components/dashboard/TrendChart';
import { Globe, Target, TrendingUp } from 'lucide-react';
import { AnalysisService, type AnalysisResultData } from '../services/analysis';

export default function ReportView() {
    const { id } = useParams();
    const [data, setData] = useState<AnalysisResultData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        let intervalId: any;

        const fetchData = async () => {
            try {
                const result = await AnalysisService.getAnalysisStatus(id);
                setData(result);

                if (result.status === 'COMPLETED' || result.status === 'FAILED') {
                    setLoading(false);
                    if (intervalId) clearInterval(intervalId);
                }
            } catch (err) {
                console.error(err);
                setError("Falha ao carregar relatório.");
                setLoading(false);
                if (intervalId) clearInterval(intervalId);
            }
        };

        // Initial fetch
        fetchData();

        // Poll every 2 seconds
        intervalId = setInterval(fetchData, 2000);

        return () => clearInterval(intervalId);
    }, [id]);

    if (loading || (data && data.status !== 'COMPLETED' && data.status !== 'FAILED')) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-zinc-400">
                <Loader2 size={32} className="animate-spin mb-4 text-indigo-500" />
                <h2 className="text-xl font-bold text-white mb-2">Analisando o mercado...</h2>
                <p className="text-sm">Os nossos workers estão a minerar dados sobre "{data?.raw_data?.serp?.search_parameters?.q || 'o seu nicho'}".</p>
                <div className="mt-8 w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 animate-progress"></div>
                </div>
            </div>
        );
    }

    if (error || data?.status === 'FAILED') {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-zinc-400">
                <AlertCircle size={48} className="mb-4 text-rose-500" />
                <h2 className="text-xl font-bold text-white mb-2">Ups, algo correu mal.</h2>
                <p className="text-sm mb-6">{error || "Não conseguimos completar a análise."}</p>
                <Link to="/new-analysis" className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition">
                    Tentar novamente
                </Link>
            </div>
        );
    }

    // Safely access data
    const ivm = data?.ivm_score || 0;
    const serp = data?.raw_data?.serp || {};

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link to="/history" className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-white mb-1">Análise #{id}</h1>
                        <p className="text-zinc-500 text-sm">Gerado em {new Date(data?.created_at || '').toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-bold text-zinc-400 hover:text-white transition-colors">
                        <Download size={16} /> Exportar PDF
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-bold transition-colors shadow-lg shadow-indigo-600/20">
                        <Share2 size={16} /> Compartilhar
                    </button>
                </div>
            </div>

            {/* Reusing Dashboard Components for Consistency - Passing Real Data where possible */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
                    <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">IVM Score</h3>
                    <div className="text-4xl font-bold text-white mb-1">{ivm}</div>
                    <div className="text-xs text-zinc-400">Índice de Viabilidade de Mercado</div>
                </div>
                <MetricCard title="Buscas Volume" value={(serp.search_volume || 0).toLocaleString()} change="--" isPositive={true} icon={Globe} />
                <MetricCard title="Competição" value={serp.competition ? (serp.competition * 100).toFixed(0) + '%' : 'N/A'} change="--" isPositive={false} icon={TrendingUp} />
                <MetricCard title="CPC Estimado" value={`$${serp.cpc || 0}`} change="--" isPositive={true} icon={Target} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
                        <h2 className="text-xl font-bold text-white mb-8">Tendência de Demanda</h2>
                        <TrendChart />
                    </div>
                    <SubNicheBreakdown />
                </div>
                <div className="space-y-8">
                    <MarketHeatmap />
                    <AIInsights />
                    <SentimentFeed />
                </div>
            </div>
        </div>
    )
}

