import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';
import { AlertTriangle, Shield, CheckCircle } from 'lucide-react';
import { AgeBand } from '@/types/quiz';
import { motion } from 'framer-motion';

interface AgeWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
  platformName: string;
  platformIcon: React.ReactNode;
  ageband?: AgeBand;
  minAge: number;
}

export const AgeWarningModal: React.FC<AgeWarningModalProps> = ({ 
  isOpen, 
  onClose, 
  onProceed,
  platformName,
  platformIcon,
  ageband,
  minAge
}) => {
  const getAgeMessage = () => {
    if (!ageband) return `Esta plataforma requiere ${minAge}+ años`;
    
    const ageMessages: Record<AgeBand, string> = {
      '6-8': `Esta plataforma requiere ${minAge}+ años, pero tu hijo/a tiene entre 6-8 años`,
      '9-12': `Esta plataforma requiere ${minAge}+ años, pero tu hijo/a tiene entre 9-12 años`,
      '13-15': `Esta plataforma requiere ${minAge}+ años, pero tu hijo/a tiene entre 13-15 años`,
      '16-17': `Esta plataforma requiere ${minAge}+ años, pero tu hijo/a tiene entre 16-17 años`
    };
    
    return ageMessages[ageband];
  };

  const getRecommendations = () => {
    if (minAge >= 13) {
      return [
        "Supervisión constante recomendada",
        "Activar controles parentales",
        "Revisar configuración de privacidad",
        "Establecer límites de tiempo de uso"
      ];
    }
    return [
      "Supervisión constante obligatoria",
      "Activar todos los controles parentales",
      "Revisar contenido regularmente",
      "Limitar tiempo de uso significativamente"
    ];
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white border-brand-mint-200/30 shadow-soft overflow-x-hidden">
        {/* Header con diseño sofisticado */}
        <DialogHeader className="relative bg-gradient-to-br from-white via-brand-mint-200/20 to-white border-b border-brand-mint-200/30 -m-6 mb-6 p-6 sm:p-8">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-4 left-4 w-16 h-16 bg-brand-teal-500/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-brand-mint-200/10 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>
          
          <div className="relative text-center">
            {/* Logo circular con gradiente - siempre centrado */}
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                {platformIcon}
              </div>
            </div>
            
            {/* Título */}
            <DialogTitle className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 leading-tight mb-3">
              {platformName} requiere {minAge}+ años
            </DialogTitle>
            
            {/* Badges centrados */}
            <div className="flex justify-center gap-3 mb-4 flex-wrap">
              <Badge 
                variant="outline" 
                className="text-xs sm:text-sm w-fit px-3 py-1 bg-brand-teal-500/20 text-brand-teal-500 border-brand-teal-500/30"
              >
                <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                Restricción de edad
              </Badge>
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-brand-mint-200/40 text-brand-ink-800 border-brand-mint-200/50">
                {minAge}+ años
              </Badge>
            </div>
            
            {/* Descripción */}
            <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-relaxed break-words">
              {getAgeMessage()}. Si tu hijo/a la usa, considera supervisar su actividad y activar controles parentales.
            </p>
          </div>
        </DialogHeader>

        <div className="space-y-6 sm:space-y-8">
          {/* Información clave */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-brand-teal-500/30 bg-brand-teal-500/10 hover:shadow-soft transition-smooth">
              <CardContent className="px-4 sm:px-6 py-6">
                <div className="space-y-4">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 flex items-center">
                    <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                    Recomendaciones importantes:
                  </h3>
                  <ul className="space-y-3">
                    {getRecommendations().map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-brand-ink-800">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm sm:text-base leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Separator className="my-6 sm:my-8 border-brand-mint-200/30" />

        <div className="flex flex-col gap-3 px-4 sm:px-0">
          <Button 
            onClick={onClose} 
            variant="outline"
            className="w-full border-2 border-brand-teal-500 text-brand-teal-500 hover:bg-brand-mint-200/20 px-6 py-3 text-sm sm:text-base font-heading font-semibold"
          >
            Cancelar Selección
          </Button>
          <Button 
            onClick={onProceed} 
            className="w-full bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-6 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth"
          >
            Entiendo, seleccionar de todos modos
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
