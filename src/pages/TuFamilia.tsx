import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Shield, Gamepad2, ChevronRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import GlobalHeader from "@/components/GlobalHeader";

const TuFamilia = () => {
  // Scroll automático al inicio de la página al cambiar de ruta
  useScrollToTop();

  const sections = [
    {
      id: "conectada",
      title: "Tu Familia Conectada",
      description: "Evalúa los hábitos digitales de tu hogar con nuestro checklist interactivo",
      icon: Users,
      href: "/aprende/tu-familia/conectada",
      features: [
        "Checklist de 7 preguntas clave",
        "Evaluación de riesgos en el hogar",
        "Resultados dinámicos con colores",
        "Estadísticas de México"
      ]
    },
    {
      id: "redes-sociales",
      title: "Tu Familia y las Redes Sociales",
      description: "Conoce las plataformas más populares y cómo proteger a tu familia",
      icon: Shield,
      href: "/aprende/tu-familia/redes-sociales",
      features: [
        "TikTok, Instagram, Snapchat",
        "YouTube, WhatsApp, Discord",
        "Controles parentales específicos",
        "Edades mínimas recomendadas"
      ]
    },
    {
      id: "videojuegos",
      title: "Tu Familia y los Videojuegos",
      description: "Aprende sobre los juegos más populares y sus configuraciones de seguridad",
      icon: Gamepad2,
      href: "/aprende/tu-familia/videojuegos",
      features: [
        "Minecraft, Roblox, Fortnite",
        "Call of Duty, Free Fire, GTA",
        "Configuraciones de consolas",
        "Controles parentales en juegos"
      ]
    }
  ];

  return (
    <>
      <GlobalHeader />
      <div className="min-h-screen bg-gradient-subtle">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-olive-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Header Section */}
      <div className="relative bg-white border-b">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
              Tu Familia Digital
            </h1>
            <p className="font-body text-lg sm:text-xl md:text-2xl text-brand-olive-500 mb-6 sm:mb-8 px-4">
              Conoce los hábitos digitales de tu familia y aprende a crear un hogar digital más seguro
            </p>
            <div className="bg-brand-mint-200/50 border border-brand-mint-200 rounded-lg p-4 sm:p-6 mx-4 sm:mx-0">
              <p className="font-body text-base sm:text-lg text-brand-ink-800 font-medium">
                "Proteger tu hogar digital es tan importante como cerrar la puerta con llave"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <motion.div 
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink-900 mb-4 sm:mb-6 text-center px-4">
              ¿Por dónde empezamos?
            </h2>
            <div className="bg-white rounded-lg shadow-soft p-4 sm:p-6 lg:p-8">
              <p className="font-body text-base sm:text-lg text-brand-ink-800 mb-4 sm:mb-6">
                Como madres, padres o personas cuidadoras, somos guías de nuestros hijos e hijas en la nueva 
                ciudadanía digital, donde el respeto, la protección y la educación digital son clave.
              </p>
              <p className="font-body text-base sm:text-lg text-brand-ink-800 mb-4 sm:mb-6">
                Hoy, la conexión digital empieza muy temprano. YouTube, WhatsApp y los juegos en línea son 
                parte del día a día de la mayoría de los niños y niñas entre 7 y 11 años.
              </p>
              <div className="bg-brand-mint-200/50 border-l-4 border-brand-teal-500 p-3 sm:p-4">
                <p className="font-body text-sm sm:text-base text-brand-ink-800 font-medium">
                  <strong>Dato importante:</strong> El 65% de los niños ve videos en línea por casi 3 horas al día, 
                  la mayoría en plataformas gratuitas, con publicidad y sin filtros.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sections Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <div className="mx-auto mb-3 sm:mb-4 p-2 sm:p-3 bg-brand-mint-200 rounded-full w-fit">
                      <section.icon className="h-6 w-6 sm:h-8 sm:w-8 text-brand-teal-500" />
                    </div>
                    <CardTitle className="font-heading text-lg sm:text-xl text-brand-ink-900">{section.title}</CardTitle>
                    <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      {section.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-brand-ink-800">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-brand-teal-500 mr-2 sm:mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="primary-brand" className="w-full text-sm sm:text-base">
                      <Link to={section.href}>
                        Explorar sección
                        <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Key Points */}
          <motion.div 
            className="bg-white rounded-lg shadow-soft p-4 sm:p-6 lg:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-4 sm:mb-6 text-center px-4">
              Recuerda estos 3 elementos clave:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="bg-brand-mint-200 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <span className="font-heading text-lg sm:text-2xl font-bold text-brand-teal-500">1</span>
                </div>
                <p className="font-body text-sm sm:text-base text-brand-ink-800">
                  Aprender sobre seguridad digital no solo protege a niñas, niños y adolescentes: 
                  también fortalece la comunicación familiar y fomenta el diálogo.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-mint-200 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <span className="font-heading text-lg sm:text-2xl font-bold text-brand-teal-500">2</span>
                </div>
                <p className="font-body text-sm sm:text-base text-brand-ink-800">
                  Este manual está diseñado para ayudarte a crear hábitos, rutinas y valores que 
                  hagan de tu hogar un espacio seguro y conectado.
                </p>
              </div>
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="bg-brand-mint-200 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <span className="font-heading text-lg sm:text-2xl font-bold text-brand-teal-500">3</span>
                </div>
                <p className="font-body text-sm sm:text-base text-brand-ink-800">
                  Internet no tiene que dar miedo. Con información, presencia y diálogo, podemos 
                  convertirlo en un espacio de crecimiento, creatividad y conexión en familia.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </>
  );
};

export default TuFamilia;
