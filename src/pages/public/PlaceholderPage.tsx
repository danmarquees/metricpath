
import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
    title: string;
    description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
    return (
        <>
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
                <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 border border-zinc-800 shadow-[0_0_30px_-10px_rgba(79,70,229,0.3)]">
                    <Construction className="text-indigo-500" size={32} />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
                <p className="text-zinc-500 max-w-lg mb-8">
                    {description || "Estamos trabalhando duro para trazer este conteúdo para você. Em breve, novidades por aqui."}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
                    Em Construção 🚧
                </div>
            </div>
        </>
    );
}
