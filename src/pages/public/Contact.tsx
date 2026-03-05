import { useState } from 'react';
import { Mail, Briefcase, MessageSquare, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Emulate sending a message
        setTimeout(() => {
            setIsSubmitted(true);
        }, 600);
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-indigo-500/30 pb-24">

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden border-b border-white/5 bg-zinc-950">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                        Como podemos ajudar?
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl">
                        Suporte técnico, parcerias ou dúvidas sobre inteligência de mercado. Nossa equipe de engenharia e produto responde rápido e sem burocracia.
                    </p>
                </div>
            </section>

            {/* Main Content: Two Columns */}
            <section className="py-16 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Contact Methods */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8">Canais de Atendimento</h2>

                        <div className="space-y-6">

                            {/* Method 1: Support */}
                            <a href="mailto:suporte@metricpath.com" className="flex items-start gap-5 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-700 transition-colors group">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Suporte Técnico</h3>
                                    <p className="text-sm text-zinc-400 mb-2">Dúvidas sobre a plataforma, cobranças ou relatórios.</p>
                                    <p className="text-indigo-400 font-medium text-sm">suporte@metricpath.com</p>
                                </div>
                            </a>

                            {/* Method 2: Enterprise/Sales */}
                            <a href="mailto:founders@metricpath.com" className="flex items-start gap-5 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-700 transition-colors group">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Vendas & Enterprise</h3>
                                    <p className="text-sm text-zinc-400 mb-2">Acesso API em massa, integrações B2B ou planos customizados.</p>
                                    <p className="text-emerald-400 font-medium text-sm">founders@metricpath.com</p>
                                </div>
                            </a>

                            {/* Method 3: Community */}
                            <a href="#" className="flex items-start gap-5 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-700 transition-colors group">
                                <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 group-hover:bg-rose-500/20 transition-colors">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Comunidade VIP</h3>
                                    <p className="text-sm text-zinc-400 mb-2">Troque ideia com outros founders e acompanhe as novidades.</p>
                                    <p className="text-rose-400 font-medium text-sm">Acessar Discord &rarr;</p>
                                </div>
                            </a>

                        </div>

                        {/* Response Time Badge */}
                        <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium">
                            <Clock size={16} className="text-indigo-400" />
                            Tempo médio de resposta: <span className="text-white">~2 horas</span>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500/5 blur-[50px] rounded-[3rem] pointer-events-none" />

                        <div className="relative bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 shadow-2xl">

                            {isSubmitted ? (
                                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 mx-auto">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Mensagem Enviada!</h3>
                                    <p className="text-zinc-400 max-w-sm mx-auto mb-8">
                                        Recebemos o seu contato. Nossa equipe vai ler e responder o mais rápido possível no e-mail informado.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="px-6 py-2 rounded-xl bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors"
                                    >
                                        Enviar outra mensagem
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold mb-6">Mande uma mensagem</h2>

                                    <form onSubmit={handleSubmit} className="space-y-5">

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            {/* Name Input */}
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="block text-sm font-medium text-zinc-400">Nome completo</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    required
                                                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                                                    placeholder="Seu nome"
                                                />
                                            </div>

                                            {/* Email Input */}
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="block text-sm font-medium text-zinc-400">E-mail corporativo</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required
                                                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                                                    placeholder="seu@dominio.com"
                                                />
                                            </div>
                                        </div>

                                        {/* Subject Dropdown */}
                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="block text-sm font-medium text-zinc-400">Assunto</label>
                                            <select
                                                id="subject"
                                                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                                            >
                                                <option value="support">Suporte Técnico</option>
                                                <option value="sales">Vendas & Enterprise</option>
                                                <option value="bug">Reportar um Bug / Erro</option>
                                                <option value="other">Outro Assunto</option>
                                            </select>
                                        </div>

                                        {/* Message Textarea */}
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="block text-sm font-medium text-zinc-400">Sua mensagem</label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={5}
                                                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans resize-none"
                                                placeholder="Como podemos te ajudar hoje?"
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                className="w-full px-8 py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
                                            >
                                                Enviar Mensagem <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}

