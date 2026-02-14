import { MessageSquare } from 'lucide-react';
import { cn } from '../../lib/utils';

export const SentimentFeed = () => (
    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl h-full">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <MessageSquare size={18} className="text-cyan-500" />
            Sentiment Scan
        </h3>
        <div className="space-y-4">
            {[
                { text: "Concorrente X não tem integração com Stripe BR.", status: "Frustração", score: -82 },
                { text: "A UX do Teachable é muito lenta no mobile.", status: "Oportunidade", score: 94 },
                { text: "Precisamos de algo mais simples para cursos no Telegram.", status: "Demanda", score: 88 }
            ].map((item, i) => (
                <div key={i} className="p-4 bg-zinc-950/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
                    <p className="text-zinc-400 text-xs italic mb-2 leading-relaxed">"{item.text}"</p>
                    <div className="flex justify-between items-center">
                        <span className={cn(
                            "text-[10px] font-black uppercase tracking-wider",
                            item.score > 0 ? 'text-emerald-500' : 'text-rose-500'
                        )}>
                            {item.status}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-600">Impacto: {Math.abs(item.score)}%</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
