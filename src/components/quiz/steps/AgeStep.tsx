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
        tooltip="Cada grupo de edad tiene necesidades y capacidades diferentes en el mundo digital"
      />

      <div className="space-y-6">
        <div>
          <h3 className="font-heading text-lg font-bold text-brand-ink-800 mb-6 text-center">
            Rango de edad <span className="text-destructive">*</span>
          </h3>
          <OptionGrid
            options={ageOptions}
            selectedValues={selectedAge ? [selectedAge] : []}
            onSelectionChange={(values) => setSelectedAge(values[0] as AgeBand)}
            multiSelect={false}
          />
          {selectedAge && (
            <p className="text-sm text-muted-foreground mt-6 text-center">
              Excelente, ahora veamos qué plataformas usa.
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between pt-6">
        <Button
          variant="outline"
          onClick={onPrevious}
          className="w-full sm:w-auto min-h-[44px]"
        >
          Atrás
        </Button>
        <Button
          onClick={handleNext}
          disabled={!canProceed}
          className="w-full sm:w-auto px-8 min-h-[44px] bg-brand-ink-800 hover:bg-brand-ink-900 text-white shadow-cta disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}