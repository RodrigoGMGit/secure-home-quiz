/**
 * Fuente de verdad del copy de la experiencia scrollytelling en `/about`.
 * Ver blueprint en markdown_files/project_context.md §3.2
 */

export type SignalIcon = "moon" | "heartPulse" | "messagesSquare";

export interface QuickFix {
  title: string;
}

export interface Signal {
  title: string;
  body: string;
  icon: SignalIcon;
}

export interface MiniCaso {
  situation: string;
  action: string;
}

export interface ScrollySceneData {
  id: string;
  eyebrow: string;
  title: string;
  /** Si true, el título se muestra con TextType (máquina de escribir) */
  titleTypewriter?: boolean;
  paragraph: string;
  chip?: string;
  platformChips?: string[];
  quickFixes?: QuickFix[];
  signals?: Signal[];
  /** Texto bajo las señales (icono MessageCircle) */
  footNote?: string;
  miniCasos?: MiniCaso[];
  before?: string[];
  after?: string[];
  /** Texto del sello en escena 6 */
  seal?: string;
}

export const SCROLLY_SCENE_COUNT = 6;

export const scrollyScenes: ScrollySceneData[] = [
  {
    id: "scene-1-puerta",
    eyebrow: "Bienvenida",
    title:
      "Cerrar la puerta con llave ya no es suficiente, el riesgo también está en línea.",
    titleTypewriter: true,
    paragraph:
      "Hoy, quienes quieren aprovecharse de niñas, niños y adolescentes ya no necesitan forzar una puerta: buscan entrar por el Wi-Fi de casa, a través de apps, chats de videojuegos y redes sociales.",
    chip: "La información es tu primera línea de defensa.",
  },
  {
    id: "scene-2-plataformas",
    eyebrow: "Lo que usan en casa",
    title: "Las apps que ya están en tu hogar",
    paragraph:
      "WhatsApp, YouTube y YouTube Kids, Roblox, Minecraft y TikTok (13+). No vamos a pedirte que las prohíbas. Vamos a enseñarte los 3 ajustes que cambian todo.",
    platformChips: [
      "WhatsApp",
      "YouTube",
      "YouTube Kids",
      "Roblox",
      "Minecraft",
      "TikTok 13+",
    ],
    quickFixes: [
      { title: "Activa controles parentales en cada dispositivo" },
      { title: "Revisa privacidad: cuentas privadas, ubicación apagada" },
      { title: "Pon límite de tiempo diario y horario sin pantallas" },
    ],
  },
  {
    id: "scene-3-senales",
    eyebrow: "Cómo notarlo",
    title: "Tres señales que no debes pasar por alto",
    paragraph: "No necesitas espiar. Necesitas observar y conversar.",
    signals: [
      {
        title: "Sueño",
        body: "Se desvela, revisa el celular en la madrugada o está cansado todo el día.",
        icon: "moon",
      },
      {
        title: "Ánimo",
        body: "Irritabilidad, aislamiento o ansiedad al recibir notificaciones.",
        icon: "heartPulse",
      },
      {
        title: "Chats",
        body: "Oculta la pantalla cuando te acercas o borra conversaciones.",
        icon: "messagesSquare",
      },
    ],
    footNote:
      "Si notas una señal, abre el diálogo sin acusar. Pregunta, escucha, acompaña.",
  },
  {
    id: "scene-4-minicasos",
    eyebrow: "Ejemplos reales",
    title: "Situaciones que sí pasan",
    paragraph: "Pequeñas decisiones que cambian el desenlace.",
    miniCasos: [
      {
        situation:
          "Tu hija acepta una solicitud de alguien que dice estudiar con ella. No se conocen en persona.",
        action:
          "Revisen juntas la cuenta: ¿es privada? ¿qué publica? ¿hay fotos reconocibles?",
      },
      {
        situation: "Tu hijo recibe un reto viral por TikTok.",
        action:
          "Hablen del reto, busquen noticias de lo ocurrido a otras personas y decidan juntos.",
      },
      {
        situation: "Un adulto desconocido le escribe desde un chat de Roblox.",
        action:
          "Bloquear, reportar y guardar capturas. Reportar en TePROTEJO México.",
      },
    ],
  },
  {
    id: "scene-5-tresminutos",
    eyebrow: "Tu plan en 3 minutos",
    title: "En 3 minutos obtienes un plan simple para tu familia",
    paragraph:
      "Con pasos concretos puedes pasar de la incertidumbre a decisiones claras y accionables.",
    before: ["Dudas generales", "Reglas vagas", "Reacción cuando ya pasó."],
    after: [
      "Riesgos claros por edad y plataforma",
      "Acciones concretas priorizadas",
      "Guiones de conversación listos.",
    ],
  },
  {
    id: "scene-6-cierre",
    eyebrow: "No estás sola, no estás solo",
    title: "Proteger tu hogar digital es como cerrar la puerta con llave",
    paragraph:
      "No se trata de tener miedo. Se trata de acompañar con información, presencia y diálogo.",
    seal: "Hecho en México · Para familias mexicanas · WCAG AA",
  },
];
