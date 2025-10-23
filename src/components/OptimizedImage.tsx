import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  sizes = '100vw',
  priority = false,
  placeholder,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generar srcSet para diferentes tamaños
  const generateSrcSet = (baseSrc: string) => {
    const sizes = [400, 600, 800, 1200];
    return sizes
      .map(size => `${baseSrc.replace('.png', `-${size}w.webp`)} ${size}w`)
      .join(', ');
  };

  const srcSet = generateSrcSet(src);
  const webpSrc = src.replace('.png', '-original.webp');

  return (
    <div ref={imgRef} className={cn('relative overflow-hidden', className)}>
      {/* Placeholder mientras carga */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-mint-200/20 to-brand-teal-500/10 animate-pulse" />
      )}

      {/* Imagen optimizada */}
      {isInView && !hasError && (
        <picture>
          <source srcSet={srcSet} sizes={sizes} type="image/webp" />
          <img
            src={webpSrc}
            alt={alt}
            className={cn(
              'transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
      )}

      {/* Fallback en caso de error */}
      {hasError && (
        <div className="flex items-center justify-center h-full bg-brand-mint-200/20 text-brand-olive-500">
          <span className="text-sm">Imagen no disponible</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
