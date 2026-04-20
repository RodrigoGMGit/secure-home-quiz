/**
 * Página “Acerca de” con narrativa scrollytelling (6 escenas).
 *
 * - **Ruta:** `/about`
 * - **Datos / hooks:** sin `GlobalHeader`; experiencia en `ScrollyExperience`.
 * - **Nota:** en `App.tsx` se ocultan los botones flotantes de emergencia en esta ruta.
 *
 * Mapa del repo: `docs/NAVEGACION-CODIGO.md`
 */
import { ScrollyExperience } from "@/components/scrolly/ScrollyExperience";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const About = () => {
  useScrollToTop();

  return (
    <main id="main-content" className="min-h-screen">
      <ScrollyExperience />
    </main>
  );
};

export default About;
