import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { hasCompletedQuiz } from "@/utils/quizDetection";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  delay?: number;
  className?: string;
  showAnimation?: boolean;
  variant?: 'discover' | 'congrats';
  badgeText?: string;
  bullets?: string[];
}

export function QuizCTA({ 
  title = "¿Qué tan seguro es tu hogar digital?",
  description = "Obtén un diagnóstico rápido y un plan personalizado para tu familia.",
  buttonText = "Hacer el diagnóstico",
  delay = 0.2,
  className = "mb-12 sm:mb-16",
  showAnimation = true,
  variant,
  badgeText,
  bullets
}: QuizCTAProps) {
  // Only render if user hasn't completed any quiz
  if (hasCompletedQuiz()) {
    return null;
  }

  const content = (
    <div
      id="diagnostico"
      className={cn(
        "bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30",
        variant === 'congrats' && "from-white via-brand-mint-200/5 to-white"
      )}
    >
      <div className="max-w-4xl mx-auto text-center">
        {badgeText && (
          <div className="inline-flex items-center px-3 py-1 mb-3 rounded-full border border-brand-mint-200/40 text-xs font-heading text-brand-ink-800 bg-brand-mint-200/20">
            {badgeText}
          </div>
        )}
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-2">
          {title}
        </h2>
        <p className="font-body text-sm sm:text-base text-brand-olive-500 mb-4">
          {description}
        </p>
        {bullets?.length ? (
          <ul className="font-body text-sm text-brand-ink-800 mb-6 space-y-2">
            {bullets.slice(0, 3).map((b, i) => (
              <li key={i} className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2 text-brand-teal-500" />
                {b}
              </li>
            ))}
          </ul>
        ) : null}
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

