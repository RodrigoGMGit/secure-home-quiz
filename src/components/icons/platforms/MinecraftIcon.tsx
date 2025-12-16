import React from 'react';

interface PlatformIconProps {
  className?: string;
}

export const MinecraftIcon = ({ className }: PlatformIconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="Minecraft"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zm-1.5 3v3h-3v1.5h3v3h1.5v-3h3V7.5h-3v-3zm0 6v3h-3v1.5h3v3h1.5v-3h3V16.5h-3v-3z"/>
  </svg>
);
