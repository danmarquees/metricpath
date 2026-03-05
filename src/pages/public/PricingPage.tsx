import { Check, ChevronRight, X, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30 font-sans pb-20">
            {/* Header Section */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-zinc-950 to-zinc-950 pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        Preços simples e diretos.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        Comece grátis para entender a ferramenta. Faça o upgrade apenas quando suas ambições escalarem. Sem surpresas ou letras miúdas.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 items-start">
                        {/* Explorer Plan */}
                        <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl flex flex-col h-full animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100">
                            <h3 className="text-xl font-bold text-zinc-400 mb-2">Explorer</h3>
                            <div className="text-4xl font-bold mb-6">R$ 0<span className="text-lg text-zinc-500 font-normal">/mês</span></div>
                            <p className="text-zinc-500 text-sm mb-6">Para quem está começando e quer validar sua primeira ideia sem custo.</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    { text: "2 Pesquisas Básicas/mês", active: true },
                                    { text: "Volume de Busca & Viability Score", active: true },
                                    { text: "Acesso limitado ao dashboard", active: true },
                                    { text: "Análise Qualitativa (Gaps)", active: false },
                                    { text: "Exportação em PDF", active: false }
                                ].map((item, i) => (
                                    <li key={i} className={`flex items-center gap-3 ${item.active ? 'text-zinc-300' : 'text-zinc-700'}`}>
                                        {item.active ? <Check size={18} className="text-zinc-500 flex-shrink-0" /> : <X size={18} className="text-zinc-800 flex-shrink-0" />}
                                        <span className="text-sm">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/signup" className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 rounded-xl font-bold text-center transition-colors">
                                Começar Grátis
                            </Link>
                        </div>

                        {/* Indie Builder Plan */}
                        <div className="bg-zinc-900 border border-indigo-500/50 p-8 rounded-3xl flex flex-col relative overflow-hidden shadow-2xl shadow-indigo-900/20 transform md:-translate-y-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none"></div>
                            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                Mais Popular
                            </div>
                            <h3 className="text-xl font-bold text-indigo-400 mb-2">Indie Builder</h3>
                            <div className="text-4xl font-bold mb-6">R$ 59<span className="text-lg text-zinc-500 font-normal">/mês</span></div>
                            <p className="text-zinc-400 text-sm mb-6">O "Arroz com Feijão" focado para validar projetos reais e não perder tempo.</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    { text: "10 Pesquisas Profundas/mês", active: true },
                                    { text: "Análise Qualitativa Automática (Gaps)", active: true },
                                    { text: "Sugestão de Tech Stack", active: true },
                                    { text: "Comparação de Histórico", active: true },
                                    { text: "Definição de Persona Base", active: true },
                                    { text: "Exportação White-Label (PDF)", active: false }
                                ].map((item, i) => (
                                    <li key={i} className={`flex items-center gap-3 ${item.active ? 'text-white' : 'text-zinc-700'}`}>
                                        {item.active ? <Check size={18} className="text-indigo-500 flex-shrink-0" /> : <X size={18} className="text-zinc-800 flex-shrink-0" />}
                                        <span className="text-sm">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/signup" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-center transition-colors shadow-lg shadow-indigo-600/20 relative z-10">
                                Assinar Indie
                            </Link>
                        </div>

                        {/* Growth Plan */}
                        <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl flex flex-col h-full animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                            <h3 className="text-xl font-bold text-pink-400 mb-2">Growth</h3>
                            <div className="text-4xl font-bold mb-6">R$ 189<span className="text-lg text-zinc-500 font-normal">/mês</span></div>
                            <p className="text-zinc-500 text-sm mb-6">Para agências criativas e serial builders lançando múltiplos projetos.</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    { text: "40 Pesquisas Profundas/mês", active: true },
                                    { text: "Exportação White-Label (PDF)", active: true },
                                    { text: "Alertas de Novos Nichos", active: true },
                                    { text: "Acesso à API (Beta)", active: true },
                                    { text: "Suporte Prioritário 24/7", active: true }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                                        <Check size={18} className="text-pink-500 flex-shrink-0" />
                                        <span className="text-sm">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/signup" className="w-full py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-xl font-bold text-center transition-colors">
                                Assinar Growth
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add-ons Section */}
            <section className="py-16 px-6 bg-zinc-900/10 border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Atingiu o limite? Sem problemas.</h3>
                    <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
                        Acreditamos que você não deve assinar um plano mais caro só porque teve um mês produtivo. Compre pacotes de créditos avulsos que <span className="text-indigo-400 font-bold">nunca expiram</span> no plano Indie Builder.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex items-center justify-between group hover:border-zinc-700 transition-colors">
                            <div className="text-left">
                                <div className="font-bold text-white text-lg">+ 5 Pesquisas</div>
                                <div className="text-sm text-zinc-500">Pacote Rápido</div>
                            </div>
                            <div className="text-2xl font-black text-indigo-400">R$ 29</div>
                        </div>
                        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex items-center justify-between relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
                            <div className="absolute top-0 right-0 bg-zinc-800 text-zinc-300 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg uppercase">35% Off</div>
                            <div className="text-left">
                                <div className="font-bold text-white text-lg">+ 20 Pesquisas</div>
                                <div className="text-sm text-zinc-500">Pacote Inteligente</div>
                            </div>
                            <div className="text-2xl font-black text-emerald-400">R$ 89</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Calculator Banner */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-900/40 to-cyan-900/40 border border-indigo-500/20 rounded-3xl p-10 md:p-16 text-center shadow-2xl">
                    <h2 className="text-3xl font-bold mb-4">Acha caro pagar R$ 59?</h2>
                    <p className="text-zinc-300 text-lg mb-8 max-w-xl mx-auto">
                        Construir um produto que ninguém quer custa, em média, R$ 15.000 em horas de trabalho e 3 meses da sua vida matemática. Nós evitamos isso em 10 minutos.
                    </p>
                    <Link to="/roi-calculator" className="inline-flex py-3 px-8 bg-white hover:bg-zinc-200 text-zinc-950 rounded-full font-bold text-sm transition-colors shadow-lg">
                        Ver Calculadora de ROI Completa
                    </Link>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
                    <p className="text-zinc-400">Tudo que você precisa saber sobre o MetricPath.</p>
                </div>
                <div className="space-y-6">
                    {[
                        {
                            q: "O que conta como 'uma pesquisa profunda'?",
                            a: "Sempre que você insere uma ideia ou nicho (ex: 'SaaS para Clínicas Vet') e clicamos no botão de validar, consumimos um crédito para rodar o motor de IA que varre dezenas de fontes em tempo real."
                        },
                        {
                            q: "Posso cancelar ou dar upgrade a qualquer momento?",
                            a: "Sim. Assinaturas podem ser pausadas, canceladas ou modificadas em nosso painel com um único clique. Se fizer upgrade, o valor será rateado proporcionalmente."
                        },
                        {
                            q: "Vocês têm uma política de reembolso?",
                            a: "Acreditamos na nossa ferramenta. Oferecemos 7 dias de garantia incondicional no plano Indie Builder. Se não encontrou valor nos dados, devolvemos 100% do seu dinheiro, sem ressentimentos."
                        },
                        {
                            q: "O que acontece se minhas pesquisas não sobrarem no mês?",
                            a: "Os créditos da assinatura mensal não acumulam. Eles expiram a cada ciclo de faturamento. Contudo, os pacotes avulsos de créditos (Add-ons) nunca expiram."
                        }
                    ].map((faq, i) => (
                        <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900/80 transition-colors">
                            <div className="flex gap-4">
                                <HelpCircle className="text-indigo-400 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-zinc-100">{faq.q}</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="pt-20 px-6 max-w-3xl mx-auto text-center border-t border-white/5">
                <h2 className="text-4xl font-black mb-6">Pronto para dar o próximo passo?</h2>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link to="/signup" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] flex items-center gap-2">
                        Começar Agora <ChevronRight size={20} />
                    </Link>
                </div>
                <p className="mt-8 text-xs text-zinc-500 font-mono tracking-widest uppercase">Trusted by 2,000+ Indie Hackers</p>
            </section>
        </div>
    );
}

