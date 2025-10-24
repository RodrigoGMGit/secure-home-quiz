import { PlanInput, Plan, PlanSection, PlanAction, PlanSummary } from '@/types/plan';
import { contentBlocks, measureToActionMap } from './blocks';
import { AlertTriangle, Shield, Users, Clock, Home, Heart, MessageCircle, Eye, Smartphone, Phone } from 'lucide-react';
import { analyzeSecurity, analyzeEmergencyPreparedness, SecurityAnalysis, EmergencyAnalysis } from '@/utils/planGenerator';

// Iconos para secciones - mapeo por string para evitar problemas de serialización
const sectionIconMap: Record<string, string> = {
  urgent: 'AlertTriangle',
  parental_controls: 'Shield',
  family_rules: 'Home',
  communication: 'MessageCircle',
  emergency_resources: 'Phone',
  concerns: 'Heart'
};

export function buildPlan(input: PlanInput): Plan {
  const seenActionIds = new Set<string>();
  const sections: PlanSection[] = [];
  
  // Analizar configuración de seguridad y recursos de emergencia
  const securityAnalysis = analyzeSecurity(input.securityConfig);
  const emergencyAnalysis = analyzeEmergencyPreparedness(input.emergencyResources);
  
  // 1. ACCIONES URGENTES - Señales de alerta
  const urgentActions = getUrgentActions(input);
  if (urgentActions.length > 0) {
    sections.push({
      id: 'urgent_actions',
      title: 'Acciones Urgentes',
      description: 'Si identificas alguna de estas señales, es importante actuar inmediatamente.',
      actions: urgentActions,
      icon: sectionIconMap.urgent,
      priority: 'urgent'
    });
    urgentActions.forEach(action => seenActionIds.add(action.id));
  }

  // 2. CONTROLES PARENTALES POR PLATAFORMA (prioridad alta si hay gaps de supervisión)
  const parentalControlActions = getParentalControlActions(input, securityAnalysis);
  if (parentalControlActions.length > 0) {
    sections.push({
      id: 'parental_controls',
      title: 'Controles Parentales',
      description: 'Configura estas herramientas de protección para las plataformas que usa tu hijo.',
      actions: parentalControlActions,
      icon: sectionIconMap.parental_controls,
      priority: securityAnalysis.gaps.includes('supervision') ? 'urgent' : 'high'
    });
    parentalControlActions.forEach(action => seenActionIds.add(action.id));
  }

  // 3. REGLAS FAMILIARES Y RUTINAS (prioridad alta si hay gaps de reglas familiares)
  const familyRuleActions = getFamilyRuleActions(input, securityAnalysis);
  if (familyRuleActions.length > 0) {
    sections.push({
      id: 'family_rules',
      title: 'Reglas Familiares y Rutinas',
      description: 'Establece estas reglas para crear un ambiente digital saludable en casa.',
      actions: familyRuleActions,
      icon: sectionIconMap.family_rules,
      priority: securityAnalysis.gaps.includes('family_rules') ? 'urgent' : 'high'
    });
    familyRuleActions.forEach(action => seenActionIds.add(action.id));
  }

  // 4. COMUNICACIÓN Y ACOMPAÑAMIENTO (prioridad alta si hay gaps de comunicación)
  const communicationActions = getCommunicationActions(input, securityAnalysis, emergencyAnalysis);
  if (communicationActions.length > 0) {
    sections.push({
      id: 'communication',
      title: 'Comunicación y Acompañamiento',
      description: 'La comunicación abierta es la base de la protección digital.',
      actions: communicationActions,
      icon: sectionIconMap.communication,
      priority: securityAnalysis.gaps.includes('communication') || emergencyAnalysis.missing_resources.includes('preventive_prep') ? 'urgent' : 'medium'
    });
    communicationActions.forEach(action => seenActionIds.add(action.id));
  }

  // 5. RECURSOS DE EMERGENCIA (prioridad alta si hay gaps de preparación)
  const emergencyResourceActions = getEmergencyResourceActions(input, emergencyAnalysis);
  if (emergencyResourceActions.length > 0) {
    sections.push({
      id: 'emergency_resources',
      title: 'Recursos de Emergencia y Reporte',
      description: 'Conoce estos recursos para actuar rápidamente en caso de emergencia digital.',
      actions: emergencyResourceActions,
      icon: sectionIconMap.emergency_resources,
      priority: emergencyAnalysis.preparedness === 'low' ? 'urgent' : 'high'
    });
    emergencyResourceActions.forEach(action => seenActionIds.add(action.id));
  }

  // 6. PREOCUPACIONES ESPECÍFICAS
  const concernActions = getConcernActions(input);
  if (concernActions.length > 0) {
    sections.push({
      id: 'concerns',
      title: 'Prevención de Riesgos Específicos',
      description: 'Acciones específicas para las preocupaciones que mencionaste.',
      actions: concernActions,
      icon: sectionIconMap.concerns,
      priority: 'high'
    });
    concernActions.forEach(action => seenActionIds.add(action.id));
  }

  // Crear resumen
  const summary: PlanSummary = {
    age_band: input.age_band,
    platforms: input.platforms,
    top_priorities: getTopPriorities(input),
    total_actions: sections.reduce((sum, section) => sum + section.actions.length, 0),
    urgent_actions: urgentActions.length
  };

  return {
    summary,
    sections,
    generated_at: new Date().toISOString()
  };
}

