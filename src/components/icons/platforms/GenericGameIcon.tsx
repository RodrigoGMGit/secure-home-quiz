import React from 'react';
import { Gamepad2 } from 'lucide-react';

interface PlatformIconProps {
  className?: string;
}

export const GenericGameIcon = ({ className }: PlatformIconProps) => (
  <Gamepad2 className={className} />
);
