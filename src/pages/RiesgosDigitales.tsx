import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { RiskCard } from '../components/risks/RiskCard';
import { RiskDetailModal } from '../components/risks/RiskDetailModal';
import { digitalRisks, riskCategories } from '../data/risks';
import { DigitalRisk } from '../types/risks';
import { Search, Filter, AlertTriangle, Shield, Search as SearchIcon, Eye, Users, CheckCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import GlobalHeader from '@/components/GlobalHeader';
import LearningPathNav from '@/components/learning-navigation/LearningPathNav';
import { useMobileDetection, useTelephoneCapability } from '@/hooks/useMobileDetection';
import { initiatePhoneCall } from '@/utils/phoneUtils';

const RiesgosDigitales: React.FC = () => {
  // Scroll automático al inicio de la página al cambiar de ruta
  useScrollToTop();
  
  const canCall = useTelephoneCapability();

  const [selectedRisk, setSelectedRisk] = useState<DigitalRisk | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredRisks = useMemo(() => {
    return digitalRisks.filter(risk => {
      const matchesSearch = risk.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           risk.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSeverity = selectedSeverity === 'all' || risk.severity === selectedSeverity;
      const matchesAgeGroup = selectedAgeGroup === 'all' || risk.ageGroups.includes(selectedAgeGroup);
      
      let matchesCategory = true;
      if (selectedCategory !== 'all') {
        const category = riskCategories.find(cat => cat.id === selectedCategory);
        matchesCategory = category ? category.risks.some(r => r.id === risk.id) : false;
      }

      return matchesSearch && matchesSeverity && matchesAgeGroup && matchesCategory;
    });
  }, [searchTerm, selectedSeverity, selectedAgeGroup, selectedCategory]);

  const handleViewDetails = (risk: DigitalRisk) => {
    setSelectedRisk(risk);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRisk(null);
  };

  const handleEmergencyCall = async (telefono: string) => {
    try {
      await initiatePhoneCall(telefono, canCall);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Error al intentar hacer la llamada');
    }
  };

  const getSeverityStats = () => {
    const stats = digitalRisks.reduce((acc, risk) => {
      acc[risk.severity] = (acc[risk.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return stats;
  };

  const severityStats = getSeverityStats();

  return (
    <>
      <GlobalHeader />
      <div className="min-h-screen bg-gradient-subtle">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-olive-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-white via-brand-mint-200/20 to-white border-b">
          <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto text-center">
              {/* Logo circular con gradiente */}
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                  <Shield className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
                Riesgos Digitales
              </h1>
              <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-brand-olive-500 mb-6 sm:mb-8 px-4">
                Conoce los principales riesgos digitales que pueden afectar a tu familia y aprende cómo identificarlos, prevenirlos y actuar si ya ocurrieron
              </p>
              
              {/* Frase destacada mejorada */}
              <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-6 sm:p-8 mx-4 sm:mx-0 shadow-soft">
                <p className="font-body text-base sm:text-lg text-brand-ink-800 font-medium italic">
                  "Conocer los riesgos es el primer paso para proteger a tu familia en el mundo digital"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-olive-500 to-brand-teal-500 rounded-full">
                    <Eye className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-2">
                  ¿Qué son los riesgos digitales?
                </h2>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                  Guía completa para padres y madres sobre seguridad digital
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                        Identificación temprana
                      </h3>
                      <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                        Los riesgos digitales son situaciones que pueden poner en peligro la seguridad, 
                        privacidad o bienestar de niñas, niños y adolescentes en el entorno digital.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                        Prevención activa
                      </h3>
                      <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                        Conocer estos riesgos te permite tomar medidas preventivas y estar preparado 
                        para actuar de manera efectiva si se presentan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-teal-500/20 rounded-full flex-shrink-0">
                        <Shield className="h-5 w-5 text-brand-ink-800" />
                      </div>
                      <div>
                        <h4 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-2">
                          Dato importante
                        </h4>
                        <p className="font-body text-xs sm:text-sm text-brand-ink-800 leading-relaxed">
                          El 73% de los padres mexicanos reportan preocupación por la seguridad digital 
                          de sus hijos, pero solo el 45% tiene controles parentales activos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Estadísticas mejoradas */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-brand-teal-500/30 bg-brand-teal-500/10 hover:shadow-soft transition-smooth hover:scale-105">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-teal-500/20 rounded-full">
                      <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-brand-ink-800 flex-shrink-0" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900">{severityStats.high || 0}</p>
                      <p className="text-xs sm:text-sm md:text-base text-brand-ink-800">Riesgos Altos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-mint-200/40 bg-brand-mint-200/20 hover:shadow-soft transition-smooth hover:scale-105">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-mint-200/60 rounded-full">
                      <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-brand-ink-800 flex-shrink-0" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900">{severityStats.medium || 0}</p>
                      <p className="text-xs sm:text-sm md:text-base text-brand-ink-800">Riesgos Medios</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-olive-500/30 bg-brand-olive-500/10 hover:shadow-soft transition-smooth hover:scale-105 sm:col-span-2 lg:col-span-1">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-olive-500/20 rounded-full">
                      <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-brand-olive-500 flex-shrink-0" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900">{digitalRisks.length}</p>
                      <p className="text-xs sm:text-sm md:text-base text-brand-ink-800">Riesgos Identificados</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Filtros mejorados */}
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-brand-mint-200/30 bg-gradient-to-br from-white via-brand-mint-200/5 to-white shadow-soft">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-brand-ink-900">
                    <div className="p-1 bg-brand-teal-500/20 rounded-full">
                      <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-brand-ink-800" />
                    </div>
                    Filtrar Riesgos
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="relative sm:col-span-2 lg:col-span-1">
                      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-brand-olive-500" />
                      <Input
                        placeholder="Buscar riesgos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 text-xs sm:text-sm md:text-base border-brand-mint-200/50 focus:border-brand-teal-500 focus:ring-brand-teal-500/20"
                      />
                    </div>

                    <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                      <SelectTrigger className="text-xs sm:text-sm md:text-base border-brand-mint-200/50 focus:border-brand-teal-500 focus:ring-brand-teal-500/20">
                        <SelectValue placeholder="Nivel de riesgo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos los niveles</SelectItem>
                        <SelectItem value="low">Bajo</SelectItem>
                        <SelectItem value="medium">Medio</SelectItem>
                        <SelectItem value="high">Alto</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
                      <SelectTrigger className="text-xs sm:text-sm md:text-base border-brand-mint-200/50 focus:border-brand-teal-500 focus:ring-brand-teal-500/20">
                        <SelectValue placeholder="Grupo de edad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas las edades</SelectItem>
                        <SelectItem value="6-8">6-8 años</SelectItem>
                        <SelectItem value="9-12">9-12 años</SelectItem>
                        <SelectItem value="13-15">13-15 años</SelectItem>
                        <SelectItem value="16-17">16-17 años</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="text-xs sm:text-sm md:text-base border-brand-mint-200/50 focus:border-brand-teal-500 focus:ring-brand-teal-500/20">
                        <SelectValue placeholder="Categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas las categorías</SelectItem>
                        {riskCategories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vista por categorías mejorada */}
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Tabs defaultValue="all" className="mb-6 sm:mb-8">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto bg-brand-mint-200/20 border border-brand-mint-200/30">
                  <TabsTrigger value="all" className="text-xs sm:text-sm py-2 data-[state=active]:bg-brand-teal-500 data-[state=active]:text-white">Todos</TabsTrigger>
                  {riskCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm py-2 data-[state=active]:bg-brand-teal-500 data-[state=active]:text-white">
                      <span className="hidden sm:inline">{category.name}</span>
                      <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="all" className="mt-4 sm:mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredRisks.map((risk, index) => (
                      <motion.div
                        key={risk.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <RiskCard
                          risk={risk}
                          onViewDetails={handleViewDetails}
                          index={index}
                        />
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                {riskCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="mt-4 sm:mt-6">
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-ink-900 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm sm:text-base text-brand-olive-500">{category.description}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {category.risks
                        .filter(risk => filteredRisks.some(filteredRisk => filteredRisk.id === risk.id))
                        .map((risk, index) => (
                          <motion.div
                            key={risk.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                          >
                            <RiskCard
                              risk={risk}
                              onViewDetails={handleViewDetails}
                              index={index}
                            />
                          </motion.div>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>

            {/* Mensaje si no hay resultados mejorado */}
            {filteredRisks.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="text-center py-8 sm:py-12 border-brand-mint-200/30 bg-gradient-to-br from-white via-brand-mint-200/5 to-white">
                  <CardContent className="px-4 sm:px-6">
                    <div className="p-3 bg-brand-mint-200/30 rounded-full w-fit mx-auto mb-4">
                      <Search className="h-10 w-10 sm:h-12 sm:w-12 text-brand-olive-500" />
                    </div>
                    <h3 className="text-base sm:text-lg font-medium text-brand-ink-900 mb-2">
                      No se encontraron riesgos
                    </h3>
                    <p className="text-sm sm:text-base text-brand-olive-500 mb-4">
                      Intenta ajustar los filtros para ver más resultados.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-2 text-sm sm:text-base border-brand-teal-500 text-brand-teal-500 hover:bg-brand-teal-500 hover:text-white"
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedSeverity('all');
                        setSelectedAgeGroup('all');
                        setSelectedCategory('all');
                      }}
                    >
                      Limpiar filtros
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Key Points mejorados */}
            <motion.div 
              className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-primary to-brand-teal-500 rounded-full">
                    <CheckCircle className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                  Recuerda estos 3 elementos clave:
                </h3>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                  Fundamentos para proteger a tu familia en el mundo digital
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                    <span className="font-heading text-xl sm:text-2xl font-bold text-brand-teal-500">1</span>
                  </div>
                  <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                    Comunicación Abierta
                  </h4>
                  <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                    Mantén un diálogo constante con tus hijos sobre sus actividades digitales. 
                    La confianza es la base de la seguridad.
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-brand-mint-200/60 to-brand-mint-200/40 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                    <span className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-800">2</span>
                  </div>
                  <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                    Prevención Activa
                  </h4>
                  <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                    Implementa controles parentales, configura privacidad y establece reglas 
                    claras sobre el uso de dispositivos.
                  </p>
                </div>
                
                <div className="text-center group sm:col-span-2 lg:col-span-1">
                  <div className="bg-gradient-to-br from-brand-olive-500/20 to-brand-olive-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                    <span className="font-heading text-xl sm:text-2xl font-bold text-brand-olive-500">3</span>
                  </div>
                  <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                    Acción Inmediata
                  </h4>
                  <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                    Si detectas un riesgo, actúa de inmediato. No esperes a que la situación 
                    empeore. Busca ayuda profesional si es necesario.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Información adicional mejorada */}
            <motion.div 
              className="mt-8 sm:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border-brand-teal-500/20 shadow-soft">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="p-2 bg-brand-teal-500/20 rounded-full w-fit mx-auto mb-3">
                    <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-brand-ink-800" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                    ¿Necesitas ayuda inmediata?
                  </h3>
                  <p className="font-body text-sm sm:text-base text-brand-ink-800 mb-3 max-w-2xl mx-auto leading-relaxed">
                    Si tu hijo está en peligro inmediato o has detectado una situación grave, 
                    no dudes en contactar a las autoridades correspondientes.
                  </p>
                  <div className="flex justify-center mb-3">
                    <Button 
                      onClick={() => handleEmergencyCall('33 3837 6000')}
                      variant="destructive" 
                      className="text-sm sm:text-base px-4 sm:px-6 shadow-soft"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Policía Cibernética: 33 3837 6000
                    </Button>
                  </div>
                  <p className="font-body text-sm sm:text-base text-brand-ink-800 mb-3 max-w-2xl mx-auto leading-relaxed">
                    Si no deseas reportar de manera anónima material de abuso sexual, infantil, ciberacoso u otras situaciones de violencia digital, contacta a
                  </p>
                  <div className="flex justify-center">
                    <Button asChild variant="secondary-brand" className="text-sm sm:text-base px-4 sm:px-6 shadow-soft">
                      <a href="https://teprotejomexico.org/" target="_blank" rel="noopener noreferrer">
                        Te Protejo México
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Learning Path Navigation */}
            <LearningPathNav currentRoute="/aprende/riesgos" />
          </div>
        </div>

        {/* Modal de detalles */}
        <RiskDetailModal
          risk={selectedRisk}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default RiesgosDigitales;
