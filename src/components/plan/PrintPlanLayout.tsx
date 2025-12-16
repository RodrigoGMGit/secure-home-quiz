import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PrintPlanLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PrintPlanLayout({ children, className }: PrintPlanLayoutProps) {
  return (
    <div className={cn(
      // Contenedor principal responsivo
      "container mx-auto px-4 py-8 sm:py-12",
      // Ancho óptimo de lectura para documento
      "max-w-4xl",
      // Espaciado entre secciones
      "space-y-8 sm:space-y-12",
      // Clases específicas para impresión
      "print-container print:space-y-8",
      className
    )}>
      {children}
    </div>
  );
}
