import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  BookOpen, 
  Download, 
  ExternalLink, 
  Shield, 
  Users, 
  MessageCircle, 
  Globe, 
  Gamepad2,
  ChevronDown,
  ChevronRight,
  Eye,
  Info
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import GlobalHeader from "@/components/GlobalHeader";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { DecorativeBackground } from "@/components/shared/DecorativeBackground";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { 
  recursosDescargables, 
  terminosGlosario, 
  plataformasExternas,
  cardColors,
  iconColors,
  TerminoGlosario
} from "@/data/recursos";
import TrustLogo from "@/components/TrustLogo";
import WorkshopRequestModal from "@/components/help/WorkshopRequestModal";

// Componente para términos del glosario
const GlosarioTermino = ({ termino, index }: { termino: TerminoGlosario; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      key={termino.termino}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="border-brand-mint-200/30 bg-white/50 hover:shadow-soft transition-smooth">
        <CardHeader 
          className="p-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <CardTitle className="font-heading text-base sm:text-lg text-brand-ink-900 mb-1">
                {termino.termino}
              </CardTitle>
              <Badge variant="outline" className="text-xs">
                {termino.categoria}
              </Badge>
            </div>
            <div className="ml-3">
              {isExpanded ? (
                <ChevronDown className="h-5 w-5 text-brand-teal-500" />
              ) : (
                <ChevronRight className="h-5 w-5 text-brand-teal-500" />
              )}
            </div>
          </div>
        </CardHeader>
        
        {isExpanded && (
          <CardContent className="p-4 pt-0">
            <div className="space-y-3">
              <p className="font-body text-sm text-brand-ink-800 leading-relaxed">
                {termino.definicion}
              </p>
              
              {termino.ejemplos && termino.ejemplos.length > 0 && (
                <div>
                  <h4 className="font-heading text-sm font-semibold text-brand-ink-900 mb-2">
                    Ejemplos:
                  </h4>
                  <ul className="space-y-1">
                    {termino.ejemplos.map((ejemplo: string, i: number) => (
                      <li key={i} className="font-body text-xs text-brand-olive-500 flex items-start">
                        <span className="w-1 h-1 bg-brand-teal-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {ejemplo}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {termino.consejos && (
                <div className="bg-brand-mint-200/20 p-3 rounded-lg border border-brand-mint-200/30">
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading text-xs font-semibold text-brand-ink-900 mb-1">
                        Consejo para padres:
                      </h4>
                      <p className="font-body text-xs text-brand-ink-800 leading-relaxed">
                        {termino.consejos}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
};

const Recursos = () => {
  useScrollToTop();
  const [workshopOpen, setWorkshopOpen] = useState(false);

  return (
    <>
      <GlobalHeader />
      
      <div className="min-h-screen bg-gradient-subtle">
        {/* Elementos decorativos de fondo */}
        <DecorativeBackground />

        {/* Header Principal */}
        <PageHeader
          icon={FileText}
          title="Recursos y Materiales de Apoyo"
          subtitle="Herramientas prácticas para crear un hogar digital seguro"
          highlightQuote="La información es tu primera línea de defensa"
        />

        {/* Contenido Principal */}
        <div className="relative container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Sección: Recursos Descargables */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header de la sección */}
              <SectionHeader
                icon={Download}
                title="Recursos Descargables"
                subtitle="Materiales prácticos para implementar en tu hogar"
                gradientFrom="from-brand-teal-500"
                gradientTo="to-primary"
              />
              
              {/* Grid de recursos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
                {recursosDescargables.map((recurso, index) => {
                  const cardColor = cardColors[recurso.colorIndex];
                  const iconColor = iconColors[recurso.colorIndex];
                  const IconComponent = recurso.icon;
                  
                  return (
                    <motion.div
                      key={recurso.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className={`${cardColor} border hover:shadow-soft transition-smooth hover:scale-105 h-full`}>
                        <CardHeader className="text-center p-4 sm:p-6">
                          {/* Logo circular con icono */}
                          <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 ${iconColor} rounded-full w-fit shadow-soft`}>
                            <IconComponent className="h-6 w-6 sm:h-8 sm:w-8" />
                          </div>
                          
                          <CardTitle className="font-heading text-lg sm:text-xl text-brand-ink-900 mb-2">
                            {recurso.title}
                          </CardTitle>
                          
                          <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500">
                            {recurso.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="p-4 sm:p-6 pt-0">
                          {/* Botones de acción */}
                          <div className="space-y-3">
                            <Button 
                              asChild 
                              variant="outline" 
                              className="w-full text-sm sm:text-base border-brand-teal-500 text-brand-teal-500 hover:bg-brand-mint-200/20"
                            >
                              <a 
                                href={recurso.viewUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <Eye className="mr-2 h-4 w-4" />
                                Visualizar
                              </a>
                            </Button>
                            
                            <Button 
                              asChild 
                              className="w-full text-sm sm:text-base shadow-soft"
                            >
                              <a 
                                href={recurso.downloadUrl} 
                                download={`${recurso.id}.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Download className="mr-2 h-4 w-4" />
                                Descargar PDF
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Sección: Glosario Interactivo */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Header de la sección */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-olive-500 to-brand-teal-500 rounded-full">
                    <BookOpen className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                  Glosario de Términos Digitales
                </h2>
                <p className="font-body text-sm text-brand-olive-500">
                  Conoce el vocabulario del mundo digital
                </p>
              </div>
              
              {/* Contenedor con gradiente */}
              <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
                <div className="max-w-4xl mx-auto">
                  
                  {/* Grid de términos */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {terminosGlosario.map((termino, index) => (
                      <GlosarioTermino key={termino.termino} termino={termino} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sección: Recursos Externos */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Header de la sección */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-primary to-brand-teal-500 rounded-full">
                    <ExternalLink className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                  Plataformas Recomendadas
                </h2>
                <p className="font-body text-sm text-brand-olive-500">
                  Recursos verificados por expertos en seguridad digital
                </p>
              </div>
              
              {/* Grid de plataformas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {plataformasExternas.map((plataforma, index) => {
                  const IconComponent = plataforma.icon;
                  
                  return (
                    <motion.div
                      key={plataforma.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="border-brand-mint-200/30 bg-white/50 hover:shadow-soft transition-smooth hover:scale-105 h-full">
                        <CardHeader className="text-center p-4 sm:p-6">
                          {/* Logo circular */}
                          <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 ${
                            plataforma.esUrgente && plataforma.id !== "te-protejo"
                              ? "bg-red-500/20 text-red-500" 
                              : "bg-brand-teal-500/20 text-brand-teal-500"
                          } rounded-full w-fit shadow-soft`}>
                            {plataforma.id === "te-protejo" ? (
                              <TrustLogo 
                                src="te-protejo-mexico.png"
                                alt="Te Protejo México"
                                className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                              />
                            ) : (
                              <IconComponent className="h-6 w-6 sm:h-8 sm:w-8" />
                            )}
                          </div>
                          
                          <CardTitle className="font-heading text-lg sm:text-xl text-brand-ink-900 mb-2">
                            {plataforma.nombre}
                          </CardTitle>
                          
                          <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500">
                            {plataforma.descripcion}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="p-4 sm:p-6 pt-0">
                          <Button 
                            asChild 
                            className={`w-full text-sm sm:text-base ${
                              plataforma.esUrgente && plataforma.id !== "te-protejo"
                                ? "bg-red-500 hover:bg-red-600" 
                                : "shadow-soft"
                            }`}
                          >
                            <a 
                              href={plataforma.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              {plataforma.esUrgente ? "Reportar ahora" : "Visitar sitio"}
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Final */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-xl p-6 sm:p-8 lg:p-10 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-3">
                  ¿Quieres llevar esta plática a tu institución?
                </h3>
                
                <p className="font-body text-base sm:text-lg text-brand-ink-800 mb-6 leading-relaxed">
                  Talleres y charlas personalizadas sobre seguridad digital para padres, madres y educadores
                </p>
                
                <Button 
                  onClick={() => setWorkshopOpen(true)}
                  className="bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-8 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth"
                >
                  Quiero el taller
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Modal de solicitud de taller */}
            <WorkshopRequestModal open={workshopOpen} onOpenChange={setWorkshopOpen} />

          </div>
        </div>
      </div>
    </>
  );
};

export default Recursos;