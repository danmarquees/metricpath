import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-indigo-500/30 pb-24">

            {/* Header Section */}
            <section className="pt-32 pb-12 px-6 border-b border-white/5 bg-zinc-950 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-zinc-950 to-zinc-950 pointer-events-none" />

                <div className="max-w-3xl mx-auto relative z-10 text-center">
                    <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 text-indigo-400 mb-6 shadow-xl">
                        <ShieldCheck size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                        Políticas de Privacidade
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
                        Sua privacidade é importante para nós. É política do <strong>MetricPath</strong> respeitar a sua
                        privacidade em relação a qualquer informação sua que possamos coletar no nosso site e outros sites
                        que possuímos e operamos.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">1. Coleta de Dados</h2>
                    <p className="text-zinc-400">
                        Solicitamos informações pessoais, como nome e e-mail corporativo, apenas quando realmente precisamos delas para
                        lhe fornecer um serviço (como a geração e envio de relatórios do Viability Score). Fazemo-lo por meios justos e
                        legais, com o seu conhecimento e consentimento, e deixamos claro por que estamos coletando e como será usado.
                    </p>
                    <p className="text-zinc-400">
                        Também coletamos dados não identificáveis relacionados à telemetria de uso da plataforma (quais páginas
                        foram acessadas, fluxos de erros no dashboard) para melhoria contínua da nossa infraestrutura.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">2. Uso dos Dados</h2>
                    <p className="text-zinc-400">
                        Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.
                        Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem
                        como acesso, divulgação, cópia, uso ou modificação não autorizados. Contamos com infraestrutura em nuvem
                        criptografada de ponta a ponta.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">3. Compartilhamento</h2>
                    <div className="bg-zinc-900 border-l-4 border-indigo-500 p-6 rounded-r-xl my-6">
                        <p className="text-zinc-300 font-medium m-0">
                            Nós <strong>não vendemos</strong> dados pessoais ou análises privadas dos seus mercados para terceiros.
                        </p>
                    </div>
                    <p className="text-zinc-400">
                        Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto
                        quando exigido por lei. Os relatórios gerados na sua conta são inteiramente confidenciais.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">4. Links Externos</h2>
                    <p className="text-zinc-400">
                        O nosso site pode ter links para sites externos que não são operados por nós (ex: processadores de pagamento como a Stripe).
                        Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade
                        por suas respectivas políticas de privacidade.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">5. Seus Direitos (LGPD / GDPR)</h2>
                    <p className="text-zinc-400">
                        Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer
                        alguns dos serviços desejados. A qualquer momento, você pode solicitar a exclusão completa (Wipe) da sua conta,
                        bem como a remoção do seu e-mail da nossa base de dados.
                    </p>

                    <hr className="border-zinc-800 my-12" />

                    <h3 className="text-xl font-bold text-white mb-2">Ficou com alguma dúvida sobre privacidade?</h3>
                    <p className="text-zinc-400">
                        Tratamos esses assuntos de forma transparente. Envie um e-mail para nossa equipe jurídica em{' '}
                        <a href="mailto:founders@metricpath.com" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                            founders@metricpath.com
                        </a>{' '}
                        ou acesse nossa <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">aba de contato</Link>.
                    </p>

                </div>
            </section>

        </div>
    );
}

