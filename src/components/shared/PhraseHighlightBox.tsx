import React from 'react';

export interface PhraseHighlightBoxProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Componente para mostrar frases destacadas en headers de páginas
 * Usado para citas o mensajes clave en páginas educativas
 */
export const PhraseHighlightBox: React.FC<PhraseHighlightBoxProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-6 sm:p-8 mx-4 sm:mx-0 shadow-soft ${className}`}>
      <p className="font-body text-base sm:text-lg text-brand-ink-800 font-medium italic">
        {children}
      </p>
    </div>
  );
};

export default PhraseHighlightBox;

