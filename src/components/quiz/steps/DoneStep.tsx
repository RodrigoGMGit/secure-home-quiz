import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ABVariant, QuizAnswers, PlanInput } from '@/types/quiz';
import { buildPlan } from '@/data/plan/rules';
import { CheckCircle, Mail, FileText, Trophy, Shield, Eye, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { getPlanEmail, savePlanEmail } from '@/utils/localStorage';

interface DoneStepProps {
  abVariant: ABVariant;
  answers: QuizAnswers;
  onComplete: () => void;
  onRestart: () => void;
  onTrack: (event: string, data: Record<string, unknown>) => void;
}

/** Regex para validar correo legítimo: local part + @ + dominio con TLD de al menos 2 letras */
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

export function DoneStep({ abVariant, answers, onComplete, onRestart, onTrack }: DoneStepProps) {
  const [email, setEmail] = useState(() => getPlanEmail() ?? '');
  const [isAutoRedirecting, setIsAutoRedirecting] = useState(false);
  const hasAttemptedAutoRedirect = useRef(false);
  const navigate = useNavigate();

  // Convertir respuestas del quiz a PlanInput para generar el plan
  const planInput: PlanInput = {
    age_band: answers.age_band,
    platforms: answers.platforms,
    other_platforms: answers.other_platforms || '',
    unknown_platforms: answers.unknown_platforms || false,
    inappropriatePlatforms: answers.inappropriatePlatforms,
    securityConfig: answers.securityConfig || {},
    emergencyResources: answers.emergencyResources || {},
    concerns: answers.concerns,
    ab_variant_plan_email: abVariant
  };

  const isValidEmail = (value: string) => {
    const t = value.trim();
    return t.length > 0 && EMAIL_REGEX.test(t);
  };

  const canViewPlan = () => {
    return isValidEmail(email);
  };

  const goToPlan = (emailToSave: string) => {
    const trimmed = emailToSave.trim();
    if (!trimmed || !isValidEmail(trimmed)) return;
    savePlanEmail(trimmed);
    const plan = buildPlan(planInput);
    onTrack('plan_viewed', {
      variant: abVariant,
      age_band: answers.age_band,
      platforms: answers.platforms,
      total_actions: plan.summary.total_actions,
      urgent_actions: plan.summary.urgent_actions,
      email_provided: true
    });
    onTrack('plan_email_request', {
      variant: abVariant,
      email_provided: true
    });
    navigate('/print/plan', { state: { plan } });
  };

  useEffect(() => {
    if (hasAttemptedAutoRedirect.current) return;
    const stored = getPlanEmail();
    if (!stored || !isValidEmail(stored)) return;
    hasAttemptedAutoRedirect.current = true;
    setIsAutoRedirecting(true);
    goToPlan(stored);
    // Solo ejecutar una vez al montar el paso "done"; usar valores del primer render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isAutoRedirecting) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-teal-500 mb-4" />
        <p className="font-body text-base sm:text-lg text-brand-olive-500">Abriendo tu plan...</p>
      </div>
    );
  }

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

      {/* Advertencia sobre plataformas inapropiadas */}
      {answers.inappropriatePlatforms && answers.inappropriatePlatforms.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Alert className="border-brand-teal-500/30 bg-brand-teal-500/10">
            <AlertTriangle className="h-4 w-4 text-brand-teal-500" />
            <AlertTitle className="text-brand-ink-900 font-heading font-semibold">
              Atención: Plataformas no recomendadas para esta edad
            </AlertTitle>
            <AlertDescription className="text-brand-ink-800 font-body leading-relaxed mt-2">
              Tu hijo/a usa <strong>{answers.inappropriatePlatforms.length} plataforma(s)</strong> no 
              recomendadas para su edad ({answers.age_band} años). Te proporcionaremos 
              <strong> recomendaciones especiales de supervisión</strong> para estas plataformas en tu plan personalizado.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

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
          Hemos creado un plan con recomendaciones específicas basadas en las necesidades de tu familia.
        </p>
        
        {/* Trust indicators inline */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-2">
          <div className="flex items-center justify-center gap-2 text-sm text-brand-ink-800">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500" />
            <span className="font-medium">Recomendaciones personalizadas</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-brand-ink-800">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500" />
            <span className="font-medium">100% Personalizado</span>
          </div>
        </div>
      </motion.div>

      {/* Registro de correo para asignar plan y ver resultado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30"
      >
        {/* Invitar a registrar correo para asignar el plan */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
              <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-3">
            Registra tu correo para que se te asigne tu plan personalizado
          </h3>
          <p className="font-body text-sm sm:text-base text-brand-olive-500">
            Introduce tu correo electrónico y, una vez registrado, podrás ver tu plan completo con todas las recomendaciones organizadas por prioridad.
          </p>
        </div>
        
        <form
          onSubmit={(e) => {
            e.preventDefault();
            goToPlan(email.trim());
          }}
          className="space-y-6"
        >
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
              className="h-12 text-base border-2 border-brand-mint-200/30 focus:border-brand-teal-500 transition-colors"
              aria-invalid={email.length > 0 ? !isValidEmail(email) : undefined}
              aria-describedby={email.length > 0 && !isValidEmail(email) ? 'email-error' : undefined}
            />
            {email.length > 0 && !isValidEmail(email) && (
              <p id="email-error" className="text-sm text-brand-ink-800 font-body" role="alert">
                Por favor ingresa un correo válido (ej. nombre@dominio.com)
              </p>
            )}
          </div>
          
          {/* Botón principal con animación */}
          <motion.div whileHover={{ scale: canViewPlan() ? 1.02 : 1 }} whileTap={{ scale: canViewPlan() ? 0.98 : 1 }}>
            <Button
              type="submit"
              variant="primary-brand"
              disabled={!canViewPlan()}
              size="lg"
              className="w-full text-base sm:text-lg font-heading font-semibold shadow-cta"
            >
              <Eye className="w-5 h-5 mr-2" />
              Ver mi Plan Completo
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
        
        {/* Microcopy */}
        <div className="mt-6 flex items-start gap-3 bg-brand-mint-200/20 p-4 rounded-lg">
          <Shield className="w-5 h-5 text-brand-teal-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-brand-ink-800 leading-relaxed">
            <strong>100% privado.</strong> Solo usamos tu correo para asignarte tu plan. No compartimos tu información.
          </p>
        </div>
      </motion.div>
    </div>
  );
}