import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import TextType from './ui/TextType';

const IntroSection = () => {
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  // Note: Auto-scroll removed - users will manually scroll after seeing the legend

  return (
    <section id="intro" className="bg-gradient-to-br from-white via-gray-50 to-blue-50/30 min-h-screen flex flex-col items-center justify-start relative pt-16 sm:pt-20 md:pt-24">

      {/* Background decorative elements - optimized animations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-blue-100/20 to-brand-blue-200/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 90, 180]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-brand-olive-100/20 to-brand-olive-200/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.05, 1, 1.05],
            rotate: [180, 90, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Title positioned towards top */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            rotate: 0
          }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.2
          }}
          className="max-w-4xl mx-auto"
          style={{ transform: 'none' }}
        >
          <h1 
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-brand-ink-900 leading-tight tracking-tight text-center transform-none"
            style={{ 
              transform: 'none !important',
              writingMode: 'horizontal-tb',
              textOrientation: 'mixed'
            }}
          >
            <TextType
              text={["La puerta ya no es la calle..."]}
              as="span"
              typingSpeed={120}
              initialDelay={1000}
              pauseDuration={1500}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
              cursorBlinkDuration={0.8}
              startOnVisible={true}
              className="text-brand-ink-900 block text-center transform-none"
              textColors={["#1f2937"]}
              variableSpeed={{ min: 80, max: 150 }}
              onSentenceComplete={() => {
                // Animation completed - trigger legend appearance
                console.log('Text animation completed! Setting textAnimationComplete to true');
                setTextAnimationComplete(true);
              }}
            />
          </h1>
        </motion.div>
      </div>

      {/* Interactive experience legend - positioned at bottom with mobile safe area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: textAnimationComplete ? 1 : 0, 
          y: textAnimationComplete ? 0 : 20 
        }}
        transition={{ duration: 0.8, delay: textAnimationComplete ? 0.5 : 0 }}
        className="absolute bottom-0 left-0 right-0 z-10 pb-20 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg border border-gray-200/50 text-center max-w-sm mx-auto">
          <p className="text-sm sm:text-base text-brand-ink-600 mb-2 font-medium">
            Esta es una experiencia interactiva
          </p>
          <p className="text-sm text-brand-ink-500 mb-4">
            Continúa deslizando hacia abajo para descubrir más
          </p>
          <motion.div 
            className="flex justify-center"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg 
              className="w-5 h-5 text-brand-blue-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default memo(IntroSection);
