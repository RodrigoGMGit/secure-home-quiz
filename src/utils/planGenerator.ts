import { QuizAnswers, Platform, AgeBand, SecurityConfig, EmergencyResources } from '@/types/quiz';

export interface SecurityAnalysis {
  level: 'protected' | 'in-process' | 'at-risk';
  gaps: string[];
  strengths: string[];
}

export interface EmergencyAnalysis {
  preparedness: 'high' | 'medium' | 'low';
  missing_resources: string[];
  available_resources: string[];
}

export function analyzeSecurity(config?: SecurityConfig): SecurityAnalysis {
  if (!config) {
    return {
      level: 'at-risk',
      gaps: ['supervision', 'communication', 'safesearch', 'family_rules', 'legal_knowledge'],
      strengths: []
    };
  }

  const gaps: string[] = [];
  const strengths: string[] = [];

  // Analizar supervisión
  if (config.supervision === 'yes_supervised') {
    strengths.push('supervision');
  } else if (config.supervision === 'no_unsupervised' || config.supervision === 'not_sure') {
    gaps.push('supervision');
  }

  // Analizar comunicación
  if (config.communication === 'yes_regular') {
    strengths.push('communication');
  } else if (config.communication === 'no_rarely') {
    gaps.push('communication');
  }

  // Analizar SafeSearch
  if (config.safesearch === 'yes_active') {
    strengths.push('safesearch');
  } else if (config.safesearch === 'no_inactive' || config.safesearch === 'dont_know') {
    gaps.push('safesearch');
  }

  // Analizar reglas familiares
  if (config.family_rules === 'yes_clear') {
    strengths.push('family_rules');
  } else if (config.family_rules === 'some_inconsistent' || config.family_rules === 'no_formal') {
    gaps.push('family_rules');
  }

  // Analizar conocimiento legal
  if (config.legal_knowledge === 'yes_know') {
    strengths.push('legal_knowledge');
  } else if (config.legal_knowledge === 'heard_dont_use' || config.legal_knowledge === 'no_idea') {
    gaps.push('legal_knowledge');
  }

  // Determinar nivel de protección
  let level: 'protected' | 'in-process' | 'at-risk';
  if (strengths.length >= 4) {
    level = 'protected';
  } else if (strengths.length >= 2) {
    level = 'in-process';
  } else {
    level = 'at-risk';
  }

  return { level, gaps, strengths };
}

export function analyzeEmergencyPreparedness(resources?: EmergencyResources): EmergencyAnalysis {
  if (!resources) {
    return {
      preparedness: 'low',
      missing_resources: ['emergency_action', 'report_resources', 'emotional_support', 'preventive_prep'],
      available_resources: []
    };
  }

  const missing_resources: string[] = [];
  const available_resources: string[] = [];

  // Analizar acción de emergencia
  if (resources.emergency_action === 'know_exactly') {
    available_resources.push('emergency_action');
  } else if (resources.emergency_action === 'general_idea' || resources.emergency_action === 'no_idea') {
    missing_resources.push('emergency_action');
  }

  // Analizar recursos de reporte
  if (resources.report_resources === 'yes_know') {
    available_resources.push('report_resources');
  } else if (resources.report_resources === 'heard_dont_use' || resources.report_resources === 'no_idea') {
    missing_resources.push('report_resources');
  }

  // Analizar apoyo emocional
  if (resources.emotional_support === 'yes_know_resources') {
    available_resources.push('emotional_support');
  } else if (resources.emotional_support === 'general_idea' || resources.emotional_support === 'dont_know') {
    missing_resources.push('emotional_support');
  }

  // Analizar preparación preventiva
  if (resources.preventive_prep === 'yes_specific') {
    available_resources.push('preventive_prep');
  } else if (resources.preventive_prep === 'general_talk' || resources.preventive_prep === 'no_conversation') {
    missing_resources.push('preventive_prep');
  }

  // Determinar nivel de preparación
  let preparedness: 'high' | 'medium' | 'low';
  if (available_resources.length >= 3) {
    preparedness = 'high';
  } else if (available_resources.length >= 1) {
    preparedness = 'medium';
  } else {
    preparedness = 'low';
  }

  return { preparedness, missing_resources, available_resources };
}
