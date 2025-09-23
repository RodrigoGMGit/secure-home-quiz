import { QuizAnswers, Platform, AgeBand } from '@/types/quiz';

export interface SpecificMeasure {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  platform?: Platform;
}

export function generateSpecificMeasures(answers: QuizAnswers): SpecificMeasure[] {
  const measures: SpecificMeasure[] = [];
  const { age_band, platforms = [], concerns = [], measures: existingMeasures = {} } = answers;

  // Medida 1: Basada en la edad
  if (age_band) {
    const ageMeasure = getAgeBasedMeasure(age_band);
    if (ageMeasure) measures.push(ageMeasure);
  }

  // Medida 2: Basada en plataformas principales
  if (platforms.length > 0) {
    const platformMeasure = getPlatformBasedMeasure(platforms[0], age_band);
    if (platformMeasure) measures.push(platformMeasure);
  }

  // Medida 3: Basada en preocupaciones principales
  if (concerns.length > 0) {
    const concernMeasure = getConcernBasedMeasure(concerns[0], age_band);
    if (concernMeasure) measures.push(concernMeasure);
  }

  // Si no hay suficientes medidas, agregar medidas generales
  while (measures.length < 3) {
    const generalMeasure = getGeneralMeasure(measures.length, age_band);
    if (generalMeasure) measures.push(generalMeasure);
  }

  // Ordenar por prioridad: alta -> media -> baja
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  const sortedMeasures = measures
    .slice(0, 3) // Asegurar máximo 3 medidas
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return sortedMeasures;
}

function getAgeBasedMeasure(ageBand: AgeBand): SpecificMeasure | null {
  const ageMeasures = {
    '6-8': {
      id: 'age-supervision',
      title: 'Supervisión activa en dispositivos',
      description: 'Para niños de 6-8 años, es fundamental estar presente cuando usan dispositivos. Configura horarios específicos y mantén los dispositivos en áreas comunes.',
      priority: 'high' as const
    },
    '9-12': {
      id: 'age-controls',
      title: 'Controles parentales avanzados',
      description: 'Implementa controles parentales en todos los dispositivos y aplicaciones. Revisa regularmente el historial de navegación y configura filtros de contenido.',
      priority: 'high' as const
    },
    '13-15': {
      id: 'age-communication',
      title: 'Conversaciones sobre seguridad digital',
      description: 'Mantén comunicación abierta sobre los riesgos en línea. Establece reglas claras sobre el tiempo de pantalla y el tipo de contenido que pueden consumir.',
      priority: 'medium' as const
    },
    '16-17': {
      id: 'age-independence',
      title: 'Preparación para la independencia digital',
      description: 'Enfócate en enseñar habilidades de pensamiento crítico y toma de decisiones responsables. Discute sobre privacidad, sexting y ciberacoso.',
      priority: 'medium' as const
    }
  };

  return ageMeasures[ageBand] || null;
}

function getPlatformBasedMeasure(platform: Platform, ageBand?: AgeBand): SpecificMeasure | null {
  const platformMeasures = {
    'whatsapp': {
      id: 'whatsapp-privacy',
      title: 'Configuración de privacidad en WhatsApp',
      description: 'Configura la privacidad del perfil, controla quién puede ver tu estado y activa la verificación en dos pasos. Revisa regularmente los contactos y grupos.',
      priority: 'high' as const,
      platform: 'whatsapp' as Platform
    },
    'youtube': {
      id: 'youtube-controls',
      title: 'Control de contenido en YouTube',
      description: 'Activa el Modo Restringido, configura el historial de visualización y usa YouTube Kids para niños menores. Revisa regularmente el historial de búsquedas.',
      priority: 'high' as const,
      platform: 'youtube' as Platform
    },
    'instagram': {
      id: 'instagram-safety',
      title: 'Configuración de seguridad en Instagram',
      description: 'Configura la cuenta como privada, controla quién puede enviar solicitudes de seguimiento y activa las notificaciones de inicio de sesión.',
      priority: 'high' as const,
      platform: 'instagram' as Platform
    },
    'tiktok': {
      id: 'tiktok-restrictions',
      title: 'Restricciones de tiempo en TikTok',
      description: 'Configura el tiempo de pantalla diario, activa el Modo Restringido y revisa regularmente el contenido que consume tu hijo/a.',
      priority: 'high' as const,
      platform: 'tiktok' as Platform
    },
    'roblox': {
      id: 'roblox-parental',
      title: 'Configuración parental en Roblox',
      description: 'Configura los controles parentales, establece límites de tiempo de juego y revisa regularmente los amigos y chats en el juego.',
      priority: 'medium' as const,
      platform: 'roblox' as Platform
    },
    'minecraft': {
      id: 'minecraft-safety',
      title: 'Seguridad en servidores de Minecraft',
      description: 'Configura servidores privados o aprobados, desactiva el chat público y supervisa las interacciones con otros jugadores.',
      priority: 'medium' as const,
      platform: 'minecraft' as Platform
    },
    'otros': {
      id: 'other-platforms',
      title: 'Revisión de plataformas adicionales',
      description: 'Investiga las plataformas específicas que usa tu hijo/a y configura las medidas de seguridad correspondientes. Mantente informado sobre nuevas aplicaciones.',
      priority: 'medium' as const,
      platform: 'otros' as Platform
    }
  };

  return platformMeasures[platform] || null;
}

