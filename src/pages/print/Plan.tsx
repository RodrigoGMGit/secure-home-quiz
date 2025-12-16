import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Plan } from '@/types/plan';
import { buildPlan } from '@/data/plan/rules';
import { PlanInput } from '@/types/plan';
import { QuizAnswers } from '@/types/quiz';
import PrintPlanLayout from '@/components/plan/PrintPlanLayout';
import PlanCover from '@/components/plan/PlanCover';
import PlanPriorities from '@/components/plan/PlanPriorities';
import PlanPlatforms from '@/components/plan/PlanPlatforms';
import PlanScripts from '@/components/plan/PlanScripts';
import PlanChecklist from '@/components/plan/PlanChecklist';
import PlanResources from '@/components/plan/PlanResources';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PlanPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [plan, setPlan] = useState<Plan | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Scroll automático al inicio de la página
  useScrollToTop();

  useEffect(() => {
    // Obtener el plan desde el estado de navegación o generar uno de prueba
    const planFromState = location.state?.plan as Plan;
    
    if (planFromState) {
      setPlan(planFromState);
      setIsLoading(false);
    } else {
      // Si no hay plan en el estado, generar uno de prueba para desarrollo
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
        ab_variant_plan_email: 'control'
      };

      const generatedPlan = buildPlan(planInput);
      setPlan(generatedPlan);
      setIsLoading(false);
    }
  }, [location.state]);

  const handleBackToQuiz = () => {
    navigate('/quiz');
  };

  const handleGeneratePDF = () => {
    // Placeholder para la funcionalidad de PDF
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mi Plan de Seguridad Digital',
          text: 'Revisa mi plan personalizado de seguridad digital para mi familia',
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copiar URL al portapapeles
      navigator.clipboard.writeText(window.location.href);
    }
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
                    onClick={handleShare}
                    variant="outline"
                    className="px-8 py-3 text-sm sm:text-base font-heading font-semibold"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartir
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