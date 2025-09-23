/**
 * Enhanced scroll utilities for better mobile compatibility
 */

/**
 * Scroll to top of the page with enhanced mobile support
 * Uses multiple methods to ensure compatibility across different browsers and devices
 */
export function scrollToTop(): void {
  const scrollToTop = () => {
    // Primary method - modern browsers
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Fallback for mobile browsers and older versions
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  };
  
  // Use requestAnimationFrame for better timing and performance
  requestAnimationFrame(scrollToTop);
}

/**
 * Scroll to top with additional delay for complex navigation scenarios
 * Useful when skipping steps or when DOM updates might interfere
 */
export function scrollToTopDelayed(): void {
  // Wait for DOM to settle, then scroll
  setTimeout(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Additional fallback with longer delay
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 150);
    };
    
    requestAnimationFrame(scrollToTop);
  }, 50);
}

/**
 * Scroll to top with immediate effect (no smooth animation)
 * Useful for cases where smooth scrolling might be problematic
 */
export function scrollToTopImmediate(): void {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/**
 * Check if the page is currently scrolled
 */
export function isScrolled(): boolean {
  return window.scrollY > 0 || document.documentElement.scrollTop > 0;
}

/**
 * Get current scroll position
 */
export function getScrollPosition(): number {
  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
