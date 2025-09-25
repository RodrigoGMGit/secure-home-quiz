import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import RollingGallery from './RollingGallery';

const IntroSection = () => {
  return (
    <section id="intro" className="bg-gradient-to-br from-white via-gray-50 to-blue-50/30 min-h-screen flex flex-col relative">
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

      {/* Main content area */}
      <div className="flex flex-col justify-start px-4 pt-6 md:pt-8 lg:pt-10 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut"
            }}
          >
            {/* Modern badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-brand-blue-200/50 shadow-sm mb-4 md:mb-6">
              <div className="w-2 h-2 bg-brand-blue-500 rounded-full animate-pulse" />
              <span className="text-sm md:text-base font-medium text-brand-ink-700">Protección Digital Familiar</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-brand-ink-900 mb-4 md:mb-6 leading-tight tracking-tight">
              La puerta ya no es{' '}
              <span className="relative">
                <span className="text-brand-blue-500">la calle</span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue-400 to-brand-blue-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </span>
            </h1>
            
            <div className="space-y-3 md:space-y-4">
              <p className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl text-brand-ink-800 leading-relaxed font-medium">
                Hoy los riesgos no llegan solo de afuera, también entran por las pantallas.
              </p>
              <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg text-brand-ink-700 leading-relaxed">
                En México, muchos peligros digitales inician en redes sociales y apps usadas a diario por niñas y niños.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rolling Gallery Section */}
      <div className="relative z-10 mt-8 md:mt-12 lg:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >
          <RollingGallery autoplay={true} pauseOnHover={true} />
        </motion.div>
      </div>
      
      {/* Legend at the bottom - positioned at screen bottom */}
      <div className="flex justify-center pb-8 relative z-10 mt-auto">
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-sm border border-gray-100 text-center max-w-sm mx-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm text-brand-ink-600 mb-1 font-medium">
            Esta es una experiencia interactiva
          </p>
          <p className="text-sm text-brand-ink-500">
            Continúa deslizando hacia abajo para descubrir más
          </p>
          <motion.div 
            className="mt-4 flex justify-center"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default memo(IntroSection);
