import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <section id="intro" className="bg-gradient-to-br from-white via-gray-50 to-blue-50/30 min-h-screen flex flex-col relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-blue-100/20 to-brand-blue-200/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-brand-olive-100/20 to-brand-olive-200/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col justify-center px-4 py-16 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              staggerChildren: 0.2
            }}
          >
            {/* Modern badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-brand-blue-200/50 shadow-sm mb-6 md:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-2 h-2 bg-brand-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-brand-ink-700">Protección Digital Familiar</span>
            </motion.div>

            <motion.h1 
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-ink-900 mb-6 md:mb-8 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              La puerta ya no es{' '}
              <span className="relative">
                <span className="text-brand-blue-500">la calle</span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue-400 to-brand-blue-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h1>
            
            <div className="space-y-4 md:space-y-6">
              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-brand-ink-800 leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hoy los riesgos no llegan solo de afuera, también entran por las pantallas.
              </motion.p>
              <motion.p 
                className="text-base md:text-lg lg:text-xl text-brand-ink-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                En México, muchos peligros digitales inician en redes sociales y apps usadas a diario por niñas y niños.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Legend at the bottom - properly positioned */}
      <div className="flex justify-center pb-8 relative z-10">
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-sm border border-gray-100 text-center max-w-sm mx-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm text-brand-ink-600 mb-1 font-medium">
            Esta es una experiencia interactiva
          </p>
          <p className="text-sm text-brand-ink-500">
            Continúa deslizando hacia abajo para descubrir más
          </p>
          <motion.div 
            className="mt-4 flex justify-center"
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
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
