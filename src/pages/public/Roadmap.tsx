import { Milestone, CheckCircle2, CircleDashed, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Tipagem e Dados do Roadmap
type Status = 'done' | 'in-progress' | 'planned';
type Category = 'Feature' | 'Integração' | 'Core' | 'UX';

interface RoadmapItem {
    id: string;
    title: string;
    description: string;
    status: Status;
    category: Category;
    date?: string; // Para itens concluídos
}

const roadmapData: RoadmapItem[] = [
    // Concluídos (Done)
    {
        id: '1',
        title: 'Score de Viabilidade (IVM)',
        description: 'O algoritmo proprietário que cruza demanda de busca com saturação competitiva.',
        status: 'done',
        category: 'Core',
        date: 'Out 2023',
    },
    {
        id: '2',
        title: 'Kits de Exportação',
        description: 'Geração de PDFs formatados com os resultados da auditoria de mercado.',
        status: 'done',
        category: 'Feature',
        date: 'Dez 2023',
    },

    // Em Desenvolvimento (In Progress)
    {
        id: '3',
        title: 'Gap Discovery (IA)',
        description: 'Motor de Inteligência Artificial que lê centenas de reviews ocultos e extrai reclamações de usuários dos concorrentes.',
        status: 'in-progress',
        category: 'Feature',
    },
    {
        id: '4',
        title: 'Integração B2B In-Depth',
        description: 'Conexão nativa com CRMs para agências qualificarem leads baseados no IVM antes das calls de vendas.',
        status: 'in-progress',
        category: 'Integração',
    },

    // A Seguir (Planned)
    {
        id: '5',
        title: 'Exportação White-Label',
        description: 'Permitir que agências gerem relatórios customizados com a sua própria logo e paleta de cores para envio aos clientes finais.',
        status: 'planned',
        category: 'Feature',
    },
    {
        id: '6',
        title: 'Tracking Competitivo Contínuo',
        description: 'Alertas automáticos via email/slack quando um concorrente rastreado lançar uma nova feature ou tiver um pico de reclamações.',
        status: 'planned',
        category: 'Core',
    },
    {
        id: '7',
        title: 'API REST Pública',
        description: 'Disponibilizar endpoints documentados para desenvolvedores injetarem o Viability Score diretamente em suas IDEs ou pipelines.',
        status: 'planned',
        category: 'Integração',
    }
];

export default function Roadmap() {

    // Filtros por status
    const doneItems = roadmapData.filter(item => item.status === 'done');
    const inProgressItems = roadmapData.filter(item => item.status === 'in-progress');
    const plannedItems = roadmapData.filter(item => item.status === 'planned');

    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-indigo-500/30 pb-24">

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden border-b border-white/5 bg-zinc-950">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-zinc-950 to-zinc-950 pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 text-indigo-400 mb-6 shadow-xl">
                        <Milestone size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                        Roadmap Público
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Veja o que estamos construindo nos bastidores, o que já entregamos e participe ativamente do futuro da plataforma solicitando recursos.
                    </p>
                </div>
            </section>

            {/* Kanban Board Section */}
            <section className="py-16 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                        {/* Column: Concluído (Done) */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 mb-2 px-2">
                                <CheckCircle2 size={18} className="text-emerald-500" />
                                <h2 className="text-lg font-bold text-white">Concluído</h2>
                                <span className="ml-auto bg-zinc-900 text-zinc-500 text-xs px-2 py-1 rounded-full">{doneItems.length}</span>
                            </div>

                            <div className="space-y-4">
                                {doneItems.map(item => (
                                    <div key={item.id} className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5 hover:border-zinc-700 transition-colors">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/80 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                                                {item.category}
                                            </span>
                                            {item.date && <span className="text-xs text-zinc-500 font-medium">{item.date}</span>}
                                        </div>
                                        <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                        <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Column: Em Desenvolvimento (In Progress) */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 mb-2 px-2">
                                <div className="relative flex h-4 w-4 items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                                </div>
                                <h2 className="text-lg font-bold text-white">Em Desenvolvimento</h2>
                                <span className="ml-auto bg-zinc-900 text-zinc-500 text-xs px-2 py-1 rounded-full">{inProgressItems.length}</span>
                            </div>

                            <div className="space-y-4">
                                {inProgressItems.map(item => (
                                    <div key={item.id} className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 border border-amber-500/20 rounded-2xl p-5 shadow-[0_0_15px_rgba(245,158,11,0.05)] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[30px] rounded-full pointer-events-none" />
                                        <div className="flex items-center justify-between mb-3 relative z-10">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400/80 bg-amber-500/10 px-2.5 py-1 rounded-full">
                                                {item.category}
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold mb-2 relative z-10">{item.title}</h3>
                                        <p className="text-sm text-zinc-400 leading-relaxed relative z-10">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Column: A Seguir (Planned) */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 mb-2 px-2">
                                <CircleDashed size={18} className="text-indigo-400" />
                                <h2 className="text-lg font-bold text-white">A Seguir</h2>
                                <span className="ml-auto bg-zinc-900 text-zinc-500 text-xs px-2 py-1 rounded-full">{plannedItems.length}</span>
                            </div>

                            <div className="space-y-4">
                                {plannedItems.map(item => (
                                    <div key={item.id} className="bg-zinc-900/20 border border-zinc-800/50 rounded-2xl p-5 hover:bg-zinc-900/40 hover:border-zinc-700/80 transition-all border-dashed">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400/80 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                                                {item.category}
                                            </span>
                                        </div>
                                        <h3 className="text-zinc-300 font-bold mb-2">{item.title}</h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Request Feature CTA */}
            <section className="px-6 py-16 relative">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div className="max-w-lg">
                            <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-400 mb-4 md:hidden mx-auto">
                                <Rocket size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Sentindo falta de algo?</h3>
                            <p className="text-zinc-400 text-sm">Escutamos fanaticamente os nossos usuários. Se o MetricPath não cobre o seu caso de uso, adoraríamos saber como podemos melhorar.</p>
                        </div>
                        <a
                            href="mailto:founders@metricpath.com"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors whitespace-nowrap"
                        >
                            Sugerir Funcionalidade <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}

