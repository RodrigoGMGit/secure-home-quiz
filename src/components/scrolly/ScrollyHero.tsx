import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function ScrollyHero() {
  return (
    <section className="min-h-[70vh] sm:min-h-[75vh] md:min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <p className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-wide text-brand-teal-500 mb-4">
          Hogares Seguros
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 leading-tight mb-6">
          Navega esta historia para fortalecer tu hogar digital
        </h1>
        <p className="font-body text-base sm:text-lg md:text-xl text-brand-olive-500 leading-relaxed mb-10">
          Descubre señales, acciones rápidas y un plan claro para acompañar mejor a tu familia.
        </p>
        <p className="font-body text-sm text-brand-olive-500 inline-flex items-center gap-2">
          Desliza para comenzar
          <ChevronDown className="w-4 h-4 text-brand-teal-500" aria-hidden />
        </p>
      </motion.div>
    </section>
  );
}
