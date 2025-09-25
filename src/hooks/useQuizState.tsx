import { useState, useEffect, useCallback } from 'react';
import { QuizStep, QuizState, QuizAnswers, PlanInput } from '@/types/quiz';
import { 
  saveQuizState, 
  loadQuizState, 
  saveQuizAnswers,
  loadQuizAnswers,
  getOrCreateVisitorId, 
  getOrCreateABVariant,
  savePlanInput,
  clearQuizData
} from '@/utils/localStorage';
import { track, captureAnalyticsData } from '@/utils/analytics';
import { scrollToTop, scrollToTopDelayed } from '@/utils/scroll';

export function useQuizState() {
  const [state, setState] = useState<QuizState>(() => {
    const stored = loadQuizState();
    if (stored) return stored;
    
    return {
      currentStep: 'welcome',
      answers: {
        child_gender: undefined as ChildGender,
        age_band: undefined as AgeBand,
        platforms: [],
        habits: [],
        signals: [],
        concerns: []
      },
      visitorId: getOrCreateVisitorId(),
      abVariant: getOrCreateABVariant(),
      startTime: Date.now()
    };
  });

  // Auto-save state on changes
  useEffect(() => {
    saveQuizState(state);
    saveQuizAnswers(state.answers);
  }, [state]);

  // Track session start on mount
  useEffect(() => {
    const analyticsData = captureAnalyticsData();
    track('session_start', analyticsData);
  }, []);

  const updateAnswers = useCallback((updates: Partial<QuizAnswers>) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, ...updates }
    }));
  }, []);

  const goToStep = useCallback((step: QuizStep) => {
    setState(prev => ({
      ...prev,
      currentStep: step
    }));
    track('quiz_step_view', { step });
    
    // Scroll to top when changing steps - enhanced for mobile
    scrollToTop();
  }, []);

  const goToStepWithDelay = useCallback((step: QuizStep) => {
    setState(prev => ({
      ...prev,
      currentStep: step
    }));
    track('quiz_step_view', { step });
    
    // Use delayed scroll for complex navigation scenarios
    scrollToTopDelayed();
  }, []);

  const nextStep = useCallback(() => {
    const stepOrder: QuizStep[] = ['welcome', 'gender', 'age', 'platforms', 'measures', 'habits_signals', 'concerns', 'done'];
    const currentIndex = stepOrder.indexOf(state.currentStep);
    
    if (currentIndex < stepOrder.length - 1) {
      const nextStep = stepOrder[currentIndex + 1];
      
      // Skip measures if no platforms selected
      if (nextStep === 'measures' && !state.answers.platforms?.length) {
        goToStepWithDelay('habits_signals');
      } else {
        goToStep(nextStep);
      }
    }
  }, [state.currentStep, state.answers.platforms, goToStep, goToStepWithDelay]);

  const nextStepWithData = useCallback((data: Partial<QuizAnswers>) => {
    const stepOrder: QuizStep[] = ['welcome', 'gender', 'age', 'platforms', 'measures', 'habits_signals', 'concerns', 'done'];
    const currentIndex = stepOrder.indexOf(state.currentStep);
    
    if (currentIndex < stepOrder.length - 1) {
      const nextStep = stepOrder[currentIndex + 1];
      
      // Skip measures if no platforms selected (using fresh data)
      if (nextStep === 'measures' && !data.platforms?.length) {
        goToStepWithDelay('habits_signals');
      } else {
        goToStep(nextStep);
      }
    }
  }, [state.currentStep, goToStep, goToStepWithDelay]);

  const previousStep = useCallback(() => {
    const stepOrder: QuizStep[] = ['welcome', 'gender', 'age', 'platforms', 'measures', 'habits_signals', 'concerns', 'done'];
    const currentIndex = stepOrder.indexOf(state.currentStep);
    
    if (currentIndex > 0) {
      let prevStep = stepOrder[currentIndex - 1];
      
      // Skip measures if no platforms selected when going back
      if (prevStep === 'measures' && !state.answers.platforms?.length) {
        prevStep = stepOrder[currentIndex - 2];
      }
      
      if (prevStep) {
        goToStep(prevStep);
      }
    }
  }, [state.currentStep, state.answers.platforms, goToStep]);

  const completeQuiz = useCallback(() => {
    const planInput: PlanInput = {
      age_band: state.answers.age_band || '9-12',
      platforms: state.answers.platforms || [],
      unknown_platforms: !!state.answers.unknown_platforms,
      measures: state.answers.measures || {},
      habits: state.answers.habits || [],
      signals: state.answers.signals || [],
      concerns: state.answers.concerns || [],
      ab_variant_plan_email: state.abVariant
    };

    savePlanInput(planInput);
    
    track('quiz_complete', {
      age_band: planInput.age_band,
      platforms_selected: planInput.platforms,
      concerns: planInput.concerns,
      quiz_duration: Date.now() - state.startTime
    });

    goToStep('done');
  }, [state.answers, state.abVariant, state.startTime, goToStep]);

  const canProceed = useCallback(() => {
    switch (state.currentStep) {
      case 'gender':
        return !!state.answers.child_gender; // Gender is required
      case 'age':
        return !!state.answers.age_band; // Age is required
      case 'platforms':
        return (state.answers.platforms?.length || 0) > 0 || !!state.answers.unknown_platforms; // At least one platform or unknown
      case 'measures':
        return true; // Measures step is optional (can be skipped)
      case 'habits_signals':
        return (state.answers.habits?.length || 0) > 0 || (state.answers.signals?.length || 0) > 0; // At least one habit or signal
      case 'concerns':
        return (state.answers.concerns?.length || 0) > 0; // At least one concern
      default:
        return true; // Welcome and done steps
    }
  }, [state.currentStep, state.answers]);

  const getStepNumber = useCallback(() => {
    const stepNumbers = {
      'welcome': 0,
      'gender': 1,
      'age': 2,
      'platforms': 3,
      'measures': 4,
      'habits_signals': 5,
      'concerns': 6,
      'done': 7
    };
    return stepNumbers[state.currentStep];
  }, [state.currentStep]);

  const restartQuiz = useCallback(() => {
    // Limpiar el estado local
    clearQuizData();
    
    // Resetear el estado a valores iniciales
    setState({
      currentStep: 'welcome',
      answers: {
        child_gender: undefined as ChildGender,
        age_band: undefined as AgeBand,
        platforms: [],
        habits: [],
        signals: [],
        concerns: []
      },
      visitorId: getOrCreateVisitorId(),
      abVariant: getOrCreateABVariant(),
      startTime: Date.now()
    });
    
    track('quiz_restart', { 
      previous_step: state.currentStep,
      previous_answers_count: Object.keys(state.answers).length
    });
    
    // Scroll to top when restarting quiz - enhanced for mobile
    scrollToTop();
  }, [state.currentStep, state.answers]);

  return {
    state,
    updateAnswers,
    goToStep,
    nextStep,
    nextStepWithData,
    previousStep,
    completeQuiz,
    canProceed,
    getStepNumber,
    restartQuiz,
    track
  };
}