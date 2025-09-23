import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StepHeader } from '../StepHeader';
import { OptionGrid } from '../OptionGrid';
import { ChildGender } from '@/types/quiz';
import { User } from 'lucide-react';

interface GenderStepProps {
  initialGender?: ChildGender;
  onNext: (data: { gender: ChildGender }) => void;
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
    if (selectedGender) {
      onNext({ gender: selectedGender });
    }
  };

  const canProceed = !!selectedGender;

  return (
    <div className="space-y-8">
      <StepHeader
        title="¿Para quién haremos este plan?"
        subtitle="Esta información nos ayuda a adaptar mejor las recomendaciones."
      />

      <div className="space-y-6">
        <div>
          <div className="text-center mb-2">
            <span className="text-sm font-medium text-brand-olive-500">
              Campo requerido <span className="text-destructive">*</span>
            </span>
          </div>
          <h3 className="font-heading text-lg font-bold text-brand-ink-800 mb-6 text-center">
            Género
          </h3>
          <OptionGrid
            options={genderOptions}
            selectedValues={selectedGender ? [selectedGender] : []}
            onSelectionChange={(values) => setSelectedGender(values[0] as ChildGender)}
            multiSelect={false}
          />
          {/* Reserved space for dynamic content to prevent layout shift */}
          <div className="min-h-[40px] flex items-center justify-center mt-6">
            {selectedGender && (
              <p className="text-sm text-muted-foreground text-center">
                Perfecto, continuemos con la edad.
              </p>
            )}
          </div>
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