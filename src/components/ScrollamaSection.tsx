import { useEffect, useRef, useState } from 'react';
import scrollama from 'scrollama';
import { Shield, Users, Smartphone, CheckCircle, Monitor, Lock, Clock, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigationLoading } from '@/hooks/useNavigationLoading';
import StackingCards from './StackingCards';

interface Step {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  percentage: string;
}

const ScrollamaSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [showVideoTransition, setShowVideoTransition] = useState(true);
  const scrollamaRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { navigateWithLoading } = useNavigationLoading();

  // Detect mobile device and user interaction
  useEffect(() => {
    // Detect mobile device with more comprehensive checks
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) || 
                            window.innerWidth <= 768 ||
                            ('ontouchstart' in window) ||
                            (navigator.maxTouchPoints > 0);
      setIsMobile(isMobileDevice);
      console.log('Mobile device detected:', isMobileDevice, 'User Agent:', userAgent);
    };
    
    checkMobile();
    
    // Track user interaction for mobile autoplay
    const handleUserInteraction = () => {
      setUserInteracted(true);
      console.log('User interaction detected - video autoplay now allowed');
      // Remove listeners after first interaction
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchend', handleUserInteraction);
    };
    
    // Add event listeners for user interaction (more comprehensive)
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchend', handleUserInteraction, { once: true });
    
    return () => {
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchend', handleUserInteraction);
    };
  }, []);

  // Reset component state on mount (handles Safari navigation issues)
  useEffect(() => {
    console.log('ScrollamaSection mounted - resetting state');
    
    // Reset all states
    setActiveStep(0);
    setIsVideoPlaying(false);
    setVideoFinished(false);
    
    // Ensure scrolling is enabled
    document.body.style.overflow = 'auto';
    
    // Reset video if it exists
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
      videoRef.current.playbackRate = 3; // Set faster playback speed
      videoRef.current.load(); // Force reload for Safari
    }
    
    return () => {
      console.log('ScrollamaSection unmounting - cleaning up');
      // Cleanup on unmount
      document.body.style.overflow = 'auto';
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);

  const steps: Step[] = [
    {
      id: 'step-1',
      title: 'Identifica los Riesgos',
      description: 'Descubre qué amenazas digitales pueden afectar a tu familia y cómo reconocerlas antes de que se conviertan en problemas.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-brand-teal-500 to-brand-teal-600',
      bgColor: 'bg-brand-teal-500',
      percentage: '10%'
    },
    {
      id: 'step-2',
      title: 'Evalúa tu Situación',
      description: 'Completa una evaluación personalizada que analiza los hábitos digitales de tu familia y identifica áreas de mejora.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-brand-olive-500 to-brand-olive-600',
      bgColor: 'bg-brand-olive-500',
      percentage: '50%'
    },
    {
      id: 'step-3',
      title: 'Recibe tu Plan Personalizado',
      description: 'Obtén recomendaciones específicas y un plan de acción detallado adaptado a las necesidades únicas de tu familia.',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-brand-mint-500 to-brand-mint-600',
      bgColor: 'bg-brand-mint-500',
      percentage: '90%'
    },
    {
      id: 'step-4',
      title: 'Protege a tu Familia',
      description: 'Implementa las medidas de seguridad recomendadas y mantén a tu familia segura en el mundo digital.',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-brand-ink-500 to-brand-ink-600',
      bgColor: 'bg-brand-ink-500',
      percentage: '100%'
    }
  ];

  const stackingCardsData = [
    {
      id: 'card-1',
      title: 'Filtros de Contenido',
      description: 'Protege a tus hijos de contenido inapropiado con filtros inteligentes que bloquean automáticamente sitios web, videos y aplicaciones no deseadas.',
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-brand-teal-500 to-brand-teal-600',
      bgColor: 'bg-brand-teal-500'
    },
    {
      id: 'card-2',
      title: 'Control Parental',
      description: 'Monitorea y controla el uso de dispositivos de tu familia con herramientas avanzadas que te permiten establecer límites de tiempo y supervisar actividades.',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-brand-olive-500 to-brand-olive-600',
      bgColor: 'bg-brand-olive-500'
    },
    {
      id: 'card-3',
      title: 'Gestión de Tiempo',
      description: 'Ayuda a tu familia a desarrollar hábitos digitales saludables con herramientas que promueven el equilibrio entre el tiempo en pantalla y otras actividades.',
      icon: <Clock className="w-8 h-8" />,
      color: 'from-brand-mint-500 to-brand-mint-600',
      bgColor: 'bg-brand-mint-500'
    },
    {
      id: 'card-4',
      title: 'Protección Familiar',
      description: 'Mantén a toda tu familia segura con una solución integral que combina tecnología avanzada y orientación experta para la seguridad digital.',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-brand-ink-500 to-brand-ink-600',
      bgColor: 'bg-brand-ink-500'
    }
  ];

  useEffect(() => {
    if (!scrollamaRef.current || !scrollerRef.current) return;

    const scroller = scrollama();
    
    scroller
      .setup({
        step: '.scrollama-step',
        offset: 0.5,
        progress: true,
        debug: false
      })
      .onStepEnter((response) => {
        const stepIndex = parseInt(response.element.dataset.step || '0');
        setActiveStep(stepIndex);
      })
      .onStepExit((response) => {
        const stepIndex = parseInt(response.element.dataset.step || '0');
        // Keep the last step active when scrolling past it
        if (stepIndex < steps.length - 1) {
          setActiveStep(stepIndex + 1);
        }
      });

    return () => {
      scroller.destroy();
    };
  }, [steps.length]);

  // Separate useEffect for IntersectionObserver to detect video container reaching center
  useEffect(() => {
    if (!videoContainerRef.current || !videoRef.current) return;

    let videoPlayed = false;
    let observer: IntersectionObserver | null = null;

    // Add a small delay for Safari to ensure elements are ready
    const initObserver = () => {
      observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !videoPlayed) {
            // Check if the video container is actually centered in the viewport
            const rect = entry.boundingClientRect;
            const viewportHeight = window.innerHeight;
            const containerCenter = rect.top + rect.height / 2;
            const viewportCenter = viewportHeight / 2;
            const distanceFromCenter = Math.abs(containerCenter - viewportCenter);
            
            console.log('Video container IntersectionObserver triggered:', {
              isIntersecting: entry.isIntersecting,
              intersectionRatio: entry.intersectionRatio,
              containerCenter,
              viewportCenter,
              distanceFromCenter,
              videoPlayed
            });
            
             // Only trigger if video container is within 200px of viewport center
             if (distanceFromCenter < 200) {
               console.log('Video container reached center, starting video in 500ms');
               // Disable scrolling immediately when video should start
               document.body.style.overflow = 'hidden';
               setTimeout(() => {
                 if (!videoPlayed) {
                   console.log('Playing video');
                   
                   // For mobile devices, check if user has interacted
                   if (isMobile && !userInteracted) {
                     console.log('Mobile device detected - user interaction required for video playback');
                     // Re-enable scrolling since video can't play
                     document.body.style.overflow = 'auto';
                     videoPlayed = true; // Mark as played to prevent retries
                     observer.disconnect();
                     return;
                   }
                   
                   videoRef.current?.play().catch((error) => {
                     console.log('Video play failed:', error);
                     // Re-enable scrolling if video fails to play
                     document.body.style.overflow = 'auto';
                     
                     // On mobile, if autoplay fails, mark as finished to allow scrolling
                     if (isMobile) {
                       setVideoFinished(true);
                     }
                   });
                   videoPlayed = true;
                   // Disconnect observer after first trigger
                   observer.disconnect();
                 }
               }, 500); // Small delay as requested
             } else {
               console.log('Video container not centered enough, distance:', distanceFromCenter);
             }
          }
        });
      },
      { 
        threshold: 0.8 // Trigger when container is 80% visible (more centered)
      }
    );

      observer.observe(videoContainerRef.current);
    };

    // Initialize observer with a small delay for Safari
    const timeoutId = setTimeout(initObserver, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // Effect to handle video playback and completion
  useEffect(() => {
    if (!videoRef.current) return;

    const scrollToFirstCard = () => {
      // Find the first step element (index 0)
      const firstStepElement = document.querySelector('[data-step="0"]');
      if (firstStepElement) {
        // Calculate the position to center the first card
        const elementRect = firstStepElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementCenter = elementRect.top + elementRect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const scrollOffset = elementCenter - viewportCenter;
        
        // Enhanced smooth scroll with custom easing
        const startTime = performance.now();
        const startScrollY = window.scrollY;
        const targetScrollY = startScrollY + scrollOffset;
        const duration = 1200; // 1.2 seconds for smoother transition
        
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        
        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutCubic(progress);
          
          const currentScrollY = startScrollY + (targetScrollY - startScrollY) * easedProgress;
          window.scrollTo(0, currentScrollY);
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };
        
        // Start scrolling first
        requestAnimationFrame(animateScroll);
        
        // Start the visual transition after scroll begins
        setTimeout(() => {
          setShowVideoTransition(false);
        }, 400);
        
        console.log('Smooth scrolling to center first card after video completion');
      }
    };

    const handlePlay = () => {
      setIsVideoPlaying(true);
      console.log('Video started playing - scrolling should be disabled');
    };

    const handlePause = () => {
      setIsVideoPlaying(false);
      console.log('Video paused');
    };

    const handleEnded = () => {
      setIsVideoPlaying(false);
      setVideoFinished(true);
      document.body.style.overflow = 'auto'; // Ensure scrolling is re-enabled
      console.log('Video finished - scrolling re-enabled');
      
      // Center the first card after a short delay to ensure scrolling is re-enabled
      setTimeout(scrollToFirstCard, 100);
    };

    const handleTimeUpdate = () => {
      if (videoRef.current && videoRef.current.currentTime >= 4) {
        videoRef.current.pause();
        setVideoFinished(true);
        document.body.style.overflow = 'auto'; // Ensure scrolling is re-enabled
        console.log('Video stopped at 4 seconds (1.5x speed) - scrolling re-enabled');
        
        // Center the first card after a short delay to ensure scrolling is re-enabled
        setTimeout(scrollToFirstCard, 100);
      }
    };

    const video = videoRef.current;
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Effect to prevent scrolling when video is playing
  useEffect(() => {
    if (isVideoPlaying && !videoFinished) {
      document.body.style.overflow = 'hidden';
      console.log('Scrolling disabled - video is playing');
    } else {
      document.body.style.overflow = 'auto';
      console.log('Scrolling enabled - video not playing or finished');
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVideoPlaying, videoFinished]);

  return (
    <>
      {/* Scrollytelling Section */}
      <section id="scrollama-section" className="relative bg-white">
        <div className="relative">
          {/* Sticky Graphic - Center Element (Behind content) */}
          <div ref={videoContainerRef} className="sticky top-0 z-0 h-screen flex items-center justify-center">
            {/* Central Video */}
            <motion.div 
              className="w-96 h-[600px] rounded-2xl overflow-hidden relative"
              animate={{ 
                opacity: showVideoTransition ? 1 : 0.4,
                scale: showVideoTransition ? 1 : 0.98,
                filter: showVideoTransition ? "blur(0px)" : "blur(2px)"
              }}
              transition={{ 
                duration: 0.8,
                ease: "easeInOut"
              }}
            >
              <video
                ref={videoRef}
                src="/assets/door.mp4"
                muted
                playsInline
                preload="metadata"
                webkit-playsinline="true"
                className="w-full h-full object-cover"
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    videoRef.current.playbackRate = 1.5; // Speed up video by 50%
                  }
                }}
              />
              
              {/* Mobile play button overlay */}
              {isMobile && !userInteracted && !videoFinished && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <div className="text-center">
                    <button
                      onClick={() => {
                        setUserInteracted(true);
                        videoRef.current?.play().catch((error) => {
                          console.log('Manual video play failed:', error);
                          setVideoFinished(true);
                        });
                      }}
                      className="bg-white/95 hover:bg-white text-gray-800 rounded-full p-6 shadow-xl transition-all duration-200 hover:scale-105 mb-3"
                      aria-label="Reproducir video"
                    >
                      <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                    <p className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                      Toca para reproducir
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Scrollable Steps (In front of sticky element) */}
          <div ref={scrollerRef} className="relative z-10">
            {/* Empty step to give more space for video */}
            <div className="scrollama-step h-screen flex items-center justify-center">
              <div className="text-center max-w-6xl mx-auto px-8">
                {/* Empty space for video to play */}
              </div>
            </div>

            {steps.map((step, index) => (
              <div
                key={step.id}
                className="scrollama-step h-[80vh] flex items-center justify-center"
                data-step={index}
              >
                <motion.div 
                  className="text-center max-w-6xl mx-auto px-8"
                  initial={{ opacity: 1, y: 20 }}
                  animate={{ 
                    opacity: 1,
                    y: activeStep === index ? 0 : 10,
                    scale: activeStep === index ? 1 : 0.98
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index === 0 && !showVideoTransition ? 0.3 : 0
                  }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.bgColor} text-white mb-6`}>
                    {step.icon}
                  </div>
                  
                  {/* Additional content for each step */}
                  <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                    {index === 0 && (
                      <div className="text-left">
                        <h4 className="font-semibold text-brand-ink-900 mb-3">Riesgos Comunes:</h4>
                        <ul className="space-y-2 text-brand-olive-500">
                          <li>• Contenido inapropiado</li>
                          <li>• Grooming y acoso</li>
                          <li>• Cyberbullying</li>
                          <li>• Exposición de información personal</li>
                        </ul>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="text-left">
                        <h4 className="font-semibold text-brand-ink-900 mb-3">Evaluación Incluye:</h4>
                        <ul className="space-y-2 text-brand-olive-500">
                          <li>• Análisis de hábitos digitales</li>
                          <li>• Identificación de vulnerabilidades</li>
                          <li>• Evaluación de configuraciones</li>
                          <li>• Toma solo 3 minutos</li>
                        </ul>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="text-left">
                        <h4 className="font-semibold text-brand-ink-900 mb-3">Plan Personalizado:</h4>
                        <ul className="space-y-2 text-brand-olive-500">
                          <li>• Recomendaciones específicas</li>
                          <li>• Guías paso a paso</li>
                          <li>• Adaptado a la edad de tus hijos</li>
                          <li>• Incluye scripts de conversación</li>
                        </ul>
                      </div>
                    )}
                    
                    {index === 3 && (
                      <div className="text-left">
                        <h4 className="font-semibold text-brand-ink-900 mb-3">Resultados:</h4>
                        <ul className="space-y-2 text-brand-olive-500">
                          <li>• Familia mejor protegida</li>
                          <li>• Herramientas de monitoreo</li>
                          <li>• Estrategias a largo plazo</li>
                          <li>• Seguridad digital continua</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
            
            {/* Extra scrollable content to keep sticky element visible longer */}
            <div className="h-[60vh]"></div>
            <div className="h-[60vh]"></div>
            {/* <div className="h-screen"></div> */}
          </div>
        </div>
      </section>

      {/* Stacking Cards Section */}
      <StackingCards cards={stackingCardsData} />

      {/* New Section After Scrollama */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-ink-900 mb-4">
              Protege a tu Familia Hoy
            </h2>
            <p className="text-lg text-brand-olive-500 max-w-2xl mx-auto mb-8">
              Comienza tu evaluación personalizada y obtén un plan de acción específico para tu familia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                onClick={() => navigateWithLoading('/quiz', 'quiz')}
              >
                Comenzar Evaluación
              </button>
              <button 
                className="border-2 border-brand-teal-500 text-brand-teal-500 hover:bg-brand-teal-50 font-semibold py-3 px-8 rounded-lg transition-colors"
                onClick={() => navigateWithLoading('/about', 'about')}
              >
                Saber Más
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollamaSection;
