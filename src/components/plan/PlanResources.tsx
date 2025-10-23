import { Plan } from '@/types/plan';
import { motion } from 'framer-motion';
import { BookOpen, HelpCircle } from 'lucide-react';
import ReferenceLink from './ReferenceLink';

interface PlanResourcesProps {
  plan: Plan;
}

export default function PlanResources({ plan }: PlanResourcesProps) {
  const { summary } = plan;

  // Recursos específicos basados en las preocupaciones y plataformas
  const getSpecificResources = () => {
    const resources = [];

    // Recursos por preocupaciones
    if (summary.concerns?.includes('ciberacoso')) {
      resources.push({
        title: 'Prevención del Ciberacoso',
        description: 'Guía completa para identificar, prevenir y manejar el ciberacoso',
        route: '/aprende/riesgos',
        pathText: 'Ruta: Aprende > Riesgos digitales'
      });
    }

    if (summary.concerns?.includes('grooming')) {
      resources.push({
        title: 'Detección de Grooming',
        description: 'Aprende a identificar señales de grooming y proteger a tu hijo',
        route: '/aprende/riesgos',
        pathText: 'Ruta: Aprende > Riesgos digitales'
      });
    }

    if (summary.concerns?.includes('sexting')) {
      resources.push({
        title: 'Educación sobre Sexting',
        description: 'Cómo hablar con tu hijo sobre sexting y sus riesgos',
        route: '/aprende/riesgos',
        pathText: 'Ruta: Aprende > Riesgos digitales'
      });
    }

    // Recursos por plataformas
    if (summary.platforms.includes('youtube') || summary.platforms.includes('tiktok') || summary.platforms.includes('whatsapp')) {
      resources.push({
        title: 'Redes Sociales y Seguridad',
        description: 'Guía completa sobre seguridad en redes sociales',
        route: '/aprende/tu-familia/redes-sociales',
        pathText: 'Ruta: Aprende > Tu familia > Redes sociales'
      });
    }

    if (summary.platforms.includes('roblox') || summary.platforms.includes('minecraft')) {
      resources.push({
        title: 'Videojuegos Seguros',
        description: 'Cómo hacer que los videojuegos sean seguros para tu hijo',
        route: '/aprende/tu-familia/videojuegos',
        pathText: 'Ruta: Aprende > Tu familia > Videojuegos'
      });
    }

    return resources;
  };

  const specificResources = getSpecificResources();

  // Recursos generales siempre disponibles
  const generalResources = [
    {
      title: 'Controles Parentales',
      description: 'Configuración paso a paso de controles parentales',
      route: '/aprende/controles',
      pathText: 'Ruta: Aprende > Controles parentales',
      icon: BookOpen
    },
    {
      title: 'Comunicación y Apoyo',
      description: 'Cómo mantener comunicación abierta con tu hijo',
      route: '/aprende/comunicacion',
      pathText: 'Ruta: Aprende > Comunicación y apoyo',
      icon: HelpCircle
    },
    {
      title: 'Recursos Generales',
      description: 'Herramientas, aplicaciones y recursos recomendados',
      route: '/recursos',
      pathText: 'Ruta: Recursos',
      icon: BookOpen
    },
    {
      title: 'Ayuda y Soporte',
      description: '¿Necesitas ayuda? Encuentra recursos de apoyo',
      route: '/ayuda',
      pathText: 'Ruta: Ayuda',
      icon: HelpCircle
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="print-section"
    >
      <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-4 sm:p-6 print:p-3 border border-brand-mint-200/30">
        {/* Header de la sección - compacto */}
        <div className="text-center mb-6 print:mb-4">
          <h2 className="font-heading text-lg sm:text-xl print:text-lg font-bold text-brand-ink-900 mb-1 print:mb-0">
            Recursos y Dónde Ver Más
          </h2>
          <p className="font-body text-xs print:text-xs text-brand-olive-500">
            Enlaces a contenido específico del sitio para profundizar en cada tema
          </p>
        </div>

        {/* Recursos específicos basados en el plan - grid de 2 columnas para impresión */}
        {specificResources.length > 0 && (
          <div className="mb-6 print:mb-4">
            <h3 className="font-heading text-base print:text-sm font-semibold text-brand-ink-900 mb-3 print:mb-2">
              Recursos Específicos para tu Plan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-3 print:gap-2">
              {specificResources.map((resource, index) => {
                return (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-3 print:p-2 rounded-lg border border-brand-mint-200/40 bg-brand-mint-200/20"
                  >
                    <div className="mb-2 print:mb-1">
                      <h4 className="font-heading text-xs print:text-xs font-semibold text-brand-ink-900">
                        {resource.title}
                      </h4>
                    </div>
                    <p className="font-body text-xs print:text-xs text-brand-olive-500 mb-2 print:mb-1 leading-relaxed">
                      {resource.description}
                    </p>
                    <ReferenceLink
                      to={resource.route}
                      label="Ver recurso"
                      pathText={resource.pathText}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Recursos generales - grid de 2 columnas para impresión */}
        <div>
          <h3 className="font-heading text-base print:text-sm font-semibold text-brand-ink-900 mb-3 print:mb-2">
            Recursos Generales
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-3 print:gap-2">
            {generalResources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: (specificResources.length + index) * 0.1 }}
                  className="p-3 print:p-2 rounded-lg border border-brand-mint-200/40 bg-brand-mint-200/20"
                >
                  <div className="mb-2 print:mb-1">
                    <h4 className="font-heading text-xs print:text-xs font-semibold text-brand-ink-900">
                      {resource.title}
                    </h4>
                  </div>
                  <p className="font-body text-xs print:text-xs text-brand-olive-500 mb-2 print:mb-1 leading-relaxed">
                    {resource.description}
                  </p>
                  <ReferenceLink
                    to={resource.route}
                    label="Ver recurso"
                    pathText={resource.pathText}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Nota sobre el sitio - compacta */}
        <div className="mt-6 print:mt-4 p-3 print:p-2 bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg">
          <div className="text-center">
            <h4 className="font-heading text-xs print:text-xs font-semibold text-brand-ink-900 mb-1 print:mb-0.5">
              ¿Necesitas más información?
            </h4>
            <p className="font-body text-xs print:text-xs text-brand-ink-800 leading-relaxed mb-2 print:mb-1">
              Este sitio web contiene guías detalladas, herramientas recomendadas y recursos actualizados 
              para ayudarte a proteger a tu familia en el mundo digital.
            </p>
            <ReferenceLink
              to="/"
              label="Volver al inicio del sitio"
              pathText="Ruta: Inicio"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
