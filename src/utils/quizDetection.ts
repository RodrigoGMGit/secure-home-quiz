import { ExpressQuizState } from '@/types/quiz';

const EXPRESS_QUIZ_STORAGE_KEY = 'express-quiz-state';
const PLAN_INPUT_STORAGE_KEY = 'quiz_plan_input_v1';

/**
 * Checks if the user has completed any quiz (express or personalized)
 * @returns true if user has completed any quiz, false otherwise
 */
export function hasCompletedQuiz(): boolean {
  // Check personalized quiz completion
  const planInput = localStorage.getItem(PLAN_INPUT_STORAGE_KEY);
  if (planInput) {
    try {
      const parsed = JSON.parse(planInput);
      // If plan input exists and has required fields, quiz is completed
      if (parsed && parsed.age_band && parsed.platforms) {
        return true;
      }
    } catch {
      // Invalid JSON, treat as not completed
    }
  }
  
  // Check express quiz completion
  const expressState = localStorage.getItem(EXPRESS_QUIZ_STORAGE_KEY);
  if (expressState) {
    try {
      const state: ExpressQuizState = JSON.parse(expressState);
      // If express quiz reached results step, it's completed
      if (state.currentStep === 'results') {
        return true;
      }
    } catch {
      // Invalid JSON, treat as not completed
    }
  }
  
  return false;
}

