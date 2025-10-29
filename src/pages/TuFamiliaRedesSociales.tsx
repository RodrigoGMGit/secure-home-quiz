import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, ExternalLink, Shield, AlertTriangle, Calendar, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import GlobalHeader from "@/components/GlobalHeader";
import { GlossaryTerm } from "@/components/ui/GlossaryTerm";
import LearningPathNav from "@/components/learning-navigation/LearningPathNav";
import { DecorativeBackground } from "@/components/shared/DecorativeBackground";
import { PageHeader } from "@/components/shared/PageHeader";
import { 
  TikTokIcon, 
  InstagramIcon, 
  SnapchatIcon, 
  YouTubeIcon, 
  WhatsAppIcon, 
  DiscordIcon, 
  TwitchIcon,
  FacebookIcon,
  TwitterIcon,
  KickIcon
} from "@/components/icons/platforms";

const TuFamiliaRedesSociales = () => {
  // Scroll automático al inicio de la página al cambiar de ruta
  useScrollToTop();

  const [selectedPlatform, setSelectedPlatform] = useState<typeof platforms[0] | null>(null);

  const platforms = [
    {
      id: "tiktok",
      name: "TikTok",
      description: "Red social para grabar, ver y compartir videos cortos",
      logo: TikTokIcon,
      age: "13+ años",
      risks: [
        "Contenido gráfico, sexual o violento",
        "Contacto con personas desconocidas",
        "Retos virales peligrosos",
        "Transmisiones en vivo con dinero real",
        "Compartir información sensible"
      ],
      controls: [
        "Activar Family Pairing (emparejamiento familiar)",
        "Restringir contenido para adultos",
        "Configurar perfil privado",
        "Desactivar lives (transmisiones en vivo) y compras",
        "Usar alias en lugar del nombre real"
      ],
      tutorial: {
        title: "Configuración de TikTok para Familias",
        steps: [
          {
            title: "Activar Family Pairing (emparejamiento familiar)",
            description: "Vincula la cuenta de tu hijo con la tuya para supervisar su actividad",
            details: "Ve a Configuración > Privacidad y seguridad > Family Pairing (emparejamiento familiar) y sigue las instrucciones"
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
            title: "Desactivar Mensajes Directos (DMs)",
            description: "Evita que extraños contacten a tu hijo",
            details: "Configuración > Privacidad y seguridad > Seguridad > Mensajes directos"
          }
        ]
      },
      externalResources: [
        {
          label: "Guía oficial para padres, madres y personas tutoras",
          url: "https://www.tiktok.com/safety/es/guardians-guide"
        },
        {
          label: "Guía oficial de configuración",
          url: "https://support.tiktok.com/es/getting-started/setting-up-your-profile"
        },
        {
          label: "Guía de TikTok para Madres, Padres y Personas Tutoras en colaboración con Fundación Pas",
          url: "https://www.gob.mx/cms/uploads/attachment/file/942954/TikTok_Gu_a_Madres_Padres_Tutorxs_2023_M_xico.pdf"
        }
      ]
    },
    {
      id: "instagram",
      name: "Instagram",
      description: "Red social para compartir fotos, videos e historias",
      logo: InstagramIcon,
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
      },
      externalResources: [
        {
          label: "Guía oficial para padres, madres y personas tutoras",
          url: "https://about.instagram.com/es-la/blog/announcements/new-parental-controls-and-teen-privacy-defaults"
        },
        {
          label: "Guía oficial de configuración",
          url: "https://about.instagram.com/es-la/safety"
        }
      ]
    },
    {
      id: "snapchat",
      name: "Snapchat",
      description: "App para compartir fotos y videos que desaparecen",
      logo: SnapchatIcon,
      age: "13+ años",
      risks: [
        "Falsa sensación de privacidad",
        "Capturas de pantalla sin consentimiento",
        "Contenido editorial no filtrado",
        "Snap Map (mapa de ubicación) revela ubicación",
        "Compartir contenido inapropiado"
      ],
      controls: [
        "Desactivar Snap Map (mapa de ubicación)",
        "Configurar privacidad de historias",
        "Revisar configuración de mensajes",
        "Activar modo fantasma",
        "Educar sobre riesgos de contenido temporal"
      ],
      tutorial: {
        title: "Configuración de Snapchat para Familias",
        steps: [
          {
            title: "Desactivar Snap Map (mapa de ubicación)",
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
      },
      externalResources: [
        {
          label: "Guía oficial para padres, madres y personas tutoras (en español)",
          url: "https://parents.snapchat.com/es-ES/"
        },
        {
          label: "Guía oficial de configuración",
          url: "https://values.snap.com/privacy/privacy-through-security?lang=es"
        }
      ]
    },
    {
      id: "youtube",
      name: "YouTube",
      description: "Plataforma de videos más popular del mundo",
      logo: YouTubeIcon,
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
      },
      externalResources: [
        {
          label: "Guía oficial para padres, madres y personas tutoras familias",
          url: "https://support.google.com/youtube/answer/2802272?hl=es-419"
        },
        {
          label: "Guía oficial de configuración",
          url: "https://www.youtube.com/intl/ALL_es/howyoutubeworks/user-settings/privacy/"
        }
      ]
    },
    {
      id: "youtube-kids",
      name: "YouTube Kids",
      description: "Versión segura de YouTube para niños",
      logo: YouTubeIcon,
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
      },
      externalResources: [
        {
          label: "Guía oficial para padres, madres y personas tutoras",
          url: "https://www.youtube.com/intl/ALL_mx/kids/parent-resources/"
        },
        {
          label: "Guía oficial de configuración",
          url: "https://support.google.com/youtubekids/answer/6172308?hl=es-419&co=GENIE.Platform%3DAndroid"
        }
      ]
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      description: "Aplicación de mensajería instantánea",
      logo: WhatsAppIcon,
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
      },
      externalResources: [
        {
          label: "Guía oficial de configuración de privacidad",
          url: "https://faq.whatsapp.com/3307102709559968/?helpref=uf_share"
        },
        {
          label: "Guía oficial para aplicar ajustes de doble verificación",
          url: "https://faq.whatsapp.com/1920866721452534/?locale=es_LA"
        }
      ]
    },
    {
      id: "discord",
      name: "Discord",
      description: "Plataforma de comunicación para comunidades",
      logo: DiscordIcon,
      age: "13+ años",
      risks: [
        "Servidores con contenido inapropiado",
        "Contacto con personas desconocidas",
        "Compartir información personal",
        "Llamadas de voz con extraños",
        <>Contenido <GlossaryTerm termKey="nsfw">NSFW</GlossaryTerm> en algunos servidores</>
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
      },
      externalResources: [
        {
          label: "Centro Familiar para padres, madres y tutores",
          url: "https://support.discord.com/hc/es/articles/14155043715735-Centro-Familiar-para-Padres-Madres-y-Tutores"
        }
      ]
    },
    {
      id: "twitch",
      name: "Twitch",
      description: <>Plataforma de <GlossaryTerm termKey="streaming">streaming</GlossaryTerm> de videojuegos</>,
      logo: TwitchIcon,
      age: "13+ años",
      risks: [
        <>Contenido de <GlossaryTerm termKey="streaming">streaming</GlossaryTerm> inapropiado</>,
        "Chat con lenguaje ofensivo",
        "Donaciones con dinero real",
        <>Contacto con <GlossaryTerm termKey="streamers">streamers</GlossaryTerm> desconocidos</>,
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
      },
      externalResources: [
        {
          label: "Guía oficial para padres, madres y personas educadoras",
          url: "https://safety.twitch.tv/s/article/Guide-Parents-Educators?language=es_MX"
        },
        {
          label: "Cómo prevenir el robo de cuentas en Twitch",
          url: "https://safety.twitch.tv/s/article/Two-Factor-Authentication?language=es_MX"
        }
      ]
    },
    {
      id: "facebook",
      name: "Facebook",
      description: "Red social para compartir fotos, pensamientos y conectar con familiares y comunidades",
      logo: FacebookIcon,
      age: "13+ años (se recomienda supervisión hasta 15)",
      risks: [
        "Contacto con personas desconocidas (riesgo de grooming)",
        "Exposición a contenido inapropiado y noticias falsas",
        "Ciberacoso en grupos o comentarios",
        "Acceso a grupos peligrosos (retos virales, violencia)",
        "Marketplace con riesgo de contacto con desconocidos"
      ],
      controls: [
        "Configurar privacidad estricta del perfil",
        "Revisar y aprobar solicitudes de amistad",
        "Desactivar ubicación y Facebook Live",
        "Configurar quién puede ver publicaciones",
        "Supervisar grupos e interacciones"
      ],
      tutorial: {
        title: "Configuración de Facebook para Familias",
        steps: [
          {
            title: "Configurar Privacidad del Perfil",
            description: "Establece quién puede ver información personal",
            details: "Configuración > Privacidad > Cuenta privada > Activar"
          },
          {
            title: "Controlar Solicitudes de Amistad",
            description: "Aprobar manualmente cada solicitud",
            details: "Configuración > Privacidad > Quién puede enviarte solicitudes de amistad > Amigos de amigos"
          },
          {
            title: "Desactivar Ubicación",
            description: "Evita compartir ubicación en tiempo real",
            details: "Configuración > Privacidad > Ubicación > Desactivar"
          },
          {
            title: "Configurar Visibilidad de Publicaciones",
            description: "Controla quién puede ver contenido compartido",
            details: "Configuración > Privacidad > Tus publicaciones > Solo amigos"
          }
        ]
      },
      externalResources: [
        {
          label: "Centro para Familias Meta",
          url: "https://familycenter.meta.com/latam/static-resource/fc-overview/"
        },
        {
          label: "Configuración de privacidad de Facebook",
          url: "https://www.facebook.com/help/325807937506242"
        }
      ]
    },
    {
      id: "x",
      name: "X (antes Twitter)",
      description: "Red social para compartir mensajes cortos y noticias en tiempo real",
      logo: TwitterIcon,
      age: "13+ años",
      risks: [
        "Contacto con personas desconocidas",
        "Exposición a contenido ofensivo o violento",
        "Ciberacoso en respuestas y menciones",
        "Noticias falsas y desinformación",
        "Compartir información sensible"
      ],
      controls: [
        "Configurar perfil privado (proteger tweets)",
        "Desactivar mensajes directos de extraños",
        "Filtrar contenido sensible",
        "Limitar quién puede responder o mencionarlos",
        "Revisar configuración de privacidad regularmente"
      ],
      tutorial: {
        title: "Configuración de X (Twitter) para Familias",
        steps: [
          {
            title: "Configurar Privacidad de Tweets",
            description: "Protege tweets para que solo seguidores aprobados los vean",
            details: "Configuración > Privacidad y seguridad > Proteger tus Tweets > Activar"
          },
          {
            title: "Controlar Mensajes Directos",
            description: "Evita que extraños envíen mensajes",
            details: "Configuración > Privacidad y seguridad > Mensajes directos > Solo personas que sigues"
          },
          {
            title: "Filtrar Contenido Sensible",
            description: "Oculta contenido potencialmente ofensivo",
            details: "Configuración > Privacidad y seguridad > Filtro de contenido sensible > Activar"
          },
          {
            title: "Limitar Interacciones",
            description: "Controla quién puede responder y mencionarte",
            details: "Configuración > Privacidad y seguridad > Tus tweets > Sólo personas que mencionas"
          }
        ]
      },
      externalResources: [
        {
          label: "Guía oficial privacidad",
          url: "https://help.x.com/es/safety-and-security/x-privacy-settings"
        },
        {
          label: "Guía sobre la seguridad de la cuenta",
          url: "https://help.x.com/es/safety-and-security/account-security-tips"
        }
      ]
    },
    {
      id: "kick",
      name: "Kick",
      description: <>Plataforma de <GlossaryTerm termKey="streaming">streaming</GlossaryTerm> para transmitir y ver videos en vivo</>,
      logo: KickIcon,
      age: "13+ años",
      risks: [
        <>Contenido de <GlossaryTerm termKey="streaming">streaming</GlossaryTerm> inapropiado</>,
        "Chat con lenguaje ofensivo",
        <>Contacto con <GlossaryTerm termKey="streamers">streamers</GlossaryTerm> desconocidos</>,
        "Donaciones con dinero real",
        <>Contenido <GlossaryTerm termKey="nsfw">NSFW</GlossaryTerm> en algunos canales</>
      ],
      controls: [
        "Supervisar streams seguidos",
        "Revisar configuración de chat",
        "Desactivar notificaciones de contenido adulto",
        "Configurar límites de interacción",
        <>Educar sobre uso responsable de <GlossaryTerm termKey="streaming">streaming</GlossaryTerm></>
      ],
      tutorial: {
        title: "Configuración de Kick para Familias",
        steps: [
          {
            title: "Configurar Privacidad",
            description: "Establece límites de visibilidad del perfil",
            details: "Configuración > Privacidad > Perfil privado > Activar"
          },
          {
            title: "Filtrar Contenido",
            description: "Bloquea contenido no seguro para menores",
            details: "Configuración > Seguridad > Filtros de contenido > Activar modo seguro"
          },
          {
            title: "Controlar Interacciones",
            description: "Limita quién puede enviar mensajes",
            details: "Configuración > Mensajería > Solo personas que sigues"
          },
          {
            title: "Desactivar Compras",
            description: "Evita gastos no autorizados",
            details: "Configuración > Pagos > Desactivar compras e donaciones"
          }
        ]
      },
      externalResources: [
        {
          label: "Guía en inglés",
          url: "https://help.kick.com/en/articles/8956733-guide-for-parents-and-educators?utm_source=chatgpt.com"
        },
        {
          label: "Guía en español",
          url: "https://www.internetmatters.org/es/advice/apps-and-platforms/entertainment/kick-streaming/"
        }
      ]
    }
  ];

  return (
    <>
      <GlobalHeader />
      <div className="min-h-screen bg-gradient-subtle">
      {/* Decorative background elements */}
      <DecorativeBackground />

      {/* Header Section */}
      <PageHeader
        icon={Shield}
        title="Tu Familia y las Redes Sociales"
        subtitle="Conoce las plataformas más populares y cómo proteger a tu familia"
        highlightQuote="No se trata de tener el control total, sino de acompañarles con presencia y criterio"
        showBackButton={true}
        backButtonHref="/aprende/tu-familia"
        backButtonText="Volver a Tu Familia"
      />

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
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-2">
                Plataformas Digitales Más Populares
              </h2>
              <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                Guía completa sobre redes sociales y seguridad digital
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                      Conocimiento preventivo
                    </h3>
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                      En esta sección compartimos las plataformas digitales más populares, los potenciales riesgos 
                      a los que tus hijos e hijas se pueden ver expuestos, y qué medidas tomar para propiciar un buen uso.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                      Acompañamiento responsable
                    </h3>
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                      No se trata de tener el control total, sino de acompañarles con presencia y criterio. 
                      La educación digital es la mejor herramienta de protección.
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
                        El 73% de los padres mexicanos reportan preocupación por la seguridad digital 
                        de sus hijos, pero solo el 45% tiene controles parentales activos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {platforms.map((platform, index) => {
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
                  key={platform.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`${cardColor} border hover:shadow-soft transition-smooth hover:scale-105 h-full`}>
                  <CardHeader className="text-center p-4 sm:p-6">
                    <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 ${iconColor} rounded-full w-fit shadow-soft`}>
                      <platform.logo className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <CardTitle className="font-heading text-lg sm:text-xl text-brand-ink-900">{platform.name}</CardTitle>
                    <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500">
                      {platform.description}
                    </CardDescription>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-brand-olive-500" />
                      <span className="font-body text-xs sm:text-sm text-brand-olive-500">{platform.age}</span>
                    </div>
                    {platform.id === "youtube-kids" && (
                      <div className="mt-2">
                        <Badge variant="outline" className="text-[10px] sm:text-xs border-brand-teal-500 text-brand-teal-500">
                          Para menores de 12 años
                        </Badge>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      {/* Risks */}
                      <div>
                        <h4 className="font-heading font-semibold text-sm sm:text-base text-brand-ink-900 mb-3 flex items-center">
                          <div className="p-1 bg-brand-teal-500/20 rounded-full mr-2">
                            <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-brand-teal-500" />
                          </div>
                          Riesgos Principales
                        </h4>
                        <ul className="space-y-2">
                          {platform.risks.slice(0, 3).map((risk, riskIndex) => (
                            <li key={riskIndex} className="font-body text-xs sm:text-sm text-brand-ink-800 flex items-start p-2 bg-white rounded-lg border border-brand-mint-200/20">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></div>
                              {risk}
                            </li>
                          ))}
                          {platform.risks.length > 3 && (
                            <li className="font-body text-xs sm:text-sm text-brand-olive-500 p-2 bg-white rounded-lg border border-brand-mint-200/20">
                              +{platform.risks.length - 3} más...
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Controls */}
                      <div>
                        <h4 className="font-heading font-semibold text-sm sm:text-base text-brand-ink-900 mb-3 flex items-center">
                          <div className="p-1 bg-brand-teal-500/20 rounded-full mr-2">
                            <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-brand-teal-500" />
                          </div>
                          Controles Recomendados
                        </h4>
                        <ul className="space-y-2">
                          {platform.controls.slice(0, 3).map((control, controlIndex) => (
                            <li key={controlIndex} className="font-body text-xs sm:text-sm text-brand-ink-800 flex items-start p-2 bg-white rounded-lg border border-brand-mint-200/20">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></div>
                              {control}
                            </li>
                          ))}
                          {platform.controls.length > 3 && (
                            <li className="font-body text-xs sm:text-sm text-brand-olive-500 p-2 bg-white rounded-lg border border-brand-mint-200/20">
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
                      <DialogContent className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white border-brand-mint-200/30 shadow-soft">
                        <DialogHeader className="text-center pb-4 sm:pb-6 px-4 sm:px-0 overflow-hidden">
                          <div className="flex justify-center mb-3 sm:mb-4">
                            <div className="p-2 sm:p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                              <platform.logo className="h-6 w-6 sm:h-8 sm:w-8" />
                            </div>
                          </div>
                          <DialogTitle className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-2 px-2">
                            {platform.tutorial.title}
                          </DialogTitle>
                          <DialogDescription className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 px-2 break-words">
                            {platform.description}
                          </DialogDescription>
                          {platform.id === "youtube-kids" && (
                            <div className="mt-3">
                              <Badge variant="outline" className="text-xs sm:text-sm border-brand-teal-500 text-brand-teal-500">
                                Para menores de 12 años
                              </Badge>
                            </div>
                          )}
                        </DialogHeader>
                        
                        <div className="space-y-6 sm:space-y-8 px-4 sm:px-0 overflow-hidden">
                          {/* Platform Info */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 min-w-0">
                            <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl p-4 sm:p-6 border border-brand-mint-200/30 shadow-soft">
                              <h4 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-3 sm:mb-4 flex items-center">
                                <div className="p-1 bg-brand-teal-500/20 rounded-full mr-2 sm:mr-3">
                                  <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-brand-teal-500" />
                                </div>
                                Riesgos Importantes
                              </h4>
                              <ul className="space-y-2 sm:space-y-3">
                                {platform.risks.map((risk, index) => (
                                  <li key={index} className="font-body text-xs sm:text-sm md:text-base text-brand-ink-800 flex items-start p-2 sm:p-3 bg-white rounded-lg border border-brand-mint-200/20">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                                    <div className="flex-1 break-words">{risk}</div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl p-4 sm:p-6 border border-brand-mint-200/30 shadow-soft min-w-0 overflow-hidden">
                              <h4 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-3 sm:mb-4 flex items-center">
                                <div className="p-1 bg-brand-teal-500/20 rounded-full mr-2 sm:mr-3">
                                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-brand-teal-500" />
                                </div>
                                Controles Parentales
                              </h4>
                              <ul className="space-y-2 sm:space-y-3">
                                {platform.controls.map((control, index) => (
                                  <li key={index} className="font-body text-xs sm:text-sm md:text-base text-brand-ink-800 flex items-start p-2 sm:p-3 bg-white rounded-lg border border-brand-mint-200/20">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                                    <div className="flex-1 break-words">{control}</div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Tutorial Steps */}
                          <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl p-4 sm:p-6 border border-brand-mint-200/30 shadow-soft min-w-0 overflow-hidden">
                            <h4 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 sm:mb-6 flex items-center">
                              <div className="p-1 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full mr-2 sm:mr-3">
                                <Settings className="h-3 w-3 sm:h-4 sm:w-4 text-primary-foreground" />
                              </div>
                              Tutorial Paso a Paso
                            </h4>
                            <div className="space-y-4 sm:space-y-6">
                              {platform.tutorial.steps.map((step, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 sm:p-6 border border-brand-mint-200/20 shadow-soft hover:shadow-md transition-smooth min-w-0 overflow-hidden">
                                  <div className="flex items-start space-x-3 sm:space-x-4">
                                    <div className="bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 text-brand-ink-800 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 shadow-soft">
                                      {index + 1}
                                    </div>
                                    <div className="flex-1">
                                      <h5 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-2 break-words">{step.title}</h5>
                                      <p className="font-body text-xs sm:text-sm text-brand-ink-800 mb-3 leading-relaxed break-words">{step.description}</p>
                                      <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-3 sm:p-4">
                                        <p className="font-body text-xs sm:text-sm text-brand-ink-800 break-words">
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
                          {platform.externalResources && platform.externalResources.length > 0 && (
                            <div className="border-t border-brand-mint-200/30 pt-4 sm:pt-6 px-4 sm:px-0 space-y-3">
                              {platform.externalResources.map((resource, resourceIndex) => (
                                <Button
                                  key={resourceIndex}
                                  variant="primary-brand"
                                  className="w-full text-sm sm:text-base shadow-soft hover:shadow-md transition-smooth h-auto py-3 px-4 whitespace-normal break-words"
                                  asChild
                                >
                                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center break-words">
                                    <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                    <span className="text-left break-words">{resource.label}</span>
                                  </a>
                                </Button>
                              ))}
                            </div>
                          )}
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
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                Recuerda estos 3 elementos clave:
              </h3>
              <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                Fundamentos para el uso seguro de redes sociales
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-teal-500">1</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Configuración de Privacidad
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                  Siempre configura las opciones de privacidad en cada plataforma. 
                  Cuentas privadas y límites de contacto son fundamentales.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-mint-200/60 to-brand-mint-200/40 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-800">2</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Supervisión Activa
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                  Revisa regularmente las cuentas de tus hijos, sus seguidores 
                  y el contenido que comparten. La supervisión es clave.
                </p>
              </div>
              
              <div className="text-center group sm:col-span-2 lg:col-span-1">
                <div className="bg-gradient-to-br from-brand-olive-500/20 to-brand-olive-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-olive-500">3</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Educación Digital
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                  Enseña a tus hijos a identificar contenido inapropiado y 
                  a reportar situaciones sospechosas. La educación es la mejor protección.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Learning Path Navigation */}
          <LearningPathNav currentRoute="/aprende/tu-familia/redes-sociales" />
        </div>
      </div>
      </div>
    </>
  );
};

export default TuFamiliaRedesSociales;
