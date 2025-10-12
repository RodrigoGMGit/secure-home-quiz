import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, ExternalLink, Shield, AlertTriangle, Calendar, Settings, Gamepad2, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import GlobalHeader from "@/components/GlobalHeader";
import { GlossaryTerm } from "@/components/ui/GlossaryTerm";

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
            details: "Revisar clasificación <GlossaryTerm termKey=\"esrb\">ESRB</GlossaryTerm>: M (Maduro) 17+"
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
        <>Contenido <GlossaryTerm termKey="nsfw">NSFW</GlossaryTerm> en algunos canales</>
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
          <div className="flex items-center mb-4 sm:mb-6">
            <Button variant="ghost" asChild className="text-sm sm:text-base">
              <Link to="/aprende/tu-familia">
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Volver a Tu Familia
              </Link>
            </Button>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo circular con gradiente */}
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                <Gamepad2 className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
              Tu Familia y los Videojuegos
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-brand-olive-500 mb-6 sm:mb-8 px-4">
              Aprende sobre los juegos más populares y sus configuraciones de seguridad
            </p>
            
            {/* Frase destacada mejorada */}
            <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-6 sm:p-8 mx-4 sm:mx-0 shadow-soft">
              <p className="font-body text-base sm:text-lg text-brand-ink-800 font-medium italic">
                "No se trata solo de bloquear, sino de acompañar. Conozcan a qué juegan niñas, niños y adolescentes"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
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
                  <Gamepad2 className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-2">
                Videojuegos Más Populares
              </h2>
              <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                Guía completa sobre videojuegos y seguridad digital
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                      Entretenimiento responsable
                    </h3>
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                      Los videojuegos son una parte importante del entretenimiento digital de los niños y adolescentes. 
                      Es importante conocer los riesgos y configurar controles apropiados para cada edad.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                      Clasificación de edad
                    </h3>
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                      Siempre revisa la clasificación de edad (<GlossaryTerm termKey="esrb">ESRB</GlossaryTerm>) antes de permitir que tu hijo juegue. 
                      Cada juego tiene una clasificación específica según su contenido.
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
                        El 78% de los niños mexicanos entre 8 y 12 años juegan videojuegos regularmente, 
                        pero solo el 35% de los padres supervisa el contenido de los juegos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-12">
            {games.map((game, index) => {
              const cardColors = [
                "border-brand-teal-500/30 bg-brand-teal-500/10",
                "border-brand-mint-200/40 bg-brand-mint-200/20", 
                "border-brand-olive-500/30 bg-brand-olive-500/10"
              ];
              const iconColors = [
                "bg-brand-teal-500/20 text-brand-teal-500",
                "bg-brand-mint-200/60 text-brand-ink-800",
                "bg-brand-olive-500/20 text-brand-olive-500"
              ];
              const cardColor = cardColors[index % cardColors.length];
              const iconColor = iconColors[index % iconColors.length];
              
              return (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`${cardColor} border hover:shadow-soft transition-smooth hover:scale-105 h-full`}>
                  <CardHeader className="text-center p-4 sm:p-6">
                    <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 ${iconColor} rounded-full w-fit shadow-soft`}>
                      <span className="text-2xl sm:text-3xl">{game.logo}</span>
                    </div>
                    <CardTitle className="font-heading text-lg sm:text-xl text-brand-ink-900">{game.name}</CardTitle>
                    <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500">
                      {game.description}
                    </CardDescription>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-brand-olive-500" />
                      <span className="font-body text-xs sm:text-sm text-brand-olive-500">{game.age}</span>
                      <Badge variant="outline" className="text-xs">{game.platform}</Badge>
                    </div>
                  </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Risks */}
                    <div>
                      <h4 className="font-heading font-semibold text-brand-ink-900 mb-3 flex items-center">
                        <div className="p-1 bg-brand-teal-500/20 rounded-full mr-2">
                          <AlertTriangle className="h-4 w-4 text-brand-teal-500" />
                        </div>
                        Riesgos Principales
                      </h4>
                      <ul className="space-y-2">
                        {game.risks.slice(0, 3).map((risk, riskIndex) => (
                          <li key={riskIndex} className="font-body text-sm text-brand-ink-800 flex items-start p-2 bg-white rounded-lg border border-brand-mint-200/20">
                            <div className="w-1.5 h-1.5 bg-brand-teal-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {risk}
                          </li>
                        ))}
                        {game.risks.length > 3 && (
                          <li className="font-body text-sm text-brand-olive-500 p-2 bg-white rounded-lg border border-brand-mint-200/20">
                            +{game.risks.length - 3} más...
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Controls */}
                    <div>
                      <h4 className="font-heading font-semibold text-brand-ink-900 mb-3 flex items-center">
                        <div className="p-1 bg-brand-teal-500/20 rounded-full mr-2">
                          <Shield className="h-4 w-4 text-brand-teal-500" />
                        </div>
                        Controles Recomendados
                      </h4>
                      <ul className="space-y-2">
                        {game.controls.slice(0, 3).map((control, controlIndex) => (
                          <li key={controlIndex} className="font-body text-sm text-brand-ink-800 flex items-start p-2 bg-white rounded-lg border border-brand-mint-200/20">
                            <div className="w-1.5 h-1.5 bg-brand-teal-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {control}
                          </li>
                        ))}
                        {game.controls.length > 3 && (
                          <li className="font-body text-sm text-brand-olive-500 p-2 bg-white rounded-lg border border-brand-mint-200/20">
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
                      <DialogContent className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white border-brand-mint-200/30 shadow-soft">
                        <DialogHeader className="text-center pb-4 sm:pb-6 px-4 sm:px-0">
                          <div className="flex justify-center mb-3 sm:mb-4">
                            <div className="p-2 sm:p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                              <span className="text-2xl sm:text-3xl">{game.logo}</span>
                            </div>
                          </div>
                          <DialogTitle className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-2 px-2">
                            {game.tutorial.title}
                          </DialogTitle>
                          <DialogDescription className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 px-2">
                            {game.description}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
                          {/* Game Info */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl p-4 sm:p-6 border border-brand-mint-200/30 shadow-soft">
                              <h4 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-3 sm:mb-4 flex items-center">
                                <div className="p-1 bg-brand-teal-500/20 rounded-full mr-2 sm:mr-3">
                                  <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-brand-teal-500" />
                                </div>
                                Riesgos Importantes
                              </h4>
                              <ul className="space-y-2 sm:space-y-3">
                                {game.risks.map((risk, index) => (
                                  <li key={index} className="font-body text-xs sm:text-sm md:text-base text-brand-ink-800 flex items-start p-2 sm:p-3 bg-white rounded-lg border border-brand-mint-200/20">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                                    {risk}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl p-4 sm:p-6 border border-brand-mint-200/30 shadow-soft">
                              <h4 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-3 sm:mb-4 flex items-center">
                                <div className="p-1 bg-brand-teal-500/20 rounded-full mr-2 sm:mr-3">
                                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-brand-teal-500" />
                                </div>
                                Controles Recomendados
                              </h4>
                              <ul className="space-y-2 sm:space-y-3">
                                {game.controls.map((control, index) => (
                                  <li key={index} className="font-body text-xs sm:text-sm md:text-base text-brand-ink-800 flex items-start p-2 sm:p-3 bg-white rounded-lg border border-brand-mint-200/20">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                                    {control}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Tutorial Steps */}
                          <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl p-4 sm:p-6 border border-brand-mint-200/30 shadow-soft">
                            <h4 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 sm:mb-6 flex items-center">
                              <div className="p-1 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full mr-2 sm:mr-3">
                                <Settings className="h-3 w-3 sm:h-4 sm:w-4 text-primary-foreground" />
                              </div>
                              Tutorial Paso a Paso
                            </h4>
                            <div className="space-y-4 sm:space-y-6">
                              {game.tutorial.steps.map((step, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 sm:p-6 border border-brand-mint-200/20 shadow-soft hover:shadow-md transition-smooth">
                                  <div className="flex items-start space-x-3 sm:space-x-4">
                                    <div className="bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 text-brand-ink-800 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 shadow-soft">
                                      {index + 1}
                                    </div>
                                    <div className="flex-1">
                                      <h5 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-2">{step.title}</h5>
                                      <p className="font-body text-xs sm:text-sm text-brand-ink-800 mb-3 leading-relaxed">{step.description}</p>
                                      <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-3 sm:p-4">
                                        <p className="font-body text-xs sm:text-sm text-brand-ink-800">
                                          <span className="font-semibold text-brand-ink-900">Instrucciones:</span> {step.details}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* External Links */}
                          <div className="border-t border-brand-mint-200/30 pt-4 sm:pt-6 px-4 sm:px-0">
                            <Button variant="primary-brand" className="w-full text-sm sm:text-base shadow-soft hover:shadow-md transition-smooth" asChild>
                              <a href="#" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
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
              );
            })}
          </div>

          {/* Key Points */}
          <motion.div 
            className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
                Fundamentos para un hogar digital seguro con videojuegos
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-teal-500">1</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Configuración Inicial
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                  Configura los controles parentales desde el primer día. 
                  Es más fácil establecer límites desde el inicio que cambiarlos después.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-mint-200/60 to-brand-mint-200/40 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-800">2</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Monitoreo Activo
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                  Revisa regularmente las actividades de juego de tus hijos. 
                  Mantén un diálogo abierto sobre sus experiencias en línea.
                </p>
              </div>
              
              <div className="text-center group sm:col-span-2 lg:col-span-1">
                <div className="bg-gradient-to-br from-brand-olive-500/20 to-brand-olive-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-olive-500">3</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Equilibrio Digital
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                  Establece horarios de juego y fomenta actividades offline. 
                  El equilibrio es clave para un desarrollo saludable.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full">
                  <ExternalLink className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                Recursos Adicionales
              </h2>
              <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                Herramientas y guías oficiales para proteger a tu familia
              </p>
            </div>
            
            <Card className="border-brand-teal-500/30 bg-brand-teal-500/10 hover:shadow-soft transition-smooth">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-heading text-lg sm:text-xl md:text-2xl text-brand-ink-900 text-center">Continúa tu Aprendizaje</CardTitle>
                <CardDescription className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 text-center">
                  Explora estas secciones para profundizar en la seguridad digital familiar
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                  <Button asChild variant="secondary-brand" className="h-auto p-3 sm:p-4 hover:scale-105 transition-smooth w-full min-h-[120px] text-left whitespace-normal break-words">
                    <Link to="/aprende/tu-familia/conectada" className="w-full h-full flex flex-col justify-center">
                      <div className="font-heading font-semibold text-sm sm:text-base text-brand-ink-900 mb-2">Tu Familia Conectada</div>
                      <div className="font-body text-xs sm:text-sm text-brand-olive-500 leading-relaxed">Evalúa la seguridad digital de tu hogar con nuestro checklist interactivo</div>
                    </Link>
                  </Button>
                  <Button asChild variant="secondary-brand" className="h-auto p-3 sm:p-4 hover:scale-105 transition-smooth w-full min-h-[120px] text-left whitespace-normal break-words">
                    <Link to="/aprende/tu-familia/redes-sociales" className="w-full h-full flex flex-col justify-center">
                      <div className="font-heading font-semibold text-sm sm:text-base text-brand-ink-900 mb-2">Redes Sociales</div>
                      <div className="font-body text-xs sm:text-sm text-brand-olive-500 leading-relaxed">Aprende sobre las plataformas más populares y sus configuraciones de seguridad</div>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      </div>
    </>
  );
};

export default TuFamiliaVideojuegos;
