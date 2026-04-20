import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export interface PuertaStageProps {
  isActive: boolean;
  prefersReducedMotion: boolean;
  className?: string;
}

export function PuertaStage({
  isActive,
  prefersReducedMotion,
  className = "",
}: PuertaStageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || prefersReducedMotion) return;
    if (isActive) {
      v.play().catch(() => {
        /* autoplay puede fallar; el usuario puede usar controles nativos si existen */
      });
    } else {
      v.pause();
    }
  }, [isActive, prefersReducedMotion]);

  const opacity = prefersReducedMotion ? 1 : isActive ? 1 : 0.15;

  return (
    <div
      className={`flex items-center justify-center w-full max-w-sm mx-auto ${className}`}
    >
      <motion.div
        className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[384px] aspect-[9/14] rounded-2xl overflow-hidden shadow-soft border border-brand-mint-200/40 bg-brand-mint-200/10"
        animate={{ opacity }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        <video
          ref={videoRef}
          src="/assets/door.mp4"
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="metadata"
          loop={false}
          controls={prefersReducedMotion}
          aria-label="Metáfora visual: la puerta al mundo digital"
        />
        {prefersReducedMotion && (
          <span className="sr-only">
            Video decorativo de una puerta; con movimiento reducido se muestran controles para
            reproducir manualmente si lo deseas.
          </span>
        )}
      </motion.div>
    </div>
  );
}
