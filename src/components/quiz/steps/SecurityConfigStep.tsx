import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { StepHeader } from '../StepHeader';
import { OptionGrid } from '../OptionGrid';
import { ChildGender } from '@/types/quiz';

interface SecurityConfigStepProps {
  initialConfig?: SecurityConfig;
  childGender?: ChildGender;
  onNext: (config: SecurityConfig) => void;
  onPrevious: () => void;
  onTrack: (event: string, data: Record<string, unknown>) => void;
}

interface SecurityConfig {
  supervision?: 'yes_supervised' | 'no_unsupervised' | 'not_sure';
  communication?: 'yes_regular' | 'no_rarely';
  safesearch?: 'yes_active' | 'no_inactive' | 'dont_know';
  family_rules?: 'yes_clear' | 'some_inconsistent' | 'no_formal';
  legal_knowledge?: 'yes_know' | 'heard_dont_use' | 'no_idea';
}

export function SecurityConfigStep({ 
  initialConfig = {}, 
  childGender,
  onNext, 
  onPrevious,
  onTrack 
}: SecurityConfigStepProps) {
  const [config, setConfig] = useState<SecurityConfig>(initialConfig);

  const getChildText = () => {
    if (childGender === 'Niño') return 'hijo';
    if (childGender === 'Niña') return 'hija';
    return 'hijo/hija';
  };

  const handleConfigChange = useCallback((questionId: string, value: string) => {
    setConfig(prev => ({
      ...prev,
      [questionId]: value
    }));
    
    onTrack('security_config_answer', { question: questionId, answer: value });
  }, [onTrack]);

  const handleNext = () => {
    onNext(config);
  };

  const questions = [
    {
      id: 'supervision',
      title: `¿Tu ${getChildText()} usa su dispositivo con una cuenta infantil supervisada por ti?`,
      options: [
        { 
          value: 'yes_supervised', 
          label: 'Sí, está supervisada (Family Link en Android o Tiempo en Pantalla en iPhone/iPad)',
          description: 'Tienes control parental activado'
        },
        { 
          value: 'no_unsupervised', 
          label: 'No, usa una cuenta sin supervisión',
          description: 'No hay controles parentales configurados'
        },
        { 
          value: 'not_sure', 
          label: 'No estoy seguro/a',
          description: 'Necesitas verificar la configuración'
        }
      ]
    },
    {
      id: 'communication',
      title: `¿Con qué frecuencia hablas con tu ${getChildText()} sobre su vida digital y las plataformas que usa?`,
      options: [
        { 
          value: 'yes_regular', 
          label: 'Sí, hablamos regularmente sobre su vida digital',
          description: 'Mantienes comunicación abierta'
        },
        { 
          value: 'no_rarely', 
          label: 'No, raramente o nunca hablamos de estos temas',
          description: 'Necesitas iniciar más conversaciones'
        }
      ]
    },
    {
      id: 'safesearch',
      title: '¿Tienes activado Google SafeSearch en los dispositivos que usa tu hijo/hija?',
      options: [
        { 
          value: 'yes_active', 
          label: 'Sí, está activado',
          description: 'Filtros de búsqueda configurados'
        },
        { 
          value: 'no_inactive', 
          label: 'No, no está activado',
          description: 'Necesitas activar SafeSearch'
        },
        { 
          value: 'dont_know', 
          label: 'No sé qué es SafeSearch',
          description: 'Te ayudaremos a configurarlo'
        }
      ]
    },
    {
      id: 'family_rules',
      title: '¿Tienes establecidas reglas familiares básicas sobre el uso de dispositivos?',
      options: [
        { 
          value: 'yes_clear', 
          label: 'Sí, tenemos horarios y reglas claras (comidas sin pantallas, cargador fuera del cuarto)',
          description: 'Reglas familiares bien establecidas'
        },
        { 
          value: 'some_inconsistent', 
          label: 'Tenemos algunas reglas pero no son consistentes',
          description: 'Necesitas mejorar la consistencia'
        },
        { 
          value: 'no_formal', 
          label: 'No tenemos reglas formales establecidas',
          description: 'Es importante crear reglas claras'
        }
      ]
    },
    {
      id: 'legal_knowledge',
      title: '¿Sabes dónde reportar un incidente digital grave (como grooming o ciberacoso)?',
      options: [
        { 
          value: 'yes_know', 
          label: 'Sí, conozco la Policía Cibernética (088) y Te Protejo México',
          description: 'Conoces los recursos de reporte'
        },
        { 
          value: 'heard_dont_use', 
          label: 'He oído de estos recursos pero no sé cómo usarlos',
          description: 'Necesitas aprender a usarlos'
        },
        { 
          value: 'no_idea', 
          label: 'No tenía idea de que existieran',
          description: 'Te enseñaremos sobre estos recursos'
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <StepHeader
        title="Hablemos de qué medidas de protección ya tienes implementadas"
        subtitle="Marca la opción que mejor describe tu situación actual. Esto nos ayuda a enfocar tu plan en lo que aún falta."
      />

      <div className="space-y-8">
        {questions.map((question, index) => (
          <div key={question.id} className="space-y-4">
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold text-brand-ink-900 mb-2">
                {question.title}
              </h3>
              <OptionGrid
                options={question.options.map(option => ({
                  value: option.value,
                  label: option.label,
                  description: option.description
                }))}
                selectedValues={config[question.id as keyof SecurityConfig] ? [config[question.id as keyof SecurityConfig]!] : []}
                onSelectionChange={(values) => handleConfigChange(question.id, values[0] || '')}
                multiSelect={false}
                className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              />
            </div>
          </div>
        ))}
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
          className="w-full sm:w-auto px-8"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}