function getUrgentActions(input: PlanInput): PlanAction[] {
  const actions: PlanAction[] = [];
  
  // Si hay señales de alerta, incluir acciones urgentes
  // TODO: Implementar lógica de señales urgentes basada en SecurityConfig y EmergencyResources
  // Por ahora, retornar acciones vacías ya que no tenemos signals en el nuevo formato
  
  return actions;
}

function getParentalControlActions(input: PlanInput, securityAnalysis: SecurityAnalysis): PlanAction[] {
  const actions: PlanAction[] = [];
  
  // Obtener acciones por plataforma
  input.platforms.forEach(platform => {
    const platformBlocks = contentBlocks.filter(block => 
      block.tags.includes(`platform:${platform}`)
    );
    
    platformBlocks.forEach(block => {
      const relevantActions = block.actions.filter(action => {
        // Filtrar por edad
        const ageMatch = action.tags.some(tag => 
          tag === `age:${input.age_band}` || tag === 'age:all'
        );
        
        return ageMatch;
      });
      
      actions.push(...relevantActions);
    });
  });
  
  return actions;
}

function getFamilyRuleActions(input: PlanInput, securityAnalysis: SecurityAnalysis): PlanAction[] {
  const actions: PlanAction[] = [];
  
  const familyRuleBlocks = contentBlocks.filter(block => 
    block.tags.includes('family_rules')
  );
  
  familyRuleBlocks.forEach(block => {
    const relevantActions = block.actions.filter(action => {
      const ageMatch = action.tags.some(tag => 
        tag === `age:${input.age_band}` || tag === 'age:all'
      );
      return ageMatch;
    });
    
    actions.push(...relevantActions);
  });
  
  return actions;
}

function getCommunicationActions(input: PlanInput, securityAnalysis: SecurityAnalysis, emergencyAnalysis: EmergencyAnalysis): PlanAction[] {
  const actions: PlanAction[] = [];
  
  const communicationBlocks = contentBlocks.filter(block => 
    block.tags.includes('communication')
  );
  
  communicationBlocks.forEach(block => {
    const relevantActions = block.actions.filter(action => {
      const ageMatch = action.tags.some(tag => 
        tag === `age:${input.age_band}` || tag === 'age:all'
      );
      return ageMatch;
    });
    
    actions.push(...relevantActions);
  });
  
  return actions;
}

function getEmergencyResourceActions(input: PlanInput, emergencyAnalysis: EmergencyAnalysis): PlanAction[] {
  const actions: PlanAction[] = [];
  
  // Obtener acciones de recursos de emergencia
  const emergencyBlocks = contentBlocks.filter(block => 
    block.tags.includes('emergency_resources')
  );
  
  emergencyBlocks.forEach(block => {
    const relevantActions = block.actions.filter(action => {
      const ageMatch = action.tags.some(tag => 
        tag === `age:${input.age_band}` || tag === 'age:all'
      );
      return ageMatch;
    });
    
    actions.push(...relevantActions);
  });
  
  return actions;
}

function getConcernActions(input: PlanInput): PlanAction[] {
  const actions: PlanAction[] = [];
  
  if (input.concerns && input.concerns.length > 0) {
    input.concerns.forEach(concern => {
      const concernBlocks = contentBlocks.filter(block => 
        block.tags.includes(`concern:${concern}`)
      );
      
      concernBlocks.forEach(block => {
        const relevantActions = block.actions.filter(action => {
          const ageMatch = action.tags.some(tag => 
            tag === `age:${input.age_band}` || tag === 'age:all'
          );
          return ageMatch;
        });
        
        actions.push(...relevantActions);
      });
    });
  }
  
  return actions;
}

function getTopPriorities(input: PlanInput): string[] {
  const priorities: string[] = [];
  
  // Prioridades por edad
  switch (input.age_band) {
    case '6-8':
      priorities.push('Controles parentales básicos', 'Supervisión constante', 'Contenido educativo');
      break;
    case '9-12':
      priorities.push('Límites de tiempo', 'Educación sobre riesgos', 'Comunicación abierta');
      break;
    case '13-15':
      priorities.push('Privacidad en redes sociales', 'Prevención de grooming', 'Manejo de presión social');
      break;
    case '16-17':
      priorities.push('Ciudadanía digital', 'Prevención de sexting', 'Preparación para independencia');
      break;
  }
  
  // Prioridades por plataformas
  if (input.platforms.includes('youtube')) {
    priorities.push('Filtrado de contenido');
  }
  if (input.platforms.includes('tiktok')) {
    priorities.push('Configuración de privacidad');
  }
  if (input.platforms.includes('whatsapp')) {
    priorities.push('Seguridad en mensajería');
  }
  
  // Prioridades por preocupaciones
  if (input.concerns.includes('ciberacoso')) {
    priorities.push('Prevención de ciberacoso');
  }
  if (input.concerns.includes('grooming')) {
    priorities.push('Detección de grooming');
  }
  if (input.concerns.includes('sexting')) {
    priorities.push('Educación sobre sexting');
  }
  
  return [...new Set(priorities)].slice(0, 5); // Máximo 5 prioridades
}
