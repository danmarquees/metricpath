import { Layers } from 'lucide-react';

export const SubNicheBreakdown = () => (
    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl h-full">
        <div className="flex items-center gap-2 mb-6">
            <Layers size={18} className="text-indigo-400" />
            <h2 className="text-xl font-bold text-white">Breakdown de Sub-Nichos</h2>
        </div>
        <div className="space-y-6">
            {[
                { label: "Automação via Telegram", volume: "42k", growth: "+22%", score: 92 },
                { label: "Módulos de Micro-learning", volume: "28k", growth: "+15%", score: 78 },
                { label: "Dashboards Whitelabel", volume: "15k", growth: "+8%", score: 64 },
            ].map((niche, i) => (
                <div key={i} className="group cursor-default">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{niche.label}</span>
                        <span className="text-xs font-mono text-indigo-400">{niche.score} pts</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-950 rounded-full border border-zinc-800 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-500 ease-out"
                            style={{ width: `${niche.score}%` }}
                        />
                    </div>
                    <div className="flex gap-4 mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Volume: {niche.volume}</span>
                        <span className="text-[10px] text-emerald-500 uppercase tracking-tighter">Growth: {niche.growth}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
