import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, Shield, Eye, CheckCircle, XCircle } from 'lucide-react';

interface ManualSectionProps {
  activeSection: string;
  searchTerm: string;
}

export function ManualSection({ activeSection, searchTerm }: ManualSectionProps) {
  const getIntroductionContent = () => (
    <div className="space-y-8">
      <Card className="shadow-card bg-gradient-warm border-brand-mint-200">
        <CardHeader>
          <CardTitle className="font-heading font-bold text-3xl text-brand-ink-900 uppercase tracking-wide">
            Manual Hogares Digitales Seguros y Responsables
          </CardTitle>
          <p className="text-xl text-brand-ink-800 font-medium">
            Una guía para padres, madres o personas tutoras que quieren acompañar, proteger y guiar en el mundo digital a sus hijas e hijos.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-brand-teal-500 bg-brand-mint-200/30">
            <AlertTriangle className="h-5 w-5 text-brand-teal-500" />
            <AlertDescription className="text-brand-ink-800 font-medium">
              <strong>¿Sabías que hoy en día muchos riesgos vinculados a la trata de personas ya no empiezan en la calle… sino en la pantalla?</strong>
            </AlertDescription>
          </Alert>
          
          <div className="prose prose-lg max-w-none text-brand-ink-800">
            <p>
              Hoy, quienes quieren aprovecharse de niñas, niños y adolescentes ya no necesitan forzar una puerta: buscan entrar por el Wi-Fi de casa. Lo hacen a través de redes sociales, chats de videojuegos, plataformas de citas y aplicaciones muy populares.
            </p>
            <p>
              Con manipulación emocional, engaños o haciéndose pasar por alguien más, logran establecer contacto y ganar confianza hasta convencer y controlar, sin necesidad de salir de casa o invitándoles a hacerlo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-brand-mint-200 bg-white/50">
              <CardContent className="p-4 text-center">
                <Eye className="h-8 w-8 text-brand-teal-500 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-brand-ink-900 mb-2">Prevenir empieza por conocer</h3>
                <p className="text-sm text-brand-olive-500">La información es nuestra primera línea de defensa</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-mint-200 bg-white/50">
              <CardContent className="p-4 text-center">
                <Shield className="h-8 w-8 text-brand-teal-500 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-brand-ink-900 mb-2">No podemos proteger lo que no entendemos</h3>
                <p className="text-sm text-brand-olive-500">Construir un hogar digital seguro requiere conocimiento</p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-mint-200 bg-white/50">
              <CardContent className="p-4 text-center">
                <CheckCircle className="h-8 w-8 text-brand-teal-500 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-brand-ink-900 mb-2">La trata digital es real, pero puede evitarse</h3>
                <p className="text-sm text-brand-olive-500">Si actuamos a tiempo con las herramientas correctas</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const getGroomingContent = () => (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-brand-teal-500" />
            <div>
              <CardTitle className="font-heading font-bold text-2xl text-brand-ink-900 uppercase tracking-wide">
                Grooming Digital
              </CardTitle>
              <p className="text-brand-olive-500">Cómo identificar y prevenir el acoso sexual infantil online</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-red-500 bg-red-50">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertDescription className="text-red-800 font-medium">
              El grooming es un proceso gradual de manipulación psicológica que realizan adultos para ganar la confianza de menores de edad con fines de abuso sexual.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <XCircle className="h-5 w-5" />
                  Señales de Alerta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Badge variant="destructive" className="w-full justify-start">Contacto inicial</Badge>
                  <p className="text-sm text-gray-700">Adultos que buscan contacto con menores en redes sociales o juegos online</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="destructive" className="w-full justify-start">Secretos</Badge>
                  <p className="text-sm text-gray-700">Pedir mantener la conversación en secreto de padres/tutores</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="destructive" className="w-full justify-start">Regalos virtuales</Badge>
                  <p className="text-sm text-gray-700">Ofrecer dinero, regalos o privilegios especiales</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  Medidas de Prevención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Badge variant="default" className="w-full justify-start bg-green-100 text-green-800">Comunicación abierta</Badge>
                  <p className="text-sm text-gray-700">Mantener diálogo constante sobre las actividades online</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="default" className="w-full justify-start bg-green-100 text-green-800">Configuración de privacidad</Badge>
                  <p className="text-sm text-gray-700">Revisar y configurar la privacidad en todas las plataformas</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="default" className="w-full justify-start bg-green-100 text-green-800">Supervisión activa</Badge>
                  <p className="text-sm text-gray-700">Monitorear contactos y conversaciones de manera respetuosa</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const getTikTokContent = () => (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="text-3xl">📱</div>
            <div>
              <CardTitle className="font-heading font-bold text-2xl text-brand-ink-900 uppercase tracking-wide">
                TikTok - Guía de Seguridad
              </CardTitle>
              <p className="text-brand-olive-500">Configuración segura y uso responsable</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-brand-teal-500 bg-brand-mint-200/30">
            <AlertTriangle className="h-5 w-5 text-brand-teal-500" />
            <AlertDescription className="text-brand-ink-800">
              TikTok es especialmente popular entre adolescentes. Es importante configurar correctamente la privacidad y supervisar el contenido.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-brand-ink-900">Configuraciones Recomendadas</h3>
            
            <div className="grid gap-4">
              <Card className="border-brand-mint-200">
                <CardContent className="p-4">
                  <h4 className="font-bold text-brand-ink-900 mb-2">1. Cuenta Privada</h4>
                  <p className="text-sm text-brand-olive-500 mb-3">
                    Ve a Configuración → Privacidad → Cuenta privada
                  </p>
                  <Badge className="bg-brand-mint-200 text-brand-ink-800">Recomendado para menores de 16 años</Badge>
                </CardContent>
              </Card>

              <Card className="border-brand-mint-200">
                <CardContent className="p-4">
                  <h4 className="font-bold text-brand-ink-900 mb-2">2. Restricción de Comentarios</h4>
                  <p className="text-sm text-brand-olive-500 mb-3">
                    Configuración → Privacidad → Comentarios → Solo amigos
                  </p>
                  <Badge className="bg-brand-mint-200 text-brand-ink-800">Previene acoso</Badge>
                </CardContent>
              </Card>

              <Card className="border-brand-mint-200">
                <CardContent className="p-4">
                  <h4 className="font-bold text-brand-ink-900 mb-2">3. Mensajes Directos</h4>
                  <p className="text-sm text-brand-olive-500 mb-3">
                    Configuración → Privacidad → Mensajes directos → Nadie
                  </p>
                  <Badge className="bg-brand-mint-200 text-brand-ink-800">Previene contacto no deseado</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return getIntroductionContent();
      case 'grooming':
        return getGroomingContent();
      case 'tiktok':
        return getTikTokContent();
      default:
        return (
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-heading font-bold text-2xl text-brand-ink-900 uppercase tracking-wide">
                {activeSection.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-olive-500">
                Contenido específico para esta sección estará disponible próximamente.
              </p>
            </CardContent>
          </Card>
        );
    }
  };

  return <div className="space-y-6">{renderContent()}</div>;
}