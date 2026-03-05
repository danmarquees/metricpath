import { Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-indigo-500/30 pb-24">

            {/* Header Section */}
            <section className="pt-32 pb-12 px-6 border-b border-white/5 bg-zinc-950 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-zinc-950 to-zinc-950 pointer-events-none" />

                <div className="max-w-3xl mx-auto relative z-10 text-center">
                    <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 text-indigo-400 mb-6 shadow-xl">
                        <Scale size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                        Termos de Uso
                    </h1>
                    <p className="text-zinc-500 mb-8 font-medium">
                        Última atualização: Outubro de 2023
                    </p>
                </div>
            </section>

            {/* Document Content */}
            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto prose prose-invert prose-zinc prose-lg">

                    <p className="lead text-xl text-zinc-300">
                        Ao acessar o site <strong>MetricPath</strong>, você concorda em cumprir estes termos de serviço,
                        todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis
                        locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">1. Uso da Plataforma</h2>
                    <p className="text-zinc-400">
                        É concedida permissão para o uso temporário dos materiais e ferramentas analíticas (softwares)
                        no site do MetricPath. Esta é a concessão de uma licença de software e não uma transferência de título.
                        Sob esta licença, você não pode:
                    </p>
                    <ul className="text-zinc-400 space-y-2">
                        <li>Modificar, copiar ou fazer engenharia reversa do algoritmo Viability Score (IVM);</li>
                        <li>Utilizar robôs (scrapers) não autorizados para extrair dados da plataforma em massa, burlando os limites da API;</li>
                        <li>Usar os materiais para qualquer finalidade comercial não declarada ou enganosa;</li>
                        <li>Transferir sua conta ou relatórios restritos para outra pessoa de má-fé.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">2. Isenção de Responsabilidade (Precisão do IVM)</h2>
                    <div className="bg-zinc-900 border-l-4 border-amber-500 p-6 rounded-r-xl my-6">
                        <p className="text-zinc-300 font-medium m-0">
                            <strong>Atenção:</strong> O <em>Viability Score</em> (IVM) e todos os relatórios gerados pela MetricPath
                            são estimativas estatísticas extraídas de dados públicos. Nós <strong>não garantimos sucesso financeiro</strong>, ganho
                            de usuários ou validação incontestável de negócios.
                        </p>
                    </div>
                    <p className="text-zinc-400">
                        Você, como desenvolvedor ou empreendedor, é o único responsável por decidir se investirá tempo e dinheiro na criação
                        de um software. A MetricPath fornece inteligência direcional e mitigação de riscos, mas não se responsabiliza pelas suas perdas financeiras
                        ou projetos que, eventualmente, não atinjam *product-market fit*.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">3. Assinaturas e Pagamentos</h2>
                    <p className="text-zinc-400">
                        Ao assinar um de nossos planos ou comprar relatórios avulsos, você concorda com a cobrança recorrente
                        (quando aplicável) efetuada via Stripe. Por se tratar de um produto de informação digital gerada instantaneamente
                        por Inteligência Artificial e custos de servidores, a política de cancelamento segue diretrizes específicas de limitação de uso, descritas na hora do checkout.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">4. Propriedade Intelectual</h2>
                    <p className="text-zinc-400">
                        Todo o design do site, código fonte, nome da marca "MetricPath" e o conceito matemático do IVM são de propriedade
                        exclusiva da MetricPath Inc. É expressamente proibida a cópia ou o uso de nossos ativos intelectuais sem
                        autorização formal.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">5. Modificações dos Termos</h2>
                    <p className="text-zinc-400">
                        A MetricPath pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site,
                        você concorda em ficar vinculado à versão atual desses termos de serviço.
                    </p>

                    <hr className="border-zinc-800 my-12" />

                    <h3 className="text-xl font-bold text-white mb-2">Contato Legal</h3>
                    <p className="text-zinc-400">
                        Dúvidas sobre nossas diretrizes de uso da plataforma? Entre em contato pela nossa equipe na{' '}
                        <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">página de contato</Link>.
                    </p>

                </div>
            </section>

        </div>
    );
}

