import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface AppShellCardProps {
  children: ReactNode;
  showProgress?: boolean;
  currentStep?: number;
  totalSteps?: number;
  progressLabel?: string;
  stickyFooter?: ReactNode;
}

export function AppShellCard({ 
  children, 
  showProgress = false, 
  currentStep = 0, 
  totalSteps = 7,
  progressLabel = "Paso",
  stickyFooter
}: AppShellCardProps) {
  const progressPercentage = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-warm opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-mint-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-teal-500 rounded-full blur-3xl opacity-20"></div>
      
      <div className="w-full max-w-2xl relative z-10">
        <Card className="bg-card border-0 rounded-xl shadow-soft overflow-hidden backdrop-blur-sm">
          {/* Header */}
          <div className="px-6 pt-4 pb-3 border-b border-brand-mint-200/30">
            {showProgress && (
              <div className="mb-3">
                <div 
                  className="flex items-center justify-between text-sm font-body text-brand-olive-500 mb-2"
                  aria-label={`Progreso del cuestionario: ${Math.round(progressPercentage)}% completado`}
                >
                  <span>{progressLabel} {currentStep} de {totalSteps}</span>
                  <span className="font-heading font-bold">{Math.round(progressPercentage)}%</span>
                </div>
                <div 
                  className="w-full bg-brand-mint-200/40 rounded-full h-3"
                  role="progressbar"
                  aria-valuenow={Math.round(progressPercentage)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Progreso: ${Math.round(progressPercentage)}% completado`}
                >
                  <div 
                    className="bg-gradient-to-r from-brand-teal-500 to-brand-ink-800 h-3 rounded-full transition-all duration-700 ease-out shadow-sm"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {children}
          </div>
        </Card>

        {/* Sticky Footer */}
        {stickyFooter && (
          <div className="sticky bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-brand-mint-200/30 shadow-soft p-4 mt-6">
            {stickyFooter}
          </div>
        )}

        {/* Privacy note */}
        <p className="text-center text-sm font-body text-brand-olive-500 mt-6 max-w-lg mx-auto leading-relaxed bg-white/60 backdrop-blur-sm rounded-lg p-4">
          Usamos tus respuestas anónimas para crear tu plan. Solo pedimos tu correo si deseas recibir el PDF o recordatorios. 
          Puedes pedir borrar tus datos cuando quieras.
        </p>
      </div>
    </div>
  );
}