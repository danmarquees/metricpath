import { Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Refund() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-indigo-500/30 pb-24">

            {/* Header Section */}
            <section className="pt-32 pb-12 px-6 border-b border-white/5 bg-zinc-950 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-zinc-950 to-zinc-950 pointer-events-none" />

                <div className="max-w-3xl mx-auto relative z-10 text-center">
                    <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 text-indigo-400 mb-6 shadow-xl">
                        <Receipt size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                        Política de Reembolso
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
                        O compromisso da <strong>MetricPath</strong> é entregar o Viability Score (IVM) e análises de mercado precisas no menor tempo possível.
                        Nossa política de estorno e reembolso foi desenhada seguindo a legislação brasileira para SaaS (Software as a Service)
                        e produtos de API computacional intensa.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">1. Garantia Legal (Incondicional de 7 dias)</h2>
                    <p className="text-zinc-400">
                        De acordo com o Código de Defesa do Consumidor, garantimos o seu direito legal de arrependimento (7 dias da assinatura).
                        Dentro desta janela, processamos devoluções no cartão sem qualquer questionamento sob uma única e rigorosa premissa descrita no ponto 2 abaixo.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">2. Exceção Crítica: O Consumo da Nuvem</h2>
                    <div className="bg-zinc-900 border-l-4 border-amber-500 p-6 rounded-r-xl my-6">
                        <p className="text-zinc-300 font-medium m-0">
                            <strong>Atenção ao Produto Intangível Entregue:</strong> Uma vez que o usuário clique em "Gerar Análise IVM" no
                            dashboard, nossos servidores de ponta interagem imediatamente com clusters pesados de Inteligência Artificial que geram
                            custos reais de GPU/API em tempo real para a MetricPath.
                        </p>
                        <hr className="my-4 border-zinc-800" />
                        <p className="text-zinc-300 font-medium m-0">
                            <strong>Se o relatório final do nicho for gerado, nós nos isentamos do dever de reembolso.</strong> Você está pagando
                            exatamente pela geração desse PDF / Análise em tela e a prestação do serviço acontece de modo imediato.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">3. Arrependimento Válido</h2>
                    <p className="text-zinc-400">
                        Se você realizou o upgrade da conta (por curiosidade, erro de pagamento, ou mudou de ideia) e nos 7 primeiros dias
                        <strong>não</strong> utilizou os tokens de relatório do Viability Score, processaremos seu estorno com um clique,
                        e o dinheiro volta rápido via parceiro financeiro (Stripe).
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4 text-white">4. Renovação Mensal SaaS</h2>
                    <p className="text-zinc-400">
                        Para assinaturas do modelo Growth, os pagamentos recorrentes ocorrem todos os meses. É de total responsabilidade
                        do usuário entrar no seu painel principal e fazer a rescisão / cancelamento da assinatura **antes** da virada do novo ciclo.
                        Nós **não** damos reembolsos na renovação mensal simplesmente porque a pessoa se "esqueceu" de cancelar a assinatura.
                    </p>

                    <hr className="border-zinc-800 my-12" />

                    <h3 className="text-xl font-bold text-white mb-2">Como solicitar sua devolução</h3>
                    <p className="text-zinc-400">
                        Se a sua conta está dentro dos limites da regra n° 3 e o tempo nítido for inferior a sete dias, contacte a equipe
                        jurídica e de faturamento agora pelo e-mail exclusivo{' '}
                        <a href="mailto:founders@metricpath.com" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                            founders@metricpath.com
                        </a>{' '}
                        ou vá para nossa <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Aba de Contato Direto &rarr;</Link>.
                    </p>

                </div>
            </section>

        </div>
    );
}

