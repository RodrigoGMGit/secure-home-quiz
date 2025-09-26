import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { ChevronRight, Search, AlertTriangle, Shield, Eye } from 'lucide-react';
import { DigitalRisk } from '../../types/risks';
import { cn } from '../../lib/utils';

interface RiskCardProps {
  risk: DigitalRisk;
  onViewDetails: (risk: DigitalRisk) => void;
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

export const RiskCard: React.FC<RiskCardProps> = ({ risk, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 hover:border-blue-200",
        "w-full h-full flex flex-col",
        isHovered && "border-blue-300 shadow-md"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(risk)}
    >
      <CardHeader className="pb-3 flex-shrink-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-3 min-w-0 flex-1">
            <div className="text-2xl sm:text-3xl flex-shrink-0">{risk.icon}</div>
            <div className="min-w-0 flex-1">
              <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight">
                {risk.title}
              </CardTitle>
              <Badge 
                variant="outline" 
                className={cn("mt-1 text-xs", severityColors[risk.severity])}
              >
                {severityLabels[risk.severity]}
              </Badge>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
        </div>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-2">
          {risk.description}
        </p>
      </CardHeader>

      <CardContent className="pt-0 flex-1 flex flex-col">
        <div className="grid grid-cols-1 gap-2 sm:gap-4 flex-1">
          {/* Cómo identificarlo */}
          <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
            <Search className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <h4 className="font-medium text-blue-900 text-xs sm:text-sm">Cómo identificarlo</h4>
              <p className="text-xs text-blue-700 mt-1 line-clamp-2">
                {risk.howToIdentify.description}
              </p>
            </div>
          </div>

          {/* Qué hacer */}
          <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <h4 className="font-medium text-red-900 text-xs sm:text-sm">Qué hacer si ya ocurrió</h4>
              <p className="text-xs text-red-700 mt-1 line-clamp-2">
                {risk.whatToDo.description}
              </p>
            </div>
          </div>

          {/* Cómo prevenir */}
          <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <h4 className="font-medium text-green-900 text-xs sm:text-sm">Cómo prevenir</h4>
              <p className="text-xs text-green-700 mt-1 line-clamp-2">
                {risk.howToPrevent.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <div className="flex flex-wrap gap-1">
            {risk.ageGroups.slice(0, 2).map((age) => (
              <Badge key={age} variant="secondary" className="text-xs px-2 py-1">
                {age} años
              </Badge>
            ))}
            {risk.ageGroups.length > 2 && (
              <Badge variant="secondary" className="text-xs px-2 py-1">
                +{risk.ageGroups.length - 2}
              </Badge>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-xs sm:text-sm self-start sm:self-auto"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(risk);
            }}
          >
            <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            <span className="hidden sm:inline">Ver detalles</span>
            <span className="sm:hidden">Ver</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
