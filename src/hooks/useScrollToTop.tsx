import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook que automáticamente hace scroll al inicio de la página
 * cuando cambia la ruta (location)
 */
export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Hacer scroll al inicio de la página cuando cambia la ruta
    window.scrollTo(0, 0);
    
    // También resetear el scroll del documento para mayor compatibilidad
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);
};

export default useScrollToTop;
