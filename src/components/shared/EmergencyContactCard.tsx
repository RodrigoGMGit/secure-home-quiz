import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, ExternalLink } from 'lucide-react';
import { getCardColors } from '@/utils/cardColors';

export interface EmergencyContactCardProps {
  title: string;
  description: string;
  phoneNumber: string;
  website?: string;
  additionalInfo?: string;
  index: number;
  className?: string;
}

const EmergencyContactCard: React.FC<EmergencyContactCardProps> = ({
  title,
  description,
  phoneNumber,
  website,
  additionalInfo,
  index,
  className = ""
}) => {
  const colors = getCardColors(index);
  
  const handlePhoneCall = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };
  
  const handleWebsiteVisit = () => {
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <Card className={`${colors.card} border hover:shadow-soft transition-smooth hover:scale-105 h-full ${className}`}>
      <CardHeader className="text-center p-4 sm:p-6">
        {/* Logo circular con icono */}
        <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 ${colors.icon} rounded-full w-fit shadow-soft`}>
          <Phone className="h-6 w-6 sm:h-8 sm:w-8" />
        </div>
        
        <CardTitle className="font-heading text-lg sm:text-xl text-brand-ink-900 mb-2">
          {title}
        </CardTitle>
        
        <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6 pt-0">
        {/* Información adicional */}
        {additionalInfo && (
          <div className="mb-4 sm:mb-6">
            <p className="font-body text-xs sm:text-sm text-brand-ink-800 leading-relaxed">
              {additionalInfo}
            </p>
          </div>
        )}
        
        {/* Botones de acción */}
        <div className="space-y-3">
          <Button 
            onClick={handlePhoneCall}
            className="w-full text-sm sm:text-base shadow-soft bg-brand-ink-800 hover:bg-brand-ink-900 text-white"
            aria-label={`Llamar a ${title} al ${phoneNumber}`}
          >
            <Phone className="mr-2 h-4 w-4" />
            Llamar: {phoneNumber}
          </Button>
          
          {website && (
            <Button 
              onClick={handleWebsiteVisit}
              variant="outline"
              className="w-full text-sm sm:text-base border-brand-teal-500 text-brand-teal-500 hover:bg-brand-mint-200/20"
              aria-label={`Visitar sitio web de ${title}`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visitar Sitio Web
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyContactCard;
