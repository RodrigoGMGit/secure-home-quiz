import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, ExternalLink, Shield, AlertTriangle, Calendar, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const TuFamiliaRedesSociales = () => {
  // Scroll automático al inicio de la página al cambiar de ruta
  useScrollToTop();

  const [selectedPlatform, setSelectedPlatform] = useState<any>(null);

  const platforms = [
    {
      id: "tiktok",
      name: "TikTok",
      description: "Red social para grabar, ver y compartir videos cortos",
      logo: "🎵",
      age: "13+ años",
      risks: [
        "Contenido gráfico, sexual o violento",
        "Contacto con personas desconocidas",
        "Retos virales peligrosos",
        "Transmisiones en vivo con dinero real",
        "Compartir información sensible"
      ],
      controls: [
        "Activar Family Pairing",
        "Restringir contenido para adultos",
        "Configurar perfil privado",
        "Desactivar lives y compras",
        "Usar alias en lugar del nombre real"
      ],
      tutorial: {
        title: "Configuración de TikTok para Familias",
        steps: [
          {
            title: "Activar Family Pairing",
            description: "Vincula la cuenta de tu hijo con la tuya para supervisar su actividad",
            details: "Ve a Configuración > Privacidad y seguridad > Family Pairing y sigue las instrucciones"
          },
          {
            title: "Configurar Privacidad",
            description: "Establece quién puede ver y comentar en los videos",
            details: "Configuración > Privacidad y seguridad > Privacidad de la cuenta > Cuenta privada"
          },
          {
            title: "Restringir Contenido",
            description: "Activa el filtro de contenido para adultos",
            details: "Configuración > Privacidad y seguridad > Contenido > Modo restringido"
          },
          {
            title: "Desactivar Mensajes Directos",
            description: "Evita que extraños contacten a tu hijo",
            details: "Configuración > Privacidad y seguridad > Seguridad > Mensajes directos"
          }
        ]
      }
    },
    {
      id: "instagram",
      name: "Instagram",
      description: "Red social para compartir fotos, videos e historias",
      logo: "📸",
      age: "13+ años",
      risks: [
        "Mapa de ubicación en tiempo real",
        "Contacto con personas desconocidas",
        "Contenido inapropiado",
        "Solicitudes de seguidores desconocidos",
        "Mensajes falsos de marcas"
      ],
      controls: [
        "Configurar cuenta privada",
        "Activar modo invisible en el mapa",
        "Supervisar seguidores y mensajes",
        "No compartir ubicación",
        "Revisar configuración de privacidad"
      ],
      tutorial: {
        title: "Configuración de Instagram para Familias",
        steps: [
          {
            title: "Configurar Cuenta Privada",
            description: "Solo personas aprobadas pueden ver el contenido",
            details: "Configuración > Privacidad > Cuenta privada"
          },
          {
            title: "Desactivar Ubicación",
            description: "Evita que se comparta la ubicación en tiempo real",
            details: "Configuración > Privacidad > Ubicación > Desactivar"
          },
          {
            title: "Controlar Seguidores",
            description: "Revisa y aprueba quién puede seguir la cuenta",
            details: "Configuración > Privacidad > Seguidores > Solicitudes de seguimiento"
          },
          {
            title: "Filtrar Comentarios",
            description: "Evita comentarios ofensivos o inapropiados",
            details: "Configuración > Privacidad > Comentarios > Filtrar comentarios"
          }
        ]
      }
    },
    {
      id: "snapchat",
      name: "Snapchat",
      description: "App para compartir fotos y videos que desaparecen",
      logo: "👻",
      age: "13+ años",
      risks: [
        "Falsa sensación de privacidad",
        "Capturas de pantalla sin consentimiento",
        "Contenido editorial no filtrado",
        "Snap Map revela ubicación",
        "Compartir contenido inapropiado"
      ],
      controls: [
        "Desactivar Snap Map",
        "Configurar privacidad de historias",
        "Revisar configuración de mensajes",
        "Activar modo fantasma",
        "Educar sobre riesgos de contenido temporal"
      ],
      tutorial: {
        title: "Configuración de Snapchat para Familias",
        steps: [
          {
            title: "Desactivar Snap Map",
            description: "Evita que se comparta la ubicación en tiempo real",
            details: "Perfil > Configuración > Ver mi ubicación > Modo fantasma"
          },
          {
            title: "Configurar Privacidad de Historias",
            description: "Controla quién puede ver las historias",
            details: "Configuración > Privacidad > Quién puede ver mi historia"
          },
          {
            title: "Controlar Mensajes",
            description: "Establece quién puede enviar mensajes",
            details: "Configuración > Privacidad > Quién puede contactarme"
          },
          {
            title: "Activar Modo Fantasma",
            description: "Oculta completamente la ubicación",
            details: "Perfil > Configuración > Ver mi ubicación > Modo fantasma"
          }
        ]
      }
    },
    {
      id: "youtube",
      name: "YouTube",
      description: "Plataforma de videos más popular del mundo",
      logo: "📺",
      age: "13+ años",
      risks: [
        "Contenido inapropiado difícil de filtrar",
        "Publicidad disfrazada de contenido",
        "Comentarios ofensivos",
        "YouTube Shorts sin filtros",
        "Algoritmo puede mostrar contenido dañino"
      ],
      controls: [
        "Activar modo restringido",
        "Establecer límites de tiempo",
        "Supervisar contenido visto",
        "Enseñar a identificar contenido confiable",
        "Configurar controles parentales"
      ],
      tutorial: {
        title: "Configuración de YouTube para Familias",
        steps: [
          {
            title: "Activar Modo Restringido",
            description: "Filtra contenido inapropiado (aunque no es infalible)",
            details: "Perfil > Configuración > General > Modo restringido"
          },
          {
            title: "Configurar Controles Parentales",
            description: "Usa YouTube Kids para niños menores",
            details: "Descargar YouTube Kids desde la tienda de aplicaciones"
          },
          {
            title: "Establecer Límites de Tiempo",
            description: "Controla cuánto tiempo se puede usar la app",
            details: "Configuración > Tiempo en pantalla > Límites de la app"
          },
          {
            title: "Revisar Historial",
            description: "Supervisa qué videos ha visto tu hijo",
            details: "Biblioteca > Historial para ver videos recientes"
          }
        ]
      }
    },
    {
      id: "youtube-kids",
      name: "YouTube Kids",
      description: "Versión segura de YouTube para niños",
      logo: "🧒",
      age: "4+ años",
      risks: [
        "Algunos videos pueden no ser apropiados",
        "Publicidad dirigida a niños",
        "Contenido de creadores no verificados",
        "Posible exposición a contenido no educativo"
      ],
      controls: [
        "Configurar perfil de niño",
        "Establecer límites de tiempo",
        "Revisar contenido permitido",
        "Desactivar búsqueda",
        "Supervisar actividad regularmente"
      ],
      tutorial: {
        title: "Configuración de YouTube Kids para Familias",
        steps: [
          {
            title: "Crear Perfil de Niño",
            description: "Personaliza la experiencia según la edad",
            details: "Configuración > Crear perfil > Seleccionar edad"
          },
          {
            title: "Desactivar Búsqueda",
            description: "Solo permite contenido preaprobado",
            details: "Configuración > Búsqueda > Desactivar"
          },
          {
            title: "Establecer Límites de Tiempo",
            description: "Controla cuánto tiempo puede usar la app",
            details: "Configuración > Tiempo en pantalla > Establecer límite"
          },
          {
            title: "Revisar Contenido",
            description: "Aprobar o bloquear canales específicos",
            details: "Configuración > Aprobación de contenido > Gestionar"
          }
        ]
      }
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      description: "Aplicación de mensajería instantánea",
      logo: "💬",
      age: "16+ años",
      risks: [
        "Grupos con personas desconocidas",
        "Compartir información personal",
        "Mensajes de contenido inapropiado",
        "Ubicación compartida en tiempo real",
        "Contactos no verificados"
      ],
      controls: [
        "Configurar privacidad de perfil",
        "Controlar quién puede agregar a grupos",
        "Desactivar ubicación en tiempo real",
        "Configurar mensajes temporales",
        "Revisar contactos regularmente"
      ],
      tutorial: {
        title: "Configuración de WhatsApp para Familias",
        steps: [
          {
            title: "Configurar Privacidad",
            description: "Controla quién puede ver tu información",
            details: "Configuración > Privacidad > Perfil > Solo contactos"
          },
          {
            title: "Controlar Grupos",
            description: "Evita ser agregado a grupos sin permiso",
            details: "Configuración > Privacidad > Grupos > Mis contactos"
          },
          {
            title: "Desactivar Ubicación",
            description: "No compartir ubicación en tiempo real",
            details: "Configuración > Privacidad > Ubicación > Nunca"
          },
          {
            title: "Configurar Mensajes Temporales",
            description: "Los mensajes se eliminan automáticamente",
            details: "Chat > Configuración > Mensajes temporales"
          }
        ]
      }
    },
    {
      id: "discord",
      name: "Discord",
      description: "Plataforma de comunicación para comunidades",
      logo: "🎮",
      age: "13+ años",
      risks: [
        "Servidores con contenido inapropiado",
        "Contacto con personas desconocidas",
        "Compartir información personal",
        "Llamadas de voz con extraños",
        "Contenido NSFW en algunos servidores"
      ],
      controls: [
        "Configurar privacidad estricta",
        "Solo unirse a servidores aprobados",
        "Desactivar mensajes directos de extraños",
        "Revisar servidores regularmente",
        "Configurar filtros de contenido"
      ],
      tutorial: {
        title: "Configuración de Discord para Familias",
        steps: [
          {
            title: "Configurar Privacidad",
            description: "Controla quién puede contactarte",
            details: "Configuración > Privacidad y seguridad > Permitir mensajes directos"
          },
          {
            title: "Filtrar Contenido",
            description: "Bloquea contenido explícito",
            details: "Configuración > Privacidad y seguridad > Filtro de contenido explícito"
          },
          {
            title: "Controlar Servidores",
            description: "Solo unirse a servidores aprobados por padres",
            details: "Revisar servidores en el menú lateral"
          },
          {
            title: "Configurar Notificaciones",
            description: "Controla cuándo recibir notificaciones",
            details: "Configuración > Notificaciones > Personalizar"
          }
        ]
      }
    },
    {
      id: "twitch",
      name: "Twitch",
      description: "Plataforma de streaming de videojuegos",
      logo: "📡",
      age: "13+ años",
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
        title: "Configuración de Twitch para Familias",
        steps: [
          {
            title: "Configurar Filtros",
            description: "Bloquea contenido inapropiado",
            details: "Configuración > Privacidad y seguridad > Filtros de contenido"
          },
          {
            title: "Controlar Chat",
            description: "Desactivar o moderar el chat",
            details: "Configuración > Privacidad y seguridad > Chat > Moderar"
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
              Tu Familia y las Redes Sociales
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-brand-olive-500 px-4">
              Conoce las plataformas más populares y cómo proteger a tu familia
            </p>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <motion.div 
            className="bg-white rounded-lg shadow-soft p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-3 sm:mb-4">
              Plataformas Digitales Más Populares
            </h2>
            <p className="font-body text-base sm:text-lg text-brand-ink-800 mb-4 sm:mb-6">
              En esta sección compartimos las plataformas digitales más populares, los potenciales riesgos 
              a los que tus hijos e hijas se pueden ver expuestos, y qué medidas tomar para propiciar un buen uso.
            </p>
            <div className="bg-brand-mint-200/50 border-l-4 border-brand-teal-500 p-3 sm:p-4">
              <p className="font-body text-sm sm:text-base text-brand-ink-800 font-medium">
                <strong>Recuerda:</strong> No se trata de tener el control total, sino de acompañarles con presencia y criterio.
              </p>
            </div>
          </motion.div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                      <span className="text-2xl sm:text-3xl">{platform.logo}</span>
                      <div>
                        <CardTitle className="font-heading text-lg sm:text-xl text-brand-ink-900">{platform.name}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-brand-olive-500" />
                          <span className="font-body text-xs sm:text-sm text-brand-olive-500">{platform.age}</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="font-body text-sm sm:text-base text-brand-ink-800">
                      {platform.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      {/* Risks */}
                      <div>
                        <h4 className="font-heading font-semibold text-sm sm:text-base text-brand-ink-900 mb-2 flex items-center">
                          <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-brand-teal-500" />
                          Riesgos Principales
                        </h4>
                        <ul className="space-y-1">
                          {platform.risks.slice(0, 3).map((risk, index) => (
                            <li key={index} className="font-body text-xs sm:text-sm text-brand-ink-800 flex items-start">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-brand-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></div>
                              {risk}
                            </li>
                          ))}
                          {platform.risks.length > 3 && (
                            <li className="font-body text-xs sm:text-sm text-brand-olive-500">
                              +{platform.risks.length - 3} más...
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Controls */}
                      <div>
                        <h4 className="font-heading font-semibold text-sm sm:text-base text-brand-ink-900 mb-2 flex items-center">
                          <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-brand-teal-500" />
                          Controles Recomendados
                        </h4>
                        <ul className="space-y-1">
                          {platform.controls.slice(0, 3).map((control, index) => (
                            <li key={index} className="font-body text-xs sm:text-sm text-brand-ink-800 flex items-start">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-brand-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></div>
                              {control}
                            </li>
                          ))}
                          {platform.controls.length > 3 && (
                            <li className="font-body text-xs sm:text-sm text-brand-olive-500">
                              +{platform.controls.length - 3} más...
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="primary-brand"
                            className="w-full text-xs sm:text-sm"
                            onClick={() => setSelectedPlatform(platform)}
                          >
                            <Settings className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Ver Guía Completa
                          </Button>
                        </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl flex items-center">
                            <span className="text-3xl mr-3">{platform.logo}</span>
                            {platform.tutorial.title}
                          </DialogTitle>
                          <DialogDescription className="text-base">
                            {platform.description}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          {/* Platform Info */}
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-red-700 mb-2">Riesgos Importantes</h4>
                              <ul className="space-y-1">
                                {platform.risks.map((risk, index) => (
                                  <li key={index} className="text-sm text-gray-600 flex items-start">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    {risk}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-green-700 mb-2">Controles Parentales</h4>
                              <ul className="space-y-1">
                                {platform.controls.map((control, index) => (
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
                              {platform.tutorial.steps.map((step, index) => (
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
                  Herramientas y guías oficiales para proteger a tu familia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild variant="secondary-brand" className="h-auto p-4">
                    <Link to="/aprende/tu-familia/videojuegos">
                      <div className="text-left">
                        <div className="font-heading font-semibold text-brand-ink-900">Videojuegos</div>
                        <div className="font-body text-sm text-brand-olive-500">Aprende sobre los juegos más populares</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="secondary-brand" className="h-auto p-4">
                    <Link to="/aprende/controles">
                      <div className="text-left">
                        <div className="font-heading font-semibold text-brand-ink-900">Controles Parentales</div>
                        <div className="font-body text-sm text-brand-olive-500">Configura controles en todos los dispositivos</div>
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

export default TuFamiliaRedesSociales;
