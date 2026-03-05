import { useState } from 'react';
import { Calculator, AlertTriangle, ArrowRight, DollarSign, Clock, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RoiCalculator() {
    // Estados do cálculo
    const [devHours, setDevHours] = useState<number>(20);
    const [hourlyRate, setHourlyRate] = useState<number>(100);
    const [monthsToLaunch, setMonthsToLaunch] = useState<number>(3);

    // Constantes
    const WEEKS_PER_MONTH = 4;
    const METRICPATH_COST = 59; // R$ 59

    // Cálculos
    const totalHoursPerMonth = devHours * WEEKS_PER_MONTH;
    const totalMonthsHours = totalHoursPerMonth * monthsToLaunch;
    const totalBlindCost = totalMonthsHours * hourlyRate;
    const totalSavings = totalBlindCost - METRICPATH_COST;

    // Formatador de Moeda Moeda
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30 font-sans pb-24">

            {/* Header Area */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 text-indigo-400 mb-6 shadow-xl">
                        <Calculator size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                        O Verdadeiro Custo do Risco
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Construir o produto errado é o erro mais caro que um founder pode cometer. Calcule matematicamente quanto você perde ao codar às cegas sem validar a viabilidade comercial primeiro.
                    </p>
                </div>
            </section>

            {/* Main Calculator Grid */}
            <section className="px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

                        {/* Left Column: Inputs */}
                        <div className="space-y-8 bg-zinc-900/40 p-6 md:p-10 rounded-3xl border border-zinc-800/80 backdrop-blur-sm">
                            <div className="mb-2">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    Suas Estimativas
                                </h2>
                                <p className="text-zinc-500 text-sm mt-1">
                                    Deslize os controles para ajustar as variáveis do seu projeto atual.
                                </p>
                            </div>

                            {/* Input: Horas Semanais */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <label className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                                        <Clock size={16} className="text-zinc-500" />
                                        Horas de dev. por semana
                                    </label>
                                    <span className="text-xl font-bold font-mono text-indigo-400">
                                        {devHours}h
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="80"
                                    step="5"
                                    value={devHours}
                                    onChange={(e) => setDevHours(Number(e.target.value))}
                                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                />
                                <div className="flex justify-between text-xs text-zinc-600 font-medium">
                                    <span>5h (Part-time)</span>
                                    <span>80h (Equipe)</span>
                                </div>
                            </div>

                            {/* Input: Valor da Hora */}
                            <div className="space-y-4 pt-4 border-t border-zinc-800/50">
                                <div className="flex justify-between items-end">
                                    <label className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                                        <DollarSign size={16} className="text-zinc-500" />
                                        Valor da sua hora
                                        <span className="group relative inline-flex cursor-help">
                                            <HelpCircle size={14} className="text-zinc-600 hover:text-zinc-400 transition-colors" />
                                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-zinc-800 text-xs text-zinc-300 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-center">
                                                Custo de oportunidade: Quanto você ganharia prestando serviço ou trabalhando pra fora nesse tempo?
                                            </span>
                                        </span>
                                    </label>
                                    <span className="text-xl font-bold font-mono text-indigo-400">
                                        {formatCurrency(hourlyRate)}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="30"
                                    max="400"
                                    step="10"
                                    value={hourlyRate}
                                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                />
                                <div className="flex justify-between text-xs text-zinc-600 font-medium">
                                    <span>R$ 30/h (Júnior BRL)</span>
                                    <span>R$ 400/h (Sênior USD)</span>
                                </div>
                            </div>

                            {/* Input: Meses até o Lançamento */}
                            <div className="space-y-4 pt-4 border-t border-zinc-800/50">
                                <div className="flex justify-between items-end">
                                    <label className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                                        <AlertTriangle size={16} className="text-zinc-500" />
                                        Meses até lançar o MVP
                                    </label>
                                    <span className="text-xl font-bold font-mono text-indigo-400">
                                        {monthsToLaunch} {monthsToLaunch === 1 ? 'mês' : 'meses'}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="12"
                                    step="1"
                                    value={monthsToLaunch}
                                    onChange={(e) => setMonthsToLaunch(Number(e.target.value))}
                                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                />
                                <div className="flex justify-between text-xs text-zinc-600 font-medium">
                                    <span>1 mês (Ultra Lean)</span>
                                    <span>12 meses (Risco Máximo)</span>
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Results */}
                        <div className="flex flex-col justify-center">

                            {/* Receipt Card */}
                            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[40px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-500" />

                                <h3 className="text-zinc-400 font-medium tracking-wide uppercase text-sm mb-6 flex items-center gap-2">
                                    O Matemático do Fracasso
                                </h3>

                                <div className="space-y-6">

                                    {/* Cost 1 */}
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-zinc-400">Desenvolvimento Cego</span>
                                            <span className="font-mono text-zinc-500">{totalMonthsHours}h construindo</span>
                                        </div>
                                        <div className="text-3xl sm:text-4xl font-black text-rose-500 tracking-tight font-mono line-through opacity-80 decoration-rose-500/50 decoration-4">
                                            {formatCurrency(totalBlindCost)}
                                        </div>
                                        <p className="text-xs text-rose-500/80 mt-1">
                                            Isso é o que você literalmente joga no lixo se o mercado rejeitar a ideia em {monthsToLaunch} {monthsToLaunch === 1 ? 'mês' : 'meses'}.
                                        </p>
                                    </div>

                                    {/* Cost 2 */}
                                    <div className="pt-6 border-t border-zinc-800">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-zinc-100 font-medium flex items-center gap-2">
                                                Custo com MetricPath
                                                <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">Seguro</span>
                                            </span>
                                        </div>
                                        <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono flex items-baseline gap-2">
                                            {formatCurrency(METRICPATH_COST)}
                                            <span className="text-sm font-medium text-zinc-500 font-sans tracking-normal">/relatório único</span>
                                        </div>
                                        <p className="text-xs text-zinc-400 mt-2">
                                            Menos de duas horas do seu tempo (na tarifa selecionada) para validar um mercado e poupar {totalMonthsHours}h de frustração.
                                        </p>
                                    </div>

                                    {/* Highlight Result */}
                                    <div className="pt-6 border-t border-zinc-800">
                                        <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 rounded-2xl p-5 relative overflow-hidden">
                                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/20 blur-xl rounded-full pointer-events-none" />

                                            <p className="text-emerald-400/80 font-medium text-sm mb-1 relative z-10">Sua economia real ao evitar código inútil:</p>
                                            <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tighter font-mono relative z-10">
                                                {formatCurrency(totalSavings)}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* CTA Action */}
                            <div className="mt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-indigo-500/5 rounded-2xl border border-indigo-500/20">
                                <div>
                                    <h4 className="text-white font-bold text-lg">Pronto para mitigar seu risco?</h4>
                                    <p className="text-zinc-400 text-sm">Gere um relatório completo agora e pare de codar no escuro.</p>
                                </div>
                                <Link
                                    to="/pricing"
                                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)] whitespace-nowrap"
                                >
                                    Ver Planos <ArrowRight size={18} />
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

