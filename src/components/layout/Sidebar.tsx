import { BarChart3, Globe, History, LayoutDashboard, LogOut, Search, Settings, Target, TrendingUp } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

export const Sidebar = () => (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col h-screen fixed left-0 top-0 overflow-y-auto">
        <div className="p-6 flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                <BarChart3 className="text-white w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">MetricPath</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
            {[
                { icon: <LayoutDashboard size={18} />, label: "Dashboard", href: "/dashboard" },
                { icon: <Search size={18} />, label: "Nova Análise", href: "/new-analysis" },
                { icon: <History size={18} />, label: "Histórico", href: "/history" },
                { icon: <Target size={18} />, label: "Competidores", href: "/competitors" },
                { icon: <TrendingUp size={18} />, label: "Tendências", href: "/trends" },
                { icon: <Globe size={18} />, label: "Global Explorer", href: "/global-explorer" },
            ].map((item, i) => (
                <NavLink
                    key={i}
                    to={item.href}
                    className={({ isActive }) => cn(
                        "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        isActive
                            ? 'bg-zinc-900 text-white border border-zinc-800 shadow-sm'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                    )}
                >
                    {item.icon}
                    {item.label}
                </NavLink>
            ))}
        </nav>

        <div className="p-4 mt-auto border-t border-zinc-800">
            <div className="mb-4 p-3 bg-indigo-600/5 border border-indigo-500/20 rounded-xl">
                <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Limite de Créditos</p>
                    <p className="text-[10px] text-zinc-500">15 / 20</p>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-indigo-500" />
                </div>
            </div>

            <NavLink
                to="/settings"
                className={({ isActive }) => cn(
                    "w-full flex items-center gap-3 px-4 py-2 text-sm font-medium transition-colors rounded-lg mb-1",
                    isActive ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                )}
            >
                <Settings size={18} />
                Configurações
            </NavLink>

            <NavLink
                to="/login"
                className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-rose-400 transition-colors hover:bg-rose-500/10 rounded-lg"
            >
                <LogOut size={18} />
                Sair
            </NavLink>

            <div className="mt-4 flex items-center gap-3 px-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500" />
                <div className="flex-1">
                    <p className="text-xs font-bold text-white leading-none">Indie Maker</p>
                    <p className="text-[10px] text-zinc-500 mt-1">Plano Pro</p>
                </div>
            </div>
        </div>
    </aside>
);
