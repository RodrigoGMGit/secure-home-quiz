import { QuizState, QuizAnswers, PlanInput, ABVariant } from '@/types/quiz';

export function generateVisitorId(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function getOrCreateVisitorId(): string {
  const stored = localStorage.getItem('quiz_visitor_id');
  if (stored) return stored;
  
  const newId = generateVisitorId();
  localStorage.setItem('quiz_visitor_id', newId);
  return newId;
}

export function saveQuizState(state: QuizState): void {
  localStorage.setItem('quiz_state_v1', JSON.stringify(state));
}

export function loadQuizState(): QuizState | null {
  try {
    const stored = localStorage.getItem('quiz_state_v1');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function saveQuizAnswers(answers: QuizAnswers): void {
  localStorage.setItem('quiz_answers_v1', JSON.stringify(answers));
}

export function loadQuizAnswers(): QuizAnswers | null {
  try {
    const stored = localStorage.getItem('quiz_answers_v1');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function getOrCreateABVariant(): ABVariant {
  const stored = localStorage.getItem('ab_variant_plan_email');
  if (stored && ['A', 'B', 'C'].includes(stored)) {
    return stored as ABVariant;
  }
  
  const variants: ABVariant[] = ['A', 'B', 'C'];
  const randomVariant = variants[Math.floor(Math.random() * variants.length)];
  localStorage.setItem('ab_variant_plan_email', randomVariant);
  return randomVariant;
}

export function savePlanInput(planInput: PlanInput): void {
  localStorage.setItem('quiz_plan_input_v1', JSON.stringify(planInput));
}

export function clearQuizData(): void {
  localStorage.removeItem('quiz_state_v1');
  localStorage.removeItem('quiz_answers_v1');
  // Keep visitor_id and ab_variant for consistency
}
