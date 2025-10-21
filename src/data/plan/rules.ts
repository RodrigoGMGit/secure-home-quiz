import { PlanInput, Plan, PlanSection, PlanAction, PlanSummary } from '@/types/plan';
import { contentBlocks, measureToActionMap } from './blocks';
import { AlertTriangle, Shield, Users, Clock, Home, Heart, MessageCircle, Eye, Smartphone } from 'lucide-react';

// Iconos para secciones - mapeo por string para evitar problemas de serialización
const sectionIconMap: Record<string, string> = {
  urgent: 'AlertTriangle',
  parental_controls: 'Shield',
  family_rules: 'Home',
  communication: 'MessageCircle',
  concerns: 'Heart'
};

export function buildPlan(input: PlanInput): Plan {
  const seenActionIds = new Set<string>();
  const sections: PlanSection[] = [];
  
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

  // 2. CONTROLES PARENTALES POR PLATAFORMA
  const parentalControlActions = getParentalControlActions(input);
  if (parentalControlActions.length > 0) {
    sections.push({
      id: 'parental_controls',
      title: 'Controles Parentales',
      description: 'Configura estas herramientas de protección para las plataformas que usa tu hijo.',
      actions: parentalControlActions,
      icon: sectionIconMap.parental_controls,
      priority: 'high'
    });
    parentalControlActions.forEach(action => seenActionIds.add(action.id));
  }

  // 3. REGLAS FAMILIARES Y RUTINAS
  const familyRuleActions = getFamilyRuleActions(input);
  if (familyRuleActions.length > 0) {
    sections.push({
      id: 'family_rules',
      title: 'Reglas Familiares y Rutinas',
      description: 'Establece estas reglas para crear un ambiente digital saludable en casa.',
      actions: familyRuleActions,
      icon: sectionIconMap.family_rules,
      priority: 'high'
    });
    familyRuleActions.forEach(action => seenActionIds.add(action.id));
  }

  // 4. COMUNICACIÓN Y ACOMPAÑAMIENTO
  const communicationActions = getCommunicationActions(input);
  if (communicationActions.length > 0) {
    sections.push({
      id: 'communication',
      title: 'Comunicación y Acompañamiento',
      description: 'La comunicación abierta es la base de la protección digital.',
      actions: communicationActions,
      icon: sectionIconMap.communication,
      priority: 'medium'
    });
    communicationActions.forEach(action => seenActionIds.add(action.id));
  }

  // 5. PREOCUPACIONES ESPECÍFICAS
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
  if (input.signals && input.signals.length > 0) {
    const urgentBlock = contentBlocks.find(block => block.id === 'urgent_signals');
    if (urgentBlock) {
      // Filtrar acciones según las señales específicas
      const relevantActions = urgentBlock.actions.filter(action => {
        return input.signals.some(signal => 
          action.tags.some(tag => tag.includes(`signal:${signal.toLowerCase()}`))
        );
      });
      actions.push(...relevantActions);
    }
  }
  
  return actions;
}

function getParentalControlActions(input: PlanInput): PlanAction[] {
  const actions: PlanAction[] = [];
  
  // Filtrar acciones ya implementadas
  const implementedActions = new Set<string>();
  if (input.measures) {
    Object.entries(input.measures).forEach(([platform, measures]) => {
      if (Array.isArray(measures)) {
        measures.forEach(measure => {
          const actionIds = measureToActionMap[`${platform}_${measure}`] || [];
          actionIds.forEach(id => implementedActions.add(id));
        });
      }
    });
  }
  
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
        
        // Excluir acciones ya implementadas
        const notImplemented = !implementedActions.has(action.id);
        
        return ageMatch && notImplemented;
      });
      
      actions.push(...relevantActions);
    });
  });
  
  return actions;
}

function getFamilyRuleActions(input: PlanInput): PlanAction[] {
  const actions: PlanAction[] = [];
  
  // Filtrar acciones ya implementadas
  const implementedActions = new Set<string>();
  if (input.measures) {
    Object.entries(input.measures).forEach(([platform, measures]) => {
      if (Array.isArray(measures)) {
        measures.forEach(measure => {
          const actionIds = measureToActionMap[`${platform}_${measure}`] || [];
          actionIds.forEach(id => implementedActions.add(id));
        });
      }
    });
  }
  
  const familyRuleBlocks = contentBlocks.filter(block => 
    block.tags.includes('family_rules')
  );
  
  familyRuleBlocks.forEach(block => {
    const relevantActions = block.actions.filter(action => {
      const ageMatch = action.tags.some(tag => 
        tag === `age:${input.age_band}` || tag === 'age:all'
      );
      const notImplemented = !implementedActions.has(action.id);
      return ageMatch && notImplemented;
    });
    
    actions.push(...relevantActions);
  });
  
  return actions;
}

function getCommunicationActions(input: PlanInput): PlanAction[] {
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
