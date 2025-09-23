import { ReactNode } from 'react';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface StepHeaderProps {
  title: string;
  subtitle?: string;
  tooltip?: string;
  children?: ReactNode;
}

export function StepHeader({ title, subtitle, tooltip, children }: StepHeaderProps) {
  return (
    <div className="text-center space-y-6">
      <div className="flex items-center justify-center gap-3">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-brand-ink-800 tracking-tight leading-tight">
          {title}
        </h1>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-brand-olive-500 hover:text-brand-ink-800 transition-colors p-2 rounded-full hover:bg-brand-mint-200/50">
                  <Info className="w-5 h-5" />
                  <span className="sr-only">Más información</span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs bg-white border border-brand-mint-200 shadow-soft">
                <p className="text-sm font-body text-brand-ink-800">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      
      {subtitle && (
        <p className="text-brand-olive-500 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      
      {children}
    </div>
  );
}