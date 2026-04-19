import { cn } from '../../lib/utils';

interface MarketHeatmapProps {
    competitors?: any[];
}

export const MarketHeatmap = ({ competitors = [] }: MarketHeatmapProps) => {
    // Determine base saturation from actual competitor count
    const saturationBoost = competitors.length > 0 ? (competitors.length / 10) : 0;
    
    return (
        <div className="grid grid-cols-4 gap-2 h-48">
            {[...Array(16)].map((_, i) => {
                // Simulated intensity values mixed with actual competition weight
                let intensity = [0.1, 0.3, 0.6, 0.2, 0.8, 0.4, 0.9, 0.5, 0.3, 0.7, 0.2, 0.5, 0.4, 0.1, 0.6, 0.3][i];
                if (competitors.length > 0) {
                    intensity = Math.min(1, intensity + saturationBoost * Math.random());
                }
                return (
                    <div
                        key={i}
                        className={cn(
                            "rounded-md border border-zinc-800 transition-transform hover:scale-105 cursor-help group relative",
                            "hover:border-indigo-500/50"
                        )}
                        style={{ backgroundColor: `rgba(79, 70, 229, ${intensity})` }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-zinc-950/90 text-[10px] font-bold text-white transition-opacity backdrop-blur-sm rounded-md">
                            Score: {Math.round(intensity * 100)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
