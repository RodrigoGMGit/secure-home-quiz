import { motion, useReducedMotion } from "framer-motion";
import { HeartPulse, MessagesSquare, Moon } from "lucide-react";

export function SenalesStage() {
  const reduced = useReducedMotion();
  const pulse = reduced ? {} : { scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] };

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[4/3] flex items-center justify-center" aria-hidden>
      <svg viewBox="0 0 320 240" className="w-full h-auto" aria-hidden>
        <ellipse cx="160" cy="200" rx="120" ry="24" fill="hsl(var(--brand-olive-500) / 0.12)" />
        <rect
          x="60"
          y="60"
          width="200"
          height="140"
          rx="8"
          fill="#ffffff"
          stroke="hsl(var(--brand-mint-200) / 0.5)"
          strokeWidth="2"
        />
        <circle cx="220" cy="110" r="28" fill="hsl(var(--brand-teal-500) / 0.22)" />
        <rect x="100" y="100" width="48" height="72" rx="6" fill="hsl(var(--brand-ink-900) / 0.08)" />
        <rect x="108" y="108" width="32" height="48" rx="2" fill="hsl(var(--brand-teal-500) / 0.35)" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center gap-6 sm:gap-8 pointer-events-none">
        {[Moon, HeartPulse, MessagesSquare].map((Icon, i) => (
          <motion.div
            key={i}
            className="rounded-full bg-brand-mint-200/60 p-3 text-brand-ink-800 shadow-soft"
            animate={pulse}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 2.2, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }
            }
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
