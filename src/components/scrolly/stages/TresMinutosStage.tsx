import { useMemo } from "react";

function formatMmSs(totalSeconds: number) {
  const s = Math.min(180, Math.max(0, Math.round(totalSeconds)));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function TresMinutosStage({ progress }: { progress: number }) {
  const label = useMemo(() => formatMmSs(progress * 180), [progress]);

  return (
    <div className="flex flex-col items-center justify-center gap-4" aria-hidden>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-brand-teal-500/15 blur-2xl scale-110" />
        <svg
          viewBox="0 0 120 120"
          className="relative w-40 h-40 sm:w-48 sm:h-48 text-brand-ink-900"
          fill="none"
          stroke="currentColor"
        >
          <circle
            cx="60"
            cy="60"
            r="52"
            className="text-brand-mint-200/80"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r="52"
            className="text-brand-teal-500"
            strokeWidth="8"
            strokeDasharray={`${(progress * 326).toFixed(0)} 326`}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
          <text
            x="60"
            y="68"
            textAnchor="middle"
            className="fill-brand-ink-900 font-heading text-lg font-bold"
            style={{ fontSize: "18px" }}
          >
            {label}
          </text>
        </svg>
      </div>
      <p className="font-heading text-sm text-brand-olive-500 text-center max-w-xs">
        Tu plan en 3 minutos
      </p>
    </div>
  );
}
