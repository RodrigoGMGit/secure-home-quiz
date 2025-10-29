import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export interface PageHeaderProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  highlightQuote?: string;
  showBackButton?: boolean;
  backButtonHref?: string;
  backButtonText?: string;
  className?: string;
}

/**
 * Componente unificado para headers de páginas educativas
 * Incluye logo circular con gradiente, título, subtítulo, frase destacada opcional
 * y botón de regreso opcional
 */
export const PageHeader: React.FC<PageHeaderProps> = ({ 
  icon: IconComponent,
  title,
  subtitle,
  highlightQuote,
  showBackButton = false,
  backButtonHref,
  backButtonText = "Volver",
  className = ""
}) => {
  return (
    <div className="relative bg-gradient-to-br from-white via-brand-mint-200/20 to-white border-b">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className={`max-w-4xl mx-auto text-center ${className}`}>
          {/* Botón de regreso opcional */}
          {showBackButton && backButtonHref && (
            <div className="flex items-center mb-4 sm:mb-6 justify-center">
              <Button variant="ghost" asChild className="text-sm sm:text-base">
                <Link to={backButtonHref}>
                  <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  {backButtonText}
                </Link>
              </Button>
            </div>
          )}

          {/* Logo circular con gradiente */}
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
              <IconComponent className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          
          {/* Título principal */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
            {title}
          </h1>
          
          {/* Subtítulo */}
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-brand-olive-500 mb-6 sm:mb-8 px-4">
            {subtitle}
          </p>
          
          {/* Frase destacada opcional */}
          {highlightQuote && (
            <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-6 sm:p-8 mx-4 sm:mx-0 shadow-soft">
              <p className="font-body text-base sm:text-lg text-brand-ink-800 font-medium italic">
                {highlightQuote}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

