import { SCROLLY_SCENE_COUNT } from "@/content/scrolly";

interface ScrollyNavProps {
  activeScene: number;
}

export function ScrollyNav({ activeScene }: ScrollyNavProps) {
  const goToScene = (index: number) => {
    const target = document.querySelector<HTMLElement>(`[data-scrolly-scene="${index}"]`);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Navegación de escenas"
      className="fixed z-50 left-1/2 -translate-x-1/2 bottom-5 md:left-auto md:translate-x-0 md:right-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto"
    >
      <ul className="flex md:flex-col items-center gap-2 rounded-full bg-white/70 backdrop-blur-sm border border-brand-mint-200/40 px-3 py-2 shadow-soft">
        {Array.from({ length: SCROLLY_SCENE_COUNT }, (_, index) => {
          const isActive = activeScene === index;
          return (
            <li key={index}>
              <button
                type="button"
                aria-label={`Ir a la escena ${index + 1}`}
                aria-current={isActive ? "step" : undefined}
                onClick={() => goToScene(index)}
                className={`h-2.5 w-2.5 rounded-full transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500 focus-visible:ring-offset-2 ${
                  isActive ? "bg-brand-teal-500 scale-110" : "bg-brand-mint-200/70 hover:bg-brand-mint-200"
                }`}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
