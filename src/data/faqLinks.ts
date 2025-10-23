// Mapeo de rutas a información específica para FAQs
export interface FAQLinkInfo {
  route: string;
  title: string;
  description: string;
  icon: string;
}

export const faqLinkMapping: Record<string, FAQLinkInfo> = {
  "/aprende/riesgos": {
    route: "/aprende/riesgos",
    title: "Riesgos Digitales",
    description: "Conoce los principales riesgos en línea y cómo proteger a tu familia",
    icon: "Shield"
  },
  "/aprende/comunicacion": {
    route: "/aprende/comunicacion",
    title: "Comunicación y Apoyo",
    description: "Estrategias para mantener comunicación abierta con tus hijos",
    icon: "MessageCircle"
  },
  "/aprende/acciones-legales": {
    route: "/aprende/acciones-legales",
    title: "Acciones Legales",
    description: "Pasos legales para denunciar y proteger a tu familia",
    icon: "Scale"
  },
  "/aprende/controles": {
    route: "/aprende/controles",
    title: "Controles Parentales",
    description: "Herramientas técnicas para supervisar el uso digital",
    icon: "Settings"
  },
  "/aprende/tu-familia": {
    route: "/aprende/tu-familia",
    title: "Tu Familia Digital",
    description: "Guía completa para entender el mundo digital de tus hijos",
    icon: "Users"
  },
  "/recursos": {
    route: "/recursos",
    title: "Recursos Adicionales",
    description: "Herramientas y materiales de apoyo para padres",
    icon: "BookOpen"
  }
};

// Función helper para obtener información de enlace
export const getFAQLinkInfo = (route: string): FAQLinkInfo | null => {
  return faqLinkMapping[route] || null;
};
