import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StepHeader } from '../StepHeader';
import { OptionGrid } from '../OptionGrid';
import { ChildGender } from '@/types/quiz';
import { User } from 'lucide-react';

interface GenderStepProps {
  initialGender?: ChildGender;
  onNext: (data: { gender?: ChildGender }) => void;
  onPrevious: () => void;
}

const genderOptions = [
  { value: 'Niño', label: 'Niño', icon: <User /> },
  { value: 'Niña', label: 'Niña', icon: <User /> },
  { value: 'Prefiero no especificar', label: 'Prefiero no especificar', icon: <User /> }
];

export function GenderStep({ initialGender, onNext, onPrevious }: GenderStepProps) {
  const [selectedGender, setSelectedGender] = useState<ChildGender | undefined>(initialGender);

  const handleNext = () => {
    onNext({ gender: selectedGender });
  };

  return (
    <div className="space-y-8">
      <StepHeader
        title="¿Para quién haremos este plan?"
        subtitle="Esta información nos ayuda a adaptar mejor las recomendaciones."
      />

      <div className="space-y-6">
        <div>
          <h3 className="font-heading text-lg font-bold text-brand-ink-800 mb-6 text-center">
            Género (opcional)
          </h3>
          <OptionGrid
            options={genderOptions}
            selectedValues={selectedGender ? [selectedGender] : []}
            onSelectionChange={(values) => setSelectedGender(values[0] as ChildGender)}
            multiSelect={false}
          />
          {selectedGender && (
            <p className="text-sm text-muted-foreground mt-6 text-center">
              Perfecto, continuemos con la edad.
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
          className="w-full sm:w-auto px-8 min-h-[44px] bg-brand-ink-800 hover:bg-brand-ink-900 text-white shadow-cta"
        >
          {selectedGender ? 'Continuar' : 'Saltar'}
        </Button>
      </div>
    </div>
  );
}