import { Button } from '@/components/ui/button';
import { Shield, Users, Target, Calendar } from 'lucide-react';

export default function LayoutTest() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header oculto en impresión */}
      <div className="no-print mb-8">
        <h1 className="text-2xl font-bold mb-4">Test de Layout - Web vs Impresión</h1>
        <Button onClick={handlePrint} className="mb-4">
          Imprimir Test
        </Button>
        <p className="text-gray-600">
          Compara cómo se ve este layout en web vs impresión
        </p>
      </div>

      {/* Contenido que se imprimirá */}
      <div className="print-container">
        {/* Test 1: Header con icono */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
              <Shield className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
            Plan de Seguridad Digital
          </h1>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-brand-teal-500 mb-6 sm:mb-8">
            Para tu Familia
          </h2>
        </div>

        {/* Test 2: Card con grid */}
        <div className="bg-gradient-to-br from-white via-brand-mint-200/20 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30 max-w-2xl mx-auto mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
            {/* Edad */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-teal-500/20 rounded-full">
                <Users className="h-5 w-5 text-brand-teal-500" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-brand-ink-900">Edad del menor</p>
                <p className="font-body text-sm text-brand-olive-500">9 a 12 años</p>
              </div>
            </div>

            {/* Plataformas */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-mint-200/60 rounded-full">
                <Target className="h-5 w-5 text-brand-ink-800" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-brand-ink-900">Plataformas principales</p>
                <p className="font-body text-sm text-brand-olive-500">YouTube, Instagram</p>
              </div>
            </div>

            {/* Fecha */}
            <div className="flex items-center gap-3 sm:col-span-2">
              <div className="p-2 bg-brand-olive-500/20 rounded-full">
                <Calendar className="h-5 w-5 text-brand-olive-500" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-brand-ink-900">Plan generado el</p>
                <p className="font-body text-sm text-brand-olive-500">22 de octubre de 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Test 3: Card de resumen */}
        <div className="bg-gradient-to-br from-white via-brand-mint-200/10 to-white rounded-xl shadow-soft p-6 sm:p-8 border border-brand-mint-200/30">
          <div className="text-center mb-6">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-ink-900 mb-3">
              Resumen de tu Plan
            </h3>
            <p className="font-body text-sm sm:text-base text-brand-olive-500">
              13 acciones personalizadas para proteger a tu familia
            </p>
          </div>

          {/* Prioridades */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-semibold text-brand-ink-900">
              Prioridades principales:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="font-body text-sm sm:text-base text-brand-ink-800">
                  Límites de tiempo
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="font-body text-sm sm:text-base text-brand-ink-800">
                  Educación sobre riesgos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="font-body text-sm sm:text-base text-brand-ink-800">
                  Comunicación abierta
                </span>
              </li>
            </ul>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-brand-mint-200/30">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-brand-teal-500">
                13
              </div>
              <div className="text-xs sm:text-sm text-brand-olive-500">Acciones totales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-brand-ink-800">
                0
              </div>
              <div className="text-xs sm:text-sm text-brand-olive-500">Acciones urgentes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-brand-olive-500">
                2
              </div>
              <div className="text-xs sm:text-sm text-brand-olive-500">Plataformas</div>
            </div>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="mt-8 p-4 bg-yellow-100 border border-yellow-300 rounded">
          <h3 className="font-bold mb-2">Instrucciones de Comparación:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Observa cómo se ve este layout en la pantalla</li>
            <li>Presiona Ctrl+P para ver la vista previa de impresión</li>
            <li>Compara:</li>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>¿Los iconos mantienen su tamaño y color?</li>
              <li>¿Las cards mantienen su padding y espaciado?</li>
              <li>¿Los títulos mantienen su jerarquía visual?</li>
              <li>¿El grid se mantiene en 2 columnas?</li>
              <li>¿Los colores de fondo son visibles?</li>
            </ul>
            <li>Si hay diferencias significativas, necesitamos ajustar más el CSS</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
