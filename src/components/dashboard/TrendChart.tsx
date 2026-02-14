export const TrendChart = () => (
    <div className="w-full h-48 mt-4 flex items-end gap-2 px-2">
        {[40, 60, 45, 70, 85, 60, 95, 100, 80, 75, 90, 110].map((h, i) => (
            <div key={i} className="flex-1 group relative flex flex-col justify-end h-full">
                <div
                    className="bg-zinc-800/50 group-hover:bg-indigo-500 transition-all rounded-t-sm relative overflow-hidden"
                    style={{ height: `${(h / 120) * 100}%` }}
                >
                    <div className="absolute inset-x-0 bottom-0 h-full w-full bg-indigo-500/10" />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800 text-white text-[10px] px-2 py-1 rounded font-bold shadow-xl z-10 whitespace-nowrap border border-zinc-700">
                    {h}k buscas
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-zinc-800" />
                </div>
            </div>
        ))}
    </div>
);
