import React from "react";
import { HelpCircle, MessageCircle, Phone, Mail, Clock, Users } from "lucide-react";
import EnConstruccion from "./EnConstruccion";

const Ayuda = () => {
  const expectedContent = [
    "Preguntas frecuentes",
    "Chat de soporte",
    "Línea de ayuda telefónica",
    "Centro de contacto",
    "Tutoriales paso a paso",
    "Comunidad de padres"
  ];

  return (
    <EnConstruccion
      title="Ayuda"
      description="Soporte y asistencia para tu familia digital"
      icon={HelpCircle}
      expectedContent={expectedContent}
      returnPath="/"
    />
  );
};

export default Ayuda;
