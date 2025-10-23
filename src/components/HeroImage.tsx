import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  priority?: boolean;
}

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  className,
  onLoad,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generar srcSet para diferentes tamaños
  const generateSrcSet = (baseSrc: string) => {
    const sizes = [400, 600, 800, 1200];
    return sizes
      .map(size => `/optimized/hero/${baseSrc.replace('.png', `-${size}w.webp`)} ${size}w`)
      .join(', ');
  };

  const srcSet = generateSrcSet(src);
  const webpSrc = `/optimized/hero/${src.replace('.png', '-original.webp')}`;

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Placeholder mientras carga */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-mint-200/20 to-brand-teal-500/10 animate-pulse" />
      )}

      {/* Imagen optimizada */}
      {!hasError && (
        <picture>
          <source srcSet={srcSet} sizes="(max-width: 768px) 400px, (max-width: 1024px) 600px, 800px" type="image/webp" />
          <img
            src={webpSrc}
            alt={alt}
            className={cn(
              'transition-opacity duration-500',
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

export default HeroImage;
