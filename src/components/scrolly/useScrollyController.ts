import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import scrollama from "scrollama";
import { SCROLLY_SCENE_COUNT } from "@/content/scrolly";

export interface UseScrollyControllerOptions {
  /** Si true, no se inicializa scrollama (layout secuencial estático). */
  prefersReducedMotion: boolean;
  /** Cambia al alternar breakpoint (p. ej. md) para destruir y recrear scrollama. */
  layoutKey?: string | boolean;
}

export interface UseScrollyControllerResult {
  activeScene: number;
  /** Progreso 0–1 dentro del paso activo (scrollama); en reduced motion siempre 0. */
  progress: number;
  /** Progreso por escena para animaciones inline en móvil. */
  sceneProgresses: number[];
  containerRef: RefObject<HTMLDivElement>;
  /** Llamar tras cambiar tamaño del layout (ej. breakpoint). */
  resize: () => void;
}

const emptyProgresses = () => Array.from({ length: SCROLLY_SCENE_COUNT }, () => 0);

/**
 * Controla escena activa y progreso con scrollama sobre elementos `[data-scrolly-scene]`.
 */
export function useScrollyController({
  prefersReducedMotion,
  layoutKey,
}: UseScrollyControllerOptions): UseScrollyControllerResult {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<ReturnType<typeof scrollama> | null>(null);
  const [activeScene, setActiveScene] = useState(0);
  const [progress, setProgress] = useState(0);
  const [sceneProgresses, setSceneProgresses] = useState<number[]>(() => emptyProgresses());

  const resize = useCallback(() => {
    scrollerRef.current?.resize();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setActiveScene(0);
      setProgress(0);
      setSceneProgresses(emptyProgresses());
      return;
    }

    const root = containerRef.current;
    if (!root) return;

    const steps = root.querySelectorAll<HTMLElement>("[data-scrolly-scene]");
    if (steps.length === 0) return;

    const scroller = scrollama();
    scrollerRef.current = scroller;

    scroller
      .setup({
        step: Array.from(steps),
        offset: 0.5,
        progress: true,
        debug: false,
      })
      .onStepEnter((response) => {
        const idx = Math.min(response.index, SCROLLY_SCENE_COUNT - 1);
        setActiveScene(idx);
        setSceneProgresses((prev) => {
          const next = [...prev];
          next[idx] = Math.max(next[idx] ?? 0, response.direction === "down" ? 0.04 : 0.96);
          return next;
        });
      })
      .onStepExit((response) => {
        const idx = response.index;
        if (response.direction === "down" && idx < SCROLLY_SCENE_COUNT - 1) {
          setActiveScene(idx + 1);
        } else if (response.direction === "up" && idx > 0) {
          setActiveScene(idx - 1);
        }
      })
      .onStepProgress((response) => {
        const idx = Math.min(response.index, SCROLLY_SCENE_COUNT - 1);
        const normalized = Math.min(1, Math.max(0, response.progress));
        setActiveScene(idx);
        setProgress(normalized);
        setSceneProgresses((prev) => {
          const next = [...prev];
          next[idx] = normalized;
          return next;
        });
      });

    const onResize = () => scroller.resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      scroller.destroy();
      scrollerRef.current = null;
    };
  }, [prefersReducedMotion, layoutKey]);

  return {
    activeScene,
    progress,
    sceneProgresses,
    containerRef,
    resize,
  };
}
