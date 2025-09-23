import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

gsap.registerPlugin(ScrollTrigger);

const ScrollytellingGraphsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const chartsRef = useRef<HTMLDivElement[]>([]);

  // Dummy data for the 4 bar charts
  const chartData = [
    {
      title: "Tiempo en pantalla por edad",
      description: "Horas promedio diarias de uso de dispositivos digitales",
      data: [
        { name: "6-8 años", value: 2.5 },
        { name: "9-12 años", value: 4.2 },
        { name: "13-15 años", value: 6.8 },
        { name: "16-18 años", value: 8.1 },
      ]
    },
    {
      title: "Riesgos digitales más comunes",
      description: "Porcentaje de niños expuestos a diferentes tipos de riesgos",
      data: [
        { name: "Cyberbullying", value: 35 },
        { name: "Contenido inapropiado", value: 42 },
        { name: "Estafas online", value: 18 },
        { name: "Robo de datos", value: 28 },
      ]
    },
    {
      title: "Plataformas más utilizadas",
      description: "Porcentaje de uso entre menores de edad",
      data: [
        { name: "TikTok", value: 78 },
        { name: "Instagram", value: 65 },
        { name: "YouTube", value: 89 },
        { name: "WhatsApp", value: 72 },
      ]
    },
    {
      title: "Efectividad de medidas de seguridad",
      description: "Reducción de incidentes con controles parentales activos",
      data: [
        { name: "Filtros de contenido", value: 68 },
        { name: "Límites de tiempo", value: 45 },
        { name: "Supervisión activa", value: 82 },
        { name: "Educación digital", value: 74 },
      ]
    }
  ];

  useEffect(() => {
    const title = titleRef.current;
    const charts = chartsRef.current;

    if (!title) return;

    // Set initial states
    gsap.set(title, { y: 50, opacity: 0 });
    gsap.set(charts, { opacity: 0, scale: 0.95 });

    // Animate title
    gsap.to(title, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Individual chart animations
    charts.forEach((chart, index) => {
      if (chart) {
        gsap.to(chart, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: chart,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Main title */}
        <h2
          ref={titleRef}
          className="text-4xl lg:text-6xl font-bold text-foreground mb-16 text-center"
        >
          La puerta al mundo de tus hijos, ya no es física
        </h2>

        {/* Charts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {chartData.map((chart, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) chartsRef.current[index] = el;
              }}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {chart.title}
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                {chart.description}
              </p>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chart.data}>
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Bar 
                      dataKey="value" 
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollytellingGraphsSection;