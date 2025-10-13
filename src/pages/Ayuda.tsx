import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  HelpCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Users, 
  MessageCircle, 
  ChevronDown,
  ChevronRight,
  AlertCircle,
  Shield,
  ExternalLink,
  Send,
  Clock,
  Building
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GlobalHeader from "@/components/GlobalHeader";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Ayuda = () => {
  useScrollToTop();

  // Estados para formularios
  const [tallerForm, setTallerForm] = useState({
    nombre: "",
    institucion: "",
    email: "",
    telefono: "",
    tipoTaller: "",
    numeroAsistentes: "",
    mensaje: ""
  });

  const [contactForm, setContactForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  // Estados para FAQs
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Datos de contactos de emergencia del manual
  const contactosEmergencia = [
    {
      id: "policia",
      titulo: "Policía Cibernética",
      descripcion: "Orientación sobre delitos cibernéticos y suplantación de identidad",
      icon: Shield,
      esUrgente: true,
      contactos: [
        { tipo: "tel", valor: "33 3837 6000", label: "Teléfono principal" },
        { tipo: "ext", valor: "15878", label: "Prevención del Delito" },
        { tipo: "ext", valor: "15832", label: "Policía Cibernética" },
        { tipo: "email", valor: "policia.cibernetica@jalisco.gob.mx", label: "Email" }
      ],
      redes: [
        { nombre: "Facebook", url: "@CiberneticaJal" },
        { nombre: "Twitter", url: "@Ciberneticajal" }
      ],
      colorIndex: 0
    },
    {
      id: "fiscalia",
      titulo: "Fiscalía Estatal",
      descripcion: "Investigación de delitos cibernéticos y presentación de denuncias",
      icon: Building,
      esUrgente: true,
      direccion: "Calle 14 No. 2550, entre Calle 3 y Calle 5, Zona Industrial, CP 44940, Guadalajara, Jalisco",
      horario: "Lunes a Viernes de 8:00 a 21:00 hrs",
      colorIndex: 1
    },
    {
      id: "teprotejo",
      titulo: "Te Protejo México",
      descripcion: "Reporte anónimo de violencia sexual contra menores de edad",
      icon: Shield,
      esUrgente: false,
      url: "https://www.teprotejo.org",
      colorIndex: 2
    },
    {
      id: "internacional",
      titulo: "Organismos Internacionales",
      descripcion: "NCMEC, INTERPOL, Europol para casos internacionales",
      icon: Globe,
      esUrgente: false,
      organismos: [
        { nombre: "NCMEC", descripcion: "National Center for Missing & Exploited Children" },
        { nombre: "INTERPOL", descripcion: "Organización Internacional de Policía Criminal" },
        { nombre: "Europol", descripcion: "Oficina Europea de Policía" }
      ],
      colorIndex: 0
    }
  ];

  // FAQs del manual
  const faqs = [
    {
      pregunta: "¿Qué hago si mi hijo fue víctima de ciberacoso?",
      respuesta: "Escucha sin regañar, guarda pruebas (capturas de pantalla), bloquea y reporta al agresor en la plataforma, brinda apoyo emocional y si es grave, busca ayuda profesional. Recuerda que no es culpa de tu hijo.",
      enlaces: ["/aprende/riesgos", "/aprende/comunicacion"]
    },
    {
      pregunta: "¿Cómo presento una denuncia en línea?",
      respuesta: "Recopila evidencia (capturas, enlaces), contacta a la Policía Cibernética (33 3837 6000) o acude a la Fiscalía Estatal en Guadalajara. Te entregarán un número de Carpeta de Investigación para seguir tu caso.",
      enlaces: ["/aprende/acciones-legales"]
    },
    {
      pregunta: "¿Qué evidencia debo recopilar?",
      respuesta: "Capturas de pantalla de mensajes o publicaciones, enlaces a contenido, datos del usuario agresor (nombre de usuario, perfil), fecha y hora de los incidentes, y cualquier otra información relevante.",
      enlaces: ["/aprende/acciones-legales"]
    },
    {
      pregunta: "¿Los controles parentales son suficientes?",
      respuesta: "Los controles parentales son herramientas importantes pero no sustituyen el diálogo y acompañamiento. La crianza digital efectiva combina límites técnicos con comunicación abierta y educación constante.",
      enlaces: ["/aprende/controles", "/aprende/comunicacion"]
    },
    {
      pregunta: "¿Hasta qué edad debo supervisar a mi hijo?",
      respuesta: "La supervisión debe adaptarse a la madurez y edad del menor. A partir de los 18 años ya no hay patria potestad legal, pero el acompañamiento y orientación pueden continuar según la dinámica familiar.",
      enlaces: ["/aprende/comunicacion"]
    },
    {
      pregunta: "¿Qué hago si perdí el acceso a la cuenta de mi hijo?",
      respuesta: "Usa las opciones de recuperación de contraseña de cada plataforma. Si no funciona, contacta al soporte técnico de la plataforma. Para prevenir esto, mantén un registro seguro de las credenciales importantes.",
      enlaces: ["/aprende/controles"]
    },
    {
      pregunta: "¿Es legal revisar el celular de mi hijo menor de edad?",
      respuesta: "Sí, mientras sea menor de edad y la supervisión se realice con respeto y proporcionalidad. La intervención debe justificarse en la necesidad de proteger al menor de riesgos digitales.",
      enlaces: ["/aprende/acciones-legales"]
    }
  ];

  // Sistema de colores rotativos
  const cardColors = [
    "border-brand-teal-500/30 bg-brand-teal-500/10",
    "border-brand-mint-200/40 bg-brand-mint-200/20",
    "border-brand-olive-500/30 bg-brand-olive-500/10"
  ];

  const iconColors = [
    "bg-brand-teal-500/20 text-brand-teal-500",
    "bg-brand-mint-200/60 text-brand-ink-800",
    "bg-brand-olive-500/20 text-brand-olive-500"
  ];

  // Handlers para formularios
  const handleTallerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    console.log("Formulario de taller:", tallerForm);
    alert("Gracias por tu interés. Te contactaremos pronto.");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    console.log("Formulario de contacto:", contactForm);
    alert("Mensaje enviado. Te responderemos pronto.");
  };

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

        {/* Header Principal */}
        <div className="relative bg-gradient-to-br from-white via-brand-mint-200/20 to-white border-b">
          <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Logo circular con gradiente */}
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                  <HelpCircle className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              
              {/* Título principal */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
                Centro de Ayuda y Soporte
              </h1>
              
              {/* Subtítulo */}
              <p className="font-body text-lg sm:text-xl md:text-2xl text-brand-olive-500 mb-6 sm:mb-8 px-4">
                Estamos aquí para acompañarte en la protección digital de tu familia
              </p>
              
              {/* Frase destacada */}
              <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-6 sm:p-8 mx-4 sm:mx-0 shadow-soft">
                <p className="font-body text-base sm:text-lg text-brand-ink-800 font-medium italic">
                  "No estás solo. Estamos aquí para ayudarte"
                </p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="relative container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Sección 1: Contactos de Emergencia */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header de la sección */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full">
                    <AlertCircle className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                  Contactos de Emergencia
                </h2>
                <p className="font-body text-sm text-brand-olive-500">
                  Recursos oficiales para situaciones urgentes
                </p>
              </div>
              
              {/* Grid de contactos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {contactosEmergencia.map((contacto, index) => {
                  const cardColor = contacto.esUrgente 
                    ? "border-red-500/30 bg-red-500/10" 
                    : cardColors[contacto.colorIndex];
                  const iconColor = contacto.esUrgente 
                    ? "bg-red-500/20 text-red-500" 
                    : iconColors[contacto.colorIndex];
                  const IconComponent = contacto.icon;
                  
                  return (
                    <motion.div
                      key={contacto.id}
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
                            {contacto.titulo}
                          </CardTitle>
                          
                          <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500">
                            {contacto.descripcion}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="p-4 sm:p-6 pt-0">
                          {/* Información específica por tipo de contacto */}
                          {contacto.contactos && (
                            <div className="space-y-3 mb-4">
                              {contacto.contactos.map((contact, i) => (
                                <div key={i} className="flex items-center text-sm text-brand-ink-800">
                                  {contact.tipo === "tel" && <Phone className="w-4 h-4 mr-2 text-brand-teal-500" />}
                                  {contact.tipo === "email" && <Mail className="w-4 h-4 mr-2 text-brand-teal-500" />}
                                  {contact.tipo === "ext" && <span className="w-4 h-4 mr-2 text-brand-teal-500">#</span>}
                                  <span className="font-medium">{contact.valor}</span>
                                  <span className="text-brand-olive-500 ml-2">({contact.label})</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {contacto.direccion && (
                            <div className="space-y-3 mb-4">
                              <div className="flex items-start text-sm text-brand-ink-800">
                                <MapPin className="w-4 h-4 mr-2 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                                <span>{contacto.direccion}</span>
                              </div>
                              <div className="flex items-center text-sm text-brand-ink-800">
                                <Clock className="w-4 h-4 mr-2 text-brand-teal-500" />
                                <span>{contacto.horario}</span>
                              </div>
                            </div>
                          )}

                          {contacto.organismos && (
                            <div className="space-y-2 mb-4">
                              {contacto.organismos.map((org, i) => (
                                <div key={i} className="text-sm">
                                  <span className="font-medium text-brand-ink-800">{org.nombre}:</span>
                                  <span className="text-brand-olive-500 ml-1">{org.descripcion}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Botones de acción */}
                          <div className="space-y-2">
                            {contacto.contactos && (
                              <Button 
                                className={`w-full text-sm sm:text-base ${
                                  contacto.esUrgente 
                                    ? "bg-red-500 hover:bg-red-600 text-white" 
                                    : "shadow-soft"
                                }`}
                                onClick={() => {
                                  if (contacto.contactos?.[0]?.tipo === "tel") {
                                    window.open(`tel:${contacto.contactos[0].valor}`);
                                  }
                                }}
                              >
                                <Phone className="mr-2 h-4 w-4" />
                                {contacto.esUrgente ? "Llamar ahora" : "Contactar"}
                              </Button>
                            )}
                            
                            {contacto.url && (
                              <Button 
                                asChild 
                                variant="outline" 
                                className="w-full text-sm sm:text-base border-brand-teal-500 text-brand-teal-500 hover:bg-brand-mint-200/20"
                              >
                                <a href={contacto.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Reportar en línea
                                </a>
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Sección 2: Información de Talleres */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Header de la sección */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-olive-500 to-brand-teal-500 rounded-full">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                  Talleres y Charlas
                </h2>
                <p className="font-body text-sm text-brand-olive-500">
                  Llevamos la educación digital a tu institución
                </p>
              </div>
              
              {/* Contenedor con gradiente */}
              <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
                <div className="max-w-4xl mx-auto">
                  
                  {/* Información sobre talleres */}
                  <div className="mb-8">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900 mb-4">
                      ¿Quieres que llevemos esta plática a tu institución o empresa?
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-heading text-base font-semibold text-brand-ink-900 mb-3 flex items-center">
                          <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                          Tipos de talleres
                        </h4>
                        <ul className="space-y-2 text-sm text-brand-ink-800">
                          <li>• Para padres, madres y personas cuidadoras</li>
                          <li>• Instituciones educativas</li>
                          <li>• Empresas y organizaciones</li>
                          <li>• Talleres personalizados</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-heading text-base font-semibold text-brand-ink-900 mb-3 flex items-center">
                          <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                          Temas cubiertos
                        </h4>
                        <ul className="space-y-2 text-sm text-brand-ink-800">
                          <li>• Seguridad digital infantil</li>
                          <li>• Controles parentales</li>
                          <li>• Prevención de riesgos</li>
                          <li>• Comunicación familiar</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Formulario de talleres */}
                  <form onSubmit={handleTallerSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-ink-900 mb-2">
                          Nombre completo *
                        </label>
                        <Input
                          value={tallerForm.nombre}
                          onChange={(e) => setTallerForm({...tallerForm, nombre: e.target.value})}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-brand-ink-900 mb-2">
                          Institución/Organización *
                        </label>
                        <Input
                          value={tallerForm.institucion}
                          onChange={(e) => setTallerForm({...tallerForm, institucion: e.target.value})}
                          placeholder="Nombre de la institución"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-ink-900 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={tallerForm.email}
                          onChange={(e) => setTallerForm({...tallerForm, email: e.target.value})}
                          placeholder="tu@email.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-brand-ink-900 mb-2">
                          Teléfono
                        </label>
                        <Input
                          value={tallerForm.telefono}
                          onChange={(e) => setTallerForm({...tallerForm, telefono: e.target.value})}
                          placeholder="Número de contacto"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-ink-900 mb-2">
                          Tipo de taller *
                        </label>
                        <Select value={tallerForm.tipoTaller} onValueChange={(value) => setTallerForm({...tallerForm, tipoTaller: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona el tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="padres">Para padres y madres</SelectItem>
                            <SelectItem value="escuela">Institución educativa</SelectItem>
                            <SelectItem value="empresa">Empresa u organización</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-brand-ink-900 mb-2">
                          Número aproximado de asistentes
                        </label>
                        <Input
                          value={tallerForm.numeroAsistentes}
                          onChange={(e) => setTallerForm({...tallerForm, numeroAsistentes: e.target.value})}
                          placeholder="Ej: 50 personas"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-ink-900 mb-2">
                        Mensaje/Necesidades específicas
                      </label>
                      <Textarea
                        value={tallerForm.mensaje}
                        onChange={(e) => setTallerForm({...tallerForm, mensaje: e.target.value})}
                        placeholder="Cuéntanos sobre tus necesidades específicas, fechas preferidas, etc."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-8 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Solicitar taller
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Sección 3: Formulario General de Contacto */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Header de la sección */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-primary to-brand-teal-500 rounded-full">
                    <MessageCircle className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                  Contacto General
                </h2>
                <p className="font-body text-sm text-brand-olive-500">
                  ¿Tienes preguntas? Escríbenos
                </p>
              </div>
              
              {/* Formulario */}
              <div className="max-w-2xl mx-auto">
                <Card className="border-brand-mint-200/30 bg-white/50 shadow-soft">
                  <CardContent className="p-6 sm:p-8">
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-brand-ink-900 mb-2">
                            Nombre *
                          </label>
                          <Input
                            value={contactForm.nombre}
                            onChange={(e) => setContactForm({...contactForm, nombre: e.target.value})}
                            placeholder="Tu nombre"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-brand-ink-900 mb-2">
                            Email *
                          </label>
                          <Input
                            type="email"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                            placeholder="tu@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-brand-ink-900 mb-2">
                          Asunto *
                        </label>
                        <Input
                          value={contactForm.asunto}
                          onChange={(e) => setContactForm({...contactForm, asunto: e.target.value})}
                          placeholder="¿En qué podemos ayudarte?"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-brand-ink-900 mb-2">
                          Mensaje *
                        </label>
                        <Textarea
                          value={contactForm.mensaje}
                          onChange={(e) => setContactForm({...contactForm, mensaje: e.target.value})}
                          placeholder="Cuéntanos más detalles..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-8 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Enviar mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Sección 4: FAQs */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Header de la sección */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-brand-olive-500 rounded-full">
                    <HelpCircle className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-2">
                  Preguntas Frecuentes
                </h2>
                <p className="font-body text-sm text-brand-olive-500">
                  Respuestas a las dudas más comunes
                </p>
              </div>
              
              {/* Contenedor con gradiente */}
              <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
                <div className="max-w-4xl mx-auto">
                  
                  {/* Grid de FAQs */}
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isExpanded = expandedFAQ === index;
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <Card className="border-brand-mint-200/30 bg-white/50 hover:shadow-soft transition-smooth">
                            <CardHeader 
                              className="p-4 cursor-pointer"
                              onClick={() => setExpandedFAQ(isExpanded ? null : index)}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <CardTitle className="font-heading text-base sm:text-lg text-brand-ink-900 mb-1">
                                    {faq.pregunta}
                                  </CardTitle>
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
                                <p className="font-body text-sm text-brand-ink-800 leading-relaxed mb-3">
                                  {faq.respuesta}
                                </p>
                                
                                {faq.enlaces && faq.enlaces.length > 0 && (
                                  <div className="bg-brand-mint-200/20 p-3 rounded-lg border border-brand-mint-200/30">
                                    <h4 className="font-heading font-semibold text-xs mb-2 text-brand-ink-900">
                                      Más información:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {faq.enlaces.map((enlace, i) => (
                                        <Button
                                          key={i}
                                          asChild
                                          variant="outline"
                                          size="sm"
                                          className="text-xs border-brand-teal-500 text-brand-teal-500 hover:bg-brand-mint-200/20"
                                        >
                                          <a href={enlace}>
                                            Ver sección
                                            <ExternalLink className="ml-1 h-3 w-3" />
                                          </a>
                                        </Button>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </CardContent>
                            )}
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Ayuda;