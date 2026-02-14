import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { AIInsights } from '../components/dashboard/AIInsights';
import { MarketHeatmap } from '../components/dashboard/MarketHeatmap';
import { MetricCard } from '../components/dashboard/MetricCard';
import { SentimentFeed } from '../components/dashboard/SentimentFeed';
import { SubNicheBreakdown } from '../components/dashboard/SubNicheBreakdown';
import { TrendChart } from '../components/dashboard/TrendChart';
import { ViabilityScore } from '../components/dashboard/ViabilityScore';
import { Globe, Target, TrendingUp } from 'lucide-react';

export default function ReportView() {
    const { id } = useParams();

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link to="/history" className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-white mb-1">Análise #{id || '1234'}</h1>
                        <p className="text-zinc-500 text-sm">Gerado em 14 Fev, 2026 às 15:30</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-bold text-zinc-400 hover:text-white transition-colors">
                        <Download size={16} /> Exportar PDF
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-bold transition-colors shadow-lg shadow-indigo-600/20">
                        <Share2 size={16} /> Compartilhar
                    </button>
                </div>
            </div>

            {/* Reusing Dashboard Components for Consistency */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ViabilityScore />
                <MetricCard title="Buscas Globais" value="84k/mês" change="+8%" isPositive={true} icon={Globe} />
                <MetricCard title="Dificuldade SEO" value="Alta" change="+12%" isPositive={false} icon={TrendingUp} />
                <MetricCard title="CPM Estimado" value="R$ 12,50" change="-1%" isPositive={true} icon={Target} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
                        <h2 className="text-xl font-bold text-white mb-8">Tendência de Demanda</h2>
                        <TrendChart />
                    </div>
                    <SubNicheBreakdown />
                </div>
                <div className="space-y-8">
                    <MarketHeatmap />
                    <AIInsights />
                    <SentimentFeed />
                </div>
            </div>
        </div>
    )
}
