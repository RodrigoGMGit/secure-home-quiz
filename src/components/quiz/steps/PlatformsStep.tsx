import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StepHeader } from '../StepHeader';
import { OptionGrid } from '../OptionGrid';
import { Notice } from '../Notice';
import { Platform, AgeBand } from '@/types/quiz';
import { MessageCircle, Video, Gamepad2, HelpCircle, Plus } from 'lucide-react';

interface PlatformsStepProps {
  initialPlatforms?: Platform[];
  initialOtherPlatforms?: string;
  initialUnknownPlatforms?: boolean;
  ageband?: AgeBand;
  onNext: (data: { platforms?: Platform[]; otherPlatforms?: string; unknownPlatforms?: boolean }) => void;
  onPrevious: () => void;
  onTrack: (event: string, data: Record<string, unknown>) => void;
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
    value: 'instagram', 
    label: 'Instagram', 
    icon: <Video />, 
    description: 'Red social de fotos y videos' 
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
  initialOtherPlatforms = '',
  initialUnknownPlatforms = false, 
  ageband,
  onNext, 
  onPrevious,
  onTrack 
}: PlatformsStepProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>(initialPlatforms);
  const [otherPlatforms, setOtherPlatforms] = useState<string>(initialOtherPlatforms);
  const [showingHelp, setShowingHelp] = useState(false);
  const [isUnsure, setIsUnsure] = useState(initialUnknownPlatforms);

  const handlePlatformSelection = (values: string[]) => {
    setSelectedPlatforms(values as Platform[]);
    setIsUnsure(false);
    
    // Limpiar el campo de texto si se deselecciona "otros"
    if (!values.includes('otros')) {
      setOtherPlatforms('');
    }
    
    onTrack('platform_select', { platforms: values });
  };

  const handleUnsureClick = () => {
    setShowingHelp(true);
    setIsUnsure(true);
    setSelectedPlatforms([]);
    setOtherPlatforms('');
    onTrack('platform_select', { unknown_platforms: true });
  };

  const handleContinueUnsure = () => {
    onNext({ unknownPlatforms: true });
  };

  const handleNext = () => {
    if (isUnsure) {
      onNext({ unknownPlatforms: true });
    } else {
      onNext({ 
        platforms: selectedPlatforms,
        otherPlatforms: selectedPlatforms.includes('otros') ? otherPlatforms : undefined
      });
    }
  };

  const canProceed = isUnsure || selectedPlatforms.length > 0;

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

      <div className="text-center mb-2">
        <span className="text-sm font-medium text-brand-olive-500">
          Campo requerido <span className="text-destructive">*</span>
        </span>
      </div>

      {!showingHelp && (
        <>
          <OptionGrid
            options={optionsWithAge}
            selectedValues={selectedPlatforms}
            onSelectionChange={handlePlatformSelection}
            multiSelect={true}
          />

          {/* Campo de texto para otras plataformas */}
          {selectedPlatforms.includes('otros') && (
            <div className="space-y-2">
              <label htmlFor="other-platforms" className="text-sm font-medium text-brand-ink-800">
                ¿Cuáles otras plataformas usa? (opcional)
              </label>
              <Input
                id="other-platforms"
                type="text"
                placeholder="Ej: Instagram, Discord, Fortnite, etc."
                value={otherPlatforms}
                onChange={(e) => setOtherPlatforms(e.target.value)}
                className="w-full"
              />
            </div>
          )}

          <div className="flex justify-center">
            <button
              onClick={handleUnsureClick}
              className="group relative p-6 rounded-xl border-2 border-dashed border-brand-teal-500/50 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-teal-500/50 focus:ring-offset-2 min-h-[44px] sm:min-h-[140px] flex flex-col items-center justify-center text-center hover:border-brand-teal-500 hover:bg-brand-mint-200/30 hover:shadow-soft hover:scale-[1.02] active:scale-[0.98] bg-white/60 w-full max-w-sm"
              aria-expanded={showingHelp}
            >
              {/* Icon */}
              <div className="mb-4 text-3xl transition-all duration-300 text-brand-teal-500 group-hover:text-brand-teal-500">
                <HelpCircle className="w-8 h-8" />
              </div>
              
              {/* Label */}
              <div className="font-body font-semibold text-base mb-2 text-brand-ink-800">
                No estoy seguro/a
              </div>
              
              {/* Description */}
              <div className="text-sm font-body text-brand-olive-500">
                ¿Cómo puedo descubrirlo?
              </div>
            </button>
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
            <p className="text-sm text-muted-foreground pt-2">
              Puedes continuar con recomendaciones generales usando el botón "Continuar" de abajo.
            </p>
          </div>
        </Notice>
      )}

      {/* Reserved space for dynamic content to prevent layout shift */}
      <div className="min-h-[60px] flex items-center justify-center">
        {selectedPlatforms.length > 0 && (
          <Notice type="success">
            <p>
              Perfecto, crearemos recomendaciones específicas para {selectedPlatforms.length} plataforma{selectedPlatforms.length > 1 ? 's' : ''}.
            </p>
          </Notice>
        )}
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