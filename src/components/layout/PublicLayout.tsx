
import { BarChart3, ChevronRight, Code2, Globe, MessageSquare, Shield, Lock } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

export function PublicLayout() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30 font-sans">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                                <BarChart3 className="text-white w-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">MetricPath</span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Login</Link>
                        <Link to="/signup" className="px-4 py-2 bg-white text-zinc-950 text-sm font-bold rounded-full hover:bg-zinc-200 transition-colors">
                            Começar Grátis
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="pt-16">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 bg-[#05070A] pt-20 pb-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        {/* Brand & Micro-CTA */}
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                                    <BarChart3 className="text-white w-5" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">MetricPath</span>
                            </div>
                            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                                Inteligência de mercado para quem constrói o futuro. Valide suas ideias com dados, não com "achismos".
                            </p>
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-1.5 flex items-center">
                                <input
                                    type="email"
                                    placeholder="Seu melhor email..."
                                    className="bg-transparent border-none text-xs text-white placeholder-zinc-600 focus:ring-0 w-full px-2"
                                />
                                <button className="bg-white text-zinc-950 p-1.5 rounded-md hover:bg-zinc-200 transition-colors">
                                    <ChevronRight size={14} />
                                </button>
                            </div>
                            <p className="text-[10px] text-zinc-600 mt-2">Receba tendências de nichos validados.</p>
                        </div>

                        {/* Navigation Columns */}
                        <div>
                            <h4 className="font-bold text-white mb-6">Produto</h4>
                            <ul className="space-y-4 text-sm text-zinc-500">
                                <li><Link to="/features" className="hover:text-indigo-400 transition-colors">Recursos</Link></li>
                                <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Preços</Link></li>
                                <li><Link to="/api-docs" className="hover:text-indigo-400 transition-colors">API Docs</Link> <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded border border-indigo-500/20 ml-1">Beta</span></li>
                                <li><Link to="/changelog" className="hover:text-indigo-400 transition-colors">Changelog</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6">Recursos</h4>
                            <ul className="space-y-4 text-sm text-zinc-500">
                                <li><Link to="/blog" className="hover:text-indigo-400 transition-colors">Blog: Validação</Link></li>
                                <li><Link to="/docs" className="hover:text-indigo-400 transition-colors">Guia de Uso</Link></li>
                                <li><Link to="/glossary" className="hover:text-indigo-400 transition-colors">Glossário IVM</Link></li>
                                <li><Link to="/roi-calculator" className="hover:text-indigo-400 transition-colors">Calculadora ROI</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6">Empresa</h4>
                            <ul className="space-y-4 text-sm text-zinc-500">
                                <li><Link to="/about" className="hover:text-indigo-400 transition-colors">Sobre Nós</Link></li>
                                <li><Link to="/roadmap" className="hover:text-indigo-400 transition-colors">Roadmap Público</Link></li>
                                <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contato</Link></li>
                                <li><div className="flex items-center gap-2 opacity-50"><Globe size={14} /> <span>Pt-BR</span></div></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Copyright & Location */}
                        <div className="text-center md:text-left">
                            <p className="text-zinc-600 text-xs mb-1">© 2026 MetricPath Inc. Todos os direitos reservados.</p>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] text-zinc-700 font-mono uppercase tracking-wide">
                                <span>Made with ❤️ in Brazil</span>
                                <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
                                <span>São Paulo, SP</span>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono border border-zinc-800 px-2 py-1 rounded bg-zinc-900/50">
                                <Lock size={10} /> SSL Secured
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono border border-zinc-800 px-2 py-1 rounded bg-zinc-900/50">
                                <Shield size={10} /> Data Protected
                            </div>
                        </div>

                        {/* Social & Legal */}
                        <div className="flex flex-col items-end gap-4">
                            <div className="flex gap-4">
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><span className="sr-only">GitHub</span><Code2 size={18} /></a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors"><span className="sr-only">Twitter</span><Globe size={18} /></a>
                                <a href="https://discord.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-indigo-500 transition-colors"><span className="sr-only">Discord</span><MessageSquare size={18} /></a>
                            </div>
                            <div className="flex gap-4 text-xs text-zinc-600">
                                <Link to="/privacy" className="hover:text-zinc-400 transition-colors">Privacidade</Link>
                                <Link to="/terms" className="hover:text-zinc-400 transition-colors">Termos</Link>
                                <Link to="/cookie-policy" className="hover:text-zinc-400 transition-colors">Cookies</Link>
                                <Link to="/refund-policy" className="hover:text-zinc-400 transition-colors">Reembolso</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
