import { CreditCard, Key, Bell, User, Shield, AlertTriangle, Download, LogOut, Plus, Check } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Settings() {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState<'profile' | 'plan' | 'security' | 'notifications' | 'api'>('profile');

    return (
        <div className="p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            <h1 className="text-3xl font-bold text-white mb-2">Configurações</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Visual Tabs Sidebar */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-2 h-fit space-y-1">
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'profile' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'}`}
                    >
                        <User size={16} /> Perfil
                    </button>
                    <button
                        onClick={() => setActiveTab('plan')}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'plan' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'}`}
                    >
                        <CreditCard size={16} /> Planos e Créditos
                    </button>
                    <button
                        onClick={() => setActiveTab('security')}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'security' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'}`}
                    >
                        <Shield size={16} /> Segurança
                    </button>
                    <button
                        onClick={() => setActiveTab('notifications')}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'notifications' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'}`}
                    >
                        <Bell size={16} /> Notificações
                    </button>
                    <button
                        onClick={() => setActiveTab('api')}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'api' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'}`}
                    >
                        <Key size={16} /> API & Integrações
                    </button>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-3 space-y-6">
                    {activeTab === 'profile' && (
                        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 animate-in fade-in slide-in-from-right-4 duration-300">
                            <h2 className="text-xl font-bold text-white mb-6">Perfil Público</h2>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 border-4 border-zinc-950 shadow-xl flex items-center justify-center text-2xl font-bold text-white">
                                    {user?.username.substring(0, 2).toUpperCase()}
                                </div>
                                <div>
                                    <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-bold rounded-lg transition-colors border border-zinc-700">Alterar Avatar</button>
                                    <p className="text-xs text-zinc-500 mt-2">Integração com Gravatar disponível</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Nome de Usuário</label>
                                    <input
                                        type="text"
                                        defaultValue={user?.username}
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Email</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            defaultValue={user?.email}
                                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                        />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 flex items-center gap-1 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                            <Check size={12} /> Verificado
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Função / Role</label>
                                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                                        <option>Indie Hacker</option>
                                        <option>Desenvolvedor</option>
                                        <option>Gerente de Produto</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-indigo-600/20">Salvar Alterações</button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'plan' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-white">Plano Atual</h2>
                                        <p className="text-zinc-400 text-sm">Gerencie sua assinatura e uso de créditos.</p>
                                    </div>
                                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg shadow-indigo-500/20">
                                        {user?.subscription_status || 'Free Tier'}
                                    </span>
                                </div>

                                <div className="mb-8">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm font-medium text-zinc-300">Créditos Restantes</span>
                                        <span className="text-2xl font-bold text-white">{user?.credits_balance} <span className="text-sm text-zinc-500 font-normal">/ 10</span></span>
                                    </div>
                                    <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${(user?.credits_balance || 0) * 10}%` }}></div>
                                    </div>
                                    <p className="text-xs text-zinc-500 mt-2">Seus créditos renovam em 14 de Março, 2026.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button
                                        onClick={async () => {
                                            try {
                                                const token = localStorage.getItem('token');
                                                const response = await fetch('http://localhost:8000/api/billing/checkout/', {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                        'Authorization': `Token ${token}`
                                                    },
                                                    body: JSON.stringify({
                                                        price_id: 'price_1Q...', // User needs to provide real price ID or use env
                                                        return_url: window.location.origin
                                                    })
                                                });
                                                const data = await response.json();
                                                if (data.url) {
                                                    window.location.href = data.url;
                                                } else {
                                                    alert('Erro ao iniciar checkout: ' + (data.error || 'Unknown error'));
                                                }
                                            } catch (e) {
                                                console.error(e);
                                                alert('Erro de conexão');
                                            }
                                        }}
                                        className="flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-600/20"
                                    >
                                        <Plus size={18} /> Comprar Créditos
                                    </button>
                                    <button className="flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl transition-colors border border-zinc-700">
                                        Gerenciar Assinatura
                                    </button>
                                </div>
                            </div>

                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
                                <h3 className="text-lg font-bold text-white mb-4">Histórico de Faturamento</h3>
                                <div className="space-y-1">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center justify-between p-3 hover:bg-zinc-800/50 rounded-lg transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                <div className="p-2 bg-zinc-800 text-zinc-400 rounded-lg group-hover:bg-zinc-700 group-hover:text-white transition-colors">
                                                    <Download size={16} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-white">Fatura #{4000 + i}</p>
                                                    <p className="text-xs text-zinc-500">14 Fev 2026</p>
                                                </div>
                                            </div>
                                            <span className="text-sm font-bold text-white">$29.00</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
                                <h2 className="text-xl font-bold text-white mb-6">Segurança da Conta</h2>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Senha Atual</label>
                                        <input type="password" placeholder="••••••••" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Nova Senha</label>
                                            <input type="password" placeholder="••••••••" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Confirmar Senha</label>
                                            <input type="password" placeholder="••••••••" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-lg transition-colors border border-zinc-700">Atualizar Senha</button>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-zinc-800">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold text-white">Autenticação de Dois Fatores (2FA)</h3>
                                            <p className="text-sm text-zinc-400 mt-1">Adicione uma camada extra de segurança à sua conta.</p>
                                        </div>
                                        <button className="px-4 py-2 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 font-bold rounded-lg transition-colors border border-indigo-600/20">
                                            Ativar 2FA
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
                                <h3 className="text-lg font-bold text-white mb-4">Sessões Ativas</h3>
                                <div className="flex items-center justify-between p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                        <div>
                                            <p className="text-sm font-medium text-white">Chrome no MacOS</p>
                                            <p className="text-xs text-zinc-500">Rio de Janeiro, BR • Ativo agora</p>
                                        </div>
                                    </div>
                                    <button className="text-xs font-bold text-rose-400 hover:text-rose-300">Revogar</button>
                                </div>
                            </div>

                            {/* Danger Zone */}
                            <div className="bg-rose-950/10 border border-rose-500/20 rounded-3xl p-8">
                                <h3 className="text-lg font-bold text-rose-400 mb-4 flex items-center gap-2">
                                    <AlertTriangle size={20} />
                                    Danger Zone
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-zinc-200">Exportar Dados</p>
                                            <p className="text-xs text-zinc-500">Baixe uma cópia de todas as suas análises.</p>
                                        </div>
                                        <button className="px-3 py-1.5 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white text-xs font-bold rounded-lg transition-colors">
                                            Exportar JSON
                                        </button>
                                    </div>
                                    <div className="h-px bg-rose-500/20" />
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-zinc-200">Excluir Conta</p>
                                            <p className="text-xs text-zinc-500">Ação irreversível. Todos os dados serão perdidos.</p>
                                        </div>
                                        <button className="px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold rounded-lg transition-colors">
                                            Excluir Conta
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 animate-in fade-in slide-in-from-right-4 duration-300">
                            <h2 className="text-xl font-bold text-white mb-6">Preferências de Notificação</h2>
                            <div className="space-y-4">
                                {['Novos concorrentes detectados', 'Tendências semanais do nicho', 'Alertas de segurança', 'Atualizações do produto'].map((item) => (
                                    <label key={item} className="flex items-center justify-between p-4 bg-zinc-950 border border-zinc-800 rounded-xl cursor-pointer hover:border-zinc-700 transition-colors">
                                        <span className="text-sm font-medium text-white">{item}</span>
                                        <input type="checkbox" defaultChecked className="accent-indigo-500 w-5 h-5 rounded" />
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'api' && (
                        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-white">Chaves de API</h2>
                                <button className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-colors">
                                    + Nova Chave
                                </button>
                            </div>
                            <p className="text-zinc-500 mb-6 text-sm">Use chaves de API para autenticar requisições de scripts externos ou integrações.</p>

                            <div className="space-y-4">
                                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-zinc-900 rounded-lg">
                                            <Key size={16} className="text-indigo-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">Chave de Produção</p>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <span className="font-mono text-xs text-zinc-500">sk_live_51Mcs...89sfd</span>
                                                <button className="text-xs text-indigo-400 hover:underline">Copiar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-colors">Regenerar</button>
                                        <button className="p-2 hover:bg-rose-500/10 text-zinc-400 hover:text-rose-500 rounded-lg transition-colors">
                                            <LogOut size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-zinc-800">
                                <h3 className="font-bold text-white mb-4">Webhooks</h3>
                                <button className="w-full py-3 border-2 border-dashed border-zinc-800 hover:border-zinc-700 rounded-xl text-zinc-500 hover:text-zinc-300 text-sm font-bold transition-colors">
                                    Adicionar Endpoint de Webhook
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
