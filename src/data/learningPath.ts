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
    invitationText: '¿Empezamos por conocer las plataformas que usan tus hijas e hijos?'
  },
  {
    id: 'redes-sociales',
    title: 'Redes Sociales',
    route: '/aprende/tu-familia/redes-sociales',
    icon: Shield,
    invitationText: 'Ya conoces las redes sociales, ¿exploramos los videojuegos?'
  },
  {
    id: 'videojuegos',
    title: 'Videojuegos',
    route: '/aprende/tu-familia/videojuegos',
    icon: Gamepad2,
    invitationText: '¿Qué tanto sabes sobre los riesgos digitales que enfrentan?'
  },
  {
    id: 'riesgos',
    title: 'Riesgos Digitales',
    route: '/aprende/riesgos',
    icon: Shield,
    invitationText: '¿Y qué puedes hacer entonces para proteger tu hogar digital?'
  },
  {
    id: 'controles',
    title: 'Controles Parentales',
    route: '/aprende/controles',
    icon: Settings,
    invitationText: 'Ya tenemos las herramientas, ¿ahora cómo hablamos con nuestras hijas e hijos?'
  },
  {
    id: 'comunicacion',
    title: 'Comunicación y Apoyo',
    route: '/aprende/comunicacion',
    icon: MessageCircle,
    invitationText: 'Pero... ¿Y si ocurre algo grave?'
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
