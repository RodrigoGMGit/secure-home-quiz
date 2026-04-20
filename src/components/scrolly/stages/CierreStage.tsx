import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function CierreStage() {
  const reduced = useReducedMotion();
  return (
    <div className="flex items-center justify-center w-full" aria-hidden>
      <motion.div
        className="relative flex items-center justify-center rounded-full w-44 h-44 sm:w-52 sm:h-52 bg-gradient-to-br from-brand-teal-500/30 via-brand-mint-200/40 to-brand-teal-500/20 border border-brand-mint-200/50 shadow-cta"
        animate={reduced ? { scale: 1 } : { scale: [1, 1.03, 1] }}
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <div className="absolute inset-4 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
          <ShieldCheck className="w-16 h-16 sm:w-20 sm:h-20 text-brand-teal-500" strokeWidth={1.5} />
        </div>
      </motion.div>
    </div>
  );
}
