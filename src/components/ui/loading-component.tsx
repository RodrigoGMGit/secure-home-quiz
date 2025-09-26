import { cn } from "@/lib/utils";
import { Shield, BookOpen, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export type LoadingType = "quiz" | "about" | "default";

interface LoadingComponentProps {
  type?: LoadingType;
  className?: string;
}

const LoadingComponent = ({ type = "default", className }: LoadingComponentProps) => {
  const getLoadingContent = () => {
    switch (type) {
      case "quiz":
        return {
          icon: <Shield className="w-12 h-12" />,
          title: "Preparando tu evaluación",
          subtitle: "Analizando las mejores preguntas para tu familia",
          color: "text-brand-teal-500",
          bgColor: "bg-brand-teal-500/10",
          borderColor: "border-brand-teal-200"
        };
      case "about":
        return {
          icon: <BookOpen className="w-12 h-12" />,
          title: "Cargando información",
          subtitle: "Preparando contenido sobre seguridad digital",
          color: "text-brand-blue-500",
          bgColor: "bg-brand-blue-500/10",
          borderColor: "border-brand-blue-200"
        };
      default:
        return {
          icon: <Loader2 className="w-12 h-12" />,
          title: "Cargando",
          subtitle: "Preparando contenido",
          color: "text-brand-olive-500",
          bgColor: "bg-brand-olive-500/10",
          borderColor: "border-brand-olive-200"
        };
    }
  };

  const content = getLoadingContent();

  return (
    <div className={cn(
      "fixed inset-0 bg-gradient-subtle flex items-center justify-center z-50",
      className
    )}>
      <motion.div 
        className="text-center space-y-6 max-w-md mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Icon with animated background */}
        <div className="relative mx-auto w-24 h-24">
          <motion.div
            className={cn(
              "absolute inset-0 rounded-full border-2",
              content.bgColor,
              content.borderColor
            )}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className={cn(
              "absolute inset-2 rounded-full flex items-center justify-center",
              content.color
            )}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {content.icon}
          </motion.div>
        </div>

        {/* Text content */}
        <div className="space-y-2">
          <motion.h3 
            className="font-heading text-xl font-semibold text-brand-ink-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {content.title}
          </motion.h3>
          <motion.p 
            className="text-brand-olive-500 font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-brand-teal-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingComponent;
