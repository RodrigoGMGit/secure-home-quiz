import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Mail, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import logoFE from "@/assets/logos/LogosFE_Colores 2.png";

const FEInfoButton = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <img 
            src={logoFE} 
            alt="FIN de la Esclavitud" 
            className="w-[78%] h-[78%] object-contain mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300" 
          />
        </button>
      </motion.div>

      {/* Modal informativo */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white border-brand-mint-200/30 shadow-soft">
          
          {/* Header con diseño sofisticado */}
          <DialogHeader className="relative bg-gradient-to-br from-white via-brand-mint-200/20 to-white border-b border-brand-mint-200/30 -m-6 mb-6 p-6 sm:p-8">
            
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 left-4 w-16 h-16 bg-brand-teal-500/5 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-brand-mint-200/10 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
            
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Logo circular con gradiente */}
                <div className="flex justify-center sm:justify-start">
                  <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                    <img 
                      src={logoFE} 
                      alt="FIN de la Esclavitud" 
                      className="h-8 w-8 object-contain" 
                    />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <DialogTitle className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 leading-tight mb-3">
                    FIN de la Esclavitud
                  </DialogTitle>
                  
                  {/* Badge informativo */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <Badge variant="outline" className="text-xs sm:text-sm w-fit px-3 py-1">
                      Fundación en Movimiento
                    </Badge>
                  </div>
                  
                  {/* Descripción */}
                  <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-relaxed">
                    Organización dedicada a la prevención y erradicación de la trata de personas y la esclavitud moderna en México.
                  </p>
                </div>
              </div>
            </div>
          </DialogHeader>

          {/* Contenido del modal */}
          <div className="space-y-6 sm:space-y-8">
            {/* Información adicional */}
            <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30">
              <div className="max-w-4xl mx-auto">
                
                {/* Grid de información */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                      Misión
                    </h3>
                    <p className="font-body text-base text-brand-ink-800 leading-relaxed">
                      Trabajamos para crear conciencia sobre la trata de personas y brindar apoyo a víctimas y sus familias.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                      Servicios
                    </h3>
                    <p className="font-body text-base text-brand-ink-800 leading-relaxed">
                      Ofrecemos orientación, apoyo psicológico y acompañamiento legal para casos relacionados con trata de personas.
                    </p>
                  </div>
                </div>
                
                {/* Información de contacto destacada */}
                <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-teal-500/20 rounded-full flex-shrink-0">
                      <Info className="h-5 w-5 text-brand-teal-500" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-semibold text-brand-ink-900 mb-2">
                        ¿Necesitas ayuda?
                      </h4>
                      <p className="font-body text-sm text-brand-ink-800 leading-relaxed">
                        Si conoces algún caso de trata de personas o necesitas orientación, no dudes en contactarnos.
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <Separator className="my-6 sm:my-8 border-brand-mint-200/30" />

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
          <div className="flex justify-center px-4 sm:px-0 mt-4">
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

export default FEInfoButton;
