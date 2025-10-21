import { PlanInput } from '@/types/plan';

// Fixtures de prueba para validar el motor de reglas
export const testCases: PlanInput[] = [
  // Caso A: Niño pequeño con YouTube y preocupación por contenido inapropiado
  {
    age_band: '6-8',
    platforms: ['youtube'],
    other_platforms: '',
    unknown_platforms: false,
    measures: {
      youtube: ['restricted']
    },
    habits: ['time_limits', 'supervision'],
    signals: [],
    concerns: ['contenido_inapropiado'],
    ab_variant_plan_email: 'A'
  },

  // Caso B: Pre-adolescente con TikTok/WhatsApp y preocupación por ciberacoso
  {
    age_band: '9-12',
    platforms: ['tiktok', 'whatsapp'],
    other_platforms: '',
    unknown_platforms: false,
    measures: {
      tiktok: ['privacy'],
      whatsapp: ['privacy']
    },
    habits: ['device_rules', 'communication'],
    signals: ['cambios_conducta'],
    concerns: ['ciberacoso'],
    ab_variant_plan_email: 'B'
  },

  // Caso C: Adolescente con Instagram y preocupación por grooming + señales sociales
  {
    age_band: '13-15',
    platforms: ['instagram'],
    other_platforms: '',
    unknown_platforms: false,
    measures: {
      instagram: ['privacy']
    },
    habits: ['communication', 'monitoring'],
    signals: ['aislamiento', 'secreto_dispositivos'],
    concerns: ['grooming'],
    ab_variant_plan_email: 'C'
  },

  // Caso D: Adolescente mayor con WhatsApp y preocupación por sexting
  {
    age_band: '16-17',
    platforms: ['whatsapp'],
    other_platforms: '',
    unknown_platforms: false,
    measures: {
      whatsapp: ['privacy', 'group_safety']
    },
    habits: ['communication', 'digital_citizenship'],
    signals: [],
    concerns: ['sexting'],
    ab_variant_plan_email: 'A'
  },

  // Caso E: Niño con Roblox/Minecraft y preocupación por tiempo excesivo
  {
    age_band: '9-12',
    platforms: ['roblox', 'minecraft'],
    other_platforms: '',
    unknown_platforms: false,
    measures: {
      roblox: ['parental_controls'],
      minecraft: ['parental_controls']
    },
    habits: ['time_limits', 'device_rules'],
    signals: ['cambios_conducta'],
    concerns: ['tiempo_excesivo'],
    ab_variant_plan_email: 'B'
  },

  // Caso F: Adolescente con múltiples plataformas y varias preocupaciones
  {
    age_band: '13-15',
    platforms: ['youtube', 'tiktok', 'whatsapp'],
    other_platforms: '',
    unknown_platforms: false,
    measures: {
      youtube: ['restricted'],
      tiktok: ['privacy'],
      whatsapp: ['privacy']
    },
    habits: ['communication', 'monitoring', 'digital_citizenship'],
    signals: ['aislamiento'],
    concerns: ['ciberacoso', 'grooming', 'contenido_inapropiado'],
    ab_variant_plan_email: 'C'
  }
];

// Casos específicos para testing de edge cases
export const edgeCases: PlanInput[] = [
  // Caso sin medidas implementadas
  {
    age_band: '9-12',
    platforms: ['youtube', 'tiktok'],
    other_platforms: '',
    unknown_platforms: false,
    measures: {},
    habits: [],
    signals: [],
    concerns: ['contenido_inapropiado'],
    ab_variant_plan_email: 'A'
  },

  // Caso con todas las señales de alerta
  {
    age_band: '13-15',
    platforms: ['instagram', 'whatsapp'],
    other_platforms: '',
    unknown_platforms: false,
    measures: {},
    habits: [],
    signals: ['aislamiento', 'cambios_conducta', 'secreto_dispositivos'],
    concerns: ['grooming', 'ciberacoso'],
    ab_variant_plan_email: 'B'
  },

  // Caso con todas las medidas ya implementadas
  {
    age_band: '16-17',
    platforms: ['whatsapp', 'tiktok'],
    other_platforms: '',
    unknown_platforms: false,
    measures: {
      whatsapp: ['privacy', 'group_safety'],
      tiktok: ['privacy', 'family_pairing']
    },
    habits: ['communication', 'digital_citizenship', 'monitoring'],
    signals: [],
    concerns: [],
    ab_variant_plan_email: 'C'
  }
];

// Helper para obtener un caso específico por nombre
export function getTestCase(name: string): PlanInput | undefined {
  const caseMap: Record<string, PlanInput> = {
    'niño_youtube': testCases[0],
    'preadolescente_tiktok': testCases[1],
    'adolescente_instagram': testCases[2],
    'adolescente_whatsapp': testCases[3],
    'niño_videojuegos': testCases[4],
    'adolescente_multiple': testCases[5],
    'sin_medidas': edgeCases[0],
    'todas_señales': edgeCases[1],
    'todas_medidas': edgeCases[2]
  };
  
  return caseMap[name];
}

// Helper para validar que un plan generado tiene la estructura esperada
export function validatePlanStructure(plan: any): boolean {
  if (!plan || typeof plan !== 'object') return false;
  
  // Validar summary
  if (!plan.summary || typeof plan.summary !== 'object') return false;
  if (!plan.summary.age_band || !plan.summary.platforms || !Array.isArray(plan.summary.platforms)) return false;
  if (typeof plan.summary.total_actions !== 'number' || typeof plan.summary.urgent_actions !== 'number') return false;
  
  // Validar sections
  if (!plan.sections || !Array.isArray(plan.sections)) return false;
  
  // Validar cada sección
  for (const section of plan.sections) {
    if (!section.id || !section.title || !Array.isArray(section.actions)) return false;
    if (!['urgent', 'high', 'medium', 'low'].includes(section.priority)) return false;
    
    // Validar cada acción
    for (const action of section.actions) {
      if (!action.id || !action.title || !action.description) return false;
      if (!Array.isArray(action.tags)) return false;
    }
  }
  
  return true;
}
