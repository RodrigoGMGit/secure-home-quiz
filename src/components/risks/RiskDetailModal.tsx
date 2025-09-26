import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Search, AlertTriangle, Shield, MessageCircle, CheckCircle, Lightbulb } from 'lucide-react';
import { DigitalRisk } from '../../types/risks';
import { cn } from '../../lib/utils';

interface RiskDetailModalProps {
  risk: DigitalRisk | null;
  isOpen: boolean;
  onClose: () => void;
}

const severityColors = {
  low: 'bg-green-100 text-green-800 border-green-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  high: 'bg-red-100 text-red-800 border-red-200'
};

const severityLabels = {
  low: 'Bajo',
  medium: 'Medio',
  high: 'Alto'
};

export const RiskDetailModal: React.FC<RiskDetailModalProps> = ({ risk, isOpen, onClose }) => {
  if (!risk) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="text-3xl sm:text-4xl flex-shrink-0">{risk.icon}</div>
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                {risk.title}
              </DialogTitle>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                <Badge 
                  variant="outline" 
                  className={cn("text-xs sm:text-sm w-fit", severityColors[risk.severity])}
                >
                  Riesgo {severityLabels[risk.severity]}
                </Badge>
                <div className="flex flex-wrap gap-1">
                  {risk.ageGroups.map((age) => (
                    <Badge key={age} variant="secondary" className="text-xs">
                      {age} años
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-3 text-sm sm:text-lg">
            {risk.description}
          </p>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
          {/* Cómo identificarlo */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader className="pb-3 px-3 sm:px-6">
              <CardTitle className="flex items-center gap-2 text-blue-900 text-base sm:text-lg">
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                Cómo identificarlo
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-6">
              <p className="text-blue-800 mb-4 text-sm sm:text-base">
                {risk.howToIdentify.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-blue-900 text-sm sm:text-base">Señales de alerta:</h4>
                <ul className="space-y-2">
                  {risk.howToIdentify.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2 text-blue-700">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Qué hacer si ya ocurrió */}
          <Card className="border-red-200 bg-red-50/50">
            <CardHeader className="pb-3 px-3 sm:px-6">
              <CardTitle className="flex items-center gap-2 text-red-900 text-base sm:text-lg">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5" />
                Qué hacer si ya ocurrió
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-6">
              <p className="text-red-800 mb-4 text-sm sm:text-base">
                {risk.whatToDo.description}
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-red-900 mb-2 text-sm sm:text-base">Pasos a seguir:</h4>
                  <ul className="space-y-2">
                    {risk.whatToDo.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3 text-red-700">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {risk.whatToDo.phrases.length > 0 && (
                  <div>
                    <h4 className="font-medium text-red-900 mb-2 text-sm sm:text-base">Frases útiles:</h4>
                    <div className="space-y-2">
                      {risk.whatToDo.phrases.map((phrase, index) => (
                        <div key={index} className="flex items-start gap-2 p-2 sm:p-3 bg-red-100 rounded-lg">
                          <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-red-800 italic">"{phrase}"</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Cómo prevenir */}
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader className="pb-3 px-3 sm:px-6">
              <CardTitle className="flex items-center gap-2 text-green-900 text-base sm:text-lg">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                Cómo prevenir
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-6">
              <p className="text-green-800 mb-4 text-sm sm:text-base">
                {risk.howToPrevent.description}
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-green-900 mb-2 text-sm sm:text-base">Estrategias preventivas:</h4>
                  <ul className="space-y-2">
                    {risk.howToPrevent.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3 text-green-700">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {risk.howToPrevent.tips.length > 0 && (
                  <div>
                    <h4 className="font-medium text-green-900 mb-2 text-sm sm:text-base">Consejos adicionales:</h4>
                    <div className="space-y-2">
                      {risk.howToPrevent.tips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-2 p-2 sm:p-3 bg-green-100 rounded-lg">
                          <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-green-800">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Plataformas afectadas */}
          <Card>
            <CardHeader className="pb-3 px-3 sm:px-6">
              <CardTitle className="text-gray-900 text-base sm:text-lg">Plataformas donde puede ocurrir</CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-6">
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {risk.platforms.map((platform) => (
                  <Badge key={platform} variant="outline" className="text-xs sm:text-sm">
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-4 sm:my-6" />

        <div className="flex justify-end px-3 sm:px-0">
          <Button onClick={onClose} className="px-4 sm:px-6 text-sm sm:text-base">
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
