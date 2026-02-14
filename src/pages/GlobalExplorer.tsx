import { Globe, Map, TrendingUp } from 'lucide-react';


export default function GlobalExplorer() {
    const regions = [
        { name: "North America", growth: "+12%", volume: "High", opportunity: "Medium", markets: ["USA", "Canada"] },
        { name: "Latin America", growth: "+28%", volume: "Medium", opportunity: "High", markets: ["Brazil", "Mexico"] },
        { name: "Europe", growth: "+8%", volume: "High", opportunity: "Low", markets: ["UK", "Germany", "France"] },
        { name: "Asia Pacific", growth: "+34%", volume: "High", opportunity: "Very High", markets: ["India", "Indonesia", "Vietnam"] },
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Global Explorer</h1>
                    <p className="text-zinc-500">Identifique oportunidades geográficas para o seu produto.</p>
                </div>
                <div className="bg-zinc-900 px-4 py-2 rounded-lg border border-zinc-800 flex items-center gap-2 text-zinc-400">
                    <Globe size={16} />
                    <span className="text-sm font-medium">World Map View</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 flex items-center justify-center min-h-[400px] relative overflow-hidden group">
                    {/* Abstract Map Placeholder */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950 to-zinc-950" />
                    <Map size={64} className="text-zinc-700 mb-4" />
                    <p className="text-zinc-500 font-medium z-10 relative">Map Visualization Placeholder</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <TrendingUp size={18} className="text-emerald-500" />
                        Top Regiões em Crescimento
                    </h3>
                    {regions.map((region, i) => (
                        <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-800/50 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{region.name}</h4>
                                <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2 py-1 rounded border border-emerald-500/20">{region.growth}</span>
                            </div>

                            <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 mb-4">
                                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Vol: {region.volume}</span>
                                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Opp: {region.opportunity}</span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {region.markets.map((market, j) => (
                                    <span key={j} className="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-[10px] text-zinc-400">
                                        {market}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
