import { ArrowDownRight, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface MetricCardProps {
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
    icon: LucideIcon;
}

export const MetricCard = ({ title, value, change, isPositive, icon: Icon }: MetricCardProps) => (
    <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-zinc-700 transition-colors group">
        <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-zinc-950 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                <Icon size={16} className="text-indigo-400" />
            </div>
            <div className={cn(
                "flex items-center gap-0.5 text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-950 border border-zinc-800",
                isPositive ? 'text-emerald-400 border-emerald-900/30' : 'text-rose-400 border-rose-900/30'
            )}>
                {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {change}
            </div>
        </div>
        <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">{title}</h3>
        <div className="text-2xl font-bold text-white">{value}</div>
    </div>
);
