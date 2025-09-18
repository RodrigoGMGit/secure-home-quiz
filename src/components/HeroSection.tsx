import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Clock, Zap, Lock, Wifi, Smartphone, Eye } from "lucide-react";

// Helper component for reusable benefit items
const BenefitItem = ({ icon: Icon, title, description, delay }: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/40"
  >
    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </motion.div>
);

const HeroSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Evaluación gratuita",
      description: "Análisis completo sin costo alguno"
    },
    {
      icon: Zap,
      title: "Resultados inmediatos",
      description: "Conoce tu puntuación al instante"
    },
    {
      icon: Clock,
      title: "Toma solo 3 minutos",
      description: "Rápido y fácil de completar"
    }
  ];

  const safetyMetrics = [
    { label: "Control parental", score: 85, color: "bg-primary" },
    { label: "Contraseñas y 2FA", score: 92, color: "bg-cta-green" },
    { label: "Privacidad en redes", score: 78, color: "bg-cta-blue" },
    { label: "Dispositivos actualizados", score: 95, color: "bg-primary-glow" }
  ];

  return (
    <main className="min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cta-blue/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Seguridad digital familiar
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground mb-6 leading-tight"
            >
              <span className="block">Un hogar seguro</span>
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                en línea
              </span>
              <span className="block">empieza contigo</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Evalúa en minutos qué tan protegida está tu familia en internet y descubre cómo mejorar paso a paso.
            </motion.p>

            {/* Benefits checklist */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <BenefitItem
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-4"
            >
              <Button 
                variant="cta" 
                size="xl" 
                className="font-heading text-lg tracking-wide uppercase shadow-2xl w-full sm:w-auto"
              >
                <Shield className="w-6 h-6 mr-2" />
                Haz el quiz ahora
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-sm text-muted-foreground opacity-80"
            >
              Sin registros • 100% confidencial • Resultados al instante
            </motion.p>
          </div>

          {/* Digital Safety Report Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <Card className="overflow-hidden shadow-cta border border-border/40 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Reporte de Seguridad Digital</h3>
                    <p className="text-sm text-muted-foreground">Tu familia</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {safetyMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{metric.label}</span>
                        <span className="text-sm font-bold text-primary">{metric.score}%</span>
                      </div>
                      <Progress value={metric.score} className="h-2" />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="p-4 bg-primary/5 rounded-lg border border-primary/20"
                >
                  <p className="text-sm text-foreground leading-relaxed">
                    Obtén una guía personalizada con pasos simples para elevar tu puntuación y proteger a tu familia.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
