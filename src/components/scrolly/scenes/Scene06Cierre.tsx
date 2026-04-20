import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollyScenes } from "@/content/scrolly";
import { ScrollyScene } from "../ScrollyScene";
import { CierreStage } from "../stages/CierreStage";
import type { ScrollyScenePartProps } from "./Scene01Puerta";

export function Scene06Cierre({ inlineStage, stagePlacement }: ScrollyScenePartProps) {
  const s = scrollyScenes[5];

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
          <CierreStage />
        </motion.div>
      )}
      <ScrollyScene index={5} eyebrow={s.eyebrow} title={s.title}>
        <p className="font-body text-base sm:text-lg text-brand-olive-500 leading-relaxed mb-8">
          {s.paragraph}
        </p>
        {s.seal && (
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 rounded-xl border border-brand-mint-200/40 bg-brand-mint-200/20 px-4 py-4 shadow-soft">
            <ShieldCheck className="w-6 h-6 text-brand-teal-500" aria-hidden />
            <Users className="w-6 h-6 text-brand-olive-500" aria-hidden />
            <Heart className="w-6 h-6 text-brand-teal-500" aria-hidden />
            <p className="font-body text-sm text-brand-ink-800 font-medium w-full sm:w-auto text-center sm:text-left">
              {s.seal}
            </p>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button asChild variant="primary-brand" className="min-h-[44px] px-8 shadow-cta">
            <Link to="/quiz">Empezar mi diagnóstico</Link>
          </Button>
          <Button asChild variant="secondary-brand" className="min-h-[44px] px-8">
            <Link to="/recursos">Explorar recursos</Link>
          </Button>
        </div>
      </ScrollyScene>
    </>
  );
}
