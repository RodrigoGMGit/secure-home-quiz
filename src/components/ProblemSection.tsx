import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, AlertTriangle, MessageCircle, Clock, Shield } from "lucide-react";
import { motion, useInView } from "framer-motion";
import takeoverImage from "@/assets/family_reunited.png";

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
    text: "adolescentes usan redes sociales sin la compañía de un adulto.",
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
    text: "al día frente a pantallas en promedio.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProblemSection() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const takeoverActive = useInView(introRef, { amount: 0.65, once: false });

  return (
    <section aria-labelledby="problem-heading" className="relative isolate w-full">
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[#003A5D] mix-blend-multiply"
        initial={{ opacity: 0 }}
        animate={{ opacity: takeoverActive ? 0.25 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <div className="relative z-10">
        {/* Intro empática estilo takeover */}
        <div
          ref={introRef}
          className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-[#F5F7FA] md:min-h-screen"
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{
              opacity: takeoverActive ? 1 : 0.75,
              y: takeoverActive ? 0 : 16,
              scale: takeoverActive ? 1 : 0.98,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 w-full px-6 py-16 md:px-12 md:py-24 lg:px-24"
          >
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
              <div className="max-w-xl text-center md:text-left">
                <Shield aria-hidden className="mx-auto mb-4 h-12 w-12 text-[#003A5D] md:mx-0" />
                <h2
                  id="problem-heading"
                  className="text-2xl font-bold leading-tight text-[#003A5D] md:text-[2.25rem]"
                >
                  Como padres que somos, queremos compartirte lo que hemos aprendido acerca de a qué están expuestos nuestros hijos en internet.
                </h2>
                <p className="mt-4 text-base text-gray-700 md:text-lg">
                  El mundo digital abre puertas para aprender, jugar y convivir… pero también trae riesgos que a veces no vemos.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{
                  opacity: takeoverActive ? 1 : 0,
                  x: takeoverActive ? 0 : 40,
                  scale: takeoverActive ? 1 : 0.95,
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="w-full max-w-md"
              >
                <div className="overflow-hidden rounded-3xl border border-[#E6EEF5] bg-white/80 shadow-xl backdrop-blur">
                  <img
                    src={takeoverImage}
                    alt="Familia conectada hablando sobre seguridad digital"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Cinta animada de plataformas (branding del sitio) */}
          <div className="absolute bottom-8 z-0 w-full overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 24, ease: "linear" }}
            >
              {Array.from({ length: 2 }).map((_, loop) => (
                <div key={loop} className="flex gap-4 pr-6 md:gap-6">
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
          </div>
        </div>

        {/* Estadísticas */}
        <div className="bg-white">
          <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-12 md:py-24 lg:px-24">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2"
            >
              {stats.map(({ icon: Icon, stat, text }, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="flex items-start gap-4 rounded-2xl border border-[#E6EEF5] bg-[#F5F7FA] p-5 shadow-sm transition hover:shadow-md"
                >
                  <Icon className="h-8 w-8 shrink-0 text-[#003A5D]" aria-hidden />
                  <div>
                    <p className="text-2xl font-extrabold leading-tight text-[#003A5D] md:text-3xl">{stat}</p>
                    <p className="text-base font-semibold text-[#003A5D] md:text-lg">{text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Cierre con CTA */}
        <div className="bg-[#003A5D]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full px-6 py-16 md:px-12 md:py-24 lg:px-24"
          >
            <div className="mx-auto max-w-4xl text-center text-white">
              <h3 className="text-2xl font-bold leading-tight md:text-[2.25rem]">
                La buena noticia: juntos podemos transformar nuestro hogar en un espacio digital seguro.
              </h3>
              <p className="mx-auto mt-4 max-w-3xl text-base text-white/90 md:text-lg">
                Empieza hoy con pasos simples que hacen la diferencia.
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="rounded-2xl bg-[#4BAEA0] px-8 py-6 text-base text-white shadow-lg hover:bg-[#3E8E82] md:text-lg"
                  onClick={() => {
                    const el = document.getElementById("quiz");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Haz el quiz y conoce tu nivel
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
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
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-current opacity-70" aria-hidden />
      <span className="text-sm font-semibold">{label}</span>
    </motion.div>
  );
}
