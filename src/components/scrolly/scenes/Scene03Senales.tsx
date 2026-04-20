import { motion } from "framer-motion";
import { HeartPulse, MessageCircle, MessagesSquare, Moon } from "lucide-react";
import { scrollyScenes } from "@/content/scrolly";
import type { SignalIcon } from "@/content/scrolly";
import { ScrollyScene } from "../ScrollyScene";
import { SenalesStage } from "../stages/SenalesStage";
import type { ScrollyScenePartProps } from "./Scene01Puerta";

const iconFor = (icon: SignalIcon) => {
  switch (icon) {
    case "moon":
      return Moon;
    case "heartPulse":
      return HeartPulse;
    case "messagesSquare":
      return MessagesSquare;
    default:
      return Moon;
  }
};

export function Scene03Senales({ inlineStage, stagePlacement }: ScrollyScenePartProps) {
  const s = scrollyScenes[2];

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
          <SenalesStage />
        </motion.div>
      )}
      <ScrollyScene index={2} eyebrow={s.eyebrow} title={s.title}>
        <p className="font-body text-base sm:text-lg text-brand-olive-500 leading-relaxed mb-8">
          {s.paragraph}
        </p>
        <ul className="space-y-4 mb-8">
          {(s.signals ?? []).map((sig) => {
            const Icon = iconFor(sig.icon);
            return (
              <li
                key={sig.title}
                className="rounded-xl border border-brand-mint-200/40 bg-white/90 p-4 shadow-soft flex gap-4"
              >
                <div className="rounded-full bg-brand-mint-200/60 p-2 h-fit">
                  <Icon className="w-5 h-5 text-brand-ink-800" aria-hidden />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-brand-ink-900 mb-1">
                    {sig.title}
                  </p>
                  <p className="font-body text-sm text-brand-olive-500 leading-relaxed">
                    {sig.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        {s.footNote && (
          <div className="flex items-start gap-3 rounded-xl border border-brand-teal-500/20 bg-brand-teal-500/10 p-4">
            <MessageCircle className="w-5 h-5 text-brand-teal-500 shrink-0 mt-0.5" aria-hidden />
            <p className="font-body text-sm text-brand-ink-800">{s.footNote}</p>
          </div>
        )}
      </ScrollyScene>
    </>
  );
}
