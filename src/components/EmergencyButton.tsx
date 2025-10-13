import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, ExternalLink, Shield, Building, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useMobileDetection, useTelephoneCapability } from "@/hooks/useMobileDetection";
import { initiatePhoneCall, initiateEmail } from "@/utils/phoneUtils";

const EmergencyButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobileDetection();
  const canCall = useTelephoneCapability();

  // Datos de contactos de emergencia principales
  const emergencyContacts = [
    {
      id: "policia",
      titulo: "Policía Cibernética",
      descripcion: "Orientación sobre delitos cibernéticos",
      icon: Shield,
      telefono: "33 3837 6000",
      extensiones: "Ext. 15878 (Prevención) / 15832 (Cibernética)",
      email: "policia.cibernetica@jalisco.gob.mx",
      esUrgente: true
    },
    {
      id: "fiscalia",
      titulo: "Fiscalía Estatal",
      descripcion: "Presentación de denuncias",
      icon: Building,
      direccion: "Calle 14 No. 2550, Guadalajara",
      horario: "Lunes a Viernes 8:00-21:00 hrs",
      esUrgente: true
    },
    {
      id: "teprotejo",
      titulo: "Te Protejo México",
      descripcion: "Reporte anónimo de violencia sexual",
      icon: Shield,
      url: "https://www.teprotejo.org",
      esUrgente: false
    }
  ];

  const handleCall = async (telefono: string) => {
    console.log('Intentando llamar a:', telefono, 'Can call:', canCall, 'Is mobile:', isMobile);
    try {
      await initiatePhoneCall(telefono, canCall);
    } catch (error) {
      // Solo mostrar feedback si hay un error
      alert(error instanceof Error ? error.message : 'Error al intentar hacer la llamada');
    }
  };

  const handleEmail = (email: string) => {
    initiateEmail(email);
  };

  const handleWebsite = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Botón flotante de contacto rediseñado */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          delay: 1.5 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/20"
          aria-label="Contactos de emergencia"
        >
          {/* Efecto de pulso sutil */}
          <motion.div
            className="absolute inset-0 rounded-full bg-red-400/30"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Icono principal - Phone para indicar contacto */}
          <Phone className="h-7 w-7 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        </Button>
      </motion.div>

      {/* Modal de emergencia */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white border-brand-mint-200/30 shadow-soft">
          
          {/* Header con diseño sofisticado */}
          <DialogHeader className="relative bg-gradient-to-br from-white via-brand-mint-200/20 to-white border-b border-brand-mint-200/30 -m-6 mb-6 p-6 sm:p-8">
            
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 left-4 w-16 h-16 bg-red-500/5 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-brand-mint-200/10 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
            
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Logo circular con gradiente */}
                <div className="flex justify-center sm:justify-start">
                  <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-soft">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <DialogTitle className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 leading-tight mb-3">
                    Contactos de Emergencia
                  </DialogTitle>
                  
                  {/* Badge de urgencia */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
                      <Phone className="w-3 h-3 mr-1" />
                      Situaciones urgentes
                    </span>
                  </div>
                  
                  {/* Descripción */}
                  <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-relaxed">
                    Recursos oficiales para situaciones de emergencia digital
                  </p>
                </div>
              </div>
            </div>
          </DialogHeader>

          {/* Contenido del modal con animaciones */}
          <div className="space-y-6 sm:space-y-8">
            {emergencyContacts.map((contacto, index) => {
              const IconComponent = contacto.icon;
              
              return (
                <motion.div
                  key={contacto.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`${
                    contacto.esUrgente 
                      ? "border-red-500/30 bg-red-500/10" 
                      : "border-brand-mint-200/30 bg-white/50"
                  } hover:shadow-soft transition-smooth`}>
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full ${
                          contacto.esUrgente 
                            ? "bg-red-500/20 text-red-500" 
                            : "bg-brand-teal-500/20 text-brand-teal-500"
                        }`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        
                        <div className="flex-1">
                          <CardTitle className="font-heading text-lg sm:text-xl text-brand-ink-900 mb-2">
                            {contacto.titulo}
                          </CardTitle>
                          <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500 mb-4">
                            {contacto.descripcion}
                          </CardDescription>
                          
                          {/* Información de contacto */}
                          <div className="space-y-2">
                            {contacto.telefono && (
                              <div className="flex items-center text-sm text-brand-ink-800">
                                <Phone className="w-4 h-4 mr-2 text-brand-teal-500" />
                                <span className="font-medium">{contacto.telefono}</span>
                                {contacto.extensiones && (
                                  <span className="text-brand-olive-500 ml-2">({contacto.extensiones})</span>
                                )}
                              </div>
                            )}
                            
                            {contacto.email && (
                              <div className="flex items-center text-sm text-brand-ink-800">
                                <Mail className="w-4 h-4 mr-2 text-brand-teal-500" />
                                <span className="font-medium">{contacto.email}</span>
                              </div>
                            )}
                            
                            {contacto.direccion && (
                              <div className="text-sm text-brand-ink-800">
                                <span className="font-medium">Dirección:</span> {contacto.direccion}
                              </div>
                            )}
                            
                            {contacto.horario && (
                              <div className="text-sm text-brand-ink-800">
                                <span className="font-medium">Horario:</span> {contacto.horario}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-4 sm:p-6 pt-0">
                      {/* Botones de acción */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        {contacto.telefono && (
                          <Button
                            onClick={() => handleCall(contacto.telefono!)}
                            className={`flex-1 ${
                              contacto.esUrgente 
                                ? "bg-red-500 hover:bg-red-600 text-white" 
                                : "bg-brand-ink-800 hover:bg-brand-ink-900 text-white"
                            }`}
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            {canCall ? "Llamar ahora" : "Copiar número"}
                          </Button>
                        )}
                        
                        {contacto.email && (
                          <Button
                            onClick={() => handleEmail(contacto.email!)}
                            variant="outline"
                            className="flex-1 border-brand-teal-500 text-brand-teal-500 hover:bg-brand-mint-200/20"
                          >
                            <Mail className="mr-2 h-4 w-4" />
                            Enviar email
                          </Button>
                        )}
                        
                        {contacto.url && (
                          <Button
                            onClick={() => handleWebsite(contacto.url!)}
                            variant="outline"
                            className="flex-1 border-brand-teal-500 text-brand-teal-500 hover:bg-brand-mint-200/20"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Reportar en línea
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
            
            {/* Información adicional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-4 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-heading text-sm font-semibold text-brand-ink-900 mb-2">
                    Información importante
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-brand-ink-800 leading-relaxed">
                    En situaciones de emergencia, guarda todas las evidencias (capturas de pantalla, enlaces, mensajes) 
                    antes de contactar a las autoridades. Esto facilitará el proceso de investigación.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Botón de cierre */}
          <div className="flex justify-center px-4 sm:px-0 pt-4">
            <Button 
              onClick={() => setIsOpen(false)} 
              className="bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-8 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth"
            >
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmergencyButton;
