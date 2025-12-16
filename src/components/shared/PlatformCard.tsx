import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { getCardColors } from '@/utils/cardColors';

export interface PlatformFeature {
  text: string;
}

export interface PlatformCardProps {
  title: string;
  description: string;
  features: PlatformFeature[];
  icon: React.ComponentType<{ className?: string }>;
  index: number;
  onLearnMore?: () => void;
  learnMoreText?: string;
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  title,
  description,
  features,
  icon: IconComponent,
  index,
  onLearnMore,
  learnMoreText = "Ver más"
}) => {
  const colors = getCardColors(index);
  
  return (
    <Card className={`${colors.card} border hover:shadow-soft transition-smooth hover:scale-105 h-full`}>
      <CardHeader className="text-center p-4 sm:p-6">
        {/* Logo circular con icono */}
        <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 ${colors.icon} rounded-full w-fit shadow-soft`}>
          <IconComponent className="h-6 w-6 sm:h-8 sm:w-8" />
        </div>
        
        <CardTitle className="font-heading text-lg sm:text-xl text-brand-ink-900 mb-2">
          {title}
        </CardTitle>
        
        <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6 pt-0">
        {/* Lista de features con checkmarks */}
        <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center text-xs sm:text-sm text-brand-ink-800">
              <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0 ${colors.checkmark}`} />
              {feature.text}
            </li>
          ))}
        </ul>
        
        {/* Botón de acción */}
        {onLearnMore && (
          <Button 
            onClick={onLearnMore}
            className="w-full text-sm sm:text-base shadow-soft"
          >
            {learnMoreText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PlatformCard;
