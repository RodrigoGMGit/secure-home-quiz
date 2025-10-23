import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StepHeader } from '../StepHeader';
import { OptionGrid } from '../OptionGrid';
import { Notice } from '../Notice';
import { AgeWarningModal } from '../AgeWarningModal';
import { Platform, AgeBand } from '@/types/quiz';
import { MessageCircle, Video, Gamepad2, HelpCircle, Plus } from 'lucide-react';
import { 
  WhatsAppIcon, 
  YouTubeIcon, 
  InstagramIcon, 
  RobloxIcon, 
  MinecraftIcon, 
  TikTokIcon,
  SnapchatIcon,
  FacebookIcon,
  DiscordIcon,
  FortniteIcon
} from '@/components/icons/platforms';

interface PlatformsStepProps {
  initialPlatforms?: Platform[];
  initialOtherPlatforms?: string;
  initialUnknownPlatforms?: boolean;
  ageband?: AgeBand;
  onNext: (data: { platforms?: Platform[]; otherPlatforms?: string; unknownPlatforms?: boolean; inappropriatePlatforms?: Platform[] }) => void;
  onPrevious: () => void;
  onTrack: (event: string, data: Record<string, unknown>) => void;
}

const platformOptions = [
  { 
    value: 'youtube-kids', 
    label: 'YouTube Kids', 
    icon: <YouTubeIcon className="h-5 w-5" />, 
    description: 'Videos para niños',
    minAge: 3
  },
  { 
    value: 'whatsapp', 
    label: 'WhatsApp', 
    icon: <WhatsAppIcon className="h-5 w-5" />, 
    description: 'Mensajería',
    minAge: 13
  },
  { 
    value: 'youtube', 
    label: 'YouTube', 
    icon: <YouTubeIcon className="h-5 w-5" />, 
    description: 'Videos',
    minAge: 13
  },
  { 
    value: 'minecraft', 
    label: 'Minecraft', 
    icon: <MinecraftIcon className="h-5 w-5" />, 
    description: 'Juego de construcción',
    minAge: 10
  },
  { 
    value: 'roblox', 
    label: 'Roblox', 
    icon: <RobloxIcon className="h-5 w-5" />, 
    description: 'Juegos en línea',
    minAge: 13
  },
  { 
    value: 'tiktok', 
    label: 'TikTok', 
    icon: <TikTokIcon className="h-5 w-5" />, 
    description: 'Videos cortos',
    ageRestricted: true,
    minAge: 13
  },
  { 
    value: 'instagram', 
    label: 'Instagram', 
    icon: <InstagramIcon className="h-5 w-5" />, 
    description: 'Red social de fotos y videos',
    ageRestricted: true,
    minAge: 13
  },
  { 
    value: 'snapchat', 
    label: 'Snapchat', 
    icon: <SnapchatIcon className="h-5 w-5" />, 
    description: 'Fotos que desaparecen',
    ageRestricted: true,
    minAge: 13
  },
  { 
    value: 'discord', 
    label: 'Discord', 
    icon: <DiscordIcon className="h-5 w-5" />, 
    description: 'Chat para gamers',
    ageRestricted: true,
    minAge: 13
  },
  { 
    value: 'facebook', 
    label: 'Facebook', 
    icon: <FacebookIcon className="h-5 w-5" />, 
    description: 'Red social',
    ageRestricted: true,
    minAge: 13
  },
  { 
    value: 'fortnite', 
    label: 'Fortnite', 
    icon: <FortniteIcon className="h-5 w-5" />, 
    description: 'Juego de batalla',
    ageRestricted: true,
    minAge: 13
  },
  { 
    value: 'free-fire', 
    label: 'Free Fire', 
    icon: <Gamepad2 className="h-5 w-5" />, 
    description: 'Juego de supervivencia',
    ageRestricted: true,
    minAge: 13
  }
];

