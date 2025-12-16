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
  minAge?: number;
}

interface OptionGridProps {
  options: Option[];
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
  onAgeRestrictedClick?: (value: string) => void;
  multiSelect?: boolean;
  className?: string;
}

export function OptionGrid({ 
  options, 
  selectedValues, 
  onSelectionChange, 
  onAgeRestrictedClick,
  multiSelect = false,
  className 
}: OptionGridProps) {
  
  const isAgeRestricted = (option: Option) => {
    if (!option.currentAge || !option.minAge) return false;
    
    // Mapear edad del niño a edad máxima recomendada para esa banda
    const maxRecommendedAge: Record<string, number> = {
      '6-8': 10,    // Para niños 6-8, máximo recomendado 10 años
      '9-12': 12,   // Para niños 9-12, máximo recomendado 12 años  
      '13-15': 15,  // Para niños 13-15, máximo recomendado 15 años
      '16-17': 17   // Para niños 16-17, máximo recomendado 17 años
    };
    
    const childMaxAge = maxRecommendedAge[option.currentAge];
    return childMaxAge && option.minAge > childMaxAge;
  };

  const handleOptionClick = (option: Option) => {
    const isSelected = selectedValues.includes(option.value);
    
    if (isAgeRestricted(option) && onAgeRestrictedClick && !isSelected) {
      // Solo mostrar advertencia cuando se está SELECCIONANDO (no deseleccionando)
      onAgeRestrictedClick(option.value);
      return;
    }
    
    if (multiSelect) {
      const newValues = selectedValues.includes(option.value)
        ? selectedValues.filter(v => v !== option.value)
        : [...selectedValues, option.value];
      onSelectionChange(newValues);
    } else {
      onSelectionChange([option.value]);
    }
  };


  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6", className)}>
      {options.map((option, index) => {
        const isSelected = selectedValues.includes(option.value);
        const isAgeRestrictedOption = isAgeRestricted(option);
        
        return (
          <motion.button
            key={option.value}
            onClick={() => handleOptionClick(option)}
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
                : "border-brand-mint-200 bg-white/60 hover:border-brand-teal-500/60 hover:bg-brand-mint-200/30"
            )}
            aria-pressed={isSelected}
            aria-describedby={isAgeRestrictedOption ? `${option.value}-age-restriction` : undefined}
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
                "group-hover:text-brand-teal-500"
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
            {isAgeRestrictedOption && (
              <div 
                id={`${option.value}-age-restriction`}
                className="text-sm text-brand-ink-800 mt-2 font-body font-medium"
              >
                {option.minAge}+ años
              </div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}