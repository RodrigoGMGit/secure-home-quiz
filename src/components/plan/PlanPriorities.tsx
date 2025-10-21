import { Plan } from '@/types/plan';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanPrioritiesProps {
  plan: Plan;
}

export default function PlanPriorities({ plan }: PlanPrioritiesProps) {
  // Filtrar acciones urgentes y de alta prioridad
  const urgentActions = plan.sections
    .filter(section => section.priority === 'urgent')
    .flatMap(section => section.actions);

  const highPriorityActions = plan.sections
    .filter(section => section.priority === 'high')
    .flatMap(section => section.actions)
    .slice(0, 5); // Máximo 5 acciones de alta prioridad

  const allPriorityActions = [...urgentActions, ...highPriorityActions];

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
      <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30">
        {/* Header de la sección */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full">
              <Clock className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
            Acciones Prioritarias (0-7 días)
          </h2>
          <p className="font-body text-sm text-brand-olive-500">
            Estas acciones requieren atención inmediata para proteger a tu familia
          </p>
        </div>

        {/* Lista de acciones prioritarias */}
        <div className="space-y-6">
          {allPriorityActions.map((action, index) => (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cn(
                "p-4 sm:p-6 rounded-lg border",
                action.severity === 'high' 
                  ? "border-brand-teal-500/30 bg-brand-teal-500/10" 
                  : "border-brand-mint-200/40 bg-brand-mint-200/20"
              )}
            >
              <div className="flex items-start gap-4">
                {/* Número de acción */}
                <div className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm",
                  action.severity === 'high'
                    ? "bg-brand-teal-500/20 text-brand-teal-500"
                    : "bg-brand-mint-200/60 text-brand-ink-800"
                )}>
                  {index + 1}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Título de la acción */}
                  <div className="flex items-start gap-2 mb-2">
                    {action.severity === 'high' && (
                      <AlertTriangle className="h-5 w-5 text-brand-teal-500 flex-shrink-0 mt-0.5" />
                    )}
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900">
                      {action.title}
                    </h3>
                  </div>

                  {/* Descripción */}
                  <p className="font-body text-sm sm:text-base text-brand-olive-500 mb-4 leading-relaxed">
                    {action.description}
                  </p>

                  {/* Pasos de implementación */}
                  {action.steps && action.steps.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-heading text-sm font-semibold text-brand-ink-900">
                        Pasos a seguir:
                      </h4>
                      <ul className="space-y-2">
                        {action.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-3">
                            <CheckCircle className={cn(
                              "h-4 w-4 flex-shrink-0 mt-0.5",
                              action.severity === 'high'
                                ? "text-brand-teal-500"
                                : "text-brand-ink-800"
                            )} />
                            <span className="font-body text-sm text-brand-ink-800 leading-relaxed">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Script de conversación si está disponible */}
                  {action.conversationScript && (
                    <div className="mt-4 p-3 bg-brand-mint-200/20 rounded-lg border border-brand-mint-200/30">
                      <h4 className="font-heading text-sm font-semibold text-brand-ink-900 mb-2">
                        Script de conversación:
                      </h4>
                      <p className="font-body text-sm text-brand-ink-800 italic leading-relaxed">
                        "{action.conversationScript}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nota importante */}
        <div className="mt-8 p-4 bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-brand-teal-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-heading text-sm font-semibold text-brand-ink-900 mb-1">
                Importante
              </h4>
              <p className="font-body text-sm text-brand-ink-800 leading-relaxed">
                Estas acciones están diseñadas para implementarse gradualmente. No es necesario hacer todo de una vez, 
                pero es importante comenzar con las acciones marcadas como urgentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
