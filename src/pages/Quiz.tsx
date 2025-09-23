import { useQuizState } from '@/hooks/useQuizState';
import { AppShellCard } from '@/components/quiz/AppShellCard';
import { WelcomeStep } from '@/components/quiz/steps/WelcomeStep';
import { GenderStep } from '@/components/quiz/steps/GenderStep';
import { AgeStep } from '@/components/quiz/steps/AgeStep';
import { PlatformsStep } from '@/components/quiz/steps/PlatformsStep';
import { MeasuresStep } from '@/components/quiz/steps/MeasuresStep';
import { HabitsSignalsStep } from '@/components/quiz/steps/HabitsSignalsStep';
import { ConcernsStep } from '@/components/quiz/steps/ConcernsStep';
import { DoneStep } from '@/components/quiz/steps/DoneStep';
import { Platform } from '@/types/quiz';

const Quiz = () => {
  const { 
    state, 
    updateAnswers, 
    nextStep, 
    previousStep, 
    completeQuiz, 
    getStepNumber,
    track 
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
            initialUnknownPlatforms={state.answers.unknown_platforms}
            ageband={state.answers.age_band}
            onNext={(data) => {
              updateAnswers(data);
              nextStep();
            }}
            onPrevious={previousStep}
            onTrack={track}
          />
        );
      
      case 'measures':
        return (
          <MeasuresStep
            platforms={state.answers.platforms || []}
            initialMeasures={state.answers.measures}
            onNext={(measures) => {
              updateAnswers({ measures });
              nextStep();
            }}
            onPrevious={previousStep}
            onTrack={track}
          />
        );
      
      case 'habits_signals':
        return (
          <HabitsSignalsStep
            initialHabits={state.answers.habits}
            initialSignals={state.answers.signals}
            onNext={(data) => {
              updateAnswers(data);
              nextStep();
            }}
            onPrevious={previousStep}
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
            onComplete={completeQuiz}
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
  const showBackButton = currentStepNumber > 1 && currentStepNumber < totalSteps;

  return (
    <AppShellCard
      showProgress={showProgress}
      currentStep={currentStepNumber}
      totalSteps={totalSteps}
      onBack={showBackButton ? previousStep : undefined}
      showBackButton={showBackButton}
    >
      {renderStep()}
    </AppShellCard>
  );
};

export default Quiz;