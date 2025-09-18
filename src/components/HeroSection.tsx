import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Wifi, Lock, CheckCircle } from "lucide-react";
import familyImage from "@/assets/family-digital-safety.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const headlineLines = useMemo(
    () => [
      { text: "UN HOGAR SEGURO", Icon: Shield, highlight: false },
      { text: "EN LÍNEA", Icon: Lock, highlight: true },
      { text: "EMPIEZA CONTIGO", Icon: Wifi, highlight: false },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cta-blue/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className={`text-center lg:text-left transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground mb-6 leading-tight">
              <div className="flex flex-col gap-3">
                {headlineLines.map(({ text, Icon, highlight }, index) => (
                  <div
                    key={text}
                    className="flex items-center gap-4 justify-center lg:justify-start"
                  >
                    <div
                      className={`hidden sm:flex w-12 h-12 items-center justify-center rounded-xl bg-background/80 backdrop-blur-sm shadow-soft border border-border/40 transition-all duration-700 ${
                        isVisible ? "opacity-100" : "opacity-0"
                      } ${isVisible ? "animate-bounce" : ""}`}
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        animationDuration: "2.8s",
                      }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span
                      className={`block ${
                        highlight
                          ? "bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"
                          : ""
                      }`}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Evalúa en minutos qué tan protegida está tu familia en internet y descubre cómo mejorar paso a paso.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {["Evaluación gratuita", "Resultados inmediatos", "Guía personalizada"].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 bg-background-subtle rounded-full transition-all duration-500 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className={`transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            }`} style={{ transitionDelay: "1200ms" }}>
              <Button 
                variant="cta" 
                size="xl" 
                className="font-heading text-lg tracking-wide uppercase shadow-2xl"
              >
                <Shield className="w-6 h-6" />
                Haz el quiz ahora
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4 opacity-80">
              Sin registros • 100% confidencial • Toma solo 3 minutos
            </p>
          </div>

          {/* Image Section */}
          <div className={`relative transition-all duration-1000 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`} style={{ transitionDelay: "600ms" }}>
            <div className="relative">
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-2xl shadow-soft bg-gradient-warm p-8">
                <img
                  src={familyImage}
                  alt="Familia usando tecnología de forma segura"
                  className="w-full h-auto object-cover rounded-xl"
                  loading="eager"
                />
                
                {/* Overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-xl"></div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-cta p-4 border border-border/20">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-xs text-muted-foreground">Padres mejoró<br/>su seguridad</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-background rounded-xl shadow-green p-4 border border-border/20">
                <div className="text-2xl font-bold text-cta-green">3 min</div>
                <div className="text-xs text-muted-foreground">Tiempo<br/>promedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
