export interface CaseStory {
  id: string;
  titulo: string;
  descripcion: string;
  resultado: string;
  leccion: string;
  whatToDo: {
    description: string;
    steps: string[];
  };
}

export const caseStories: CaseStory[] = [
  {
    id: "control-parental",
    titulo: "Caso 1: Cuando el control parental salva vidas",
    descripcion: "Una mamá descubrió gracias a su control parental que su hijo de 9 años estaba usando una app de mensajería donde se comunicaba con personas desconocidas.",
    resultado: "Pudo bloquear la app y hablar con él antes de que pasara algo grave. Desde entonces, revisan juntos cada nueva app que quiere instalar.",
    leccion: "No hay herramienta que sustituya al diálogo, pero sin herramientas, el diálogo llega cuando ya es tarde.",
    whatToDo: {
      description: "Cuando descubres que tu hijo/a está en contacto con desconocidos en línea, es importante actuar con calma y enfoque educativo.",
      steps: [
        "Mantén la calma y agradece el control parental por alertarte",
        "Habla con tu hijo/a sin regaños, pregunta qué aplicación usa y con quién habla",
        "Explica los riesgos de hablar con desconocidos en línea",
        "Bloquea o elimina la aplicación juntos",
        "Establece un acuerdo: revisar juntos cada nueva app antes de instalar",
        "Configura controles parentales más estrictos si es necesario",
        "Mantén comunicación abierta para futuras situaciones"
      ]
    }
  },
  {
    id: "autonomia-soledad",
    titulo: "Caso 2: Cuando soltar demasiado es desconectarse",
    descripcion: "Ana tiene 13 años. Se peleó con su mejor amiga y, en un momento de tristeza, publicó en sus redes un mensaje tipo: 'ojalá desapareciera'.",
    resultado: "Sus papás no supieron nada hasta que una maestra lo reportó. Ana les dijo: 'Ustedes siempre me dicen que resuelva sola mis cosas. Pero esto fue más grande que yo.'",
    leccion: "Tener autonomía no es lo mismo que estar en soledad. El mundo digital es inmenso y cruel cuando nadie nos acompaña.",
    whatToDo: {
      description: "Cuando tu hijo/a adolescente muestra señales de angustia emocional en línea, necesita acompañamiento, no autonomía total.",
      steps: [
        "Reconoce que tu hijo/a necesitaba más acompañamiento",
        "Habla con empatía: 'Entiendo que fue difícil, estoy aquí para ayudarte'",
        "Pregunta qué pasó y cómo se sintió",
        "Explica la diferencia entre autonomía y abandono emocional",
        "Establece momentos regulares de conversación sobre su vida digital",
        "Revisa juntos la configuración de privacidad en redes sociales",
        "Si hay señales de riesgo emocional, busca ayuda profesional"
      ]
    }
  },
  {
    id: "omision-limites",
    titulo: "Caso 3: El ejemplo negativo por omisión",
    descripcion: "Un padre nunca configuró límites, pensando que su hija solo jugaba. Semanas después notó cambios en su conducta y calificaciones.",
    resultado: "Revisando el celular, descubrió que jugaba hasta las 2 a.m. durante semanas. Family Link podría haberlo prevenido desde el primer día.",
    leccion: "El 'que aprenda por las malas' no aplica cuando lo que está en riesgo es su salud emocional o su vida.",
    whatToDo: {
      description: "Cuando descubres que la falta de límites ha afectado el bienestar de tu hijo/a, es momento de implementar controles y rutinas saludables.",
      steps: [
        "Reconoce que la falta de límites es responsabilidad tuya, no de tu hija",
        "Habla con ella sobre los cambios que notaste (conducta, calificaciones)",
        "Configura Google Family Link o control parental del dispositivo",
        "Establece horarios claros para uso de pantallas (ej: no después de 10pm)",
        "Crea rutinas de sueño saludables",
        "Revisa juntos el tiempo de uso semanal",
        "Ajusta límites según sea necesario, con su participación"
      ]
    }
  },
  {
    id: "contenido-violento-grupo",
    titulo: "Caso 4: Contenido violento en grupo de WhatsApp",
    descripcion: "Tu hijo te cuenta que un compañero de la escuela le mandó un video 'gracioso'. Lo abre y resulta ser un clip violento con imágenes perturbadoras. Ya lo vio y se rió con otros en un grupo de WhatsApp.",
    resultado: "Tú no lo sabías. No había forma de bloquear eso antes de que ocurriera. Pero ahora sí puedes hacer algo para guiarle y prevenir futuras situaciones similares.",
    leccion: "No todo se puede controlar, pero siempre puedes estar ahí para guiar.",
    whatToDo: {
      description: "Cuando tu hijo/a ya vio contenido violento o perturbador, es importante manejar la situación con calma y convertirlo en una oportunidad de aprendizaje.",
      steps: [
        "Mantén la calma y no reacciones con enojo o castigo inmediato",
        "Pregúntale qué sintió al ver el video y cómo se sintió después",
        "Explica por qué ese tipo de contenido puede ser dañino",
        "Habla sobre la importancia de tener criterio propio",
        "Enséñale a decir 'no' sin quedarse fuera del grupo",
        "Revisa juntos la configuración de privacidad del grupo",
        "Establece reglas sobre qué tipo de contenido compartir",
        "Mantén comunicación abierta para futuras situaciones similares"
      ]
    }
  }
];
