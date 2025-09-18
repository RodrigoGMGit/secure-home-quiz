import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  MessageCircle, 
  AlertTriangle, 
  Smartphone, 
  Clock, 
  Users,
  Wifi,
  Heart
} from "lucide-react";

interface ScrollStepProps {
  step: number;
  headline: string;
  subtitle?: string;
  stat?: string;
  description?: string;
  icon?: React.ComponentType<any>;
  bgColor: string;
  textColor?: string;
  showCTA?: boolean;
  isPositive?: boolean;
}

const ScrollStep = ({ 
  step, 
  headline, 
  subtitle, 
  stat, 
  description, 
  icon: Icon, 
  bgColor, 
  textColor = "text-white",
  showCTA = false,
  isPositive = false
}: ScrollStepProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, staggerChildren: 0.2 }
      });
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 py-20 ${bgColor} relative overflow-hidden`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Icon */}
        {Icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className={`w-20 h-20 rounded-full ${isPositive ? 'bg-white/20' : 'bg-white/10'} backdrop-blur-sm flex items-center justify-center border border-white/20`}>
              <Icon className={`w-10 h-10 ${textColor}`} />
            </div>
          </motion.div>
        )}

        {/* Main content */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight ${textColor} mb-6 leading-tight`}
        >
          {headline}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`font-body text-lg md:text-xl ${textColor}/90 mb-8 max-w-3xl mx-auto leading-relaxed`}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Statistics */}
        {stat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <div className={`font-heading text-5xl md:text-6xl font-bold ${textColor} mb-4`}>
                {stat}
              </div>
              {description && (
                <p className={`font-body text-lg ${textColor}/90`}>
                  {description}
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* CTA Button */}
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <Button 
              variant="cta-green" 
              size="xl" 
              className="font-heading text-lg tracking-wide uppercase shadow-2xl animate-pulse"
            >
              <Shield className="w-6 h-6" />
              Descubre cómo proteger a tu familia
            </Button>
          </motion.div>
        )}

        {/* Step indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === step ? 'bg-white scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const ScrollytellingSection = () => {
  const scrollSteps = [
    {
      step: 1,
      headline: "Internet es parte de la vida de nuestros hijos",
      subtitle: "Les ayuda a aprender, jugar y comunicarse cada día.",
      icon: Heart,
      bgColor: "bg-cta-green",
      isPositive: true
    },
    {
      step: 2,
      headline: "Pero junto con las oportunidades también aparecen riesgos",
      subtitle: "Nuevos desafíos digitales que debemos conocer y enfrentar juntos.",
      icon: AlertTriangle,
      bgColor: "bg-muted",
      textColor: "text-foreground"
    },
    {
      step: 3,
      headline: "8 de cada 10",
      description: "adolescentes usan redes sociales sin supervisión",
      stat: "8/10",
      icon: Smartphone,
      bgColor: "bg-cta-blue"
    },
    {
      step: 4,
      headline: "1 de cada 4",
      description: "padres nunca revisa lo que sus hijos hacen en internet",
      stat: "1/4",
      icon: Users,
      bgColor: "bg-background",
      textColor: "text-foreground"
    },
    {
      step: 5,
      headline: "32% de los adolescentes",
      description: "ha sufrido ciberacoso en línea",
      stat: "32%",
      icon: MessageCircle,
      bgColor: "bg-cta-blue"
    },
    {
      step: 6,
      headline: "Más de 3 horas",
      description: "pasan los niños frente a pantallas cada día",
      stat: "3h+",
      icon: Clock,
      bgColor: "bg-background",
      textColor: "text-foreground"
    },
    {
      step: 7,
      headline: "La buena noticia: cada familia puede transformar su hogar en un espacio digital seguro",
      subtitle: "Con las herramientas y conocimientos correctos, puedes crear un ambiente digital protegido para tu familia.",
      icon: Shield,
      bgColor: "bg-primary",
      isPositive: true
    },
    {
      step: 8,
      headline: "Comienza hoy a proteger a tu familia",
      subtitle: "Descubre cómo crear un hogar digital seguro con nuestra guía personalizada.",
      icon: Wifi,
      bgColor: "bg-cta-green",
      showCTA: true,
      isPositive: true
    }
  ];

  return (
    <div className="relative">
      {/* Section title */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-4"
          >
            La Problemática
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Entendamos juntos los desafíos digitales que enfrentan nuestras familias
          </motion.p>
        </div>
      </section>

      {/* Scrollytelling steps */}
      {scrollSteps.map((step, index) => (
        <ScrollStep key={index} {...step} />
      ))}
    </div>
  );
};

export default ScrollytellingSection;