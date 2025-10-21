import { Plan } from '@/types/plan';
import { motion } from 'framer-motion';
import { CheckSquare, Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanChecklistProps {
  plan: Plan;
}

export default function PlanChecklist({ plan }: PlanChecklistProps) {
  // Generar checklist basado en las acciones del plan
  const generateChecklistItems = () => {
    const items = [];

    // Items de seguimiento general
    items.push({
      id: 'review_settings',
      title: 'Revisar configuraciones de privacidad',
      frequency: 'Semanal',
      description: 'Verificar que las configuraciones de privacidad estén activas en todas las plataformas'
    });

    items.push({
      id: 'check_screen_time',
      title: 'Revisar tiempo de pantalla',
      frequency: 'Diario',
      description: 'Monitorear el tiempo que pasa tu hijo en dispositivos'
    });

    items.push({
      id: 'family_conversation',
      title: 'Conversación familiar sobre internet',
      frequency: 'Semanal',
      description: 'Dedicar tiempo para hablar sobre experiencias en línea'
    });

    // Items específicos basados en las acciones del plan
    plan.sections.forEach(section => {
      section.actions.forEach(action => {
        if (action.severity === 'high') {
          items.push({
            id: `follow_up_${action.id}`,
            title: `Seguimiento: ${action.title}`,
            frequency: 'Semanal',
            description: `Verificar que la acción "${action.title}" esté funcionando correctamente`
          });
        }
      });
    });

    // Items de evaluación mensual
    items.push({
      id: 'monthly_review',
      title: 'Evaluación mensual del plan',
      frequency: 'Mensual',
      description: 'Revisar el progreso y ajustar el plan según sea necesario'
    });

    items.push({
      id: 'update_passwords',
      title: 'Actualizar contraseñas',
      frequency: 'Mensual',
      description: 'Cambiar contraseñas de cuentas importantes'
    });

    return items.slice(0, 8); // Máximo 8 items para mantener el checklist manejable
  };

  const checklistItems = generateChecklistItems();

  if (checklistItems.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="print-section"
    >
      <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30">
        {/* Header de la sección */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-2 bg-gradient-to-r from-primary to-brand-teal-500 rounded-full">
              <CheckSquare className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
            Checklist de Seguimiento (30 días)
          </h2>
          <p className="font-body text-sm text-brand-olive-500">
            Tareas regulares para mantener la seguridad digital de tu familia
          </p>
        </div>

        {/* Checklist items */}
        <div className="space-y-4">
          {checklistItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 rounded-lg border border-brand-mint-200/40 bg-brand-mint-200/20"
            >
              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <div className="flex-shrink-0 mt-1">
                  <input
                    type="checkbox"
                    id={`checklist-${item.id}`}
                    className="w-4 h-4 text-brand-teal-500 border-brand-mint-200/40 rounded focus:ring-brand-teal-500 focus:ring-2"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Título y frecuencia */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-heading text-base font-semibold text-brand-ink-900">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-brand-olive-500">
                      <Calendar className="h-3 w-3" />
                      <span>{item.frequency}</span>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="font-body text-sm text-brand-olive-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consejos para el seguimiento */}
        <div className="mt-8 p-4 bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-brand-teal-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-heading text-sm font-semibold text-brand-ink-900 mb-2">
                Consejos para el seguimiento
              </h4>
              <ul className="space-y-1">
                <li className="font-body text-sm text-brand-ink-800 flex items-start gap-2">
                  <span className="w-1 h-1 bg-brand-teal-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  Establece recordatorios en tu calendario para las tareas semanales y mensuales
                </li>
                <li className="font-body text-sm text-brand-ink-800 flex items-start gap-2">
                  <span className="w-1 h-1 bg-brand-teal-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  Involucra a toda la familia en el seguimiento del plan
                </li>
                <li className="font-body text-sm text-brand-ink-800 flex items-start gap-2">
                  <span className="w-1 h-1 bg-brand-teal-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  Celebra los logros y ajusta el plan según sea necesario
                </li>
                <li className="font-body text-sm text-brand-ink-800 flex items-start gap-2">
                  <span className="w-1 h-1 bg-brand-teal-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  Revisa este checklist mensualmente para evaluar el progreso
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
