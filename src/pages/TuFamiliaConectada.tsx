import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle, BarChart3, Shield, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import GlobalHeader from "@/components/GlobalHeader";

const TuFamiliaConectada = () => {
  // Scroll automático al inicio de la página al cambiar de ruta
  useScrollToTop();

  const [answers, setAnswers] = useState<boolean[]>(new Array(7).fill(false));
  const [showResults, setShowResults] = useState(false);

  const questions = [
    "¿Tienes establecido un límite diario de tiempo frente a pantallas para tus hijos e hijas?",
    "¿Supervisas regularmente el tipo de contenido que consumen en plataformas como YouTube, TikTok o videojuegos?",
    "¿Has activado controles parentales en dispositivos como celulares, tablets, consolas o televisores inteligentes?",
    "¿Conoces los riesgos de las aplicaciones y redes sociales que las niñas, niños y adolescentes utilizan y cómo funcionan?",
    "¿Tienen reglas claras sobre el uso de dispositivos durante la noche o en momentos familiares (como comidas)?",
    "¿Has enseñado a tus hijos o hijas a identificar y reportar contenido inapropiado o conductas sospechosas en línea?",
    "¿Utilizas herramientas de monitoreo o informes de actividad digital para revisar su comportamiento en línea?"
  ];

  const handleAnswerChange = (index: number, checked: boolean) => {
    const newAnswers = [...answers];
    newAnswers[index] = checked;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    const yesCount = answers.filter(answer => answer).length;
    const totalQuestions = questions.length;
    const percentage = (yesCount / totalQuestions) * 100;
    
    if (percentage >= 85) {
      return { level: "excelente", color: "green", icon: CheckCircle, message: "¡Excelente! Tu hogar digital está muy bien protegido." };
    } else if (percentage >= 60) {
      return { level: "bueno", color: "yellow", icon: AlertTriangle, message: "Buen trabajo, pero hay áreas de mejora importantes." };
    } else {
      return { level: "riesgo", color: "red", icon: XCircle, message: "Tu hogar necesita más protección digital. Esta guía es para ti." };
    }
  };

  const getScoreColor = (color: string) => {
    switch (color) {
      case "green": return "bg-green-100 text-green-800 border-green-200";
      case "yellow": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "red": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getScoreIcon = (color: string) => {
    switch (color) {
      case "green": return "🟢";
      case "yellow": return "🟡";
      case "red": return "🔴";
      default: return "⚪";
    }
  };

  const score = calculateScore();
  const yesCount = answers.filter(answer => answer).length;

  const risks = [
    "Acceso a desinformación o noticias falsas",
    "Sobreuso o adicción a pantallas y redes sociales",
    "Uso de íconos o emojis con doble significado en chats grupales",
    "Ciberacoso",
    "Contacto con personas desconocidas en juegos en línea o en redes sociales",
    "Deep Fakes o Ultra Falsos",
    "Discurso de odio",
    "Exposición a contenido violento o sexual",
    "Grooming en línea o acoso",
    "Retos virales peligrosos",
    "Robo o manipulación de imágenes personales",
    "Sexting, sexteo o sextear",
    "Suplantación de identidad",
    "Uso de redes sociales anónimas",
    "Vulnerabilidad frente a desapariciones y/o trata de personas"
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
                <BarChart3 className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
              Tu Familia Conectada
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-brand-olive-500 mb-6 sm:mb-8 px-4">
              Evalúa qué tan seguro es tu hogar para que todas las personas que lo habitan disfruten de un entorno digital saludable
            </p>
            
            {/* Frase destacada mejorada */}
            <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-6 sm:p-8 mx-4 sm:mx-0 shadow-soft">
              <div className="flex items-center justify-center mb-3">
                <Shield className="h-6 w-6 text-brand-teal-500 mr-2" />
                <span className="font-heading text-sm font-semibold text-brand-ink-900 uppercase tracking-wide">Frase clave</span>
              </div>
              <p className="font-body text-base sm:text-lg text-brand-ink-800 font-medium italic">
                "Un hogar digital seguro es aquel donde la tecnología conecta, no desconecta a la familia"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
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
                ¿Qué tan seguro es tu hogar digital?
              </h2>
              <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                Evaluación integral de seguridad digital familiar
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                      Evaluación preventiva
                    </h3>
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                      Desafortunadamente, hay riesgos en línea que pueden afectar la integridad e incluso la vida de 
                      niñas, niños y adolescentes. Si respondes NO a alguna de estas preguntas, esta guía es para ti y tu familia.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                      Hogar digital responsable
                    </h3>
                    <p className="font-body text-sm sm:text-base text-brand-ink-800 leading-relaxed">
                      Un hogar digital seguro es aquel donde la tecnología conecta, no desconecta a la familia. 
                      La evaluación te ayudará a identificar áreas de mejora.
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
                        El 65% de los niños ve videos en línea por casi 3 horas al día, 
                        la mayoría en plataformas gratuitas, con publicidad y sin filtros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full">
                  <CheckCircle className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                Checklist de Seguridad Digital
              </h2>
              <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                Responde honestamente cada pregunta para evaluar el nivel de protección de tu hogar
              </p>
            </div>
            
            <Card className="border-brand-teal-500/30 bg-brand-teal-500/10 hover:shadow-soft transition-smooth">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-heading text-lg sm:text-xl md:text-2xl text-brand-ink-900 text-center">Evaluación de Seguridad Digital</CardTitle>
                <CardDescription className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 text-center">
                  Marca las casillas que aplican a tu hogar para obtener una evaluación personalizada
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                {questions.map((question, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white rounded-lg border border-brand-mint-200/30 hover:shadow-soft transition-smooth hover:scale-105"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Checkbox
                      id={`question-${index}`}
                      checked={answers[index]}
                      onCheckedChange={(checked) => handleAnswerChange(index, checked as boolean)}
                      className="mt-1 flex-shrink-0"
                    />
                    <label htmlFor={`question-${index}`} className="flex-1 font-body text-xs sm:text-sm md:text-base lg:text-lg cursor-pointer text-brand-ink-800 leading-relaxed">
                      {question}
                    </label>
                  </motion.div>
                ))}
                
                <div className="pt-4 sm:pt-6 border-t">
                  <Button 
                    onClick={() => setShowResults(true)}
                    variant="primary-brand"
                    className="w-full text-xs sm:text-sm md:text-base"
                    size="lg"
                  >
                    <BarChart3 className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Ver Resultados
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-12"
            >
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-olive-500 to-brand-teal-500 rounded-full">
                    <BarChart3 className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-ink-900 mb-2">
                  Resultados de tu Evaluación
                </h2>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500">
                  Análisis personalizado de la seguridad digital de tu hogar
                </p>
              </div>
              
              <Card className="border-brand-mint-200/40 bg-brand-mint-200/20 hover:shadow-soft transition-smooth">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-heading text-lg sm:text-xl md:text-2xl flex items-center justify-center text-brand-ink-900">
                    {getScoreIcon(score.color)} Evaluación Completada
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className={`p-4 sm:p-6 rounded-lg border-2 ${getScoreColor(score.color)} mb-4 sm:mb-6`}>
                    <div className="flex items-start sm:items-center mb-3 sm:mb-4">
                      <score.icon className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3 flex-shrink-0 mt-1 sm:mt-0" />
                      <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold">{score.message}</h3>
                    </div>
                    <p className="font-body text-sm sm:text-base md:text-lg text-brand-ink-800">
                      Respondiste <strong>{yesCount} de {questions.length}</strong> preguntas afirmativamente.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-4 sm:p-6 border border-brand-mint-200/30">
                      <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold mb-4 sm:mb-6 text-brand-ink-900 flex items-center">
                        <div className="p-1 bg-brand-teal-500/20 rounded-full mr-3">
                          <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500" />
                        </div>
                        Estadísticas de México
                      </h4>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex justify-between items-center p-3 sm:p-4 bg-brand-teal-500/10 rounded-lg border border-brand-teal-500/20">
                          <span className="font-body text-xs sm:text-sm text-brand-ink-800">Hogares con protección digital</span>
                          <Badge variant="destructive" className="text-xs">1 de cada 3</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 sm:p-4 bg-brand-mint-200/20 rounded-lg border border-brand-mint-200/30">
                          <span className="font-body text-xs sm:text-sm text-brand-ink-800">Tiempo diario en pantallas (niños 7-11 años)</span>
                          <Badge variant="secondary" className="text-xs">3 horas</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 sm:p-4 bg-brand-olive-500/10 rounded-lg border border-brand-olive-500/20">
                          <span className="font-body text-xs sm:text-sm text-brand-ink-800">Plataformas sin filtros</span>
                          <Badge variant="outline" className="text-xs">Mayoría</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-4 sm:p-6 border border-brand-mint-200/30">
                      <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold mb-4 sm:mb-6 text-brand-ink-900 flex items-center">
                        <div className="p-1 bg-brand-teal-500/20 rounded-full mr-3">
                          <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-teal-500" />
                        </div>
                        Riesgos más comunes
                      </h4>
                      <div className="space-y-2 sm:space-y-3 max-h-48 overflow-y-auto">
                        {risks.map((risk, index) => (
                          <div key={index} className="flex items-start space-x-2 text-xs sm:text-sm p-2 bg-white rounded-lg border border-brand-mint-200/20">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-teal-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                            <span className="font-body text-brand-ink-800">{risk}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

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
                Fundamentos para un hogar digital seguro
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-teal-500">1</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Evaluación Continua
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                  La seguridad digital requiere evaluación constante. 
                  Revisa regularmente las configuraciones y hábitos de tu familia.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-mint-200/60 to-brand-mint-200/40 rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-800">2</span>
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-brand-ink-900 mb-3">
                  Comunicación Abierta
                </h4>
                <p className="font-body text-xs sm:text-sm md:text-base text-brand-olive-500 leading-relaxed">
                  Mantén un diálogo constante con tus hijos sobre sus actividades digitales. 
                  La confianza es la base de la seguridad.
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
                  Si detectas áreas de mejora, actúa de inmediato. 
                  Implementa controles parentales y establece reglas claras.
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
                    <Link to="/aprende/tu-familia/redes-sociales" className="w-full h-full flex flex-col justify-center">
                      <div className="font-heading font-semibold text-sm sm:text-base text-brand-ink-900 mb-2">Redes Sociales</div>
                      <div className="font-body text-xs sm:text-sm text-brand-olive-500 leading-relaxed">Aprende sobre las plataformas más populares y sus configuraciones de seguridad</div>
                    </Link>
                  </Button>
                  <Button asChild variant="secondary-brand" className="h-auto p-3 sm:p-4 hover:scale-105 transition-smooth w-full min-h-[120px] text-left whitespace-normal break-words">
                    <Link to="/aprende/tu-familia/videojuegos" className="w-full h-full flex flex-col justify-center">
                      <div className="font-heading font-semibold text-sm sm:text-base text-brand-ink-900 mb-2">Videojuegos</div>
                      <div className="font-body text-xs sm:text-sm text-brand-olive-500 leading-relaxed">Configura controles parentales en los juegos más populares</div>
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

export default TuFamiliaConectada;
