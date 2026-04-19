import { ArrowRight, Calendar, Search, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { useEffect, useState } from 'react';
import { AnalysisService, type SearchQueryData } from '../services/analysis';
import { Link } from 'react-router-dom';
import { Skeleton } from '../components/ui/Skeleton';

export default function History() {
    const [history, setHistory] = useState<SearchQueryData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        AnalysisService.getHistory()
            .then(data => {
                setHistory(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch history", err);
                setError("Falha ao carregar o histórico.");
                setLoading(false);
            });
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "COMPLETED": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
            case "PROCESSING": return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
            case "PENDING": return "bg-amber-500/10 text-amber-400 border-amber-500/20";
            case "FAILED": return "bg-rose-500/10 text-rose-400 border-rose-500/20";
            default: return "bg-zinc-800 text-zinc-400";
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case "COMPLETED": return "Concluído";
            case "PROCESSING": return "Em Processo";
            case "PENDING": return "Pendente";
            case "FAILED": return "Falhou";
            default: return status;
        }
    };

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Histórico</h1>
                    <p className="text-zinc-500">Suas análises recentes de mercado.</p>
                </div>
                <div className="flex items-center gap-4 bg-zinc-900 p-1.5 rounded-xl border border-zinc-800">
                    <Search className="text-zinc-500 ml-2" size={16} />
                    <input
                        type="text"
                        placeholder="Filtrar histórico..."
                        className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-zinc-600 w-48"
                    />
                </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-zinc-800 bg-zinc-900/50">
                            <th className="p-6 text-xs font-bold text-zinc-500 uppercase tracking-wider">Nicho / Local</th>
                            <th className="p-6 text-xs font-bold text-zinc-500 uppercase tracking-wider">Data</th>
                            <th className="p-6 text-xs font-bold text-zinc-500 uppercase tracking-wider">Demanda (Vol)</th>
                            <th className="p-6 text-xs font-bold text-zinc-500 uppercase tracking-wider">Score IVM</th>
                            <th className="p-6 text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</th>
                            <th className="p-6 text-xs font-bold text-zinc-500 uppercase tracking-wider text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                        {loading ? (
                            [1, 2, 3].map(i => (
                                <tr key={i} className="bg-zinc-900/20">
                                    <td className="p-6"><Skeleton className="h-4 w-48 mb-2" /><Skeleton className="h-3 w-16" /></td>
                                    <td className="p-6"><Skeleton className="h-4 w-24" /></td>
                                    <td className="p-6"><Skeleton className="h-4 w-20" /></td>
                                    <td className="p-6"><Skeleton className="h-4 w-32" /></td>
                                    <td className="p-6"><Skeleton className="h-6 w-20 rounded-full" /></td>
                                    <td className="p-6"><Skeleton className="h-8 w-8 ml-auto rounded-lg" /></td>
                                </tr>
                            ))
                        ) : error ? (
                            <tr>
                                <td colSpan={6} className="p-8 text-center text-zinc-500">
                                    <div className="flex flex-col items-center gap-2">
                                        <AlertCircle className="text-rose-500" size={24} />
                                        <span>{error}</span>
                                    </div>
                                </td>
                            </tr>
                        ) : history.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="p-8 text-center text-zinc-500">
                                    Nenhuma análise encontrada. Tente iniciar uma nova validação.
                                </td>
                            </tr>
                        ) : (
                            history.map(item => {
                                const result = item.result;
                                const status = result?.status || "PENDING";
                                const ivm = result?.ivm_score || 0;
                                const date = new Date(item.created_at).toLocaleDateString() + ' ' + new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                                const volume = result?.raw_data?.serp?.search_volume || '--';
                                
                                return (
                                    <tr key={item.id} className="group hover:bg-zinc-900/50 transition-colors">
                                        <td className="p-6">
                                            <span className="font-bold text-white block mb-1">{item.niche}</span>
                                            <span className="text-xs text-zinc-500">{item.location} • ID: #{item.id}</span>
                                        </td>
                                        <td className="p-6 text-sm text-zinc-400">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} /> {date}
                                            </div>
                                        </td>
                                        <td className="p-6 text-sm text-white font-mono">{volume}</td>
                                        <td className="p-6">
                                            <div className="flex items-center gap-2">
                                                <div className="w-16 h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                    <div
                                                        className={cn("h-full rounded-full", ivm > 70 ? 'bg-emerald-500' : ivm > 40 ? 'bg-amber-500' : 'bg-rose-500')}
                                                        style={{ width: `${ivm}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs font-bold text-white">{ivm.toFixed(0)}</span>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border", getStatusColor(status))}>
                                                {getStatusText(status)}
                                            </span>
                                        </td>
                                        <td className="p-6 text-right">
                                            <Link to={`/report/${item.id}`} className="inline-flex p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                                                <ArrowRight size={18} />
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
                <div className="p-4 border-t border-zinc-800 bg-zinc-900/30 flex justify-center">
                    <button className="text-xs font-bold text-zinc-500 hover:text-white transition-colors">Carregar mais</button>
                </div>
            </div>
        </div>
    )
}
