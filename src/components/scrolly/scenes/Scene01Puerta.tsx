import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Shield } from "lucide-react";
import TextType from "@/components/ui/TextType";
import { scrollyScenes } from "@/content/scrolly";
import { ScrollyScene } from "../ScrollyScene";
import { PuertaStage } from "../stages/PuertaStage";

export interface ScrollyScenePartProps {
  inlineStage: boolean;
  /** none: solo desktop sticky; before: reduced motion y móvil */
  stagePlacement: "none" | "before" | "after";
  activeScene: number;
  progress: number;
  sceneProgresses: number[];
  prefersReducedMotion: boolean;
}

export function Scene01Puerta({
  inlineStage,
  stagePlacement,
  activeScene,
  progress,
  prefersReducedMotion,
}: ScrollyScenePartProps) {
  const s = scrollyScenes[0];
  const reduced = useReducedMotion() ?? false;

  const titleNode = s.titleTypewriter ? (
    <TextType
      text={[s.title]}
      as="span"
      typingSpeed={reduced ? 40 : 100}
      initialDelay={reduced ? 0 : 400}
      pauseDuration={reduced ? 400 : 1200}
      loop={false}
      showCursor={!reduced}
      cursorCharacter="|"
      cursorBlinkDuration={0.8}
      startOnVisible
      className="text-brand-ink-900"
      textColors={["hsl(var(--brand-ink-900))"]}
      variableSpeed={reduced ? undefined : { min: 70, max: 130 }}
    />
  ) : (
    s.title
  );

  return (
    <>
      {inlineStage && stagePlacement === "before" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.45 }}
          className="px-4 pt-8 pb-6 max-w-sm mx-auto"
        >
          <PuertaStage isActive={activeScene === 0 || progress > 0.01} prefersReducedMotion={prefersReducedMotion} />
        </motion.div>
      )}
      <ScrollyScene index={0} eyebrow={s.eyebrow} title={titleNode}>
        <p className="font-body text-base sm:text-lg text-brand-olive-500 leading-relaxed mb-6">
          {s.paragraph}
        </p>
        {s.chip && (
          <div className="flex items-start gap-3 rounded-xl border border-brand-mint-200/40 bg-brand-mint-200/20 p-4 shadow-soft mb-8">
            <Shield className="w-6 h-6 text-brand-teal-500 shrink-0 mt-0.5" aria-hidden />
            <p className="font-body text-sm sm:text-base text-brand-ink-800 font-medium">
              {s.chip}
            </p>
          </div>
        )}
        <p className="font-body text-sm text-brand-olive-500 flex items-center gap-2 justify-center md:justify-start">
          <span>Continúa deslizando</span>
          <ChevronDown className="w-4 h-4 text-brand-teal-500" aria-hidden />
        </p>
      </ScrollyScene>
    </>
  );
}
