import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingType } from '@/components/ui/loading-component';

export function useNavigationLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingType, setLoadingType] = useState<LoadingType>("default");
  const navigate = useNavigate();

  const navigateWithLoading = (path: string, type: LoadingType = "default", delay: number = 500) => {
    // Extend loading time for about page to allow gallery to load
    const adjustedDelay = path === '/about' ? 1200 : delay;
    setLoadingType(type);
    setIsLoading(true);
    
    // Simular tiempo de carga mínimo para mejor UX
    setTimeout(() => {
      navigate(path);
      // El loading se ocultará cuando el componente se desmonte
    }, adjustedDelay);
  };

  // Limpiar el estado de loading cuando el componente se desmonta
  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return {
    isLoading,
    loadingType,
    navigateWithLoading
  };
}
