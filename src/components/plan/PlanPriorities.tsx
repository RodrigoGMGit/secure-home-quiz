import { Plan } from '@/types/plan';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PlanPrioritiesProps {
  plan: Plan;
}

export default function PlanPriorities({ plan }: PlanPrioritiesProps) {
  // 1. Todas las urgentes primero (señales de alerta)
  const urgentActions = plan.sections
    .filter(section => section.priority === 'urgent')
    .flatMap(section => section.actions);

  // 2. Complementar con high priority ordenadas por severidad
  const highPriorityActions = plan.sections
    .filter(section => section.priority === 'high')
    .flatMap(section => section.actions)
    .sort((a, b) => {
      const severityOrder = { high: 3, medium: 2, low: 1 };
      return (severityOrder[b.severity || 'low'] || 0) - (severityOrder[a.severity || 'low'] || 0);
    });

  // 3. Si hay menos de 3, agregar de medium priority con severity high
  const mediumPriorityActions = plan.sections
    .filter(section => section.priority === 'medium')
    .flatMap(section => section.actions)
    .filter(action => action.severity === 'high')
    .sort((a, b) => {
      const severityOrder = { high: 3, medium: 2, low: 1 };
      return (severityOrder[b.severity || 'low'] || 0) - (severityOrder[a.severity || 'low'] || 0);
    });

  // 4. Tomar exactamente 3 acciones
  const allPriorityActions = [...urgentActions, ...highPriorityActions, ...mediumPriorityActions].slice(0, 3);

  if (allPriorityActions.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="print-section"
    >
      <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-4 sm:p-6 print:p-3 border border-brand-mint-200/30">
        {/* Header de la sección - compacto */}
        <div className="text-center mb-6 print:mb-4">
          <h2 className="font-heading text-lg sm:text-xl print:text-lg font-bold text-brand-ink-900 mb-1 print:mb-0">
            Tus 3 Acciones Prioritarias
          </h2>
          <p className="font-body text-xs print:text-xs text-brand-olive-500">
            Comienza con estas 3 acciones para proteger a tu familia de manera inmediata
          </p>
        </div>

        {/* Lista de acciones prioritarias - compacta */}
        <div className="space-y-4 print:space-y-3">
          {allPriorityActions.map((action, index) => (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cn(
                "p-3 sm:p-4 print:p-2 rounded-lg border",
                action.severity === 'high' 
                  ? "border-brand-teal-500/30 bg-brand-teal-500/10" 
                  : "border-brand-mint-200/40 bg-brand-mint-200/20"
              )}
            >
              <div className="flex items-start gap-3 print:gap-2">
                {/* Número de acción - compacto */}
                <div className={cn(
                  "flex-shrink-0 w-6 h-6 print:w-5 print:h-5 rounded-full flex items-center justify-center font-heading font-bold text-xs print:text-xs",
                  action.severity === 'high'
                    ? "bg-brand-teal-500/20 text-brand-teal-500"
                    : "bg-brand-mint-200/60 text-brand-ink-800"
                )}>
                  {index + 1}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Título de la acción - compacto */}
                  <div className="mb-1 print:mb-0.5">
                    <h3 className="font-heading text-sm sm:text-base print:text-sm font-semibold text-brand-ink-900">
                      {action.title}
                    </h3>
                  </div>

                  {/* Descripción - compacta */}
                  <p className="font-body text-xs sm:text-sm print:text-xs text-brand-olive-500 mb-2 print:mb-1 leading-relaxed">
                    {action.description}
                  </p>

                  {/* Pasos de implementación - compactos */}
                  {action.steps && action.steps.length > 0 && (
                    <div className="space-y-1 print:space-y-0.5">
                      <h4 className="font-heading text-xs print:text-xs font-semibold text-brand-ink-900">
                        Pasos a seguir:
                      </h4>
                      <ul className="space-y-1 print:space-y-0.5">
                        {action.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2 print:gap-1">
                            <span className="font-body text-xs print:text-xs text-brand-ink-800 leading-relaxed">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Script de conversación si está disponible - compacto */}
                  {action.conversationScript && (
                    <div className="mt-2 print:mt-1 p-2 print:p-1.5 bg-brand-mint-200/20 rounded-lg border border-brand-mint-200/30">
                      <h4 className="font-heading text-xs print:text-xs font-semibold text-brand-ink-900 mb-1 print:mb-0.5">
                        Script de conversación:
                      </h4>
                      <p className="font-body text-xs print:text-xs text-brand-ink-800 italic leading-relaxed">
                        "{action.conversationScript}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nota importante - compacta */}
        <div className="mt-6 print:mt-4 p-3 print:p-2 bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg">
          <div>
            <h4 className="font-heading text-xs print:text-xs font-semibold text-brand-ink-900 mb-0.5 print:mb-0">
              Importante
            </h4>
            <p className="font-body text-xs print:text-xs text-brand-ink-800 leading-relaxed">
              Estas acciones están diseñadas para implementarse gradualmente. No es necesario hacer todo de una vez, 
              pero es importante comenzar con las acciones marcadas como urgentes.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
