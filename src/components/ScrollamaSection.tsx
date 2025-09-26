import { useEffect, useRef, useState } from 'react';
import scrollama from 'scrollama';
import { Shield, Users, Smartphone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const scrollamaRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);
  const knockKnockRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!scrollamaRef.current || !scrollerRef.current) return;

    // Enable video playback on first user interaction
    const enableVideoPlayback = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
        document.removeEventListener('click', enableVideoPlayback);
        document.removeEventListener('scroll', enableVideoPlayback);
      }
    };

    document.addEventListener('click', enableVideoPlayback);
    document.addEventListener('scroll', enableVideoPlayback);

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
      document.removeEventListener('click', enableVideoPlayback);
      document.removeEventListener('scroll', enableVideoPlayback);
    };
  }, [steps.length]);

  // Separate useEffect for IntersectionObserver to detect last card exit
  useEffect(() => {
    if (!lastCardRef.current || !videoRef.current) return;

    let hasBeenVisible = false;
    let videoPlayed = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Last card is visible
            hasBeenVisible = true;
            console.log('Last card is visible');
          } else if (hasBeenVisible && !videoPlayed) {
            // Last card was visible before and now has exited, play the video
            console.log('Last card exited viewport after being visible, playing video');
            videoRef.current?.play().catch((error) => {
              console.log('Video play failed:', error);
            });
            videoPlayed = true;
            // Disconnect observer after first trigger
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    observer.observe(lastCardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Effect to handle video playback and completion
  useEffect(() => {
    if (!videoRef.current) return;

    const handlePlay = () => {
      setIsVideoPlaying(true);
      console.log('Video started playing');
    };

    const handlePause = () => {
      setIsVideoPlaying(false);
      console.log('Video paused');
    };

    const handleEnded = () => {
      setIsVideoPlaying(false);
      setVideoFinished(true);
      console.log('Video finished');
      // Scroll to center the knock knock card
      setTimeout(() => {
        if (knockKnockRef.current) {
          knockKnockRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 500);
    };

    const handleTimeUpdate = () => {
      if (videoRef.current && videoRef.current.currentTime >= 4) {
        videoRef.current.pause();
        setVideoFinished(true);
        console.log('Video stopped at 4 seconds');
        // Scroll to center the knock knock card
        setTimeout(() => {
          if (knockKnockRef.current) {
            knockKnockRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
          }
        }, 500);
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
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVideoPlaying, videoFinished]);

  return (
    <>
      {/* Scrollytelling Section */}
      <section className="relative bg-white">
        <div className="relative">
          {/* Sticky Graphic - Center Element (Behind content) */}
          <div className="sticky top-0 z-0 h-screen flex items-center justify-center">
            {/* Central Video */}
            <div className="w-96 h-[600px] rounded-2xl overflow-hidden">
              <video
                ref={videoRef}
                src="/assets/door.mp4"
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Scrollable Steps (In front of sticky element) */}
          <div ref={scrollerRef} className="relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={index === steps.length - 1 ? lastCardRef : null}
                className="scrollama-step h-screen flex items-center justify-center"
                data-step={index}
              >
                <div className="text-center max-w-6xl mx-auto px-8">
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
                </div>
              </div>
            ))}
            
            {/* Knock knock text - fixed only during video playback */}
            <div 
              ref={knockKnockRef}
              className={`scrollama-step h-screen flex items-center justify-center ${isVideoPlaying && !videoFinished ? 'fixed inset-0 z-20' : ''}`}
            >
              <div className="text-center max-w-6xl mx-auto px-8">
                <motion.h3 
                  className="font-heading text-3xl font-bold text-white drop-shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeOut",
                    delay: 0.2
                  }}
                  animate={isVideoPlaying && !videoFinished ? {
                    scale: [1, 1.05, 1],
                    opacity: [1, 0.8, 1]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: isVideoPlaying && !videoFinished ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                >
                  Knock knock...
                </motion.h3>
                
                
                {/* Continue scrolling indicator */}
                {videoFinished && (
                  <motion.div
                    className="mt-6 text-white/70 text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>Continúa deslizando...</span>
                      <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Extra scrollable content to keep sticky element visible longer */}
            <div className="h-screen"></div>
            <div className="h-screen"></div>
            {/* <div className="h-screen"></div> */}
          </div>
        </div>
      </section>

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
              <button className="bg-brand-teal-500 hover:bg-brand-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Comenzar Evaluación
              </button>
              <button className="border-2 border-brand-teal-500 text-brand-teal-500 hover:bg-brand-teal-50 font-semibold py-3 px-8 rounded-lg transition-colors">
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
