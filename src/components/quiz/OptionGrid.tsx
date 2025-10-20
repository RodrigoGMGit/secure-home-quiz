import { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Option {
  value: string;
  label: ReactNode;
  icon?: ReactNode;
  description?: ReactNode;
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
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6", className)}>
      {options.map((option, index) => {
        const isSelected = selectedValues.includes(option.value);
        const isDisabled = isOptionDisabled(option);
        
        return (
          <motion.button
            key={option.value}
            onClick={() => !isDisabled && handleOptionClick(option.value)}
            disabled={isDisabled}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={cn(
              "relative p-4 rounded-xl border-2 transition-smooth backdrop-blur-sm",
              "focus-visible-brand",
              "min-h-[44px] sm:min-h-[120px] flex flex-col items-center justify-center text-center",
              "hover:shadow-soft hover:scale-[1.02] active:scale-[0.98]",
              isSelected
                ? "border-brand-teal-500 bg-brand-mint-200/50 shadow-cta"
                : "border-brand-mint-200 bg-white/60 hover:border-brand-teal-500/60 hover:bg-brand-mint-200/30",
              isDisabled && "opacity-50 cursor-not-allowed hover:border-brand-mint-200 hover:shadow-none hover:scale-100"
            )}
            aria-pressed={isSelected}
            aria-disabled={isDisabled}
            aria-describedby={isDisabled ? `${option.value}-age-restriction` : undefined}
          >
            {/* Selection indicator */}
            {isSelected && (
              <div className="absolute -top-2 -right-2 w-7 h-7 bg-brand-teal-500 rounded-full flex items-center justify-center shadow-cta">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
            
            {/* Icon */}
            {option.icon && (
              <div className={cn(
                "mb-4 text-3xl transition-all duration-300",
                isSelected ? "text-brand-teal-500 scale-110" : "text-brand-olive-500",
                !isDisabled && "group-hover:text-brand-teal-500"
              )}>
                {option.icon}
              </div>
            )}
            
            {/* Label */}
            <div className={cn(
              "font-body font-semibold text-base mb-2",
              isSelected ? "text-brand-ink-800" : "text-brand-ink-800"
            )}>
              {option.label}
            </div>
            
            {/* Description */}
            {option.description && (
              <div className={cn(
                "text-sm font-body",
                isSelected ? "text-brand-ink-800/80" : "text-brand-olive-500"
              )}>
                {option.description}
              </div>
            )}
            
            {/* Age restriction notice */}
            {isDisabled && (
              <div 
                id={`${option.value}-age-restriction`}
                className="text-sm text-brand-ink-800 mt-2 font-body font-medium"
              >
                13+ años
              </div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}