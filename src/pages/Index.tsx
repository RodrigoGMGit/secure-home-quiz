/**
 * Página de inicio.
 *
 * - **Ruta:** `/`
 * - **Datos / hooks:** el contenido vive sobre todo en `HeroSection` y cabecera.
 * - **Componentes clave:** `GlobalHeader`, `HeroSection`.
 *
 * Mapa del repo: `docs/NAVEGACION-CODIGO.md`
 */
import HeroSection from "@/components/HeroSection";
import GlobalHeader from "@/components/GlobalHeader";

const Index = () => {
  return (
    <>
      <GlobalHeader />
      <main id="main-content">
        <HeroSection />
      </main>
    </>
  );
};

export default Index;
