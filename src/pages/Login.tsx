import { Link, useNavigate } from 'react-router-dom';

import { Github, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const form = e.target as HTMLFormElement;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value; // Actually username field in backend, let's assume email is username for now or we change input type? Backend expects 'username'. Let's ask user to input username or just map email to username if we want. But the backend auth generic view usually expects 'username'. Let's check backend/core/serializers.py UserSerializer. It has 'username'.
        // Wait, standard DRF ObtainAuthToken expects 'username' and 'password'.
        // In the form below, the label says "Email".
        // I should change the input name to username or handle email-as-username in backend.
        // For simplicity, let's treat the input as username for now, or just pass it as username.
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;

        try {
            await login(email, password); // Passing email as username
            navigate('/dashboard');
        } catch (err: any) {
            console.error(err);
            setError("Credenciais inválidas. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">Bem-vindo de volta</h1>
                <p className="text-zinc-500 text-sm">Acesse sua conta para continuar validando ideias.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
                {error && <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg text-rose-400 text-sm">{error}</div>}
                <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Username</label>
                    <input
                        name="email"
                        type="text"
                        defaultValue="demo_user"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="seu_usuario"
                        disabled={isLoading}
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Password</label>
                    <input
                        name="password"
                        type="password"
                        defaultValue="password123"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="••••••••"
                        disabled={isLoading}
                    />
                </div>

                <button disabled={isLoading} className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-lg font-bold transition-all shadow-lg shadow-indigo-600/20 flex justify-center items-center">
                    {isLoading ? <Loader2 className="animate-spin" size={20} /> : "Entrar"}
                </button>
            </form>

            <div className="my-6 flex items-center gap-4 before:h-px before:flex-1 before:bg-zinc-800 after:h-px after:flex-1 after:bg-zinc-800">
                <span className="text-xs text-zinc-500 font-medium">OU</span>
            </div>

            <button className="w-full py-2.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 mb-3">
                <Github size={18} /> Continuar com GitHub
            </button>
            <button className="w-full py-2.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 mb-6">
                <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26-.19-.58z" /><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                Continuar com Google
            </button>

            <p className="text-center text-xs text-zinc-500">
                Não tens conta? <Link to="/signup" className="text-indigo-400 hover:text-indigo-300 font-bold">Criar conta</Link>
            </p>
        </>
    )
}
