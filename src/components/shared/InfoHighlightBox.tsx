import React from 'react';
import { AlertTriangle } from 'lucide-react';

export interface InfoHighlightBoxProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

/**
 * Componente para destacar información importante en secciones
 * Usado para alertas, datos importantes, o información destacada
 */
export const InfoHighlightBox: React.FC<InfoHighlightBoxProps> = ({ 
  title,
  description,
  icon: IconComponent = AlertTriangle,
  className = ""
}) => {
  return (
    <div className={`bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-6 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="p-2 bg-brand-teal-500/20 rounded-full flex-shrink-0">
          <IconComponent className="h-5 w-5 text-brand-teal-500" />
        </div>
        <div className="flex-1">
          <h4 className="font-heading text-base font-semibold text-brand-ink-900 mb-2">
            {title}
          </h4>
          <p className="font-body text-sm text-brand-ink-800 leading-relaxed break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoHighlightBox;

