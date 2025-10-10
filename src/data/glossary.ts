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
  }
};
