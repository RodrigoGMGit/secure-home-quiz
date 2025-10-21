import { Plan } from '@/types/plan';
import { motion } from 'framer-motion';
import { Calendar, Users, Shield, Target } from 'lucide-react';
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
      {/* Portada principal */}
      <div className="text-center mb-12 sm:mb-16">
        {/* Logo/Icono principal */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
            <Shield className="h-12 w-12 text-primary-foreground" />
          </div>
        </div>

        {/* Título principal */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
          Plan de Seguridad Digital
        </h1>
        
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-brand-teal-500 mb-6 sm:mb-8">
          Para tu Familia
        </h2>

        {/* Información del plan */}
        <div className="bg-gradient-to-br from-white via-brand-mint-200/20 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
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

      {/* Resumen accionable */}
      <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30">
        <div className="text-center mb-6">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900 mb-3">
            Resumen de tu Plan
          </h3>
          <p className="font-body text-sm sm:text-base text-brand-olive-500">
            {summary.total_actions} acciones personalizadas para proteger a tu familia
          </p>
        </div>

        {/* Prioridades principales */}
        <div className="space-y-4">
          <h4 className="font-heading text-base font-semibold text-brand-ink-900">
            Prioridades principales:
          </h4>
          <ul className="space-y-2">
            {summary.top_priorities.map((priority, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="font-body text-sm sm:text-base text-brand-ink-800">
                  {priority}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Estadísticas del plan */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-brand-mint-200/30">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-heading font-bold text-brand-teal-500">
              {summary.total_actions}
            </div>
            <div className="text-xs sm:text-sm text-brand-olive-500">Acciones totales</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-heading font-bold text-brand-ink-800">
              {summary.urgent_actions}
            </div>
            <div className="text-xs sm:text-sm text-brand-olive-500">Acciones urgentes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-heading font-bold text-brand-olive-500">
              {summary.platforms.length}
            </div>
            <div className="text-xs sm:text-sm text-brand-olive-500">Plataformas</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
