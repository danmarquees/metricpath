import { Globe, Search, Target, TrendingUp } from 'lucide-react';
import { AIInsights } from '../components/dashboard/AIInsights';
import { MarketHeatmap } from '../components/dashboard/MarketHeatmap';
import { MetricCard } from '../components/dashboard/MetricCard';
import { SentimentFeed } from '../components/dashboard/SentimentFeed';
import { SubNicheBreakdown } from '../components/dashboard/SubNicheBreakdown';
import { TrendChart } from '../components/dashboard/TrendChart';
import { ViabilityScore } from '../components/dashboard/ViabilityScore';

export default function Dashboard() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Page Header */}
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Market Intelligence</h1>
                    <p className="text-zinc-500 flex items-center gap-2 text-sm">
                        <Search size={14} className="text-indigo-400" />
                        Análise: <span className="text-zinc-300 font-medium">"SaaS de automação para criadores de curso"</span>
                    </p>
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-bold text-zinc-400 hover:text-white transition-colors hover:border-zinc-700">Exportar PDF</button>
                    <button className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-bold text-zinc-400 hover:text-white transition-colors hover:border-zinc-700">Partilhar</button>
                </div>
            </div>

            {/* Top Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ViabilityScore />
                <MetricCard title="Buscas Globais" value="124k/mês" change="+12%" isPositive={true} icon={Globe} />
                <MetricCard title="Dificuldade SEO" value="Média" change="-5%" isPositive={true} icon={TrendingUp} />
                <MetricCard title="CPM Estimado" value="R$ 4,20" change="+2%" isPositive={false} icon={Target} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Column */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Interest Chart */}
                    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-xl font-bold text-white">Interesse no Tempo</h2>
                                <p className="text-sm text-zinc-500">Volume de pesquisa acumulado nos últimos 12 meses</p>
                            </div>
                            <div className="flex bg-zinc-950 p-1 rounded-lg border border-zinc-800">
                                <button className="px-3 py-1 text-[10px] font-bold bg-zinc-800 text-white rounded-md shadow-sm">Ano</button>
                                <button className="px-3 py-1 text-[10px] font-bold text-zinc-500 hover:text-white transition-colors">Mês</button>
                            </div>
                        </div>
                        <TrendChart />
                    </div>

                    {/* Sub-Niche Breakdown */}
                    <SubNicheBreakdown />
                </div>

                {/* Side Column */}
                <div className="space-y-8">
                    {/* Heatmap Widget */}
                    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
                        <h3 className="text-lg font-bold text-white mb-2">Heatmap de Saturação</h3>
                        <p className="text-xs text-zinc-500 mb-6">Frequência de novos competidores vs. Demanda</p>
                        <MarketHeatmap />
                        <div className="mt-6 flex items-center justify-between text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                            <span>Livre</span>
                            <div className="flex-1 mx-4 h-1 bg-gradient-to-r from-indigo-900/20 via-indigo-500 to-indigo-950/20 rounded-full" />
                            <span>Saturado</span>
                        </div>
                    </div>

                    <AIInsights />
                    <SentimentFeed />
                </div>
            </div>
        </div>
    );
}
