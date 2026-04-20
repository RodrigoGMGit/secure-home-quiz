import { AnimatePresence, motion } from "framer-motion";
import { SCROLLY_SCENE_COUNT, scrollyScenes } from "@/content/scrolly";
import { PuertaStage } from "./stages/PuertaStage";
import { PlataformasStage } from "./stages/PlataformasStage";
import { SenalesStage } from "./stages/SenalesStage";
import { MiniCasosStage } from "./stages/MiniCasosStage";
import { TresMinutosStage } from "./stages/TresMinutosStage";
import { CierreStage } from "./stages/CierreStage";

export interface ScrollyStageProps {
  activeScene: number;
  progress: number;
  prefersReducedMotion: boolean;
}

export function ScrollyStage({
  activeScene,
  progress,
  prefersReducedMotion,
}: ScrollyStageProps) {
  const mini = scrollyScenes[3]?.miniCasos ?? [];

  return (
    <div
      className="h-full w-full flex items-center justify-center p-6 md:p-10"
      aria-hidden
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={Math.min(activeScene, SCROLLY_SCENE_COUNT - 1)}
          role="presentation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="w-full max-w-lg flex items-center justify-center"
        >
          {activeScene === 0 && (
            <PuertaStage
              isActive={activeScene === 0}
              prefersReducedMotion={prefersReducedMotion}
            />
          )}
          {activeScene === 1 && (
            <PlataformasStage prefersReducedMotion={prefersReducedMotion} />
          )}
          {activeScene === 2 && <SenalesStage />}
          {activeScene === 3 && (
            <MiniCasosStage miniCasos={mini} progress={progress} />
          )}
          {activeScene === 4 && <TresMinutosStage progress={progress} />}
          {activeScene === 5 && <CierreStage />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
