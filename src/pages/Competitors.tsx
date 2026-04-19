import { ArrowUpRight, Check, ExternalLink, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnalysisService, type SearchQueryData } from '../services/analysis';
import { Skeleton } from '../components/ui/Skeleton';

export default function Competitors() {
    const [latestAnalysis, setLatestAnalysis] = useState<SearchQueryData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AnalysisService.getHistory()
            .then(data => {
                if (data && data.length > 0) {
                    setLatestAnalysis(data[0]);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch competitors", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-4 w-64 mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => <Skeleton key={i} className="h-64 rounded-2xl" />)}
                </div>
            </div>
        );
    }

    if (!latestAnalysis) {
        return (
            <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 flex flex-col items-center justify-center h-[60vh]">
                <AlertCircle size={48} className="text-zinc-600 mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">Sem Dados Recentes</h2>
                <p className="text-zinc-500">Corra uma nova análise para ver as estatísticas dos concorrentes.</p>
            </div>
        );
    }

    const competitors = latestAnalysis.result?.competitors || [];
    const fallbackCompetitors = competitors.length > 0 ? competitors : [
        { name: "Exemplo Competidor 1", metrics: { sentiment: 0.1 }, url: "https://example.com/1" },
        { name: "Exemplo Competidor 2", metrics: { sentiment: -0.5 }, url: "https://example.com/2" },
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Competidores</h1>
                    <p className="text-zinc-500">
                        Análise extraída da busca: <span className="text-indigo-400 font-bold">"{latestAnalysis.niche}"</span>
                    </p>
                </div>
                <button className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-bold text-zinc-400 hover:text-white transition-colors">
                    Exportar Relatório
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fallbackCompetitors.map((comp: any, i: number) => {
                    const sentimentScore = Math.round((comp.metrics?.sentiment || 0) * 100);
                    
                    return (
                        <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 group hover:border-indigo-500/30 transition-all">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-lg font-bold text-zinc-500 uppercase">
                                    {comp.name[0] || '?'}
                                </div>
                                <a href={comp.url.startsWith('http') ? comp.url : `https://${comp.url}`} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                    <ExternalLink size={18} />
                                </a>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 truncate" title={comp.name}>{comp.name}</h3>
                            <a href={comp.url.startsWith('http') ? comp.url : `https://${comp.url}`} className="text-xs text-indigo-400 hover:underline mb-6 block truncate max-w-[200px]" title={comp.url}>{comp.url}</a>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-zinc-950/50 rounded-lg border border-zinc-800/50">
                                    <span className="text-xs text-zinc-500 font-medium">Recepção (Sentiment UX)</span>
                                    <span className={`text-sm font-bold ${sentimentScore > 20 ? 'text-emerald-500' : sentimentScore < -20 ? 'text-rose-500' : 'text-zinc-300'}`}>
                                        {sentimentScore}%
                                    </span>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <Check size={12} className="text-emerald-500" />
                                        <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">A extrair SEO...</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs text-zinc-500">Overlap: <span className="text-white">Medium</span></span>
                                <button className="text-xs font-bold text-indigo-400 flex items-center gap-1">Ver Detalhes <ArrowUpRight size={12} /></button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
