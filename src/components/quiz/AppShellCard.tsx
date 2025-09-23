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
  totalSteps = 6,
  onBack,
  showBackButton = false
}: AppShellCardProps) {
  const progressPercentage = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="bg-card border-0 rounded-lg shadow-[var(--shadow-card)] overflow-hidden">
          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b border-border/50">
            <div className="flex items-center justify-between mb-4">
              {showBackButton && onBack && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onBack}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Atrás</span>
                </Button>
              )}
              
              {showProgress && (
                <div className="flex-1 max-w-xs ml-auto">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span>Paso {currentStep} de {totalSteps}</span>
                    <span>{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {children}
          </div>
        </Card>

        {/* Privacy note */}
        <p className="text-center text-xs text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
          Usamos tus respuestas anónimas para crear tu plan. Solo pedimos tu correo si deseas recibir el PDF o recordatorios. 
          Puedes pedir borrar tus datos cuando quieras.
        </p>
      </div>
    </div>
  );
}