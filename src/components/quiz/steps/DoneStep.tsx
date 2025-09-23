import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StepHeader } from '../StepHeader';
import { ABGateEmail } from '../ABGateEmail';
import { Notice } from '../Notice';
import { ABVariant } from '@/types/quiz';
import { CheckCircle, Mail, FileText } from 'lucide-react';

interface DoneStepProps {
  abVariant: ABVariant;
  onComplete: () => void;
  onTrack: (event: string, data: any) => void;
}

export function DoneStep({ abVariant, onComplete, onTrack }: DoneStepProps) {
  const [showEmailGate, setShowEmailGate] = useState(false);

  const handleContinueClick = () => {
    setShowEmailGate(true);
  };

  const handleEmailSubmit = (email?: string, wantsReminders?: boolean) => {
    if (email) {
      onTrack('plan_email_request', { 
        variant: abVariant, 
        email_provided: true,
        wants_reminders: wantsReminders
      });
    } else {
      onTrack('plan_email_request', { 
        variant: abVariant, 
        email_provided: false 
      });
    }
    
    // Complete the quiz
    onComplete();
  };

  const handleSkipEmail = () => {
    onTrack('plan_email_request', { 
      variant: abVariant, 
      email_provided: false,
      skipped: true 
    });
    onComplete();
  };

  if (showEmailGate) {
    return (
      <ABGateEmail
        variant={abVariant}
        onSubmit={handleEmailSubmit}
        onSkip={handleSkipEmail}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        
        <StepHeader
          title="¡Listo!"
          subtitle="Ya tenemos lo necesario para construir tu plan personalizado de seguridad digital."
        />
      </div>

      <Notice type="success">
        <div className="space-y-3">
          <p className="font-medium">Tu diagnóstico está completo</p>
          <p>
            Hemos analizado las plataformas que usa tu hijo/a, las medidas de seguridad 
            que ya tienes implementadas, y tus principales preocupaciones.
          </p>
        </div>
      </Notice>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-4 bg-accent/30 rounded-lg">
          <FileText className="w-6 h-6 text-primary flex-shrink-0" />
          <div>
            <div className="font-medium text-sm text-foreground">Plan personalizado</div>
            <div className="text-xs text-muted-foreground">Adaptado a tu familia</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-accent/30 rounded-lg">
          <Mail className="w-6 h-6 text-primary flex-shrink-0" />
          <div>
            <div className="font-medium text-sm text-foreground">Opcional por email</div>
            <div className="text-xs text-muted-foreground">PDF para consultar después</div>
          </div>
        </div>
      </div>

      <div className="text-center pt-4">
        <Button 
          onClick={handleContinueClick}
          size="lg"
          className="px-8 text-base font-medium"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}