// Función para ordenar plataformas según la edad
const sortPlatformsByAge = (platforms: typeof platformOptions, ageband?: AgeBand) => {
  if (!ageband) return platforms;

  const ageOrder: Record<AgeBand, string[]> = {
    '6-8': [
      'youtube-kids',
      'minecraft', 
      'youtube',
      'whatsapp',
      'roblox',
      'tiktok',
      'instagram',
      'snapchat',
      'discord',
      'facebook',
      'fortnite',
      'free-fire'
    ],
    '9-12': [
      'youtube-kids',
      'youtube',
      'minecraft',
      'roblox',
      'whatsapp',
      'tiktok',
      'instagram',
      'snapchat',
      'discord',
      'facebook',
      'fortnite',
      'free-fire'
    ],
    '13-15': [
      'tiktok',
      'instagram',
      'youtube',
      'whatsapp',
      'snapchat',
      'roblox',
      'minecraft',
      'discord',
      'facebook',
      'fortnite',
      'free-fire',
      'youtube-kids'
    ],
    '16-17': [
      'tiktok',
      'instagram',
      'snapchat',
      'discord',
      'whatsapp',
      'youtube',
      'facebook',
      'fortnite',
      'roblox',
      'minecraft',
      'free-fire',
      'youtube-kids'
    ]
  };

  const order = ageOrder[ageband];
  return [...platforms].sort((a, b) => {
    const indexA = order.indexOf(a.value);
    const indexB = order.indexOf(b.value);
    return indexA - indexB;
  });
};

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
  const [showingHelp, setShowingHelp] = useState(false);
  const [isUnsure, setIsUnsure] = useState(initialUnknownPlatforms);
  const [showAgeWarning, setShowAgeWarning] = useState(false);
  const [hasSeenAgeWarning, setHasSeenAgeWarning] = useState(false);
  const [pendingPlatform, setPendingPlatform] = useState<string | null>(null);

  const handlePlatformSelection = (values: string[]) => {
    setSelectedPlatforms(values as Platform[]);
    setIsUnsure(false);
    
    onTrack('platform_select', { platforms: values });
  };

  const handleAgeRestrictedProceed = () => {
    if (pendingPlatform) {
      const newPlatforms = [...selectedPlatforms, pendingPlatform as Platform];
      setSelectedPlatforms(newPlatforms);
      setHasSeenAgeWarning(true); // Marcar que ya vieron la advertencia
      setPendingPlatform(null);
      setShowAgeWarning(false);
      onTrack('age_warning_proceeded', { platform: pendingPlatform, ageband });
    }
  };

  const handleAgeRestrictedClose = () => {
    setShowAgeWarning(false);
    setPendingPlatform(null);
    onTrack('age_warning_dismissed', { platform: pendingPlatform, ageband });
  };

  const handleAgeRestrictedClick = (platform: string) => {
    if (!hasSeenAgeWarning) {
      // Primera vez: mostrar modal de advertencia general para cualquier plataforma
      setPendingPlatform(platform);
      setShowAgeWarning(true);
      onTrack('age_warning_shown', { platform, ageband });
    } else {
      // Ya vieron la advertencia: permitir selección directa
      const newPlatforms = [...selectedPlatforms, platform as Platform];
      setSelectedPlatforms(newPlatforms);
      onTrack('platform_select', { platforms: newPlatforms });
    }
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
      onTrack('platform_select', { unknown_platforms: true });
    }
  };

  const handleContinueUnsure = () => {
    onNext({ unknownPlatforms: true });
  };

  const getInappropriatePlatforms = () => {
    if (!ageband) return [];
    
    const ageLimits: Record<AgeBand, number> = {
      '6-8': 10,
      '9-12': 13,
      '13-15': 13,
      '16-17': 18
    };
    
    return selectedPlatforms.filter(platform => {
      const option = platformOptions.find(opt => opt.value === platform);
      return option && option.minAge && option.minAge > ageLimits[ageband];
    });
  };

  const handleNext = () => {
    if (isUnsure) {
      onNext({ unknownPlatforms: true });
    } else {
      onNext({ 
        platforms: selectedPlatforms,
        inappropriatePlatforms: getInappropriatePlatforms()
      });
    }
  };

  const canProceed = isUnsure || selectedPlatforms.length > 0;

  // Sort platforms by age and add current age to options for age restriction checking
  const sortedPlatforms = sortPlatformsByAge(platformOptions, ageband);
  const optionsWithAge = sortedPlatforms.map(option => ({
    ...option,
    currentAge: ageband
  }));

  return (
    <div className="space-y-6">
      <StepHeader
        title="¿Qué plataformas usa con más frecuencia?"
        subtitle="Plataformas más usadas ordenadas según su edad. Selecciona todas las que apliquen."
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
            onAgeRestrictedClick={handleAgeRestrictedClick}
            multiSelect={true}
          />
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

      {/* General Age Warning Modal */}
      <AgeWarningModal
        isOpen={showAgeWarning}
        onClose={handleAgeRestrictedClose}
        onProceed={handleAgeRestrictedProceed}
        platformName={pendingPlatform ? platformOptions.find(p => p.value === pendingPlatform)?.label || '' : ''}
        platformIcon={pendingPlatform ? platformOptions.find(p => p.value === pendingPlatform)?.icon || <></> : <></>}
        ageband={ageband}
        minAge={pendingPlatform ? platformOptions.find(p => p.value === pendingPlatform)?.minAge || 13 : 13}
      />
    </div>
  );
}