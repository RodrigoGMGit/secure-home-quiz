import { Button } from "@/components/ui/button";
import { Smartphone, AlertTriangle, MessageCircle, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const PLATFORMS = [
  "YouTube",
  "Instagram",
  "TikTok",
  "Facebook",
  "WhatsApp",
  "Messenger",
  "Discord",
  "Snapchat",
  "Roblox",
  "Minecraft",
  "Telegram",
  "Twitch",
];

const stats = [
  {
    icon: Smartphone,
    stat: "8 de cada 10",
    text: "adolescentes usan redes sociales sin la compa\u00F1\u00EDa de un adulto.",
  },
  {
    icon: AlertTriangle,
    stat: "1 de cada 4",
    text: "padres nunca revisa lo que sus hijos hacen en internet.",
  },
  {
    icon: MessageCircle,
    stat: "32%",
    text: "de los adolescentes ha sufrido ciberacoso al menos una vez.",
  },
  {
    icon: Clock,
    stat: "> 3 horas",
    text: "al d\u00EDa frente a pantallas en promedio.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1
  },
};

export default function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="w-full">
      {/* Intro empatica */}
      <div className="min-h-[70vh] md:min-h-[80vh] bg-[#F5F7FA] flex flex-col items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3,
                type: "spring",
                stiffness: 100 
              }}
            >
              <Shield aria-hidden className="mx-auto mb-4 h-12 w-12 text-[#003A5D]" />
            </motion.div>
            <motion.h2
              id="problem-heading"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
              className="text-2xl md:text-[2.25rem] leading-tight font-bold text-[#003A5D]"
            >
              Como padres que somos, queremos compartirte lo que hemos aprendido sobre a qué están expuestos nuestros hijos en internet.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.8 }}
              className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl mx-auto"
            >
              El mundo digital abre puertas para aprender, jugar y convivir... pero también trae riesgos que a veces no vemos.
            </motion.p>
          </div>
        </motion.div>

        {/* Cinta animada de plataformas (branding del sitio) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.2 }}
          className="absolute bottom-8 w-full overflow-hidden"
        >
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 24, ease: "linear" }}
          >
            {Array.from({ length: 2 }).map((_, loop) => (
              <div key={loop} className="flex gap-4 md:gap-6 pr-6">
                {PLATFORMS.map((label, i) => (
                  <BrandPill
                    key={`${loop}-${label}-${i}`}
                    label={label}
                    variant={i % 4 === 0 ? "primary" : i % 4 === 1 ? "accent" : i % 4 === 2 ? "muted" : "outline"}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Estadisticas */}
      <div className="bg-white">
        <div className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-5xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {stats.map(({ icon: Icon, stat, text }, i) => (
              <motion.div
                key={i}
                variants={item}
                className="flex items-start gap-4 rounded-2xl p-5 shadow-sm border border-[#E6EEF5] bg-[#F5F7FA] hover:shadow-md transition"
              >
                <Icon className="h-8 w-8 text-[#003A5D] shrink-0" aria-hidden />
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-[#003A5D] leading-tight">{stat}</p>
                  <p className="text-base md:text-lg text-[#003A5D] font-semibold">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Cierre con CTA */}
      <div className="bg-[#003A5D]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24"
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h3 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
              className="text-2xl md:text-[2.25rem] leading-tight font-bold"
            >
              La buena noticia: juntos podemos transformar nuestro hogar en un espacio digital seguro.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
              className="mt-4 text-base md:text-lg text-white/90 max-w-3xl mx-auto"
            >
              Empieza hoy con pasos simples que hacen la diferencia.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94], 
                delay: 0.7,
                type: "spring",
                stiffness: 100 
              }}
              className="mt-8"
            >
              <Button
                size="lg"
                className="bg-[#4BAEA0] hover:bg-[#3E8E82] text-white text-base md:text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const el = document.getElementById("quiz");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Haz el quiz y conoce tu nivel
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BrandPill({
  label,
  variant = "muted",
}: {
  label: string;
  variant?: "primary" | "accent" | "muted" | "outline";
}) {
  const styles = {
    primary: "bg-[#003A5D] text-white",
    accent: "bg-[#79A9D1] text-[#003A5D]",
    muted: "bg-[#F5F7FA] text-[#003A5D] border border-[#E6EEF5]",
    outline: "bg-white text-[#003A5D] border border-[#003A5D]",
  } as const;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-2 rounded-full px-4 py-2 shadow-sm ${styles[variant]}`}
      title={label}
      role="img"
      aria-label={label}
    >
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-current opacity-70" aria-hidden />
      <span className="text-sm font-semibold">{label}</span>
    </motion.div>
  );
}
