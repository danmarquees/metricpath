import { ArrowRight, Calendar, Search } from 'lucide-react';
import { cn } from '../lib/utils';

export default function History() {
    const historyData = [
        { query: "SaaS de automação para criadores", date: "Há 2 horas", score: 82, status: "Viável", users: "12k/mês" },
        { query: "CRM para Dentistas", date: "Ontem, 14:30", score: 45, status: "Arriscado", users: "3.5k/mês" },
        { query: "AI Headshot Generator", date: "12 Fev", score: 91, status: "Oportunidade", users: "450k/mês" },
        { query: "App de Gestão Financeira Pessoal", date: "10 Fev", score: 22, status: "Saturado", users: "2.1M/mês" },
        { query: "Plugin WordPress de SEO", date: "08 Fev", score: 67, status: "Moderado", users: "85k/mês" },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Oportunidade": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
            case "Viável": return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
            case "Moderado": return "bg-amber-500/10 text-amber-400 border-amber-500/20";
            case "Arriscado": return "bg-orange-500/10 text-orange-400 border-orange-500/20";
            case "Saturado": return "bg-rose-500/10 text-rose-400 border-rose-500/20";
            default: return "bg-zinc-800 text-zinc-400";
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
                            <th className="p-6 text-xs font-bold text-zinc-500 uppercase tracking-wider">Ideia / Query</th>
                            <th className="p-6 text-xs font-bold text-zinc-500 uppercase tracking-wider">Data</th>
                            <th className="p-6 text-xs font-bold text-zinc-500 uppercase tracking-wider">Demanda Est.</th>
                            <th className="p-6 text-xs font-bold text-zinc-500 uppercase tracking-wider">Score</th>
                            <th className="p-6 text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</th>
                            <th className="p-6 text-xs font-bold text-zinc-500 uppercase tracking-wider text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                        {historyData.map((item, i) => (
                            <tr key={i} className="group hover:bg-zinc-900/50 transition-colors">
                                <td className="p-6">
                                    <span className="font-bold text-white block mb-1">{item.query}</span>
                                    <span className="text-xs text-zinc-500">ID: #{Math.floor(Math.random() * 10000)}</span>
                                </td>
                                <td className="p-6 text-sm text-zinc-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} /> {item.date}
                                    </div>
                                </td>
                                <td className="p-6 text-sm text-white font-mono">{item.users}</td>
                                <td className="p-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-2 bg-zinc-800 rounded-full overflow-hidden">
                                            <div
                                                className={cn("h-full rounded-full", item.score > 70 ? 'bg-indigo-500' : item.score > 40 ? 'bg-amber-500' : 'bg-rose-500')}
                                                style={{ width: `${item.score}%` }}
                                            />
                                        </div>
                                        <span className="text-xs font-bold text-white">{item.score}</span>
                                    </div>
                                </td>
                                <td className="p-6">
                                    <span className={cn("px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border", getStatusColor(item.status))}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="p-6 text-right">
                                    <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                                        <ArrowRight size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="p-4 border-t border-zinc-800 bg-zinc-900/30 flex justify-center">
                    <button className="text-xs font-bold text-zinc-500 hover:text-white transition-colors">Carregar mais</button>
                </div>
            </div>
        </div>
    )
}
