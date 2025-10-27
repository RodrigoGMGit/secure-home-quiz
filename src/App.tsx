import { useEffect, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingComponent from "@/components/ui/loading-component";
import EmergencyButton from "@/components/EmergencyButton";
import FEInfoButton from "@/components/FEInfoButton";

// Route-level code splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const QuizExpress = lazy(() => import("./pages/QuizExpress"));
const QuizPersonalizado = lazy(() => import("./pages/QuizPersonalizado"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TuFamilia = lazy(() => import("./pages/TuFamilia"));
const TuFamiliaRedesSociales = lazy(() => import("./pages/TuFamiliaRedesSociales"));
const TuFamiliaVideojuegos = lazy(() => import("./pages/TuFamiliaVideojuegos"));
const RiesgosDigitales = lazy(() => import("./pages/RiesgosDigitales"));
const ControlesParentales = lazy(() => import("./pages/ControlesParentales"));
const ComunicacionYApoyo = lazy(() => import("./pages/ComunicacionYApoyo"));
const Recursos = lazy(() => import("./pages/Recursos"));
const Ayuda = lazy(() => import("./pages/Ayuda"));
const AccionesLegales = lazy(() => import("./pages/AccionesLegales"));
const EnConstruccion = lazy(() => import("./pages/EnConstruccion"));
const PlanPage = lazy(() => import("./pages/print/Plan"));

const queryClient = new QueryClient();
const routerBase =
  import.meta.env.BASE_URL === "/"
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, "");

const AppContent = () => {
  const location = useLocation();
  
  // No mostrar EmergencyButton en la página /about
  const shouldShowEmergencyButton = location.pathname !== "/about";

  return (
    <>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<QuizExpress />} />
          <Route path="/quiz/personalizado" element={<QuizPersonalizado />} />
          <Route path="/aprende/tu-familia" element={<TuFamilia />} />
          <Route path="/aprende/tu-familia/redes-sociales" element={<TuFamiliaRedesSociales />} />
          <Route path="/aprende/tu-familia/videojuegos" element={<TuFamiliaVideojuegos />} />
          <Route path="/aprende/riesgos" element={<RiesgosDigitales />} />
          <Route path="/aprende/controles" element={<ControlesParentales />} />
          <Route path="/aprende/comunicacion" element={<ComunicacionYApoyo />} />
          <Route path="/aprende/acciones-legales" element={<AccionesLegales />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/en-construccion" element={<EnConstruccion />} />
          <Route path="/print/plan" element={<PlanPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      
      {/* Botones flotantes - no se muestran en /about */}
      {shouldShowEmergencyButton && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
          <div className="pointer-events-auto">
            <FEInfoButton />
          </div>
          <div className="pointer-events-auto">
            <EmergencyButton />
          </div>
        </div>
      )}
    </>
  );
};

const App = () => {
  // Global scroll reset on page load/refresh
  useEffect(() => {
    // Reset scroll position on app initialization
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also handle page load event
    const handlePageLoad = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    window.addEventListener('load', handlePageLoad);
    
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Skip link para navegación por teclado */}
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>
        <BrowserRouter basename={routerBase}>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

