import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StepHeader } from '../StepHeader';
import { OptionGrid } from '../OptionGrid';
import { AgeBand } from '@/types/quiz';
import { AlertTriangle, Users, Clock, Shield, Camera, HelpCircle } from 'lucide-react';
import { GlossaryTerm } from '@/components/ui/GlossaryTerm';

interface ConcernsStepProps {
  initialConcerns?: string[];
  ageband?: AgeBand;
  onNext: (concerns: string[]) => void;
  onPrevious: () => void;
  onTrack: (event: string, data: Record<string, unknown>) => void;
}

const baseConcernOptions = [
  { 
    value: 'inappropriate_content', 
    label: 'Contenido inapropiado', 
    icon: <AlertTriangle />,
    description: 'Videos, imágenes o textos no apropiados para su edad'
  },
  { 
    value: 'grooming', 
    label: <>Contacto con extraños (<GlossaryTerm termKey="grooming">grooming</GlossaryTerm>)</>, 
    icon: <Users />,
    description: 'Personas desconocidas que buscan contacto'
  },
  { 
    value: 'cyberbullying', 
    label: 'Ciberacoso', 
    icon: <Shield />,
    description: 'Acoso, burlas o amenazas en línea'
  },
  { 
    value: 'tiempo_sueno', 
    label: 'Tiempo de pantalla y sueño', 
    icon: <Clock />,
    description: 'Dificultad para controlar el uso y descanso'
  },
  { 
    value: 'privacy_data', 
    label: 'Privacidad y datos personales', 
    icon: <Shield />,
    description: 'Compartir información personal sin darse cuenta'
  },
  { 
    value: 'no_se', 
    label: 'No estoy seguro/a', 
    icon: <HelpCircle />,
    description: 'Necesito orientación sobre qué vigilar'
  }
];

const ageConcernOptions = [
  { 
    value: 'sexting', 
    label: <><GlossaryTerm termKey="sexting">Sexting</GlossaryTerm> o contenido sexual</>, 
    icon: <Camera />,
    description: 'Intercambio de contenido sexual',
    ageRestricted: true,
    minAge: '13-15'
  }
];

export function ConcernsStep({ 
  initialConcerns = [], 
  ageband, 
  onNext, 
  onPrevious,
  onTrack 
}: ConcernsStepProps) {
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(initialConcerns);

  // Show sexting option only for 13+ age groups
  const showAgeRestricted = ageband === '13-15' || ageband === '16-17';
  const concernOptions = showAgeRestricted 
    ? [...baseConcernOptions, ...ageConcernOptions]
    : baseConcernOptions;

  const handleSelectionChange = (values: string[]) => {
    setSelectedConcerns(values);
    onTrack('concern_select', { concerns: values });
  };

  const handleNext = () => {
    onNext(selectedConcerns);
  };

  const canProceed = selectedConcerns.length > 0;

  return (
    <div className="space-y-6">
      <StepHeader
        title="¿Qué te preocupa más ahora?"
        subtitle="Selecciona todas las opciones que te generen inquietud. Esto nos ayuda a priorizar tu plan."
        descriptionSlot={
          <span className="text-sm font-medium text-brand-olive-500">
            Campo requerido <span className="text-brand-teal-500">*</span>
          </span>
        }
      />

      <OptionGrid
        options={concernOptions}
        selectedValues={selectedConcerns}
        onSelectionChange={handleSelectionChange}
        multiSelect={true}
        className="grid-cols-1 sm:grid-cols-2"
      />

      {/* Reserved space for dynamic content to prevent layout shift */}
      <div className="min-h-[60px] flex items-center justify-center">
        {selectedConcerns.length > 0 && (
          <div className="text-center text-sm text-muted-foreground bg-accent/30 p-4 rounded-lg">
            <p>
              Perfecto, priorizaremos estas {selectedConcerns.length} área{selectedConcerns.length > 1 ? 's' : ''} en tu plan personalizado.
            </p>
          </div>
        )}
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
          variant="primary-brand"
          onClick={handleNext}
          disabled={!canProceed}
          className="w-full sm:w-auto px-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}