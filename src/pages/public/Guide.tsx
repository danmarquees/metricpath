import { BookOpen, ChevronRight, Hash, Search, SearchCode, Target, Settings, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Guide() {
    const [activeSection, setActiveSection] = useState('intro');

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans pb-20 pt-16">

            {/* Minimal Header */}
            <div className="border-b border-white/5 bg-zinc-950/80 sticky top-16 z-40 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <Link to="/" className="text-zinc-500 hover:text-white transition-colors">MetricPath</Link>
                        <ChevronRight size={14} className="text-zinc-700" />
                        <span className="text-white">Documentação</span>
                    </div>
                    {/* Fake Search */}
                    <div className="hidden md:flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-1.5 w-64 text-sm text-zinc-500 cursor-text">
                        <Search size={14} />
                        <span>Buscar na doc...</span>
                        <div className="ml-auto flex items-center gap-1.5 opacity-50">
                            <kbd className="font-mono text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700">⌘</kbd>
                            <kbd className="font-mono text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700">K</kbd>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">

                {/* Sidebar Navigation */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="sticky top-36">
                        <div className="mb-8">
                            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Começando</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <button
                                        onClick={() => setActiveSection('intro')}
                                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === 'intro' ? 'bg-indigo-500/10 text-indigo-400 font-medium' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}
                                    >
                                        O que é o MetricPath?
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveSection('score')}
                                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === 'score' ? 'bg-indigo-500/10 text-indigo-400 font-medium' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}
                                    >
                                        Lendo o Viability Score
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveSection('gaps')}
                                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === 'gaps' ? 'bg-indigo-500/10 text-indigo-400 font-medium' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}
                                    >
                                        Analisando Gaps
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Ferramentas Base</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <button
                                        onClick={() => setActiveSection('exports')}
                                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === 'exports' ? 'bg-indigo-500/10 text-indigo-400 font-medium' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}
                                    >
                                        Exportação e Relatórios
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setActiveSection('api')}
                                        className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${activeSection === 'api' ? 'bg-indigo-500/10 text-indigo-400 font-medium' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}
                                    >
                                        Início Rápido API
                                        <span className="text-[10px] bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-700">Beta</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 max-w-3xl min-h-[600px]">

                    {/* Section: Intro */}
                    {activeSection === 'intro' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h1 className="text-4xl font-bold text-white mb-6 align-middle flex items-center gap-3">
                                <BookOpen className="text-indigo-500" /> Introdução ao MetricPath
                            </h1>
                            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                                MetricPath é uma plataforma de inteligência de mercado focada em desenvolvedores, indie hackers e empreendedores digitais que querem validar ideias antes de escrever códigos.
                            </p>

                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-2 group cursor-pointer">
                                <Hash size={20} className="text-zinc-700 group-hover:text-indigo-500 transition-colors" /> Por que validar dados?
                            </h2>
                            <p className="mb-6 leading-relaxed">
                                Historicamente, construtores constroem o produto primeiro e tentam procurar um público depois. O MetricPath inverte essa balança, varrendo a internet em busca de sinais de tráfego, reclamações e disposição a pagar para garantir que você está mirando no alvo certo.
                            </p>

                            <div className="bg-zinc-900/50 border-l-2 border-indigo-500 p-6 rounded-r-xl my-8">
                                <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Target size={16} className="text-indigo-400" /> Dica de Ouro</h4>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    Não perca tempo rodando um servidor de dev sem passar sua ideia fundamental pela nossa busca. Gastar R$ 59 hoje pode salvar R$ 15.000 em custos de engenharia falhos.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Section: Score */}
                    {activeSection === 'score' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h1 className="text-4xl font-bold text-white mb-6 align-middle flex items-center gap-3">
                                <SearchCode className="text-cyan-500" /> Lendo o Viability Score™
                            </h1>
                            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                                O Score de Viabilidade é nossa métrica proprietária de 0 a 100 indicando a propensão de uma ideia ter sucesso e lucratividade orgânica.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">Como a matemática funciona?</h3>
                            <p className="mb-6 leading-relaxed text-zinc-400">
                                Diferente do SEO tradicional que te foca apenas em pesquisa de keywords, nossa IA consolida:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
                                    <div className="text-emerald-400 font-bold mb-1">+ Demanda Ativa</div>
                                    <div className="text-xs text-zinc-500">Volume de busca mensal no Google, Youtube e Bing.</div>
                                </div>
                                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
                                    <div className="text-rose-400 font-bold mb-1">- Saturação Concorrente</div>
                                    <div className="text-xs text-zinc-500">Quantidade e força (Domínio e CAC) dos concorrentes atuais.</div>
                                </div>
                                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
                                    <div className="text-indigo-400 font-bold mb-1">+ Sentiment Gap</div>
                                    <div className="text-xs text-zinc-500">Quão chateados os clientes da concorrência estão hoje.</div>
                                </div>
                                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
                                    <div className="text-amber-400 font-bold mb-1">+ Buying Intent</div>
                                    <div className="text-xs text-zinc-500">Custo por clique (CPC) em nichos B2B/B2C mapeados.</div>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-zinc-800 mt-8">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-zinc-500 uppercase bg-zinc-900 border-b border-zinc-800">
                                        <tr>
                                            <th className="px-6 py-3">Score</th>
                                            <th className="px-6 py-3">Significado</th>
                                            <th className="px-6 py-3">Ação Recomendada</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-zinc-800/50 bg-zinc-950">
                                            <td className="px-6 py-4 font-bold text-emerald-400">75 - 100</td>
                                            <td className="px-6 py-4">Sinal Verde. Demanda alta, competidores fracos ou falhos.</td>
                                            <td className="px-6 py-4">Inicie o desenvolvimento e valide a precificação de imediato.</td>
                                        </tr>
                                        <tr className="border-b border-zinc-800/50 bg-zinc-950">
                                            <td className="px-6 py-4 font-bold text-amber-500">50 - 74</td>
                                            <td className="px-6 py-4">Alerta Amarelo. Oceano vermelho com players estabelecidos.</td>
                                            <td className="px-6 py-4">Pivote. Busque um micro-nicho ou mude a feature principal.</td>
                                        </tr>
                                        <tr className="bg-zinc-950">
                                            <td className="px-6 py-4 font-bold text-rose-500">0 - 49</td>
                                            <td className="px-6 py-4">Sinal Vermelho. Armadilha de SEO ou sem demanda comprovada.</td>
                                            <td className="px-6 py-4">Abandone a ideia ou reserve como "hobby". Não monte startup.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Section: Gaps */}
                    {activeSection === 'gaps' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h1 className="text-4xl font-bold text-white mb-6 align-middle flex items-center gap-3">
                                <Target className="text-rose-500" /> Analisando Gaps (Brechas)
                            </h1>
                            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                                A feature mais poderosa do MetricPath foca no erro dos outros. O Gap Discovery lê automaticamente fóruns e reviews atrás de "brechas" no mercado que você pode atacar.
                            </p>

                            <p className="mb-6 leading-relaxed text-zinc-400">
                                Nós conectamos nossa engine na API do Reddit, StackOverflow, Twitter (X), iOS App Store e TrustPilot. Se um cliente disser: <em className="text-zinc-200">"O Competidor X é bom, MAS faltam relatórios exportáveis"</em> — a nossa IA flagra a palavra "MAS", isola a reclamação, conta quantas vezes isso ocorreu e categoriza como uma Brecha.
                            </p>

                            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl mt-8">
                                <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-4">
                                    <div className="font-bold text-white flex items-center gap-2">
                                        Critérios de Brechas Críticas
                                    </div>
                                </div>
                                <ul className="space-y-3 text-sm text-zinc-300">
                                    <li className="flex gap-3"><ChevronRight size={16} className="text-rose-500 flex-shrink-0 mt-0.5" /> Reclamação recorrente em mais de 10% dos tickets processados.</li>
                                    <li className="flex gap-3"><ChevronRight size={16} className="text-rose-500 flex-shrink-0 mt-0.5" /> Bugs sem correção do concorrente a mais de 6 meses.</li>
                                    <li className="flex gap-3"><ChevronRight size={16} className="text-rose-500 flex-shrink-0 mt-0.5" /> Precificação alta sem suporte B2B justificado.</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Section: Exports */}
                    {activeSection === 'exports' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h1 className="text-4xl font-bold text-white mb-6 align-middle">
                                Exportação e Relatórios
                            </h1>
                            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                                Nosso plano Growth permite exportar a análise de mercado do seu dashboard diretamente para documentos limpos, formatados e em White-Label (com sua marca).
                            </p>

                            <h3 className="text-xl font-bold text-white mb-4">Gerando um PDF</h3>
                            <div className="prose prose-invert prose-zinc max-w-none">
                                <ol className="space-y-2 text-zinc-400">
                                    <li>Vá até "Minhas Análises" no dashboard inicial.</li>
                                    <li>Selecione o relatório validado que deseja apresentar.</li>
                                    <li>No topo direito da tela, clique em <strong>Gerar Doc</strong>.</li>
                                    <li>Selecione as cores da sua marca e faça o upload do seu Logotipo e Nome Comercial.</li>
                                    <li>Aguarde cerca de 5 segundos. Nossa IA de formatação irá quebrar os gráficos, adicionar resumos textuais executivos e gerar o arquivo de download.</li>
                                </ol>
                            </div>

                            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="text-sm text-zinc-400">Você também pode exportar os dados brutos (CSV/JSON) para rodar análises customizadas em Python.</div>
                                <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded text-xs font-bold whitespace-nowrap">
                                    Ver Exemplo de PDF
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Section: API */}
                    {activeSection === 'api' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h1 className="text-4xl font-bold text-white mb-6 align-middle flex items-center gap-3">
                                <Settings className="text-pink-500" /> Início Rápido API
                            </h1>
                            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                                Em desenvolvimento fechado. Nossa REST API permitirá injetar o Score de Viabilidade no terminal da sua IDE ou integrá-lo com pipelines de Vagas e Outreaching.
                            </p>

                            <div className="bg-[#0d1117] rounded-xl border border-zinc-800 overflow-hidden mt-6 font-mono text-sm shadow-xl">
                                <div className="flex bg-[#161b22] px-4 py-2 border-b border-zinc-800 items-center justify-between">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="text-xs text-zinc-500">cURL</div>
                                </div>
                                <div className="p-4 text-zinc-300">
                                    <span className="text-pink-400">curl</span> -X POST https://api.metricpath.com/v1/analyze \<br />
                                    &nbsp;&nbsp;-H <span className="text-emerald-300">"Authorization: Bearer mp_sk_live_12345"</span> \<br />
                                    &nbsp;&nbsp;-H <span className="text-emerald-300">"Content-Type: application/json"</span> \<br />
                                    &nbsp;&nbsp;-d <span className="text-amber-300">'{'{"market": "petshop saas", "lang": "pt-BR"}'}'</span>
                                </div>
                            </div>

                            <div className="mt-8 text-sm">
                                <a href="#" className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-bold transition-colors">
                                    Solicitar Chave de Acesso <ArrowUpRight size={14} />
                                </a>
                                <p className="text-zinc-600 mt-2">Atualmente a API está restrita apenas aos usuários do plano Growth e enterprise partners.</p>
                            </div>
                        </div>
                    )}

                </main>
            </div>
        </div>
    );
}

