import { Button } from '@/components/ui/button';
import GlobalHeader from '@/components/GlobalHeader';
import EmergencyButton from '@/components/EmergencyButton';

export default function NavigationTest() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* GlobalHeader - debería estar oculto en impresión */}
      <GlobalHeader />
      
      {/* EmergencyButton - debería estar oculto en impresión */}
      <EmergencyButton />

      <div className="min-h-screen bg-white p-8">
        {/* Header oculto en impresión */}
        <div className="no-print mb-8">
          <h1 className="text-2xl font-bold mb-4">Test de Navegación - Web vs Impresión</h1>
          <Button onClick={handlePrint} className="mb-4">
            Imprimir Test
          </Button>
          <p className="text-gray-600">
            Verifica que la navegación y botón de emergencia estén ocultos en impresión
          </p>
        </div>

        {/* Contenido que se imprimirá */}
        <div className="print-container">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Plan de Seguridad Digital</h1>
            <h2 className="text-xl text-blue-600 mb-6">Para tu Familia</h2>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4">Información del Plan</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Edad del menor:</p>
                <p>9 a 12 años</p>
              </div>
              <div>
                <p className="font-semibold">Plataformas:</p>
                <p>YouTube, Instagram</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Acciones Prioritarias</h3>
            <ul className="space-y-2">
              <li>• Límites de tiempo</li>
              <li>• Educación sobre riesgos</li>
              <li>• Comunicación abierta</li>
              <li>• Filtrado de contenido</li>
            </ul>
          </div>

          {/* Instrucciones */}
          <div className="mt-8 p-4 bg-yellow-100 border border-yellow-300 rounded">
            <h3 className="font-bold mb-2">Instrucciones de Verificación:</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Observa que en la pantalla SÍ ves la barra de navegación superior</li>
              <li>Observa que en la pantalla SÍ ves el botón de emergencia (esquina)</li>
              <li>Presiona Ctrl+P para ver la vista previa de impresión</li>
              <li>Verifica que en la impresión NO aparezcan:</li>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>❌ Barra de navegación superior</li>
                <li>❌ Botón de emergencia</li>
                <li>❌ Menús desplegables</li>
                <li>❌ Elementos flotantes</li>
              </ul>
              <li>Si aparecen elementos de navegación, necesitamos ajustar más el CSS</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
