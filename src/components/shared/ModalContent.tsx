import React from 'react';
import { cn } from '@/lib/utils';

export interface ModalContentProps {
  children: React.ReactNode;
  spacing?: string; // Override default spacing
  className?: string;
}

/**
 * Componente reutilizable para el contenido de modales
 * Proporciona padding y espaciado consistentes
 */
export const ModalContent: React.FC<ModalContentProps> = ({ 
  children,
  spacing,
  className = ""
}) => {
  const defaultSpacing = "space-y-6 sm:space-y-8";
  
  return (
    <div className={cn(
      "px-4 sm:px-0",
      spacing || defaultSpacing,
      className
    )}>
      {children}
    </div>
  );
};

export default ModalContent;

