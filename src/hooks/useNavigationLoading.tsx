import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useNavigationLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const navigateWithLoading = (path: string, delay: number = 500) => {
    setIsLoading(true);
    
    // Simular tiempo de carga mínimo para mejor UX
    setTimeout(() => {
      navigate(path);
      // El loading se ocultará cuando el componente se desmonte
    }, delay);
  };

  // Limpiar el estado de loading cuando el componente se desmonta
  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return {
    isLoading,
    navigateWithLoading
  };
}
