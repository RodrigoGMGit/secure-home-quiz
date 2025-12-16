import { ContentBlock, PlanAction } from '@/types/plan';
import { Shield, AlertTriangle, Users, Clock, Smartphone, Eye, MessageCircle, Home, Heart } from 'lucide-react';

export const contentBlocks: ContentBlock[] = [
  // ACCIONES URGENTES - Señales de alerta
  {
    id: 'urgent_signals',
    title: 'Acciones Urgentes',
    body: 'Si identificas alguna de estas señales, es importante actuar inmediatamente para proteger a tu hijo o hija.',
    actions: [
      {
        id: 'signal_aislamiento',
        title: 'Si tu hijo se aísla socialmente',
        description: 'Busca ayuda profesional inmediatamente. El aislamiento puede ser señal de problemas serios.',
        tags: ['signal:aislamiento', 'urgent', 'age:all'],
        severity: 'high',
        steps: [
          'Habla con tu hijo de manera calmada y sin juzgar',
          'Busca ayuda de un psicólogo especializado en adolescentes',
          'Contacta a la escuela para coordinar apoyo',
          'Considera reducir el tiempo de pantallas temporalmente'
        ],
        conversationScript: '"Hijo/a, he notado que últimamente prefieres estar solo/a. ¿Hay algo que te preocupa? Quiero ayudarte y estoy aquí para escucharte."'
      },
      {
        id: 'signal_cambios_conducta',
        title: 'Si hay cambios drásticos en su comportamiento',
        description: 'Los cambios súbitos pueden indicar problemas serios en línea.',
        tags: ['signal:cambios_conducta', 'urgent', 'age:all'],
        severity: 'high',
        steps: [
          'Observa patrones de comportamiento',
          'Revisa su actividad digital con discreción',
          'Habla con otros adultos de confianza',
          'Busca ayuda profesional si persiste'
        ],
        conversationScript: '"Hijo/a, he notado que últimamente has estado diferente. ¿Hay algo que te esté preocupando? Quiero entender qué está pasando y ayudarte en lo que necesites."'
      },
      {
        id: 'signal_secreto_dispositivos',
        title: 'Si oculta el uso de dispositivos',
        description: 'El secreto excesivo puede ser señal de problemas.',
        tags: ['signal:secreto_dispositivos', 'urgent', 'age:all'],
        severity: 'high',
        steps: [
          'Establece reglas claras sobre transparencia',
          'Revisa configuraciones de privacidad',
          'Habla sobre la importancia de la comunicación',
          'Considera supervisión temporal más cercana'
        ],
        conversationScript: '"Hijo/a, me gustaría saber más sobre cómo usas tu teléfono/tablet. No es que desconfíe de ti, sino que quiero asegurarme de que estés seguro/a. ¿Podrías contarme qué aplicaciones usas más?"'
      }
    ],
    tags: ['urgent', 'signals', 'age:all'],
    refs: {
      manualHeading: '2.2 ¿Cómo saber si mi hijo o hija está pasando un mal momento en internet?'
    }
  },

  // CONTROLES PARENTALES POR PLATAFORMA
  {
    id: 'parental_controls_youtube',
    title: 'Controles Parentales para YouTube',
    body: 'YouTube puede ser una plataforma educativa, pero también presenta riesgos. Aquí te enseñamos a configurarlo de manera segura.',
    actions: [
      {
        id: 'youtube_restricted_mode',
        title: 'Activar Modo Restringido',
        description: 'Filtra contenido inapropiado automáticamente.',
        tags: ['platform:youtube', 'age:6-8', 'age:9-12', 'age:13-15'],
        severity: 'high',
        platform: 'youtube',
        steps: [
          'Ve a youtube.com y haz clic en tu perfil',
          'Selecciona "Modo restringido"',
          'Activa "Activar modo restringido"',
          'Guarda la configuración'
        ]
      },
      {
        id: 'youtube_kids_app',
        title: 'Usar YouTube Kids',
        description: 'Aplicación específica para niños con contenido curado.',
        tags: ['platform:youtube', 'age:6-8', 'age:9-12'],
        severity: 'high',
        platform: 'youtube',
        steps: [
          'Descarga YouTube Kids desde la tienda de aplicaciones',
          'Configura el perfil de tu hijo',
          'Establece límites de tiempo',
          'Revisa el historial regularmente'
        ]
      },
      {
        id: 'youtube_supervision',
        title: 'Supervisar contenido visto',
        description: 'Revisa regularmente qué videos está viendo tu hijo.',
        tags: ['platform:youtube', 'age:all', 'supervision'],
        severity: 'medium',
        platform: 'youtube',
        steps: [
          'Revisa el historial de reproducción',
          'Habla sobre los videos que ve',
          'Establece horarios específicos para YouTube',
          'Enseña a reportar contenido inapropiado'
        ]
      }
    ],
    tags: ['platform:youtube', 'parental_controls', 'age:6-8', 'age:9-12', 'age:13-15'],
    refs: {
      manualHeading: '1.2 Tu familia y las redes sociales - YouTube'
    }
  },

  {
    id: 'parental_controls_tiktok',
    title: 'Controles Parentales para TikTok',
    body: 'TikTok es muy popular entre adolescentes. Aprende a configurarlo de manera segura.',
    actions: [
      {
        id: 'tiktok_family_pairing',
        title: 'Configurar Emparejamiento Familiar',
        description: 'Conecta tu cuenta con la de tu hijo para supervisar.',
        tags: ['platform:tiktok', 'age:13-15', 'age:16-17'],
        severity: 'high',
        platform: 'tiktok',
        steps: [
          'Abre TikTok en tu dispositivo',
          'Ve a Perfil > Configuración > Emparejamiento familiar',
          'Escanea el código QR desde el dispositivo de tu hijo',
          'Configura los controles deseados'
        ]
      },
      {
        id: 'tiktok_privacy_settings',
        title: 'Configurar Privacidad',
        description: 'Limita quién puede ver y contactar a tu hijo.',
        tags: ['platform:tiktok', 'age:13-15', 'age:16-17'],
        severity: 'high',
        platform: 'tiktok',
        steps: [
          'Ve a Configuración > Privacidad',
          'Cambia cuenta a "Privada"',
          'Desactiva "Permitir que otros me encuentren"',
          'Configura "Quién puede enviarme mensajes"'
        ]
      },
      {
        id: 'tiktok_time_limits',
        title: 'Establecer Límites de Tiempo',
        description: 'Controla cuánto tiempo puede usar TikTok.',
        tags: ['platform:tiktok', 'age:all', 'time_management'],
        severity: 'medium',
        platform: 'tiktok',
        steps: [
          'Ve a Configuración > Bienestar digital',
          'Activa "Límite de tiempo en pantalla"',
          'Establece límite diario (ej: 1 hora)',
          'Configura descansos automáticos'
        ]
      }
    ],
    tags: ['platform:tiktok', 'parental_controls', 'age:13-15', 'age:16-17'],
    refs: {
      manualHeading: '1.2 Tu familia y las redes sociales - TikTok'
    }
  },

  {
    id: 'parental_controls_whatsapp',
    title: 'Controles Parentales para WhatsApp',
    body: 'WhatsApp es la app de mensajería más usada. Aprende a proteger a tu hijo.',
    actions: [
      {
        id: 'whatsapp_privacy_settings',
        title: 'Configurar Privacidad',
        description: 'Controla quién puede ver información de tu hijo.',
        tags: ['platform:whatsapp', 'age:13-15', 'age:16-17'],
        severity: 'high',
        platform: 'whatsapp',
        steps: [
          'Ve a Configuración > Privacidad',
          'Cambia "Última vez" a "Nadie"',
          'Configura "Estado" a "Solo contactos"',
          'Desactiva "Leído" si es necesario'
        ]
      },
      {
        id: 'whatsapp_group_safety',
        title: 'Configurar Seguridad en Grupos',
        description: 'Protege a tu hijo en grupos de WhatsApp.',
        tags: ['platform:whatsapp', 'age:all', 'group_safety'],
        severity: 'medium',
        platform: 'whatsapp',
        steps: [
          'Enseña a no aceptar grupos de desconocidos',
          'Configura "Quién puede agregarme a grupos"',
          'Revisa grupos en los que participa',
          'Enseña a salir de grupos inapropiados'
        ]
      },
      {
        id: 'whatsapp_unknown_contacts',
        title: 'Bloquear Contactos Desconocidos',
        description: 'Evita que desconocidos contacten a tu hijo.',
        tags: ['platform:whatsapp', 'age:all', 'stranger_danger'],
        severity: 'high',
        platform: 'whatsapp',
        steps: [
          'Ve a Configuración > Privacidad',
          'Cambia "Quién puede agregarme" a "Mis contactos"',
          'Bloquea números sospechosos',
          'Enseña a no compartir número con desconocidos'
        ]
      }
    ],
    tags: ['platform:whatsapp', 'parental_controls', 'age:13-15', 'age:16-17'],
    refs: {
      manualHeading: '1.2 Tu familia y las redes sociales - WhatsApp'
    }
  },

  // REGLAS FAMILIARES Y RUTINAS
  {
    id: 'family_rules_routines',
    title: 'Reglas Familiares y Rutinas',
    body: 'Establecer reglas claras y rutinas ayuda a crear un ambiente digital saludable en casa.',
    actions: [
      {
        id: 'device_free_zones',
        title: 'Crear Zonas Libres de Dispositivos',
        description: 'Designa áreas donde no se permiten dispositivos.',
        tags: ['family_rules', 'age:all', 'device_management'],
        severity: 'medium',
        steps: [
          'Designa la mesa del comedor como zona libre',
          'No dispositivos en habitaciones durante la noche',
          'Establece horarios específicos para uso',
          'Crea espacios de convivencia sin pantallas'
        ]
      },
      {
        id: 'screen_time_schedule',
        title: 'Establecer Horarios de Pantalla',
        description: 'Define cuándo y cuánto tiempo pueden usar dispositivos.',
        tags: ['family_rules', 'age:all', 'time_management'],
        severity: 'high',
        steps: [
          'Establece límites por edad (6-8: 1h, 9-12: 2h, 13+: 3h)',
          'No pantallas 1 hora antes de dormir',
          'Prioriza actividades físicas y sociales',
          'Revisa y ajusta horarios regularmente'
        ]
      },
      {
        id: 'family_mealtime_rules',
        title: 'Reglas Durante Comidas',
        description: 'Las comidas son momentos para conectar en familia.',
        tags: ['family_rules', 'age:all', 'communication'],
        severity: 'medium',
        steps: [
          'No dispositivos en la mesa',
          'Usa el tiempo para conversar',
          'Pregunta sobre su día',
          'Crea tradiciones familiares'
        ]
      },
      {
        id: 'bedtime_device_routine',
        title: 'Rutina de Dispositivos Antes de Dormir',
        description: 'Establece una rutina saludable para el descanso.',
        tags: ['family_rules', 'age:all', 'sleep_hygiene'],
        severity: 'high',
        steps: [
          'Recoger dispositivos 1 hora antes de dormir',
          'Cargar dispositivos fuera de la habitación',
          'Crear rutina de relajación',
          'Leer o conversar antes de dormir'
        ]
      }
    ],
    tags: ['family_rules', 'routines', 'age:all'],
    refs: {
      manualHeading: '1.1 Tu Familia Conectada'
    }
  },

  // COMUNICACIÓN Y ACOMPAÑAMIENTO
  {
    id: 'communication_support',
    title: 'Comunicación y Acompañamiento',
    body: 'La comunicación abierta es la base de la protección digital. Aprende a mantener un diálogo constante.',
    actions: [
      {
        id: 'open_dialogue_about_online',
        title: 'Mantener Diálogo Abierto sobre Internet',
        description: 'Habla regularmente sobre la vida digital de tu hijo.',
        tags: ['communication', 'age:all', 'dialogue'],
        severity: 'high',
        steps: [
          'Pregunta sobre sus actividades en línea',
          'Escucha sin juzgar',
          'Comparte tus propias experiencias',
          'Establece confianza mutua'
        ],
        conversationScript: '"Hijo/a, me gustaría saber más sobre lo que haces en internet. ¿Hay algo que te guste o te preocupe? Puedes contarme cualquier cosa."'
      },
      {
        id: 'teach_reporting',
        title: 'Enseñar a Reportar Contenido Inapropiado',
        description: 'Tu hijo debe saber cómo protegerse reportando contenido dañino.',
        tags: ['communication', 'age:9-12', 'age:13-15', 'age:16-17', 'safety'],
        severity: 'high',
        steps: [
          'Explica qué es contenido inapropiado',
          'Muestra cómo reportar en cada plataforma',
          'Enseña a bloquear usuarios problemáticos',
          'Refuerza que siempre puede pedir ayuda'
        ],
        conversationScript: '"Hijo/a, en internet a veces aparecen cosas que no son apropiadas para tu edad. Si ves algo que te haga sentir incómodo/a o te asuste, puedes reportarlo y bloquearlo. Te voy a enseñar cómo hacerlo para que te sientas más seguro/a."'
      },
      {
        id: 'digital_citizenship',
        title: 'Enseñar Ciudadanía Digital',
        description: 'Ayuda a tu hijo a ser un buen ciudadano digital.',
        tags: ['communication', 'age:all', 'education'],
        severity: 'medium',
        steps: [
          'Habla sobre respeto en línea',
          'Enseña sobre privacidad personal',
          'Explica consecuencias de acciones digitales',
          'Modela buen comportamiento digital'
        ],
        conversationScript: '"Hijo/a, ser bueno en internet es como ser bueno en la vida real. Trata a otros con respeto, no compartas información personal, y recuerda que todo lo que escribes o publicas puede quedarse para siempre. ¿Qué opinas sobre esto?"'
      },
      {
        id: 'emergency_plan',
        title: 'Crear Plan de Emergencia Digital',
        description: 'Tu hijo debe saber qué hacer si algo sale mal.',
        tags: ['communication', 'age:all', 'emergency'],
        severity: 'high',
        steps: [
          'Establece contacto de emergencia',
          'Enseña a guardar evidencia',
          'Define cuándo pedir ayuda',
          'Practica escenarios juntos'
        ],
        conversationScript: '"Hijo/a, si algo malo te pasa en internet, quiero que sepas exactamente qué hacer. Siempre puedes venir a mí, pero también es importante que guardes evidencia y sepas cuándo pedir ayuda. Vamos a practicar juntos qué hacer en diferentes situaciones."'
      }
    ],
    tags: ['communication', 'support', 'age:all'],
    refs: {
      manualHeading: '2.3 ¿Qué pasos puedo seguir para abrir un canal de comunicación que me permita acompañar a mi hija o hijo a superar un riesgo digital?'
    }
  },

  // PREOCUPACIONES ESPECÍFICAS
  {
    id: 'concern_cyberbullying',
    title: 'Prevención del Ciberacoso',
    body: 'El ciberacoso es una realidad. Aprende a prevenirlo y manejarlo.',
    actions: [
      {
        id: 'cyberbullying_prevention',
        title: 'Prevenir Ciberacoso',
        description: 'Enseña a tu hijo a protegerse del acoso en línea.',
        tags: ['concern:ciberacoso', 'age:9-12', 'age:13-15', 'age:16-17'],
        severity: 'high',
        steps: [
          'Explica qué es el ciberacoso',
          'Enseña a no responder a provocaciones',
          'Muestra cómo bloquear y reportar',
          'Refuerza que no es su culpa'
        ],
        conversationScript: '"Hijo/a, el ciberacoso es cuando alguien te molesta, amenaza o humilla por internet. Si esto te pasa, recuerda que no es tu culpa y que siempre puedes pedir ayuda. Te voy a enseñar cómo bloquear y reportar a las personas que te hacen daño."'
      },
      {
        id: 'cyberbullying_response',
        title: 'Responder al Ciberacoso',
        description: 'Si tu hijo está siendo acosado, aquí está el plan de acción.',
        tags: ['concern:ciberacoso', 'age:all', 'response'],
        severity: 'high',
        steps: [
          'Escucha sin juzgar',
          'Guarda evidencia del acoso',
          'Reporta en la plataforma',
          'Contacta a la escuela si es necesario',
          'Busca ayuda profesional'
        ],
        conversationScript: '"Hijo/a, si alguien te está acosando por internet, quiero que sepas que estoy aquí para ayudarte. No tienes que enfrentar esto solo/a. Cuéntame qué está pasando y juntos vamos a resolverlo. Tu seguridad es lo más importante."'
      }
    ],
    tags: ['concern:ciberacoso', 'age:9-12', 'age:13-15', 'age:16-17'],
    refs: {
      manualHeading: '2.1 ¿Cómo identificarlos, prevenirlos y qué hacer si ya ocurrieron en casa? - Ciberacoso'
    }
  },

  {
    id: 'concern_grooming',
    title: 'Prevención del Grooming',
    body: 'El grooming es una forma de manipulación que puede llevar a situaciones peligrosas.',
    actions: [
      {
        id: 'grooming_prevention',
        title: 'Prevenir Grooming',
        description: 'Enseña a tu hijo a identificar y evitar el grooming.',
        tags: ['concern:grooming', 'age:9-12', 'age:13-15', 'age:16-17'],
        severity: 'high',
        steps: [
          'Explica qué es el grooming',
          'Enseña a identificar señales de alarma',
          'Refuerza que nunca debe compartir información personal',
          'Establece que siempre puede pedir ayuda'
        ],
        conversationScript: '"Hijo/a, hay personas en internet que pueden tratar de ganarse tu confianza para hacerte daño. Si alguien te pide información personal, fotos privadas, o quiere conocerte en persona, eso es una señal de alarma. Siempre puedes venir a mí si algo te parece raro."'
      },
      {
        id: 'grooming_response',
        title: 'Responder al Grooming',
        description: 'Si sospechas grooming, actúa inmediatamente.',
        tags: ['concern:grooming', 'age:all', 'urgent'],
        severity: 'high',
        steps: [
          'No confrontes al sospechoso',
          'Guarda toda la evidencia',
          'Reporta a las autoridades',
          'Busca ayuda profesional',
          'Protege a tu hijo emocionalmente'
        ],
        conversationScript: '"Hijo/a, si sospecho que alguien está tratando de hacerte daño por internet, voy a actuar inmediatamente para protegerte. No es tu culpa y no tienes que sentirte avergonzado/a. Voy a hacer todo lo necesario para mantenerte seguro/a."'
      }
    ],
    tags: ['concern:grooming', 'age:9-12', 'age:13-15', 'age:16-17'],
    refs: {
      manualHeading: '2.1 ¿Cómo identificarlos, prevenirlos y qué hacer si ya ocurrieron en casa? - Grooming'
    }
  },

  {
    id: 'concern_sexting',
    title: 'Prevención del Sexting',
    body: 'El sexting entre adolescentes es común, pero puede tener consecuencias serias.',
    actions: [
      {
        id: 'sexting_prevention',
        title: 'Prevenir Sexting',
        description: 'Habla abiertamente sobre los riesgos del sexting.',
        tags: ['concern:sexting', 'age:13-15', 'age:16-17'],
        severity: 'high',
        steps: [
          'Explica qué es el sexting y sus riesgos',
          'Habla sobre consentimiento y presión',
          'Enseña sobre privacidad digital',
          'Establece confianza para pedir ayuda'
        ],
        conversationScript: '"Hijo/a, quiero hablarte sobre el sexting. Es cuando las personas envían fotos o mensajes sexuales por internet. Esto puede tener consecuencias serias y las fotos pueden compartirse sin tu permiso. Si alguien te presiona para hacer esto, puedes decirme y te ayudo."'
      },
      {
        id: 'sexting_response',
        title: 'Responder al Sexting',
        description: 'Si tu hijo está involucrado en sexting, maneja la situación con cuidado.',
        tags: ['concern:sexting', 'age:13-15', 'age:16-17', 'response'],
        severity: 'high',
        steps: [
          'Mantén la calma y no juzgues',
          'Habla sobre las consecuencias',
          'Ayuda a eliminar contenido si es posible',
          'Busca orientación profesional',
          'Refuerza la confianza'
        ],
        conversationScript: '"Hijo/a, si has enviado fotos o mensajes sexuales, no voy a juzgarte. Lo importante ahora es protegerte y evitar que esto se vuelva más grande. Vamos a trabajar juntos para resolver esta situación y aprender de ella."'
      }
    ],
    tags: ['concern:sexting', 'age:13-15', 'age:16-17'],
    refs: {
      manualHeading: '2.1 ¿Cómo identificarlos, prevenirlos y qué hacer si ya ocurrieron en casa? - Sexting'
    }
  },

  {
    id: 'concern_excessive_screen_time',
    title: 'Manejo del Tiempo Excesivo en Pantallas',
    body: 'El uso excesivo de pantallas puede afectar el desarrollo y bienestar de tu hijo.',
    actions: [
      {
        id: 'screen_time_assessment',
        title: 'Evaluar Uso Actual de Pantallas',
        description: 'Identifica cuánto tiempo pasa tu hijo en pantallas.',
        tags: ['concern:tiempo_excesivo', 'age:all', 'assessment'],
        severity: 'medium',
        steps: [
          'Registra el tiempo en cada dispositivo',
          'Identifica patrones de uso',
          'Observa cambios en comportamiento',
          'Habla con tu hijo sobre sus hábitos'
        ],
        conversationScript: '"Hijo/a, he notado que pasas mucho tiempo en pantallas últimamente. No es que esté enojado/a, sino que me preocupa que esto pueda estar afectando otras actividades importantes. ¿Podrías contarme qué es lo que más te gusta hacer en internet?"'
      },
      {
        id: 'screen_time_reduction',
        title: 'Reducir Tiempo en Pantallas',
        description: 'Implementa estrategias para reducir el uso excesivo.',
        tags: ['concern:tiempo_excesivo', 'age:all', 'intervention'],
        severity: 'high',
        steps: [
          'Establece límites graduales',
          'Crea actividades alternativas',
          'Usa aplicaciones de control parental',
          'Modela buen uso de pantallas',
          'Celebra logros y progreso'
        ],
        conversationScript: '"Hijo/a, creo que sería bueno para todos nosotros pasar menos tiempo en pantallas. No es un castigo, sino que quiero que tengas tiempo para otras actividades que también son importantes. ¿Qué te parece si establecemos juntos algunos límites que funcionen para todos?"'
      }
    ],
    tags: ['concern:tiempo_excesivo', 'age:all'],
    refs: {
      manualHeading: '2.1 ¿Cómo identificarlos, prevenirlos y qué hacer si ya ocurrieron en casa? - Adicción a pantallas'
    }
  }
];

// Mapeo de medidas existentes a IDs de acciones (para filtrar)
export const measureToActionMap: Record<string, string[]> = {
  'youtube_restricted': ['youtube_restricted_mode'],
  'youtube_kids': ['youtube_kids_app'],
  'tiktok_family_pairing': ['tiktok_family_pairing'],
  'tiktok_privacy': ['tiktok_privacy_settings'],
  'whatsapp_privacy': ['whatsapp_privacy_settings'],
  'device_rules': ['device_free_zones', 'screen_time_schedule'],
  'mealtime_rules': ['family_mealtime_rules'],
  'bedtime_rules': ['bedtime_device_routine']
};
