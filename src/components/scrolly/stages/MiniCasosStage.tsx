import { motion, AnimatePresence } from "framer-motion";
import type { MiniCaso } from "@/content/scrolly";

function caseIndexFromProgress(p: number): number {
  if (p < 0.34) return 0;
  if (p < 0.67) return 1;
  return 2;
}

export function MiniCasosStage({
  miniCasos,
  progress,
}: {
  miniCasos: MiniCaso[];
  progress: number;
}) {
  const idx = caseIndexFromProgress(progress);
  const current = miniCasos[idx] ?? miniCasos[0];

  return (
    <div className="w-full max-w-md mx-auto px-2" aria-hidden>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md shadow-soft p-6 sm:p-8"
        >
          <p className="font-body text-sm sm:text-base text-brand-ink-900 font-medium mb-3">
            {current.situation}
          </p>
          <p className="font-body text-sm text-brand-olive-500 leading-relaxed border-t border-brand-mint-200/40 pt-3">
            {current.action}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
