import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Clock, Users } from "lucide-react";
import familyImage from "@/assets/family-digital-learning.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const headlineLines = useMemo(
    () => [
      { text: "UN HOGAR SEGURO", highlight: false },
      { text: "EN LÍNEA", highlight: true },
      { text: "EMPIEZA CONTIGO", highlight: false },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Section */}
          <div className={`text-left transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-brand-ink-900 mb-6 leading-tight">
              <div className="flex flex-col gap-2">
                {headlineLines.map(({ text, highlight }) => (
                  <span
                    key={text}
                    className={`block ${
                      highlight
                        ? "bg-gradient-to-r from-brand-teal-500 to-brand-olive-500 bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {text}
                  </span>
                ))}
              </div>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-lg text-brand-ink-800 mb-8 max-w-lg leading-relaxed">
              Evalúa en minutos qué tan protegida está tu familia en internet y descubre cómo mejorar paso a paso.
            </p>

            {/* CTA Button */}
            <div className={`mb-8 transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            }`} style={{ transitionDelay: "800ms" }}>
              <Button 
                variant="primary-brand" 
                size="lg" 
                className="mb-4"
              >
                HAZ EL QUIZ AHORA
              </Button>
            </div>

            {/* Trust indicators */}
            <div className={`transition-all duration-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`} style={{ transitionDelay: "1000ms" }}>
              <p className="text-sm text-brand-olive-500 mb-4 font-body">
                Confiado por más de 10+ familias en México
              </p>
              
              {/* Trust logos placeholder */}
              <div className="flex items-center gap-6 opacity-60">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-brand-teal-500" />
                  <span className="text-sm font-medium text-brand-ink-800">Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-teal-500" />
                  <span className="text-sm font-medium text-brand-ink-800">3 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-teal-500" />
                  <span className="text-sm font-medium text-brand-ink-800">Familiar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className={`relative transition-all duration-1000 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`} style={{ transitionDelay: "400ms" }}>
            <div className="relative">
              {/* Main family image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={familyImage}
                  alt="Familia usando tecnología de forma segura en casa"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink-900/10 to-transparent"></div>
              </div>

              {/* Floating stat - bottom left */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card p-4 border border-brand-mint-200">
                <div className="text-2xl font-bold text-brand-teal-500">85%</div>
                <div className="text-xs text-brand-olive-500">Familias más<br/>seguras</div>
              </div>

              {/* Floating stat - top right */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-card p-4 border border-brand-mint-200">
                <div className="text-2xl font-bold text-brand-olive-500">3 min</div>
                <div className="text-xs text-brand-olive-500">Evaluación<br/>completa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
