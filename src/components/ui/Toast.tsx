import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { useEffect } from "react";
import { cn } from "../../lib/utils";

export type ToastType = "success" | "error" | "info";

export interface ToastProps {
    id: string;
    message: string;
    type: ToastType;
    onClose: (id: string) => void;
    duration?: number;
}

const icons = {
    success: <CheckCircle className="w-5 h-5 text-emerald-400" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400" />,
    info: <Info className="w-5 h-5 text-indigo-400" />,
};

const bgColors = {
    success: "bg-zinc-900 border-emerald-500/20",
    error: "bg-zinc-900 border-rose-500/20",
    info: "bg-zinc-900 border-indigo-500/20",
};

export function Toast({ id, message, type, onClose, duration = 4000 }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(id);
        }, duration);

        return () => clearTimeout(timer);
    }, [id, duration, onClose]);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={cn(
                "flex items-center gap-3 p-4 rounded-xl border shadow-xl backdrop-blur-md min-w-[300px] max-w-sm pointer-events-auto",
                bgColors[type]
            )}
        >
            <div className="flex-shrink-0">{icons[type]}</div>
            <p className="flex-1 text-sm font-medium text-zinc-200">{message}</p>
            <button
                onClick={() => onClose(id)}
                className="p-1 rounded-lg hover:bg-white/10 text-zinc-500 hover:text-white transition-colors"
            >
                <X size={14} />
            </button>
        </motion.div>
    );
}

export function ToastContainer({ toasts, removeToast }: { toasts: ToastProps[], removeToast: (id: string) => void }) {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
            <AnimatePresence mode="popLayout">
                {toasts.map((toast) => (
                    <Toast key={toast.id} {...toast} onClose={removeToast} />
                ))}
            </AnimatePresence>
        </div>
    );
}
