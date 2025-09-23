import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StepHeader } from '../StepHeader';
import { Notice } from '../Notice';
import { SpecificMeasures } from '../SpecificMeasures';
import { ABVariant, QuizAnswers } from '@/types/quiz';
import { generateSpecificMeasures } from '@/utils/planGenerator';
import { CheckCircle, Mail, FileText, Send } from 'lucide-react';

interface DoneStepProps {
  abVariant: ABVariant;
  answers: QuizAnswers;
  onComplete: () => void;
  onRestart: () => void;
  onTrack: (event: string, data: Record<string, unknown>) => void;
}

export function DoneStep({ abVariant, answers, onComplete, onRestart, onTrack }: DoneStepProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generar medidas específicas basadas en las respuestas
  const specificMeasures = generateSpecificMeasures(answers);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const canSubmit = () => {
    return email.trim() && isValidEmail(email.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit()) return;

    setIsSubmitting(true);
    
    // Simular procesamiento
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onTrack('plan_email_request', { 
      variant: abVariant, 
      email_provided: true,
      measures_count: specificMeasures.length
    });
    
    // Complete the quiz
    onComplete();
    
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        
        <StepHeader
          title="¡Listo!"
          subtitle="Tu diagnóstico está completo. Aquí tienes las medidas específicas para tu familia:"
        />
      </div>

      {/* Medidas específicas */}
      <SpecificMeasures measures={specificMeasures} />

      {/* Formulario de email obligatorio */}
      <div className="bg-brand-mint-200/20 rounded-lg p-6">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-brand-teal-500" />
            <h3 className="font-semibold text-brand-ink-800">Recibe tu plan completo</h3>
          </div>
          <p className="text-sm text-brand-olive-600">
            Para enviarte el diagnóstico completo y plan de protección personalizado
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Correo electrónico <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-base"
            />
            {email && !isValidEmail(email) && (
              <p className="text-sm text-red-500">
                Por favor ingresa un correo válido
              </p>
            )}
          </div>

          <div className="space-y-3">
            <Button
              type="submit"
              variant="primary-brand"
              disabled={!canSubmit() || isSubmitting}
              className="w-full text-base font-medium"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Enviando tu plan...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mi plan completo
                </>
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => {
                onRestart();
              }}
              className="w-full text-base font-medium"
              size="lg"
            >
              <FileText className="w-4 h-4 mr-2" />
              Hacer el quiz de nuevo
            </Button>
          </div>
        </form>

        <Notice type="info" className="mt-4">
          <p className="text-xs">
            Tu plan incluye: Guías paso a paso, scripts de conversación, herramientas recomendadas 
            y cronograma de implementación. Solo usamos tu correo para enviarte el plan personalizado.
          </p>
        </Notice>
      </div>
    </div>
  );
}