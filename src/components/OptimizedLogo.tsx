import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedLogoProps {
  className?: string;
  alt?: string;
  priority?: boolean;
}

const OptimizedLogo: React.FC<OptimizedLogoProps> = ({
  className,
  alt = "Hogares Digitales",
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generar srcSet para diferentes tamaños
  const generateSrcSet = () => {
    const sizes = [100, 200, 400];
    return sizes
      .map(size => `/optimized/logos/Logo Hogares Digitales-${size}w.webp ${size}w`)
      .join(', ');
  };

  const srcSet = generateSrcSet();
  const webpSrc = '/optimized/logos/Logo Hogares Digitales-original.webp';

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Placeholder mientras carga */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-mint-200/20 to-brand-teal-500/10 animate-pulse" />
      )}

      {/* Logo optimizado */}
      {!hasError && (
        <picture>
          <source srcSet={srcSet} sizes="(max-width: 768px) 100px, (max-width: 1024px) 200px, 400px" type="image/webp" />
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
          <span className="text-sm">Logo no disponible</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedLogo;
