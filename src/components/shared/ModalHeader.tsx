import React from 'react';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

export interface ModalHeaderProps {
  icon?: React.ComponentType<{ className?: string }>;
  customIcon?: React.ReactNode; // For custom icon content (e.g., platform icons, emojis)
  title: string;
  description?: string;
  badges?: React.ReactNode[];
  showDecorativeElements?: boolean;
  className?: string;
}

/**
 * Componente reutilizable para headers de modales con estructura sofisticada
 * Incluye elementos decorativos animados, logo circular, título, badges y descripción
 */
export const ModalHeader: React.FC<ModalHeaderProps> = ({ 
  icon: IconComponent,
  customIcon,
  title,
  description,
  badges = [],
  showDecorativeElements = true,
  className = ""
}) => {
  // Determine which icon to render
  const hasIcon = IconComponent || customIcon;
  
  return (
    <div className={`relative bg-gradient-to-br from-white via-brand-mint-200/20 to-white border-b border-brand-mint-200/30 -mx-4 -mt-4 sm:-mx-6 sm:-mt-6 p-6 sm:p-8 mb-6 overflow-hidden ${className}`}>
      {/* Elementos decorativos de fondo */}
      {showDecorativeElements && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 left-4 w-16 h-16 bg-brand-teal-500/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-20 h-20 bg-brand-mint-200/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
      )}
      
      <div className="relative">
        {/* Logo circular con gradiente - siempre centrado arriba */}
        {hasIcon && (
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
              {IconComponent ? (
                <IconComponent className="h-8 w-8 text-primary-foreground" />
              ) : (
                customIcon
              )}
            </div>
          </div>
        )}
        
        {/* Contenido centrado */}
        <div className="flex-1 min-w-0 text-center">
          <DialogTitle className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 leading-tight mb-3">
            {title}
          </DialogTitle>
          
          {/* Badges */}
          {badges.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              {badges.map((badge, index) => (
                <React.Fragment key={index}>
                  {badge}
                </React.Fragment>
              ))}
            </div>
          )}
          
          {/* Descripción */}
          {description && (
            <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-relaxed break-words">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalHeader;

