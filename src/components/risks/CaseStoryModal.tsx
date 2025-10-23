import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { BookOpen, AlertTriangle, Lightbulb, Shield, CheckCircle } from 'lucide-react';
import { CaseStory } from '../../data/caseStories';
import { motion } from 'framer-motion';

interface CaseStoryModalProps {
  caseStory: CaseStory | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStoryModal: React.FC<CaseStoryModalProps> = ({ caseStory, isOpen, onClose }) => {
  if (!caseStory) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white border-brand-mint-200/30 shadow-soft">
        {/* Header con diseño sofisticado */}
        <DialogHeader className="relative bg-gradient-to-br from-white via-brand-mint-200/20 to-white border-b border-brand-mint-200/30 -m-6 mb-6 p-6 sm:p-8">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-4 left-4 w-16 h-16 bg-brand-teal-500/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-brand-mint-200/10 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>
          
          <div className="relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Logo circular con gradiente */}
              <div className="flex justify-center sm:justify-start">
                <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                  <BookOpen className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <DialogTitle className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 leading-tight mb-3">
                  {caseStory.titulo}
                </DialogTitle>
                
                {/* Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <Badge variant="outline" className="text-xs sm:text-sm w-fit px-3 py-1">
                    Historia Real
                  </Badge>
                </div>
                
                {/* Descripción */}
                <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-relaxed">
                  {caseStory.descripcion}
                </p>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 sm:space-y-8">
          {/* Qué hacer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-brand-mint-200/40 bg-brand-mint-200/20 hover:shadow-soft transition-smooth">
              <CardHeader className="pb-4 px-4 sm:px-6">
                <CardTitle className="flex items-center gap-3 text-brand-ink-900 text-base sm:text-lg md:text-xl">
                  <div className="p-2 bg-brand-mint-200/60 rounded-full">
                    <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-brand-ink-800" />
                  </div>
                  Qué hacer
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="font-body text-sm sm:text-base text-brand-ink-800 mb-6 leading-relaxed">
                  {caseStory.whatToDo.description}
                </p>
                <div className="space-y-4">
                  <h4 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                    Pasos a seguir:
                  </h4>
                  <ul className="space-y-3">
                    {caseStory.whatToDo.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3 text-brand-ink-800">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-ink-800 mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm sm:text-base leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Lección destacada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-teal-500/20 rounded-full flex-shrink-0">
                  <Shield className="h-5 w-5 text-brand-teal-500" />
                </div>
                <div>
                  <p className="font-body text-sm sm:text-base text-brand-ink-800 italic leading-relaxed">
                    "{caseStory.leccion}"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-6 sm:my-8 border-brand-mint-200/30" />

        <div className="flex justify-center px-4 sm:px-0">
          <Button 
            onClick={onClose} 
            className="bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-8 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth"
          >
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
