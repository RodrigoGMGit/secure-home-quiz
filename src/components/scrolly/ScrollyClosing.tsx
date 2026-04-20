import { ArrowUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ScrollyClosing() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="px-4 sm:px-6 pb-20 pt-8">
      <div className="max-w-4xl mx-auto rounded-2xl border border-brand-mint-200/40 bg-gradient-to-br from-white via-brand-mint-200/20 to-white p-6 sm:p-8 md:p-10 shadow-soft">
        <div className="text-center md:text-left">
          <p className="font-heading text-xs sm:text-sm font-semibold uppercase tracking-wide text-brand-teal-500 mb-3">
            Tu siguiente paso
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink-900 mb-4">
            Convierte este aprendizaje en acciones concretas hoy
          </h2>
          <p className="font-body text-base sm:text-lg text-brand-olive-500 leading-relaxed mb-8">
            En minutos podrás tener un diagnóstico claro, priorizado y adaptado a tu familia.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-start">
          <Button asChild variant="primary-brand" className="min-h-[44px] px-8 shadow-cta">
            <Link to="/quiz">
              Empezar mi diagnóstico
              <ChevronRight className="w-4 h-4 ml-2" aria-hidden />
            </Link>
          </Button>
          <Button
            type="button"
            variant="secondary-brand"
            className="min-h-[44px] px-8"
            onClick={backToTop}
          >
            Volver arriba
            <ArrowUp className="w-4 h-4 ml-2" aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
