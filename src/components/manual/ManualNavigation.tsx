import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Home, Users, Shield, Smartphone, Gamepad2, AlertTriangle } from 'lucide-react';

interface ManualNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function ManualNavigation({ activeSection, onSectionChange }: ManualNavigationProps) {
  const sections = [
    {
      id: 'introduction',
      title: 'Introducción',
      icon: Home,
      subsections: []
    },
    {
      id: 'familia',
      title: 'Tu Familia',
      icon: Users,
      subsections: [
        { id: 'familia-conectada', title: '1.1 Tu familia conectada' },
        { id: 'redes-sociales', title: '1.2 Redes sociales' },
        { id: 'videojuegos', title: '1.3 Videojuegos' },
        { id: 'redes-anonimas', title: 'Redes anónimas y de alto riesgo' }
      ]
    },
    {
      id: 'riesgos',
      title: 'Riesgos Sociales',
      icon: Shield,
      subsections: [
        { id: 'desinformacion', title: 'Desinformación' },
        { id: 'adiccion', title: 'Adicción a pantallas' },
        { id: 'ciberacoso', title: 'Ciberacoso' },
        { id: 'contacto-desconocidos', title: 'Contacto con desconocidos' },
        { id: 'deepfakes', title: 'Deepfakes e IA' },
        { id: 'discurso-odio', title: 'Discurso de odio' },
        { id: 'contenido-violento', title: 'Contenido violento' },
        { id: 'grooming', title: 'Grooming' },
        { id: 'retos-virales', title: 'Retos virales' },
        { id: 'robo-imagenes', title: 'Robo de imágenes' },
        { id: 'sexting', title: 'Sexting' },
        { id: 'suplantacion', title: 'Suplantación de identidad' },
        { id: 'trata-personas', title: 'Trata de personas' }
      ]
    },
    {
      id: 'plataformas',
      title: 'Guías por Plataforma',
      icon: Smartphone,
      subsections: [
        { id: 'tiktok', title: 'TikTok' },
        { id: 'instagram', title: 'Instagram' },
        { id: 'snapchat', title: 'Snapchat' },
        { id: 'youtube', title: 'YouTube' },
        { id: 'whatsapp', title: 'WhatsApp' }
      ]
    },
    {
      id: 'videojuegos-guias',
      title: 'Guías de Videojuegos',
      icon: Gamepad2,
      subsections: [
        { id: 'minecraft', title: 'Minecraft' },
        { id: 'free-fire', title: 'Free Fire' },
        { id: 'fortnite', title: 'Fortnite' },
        { id: 'roblox', title: 'Roblox' },
        { id: 'gta', title: 'GTA' }
      ]
    }
  ];

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="font-heading font-bold text-lg text-brand-ink-900 uppercase tracking-wide">
          Índice del Manual
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {sections.map((section) => (
          <div key={section.id}>
            <Button
              variant={activeSection === section.id ? "default" : "ghost"}
              className={`w-full justify-start gap-3 h-auto py-3 px-4 ${
                activeSection === section.id 
                  ? "bg-brand-ink-800 text-white hover:bg-brand-ink-900" 
                  : "text-brand-ink-800 hover:bg-brand-mint-200"
              }`}
              onClick={() => onSectionChange(section.id)}
            >
              <section.icon className="h-5 w-5 flex-shrink-0" />
              <span className="font-medium text-left">{section.title}</span>
            </Button>
            
            {section.subsections.length > 0 && activeSection === section.id && (
              <div className="ml-8 mt-2 space-y-1">
                {section.subsections.map((subsection) => (
                  <Button
                    key={subsection.id}
                    variant="ghost"
                    size="sm"
                    className={`w-full justify-start text-sm ${
                      activeSection === subsection.id
                        ? "bg-brand-mint-200 text-brand-ink-900"
                        : "text-brand-olive-500 hover:bg-brand-mint-200 hover:text-brand-ink-800"
                    }`}
                    onClick={() => onSectionChange(subsection.id)}
                  >
                    {subsection.title}
                  </Button>
                ))}
              </div>
            )}
            
            {section.id !== sections[sections.length - 1].id && (
              <Separator className="my-2" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}