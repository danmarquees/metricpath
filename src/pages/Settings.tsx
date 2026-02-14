import { CreditCard, Key, Bell, User } from 'lucide-react';

export default function Settings() {
    return (
        <div className="p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            <h1 className="text-3xl font-bold text-white mb-2">Configurações</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Visual Tabs Sidebar */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-2 h-fit space-y-1">
                    <button className="w-full flex items-center gap-3 px-4 py-2 bg-zinc-800 text-white rounded-lg text-sm font-medium">
                        <User size={16} /> Perfil
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg text-sm font-medium transition-colors">
                        <CreditCard size={16} /> Planos e Cobrança
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg text-sm font-medium transition-colors">
                        <Key size={16} /> API Keys
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg text-sm font-medium transition-colors">
                        <Bell size={16} /> Notificações
                    </button>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Profile Section */}
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
                        <h2 className="text-xl font-bold text-white mb-6">Perfil Público</h2>
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 border-4 border-zinc-950 shadow-xl" />
                            <div>
                                <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-bold rounded-lg transition-colors border border-zinc-700">Alterar Avatar</button>
                                <p className="text-xs text-zinc-500 mt-2">Recomendado: 400x400px</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Nome de Exibição</label>
                                <input
                                    type="text"
                                    defaultValue="Indie Maker"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Email</label>
                                <input
                                    type="email"
                                    defaultValue="maker@indie.co"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Bio</label>
                                <textarea
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors min-h-[100px]"
                                    defaultValue="Building shipping things."
                                />
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors">Salvar Alterações</button>
                        </div>
                    </div>

                    {/* API Section Preview */}
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 opacity-75 grayscale hover:grayscale-0 transition-all cursor-not-allowed">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-white">API Keys</h2>
                            <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded border border-indigo-500/20">Pro Plan Only</span>
                        </div>
                        <p className="text-zinc-500 mb-4">Gerencie chaves de API para integrar o MetricPath com suas próprias ferramentas.</p>
                        <div className="flex items-center gap-2 bg-zinc-950 p-3 rounded-lg border border-zinc-800 font-mono text-sm text-zinc-600">
                            sk_live_51M... <span className="text-zinc-800 select-none">••••••••••••••••</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
