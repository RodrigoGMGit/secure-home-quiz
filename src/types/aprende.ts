/**
 * Shared TypeScript types for the /aprende section
 * Used across learning pages and components
 */

import { ReactNode } from 'react';

// Base interfaces for reusable components
export interface BaseCardProps {
  title: string;
  description: string;
  index: number;
  className?: string;
}

export interface FeatureItem {
  text: string;
}

export interface KeyPoint {
  title: string;
  description: string;
}

export interface IntroductionPoint {
  title: string;
  description: string;
}

// Platform-specific types
export interface PlatformInfo {
  name: string;
  description: string;
  features: FeatureItem[];
  icon: React.ComponentType<{ className?: string }>;
  modalContent?: ReactNode;
}

export interface GameInfo {
  name: string;
  description: string;
  ageRating: string;
  features: FeatureItem[];
  considerations?: {
    title: string;
    steps: Array<{
      title: string;
      description: string;
      details: string | ReactNode;
    }>;
  };
}

// Emergency contact types
export interface EmergencyContact {
  title: string;
  description: string;
  phoneNumber: string;
  website?: string;
  additionalInfo?: string;
}

// Modal types
export interface ModalState {
  isOpen: boolean;
  content: ReactNode | null;
  title?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}

export interface ContactFormState {
  data: ContactFormData;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

// Navigation types
export interface LearningPathPage {
  id: string;
  title: string;
  route: string;
  icon: React.ComponentType<{ className?: string }>;
  invitationText: string;
}

export interface LearningPathNavigation {
  current: LearningPathPage;
  previous: LearningPathPage | null;
  next: LearningPathPage | null;
  isFirst: boolean;
  isLast: boolean;
}

// Glossary types
export interface GlossaryEntry {
  term: string;
  definition: string;
  additionalInfo?: {
    title: string;
    items: string[];
  };
}

// Utility types
export interface CardColors {
  card: string;
  icon: string;
  checkmark: string;
}

export interface NumberColors {
  background: string;
  text: string;
}

// Analytics types
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: string;
}
