import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Wifi, Lock, CheckCircle } from "lucide-react";
import { LoadingOverlay } from "@/components/ui/loading-spinner";
import { useNavigationLoading } from "@/hooks/useNavigationLoading";
import { motion } from "framer-motion";
import childGaming from "@/assets/child-gaming-safely.png";
import childrenLearning from "@/assets/children-learning-together.png";
import childTablet from "@/assets/child-using-tablet.png";
import child1 from "@/assets/child1.png";
import familia3 from "@/assets/familia 3.png";
import familia1 from "@/assets/familia1.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const { isLoading, navigateWithLoading } = useNavigationLoading();

  const totalImages = 6; // Número total de imágenes únicas en el marquee

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageLoad = () => {
    setLoadedImagesCount(prev => {
      const newCount = prev + 1;
      if (newCount >= totalImages) {
        setImagesLoaded(true);
      }
      return newCount;
    });
  };

  const handleConoceMas = () => {
    const element = document.getElementById('intro');
    if (element) {
      // Smooth scroll with enhanced easing using native scrollIntoView
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const headlineLines = useMemo(
    () => [
      { text: "UN HOGAR SEGURO", highlight: false },
      { text: "EN LÍNEA", highlight: true },
      { text: "EMPIEZA CONTIGO", highlight: false },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-gradient-subtle overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-olive-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>


      {/* Loading indicator */}
      {!imagesLoaded && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <div className="flex items-center gap-2 text-brand-olive-500/30">
            <div className="w-2 h-2 bg-brand-teal-500/20 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-brand-teal-500/20 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-brand-teal-500/20 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      )}

      {/* Image Marquee - Visible on all screen sizes */}
      <div className={`absolute top-1/2 left-0 right-0 transform -translate-y-1/2 overflow-hidden pointer-events-none z-0 transition-opacity duration-500 ${
        imagesLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex animate-marquee gap-4">
          {/* First set of images */}
          <div className="flex gap-4 flex-shrink-0">
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md opacity-20">
              <img
                src={childGaming}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
                onLoad={handleImageLoad}
              />
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md opacity-20">
              <img
                src={childTablet}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
                onLoad={handleImageLoad}
              />
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md opacity-20">
              <img
                src={childrenLearning}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
                onLoad={handleImageLoad}
              />
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md opacity-20">
              <img
                src={child1}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
                onLoad={handleImageLoad}
              />
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md opacity-20">
              <img
                src={familia3}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
                onLoad={handleImageLoad}
              />
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md opacity-20">
              <img
                src={familia1}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
                onLoad={handleImageLoad}
              />
            </div>
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-4 flex-shrink-0">
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md opacity-20">
              <img
                src={childGaming}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md opacity-20">
              <img
                src={childTablet}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md opacity-20">
              <img
                src={childrenLearning}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md opacity-20">
              <img
                src={child1}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md opacity-20">
              <img
                src={familia3}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md opacity-20">
              <img
                src={familia1}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-12 lg:py-20 z-10">
        <div className="flex justify-center items-center min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh]">
          {/* Content Section */}
          <div className={`text-center transition-all duration-1000 transform max-w-4xl mx-auto ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            {/* Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-brand-ink-900 mb-6 leading-tight">
              <div className="flex flex-col gap-3">
                {headlineLines.map(({ text, highlight }) => (
                  <div
                    key={text}
                    className="justify-center"
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
            <p className="font-body text-lg sm:text-xl md:text-xl lg:text-xl text-brand-olive-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              Evalúa en minutos qué tan protegida está tu familia en internet y descubre cómo mejorar paso a paso.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
              {["Evaluación gratuita", "Resultados inmediatos", "Guía personalizada"].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 bg-brand-mint-200/50 rounded-lg transition-all duration-500 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <CheckCircle className="w-4 h-4 text-brand-teal-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-brand-ink-800 whitespace-nowrap">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            }`} style={{ transitionDelay: "1200ms" }}>
              <Button 
                variant="primary-brand" 
                size="lg" 
                className="uppercase tracking-wide shadow-cta"
                onClick={() => navigateWithLoading('/quiz')}
                disabled={isLoading}
              >
                <Shield className="w-5 h-5" />
                {isLoading ? 'Cargando...' : 'Haz el quiz ahora'}
              </Button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  variant="secondary-brand" 
                  size="lg" 
                  className="uppercase tracking-wide"
                  onClick={handleConoceMas}
                  data-button="conoce-mas"
                >
                  Conoce más
                </Button>
              </motion.div>
            </div>

            <p className="text-sm text-brand-olive-500 mt-4 opacity-80 font-body">
              Sin registros • 100% confidencial • Toma solo 3 minutos
            </p>
          </div>

        </div>
      </div>
      
      {/* Loading overlay */}
      {isLoading && <LoadingOverlay message="Preparando tu evaluación..." />}
    </main>
  );
};

export default HeroSection;
