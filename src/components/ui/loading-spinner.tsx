import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  };

  return (
    <div className={cn("animate-spin", sizeClasses[size], className)}>
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="32"
          strokeDashoffset="32"
          className="animate-spin"
          style={{
            animation: "spin 1s linear infinite, dash 1.5s ease-in-out infinite"
          }}
        />
      </svg>
    </div>
  );
}

interface LoadingOverlayProps {
  message?: string;
  className?: string;
}

export function LoadingOverlay({ message = "Cargando...", className }: LoadingOverlayProps) {
  return (
    <div className={cn(
      "fixed inset-0 bg-gradient-subtle flex items-center justify-center z-50",
      className
    )}>
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" className="text-brand-teal-500 mx-auto" />
        <p className="text-brand-olive-500 font-body text-lg">{message}</p>
      </div>
    </div>
  );
}
