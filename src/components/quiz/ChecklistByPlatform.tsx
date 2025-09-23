import { useCallback } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Platform } from '@/types/quiz';

interface ChecklistByPlatformProps {
  platforms: Platform[];
  selectedMeasures: { [key in Platform]?: string[] };
  onMeasureChange: (platform: Platform, measures: string[]) => void;
}

const platformMeasures: Record<Platform, { id: string; label: string; description?: string }[]> = {
  whatsapp: [
    { id: '2fa', label: 'Verificación en dos pasos activada', description: 'Protege la cuenta con doble autenticación' },
    { id: 'group_privacy', label: 'Solo contactos pueden agregarte a grupos', description: 'Evita grupos no deseados' },
    { id: 'profile_privacy', label: 'Foto y última conexión solo para contactos', description: 'Limita información visible' },
    { id: 'location_off', label: 'Ubicación en tiempo real desactivada', description: 'Protege la privacidad de ubicación' },
    { id: 'block_report', label: 'Sabe bloquear y reportar contactos', description: 'Herramientas de protección' }
  ],
  youtube: [
    { id: 'restricted_mode', label: 'Modo restringido activado', description: 'Filtra contenido inapropiado' },
    { id: 'timer', label: 'Temporizador de tiempo configurado', description: 'Controla el tiempo de uso' },
    { id: 'comments_off', label: 'Comentarios desactivados', description: 'Evita interacciones no deseadas' },
    { id: 'safe_channels', label: 'Lista de canales seguros creada', description: 'Contenido verificado y apropiado' }
  ],
  instagram: [
    { id: 'private_account', label: 'Cuenta privada activada', description: 'Solo seguidores aprobados pueden ver el contenido' },
    { id: 'dm_limited', label: 'Mensajes directos limitados', description: 'Solo personas que sigues pueden enviar mensajes' },
    { id: 'story_privacy', label: 'Historias solo para amigos cercanos', description: 'Control sobre quién ve las historias' },
    { id: 'location_off', label: 'Ubicación desactivada en publicaciones', description: 'Protege la privacidad de ubicación' },
    { id: 'block_report', label: 'Sabe bloquear y reportar usuarios', description: 'Herramientas de protección' }
  ],
  roblox: [
    { id: 'account_restricted', label: 'Cuenta con restricciones activadas', description: 'Configuración segura para niños' },
    { id: 'chat_limited', label: 'Chat limitado o desactivado', description: 'Reduce riesgos de comunicación' },
    { id: 'private_server', label: 'Juega solo en servidores privados', description: 'Entorno controlado' },
    { id: 'purchases_off', label: 'Compras desactivadas', description: 'Evita gastos no autorizados' },
    { id: 'block_report', label: 'Sabe bloquear y reportar usuarios', description: 'Herramientas de protección' }
  ],
  minecraft: [
    { id: 'private_server', label: 'Juega en servidor privado/familiar', description: 'Entorno controlado y seguro' },
    { id: 'chat_disabled', label: 'Chat desactivado en multijugador', description: 'Evita comunicación con extraños' },
    { id: 'realms_family', label: 'Usa Minecraft Realms familiar', description: 'Servidor privado oficial' },
    { id: 'no_mods', label: 'No descarga mods de fuentes desconocidas', description: 'Evita malware y contenido inapropiado' }
  ],
  tiktok: [
    { id: 'private_account', label: 'Cuenta privada activada', description: 'Control sobre quién ve el contenido' },
    { id: 'dm_limited', label: 'Mensajes directos limitados', description: 'Solo amigos pueden enviar mensajes' },
    { id: 'word_filter', label: 'Filtro de palabras configurado', description: 'Bloquea contenido inapropiado' },
    { id: 'time_limit', label: 'Control de tiempo activado', description: 'Limita el uso diario' },
    { id: 'live_off', label: 'Transmisiones en vivo desactivadas', description: 'Evita exposición pública' }
  ],
  otros: [
    { id: 'parental_controls', label: 'Controles parentales configurados', description: 'Supervisión activa' },
    { id: 'privacy_settings', label: 'Configuración de privacidad revisada', description: 'Información personal protegida' },
    { id: 'safe_usage', label: 'Reglas de uso seguro establecidas', description: 'Límites y expectativas claras' }
  ]
};

export function ChecklistByPlatform({ platforms, selectedMeasures, onMeasureChange }: ChecklistByPlatformProps) {
  const handleMeasureToggle = useCallback((platform: Platform, measureId: string) => {
    const currentMeasures = selectedMeasures[platform] || [];
    const newMeasures = currentMeasures.includes(measureId)
      ? currentMeasures.filter(id => id !== measureId)
      : [...currentMeasures, measureId];
    
    onMeasureChange(platform, newMeasures);
  }, [selectedMeasures, onMeasureChange]);

  if (platforms.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {platforms.map(platform => {
        const measures = platformMeasures[platform] || [];
        const selectedForPlatform = selectedMeasures[platform] || [];
        
        if (measures.length === 0) return null;

        return (
          <div key={platform} className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-brand-ink-800 capitalize">
              {platform.replace('_', ' ')}
            </h3>
            
            <div className="grid gap-3">
              {measures.map(measure => (
                <label
                  key={measure.id}
                  htmlFor={`${platform}-${measure.id}`}
                  className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer block"
                >
                  <Checkbox
                    id={`${platform}-${measure.id}`}
                    checked={selectedForPlatform.includes(measure.id)}
                    onCheckedChange={() => handleMeasureToggle(platform, measure.id)}
                    className="mt-1"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground">
                      {measure.label}
                    </div>
                    {measure.description && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {measure.description}
                      </p>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}