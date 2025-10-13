/**
 * Utilidades para manejo de números de teléfono y comunicación
 */

/**
 * Limpia un número de teléfono removiendo caracteres no numéricos
 * @param phoneNumber - Número de teléfono a limpiar
 * @returns Número limpio solo con dígitos
 */
export const cleanPhoneNumber = (phoneNumber: string): string => {
  return phoneNumber.replace(/[\s\-\(\)]/g, '');
};

/**
 * Formatea un número de teléfono para mostrar
 * @param phoneNumber - Número de teléfono a formatear
 * @returns Número formateado con espacios
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = cleanPhoneNumber(phoneNumber);
  
  // Formato para números mexicanos (10 dígitos)
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2 $3');
  }
  
  // Formato para números con código de país (12 dígitos)
  if (cleaned.length === 12) {
    return cleaned.replace(/(\d{2})(\d{2})(\d{4})(\d{4})/, '+$1 $2 $3 $4');
  }
  
  return cleaned;
};

/**
 * Crea un enlace tel: para dispositivos móviles
 * @param phoneNumber - Número de teléfono
 * @returns Enlace tel: válido
 */
export const createTelLink = (phoneNumber: string): string => {
  const cleaned = cleanPhoneNumber(phoneNumber);
  return `tel:${cleaned}`;
};

/**
 * Crea un enlace mailto: para email
 * @param email - Dirección de email
 * @returns Enlace mailto: válido
 */
export const createMailtoLink = (email: string): string => {
  return `mailto:${email}`;
};

/**
 * Intenta hacer una llamada telefónica
 * @param phoneNumber - Número de teléfono a llamar
 * @param canCall - Si el dispositivo puede hacer llamadas
 * @returns Promise que se resuelve cuando se completa la acción
 */
export const initiatePhoneCall = async (phoneNumber: string, canCall: boolean): Promise<void> => {
  const cleaned = cleanPhoneNumber(phoneNumber);
  const telLink = createTelLink(cleaned);
  
  if (canCall) {
    // En dispositivos móviles con capacidad de llamada
    try {
      // Método principal: usar window.open() que es más confiable en móviles
      const newWindow = window.open(telLink, '_self');
      
      // Si window.open() falla o es bloqueado, intentar con window.location.href
      if (!newWindow) {
        window.location.href = telLink;
      }
    } catch (error) {
      // Si ambos métodos fallan, mostrar el número para copiar manualmente
      try {
        await navigator.clipboard.writeText(cleaned);
        throw new Error(`No se pudo abrir el marcador telefónico. Número copiado al portapapeles: ${cleaned}`);
      } catch (clipboardError) {
        throw new Error(`No se pudo abrir el marcador telefónico. Número: ${cleaned}\n\nCopia este número para llamar desde tu app de teléfono.`);
      }
    }
  } else {
    // En desktop o dispositivos sin capacidad de llamada
    try {
      await navigator.clipboard.writeText(cleaned);
      alert(`Número copiado al portapapeles: ${cleaned}\n\nEn un dispositivo móvil, puedes pegar este número en tu app de teléfono.`);
    } catch (error) {
      alert(`Número de teléfono: ${cleaned}\n\nCopia este número para llamar desde tu dispositivo móvil.`);
    }
  }
};

/**
 * Intenta abrir el cliente de email
 * @param email - Dirección de email
 * @returns Promise que se resuelve cuando se completa la acción
 */
export const initiateEmail = async (email: string): Promise<void> => {
  const mailtoLink = createMailtoLink(email);
  
  try {
    window.location.href = mailtoLink;
  } catch (error) {
    window.open(mailtoLink, '_self');
  }
};

/**
 * Maneja una llamada telefónica de forma estandarizada
 * Usado en componentes de contacto de emergencia
 * @param phoneNumber - Número de teléfono a llamar
 * @param contactName - Nombre del contacto para logging/analytics
 */
export const handlePhoneCall = (phoneNumber: string, contactName?: string): void => {
  const cleaned = cleanPhoneNumber(phoneNumber);
  const telLink = createTelLink(cleaned);
  
  // Log para analytics (opcional)
  if (contactName && process.env.NODE_ENV === 'development') {
    console.log(`Initiating call to ${contactName}: ${cleaned}`);
  }
  
  // Intentar abrir el marcador telefónico
  try {
    window.open(telLink, '_self');
  } catch (error) {
    // Fallback: usar location.href
    window.location.href = telLink;
  }
};