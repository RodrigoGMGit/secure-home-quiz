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
    bgColor: 'bg-brand-mint-200/20',
    borderColor: 'border-brand-mint-200/40',
    iconColor: 'text-brand-teal-500',
    titleColor: 'text-brand-ink-800',
    textColor: 'text-brand-ink-800',
    role: 'status' as const,
    ariaLive: 'polite' as const
  },
  info: {
    icon: Info,
    bgColor: 'bg-brand-mint-200/20',
    borderColor: 'border-brand-mint-200/40',
    iconColor: 'text-brand-teal-500',
    titleColor: 'text-brand-ink-800',
    textColor: 'text-brand-ink-800',
    role: 'status' as const,
    ariaLive: 'polite' as const
  },
  warning: {
    icon: AlertCircle,
    bgColor: 'bg-brand-mint-200/20',
    borderColor: 'border-brand-mint-200/40',
    iconColor: 'text-brand-teal-500',
    titleColor: 'text-brand-ink-800',
    textColor: 'text-brand-ink-800',
    role: 'alert' as const,
    ariaLive: 'assertive' as const
  },
  help: {
    icon: Lightbulb,
    bgColor: 'bg-brand-mint-200/20',
    borderColor: 'border-brand-mint-200/40',
    iconColor: 'text-brand-teal-500',
    titleColor: 'text-brand-ink-800',
    textColor: 'text-brand-ink-800',
    role: 'status' as const,
    ariaLive: 'polite' as const
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
      role={config.role}
      aria-live={config.ariaLive}
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