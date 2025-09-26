import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface StackingCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

interface StackingCardsProps {
  cards: StackingCard[];
}

const StackingCards = ({ cards }: StackingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const scrollingListenerRef = useRef<(() => void) | null>(null);
  const scrollingRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || !itemsRef.current.length) return;

    const container = containerRef.current;
    const items = itemsRef.current;
    
    // CSS values for calculations
    const cardTop = 20; // top: var(--space-sm) equivalent
    const cardHeight = 400; // Approximate card height
    const marginY = 20; // Gap between cards

    const animateStackCards = () => {
      const top = container.getBoundingClientRect().top;
      
      for (let i = 0; i < items.length; i++) {
        const scrolling = cardTop - top - i * (cardHeight + marginY);
        if (scrolling > 0) {
          // Card is fixed - scale it down
          const scale = (cardHeight - scrolling * 0.05) / cardHeight;
          items[i].style.transform = `translateY(${marginY * i}px) scale(${scale})`;
        }
      }
      
      scrollingRef.current = false;
    };

    const handleScroll = () => {
      if (scrollingRef.current) return;
      scrollingRef.current = true;
      requestAnimationFrame(animateStackCards);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        // Cards inside viewport - add scroll listener
        if (scrollingListenerRef.current) return;
        scrollingListenerRef.current = handleScroll;
        window.addEventListener('scroll', handleScroll);
      } else {
        // Cards not inside viewport - remove scroll listener
        if (!scrollingListenerRef.current) return;
        window.removeEventListener('scroll', scrollingListenerRef.current);
        scrollingListenerRef.current = null;
      }
    };

    // Check if IntersectionObserver is supported
    const intersectionObserverSupported = 
      'IntersectionObserver' in window && 
      'IntersectionObserverEntry' in window && 
      'intersectionRatio' in window.IntersectionObserverEntry.prototype;

    if (intersectionObserverSupported) {
      const observer = new IntersectionObserver(observerCallback);
      observer.observe(container);

      return () => {
        observer.disconnect();
        if (scrollingListenerRef.current) {
          window.removeEventListener('scroll', scrollingListenerRef.current);
        }
      };
    }
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-ink-900 mb-4">
            Herramientas de Protección Digital
          </h2>
          <p className="text-lg text-brand-olive-500 max-w-2xl mx-auto">
            Descubre las mejores herramientas y estrategias para mantener a tu familia segura en el mundo digital
          </p>
        </div>

        <div 
          ref={containerRef}
          className="stack-cards js-stack-cards max-w-4xl mx-auto"
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="stack-cards__item js-stack-cards__item bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-5"
              style={{
                position: 'sticky',
                top: '20px',
                transformOrigin: 'center top',
                transform: `translateY(${20 * index}px)`,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${card.bgColor} text-white mb-6`}>
                  {card.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-brand-ink-900 mb-4">
                  {card.title}
                </h3>
                
                <p className="text-brand-olive-500 text-lg leading-relaxed">
                  {card.description}
                </p>

                {/* Additional content for each card */}
                <div className="mt-8 text-left">
                  {index === 0 && (
                    <div className="bg-brand-teal-50 rounded-lg p-6">
                      <h4 className="font-semibold text-brand-teal-900 mb-3">Características:</h4>
                      <ul className="space-y-2 text-brand-teal-700">
                        <li>• Filtrado de contenido automático</li>
                        <li>• Bloqueo de sitios inapropiados</li>
                        <li>• Reportes de actividad detallados</li>
                        <li>• Control parental avanzado</li>
                      </ul>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="bg-brand-olive-50 rounded-lg p-6">
                      <h4 className="font-semibold text-brand-olive-900 mb-3">Beneficios:</h4>
                      <ul className="space-y-2 text-brand-olive-700">
                        <li>• Monitoreo en tiempo real</li>
                        <li>• Alertas inmediatas</li>
                        <li>• Configuración personalizable</li>
                        <li>• Soporte 24/7</li>
                      </ul>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="bg-brand-mint-50 rounded-lg p-6">
                      <h4 className="font-semibold text-brand-mint-900 mb-3">Funciones:</h4>
                      <ul className="space-y-2 text-brand-mint-700">
                        <li>• Gestión de tiempo de pantalla</li>
                        <li>• Límites de uso por aplicación</li>
                        <li>• Programación de horarios</li>
                        <li>• Recompensas por buen comportamiento</li>
                      </ul>
                    </div>
                  )}
                  
                  {index === 3 && (
                    <div className="bg-brand-ink-50 rounded-lg p-6">
                      <h4 className="font-semibold text-brand-ink-900 mb-3">Ventajas:</h4>
                      <ul className="space-y-2 text-brand-ink-700">
                        <li>• Protección integral de la familia</li>
                        <li>• Fácil instalación y configuración</li>
                        <li>• Compatible con múltiples dispositivos</li>
                        <li>• Actualizaciones automáticas</li>
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackingCards;
