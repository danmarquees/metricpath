import { type ReactNode } from "react";
import { BarChart3 } from "lucide-react";

export const AuthLayout = ({ children, title, subtitle }: { children: ReactNode, title: string, subtitle: string }) => (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-md bg-zinc-900/80 border border-zinc-800 p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative z-10">
            <div className="flex justify-center mb-8">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                    <BarChart3 className="text-white w-7" />
                </div>
            </div>

            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
                <p className="text-zinc-500 text-sm">{subtitle}</p>
            </div>

            {children}
        </div>
    </div>
);
