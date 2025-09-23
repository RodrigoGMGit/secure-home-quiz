import { AnalyticsData } from '@/types/quiz';

export function captureAnalyticsData(): AnalyticsData {
  const urlParams = new URLSearchParams(window.location.search);
  
  // Get device type based on viewport
  const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  };

  // Detect in-app browsers
  const detectInAppBrowser = (): boolean => {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes('instagram') || 
           userAgent.includes('fbav') || 
           userAgent.includes('tiktok');
  };

  // Get OS from user agent
  const getOS = (): string => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
    return 'Unknown';
  };

  // Get browser name
  const getBrowser = (): string => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Unknown';
  };

  // Check if first visit
  const isFirstVisit = (): boolean => {
    const hasVisited = localStorage.getItem('quiz_visitor_id');
    return !hasVisited;
  };

  return {
    utm_source: urlParams.get('utm_source') || undefined,
    utm_medium: urlParams.get('utm_medium') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined,
    utm_content: urlParams.get('utm_content') || undefined,
    referrer: document.referrer || undefined,
    device_type: getDeviceType(),
    os: getOS(),
    browser: getBrowser(),
    lang: navigator.language,
    connection: (navigator as Navigator & { connection?: { effectiveType?: string } }).connection?.effectiveType || undefined,
    first_visit: isFirstVisit(),
    inapp_browser: detectInAppBrowser()
  };
}

export function track(eventName: string, properties: Record<string, unknown> = {}) {
  const data = {
    event: eventName,
    properties: {
      ...properties,
      timestamp: Date.now(),
      url: window.location.href,
      user_agent: navigator.userAgent
    }
  };

  // Try to send to analytics provider (placeholder)
  // In real implementation, this would be Plausible, PostHog, Mixpanel, etc.
  try {
    // Placeholder for analytics SDK
    // Example: plausible(eventName, { props: properties });
    // Example: mixpanel.track(eventName, properties);
    console.info('Analytics Event:', data);
  } catch (error) {
    console.info('Analytics tracking failed, event logged:', data);
  }
}