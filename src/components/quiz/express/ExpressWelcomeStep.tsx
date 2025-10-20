import { Button } from "@/components/ui/button";
import { Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ExpressWelcomeStepProps {
  onNext: () => void;
}

const ExpressWelcomeStep = ({ onNext }: ExpressWelcomeStepProps) => {
  return (
    <div className="text-center space-y-6 sm:space-y-8">
      {/* Header with icon */}
      <div className="space-y-4 sm:space-y-6">
        <div className="flex justify-center">
          <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
            <Shield className="h-12 w-12 text-primary-foreground" />
          </div>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink-900 leading-tight">
            Empecemos por conocer qué tan protegida está tu familia
          </h1>
          
          <p className="font-body text-base sm:text-lg md:text-xl text-brand-olive-500 max-w-2xl mx-auto leading-relaxed">
            Toma un minuto para responder estas preguntas. Este será el primer paso para guiarte hacia lo que más te servirá.
          </p>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-brand-ink-800">
          <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500" />
          <span className="font-medium">Menos de 1 minuto</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-brand-ink-800">
          <Users className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500" />
          <span className="font-medium">7 preguntas rápidas</span>
        </div>
      </div>

      {/* Educational message */}
      <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-4 sm:p-6 mx-4 sm:mx-0 shadow-soft">
        <p className="font-body text-sm sm:text-base text-brand-ink-800 font-medium italic">
          "Cada familia es distinta, pero todas pueden construir entornos más protegidos."
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-4 sm:space-y-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Button 
            variant="primary-brand" 
            size="lg" 
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-heading font-semibold shadow-cta"
            onClick={onNext}
          >
            Iniciar diagnóstico
          </Button>
        </motion.div>

        <div className="text-center">
          <p className="font-body text-sm text-brand-olive-500 mb-3">
            ¿Quieres hacer el quiz personalizado?
          </p>
          <Button 
            asChild 
            variant="outline" 
            className="border-2 border-brand-teal-500 text-brand-teal-500 hover:bg-brand-mint-200/20 px-6 py-2 text-sm sm:text-base font-heading font-medium"
          >
            <Link to="/quiz/personalizado">
              Crear mi plan personalizado
            </Link>
          </Button>
        </div>
      </div>

      {/* Microcopy */}
      <p className="text-xs sm:text-sm text-brand-olive-500 opacity-80 font-body">
        100% confidencial • Resultados inmediatos
      </p>
    </div>
  );
};

export default ExpressWelcomeStep;

