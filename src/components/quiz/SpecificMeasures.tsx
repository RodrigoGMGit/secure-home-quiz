import { useState } from 'react';
import { SpecificMeasure } from '@/utils/planGenerator';
import { Shield, AlertTriangle, Info, ChevronDown, ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface SpecificMeasuresProps {
  measures: SpecificMeasure[];
}

export function SpecificMeasures({ measures }: SpecificMeasuresProps) {
  const [expandedMeasures, setExpandedMeasures] = useState<Set<string>>(new Set());

  const toggleMeasure = (measureId: string) => {
    setExpandedMeasures(prev => {
      const newSet = new Set(prev);
      if (newSet.has(measureId)) {
        newSet.delete(measureId);
      } else {
        newSet.add(measureId);
      }
      return newSet;
    });
  };

  const toggleAllMeasures = () => {
    if (expandedMeasures.size === measures.length) {
      // Collapse all
      setExpandedMeasures(new Set());
    } else {
      // Expand all
      setExpandedMeasures(new Set(measures.map(m => m.id)));
    }
  };

  const allExpanded = expandedMeasures.size === measures.length;
  const someExpanded = expandedMeasures.size > 0;

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
        <p className="text-sm text-brand-olive-500 mb-4">
          Basadas en las respuestas de tu evaluación
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={toggleAllMeasures}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-brand-teal-600 bg-brand-mint-200/50 hover:bg-brand-mint-200/70 rounded-lg transition-colors"
          >
            {allExpanded ? (
              <>
                <ChevronDown className="w-4 h-4" />
                Contraer todas
              </>
            ) : (
              <>
                <ChevronRight className="w-4 h-4" />
                Ver todas las recomendaciones
              </>
            )}
          </button>
          {someExpanded && !allExpanded && (
            <span className="text-xs text-brand-olive-500">
              {expandedMeasures.size} de {measures.length} recomendaciones mostradas
            </span>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {measures.map((measure, index) => {
          const isExpanded = expandedMeasures.has(measure.id);
          
          return (
            <Collapsible
              key={measure.id}
              open={isExpanded}
              onOpenChange={() => toggleMeasure(measure.id)}
            >
              <div className={`rounded-lg border-l-4 ${getPriorityColor(measure.priority)} transition-all duration-200 hover:shadow-md`}>
                <CollapsibleTrigger className="w-full p-4 text-left hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal-500/50 focus:ring-offset-2 rounded-lg">
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
                        <div className="ml-auto flex-shrink-0 flex items-center gap-1">
                          <span className="text-xs text-brand-olive-500 hidden sm:inline">
                            {isExpanded ? 'Contraer' : 'Ver detalles'}
                          </span>
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4 text-brand-olive-500" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-brand-olive-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="px-4 pb-4">
                  <div className="pt-2 border-t border-white/20">
                    <p className="text-sm text-brand-olive-600 leading-relaxed mb-3">
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
                </CollapsibleContent>
              </div>
            </Collapsible>
          );
        })}
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
