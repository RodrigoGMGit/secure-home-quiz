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
      ],
      color: "border-brand-mint-200/40 bg-brand-mint-200/20",
      iconColor: "text-brand-ink-800",
      iconBg: "bg-brand-mint-200/60",
      checkmarkColor: "text-brand-ink-800"
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
      ],
      color: "border-brand-olive-500/30 bg-brand-olive-500/10",
      iconColor: "text-brand-olive-500",
      iconBg: "bg-brand-olive-500/20",
      checkmarkColor: "text-brand-olive-500"
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
      <div className="relative bg-gradient-to-br from-white via-brand-mint-200/20 to-white border-b">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo circular con gradiente */}
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                <Users className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
              Tu Familia Digital
            </h1>
            <p className="font-body text-lg sm:text-xl md:text-2xl text-brand-olive-500 mb-6 sm:mb-8 px-4">
              Conoce los hábitos digitales de tu familia y aprende a crear un hogar digital más seguro
            </p>
            
            {/* Frase destacada mejorada */}
            <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-6 sm:p-8 mx-4 sm:mx-0 shadow-soft">
              <p className="font-body text-base sm:text-lg text-brand-ink-800 font-medium italic">
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
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-gradient-to-r from-brand-olive-500 to-brand-teal-500 rounded-full">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink-900 mb-2">
                ¿Por dónde empezamos?
              </h2>
              <p className="font-body text-sm text-brand-olive-500">
                Guía para padres y madres en el mundo digital
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                      Nuestro rol como guías
                    </h3>
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                      Como madres, padres o personas cuidadoras, somos guías de nuestros hijos e hijas en la nueva 
                      ciudadanía digital, donde el respeto, la protección y la educación digital son clave.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                      La realidad digital actual
                    </h3>
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                      Hoy, la conexión digital empieza muy temprano. YouTube, WhatsApp y los juegos en línea son 
                      parte del día a día de la mayoría de los niños y niñas entre 7 y 11 años.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-teal-500/20 rounded-full flex-shrink-0">
                      <Shield className="h-5 w-5 text-brand-ink-800" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-2">
                        Dato importante
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-brand-ink-800 leading-relaxed">
                        El 65% de los niños ve videos en línea por casi 3 horas al día, 
                        la mayoría en plataformas gratuitas, con publicidad y sin filtros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Banner to Quiz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 sm:mb-16"
          >
            <div id="diagnostico" className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-2">
                  ¿Qué tan seguro es tu hogar digital?
                </h2>
                <p className="font-body text-sm sm:text-base text-brand-olive-500 mb-6">
                  Obtén un diagnóstico rápido y un plan personalizado para tu familia.
                </p>
                <Button asChild variant="primary-brand" className="px-8 py-3">
                  <Link to="/quiz">Hacer el diagnóstico</Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Sections Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`${section.color} border hover:shadow-soft transition-smooth hover:scale-105 h-full`}>
                  <CardHeader className="text-center p-4 sm:p-6">
                    <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 ${section.iconBg} rounded-full w-fit shadow-soft`}>
                      <section.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${section.iconColor}`} />
                    </div>
                    <CardTitle className="font-heading text-lg sm:text-xl text-brand-ink-900">{section.title}</CardTitle>
                    <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {section.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-brand-ink-800">
                          <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 ${section.checkmarkColor} mr-2 sm:mr-3 flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="primary-brand" className="w-full text-sm sm:text-base shadow-soft">
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
            className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-gradient-to-r from-primary to-brand-teal-500 rounded-full">
                  <CheckCircle className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                Recuerda estos 3 elementos clave:
              </h3>
              <p className="font-body text-sm text-brand-olive-500">
                Fundamentos para un hogar digital seguro
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-teal-500">1</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Comunicación Familiar
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                  Aprender sobre seguridad digital no solo protege a niñas, niños y adolescentes: 
                  también fortalece la comunicación familiar y fomenta el diálogo.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-mint-200/60 to-brand-mint-200/40 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-800">2</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Hábitos Seguros
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                  Este manual está diseñado para ayudarte a crear hábitos, rutinas y valores que 
                  hagan de tu hogar un espacio seguro y conectado.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-olive-500/20 to-brand-olive-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-olive-500">3</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Crecimiento Digital
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
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
