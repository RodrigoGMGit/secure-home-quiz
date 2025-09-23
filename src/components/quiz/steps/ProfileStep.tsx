import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StepHeader } from '../StepHeader';
import { OptionGrid } from '../OptionGrid';
import { ChildGender, AgeBand } from '@/types/quiz';
import { User, Calendar } from 'lucide-react';

interface ProfileStepProps {
  initialGender?: ChildGender;
  initialAge?: AgeBand;
  onNext: (data: { gender?: ChildGender; age?: AgeBand }) => void;
  onPrevious: () => void;
}

const genderOptions = [
  { value: 'Niño', label: 'Niño', icon: <User /> },
  { value: 'Niña', label: 'Niña', icon: <User /> },
  { value: 'Prefiero no especificar', label: 'Prefiero no especificar', icon: <User /> }
];

const ageOptions = [
  { value: '6-8', label: '6-8 años', icon: <Calendar />, description: 'Primaria temprana' },
  { value: '9-12', label: '9-12 años', icon: <Calendar />, description: 'Primaria tardía' },
  { value: '13-15', label: '13-15 años', icon: <Calendar />, description: 'Secundaria' },
  { value: '16-17', label: '16-17 años', icon: <Calendar />, description: 'Preparatoria' }
];

export function ProfileStep({ initialGender, initialAge, onNext, onPrevious }: ProfileStepProps) {
  const [selectedGender, setSelectedGender] = useState<ChildGender | undefined>(initialGender);
  const [selectedAge, setSelectedAge] = useState<AgeBand | undefined>(initialAge);

  const handleNext = () => {
    onNext({ gender: selectedGender, age: selectedAge });
  };

  const canProceed = !!selectedAge; // Age is required for plan relevance

  return (
    <div className="space-y-8">
      <StepHeader
        title="¿Para quién haremos este plan?"
        subtitle="Esta información nos ayuda a adaptar mejor las recomendaciones."
      />

      <div className="space-y-8">
        <div>
          <h3 className="font-medium text-foreground mb-4">Género (opcional)</h3>
          <OptionGrid
            options={genderOptions}
            selectedValues={selectedGender ? [selectedGender] : []}
            onSelectionChange={(values) => setSelectedGender(values[0] as ChildGender)}
            multiSelect={false}
          />
        </div>

        <div>
          <h3 className="font-medium text-foreground mb-4">
            Rango de edad <span className="text-destructive">*</span>
          </h3>
          <OptionGrid
            options={ageOptions}
            selectedValues={selectedAge ? [selectedAge] : []}
            onSelectionChange={(values) => setSelectedAge(values[0] as AgeBand)}
            multiSelect={false}
          />
          {selectedAge && (
            <p className="text-sm text-muted-foreground mt-3 text-center">
              La edad nos permite adaptar mejor las acciones recomendadas.
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 justify-between pt-4">
        <Button
          variant="outline"
          onClick={onPrevious}
          className="w-full sm:w-auto"
        >
          Atrás
        </Button>
        <Button
          onClick={handleNext}
          disabled={!canProceed}
          className="w-full sm:w-auto px-8"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}