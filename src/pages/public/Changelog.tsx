import { ArrowRight, Sparkles, Zap, Bug, GitCommit } from 'lucide-react';
import { Link } from 'react-router-dom';

// Tipo de tag para o Changelog
type TagType = 'feature' | 'improvement' | 'bugfix';

const getTagConfig = (type: TagType) => {
    switch (type) {
        case 'feature':
            return {
                label: 'New Feature',
                colors: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
                icon: <Sparkles size={12} className="text-emerald-400" />
            };
        case 'improvement':
            return {
                label: 'Improvement',
                colors: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
                icon: <Zap size={12} className="text-indigo-400" />
            };
        case 'bugfix':
            return {
                label: 'Bugfix',
                colors: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
                icon: <Bug size={12} className="text-rose-400" />
            };
    }
}

// Mock de dados de atualização
const updates = [
    {
        id: 1,
        version: "v2.4.0",
        date: "14 de Setembro, 2026",
        tag: "feature" as TagType,
        title: "Integração completa com a API do LinkedIn",
        description: "Agora é possível analisar a saturação de mercado focado em B2B observando postagens e sentimento de empresas reais dentro do LinkedIn. Adicionamos 3 novos tipos de gráficos no dashboard do Indie Builder.",
        bullets: [
            "Conexão direta com a API V2 do LinkedIn.",
            "Visualização de sentimento (Positivo, Neutro, Negativo) extraído de posts.",
            "Filtro de cargos e influência (Decision Makers)."
        ],
        author: "Rafael",
    },
    {
        id: 2,
        version: "v2.3.2",
        date: "05 de Setembro, 2026",
        tag: "improvement" as TagType,
        title: "Velocidade de pesquisa global otimizada em 400%",
        description: "Reescrevemos nosso crawler de indexação usando Go. As pesquisas que antes demoravam 30-45 segundos agora retornam os dados consolidados em menos de 10 segundos.",
        author: "Camila",
    },
    {
        id: 3,
        version: "v2.3.1",
        date: "28 de Agosto, 2026",
        tag: "bugfix" as TagType,
        title: "Correção na exportação de PDFs White-Label",
        description: "Resolvemos um glitch onde o logo de customização do cliente ficava levemente pixelado caso a imagem original não estivesse no formato SVG.",
        author: "João",
    },
    {
        id: 4,
        version: "v2.3.0",
        date: "15 de Agosto, 2026",
        tag: "feature" as TagType,
        title: "Lançamento do Gap Discovery (IA para Reviews)",
        description: "Nossa feature principal do semestre chegou. O MetricPath agora lê até 5.000 reviews negativos dos concorrentes nas App Stores e G2, e resume tudo em 5 dores principais para você focar.",
        bullets: [
            "Exportação direto para o Notion ou Trello.",
            "Filtro automático para descartar reviews vazios (Spam)."
        ],
        author: "Rafael",
    }
]

export default function Changelog() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30 font-sans pb-20">
            {/* Header */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden border-b border-white/5 bg-zinc-950">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950 pointer-events-none" />

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono uppercase tracking-wider mb-8">
                        <GitCommit size={14} /> Histórico de Atualizações
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                        Nós shipamos rápido.
                    </h1>
                    <p className="text-lg text-zinc-400 mb-6 max-w-xl mx-auto">
                        Acompanhe todas as novas funcionalidades, melhorias de performance e bugs esmagados pela nossa equipe.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l border-zinc-800/60 ml-3 md:ml-0 space-y-16">

                        {updates.map((update) => {
                            const tagStyle = getTagConfig(update.tag);

                            return (
                                <div key={update.id} className="relative pl-8 md:pl-12 group">
                                    {/* Indicar na linha */}
                                    <div className="absolute top-1 -left-[5px] w-2.5 h-2.5 rounded-full bg-zinc-950 border-2 border-zinc-600 group-hover:border-indigo-400 transition-colors z-10 hidden md:block"></div>
                                    <div className="absolute top-1 left-[-5px] w-2.5 h-2.5 rounded-full bg-zinc-950 border-2 border-zinc-600 group-hover:border-indigo-400 transition-colors z-10 md:hidden"></div>

                                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 mb-4">
                                        <div className="text-zinc-500 font-mono text-sm">{update.date}</div>
                                        <div className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full"></div>
                                        <div className="text-zinc-400 font-bold text-sm bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 self-start md:self-auto">{update.version}</div>
                                    </div>

                                    <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-900/60 transition-colors group-hover:border-zinc-700">
                                        <div className="mb-4">
                                            <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border ${tagStyle.colors}`}>
                                                {tagStyle.icon} {tagStyle.label}
                                            </span>
                                        </div>

                                        <h2 className="text-xl md:text-2xl font-bold mb-4 text-zinc-100">{update.title}</h2>
                                        <p className="text-zinc-400 leading-relaxed mb-6">
                                            {update.description}
                                        </p>

                                        {update.bullets && (
                                            <ul className="mb-6 space-y-2">
                                                {update.bullets.map((bullet, idx) => (
                                                    <li key={idx} className="flex gap-3 text-zinc-300 text-sm">
                                                        <span className="text-zinc-600 mt-0.5">-</span> {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/50">
                                            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                                                <span className="text-[10px] font-bold text-zinc-400">{update.author.charAt(0)}</span>
                                            </div>
                                            <span className="text-xs text-zinc-500">Escrito por <span className="text-zinc-400 font-medium">{update.author}</span></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Bottom */}
            <section className="py-20 px-6 border-t border-white/5 bg-zinc-950">
                <div className="max-w-3xl mx-auto text-center bg-zinc-900/50 border border-zinc-800 rounded-2xl p-10">
                    <h3 className="text-2xl font-bold mb-4">Tem um pedido de nova feature?</h3>
                    <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                        Nós construímos o MetricPath para a comunidade. Se existe algo que salvaria suas preciosas horas na validação de projetos, conte para nós.
                    </p>
                    <Link to="/roadmap" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-950 rounded-lg font-bold transition-colors">
                        Sugerir ou Votar no Roadmap <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}

