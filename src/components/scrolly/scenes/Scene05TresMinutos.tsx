import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollyScenes } from "@/content/scrolly";
import { ScrollyScene } from "../ScrollyScene";
import { TresMinutosStage } from "../stages/TresMinutosStage";
import type { ScrollyScenePartProps } from "./Scene01Puerta";

export function Scene05TresMinutos({
  inlineStage,
  stagePlacement,
  sceneProgresses,
}: ScrollyScenePartProps) {
  const s = scrollyScenes[4];
  const stageProgress = sceneProgresses[4] ?? 0;

  return (
    <>
      {inlineStage && stagePlacement === "before" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.45 }}
          className="px-4 pt-4 pb-6 flex justify-center"
        >
          <TresMinutosStage progress={stageProgress} />
        </motion.div>
      )}
      <ScrollyScene index={4} eyebrow={s.eyebrow} title={s.title}>
        {s.paragraph ? (
          <p className="font-body text-base sm:text-lg text-brand-olive-500 leading-relaxed mb-8">
            {s.paragraph}
          </p>
        ) : null}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="rounded-xl border border-neutral-100 bg-white/80 p-5 shadow-soft">
            <p className="font-heading text-xs uppercase tracking-wide text-brand-olive-500 mb-3">
              Antes
            </p>
            <ul className="space-y-2">
              {(s.before ?? []).map((line) => (
                <li key={line} className="font-body text-sm text-brand-ink-800 flex gap-2">
                  <span className="text-brand-olive-500">·</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-brand-teal-500/30 bg-brand-teal-500/10 p-5 shadow-soft">
            <p className="font-heading text-xs uppercase tracking-wide text-brand-teal-500 mb-3">
              Después
            </p>
            <ul className="space-y-2">
              {(s.after ?? []).map((line) => (
                <li key={line} className="font-body text-sm text-brand-ink-800 flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal-500 shrink-0 mt-0.5" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button asChild variant="primary-brand" className="min-h-[44px] px-8 shadow-cta">
            <Link to="/quiz">Hacer mi diagnóstico</Link>
          </Button>
        </div>
      </ScrollyScene>
    </>
  );
}
