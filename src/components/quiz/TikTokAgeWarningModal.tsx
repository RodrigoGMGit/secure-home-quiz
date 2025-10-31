import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { AgeBand } from '@/types/quiz';
import { motion } from 'framer-motion';
import { TikTokIcon } from '@/components/icons/platforms';
import { ModalHeader } from '../shared/ModalHeader';
import { ModalContent } from '../shared/ModalContent';
import { ModalFooter } from '../shared/ModalFooter';

interface TikTokAgeWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
  ageband?: AgeBand;
}

export const TikTokAgeWarningModal: React.FC<TikTokAgeWarningModalProps> = ({ 
  isOpen, 
  onClose, 
  onProceed,
  ageband 
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white border-brand-mint-200/30 shadow-soft">
        {/* Header con diseño sofisticado */}
        <ModalHeader
          customIcon={<TikTokIcon className="h-8 w-8 text-primary-foreground" />}
          title="TikTok requiere 13+ años"
          description="TikTok establece una edad mínima de 13 años. Si tu hijo/a la usa, considera supervisar su actividad y activar controles parentales."
          badges={[
            <Badge 
              key="age-restriction"
              variant="outline" 
              className="text-xs sm:text-sm w-fit px-3 py-1 bg-brand-teal-500/20 text-brand-teal-500 border-brand-teal-500/30"
            >
              <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              Restricción de edad
            </Badge>,
            <Badge key="age" variant="secondary" className="text-xs px-2 py-1 bg-brand-mint-200/40 text-brand-ink-800 border-brand-mint-200/50">
              13+ años
            </Badge>
          ]}
        />

        <ModalContent>
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
                    Puntos importantes:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Edad mínima recomendada: 13 años",
                      "Pueden aparecer contenidos no apropiados",
                      "Es importante supervisar su uso"
                    ].map((point, index) => (
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
        </ModalContent>

        <ModalFooter className="px-4 sm:px-0">
          <div className="flex flex-col gap-3 w-full">
            <Button 
              onClick={onClose} 
              variant="outline"
              className="w-full border-2 border-brand-teal-500 text-brand-teal-500 hover:bg-brand-mint-200/20 px-6 py-3 text-sm sm:text-base font-heading font-semibold"
            >
              Cancelar Seleccion
            </Button>
            <Button 
              onClick={onProceed} 
              className="w-full bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-6 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth"
            >
              Seleccionar Tiktok y Continuar
            </Button>
          </div>
        </ModalFooter>
      </DialogContent>
    </Dialog>
  );
};
