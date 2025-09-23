import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { StepHeader } from '../StepHeader';
import { ChecklistByPlatform } from '../ChecklistByPlatform';
import { Notice } from '../Notice';
import { Platform } from '@/types/quiz';

interface MeasuresStepProps {
  platforms: Platform[];
  initialMeasures?: { [key in Platform]?: string[] };
  onNext: (measures: { [key in Platform]?: string[] }) => void;
  onPrevious: () => void;
  onTrack: (event: string, data: Record<string, unknown>) => void;
}

export function MeasuresStep({ 
  platforms, 
  initialMeasures = {}, 
  onNext, 
  onPrevious,
  onTrack 
}: MeasuresStepProps) {
  const [selectedMeasures, setSelectedMeasures] = useState<{ [key in Platform]?: string[] }>(initialMeasures);

  const handleMeasureChange = useCallback((platform: Platform, measures: string[]) => {
    setSelectedMeasures(prev => {
      const newMeasures = { ...prev, [platform]: measures };
      onTrack('measures_selected', { platform, count: measures.length });
      return newMeasures;
    });
  }, [onTrack]);

  const handleNext = () => {
    onNext(selectedMeasures);
  };

  const getTotalSelected = () => {
    return Object.values(selectedMeasures).reduce((total, measures) => total + (measures?.length || 0), 0);
  };

  if (platforms.length === 0) {
    return (
      <div className="space-y-6">
        <StepHeader
          title="Configuración de seguridad"
          subtitle="Como no especificaste plataformas, empezaremos con acciones básicas."
        />
        
        <Notice type="success">
          <p>
            Perfecto, empezaremos con 3 acciones sencillas que puedes implementar hoy mismo 
            para mejorar la seguridad digital de tu familia.
          </p>
        </Notice>

        <div className="flex flex-col-reverse sm:flex-row gap-3 justify-between pt-4">
          <Button
            variant="outline"
            onClick={onPrevious}
            className="w-full sm:w-auto"
          >
            Atrás
          </Button>
          <Button
            variant="primary-brand"
            onClick={handleNext}
            className="w-full sm:w-auto px-6"
          >
            Continuar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <StepHeader
        title="Configuraciones de seguridad"
        subtitle="Marca las medidas que ya tienes activadas. Esto nos ayuda a enfocar tu plan en lo que aún falta."
      />

      <ChecklistByPlatform
        platforms={platforms}
        selectedMeasures={selectedMeasures}
        onMeasureChange={handleMeasureChange}
      />

      {getTotalSelected() > 0 && (
        <Notice type="success">
          <p>
            ¡Excelente! Ya tienes {getTotalSelected()} medida{getTotalSelected() > 1 ? 's' : ''} de seguridad implementada{getTotalSelected() > 1 ? 's' : ''}. 
            Te ayudaremos con las que faltan.
          </p>
        </Notice>
      )}

      {getTotalSelected() === 0 && (
        <Notice type="info">
          <p>
            No hay problema si aún no has implementado estas medidas. 
            Tu plan incluirá pasos sencillos para configurar todo.
          </p>
        </Notice>
      )}

      <div className="flex flex-col-reverse sm:flex-row gap-3 justify-between pt-4">
        <Button
          variant="outline"
          onClick={onPrevious}
          className="w-full sm:w-auto"
        >
          Atrás
        </Button>
        <Button
          variant="primary-brand"
          onClick={handleNext}
          className="w-full sm:w-auto px-8"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}