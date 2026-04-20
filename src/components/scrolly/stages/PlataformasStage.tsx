import { motion } from "framer-motion";
import { PLATFORM_LOGO_NODES } from "../platformLogos";

export function PlataformasStage({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  return (
    <div
      className="grid grid-cols-3 gap-4 sm:gap-6 max-w-sm mx-auto w-full place-items-center"
      aria-hidden
    >
      {PLATFORM_LOGO_NODES.map((node, i) => (
        <motion.div
          key={i}
          initial={
            prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.45, delay: i * 0.08, ease: "easeOut" }
          }
          className="flex items-center justify-center rounded-2xl bg-white/90 border border-brand-mint-200/40 p-4 shadow-soft"
        >
          {node}
        </motion.div>
      ))}
    </div>
  );
}
