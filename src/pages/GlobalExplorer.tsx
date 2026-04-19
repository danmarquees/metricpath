import { Globe, Clock } from 'lucide-react';

export default function GlobalExplorer() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 h-[80vh] flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                <Globe size={40} />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Global Explorer</h1>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-8">
                Um mapa interativo de saturação mundial. Descubra oceanos azuis em dezenas de países explorando a assimetria entre demanda e oferta local.
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-500 font-bold uppercase tracking-wider text-sm">
                <Clock size={16} /> Em Breve
            </div>
        </div>
    )
}
