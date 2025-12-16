import React from 'react';
import { motion } from 'framer-motion';
import { Info, AlertCircle } from 'lucide-react';

export interface IntroductionPoint {
  title: string;
  description: string;
}

export interface IntroductionSectionProps {
  title?: string;
  subtitle?: string;
  points: IntroductionPoint[];
  importantInfo?: {
    title: string;
    description: string;
  };
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  title = "¿Por qué es importante este tema?",
  subtitle = "Subtítulo explicativo de la sección",
  points,
  importantInfo,
  icon: IconComponent = Info,
  className = ""
}) => {
  return (
    <motion.div 
      className={`mb-12 sm:mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header de la sección */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="p-2 bg-gradient-to-r from-brand-olive-500 to-brand-teal-500 rounded-full">
            <IconComponent className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink-900 mb-2">
          {title}
        </h2>
        <p className="font-body text-sm text-brand-olive-500">
          {subtitle}
        </p>
      </div>
      
      {/* Contenedor con gradiente */}
      <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
        <div className="max-w-4xl mx-auto">
          
          {/* Grid de 2 columnas con puntos clave */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-heading text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                  <div className={`w-2 h-2 ${index === 0 ? 'bg-brand-teal-500' : 'bg-brand-mint-200'} rounded-full mr-3`}></div>
                  {point.title}
                </h3>
                <p className="font-body text-base text-brand-ink-800 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Dato importante destacado */}
          {importantInfo && (
            <motion.div 
              className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-teal-500/20 rounded-full flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-brand-teal-500" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-semibold text-brand-ink-900 mb-2">
                    {importantInfo.title}
                  </h4>
                  <p className="font-body text-sm text-brand-ink-800 leading-relaxed">
                    {importantInfo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
          
        </div>
      </div>
    </motion.div>
  );
};

export default IntroductionSection;
