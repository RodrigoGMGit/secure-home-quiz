import React from "react";
import { motion } from "framer-motion";
import { Construction, ArrowLeft, Clock, Wrench, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";

interface EnConstruccionProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  expectedContent?: string[];
  returnPath?: string;
}

const EnConstruccion: React.FC<EnConstruccionProps> = ({
  title,
  description,
  icon: Icon,
  expectedContent = [],
  returnPath = "/"
}) => {
  return (
    <>
      <GlobalHeader />
      <div className="min-h-screen bg-gradient-subtle">
        {/* Elementos decorativos de fondo */}
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
                  <Construction className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
                {title}
              </h1>
              <p className="font-body text-lg sm:text-xl md:text-2xl text-brand-olive-500 mb-6 sm:mb-8 px-4">
                {description}
              </p>
              
              {/* Frase destacada */}
              <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-6 sm:p-8 mx-4 sm:mx-0 shadow-soft">
                <div className="flex items-center justify-center mb-3">
                  <Wrench className="h-6 w-6 text-brand-teal-500 mr-2" />
                  <span className="font-heading text-sm font-semibold text-brand-teal-500 uppercase tracking-wide">En desarrollo</span>
                </div>
                <p className="font-body text-base sm:text-lg text-brand-ink-800 font-medium italic">
                  "Estamos trabajando para brindarte la mejor experiencia"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-6xl mx-auto">
            {/* Sección de introducción */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-olive-500 to-brand-teal-500 rounded-full">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink-900 mb-2">
                  ¿Qué encontrarás aquí?
                </h2>
                <p className="font-body text-sm text-brand-olive-500">
                  Contenido especializado en desarrollo
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                        Contenido especializado
                      </h3>
                      <p className="font-body text-base text-brand-ink-800 leading-relaxed">
                        Estamos desarrollando contenido específico y detallado para esta sección, 
                        adaptado a las necesidades de las familias mexicanas.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                        Recursos actualizados
                      </h3>
                      <p className="font-body text-base text-brand-ink-800 leading-relaxed">
                        Nuestro equipo está trabajando para ofrecerte los recursos más actualizados 
                        y relevantes para la seguridad digital familiar.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-teal-500/20 rounded-full flex-shrink-0">
                        <Lightbulb className="h-5 w-5 text-brand-teal-500" />
                      </div>
                      <div>
                        <h4 className="font-heading text-base font-semibold text-brand-ink-900 mb-2">
                          Próximamente disponible
                        </h4>
                        <p className="font-body text-sm text-brand-ink-800 leading-relaxed">
                          Esta sección estará disponible pronto con contenido especializado y recursos 
                          actualizados para ayudarte a proteger a tu familia en el mundo digital.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contenido esperado */}
            {expectedContent.length > 0 && (
              <motion.div 
                className="mb-12 sm:mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-2 bg-gradient-to-r from-primary to-brand-teal-500 rounded-full">
                      <Clock className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                    Contenido en desarrollo
                  </h3>
                  <p className="font-body text-sm text-brand-olive-500">
                    Estas son algunas de las funcionalidades que encontrarás
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {expectedContent.map((item, index) => (
                      <div key={index} className="text-center group">
                        <div className="rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10">
                          <span className="font-heading text-xl sm:text-2xl font-bold text-brand-teal-500">
                            {index + 1}
                          </span>
                        </div>
                        <h4 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-3">
                          {item}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Botón de regreso */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to={returnPath}>
                <Button className="bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-8 py-3 text-lg font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Regresar al inicio
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnConstruccion;
