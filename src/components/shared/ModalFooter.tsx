import React from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export interface ModalFooterProps {
  children: React.ReactNode;
  showSeparator?: boolean;
  onClose?: () => void;
  className?: string;
}

/**
 * Componente reutilizable para el footer de modales
 * Incluye separator opcional y maneja el layout de botones
 */
export const ModalFooter: React.FC<ModalFooterProps> = ({ 
  children,
  showSeparator = true,
  className = ""
}) => {
  return (
    <>
      {showSeparator && <Separator className="my-6 sm:my-8 border-brand-mint-200/30" />}
      <div className={cn("flex justify-center", className)}>
        {children}
      </div>
    </>
  );
};

export default ModalFooter;

