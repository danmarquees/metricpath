import { TrendingUp } from 'lucide-react';
import { TrendChart } from '../components/dashboard/TrendChart';

export default function Trends() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Tendências de Mercado</h1>
                    <p className="text-zinc-500">Categorias SaaS com maior crescimento em 2024.</p>
                </div>
                <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800">
                    <button className="px-4 py-1.5 text-xs font-bold bg-zinc-800 text-white rounded-md shadow-sm">Software</button>
                    <button className="px-4 py-1.5 text-xs font-bold text-zinc-500 hover:text-white transition-colors">E-commerce</button>
                    <button className="px-4 py-1.5 text-xs font-bold text-zinc-500 hover:text-white transition-colors">Creator Economy</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {["Micro-Learning Platforms", "AI Video Generators", "Niche CRMs", "Telegram Automation"].map((category, i) => (
                    <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                                    <TrendingUp size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">{category}</h3>
                                    <span className="text-xs text-emerald-400 font-bold">+124% YoY</span>
                                </div>
                            </div>
                        </div>
                        <TrendChart />
                        <div className="mt-6 flex gap-2">
                            {["SaaS", "B2B", "Low-Code"].map((tag, j) => (
                                <span key={j} className="px-2 py-1 bg-zinc-950 rounded text-[10px] font-medium text-zinc-500 border border-zinc-800">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
