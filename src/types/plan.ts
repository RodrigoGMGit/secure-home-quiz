import { AgeBand, Platform } from './quiz';

export interface PlanAction {
  id: string;
  title: string;
  description: string;
  tags: string[];
  severity?: 'high' | 'medium' | 'low';
  platform?: Platform;
  steps?: string[];
  conversationScript?: string;
}

export interface PlanSection {
  id: string;
  title: string;
  description?: string;
  actions: PlanAction[];
  icon?: string;
  priority: 'urgent' | 'high' | 'medium' | 'low';
}

export interface PlanSummary {
  age_band: AgeBand;
  platforms: Platform[];
  top_priorities: string[];
  total_actions: number;
  urgent_actions: number;
}

export interface Plan {
  summary: PlanSummary;
  sections: PlanSection[];
  generated_at: string;
}

export interface ContentBlock {
  id: string;
  title: string;
  body: string;
  actions: PlanAction[];
  tags: string[];
  refs: {
    manualHeading: string;
    manualSection?: string;
  };
}

// Re-export PlanInput from quiz types for convenience
export type { PlanInput } from './quiz';
