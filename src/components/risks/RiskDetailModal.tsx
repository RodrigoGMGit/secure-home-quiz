import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Search, AlertTriangle, Shield, MessageCircle, CheckCircle, Lightbulb, Eye, Users, Clock } from 'lucide-react';
import { DigitalRisk } from '../../types/risks';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { ModalHeader } from '../shared/ModalHeader';
import { ModalContent } from '../shared/ModalContent';
import { ModalFooter } from '../shared/ModalFooter';

interface RiskDetailModalProps {
  risk: DigitalRisk | null;
  isOpen: boolean;
  onClose: () => void;
}

const severityColors = {
  low: 'bg-brand-teal-500/20 text-brand-teal-500 border-brand-teal-500/30',
  medium: 'bg-brand-mint-200/60 text-brand-ink-800 border-brand-mint-200/40',
  high: 'bg-brand-olive-500/20 text-brand-olive-500 border-brand-olive-500/30'
};

const severityLabels = {
  low: 'Bajo',
  medium: 'Medio',
  high: 'Alto'
};

const severityIcons = {
  low: Shield,
  medium: AlertTriangle,
  high: AlertTriangle
};

export const RiskDetailModal: React.FC<RiskDetailModalProps> = ({ risk, isOpen, onClose }) => {
  if (!risk) return null;

  const SeverityIcon = severityIcons[risk.severity];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-subtle border-brand-mint-200/30">
        {/* Header con diseño sofisticado */}
        <ModalHeader
          customIcon={<div className="text-2xl sm:text-3xl text-primary-foreground">{risk.icon}</div>}
          title={risk.title}
          description={risk.description}
          badges={[
            <Badge 
              key="severity"
              variant="outline" 
              className={cn("text-xs sm:text-sm w-fit px-3 py-1", severityColors[risk.severity])}
            >
              <SeverityIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              Riesgo {severityLabels[risk.severity]}
            </Badge>,
            ...risk.ageGroups.map((age) => (
              <Badge key={age} variant="secondary" className="text-xs px-2 py-1 bg-brand-mint-200/40 text-brand-ink-800 border-brand-mint-200/50">
                {age} años
              </Badge>
            ))
          ]}
        />

        <ModalContent>
          {/* Cómo identificarlo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-brand-teal-500/30 bg-brand-teal-500/10 hover:shadow-soft transition-smooth">
              <CardHeader className="pb-4 px-4 sm:px-6">
                <CardTitle className="flex items-center gap-3 text-brand-ink-900 text-base sm:text-lg md:text-xl">
                  <div className="p-2 bg-brand-teal-500/20 rounded-full">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-brand-teal-500" />
                  </div>
                  Cómo identificarlo
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="font-body text-sm sm:text-base text-brand-ink-800 mb-6 leading-relaxed break-words">
                  {risk.howToIdentify.description}
                </p>
                <div className="space-y-4">
                  <h4 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 flex items-center">
                    <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                    Señales de alerta:
                  </h4>
                  <ul className="space-y-3">
                    {risk.howToIdentify.examples.map((example, index) => (
                      <li key={index} className="flex items-start gap-3 text-brand-ink-800">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="font-body text-sm sm:text-base leading-relaxed break-words">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Qué hacer si ya ocurrió */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-brand-mint-200/40 bg-brand-mint-200/20 hover:shadow-soft transition-smooth">
              <CardHeader className="pb-4 px-4 sm:px-6">
                <CardTitle className="flex items-center gap-3 text-brand-ink-900 text-base sm:text-lg md:text-xl">
                  <div className="p-2 bg-brand-mint-200/60 rounded-full">
                    <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-brand-ink-800" />
                  </div>
                  Qué hacer si ya ocurrió
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="font-body text-sm sm:text-base text-brand-ink-800 mb-6 leading-relaxed break-words">
                  {risk.whatToDo.description}
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                      Pasos a seguir:
                    </h4>
                    <ul className="space-y-3">
                      {risk.whatToDo.steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-3 text-brand-ink-800">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-ink-800 mt-0.5 flex-shrink-0" />
                          <span className="font-body text-sm sm:text-base leading-relaxed break-words">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {risk.whatToDo.phrases.length > 0 && (
                    <div>
                      <h4 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                        Frases útiles:
                      </h4>
                      <div className="space-y-3">
                        {risk.whatToDo.phrases.map((phrase, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-brand-mint-200/30 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-lg">
                            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                            <span className="font-body text-sm sm:text-base text-brand-ink-800 italic leading-relaxed break-words">"{phrase}"</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cómo prevenir */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-brand-olive-500/30 bg-brand-olive-500/10 hover:shadow-soft transition-smooth">
              <CardHeader className="pb-4 px-4 sm:px-6">
                <CardTitle className="flex items-center gap-3 text-brand-ink-900 text-base sm:text-lg md:text-xl">
                  <div className="p-2 bg-brand-olive-500/20 rounded-full">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-brand-olive-500" />
                  </div>
                  Cómo prevenir
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="font-body text-sm sm:text-base text-brand-ink-800 mb-6 leading-relaxed break-words">
                  {risk.howToPrevent.description}
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-olive-500 rounded-full mr-3"></div>
                      Estrategias preventivas:
                    </h4>
                    <ul className="space-y-3">
                      {risk.howToPrevent.steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-3 text-brand-ink-800">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-olive-500 mt-0.5 flex-shrink-0" />
                          <span className="font-body text-sm sm:text-base leading-relaxed break-words">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {risk.howToPrevent.tips.length > 0 && (
                    <div>
                      <h4 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-brand-olive-500 rounded-full mr-3"></div>
                        Consejos adicionales:
                      </h4>
                      <div className="space-y-3">
                        {risk.howToPrevent.tips.map((tip, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-brand-olive-500/10 to-brand-teal-500/10 border border-brand-olive-500/20 rounded-lg">
                            <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                            <span className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed break-words">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Plataformas afectadas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-brand-mint-200/30 bg-gradient-to-br from-white via-brand-mint-200/5 to-white hover:shadow-soft transition-smooth">
              <CardHeader className="pb-4 px-4 sm:px-6">
                <CardTitle className="flex items-center gap-3 text-brand-ink-900 text-base sm:text-lg md:text-xl">
                  <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                  Plataformas donde puede ocurrir
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                  {risk.platforms.map((platform) => (
                    <Badge key={platform} variant="outline" className="text-xs sm:text-sm px-3 py-1 bg-brand-mint-200/40 text-brand-ink-800 border-brand-mint-200/50 hover:bg-brand-teal-500/20 hover:border-brand-teal-500/30 transition-smooth">
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </Badge>
                  ))}
                </div>
                <p className="font-body text-xs sm:text-sm text-brand-olive-500 italic break-words">
                  Estas son las más comunes; sin embargo, puede ocurrir en cualquier plataforma.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </ModalContent>

        <ModalFooter>
          <Button 
            onClick={onClose} 
            className="bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-8 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth"
          >
            Cerrar
          </Button>
        </ModalFooter>
      </DialogContent>
    </Dialog>
  );
};
