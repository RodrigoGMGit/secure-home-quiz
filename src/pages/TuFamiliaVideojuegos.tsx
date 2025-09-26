import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, ExternalLink, Shield, AlertTriangle, Calendar, Settings, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const TuFamiliaVideojuegos = () => {
  // Scroll automático al inicio de la página al cambiar de ruta
  useScrollToTop();

  const [selectedGame, setSelectedGame] = useState<any>(null);

  const games = [
    {
      id: "minecraft",
      name: "Minecraft",
      description: "Juego de construcción y supervivencia en mundos infinitos",
      logo: "🧱",
      age: "7+ años",
      platform: "PC, Consolas, Móvil",
      risks: [
        "Chat con jugadores desconocidos",
        "Servidores con contenido inapropiado",
        "Compartir información personal",
        "Mods no verificados",
        "Grooming en servidores multijugador"
      ],
      controls: [
        "Activar modo multijugador solo con amigos",
        "Configurar chat privado",
        "Revisar servidores antes de unirse",
        "Desactivar chat público",
        "Supervisar mods instalados"
      ],
      tutorial: {
        title: "Configuración de Minecraft para Familias",
        steps: [
          {
            title: "Configurar Modo Multijugador",
            description: "Solo permitir jugar con amigos conocidos",
            details: "Opciones > Multijugador > Solo amigos > Activar"
          },
          {
            title: "Desactivar Chat Público",
            description: "Evitar contacto con jugadores desconocidos",
            details: "Opciones > Chat > Desactivar chat público"
          },
          {
            title: "Configurar Servidores",
            description: "Solo unirse a servidores aprobados por padres",
            details: "Multijugador > Agregar servidor > Solo servidores familiares"
          },
          {
            title: "Revisar Mods",
            description: "Supervisar modificaciones instaladas",
            details: "Mods > Revisar lista > Solo mods aprobados"
          }
        ]
      }
    },
    {
      id: "free-fire",
      name: "Free Fire",
      description: "Battle royale móvil con 50 jugadores en tiempo real",
      logo: "🔫",
      age: "13+ años",
      platform: "Móvil",
      risks: [
        "Contenido violento y armas",
        "Chat de voz con extraños",
        "Compras dentro del juego",
        "Presión social por ganar",
        "Adicción al juego"
      ],
      controls: [
        "Desactivar chat de voz",
        "Configurar límites de tiempo",
        "Desactivar compras",
        "Supervisar sesiones de juego",
        "Configurar privacidad"
      ],
      tutorial: {
        title: "Configuración de Free Fire para Familias",
        steps: [
          {
            title: "Desactivar Chat de Voz",
            description: "Evitar contacto con jugadores desconocidos",
            details: "Configuración > Audio > Desactivar chat de voz"
          },
          {
            title: "Configurar Límites de Tiempo",
            description: "Controlar cuánto tiempo se puede jugar",
            details: "Configuración > Tiempo de juego > Establecer límite"
          },
          {
            title: "Desactivar Compras",
            description: "Evitar gastos no autorizados",
            details: "Configuración > Compras > Desactivar compras en la app"
          },
          {
            title: "Configurar Privacidad",
            description: "Controlar quién puede ver el perfil",
            details: "Perfil > Privacidad > Solo amigos"
          }
        ]
      }
    },
    {
      id: "call-of-duty",
      name: "Call of Duty",
      description: "FPS militar con multijugador online",
      logo: "🎯",
      age: "17+ años",
      platform: "PC, Consolas",
      risks: [
        "Contenido violento extremo",
        "Chat tóxico y lenguaje ofensivo",
        "Presión por rendimiento",
        "Compras de armas y skins",
        "Exposición a contenido adulto"
      ],
      controls: [
        "Activar filtros de chat",
        "Configurar límites de edad",
        "Desactivar compras",
        "Supervisar sesiones",
        "Configurar controles parentales"
      ],
      tutorial: {
        title: "Configuración de Call of Duty para Familias",
        steps: [
          {
            title: "Activar Filtros de Chat",
            description: "Bloquear lenguaje ofensivo",
            details: "Configuración > Chat > Filtros > Activar todos"
          },
          {
            title: "Configurar Límites de Edad",
            description: "Restringir contenido según la edad",
            details: "Configuración > Contenido > Límite de edad > Configurar"
          },
          {
            title: "Desactivar Compras",
            description: "Evitar gastos no autorizados",
            details: "Configuración > Tienda > Desactivar compras"
          },
          {
            title: "Configurar Controles Parentales",
            description: "Usar controles de consola",
            details: "Consola > Configuración > Controles parentales > Activar"
          }
        ]
      }
    },
    {
      id: "fortnite",
      name: "Fortnite",
      description: "Battle royale con construcción y elementos creativos",
      logo: "🏗️",
      age: "12+ años",
      platform: "PC, Consolas, Móvil",
      risks: [
        "Chat con jugadores desconocidos",
        "Compras de skins y elementos",
        "Presión social por apariencia",
        "Contenido de creadores no moderado",
        "Adicción al juego"
      ],
      controls: [
        "Desactivar chat de voz",
        "Configurar límites de compras",
        "Supervisar amigos agregados",
        "Configurar privacidad",
        "Establecer límites de tiempo"
      ],
      tutorial: {
        title: "Configuración de Fortnite para Familias",
        steps: [
          {
            title: "Desactivar Chat de Voz",
            description: "Evitar contacto con jugadores desconocidos",
            details: "Configuración > Audio > Desactivar chat de voz"
          },
          {
            title: "Configurar Límites de Compras",
            description: "Controlar gastos en el juego",
            details: "Configuración > Compras > Establecer límite mensual"
          },
          {
            title: "Supervisar Amigos",
            description: "Revisar quién está en la lista de amigos",
            details: "Amigos > Revisar lista > Solo personas conocidas"
          },
          {
            title: "Configurar Privacidad",
            description: "Controlar visibilidad del perfil",
            details: "Configuración > Privacidad > Solo amigos"
          }
        ]
      }
    },
    {
      id: "roblox",
      name: "Roblox",
      description: "Plataforma de juegos creados por usuarios",
      logo: "🎮",
      age: "8+ años",
      platform: "PC, Consolas, Móvil",
      risks: [
        "Juegos con contenido inapropiado",
        "Chat con usuarios desconocidos",
        "Compras de Robux",
        "Contenido creado por usuarios no moderado",
        "Grooming en juegos sociales"
      ],
      controls: [
        "Activar modo restringido",
        "Configurar privacidad estricta",
        "Desactivar chat",
        "Supervisar juegos jugados",
        "Configurar límites de compras"
      ],
      tutorial: {
        title: "Configuración de Roblox para Familias",
        steps: [
          {
            title: "Activar Modo Restringido",
            description: "Filtrar contenido inapropiado",
            details: "Configuración > Privacidad > Modo restringido > Activar"
          },
          {
            title: "Desactivar Chat",
            description: "Evitar contacto con usuarios desconocidos",
            details: "Configuración > Privacidad > Chat > Desactivar"
          },
          {
            title: "Configurar Límites de Compras",
            description: "Controlar gastos en Robux",
            details: "Configuración > Compras > Establecer límite"
          },
          {
            title: "Supervisar Juegos",
            description: "Revisar qué juegos está jugando",
            details: "Actividad > Juegos recientes > Revisar lista"
          }
        ]
      }
    },
    {
      id: "gta",
      name: "Grand Theft Auto (GTA)",
      description: "Juego de mundo abierto con temática criminal",
      logo: "🚗",
      age: "18+ años",
      platform: "PC, Consolas",
      risks: [
        "Contenido violento extremo",
        "Temática criminal y delictiva",
        "Contenido sexual explícito",
        "Lenguaje ofensivo",
        "Influencia negativa en menores"
      ],
      controls: [
        "No permitir a menores de edad",
        "Configurar controles parentales",
        "Supervisar si se juega",
        "Explicar contenido inapropiado",
        "Considerar alternativas apropiadas"
      ],
      tutorial: {
        title: "Consideraciones para GTA en Familias",
        steps: [
          {
            title: "Evaluar Edad Apropiada",
            description: "GTA es para mayores de 18 años únicamente",
            details: "Revisar clasificación ESRB: M (Maduro) 17+"
          },
          {
            title: "Configurar Controles Parentales",
            description: "Bloquear acceso en consolas",
            details: "Consola > Configuración > Controles parentales > Bloquear juego"
          },
          {
            title: "Explicar Contenido",
            description: "Si se permite, explicar por qué es inapropiado",
            details: "Conversar sobre violencia, crimen y contenido adulto"
          },
          {
            title: "Considerar Alternativas",
            description: "Buscar juegos similares pero apropiados",
            details: "Recomendar juegos de carreras o aventuras sin violencia"
          }
        ]
      }
    },
    {
      id: "kick",
      name: "Kick.com",
      description: "Plataforma de streaming de videojuegos",
      logo: "👾",
      age: "13+ años",
      platform: "Web, Móvil",
      risks: [
        "Contenido de streaming inapropiado",
        "Chat con lenguaje ofensivo",
        "Donaciones con dinero real",
        "Contacto con streamers desconocidos",
        "Contenido NSFW en algunos canales"
      ],
      controls: [
        "Configurar filtros de contenido",
        "Desactivar chat público",
        "Supervisar canales seguidos",
        "Configurar límites de donaciones",
        "Revisar configuración de privacidad"
      ],
      tutorial: {
        title: "Configuración de Kick.com para Familias",
        steps: [
          {
            title: "Configurar Filtros",
            description: "Bloquear contenido inapropiado",
            details: "Configuración > Privacidad > Filtros de contenido > Activar"
          },
          {
            title: "Controlar Chat",
            description: "Desactivar o moderar el chat",
            details: "Configuración > Chat > Desactivar chat público"
          },
          {
            title: "Supervisar Seguidos",
            description: "Revisar canales que sigue tu hijo",
            details: "Perfil > Siguiendo > Revisar canales"
          },
          {
            title: "Configurar Donaciones",
            description: "Desactivar o limitar donaciones",
            details: "Configuración > Pagos > Desactivar donaciones"
          }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-olive-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative bg-white border-b">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex items-center mb-4 sm:mb-6">
            <Button variant="ghost" asChild className="text-sm sm:text-base">
              <Link to="/aprende/tu-familia">
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Volver a Tu Familia
              </Link>
            </Button>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-ink-900 mb-3 sm:mb-4 px-4">
              Tu Familia y los Videojuegos
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-brand-olive-500 px-4">
              Aprende sobre los juegos más populares y sus configuraciones de seguridad
            </p>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <motion.div 
            className="bg-white rounded-lg shadow-soft p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl font-bold text-brand-ink-900 mb-4">
              Videojuegos Más Populares
            </h2>
            <p className="font-body text-lg text-brand-ink-800 mb-6">
              Los videojuegos son una parte importante del entretenimiento digital de los niños y adolescentes. 
              Es importante conocer los riesgos y configurar controles apropiados para cada edad.
            </p>
            <div className="bg-brand-mint-200/50 border-l-4 border-brand-teal-500 p-4">
              <p className="font-body text-brand-ink-800 font-medium">
                <strong>Tip:</strong> Revisa siempre la clasificación de edad (ESRB) antes de permitir que tu hijo juegue.
              </p>
            </div>
          </motion.div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-3xl">{game.logo}</span>
                      <div>
                        <CardTitle className="font-heading text-xl text-brand-ink-900">{game.name}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-brand-olive-500" />
                          <span className="font-body text-sm text-brand-olive-500">{game.age}</span>
                          <Badge variant="outline" className="text-xs">{game.platform}</Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="font-body text-base text-brand-ink-800">
                      {game.description}
                    </CardDescription>
                  </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Risks */}
                    <div>
                      <h4 className="font-heading font-semibold text-brand-ink-900 mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-1 text-brand-teal-500" />
                        Riesgos Principales
                      </h4>
                      <ul className="space-y-1">
                        {game.risks.slice(0, 3).map((risk, index) => (
                          <li key={index} className="font-body text-sm text-brand-ink-800 flex items-start">
                            <div className="w-1.5 h-1.5 bg-brand-teal-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {risk}
                          </li>
                        ))}
                        {game.risks.length > 3 && (
                          <li className="font-body text-sm text-brand-olive-500">
                            +{game.risks.length - 3} más...
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Controls */}
                    <div>
                      <h4 className="font-heading font-semibold text-brand-ink-900 mb-2 flex items-center">
                        <Shield className="h-4 w-4 mr-1 text-brand-teal-500" />
                        Controles Recomendados
                      </h4>
                      <ul className="space-y-1">
                        {game.controls.slice(0, 3).map((control, index) => (
                          <li key={index} className="font-body text-sm text-brand-ink-800 flex items-start">
                            <div className="w-1.5 h-1.5 bg-brand-teal-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {control}
                          </li>
                        ))}
                        {game.controls.length > 3 && (
                          <li className="font-body text-sm text-brand-olive-500">
                            +{game.controls.length - 3} más...
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="primary-brand"
                          className="w-full"
                          onClick={() => setSelectedGame(game)}
                        >
                          <Settings className="mr-2 h-4 w-4" />
                          Ver Guía Completa
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl flex items-center">
                            <span className="text-3xl mr-3">{game.logo}</span>
                            {game.tutorial.title}
                          </DialogTitle>
                          <DialogDescription className="text-base">
                            {game.description}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          {/* Game Info */}
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-red-700 mb-2">Riesgos Importantes</h4>
                              <ul className="space-y-1">
                                {game.risks.map((risk, index) => (
                                  <li key={index} className="text-sm text-gray-600 flex items-start">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    {risk}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-green-700 mb-2">Controles Recomendados</h4>
                              <ul className="space-y-1">
                                {game.controls.map((control, index) => (
                                  <li key={index} className="text-sm text-gray-600 flex items-start">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    {control}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Tutorial Steps */}
                          <div>
                            <h4 className="font-semibold text-blue-700 mb-4">Tutorial Paso a Paso</h4>
                            <div className="space-y-4">
                              {game.tutorial.steps.map((step, index) => (
                                <div key={index} className="border rounded-lg p-4">
                                  <div className="flex items-start space-x-3">
                                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                                      {index + 1}
                                    </div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 mb-1">{step.title}</h5>
                                      <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                                      <p className="text-sm text-blue-700 bg-blue-50 p-2 rounded">
                                        <strong>Instrucciones:</strong> {step.details}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* External Links */}
                          <div className="border-t pt-4">
                            <Button variant="outline" className="w-full" asChild>
                              <a href="#" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Ver Guía Oficial
                              </a>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-brand-ink-900">Recursos Adicionales</CardTitle>
                <CardDescription className="font-body text-brand-olive-500">
                  Herramientas y guías para configurar controles parentales en consolas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild variant="secondary-brand" className="h-auto p-4">
                    <Link to="/aprende/controles">
                      <div className="text-left">
                        <div className="font-heading font-semibold text-brand-ink-900">Controles Parentales</div>
                        <div className="font-body text-sm text-brand-olive-500">Configura controles en consolas y dispositivos</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="secondary-brand" className="h-auto p-4">
                    <Link to="/aprende/tu-familia/redes-sociales">
                      <div className="text-left">
                        <div className="font-heading font-semibold text-brand-ink-900">Redes Sociales</div>
                        <div className="font-body text-sm text-brand-olive-500">Aprende sobre las plataformas sociales</div>
                      </div>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TuFamiliaVideojuegos;
