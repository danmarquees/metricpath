import { ChevronRight, Globe, TrendingUp, Search, Shield, Layout, Target, Zap, LineChart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Features() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30 font-sans pb-20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-zinc-950 to-zinc-950 pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Zap size={12} fill="currentColor" />
                        Plataforma Completa
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        Recursos que dão superpoderes.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        Nossa suíte de ferramentas foi construída para eliminar o achismo. Valide demandas, descubra tendências ocultas e esmague a concorrência com dados táticos.
                    </p>
                </div>
            </section>

            {/* Core Features Overview */}
            <section className="py-20 px-6 border-t border-white/5 bg-zinc-900/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
                                <TrendingUp size={12} /> Viability Score™
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">A nota que define o sucesso.</h2>
                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                Nosso algoritmo analisa múltiplos pontos de dados (volume de pesquisa, saturação de concorrentes e sentimento do usuário) para gerar uma nota de 0 a 100 indicando a viabilidade de mercado do seu nicho.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Identifique nichos com baixa competição e alta demanda.",
                                    "Evite mercados saturados sem diferenciação clara.",
                                    "Obtenha projeções confiáveis baseadas em big data."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 bg-cyan-500/20 p-1 rounded-full text-cyan-400">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-zinc-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-[100px] opacity-50"></div>
                            <div className="relative bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="flex flex-col items-center justify-center py-10">
                                    <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" className="stroke-zinc-800" strokeWidth="8" fill="none" />
                                            <circle cx="50" cy="50" r="45" className="stroke-cyan-500" strokeWidth="8" fill="none" strokeDasharray="283" strokeDashoffset="42" strokeLinecap="round" />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-5xl font-black text-white">85</span>
                                            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mt-1">Excellent</span>
                                        </div>
                                    </div>
                                    <div className="w-full space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-zinc-500">Demanda (Search Volume)</span>
                                            <span className="text-white font-bold">92/100</span>
                                        </div>
                                        <div className="w-full bg-zinc-800 rounded-full h-1.5"><div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: '92%' }}></div></div>

                                        <div className="flex justify-between text-sm mt-4">
                                            <span className="text-zinc-500">Concorrência (Saturação)</span>
                                            <span className="text-white font-bold">65/100</span>
                                        </div>
                                        <div className="w-full bg-zinc-800 rounded-full h-1.5"><div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '65%' }}></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Search className="text-indigo-400" />, title: "Pesquisa em Profundidade", desc: "Varredura contínua de dezenas de fontes de dados, de motores de busca a fóruns no Reddit, para extrair o sentimento real do usuário." },
                            { icon: <Shield className="text-emerald-400" />, title: "Gap Discovery", desc: "A inteligência artificial do MetricPath lê milhares de reviews negativos de concorrentes para te mostrar exatamente o que falta no mercado." },
                            { icon: <Globe className="text-amber-400" />, title: "Mercados Globais", desc: "Não se limite ao seu idioma local. Descubra tendências que estão bombando lá fora e copie-as antes que cheguem aqui." },
                            { icon: <Target className="text-rose-400" />, title: "Definição de Persona", desc: "Saiba exatamente quem compra, suas dores e linguajar. Gere copies e perfis de audiência com um clique." },
                            { icon: <LineChart className="text-violet-400" />, title: "Track de Histórico", desc: "Acompanhe nichos ao longo de meses ou anos para determinar se é uma moda passageira ou um negócio perene." },
                            { icon: <Users className="text-blue-400" />, title: "Dados Demográficos", desc: "Inteligência sobre perfil, distribuição de idade e poder de compra da base de clientes do nicho validado." },
                        ].map((feature, i) => (
                            <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-800 transition-colors group">
                                <div className="mb-4 bg-zinc-950 w-12 h-12 rounded-lg flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-zinc-100">{feature.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard Mock */}
            <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <Layout size={12} /> Exportação White-Label
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Relatórios que vendem.</h2>
                        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                            Crie documentação instantânea para o seu próximo pitch. Precisa mostrar para um co-founder ou investidor por que esse nicho é lucrativo?
                        </p>
                        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                            Um clique gera um PDF rico em informações, gráficos impressionantes e argumentos sustentados por dados que você pode estampar com o logotipo da sua marca.
                        </p>
                        <Link to="/signup" className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                            Criar Conta e Ver um Exemplo <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 blur-[100px] opacity-40"></div>
                        <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                            {/* Faux Doc Viewer */}
                            <div className="bg-zinc-950 rounded-lg border border-zinc-800 overflow-hidden">
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                                    <div className="w-8 h-8 rounded bg-emerald-500/20 flex flex-col items-center justify-center">
                                        <span className="text-[8px] font-bold text-emerald-500">PDF</span>
                                    </div>
                                    <div>
                                        <div className="text-xs font-medium text-zinc-300">relatorio_mercado_pet.pdf</div>
                                        <div className="text-[10px] text-zinc-600">3.2 MB • 12 Páginas</div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="h-6 w-3/4 bg-zinc-900 rounded mb-4"></div>
                                    <div className="h-4 w-full bg-zinc-900/50 rounded mb-2"></div>
                                    <div className="h-4 w-5/6 bg-zinc-900/50 rounded mb-8"></div>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="h-24 bg-zinc-900 rounded"></div>
                                        <div className="h-24 bg-zinc-900 rounded"></div>
                                    </div>
                                    <div className="h-32 bg-zinc-900 rounded mb-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-8">Pare de programar ideias mortas.</h2>
                    <p className="text-xl text-zinc-400 mb-10">
                        Junte-se a milhares de builders que usam o MetricPath para focar no que dá lucro real. O tempo do seu teclado é valioso demais.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center justify-center gap-4">
                        <Link to="/signup" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] flex items-center gap-2">
                            Validar Minha Primeira Ideia Grátis <ChevronRight size={20} />
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-zinc-500">Nenhum cartão de crédito necessário no início.</p>
                </div>
            </section>
        </div>
    );
}

