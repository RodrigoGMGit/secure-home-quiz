import { Clock, Eye, Shield, Globe, Smartphone, AlertCircle, Download } from 'lucide-react';
import { ExpressQuizAnswers } from '@/types/quiz';

export const questionMapping: Record<keyof ExpressQuizAnswers, {
  question: string;
  negativeResponse: {
    title: string;
    learnHow: string; // "Te enseñaremos a..."
    icon: typeof Clock;
  };
}> = {
  q1_time_limits: {
    question: '¿Tienes establecido un límite diario de tiempo frente a pantallas para tus hijos e hijas?',
    negativeResponse: {
      title: 'Límites de tiempo',
      learnHow: 'Te enseñaremos a establecer límites diarios de tiempo frente a pantallas apropiados para cada edad',
      icon: Clock
    }
  },
  q2_content_supervision: {
    question: '¿Supervisas regularmente el tipo de contenido que consumen en plataformas como YouTube, TikTok o videojuegos?',
    negativeResponse: {
      title: 'Supervisión de contenido',
      learnHow: 'Te mostraremos cómo supervisar de manera efectiva el contenido que consumen en YouTube, TikTok y videojuegos',
      icon: Eye
    }
  },
  q3_parental_controls: {
    question: '¿Has activado controles parentales en dispositivos como celulares, tablets, consolas o televisores inteligentes?',
    negativeResponse: {
      title: 'Controles parentales',
      learnHow: 'Te guiaremos paso a paso para activar controles parentales en celulares, tablets, consolas y televisores',
      icon: Shield
    }
  },
  q4_platform_knowledge: {
    question: '¿Conoces los riesgos de las aplicaciones y redes sociales que las niñas, niños y adolescentes utilizan y cómo funcionan?',
    negativeResponse: {
      title: 'Conocimiento de plataformas',
      learnHow: 'Te explicaremos los riesgos específicos de cada plataforma y red social, y cómo funcionan',
      icon: Globe
    }
  },
  q5_device_rules: {
    question: '¿Tienen reglas claras sobre el uso de dispositivos durante la noche o en momentos familiares (como comidas)?',
    negativeResponse: {
      title: 'Reglas familiares',
      learnHow: 'Te ayudaremos a establecer reglas claras sobre el uso de dispositivos durante comidas y antes de dormir',
      icon: Smartphone
    }
  },
  q6_report_training: {
    question: '¿Has enseñado a tus hijos o hijas a identificar y reportar contenido inapropiado o conductas sospechosas en línea?',
    negativeResponse: {
      title: 'Enseñanza de reporte',
      learnHow: 'Te daremos herramientas para enseñar a tus hijos a identificar y reportar contenido inapropiado y conductas sospechosas',
      icon: AlertCircle
    }
  },
  q7_monitoring_tools: {
    question: '¿Utilizas herramientas de monitoreo o informes de actividad digital para revisar su comportamiento en línea?',
    negativeResponse: {
      title: 'Herramientas de monitoreo',
      learnHow: 'Te presentaremos herramientas de monitoreo y cómo usarlas de manera respetuosa y efectiva',
      icon: Download
    }
  }
};
