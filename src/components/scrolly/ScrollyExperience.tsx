import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { SCROLLY_SCENE_COUNT } from "@/content/scrolly";
import { ScrollyStage } from "./ScrollyStage";
import { useScrollyController } from "./useScrollyController";
import { ScrollyNav } from "./ScrollyNav";
import { ScrollyHero } from "./ScrollyHero";
import { ScrollyClosing } from "./ScrollyClosing";
import { Scene01Puerta } from "./scenes/Scene01Puerta";
import { Scene02Plataformas } from "./scenes/Scene02Plataformas";
import { Scene03Senales } from "./scenes/Scene03Senales";
import { Scene04MiniCasos } from "./scenes/Scene04MiniCasos";
import { Scene05TresMinutos } from "./scenes/Scene05TresMinutos";
import { Scene06Cierre } from "./scenes/Scene06Cierre";

function useMediaMdUp() {
  const [mdUp, setMdUp] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const fn = () => setMdUp(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  return mdUp;
}

export function ScrollyExperience() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const mdUp = useMediaMdUp();
  const showStickyDesktop = mdUp && !prefersReducedMotion;
  const inlineStage = !showStickyDesktop;
  const stagePlacement = showStickyDesktop ? "none" : "before";

  const { activeScene, progress, sceneProgresses, containerRef, resize } = useScrollyController({
    prefersReducedMotion,
    layoutKey: mdUp,
  });

  useEffect(() => {
    resize();
  }, [mdUp, resize]);

  const sceneProps = {
    inlineStage,
    stagePlacement,
    activeScene,
    progress,
    sceneProgresses,
    prefersReducedMotion,
  };

  const barPercent = Math.min(
    100,
    ((activeScene + progress) / SCROLLY_SCENE_COUNT) * 100
  );

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-x-clip">
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-0" aria-hidden>
        <div className="absolute top-20 left-4 sm:left-10 w-28 h-28 sm:w-32 sm:h-32 bg-brand-teal-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-6 sm:right-14 w-36 h-36 sm:w-44 sm:h-44 bg-brand-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 sm:w-28 sm:h-28 bg-brand-olive-500/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {!prefersReducedMotion && (
        <div
          className="fixed top-0 left-0 right-0 z-[60] h-1 md:h-0.5 bg-brand-mint-200/50 pointer-events-none"
          aria-hidden
        >
          <div
            className="h-full bg-gradient-to-r from-brand-mint-200 to-brand-teal-500 transition-[width] duration-150 ease-out"
            style={{ width: `${barPercent}%` }}
          />
        </div>
      )}

      <ScrollyNav activeScene={activeScene} />

      <div
        ref={containerRef}
        className={`max-w-7xl mx-auto relative z-10 ${
          showStickyDesktop ? "md:grid md:grid-cols-2 md:gap-10 lg:gap-14" : ""
        }`}
      >
        {showStickyDesktop && (
          <div className="hidden md:block min-h-[100vh]">
            <div className="sticky top-0 h-screen flex items-center justify-center border-r border-brand-mint-200/30 pr-4 lg:pr-8">
              <ScrollyStage
                activeScene={activeScene}
                progress={progress}
                prefersReducedMotion={false}
              />
            </div>
          </div>
        )}

        <div className="min-w-0">
          <ScrollyHero />
          <Scene01Puerta {...sceneProps} />
          <Scene02Plataformas {...sceneProps} />
          <Scene03Senales {...sceneProps} />
          <Scene04MiniCasos {...sceneProps} />
          <Scene05TresMinutos {...sceneProps} />
          <Scene06Cierre {...sceneProps} />
          <ScrollyClosing />
        </div>
      </div>
    </div>
  );
}
