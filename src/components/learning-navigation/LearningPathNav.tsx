import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getLearningPathNavigation, learningPathConfig } from '@/data/learningPath';

interface LearningPathNavProps {
  currentRoute: string;
}

const LearningPathNav: React.FC<LearningPathNavProps> = ({ currentRoute }) => {
  const navigation = getLearningPathNavigation(currentRoute);

  if (!navigation) {
    return null;
  }

  const { current, previous, next, isFirst, isLast } = navigation;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30 mt-8 sm:mt-12"
    >
      {/* Invitation Text - use current page invitation; hide if empty */}
      {current?.invitationText && (
        <div className="text-center mb-6 sm:mb-8">
          <p className="font-heading text-lg sm:text-xl md:text-2xl text-brand-ink-900 mb-2">
            {current.invitationText}
          </p>
          <p className="font-body text-sm sm:text-base text-brand-olive-500">
            Continuemos el recorrido
          </p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
        {/* Previous Button */}
        {!isFirst && previous && (
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-heading font-semibold border-brand-teal-500 text-brand-teal-500 hover:bg-brand-mint-200/20 hover:border-brand-teal-500 hover:text-brand-teal-500 transition-smooth"
          >
            <Link to={previous.route} className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Sección Anterior
            </Link>
          </Button>
        )}

        {/* Next Button */}
        {!isLast && next && (
          <Button
            asChild
            variant="primary-brand"
            className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth"
          >
            <Link to={next.route} className="flex items-center">
              Continuar Aprendiendo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default LearningPathNav;
