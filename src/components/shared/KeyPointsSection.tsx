import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { getNumberColors } from '@/utils/cardColors';

export interface KeyPoint {
  title: string;
  description: string;
}

export interface KeyPointsSectionProps {
  title?: string;
  subtitle?: string;
  points: KeyPoint[];
  className?: string;
}

const KeyPointsSection: React.FC<KeyPointsSectionProps> = ({
  title = "Puntos Clave a Recordar",
  subtitle = "Los conceptos más importantes para entender",
  points,
  className = ""
}) => {
  return (
    <motion.div 
      className={`bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30 mb-12 sm:mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      
      {/* Header de la sección */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="p-2 bg-gradient-to-r from-primary to-brand-teal-500 rounded-full">
            <Target className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
          {title}
        </h3>
        <p className="font-body text-sm text-brand-olive-500">
          {subtitle}
        </p>
      </div>
      
      {/* Grid de puntos con números circulares */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {points.map((point, index) => {
          const colors = getNumberColors(index);
          
          return (
            <motion.div 
              key={index} 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1  // Stagger animation
              }}
            >
              {/* Número circular con hover */}
              <div className={`${colors.background} rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth`}>
                <span className={`font-heading text-xl sm:text-2xl font-bold ${colors.text}`}>
                  {index + 1}
                </span>
              </div>
              
              <h4 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-3">
                {point.title}
              </h4>
              
              <p className="font-body text-sm sm:text-base text-brand-olive-500 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default KeyPointsSection;
