import { useQuizState } from '@/hooks/useQuizState';
import { AppShellCard } from '@/components/quiz/AppShellCard';
import { WelcomeStep } from '@/components/quiz/steps/WelcomeStep';
import { GenderStep } from '@/components/quiz/steps/GenderStep';
import { AgeStep } from '@/components/quiz/steps/AgeStep';
import { PlatformsStep } from '@/components/quiz/steps/PlatformsStep';
import { SecurityConfigStep } from '@/components/quiz/steps/SecurityConfigStep';
import { EmergencyResourcesStep } from '@/components/quiz/steps/EmergencyResourcesStep';
import { ConcernsStep } from '@/components/quiz/steps/ConcernsStep';
import { DoneStep } from '@/components/quiz/steps/DoneStep';
import { Platform } from '@/types/quiz';
import GlobalHeader from '@/components/GlobalHeader';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Quiz = () => {
  // Scroll automático al inicio de la página al cambiar de ruta
  useScrollToTop();
  
  const { 
    state, 
    updateAnswers, 
    nextStep, 
    nextStepWithData,
    previousStep, 
    completeQuiz, 
    getStepNumber,
    restartQuiz,
    track,
    canProceed
  } = useQuizState();

  const renderStep = () => {
    switch (state.currentStep) {
      case 'welcome':
        return <WelcomeStep onNext={nextStep} />;
      
      case 'gender':
        return (
          <GenderStep
            initialGender={state.answers.child_gender}
            onNext={(data) => {
              updateAnswers({ child_gender: data.gender });
              nextStep();
            }}
            onPrevious={previousStep}
          />
        );
      
      case 'age':
        return (
          <AgeStep
            initialAge={state.answers.age_band}
            onNext={(data) => {
              updateAnswers({ age_band: data.age });
              nextStep();
            }}
            onPrevious={previousStep}
          />
        );
      
      case 'platforms':
        return (
          <PlatformsStep
            initialPlatforms={state.answers.platforms}
            initialOtherPlatforms={state.answers.other_platforms}
            initialUnknownPlatforms={state.answers.unknown_platforms}
            ageband={state.answers.age_band}
            onNext={(data) => {
              updateAnswers(data);
              // Call nextStep with updated data to ensure correct navigation
              nextStepWithData(data);
            }}
            onPrevious={previousStep}
            onTrack={track}
          />
        );
      
      case 'security_config':
        return (
          <SecurityConfigStep
            initialConfig={state.answers.securityConfig}
            childGender={state.answers.child_gender}
            onNext={(config) => {
              updateAnswers({ securityConfig: config });
              nextStep();
            }}
            onPrevious={previousStep}
            onTrack={track}
          />
        );
      
      case 'emergency_resources':
        return (
          <EmergencyResourcesStep
            initialResources={state.answers.emergencyResources}
            childGender={state.answers.child_gender}
            onNext={(resources) => {
              updateAnswers({ emergencyResources: resources });
              nextStep();
            }}
            onPrevious={previousStep}
            onTrack={track}
          />
        );
      
      case 'concerns':
        return (
          <ConcernsStep
            initialConcerns={state.answers.concerns}
            ageband={state.answers.age_band}
            onNext={(concerns) => {
              updateAnswers({ concerns });
              nextStep();
            }}
            onPrevious={previousStep}
            onTrack={track}
          />
        );
      
      case 'done':
        return (
          <DoneStep
            abVariant={state.abVariant}
            answers={state.answers}
            onComplete={completeQuiz}
            onRestart={restartQuiz}
            onTrack={track}
          />
        );
      
      default:
        return <WelcomeStep onNext={nextStep} />;
    }
  };

  const currentStepNumber = getStepNumber();
  const totalSteps = 7;
  const showProgress = currentStepNumber > 0 && currentStepNumber < totalSteps;

  return (
    <>
      <GlobalHeader />
      <main id="main-content">
        <AppShellCard
          showProgress={showProgress}
          currentStep={currentStepNumber}
          totalSteps={totalSteps}
        >
          {renderStep()}
        </AppShellCard>
      </main>
    </>
  );
};

export default Quiz;