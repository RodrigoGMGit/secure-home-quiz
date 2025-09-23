import { useEffect } from 'react';
import childGaming from "@/assets/child-gaming-safely.png";
import childTablet from "@/assets/child-using-tablet.png";
import childrenLearning from "@/assets/children-learning-together.png";

export function ImagePreloader() {
  useEffect(() => {
    // Preload critical images for marquee
    const criticalImages = [
      childGaming,
      childTablet,
      childrenLearning
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Cleanup function to remove preload links
    return () => {
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
      preloadLinks.forEach(link => {
        if (criticalImages.includes(link.getAttribute('href') || '')) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
}
