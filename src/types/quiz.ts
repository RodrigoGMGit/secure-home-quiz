export type QuizStep = 
  | 'welcome' 
  | 'gender' 
  | 'age'
  | 'platforms' 
  | 'measures' 
  | 'habits_signals' 
  | 'concerns' 
  | 'done';

export type ChildGender = 'Niño' | 'Niña' | 'Prefiero no especificar';

export type AgeBand = '6-8' | '9-12' | '13-15' | '16-17';

export type Platform = 'whatsapp' | 'youtube' | 'instagram' | 'roblox' | 'minecraft' | 'tiktok' | 'otros';

export type ABVariant = 'A' | 'B' | 'C';

export interface QuizAnswers {
  child_gender: ChildGender;
  age_band: AgeBand;
  platforms: Platform[];
  other_platforms?: string;
  unknown_platforms?: boolean;
  measures?: {
    [key in Platform]?: string[];
  };
  habits: string[];
  signals: string[];
  concerns: string[];
}

export interface PlanInput {
  age_band: AgeBand;
  platforms: Platform[];
  other_platforms?: string;
  unknown_platforms: boolean;
  measures: {
    [key in Platform]?: string[];
  };
  habits: string[];
  signals: string[];
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