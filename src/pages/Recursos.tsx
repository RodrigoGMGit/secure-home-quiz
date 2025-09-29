import React from "react";
import { FileText, BookOpen, Download, Video, Users, Shield, MessageCircle, Scale } from "lucide-react";
import EnConstruccion from "./EnConstruccion";

const Recursos = () => {
  const expectedContent = [
    "Guías descargables",
    "Videos educativos",
    "Plantillas de conversación",
    "Checklist de seguridad",
    "Recursos por edad",
    "Herramientas de monitoreo"
  ];

  return (
    <EnConstruccion
      title="Recursos"
      description="Herramientas y materiales para proteger a tu familia"
      icon={FileText}
      expectedContent={expectedContent}
      returnPath="/"
    />
  );
};

export default Recursos;
