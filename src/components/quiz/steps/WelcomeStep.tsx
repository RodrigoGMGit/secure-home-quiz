import { Button } from '@/components/ui/button';
import { Notice } from '../Notice';
import { Shield, Clock, UserCheck } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { motion } from "framer-motion";

interface WelcomeStepProps {
  onNext: () => void;
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  const [searchParams] = useSearchParams();
  const fromExpress = searchParams.get('from') === 'express';

  return (
    <div className="text-center space-y-6 sm:space-y-8">
      {/* Show context if coming from express quiz */}
      {fromExpress && (
        <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-4 sm:p-6 shadow-soft">
          <div className="text-center space-y-3">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900">
              ¡Excelente decisión!
            </h3>
            <p className="font-body text-sm sm:text-base text-brand-ink-800">
              Ahora vamos a profundizar en tu situación específica para crear un plan personalizado que realmente funcione para tu familia.
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="space-y-4 sm:space-y-6">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink-900 leading-tight">
            Evaluación Personalizada
          </h1>
          
          <p className="font-body text-base sm:text-lg md:text-xl text-brand-olive-500 max-w-2xl mx-auto leading-relaxed">
            Este diagnóstico es anónimo y dura 3–4 minutos. Usamos tus respuestas para crear tu plan personal.
          </p>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-brand-ink-800">
          <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500" />
          <span className="font-medium">3-4 minutos</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-brand-ink-800">
          <UserCheck className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500" />
          <span className="font-medium">100% anónimo</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-brand-ink-800">
          <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500" />
          <span className="font-medium">Plan personalizado</span>
        </div>
      </div>

      {/* Notice mejorado */}
      <Notice type="info" title="Antes de empezar">
        <div className="space-y-2">
          <p>Si tienes más de un hijo/hija, te recomendamos hacer un plan por cada uno.</p>
          <p><strong>Puedes saltar cualquier pregunta</strong> si no estás seguro/a de la respuesta.</p>
        </div>
      </Notice>

      {/* CTA Button */}
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
            Empezar diagnóstico
          </Button>
        </motion.div>
      </div>

      {/* Microcopy */}
      <p className="text-xs sm:text-sm text-brand-olive-500 opacity-80 font-body">
        100% confidencial • Plan personalizado para tu familia
      </p>
    </div>
  );
}