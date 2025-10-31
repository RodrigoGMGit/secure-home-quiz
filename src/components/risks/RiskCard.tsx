import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ChevronRight, Search, AlertTriangle, Shield, Eye, CheckCircle } from 'lucide-react';
import { DigitalRisk } from '../../types/risks';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { GlossaryTerm } from '../ui/GlossaryTerm';

interface RiskCardProps {
  risk: DigitalRisk;
  onViewDetails: (risk: DigitalRisk) => void;
  index: number;
}

const severityColors = {
  low: 'bg-brand-teal-500/20 text-brand-ink-800 border-brand-teal-500/30',
  medium: 'bg-brand-mint-200/60 text-brand-ink-800 border-brand-mint-200/40',
  high: 'bg-brand-olive-500/20 text-brand-ink-800 border-brand-olive-500/30'
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

const cardColors = [
  "border-brand-teal-500/30 bg-brand-teal-500/10",
  "border-brand-mint-200/40 bg-brand-mint-200/20", 
  "border-brand-olive-500/30 bg-brand-olive-500/10"
];

const iconColors = [
  "bg-brand-teal-500/20 text-brand-ink-800",
  "bg-brand-mint-200/60 text-brand-ink-800",
  "bg-brand-olive-500/20 text-brand-ink-800"
];

export const RiskCard: React.FC<RiskCardProps> = ({ risk, onViewDetails, index }) => {
  // Rotar colores para evitar monotonía visual usando índice
  const colorIndex = index % cardColors.length;
  const cardColor = cardColors[colorIndex];
  const iconColor = iconColors[colorIndex];
  const SeverityIcon = severityIcons[risk.severity];

  // Función para renderizar títulos con términos del glosario
  const renderTitleWithGlossary = (title: string) => {
    const glossaryMappings: Record<string, string> = {
      'Ciberacoso': 'ciberacoso',
      'Grooming': 'grooming',
      'Sexting': 'sexting',
      'Deepfakes': 'deepfakes',
      'Deep Fakes': 'deepfakes',
      'Suplantación de identidad': 'suplantacion',
      'Discurso de odio': 'discurso-odio',
      'Redes sociales anónimas': 'redes-anonimas',
      'Emojis con doble significado': 'emojis-doble',
      'Fandoms': 'fandoms'
    };

    // Buscar si el título contiene algún término del glosario
    for (const [term, key] of Object.entries(glossaryMappings)) {
      if (title.includes(term)) {
        const parts = title.split(term);
        return (
          <>
            {parts[0]}
            <GlossaryTerm termKey={key}>{term}</GlossaryTerm>
            {parts[1]}
          </>
        );
      }
    }
    
    return title;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <Card 
        className={`${cardColor} border hover:shadow-soft transition-smooth hover:scale-105 h-full`}
      >
        <CardHeader className="text-center p-4 sm:p-6">
          {/* Logo circular con gradiente */}
          <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 ${iconColor} rounded-full w-fit shadow-soft`}>
            <div className="text-2xl sm:text-3xl">{risk.icon}</div>
          </div>
          
          <CardTitle className="font-heading text-lg sm:text-xl text-brand-ink-900 mb-2">
            {renderTitleWithGlossary(risk.title)}
          </CardTitle>
          
          <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500 mb-3">
            {risk.description}
          </CardDescription>
          
          {/* Badge de severidad con diseño mejorado */}
          <div className="flex justify-center">
            <Badge 
              variant="outline" 
              className={cn("text-xs sm:text-sm w-fit px-3 py-1", severityColors[risk.severity])}
            >
              <SeverityIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              Riesgo {severityLabels[risk.severity]}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="p-4 sm:p-6 pt-0">
          {/* Features con sistema de colores rotativos */}
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            <li className="flex items-center text-xs sm:text-sm text-brand-ink-800">
              <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 text-brand-ink-800 mr-2 sm:mr-3 flex-shrink-0`} />
              Identificación temprana
            </li>
            <li className="flex items-center text-xs sm:text-sm text-brand-ink-800">
              <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 text-brand-ink-800 mr-2 sm:mr-3 flex-shrink-0`} />
              Acción inmediata
            </li>
            <li className="flex items-center text-xs sm:text-sm text-brand-ink-800">
              <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 text-brand-ink-800 mr-2 sm:mr-3 flex-shrink-0`} />
              Prevención activa
            </li>
            <li className="flex items-center text-xs sm:text-sm text-brand-ink-800">
              <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 text-brand-ink-800 mr-2 sm:mr-3 flex-shrink-0`} />
              Edades: {risk.ageGroups.join(', ')}
            </li>
          </ul>
          
          {/* Botón con diseño consistente */}
          <Button 
            variant="primary-brand" 
            className="w-full text-sm sm:text-base shadow-soft"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(risk);
            }}
          >
            <Eye className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Ver detalles completos
            <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
