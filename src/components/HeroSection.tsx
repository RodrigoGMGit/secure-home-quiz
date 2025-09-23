import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Wifi, Lock, CheckCircle } from "lucide-react";
import childGaming from "@/assets/child-gaming-safely.png";
import childrenLearning from "@/assets/children-learning-together.png";
import childTablet from "@/assets/child-using-tablet.png";

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
    <main className="min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-olive-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className={`text-center lg:text-left transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-brand-ink-900 mb-6 leading-tight">
              <div className="flex flex-col gap-3">
                {headlineLines.map(({ text, highlight }) => (
                  <div
                    key={text}
                    className="justify-center lg:justify-start"
                  >
                    <span
                      className={`block ${
                        highlight
                          ? "bg-gradient-to-r from-brand-teal-500 to-brand-olive-500 bg-clip-text text-transparent"
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
            <p className="font-body text-lg md:text-xl text-brand-olive-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Evalúa en minutos qué tan protegida está tu familia en internet y descubre cómo mejorar paso a paso.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {["Evaluación gratuita", "Resultados inmediatos", "Guía personalizada"].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 bg-brand-mint-200/50 rounded-lg transition-all duration-500 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <CheckCircle className="w-4 h-4 text-brand-teal-500" />
                  <span className="text-sm font-medium text-brand-ink-800">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            }`} style={{ transitionDelay: "1200ms" }}>
              <Button 
                variant="primary-brand" 
                size="lg" 
                className="uppercase tracking-wide shadow-cta"
                onClick={() => window.location.href = '/quiz'}
              >
                <Shield className="w-5 h-5" />
                Haz el quiz ahora
              </Button>
              <Button 
                variant="secondary-brand" 
                size="lg" 
                className="uppercase tracking-wide"
              >
                Conoce más
              </Button>
            </div>

            <p className="text-sm text-brand-olive-500 mt-4 opacity-80 font-body">
              Sin registros • 100% confidencial • Toma solo 3 minutos
            </p>
          </div>

          {/* Image Section */}
          <div className={`relative transition-all duration-1000 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`} style={{ transitionDelay: "600ms" }}>
            <div className="relative">
              {/* Modern image grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Child gaming safely */}
                <div className="relative overflow-hidden rounded-xl shadow-card bg-white p-4">
                  <img
                    src={childGaming}
                    alt="Niño jugando videojuegos de forma segura con supervisión"
                    className="w-full h-32 object-cover rounded-lg"
                    loading="eager"
                  />
                  <div className="absolute bottom-2 left-2 bg-brand-teal-500/90 text-white text-xs px-2 py-1 rounded">
                    Gaming seguro
                  </div>
                </div>

                {/* Child using tablet */}
                <div className="relative overflow-hidden rounded-xl shadow-card bg-white p-4">
                  <img
                    src={childTablet}
                    alt="Niña usando tablet con contenido educativo"
                    className="w-full h-32 object-cover rounded-lg"
                    loading="eager"
                  />
                  <div className="absolute bottom-2 left-2 bg-brand-olive-500/90 text-white text-xs px-2 py-1 rounded">
                    Aprendizaje
                  </div>
                </div>
              </div>

              {/* Main featured image */}
              <div className="relative overflow-hidden rounded-2xl shadow-soft bg-white p-6">
                <img
                  src={childrenLearning}
                  alt="Niños aprendiendo juntos con tecnología de forma segura"
                  className="w-full h-48 object-cover rounded-xl"
                  loading="eager"
                />
                
                {/* Overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink-900/20 to-transparent rounded-xl"></div>
                
                {/* Technology safety badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-teal-500" />
                  <span className="text-sm font-medium text-brand-ink-800">Protegido</span>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card p-4 border border-brand-mint-200">
                <div className="text-2xl font-bold text-brand-teal-500">85%</div>
                <div className="text-xs text-brand-olive-500">Padres mejoró<br/>su seguridad</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-card p-4 border border-brand-mint-200">
                <div className="text-2xl font-bold text-brand-olive-500">3 min</div>
                <div className="text-xs text-brand-olive-500">Tiempo<br/>promedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
