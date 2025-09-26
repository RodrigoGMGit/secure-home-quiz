import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";
import TuFamilia from "./pages/TuFamilia";
import TuFamiliaConectada from "./pages/TuFamiliaConectada";
import TuFamiliaRedesSociales from "./pages/TuFamiliaRedesSociales";
import TuFamiliaVideojuegos from "./pages/TuFamiliaVideojuegos";
import RiesgosDigitales from "./pages/RiesgosDigitales";
import ControlesParentales from "./pages/ControlesParentales";

const queryClient = new QueryClient();
const routerBase =
  import.meta.env.BASE_URL === "/"
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, "");

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
        <BrowserRouter basename={routerBase}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/aprende/tu-familia" element={<TuFamilia />} />
            <Route path="/aprende/tu-familia/conectada" element={<TuFamiliaConectada />} />
            <Route path="/aprende/tu-familia/redes-sociales" element={<TuFamiliaRedesSociales />} />
            <Route path="/aprende/tu-familia/videojuegos" element={<TuFamiliaVideojuegos />} />
            <Route path="/aprende/riesgos" element={<RiesgosDigitales />} />
            <Route path="/aprende/controles" element={<ControlesParentales />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

