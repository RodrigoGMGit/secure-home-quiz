import { useState, useEffect, useCallback } from 'react';
import { ExpressQuizStep, ExpressQuizAnswers, ExpressQuizResult, ExpressQuizState } from '@/types/quiz';
import { track, captureAnalyticsData } from '@/utils/analytics';
import { scrollToTop } from '@/utils/scroll';

const EXPRESS_QUIZ_STORAGE_KEY = 'express-quiz-state';
const EXPRESS_ANSWERS_STORAGE_KEY = 'express-quiz-answers';

// Load from localStorage
const loadExpressQuizState = (): ExpressQuizState | null => {
  try {
    const stored = localStorage.getItem(EXPRESS_QUIZ_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

const loadExpressQuizAnswers = (): ExpressQuizAnswers | null => {
  try {
    const stored = localStorage.getItem(EXPRESS_ANSWERS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

// Save to localStorage
const saveExpressQuizState = (state: ExpressQuizState) => {
  try {
    localStorage.setItem(EXPRESS_QUIZ_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore localStorage errors
  }
};

const saveExpressQuizAnswers = (answers: ExpressQuizAnswers) => {
  try {
    localStorage.setItem(EXPRESS_ANSWERS_STORAGE_KEY, JSON.stringify(answers));
  } catch {
    // Ignore localStorage errors
  }
};

// Generate visitor ID
const getOrCreateVisitorId = (): string => {
  try {
    let visitorId = localStorage.getItem('visitor-id');
    if (!visitorId) {
      visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('visitor-id', visitorId);
    }
    return visitorId;
  } catch {
    return `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
};

// Calculate score and protection level
const calculateResult = (answers: ExpressQuizAnswers): ExpressQuizResult => {
  // Count only answered questions where answer is true
  const score = Object.values(answers).filter(answer => answer === true).length;
  
  return {
    score,
    answers // NUEVO: pasar answers completas
  };
};

export function useExpressQuizState() {
  const [state, setState] = useState<ExpressQuizState>(() => {
    const stored = loadExpressQuizState();
    if (stored) return stored;
    
    return {
      currentStep: 'welcome',
      currentQuestionIndex: 0, // Start at first question
      answers: {
        q1_time_limits: undefined,
        q2_content_supervision: undefined,
        q3_parental_controls: undefined,
        q4_platform_knowledge: undefined,
        q5_device_rules: undefined,
        q6_report_training: undefined,
        q7_monitoring_tools: undefined,
      },
      visitorId: getOrCreateVisitorId(),
      startTime: Date.now()
    };
  });

  // Auto-save state on changes
  useEffect(() => {
    saveExpressQuizState(state);
    saveExpressQuizAnswers(state.answers);
  }, [state]);

  // Track session start on mount
  useEffect(() => {
    const analyticsData = captureAnalyticsData();
    track('express_quiz_session_start', analyticsData);
  }, []);

  const updateAnswers = useCallback((updates: Partial<ExpressQuizAnswers>) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, ...updates }
    }));
  }, []);

  const goToStep = useCallback((step: ExpressQuizStep) => {
    setState(prev => ({
      ...prev,
      currentStep: step
    }));
    track('express_quiz_step_view', { step });
    scrollToTop();
  }, []);

  const nextStep = useCallback(() => {
    const stepOrder: ExpressQuizStep[] = ['welcome', 'questions', 'results'];
    const currentIndex = stepOrder.indexOf(state.currentStep);
    
    if (currentIndex < stepOrder.length - 1) {
      const nextStepValue = stepOrder[currentIndex + 1];
      setState(prev => ({
        ...prev,
        currentStep: nextStepValue,
        currentQuestionIndex: nextStepValue === 'questions' ? 0 : prev.currentQuestionIndex
      }));
      track('express_quiz_step_view', { step: nextStepValue });
      scrollToTop();
    }
  }, [state.currentStep]);

  const answerQuestion = useCallback((questionKey: keyof ExpressQuizAnswers, answer: boolean) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionKey]: answer },
      currentQuestionIndex: prev.currentQuestionIndex + 1 // Move to next question
    }));
    track('express_quiz_question_answered', { 
      question: questionKey, 
      answer,
      currentQuestion: state.currentQuestionIndex + 1
    });
  }, [state.currentQuestionIndex]);

  const completeQuiz = useCallback(() => {
    const result = calculateResult(state.answers);
    track('express_quiz_completed', {
      score: result.score,
      level: result.level,
      duration: Date.now() - state.startTime
    });
    goToStep('results');
  }, [state.answers, state.startTime, goToStep]);

  const restartQuiz = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: 'welcome',
      currentQuestionIndex: 0, // Reset to first question
      answers: {
        q1_time_limits: undefined,
        q2_content_supervision: undefined,
        q3_parental_controls: undefined,
        q4_platform_knowledge: undefined,
        q5_device_rules: undefined,
        q6_report_training: undefined,
        q7_monitoring_tools: undefined,
      },
      startTime: Date.now()
    }));
    track('express_quiz_restarted');
  }, []);

  const getResult = useCallback((): ExpressQuizResult => {
    return calculateResult(state.answers);
  }, [state.answers]);

  const getCurrentQuestionNumber = useCallback((): number => {
    // Return the current question index + 1 (for display: 1-7)
    return state.currentQuestionIndex + 1;
  }, [state.currentQuestionIndex]);

  const canProceed = useCallback((questionKey: keyof ExpressQuizAnswers): boolean => {
    return state.answers[questionKey] !== undefined;
  }, [state.answers]);

  return {
    state,
    updateAnswers,
    nextStep,
    answerQuestion,
    completeQuiz,
    restartQuiz,
    getResult,
    getCurrentQuestionNumber,
    canProceed,
    track
  };
}
