import React from 'react';

export interface StepItemProps {
  number: number;
  title: string;
  description: string;
  details?: string;
  colorIndex?: number;
  className?: string;
}

/**
 * Componente para items de tutoriales/pasos en modales
 * Muestra un número circular, título, descripción y detalles opcionales
 */
export const StepItem: React.FC<StepItemProps> = ({ 
  number, 
  title, 
  description, 
  details,
  colorIndex = 0,
  className = ""
}) => {
  // Colores rotativos para los números
  const colors = [
    { bg: "bg-brand-teal-500/20", text: "text-brand-teal-500" },
    { bg: "bg-brand-mint-200/60", text: "text-brand-ink-800" },
    { bg: "bg-brand-olive-500/20", text: "text-brand-olive-500" }
  ];
  
  const color = colors[colorIndex % colors.length];
  
  return (
    <div className={`bg-white rounded-lg p-4 sm:p-6 border border-brand-mint-200/20 shadow-soft hover:shadow-md transition-smooth min-w-0 overflow-hidden ${className}`}>
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className={`${color.bg} text-brand-ink-800 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 shadow-soft`}>
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <h5 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-2 break-words">
            {title}
          </h5>
          <p className="font-body text-xs sm:text-sm text-brand-ink-800 mb-3 leading-relaxed break-words">
            {description}
          </p>
          {details && (
            <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-3 sm:p-4">
              <p className="font-body text-xs sm:text-sm text-brand-ink-800 break-words">
                <span className="font-semibold text-brand-ink-900">Instrucciones:</span> {details}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepItem;

