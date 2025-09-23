import { Button } from '@/components/ui/button';
import { StepHeader } from '../StepHeader';
import { Notice } from '../Notice';
import { Shield, Clock, UserCheck } from 'lucide-react';

interface WelcomeStepProps {
  onNext: () => void;
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <div className="space-y-6">
      <StepHeader
        title="Diagnóstico de Seguridad Digital"
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