/**
 * Especificación del Motor de Composición de Planes
 * 
 * Este archivo documenta cómo las respuestas del quiz se mapean a secciones del plan personalizado.
 * Es la fuente de verdad para entender la lógica de personalización.
 */

import { PlanInput, Plan } from '@/types/plan';

/**
 * Mapeo de Respuestas del Quiz a Secciones del Plan
 * 
 * El motor de composición (`buildPlan`) utiliza las siguientes reglas para generar planes personalizados:
 */

export interface PlanCompositionSpec {
  // Entrada: Respuestas del quiz
  input: PlanInput;
  
  // Salida: Plan personalizado
  output: Plan;
  
  // Reglas de mapeo
  mappingRules: {
    urgentActions: {
      condition: 'signals.length > 0';
      source: 'contentBlocks.urgent_signals';
      filter: 'action.tags.includes(`signal:${signal.toLowerCase()}`)';
    };
    
    parentalControls: {
      condition: 'platforms.length > 0';
      source: 'contentBlocks.platform_*';
      filter: 'action.tags.includes(`platform:${platform}`) && ageMatch && !implemented';
    };
    
    familyRules: {
      condition: 'always';
      source: 'contentBlocks.family_rules';
      filter: 'ageMatch && !implemented';
    };
    
    communication: {
      condition: 'always';
      source: 'contentBlocks.communication_support';
      filter: 'ageMatch';
    };
    
    concerns: {
      condition: 'concerns.length > 0';
      source: 'contentBlocks.concern_*';
      filter: 'action.tags.includes(`concern:${concern}`) && ageMatch';
    };
  };
}

/**
 * Casos de Prueba Documentados
 * 
 * Estos son los 6 casos de prueba que validan el motor de composición:
 */

export const testCases: Array<{
  name: string;
  input: Partial<PlanInput>;
  expectedSections: string[];
  expectedActions: number;
}> = [
  {
    name: 'Niño pequeño con YouTube',
    input: {
      age_band: '6-8',
      platforms: ['youtube'],
      concerns: [],
      signals: []
    },
    expectedSections: ['parental_controls', 'family_rules', 'communication'],
    expectedActions: 8
  },
  
  {
    name: 'Adolescente con múltiples plataformas',
    input: {
      age_band: '13-15',
      platforms: ['youtube', 'tiktok', 'whatsapp'],
      concerns: ['ciberacoso'],
      signals: []
    },
    expectedSections: ['parental_controls', 'family_rules', 'communication', 'concerns'],
    expectedActions: 15
  },
  
  {
    name: 'Señales de alerta urgentes',
    input: {
      age_band: '9-12',
      platforms: ['youtube'],
      concerns: ['grooming'],
      signals: ['secreto_dispositivos']
    },
    expectedSections: ['urgent_actions', 'parental_controls', 'family_rules', 'communication', 'concerns'],
    expectedActions: 12
  },
  
  {
    name: 'Adolescente mayor independiente',
    input: {
      age_band: '16-17',
      platforms: ['tiktok', 'whatsapp'],
      concerns: ['sexting'],
      signals: []
    },
    expectedSections: ['parental_controls', 'family_rules', 'communication', 'concerns'],
    expectedActions: 10
  },
  
  {
    name: 'Gamer con videojuegos',
    input: {
      age_band: '9-12',
      platforms: ['roblox', 'minecraft'],
      concerns: ['tiempo_excesivo'],
      signals: []
    },
    expectedSections: ['family_rules', 'communication', 'concerns'],
    expectedActions: 8
  },
  
  {
    name: 'Múltiples preocupaciones',
    input: {
      age_band: '13-15',
      platforms: ['youtube', 'tiktok', 'whatsapp', 'instagram'],
      concerns: ['ciberacoso', 'grooming', 'sexting'],
      signals: ['cambios_conducta']
    },
    expectedSections: ['urgent_actions', 'parental_controls', 'family_rules', 'communication', 'concerns'],
    expectedActions: 20
  }
];

