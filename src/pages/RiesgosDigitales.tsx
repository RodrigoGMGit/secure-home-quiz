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
import { Search, Filter, AlertTriangle, Shield, Search as SearchIcon } from 'lucide-react';

const RiesgosDigitales: React.FC = () => {
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

  const getSeverityStats = () => {
    const stats = digitalRisks.reduce((acc, risk) => {
      acc[risk.severity] = (acc[risk.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return stats;
  };

  const severityStats = getSeverityStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Riesgos Digitales
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conoce los principales riesgos digitales que pueden afectar a tu familia y aprende 
              cómo identificarlos, prevenirlos y actuar si ya ocurrieron.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="border-red-200 bg-red-50/50">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-bold text-red-900">{severityStats.high || 0}</p>
                  <p className="text-sm sm:text-base text-red-700">Riesgos Altos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50/50">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-bold text-yellow-900">{severityStats.medium || 0}</p>
                  <p className="text-sm sm:text-base text-yellow-700">Riesgos Medios</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/50 sm:col-span-2 lg:col-span-1">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-bold text-green-900">{digitalRisks.length}</p>
                  <p className="text-sm sm:text-base text-green-700">Riesgos Identificados</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtros */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Filter className="h-4 w-4 sm:h-5 sm:w-5" />
              Filtrar Riesgos
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="relative sm:col-span-2 lg:col-span-1">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar riesgos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-sm sm:text-base"
                />
              </div>

              <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                <SelectTrigger className="text-sm sm:text-base">
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
                <SelectTrigger className="text-sm sm:text-base">
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
                <SelectTrigger className="text-sm sm:text-base">
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

        {/* Vista por categorías */}
        <Tabs defaultValue="all" className="mb-6 sm:mb-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
            <TabsTrigger value="all" className="text-xs sm:text-sm py-2">Todos</TabsTrigger>
            {riskCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm py-2">
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-4 sm:mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredRisks.map((risk) => (
                <RiskCard
                  key={risk.id}
                  risk={risk}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </TabsContent>

          {riskCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-4 sm:mt-6">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.risks
                  .filter(risk => filteredRisks.some(filteredRisk => filteredRisk.id === risk.id))
                  .map((risk) => (
                    <RiskCard
                      key={risk.id}
                      risk={risk}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Mensaje si no hay resultados */}
        {filteredRisks.length === 0 && (
          <Card className="text-center py-8 sm:py-12">
            <CardContent className="px-4 sm:px-6">
              <Search className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                No se encontraron riesgos
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Intenta ajustar los filtros para ver más resultados.
              </p>
              <Button 
                variant="outline" 
                className="mt-2 text-sm sm:text-base"
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
        )}

        {/* Información adicional */}
        <Card className="mt-8 sm:mt-12 bg-blue-50 border-blue-200">
          <CardContent className="p-6 sm:p-8 text-center">
            <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">
              ¿Necesitas ayuda inmediata?
            </h3>
            <p className="text-sm sm:text-base text-blue-800 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              Si tu hijo está en peligro inmediato o has detectado una situación grave, 
              no dudes en contactar a las autoridades correspondientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base px-4 sm:px-6">
                Policía Cibernética: 088
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-sm sm:text-base px-4 sm:px-6">
                Te Protejo México
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modal de detalles */}
      <RiskDetailModal
        risk={selectedRisk}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default RiesgosDigitales;
