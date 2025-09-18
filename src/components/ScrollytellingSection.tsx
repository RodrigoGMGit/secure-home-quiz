import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Smartphone, AlertTriangle, MessageCircle, Clock } from "lucide-react";

interface StatBlockProps {
  icon: React.ReactNode;
  stat: string;
  description: string;
  subtext: string;
  bgColor: string;
  textColor?: string;
}

const StatBlock = ({ icon, stat, description, subtext, bgColor, textColor = "text-white" }: StatBlockProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      className={`min-h-screen flex items-center justify-center ${bgColor} ${textColor}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {icon}
        </motion.div>
        
        <motion.h2
          className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 uppercase tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {stat}
        </motion.h2>
        
        <motion.p
          className="font-body text-lg md:text-xl lg:text-2xl mb-4 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {description}
        </motion.p>
        
        <motion.p
          className="font-body text-sm md:text-base opacity-70"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {subtext}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ScrollytellingSection = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-20%" });

  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-20%" });

  return (
    <section className="relative">
      {/* Scroll 1 - Inicio positivo */}
      <motion.div
        ref={heroRef}
        className="min-h-screen flex items-center justify-center bg-cta-green text-white"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isHeroInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Smartphone className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
          
          <motion.h2
            className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 uppercase tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Internet es parte de la vida de nuestros hijos
          </motion.h2>
          
          <motion.p
            className="font-body text-lg md:text-xl lg:text-2xl opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Les ayuda a aprender, jugar y comunicarse cada día.
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll 2 - Giro narrativo */}
      <StatBlock
        icon={<AlertTriangle className="w-24 h-24 md:w-32 md:h-32 text-yellow-400" />}
        stat="Pero junto con las oportunidades también aparecen riesgos"
        description=""
        subtext="Una realidad que millones de familias enfrentan cada día"
        bgColor="bg-muted"
        textColor="text-muted-foreground"
      />

      {/* Scrolls 3-6 - Datos secuenciales */}
      <StatBlock
        icon={<Smartphone className="w-24 h-24 md:w-32 md:h-32 text-white" />}
        stat="8 de cada 10"
        description="adolescentes usan redes sociales sin supervisión"
        subtext="Un riesgo invisible para millones de familias"
        bgColor="bg-cta-blue"
      />

      <StatBlock
        icon={<AlertTriangle className="w-24 h-24 md:w-32 md:h-32 text-destructive" />}
        stat="1 de cada 4"
        description="padres nunca revisa lo que sus hijos hacen en internet"
        subtext="La supervisión digital es clave para la seguridad familiar"
        bgColor="bg-background"
        textColor="text-foreground"
      />

      <StatBlock
        icon={<MessageCircle className="w-24 h-24 md:w-32 md:h-32 text-white" />}
        stat="32%"
        description="de los adolescentes ha sufrido ciberacoso"
        subtext="Un problema que afecta la salud mental de nuestros jóvenes"
        bgColor="bg-cta-blue"
      />

      <StatBlock
        icon={<Clock className="w-24 h-24 md:w-32 md:h-32 text-primary" />}
        stat="Más de 3 horas"
        description="al día pasan los niños frente a pantallas"
        subtext="El tiempo de exposición digital continúa aumentando"
        bgColor="bg-background"
        textColor="text-foreground"
      />

      {/* Scroll 7 - Cierre esperanzador con CTA */}
      <motion.div
        ref={ctaRef}
        className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground"
        initial={{ opacity: 0 }}
        animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isCtaInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full border-2 border-white/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
          
          <motion.h2
            className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 uppercase tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            La buena noticia: cada familia puede transformar su hogar en un espacio digital seguro
          </motion.h2>
          
          <motion.p
            className="font-body text-lg md:text-xl lg:text-2xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Empieza hoy mismo con pasos simples que hacen la diferencia.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <Button 
              variant="cta-green" 
              size="xl"
              className="animate-pulse hover:animate-none font-heading font-bold uppercase tracking-wide"
            >
              <Shield className="w-6 h-6 mr-2" />
              Haz el quiz y conoce el nivel de seguridad digital de tu familia
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ScrollytellingSection;