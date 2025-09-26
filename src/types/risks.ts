export interface DigitalRisk {
  id: string;
  title: string;
  description: string;
  icon: string;
  howToIdentify: {
    title: string;
    description: string;
    examples: string[];
  };
  whatToDo: {
    title: string;
    description: string;
    steps: string[];
    phrases: string[];
  };
  howToPrevent: {
    title: string;
    description: string;
    steps: string[];
    tips: string[];
  };
  severity: 'low' | 'medium' | 'high';
  ageGroups: string[];
  platforms: string[];
}

export interface RiskCategory {
  id: string;
  name: string;
  description: string;
  risks: DigitalRisk[];
}
