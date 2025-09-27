import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle, BarChart3 } from "lucide-react";
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
              Tu Familia Conectada
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-brand-olive-500 px-4">
              Evalúa qué tan seguro es tu hogar para que todas las personas que lo habitan disfruten de un entorno digital saludable
            </p>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div 
            className="bg-white rounded-lg shadow-soft p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-ink-900 mb-3 sm:mb-4">
              ¿Qué tan seguro es tu hogar digital?
            </h2>
            <p className="font-body text-base sm:text-lg text-brand-ink-800 mb-4 sm:mb-6">
              Desafortunadamente, hay riesgos en línea que pueden afectar la integridad e incluso la vida de 
              niñas, niños y adolescentes. Si respondes NO a alguna de estas preguntas, esta guía es para ti y tu familia.
            </p>
            <div className="bg-brand-mint-200/50 border border-brand-mint-200 rounded-lg p-3 sm:p-4">
              <p className="font-body text-sm sm:text-base text-brand-ink-800 font-medium">
                <strong>Bienvenidos a un hogar digital más seguro y responsable</strong>
              </p>
            </div>
          </motion.div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="mb-6 sm:mb-8">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-heading text-xl sm:text-2xl text-brand-ink-900">Checklist de Seguridad Digital</CardTitle>
                <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500">
                  Responde honestamente cada pregunta para evaluar el nivel de protección de tu hogar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                {questions.map((question, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 border rounded-lg hover:bg-brand-mint-200/30 transition-colors"
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
                    <label htmlFor={`question-${index}`} className="flex-1 font-body text-sm sm:text-base lg:text-lg cursor-pointer text-brand-ink-800 leading-relaxed">
                      {question}
                    </label>
                  </motion.div>
                ))}
                
                <div className="pt-4 sm:pt-6 border-t">
                  <Button 
                    onClick={() => setShowResults(true)}
                    variant="primary-brand"
                    className="w-full text-sm sm:text-base"
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
            >
              <Card className="mb-6 sm:mb-8">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-heading text-xl sm:text-2xl flex items-center text-brand-ink-900">
                    {getScoreIcon(score.color)} Resultados de tu Evaluación
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className={`p-4 sm:p-6 rounded-lg border-2 ${getScoreColor(score.color)} mb-4 sm:mb-6`}>
                    <div className="flex items-start sm:items-center mb-3 sm:mb-4">
                      <score.icon className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3 flex-shrink-0 mt-1 sm:mt-0" />
                      <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold">{score.message}</h3>
                    </div>
                    <p className="font-body text-base sm:text-lg text-brand-ink-800">
                      Respondiste <strong>{yesCount} de {questions.length}</strong> preguntas afirmativamente.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-heading text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-brand-ink-900">Estadísticas de México</h4>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex justify-between items-center p-2 sm:p-3 bg-brand-mint-200/30 rounded-lg">
                          <span className="font-body text-xs sm:text-sm text-brand-ink-800">Hogares con protección digital</span>
                          <Badge variant="destructive" className="text-xs">1 de cada 3</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 sm:p-3 bg-brand-mint-200/30 rounded-lg">
                          <span className="font-body text-xs sm:text-sm text-brand-ink-800">Tiempo diario en pantallas (niños 7-11 años)</span>
                          <Badge variant="secondary" className="text-xs">3 horas</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 sm:p-3 bg-brand-mint-200/30 rounded-lg">
                          <span className="font-body text-xs sm:text-sm text-brand-ink-800">Plataformas sin filtros</span>
                          <Badge variant="outline" className="text-xs">Mayoría</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-heading text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-brand-ink-900">Riesgos más comunes</h4>
                      <div className="space-y-1 sm:space-y-2 max-h-48 overflow-y-auto">
                        {risks.map((risk, index) => (
                          <div key={index} className="flex items-start space-x-2 text-xs sm:text-sm">
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

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-heading text-xl sm:text-2xl text-brand-ink-900">Próximos Pasos</CardTitle>
                <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500">
                  Basándote en tu evaluación, te recomendamos explorar estas secciones
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Button asChild variant="secondary-brand" className="h-auto p-3 sm:p-4">
                    <Link to="/aprende/tu-familia/redes-sociales">
                      <div className="text-left">
                        <div className="font-heading font-semibold text-sm sm:text-base text-brand-ink-900">Redes Sociales</div>
                        <div className="font-body text-xs sm:text-sm text-brand-olive-500">Aprende sobre las plataformas más populares</div>
                      </div>
                    </Link>
                  </Button>
                  <Button asChild variant="secondary-brand" className="h-auto p-3 sm:p-4">
                    <Link to="/aprende/tu-familia/videojuegos">
                      <div className="text-left">
                        <div className="font-heading font-semibold text-sm sm:text-base text-brand-ink-900">Videojuegos</div>
                        <div className="font-body text-xs sm:text-sm text-brand-olive-500">Configura controles en los juegos</div>
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
    </>
  );
};

export default TuFamiliaConectada;
