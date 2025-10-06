import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Heart, MessageCircle, Shield, Users, AlertTriangle, Eye, Clock, BookOpen, Lightbulb, HandHeart } from 'lucide-react';
import GlobalHeader from '@/components/GlobalHeader';

const ComunicacionYApoyo = () => {
  const señalesAlerta = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-brand-ink-800" />,
      title: "Cambios repentinos de ánimo o comportamiento",
      description: "Se muestra irritable, ansioso, triste o con episodios de enojo sin causa aparente, especialmente después de estar en línea.",
      color: "border-brand-teal-500/30 bg-brand-teal-500/10",
      iconBg: "bg-brand-teal-500/20"
    },
    {
      icon: <Eye className="h-8 w-8 text-brand-ink-800" />,
      title: "Se aísla o evita hablar de lo que hace en Internet",
      description: "Oculta su pantalla cuando alguien se acerca, cierra abruptamente aplicaciones o evita responder preguntas sobre su actividad en redes o juegos.",
      color: "border-brand-mint-200/40 bg-brand-mint-200/20",
      iconBg: "bg-brand-mint-200/60"
    },
    {
      icon: <Clock className="h-8 w-8 text-brand-ink-800" />,
      title: "Alteraciones en el sueño o el apetito",
      description: "Tiene problemas para dormir, pesadillas o pérdida del apetito, lo cual puede estar relacionado con ansiedad generada por experiencias negativas en línea.",
      color: "border-brand-olive-500/30 bg-brand-olive-500/10",
      iconBg: "bg-brand-olive-500/20"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-brand-ink-800" />,
      title: "Baja repentina en el rendimiento escolar",
      description: "Muestra desmotivación, se desconecta de sus responsabilidades o deja de disfrutar cosas que antes le gustaban.",
      color: "border-brand-teal-500/30 bg-brand-teal-500/10",
      iconBg: "bg-brand-teal-500/20"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-brand-ink-800" />,
      title: "Recibe o envía mensajes preocupantes",
      description: "Hay evidencia de mensajes agresivos, sexualizados o que sugieren amenazas, secretos o manipulación por parte de otros usuarios.",
      color: "border-brand-mint-200/40 bg-brand-mint-200/20",
      iconBg: "bg-brand-mint-200/60"
    }
  ];

  const frasesConversacion = [
    {
      categoria: "Para iniciar el diálogo",
      frases: [
        "Estoy aquí para ayudarte, no estás solo",
        "¿Te pasa algo? ¿Cómo te has sentido con lo que has vivido en Internet últimamente?",
        "Si necesitas ayuda, juntos podemos buscarla",
        "Gracias por confiar en mí para contarlo",
        "Entiendo por qué te sentiste así"
      ],
      color: "border-brand-teal-500/30 bg-brand-teal-500/10",
      iconColor: "text-brand-teal-500",
      iconBg: "bg-brand-teal-500/20"
    },
    {
      categoria: "Para validar emociones",
      frases: [
        "Lo que te pasó no está bien. No es tu culpa",
        "Prefiero que me cuentes algo difícil a que lo vivas solo o sola",
        "Si ves que están molestando a alguien, no te quedes callado o callada",
        "¿Alguna vez has visto que alguien moleste a otra persona en línea?",
        "¿Qué harías si alguien te insultara por internet?"
      ],
      color: "border-brand-mint-200/40 bg-brand-mint-200/20",
      iconColor: "text-brand-ink-800",
      iconBg: "bg-brand-mint-200/60"
    },
    {
      categoria: "Para establecer confianza",
      frases: [
        "Aunque parezca un niño de tu edad, no sabes quién está detrás de la pantalla",
        "Nunca contestes si estás solo o sola en casa ni compartas datos personales",
        "No puedes evitar que escuche una canción con letra violenta. Pero puedes preguntarle qué piensa de lo que dice",
        "No puedes impedir que le manden una imagen rara. Pero puedes explicarle por qué eso no está bien",
        "No puedes revisar cada conversación, pero sí puedes enseñarle a identificar cuándo algo 'no se siente bien'"
      ],
      color: "border-brand-olive-500/30 bg-brand-olive-500/10",
      iconColor: "text-brand-olive-500",
      iconBg: "bg-brand-olive-500/20"
    }
  ];

  const historiasReales = [
    {
      titulo: "Caso 1: Cuando el control parental salva vidas",
      descripcion: "Una mamá descubrió gracias a su control parental que su hijo de 9 años estaba usando una app de mensajería donde se comunicaba con personas desconocidas.",
      resultado: "Pudo bloquear la app y hablar con él antes de que pasara algo grave. Desde entonces, revisan juntos cada nueva app que quiere instalar.",
      leccion: "No hay herramienta que sustituya al diálogo, pero sin herramientas, el diálogo llega cuando ya es tarde.",
      color: "border-brand-mint-200 bg-brand-mint-200/10"
    },
    {
      titulo: "Caso 2: Cuando soltar demasiado es desconectarse",
      descripcion: "Ana tiene 13 años. Se peleó con su mejor amiga y, en un momento de tristeza, publicó en sus redes un mensaje tipo: 'ojalá desapareciera'.",
      resultado: "Sus papás no supieron nada hasta que una maestra lo reportó. Ana les dijo: 'Ustedes siempre me dicen que resuelva sola mis cosas. Pero esto fue más grande que yo.'",
      leccion: "Tener autonomía no es lo mismo que estar en soledad. El mundo digital es inmenso y cruel cuando nadie nos acompaña.",
      color: "border-brand-olive-500/20 bg-brand-olive-500/5"
    },
    {
      titulo: "Caso 3: El ejemplo negativo por omisión",
      descripcion: "Un padre nunca configuró límites, pensando que su hija solo jugaba. Semanas después notó cambios en su conducta y calificaciones.",
      resultado: "Revisando el celular, descubrió que jugaba hasta las 2 a.m. durante semanas. Family Link podría haberlo prevenido desde el primer día.",
      leccion: "El 'que aprenda por las malas' no aplica cuando lo que está en riesgo es su salud emocional o su vida.",
      color: "border-destructive/20 bg-destructive/5"
    }
  ];

  const pasosComunicacion = [
    {
      numero: 1,
      titulo: "Háblale con confianza y calma",
      descripcion: "Establece un ambiente seguro donde se sienta escuchado sin juicios",
      iconColor: "bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10"
    },
    {
      numero: 2,
      titulo: "Pregúntale con empatía",
      descripcion: "Usa frases que demuestren comprensión y apoyo genuino",
      iconColor: "bg-gradient-to-br from-brand-mint-200/60 to-brand-mint-200/40"
    },
    {
      numero: 3,
      titulo: "Revisa junto con él su entorno digital",
      descripcion: "Explora apps, chats y redes sociales juntos para identificar posibles riesgos",
      iconColor: "bg-gradient-to-br from-brand-olive-500/20 to-brand-olive-500/10"
    },
    {
      numero: 4,
      titulo: "Define herramientas de protección",
      descripcion: "Activa controles parentales y bloquea cuentas o usuarios sospechosos",
      iconColor: "bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10"
    },
    {
      numero: 5,
      titulo: "Contacta a expertos si es necesario",
      descripcion: "No dudes en acudir con un psicólogo o especialista en seguridad digital infantil",
      iconColor: "bg-gradient-to-br from-brand-mint-200/60 to-brand-mint-200/40"
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
            <div className="max-w-4xl mx-auto text-center">
              {/* Logo circular con gradiente */}
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                  <Heart className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
                Comunicación y Apoyo
              </h1>
              <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-brand-olive-500 mb-6 sm:mb-8 px-4">
                La comunicación abierta y el apoyo emocional son las herramientas más poderosas 
                para proteger a tus hijos en el mundo digital
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
            <div className="mb-12 sm:mb-16">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-olive-500 to-brand-teal-500 rounded-full">
                    <MessageCircle className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 mb-2">
                  ¿Por qué es importante la comunicación?
                </h2>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                  Fundamentos para una comunicación efectiva con tus hijos
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                        La comunicación como protección
                      </h3>
                      <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                        Una comunicación abierta y constante es la primera línea de defensa contra los riesgos digitales. 
                        Los niños que se sienten escuchados y apoyados son más propensos a buscar ayuda cuando enfrentan problemas.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                        Construir confianza desde temprano
                      </h3>
                      <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                        Establecer canales de comunicación desde la infancia crea una base sólida para cuando los 
                        desafíos digitales se vuelvan más complejos en la adolescencia.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-teal-500/20 rounded-full flex-shrink-0">
                        <Heart className="h-5 w-5 text-brand-teal-500" />
                      </div>
                      <div>
                        <h4 className="font-heading text-sm sm:text-base font-semibold text-brand-ink-900 mb-2">
                          Dato importante
                        </h4>
                        <p className="font-body text-xs sm:text-sm text-brand-ink-800 leading-relaxed">
                          Los niños que tienen conversaciones regulares con sus padres sobre seguridad digital 
                          tienen 3 veces menos probabilidades de experimentar ciberacoso o grooming.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Señales de Alerta */}
            <section className="mb-12 sm:mb-16">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full">
                    <AlertTriangle className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                  Señales de Alerta a Observar
                </h2>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                  Indicadores que requieren atención inmediata
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {señalesAlerta.map((señal, index) => (
                  <Card key={index} className={`${señal.color} border hover:shadow-soft transition-smooth hover:scale-105 h-full`}>
                    <CardHeader className="text-center p-4 sm:p-6">
                      <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 ${señal.iconBg} rounded-full w-fit shadow-soft`}>
                        {señal.icon}
                      </div>
                      <CardTitle className="font-heading text-sm sm:text-lg md:text-xl text-brand-ink-900">
                        {señal.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <CardDescription className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 text-center leading-relaxed">
                        {señal.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Frases para Conversación */}
            <section className="mb-12 sm:mb-16">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full">
                    <MessageCircle className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                  Frases Sugeridas para Iniciar Conversación
                </h2>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                  Herramientas para abrir el diálogo con tus hijos
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {frasesConversacion.map((categoria, index) => (
                  <Card key={index} className={`${categoria.color} border hover:shadow-soft transition-smooth hover:scale-105 h-full`}>
                    <CardHeader className="text-center p-4 sm:p-6">
                      <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 ${categoria.iconBg} rounded-full w-fit shadow-soft`}>
                        <MessageCircle className={`h-6 w-6 sm:h-8 sm:w-8 ${categoria.iconColor}`} />
                      </div>
                      <CardTitle className="font-heading text-sm sm:text-lg md:text-xl text-brand-ink-900">
                        {categoria.categoria}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <div className="space-y-3">
                        {categoria.frases.map((frase, fraseIndex) => (
                          <div key={fraseIndex} className="p-3 bg-background rounded-lg border border-brand-mint-200/30">
                            <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 italic leading-relaxed">"{frase}"</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Key Points - Pasos para Comunicación Asertiva */}
            <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30 mb-12 sm:mb-16">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-primary to-brand-teal-500 rounded-full">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                  Pasos para Establecer Comunicación Asertiva
                </h3>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                  Guía práctica para mejorar la comunicación familiar
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {pasosComunicacion.map((paso, index) => (
                  <div key={index} className="text-center group">
                    <div className={`rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth ${paso.iconColor}`}>
                      <span className={`font-heading text-xl sm:text-2xl font-bold ${
                        paso.iconColor.includes('brand-mint-200') ? 'text-brand-ink-800' : 
                        paso.iconColor.includes('brand-teal-500') ? 'text-brand-teal-500' : 
                        'text-brand-olive-500'
                      }`}>{paso.numero}</span>
                    </div>
                    <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                      {paso.titulo}
                    </h4>
                    <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                      {paso.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Historias Reales */}
            <section className="mb-12 sm:mb-16">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-olive-500 to-brand-teal-500 rounded-full">
                    <BookOpen className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                  Historias Reales del Manual
                </h2>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                  Casos reales que demuestran la importancia de la comunicación
                </p>
              </div>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {historiasReales.map((historia, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className={`${historia.color} border h-full hover:shadow-soft transition-smooth`}>
                    <CardHeader className="pb-3">
                      <CardTitle className="font-heading text-sm sm:text-lg text-brand-ink-900 mb-2 leading-tight">
                        {historia.titulo}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-0">
                      <div>
                        <h4 className="font-heading font-semibold text-brand-ink-800 mb-2 text-sm sm:text-base">Situación:</h4>
                        <p className="font-body text-brand-olive-500 text-xs sm:text-sm leading-relaxed">{historia.descripcion}</p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-brand-ink-800 mb-2 text-sm sm:text-base">Resultado:</h4>
                        <p className="font-body text-brand-olive-500 text-xs sm:text-sm leading-relaxed">{historia.resultado}</p>
                      </div>
                      <div className="p-3 bg-background rounded-lg border border-brand-mint-200/30">
                        <h4 className="font-heading font-semibold text-brand-ink-800 mb-2 text-sm sm:text-base">Lección:</h4>
                        <p className="font-body text-brand-olive-500 text-xs sm:text-sm italic leading-relaxed">"{historia.leccion}"</p>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                        Cómo actuar en este caso
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

            {/* Tips para Diálogo en Familia */}
            <section className="mb-12 sm:mb-16">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full">
                    <Lightbulb className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                  Tips para Abrir Conversaciones Complicadas
                </h2>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                  Estrategias prácticas para mejorar la comunicación familiar
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-brand-teal-500/30 bg-brand-teal-500/10 hover:shadow-soft transition-smooth hover:scale-105 h-full">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 bg-brand-teal-500/20 rounded-full w-fit shadow-soft">
                      <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-brand-teal-500" />
                    </div>
                    <CardTitle className="font-heading text-sm sm:text-lg md:text-xl text-brand-ink-900">
                      Elige un momento de tranquilidad
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                      Aprovecha tiempos naturales de convivencia (como la hora de la cena, trayectos en coche, 
                      o después de ver juntos un video) para iniciar pláticas sin prisas ni distracciones.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-mint-200/40 bg-brand-mint-200/20 hover:shadow-soft transition-smooth hover:scale-105 h-full">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 bg-brand-mint-200/60 rounded-full w-fit shadow-soft">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-brand-ink-800" />
                    </div>
                    <CardTitle className="font-heading text-sm sm:text-lg md:text-xl text-brand-ink-900">
                      Escucha más de lo que hablas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                      Deja que tu hijo exprese sus opiniones, preocupaciones o dudas, incluso si no estás de acuerdo. 
                      La confianza se construye escuchando sin interrumpir.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-olive-500/30 bg-brand-olive-500/10 hover:shadow-soft transition-smooth hover:scale-105 h-full">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 bg-brand-olive-500/20 rounded-full w-fit shadow-soft">
                      <HandHeart className="h-6 w-6 sm:h-8 sm:w-8 text-brand-olive-500" />
                    </div>
                    <CardTitle className="font-heading text-sm sm:text-lg md:text-xl text-brand-ink-900">
                      Valida sus emociones
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                      Si cuentan algo que les dio miedo, tristeza o enojo, evita minimizarlo. Responde con frases como 
                      "Entiendo por qué te sentiste así" o "Gracias por confiar en mí para contarlo".
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-teal-500/30 bg-brand-teal-500/10 hover:shadow-soft transition-smooth hover:scale-105 h-full">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 bg-brand-teal-500/20 rounded-full w-fit shadow-soft">
                      <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-brand-teal-500" />
                    </div>
                    <CardTitle className="font-heading text-sm sm:text-lg md:text-xl text-brand-ink-900">
                      Comparte tus experiencias
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                      Contarles algo que viste, aprendiste o incluso un error que cometiste en línea, los ayuda a ver 
                      que el mundo digital es complejo también para los adultos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-mint-200/40 bg-brand-mint-200/20 hover:shadow-soft transition-smooth hover:scale-105 h-full">
                  <CardHeader className="text-center p-4 sm:p-6">
                    <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 bg-brand-mint-200/60 rounded-full w-fit shadow-soft">
                      <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-brand-ink-800" />
                    </div>
                    <CardTitle className="font-heading text-sm sm:text-lg md:text-xl text-brand-ink-900">
                      Enfócate en el aprendizaje
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                      Si surge un problema, en lugar de castigar, busca soluciones juntos. El objetivo es aprender 
                      y prevenir, no generar miedo o culpa.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA Final */}
            <section className="text-center bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-8 text-primary-foreground shadow-cta">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                Recuerda: La Comunicación es la Mejor Protección
              </h2>
              <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl mb-6 opacity-90 leading-relaxed">
                Acompañar a nuestros hijos e hijas en su vida digital es un acto de amor y una de las 
                mejores herramientas que podemos otorgarles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
                  Ver Controles Parentales
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Conocer Riesgos Digitales
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComunicacionYApoyo;
