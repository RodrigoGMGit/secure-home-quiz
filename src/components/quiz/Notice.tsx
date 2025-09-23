import { ReactNode } from 'react';
import { CheckCircle, AlertCircle, Info, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

type NoticeType = 'success' | 'info' | 'warning' | 'help';

interface NoticeProps {
  type: NoticeType;
  title?: string;
  children: ReactNode;
  className?: string;
}

const noticeConfig = {
  success: {
    icon: CheckCircle,
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    iconColor: 'text-green-600',
    titleColor: 'text-green-800',
    textColor: 'text-green-700'
  },
  info: {
    icon: Info,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600',
    titleColor: 'text-blue-800',
    textColor: 'text-blue-700'
  },
  warning: {
    icon: AlertCircle,
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    iconColor: 'text-amber-600',
    titleColor: 'text-amber-800',
    textColor: 'text-amber-700'
  },
  help: {
    icon: Lightbulb,
    bgColor: 'bg-accent/30',
    borderColor: 'border-accent',
    iconColor: 'text-primary',
    titleColor: 'text-foreground',
    textColor: 'text-foreground'
  }
};

export function Notice({ type, title, children, className }: NoticeProps) {
  const config = noticeConfig[type];
  const Icon = config.icon;

  return (
    <div 
      className={cn(
        "p-4 rounded-lg border",
        config.bgColor,
        config.borderColor,
        className
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <Icon className={cn("w-5 h-5 flex-shrink-0 mt-0.5", config.iconColor)} />
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={cn("font-medium text-sm mb-1", config.titleColor)}>
              {title}
            </h4>
          )}
          <div className={cn("text-sm", config.textColor)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}