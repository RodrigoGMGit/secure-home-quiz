import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExpressQuizResult, ExpressQuizAnswers } from "@/types/quiz";
import { questionMapping } from "@/data/expressQuizMapping";
import DiagnosisCompletedBanner from "./DiagnosisCompletedBanner";

interface ExpressResultsStepProps {
  result: ExpressQuizResult;
  onRestart: () => void;
  onTrack: (event: string, data?: any) => void;
}

const ExpressResultsStep = ({ result, onRestart, onTrack }: ExpressResultsStepProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Función helper para obtener áreas de mejora
  const getAreasToImprove = (answers: ExpressQuizAnswers) => {
    const areas: Array<{
      key: keyof ExpressQuizAnswers;
      title: string;
      learnHow: string;
      icon: any;
    }> = [];

    Object.entries(answers).forEach(([key, value]) => {
      if (value === false) {
        const mapping = questionMapping[key as keyof ExpressQuizAnswers];
        areas.push({
          key: key as keyof ExpressQuizAnswers,
          ...mapping.negativeResponse
        });
      }
    });

    return areas;
  };

  const areasToImprove = getAreasToImprove(result.answers);

  // Funciones de navegación del carrusel
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? areasToImprove.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === areasToImprove.length - 1 ? 0 : prev + 1));
  };

  // Funciones para manejo de swipe en móvil
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && areasToImprove.length > 1) {
      goToNext();
    }
    if (isRightSwipe && areasToImprove.length > 1) {
      goToPrevious();
    }
  };

  const handlePersonalizedQuiz = () => {
    onTrack('express_to_personalized_conversion', { 
      expressScore: result.score,
      areasToImprove: areasToImprove.map(a => a.key)
    });
  };

  const handleTuFamiliaClick = () => {
    onTrack('express_tu_familia_clicked', { 
      expressScore: result.score,
      areasToImprove: areasToImprove.map(a => a.key)
    });
  };

  const handleRestart = () => {
    // Scroll hacia arriba antes de reiniciar
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onRestart();
  };

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Banner de Diagnóstico Completado */}
      <DiagnosisCompletedBanner />

       {/* Main Title Section */}
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.2 }}
         className="text-center space-y-6 sm:space-y-8"
       >
         {/* Main Title */}
         <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-ink-900 leading-tight">
           {areasToImprove.length === 0 
             ? "¡Excelente! Tu familia está bien encaminada"
             : "¡Muy bien! Solo necesitamos fortalecer algunas áreas"
           }
         </h2>
         
         {/* Subtitle */}
         <p className="font-body text-base sm:text-lg text-brand-olive-500 leading-relaxed max-w-2xl mx-auto">
           {areasToImprove.length === 0 
             ? "Tienes buenas prácticas digitales establecidas. Te ayudaremos a mantenerlas y fortalecerlas aún más."
             : "Ya tienes una base sólida. Con pequeños ajustes, tu familia estará aún más protegida."
           }
         </p>
       </motion.div>

       {/* NUEVA SECCIÓN: Áreas de Oportunidad */}
       {areasToImprove.length > 0 && (
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="space-y-4"
         >
           <div className="text-center">
             <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
               En este sitio aprenderás acerca de
             </h3>
             {areasToImprove.length > 1 && (
               <p className="text-sm text-brand-olive-500 font-body sm:hidden">
                 Desliza para ver más recomendaciones
               </p>
             )}
           </div>

          <div className="relative">
            {/* Carrusel container */}
            <div 
              className="flex items-center gap-4"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Botón anterior */}
              {areasToImprove.length > 1 && (
                <button
                  onClick={goToPrevious}
                  className="flex-shrink-0 p-2 bg-brand-mint-200/60 hover:bg-brand-mint-200/80 rounded-full transition-colors duration-200"
                  aria-label="Área anterior"
                >
                  <ChevronLeft className="h-5 w-5 text-brand-ink-800" />
                </button>
              )}

              {/* Card actual */}
              <div className="flex-1">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-brand-mint-200/30 rounded-xl p-4 sm:p-6 shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-teal-500/10 rounded-full flex-shrink-0">
                      {React.createElement(areasToImprove[currentIndex].icon, {
                        className: "h-5 w-5 sm:h-6 sm:w-6 text-brand-teal-500"
                      })}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-2">
                        {areasToImprove[currentIndex].title}
                      </h4>
                      <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                        {areasToImprove[currentIndex].learnHow}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Botón siguiente */}
              {areasToImprove.length > 1 && (
                <button
                  onClick={goToNext}
                  className="flex-shrink-0 p-2 bg-brand-mint-200/60 hover:bg-brand-mint-200/80 rounded-full transition-colors duration-200"
                  aria-label="Área siguiente"
                >
                  <ChevronRight className="h-5 w-5 text-brand-ink-800" />
                </button>
              )}
            </div>
            
            {/* Indicadores de posición */}
            {areasToImprove.length > 1 && (
              <div className="flex justify-center mt-4">
                <div className="flex gap-2">
                  {areasToImprove.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentIndex 
                          ? 'bg-brand-teal-500' 
                          : 'bg-brand-mint-200/60 hover:bg-brand-mint-200/80'
                      }`}
                      aria-label={`Ir a área ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA Consolidado */}
          <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-6 sm:p-8 text-center">
            <div className="space-y-6">
              {/* Título principal */}
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900">
                ¿Quieres un plan específico para tu familia?
              </h3>
              
              {/* Subtítulo */}
              <p className="font-body text-base sm:text-lg text-brand-ink-800 font-medium">
                Obtén un plan de protección digital diseñado solo para ti
              </p>
              
              {/* Descripción */}
              <p className="font-body text-sm sm:text-base text-brand-olive-500 max-w-2xl mx-auto">
                Cada familia enfrenta retos únicos. Realiza la evaluación personalizada y obtén acciones específicas adaptadas a la edad de tus hijos, las plataformas que usan y tus preocupaciones particulares.
              </p>
              
              {/* Badges informativos */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-teal-500/10 rounded-full">
                    <Clock className="h-5 w-5 text-brand-teal-500" />
                  </div>
                  <span className="font-body text-sm sm:text-base text-brand-ink-800 font-medium">
                    Menos de 5 minutos
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-teal-500/10 rounded-full">
                    <CheckCircle className="h-5 w-5 text-brand-teal-500" />
                  </div>
                  <span className="font-body text-sm sm:text-base text-brand-ink-800 font-medium">
                    Completamente gratis
                  </span>
                </div>
              </div>
              
              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-2 sm:px-0">
                {/* Botón primario - Más personalizado */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-full sm:w-auto"
                >
                   <Button
                     asChild
                     variant="primary-brand"
                     size="lg"
                     className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-heading font-semibold shadow-cta"
                     onClick={handlePersonalizedQuiz}
                   >
                     <Link to="/quiz/personalizado?from=express">
                       Quiero mi plan personalizado
                     </Link>
                   </Button>
                </motion.div>

                 {/* Botón secundario - Empezar aprendizaje */}
                 <Button
                   asChild
                   variant="outline"
                   size="lg"
                   className="w-full sm:w-auto border-2 border-brand-teal-500 text-brand-teal-500 hover:bg-brand-mint-200/20 px-4 sm:px-6 py-3 text-sm sm:text-base font-heading font-medium"
                   onClick={handleTuFamiliaClick}
                 >
                   <Link to="/aprende/tu-familia">
                     Empezar aprendizaje
                   </Link>
                 </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

       {/* Botón de reinicio */}
       <div className="text-center">
         <Button
           variant="ghost"
           size="sm"
           className="text-brand-olive-500 hover:text-brand-ink-800 text-sm"
           onClick={handleRestart}
         >
           Volver a realizar el diagnóstico
         </Button>
       </div>
    </div>
  );
};

export default ExpressResultsStep;