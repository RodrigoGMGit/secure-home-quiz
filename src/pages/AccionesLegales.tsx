import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Shield, Phone, FileText, Users, AlertTriangle, CheckCircle, ExternalLink, Clock, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import GlobalHeader from "@/components/GlobalHeader";
import LearningPathNav from "@/components/learning-navigation/LearningPathNav";
import { QuizCTA } from "@/components/shared/QuizCTA";
import TrustLogo from "@/components/TrustLogo";

const AccionesLegales = () => {
  // Scroll automático al inicio de la página al cambiar de ruta
  useScrollToTop();

  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  // Datos de autoridades y recursos legales
  const autoridades = [
    {
      id: "policia-cibernetica",
      nombre: "Policía Cibernética",
      descripcion: "Función orientadora para resolver dudas sobre delitos cibernéticos",
      icon: Shield,
      telefono: "088",
      telefonoExt: "33 3837 6000 ext. 15878",
      email: "policia.cibernetica@jalisco.gob.mx",
      web: "https://fiscalia.jalisco.gob.mx/policia-cibernetica",
      caracteristicas: [
        "Función orientadora",
        "Herramientas de recuperación de contraseñas",
        "Prevención del delito",
        "Soporte especializado"
      ],
      color: "border-brand-teal-500/30 bg-brand-teal-500/10",
      iconColor: "text-brand-teal-500",
      iconBg: "bg-brand-teal-500/20",
      checkmarkColor: "text-brand-teal-500"
    },
    {
      id: "fiscalia-estatal",
      nombre: "Fiscalía del Estado de Jalisco",
      descripcion: "Investigación de delitos cibernéticos y procedimientos de denuncia",
      icon: FileText,
      direccion: "Calle 14 No. 2550, entre Calle 3 y Calle 5, Zona Industrial, CP 44940, Guadalajara, Jalisco",
      horario: "Lunes a Viernes de 8:00 a 21:00 hrs",
      caracteristicas: [
        "Investigación de delitos cibernéticos",
        "Suplantación de identidad",
        "Ciberacoso y sexting",
        "Carpeta de investigación"
      ],
      color: "border-brand-mint-200/40 bg-brand-mint-200/20",
      iconColor: "text-brand-ink-800",
      iconBg: "bg-brand-mint-200/60",
      checkmarkColor: "text-brand-ink-800"
    },
    {
      id: "te-protejo-mexico",
      nombre: "Te Protejo México",
      descripcion: "Plataforma digital para reportar violencia sexual contra menores y solicitar la baja de imágenes o videos de tus hijas o hijos publicados sin autorización",
      icon: Users,
      web: "https://teprotejomexico.org/",
      caracteristicas: [
        "Reportes anónimos y gratuitos",
        "Violencia sexual contra menores",
        "Protección de datos",
        "Coordinación con autoridades"
      ],
      color: "border-brand-olive-500/30 bg-brand-olive-500/10",
      iconColor: "text-brand-olive-500",
      iconBg: "bg-brand-olive-500/20",
      checkmarkColor: "text-brand-olive-500"
    }
  ];

  const organismosInternacionales = [
    {
      id: "interpol",
      nombre: "Interpol",
      descripcion: "Organización internacional de policía criminal",
      caracteristicas: ["Delitos internacionales", "Coordinación global", "Red 24/7"]
    },
    {
      id: "europol",
      nombre: "Europol",
      descripcion: "Oficina Europea de Policía",
      caracteristicas: ["Delitos en Europa", "Cooperación internacional", "Ciberdelitos"]
    },
    {
      id: "child-helpline",
      nombre: "Child Helpline International",
      descripcion: "Red global de líneas de ayuda para niños",
      caracteristicas: ["Apoyo emocional", "Recursos internacionales", "24/7 disponible"]
    }
  ];

  const pasosDenuncia = [
    {
      numero: 1,
      titulo: "Recopilar evidencia",
      descripcion: "Guarda capturas de pantalla, enlaces o cualquier otra evidencia relevante",
      icon: FileText
    },
    {
      numero: 2,
      titulo: "Denunciar rápidamente",
      descripcion: "Es vital denunciar lo antes posible para evitar que el delito se repita o agrave",
      icon: AlertTriangle
    },
    {
      numero: 3,
      titulo: "Seguir el proceso legal",
      descripcion: "Mantente informado sobre el avance del caso y coopera con las autoridades",
      icon: CheckCircle
    }
  ];

  const marcoLegalAdultos = [
    {
      titulo: "Fin de patria potestad",
      descripcion: "A partir de los 18 años, los padres ya no tienen autoridad legal sobre sus hijos",
      icon: Users
    },
    {
      titulo: "Obligación de manutención",
      descripcion: "Los padres deben proporcionar alimentos hasta que terminen una carrera profesional, siempre y cuando estudien de forma regular",
      icon: FileText
    },
    {
      titulo: "Derecho a intimidad",
      descripcion: "Un hijo mayor de edad tiene derecho a la intimidad, incluso dentro de la casa de los padres",
      icon: Shield
    },
    {
      titulo: "Condiciones de convivencia",
      descripcion: "Los padres pueden establecer normas de convivencia como dueños del inmueble",
      icon: CheckCircle
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
                  <Scale className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
                Acciones Legales
              </h1>
              <p className="font-body text-lg sm:text-xl md:text-2xl text-brand-olive-500 mb-6 sm:mb-8 px-4">
                Conoce tus derechos y las acciones legales disponibles para proteger a tu familia en el mundo digital
              </p>
              
              {/* Frase destacada */}
              <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-6 sm:p-8 mx-4 sm:mx-0 shadow-soft">
                <p className="font-body text-base sm:text-lg text-brand-ink-800 font-medium italic">
                  "Conocer tus derechos es el primer paso para proteger a tu familia"
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
                    <Scale className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink-900 mb-2">
                  ¿Qué hacer cuando tu hijo vive un problema digital?
                </h2>
                <p className="font-body text-sm text-brand-olive-500">
                  Marco legal mexicano para la protección de menores
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                        Marco legal mexicano
                      </h3>
                      <p className="font-body text-base text-brand-ink-800 leading-relaxed">
                        En México, las situaciones que pueden constituir delitos cometidos contra menores de edad 
                        en el ámbito cibernético van a ser investigados por las Fiscalías Estatales.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                        Procedimientos de denuncia
                      </h3>
                      <p className="font-body text-base text-brand-ink-800 leading-relaxed">
                        Existen varias opciones para denunciar casos de delitos en línea, desde autoridades locales 
                        hasta organismos internacionales especializados.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-teal-500/20 rounded-full flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-brand-ink-800" />
                      </div>
                      <div>
                        <h4 className="font-heading text-base font-semibold text-brand-ink-900 mb-2">
                          Dato importante
                        </h4>
                        <p className="font-body text-sm text-brand-ink-800 leading-relaxed">
                          La Fiscalía General de la República investiga delitos en materia de trata de personas 
                          cuando existe una posible conexión con la delincuencia organizada.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Autoridades y Recursos */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                  Autoridades y Recursos Legales
                </h2>
                <p className="font-body text-sm text-brand-olive-500">
                  Contactos especializados para casos de delitos cibernéticos
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {autoridades.map((autoridad, index) => (
                  <motion.div
                    key={autoridad.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className={`${autoridad.color} border hover:shadow-soft transition-smooth hover:scale-105 h-full`}>
                      <CardHeader className="text-center p-4 sm:p-6">
                        <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 ${autoridad.iconBg} rounded-full w-fit shadow-soft`}>
                          {autoridad.id === "te-protejo-mexico" ? (
                            <TrustLogo 
                              src="te-protejo-mexico.png"
                              alt="Te Protejo México"
                              className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                            />
                          ) : (
                            <autoridad.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${autoridad.iconColor}`} />
                          )}
                        </div>
                        <CardTitle className="font-heading text-lg sm:text-xl text-brand-ink-900 mb-2">
                          {autoridad.nombre}
                        </CardTitle>
                        <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500">
                          {autoridad.descripcion}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6 pt-0">
                        <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                          {autoridad.caracteristicas.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-brand-ink-800">
                              <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 ${autoridad.checkmarkColor} mr-2 sm:mr-3 flex-shrink-0`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        {/* Información de contacto */}
                        <div className="space-y-2 mb-4">
                          {autoridad.telefono && (
                            <div className="flex items-center text-xs sm:text-sm text-brand-ink-800">
                              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-brand-teal-500 flex-shrink-0" />
                              <span className="font-semibold">{autoridad.telefono}</span>
                              {autoridad.telefonoExt && (
                                <span className="ml-2 text-brand-olive-500">({autoridad.telefonoExt})</span>
                              )}
                            </div>
                          )}
                          {autoridad.email && (
                            <div className="flex items-center text-xs sm:text-sm text-brand-ink-800">
                              <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-brand-teal-500 flex-shrink-0" />
                              <span className="break-all">{autoridad.email}</span>
                            </div>
                          )}
                          {autoridad.direccion && (
                            <div className="flex items-start text-xs sm:text-sm text-brand-ink-800">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-brand-teal-500 flex-shrink-0 mt-0.5" />
                              <span>{autoridad.direccion}</span>
                            </div>
                          )}
                          {autoridad.horario && (
                            <div className="flex items-center text-xs sm:text-sm text-brand-ink-800">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-brand-teal-500 flex-shrink-0" />
                              <span>{autoridad.horario}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Botón de acción */}
                        {autoridad.web ? (
                          <Button asChild variant="primary-brand" className="w-full text-sm sm:text-base shadow-soft">
                            <a href={autoridad.web} target="_blank" rel="noopener noreferrer">
                              Visitar sitio web
                              <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                            </a>
                          </Button>
                        ) : (
                          <Button variant="primary-brand" className="w-full text-sm sm:text-base shadow-soft">
                            Contactar
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Qué hacer al denunciar */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-olive-500 to-brand-teal-500 rounded-full">
                    <FileText className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                  ¿Qué hacer al denunciar?
                </h2>
                <p className="font-body text-sm text-brand-olive-500">
                  Pasos esenciales para un proceso legal efectivo
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {pasosDenuncia.map((paso, index) => (
                  <motion.div
                    key={paso.numero}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-brand-mint-200/30 bg-gradient-to-br from-white via-brand-mint-200/5 to-white hover:shadow-soft transition-smooth hover:scale-105">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft">
                          <span className="font-heading text-xl sm:text-2xl font-bold text-brand-teal-500">
                            {paso.numero}
                          </span>
                        </div>
                        <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-3">
                          {paso.titulo}
                        </h3>
                        <p className="font-body text-sm sm:text-base text-brand-olive-500 leading-relaxed">
                          {paso.descripcion}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Organismos Internacionales */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                  Organismos Internacionales
                </h2>
                <p className="font-body text-sm text-brand-olive-500">
                  Para casos que involucren delitos internacionales
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {organismosInternacionales.map((organismo, index) => (
                  <motion.div
                    key={organismo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-brand-olive-500/30 bg-brand-olive-500/10 hover:shadow-soft transition-smooth hover:scale-105">
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-2">
                          {organismo.nombre}
                        </h3>
                        <p className="font-body text-sm text-brand-olive-500 mb-4">
                          {organismo.descripcion}
                        </p>
                        <ul className="space-y-1">
                          {organismo.caracteristicas.map((caracteristica, i) => (
                            <li key={i} className="flex items-center text-xs sm:text-sm text-brand-ink-800">
                              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-brand-olive-500 mr-2 flex-shrink-0" />
                              {caracteristica}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Marco Legal para Mayores de Edad */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-mint-200/60 to-brand-mint-200/40 rounded-full">
                    <Users className="h-8 w-8 text-brand-ink-800" />
                  </div>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                  ¿Qué hacer si tu hijo ya es mayor de edad y vive en casa?
                </h2>
                <p className="font-body text-sm text-brand-olive-500">
                  Marco legal para hijos adultos que viven en el hogar familiar
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {marcoLegalAdultos.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-brand-mint-200/40 bg-brand-mint-200/20 hover:shadow-soft transition-smooth hover:scale-105">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-brand-mint-200/60 rounded-full flex-shrink-0">
                            <item.icon className="h-5 w-5 text-brand-ink-800" />
                          </div>
                          <div>
                            <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-2">
                              {item.titulo}
                            </h3>
                            <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                              {item.descripcion}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Puntos Clave */}
            <motion.div 
              className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30 mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
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
                  Fundamentos para la protección legal de tu familia
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                    <span className="font-heading text-xl sm:text-2xl font-bold text-brand-teal-500">1</span>
                  </div>
                  <h4 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-3">
                    Conoce tus derechos
                  </h4>
                  <p className="font-body text-sm sm:text-base text-brand-olive-500 leading-relaxed">
                    Infórmate sobre el marco legal mexicano y los procedimientos de denuncia 
                    disponibles para proteger a tu familia.
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-brand-mint-200/60 to-brand-mint-200/40 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                    <span className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-800">2</span>
                  </div>
                  <h4 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-3">
                    Actúa con evidencia
                  </h4>
                  <p className="font-body text-sm sm:text-base text-brand-olive-500 leading-relaxed">
                    Recopila pruebas, denuncia rápidamente y sigue el proceso legal 
                    para obtener resultados efectivos.
                  </p>
                </div>
                
                <div className="text-center group sm:col-span-2 lg:col-span-1">
                  <div className="bg-gradient-to-br from-brand-olive-500/20 to-brand-olive-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                    <span className="font-heading text-xl sm:text-2xl font-bold text-brand-olive-500">3</span>
                  </div>
                  <h4 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-3">
                    Busca apoyo profesional
                  </h4>
                  <p className="font-body text-sm sm:text-base text-brand-olive-500 leading-relaxed">
                    No dudes en contactar a las autoridades especializadas y buscar 
                    ayuda profesional cuando sea necesario.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quiz CTA - Show only if user hasn't completed quiz */}
            <QuizCTA 
              variant="congrats"
              title="¡Felicidades por llegar hasta aquí!"
              description="El diagnóstico agrega mucho valor: prioriza acciones, te da pasos claros y un plan a tu medida."
              buttonText="Hacer el diagnóstico"
              badgeText="Espera, esto no es todo"
              bullets={["Prioriza acciones clave","Guía paso a paso","Genera un plan personalizado"]}
              delay={0.6}
            />

            {/* Banner de Ayuda Urgente (unificado con Riesgos) */}
            <motion.div 
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border-brand-teal-500/20 shadow-soft">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="p-2 bg-brand-teal-500/20 rounded-full w-fit mx-auto mb-3">
                    <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-brand-ink-800" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                    ¿Necesitas ayuda inmediata?
                  </h3>
                  <p className="font-body text-sm sm:text-base text-brand-ink-800 mb-3 max-w-2xl mx-auto leading-relaxed">
                    Si tu hijo está en peligro inmediato o has detectado una situación grave, 
                    no dudes en contactar a las autoridades correspondientes.
                  </p>
                  <div className="flex justify-center mb-3">
                    <Button 
                      onClick={() => handleEmergencyCall('33 3837 6000')}
                      variant="destructive" 
                      className="text-sm sm:text-base px-4 sm:px-6 shadow-soft"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Policía Cibernética: 33 3837 6000
                    </Button>
                  </div>
                  <div className="flex justify-center mb-3">
                    <img 
                      src="/optimized/logos/te-protejo-mexico-200w.webp" 
                      alt="Te Protejo México" 
                      className="h-12 sm:h-16 w-auto"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="font-body text-sm sm:text-base text-brand-ink-800 mb-3 max-w-2xl mx-auto leading-relaxed">
                    Si deseas reportar de manera anónima material de abuso sexual infantil, ciberacoso u otras situaciones de violencia digital, o solicitar que bajen del internet imágenes o videos de tus hijas o hijos publicados sin autorización, contacta a
                  </p>
                  <div className="flex justify-center">
                    <Button asChild variant="secondary-brand" className="text-sm sm:text-base px-4 sm:px-6 shadow-soft">
                      <a href="https://teprotejomexico.org/" target="_blank" rel="noopener noreferrer">
                        Te Protejo México
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Learning Path Navigation */}
            <LearningPathNav currentRoute="/aprende/acciones-legales" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccionesLegales;
