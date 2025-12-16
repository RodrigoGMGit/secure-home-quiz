import { useState, useEffect } from 'react';

/**
 * Hook personalizado para detectar dispositivos móviles
 * @returns {boolean} true si es dispositivo móvil, false si es desktop
 */
export const useMobileDetection = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Detectar dispositivos móviles por User Agent
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileDevice = mobileRegex.test(navigator.userAgent);
      
      // También verificar por tamaño de pantalla (opcional)
      const isSmallScreen = window.innerWidth <= 768;
      
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    // Verificar al cargar
    checkMobile();

    // Escuchar cambios de tamaño de ventana
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

/**
 * Hook para detectar capacidades de llamada telefónica
 * @returns {boolean} true si el dispositivo puede hacer llamadas telefónicas
 */
export const useTelephoneCapability = (): boolean => {
  const [canCall, setCanCall] = useState(false);

  useEffect(() => {
    // Verificar si el dispositivo puede hacer llamadas
    const checkTelephoneCapability = () => {
      // Detectar si es un dispositivo móvil con capacidad de llamada
      const mobileRegex = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i;
      const isMobileDevice = mobileRegex.test(navigator.userAgent);
      
      // En dispositivos móviles modernos, siempre asumir soporte para tel:
      // Todos los navegadores móviles modernos soportan el protocolo tel:
      setCanCall(isMobileDevice);
    };

    checkTelephoneCapability();
  }, []);

  return canCall;
};
