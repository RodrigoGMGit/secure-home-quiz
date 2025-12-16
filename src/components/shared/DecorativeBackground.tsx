import React from 'react';

export interface DecorativeBackgroundProps {
  className?: string;
}

/**
 * Componente reutilizable para elementos decorativos de fondo
 * Crea 3 círculos animados con blur en diferentes posiciones
 * Usado en páginas de contenido educativo
 */
export const DecorativeBackground: React.FC<DecorativeBackgroundProps> = ({ 
  className = "" 
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-olive-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
    </div>
  );
};

export default DecorativeBackground;

