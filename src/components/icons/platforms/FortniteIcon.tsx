import React from 'react';

interface PlatformIconProps {
  className?: string;
}

export const FortniteIcon = ({ className }: PlatformIconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="Fortnite"
  >
    <path d="m15.767 14.171.097-5.05H12.4V5.197h3.99L16.872 0H7.128v24l5.271-.985V14.17z"/>
  </svg>
);
