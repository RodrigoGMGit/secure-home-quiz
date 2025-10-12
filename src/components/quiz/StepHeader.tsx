import { ReactNode } from 'react';

interface StepHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  descriptionSlot?: ReactNode;
}

export function StepHeader({ title, subtitle, children, descriptionSlot }: StepHeaderProps) {
  return (
    <div className="text-center space-y-6">
      <div className="relative">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-ink-900 tracking-tight leading-tight">
          {title}
        </h1>
      </div>
      
      {subtitle && (
        <p className="text-brand-olive-500 font-body text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      
      {descriptionSlot && (
        <div className="flex justify-center">
          {descriptionSlot}
        </div>
      )}
      
      {children}
    </div>
  );
}