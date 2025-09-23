import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { StepHeader } from '../StepHeader';
import { Utensils, BatteryLow, MessageSquare, Shield, Clock, AlertTriangle } from 'lucide-react';

interface HabitsSignalsStepProps {
  initialHabits?: string[];
  initialSignals?: string[];
  onNext: (data: { habits: string[]; signals: string[] }) => void;
  onPrevious: () => void;
}

const habitOptions = [
  { 
    id: 'no_screens_meals', 
    label: 'Tenemos momentos sin pantallas (comidas, antes de dormir)', 
    icon: <Utensils className="w-5 h-5" />,
    category: 'habits'
  },
  { 
    id: 'charger_outside_room', 
    label: 'El cargador está fuera del cuarto', 
    icon: <BatteryLow className="w-5 h-5" />,
    category: 'habits'
  },
  { 
    id: 'talk_about_problems', 
    label: 'Hablamos sobre qué hacer si algo los incomoda en línea', 
    icon: <MessageSquare className="w-5 h-5" />,
    category: 'habits'
  },
  { 
    id: 'know_block_report', 
    label: 'Saben cómo bloquear y reportar personas o contenido', 
    icon: <Shield className="w-5 h-5" />,
    category: 'habits'
  }
];

const challengeOptions = [
  { 
    id: 'hard_set_limits', 
    label: 'Nos cuesta poner límites de tiempo', 
    icon: <Clock className="w-5 h-5" />,
    category: 'challenges'
  }
];

const signalOptions = [
  { 
    id: 'sleep_issues', 
    label: 'Problemas de sueño o cambios de ánimo', 
    icon: <AlertTriangle className="w-5 h-5" />,
    category: 'signals'
  },
  { 
    id: 'secretive_behavior', 
    label: 'Comportamiento secreto con dispositivos', 
    icon: <AlertTriangle className="w-5 h-5" />,
    category: 'signals'
  }
];

export function HabitsSignalsStep({ 
  initialHabits = [], 
  initialSignals = [], 
  onNext, 
  onPrevious 
}: HabitsSignalsStepProps) {
  const [selectedHabits, setSelectedHabits] = useState<string[]>(initialHabits);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>(
    initialHabits.filter(h => challengeOptions.some(c => c.id === h))
  );
  const [selectedSignals, setSelectedSignals] = useState<string[]>(initialSignals);

  const handleHabitToggle = useCallback((habitId: string) => {
    setSelectedHabits(prev => 
      prev.includes(habitId) 
        ? prev.filter(id => id !== habitId)
        : [...prev, habitId]
    );
  }, []);

  const handleChallengeToggle = useCallback((challengeId: string) => {
    setSelectedChallenges(prev => 
      prev.includes(challengeId) 
        ? prev.filter(id => id !== challengeId)
        : [...prev, challengeId]
    );
  }, []);

  const handleSignalToggle = useCallback((signalId: string) => {
    setSelectedSignals(prev => 
      prev.includes(signalId) 
        ? prev.filter(id => id !== signalId)
        : [...prev, signalId]
    );
  }, []);

  const handleNext = () => {
    const allHabits = [...selectedHabits, ...selectedChallenges];
    onNext({ habits: allHabits, signals: selectedSignals });
  };

  const canProceed = selectedHabits.length > 0 || selectedChallenges.length > 0 || selectedSignals.length > 0;

  return (
    <div className="space-y-8">
      <StepHeader
        title="En casa..."
        subtitle="Esto nos ayuda a entender mejor tu situación actual y personalizar las recomendaciones."
      />

      <div className="text-center mb-2">
        <span className="text-sm font-medium text-brand-olive-500">
          Campo requerido <span className="text-destructive">*</span>
        </span>
      </div>

      <div className="space-y-6">
        {/* Positive habits */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            Prácticas que ya tenemos
          </h3>
          <div className="grid gap-3">
            {habitOptions.map(option => (
              <label
                key={option.id}
                htmlFor={option.id}
                className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <Checkbox
                  id={option.id}
                  checked={selectedHabits.includes(option.id)}
                  onCheckedChange={() => handleHabitToggle(option.id)}
                  className="mt-1"
                />
                <div className="flex items-start gap-3 flex-1">
                  <div className="text-green-600 mt-0.5">
                    {option.icon}
                  </div>
                  <div className="text-sm font-medium text-foreground leading-relaxed">
                    {option.label}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-600" />
            Desafíos que enfrentamos
          </h3>
          <div className="grid gap-3">
            {challengeOptions.map(option => (
              <label
                key={option.id}
                htmlFor={option.id}
                className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <Checkbox
                  id={option.id}
                  checked={selectedChallenges.includes(option.id)}
                  onCheckedChange={() => handleChallengeToggle(option.id)}
                  className="mt-1"
                />
                <div className="flex items-start gap-3 flex-1">
                  <div className="text-amber-600 mt-0.5">
                    {option.icon}
                  </div>
                  <div className="text-sm font-medium text-foreground leading-relaxed">
                    {option.label}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Warning signals */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            Señales que hemos notado
          </h3>
          <div className="grid gap-3">
            {signalOptions.map(option => (
              <label
                key={option.id}
                htmlFor={option.id}
                className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <Checkbox
                  id={option.id}
                  checked={selectedSignals.includes(option.id)}
                  onCheckedChange={() => handleSignalToggle(option.id)}
                  className="mt-1"
                />
                <div className="flex items-start gap-3 flex-1">
                  <div className="text-red-600 mt-0.5">
                    {option.icon}
                  </div>
                  <div className="text-sm font-medium text-foreground leading-relaxed">
                    {option.label}
                  </div>
                </div>
              </label>
            ))}
          </div>
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