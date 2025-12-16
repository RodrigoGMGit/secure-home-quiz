import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReferenceLinkProps {
  to: string;
  label: string;
  pathText: string;
  className?: string;
}

export default function ReferenceLink({ to, label, pathText, className }: ReferenceLinkProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {/* Enlace principal */}
      <Link
        to={to}
        className="inline-flex items-center gap-2 text-brand-teal-500 hover:text-brand-ink-800 underline decoration-dotted hover:decoration-solid transition-colors font-body text-sm sm:text-base"
      >
        {label}
        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
      </Link>
      
      {/* Ruta textual */}
      <p className="text-xs text-brand-olive-500 font-body">
        {pathText}
      </p>
    </div>
  );
}
