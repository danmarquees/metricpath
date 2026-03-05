import { BookA, Search, Hash } from 'lucide-react';
import { useState, useMemo } from 'react';

// Dados do Glossário
const glossaryTerms = [
    {
        term: "IVM (Índice de Viabilidade de Mercado)",
        category: "Métrica Core",
        definition: "A métrica principal e proprietária do MetricPath. É um score de 0 a 100 que consolida dezenas de fatores (demanda ativa, força dos concorrentes, gaps) para determinar a chance de sucesso de um produto.",
        example: "Um IVM de 85 indica um mercado altamente favorável para indies entrarem."
    },
    {
        term: "Viability Score",
        category: "Métrica Core",
        definition: "Maneira em inglês e amplamente utilizada internacionalmente para referir-se ao IVM.",
        example: "Check the Viability Score before writing the first line of code."
    },
    {
        term: "Sentiment Gap (Lacuna de Sentimento)",
        category: "Análise Qualitativa",
        definition: "A diferença estrutural entre o que o mercado atual entrega e o que os usuários esperam. Calculamos lendo centenas de reviews de concorrentes e extraindo reclamações frequentes.",
        example: "Encontramos um grande Sentiment Gap: o concorrente entrega a feature X, mas ela é lenta e cheia de bugs, irritando 40% dos usuários."
    },
    {
        term: "Buying Intent (Intenção de Compra)",
        category: "Financeiro",
        definition: "Métrica que indica o quão dispostos as pessoas estão a tirar o cartão de crédito da carteira. Avaliamos isso através do CPC (Custo por Clique) em anúncios para palavras-chave daquele nicho.",
        example: "O nicho de 'ERP para clínicas Vet' tem alto Buying Intent (CPC caro), mostrando que empresas pagam bem por um bom software de gestão."
    },
    {
        term: "Saturação Concorrente",
        category: "Análise Competitiva",
        definition: "Um índice que mede se o 'oceano é vermelho'. Leva em conta a quantidade de players, o capital levantado (VC-backed) e o domínio de autoridade online (Domain Authority).",
        example: "Ferramentas de To-Do list possuem Saturação Concorrente máxima. Fuja sem um diferencial claro."
    },
    {
        term: "Demanda Ativa",
        category: "SEO & Tráfego",
        definition: "Quantas pessoas estão ativamente procurando por uma solução no Google, YouTube, Reddit ou Bing dentro de um mês.",
        example: "A Demanda Ativa por 'como automatizar planilhas financeiras' cresceu 300% esse ano."
    },
    {
        term: "White-Label Export",
        category: "Feature",
        definition: "A capacidade de gerar o relatório completo do MetricPath (dados, gráficos, gaps) em PDF, sem a nossa marca, onde você pode usar a logo da sua agência para apresentar aos clientes.",
        example: "A agência vendeu a curadoria de mercado por R$ 5.000 exportando os PDFs em White-Label."
    },
    {
        term: "Gap Discovery",
        category: "Feature",
        definition: "Ferramenta automatizada de IA do MetricPath que lê fóruns (Reddit, StackOverflow) e lojas de aplicativos focado em encontrar bugs e dores que a concorrência ignora ignorando.",
        example: "Usei o Gap Discovery e vi que o problema real dos usuários do Notion é o carregamento offline."
    }
];

export default function Glossary() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTerms = useMemo(() => {
        if (!searchQuery.trim()) return glossaryTerms.sort((a, b) => a.term.localeCompare(b.term));

        const lowerQuery = searchQuery.toLowerCase();
        return glossaryTerms.filter(item =>
            item.term.toLowerCase().includes(lowerQuery) ||
            item.definition.toLowerCase().includes(lowerQuery) ||
            item.category.toLowerCase().includes(lowerQuery)
        ).sort((a, b) => a.term.localeCompare(b.term));
    }, [searchQuery]);

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans pb-24">

            {/* Header */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden bg-zinc-950 border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-zinc-950 to-zinc-950 pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 text-indigo-400 mb-6 shadow-xl">
                        <BookA size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                        Glossário IVM
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Aprenda a decifrar a linguagem da viabilidade de mercado. Entenda nossas métricas, acrônimos e como cada dado impacta a matemática de construção do seu MVP.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Search Bar */}
                    <div className="relative mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search size={20} className="text-zinc-500" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-zinc-900/80 border border-zinc-800 text-white rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 block w-full pl-12 pr-4 py-4 transition-all placeholder-zinc-500"
                            placeholder="Pesquisar por IVM, Gaps, Demanda..."
                        />
                        {searchQuery && (
                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="text-xs font-bold text-zinc-500 hover:text-white uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 px-2 py-1 rounded transition-colors"
                                >
                                    Limpar
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Dictionary List */}
                    <div className="space-y-6">
                        {filteredTerms.length > 0 ? (
                            filteredTerms.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/60 hover:border-zinc-700 transition-colors animate-in fade-in slide-in-from-bottom-2"
                                    style={{ animationDelay: `${idx * 50}ms` }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
                                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                            {item.term}
                                        </h2>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-zinc-800 text-zinc-400 border border-zinc-700 self-start md:self-auto shrink-0">
                                            {item.category}
                                        </span>
                                    </div>

                                    <p className="text-zinc-300 leading-relaxed mb-6 text-lg">
                                        {item.definition}
                                    </p>

                                    <div className="bg-zinc-950 border border-zinc-800/80 rounded-lg p-5">
                                        <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                            <Hash size={12} /> Exemplo Prático
                                        </div>
                                        <p className="text-zinc-400 text-sm italic">
                                            "{item.example}"
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-20 bg-zinc-900/20 border border-zinc-800/50 rounded-2xl border-dashed">
                                <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-zinc-900 text-zinc-600 mb-4">
                                    <Search size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Nenhum termo encontrado</h3>
                                <p className="text-zinc-500 max-w-sm mx-auto">
                                    Não conseguimos encontrar nada no nosso glossário relacionado a "{searchQuery}".
                                </p>
                            </div>
                        )}
                    </div>

                </div>
            </section>
        </div>
    );
}

