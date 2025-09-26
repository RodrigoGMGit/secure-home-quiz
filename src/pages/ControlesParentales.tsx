import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, Play, Shield, Clock, Smartphone, Gamepad2, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const ControlesParentales: React.FC = () => {
  // Scroll automático al inicio de la página al cambiar de ruta
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Controles Parentales
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Más que restringir, se trata de acompañar
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto border border-background/20"
            >
              <p className="text-lg leading-relaxed text-primary-foreground">
                Los controles parentales son una herramienta de acompañamiento y protección que nos permite 
                guiar el crecimiento digital de las niñas, niños y adolescentes de manera consciente y respetuosa.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Phrases Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4">
            <Shield className="h-8 w-8 text-amber-600" />
            <div>
              <p className="text-lg font-semibold text-amber-800">
                "El silencio también educa. Si no hablas tú, otros lo harán por ti: y no todos lo harán con cariño o responsabilidad."
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-foreground mb-8 text-center"
          >
            Configuraciones por Dispositivo
          </motion.h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* Android Section */}
            <AccordionItem value="android" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-4">
                  <Smartphone className="h-6 w-6 text-green-600" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">Android</h3>
                    <p className="text-sm text-gray-600">Google Family Link + Google SafeSearch</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  {/* Google Family Link */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-blue-600" />
                        <span>Google Family Link</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">
                        Herramienta gratuita de Google que permite supervisar, limitar y acompañar 
                        el uso que tus hijos hacen de sus dispositivos Android.
                      </p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Requisitos:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Dispositivo Android 7.0 o superior</li>
                          <li>• Cuentas de Google válidas (@gmail.com)</li>
                          <li>• Conexión a internet activa</li>
                          <li>• Aplicaciones instaladas en ambos dispositivos</li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Pasos para configurar:</h4>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>1. Descarga Family Link en tu dispositivo (Android o iPhone)</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>2. Crea una cuenta de Google para tu hijo o conecta la que ya tiene</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>3. Empareja el dispositivo de tu hijo con el tuyo</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Lo que puedes configurar:</h4>
                        <ul className="space-y-1 text-sm">
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

          {/* Final Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-emerald-50 border-l-4 border-emerald-400 p-6 mt-12"
          >
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-emerald-600" />
              <div>
                <p className="text-lg font-semibold text-emerald-800">
                  "No hay herramienta que sustituya al diálogo, pero sin herramientas, el diálogo llega cuando ya es tarde."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ControlesParentales;
