import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, Play, Shield, Clock, Smartphone, Gamepad2, Wifi, Settings, Users, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import GlobalHeader from '@/components/GlobalHeader';

const ControlesParentales: React.FC = () => {
  // Scroll automático al inicio de la página al cambiar de ruta
  useScrollToTop();

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
                <Settings className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
              Controles Parentales
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-brand-olive-500 mb-6 sm:mb-8 px-4">
              Más que restringir, se trata de acompañar
            </p>
            
            {/* Frase destacada mejorada */}
            <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-6 sm:p-8 mx-4 sm:mx-0 shadow-soft">
              <div className="flex items-center justify-center mb-3">
                <Shield className="h-6 w-6 text-brand-teal-500 mr-2" />
                <span className="font-heading text-sm font-semibold text-brand-ink-900 uppercase tracking-wide">Frase clave</span>
              </div>
              <p className="font-body text-base sm:text-lg text-brand-ink-800 font-medium italic">
                "El silencio también educa. Si no hablas tú, otros lo harán por ti: y no todos lo harán con cariño o responsabilidad."
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
                  <Settings className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-2">
                ¿Qué son los controles parentales?
              </h2>
              <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                Herramientas de acompañamiento y protección digital
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                      Acompañamiento, no restricción
                    </h3>
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                      Los controles parentales son herramientas de acompañamiento y protección que nos permiten 
                      guiar el crecimiento digital de las niñas, niños y adolescentes de manera consciente y respetuosa.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                      Herramientas para cada dispositivo
                    </h3>
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                      Cada plataforma y dispositivo tiene sus propias herramientas de control parental. 
                      Te mostramos las más efectivas y fáciles de configurar.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-teal-500/20 rounded-full flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-brand-teal-500" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-2">
                        Dato importante
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-brand-ink-800 leading-relaxed">
                        No hay herramienta que sustituya al diálogo, pero sin herramientas, 
                        el diálogo llega cuando ya es tarde.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Configuraciones por Dispositivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-gradient-to-r from-primary to-brand-teal-500 rounded-full">
                  <Smartphone className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                Configuraciones por Dispositivo
              </h2>
              <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                Herramientas específicas para cada plataforma
              </p>
            </div>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* Android Section */}
            <AccordionItem value="android" className="border-brand-teal-500/30 bg-brand-teal-500/10 border rounded-lg hover:shadow-soft transition-smooth">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-brand-teal-500/20 rounded-full">
                    <Smartphone className="h-6 w-6 text-brand-teal-500" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-heading text-lg sm:text-xl font-semibold text-brand-ink-900">Android</h3>
                    <p className="font-body text-xs sm:text-sm text-brand-olive-500">Google Family Link + Google SafeSearch</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  {/* Google Family Link */}
                  <Card className="border-brand-teal-500/20 bg-white shadow-soft">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <div className="p-1 bg-brand-teal-500/20 rounded-full">
                          <Shield className="h-5 w-5 text-brand-teal-500" />
                        </div>
                        <span className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900">Google Family Link</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                        Herramienta gratuita de Google que permite supervisar, limitar y acompañar 
                        el uso que tus hijos hacen de sus dispositivos Android.
                      </p>
                      
                      <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-4">
                        <h4 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-2">Requisitos:</h4>
                        <ul className="space-y-1 text-xs sm:text-sm font-body text-brand-ink-800">
                          <li>• Dispositivo Android 7.0 o superior</li>
                          <li>• Cuentas de Google válidas (@gmail.com)</li>
                          <li>• Conexión a internet activa</li>
                          <li>• Aplicaciones instaladas en ambos dispositivos</li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900">Pasos para configurar:</h4>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                            <span className="font-body text-xs sm:text-sm text-brand-ink-800">1. Descarga Family Link en tu dispositivo (Android o iPhone)</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                            <span className="font-body text-xs sm:text-sm text-brand-ink-800">2. Crea una cuenta de Google para tu hijo o conecta la que ya tiene</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-brand-teal-500 mt-0.5 flex-shrink-0" />
                            <span className="font-body text-xs sm:text-sm text-brand-ink-800">3. Empareja el dispositivo de tu hijo con el tuyo</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-brand-mint-200/20 to-brand-teal-500/10 border border-brand-mint-200/30 rounded-lg p-4">
                        <h4 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-2">Lo que puedes configurar:</h4>
                        <ul className="space-y-1 text-xs sm:text-sm font-body text-brand-ink-800">
                          <li>• Límites de tiempo de uso diario y por app</li>
                          <li>• Aprobar o bloquear la descarga de apps</li>
                          <li>• Filtrar contenido inapropiado en Chrome, YouTube y Google Play</li>
                          <li>• Revisar el historial de actividad y uso de apps</li>
                          <li>• Bloquear el dispositivo a distancia</li>
                        </ul>
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Descargar guía PDF</span>
                        </Button>
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Play className="h-4 w-4" />
                          <span>Ver video corto</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Google SafeSearch */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-green-600" />
                        <span>Google SafeSearch</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Herramienta gratuita que filtra contenido explícito o inapropiado de los 
                        resultados de búsqueda en Google.
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Cómo activarlo:</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium mb-2">En computadora:</h5>
                          <ol className="space-y-1 text-sm list-decimal list-inside">
                            <li>Abre google.com</li>
                            <li>Haz clic en "Configuración" → "Configuración de búsqueda"</li>
                            <li>Marca "Activar SafeSearch"</li>
                            <li>Haz clic en "Guardar"</li>
                          </ol>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium mb-2">En celular o tablet:</h5>
                          <ol className="space-y-1 text-sm list-decimal list-inside">
                            <li>Abre la app de Google y ve a google.com/preferences</li>
                            <li>Activa la opción "SafeSearch"</li>
                            <li>Toca "Guardar"</li>
                          </ol>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          <strong>Tip:</strong> Para que no lo desactiven, crea una cuenta de Google para tu hijo 
                          con Family Link y activa SafeSearch desde ahí.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* iPhone Section */}
            <AccordionItem value="iphone" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-4">
                  <Smartphone className="h-6 w-6 text-gray-600" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">iPhone y iPad</h3>
                    <p className="text-sm text-gray-600">Configuración en Familia + Tiempo en Pantalla</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  {/* En Familia */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-blue-600" />
                        <span>Configuración en Familia</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Permite que varios miembros de la familia compartan compras, suscripciones 
                        y almacenamiento en iCloud, cada uno con su cuenta personal.
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Pasos para configurar:</h4>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>1. Abre la app de Configuración en el iPhone o iPad</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>2. Toca tu nombre (Apple ID)</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>3. Selecciona "En Familia"</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>4. Toca "Configurar En Familia"</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>5. Sigue las instrucciones para invitar a los miembros</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Requisitos:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• iOS 11 o posterior (preferiblemente la versión más reciente)</li>
                          <li>• Apple ID válido</li>
                          <li>• Método de pago familiar configurado</li>
                          <li>• Hasta 5 personas más en el grupo familiar</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tiempo en Pantalla */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-purple-600" />
                        <span>Tiempo en Pantalla</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Sistema de control parental de Apple que ayuda a establecer buenos hábitos 
                        digitales y controlar el tiempo de uso de dispositivos.
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Funciones principales:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h5 className="font-medium mb-2">Actividad en apps y sitios</h5>
                            <p className="text-sm text-gray-600">Muestra cuánto tiempo se usa el dispositivo y qué apps son las más utilizadas</p>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h5 className="font-medium mb-2">Límites de apps</h5>
                            <p className="text-sm text-gray-600">Establece un máximo diario de uso por categoría o app específica</p>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h5 className="font-medium mb-2">Tiempo desactivado</h5>
                            <p className="text-sm text-gray-600">Define horarios en los que el dispositivo queda bloqueado</p>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h5 className="font-medium mb-2">Siempre permitido</h5>
                            <p className="text-sm text-gray-600">Decide qué apps estarán disponibles todo el tiempo</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-sm text-red-800">
                          <strong>¡Atención!</strong> Al activar "Tiempo en Pantalla", el sistema pedirá establecer 
                          un código de 4 dígitos. Este código es esencial y solo debe conocerlo la persona adulta responsable.
                        </p>
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Descargar guía PDF</span>
                        </Button>
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Play className="h-4 w-4" />
                          <span>Ver video corto</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Qustodio Section */}
            <AccordionItem value="qustodio" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">Qustodio</h3>
                    <p className="text-sm text-gray-600">Dispositivos híbridos (Android, iOS, Windows, Mac)</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-orange-600" />
                        <span>¿Qué es Qustodio?</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Aplicación de control parental que se instala tanto en el dispositivo de la persona adulta 
                        como en el de la niña, niño o adolescente, permitiendo visualizar sus hábitos digitales.
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Cómo instalarlo:</h4>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>1. Crea una cuenta gratuita en su sitio oficial</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>2. Descarga la app "Qustodio Control Parental" desde App Store o Google Play</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>3. Configura la cuenta e instala "Qustodio para niños" en el dispositivo del menor</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>4. Otorga los permisos especiales que solicita la app</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Funciones principales:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Panel de control con resumen diario de uso</li>
                          <li>• Límites diarios de uso del dispositivo</li>
                          <li>• Bloqueo de páginas web por categorías</li>
                          <li>• Ubicación en tiempo real</li>
                          <li>• Función "pausar dispositivo" para cortar internet</li>
                          <li>• Botón SOS en dispositivos Android</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Versiones disponibles:</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Versión gratuita</span>
                            <Badge variant="secondary">1 dispositivo</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Versión premium</span>
                            <Badge variant="default">Múltiples dispositivos</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Descargar guía PDF</span>
                        </Button>
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Play className="h-4 w-4" />
                          <span>Ver video corto</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Consoles Section */}
            <AccordionItem value="consoles" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-4">
                  <Gamepad2 className="h-6 w-6 text-purple-600" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">Consolas de Videojuegos</h3>
                    <p className="text-sm text-gray-600">Xbox, PlayStation, Nintendo Switch</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  {/* Xbox */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Gamepad2 className="h-5 w-5 text-green-600" />
                        <span>Xbox (Microsoft)</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Se necesita una cuenta de adulto y otra para la persona menor de edad, 
                        gestionadas dentro de un grupo familiar de Microsoft.
                      </p>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Funciones disponibles:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Establecer límites diarios o semanales de tiempo de juego</li>
                          <li>• Aprobar o bloquear juegos y compras</li>
                          <li>• Ver con quién juegan en línea</li>
                          <li>• Controlar la actividad desde tu celular</li>
                          <li>• Recibir notificaciones en tiempo real</li>
                        </ul>
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Guía Xbox</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* PlayStation */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Gamepad2 className="h-5 w-5 text-blue-600" />
                        <span>PlayStation (Sony)</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Se configura desde la consola, navegador o PlayStation App, 
                        creando un grupo familiar con una cuenta de adulto como administrador.
                      </p>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Funciones disponibles:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Limitar el tiempo de juego diario</li>
                          <li>• Restringir juegos según la edad</li>
                          <li>• Controlar el gasto en la tienda digital</li>
                          <li>• Limitar el acceso a chats y mensajes</li>
                          <li>• Establecer límite de gasto mensual</li>
                        </ul>
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Guía PlayStation</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Nintendo Switch */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Gamepad2 className="h-5 w-5 text-red-600" />
                        <span>Nintendo Switch</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Se gestiona con la app gratuita "Nintendo Switch Parental Controls" 
                        que se instala en el celular del padre, madre o persona cuidadora.
                      </p>

                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Funciones disponibles:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Establecer límites diarios de juego</li>
                          <li>• Bloquear juegos no apropiados según la edad</li>
                          <li>• Ver un resumen de la actividad de juego</li>
                          <li>• Desactivar funciones de comunicación y compras</li>
                          <li>• Bloqueo automático al alcanzar el tiempo límite</li>
                        </ul>
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Guía Nintendo Switch</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-800">Consejo general:</h4>
                    <p className="text-purple-700">
                      "No se trata solo de bloquear, sino de acompañar. Conozcan a qué juegan niñas, 
                      niños y adolescentes, prueben ustedes los juegos, conversen sobre lo que ocurre 
                      en ellos y modelen un uso equilibrado y saludable de la tecnología."
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Router/Wi-Fi Section */}
            <AccordionItem value="router" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-4">
                  <Wifi className="h-6 w-6 text-indigo-600" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">Router/Wi-Fi</h3>
                    <p className="text-sm text-gray-600">Configuraciones de seguridad en el hogar</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Wifi className="h-5 w-5 text-indigo-600" />
                        <span>Filtros de Contenido en el Hogar</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Muchas compañías de internet ofrecen herramientas para filtrar contenidos 
                        directamente desde el módem o la red wifi de tu hogar.
                      </p>

                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Beneficios:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Filtrado automático de contenido inapropiado</li>
                          <li>• Control centralizado desde el router</li>
                          <li>• Aplicable a todos los dispositivos conectados</li>
                          <li>• Configuración una sola vez</li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Pasos generales:</h4>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>1. Accede a la configuración de tu router (IP del router)</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>2. Busca la sección de "Filtros de contenido" o "Control parental"</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>3. Activa los filtros de contenido inapropiado</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>4. Configura horarios de acceso si es necesario</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          <strong>Nota:</strong> Los pasos específicos varían según el modelo de router. 
                          Consulta el manual de tu dispositivo o contacta a tu proveedor de internet.
                        </p>
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Guía de configuración</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Key Points */}
          <motion.div 
            className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-gradient-to-r from-primary to-brand-teal-500 rounded-full">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                Recuerda estos 3 elementos clave:
              </h3>
              <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                Fundamentos para controles parentales efectivos
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-teal-500">1</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Acompañamiento
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                  Los controles parentales son herramientas de acompañamiento, no de restricción. 
                  Su objetivo es guiar y proteger, no limitar.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-mint-200/60 to-brand-mint-200/40 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-800">2</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Diálogo Constante
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                  No hay herramienta que sustituya al diálogo, pero sin herramientas, 
                  el diálogo llega cuando ya es tarde.
                </p>
              </div>
              
              <div className="text-center group sm:col-span-2 lg:col-span-1">
                <div className="bg-gradient-to-br from-brand-olive-500/20 to-brand-olive-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-olive-500">3</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Configuración Gradual
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                  Comienza con configuraciones básicas y ajusta según la edad y madurez 
                  de tu hijo o hija.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ControlesParentales;
