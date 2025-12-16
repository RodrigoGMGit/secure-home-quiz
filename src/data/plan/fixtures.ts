/**
 * Fixtures de Prueba para el Plan Personalizado
 * 
 * Estos fixtures representan diferentes combinaciones de respuestas del quiz
 * y se usan para validar que el motor de composición genera planes correctos.
 */

import { PlanInput } from '@/types/plan';
import { buildPlan } from './rules';

/**
 * Fixture 1: Niño pequeño con YouTube
 * - Edad: 6-8 años
 * - Plataforma: YouTube
 * - Sin preocupaciones específicas
 * - Sin señales de alerta
 */
export const fixture1: PlanInput = {
  age_band: '6-8',
  platforms: ['youtube'],
  other_platforms: '',
  unknown_platforms: false,
  measures: {},
  habits: [],
  signals: [],
  concerns: [],
  ab_variant_plan_email: 'control'
};

/**
 * Fixture 2: Adolescente con múltiples plataformas
 * - Edad: 13-15 años
 * - Plataformas: YouTube, TikTok, WhatsApp
 * - Preocupación: Ciberacoso
 * - Sin señales de alerta
 */
export const fixture2: PlanInput = {
  age_band: '13-15',
  platforms: ['youtube', 'tiktok', 'whatsapp'],
  other_platforms: '',
  unknown_platforms: false,
  measures: {
    youtube: ['restricted'],
    tiktok: ['privacy']
  },
  habits: ['excessive_screen_time'],
  signals: [],
  concerns: ['ciberacoso'],
  ab_variant_plan_email: 'control'
};

/**
 * Fixture 3: Señales de alerta urgentes
 * - Edad: 9-12 años
 * - Plataforma: YouTube
 * - Preocupación: Grooming
 * - Señales: Secreto con dispositivos
 */
export const fixture3: PlanInput = {
  age_band: '9-12',
  platforms: ['youtube'],
  other_platforms: '',
  unknown_platforms: false,
  measures: {},
  habits: [],
  signals: ['secreto_dispositivos'],
  concerns: ['grooming'],
  ab_variant_plan_email: 'control'
};

/**
 * Fixture 4: Adolescente mayor independiente
 * - Edad: 16-17 años
 * - Plataformas: TikTok, WhatsApp
 * - Preocupación: Sexting
 * - Sin señales de alerta
 */
export const fixture4: PlanInput = {
  age_band: '16-17',
  platforms: ['tiktok', 'whatsapp'],
  other_platforms: '',
  unknown_platforms: false,
  measures: {
    tiktok: ['privacy', 'family_pairing'],
    whatsapp: ['privacy']
  },
  habits: [],
  signals: [],
  concerns: ['sexting'],
  ab_variant_plan_email: 'control'
};

/**
 * Fixture 5: Gamer con videojuegos
 * - Edad: 9-12 años
 * - Plataformas: Roblox, Minecraft
 * - Preocupación: Tiempo excesivo en pantallas
 * - Sin señales de alerta
 */
export const fixture5: PlanInput = {
  age_band: '9-12',
  platforms: ['roblox', 'minecraft'],
  other_platforms: '',
  unknown_platforms: false,
  measures: {},
  habits: ['excessive_screen_time'],
  signals: [],
  concerns: ['tiempo_excesivo'],
  ab_variant_plan_email: 'control'
};

/**
 * Fixture 6: Múltiples preocupaciones
 * - Edad: 13-15 años
 * - Plataformas: YouTube, TikTok, WhatsApp, Instagram
 * - Preocupaciones: Ciberacoso, Grooming, Sexting
 * - Señales: Cambios de conducta
 */
export const fixture6: PlanInput = {
  age_band: '13-15',
  platforms: ['youtube', 'tiktok', 'whatsapp', 'instagram'],
  other_platforms: '',
  unknown_platforms: false,
  measures: {
    youtube: ['restricted'],
    tiktok: ['privacy'],
    whatsapp: ['privacy']
  },
  habits: ['excessive_screen_time'],
  signals: ['cambios_conducta'],
  concerns: ['ciberacoso', 'grooming', 'sexting'],
  ab_variant_plan_email: 'control'
};

/**
 * Array de todos los fixtures para iteración fácil
 */
export const allFixtures = [
  { name: 'Niño pequeño con YouTube', input: fixture1 },
  { name: 'Adolescente con múltiples plataformas', input: fixture2 },
  { name: 'Señales de alerta urgentes', input: fixture3 },
  { name: 'Adolescente mayor independiente', input: fixture4 },
  { name: 'Gamer con videojuegos', input: fixture5 },
  { name: 'Múltiples preocupaciones', input: fixture6 }
];

/**
 * Función para generar planes de prueba
 */
export function generateTestPlans() {
  return allFixtures.map(({ name, input }) => ({
    name,
    input,
    plan: buildPlan(input)
  }));
}

/**
 * Función para validar un plan generado
 */
export function validatePlan(plan: ReturnType<typeof buildPlan>) {
  const validation = {
    hasSummary: !!plan.summary,
    hasSections: plan.sections.length > 0,
    hasActions: plan.sections.some(section => section.actions.length > 0),
    summaryComplete: !!(
      plan.summary.age_band &&
      plan.summary.platforms &&
      plan.summary.top_priorities &&
      typeof plan.summary.total_actions === 'number'
    ),
    sectionsValid: plan.sections.every(section => 
      section.id && section.title && Array.isArray(section.actions)
    ),
    actionsValid: plan.sections.every(section =>
      section.actions.every(action =>
        action.id && action.title && action.description
      )
    )
  };

  return {
    isValid: Object.values(validation).every(Boolean),
    validation,
    errors: Object.entries(validation)
      .filter(([_, value]) => !value)
      .map(([key, _]) => key)
  };
}

/**
 * Función para ejecutar todas las validaciones
 */
export function runAllValidations() {
  const testPlans = generateTestPlans();
  
  return testPlans.map(({ name, plan }) => ({
    name,
    validation: validatePlan(plan),
    stats: {
      totalSections: plan.sections.length,
      totalActions: plan.summary.total_actions,
      urgentActions: plan.summary.urgent_actions,
      platforms: plan.summary.platforms.length
    }
  }));
}

export default {
  allFixtures,
  generateTestPlans,
  validatePlan,
  runAllValidations
};
