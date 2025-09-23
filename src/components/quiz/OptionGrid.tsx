import { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Option {
  value: string;
  label: string;
  icon?: ReactNode;
  description?: string;
  ageRestricted?: boolean;
  currentAge?: string;
}

interface OptionGridProps {
  options: Option[];
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
  multiSelect?: boolean;
  className?: string;
}

export function OptionGrid({ 
  options, 
  selectedValues, 
  onSelectionChange, 
  multiSelect = false,
  className 
}: OptionGridProps) {
  
  const handleOptionClick = (value: string) => {
    if (multiSelect) {
      const newValues = selectedValues.includes(value)
        ? selectedValues.filter(v => v !== value)
        : [...selectedValues, value];
      onSelectionChange(newValues);
    } else {
      onSelectionChange([value]);
    }
  };

  const isOptionDisabled = (option: Option) => {
    if (!option.ageRestricted || !option.currentAge) return false;
    
    // TikTok is restricted for users under 13
    if (option.value === 'tiktok') {
      return option.currentAge === '6-8' || option.currentAge === '9-12';
    }
    
    return false;
  };

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {options.map((option) => {
        const isSelected = selectedValues.includes(option.value);
        const isDisabled = isOptionDisabled(option);
        
        return (
          <button
            key={option.value}
            onClick={() => !isDisabled && handleOptionClick(option.value)}
            disabled={isDisabled}
            className={cn(
              "relative p-4 rounded-lg border-2 transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "min-h-[120px] flex flex-col items-center justify-center text-center",
              "hover:shadow-md active:scale-95",
              isSelected
                ? "border-primary bg-primary/5 shadow-sm"
                : "border-border bg-card hover:border-primary/50",
              isDisabled && "opacity-50 cursor-not-allowed hover:border-border hover:shadow-none"
            )}
          >
            {/* Selection indicator */}
            {isSelected && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-primary-foreground" />
              </div>
            )}
            
            {/* Icon */}
            {option.icon && (
              <div className={cn(
                "mb-3 text-2xl",
                isSelected ? "text-primary" : "text-muted-foreground"
              )}>
                {option.icon}
              </div>
            )}
            
            {/* Label */}
            <div className={cn(
              "font-medium text-sm",
              isSelected ? "text-primary" : "text-foreground"
            )}>
              {option.label}
            </div>
            
            {/* Description */}
            {option.description && (
              <div className="text-xs text-muted-foreground mt-1">
                {option.description}
              </div>
            )}
            
            {/* Age restriction notice */}
            {isDisabled && (
              <div className="text-xs text-destructive mt-1 font-medium">
                13+ años
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}