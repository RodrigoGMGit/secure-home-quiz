import React, { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipPortal } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';
import { glossaryTerms, GlossaryEntry } from '@/data/glossary';

interface GlossaryTermProps {
  termKey: string; // key del glossaryTerms
  children?: React.ReactNode; // opcional para custom display
  className?: string;
  asButton?: boolean; // opcional para controlar si renderiza como button o span
}

export const GlossaryTerm: React.FC<GlossaryTermProps> = ({ 
  termKey, 
  children, 
  className = "",
  asButton = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const glossaryEntry: GlossaryEntry | undefined = glossaryTerms[termKey];
  
  if (!glossaryEntry) {
    console.warn(`Glossary term "${termKey}" not found`);
    return <span className={className}>{children || termKey}</span>;
  }

  return (
    <TooltipProvider delayDuration={1000}>
      <Tooltip 
        open={isOpen} 
        onOpenChange={(next) => {
          // Solo aceptar cierres; ignorar aperturas por hover/focus
          if (!next) {
            setIsOpen(false);
          }
        }}
      >
        <TooltipTrigger asChild>
          {asButton ? (
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center text-brand-teal-500 underline decoration-dotted hover:decoration-solid active:bg-brand-mint-200/20 px-1 py-0.5 rounded transition-colors cursor-pointer ${className}`}
              aria-label={`Ver definición de ${glossaryEntry.term}`}
            >
              {children || glossaryEntry.term}
              <Info className="ml-1 h-3 w-3" />
            </button>
          ) : (
            <span 
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center text-brand-teal-500 underline decoration-dotted hover:decoration-solid active:bg-brand-mint-200/20 px-1 py-0.5 rounded transition-colors cursor-pointer ${className}`}
              aria-label={`Ver definición de ${glossaryEntry.term}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsOpen(!isOpen);
                }
              }}
            >
              {children || glossaryEntry.term}
              <Info className="ml-1 h-3 w-3" />
            </span>
          )}
        </TooltipTrigger>
        
        <TooltipPortal>
          <TooltipContent 
            className="max-w-xs bg-white border border-brand-mint-200/30 shadow-lg p-4 z-50"
            side="top"
            align="center"
          >
            <div className="space-y-3">
              <h4 className="font-heading font-semibold text-sm text-brand-ink-900">
                {glossaryEntry.term}
              </h4>
              <p className="font-body text-sm text-brand-ink-800 leading-relaxed">
                {glossaryEntry.definition}
              </p>
              
              {glossaryEntry.additionalInfo && (
                <div className="bg-brand-mint-200/20 p-3 rounded-lg border border-brand-mint-200/30">
                  <h5 className="font-heading font-semibold text-xs mb-2 text-brand-ink-900">
                    {glossaryEntry.additionalInfo.title}
                  </h5>
                  <ul className="space-y-1">
                    {glossaryEntry.additionalInfo.items.map((item, index) => (
                      <li key={index} className="font-body text-xs text-brand-ink-800 flex items-start">
                        <span className="w-1 h-1 bg-brand-teal-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
};