function getConcernBasedMeasure(concern: string, ageBand?: AgeBand): SpecificMeasure | null {
  const concernMeasures = {
    'contenido_inapropiado': {
      id: 'content-filtering',
      title: 'Filtrado de contenido inapropiado',
      description: 'Implementa filtros de contenido en todos los dispositivos y navegadores. Usa herramientas de control parental que bloqueen contenido inadecuado.',
      priority: 'high' as const
    },
    'grooming': {
      id: 'stranger-danger',
      title: 'Protección contra grooming',
      description: 'Enseña a tu hijo/a sobre los peligros de hablar con desconocidos en línea. Configura alertas para contactos nuevos y revisa regularmente las conversaciones.',
      priority: 'high' as const
    },
    'cyberbullying': {
      id: 'cyberbullying-prevention',
      title: 'Prevención del ciberacoso',
      description: 'Establece reglas claras sobre el comportamiento en línea y crea un ambiente de confianza para que tu hijo/a reporte cualquier situación de acoso.',
      priority: 'high' as const
    },
    'adiccion_pantallas': {
      id: 'screen-time-management',
      title: 'Gestión del tiempo de pantalla',
      description: 'Establece horarios específicos para el uso de dispositivos y crea zonas libres de tecnología en casa. Usa aplicaciones de control parental para monitorear el tiempo.',
      priority: 'medium' as const
    },
    'privacidad_datos': {
      id: 'data-privacy',
      title: 'Protección de datos personales',
      description: 'Enseña a tu hijo/a sobre la importancia de no compartir información personal en línea. Configura la privacidad en todas las cuentas y aplicaciones.',
      priority: 'medium' as const
    }
  };

  // Buscar medida por coincidencia parcial en el texto de la preocupación
  for (const [key, measure] of Object.entries(concernMeasures)) {
    if (concern.toLowerCase().includes(key.replace('_', ' '))) {
      return measure;
    }
  }

  return null;
}

function getGeneralMeasure(index: number, ageBand?: AgeBand): SpecificMeasure | null {
  const generalMeasures = [
    {
      id: 'device-security',
      title: 'Seguridad básica de dispositivos',
      description: 'Mantén todos los dispositivos actualizados con las últimas versiones de software y configura contraseñas seguras para todas las cuentas.',
      priority: 'medium' as const
    },
    {
      id: 'family-rules',
      title: 'Establecimiento de reglas familiares',
      description: 'Crea reglas claras sobre el uso de tecnología en casa. Incluye horarios, lugares permitidos y consecuencias por incumplimiento.',
      priority: 'medium' as const
    },
    {
      id: 'education-continued',
      title: 'Educación continua sobre seguridad digital',
      description: 'Mantente informado sobre las últimas tendencias en tecnología y seguridad digital. Comparte esta información regularmente con tu familia.',
      priority: 'low' as const
    }
  ];

  return generalMeasures[index] || null;
}
