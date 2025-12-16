import React from 'react';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const DiagnosisCompletedBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex justify-center"
    >
      {/* Banner principal */}
      <div className="bg-gradient-to-r from-brand-mint-200/60 via-brand-mint-200/40 to-brand-teal-500/10 rounded-lg p-2 sm:p-3 shadow-soft border border-brand-mint-200/30 max-w-md mx-auto">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {/* Icono de trofeo */}
          <div className="flex-shrink-0">
            <div className="p-1.5 sm:p-2 bg-gradient-to-br from-brand-teal-500/30 to-brand-teal-500/20 rounded-full shadow-soft">
              <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500" />
            </div>
          </div>
          
          {/* Texto */}
          <div className="flex-1 text-center">
            <h2 className="font-heading text-sm sm:text-base font-bold text-brand-teal-500 uppercase tracking-wide">
              ¡DIAGNÓSTICO COMPLETADO!
            </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DiagnosisCompletedBanner;
