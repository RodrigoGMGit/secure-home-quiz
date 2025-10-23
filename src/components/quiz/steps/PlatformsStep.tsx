import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StepHeader } from '../StepHeader';
import { OptionGrid } from '../OptionGrid';
import { Notice } from '../Notice';
import { Platform, AgeBand } from '@/types/quiz';
import { MessageCircle, Video, Gamepad2, HelpCircle, Plus } from 'lucide-react';
import { WhatsAppIcon, YouTubeIcon, InstagramIcon, RobloxIcon, MinecraftIcon, TikTokIcon } from '@/components/icons/platforms';

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
    icon: <WhatsAppIcon className="h-5 w-5" />, 
    description: 'Mensajería' 
  },
  { 
    value: 'youtube', 
    label: 'YouTube', 
    icon: <YouTubeIcon className="h-5 w-5" />, 
    description: 'Videos' 
  },
  { 
    value: 'instagram', 
    label: 'Instagram', 
    icon: <InstagramIcon className="h-5 w-5" />, 
    description: 'Red social de fotos y videos' 
  },
  { 
    value: 'roblox', 
    label: 'Roblox', 
    icon: <RobloxIcon className="h-5 w-5" />, 
    description: 'Juegos en línea' 
  },
  { 
    value: 'minecraft', 
    label: 'Minecraft', 
    icon: <MinecraftIcon className="h-5 w-5" />, 
    description: 'Juego de construcción' 
  },
  { 
    value: 'tiktok', 
    label: 'TikTok', 
    icon: <TikTokIcon className="h-5 w-5" />, 
    description: 'Videos cortos',
    ageRestricted: true
  },
  { 
    value: 'otros', 
    label: 'Otro(s)', 
    icon: <Plus className="h-5 w-5" />, 
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
    if (isUnsure) {
      // Si ya está en modo "no estoy seguro", deseleccionarlo
      setIsUnsure(false);
      setShowingHelp(false);
      onTrack('platform_select', { unknown_platforms: false });
    } else {
      // Activar modo "no estoy seguro"
      setShowingHelp(true);
      setIsUnsure(true);
      setSelectedPlatforms([]);
      setOtherPlatforms('');
      onTrack('platform_select', { unknown_platforms: true });
    }
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
        descriptionSlot={
          <span className="text-sm font-medium text-brand-olive-500">
            Campo requerido <span className="text-brand-teal-500">*</span>
          </span>
        }
      />

      {/* Botón "No estoy seguro/a" movido hacia arriba */}
      <div className="flex justify-center">
        <button
          onClick={handleUnsureClick}
          className={`group relative p-4 rounded-xl border-2 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-teal-500/50 focus:ring-offset-2 min-h-[44px] sm:min-h-[100px] flex flex-col items-center justify-center text-center hover:scale-[1.02] active:scale-[0.98] w-full max-w-sm ${
            isUnsure 
              ? 'border-brand-teal-500 bg-brand-teal-500/10 shadow-soft' 
              : 'border-dashed border-brand-teal-500/50 hover:border-brand-teal-500 hover:bg-brand-mint-200/30 hover:shadow-soft bg-white/60'
          }`}
          aria-expanded={showingHelp}
        >
          {/* Icon */}
          <div className={`mb-2 text-2xl transition-all duration-300 ${
            isUnsure 
              ? 'text-brand-teal-500' 
              : 'text-brand-teal-500 group-hover:text-brand-teal-500'
          }`}>
            <HelpCircle className="w-6 h-6" />
          </div>
          
          {/* Label */}
          <div className="font-body font-semibold text-sm mb-1 text-brand-ink-800">
            {isUnsure ? 'No estoy seguro/a (seleccionado)' : 'No estoy seguro/a'}
          </div>
          
          {/* Description */}
          <div className="text-xs font-body text-brand-olive-500">
            {isUnsure ? 'Haz clic para seleccionar plataformas' : '¿Cómo puedo descubrirlo?'}
          </div>
        </button>
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