import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface AppShellCardProps {
  children: ReactNode;
  showProgress?: boolean;
  currentStep?: number;
  totalSteps?: number;
  onBack?: () => void;
  showBackButton?: boolean;
}

export function AppShellCard({ 
  children, 
  showProgress = false, 
  currentStep = 0, 
  totalSteps = 7,
  onBack,
  showBackButton = false
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
          <div className="px-8 pt-8 pb-6 border-b border-brand-mint-200/30">
            <div className="flex items-center justify-between mb-6">
              {showBackButton && onBack && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onBack}
                  className="flex items-center gap-2 text-brand-olive-500 hover:text-brand-ink-800 hover:bg-brand-mint-200/50 min-h-[44px]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="font-body">Atrás</span>
                </Button>
              )}
              
              {showProgress && (
                <div className="flex-1 max-w-xs ml-auto">
                  <div className="flex items-center justify-between text-sm font-body text-brand-olive-500 mb-3">
                    <span>Paso {currentStep} de {totalSteps}</span>
                    <span className="font-heading font-bold">{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="w-full bg-brand-mint-200/40 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-brand-teal-500 to-brand-ink-800 h-3 rounded-full transition-all duration-700 ease-out shadow-sm"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {children}
          </div>
        </Card>

        {/* Privacy note */}
        <p className="text-center text-sm font-body text-brand-olive-500 mt-6 max-w-lg mx-auto leading-relaxed bg-white/60 backdrop-blur-sm rounded-lg p-4">
          Usamos tus respuestas anónimas para crear tu plan. Solo pedimos tu correo si deseas recibir el PDF o recordatorios. 
          Puedes pedir borrar tus datos cuando quieras.
        </p>
      </div>
    </div>
  );
}