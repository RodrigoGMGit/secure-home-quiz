import { Plan } from '@/types/plan';
import { motion } from 'framer-motion';
import { MessageCircle, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanScriptsProps {
  plan: Plan;
}

export default function PlanScripts({ plan }: PlanScriptsProps) {
  // Recopilar todos los scripts de conversación de las acciones
  const conversationScripts = plan.sections
    .flatMap(section => section.actions)
    .filter(action => action.conversationScript)
    .map(action => ({
      id: action.id,
      title: action.title,
      script: action.conversationScript!,
      context: action.description
    }));

  if (conversationScripts.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="print-section"
    >
      <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30">
        {/* Header de la sección */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full">
              <MessageCircle className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
            Scripts de Conversación
          </h2>
          <p className="font-body text-sm text-brand-olive-500">
            Guiones prácticos para hablar con tu hijo sobre seguridad digital
          </p>
        </div>

        {/* Scripts de conversación */}
        <div className="space-y-6">
          {conversationScripts.map((script, index) => (
            <motion.div
              key={script.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 sm:p-6 rounded-lg border border-brand-mint-200/40 bg-brand-mint-200/20"
            >
              {/* Contexto de la conversación */}
              <div className="mb-4">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-2">
                  {script.title}
                </h3>
                <p className="font-body text-sm text-brand-olive-500 leading-relaxed">
                  {script.context}
                </p>
              </div>

              {/* Script de conversación */}
              <div className="bg-white rounded-lg p-4 border border-brand-mint-200/30">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-teal-500/20 rounded-full flex-shrink-0">
                    <Quote className="h-4 w-4 text-brand-teal-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading text-sm font-semibold text-brand-ink-900 mb-2">
                      Qué decir:
                    </h4>
                    <blockquote className="font-body text-sm sm:text-base text-brand-ink-800 italic leading-relaxed">
                      "{script.script}"
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Consejos adicionales */}
              <div className="mt-4 p-3 bg-brand-mint-200/20 rounded-lg">
                <h5 className="font-heading text-xs font-semibold text-brand-ink-900 mb-2">
                  Consejos para la conversación:
                </h5>
                <ul className="space-y-1">
                  <li className="font-body text-xs text-brand-ink-800 flex items-start gap-2">
                    <span className="w-1 h-1 bg-brand-teal-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    Mantén un tono calmado y sin juzgar
                  </li>
                  <li className="font-body text-xs text-brand-ink-800 flex items-start gap-2">
                    <span className="w-1 h-1 bg-brand-teal-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    Escucha activamente sus respuestas
                  </li>
                  <li className="font-body text-xs text-brand-ink-800 flex items-start gap-2">
                    <span className="w-1 h-1 bg-brand-teal-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    Haz preguntas abiertas para entender mejor
                  </li>
                  <li className="font-body text-xs text-brand-ink-800 flex items-start gap-2">
                    <span className="w-1 h-1 bg-brand-teal-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    Refuerza que siempre puede pedir ayuda
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nota general sobre comunicación */}
        <div className="mt-8 p-4 bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg">
          <div className="flex items-start gap-3">
            <MessageCircle className="h-5 w-5 text-brand-teal-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-heading text-sm font-semibold text-brand-ink-900 mb-2">
                La comunicación es clave
              </h4>
              <p className="font-body text-sm text-brand-ink-800 leading-relaxed">
                Mantén conversaciones regulares sobre el uso de internet. La confianza y el diálogo abierto 
                son las mejores herramientas para proteger a tu familia en el mundo digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
