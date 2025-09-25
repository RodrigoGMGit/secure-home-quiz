import { useState } from 'react';
import { Search, Download, ArrowLeft, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ManualNavigation } from '@/components/manual/ManualNavigation';
import { ManualSection } from '@/components/manual/ManualSection';
import { ManualCard } from '@/components/manual/ManualCard';
import { Link } from 'react-router-dom';

const Manual = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('introduction');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const quickAccessTopics = [
    {
      title: 'TikTok',
      description: 'Guía completa para el uso seguro de TikTok',
      category: 'Redes Sociales',
      icon: '📱'
    },
    {
      title: 'Grooming',
      description: 'Cómo identificar y prevenir el grooming digital',
      category: 'Riesgos Sociales',
      icon: '🛡️'
    },
    {
      title: 'Minecraft',
      description: 'Seguridad en videojuegos online',
      category: 'Videojuegos',
      icon: '🎮'
    },
    {
      title: 'Ciberacoso',
      description: 'Identificación y prevención del cyberbullying',
      category: 'Riesgos Sociales',
      icon: '⚠️'
    },
    {
      title: 'Instagram',
      description: 'Configuración segura y uso responsable',
      category: 'Redes Sociales',
      icon: '📸'
    },
    {
      title: 'Inteligencia Artificial',
      description: 'Deepfakes y uso seguro de IA',
      category: 'Tecnología',
      icon: '🤖'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild className="lg:hidden">
                <Link to="/">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <Link to="/" className="hidden lg:flex items-center gap-2 text-brand-ink-900 hover:text-brand-teal-500 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Volver al inicio</span>
              </Link>
              <Separator orientation="vertical" className="hidden lg:block h-6" />
              <h1 className="font-heading font-bold text-xl lg:text-2xl text-brand-ink-900 uppercase tracking-wide">
                Manual Hogares Seguros
              </h1>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex items-center gap-2"
                asChild
              >
                <a href="/manual-hogares-seguros.pdf" download>
                  <Download className="h-4 w-4" />
                  Descargar PDF
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Mobile Navigation Overlay */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl p-6 overflow-y-auto">
                <ManualNavigation 
                  activeSection={activeSection} 
                  onSectionChange={(section) => {
                    setActiveSection(section);
                    setIsMobileMenuOpen(false);
                  }} 
                />
              </div>
            </div>
          )}

          {/* Desktop Navigation Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <ManualNavigation activeSection={activeSection} onSectionChange={setActiveSection} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Search Bar */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Buscar en el manual..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 text-lg h-12 border-border focus:ring-brand-teal-500"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quick Access Topics */}
            {activeSection === 'introduction' && (
              <Card className="shadow-card">
                <CardHeader className="pb-4">
                  <CardTitle className="font-heading font-bold text-2xl text-brand-ink-900 uppercase tracking-wide">
                    Acceso Rápido
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Encuentra rápidamente información sobre los temas más consultados
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {quickAccessTopics.map((topic, index) => (
                      <ManualCard
                        key={index}
                        title={topic.title}
                        description={topic.description}
                        category={topic.category}
                        icon={topic.icon}
                        onClick={() => setActiveSection(topic.title.toLowerCase())}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Main Content Section */}
            <ManualSection activeSection={activeSection} searchTerm={searchTerm} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Manual;