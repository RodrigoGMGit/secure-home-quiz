import { motion } from "framer-motion";
import { scrollyScenes } from "@/content/scrolly";
import { ScrollyScene } from "../ScrollyScene";
import { MiniCasosStage } from "../stages/MiniCasosStage";
import type { ScrollyScenePartProps } from "./Scene01Puerta";

export function Scene04MiniCasos({
  inlineStage,
  stagePlacement,
  sceneProgresses,
}: ScrollyScenePartProps) {
  const s = scrollyScenes[3];
  const mini = s.miniCasos ?? [];
  const stageProgress = sceneProgresses[3] ?? 0;
  const showTextCases = !inlineStage;

  return (
    <>
      {inlineStage && stagePlacement === "before" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.45 }}
          className="px-4 pt-4 pb-6 max-w-md mx-auto"
        >
          <MiniCasosStage miniCasos={mini} progress={stageProgress} />
        </motion.div>
      )}
      <ScrollyScene index={3} eyebrow={s.eyebrow} title={s.title}>
        <p className="font-body text-base sm:text-lg text-brand-olive-500 leading-relaxed mb-10">
          {s.paragraph}
        </p>
        {showTextCases ? (
          <div className="space-y-8">
            {mini.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-brand-mint-200/40 bg-brand-mint-200/20 p-5 sm:p-6 shadow-soft"
              >
                <p className="font-body text-sm sm:text-base text-brand-ink-900 font-medium mb-3">
                  {c.situation}
                </p>
                <p className="font-body text-sm text-brand-olive-500 leading-relaxed border-t border-brand-mint-200/30 pt-3">
                  {c.action}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="font-body text-sm text-brand-ink-800 rounded-xl border border-brand-mint-200/40 bg-white/70 p-4 shadow-soft">
            Desliza para ver cómo cambia cada caso y qué hacer en cada situación.
          </p>
        )}
      </ScrollyScene>
    </>
  );
}
