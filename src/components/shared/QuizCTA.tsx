import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { hasCompletedQuiz } from "@/utils/quizDetection";

interface QuizCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  delay?: number;
  className?: string;
  showAnimation?: boolean;
}

export function QuizCTA({ 
  title = "¿Qué tan seguro es tu hogar digital?",
  description = "Obtén un diagnóstico rápido y un plan personalizado para tu familia.",
  buttonText = "Hacer el diagnóstico",
  delay = 0.2,
  className = "mb-12 sm:mb-16",
  showAnimation = true
}: QuizCTAProps) {
  // Only render if user hasn't completed any quiz
  if (hasCompletedQuiz()) {
    return null;
  }

  const content = (
    <div id="diagnostico" className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-2">
          {title}
        </h2>
        <p className="font-body text-sm sm:text-base text-brand-olive-500 mb-6">
          {description}
        </p>
        <Button asChild variant="primary-brand" className="px-8 py-3">
          <Link to="/quiz">{buttonText}</Link>
        </Button>
      </div>
    </div>
  );

  if (!showAnimation) {
    return <div className={className}>{content}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {content}
    </motion.div>
  );
}

