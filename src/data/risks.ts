import { DigitalRisk, RiskCategory } from '../types/risks';

export const digitalRisks: DigitalRisk[] = [
  {
    id: 'desinformacion',
    title: 'Desinformación y Noticias Falsas',
    description: 'Acceso a información falsa que puede generar miedo, confusión o reforzar estereotipos',
    icon: '📰',
    howToIdentify: {
      title: 'Cómo identificarlo',
      description: 'Señales de que tu hijo puede estar expuesto a desinformación',
      examples: [
        'Comparte noticias sin verificar la fuente',
        'Muestra miedo o confusión por información que vio en redes',
        'Repite información que parece exagerada o alarmante',
        'No cuestiona la veracidad de lo que ve en internet'
      ]
    },
    whatToDo: {
      title: 'Qué hacer si ya ocurrió',
      description: 'Pasos inmediatos para manejar la situación',
      steps: [
        'Explícale por qué la información es falsa',
        'Busquen juntos fuentes confiables',
        'Enséñale a verificar noticias (fecha, fuente, comparar varias)',
        'Hablen sobre el riesgo de compartir noticias sin comprobar'
      ],
      phrases: [
        'Gracias por contarme qué viste. Vamos a verificar esto juntos',
        'No todo lo que vemos en internet es verdadero',
        'Es importante verificar antes de compartir'
      ]
    },
    howToPrevent: {
      title: 'Cómo prevenir',
      description: 'Estrategias para evitar la exposición a desinformación',
      steps: [
        'Enséñale que mucho en internet es falso, también verdadero',
        'Explica cómo buscar fuentes oficiales',
        'Explícale cómo la desinformación puede afectar sus decisiones y emociones',
        'Fomenta el pensamiento crítico'
      ],
      tips: [
        'Revisa juntos las fuentes de información',
        'Enseña a identificar sitios confiables',
        'Promueve la verificación de datos'
      ]
    },
    severity: 'medium',
    ageGroups: ['9-12', '13-15', '16-17'],
    platforms: ['whatsapp', 'instagram', 'tiktok', 'youtube', 'facebook']
  },
  {
    id: 'adiccion-pantallas',
    title: 'Adicción a Pantallas y Redes Sociales',
    description: 'Uso excesivo de dispositivos que afecta el descanso, rendimiento escolar y convivencia familiar',
    icon: '📱',
    howToIdentify: {
      title: 'Cómo identificarlo',
      description: 'Señales de adicción a dispositivos digitales',
      examples: [
        'Se muestra irritable o ansioso cuando no tiene acceso a dispositivos',
        'Pasa más tiempo en pantallas que en otras actividades',
        'Dificultad para concentrarse en tareas sin dispositivos',
        'Interrumpe actividades familiares para usar dispositivos'
      ]
    },
    whatToDo: {
      title: 'Qué hacer si ya ocurrió',
      description: 'Estrategias para manejar la adicción a pantallas',
      steps: [
        'Observa sus hábitos y pon límites claros',
        'Ayúdale a tener un horario con tiempo sin pantallas',
        'Fomenta actividades al aire libre o en familia sin tecnología',
        'Si no mejora, busca apoyo profesional'
      ],
      phrases: [
        'Entiendo que te gusta usar el celular, pero necesitamos balance',
        'Vamos a crear horarios juntos para usar la tecnología',
        '¿Qué otras actividades te gustan hacer sin pantallas?'
      ]
    },
    howToPrevent: {
      title: 'Cómo prevenir',
      description: 'Medidas preventivas para un uso saludable de la tecnología',
      steps: [
        'Hablen sobre el buen uso de la tecnología',
        'Definan momentos sin pantallas (comidas, antes de dormir)',
        'Da el ejemplo con tu propio uso regulado del celular',
        'Establece reglas claras desde el inicio'
      ],
      tips: [
        'Crea zonas libres de dispositivos en casa',
        'Promueve actividades alternativas',
        'Usa aplicaciones de control de tiempo'
      ]
    },
    severity: 'high',
    ageGroups: ['6-8', '9-12', '13-15', '16-17'],
    platforms: ['whatsapp', 'instagram', 'tiktok', 'youtube', 'roblox', 'minecraft']
  },
  {
    id: 'ciberacoso',
    title: 'Ciberacoso',
    description: 'Molestias, insultos o amenazas por internet en chats, redes sociales, videojuegos o mensajes',
    icon: '😢',
    howToIdentify: {
      title: 'Cómo identificarlo',
      description: 'Señales de que tu hijo puede estar siendo víctima de ciberacoso',
      examples: [
        'Se pone triste o molesto después de usar el celular',
        'Evita conectarse o deja de usar sus redes',
        'Cambia de humor sin razón clara',
        'Se aísla o evita hablar sobre sus actividades en línea'
      ]
    },
    whatToDo: {
      title: 'Qué hacer si ya ocurrió',
      description: 'Pasos inmediatos para proteger y apoyar a tu hijo',
      steps: [
        'Escucha sin regañar: "Gracias por confiar en mí. Estoy aquí para ayudarte"',
        'Guarda pruebas: Toma capturas de los mensajes o publicaciones',
        'Bloquea y reporta al agresor en la plataforma',
        'Brinda apoyo emocional: "Lo que te pasó no está bien. No es tu culpa"',
        'Si es grave, busca ayuda profesional'
      ],
      phrases: [
        'Gracias por confiar en mí. Estoy aquí para ayudarte',
        'Lo que te pasó no está bien. No es tu culpa',
        'Vamos a resolver esto juntos',
        'Prefiero que me cuentes algo difícil a que lo vivas solo'
      ]
    },
    howToPrevent: {
      title: 'Cómo prevenir',
      description: 'Estrategias para prevenir el ciberacoso',
      steps: [
        'Hablen sobre el tema: "¿Alguna vez has visto que alguien moleste a otra persona en línea?"',
        'Enséñale a identificar el acoso y no participar en él',
        'Explícale que debe contar siempre si algo lo hace sentir incómodo',
        'Recuérdale que puede ayudar a un amigo que lo esté pasando mal'
      ],
      tips: [
        'Fomenta la comunicación abierta',
        'Enseña a reportar contenido inapropiado',
        'Promueve el respeto en línea'
      ]
    },
    severity: 'high',
    ageGroups: ['6-8', '9-12', '13-15', '16-17'],
    platforms: ['whatsapp', 'instagram', 'tiktok', 'youtube', 'roblox', 'minecraft', 'discord']
  },
  {
    id: 'contacto-desconocidos',
    title: 'Contacto con Desconocidos en Juegos',
    description: 'Interacción con personas desconocidas en videojuegos que pueden tener malas intenciones',
    icon: '🎮',
    howToIdentify: {
      title: 'Cómo identificarlo',
      description: 'Señales de contacto inapropiado en videojuegos',
      examples: [
        'Alguien le pide que no cuente algo a su papá o mamá',
        'Insiste en conocer dónde vives o cómo te llamas',
        'Quiere pasarse a otra red para seguir platicando',
        'Pide fotos o información personal'
      ]
    },
    whatToDo: {
      title: 'Qué hacer si ya ocurrió',
      description: 'Pasos para proteger a tu hijo del contacto con desconocidos',
      steps: [
        'Háblenlo: "¿Qué te dijo? ¿Cómo empezó la conversación?"',
        'Bloqueen e informen: Ayúdale a bloquear a esa persona y reportarla',
        'Actúa si fue grave: Reporta al usuario en la plataforma',
        'Pongan reglas claras sobre con quién puede jugar'
      ],
      phrases: [
        'Aunque parezca un niño de tu edad, no sabes quién está detrás de la pantalla',
        'Nunca contestes si estás solo en casa ni compartas datos personales',
        'Si alguien te hace sentir incómodo, dime de inmediato'
      ]
    },
    howToPrevent: {
      title: 'Cómo prevenir',
      description: 'Medidas para prevenir el contacto con desconocidos',
      steps: [
        'Explícale los riesgos de chatear con desconocidos',
        'Usa controles parentales: Desactiva el chat o configura el juego',
        'Enseña a detectar alertas de comportamiento sospechoso',
        'Establece reglas claras sobre con quién puede interactuar'
      ],
      tips: [
        'Configura privacidad en videojuegos',
        'Supervisa las interacciones en línea',
        'Enseña a identificar perfiles falsos'
      ]
    },
    severity: 'high',
    ageGroups: ['6-8', '9-12', '13-15', '16-17'],
    platforms: ['roblox', 'minecraft', 'discord', 'twitch']
  },
  {
    id: 'deepfakes',
    title: 'Deepfakes y Contenido Manipulado',
    description: 'Videos o imágenes falsas generadas con inteligencia artificial que pueden dañar la reputación',
    icon: '🎭',
    howToIdentify: {
      title: 'Cómo identificarlo',
      description: 'Señales de contenido manipulado o deepfakes',
      examples: [
        'Videos que parecen reales pero con detalles extraños',
        'Imágenes que muestran a personas haciendo cosas que no hicieron',
        'Contenido que genera confusión sobre qué es real',
        'Videos con sincronización extraña entre audio y video'
      ]
    },
    whatToDo: {
      title: 'Qué hacer si ya ocurrió',
      description: 'Pasos para manejar contenido manipulado',
      steps: [
        'Informa la plataforma o red social sobre el contenido manipulado',
        'Guarda evidencia del video o imagen para acciones legales',
        'Acompaña emocionalmente a tu hijo y refuerza que no es responsable',
        'Genera un plan de acción personal y legal'
      ],
      phrases: [
        'No todo lo que vemos en internet es real',
        'Las deepfakes son una forma de engañar',
        'No eres responsable de ser víctima de estas manipulaciones'
      ]
    },
    howToPrevent: {
      title: 'Cómo prevenir',
      description: 'Estrategias para prevenir la exposición a contenido manipulado',
      steps: [
        'Hablen sobre los riesgos de la manipulación digital',
        'Explícales cómo identificar contenido falso',
        'Fomenta el escepticismo y la verificación de información',
        'Aprovecha para hablar de los peligros del mal uso de la IA'
      ],
      tips: [
        'Enseña a verificar fuentes de videos e imágenes',
        'Promueve el pensamiento crítico',
        'Explica cómo funcionan las deepfakes'
      ]
    },
    severity: 'medium',
    ageGroups: ['9-12', '13-15', '16-17'],
    platforms: ['tiktok', 'instagram', 'youtube', 'whatsapp']
  },
  {
    id: 'discurso-odio',
    title: 'Discurso de Odio',
    description: 'Mensajes que atacan, discriminan o desvalorizan a personas por sus características',
    icon: '💔',
    howToIdentify: {
      title: 'Cómo identificarlo',
      description: 'Señales de exposición a discurso de odio',
      examples: [
        'Comparte o reacciona a mensajes discriminatorios',
        'Usa lenguaje ofensivo hacia grupos específicos',
        'Se muestra influenciado por contenido divisivo',
        'Repite estereotipos o prejuicios'
      ]
    },
    whatToDo: {
      title: 'Qué hacer si ya ocurrió',
      description: 'Estrategias para manejar el discurso de odio',
      steps: [
        'Fomenta una conversación abierta sobre lo que sucedió',
        'Enséñales a ignorar y reportar comentarios de odio',
        'Hablen sobre el impacto negativo del discurso de odio',
        'En situaciones graves, busca apoyo profesional'
      ],
      phrases: [
        'Es importante tratar con respeto a todas las personas',
        'Tu reputación en línea puede influir en tus oportunidades',
        'No difundas contenido que lastime a otros'
      ]
    },
    howToPrevent: {
      title: 'Cómo prevenir',
      description: 'Medidas para prevenir la exposición al discurso de odio',
      steps: [
        'Hablen sobre los diferentes tipos de discurso de odio',
        'Refuerza la importancia de tratar con respeto y empatía',
        'Explica cómo reportar estos comentarios',
        'Promueve la diversidad y el respeto'
      ],
      tips: [
        'Enseña a identificar contenido discriminatorio',
        'Fomenta el pensamiento crítico',
        'Promueve valores de inclusión'
      ]
    },
    severity: 'medium',
    ageGroups: ['9-12', '13-15', '16-17'],
    platforms: ['instagram', 'tiktok', 'youtube', 'twitter', 'discord']
  },
  {
    id: 'contenido-inapropiado',
    title: 'Exposición a Contenido Violento o Sexual',
    description: 'Acceso accidental a contenido inapropiado que puede generar confusión y ansiedad',
    icon: '⚠️',
    howToIdentify: {
      title: 'Cómo identificarlo',
      description: 'Señales de exposición a contenido inapropiado',
      examples: [
        'Se muestra callado o diferente después de usar dispositivos',
        'Evita hablar sobre lo que vio en internet',
        'Cambia de comportamiento o humor',
        'Hace preguntas inusuales sobre temas adultos'
      ]
    },
    whatToDo: {
      title: 'Qué hacer si ya ocurrió',
      description: 'Pasos para manejar la exposición a contenido inapropiado',
      steps: [
        'Hablen sobre lo que vio y por qué es inapropiado',
        'Usa un lenguaje adecuado para su edad',
        'Ayuda a procesar emocionalmente lo que experimentó',
        'Usa herramientas de control parental para prevenir futuros accesos'
      ],
      phrases: [
        'Lo que viste no es para tu edad',
        'No representa las relaciones reales ni el respeto entre personas',
        'Es normal sentir curiosidad, pero siempre puedes preguntarme'
      ]
    },
    howToPrevent: {
      title: 'Cómo prevenir',
      description: 'Estrategias para prevenir la exposición a contenido inapropiado',
      steps: [
        'Conversen sobre la importancia de evitar contenidos inapropiados',
        'Expliquen que algunas imágenes no son adecuadas para su edad',
        'Promuevan el uso de bloqueadores o filtros de contenido',
        'Configura controles parentales en todos los dispositivos'
      ],
      tips: [
        'Activa filtros de contenido en navegadores',
        'Configura restricciones por edad en plataformas',
        'Supervisa el historial de navegación'
      ]
    },
    severity: 'high',
    ageGroups: ['6-8', '9-12', '13-15', '16-17'],
    platforms: ['youtube', 'instagram', 'tiktok', 'roblox', 'minecraft']
  },
  {
    id: 'grooming',
    title: 'Grooming',
    description: 'Proceso donde un adulto se hace pasar por joven para ganarse la confianza de un menor',
    icon: '🕵️',
    howToIdentify: {
      title: 'Cómo identificarlo',
      description: 'Señales de que tu hijo puede estar siendo víctima de grooming',
      examples: [
        'Recibe mensajes de alguien que dice ser de su edad',
        'Alguien le pide mantener conversaciones en secreto',
        'Solicita fotos o información personal',
        'Insiste en conocerlo en persona'
      ]
    },
    whatToDo: {
      title: 'Qué hacer si ya ocurrió',
      description: 'Pasos críticos para proteger a tu hijo del grooming',
      steps: [
        'Escucha con calma, sin juzgar, y valida sus emociones',
        'Conserva toda la evidencia posible (mensajes, perfiles, capturas)',
        'Contacta de inmediato a la Policía Cibernética',
        'Busca acompañamiento psicológico para brindar apoyo'
      ],
      phrases: [
        'Gracias por contarme esto. No es tu culpa',
        'Vamos a resolver esto juntos',
        'Estoy aquí para protegerte'
      ]
    },
    howToPrevent: {
      title: 'Cómo prevenir',
      description: 'Estrategias para prevenir el grooming',
      steps: [
        'Conversen sobre cómo actúan los adultos que buscan engañar',
        'Establezcan reglas claras sobre con quién pueden chatear',
        'Refuérzales que nunca deben guardar en secreto conversaciones incómodas',
        'Supervisa su actividad digital con respeto y acompañamiento'
      ],
      tips: [
        'Enseña a identificar perfiles falsos',
        'Promueve la comunicación abierta',
        'Configura privacidad en redes sociales'
      ]
    },
    severity: 'high',
    ageGroups: ['9-12', '13-15', '16-17'],
    platforms: ['whatsapp', 'instagram', 'discord', 'roblox', 'minecraft']
  },
  {
    id: 'retos-peligrosos',
    title: 'Retos Virales Peligrosos',
    description: 'Retos en redes sociales que pueden poner en riesgo la salud o integridad física',
    icon: '🔥',
    howToIdentify: {
      title: 'Cómo identificarlo',
      description: 'Señales de participación en retos peligrosos',
      examples: [
        'Menciona retos que vio en TikTok o Instagram',
        'Quiere participar en actividades que parecen peligrosas',
        'Se siente presionado por sus amigos a hacer algo',
        'Busca validación a través de retos virales'
      ]
    },
    whatToDo: {
      title: 'Qué hacer si ya ocurrió',
      description: 'Pasos para manejar la participación en retos peligrosos',
      steps: [
        'Acompáñale con empatía: pregúntale qué lo motivó a participar',
        'Analicen en conjunto las consecuencias del reto',
        'Si hubo lesiones, busquen apoyo médico y psicológico',
        'Reporten el contenido si fue publicado en redes'
      ],
      phrases: [
        'Entiendo que querías ser parte del grupo',
        'Vamos a hablar sobre por qué ese reto es peligroso',
        'Tu seguridad es más importante que la popularidad'
      ]
    },
    howToPrevent: {
      title: 'Cómo prevenir',
      description: 'Estrategias para prevenir la participación en retos peligrosos',
      steps: [
        'Habla sobre la diferencia entre lo divertido y lo riesgoso',
        'Refuerza su autoestima para que no necesiten validación externa',
        'Fomenta el pensamiento crítico: no todo lo popular es sano',
        'Enseña a evaluar riesgos antes de participar'
      ],
      tips: [
        'Promueve actividades seguras y divertidas',
        'Fomenta la confianza en sí mismo',
        'Enseña a resistir la presión de grupo'
      ]
    },
    severity: 'high',
    ageGroups: ['9-12', '13-15', '16-17'],
    platforms: ['tiktok', 'instagram', 'youtube', 'snapchat']
  },
  {
    id: 'sexting',
    title: 'Sexting',
    description: 'Envío de mensajes, fotos o videos de contenido sexual por internet',
    icon: '💌',
    howToIdentify: {
      title: 'Cómo identificarlo',
      description: 'Señales de que tu hijo puede estar involucrado en sexting',
      examples: [
        'Recibe o envía fotos íntimas por mensajes',
        'Mantiene conversaciones de contenido sexual',
        'Se muestra nervioso cuando revisas su teléfono',
        'Recibe presión para enviar fotos personales'
      ]
    },
    whatToDo: {
      title: 'Qué hacer si ya ocurrió',
      description: 'Pasos para manejar situaciones de sexting',
      steps: [
        'Mantén la calma y no juzgues',
        'Habla sobre los riesgos y consecuencias',
        'Ayuda a eliminar el contenido si es posible',
        'Reporta si hay coerción o distribución no consentida'
      ],
      phrases: [
        'Entiendo que fue una decisión difícil',
        'Vamos a hablar sobre los riesgos de compartir fotos íntimas',
        'Tu privacidad es importante'
      ]
    },
    howToPrevent: {
      title: 'Cómo prevenir',
      description: 'Estrategias para prevenir el sexting',
      steps: [
        'Habla abiertamente sobre sexualidad y privacidad',
        'Explica los riesgos de compartir contenido íntimo',
        'Enseña sobre el consentimiento y el respeto',
        'Promueve la comunicación abierta sobre relaciones'
      ],
      tips: [
        'Fomenta la educación sexual apropiada para la edad',
        'Enseña sobre privacidad digital',
        'Promueve el respeto en las relaciones'
      ]
    },
    severity: 'high',
    ageGroups: ['13-15', '16-17'],
    platforms: ['whatsapp', 'instagram', 'snapchat', 'telegram']
  }
];

export const riskCategories: RiskCategory[] = [
  {
    id: 'contenido',
    name: 'Contenido Inapropiado',
    description: 'Riesgos relacionados con exposición a contenido no adecuado para la edad',
    risks: digitalRisks.filter(risk => 
      ['desinformacion', 'deepfakes', 'contenido-inapropiado'].includes(risk.id)
    )
  },
  {
    id: 'interaccion',
    name: 'Interacción Social',
    description: 'Riesgos relacionados con la interacción con otras personas en línea',
    risks: digitalRisks.filter(risk => 
      ['ciberacoso', 'contacto-desconocidos', 'grooming', 'discurso-odio'].includes(risk.id)
    )
  },
  {
    id: 'comportamiento',
    name: 'Comportamiento Adictivo',
    description: 'Riesgos relacionados con el uso excesivo de tecnología',
    risks: digitalRisks.filter(risk => 
      ['adiccion-pantallas', 'retos-peligrosos', 'sexting'].includes(risk.id)
    )
  }
];
