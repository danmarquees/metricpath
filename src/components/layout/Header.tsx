import { Bell, Plus, Search } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
    const [search, setSearch] = useState("");

    return (
        <header className="h-20 border-b border-zinc-800 flex items-center justify-between px-8 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                    <input
                        type="text"
                        placeholder="Validar nova ideia (ex: AI Headshot Generator)..."
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all text-zinc-200 placeholder:text-zinc-600"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="hidden md:flex flex-col text-right mr-4">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Server Status</span>
                    <span className="text-xs text-emerald-400 font-medium flex items-center gap-1 justify-end">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-slow" /> Operacional
                    </span>
                </div>
                <button className="p-2 text-zinc-400 hover:text-white transition-colors relative bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700">
                    <Bell size={18} />
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40">
                    <Plus size={16} /> Analisar
                </button>
            </div>
        </header>
    );
};
