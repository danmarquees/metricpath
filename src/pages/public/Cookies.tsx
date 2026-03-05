import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cookies() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-indigo-500/30 pb-24">

            {/* Header Section */}
            <section className="pt-32 pb-12 px-6 border-b border-white/5 bg-zinc-950 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-zinc-950 to-zinc-950 pointer-events-none" />

                <div className="max-w-3xl mx-auto relative z-10 text-center">
                    <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 text-indigo-400 mb-6 shadow-xl">
                        <Cookie size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                        Política de Cookies
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
                        O <strong>MetricPath</strong> utiliza cookies para melhorar a sua experiência na nossa plataforma,
                        permitindo funcionalidades essenciais de segurança, autenticação de contas e análise de métricas estritamente necessárias.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">1. O que são Cookies?</h2>
                    <p className="text-zinc-400">
                        Como é prática comum em quase todos os sites profissionais SaaS, este site usa cookies, que são pequenos
                        arquivos baixados no seu computador, para melhorar sua experiência. Esta seção descreve quais
                        informações eles coletam e por que precisamos armazená-las no seu navegador de forma temporária.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">2. Como usamos os Cookies</h2>
                    <p className="text-zinc-400">
                        Utilizamos os cookies pelos seguintes motivos principais:
                    </p>
                    <ul className="text-zinc-400 space-y-2">
                        <li><strong>Cookies de Sessão:</strong> Para manter você autenticado no Dashboard após o Login (os JWT tokens),
                            evitando que precise colocar sua senha toda vez que trocar de tela de análise.</li>
                        <li><strong>Cookies de Performance:</strong> Entender quais abas do sistema demoram mais a carregar para otimizarmos nossos servidores.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">3. Cookies de Terceiros e Analytics</h2>
                    <p className="text-zinc-400">
                        Em alguns casos especiais, também usamos cookies fornecidos por provedores de nuvem de extrema confiança.
                        Por exemplo: nossos processadores de pagamento (como a Stripe) utilizam cookies antifraude para processar cartões de
                        crédito com segurança durante sua assinatura da fase Pro. E o Google Analytics anonimizado nos ajuda a entender métricas de acesso.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">4. Gerenciamento e Desativação</h2>
                    <p className="text-zinc-400">
                        Você pode impedir a configuração de cookies ajustando as configurações do seu navegador de internet
                        (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies limitará
                        severamente a funcionalidade do Dashboard do MetricPath (já que a própria conta requer cookies de sessão para o login).
                    </p>

                    <hr className="border-zinc-800 my-12" />

                    <h3 className="text-xl font-bold text-white mb-2">Contato e Privacidade</h3>
                    <p className="text-zinc-400">
                        Caso algum detalhe não tenha ficado claro ou se tiver dúvidas gerais sobre a sua privacidade, leia nossa{' '}
                        <Link to="/privacy" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Política de Privacidade Principal</Link> ou entre em contato via <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">suporte</Link>.
                    </p>

                </div>
            </section>

        </div>
    );
}

