import { ArrowLeft, Download, AlertCircle, Globe, TrendingUp, Target } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AIInsights } from '../components/dashboard/AIInsights';
import { MarketHeatmap } from '../components/dashboard/MarketHeatmap';
import { MetricCard } from '../components/dashboard/MetricCard';
import { SentimentFeed } from '../components/dashboard/SentimentFeed';
import { SubNicheBreakdown } from '../components/dashboard/SubNicheBreakdown';
import { TrendChart } from '../components/dashboard/TrendChart';
import { AnalysisService, type AnalysisResultData } from '../services/analysis';
import { useToast } from '../context/ToastContext';
import { Skeleton } from '../components/ui/Skeleton';

export default function ReportView() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toast, error: showError } = useToast();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<AnalysisResultData | null>(null);

    useEffect(() => {
        if (!id) return;

        // Initial fetch to get current state (in case we missed WS events or page refresh)
        AnalysisService.getAnalysisStatus(id).then(initialData => {
            setData(initialData);
            if (initialData.status === 'COMPLETED' || initialData.status === 'FAILED') {
                setLoading(false);
            }
        }).catch(err => {
            console.error("Failed to fetch initial status", err);
            setError("Failed to load report data.");
            setLoading(false);
        });

        // WebSocket Connection
        const wsUrl = `ws://127.0.0.1:8000/ws/analysis/${id}/`;
        const socket = new WebSocket(wsUrl);

        socket.onopen = () => {
            console.log("WebSocket Connected");
        };

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log("WS Message:", message);

            if (message.message) {
                toast(message.message, 'info');
            }

            if (message.status === 'COMPLETED') {
                AnalysisService.getAnalysisStatus(id).then(fullData => {
                    setData(fullData);
                    setLoading(false);
                    toast("Análise finalizada!", "success");
                });
            } else if (message.status === 'FAILED') {
                setError(message.message || "Analysis failed.");
                setLoading(false);
                showError(message.message || "Falha na análise.");
            }
        };

        socket.onerror = (error) => {
            console.error("WebSocket Error:", error);
        };

        socket.onclose = () => {
            console.log("WebSocket Disconnected");
        };

        return () => {
            socket.close();
        };
    }, [id, toast, showError]);

    if (loading) {
        return (
            <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
                {/* Header Skeleton */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-10 w-10 rounded-lg" />
                        <div>
                            <Skeleton className="h-8 w-64 mb-2" />
                            <Skeleton className="h-4 w-32" />
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Skeleton className="h-10 w-32 rounded-lg" />
                        <Skeleton className="h-10 w-32 rounded-lg" />
                    </div>
                </div>

                {/* Metrics Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl space-y-3">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-10 w-32" />
                            <Skeleton className="h-4 w-40" />
                        </div>
                    ))}
                </div>

                {/* Charts Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl h-[400px]">
                            <Skeleton className="h-8 w-48 mb-8" />
                            <Skeleton className="h-[300px] w-full rounded-xl" />
                        </div>
                        <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl h-[200px]">
                            <Skeleton className="h-full w-full" />
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl h-[300px]">
                            <Skeleton className="h-full w-full" />
                        </div>
                        <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl h-[400px]">
                            <Skeleton className="h-full w-full" />
                        </div>
                    </div>
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
                <div className="flex gap-4">
                    <button
                        onClick={async () => {
                            try {
                                const token = localStorage.getItem('token');
                                const response = await fetch(`http://localhost:8000/api/analysis/${id}/export_pdf/`, {
                                    headers: {
                                        'Authorization': `Token ${token}`
                                    }
                                });

                                if (response.ok) {
                                    const blob = await response.blob();
                                    const url = window.URL.createObjectURL(blob);
                                    const a = document.createElement('a');
                                    a.href = url;
                                    a.download = `metricpath_report_${data?.niche}.pdf`;
                                    document.body.appendChild(a);
                                    a.click();
                                    a.remove();
                                } else {
                                    alert('Erro ao gerar PDF');
                                }
                            } catch (e) {
                                console.error(e);
                                alert('Erro de conexão');
                            }
                        }}
                        className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-lg transition-colors text-sm font-bold flex items-center gap-2 border border-zinc-700"
                    >
                        <Download size={16} /> Exportar PDF
                    </button>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors text-sm font-bold"
                    >
                        Nova Análise
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

