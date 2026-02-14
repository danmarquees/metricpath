import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-indigo-900 mb-4 tracking-tighter">
                404
            </h1>
            <h2 className="text-2xl font-bold text-white mb-6">Falha na Matrix</h2>
            <p className="text-zinc-500 max-w-md mb-8">
                A página que você procura não existe ou foi removida da realidade simulada.
            </p>
            <Link to="/dashboard" className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-lg font-bold hover:bg-zinc-200 transition-colors">
                <Home size={18} /> Voltar ao Início
            </Link>
        </div>
    )
}
