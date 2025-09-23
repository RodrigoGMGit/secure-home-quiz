import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StepHeader } from '../StepHeader';
import { OptionGrid } from '../OptionGrid';
import { Notice } from '../Notice';
import { Platform, AgeBand } from '@/types/quiz';
import { MessageCircle, Video, Gamepad2, HelpCircle, Plus } from 'lucide-react';

interface PlatformsStepProps {
  initialPlatforms?: Platform[];
  initialUnknownPlatforms?: boolean;
  ageband?: AgeBand;
  onNext: (data: { platforms?: Platform[]; unknownPlatforms?: boolean }) => void;
  onPrevious: () => void;
  onTrack: (event: string, data: any) => void;
}

const platformOptions = [
  { 
    value: 'whatsapp', 
    label: 'WhatsApp', 
    icon: <MessageCircle />, 
    description: 'Mensajería' 
  },
  { 
    value: 'youtube', 
    label: 'YouTube', 
    icon: <Video />, 
    description: 'Videos' 
  },
  { 
    value: 'youtube_kids', 
    label: 'YouTube Kids', 
    icon: <Video />, 
    description: 'Videos para niños' 
  },
  { 
    value: 'roblox', 
    label: 'Roblox', 
    icon: <Gamepad2 />, 
    description: 'Juegos en línea' 
  },
  { 
    value: 'minecraft', 
    label: 'Minecraft', 
    icon: <Gamepad2 />, 
    description: 'Juego de construcción' 
  },
  { 
    value: 'tiktok', 
    label: 'TikTok', 
    icon: <Video />, 
    description: 'Videos cortos',
    ageRestricted: true
  },
  { 
    value: 'otros', 
    label: 'Otro(s)', 
    icon: <Plus />, 
    description: 'Otras plataformas' 
  }
];

export function PlatformsStep({ 
  initialPlatforms = [], 
  initialUnknownPlatforms = false, 
  ageband,
  onNext, 
  onPrevious,
  onTrack 
}: PlatformsStepProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>(initialPlatforms);
  const [showingHelp, setShowingHelp] = useState(false);
  const [isUnsure, setIsUnsure] = useState(initialUnknownPlatforms);

  const handlePlatformSelection = (values: string[]) => {
    setSelectedPlatforms(values as Platform[]);
    setIsUnsure(false);
    onTrack('platform_select', { platforms: values });
  };

  const handleUnsureClick = () => {
    setShowingHelp(true);
    setIsUnsure(true);
    setSelectedPlatforms([]);
    onTrack('platform_select', { unknown_platforms: true });
  };

  const handleContinueUnsure = () => {
    onNext({ unknownPlatforms: true });
  };

  const handleNext = () => {
    if (isUnsure) {
      onNext({ unknownPlatforms: true });
    } else {
      onNext({ platforms: selectedPlatforms });
    }
  };

  // Add current age to options for age restriction checking
  const optionsWithAge = platformOptions.map(option => ({
    ...option,
    currentAge: ageband
  }));

  return (
    <div className="space-y-6">
      <StepHeader
        title="¿Qué plataformas usa con más frecuencia?"
        subtitle="Selecciona todas las que apliquen. Esto nos ayuda a dar recomendaciones más específicas."
      />

      {!showingHelp && (
        <>
          <OptionGrid
            options={optionsWithAge}
            selectedValues={selectedPlatforms}
            onSelectionChange={handlePlatformSelection}
            multiSelect={true}
          />

          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={handleUnsureClick}
              className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3 p-4 sm:p-6 text-center sm:text-left border-dashed border-brand-teal-500/50 hover:border-brand-teal-500 hover:bg-brand-mint-200/30 min-h-[44px] rounded-xl transition-all duration-300 font-body"
              aria-expanded={showingHelp}
            >
              <HelpCircle className="w-5 h-5 flex-shrink-0 text-brand-teal-500" />
              <span className="text-sm sm:text-base font-medium text-brand-ink-800">
                No estoy seguro/a. ¿Cómo puedo descubrirlo?
              </span>
            </Button>
          </div>
        </>
      )}

      {showingHelp && (
        <Notice type="help" title="Es común no estar seguro">
          <div className="space-y-3">
            <p>Te guiaremos paso a paso. Puedes revisar:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Inicio en YouTube para ver el historial</li>
              <li>Chats recientes en WhatsApp</li>
              <li>Los iconos de juegos en su dispositivo</li>
              <li>El historial del navegador</li>
            </ul>
            <div className="pt-3">
              <Button onClick={handleContinueUnsure} className="w-full">
                Lo revisaré más tarde. Continuar con recomendaciones generales
              </Button>
            </div>
          </div>
        </Notice>
      )}

      {selectedPlatforms.length > 0 && (
        <Notice type="success">
          <p>
            Perfecto, crearemos recomendaciones específicas para {selectedPlatforms.length} plataforma{selectedPlatforms.length > 1 ? 's' : ''}.
          </p>
        </Notice>
      )}

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
          Continuar
        </Button>
      </div>
    </div>
  );
}