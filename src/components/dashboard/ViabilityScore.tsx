import { BarChart3, Zap } from 'lucide-react';

export const ViabilityScore = () => (
    <div className="bg-zinc-900 border border-indigo-500/30 p-6 rounded-2xl relative overflow-hidden group shadow-xl h-full flex flex-col justify-between">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <BarChart3 size={80} />
        </div>

        <div>
            <h3 className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">Viability Score</h3>
            <div className="text-5xl font-black text-white tracking-tighter">
                82<span className="text-xl text-zinc-600 font-bold ml-1">/100</span>
            </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-400/10 w-fit px-2 py-1 rounded-full border border-emerald-400/20">
            <Zap size={12} fill="currentColor" />
            Alta Oportunidade
        </div>
    </div>
);