/**
 * Validación de Contraste WCAG AA
 * 
 * Todos los elementos del plan deben cumplir con los siguientes ratios de contraste:
 */
export const contrastRequirements = {
  // Texto principal sobre fondo blanco
  primaryText: {
    color: 'text-brand-ink-900',
    background: 'bg-white',
    ratio: '15.13:1',
    status: '✅ Pasa AA'
  },
  
  // Texto secundario sobre fondo blanco
  secondaryText: {
    color: 'text-brand-olive-500',
    background: 'bg-white',
    ratio: '5.38:1',
    status: '✅ Pasa AA'
  },
  
  // Enlaces sobre fondo blanco
  links: {
    color: 'text-brand-teal-500',
    background: 'bg-white',
    ratio: '3.90:1',
    status: '⚠️ Solo texto grande (≥18px)'
  },
  
  // Texto sobre fondos acentuados
  textOnAccent: {
    color: 'text-brand-ink-800',
    background: 'bg-brand-mint-200/60',
    ratio: '9.15:1',
    status: '✅ Pasa AA'
  }
};

/**
 * Estructura del Plan Generado
 * 
 * El plan siempre incluye estas secciones en orden:
 */
export const planStructure = [
  {
    id: 'cover',
    title: 'Portada y Resumen',
    required: true,
    content: ['Título', 'Información del plan', 'Resumen accionable', 'Estadísticas']
  },
  {
    id: 'priorities',
    title: 'Acciones Prioritarias (0-7 días)',
    required: true,
    content: ['Acciones urgentes', 'Acciones de alta prioridad', 'Scripts de conversación']
  },
  {
    id: 'platforms',
    title: 'Guías por Plataforma',
    conditional: 'platforms.length > 0',
    content: ['Configuraciones específicas', 'Pasos detallados', 'Referencias al sitio']
  },
  {
    id: 'scripts',
    title: 'Scripts de Conversación',
    conditional: 'actionsWithScripts.length > 0',
    content: ['Guiones prácticos', 'Consejos de comunicación']
  },
  {
    id: 'checklist',
    title: 'Checklist de Seguimiento (30 días)',
    required: true,
    content: ['Tareas regulares', 'Frecuencias', 'Consejos de seguimiento']
  },
  {
    id: 'resources',
    title: 'Recursos y Dónde Ver Más',
    required: true,
    content: ['Recursos específicos', 'Recursos generales', 'Deep-links y rutas textuales']
  }
];

/**
 * Funciones de Utilidad para el Motor
 */
export const utilityFunctions = {
  /**
   * Determina si una acción debe incluirse basada en la edad
   */
  ageMatch: (actionTags: string[], ageBand: string): boolean => {
    return actionTags.some(tag => 
      tag === `age:${ageBand}` || tag === 'age:all'
    );
  },
  
  /**
   * Determina si una acción ya está implementada
   */
  isImplemented: (actionId: string, measures: Record<string, string[]>): boolean => {
    // Lógica para verificar si la acción ya está implementada
    // basada en las medidas reportadas en el quiz
    return false; // Implementación simplificada
  },
  
  /**
   * Obtiene las prioridades principales basadas en edad y preocupaciones
   */
  getTopPriorities: (ageBand: string, concerns: string[]): string[] => {
    const priorities: string[] = [];
    
    // Prioridades por edad
    switch (ageBand) {
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
    
    // Prioridades por preocupaciones
    concerns.forEach(concern => {
      switch (concern) {
        case 'ciberacoso':
          priorities.push('Prevención de ciberacoso');
          break;
        case 'grooming':
          priorities.push('Detección de grooming');
          break;
        case 'sexting':
          priorities.push('Educación sobre sexting');
          break;
        case 'tiempo_excesivo':
          priorities.push('Manejo del tiempo en pantallas');
          break;
      }
    });
    
    return [...new Set(priorities)].slice(0, 5);
  }
};

export default {
  testCases,
  contrastRequirements,
  planStructure,
  utilityFunctions
};
