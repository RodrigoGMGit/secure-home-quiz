import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import IntroSection from "@/components/IntroSection";
import ScrollamaSection from "@/components/ScrollamaSection";

const About = () => {
  const location = useLocation();

  // Scroll to top when component mounts or when location changes
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also try with a small delay to handle any async rendering
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
    
    console.log('About page mounted/refreshed - scrolled to top');
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [location.pathname]); // Re-run when pathname changes (including refresh)

  return (
    <>
      <IntroSection />
      <ScrollamaSection />
    </>
  );
};

export default About;
