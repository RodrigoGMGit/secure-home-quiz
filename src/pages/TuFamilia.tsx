import React from "react";
import { Users, CheckCircle, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import GlobalHeader from "@/components/GlobalHeader";
import LearningPathNav from "@/components/learning-navigation/LearningPathNav";
import { DecorativeBackground } from "@/components/shared/DecorativeBackground";
import { PageHeader } from "@/components/shared/PageHeader";
import { QuizCTA } from "@/components/shared/QuizCTA";

const TuFamilia = () => {
  // Scroll automático al inicio de la página al cambiar de ruta
  useScrollToTop();

  const learnItems = [
    {
      title: "Tu familia y redes sociales",
      description: "Descubrirás las plataformas más populares y, en cada una, cómo ajustar la privacidad, quién puede contactarlos y qué activar para empezar seguro."
    },
    {
      title: "Videojuegos en casa",
      description: "Conocerás los juegos que más usan y, por título, cómo configurar tiempos, chat, compras y filtros según su edad."
    },
    {
      title: "Riesgos digitales clave",
      description: "Identificarás los principales riesgos digitales y, ante cada señal, qué pasos dar y a quién acudir."
    },
    {
      title: "Controles parentales",
      description: "Podrás activar controles parentales y, por dispositivo o app, los ajustes clave para acompañar sin invadir."
    },
    {
      title: "Comunicación y apoyo",
      description: "Fortalecerás los acuerdos familiares y, ante situaciones difíciles, frases y acciones para apoyar sin regaños."
    },
    {
      title: "Acciones legales básicas",
      description: "Sabrás qué hacer si ya ocurrió algo y, para cada caso común, cómo resguardar evidencia y presentar una denuncia."
    }
  ];

  return (
    <>
      <GlobalHeader />
      <div className="min-h-screen bg-gradient-subtle">
      {/* Decorative background elements */}
      <DecorativeBackground />

      {/* Header Section */}
      <PageHeader
        icon={Users}
        title="Tu Familia Digital"
         subtitle="Nuestra meta es que al final de este recorrido tengas claridad sobre en qué enfocarte y cómo hacer tu hogar digital más seguro"
        highlightQuote="Proteger tu hogar digital es tan importante como cerrar la puerta con llave"
      />

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
          <QuizCTA 
            variant="discover"
            title="¿Ya conoces qué tan seguro es tu hogar en el mundo digital?"
            description="Al hacer el diagnostico te ayudamos a prioriza en qué enfocarte y navega mejor el sitio con un plan a tu medida."
            buttonText="Comenzar diagnóstico"
            badgeText="Espera, hay que saber por donde iniciar"
            bullets={["Sabrás por dónde empezar","Identifica tus prioridades","Descubre desde donde inicias"]}
            delay={0.2}
          />

          {/* Qué aprenderás */}
          <motion.div 
            className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-gradient-to-r from-primary to-brand-teal-500 rounded-full">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                ¿Qué aprenderás a lo largo de este sitio?
              </h3>
              <p className="font-body text-sm text-brand-olive-500">Temas clave para proteger tu hogar en el mundo digital</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {learnItems.map((item, index) => {
                const numberBg = [
                  "bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10",
                  "bg-gradient-to-br from-brand-mint-200/60 to-brand-mint-200/40",
                  "bg-gradient-to-br from-brand-olive-500/20 to-brand-olive-500/10"
                ][index % 3];
                const numberColor = [
                  "text-brand-teal-500",
                  "text-brand-ink-800",
                  "text-brand-olive-500"
                ][index % 3];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className={`${numberBg} rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth`}>
                      <span className={`font-heading text-xl sm:text-2xl font-bold ${numberColor}`}>{index + 1}</span>
                    </div>
                    <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">{item.title}</h4>
                    <p className="font-body text-xs sm:text-sm md:text-base text-brand-ink-800 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

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

      {/* Learning Path Navigation */}
      <div className="relative container mx-auto px-4 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto">
          <LearningPathNav currentRoute="/aprende/tu-familia" />
        </div>
      </div>
      </div>
    </>
  );
};

export default TuFamilia;
