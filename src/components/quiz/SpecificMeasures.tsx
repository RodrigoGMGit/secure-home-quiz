import { useState } from 'react';
import { SpecificMeasure } from '@/utils/planGenerator';
import { Shield, AlertTriangle, Info, ChevronDown, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

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

  // Sistema de colores rotativos
  const cardColors = [
    "border-brand-teal-500/30 bg-brand-teal-500/10",
    "border-brand-mint-200/40 bg-brand-mint-200/20",
    "border-brand-olive-500/30 bg-brand-olive-500/10"
  ];

  const iconColors = [
    "bg-brand-teal-500/20 text-brand-teal-500",
    "bg-brand-mint-200/60 text-brand-ink-800",
    "bg-brand-olive-500/20 text-brand-olive-500"
  ];

  const getPriorityBadgeColor = (priority: 'high' | 'medium' | 'low') => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const formatPlatformName = (platform: string) => {
    const platformNames: Record<string, string> = {
      'whatsapp': 'WhatsApp',
      'youtube': 'YouTube',
      'instagram': 'Instagram',
      'tiktok': 'TikTok',
      'roblox': 'Roblox',
      'minecraft': 'Minecraft',
      'otros': 'Otras plataformas'
    };
    return platformNames[platform] || platform;
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

      <div className="space-y-4">
        {measures.map((measure, index) => {
          const colorIndex = index % 3;
          const isExpanded = expandedMeasures.has(measure.id);
          
          return (
            <motion.div
              key={measure.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={`${cardColors[colorIndex]} border hover:shadow-soft transition-smooth`}>
                <CardHeader 
                  className="cursor-pointer" 
                  onClick={() => toggleMeasure(measure.id)}
                >
                  <div className="flex items-start gap-4">
                    {/* Logo circular con icono de prioridad */}
                    <div className={`p-3 ${iconColors[colorIndex]} rounded-full shadow-soft flex-shrink-0`}>
                      {getPriorityIcon(measure.priority)}
                    </div>
                    
                    <div className="flex-1">
                      <CardTitle className="font-heading text-base sm:text-lg text-brand-ink-900 mb-2">
                        {measure.title}
                      </CardTitle>
                      
                      {/* Badges para prioridad y plataforma */}
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getPriorityBadgeColor(measure.priority)}>
                          {getPriorityText(measure.priority)}
                        </Badge>
                        {measure.platform && (
                          <Badge variant="outline">
                            {formatPlatformName(measure.platform)}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Icono expandir/contraer */}
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-brand-olive-500" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-brand-olive-500" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                {isExpanded && (
                  <CardContent className="pt-0">
                    <Separator className="mb-4" />
                    <p className="font-body text-sm text-brand-ink-800 leading-relaxed">
                      {measure.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
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
