import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { QuickFix } from "@/content/scrolly";

const CARD_TOP = 24;
const CARD_HEIGHT = 19 * 16;
const MARGIN_Y = 1.25 * 16;

interface ScrollyQuickFixStackProps {
  fixes: QuickFix[];
}

/**
 * Patrón sticky apilado (heredado de StackingCards).
 */
export function ScrollyQuickFixStack({ fixes }: ScrollyQuickFixStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const scrollingListenerRef = useRef<(() => void) | null>(null);
  const scrollingRef = useRef(false);
  const [mobileLayout, setMobileLayout] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 639px)").matches : false
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const update = () => setMobileLayout(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (mobileLayout || !containerRef.current || !itemsRef.current.length) return;

    const container = containerRef.current;
    const items = itemsRef.current;

    const animateStackCards = () => {
      const top = container.getBoundingClientRect().top;

      for (let i = 0; i < items.length; i++) {
        const scrolling = CARD_TOP - top - i * (CARD_HEIGHT + MARGIN_Y);
        if (scrolling > 0) {
          const scale = (CARD_HEIGHT - scrolling * 0.05) / CARD_HEIGHT;
          items[i].style.transform = `translateY(${MARGIN_Y * i}px) scale(${Math.max(0.9, scale)})`;
        } else {
          items[i].style.transform = `translateY(${MARGIN_Y * i}px) scale(1)`;
        }
      }
      scrollingRef.current = false;
    };

    const handleScroll = () => {
      if (scrollingRef.current) return;
      scrollingRef.current = true;
      requestAnimationFrame(animateStackCards);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        if (scrollingListenerRef.current) return;
        scrollingListenerRef.current = handleScroll;
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
      } else {
        if (!scrollingListenerRef.current) return;
        window.removeEventListener("scroll", scrollingListenerRef.current);
        scrollingListenerRef.current = null;
      }
    };

    const observer = new IntersectionObserver(observerCallback);
    observer.observe(container);

    return () => {
      observer.disconnect();
      if (scrollingListenerRef.current) {
        window.removeEventListener("scroll", scrollingListenerRef.current);
      }
    };
  }, [fixes.length, mobileLayout]);

  return (
    <div
      ref={containerRef}
      className={`max-w-lg mx-auto md:mx-0 w-full ${mobileLayout ? "space-y-4 pb-4" : "space-y-0 pb-8"}`}
    >
      {fixes.map((fix, index) => (
        <div
          key={fix.title}
          ref={(el) => {
            if (el) itemsRef.current[index] = el;
          }}
          className={`${mobileLayout ? "relative mb-0" : "sticky mb-5"} rounded-2xl border border-brand-mint-200/40 bg-brand-mint-200/20 p-6 sm:p-8 shadow-soft`}
          style={{
            top: mobileLayout ? "auto" : CARD_TOP,
            transformOrigin: "center top",
            transform: mobileLayout ? "translateY(0px) scale(1)" : `translateY(${MARGIN_Y * index}px)`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <p className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900">
              {fix.title}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
