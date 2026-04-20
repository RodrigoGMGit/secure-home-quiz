import { motion } from "framer-motion";
import { ScrollyScene } from "../ScrollyScene";
import { ScrollyQuickFixStack } from "../ScrollyQuickFixStack";
import { PlataformasStage } from "../stages/PlataformasStage";
import { scrollyScenes } from "@/content/scrolly";
import type { ScrollyScenePartProps } from "./Scene01Puerta";

export function Scene02Plataformas({
  inlineStage,
  stagePlacement,
  prefersReducedMotion,
}: ScrollyScenePartProps) {
  const s = scrollyScenes[1];

  return (
    <>
      {inlineStage && stagePlacement === "before" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.45 }}
          className="px-4 pt-4 pb-6 max-w-sm mx-auto"
        >
          <PlataformasStage prefersReducedMotion={prefersReducedMotion} />
        </motion.div>
      )}
      <ScrollyScene index={1} eyebrow={s.eyebrow} title={s.title}>
        <p className="font-body text-base sm:text-lg text-brand-olive-500 leading-relaxed mb-6">
          {s.paragraph}
        </p>
        {s.platformChips && (
          <div className="flex flex-wrap gap-2 mb-8">
            {s.platformChips.map((chip) => (
              <button
                key={chip}
                type="button"
                className="inline-flex items-center rounded-full border border-brand-teal-500/30 bg-brand-teal-500/10 px-3 py-1.5 text-xs sm:text-sm font-heading font-semibold text-brand-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500 focus-visible:ring-offset-2 hover:bg-brand-mint-200/30 transition-smooth"
              >
                {chip}
              </button>
            ))}
          </div>
        )}
        <ScrollyQuickFixStack fixes={s.quickFixes ?? []} />
      </ScrollyScene>
    </>
  );
}
