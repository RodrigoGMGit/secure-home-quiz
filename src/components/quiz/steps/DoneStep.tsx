import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SpecificMeasures } from '../SpecificMeasures';
import { ABVariant, QuizAnswers } from '@/types/quiz';
import { generateSpecificMeasures } from '@/utils/planGenerator';
import { CheckCircle, Mail, FileText, Send, Trophy, Shield } from 'lucide-react';
import { motion } from "framer-motion";

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
    <div className="space-y-8">
      {/* Banner de Diagnóstico Completado con animación */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex justify-center mb-8"
      >
        <div className="bg-gradient-to-r from-brand-mint-200/60 via-brand-mint-200/40 to-brand-teal-500/10 rounded-lg p-3 sm:p-4 shadow-soft border border-brand-mint-200/30 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-3">
            <div className="flex-shrink-0">
              <div className="p-2 bg-gradient-to-br from-brand-teal-500/30 to-brand-teal-500/20 rounded-full shadow-soft">
                <Trophy className="h-6 w-6 text-brand-teal-500" />
              </div>
            </div>
            <div className="flex-1 text-center">
              <h2 className="font-heading text-base sm:text-lg font-bold text-brand-teal-500 uppercase tracking-wide">
                ¡EVALUACIÓN COMPLETADA!
              </h2>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Título y Subtítulo con Animaciones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center space-y-4 sm:space-y-6 mb-8"
      >
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink-900 leading-tight">
          Tu Plan Personalizado Está Listo
        </h1>
        
        <p className="font-body text-base sm:text-lg text-brand-olive-500 leading-relaxed max-w-2xl mx-auto">
          Hemos creado {specificMeasures.length} recomendaciones específicas basadas en las necesidades de tu familia
        </p>
        
        {/* Trust indicators inline */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-2">
          <div className="flex items-center justify-center gap-2 text-sm text-brand-ink-800">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500" />
            <span className="font-medium">{specificMeasures.length} Recomendaciones</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-brand-ink-800">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500" />
            <span className="font-medium">100% Personalizado</span>
          </div>
        </div>
      </motion.div>

      {/* Medidas específicas */}
      <SpecificMeasures measures={specificMeasures} />

      {/* Formulario de Email Rediseñado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30"
      >
        {/* Header del formulario con icono circular */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
              <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-3">
            Recibe tu Plan Completo por Email
          </h3>
          <p className="font-body text-sm sm:text-base text-brand-olive-500">
            Te enviaremos una guía PDF con pasos detallados, scripts de conversación y herramientas recomendadas
          </p>
        </div>
        
        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input con mejor diseño */}
          <div className="space-y-2">
            <Label htmlFor="email" className="font-heading text-sm font-semibold text-brand-ink-900">
              Tu correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 text-base border-2 border-brand-mint-200/30 focus:border-brand-teal-500 transition-colors"
            />
            {email && !isValidEmail(email) && (
              <p className="text-sm text-brand-ink-800 font-body">
                Por favor ingresa un correo válido
              </p>
            )}
          </div>
          
          {/* Botón principal con animación */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              variant="primary-brand"
              disabled={!canSubmit() || isSubmitting}
              size="lg"
              className="w-full text-base sm:text-lg font-heading font-semibold shadow-cta"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Enviar Mi Plan Completo
                </div>
              )}
            </Button>
          </motion.div>
          
          {/* Botones secundarios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button type="button" variant="outline" onClick={onRestart} size="lg">
              <FileText className="w-4 h-4 mr-2" />
              Hacer el quiz de nuevo
            </Button>
            <Button type="button" variant="outline" onClick={() => window.location.href = '/recursos'} size="lg">
              <FileText className="w-4 h-4 mr-2" />
              Ver recursos generales
            </Button>
          </div>
        </form>
        
        {/* Microcopy con iconos */}
        <div className="mt-6 flex items-start gap-3 bg-brand-mint-200/20 p-4 rounded-lg">
          <Shield className="w-5 h-5 text-brand-teal-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-brand-ink-800 leading-relaxed">
            <strong>100% privado.</strong> Solo usamos tu correo para enviarte el plan. No compartimos tu información.
          </p>
        </div>
      </motion.div>
    </div>
  );
}