/**
 * Emergency contact information for Mexican families
 * Used across multiple pages in the /aprende section
 */

export interface EmergencyContact {
  title: string;
  description: string;
  phoneNumber: string;
  website?: string;
  additionalInfo?: string;
}

export const emergencyContacts: EmergencyContact[] = [
  {
    title: "Línea de Seguridad",
    description: "Atención 24/7 para reportar situaciones de riesgo",
    phoneNumber: "911",
    additionalInfo: "Servicio de emergencias nacional. Disponible las 24 horas del día, los 7 días de la semana."
  },
  {
    title: "CONAPRED",
    description: "Consejo Nacional para Prevenir la Discriminación",
    phoneNumber: "800 911 2511",
    website: "https://www.conapred.org.mx",
    additionalInfo: "Atención especializada en casos de discriminación y violencia digital."
  },
  {
    title: "Fiscalía Especializada",
    description: "Para delitos cibernéticos y violencia digital",
    phoneNumber: "800 440 3690",
    website: "https://www.gob.mx/fgr",
    additionalInfo: "Especialistas en delitos cibernéticos y violencia digital contra menores."
  },
  {
    title: "DIF Nacional",
    description: "Sistema Nacional para el Desarrollo Integral de la Familia",
    phoneNumber: "800 911 2000",
    website: "https://www.gob.mx/difnacional",
    additionalInfo: "Apoyo psicológico y legal para familias en situaciones de riesgo."
  },
  {
    title: "CETAD",
    description: "Centro de Atención Ciudadana del Delito Cibernético",
    phoneNumber: "800 440 3690",
    website: "https://www.gob.mx/sspc",
    additionalInfo: "Reporte de delitos cibernéticos y orientación legal especializada."
  },
  {
    title: "Línea de la Vida",
    description: "Atención psicológica especializada",
    phoneNumber: "800 911 2000",
    website: "https://www.gob.mx/salud",
    additionalInfo: "Apoyo psicológico para situaciones de crisis y prevención del suicidio."
  }
];

/**
 * Get emergency contacts filtered by category
 * @param category - Optional category filter
 * @returns Filtered emergency contacts
 */
export const getEmergencyContacts = (category?: 'general' | 'cyber' | 'psychological' | 'legal'): EmergencyContact[] => {
  if (!category) return emergencyContacts;
  
  const categoryMap = {
    general: [0], // 911
    cyber: [2, 4], // Fiscalía Especializada, CETAD
    psychological: [1, 5], // CONAPRED, Línea de la Vida
    legal: [2, 3, 4] // Fiscalía Especializada, DIF Nacional, CETAD
  };
  
  const indices = categoryMap[category] || [];
  return indices.map(index => emergencyContacts[index]);
};
