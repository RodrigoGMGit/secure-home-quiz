/**
 * Vista de plan para imprimir o exportar.
 *
 * - **Ruta:** `/print/plan`
 * - **Origen del plan:** `location.state.plan`, o reconstrucción desde `loadQuizState` / email vía `src/utils/localStorage.ts`.
 * - **Reglas de contenido:** `buildPlan` en `src/data/plan/rules.ts`.
 * - **UI:** componentes `PlanCover`, `PlanPriorities`, `PlanPlatforms`, etc. en `components/plan/`.
 *
 * Mapa del repo: `docs/NAVEGACION-CODIGO.md`
 */
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Plan } from '@/types/plan';
import { buildPlan } from '@/data/plan/rules';
import { PlanInput } from '@/types/plan';
import { QuizAnswers } from '@/types/quiz';
import { loadQuizState, getPlanEmail, clearQuizData } from '@/utils/localStorage';
import PrintPlanLayout from '@/components/plan/PrintPlanLayout';
import PlanCover from '@/components/plan/PlanCover';
import PlanPriorities from '@/components/plan/PlanPriorities';
import PlanPlatforms from '@/components/plan/PlanPlatforms';
import PlanScripts from '@/components/plan/PlanScripts';
import PlanChecklist from '@/components/plan/PlanChecklist';
import PlanResources from '@/components/plan/PlanResources';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PlanPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [plan, setPlan] = useState<Plan | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Scroll automático al inicio de la página
  useScrollToTop();

  useEffect(() => {
    const planFromState = location.state?.plan as Plan | undefined;

    if (planFromState) {
      setPlan(planFromState);
      setIsLoading(false);
      return;
    }

    const storedEmail = getPlanEmail();
    const stored = loadQuizState();
    const hasValidEmail = storedEmail != null && storedEmail.trim().length > 0;
    const hasEnoughAnswers =
      stored?.answers?.age_band != null &&
      Array.isArray(stored.answers.platforms) &&
      (stored.answers.platforms.length > 0 || stored.answers.unknown_platforms === true);

    if (hasValidEmail && stored != null && hasEnoughAnswers) {
      const planInputFromStorage: PlanInput = {
        age_band: stored.answers.age_band!,
        platforms: stored.answers.platforms ?? [],
        other_platforms: stored.answers.other_platforms ?? '',
        unknown_platforms: !!stored.answers.unknown_platforms,
        inappropriatePlatforms: stored.answers.inappropriatePlatforms,
        securityConfig: stored.answers.securityConfig ?? {},
        emergencyResources: stored.answers.emergencyResources ?? {},
        concerns: stored.answers.concerns ?? [],
        ab_variant_plan_email: stored.abVariant ?? 'A'
      };
      const recoveredPlan = buildPlan(planInputFromStorage);
      setPlan(recoveredPlan);
    } else {
      const mockAnswers: QuizAnswers = {
        age_band: '13-15',
        platforms: ['youtube', 'tiktok', 'whatsapp'],
        other_platforms: '',
        unknown_platforms: false,
        measures: {
          youtube: ['restricted'],
          tiktok: ['privacy'],
          whatsapp: ['privacy']
        },
        habits: ['excessive_screen_time'],
        signals: ['secreto_dispositivos'],
        concerns: ['ciberacoso', 'grooming']
      };

      const planInput: PlanInput = {
        age_band: mockAnswers.age_band,
        platforms: mockAnswers.platforms,
        other_platforms: mockAnswers.other_platforms || '',
        unknown_platforms: mockAnswers.unknown_platforms || false,
        measures: mockAnswers.measures || {},
        habits: mockAnswers.habits,
        signals: mockAnswers.signals,
        concerns: mockAnswers.concerns,
        ab_variant_plan_email: 'A'
      };

      const generatedPlan = buildPlan(planInput);
      setPlan(generatedPlan);
    }
    setIsLoading(false);
  }, [location.state]);

  const handleBackToQuiz = () => {
    navigate('/quiz');
  };

  const handleGeneratePDF = () => {
    // Placeholder para la funcionalidad de PDF
    window.print();
  };

  const handleRedoQuiz = () => {
    clearQuizData();
    navigate('/quiz/personalizado');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-teal-500 mx-auto mb-4"></div>
          <p className="text-brand-olive-500">Generando tu plan personalizado...</p>
        </div>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading text-brand-ink-900 mb-4">
            No se pudo generar el plan
          </h1>
          <p className="text-brand-olive-500 mb-6">
            Por favor, completa el quiz primero para generar tu plan personalizado.
          </p>
          <Button onClick={handleBackToQuiz} variant="primary-brand">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Quiz
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* GlobalHeader oculto en impresión */}
      <div className="no-print">
        <GlobalHeader />
      </div>

      <main id="main-content" className="min-h-screen bg-gradient-subtle">
        {/* Contenedor principal con clases de impresión */}
        <div className="print-container" data-generated-date={plan.generated_at}>
          <PrintPlanLayout>
            {/* Portada y resumen */}
            <PlanCover plan={plan} />

            {/* Acciones prioritarias (0-7 días) */}
            <PlanPriorities plan={plan} />

            {/* Guías por plataforma/edad */}
            <PlanPlatforms plan={plan} />

            {/* Scripts de conversación */}
            <PlanScripts plan={plan} />

            {/* Checklist de seguimiento (30 días) */}
            <PlanChecklist plan={plan} />

            {/* Recursos y dónde ver más */}
            <PlanResources plan={plan} />

            {/* Próximos pasos y CTAs - Solo visible en web */}
            <div className="no-print">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30 mt-12"
              >
                <div className="text-center mb-6">
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-3">
                    Próximos Pasos
                  </h2>
                  <p className="font-body text-sm sm:text-base text-brand-olive-500">
                    Usa este plan como guía para proteger a tu familia en el mundo digital
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleGeneratePDF}
                    variant="primary-brand"
                    className="px-8 py-3 text-sm sm:text-base font-heading font-semibold"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Generar PDF
                  </Button>
                  
                  <Button
                    onClick={handleRedoQuiz}
                    variant="outline"
                    className="px-8 py-3 text-sm sm:text-base font-heading font-semibold"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Rehacer el quiz
                  </Button>
                  
                  <Button
                    onClick={handleBackToQuiz}
                    variant="outline"
                    className="px-8 py-3 text-sm sm:text-base font-heading font-semibold"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al Quiz
                  </Button>
                </div>
              </motion.div>
            </div>
          </PrintPlanLayout>
        </div>
      </main>
    </>
  );
}