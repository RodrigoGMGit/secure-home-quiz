import { SpecificMeasure } from '@/utils/planGenerator';
import { Shield, AlertTriangle, Info } from 'lucide-react';

interface SpecificMeasuresProps {
  measures: SpecificMeasure[];
}

export function SpecificMeasures({ measures }: SpecificMeasuresProps) {
  const getPriorityIcon = (priority: 'high' | 'medium' | 'low') => {
    switch (priority) {
      case 'high':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'medium':
        return <Shield className="w-4 h-4 text-yellow-500" />;
      case 'low':
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const getPriorityColor = (priority: 'high' | 'medium' | 'low') => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50/50';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50/50';
      case 'low':
        return 'border-l-blue-500 bg-blue-50/50';
    }
  };

  const getPriorityText = (priority: 'high' | 'medium' | 'low') => {
    switch (priority) {
      case 'high':
        return 'Prioridad Alta';
      case 'medium':
        return 'Prioridad Media';
      case 'low':
        return 'Prioridad Baja';
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-brand-ink-800 mb-2">
          Medidas específicas para tu familia
        </h3>
        <p className="text-sm text-brand-olive-500">
          Basadas en las respuestas de tu evaluación
        </p>
      </div>

      <div className="space-y-3">
        {measures.map((measure, index) => (
          <div
            key={measure.id}
            className={`p-4 rounded-lg border-l-4 ${getPriorityColor(measure.priority)}`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                {getPriorityIcon(measure.priority)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-medium text-brand-ink-800 text-sm">
                    {measure.title}
                  </h4>
                  <span className="text-xs text-brand-olive-500 bg-white px-2 py-1 rounded-full">
                    {getPriorityText(measure.priority)}
                  </span>
                </div>
                <p className="text-sm text-brand-olive-600 leading-relaxed">
                  {measure.description}
                </p>
                {measure.platform && (
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-brand-mint-200 text-brand-ink-700">
                      {measure.platform === 'whatsapp' && 'WhatsApp'}
                      {measure.platform === 'youtube' && 'YouTube'}
                      {measure.platform === 'instagram' && 'Instagram'}
                      {measure.platform === 'tiktok' && 'TikTok'}
                      {measure.platform === 'roblox' && 'Roblox'}
                      {measure.platform === 'minecraft' && 'Minecraft'}
                      {measure.platform === 'otros' && 'Otras plataformas'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-brand-mint-200/30 rounded-lg">
        <p className="text-sm text-brand-olive-600 text-center">
          <strong>Tu plan completo incluye:</strong> Guías paso a paso, scripts de conversación, 
          herramientas recomendadas y un cronograma de implementación personalizado.
        </p>
      </div>
    </div>
  );
}
