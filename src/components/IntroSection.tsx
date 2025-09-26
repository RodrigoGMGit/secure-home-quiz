import { motion, useReducedMotion } from 'framer-motion';
import { memo, useState, useCallback, useMemo } from 'react';
import TextType from './ui/TextType';
import LogoLoop from './ui/LogoLoop';

const IntroSection = () => {
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Social media platform logos
  const sampleLogos = useMemo(() => [
    {
      node: (
        <svg className="w-16 h-16 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      node: (
        <svg className="w-16 h-16 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      node: (
        <svg className="w-16 h-16 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      )
    },
    {
      node: (
        <svg className="w-16 h-16 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      )
    },
    {
      node: (
        <svg className="w-16 h-16 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      node: (
        <svg className="w-16 h-16 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
        </svg>
      )
    }
  ], []);

  // Memoized callback to prevent unnecessary re-renders
  const handleTextComplete = useCallback(() => {
    console.log('Text animation completed! Setting textAnimationComplete to true');
    setTextAnimationComplete(true);
  }, []);

  // Optimized background animations - reduced motion support
  const backgroundAnimations = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        scale: 1,
        rotate: 0
      };
    }
    return {
      scale: [1, 1.05, 1],
      rotate: [0, 90, 180]
    };
  }, [prefersReducedMotion]);

  const backgroundTransition = useMemo(() => {
    if (prefersReducedMotion) {
      return { duration: 0 };
    }
    return { 
      duration: 30, 
      repeat: Infinity, 
      ease: "easeInOut" as const
    };
  }, [prefersReducedMotion]);

  // Note: Auto-scroll removed - users will manually scroll after seeing the legend

  return (
    <section id="intro" className="bg-gradient-to-br from-white via-gray-50 to-blue-50/30 min-h-screen flex flex-col items-center justify-start relative pt-16 sm:pt-20 md:pt-24">

      {/* Background decorative elements - optimized animations with reduced motion support */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-blue-100/20 to-brand-blue-200/10 rounded-full blur-3xl"
          animate={backgroundAnimations}
          transition={backgroundTransition}
          style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-brand-olive-100/20 to-brand-olive-200/10 rounded-full blur-3xl"
          animate={prefersReducedMotion ? { scale: 1, rotate: 0 } : { 
            scale: [1.05, 1, 1.05],
            rotate: [180, 90, 0]
          }}
          transition={prefersReducedMotion ? { duration: 0 } : { 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" as const
          }}
          style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
        />
      </div>

      {/* Title positioned towards top */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0
          }}
          transition={{ 
            duration: prefersReducedMotion ? 0.3 : 0.6, 
            ease: "easeOut",
            delay: prefersReducedMotion ? 0 : 0.2
          }}
          className="max-w-4xl mx-auto"
          style={{ 
            transform: 'none',
            willChange: prefersReducedMotion ? 'auto' : 'opacity, transform'
          }}
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
              typingSpeed={prefersReducedMotion ? 50 : 120}
              initialDelay={prefersReducedMotion ? 200 : 1000}
              pauseDuration={prefersReducedMotion ? 500 : 1500}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
              cursorBlinkDuration={0.8}
              startOnVisible={true}
              className="text-brand-ink-900 block text-center transform-none"
              textColors={["#1f2937"]}
              variableSpeed={prefersReducedMotion ? undefined : { min: 80, max: 150 }}
              onSentenceComplete={handleTextComplete}
            />
          </h1>
        </motion.div>
      </div>

      {/* Logo Loop Section - appears after title animation, centered between title and legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: textAnimationComplete ? 1 : 0, 
          y: textAnimationComplete ? 0 : 20 
        }}
        transition={{ 
          duration: prefersReducedMotion ? 0.3 : 0.6, 
          delay: textAnimationComplete ? (prefersReducedMotion ? 0.1 : 0.3) : 0 
        }}
        className="absolute top-1/2 left-0 right-0 z-10 px-4 sm:px-6 md:px-8 transform translate-y-16 sm:translate-y-20 md:translate-y-24 lg:translate-y-32"
        style={{ willChange: prefersReducedMotion ? 'auto' : 'opacity, transform' }}
      >
        <div className="max-w-4xl mx-auto">
          <LogoLoop
            logos={sampleLogos}
            speed={prefersReducedMotion ? 30 : 30}
            direction="left"
            logoHeight={64}
            gap={80}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#ffffff"
            scaleOnHover={!prefersReducedMotion}
            ariaLabel="Herramientas de seguridad digital"
            className="py-4"
          />
        </div>
      </motion.div>

      {/* Interactive experience legend - positioned at bottom with mobile safe area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: textAnimationComplete ? 1 : 0, 
          y: textAnimationComplete ? 0 : 20 
        }}
        transition={{ 
          duration: prefersReducedMotion ? 0.3 : 0.8, 
          delay: textAnimationComplete ? (prefersReducedMotion ? 0.1 : 0.5) : 0 
        }}
        className="absolute bottom-0 left-0 right-0 z-10 pb-20 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8"
        style={{ willChange: prefersReducedMotion ? 'auto' : 'opacity, transform' }}
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
            animate={prefersReducedMotion ? { y: 0 } : { y: [0, 6, 0] }}
            transition={prefersReducedMotion ? { duration: 0 } : { 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" as const
            }}
            style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
          >
            <svg 
              className="w-5 h-5 text-brand-blue-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-label="Deslizar hacia abajo"
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
