import React from 'react';
import { Users, Shield, Gamepad2, Settings, MessageCircle, Scale, ArrowLeft, ArrowRight } from 'lucide-react';

export interface LearningPathPage {
  id: string;
  title: string;
  route: string;
  icon: React.ComponentType<{ className?: string }>;
  invitationText: string;
}

export const learningPathConfig: LearningPathPage[] = [
  {
    id: 'tu-familia',
    title: 'Tu Familia',
    route: '/aprende/tu-familia',
    icon: Users,
    invitationText: '¿Quieres conocer las plataformas que usan tus hijos?'
  },
  {
    id: 'redes-sociales',
    title: 'Redes Sociales',
    route: '/aprende/tu-familia/redes-sociales',
    icon: Shield,
    invitationText: 'Ahora que conoces las redes sociales, ¿exploramos los videojuegos?'
  },
  {
    id: 'videojuegos',
    title: 'Videojuegos',
    route: '/aprende/tu-familia/videojuegos',
    icon: Gamepad2,
    invitationText: '¿Sabes cuáles son los riesgos digitales que enfrentan?'
  },
  {
    id: 'riesgos',
    title: 'Riesgos Digitales',
    route: '/aprende/riesgos',
    icon: Shield,
    invitationText: '¿Listo para aprender a proteger tu hogar digital?'
  },
  {
    id: 'controles',
    title: 'Controles Parentales',
    route: '/aprende/controles',
    icon: Settings,
    invitationText: 'Las herramientas están listas, ¿cómo hablamos con nuestros hijos?'
  },
  {
    id: 'comunicacion',
    title: 'Comunicación y Apoyo',
    route: '/aprende/comunicacion',
    icon: MessageCircle,
    invitationText: '¿Conoces qué hacer si ocurre algo grave?'
  },
  {
    id: 'acciones-legales',
    title: 'Acciones Legales',
    route: '/aprende/acciones-legales',
    icon: Scale,
    invitationText: ''
  }
];

export const getLearningPathNavigation = (currentRoute: string) => {
  const currentIndex = learningPathConfig.findIndex(page => page.route === currentRoute);
  
  if (currentIndex === -1) {
    return null;
  }

  const currentPage = learningPathConfig[currentIndex];
  const previousPage = currentIndex > 0 ? learningPathConfig[currentIndex - 1] : null;
  const nextPage = currentIndex < learningPathConfig.length - 1 ? learningPathConfig[currentIndex + 1] : null;

  return {
    current: currentPage,
    previous: previousPage,
    next: nextPage,
    isFirst: currentIndex === 0,
    isLast: currentIndex === learningPathConfig.length - 1
  };
};
