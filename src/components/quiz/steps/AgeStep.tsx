import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StepHeader } from '../StepHeader';
import { OptionGrid } from '../OptionGrid';
import { AgeBand } from '@/types/quiz';
import { Calendar } from 'lucide-react';

interface AgeStepProps {
  initialAge?: AgeBand;
  onNext: (data: { age?: AgeBand }) => void;
  onPrevious: () => void;
}

const ageOptions = [
  { value: '6-8', label: '6-8 años', icon: <Calendar />, description: 'Primaria temprana' },
  { value: '9-12', label: '9-12 años', icon: <Calendar />, description: 'Primaria tardía' },
  { value: '13-15', label: '13-15 años', icon: <Calendar />, description: 'Secundaria' },
  { value: '16-17', label: '16-17 años', icon: <Calendar />, description: 'Preparatoria' }
];

export function AgeStep({ initialAge, onNext, onPrevious }: AgeStepProps) {
  const [selectedAge, setSelectedAge] = useState<AgeBand | undefined>(initialAge);

  const handleNext = () => {
    onNext({ age: selectedAge });
  };

  const canProceed = !!selectedAge; // Age is required for plan relevance

  return (
    <div className="space-y-8">
      <StepHeader
        title="¿En qué rango de edad está?"
        subtitle="La edad nos permite adaptar mejor las acciones recomendadas."
        descriptionSlot={
          <span className="text-sm font-medium text-brand-olive-500">
            Campo requerido <span className="text-brand-teal-500">*</span>
          </span>
        }
      />

      <div className="space-y-6">
        <OptionGrid
          options={ageOptions}
          selectedValues={selectedAge ? [selectedAge] : []}
          onSelectionChange={(values) => setSelectedAge(values[0] as AgeBand)}
          multiSelect={false}
        />
        
        {/* Reserved space for dynamic content to prevent layout shift */}
        <div className="min-h-[40px] flex items-center justify-center mt-6">
          {selectedAge && (
            <p className="text-sm text-muted-foreground text-center">
              Excelente, ahora veamos qué plataformas usa.
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 justify-between pt-4">
        <Button
          variant="outline"
          onClick={onPrevious}
          className="w-full sm:w-auto min-h-[40px]"
        >
          Atrás
        </Button>
        <Button
          variant="primary-brand"
          onClick={handleNext}
          disabled={!canProceed}
          className="w-full sm:w-auto px-6 min-h-[40px] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}