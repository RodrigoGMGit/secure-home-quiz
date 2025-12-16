import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { StepHeader } from '../StepHeader';
import { OptionGrid } from '../OptionGrid';
import { ChildGender } from '@/types/quiz';

interface EmergencyResourcesStepProps {
  initialResources?: EmergencyResources;
  childGender?: ChildGender;
  onNext: (resources: EmergencyResources) => void;
  onPrevious: () => void;
  onTrack: (event: string, data: Record<string, unknown>) => void;
}

interface EmergencyResources {
  emergency_action?: 'know_exactly' | 'general_idea' | 'no_idea';
  report_resources?: 'yes_know' | 'heard_dont_use' | 'no_idea';
  emotional_support?: 'yes_know_resources' | 'general_idea' | 'dont_know';
  preventive_prep?: 'yes_specific' | 'general_talk' | 'no_conversation';
}

export function EmergencyResourcesStep({ 
  initialResources = {}, 
  childGender,
  onNext, 
  onPrevious,
  onTrack 
}: EmergencyResourcesStepProps) {
  const [resources, setResources] = useState<EmergencyResources>(initialResources);

  const getChildText = () => {
    if (childGender === 'Niño') return 'hijo';
    if (childGender === 'Niña') return 'hija';
    return 'hijo/hija';
  };

  const handleResourceChange = useCallback((questionId: string, value: string) => {
    setResources(prev => ({
      ...prev,
      [questionId]: value
    }));
    
    onTrack('emergency_resources_answer', { question: questionId, answer: value });
  }, [onTrack]);

  const handleNext = () => {
    onNext(resources);
  };

  // Check if all 4 questions have been answered
  const canProceed = !!resources.emergency_action && !!resources.report_resources && 
                     !!resources.emotional_support && !!resources.preventive_prep;

  const questions = [
    {
      id: 'emergency_action',
      title: `¿Sabes qué hacer si tu ${getChildText()} está siendo contactado/a por un extraño de manera insistente?`,
      options: [
        { 
          value: 'know_exactly', 
          label: 'Sí, sé exactamente qué hacer y a quién contactar',
          description: 'Tienes un plan de acción claro'
        },
        { 
          value: 'general_idea', 
          label: 'Tengo una idea general pero no estoy seguro/a de los pasos',
          description: 'Necesitas definir los pasos específicos'
        },
        { 
          value: 'no_idea', 
          label: 'No tengo idea de qué hacer',
          description: 'Te ayudaremos a crear un plan de emergencia'
        }
      ]
    },
    {
      id: 'report_resources',
      title: '¿Conoces los números y sitios web para reportar grooming, ciberacoso o contenido ilegal?',
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
    },
    {
      id: 'emotional_support',
      title: `¿Sabes dónde buscar apoyo emocional si tu ${getChildText()} ha sido víctima de ciberacoso o grooming?`,
      options: [
        { 
          value: 'yes_know_resources', 
          label: 'Sí, conozco recursos de apoyo psicológico especializados',
          description: 'Tienes acceso a apoyo profesional'
        },
        { 
          value: 'general_idea', 
          label: 'Tengo una idea general pero no estoy seguro/a',
          description: 'Necesitas información específica'
        },
        { 
          value: 'dont_know', 
          label: 'No sé dónde buscar ayuda emocional',
          description: 'Te conectaremos con recursos de apoyo'
        }
      ]
    },
    {
      id: 'preventive_prep',
      title: `¿Has hablado con tu ${getChildText()} sobre qué hacer si algo le incomoda o preocupa en línea?`,
      options: [
        { 
          value: 'yes_specific', 
          label: 'Sí, hemos hablado específicamente sobre esto',
          description: 'Tu hijo/a sabe cómo actuar'
        },
        { 
          value: 'general_talk', 
          label: 'Hemos hablado en general pero no específicamente',
          description: 'Necesitas ser más específico/a'
        },
        { 
          value: 'no_conversation', 
          label: 'No hemos tenido esta conversación',
          description: 'Es importante tener esta conversación'
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <StepHeader
        title="¿Sabes con quién acudir en caso de emergencias digitales?"
        subtitle="Estas preguntas nos ayudan a asegurar que tengas los recursos necesarios para proteger a tu familia."
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
                selectedValues={resources[question.id as keyof EmergencyResources] ? [resources[question.id as keyof EmergencyResources]!] : []}
                onSelectionChange={(values) => handleResourceChange(question.id, values[0] || '')}
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
          disabled={!canProceed}
          className="w-full sm:w-auto px-8 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}
