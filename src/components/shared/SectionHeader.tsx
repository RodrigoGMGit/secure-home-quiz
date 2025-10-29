import React from 'react';

export interface SectionHeaderProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

/**
 * Componente para headers de secciones con icono, título y subtítulo
 * Usado para secciones dentro de páginas con layout consistente
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  icon: IconComponent,
  title,
  subtitle,
  gradientFrom = "from-brand-olive-500",
  gradientTo = "to-brand-teal-500",
  className = ""
}) => {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <div className="flex justify-center mb-4">
        <div className={`p-2 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full`}>
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
  );
};

export default SectionHeader;

