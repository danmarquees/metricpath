import { Target, Lightbulb, Shield, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-indigo-500/30 pb-24">

            {/* Hero Manifesto Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-white/5 bg-zinc-950">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-indigo-400 text-sm font-bold tracking-widest uppercase mb-8">
                        Nossa Missão
                    </span>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-200 to-zinc-600">
                        Matar o Achismo na Construção de Software.
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none text-zinc-400 leading-relaxed space-y-6">
                        <p className="text-xl md:text-2xl text-zinc-300 font-medium leading-relaxed">
                            Todos os anos, milhares de desenvolvedores talentosos e indie hackers dedicam 6, 8, até 12 meses construindo um produto perfeito... para um mercado que não existe.
                        </p>
                        <p>
                            A realidade é dura: código brilhante não salva uma ideia que ninguém quer comprar. O mundo maker glamorizou o "buidl" (construir a todo custo), mas ignorou a etapa fundamental que os grandes fundos de Venture Capital exigem: a validação matemática da viabilidade do negócio.
                        </p>
                        <p>
                            Nós criamos o <strong className="text-white">MetricPath</strong> porque estávamos cansados de ver "cidades fantasmas" SaaS. Projetos perfeitamente escaláveis com zero usuários ativos.
                        </p>

                        <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 my-8 text-xl italic text-zinc-300 bg-indigo-500/5 rounded-r-xl">
                            "Acreditamos que todo founder deveria ter acesso ao mesmo nível de inteligência de mercado que startups investidas têm, antes de escrever a primeira linha de código."
                        </blockquote>

                        <p>
                            Nosso software analisa dados obscuros — intenção de compra via CPC, lacunas de sentimento em centenas de reviews ocultos, e saturação técnica de SEO — para entregar uma única métrica inegável: o <strong>Viability Score (IVM)</strong>.
                            Nós não dizemos como codar seu app, nós dizemos se vale a pena começar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Nossos Princípios</h2>
                        <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Os pilares que guiam exatamente como o MetricPath audita mercados e gera nossos relatórios.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Value 1 */}
                        <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 hover:bg-zinc-900/80 transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                                <Target size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Dados, não feeling</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Achismo não paga servidor. Nós não olhamos para a "paixão" do founder, cruzamos os números absolutos de dor do usuário e intenção financeira real.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 hover:bg-zinc-900/80 transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Risco Assimétrico</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                A ideia é proteger seu tempo. Exigimos que uma oportunidade tenha um upside muito maior que o downside para considerá-la viável no score.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 hover:bg-zinc-900/80 transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-6">
                                <Lightbulb size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Gaps Abertos</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Encontrar oceano azul acabou. Nós caçamos as fraquezas sistêmicas em oceanos vermelhos (concorrentes ruins) para te dar um ponto cego de entrada.
                            </p>
                        </div>

                        {/* Value 4 */}
                        <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 hover:bg-zinc-900/80 transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                                <Code size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Feito por Builders</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Somos devs indie quecansaram de errar. A ferramenta escova a complexidade de marketing e entrega o "papo reto" que engenheiros gostam de ler.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-20 relative">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

                        <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Pronto para validar sua ideia?</h2>
                        <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
                            Pare de jogar fora meses de vida em projetos que não tem tração orgânica. Obtenha inteligência real agora.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Link
                                to="/pricing"
                                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
                            >
                                Gerar Relatório <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/roi-calculator"
                                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-800 text-white font-bold hover:bg-zinc-700 transition-colors flex items-center justify-center"
                            >
                                Calcular Custo do Risco
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

