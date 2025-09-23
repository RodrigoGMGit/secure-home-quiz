import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ABVariant } from '@/types/quiz';
import { StepHeader } from './StepHeader';
import { Notice } from './Notice';

interface ABGateEmailProps {
  variant: ABVariant;
  onSubmit: (email?: string, wantsReminders?: boolean) => void;
  onSkip?: () => void;
}

const variantConfig = {
  A: {
    title: 'Recibe tu plan completo',
    subtitle: 'Te enviaremos el plan completo (PDF) por correo para que tengas toda la información siempre a mano.',
    emailRequired: true,
    showSkip: false,
    buttonText: 'Enviar mi plan'
  },
  B: {
    title: 'Plan listo',
    subtitle: 'Puedes recibir tu plan en PDF por correo (opcional) o continuar para verlo en pantalla.',
    emailRequired: false,
    showSkip: true,
    buttonText: 'Continuar'
  },
  C: {
    title: 'Tu plan está listo',
    subtitle: 'Para continuar, deja tu correo y te enviamos el plan personalizado.',
    emailRequired: true,
    showSkip: false,
    buttonText: 'Recibir mi plan'
  }
};

export function ABGateEmail({ variant, onSubmit, onSkip }: ABGateEmailProps) {
  const [email, setEmail] = useState('');
  const [wantsReminders, setWantsReminders] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const config = variantConfig[variant];

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const canSubmit = () => {
    if (config.emailRequired) {
      return email.trim() && isValidEmail(email.trim());
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit()) return;

    setIsSubmitting(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const trimmedEmail = email.trim();
    onSubmit(
      trimmedEmail || undefined, 
      trimmedEmail ? wantsReminders : undefined
    );
    
    setIsSubmitting(false);
  };

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      onSubmit();
    }
  };

  return (
    <div className="space-y-6">
      <StepHeader
        title={config.title}
        subtitle={config.subtitle}
      />

      {variant === 'B' && (
        <Notice type="help">
          <p>
            Puedes ver tu plan inmediatamente en pantalla o recibirlo por correo para consultarlo después.
          </p>
        </Notice>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">
            Correo electrónico {config.emailRequired && <span className="text-destructive">*</span>}
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={config.emailRequired}
            className="text-base"
          />
          {config.emailRequired && email && !isValidEmail(email) && (
            <p className="text-sm text-destructive">
              Por favor ingresa un correo válido
            </p>
          )}
        </div>

        {(email.trim() || !config.emailRequired) && (
          <div className="flex items-center space-x-2">
            <Checkbox
              id="reminders"
              checked={wantsReminders}
              onCheckedChange={(checked) => setWantsReminders(!!checked)}
            />
            <Label 
              htmlFor="reminders" 
              className="text-sm text-muted-foreground cursor-pointer"
            >
              Quiero recibir recordatorios útiles en 30 días
            </Label>
          </div>
        )}

        <div className="flex flex-col gap-3 pt-4">
          <Button
            type="submit"
            variant="primary-brand"
            disabled={!canSubmit() || isSubmitting}
            className="w-full text-base font-medium"
            size="lg"
          >
            {isSubmitting ? 'Procesando...' : config.buttonText}
          </Button>

          {config.showSkip && (
            <Button
              type="button"
              variant="ghost"
              onClick={handleSkip}
              className="w-full text-base"
            >
              Ver mi plan en pantalla
            </Button>
          )}
        </div>
      </form>

      <Notice type="info">
        <p className="text-xs">
          Solo usamos tu correo para enviarte el plan y recordatorios opcionales. 
          Puedes cancelar en cualquier momento.
        </p>
      </Notice>
    </div>
  );
}