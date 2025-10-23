import React from 'react';

interface PlatformIconProps {
  className?: string;
}

export const RobloxIcon = ({ className }: PlatformIconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label="Roblox"
  >
    <path d="M18.926 23.998 0 18.892 5.075.002 24 5.108ZM15.348 10.09l-5.282-1.453-1.414 5.273 5.282 1.453z"/>
  </svg>
);
