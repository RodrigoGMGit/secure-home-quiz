import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, CheckCircle, Star, Lock, Wifi, Eye } from "lucide-react";

// Helper component for benefit items
const BenefitItem = ({ 
  icon: Icon, 
  title, 
  description, 
  isVisible = false 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
  isVisible?: boolean;
}) => {
  return (
    <div 
      className={`flex items-start gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/40 transition-all duration-700 hover:bg-card/70 hover:shadow-soft transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex-shrink-0 w-10 h-10 bg-cta-green/10 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-cta-green" />
      </div>
      <div>
        <h3 className="font-heading font-bold text-foreground text-sm mb-1">{title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Trust metric component
const TrustMetric = ({ 
  value, 
  label, 
  isVisible = false 
}: { 
  value: string; 
  label: string; 
  isVisible?: boolean; 
}) => {
  return (
    <div 
      className={`bg-card rounded-xl shadow-soft p-4 border border-border/20 transition-all duration-700 hover:shadow-green transform ${
        isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
      }`}
    >
      <div className="text-2xl font-heading font-black text-trust-metric mb-1">{value}</div>
      <div className="text-xs text-muted-foreground leading-tight">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-hero overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cta-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-light/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen lg:min-h-[80vh]">
          
          {/* Content Section */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Badge */}
            <div 
              className={`transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Badge 
                variant="secondary" 
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-card/80 backdrop-blur-sm border border-border/40"
              >
                <Shield className="w-4 h-4 text-primary" />
                Seguridad digital familiar
              </Badge>
            </div>

            {/* Headline */}
            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-primary-foreground leading-tight">
                UN HOGAR SEGURO{" "}
                <span className="bg-gradient-to-r from-cta-green to-cta-green-trust bg-clip-text text-transparent">
                  EN LÍNEA
                </span>{" "}
                EMPIEZA CONTIGO
              </h1>
            </div>

            {/* Subtitle */}
            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Evalúa en minutos qué tan protegida está tu familia en internet y recibe consejos fáciles para cuidarlos mejor cada día.
              </p>
            </div>

            {/* Benefits Grid */}
            <div 
              className={`grid md:grid-cols-3 gap-4 transition-all duration-1000 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <BenefitItem
                icon={Star}
                title="Evaluación gratuita"
                description="Sin costo ni compromisos"
                isVisible={isVisible}
              />
              <BenefitItem
                icon={Clock}
                title="Resultados inmediatos"
                description="Obtén tu puntuación al instante"
                isVisible={isVisible}
              />
              <BenefitItem
                icon={CheckCircle}
                title="Toma solo 3 minutos"
                description="Respuestas simples y rápidas"
                isVisible={isVisible}
              />
            </div>

            {/* CTA Button */}
            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <Button 
                size="lg" 
                className="bg-cta-blue hover:bg-cta-blue-hover text-cta-foreground font-heading font-bold text-lg px-8 py-4 rounded-xl shadow-cta transition-all duration-300 hover:scale-105 uppercase tracking-wide animate-pulse"
              >
                <Shield className="w-6 h-6 mr-2" />
                Haz el quiz ahora
              </Button>
            </div>

            {/* Supporting microcopy */}
            <div 
              className={`transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <p className="text-sm text-primary-foreground/70 font-body">
                Sin registros • 100% confidencial • Resultados al instante
              </p>
            </div>
          </div>

          {/* Visual Card Section */}
          <div 
            className={`relative transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {/* Trust metrics positioned above card */}
            <div className="flex gap-4 justify-center lg:justify-start mb-6">
              <TrustMetric
                value="3 min"
                label="Tiempo promedio"
                isVisible={isVisible}
              />
              <TrustMetric
                value="85%"
                label="Padres mejoraron su seguridad"
                isVisible={isVisible}
              />
            </div>

            {/* Digital safety report card */}
            <Card className="bg-card/95 backdrop-blur-sm shadow-soft border border-border/40 overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Card header */}
                  <div className="text-center">
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      Reporte de Seguridad Digital
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Evaluación familiar completa
                    </p>
                  </div>

                  {/* Progress metrics */}
                  <div className="space-y-4">
                    {[
                      { label: "Control parental", value: 85, icon: Eye },
                      { label: "Contraseñas y 2FA", value: 72, icon: Lock },
                      { label: "Privacidad en redes", value: 68, icon: Shield },
                      { label: "Dispositivos actualizados", value: 91, icon: Wifi }
                    ].map(({ label, value, icon: Icon }, index) => (
                      <div key={label} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">{label}</span>
                          </div>
                          <span className="text-sm font-bold text-trust-metric">{value}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r from-cta-green to-cta-green-trust rounded-full transition-all duration-1000 ease-out ${
                              isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ 
                              width: isVisible ? `${value}%` : '0%'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Closing message */}
                  <div className="bg-accent/50 rounded-lg p-4 border border-border/30">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>Obtén una guía personalizada</strong> con pasos simples para elevar tu puntuación y proteger a tu familia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;