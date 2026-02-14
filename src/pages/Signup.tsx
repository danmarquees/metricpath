import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/layout/AuthLayout';
import { ArrowRight, Github, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value; // Actually mapping to username
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;

        try {
            await register(name, email, password); // Name as username
            setLoading(false);
            setStep(2);
        } catch (err) {
            console.error(err);
            setError("Falha ao criar conta. Tente outro email/username.");
            setLoading(false);
        }
    };

    const handleOnboarding = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call for onboarding preference saving
        setTimeout(() => {
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <AuthLayout
            title={step === 1 ? "Criar Conta" : "Personalize sua Experiência"}
            subtitle={step === 1 ? "Comece a validar suas ideias hoje mesmo." : "Nos ajude a entregar os melhores insights para você."}
        >
            {step === 1 ? (
                <>
                    <form onSubmit={handleSignup} className="space-y-4 animate-in fade-in slide-in-from-right-8 duration-500">
                        {error && <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg text-rose-400 text-sm">{error}</div>}
                        <div>
                            <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Nome de Usuário</label>
                            <input
                                name="name"
                                type="text"
                                required
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder="johndoe"
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder="seu@email.com"
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Password</label>
                            <input
                                name="password"
                                type="password"
                                required
                                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder="••••••••"
                                disabled={loading}
                            />
                            {/* Visual Strength Meter Placeholder */}
                            <div className="flex gap-1 mt-2">
                                <div className="h-1 flex-1 bg-emerald-500 rounded-full"></div>
                                <div className="h-1 flex-1 bg-emerald-500 rounded-full"></div>
                                <div className="h-1 flex-1 bg-emerald-500 rounded-full"></div>
                                <div className="h-1 flex-1 bg-zinc-800 rounded-full"></div>
                            </div>
                            <p className="text-[10px] text-zinc-500 mt-1">Senha forte ✨</p>
                        </div>

                        <div className="flex items-start gap-2">
                            <input type="checkbox" id="terms" className="mt-1 bg-zinc-950 border-zinc-800 rounded" required />
                            <label htmlFor="terms" className="text-xs text-zinc-400">
                                Concordo com os <a href="#" className="text-indigo-400 hover:underline">Termos de Uso</a> e <a href="#" className="text-indigo-400 hover:underline">Política de Privacidade</a>.
                            </label>
                        </div>

                        <button disabled={loading} className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-lg font-bold transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2">
                            {loading ? <Loader2 className="animate-spin" size={18} /> : "Criar Conta Grátis"}
                        </button>

                        <p className="text-center text-xs text-emerald-400 font-medium bg-emerald-400/10 py-2 rounded-lg border border-emerald-400/20">
                            🎁 Você ganhará 2 créditos de pesquisa ao confirmar o email.
                        </p>
                    </form>

                    <div className="my-6 flex items-center gap-4 before:h-px before:flex-1 before:bg-zinc-800 after:h-px after:flex-1 after:bg-zinc-800">
                        <span className="text-xs text-zinc-500 font-medium">OU</span>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full py-2.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                            <Github size={18} /> Registar com GitHub
                        </button>
                        <button className="w-full py-2.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26-.19-.58z" /><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                            Registar com Google
                        </button>
                    </div>

                    <p className="text-center text-xs text-zinc-500 mt-6">
                        Já tens conta? <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-bold">Entrar</Link>
                    </p>
                </>
            ) : (
                <form onSubmit={handleOnboarding} className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                    <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase mb-3">Qual seu perfil principal?</label>
                        <div className="grid grid-cols-1 gap-2">
                            {['Indie Hacker', 'Desenvolvedor Fullstack', 'Gerente de Produto', 'Marketing'].map((role) => (
                                <label key={role} className="flex items-center gap-3 p-3 border border-zinc-800 rounded-lg cursor-pointer hover:bg-zinc-900 transition-colors has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-500/10">
                                    <input type="radio" name="role" className="accent-indigo-500" />
                                    <span className="text-sm font-medium">{role}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase mb-3">Nível de Experiência</label>
                        <div className="flex gap-2">
                            {['Iniciante', 'Pleno', 'Expert'].map((level) => (
                                <label key={level} className="flex-1 text-center p-2 border border-zinc-800 rounded-lg cursor-pointer hover:bg-zinc-900 transition-colors has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-500/10">
                                    <input type="radio" name="level" className="hidden" />
                                    <span className="text-sm font-medium">{level}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">O que você pretende validar hoje?</label>
                        <input
                            type="text"
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="Ex: SaaS de gestão para Pet Shops..."
                        />
                    </div>

                    <button disabled={loading} className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-lg font-bold transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2">
                        {loading ? <Loader2 className="animate-spin" size={18} /> : <>Finalizar e Acessar Dashboard <ArrowRight size={18} /></>}
                    </button>
                </form>
            )}
        </AuthLayout>
    )
}
