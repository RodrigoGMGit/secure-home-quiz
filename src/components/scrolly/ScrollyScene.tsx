import type { ReactNode } from "react";
import { motion } from "framer-motion";

export interface ScrollySceneProps {
  index: number;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  /** Contenido extra bajo el título (párrafos, listas) */
  className?: string;
}

/**
 * Paso de scrollama: `data-scrolly-scene` + altura mínima de viewport.
 */
export function ScrollyScene({
  index,
  eyebrow,
  title,
  children,
  className = "",
}: ScrollySceneProps) {
  return (
    <section
      data-scrolly-scene={index}
      className={`min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex flex-col justify-center flex-shrink-0 px-4 sm:px-6 py-10 sm:py-12 md:py-16 ${className}`}
      aria-labelledby={`scrolly-scene-title-${index}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-15% 0px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-xl mx-auto md:mx-0 md:max-w-lg w-full"
      >
        <p className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-wide text-brand-teal-500 mb-3">
          {eyebrow}
        </p>
        <h2
          id={`scrolly-scene-title-${index}`}
          className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink-900 mb-4 sm:mb-6 leading-tight"
        >
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}
