import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollytellingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const video = videoRef.current;

    if (!section || !title || !video) return;

    // Initial state - hidden
    gsap.set([title, video], {
      opacity: 0,
      y: 50
    });

    // Create the timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate title first
    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    })
    // Then animate video
    .to(video, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        video.play();
      }
    }, "-=0.3");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-background"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-foreground mb-12"
        >
          La puerta ya no es la calle
        </h2>
        
        <div className="relative">
          <video
            ref={videoRef}
            className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl"
            controls
            muted
            playsInline
          >
            <source src="/assets/scrollytelling-video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default ScrollytellingSection;