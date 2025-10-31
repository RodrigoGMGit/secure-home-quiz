import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Mail, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useMobileDetection, useTelephoneCapability } from "@/hooks/useMobileDetection";
import { initiatePhoneCall } from "@/utils/phoneUtils";
import TrustLogo from "@/components/TrustLogo";
import WorkshopRequestModal from "@/components/help/WorkshopRequestModal";

const FEInfoButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openWorkshop, setOpenWorkshop] = useState(false);
  const isMobile = useMobileDetection();
  const canCall = useTelephoneCapability();

  const handleCall = async (telefono: string) => {
    console.log('Intentando llamar a:', telefono, 'Can call:', canCall, 'Is mobile:', isMobile);
    try {
      await initiatePhoneCall(telefono, canCall);
    } catch (error) {
      // Solo mostrar feedback si hay un error
      alert(error instanceof Error ? error.message : 'Error al intentar hacer la llamada');
    }
  };

  return (
    <>
      {/* Botón flotante FE */}
      <motion.div
        className="fixed bottom-24 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          delay: 1.2 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="group relative bg-white border border-brand-mint-200/30 rounded-full w-16 h-16 shadow-soft hover:shadow-lg transition-all duration-300 focus:ring-2 focus:ring-brand-teal-500 focus:ring-offset-2 overflow-hidden"
          aria-label="Información de FIN de la Esclavitud"
        >
          {/* Logo que ocupa casi todo el espacio */}
          <TrustLogo 
            src="LogosFE_Colores 2.png"
            alt="FIN de la Esclavitud" 
            className="w-[78%] h-[78%] object-contain mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300"
            priority={true}
          />
        </button>
      </motion.div>

      {/* Modal informativo */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white border-brand-mint-200/30 shadow-soft">
          
          {/* Header con diseño sofisticado */}
          <DialogHeader className="text-center pb-4 sm:pb-6 px-4 sm:px-0">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                <TrustLogo 
                  src="LogosFE_Colores 2.png"
                  alt="FIN de la Esclavitud" 
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                  priority={true}
                />
              </div>
            </div>
            <DialogTitle className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-2 px-2">
              FIN de la Esclavitud
            </DialogTitle>
            {/* CTA superior: Quiero el taller */}
            <div className="mt-2 mb-3 flex justify-center">
              <Button
                variant="primary-brand"
                className="px-6 py-2"
                onClick={() => setOpenWorkshop(true)}
              >
                Quiero el taller
              </Button>
            </div>
            <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 px-2">
              Organización dedicada a informar, prevenir y capacitar sobre Trata de Personas y las diversas formas de Esclavitud Moderna.
            </p>
            
            {/* Badge informativo */}
            <div className="flex justify-center mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-teal-100 text-brand-teal-800 border border-brand-teal-200">
                <Info className="w-3 h-3 mr-1" />
                11 años educando en prevención
              </span>
            </div>
          </DialogHeader>

          {/* Contenido del modal con animaciones */}
          <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
            
            {/* Card de información principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30">
                
                {/* Misión */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="font-heading text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                    Misión
                  </h3>
                  <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                    Contribuir a la disminución de factores de riesgo y aumentar las habilidades de prevención de la población vulnerable ante la Trata de Personas.
                  </p>
                </div>

                {/* Servicios */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="font-heading text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                    Servicios
                  </h3>
                  <ul className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed space-y-2">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-brand-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Talleres, conferencias y charlas de prevención en todos los niveles educativos
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-brand-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Fortalecimiento de capacidades a autoridades públicas y empresas
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-brand-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Fomento de la participación ciudadana mediante murales, activaciones, torneos deportivos
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-brand-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Proyectos estratégicos: #JulioAzul y CERO Tolerancia a la Explotación: Rumbo al 2026
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Card de contacto de emergencia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="border-brand-teal-500/30 bg-brand-teal-500/10 hover:shadow-soft transition-smooth rounded-xl">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full flex-shrink-0 bg-brand-teal-500/20 text-brand-teal-500">
                      <Phone className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-lg sm:text-xl text-brand-ink-900 mb-2">
                        Línea Nacional contra la Trata de Personas
                      </h3>
                      <p className="font-body text-sm sm:text-base text-brand-olive-500 mb-4">
                        Si conoces algún caso de trata de personas
                      </p>
                      
                      {/* Información de contacto */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start text-sm text-brand-ink-800">
                          <Phone className="w-4 h-4 mr-2 text-brand-teal-500 flex-shrink-0 mt-0.5" />
                          <div className="min-w-0">
                            <span className="font-medium text-lg">800 5533 000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 pt-0">
                  {/* Botón de acción */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      onClick={() => handleCall("800 5533 000")}
                      className="flex-1 bg-brand-teal-500 hover:bg-brand-teal-600 text-white"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      {canCall ? "Llamar ahora" : "Copiar número"}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Información adicional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-4 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-heading text-sm font-semibold text-brand-ink-900 mb-2">
                    Información importante
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-brand-ink-800 leading-relaxed break-words">
                    La trata de personas es un delito grave. Si sospechas de algún caso, contacta inmediatamente a las autoridades competentes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button asChild variant="secondary-brand" className="text-sm sm:text-base px-6 py-3">
              <a 
                href="https://findelaesclavitud.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Visitar sitio
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button asChild variant="outline" className="text-sm sm:text-base px-6 py-3">
              <a 
                href="mailto:contacto@findelaesclavitud.org" 
                className="flex items-center justify-center"
              >
                Contactar
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Botón de cierre */}
          <div className="border-t border-brand-mint-200/30 pt-4 sm:pt-6 px-4 sm:px-0">
            <Button 
              onClick={() => setIsOpen(false)} 
              className="bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-8 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth w-full"
            >
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de solicitud de taller desde FIN */}
      <WorkshopRequestModal open={openWorkshop} onOpenChange={setOpenWorkshop} />
    </>
  );
};

export default FEInfoButton;
