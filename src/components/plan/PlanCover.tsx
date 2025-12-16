import { Plan } from '@/types/plan';
import { motion } from 'framer-motion';
import { Calendar, Users, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanCoverProps {
  plan: Plan;
}

export default function PlanCover({ plan }: PlanCoverProps) {
  const { summary } = plan;
  
  // Formatear fecha de generación
  const generatedDate = new Date(plan.generated_at).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Obtener texto de edad
  const getAgeText = (ageBand: string) => {
    switch (ageBand) {
      case '6-8': return '6 a 8 años';
      case '9-12': return '9 a 12 años';
      case '13-15': return '13 a 15 años';
      case '16-17': return '16 a 17 años';
      default: return ageBand;
    }
  };

  // Obtener texto de plataformas
  const getPlatformText = (platforms: string[]) => {
    const platformNames: Record<string, string> = {
      youtube: 'YouTube',
      tiktok: 'TikTok',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      facebook: 'Facebook',
      twitter: 'Twitter',
      roblox: 'Roblox',
      minecraft: 'Minecraft'
    };
    
    return platforms.map(p => platformNames[p] || p).join(', ');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="print-section"
    >
      {/* Portada principal - compacta para impresión */}
      <div className="text-center mb-8 sm:mb-12 print:mb-6">
        {/* Título principal - compacto para impresión */}
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl print:text-3xl font-bold text-brand-ink-900 mb-3 sm:mb-4 print:mb-2">
          Plan de Seguridad Digital
        </h1>
        
        <h2 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl print:text-xl font-semibold text-brand-teal-500 mb-4 sm:mb-6 print:mb-3">
          Para tu Familia
        </h2>

        {/* Información del plan - compacta para impresión */}
        <div className="bg-gradient-to-br from-white via-brand-mint-200/20 to-white rounded-xl shadow-soft p-4 sm:p-6 print:p-3 border border-brand-mint-200/30 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 print:gap-2 text-left">
            {/* Edad */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-teal-500/20 rounded-full">
                <Users className="h-5 w-5 text-brand-teal-500" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-brand-ink-900">Edad del menor</p>
                <p className="font-body text-sm text-brand-olive-500">{getAgeText(summary.age_band)}</p>
              </div>
            </div>

            {/* Plataformas */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-mint-200/60 rounded-full">
                <Target className="h-5 w-5 text-brand-ink-800" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-brand-ink-900">Plataformas principales</p>
                <p className="font-body text-sm text-brand-olive-500">{getPlatformText(summary.platforms)}</p>
              </div>
            </div>

            {/* Fecha de generación */}
            <div className="flex items-center gap-3 sm:col-span-2">
              <div className="p-2 bg-brand-olive-500/20 rounded-full">
                <Calendar className="h-5 w-5 text-brand-olive-500" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-brand-ink-900">Plan generado el</p>
                <p className="font-body text-sm text-brand-olive-500">{generatedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resumen accionable - integrado en la misma página */}
      <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-4 sm:p-6 print:p-3 border border-brand-mint-200/30">
        <div className="text-center mb-4 sm:mb-6 print:mb-3">
          <h3 className="font-heading text-base sm:text-lg print:text-base font-bold text-brand-ink-900 mb-2 print:mb-1">
            Resumen de tu Plan
          </h3>
          <p className="font-body text-xs sm:text-sm print:text-xs text-brand-olive-500">
            {summary.total_actions} acciones personalizadas para proteger a tu familia
          </p>
        </div>

        {/* Prioridades principales - compactas */}
        <div className="space-y-2 print:space-y-1">
          <h4 className="font-heading text-sm print:text-xs font-semibold text-brand-ink-900">
            Prioridades principales:
          </h4>
          <ul className="space-y-1 print:space-y-0.5">
            {summary.top_priorities.map((priority, index) => (
              <li key={index} className="flex items-start gap-2 print:gap-1">
                <div className="w-1.5 h-1.5 print:w-1 print:h-1 bg-brand-teal-500 rounded-full mt-1.5 print:mt-1 flex-shrink-0"></div>
                <span className="font-body text-xs sm:text-sm print:text-xs text-brand-ink-800">
                  {priority}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Estadísticas del plan - compactas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 print:gap-2 mt-4 print:mt-3 pt-4 print:pt-2 border-t border-brand-mint-200/30">
          <div className="text-center">
            <div className="text-lg sm:text-2xl print:text-lg font-heading font-bold text-brand-teal-500">
              {summary.total_actions}
            </div>
            <div className="text-xs print:text-xs text-brand-olive-500">Acciones totales</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl print:text-lg font-heading font-bold text-brand-ink-800">
              {summary.urgent_actions}
            </div>
            <div className="text-xs print:text-xs text-brand-olive-500">Acciones urgentes</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl print:text-lg font-heading font-bold text-brand-olive-500">
              {summary.platforms.length}
            </div>
            <div className="text-xs print:text-xs text-brand-olive-500">Plataformas</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
