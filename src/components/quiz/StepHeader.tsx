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
    <div className="text-center space-y-3">
      <div className="flex items-center justify-center gap-2">
        <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-brand-ink-800 tracking-tight">
          {title}
        </h2>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <Info className="w-4 h-4" />
                  <span className="sr-only">Más información</span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs">
                <p className="text-sm">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      
      {subtitle && (
        <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      
      {children}
    </div>
  );
}