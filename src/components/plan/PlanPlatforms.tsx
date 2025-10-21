import { Plan, PlanAction } from '@/types/plan';
import { motion } from 'framer-motion';
import { Shield, Smartphone, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import ReferenceLink from './ReferenceLink';
import React from 'react';

interface PlanPlatformsProps {
  plan: Plan;
}

export default function PlanPlatforms({ plan }: PlanPlatformsProps) {
  const { summary } = plan;
  
  // Filtrar secciones relacionadas con plataformas
  const platformSections = plan.sections.filter(section => 
    section.id === 'parental_controls' || 
    section.actions.some(action => action.platform)
  );

  if (platformSections.length === 0) {
    return null;
  }

  // Agrupar acciones por plataforma
  const actionsByPlatform: Record<string, PlanAction[]> = {};
  
  platformSections.forEach(section => {
    section.actions.forEach(action => {
      if (action.platform) {
        if (!actionsByPlatform[action.platform]) {
          actionsByPlatform[action.platform] = [];
        }
        actionsByPlatform[action.platform].push(action);
      }
    });
  });

  // Mapeo de plataformas a información
  const platformInfo: Record<string, { name: string; icon: React.ComponentType<{ className?: string }>; route: string; pathText: string }> = {
    youtube: {
      name: 'YouTube',
      icon: Smartphone,
      route: '/aprende/tu-familia/redes-sociales',
      pathText: 'Ruta: Aprende > Tu familia > Redes sociales'
    },
    tiktok: {
      name: 'TikTok',
      icon: Smartphone,
      route: '/aprende/tu-familia/redes-sociales',
      pathText: 'Ruta: Aprende > Tu familia > Redes sociales'
    },
    whatsapp: {
      name: 'WhatsApp',
      icon: Smartphone,
      route: '/aprende/tu-familia/redes-sociales',
      pathText: 'Ruta: Aprende > Tu familia > Redes sociales'
    },
    instagram: {
      name: 'Instagram',
      icon: Smartphone,
      route: '/aprende/tu-familia/redes-sociales',
      pathText: 'Ruta: Aprende > Tu familia > Redes sociales'
    },
    facebook: {
      name: 'Facebook',
      icon: Smartphone,
      route: '/aprende/tu-familia/redes-sociales',
      pathText: 'Ruta: Aprende > Tu familia > Redes sociales'
    },
    roblox: {
      name: 'Roblox',
      icon: Users,
      route: '/aprende/tu-familia/videojuegos',
      pathText: 'Ruta: Aprende > Tu familia > Videojuegos'
    },
    minecraft: {
      name: 'Minecraft',
      icon: Users,
      route: '/aprende/tu-familia/videojuegos',
      pathText: 'Ruta: Aprende > Tu familia > Videojuegos'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="print-section"
    >
      <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30">
        {/* Header de la sección */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-2 bg-gradient-to-r from-primary to-brand-teal-500 rounded-full">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
            Guías por Plataforma
          </h2>
          <p className="font-body text-sm text-brand-olive-500">
            Configuraciones específicas para las plataformas que usa tu hijo
          </p>
        </div>

        {/* Guías por plataforma */}
        <div className="space-y-8">
          {Object.entries(actionsByPlatform).map(([platform, actions], platformIndex) => {
            const info = platformInfo[platform];
            if (!info) return null;

            const IconComponent = info.icon;

            return (
              <motion.div
                key={platform}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: platformIndex * 0.1 }}
                className="p-4 sm:p-6 rounded-lg border border-brand-mint-200/40 bg-brand-mint-200/20"
              >
                {/* Header de la plataforma */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900">
                      {info.name}
                    </h3>
                    <p className="font-body text-sm text-brand-olive-500">
                      {actions.length} configuración{actions.length !== 1 ? 'es' : ''} recomendada{actions.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                {/* Acciones específicas */}
                <div className="space-y-4">
                  {actions.map((action, actionIndex) => (
                    <div key={action.id} className="p-4 bg-white rounded-lg border border-brand-mint-200/30">
                      <h4 className="font-heading text-base font-semibold text-brand-ink-900 mb-2">
                        {action.title}
                      </h4>
                      <p className="font-body text-sm text-brand-olive-500 mb-3">
                        {action.description}
                      </p>
                      
                      {/* Pasos de configuración */}
                      {action.steps && action.steps.length > 0 && (
                        <div className="space-y-2">
                          <h5 className="font-heading text-sm font-semibold text-brand-ink-900">
                            Pasos de configuración:
                          </h5>
                          <ol className="space-y-1">
                            {action.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-5 h-5 bg-brand-teal-500/20 text-brand-teal-500 rounded-full flex items-center justify-center text-xs font-heading font-bold">
                                  {stepIndex + 1}
                                </span>
                                <span className="font-body text-sm text-brand-ink-800 leading-relaxed">
                                  {step}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Referencia al sitio */}
                <div className="mt-6 pt-4 border-t border-brand-mint-200/30">
                  <ReferenceLink
                    to={info.route}
                    label={`Más información sobre ${info.name}`}
                    pathText={info.pathText}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Referencia general a controles parentales */}
        <div className="mt-8 p-4 bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg">
          <div className="text-center">
            <h4 className="font-heading text-sm font-semibold text-brand-ink-900 mb-2">
              ¿Necesitas más ayuda con controles parentales?
            </h4>
            <ReferenceLink
              to="/aprende/controles"
              label="Guía completa de controles parentales"
              pathText="Ruta: Aprende > Controles parentales"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
