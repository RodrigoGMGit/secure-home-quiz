import React from 'react';
import { Shield, Users, MessageCircle, BookOpen, ExternalLink, Globe, Gamepad2 } from "lucide-react";

export interface RecursoDescargable {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  colorIndex: number;
  viewUrl: string;
  downloadUrl: string;
}

export interface TerminoGlosario {
  termino: string;
  definicion: string;
  ejemplos?: string[];
  categoria: string;
  consejos?: string;
}

export interface PlataformaExterna {
  id: string;
  nombre: string;
  descripcion: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  esUrgente?: boolean;
}

// Recursos descargables principales
export const recursosDescargables: RecursoDescargable[] = [
  {
    id: "decalogo",
    title: "Decálogo para Padres Digitales",
    description: "10 principios fundamentales para la crianza digital responsable",
    icon: Shield,
    colorIndex: 0, // teal
    viewUrl: "https://docs.google.com/document/d/1voj02IGi1iGntg1ldTxznckMiUJsr--mYMlNRWPPoDk/preview",
    downloadUrl: "https://docs.google.com/document/d/1voj02IGi1iGntg1ldTxznckMiUJsr--mYMlNRWPPoDk/export?format=pdf"
  },
  {
    id: "acuerdos",
    title: "Acuerdos Digitales Familiares",
    description: "Plantilla editable para establecer reglas claras en familia",
    icon: Users,
    colorIndex: 1, // mint
    viewUrl: "https://docs.google.com/document/d/1qnKBZrm5XfImmJNhUApBKCFHPWnqfyPLUYAAaKIZlAA/preview",
    downloadUrl: "https://docs.google.com/document/d/1qnKBZrm5XfImmJNhUApBKCFHPWnqfyPLUYAAaKIZlAA/export?format=pdf"
  },
  {
    id: "preguntas",
    title: "Guía de Preguntas Básicas",
    description: "Preguntas esenciales antes de iniciar redes sociales o videojuegos",
    icon: MessageCircle,
    colorIndex: 2, // olive
    viewUrl: "https://docs.google.com/document/d/1pjTA0XnzBxaHwHXFSfFgQbKVll-MyaGbDRzkEMwUVyQ/preview",
    downloadUrl: "https://docs.google.com/document/d/1pjTA0XnzBxaHwHXFSfFgQbKVll-MyaGbDRzkEMwUVyQ/export?format=pdf"
  },
  {
    id: "glosario",
    title: "Glosario de Términos",
    description: "Diccionario de términos digitales que debes conocer",
    icon: BookOpen,
    colorIndex: 0, // teal
    viewUrl: "https://docs.google.com/document/d/1oRpKssjSotjbCxL-UVSLaIjv489tguNK0SzqdTxyEsU/preview",
    downloadUrl: "https://docs.google.com/document/d/1oRpKssjSotjbCxL-UVSLaIjv489tguNK0SzqdTxyEsU/export?format=pdf"
  }
];

// Términos del glosario interactivo
export const terminosGlosario: TerminoGlosario[] = [
  {
    termino: "Grooming",
    definicion: "Proceso mediante el cual una persona adulta se hace pasar por alguien joven para ganarse la confianza de una niña, niño o adolescente en redes sociales, videojuegos o chats privados.",
    ejemplos: ["Solicitar fotos íntimas", "Pedir encuentros presenciales", "Crear dependencia emocional"],
    categoria: "Riesgos Digitales"
  },
  {
    termino: "Sexting",
    definicion: "Envío de fotos o mensajes sexuales a través de dispositivos electrónicos.",
    ejemplos: ["Envío de fotos íntimas", "Mensajes con contenido sexual", "Videos comprometedores"],
    categoria: "Comportamientos de Riesgo"
  },
  {
    termino: "Deepfakes",
    definicion: "Videos o imágenes manipuladas digitalmente con inteligencia artificial para que una persona parezca decir o hacer algo que nunca ocurrió.",
    ejemplos: ["Videos falsos con rostros", "Imágenes sexuales falsas", "Audio manipulado"],
    categoria: "Tecnología"
  },
  {
    termino: "Ciberacoso",
    definicion: "Molestar, insultar o amenazar a otra persona por internet a través de chats, redes sociales, videojuegos o mensajes.",
    ejemplos: ["Comentarios ofensivos", "Difusión de rumores", "Exclusión en grupos"],
    categoria: "Riesgos Digitales"
  },
  {
    termino: "Phishing",
    definicion: "Técnica de engaño que busca provocar clics en enlaces falsos para obtener datos sensibles como contraseñas o información bancaria.",
    ejemplos: ["Emails falsos de bancos", "Enlaces maliciosos", "Solicitudes de datos personales"],
    categoria: "Seguridad"
  },
  {
    termino: "NSFW",
    definicion: "Not Safe For Work (No seguro para el trabajo). Contenido que puede ser inadecuado para su visualización, generalmente por ser subido de tono, violento u ofensivo.",
    ejemplos: ["Contenido sexual explícito", "Violencia gráfica", "Lenguaje ofensivo"],
    categoria: "Contenido"
  },
  {
    termino: "FOMO",
    definicion: "Fear of Missing Out (Miedo a perderse algo). Ansiedad causada por la sensación de estar perdiéndose experiencias que otros están teniendo en redes sociales.",
    ejemplos: ["Revisar constantemente redes", "Ansiedad por no estar conectado", "Comparación social"],
    categoria: "Psicología Digital"
  },
  {
    termino: "Doxing",
    definicion: "Revelación pública de información personal de alguien sin su consentimiento, como dirección, teléfono o datos privados.",
    ejemplos: ["Publicar direcciones", "Revelar números telefónicos", "Exponer datos familiares"],
    categoria: "Privacidad"
  }
];

// Plataformas externas recomendadas
export const plataformasExternas: PlataformaExterna[] = [
  {
    id: "common-sense",
    nombre: "Common Sense Media",
    descripcion: "Reseñas y recomendaciones sobre contenido digital por edad",
    icon: Globe,
    url: "https://www.commonsensemedia.org/",
    esUrgente: false
  },
  {
    id: "esrb",
    nombre: "ESRB",
    descripcion: "Clasificación oficial de videojuegos por edad y contenido",
    icon: Gamepad2,
    url: "https://www.esrb.org/",
    esUrgente: false
  },
  {
    id: "te-protejo",
    nombre: "Te Protejo México",
    descripcion: "Reporta violencia sexual contra menores de manera anónima y solicita la baja de imágenes o videos de tus hijas o hijos publicados sin autorización",
    icon: Shield,
    url: "https://teprotejomexico.org/",
    esUrgente: true
  }
];

// Colores rotativos para las cards
export const cardColors = [
  "border-brand-teal-500/30 bg-brand-teal-500/10",
  "border-brand-mint-200/40 bg-brand-mint-200/20", 
  "border-brand-olive-500/30 bg-brand-olive-500/10"
];

export const iconColors = [
  "bg-brand-teal-500/20 text-brand-teal-500",
  "bg-brand-mint-200/60 text-brand-ink-800",
  "bg-brand-olive-500/20 text-brand-olive-500"
];
