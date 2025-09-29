import React from "react";
import { Scale, Shield, AlertTriangle, FileText, Users, Phone } from "lucide-react";
import EnConstruccion from "./EnConstruccion";

const AccionesLegales = () => {
  const expectedContent = [
    "Marco legal mexicano",
    "Procedimientos de denuncia",
    "Derechos digitales de menores",
    "Recursos legales disponibles",
    "Contactos de autoridades",
    "Documentación necesaria"
  ];

  return (
    <EnConstruccion
      title="Acciones Legales"
      description="Conoce tus derechos y las acciones legales disponibles"
      icon={Scale}
      expectedContent={expectedContent}
      returnPath="/aprende"
    />
  );
};

export default AccionesLegales;
