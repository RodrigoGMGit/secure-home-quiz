export type QuizStep = 
  | 'welcome' 
  | 'gender' 
  | 'age'
  | 'platforms' 
  | 'security_config' 
  | 'emergency_resources' 
  | 'concerns' 
  | 'done';

export type ExpressQuizStep = 'welcome' | 'questions' | 'results';

export interface ExpressQuizAnswers {
  q1_time_limits: boolean | undefined;      // Límite diario de tiempo frente a pantallas
  q2_content_supervision: boolean | undefined; // Supervisión de contenido
  q3_parental_controls: boolean | undefined;   // Controles parentales activados
  q4_platform_knowledge: boolean | undefined;  // Conocimiento de riesgos
  q5_device_rules: boolean | undefined;        // Reglas durante comidas/noche
  q6_report_training: boolean | undefined;     // Enseñanza sobre reportar contenido
  q7_monitoring_tools: boolean | undefined;    // Herramientas de monitoreo
}

export type ProtectionLevel = 'protected' | 'in-process' | 'at-risk';

export interface ExpressQuizState {
  currentStep: ExpressQuizStep;
  currentQuestionIndex: number; // Track which question (0-6)
  answers: ExpressQuizAnswers;
  visitorId: string;
  startTime: number;
}

export interface ExpressQuizResult {
  score: number;
  answers: ExpressQuizAnswers; // NUEVO: incluir answers para análisis
}

export interface SecurityConfig {
  supervision?: 'yes_supervised' | 'no_unsupervised' | 'not_sure';
  communication?: 'yes_regular' | 'no_rarely';
  safesearch?: 'yes_active' | 'no_inactive' | 'dont_know';
  family_rules?: 'yes_clear' | 'some_inconsistent' | 'no_formal';
  legal_knowledge?: 'yes_know' | 'heard_dont_use' | 'no_idea';
}

export interface EmergencyResources {
  emergency_action?: 'know_exactly' | 'general_idea' | 'no_idea';
  report_resources?: 'yes_know' | 'heard_dont_use' | 'no_idea';
  emotional_support?: 'yes_know_resources' | 'general_idea' | 'dont_know';
  preventive_prep?: 'yes_specific' | 'general_talk' | 'no_conversation';
}

export type ChildGender = 'Niño' | 'Niña' | 'Prefiero no especificar';

export type AgeBand = '6-8' | '9-12' | '13-15' | '16-17';

export type Platform = 
  | 'whatsapp' 
  | 'youtube' 
  | 'youtube-kids'
  | 'instagram' 
  | 'roblox' 
  | 'minecraft' 
  | 'tiktok' 
  | 'snapchat'
  | 'facebook'
  | 'discord'
  | 'fortnite'
  | 'free-fire'
  | 'otros';

export type ABVariant = 'A' | 'B' | 'C';

export interface QuizAnswers {
  child_gender: ChildGender;
  age_band: AgeBand;
  platforms: Platform[];
  other_platforms?: string;
  unknown_platforms?: boolean;
  inappropriatePlatforms?: Platform[];
  securityConfig?: SecurityConfig;
  emergencyResources?: EmergencyResources;
  concerns: string[];
}

export interface PlanInput {
  age_band: AgeBand;
  platforms: Platform[];
  other_platforms?: string;
  unknown_platforms: boolean;
  inappropriatePlatforms?: Platform[];
  securityConfig?: SecurityConfig;
  emergencyResources?: EmergencyResources;
  concerns: string[];
  ab_variant_plan_email: ABVariant;
}

export interface QuizState {
  currentStep: QuizStep;
  answers: QuizAnswers;
  visitorId: string;
  abVariant: ABVariant;
  startTime: number;
}

export interface AnalyticsData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  referrer?: string;
  device_type: 'mobile' | 'tablet' | 'desktop';
  os?: string;
  browser?: string;
  lang: string;
  connection?: string;
  first_visit: boolean;
  inapp_browser: boolean;
}