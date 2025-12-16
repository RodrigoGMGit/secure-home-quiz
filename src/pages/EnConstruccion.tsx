import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import constructionImage from "@/assets/illustrations/construction/Gemini_Generated_Image_gd4fxggd4fxggd4f.png";

const EnConstruccion: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <GlobalHeader />
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Construction Illustration */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img
                  src={constructionImage}
                  alt="Sección en construcción"
                  className="max-w-full h-auto max-h-96 w-auto shadow-soft rounded-lg"
                />
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-lg pointer-events-none"></div>
              </div>
            </div>

            {/* Heading with Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                <Construction className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink-900 mb-4">
              Sección en Construcción
            </h1>

            {/* Brief Message */}
            <div className="space-y-4">
              <p className="font-body text-lg sm:text-xl text-brand-olive-500 leading-relaxed">
                Estamos trabajando en una experiencia especial para ti.
              </p>
              <p className="font-body text-base sm:text-lg text-brand-ink-800 leading-relaxed">
                Esta sección estará disponible pronto con contenido interactivo y recursos actualizados 
                para ayudarte a proteger a tu familia en el mundo digital.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-brand-mint-200/30 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-6 mt-8">
              <p className="font-body text-sm sm:text-base text-brand-ink-800 font-medium italic mb-4">
                "Mientras tanto, explora nuestras otras secciones educativas"
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/aprende/tu-familia">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Ver Contenido Educativo
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button variant="primary-brand" className="w-full sm:w-auto">
                    Realizar Quiz
                  </Button>
                </Link>
              </div>
            </div>

            {/* Back Button */}
            <div className="pt-6">
              <Link to="/">
                <Button className="bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-8 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Regresar al inicio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default EnConstruccion;