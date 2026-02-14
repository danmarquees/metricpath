import { BarChart3, Check, ChevronRight, Globe, Layout, Search, Shield, TrendingUp, Zap, MessageSquare, Code2, Star, Target, X, Terminal, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                            <BarChart3 className="text-white w-5" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">MetricPath</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Login</Link>
                        <Link to="/signup" className="px-4 py-2 bg-white text-zinc-950 text-sm font-bold rounded-full hover:bg-zinc-200 transition-colors">
                            Começar Grátis
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-zinc-950 to-zinc-950 pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Zap size={12} fill="currentColor" />
                        Nova Era de Market Intelligence
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        Valide sua próxima ideia de SaaS em segundos.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        MetricPath elimina o "achismo". Analise demanda, competição e tendências de mercado com dados reais antes de escrever uma linha de código.
                    </p>
                    <div className="max-w-xl mx-auto mb-10 relative group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-2 shadow-2xl">
                            <Search className="text-zinc-500 ml-3 mr-3" size={20} />
                            <input
                                type="text"
                                placeholder="Ex: SaaS de gestão para Pet Shops..."
                                className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-zinc-500 focus:outline-none"
                            />
                            <Link to="/signup" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md font-bold text-sm transition-all whitespace-nowrap">
                                Validar Agora
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                        <Link to="/signup" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] flex items-center gap-2">
                            Validar Minha Ideia <ChevronRight size={20} />
                        </Link>
                        <Link to="/features" className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-full font-bold text-lg transition-all">
                            Ver Demo
                        </Link>
                    </div>
                </div>

                {/* Dashboard Preview / Abstract Visual */}
                <div className="mt-20 max-w-6xl mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                    <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                        <img
                            src="/dashboard-preview.png"
                            alt="MetricPath Dashboard Preview"
                            className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* Data Transparency */}
            <section className="py-12 border-y border-white/5 bg-zinc-900/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-8">Powered by Real-Time Data Sources</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
                        <div className="flex items-center gap-2"><Globe size={18} className="text-blue-500" /><span className="font-mono font-bold text-zinc-300">Google APIs</span></div>
                        <div className="flex items-center gap-2"><MessageSquare size={18} className="text-orange-500" /><span className="font-mono font-bold text-zinc-300">Reddit Data</span></div>
                        <div className="flex items-center gap-2"><Code2 size={18} className="text-white" /><span className="font-mono font-bold text-zinc-300">GitHub Repos</span></div>
                        <div className="flex items-center gap-2"><Star size={18} className="text-yellow-500" /><span className="font-mono font-bold text-zinc-300">App Store Reviews</span></div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-10 border-b border-white/5 bg-zinc-900/30">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-zinc-500 text-sm font-medium mb-8">CONFIADO POR MAIS DE 2.000 INDIE HACKERS</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
                        {/* Mock Logos */}
                        {["Stripe", "Vercel", "Linear", "Raycast", "Supabase"].map((brand) => (
                            <span key={brand} className="text-xl font-bold font-mono text-white">{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Tudo que você precisa para validar.</h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Deixe de lado planilhas complexas e ferramentas caras de SEO. O MetricPath centraliza tudo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <TrendingUp className="text-indigo-400" />, title: "Análise de Tendências", desc: "Identifique nichos em crescimento antes que eles fiquem saturados." },
                            { icon: <Search className="text-cyan-400" />, title: "Volume de Busca", desc: "Dados reais de volume de pesquisa para medir a demanda do mercado." },
                            { icon: <Shield className="text-emerald-400" />, title: "Raio-X da Concorrência", desc: "Descubra quem são os grandes players e onde eles estão falhando." },
                            { icon: <Globe className="text-amber-400" />, title: "Global Explorer", desc: "Encontre oportunidades geográficas inexploradas para o seu produto." },
                            { icon: <BarChart3 className="text-rose-400" />, title: "Viability Score™", desc: "Nosso algoritmo proprietário que calcula a chance de sucesso da sua ideia." },
                            { icon: <Layout className="text-violet-400" />, title: "Relatórios Detalhados", desc: "Exporte PDFs profissionais para apresentar a sócios ou investidores." },
                        ].map((feature, i) => (
                            <div key={i} className="bg-zinc-900 border border-white/5 p-8 rounded-2xl hover:bg-zinc-800/50 transition-colors group">
                                <div className="mb-4 bg-zinc-950 w-12 h-12 rounded-lg flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gap Discovery */}
            <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <Target size={12} /> The Gap Discovery
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Encontre onde seus concorrentes falham.</h2>
                        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                            Não basta saber quem são seus concorrentes. O MetricPath analisa milhares de reviews e comentários para identificar reclamações recorrentes e oportunidades ocultas.
                        </p>
                        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl max-w-lg shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <div className="font-bold flex items-center gap-2 text-white"><div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div> Pontos Fracos Detectados</div>
                                <span className="text-xs font-bold text-rose-400 border border-rose-500/20 bg-rose-500/5 px-2 py-1 rounded">Crítico</span>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-800">
                                    <div className="text-rose-400 text-[10px] font-bold uppercase mb-2">Reclamação Frequente (78%)</div>
                                    <div className="text-sm italic text-zinc-300">"O suporte demora dias para responder e o app trava sempre no Android."</div>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/5">
                                <p className="text-xs text-zinc-500 uppercase font-bold mb-2">Sua Oportunidade</p>
                                <div className="flex gap-2">
                                    <span className="text-xs font-bold text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-2 py-1 rounded">Suporte 24/7</span>
                                    <span className="text-xs font-bold text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-2 py-1 rounded">Mobile First</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-indigo-500/20 blur-[100px] opacity-50"></div>
                        <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl transform md:rotate-3 transition-transform duration-700 hover:rotate-0">
                            <img src="/dashboard-preview.png" className="w-full opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Analysis" />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost of Inaction */}
            <section className="py-24 px-6 bg-zinc-900/20 border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Qual o custo do seu tempo?</h2>
                    <p className="text-zinc-400 text-lg">Desenvolver um produto que ninguém quer é o erro mais caro de um Indie Hacker.</p>
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-red-500/5 border border-red-500/10 p-10 rounded-3xl flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 text-red-500"><X size={32} /></div>
                        <h3 className="text-xl font-bold text-red-200 mb-2">O Caminho Tradicional</h3>
                        <div className="text-5xl font-bold text-white mb-4 tracking-tight">R$ 15k+</div>
                        <p className="text-zinc-500 text-sm mb-8 leading-relaxed max-w-xs">3 meses de desenvolvimento + custos de servidor + marketing para validar se a ideia funciona.</p>
                        <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden mb-2">
                            <div className="bg-red-500 w-[90%] h-full"></div>
                        </div>
                        <p className="text-xs text-red-500 font-bold uppercase tracking-wider">Alto Risco</p>
                    </div>
                    <div className="bg-emerald-500/5 border border-emerald-500/10 p-10 rounded-3xl flex flex-col items-center text-center relative overflow-hidden ring-1 ring-emerald-500/20">
                        <div className="absolute top-0 right-0 bg-emerald-500 text-zinc-950 text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">Smart Choice</div>
                        <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-500"><Check size={32} /></div>
                        <h3 className="text-xl font-bold text-emerald-200 mb-2">Com MetricPath</h3>
                        <div className="text-5xl font-bold text-white mb-4 tracking-tight">R$ 59</div>
                        <p className="text-zinc-400 text-sm mb-8 leading-relaxed max-w-xs">10 minutos de análise de dados reais para validar a demanda e a competição antes de codar.</p>
                        <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden mb-2">
                            <div className="bg-emerald-500 w-[10%] h-full"></div>
                        </div>
                        <p className="text-xs text-emerald-500 font-bold uppercase tracking-wider">Risco Minimizado</p>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-32 px-6 bg-zinc-900/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Simples e Transparente.</h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Comece grátis, faça upgrade quando escalar.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                        {/* Explorer Plan */}
                        <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl flex flex-col">
                            <h3 className="text-xl font-bold text-zinc-400 mb-2">Explorer</h3>
                            <div className="text-4xl font-bold mb-6">R$ 0<span className="text-lg text-zinc-500 font-normal">/mês</span></div>
                            <p className="text-zinc-500 text-sm mb-6">Para quem está começando e quer validar sem custo.</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {["2 Pesquisas Básicas/mês", "Volume de Busca & Score", "Acesso limitado ao dashboard"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                                        <Check size={18} className="text-zinc-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/signup" className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-bold text-center transition-colors">
                                Criar Conta Grátis
                            </Link>
                        </div>

                        {/* Indie Builder Plan */}
                        <div className="bg-zinc-900 border border-indigo-500/50 p-8 rounded-3xl flex flex-col relative overflow-hidden shadow-2xl shadow-indigo-900/20 transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                Mais Popular
                            </div>
                            <h3 className="text-xl font-bold text-indigo-400 mb-2">Indie Builder</h3>
                            <div className="text-4xl font-bold mb-6">R$ 59<span className="text-lg text-zinc-500 font-normal">/mês</span></div>
                            <p className="text-zinc-400 text-sm mb-6">O "Arroz com Feijão" para validar projetos reais.</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {["10 Pesquisas Profundas/mês", "Análise Qualitativa (Gaps)", "Sugestão de Tech Stack", "Comparação de Histórico"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white">
                                        <Check size={18} className="text-indigo-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/signup" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-center transition-colors shadow-lg shadow-indigo-600/20">
                                Assinar Indie
                            </Link>
                        </div>

                        {/* Growth Plan */}
                        <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl flex flex-col">
                            <h3 className="text-xl font-bold text-pink-400 mb-2">Growth</h3>
                            <div className="text-4xl font-bold mb-6">R$ 189<span className="text-lg text-zinc-500 font-normal">/mês</span></div>
                            <p className="text-zinc-500 text-sm mb-6">Para agências e serial builders.</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {["40 Pesquisas Profundas/mês", "Exportação White-Label (PDF)", "Alertas de Nicho", "API Access (Beta)"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                                        <Check size={18} className="text-pink-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/signup" className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-bold text-center transition-colors">
                                Assinar Growth
                            </Link>
                        </div>
                    </div>

                    {/* Add-ons Section */}
                    <div className="max-w-4xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold mb-2">Precisa de mais créditos?</h3>
                        <p className="text-zinc-400 mb-6">Compre pacotes avulsos sem precisar mudar de plano. O segredo da escala flexível.</p>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4 min-w-[250px]">
                                <div className="text-left">
                                    <div className="font-bold text-white">+5 Créditos</div>
                                    <div className="text-xs text-zinc-500">Boost Rápido</div>
                                </div>
                                <div className="text-xl font-bold text-indigo-400">R$ 29</div>
                            </div>
                            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4 min-w-[250px]">
                                <div className="text-left">
                                    <div className="font-bold text-white">+20 Créditos</div>
                                    <div className="text-xs text-zinc-500">Melhor Custo/Benefício</div>
                                </div>
                                <div className="text-xl font-bold text-indigo-400">R$ 89</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Developer Trust */}
            <section className="py-20 px-6 bg-zinc-950 border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-8">
                        <Terminal size={12} /> Built for Builders
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Construído com precisão.</h3>
                    <p className="text-zinc-500 mb-10 leading-relaxed">
                        Nossa stack utiliza Python e pipelines de dados distribuídos para garantir a máxima precisão no processamento de milhões de sinais de mercado.
                        Seus insights são criptografados e nunca compartilhados.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-zinc-500 font-mono text-xs">
                        <div className="flex items-center gap-2 hover:text-white transition-colors"><Shield size={14} /> Privacidade Garantida</div>
                        <div className="flex items-center gap-2 hover:text-white transition-colors"><Lock size={14} /> Criptografia AES-256</div>
                        <div className="flex items-center gap-2 hover:text-white transition-colors"><Zap size={14} /> Real-time Processing</div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/5 bg-[#05070A] pt-20 pb-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        {/* Brand & Micro-CTA */}
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                                    <BarChart3 className="text-white w-5" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">MetricPath</span>
                            </div>
                            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                                Inteligência de mercado para quem constrói o futuro. Valide suas ideias com dados, não com "achismos".
                            </p>
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-1.5 flex items-center">
                                <input
                                    type="email"
                                    placeholder="Seu melhor email..."
                                    className="bg-transparent border-none text-xs text-white placeholder-zinc-600 focus:ring-0 w-full px-2"
                                />
                                <button className="bg-white text-zinc-950 p-1.5 rounded-md hover:bg-zinc-200 transition-colors">
                                    <ChevronRight size={14} />
                                </button>
                            </div>
                            <p className="text-[10px] text-zinc-600 mt-2">Receba tendências de nichos validados.</p>
                        </div>

                        {/* Navigation Columns */}
                        <div>
                            <h4 className="font-bold text-white mb-6">Produto</h4>
                            <ul className="space-y-4 text-sm text-zinc-500">
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Recursos</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Preços</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">API Docs</a> <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded border border-indigo-500/20 ml-1">Beta</span></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Changelog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6">Recursos</h4>
                            <ul className="space-y-4 text-sm text-zinc-500">
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog: Validação</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Guia de Uso</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Glossário IVM</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Calculadora ROI</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6">Empresa</h4>
                            <ul className="space-y-4 text-sm text-zinc-500">
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Sobre Nós</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Roadmap Público</a></li>
                                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contato</a></li>
                                <li><div className="flex items-center gap-2 opacity-50"><Globe size={14} /> <span>Pt-BR</span></div></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Copyright & Location */}
                        <div className="text-center md:text-left">
                            <p className="text-zinc-600 text-xs mb-1">© 2026 MetricPath Inc. Todos os direitos reservados.</p>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] text-zinc-700 font-mono uppercase tracking-wide">
                                <span>Made with ❤️ in Brazil</span>
                                <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
                                <span>São Paulo, SP</span>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono border border-zinc-800 px-2 py-1 rounded bg-zinc-900/50">
                                <Lock size={10} /> SSL Secured
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono border border-zinc-800 px-2 py-1 rounded bg-zinc-900/50">
                                <Shield size={10} /> Data Protected
                            </div>
                        </div>

                        {/* Social & Legal */}
                        <div className="flex flex-col items-end gap-4">
                            <div className="flex gap-4">
                                <a href="#" className="text-zinc-500 hover:text-white transition-colors"><span className="sr-only">GitHub</span><Code2 size={18} /></a>
                                <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors"><span className="sr-only">Twitter</span><Globe size={18} /></a>
                                <a href="#" className="text-zinc-500 hover:text-indigo-500 transition-colors"><span className="sr-only">Discord</span><MessageSquare size={18} /></a>
                            </div>
                            <div className="flex gap-4 text-xs text-zinc-600">
                                <a href="#" className="hover:text-zinc-400 transition-colors">Privacidade</a>
                                <a href="#" className="hover:text-zinc-400 transition-colors">Termos</a>
                                <a href="#" className="hover:text-zinc-400 transition-colors">Cookies</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
