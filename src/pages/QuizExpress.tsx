import { useExpressQuizState } from '@/hooks/useExpressQuizState';
import { AppShellCard } from '@/components/quiz/AppShellCard';
import ExpressWelcomeStep from '@/components/quiz/express/ExpressWelcomeStep';
import ExpressQuestionStep from '@/components/quiz/express/ExpressQuestionStep';
import ExpressResultsStep from '@/components/quiz/express/ExpressResultsStep';
import GlobalHeader from '@/components/GlobalHeader';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { ExpressQuizAnswers } from '@/types/quiz';

const QuizExpress = () => {
  // Scroll automático al inicio de la página al cambiar de ruta
  useScrollToTop();
  
  const { 
    state, 
    nextStep,
    answerQuestion,
    completeQuiz,
    restartQuiz,
    getResult,
    getCurrentQuestionNumber,
    canProceed,
    track
  } = useExpressQuizState();

  // Questions from manual.md lines 171-183
  const questions: Array<{ key: keyof ExpressQuizAnswers; text: string }> = [
    {
      key: 'q1_time_limits',
      text: '¿Tienes establecido un límite diario de tiempo frente a pantallas para tus hijos e hijas?'
    },
    {
      key: 'q2_content_supervision',
      text: '¿Supervisas regularmente el tipo de contenido que consumen en plataformas como YouTube, TikTok o videojuegos?'
    },
    {
      key: 'q3_parental_controls',
      text: '¿Has activado controles parentales en dispositivos como celulares, tablets, consolas o televisores inteligentes?'
    },
    {
      key: 'q4_platform_knowledge',
      text: '¿Conoces los riesgos de las aplicaciones y redes sociales que las niñas, niños y adolescentes utilizan y cómo funcionan?'
    },
    {
      key: 'q5_device_rules',
      text: '¿Tienen reglas claras sobre el uso de dispositivos durante la noche o en momentos familiares (como comidas)?'
    },
    {
      key: 'q6_report_training',
      text: '¿Has enseñado a tus hijos o hijas a identificar y reportar contenido inapropiado o conductas sospechosas en línea?'
    },
    {
      key: 'q7_monitoring_tools',
      text: '¿Utilizas herramientas de monitoreo o informes de actividad digital para revisar su comportamiento en línea?'
    }
  ];

  const renderStep = () => {
    switch (state.currentStep) {
      case 'welcome':
        return <ExpressWelcomeStep onNext={nextStep} />;
      
      case 'questions':
        const currentQuestionIndex = state.currentQuestionIndex;
        
        // Check if we've answered all questions
        if (currentQuestionIndex >= questions.length) {
          completeQuiz();
          return null;
        }
        
        const currentQuestion = questions[currentQuestionIndex];
        
        return (
          <ExpressQuestionStep
            questionNumber={currentQuestionIndex + 1}
            questionKey={currentQuestion.key}
            questionText={currentQuestion.text}
            currentAnswer={state.answers[currentQuestion.key]}
            onAnswer={(answer) => answerQuestion(currentQuestion.key, answer)}
            onNext={() => {
              // Check if this was the last question
              if (currentQuestionIndex === questions.length - 1) {
                completeQuiz();
              }
              // Note: No need to call nextStep() because answerQuestion already increments the index
            }}
            canProceed={canProceed(currentQuestion.key)}
          />
        );
      
      case 'results':
        return (
          <ExpressResultsStep
            result={getResult()}
            onRestart={restartQuiz}
            onTrack={track}
          />
        );
      
      default:
        return <ExpressWelcomeStep onNext={nextStep} />;
    }
  };

  const getStepNumber = () => {
    switch (state.currentStep) {
      case 'welcome':
        return 0;
      case 'questions':
        return state.currentQuestionIndex + 1; // Use actual index, not calculated
      case 'results':
        return 8; // After all 7 questions
      default:
        return 0;
    }
  };

  const currentStepNumber = getStepNumber();
  const totalSteps = 7;
  const showProgress = currentStepNumber > 0 && currentStepNumber <= totalSteps;

  return (
    <>
      <GlobalHeader />
      <main id="main-content">
        <AppShellCard
          showProgress={showProgress}
          currentStep={currentStepNumber}
          totalSteps={totalSteps}
          progressLabel="Pregunta"
        >
          {renderStep()}
        </AppShellCard>
      </main>
    </>
  );
};

export default QuizExpress;
