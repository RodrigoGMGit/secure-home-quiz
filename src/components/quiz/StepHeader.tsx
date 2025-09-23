import { ReactNode } from 'react';

interface StepHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function StepHeader({ title, subtitle, children }: StepHeaderProps) {
  return (
    <div className="text-center space-y-6">
      <div className="relative">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-brand-ink-800 tracking-tight leading-tight">
          {title}
        </h1>
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