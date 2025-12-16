import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ExpressQuizAnswers } from "@/types/quiz";

interface ExpressQuestionStepProps {
  questionNumber: number;
  questionKey: keyof ExpressQuizAnswers;
  questionText: string;
  currentAnswer?: boolean;
  onAnswer: (answer: boolean) => void;
  onNext: () => void;
  canProceed: boolean;
}

const ExpressQuestionStep = ({
  questionNumber,
  questionKey,
  questionText,
  currentAnswer,
  onAnswer,
  onNext,
  canProceed
}: ExpressQuestionStepProps) => {
  const handleAnswer = (answer: boolean) => {
    onAnswer(answer);
    // Auto-proceed after answering
    setTimeout(() => {
      onNext();
    }, 300);
  };

  return (
    <div className="text-center space-y-8 sm:space-y-12">
      {/* Question */}
      <div className="space-y-6 sm:space-y-8">
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 leading-tight max-w-3xl mx-auto">
          {questionText}
        </h2>
      </div>

      {/* Answer Buttons */}
      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto">
          {/* No Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              variant={currentAnswer === false ? "primary-brand" : "outline"}
              size="lg"
              className={`w-full h-16 sm:h-20 text-base sm:text-lg font-heading font-semibold transition-all duration-300 ${
                currentAnswer === false 
                  ? "bg-brand-ink-800 hover:bg-brand-ink-900 text-white shadow-lg" 
                  : "border-2 border-red-500 text-red-600 hover:bg-red-50 hover:border-red-600"
              }`}
              onClick={() => handleAnswer(false)}
            >
              <div className="flex items-center gap-3">
                <XCircle className="h-6 w-6 sm:h-7 sm:w-7" />
                <span>No</span>
              </div>
            </Button>
          </motion.div>

          {/* Yes Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              variant={currentAnswer === true ? "primary-brand" : "outline"}
              size="lg"
              className={`w-full h-16 sm:h-20 text-base sm:text-lg font-heading font-semibold transition-all duration-300 ${
                currentAnswer === true 
                  ? "bg-brand-ink-800 hover:bg-brand-ink-900 text-white shadow-lg" 
                  : "border-2 border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600"
              }`}
              onClick={() => handleAnswer(true)}
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7" />
                <span>Sí</span>
              </div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Encouragement message */}
      <div className="bg-gradient-to-r from-brand-mint-200/30 to-brand-teal-500/10 border border-brand-mint-200/30 rounded-lg p-4 mx-4 sm:mx-0">
        <p className="font-body text-sm sm:text-base text-brand-ink-800 font-medium">
          {questionNumber === 1 && "Cada respuesta te acerca a una familia más protegida"}
          {questionNumber === 2 && "No hay respuestas malas, solo oportunidades para mejorar"}
          {questionNumber === 3 && "Estás dando el primer paso para cuidar lo que más quieres"}
          {questionNumber === 4 && "La información es nuestra primera línea de defensa"}
          {questionNumber === 5 && "Cada familia puede construir un entorno digital seguro"}
          {questionNumber === 6 && "Prevenir empieza por conocer"}
          {questionNumber === 7 && "¡Última pregunta! Estás casi terminando"}
        </p>
      </div>
    </div>
  );
};

export default ExpressQuestionStep;
