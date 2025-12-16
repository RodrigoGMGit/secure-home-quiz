/**
 * Utility functions for consistent card color rotation across the application
 * Follows the design system's 3-color rotation pattern
 */

export interface CardColors {
  card: string;
  icon: string;
  checkmark: string;
}

/**
 * Returns the appropriate color classes for a card based on its index
 * Rotates between 3 brand colors to avoid visual monotony
 * 
 * @param index - The index of the card in the list (0-based)
 * @returns Object with card, icon, and checkmark color classes
 */
export const getCardColors = (index: number): CardColors => {
  const colorIndex = index % 3;
  
  const cardColors = [
    "border-brand-teal-500/30 bg-brand-teal-500/10",
    "border-brand-mint-200/40 bg-brand-mint-200/20", 
    "border-brand-olive-500/30 bg-brand-olive-500/10"
  ];
  
  const iconColors = [
    "bg-brand-teal-500/20 text-brand-teal-500",
    "bg-brand-mint-200/60 text-brand-ink-800",
    "bg-brand-olive-500/20 text-brand-olive-500"
  ];
  
  const checkmarkColors = [
    "text-brand-teal-500",
    "text-brand-ink-800",
    "text-brand-olive-500"
  ];
  
  return {
    card: cardColors[colorIndex],
    icon: iconColors[colorIndex],
    checkmark: checkmarkColors[colorIndex]
  };
};

/**
 * Returns the appropriate color classes for a number circle based on its index
 * Used for numbered sections and key points
 * 
 * @param index - The index of the item (0-based)
 * @returns Object with background and text color classes
 */
export const getNumberColors = (index: number): { background: string; text: string } => {
  const colorIndex = index % 3;
  
  const backgrounds = [
    "bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10",
    "bg-gradient-to-br from-brand-mint-200/60 to-brand-mint-200/40",
    "bg-gradient-to-br from-brand-olive-500/20 to-brand-olive-500/10"
  ];
  
  const textColors = [
    "text-brand-teal-500",
    "text-brand-ink-800",
    "text-brand-olive-500"
  ];
  
  return {
    background: backgrounds[colorIndex],
    text: textColors[colorIndex]
  };
};
