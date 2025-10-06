import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";
import { useId } from "react";

interface InputEnhancedProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function InputEnhanced({ 
  label, 
  error, 
  helperText, 
  className, 
  id,
  ...props 
}: InputEnhancedProps) {
  const uid = useId();
  const inputId = id ?? `input-${uid}`;
  const errorId = `${inputId}-error`;
  const helpId = `${inputId}-help`;

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className="text-sm font-heading font-semibold text-brand-ink-900">
          {label}
        </label>
      )}
      <Input
        id={inputId}
        className={cn(
          "transition-smooth",
          error && "border-error focus-visible:ring-error",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : helperText ? helpId : undefined}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-sm text-error flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={helpId} className="text-sm text-brand-olive-500">
          {helperText}
        </p>
      )}
    </div>
  );
}
