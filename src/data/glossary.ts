export interface GlossaryEntry {
  term: string;
  definition: string;
  additionalInfo?: {
    title: string;
    items: string[];
  };
}

export const glossaryTerms: Record<string, GlossaryEntry> = {
  grooming: {
    term: "Grooming",
    definition: "Proceso mediante el cual un adulto establece una relación de confianza con un menor para abusar sexualmente de él o ella. Puede ocurrir en línea o en persona.",
    additionalInfo: {
      title: "Señales de alerta:",
      items: [
        "Contacto excesivo por redes sociales",
        "Solicitud de fotos íntimas",
        "Intento de mantener conversaciones privadas",
        "Regalos o favores especiales",
        "Solicitud de encuentros en persona"
      ]
    }
  },
  sexting: {
    term: "Sexting",
    definition: "Envío de mensajes, fotos o videos de contenido sexual a través de dispositivos digitales. Puede incluir desnudos, poses sugerentes o conversaciones sexuales explícitas.",
    additionalInfo: {
      title: "Riesgos principales:",
      items: [
        "Distribución no autorizada de imágenes",
        "Chantaje o extorsión",
        "Acoso sexual",
        "Problemas legales por pornografía infantil",
        "Daño emocional y psicológico"
      ]
    }
  },
  ciberacoso: {
    term: "Ciberacoso",
    definition: "Acoso, intimidación o humillación repetida a través de medios digitales como redes sociales, mensajes o juegos en línea. Puede incluir insultos, amenazas o difusión de rumores.",
    additionalInfo: {
      title: "Formas comunes:",
      items: [
        "Mensajes amenazantes o insultantes",
        "Difusión de rumores falsos",
        "Exclusión intencional de grupos",
        "Suplantación de identidad",
        "Difusión de fotos o videos embarazosos"
      ]
    }
  },
  deepfakes: {
    term: "Deep Fakes",
    definition: "Videos o imágenes falsas creadas con inteligencia artificial que muestran a personas haciendo o diciendo cosas que nunca hicieron. Pueden ser muy convincentes y difíciles de detectar.",
    additionalInfo: {
      title: "Cómo identificarlos:",
      items: [
        "Movimientos faciales poco naturales",
        "Diferencias en la iluminación",
        "Audio que no coincide con los labios",
        "Calidad inconsistente en diferentes partes del video",
        "Verificar la fuente original del contenido"
      ]
    }
  },
  suplantacion: {
    term: "Suplantación de identidad",
    definition: "Crear perfiles falsos usando la identidad de otra persona para engañar, acosar o cometer fraudes. Puede incluir usar fotos, nombres o información personal sin autorización.",
    additionalInfo: {
      title: "Protección:",
      items: [
        "Configurar privacidad en redes sociales",
        "No compartir información personal",
        "Reportar perfiles falsos inmediatamente",
        "Usar contraseñas seguras",
        "Verificar identidad antes de confiar"
      ]
    }
  },
  "emojis-doble": {
    term: "Emojis con doble significado",
    definition: "Emojis que tienen un significado oculto o sexual diferente al aparente. Se usan para comunicar contenido inapropiado de manera discreta en chats grupales.",
    additionalInfo: {
      title: "Ejemplos comunes:",
      items: [
        "🍑 (durazno) = trasero",
        "🍆 (berenjena) = pene",
        "💦 (gotas) = semen",
        "🔥 (fuego) = sexy/atractivo",
        "👅 (lengua) = sexo oral"
      ]
    }
  },
  "redes-anonimas": {
    term: "Redes sociales anónimas",
    definition: "Plataformas donde los usuarios pueden interactuar sin revelar su identidad real. Esto facilita el acoso, grooming y otros comportamientos peligrosos sin consecuencias.",
    additionalInfo: {
      title: "Riesgos principales:",
      items: [
        "Facilita el grooming y acoso",
        "Difusión de contenido inapropiado",
        "Ciberacoso sin consecuencias",
        "Contacto con desconocidos peligrosos",
        "Exposición a contenido extremo"
      ]
    }
  },
  "discurso-odio": {
    term: "Discurso de odio",
    definition: "Contenido que promueve violencia, discriminación o hostilidad hacia grupos específicos basados en raza, religión, género, orientación sexual u otras características.",
    additionalInfo: {
      title: "Impacto en menores:",
      items: [
        "Normalización de la discriminación",
        "Formación de prejuicios",
        "Aislamiento social",
        "Ansiedad y depresión",
        "Comportamiento agresivo"
      ]
    }
  },
  fandoms: {
    term: "Fandoms",
    definition: "Comunidades de fans que se reúnen en línea para compartir contenido sobre sus intereses comunes (series, música, celebridades). Pueden ser positivos pero también exponer a contenido inapropiado.",
    additionalInfo: {
      title: "Aspectos a considerar:",
      items: [
        "Contenido sexualizado de menores",
        "Presión para participar en actividades",
        "Exposición a contenido adulto",
        "Comportamiento obsesivo",
        "Pérdida de tiempo excesivo"
      ]
    }
  },
  nsfw: {
    term: "NSFW",
    definition: "Not Safe For Work (No seguro para el trabajo). Contenido que puede ser inadecuado para su visualización en el trabajo, generalmente por ser subido de tono, pornográfico, sangriento, violento u ofensivo.",
    additionalInfo: {
      title: "Tipos de contenido NSFW:",
      items: [
        "Contenido sexual explícito",
        "Violencia gráfica o sangrienta",
        "Lenguaje ofensivo o discriminatorio",
        "Contenido que promueve actividades ilegales",
        "Material que puede ser perturbador para menores"
      ]
    }
  },
  esrb: {
    term: "ESRB",
    definition: "Entertainment Software Rating Board (Consejo de Clasificación de Software de Entretenimiento). Sistema de clasificación por edades para videojuegos que indica qué contenido es apropiado para cada edad.",
    additionalInfo: {
      title: "Clasificaciones ESRB principales:",
      items: [
        "E (Everyone) - Para todos (6+)",
        "E10+ (Everyone 10+) - Para mayores de 10 años",
        "T (Teen) - Para adolescentes (13+)",
        "M (Mature) - Para adultos (17+)",
        "AO (Adults Only) - Solo para adultos (18+)"
      ]
    }
  },
  mods: {
    term: "Mods",
    definition: "Modificaciones creadas por la comunidad que alteran o amplían un videojuego (nuevos contenidos, ajustes o funcionalidades).",
    additionalInfo: {
      title: "Buenas prácticas:",
      items: [
        "Descargar solo de fuentes confiables",
        "Leer reseñas y verificar permisos",
        "Supervisión adulta en menores",
        "Mantener respaldo del juego original",
        "Evitar mods que habiliten chat o contenido no apto"
      ]
    }
  },
  fps: {
    term: "FPS",
    definition: "First‑Person Shooter (disparos en primera persona). Género de juegos enfocado en combate con perspectiva desde los ojos del personaje.",
    additionalInfo: {
      title: "Aspectos a considerar:",
      items: [
        "Nivel de violencia y realismo",
        "Chat de voz y texto con extraños",
        "Presión por rendimiento competitivo",
        "Configurar filtros de chat y límites de tiempo"
      ]
    }
  },
  "battle-royale": {
    term: "Battle Royale",
    definition: "Modo de juego donde muchos jugadores compiten en un mismo mapa y gana la última persona o equipo en pie.",
    additionalInfo: {
      title: "Riesgos comunes:",
      items: [
        "Chat con desconocidos",
        "Presión social por ganar",
        "Sesiones largas sin pausas",
        "Compras dentro del juego (skins, pases)"
      ]
    }
  },
  robux: {
    term: "Robux",
    definition: "Moneda virtual usada en Roblox para comprar accesorios, juegos y beneficios dentro de la plataforma.",
    additionalInfo: {
      title: "Precauciones:",
      items: [
        "Establecer límites y control parental",
        "Evitar compartir datos de pago",
        "Desconfiar de regalos/estafas de Robux",
        "Hablar sobre presión por apariencia"
      ]
    }
  },
  streaming: {
    term: "Streaming",
    definition: "Transmisión en vivo de video o contenido por internet (por ejemplo, partidas de videojuegos en tiempo real).",
    additionalInfo: {
      title: "Qué vigilar:",
      items: [
        "Contenido inapropiado en tiempo real",
        "Chats abiertos con lenguaje ofensivo",
        "Donaciones y compras impulsivas",
        "Configuraciones de privacidad y filtros"
      ]
    }
  },
  streamers: {
    term: "Streamers",
    definition: "Personas que transmiten en vivo para una audiencia, interactuando por chat y recibiendo apoyo (seguimientos, suscripciones o donaciones).",
    additionalInfo: {
      title: "Conversar en familia:",
      items: [
        "Relaciones parasociales y límites",
        "Conductas adultas no apropiadas",
        "Solicitudes de donaciones",
        "Elegir canales adecuados a la edad"
      ]
    }
  },
  offline: {
    term: "Offline",
    definition: "Estado o actividades sin conexión a internet. También se usa para promover equilibrio con actividades fuera de pantalla.",
    additionalInfo: {
      title: "Recomendaciones:",
      items: [
        "Definir horarios sin pantallas",
        "Fomentar actividades físicas y sociales",
        "Evitar juegos nocturnos",
        "Modelo de equilibrio por parte de adultos"
      ]
    }
  }
};
