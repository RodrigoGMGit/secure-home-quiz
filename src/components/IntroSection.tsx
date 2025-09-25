import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <section id="intro" className="bg-white h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
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
          <motion.h2 
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-ink-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            1. La puerta ya no es la calle
          </motion.h2>
          <motion.p 
            className="text-lg text-brand-olive-500 max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hoy los riesgos no llegan solo de afuera, también entran por las pantallas.
          </motion.p>
          <motion.p 
            className="text-sm text-brand-olive-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            En México, muchos peligros digitales inician en redes sociales y apps usadas a diario por niñas y niños.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
