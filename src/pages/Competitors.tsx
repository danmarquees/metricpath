import { ArrowUpRight, Check, ExternalLink, X } from 'lucide-react';

export default function Competitors() {
    const competitors = [
        { name: "Teachable", marketShare: "35%", strength: "Brand Authority", weakness: "Mobile UX", url: "teachable.com" },
        { name: "Kajabi", marketShare: "22%", strength: "All-in-one", weakness: "Pricing", url: "kajabi.com" },
        { name: "Thinkific", marketShare: "18%", strength: "Customization", weakness: "Learning Curve", url: "thinkific.com" },
        { name: "Gumroad", marketShare: "12%", strength: "Simplicity", weakness: "Features", url: "gumroad.com" },
        { name: "Podia", marketShare: "8%", strength: "Creator Friendly", weakness: "Integrations", url: "podia.com" },
        { name: "Hotmart", marketShare: "5%", strength: "LatAm Market", weakness: "Fees", url: "hotmart.com" },
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Competidores</h1>
                    <p className="text-zinc-500">Análise detalhada dos principais players no nicho "Course Platforms".</p>
                </div>
                <button className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-bold text-zinc-400 hover:text-white transition-colors">
                    Exportar Relatório
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {competitors.map((comp, i) => (
                    <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 group hover:border-indigo-500/30 transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-lg font-bold text-zinc-500">
                                {comp.name[0]}
                            </div>
                            <a href={`https://${comp.url}`} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                <ExternalLink size={18} />
                            </a>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1">{comp.name}</h3>
                        <a href={`https://${comp.url}`} className="text-xs text-indigo-400 hover:underline mb-6 block">{comp.url}</a>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-zinc-950/50 rounded-lg border border-zinc-800/50">
                                <span className="text-xs text-zinc-500 font-medium">Market Share</span>
                                <span className="text-sm font-bold text-white">{comp.marketShare}</span>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Check size={12} className="text-emerald-500" />
                                    <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Ponto Forte</span>
                                </div>
                                <p className="text-sm text-zinc-300 pl-5">{comp.strength}</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <X size={12} className="text-rose-500" />
                                    <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Ponto Fraco</span>
                                </div>
                                <p className="text-sm text-zinc-300 pl-5">{comp.weakness}</p>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs text-zinc-500">Overlap: <span className="text-white">High</span></span>
                            <button className="text-xs font-bold text-indigo-400 flex items-center gap-1">Ver Detalhes <ArrowUpRight size={12} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
