import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Wifi, Lock, CheckCircle } from "lucide-react";
import LoadingComponent from "@/components/ui/loading-component";
import { useNavigationLoading } from "@/hooks/useNavigationLoading";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import childGaming from "@/assets/hero/child-gaming-safely.png";
import childrenLearning from "@/assets/hero/children-learning-together.png";
import childTablet from "@/assets/hero/child-using-tablet.png";
import child1 from "@/assets/hero/child1.png";
import familia3 from "@/assets/hero/familia-3.png";
import familia1 from "@/assets/hero/familia1.png";
import familyReunited from "@/assets/hero/family_reunited.png";
import logoGob from "@/assets/logos/Logo_Gob.png";
import logoFE from "@/assets/logos/LogosFE_Colores-18.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const { isLoading, loadingType, navigateWithLoading } = useNavigationLoading();

  const totalImages = 7; // Número total de imágenes únicas en el marquee

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

  const handleComencemos = () => {
    navigateWithLoading('/en-construccion', 'default');
  };

  const handleEvaluarSituacion = () => {
    navigateWithLoading('/quiz', 'default');
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

      <div className="relative container mx-auto px-4 py-8 sm:py-12 lg:py-8 z-10">
        <div className="flex justify-center items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[70vh] lg:min-h-[75vh]">
          {/* Content Section */}
          <div className={`text-center transition-all duration-1000 transform max-w-4xl mx-auto ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            {/* Headline - Mobile optimized, desktop reduced */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold uppercase tracking-tight text-brand-ink-900 mb-6 sm:mb-8 md:mb-6 lg:mb-6 leading-tight relative z-10">
              <div className="flex flex-col gap-4 sm:gap-5">
                {headlineLines.map(({ text, highlight }) => (
                  <div
                    key={text}
                    className="justify-center relative"
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
                    
                    {/* Marquee anchored to highlighted line */}
                    {highlight && (
                      <div
                        className={cn(
                          "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen overflow-hidden z-0 transition-opacity duration-500",
                          imagesLoaded ? "opacity-100" : "opacity-0"
                        )}
                      >
                        <div className="flex animate-marquee gap-2 sm:gap-4">
                          {/* Set 1 - with onLoad handlers */}
                          <div className="flex gap-2 sm:gap-4 flex-shrink-0">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={childGaming}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                                onLoad={handleImageLoad}
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={childTablet}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                                onLoad={handleImageLoad}
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={childrenLearning}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                                onLoad={handleImageLoad}
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={child1}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                                onLoad={handleImageLoad}
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={familia3}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                                onLoad={handleImageLoad}
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={familia1}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                                onLoad={handleImageLoad}
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={familyReunited}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                                onLoad={handleImageLoad}
                              />
                            </div>
                          </div>
                          {/* Set 2 - duplicate without onLoad */}
                          <div className="flex gap-2 sm:gap-4 flex-shrink-0">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={childGaming}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={childTablet}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={childrenLearning}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={child1}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={familia3}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={familia1}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={familyReunited}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                          </div>
                          {/* Set 3 - duplicate without onLoad */}
                          <div className="flex gap-2 sm:gap-4 flex-shrink-0">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={childGaming}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={childTablet}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={childrenLearning}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={child1}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={familia3}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={familia1}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={familyReunited}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                          </div>
                          {/* Set 4 - duplicate without onLoad */}
                          <div className="flex gap-2 sm:gap-4 flex-shrink-0">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={childGaming}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={childTablet}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={childrenLearning}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={child1}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={familia3}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={familia1}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-md opacity-15 sm:opacity-20">
                              <img
                                src={familyReunited}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </h1>

            {/* Subtitle - Mobile optimized, desktop reduced */}
            <p className="font-body text-xl sm:text-2xl md:text-2xl lg:text-2xl text-brand-olive-500 mb-8 sm:mb-10 md:mb-8 lg:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
              Un espacio creado por y para familias mexicanas para aprender a cuidar a nuestros niños, niñas y adolescentes
            </p>

            {/* Trust indicators - Compact mobile sizing */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-4 lg:mb-4 px-2">
              {["Contenido educativo", "Guías prácticas", "Evaluación personalizada"].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-mint-200/50 rounded-lg transition-all duration-500 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-ink-800 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base font-medium text-brand-ink-800 whitespace-nowrap">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Mobile optimized */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-700 transform px-2 ${
              isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            }`} style={{ transitionDelay: "1200ms" }}>
              <Button 
                variant="primary-brand" 
                size="lg" 
                className="uppercase tracking-wide shadow-cta text-sm sm:text-base h-12 sm:h-14 w-full max-w-64 sm:w-72"
                onClick={handleComencemos}
                disabled={isLoading}
              >
                {isLoading ? 'Cargando...' : 'Comencemos'}
              </Button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="secondary-brand" 
                  size="lg" 
                  className="uppercase tracking-wide text-sm sm:text-base h-12 sm:h-14 w-full max-w-64 sm:w-72"
                  onClick={handleEvaluarSituacion}
                  data-button="evaluar-situacion"
                >
                  Evaluar mi situación
                </Button>
              </motion.div>
            </div>

            <p className="text-xs sm:text-sm text-brand-olive-500 mt-3 sm:mt-4 opacity-80 font-body px-2">
              100% confidencial • Toma solo 3 minutos
            </p>

            {/* Trust Badge Section */}
            <div className={`mt-8 sm:mt-10 transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`} style={{ transitionDelay: "1400ms" }}>
              <div className="flex justify-center items-center gap-6 sm:gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <motion.img 
                  src={logoGob}
                  alt="Gobierno de México" 
                  className="h-8 sm:h-10 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <motion.img 
                  src={logoFE}
                  alt="Fundación en Movimiento" 
                  className="h-8 sm:h-10 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Loading component */}
      {isLoading && <LoadingComponent type={loadingType} />}
    </main>
  );
};

export default HeroSection;
