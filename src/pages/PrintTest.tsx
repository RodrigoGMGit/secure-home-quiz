import { Button } from '@/components/ui/button';

export default function PrintTest() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header oculto en impresión */}
      <div className="no-print mb-8">
        <h1 className="text-2xl font-bold mb-4">Test de Impresión</h1>
        <Button onClick={handlePrint} className="mb-4">
          Imprimir Test
        </Button>
        <p className="text-gray-600">
          Presiona Ctrl+P para probar los estilos de impresión
        </p>
      </div>

      {/* Contenido que se imprimirá */}
      <div className="print-container">
        {/* Test 1: Gradientes */}
        <div className="bg-gradient-to-br from-white via-brand-mint-200/20 to-white rounded-xl p-6 mb-6 border border-brand-mint-200/30">
          <h2 className="text-xl font-bold mb-4">Test 1: Gradiente bg-gradient-to-br</h2>
          <p>Este elemento debería tener fondo verde en impresión (debug)</p>
        </div>

        <div className="bg-gradient-to-r from-brand-teal-500 to-primary rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-white">Test 2: Gradiente bg-gradient-to-r</h2>
          <p className="text-white">Este elemento debería tener fondo azul en impresión (debug)</p>
        </div>

        {/* Test 2: Iconos circulares */}
        <div className="flex gap-4 mb-6">
          <div className="p-3 bg-brand-teal-500/20 rounded-full">
            <div className="w-8 h-8 bg-brand-teal-500 rounded-full"></div>
          </div>
          <div className="p-3 bg-brand-mint-200/60 rounded-full">
            <div className="w-8 h-8 bg-brand-ink-800 rounded-full"></div>
          </div>
          <div className="p-3 bg-brand-olive-500/20 rounded-full">
            <div className="w-8 h-8 bg-brand-olive-500 rounded-full"></div>
          </div>
        </div>

        {/* Test 3: Cards */}
        <div className="card p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Test 3: Card</h2>
          <p>Este elemento debería tener fondo magenta en impresión (debug)</p>
        </div>

        {/* Test 4: Background del body */}
        <div className="p-6 border-2 border-dashed border-gray-400">
          <h2 className="text-xl font-bold mb-4">Test 4: Background del body</h2>
          <p>El fondo de la página debería ser rojo en impresión (debug)</p>
        </div>

        {/* Instrucciones */}
        <div className="mt-8 p-4 bg-yellow-100 border border-yellow-300 rounded">
          <h3 className="font-bold mb-2">Instrucciones de Debug:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Presiona Ctrl+P para abrir vista previa de impresión</li>
            <li>Habilita "Background graphics" en configuración de impresión</li>
            <li>Verifica que veas:</li>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Fondo rojo en toda la página</li>
              <li>Primer card con fondo verde y borde negro</li>
              <li>Segundo card con fondo azul y borde negro</li>
              <li>Iconos circulares con fondo amarillo y borde rojo</li>
              <li>Tercer card con fondo magenta y borde negro</li>
            </ul>
            <li>Si NO ves estos colores, el problema es la configuración del navegador</li>
            <li>Si SÍ ves estos colores, el problema es la especificidad CSS</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
