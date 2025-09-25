import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';

interface ManualCardProps {
  title: string;
  description: string;
  category: string;
  icon: string;
  onClick?: () => void;
}

export function ManualCard({ title, description, category, icon, onClick }: ManualCardProps) {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-cta hover:scale-105 border-brand-mint-200 hover:border-brand-teal-500"
      onClick={onClick}
    >
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="text-3xl">{icon}</div>
          <ChevronRight className="h-5 w-5 text-brand-olive-500 group-hover:text-brand-teal-500 transition-colors" />
        </div>
        
        <div className="space-y-2">
          <Badge variant="secondary" className="bg-brand-mint-200 text-brand-ink-800 hover:bg-brand-mint-200">
            {category}
          </Badge>
          <h3 className="font-heading font-bold text-lg text-brand-ink-900 group-hover:text-brand-teal-500 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-brand-olive-500 line-clamp-2">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}