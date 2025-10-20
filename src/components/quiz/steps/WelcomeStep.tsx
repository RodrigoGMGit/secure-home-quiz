import { Button } from '@/components/ui/button';
import { StepHeader } from '../StepHeader';
import { Notice } from '../Notice';
import { Shield, Clock, UserCheck, ArrowLeft } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

interface WelcomeStepProps {
  onNext: () => void;
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  const [searchParams] = useSearchParams();
  const fromExpress = searchParams.get('from') === 'express';

  return (
    <div className="space-y-6">
      {/* Show context if coming from express quiz */}
      {fromExpress && (
        <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-4 sm:p-6 shadow-soft">
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900">
              ¡Excelente decisión!
            </h3>
            <p className="font-body text-sm sm:text-base text-brand-ink-800">
              Ahora vamos a profundizar en tu situación específica para crear un plan personalizado que realmente funcione para tu familia.
            </p>
            <div className="pt-2">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-brand-teal-500 hover:text-brand-ink-800 text-sm"
              >
                <Link to="/quiz">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al diagnóstico rápido
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      <StepHeader
        title="Evaluación Personalizada"
        subtitle="Este diagnóstico es anónimo y dura 3–4 minutos. Usamos tus respuestas para crear tu plan personal."
      />

      <Notice type="info">
        <div className="space-y-3">
          <p>
            Si tienes más de un hijo/hija, te recomendamos hacer un plan por cada uno.
          </p>
          <p>
            <strong>Puedes saltar cualquier pregunta</strong> si no estás seguro/a de la respuesta.
          </p>
        </div>
      </Notice>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-4 bg-accent/30 rounded-lg">
          <Clock className="w-6 h-6 text-primary flex-shrink-0" />
          <div>
            <div className="font-medium text-sm text-foreground">3-4 minutos</div>
            <div className="text-xs text-muted-foreground">Tiempo promedio</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-accent/30 rounded-lg">
          <UserCheck className="w-6 h-6 text-primary flex-shrink-0" />
          <div>
            <div className="font-medium text-sm text-foreground">100% anónimo</div>
            <div className="text-xs text-muted-foreground">Sin registros</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-accent/30 rounded-lg">
          <Shield className="w-6 h-6 text-primary flex-shrink-0" />
          <div>
            <div className="font-medium text-sm text-foreground">Plan personal</div>
            <div className="text-xs text-muted-foreground">Adaptado a tu familia</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Button 
          variant="primary-brand"
          onClick={onNext}
          size="lg"
          className="px-6 text-base font-medium"
        >
          Empezar diagnóstico
        </Button>
      </div>
    </div>
  );
}