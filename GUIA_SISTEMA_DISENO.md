# Guía de Implementación del Sistema de Diseño - Hogares Seguros

> **Para Sistemas AI**: Esta guía permite replicar el sistema de diseño de Hogares Seguros en un nuevo proyecto, manteniendo la identidad de marca y el stack tecnológico existente.

## 📋 Tabla de Contenidos

- [1. Introducción y Contexto](#1-introducción-y-contexto)
- [2. Arquitectura del Sistema de Diseño](#2-arquitectura-del-sistema-de-diseño)
- [3. Instalación y Configuración Inicial](#3-instalación-y-configuración-inicial)
- [4. Implementación Paso a Paso](#4-implementación-paso-a-paso)
- [5. Patrones de Implementación por Tipo de Página](#5-patrones-de-implementación-por-tipo-de-página)
- [6. Sistema de Colores Rotativos](#6-sistema-de-colores-rotativos)
- [7. Tipografía Responsiva](#7-tipografía-responsiva)
- [8. Accesibilidad (WCAG AA)](#8-accesibilidad-wcag-aa)
- [9. Optimización de Imágenes](#9-optimización-de-imágenes)
- [10. Animaciones y Transiciones](#10-animaciones-y-transiciones)
- [11. Modales Estandarizados](#11-modales-estandarizados)
- [12. Tooltips Educativos](#12-tooltips-educativos)
- [13. Responsive Design](#13-responsive-design)
- [14. Checklist de Verificación](#14-checklist-de-verificación)
- [15. Reglas SIEMPRE/NUNCA](#15-reglas-siempre-nunca)
- [16. Errores Comunes y Soluciones](#16-errores-comunes-y-soluciones)
- [17. Ejemplos Completos](#17-ejemplos-completos)
- [18. Recursos y Referencias](#18-recursos-y-referencias)
- [19. Glosario Técnico](#19-glosario-técnico)
- [20. Proceso de Implementación Recomendado](#20-proceso-de-implementación-recomendado)

---

## 1. Introducción y Contexto

### 🎯 Propósito del Sistema de Diseño

Este sistema de diseño está diseñado para crear experiencias visuales cohesivas y profesionales que reflejen la identidad de marca "Secure Home Quiz" / "Hogares Seguros". Su objetivo es mantener consistencia visual global mientras permite flexibilidad para diferentes tipos de páginas.

### 🤖 Para Quién Está Dirigida Esta Guía

- **Sistemas AI** que necesitan implementar interfaces de usuario
- **Desarrolladores** que trabajan en proyectos de la organización
- **Equipos de diseño** que requieren consistencia visual
- **QA/Testing** que verifican implementaciones

### 📏 Alcance y Limitaciones

**✅ Incluye:**
- Configuración completa de Tailwind CSS
- Componentes shadcn/ui personalizados
- Patrones de página específicos
- Sistema de colores rotativos
- Optimización de imágenes obligatoria
- Accesibilidad WCAG AA
- Animaciones y transiciones

**❌ No Incluye:**
- Dark mode (no soportado actualmente)
- Temas personalizados
- Componentes específicos de negocio
- Lógica de aplicación

## 2. Arquitectura del Sistema de Diseño

### 🔄 Flujo de Información

```
src/index.css (Fuente de Verdad)
    ↓
    Valores técnicos: --brand-teal-500: 200 50% 46%
    ↓
tailwind.config.ts (Referencias)
    ↓
    Exposición: "brand-teal-500": "hsl(var(--brand-teal-500))"
    ↓
Componentes (Uso)
    ↓
    Clases: className="bg-brand-teal-500"
```

### 🎨 Principio de "Single Source of Truth"

**Regla de Oro**: Para cambiar cualquier valor de diseño, editar SOLO `src/index.css`. Todos los demás archivos solo referencian estos valores.

### 📁 Responsabilidades de Cada Archivo

| Archivo | Rol | Contiene |
|---------|-----|----------|
| `src/index.css` | 🎨 Fuente de Verdad | Valores técnicos exactos (HSL, px, etc) |
| `tailwind.config.ts` | ⚙️ Configuración | Solo referencias a CSS vars |
| `src/components/ui/` | 🧩 Componentes Base | shadcn/ui personalizados |
| `src/components/` | 🎭 Componentes Especializados | Componentes específicos del proyecto |

### 🏗️ Jerarquía de Decisiones de Diseño

1. **Identidad de Marca** (colores PMS, tipografías)
2. **Tokens Técnicos** (valores HSL, espaciado)
3. **Tokens Semánticos** (primary, secondary, etc)
4. **Componentes Base** (Button, Card, Dialog)
5. **Patrones de Página** (Hero, Educativo, Interactivo)
6. **Implementación Específica** (contenido, lógica)

---

## 3. Instalación y Configuración Inicial

### 📦 Dependencias Requeridas

```bash
# Dependencias principales
npm install react@^18.0.0 react-dom@^18.0.0
npm install typescript@^5.0.0
npm install tailwindcss@^3.4.0 postcss@^8.4.0 autoprefixer@^10.4.0

# shadcn/ui y dependencias
npm install @radix-ui/react-dialog @radix-ui/react-tooltip @radix-ui/react-slot
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react
npm install framer-motion

# Herramientas de desarrollo
npm install -D @types/react @types/react-dom
npm install -D @types/node
npm install -D tailwindcss-animate
```

### 📂 Estructura de Archivos Recomendada

```
src/
├── components/
│   ├── ui/                 # Componentes shadcn/ui
│   ├── GlobalHeader.tsx    # Navegación universal
│   ├── HeroSection.tsx     # Página principal
│   ├── HeroImage.tsx       # Imágenes optimizadas
│   ├── OptimizedLogo.tsx   # Logos optimizados
│   └── TrustLogo.tsx       # Logos de partners
├── hooks/
│   ├── useScrollToTop.tsx  # Scroll automático
│   └── useMobileDetection.tsx
├── data/
│   ├── glossary.ts         # Términos educativos
│   └── learningPath.ts     # Rutas de aprendizaje
├── pages/
│   ├── Index.tsx           # Página hero
│   ├── TuFamilia.tsx       # Página educativa
│   └── Quiz.tsx            # Página interactiva
├── types/
│   ├── aprende.ts          # Tipos de contenido
│   └── quiz.ts             # Tipos de quiz
├── utils/
│   ├── utils.ts            # Utilidades generales
│   └── cardColors.ts       # Sistema de colores rotativos
├── index.css               # 🎨 FUENTE DE VERDAD
└── main.tsx

public/
├── optimized/              # Imágenes optimizadas
│   ├── hero/
│   ├── logos/
│   └── content/
└── assets/                 # Imágenes originales

scripts/
└── optimize-images.js      # Script de optimización
```

### ⚠️ Archivos Críticos que NO Deben Modificarse

- `src/index.css` - Solo editar valores, no estructura
- `tailwind.config.ts` - Solo agregar referencias, no cambiar lógica
- `scripts/optimize-images.js` - Sistema de optimización obligatorio

### 📝 Convenciones de Nomenclatura

- **CSS Variables**: `kebab-case` (`--brand-teal-500`)
- **Componentes React**: `PascalCase` (`GlobalHeader.tsx`)
- **Hooks**: `camelCase` con prefijo `use` (`useScrollToTop`)
- **Archivos de datos**: `camelCase` (`glossary.ts`)
- **Clases Tailwind**: `kebab-case` (`bg-brand-teal-500`)

---

## 4. Implementación Paso a Paso

### 🎨 Fase 1: Fundamentos CSS

#### Crear `src/index.css` con Tokens Completos

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* ========================================
       🎨 PALETA DE COLORES DE MARCA
       ========================================
       Fuente de verdad para todos los colores del proyecto.
    */
    --brand-ink-900: 195 100% 11%; /* #002B36 */
    --brand-ink-800: 204 100% 17%; /* #003556 */
    --brand-teal-500: 200 50% 46%; /* #3994B2 */
    --brand-olive-500: 145 18% 38%; /* #576D5B */
    --brand-mint-200: 162 56% 78%; /* #B0E0D6 */
    --neutral-100: 120 2% 84%; /* #D5D6D5 */
    --white: 0 0% 100%; /* #FFFFFF */

    /* ========================================
       🔗 MAPEO SEMÁNTICO DE COLORES
       ========================================
    */
    --primary: var(--brand-teal-500);
    --primary-foreground: var(--white);
    --primary-hover: var(--brand-ink-800);

    --background: var(--white);
    --background-subtle: var(--brand-mint-200);
    --foreground: var(--brand-ink-900);

    --secondary: var(--neutral-100);
    --secondary-foreground: var(--brand-ink-800);

    --accent: var(--brand-mint-200);
    --accent-foreground: var(--brand-ink-800);

    /* ========================================
       📏 TOKENS DE ESPACIADO
       ========================================
    */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-6: 24px;
    --space-8: 32px;

    /* ========================================
       🔄 TOKENS DE RADIUS
       ========================================
    */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius: var(--radius-md);

    /* ========================================
       🌈 SOMBRAS Y GRADIENTES
       ========================================
    */
    --shadow-soft: 0 4px 16px rgba(0,0,0,0.08);
    --shadow-cta: 0 8px 30px -8px rgba(57, 148, 178, 0.3);
    
    --gradient-subtle: linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background-subtle)) 100%);
    --gradient-warm: linear-gradient(135deg, hsl(var(--background-subtle)) 0%, hsl(var(--accent)) 100%);

    /* Transitions */
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    /* Typography tokens */
    --lh-heading-1: 1.1;
    --lh-heading-2: 1.2;
    --lh-heading-3: 1.3;
    --lh-body: 1.6;
    --lh-small: 1.5;
    
    --ls-tight: -0.02em;
    --ls-normal: 0;
    --ls-wide: 0.05em;
  }
}

@layer utilities {
  /* Transición suave estándar */
  .transition-smooth {
    transition: var(--transition-smooth);
  }
  
  /* Focus visible consistente */
  .focus-visible-brand {
    @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500 focus-visible:ring-offset-2;
  }

  /* Typography utilities */
  .leading-heading-1 { line-height: var(--lh-heading-1); }
  .leading-heading-2 { line-height: var(--lh-heading-2); }
  .leading-heading-3 { line-height: var(--lh-heading-3); }
  .leading-body { line-height: var(--lh-body); }
  .leading-small { line-height: var(--lh-small); }
  
  .tracking-tight { letter-spacing: var(--ls-tight); }
  .tracking-wide { letter-spacing: var(--ls-wide); }
}

/* Respetar preferencias de movimiento reducido */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### ⚙️ Fase 2: Configuración de Tailwind

#### Crear `tailwind.config.ts` Canónico

```typescript
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate"; // ✅ Import directo, NO import()

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  safelist: [
    {
      pattern: /^(bg|text|border|ring|fill|stroke)-(brand-(teal|olive|mint|ink)-(200|500|800|900))(\/\d+)?$/,
      variants: ['hover', 'focus', 'focus-visible', 'active', 'group-hover', 'sm', 'md', 'lg']
    }
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors (tripletas HSL)
        "brand-ink-900": "hsl(var(--brand-ink-900))",
        "brand-ink-800": "hsl(var(--brand-ink-800))",
        "brand-teal-500": "hsl(var(--brand-teal-500))",
        "brand-olive-500": "hsl(var(--brand-olive-500))",
        "brand-mint-200": "hsl(var(--brand-mint-200))",
        "neutral-100": "hsl(var(--neutral-100))",
        
        // System colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        // ... más colores del sistema
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)', 
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        DEFAULT: 'var(--radius)',
      },
      spacing: {
        '1': 'var(--space-1)',
        '2': 'var(--space-2)', 
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '6': 'var(--space-6)',
        '8': 'var(--space-8)',
      },
      boxShadow: {
        "soft": "var(--shadow-soft)",
        "cta": "var(--shadow-cta)",
      },
      backgroundImage: {
        "gradient-subtle": "var(--gradient-subtle)",
        "gradient-warm": "var(--gradient-warm)",
      },
      fontFamily: {
        "heading": ["Brandon Grotesque", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        "body": ["Uniform", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [animate], // ✅ Referencia directa, NO require()
} satisfies Config;
```

#### ⚠️ Puntos Críticos de la Configuración

1. **Plugin Tailwind**: `import animate from "..."` NO `import("...")`
2. **Safelist**: Protege colores rotativos dinámicos
3. **Colors**: `hsl(var(--color))` CON hsl(), tokens SIN hsl()
4. **Shadows**: RGBA directo, NO `hsl(var(...))`
5. **Spacing**: Solo 1,2,3,4,6,8 (no 5 ni 10)

### 🧩 Fase 3: Componentes Base shadcn/ui

#### Instalar Componentes Necesarios

```bash
# Instalar shadcn/ui CLI
npx shadcn-ui@latest init

# Instalar componentes específicos
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add tooltip
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add separator
```

#### Personalizar Button con Variante `primary-brand`

```typescript
// src/components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // ✅ Nueva variante primary-brand
        "primary-brand": "bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-8 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### 🎭 Fase 4: Componentes Especializados

#### Hook: Auto-scroll al inicio de página

```typescript
// src/hooks/useScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
```

#### Componente: GlobalHeader

```typescript
// src/components/GlobalHeader.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import OptimizedLogo from "@/components/OptimizedLogo";

export default function GlobalHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <OptimizedLogo className="h-8 w-auto" alt="Hogares Seguros" priority={true} />
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/aprende" className="transition-colors hover:text-primary">
              Aprende
            </Link>
            <Link to="/quiz" className="transition-colors hover:text-primary">
              Quiz
            </Link>
            <Link to="/recursos" className="transition-colors hover:text-primary">
              Recursos
            </Link>
          </nav>
          
          <Button asChild variant="primary-brand">
            <Link to="/quiz">
              Comenzar Quiz
            </Link>
          </Button>
        </div>
      </div>
    </header>
```

---

## 5. Patrones de Implementación por Tipo de Página

### 📚 Páginas de Contenido Educativo

**Aplicable en**: `/aprende/*`, `/recursos`, `/ayuda`

#### Estructura Completa de Ejemplo

```jsx
import GlobalHeader from "@/components/GlobalHeader";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { motion } from "framer-motion";
import { Shield, Info, AlertCircle, CheckCircle } from "lucide-react";

const EducativaPage = () => {
  useScrollToTop();
  
  return (
    <>
      <GlobalHeader />
      
      <div className="min-h-screen bg-gradient-subtle">
        {/* Elementos decorativos de fondo - APLICABLE en páginas de contenido educativo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-mint-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-olive-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Header Principal - APLICABLE en páginas de contenido educativo */}
        <div className="relative bg-gradient-to-br from-white via-brand-mint-200/20 to-white border-b">
          <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Logo circular con gradiente */}
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
                  <Shield className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              
              {/* Título principal */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink-900 mb-4 sm:mb-6">
                Título Principal de la Página
              </h1>
              
              {/* Subtítulo */}
              <p className="font-body text-lg sm:text-xl md:text-2xl text-brand-olive-500 mb-6 sm:mb-8 px-4">
                Subtítulo descriptivo que explica el contenido
              </p>
              
              {/* Frase destacada */}
              <div className="bg-gradient-to-r from-brand-mint-200/60 to-brand-teal-500/10 border border-brand-mint-200/50 rounded-xl p-6 sm:p-8 mx-4 sm:mx-0 shadow-soft">
                <div className="flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-brand-teal-500 mr-2" />
                  <span className="font-heading text-sm font-semibold text-brand-teal-500 uppercase tracking-wide">
                    Etiqueta Clave
                  </span>
                </div>
                <p className="font-body text-base sm:text-lg text-brand-ink-800 font-medium italic">
                  "Frase inspiradora o mensaje clave del contenido"
                </p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="relative container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Sección de Introducción */}
            <motion.div 
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-brand-olive-500 to-brand-teal-500 rounded-full">
                    <Info className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-ink-900 mb-2">
                  ¿Por qué es importante este tema?
                </h2>
                <p className="font-body text-sm text-brand-olive-500">
                  Subtítulo explicativo de la sección
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white rounded-xl shadow-soft p-6 sm:p-8 lg:p-10 border border-brand-mint-200/30">
                <div className="max-w-4xl mx-auto">
                  
                  {/* Grid de 2 columnas con puntos clave */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-brand-teal-500 rounded-full mr-3"></div>
                        Punto Clave 1
                      </h3>
                      <p className="font-body text-base text-brand-ink-800 leading-relaxed">
                        Descripción del primer punto clave que explica la importancia.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-brand-ink-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-brand-mint-200 rounded-full mr-3"></div>
                        Punto Clave 2
                      </h3>
                      <p className="font-body text-base text-brand-ink-800 leading-relaxed">
                        Descripción del segundo punto clave que refuerza el mensaje.
                      </p>
                    </div>
                  </div>
                  
                  {/* Dato importante destacado */}
                  <div className="bg-gradient-to-r from-brand-teal-500/10 to-brand-mint-200/20 border border-brand-teal-500/20 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-teal-500/20 rounded-full flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-brand-teal-500" />
                      </div>
                      <div>
                        <h4 className="font-heading text-base font-semibold text-brand-ink-900 mb-2">
                          Dato Importante
                        </h4>
                        <p className="font-body text-sm text-brand-ink-800 leading-relaxed">
                          Estadística relevante o información destacada que capta la atención.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default EducativaPage;
```

### 🏠 Páginas Hero

**Aplicable en**: `/` (Index)

```jsx
import GlobalHeader from "@/components/GlobalHeader";
import HeroSection from "@/components/HeroSection";

const IndexPage = () => {
  return (
    <>
      <GlobalHeader />
      <main id="main-content">
        <HeroSection />
      </main>
    </>
  );
};

export default IndexPage;
```

### 🎮 Páginas Interactivas

**Aplicable en**: `/quiz`

```jsx
import GlobalHeader from "@/components/GlobalHeader";
import AppShellCard from "@/components/quiz/AppShellCard";

const QuizPage = () => {
  return (
    <>
      <GlobalHeader />
      <main id="main-content">
        <AppShellCard>
          {/* Pasos del quiz */}
        </AppShellCard>
      </main>
    </>
  );
};

export default QuizPage;
```

---

## 6. Sistema de Colores Rotativos

### 🎨 Implementación en Cards

#### Definición de Arrays de Colores

```typescript
// src/utils/cardColors.ts
export const cardColors = [
  "border-brand-teal-500/30 bg-brand-teal-500/10",    // Card 1, 4, 7...
  "border-brand-mint-200/40 bg-brand-mint-200/20",    // Card 2, 5, 8...
  "border-brand-olive-500/30 bg-brand-olive-500/10"   // Card 3, 6, 9...
];

export const iconColors = [
  "bg-brand-teal-500/20 text-brand-teal-500",
  "bg-brand-mint-200/60 text-brand-ink-800",  // /60 para alto contraste
  "bg-brand-olive-500/20 text-brand-olive-500"
];

export const checkmarkColors = [
  "text-brand-teal-500",
  "text-brand-ink-800",
  "text-brand-olive-500"
];
```

#### Uso en Grid de Cards

```jsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { cardColors, iconColors, checkmarkColors } from "@/utils/cardColors";

const CardGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {items.map((item, index) => {
        const colorIndex = index % 3;
        const cardColor = cardColors[colorIndex];
        const iconColor = iconColors[colorIndex];
        const checkColor = checkmarkColors[colorIndex];
        
        return (
          <Card key={index} className={`${cardColor} border hover:shadow-soft transition-smooth hover:scale-105 h-full`}>
            <CardHeader className="text-center p-4 sm:p-6">
              {/* Logo circular con icono */}
              <div className={`mx-auto mb-3 sm:mb-4 p-3 sm:p-4 ${iconColor} rounded-full w-fit shadow-soft`}>
                <item.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              
              <CardTitle className="font-heading text-lg sm:text-xl text-brand-ink-900 mb-2">
                {item.title}
              </CardTitle>
              
              <CardDescription className="font-body text-sm sm:text-base text-brand-olive-500">
                {item.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-4 sm:p-6 pt-0">
              {/* Lista de features con checkmarks */}
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-xs sm:text-sm text-brand-ink-800">
                    <CheckCircle className={`w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0 ${checkColor}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Botón de acción */}
              <Button className="w-full text-sm sm:text-base shadow-soft">
                Ver más
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
```

### 🔢 Iconos Circulares con Contraste WCAG AA

```jsx
// Ejemplo de números circulares para puntos clave
const KeyPointsSection = ({ keyPoints }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {keyPoints.map((point, index) => {
        const colorIndex = index % 3;
        const numberBg = [
          "bg-gradient-to-br from-brand-teal-500/20 to-brand-teal-500/10",
          "bg-gradient-to-br from-brand-mint-200/60 to-brand-mint-200/40",
          "bg-gradient-to-br from-brand-olive-500/20 to-brand-olive-500/10"
        ][colorIndex];
        
        const numberColor = [
          "text-brand-teal-500",
          "text-brand-ink-800",
          "text-brand-olive-500"
        ][colorIndex];
        
        return (
          <div key={index} className="text-center group">
            {/* Número circular con hover */}
            <div className={`${numberBg} rounded-full p-4 sm:p-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth`}>
              <span className={`font-heading text-xl sm:text-2xl font-bold ${numberColor}`}>
                {index + 1}
              </span>
            </div>
            
            <h4 className="font-heading text-base sm:text-lg font-semibold text-brand-ink-900 mb-3">
              {point.title}
            </h4>
            
            <p className="font-body text-sm sm:text-base text-brand-olive-500 leading-relaxed">
              {point.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
```

---

## 7. Tipografía Responsiva

### 📝 Escala Tipográfica Completa

| Elemento | Clase Tailwind | Tamaños Responsivos | Uso |
|----------|----------------|---------------------|-----|
| Hero | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` | 48px → 96px | Títulos principales hero |
| Hero (alt) | `text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl` | 32px → 96px | Títulos hero alternativos |
| H1 | `text-2xl sm:text-3xl md:text-4xl lg:text-5xl` | 32px → 80px | Títulos de página |
| H2 | `text-xl sm:text-2xl md:text-3xl lg:text-4xl` | 24px → 56px | Títulos de sección |
| H3 | `text-lg sm:text-xl md:text-2xl lg:text-3xl` | 20px → 48px | Subtítulos |
| Body | `text-base sm:text-lg md:text-xl lg:text-2xl` | 16px → 32px | Párrafos principales |
| Body Small | `text-sm sm:text-base md:text-lg lg:text-xl` | 14px → 24px | Texto secundario |
| Caption | `text-xs sm:text-sm md:text-base lg:text-lg` | 12px → 20px | Etiquetas, captions |

### 🎨 Clases de Tipografía Estándar

```css
/* Para títulos */
.font-heading { 
  font-family: "Brandon Grotesque", "Inter", "ui-sans-serif", "system-ui", "sans-serif"; 
}

/* Para texto del cuerpo */
.font-body { 
  font-family: "Uniform", "Inter", "ui-sans-serif", "system-ui", "sans-serif"; 
}

/* Colores de texto */
.text-brand-ink-900   /* Texto principal oscuro */
.text-brand-ink-800   /* Texto sobre acentos */
.text-brand-olive-500 /* Texto secundario */
.text-brand-teal-500  /* Enlaces y acentos */
```

### 🔤 Cargar Fuentes Custom

#### En `index.html`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
```

#### En `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

/* Si tienes fuentes custom locales */
@font-face {
  font-family: 'Brandon Grotesque';
  src: url('/fonts/BrandonGrotesque-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Uniform';
  src: url('/fonts/Uniform-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

---

## 8. Accesibilidad (WCAG AA)

### 🎨 Contraste de Colores

#### Tabla Completa de Combinaciones Aprobadas

| Texto | Fondo | ¿Pasa AA? | Condiciones | Uso Recomendado |
|-------|-------|-----------|-------------|-----------------|
| `brand-ink-900` (#002B36) | `white` | ✅ SÍ | Cualquier tamaño | Títulos, párrafos principales |
| `brand-ink-800` (#003556) | `white` | ✅ SÍ | Cualquier tamaño | Botones, CTAs |
| `brand-olive-500` (#576D5B) | `white` | ✅ SÍ | Cualquier tamaño | Texto secundario |
| `brand-teal-500` (#3994B2) | `white` | ⚠️ Solo texto grande | Solo ≥18px + bold (3.90:1) | Enlaces grandes, NO texto normal |
| `brand-mint-200` (#B0E0D6) | `white` | ❌ NO | NUNCA para texto (1.41:1) | Solo fondos |
| `brand-ink-800` | `brand-mint-200` | ✅ SÍ | Texto normal (9.15:1) | Texto sobre fondos acentuados |
| `brand-teal-500` | `brand-mint-200` | ❌ NO | NUNCA (2.76:1) | ❌ Evitar |
| `brand-olive-500` | `brand-mint-200` | ⚠️ Solo texto grande | Solo ≥18px + bold (3.82:1) | ⚠️ Usar con precaución |
| `white` | `brand-ink-800` | ✅ SÍ | Cualquier tamaño | Botones, CTAs invertidos |

#### Combinaciones Prohibidas

- ❌ `brand-teal-500` sobre `brand-mint-200` (2.76:1 - insuficiente)
- ❌ `brand-teal-500` en texto normal sobre white (3.90:1 - usar solo en títulos ≥18px bold)
- ❌ `brand-mint-200` para cualquier texto (1.41:1 - siempre es fondo únicamente)
- ⚠️ `brand-olive-500` sobre `brand-mint-200` (3.82:1 - usar solo en texto grande)

#### Cómo Verificar Contraste

1. **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
2. **Chrome DevTools**: Inspeccionar elemento > Contrast ratio en color picker
3. **Regla mínima**: 4.5:1 para texto normal, 3:1 para texto grande (≥18px)

### ⌨️ Navegación por Teclado

```jsx
{/* Elementos interactivos deben ser focusables */}
<button className="focus:ring-2 focus:ring-brand-teal-500 focus:ring-offset-2">
  Acción
</button>

{/* Skip links para contenido principal */}
<a href="#main-content" className="sr-only focus:not-sr-only">
  Saltar al contenido principal
</a>
```

### 🏷️ ARIA Labels

```jsx
{/* Iconos sin texto visible */}
<button aria-label="Cerrar modal">
  <X className="h-6 w-6" />
</button>

{/* Elementos decorativos */}
<div aria-hidden="true">
  {/* Círculos decorativos de fondo */}
</div>
```

### 👤 Preferencias del Usuario

```css
/* Respetar preferencia de movimiento reducido */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Optimización de Imágenes

### 🖼️ Sistema Obligatorio

**Regla de Oro**: TODAS las imágenes deben ser optimizadas antes de usar en producción. No se permite usar imágenes sin optimizar.

#### Proceso de Optimización Obligatorio

```bash
# 1. Colocar imagen original en src/assets/
# 2. Ejecutar script de optimización
npm run optimize-images

# 3. Usar componentes optimizados en el código
```

#### Componentes de Imagen Optimizados

**Para imágenes del HeroSection**:
```jsx
import HeroImage from "@/components/HeroImage";

<HeroImage
  src="nombre-imagen.png"
  alt="Descripción de la imagen"
  className="w-full h-full object-cover"
  priority={true} // Solo para imágenes críticas
/>
```

**Para logos principales**:
```jsx
import OptimizedLogo from "@/components/OptimizedLogo";

<OptimizedLogo
  className="h-8 w-auto"
  alt="Nombre del logo"
  priority={true} // Solo para logos críticos
/>
```

**Para logos de confianza/partners**:
```jsx
import TrustLogo from "@/components/TrustLogo";

<TrustLogo
  src="logo-partner.png"
  alt="Nombre del partner"
  className="h-8 sm:h-10 w-auto"
  priority={false} // Lazy loading por defecto
/>
```

**Para imágenes genéricas**:
```jsx
import OptimizedImage from "@/components/OptimizedImage";

<OptimizedImage
  src="imagen-generica.png"
  alt="Descripción"
  className="w-full h-auto"
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={false}
/>
```

#### Configuración de Optimización por Tipo

| Tipo | Formato | Tamaños | Calidad | Ubicación |
|------|---------|---------|---------|-----------|
| Favicons | PNG optimizado | 16w, 32w, 48w, 64w, 96w, 128w, 192w, 256w, 512w | Máxima compresión (nivel 9) | `/public/optimized/favicon/` |
| HeroSection | WebP con fallback PNG | 400w, 600w, 800w, 1200w | 85% | `/public/optimized/hero/` |
| Logos y Marcas | WebP con fallback PNG | 100w, 200w, 400w | 90% | `/public/optimized/logos/` |
| Contenido | WebP con fallback PNG | 300w, 600w, 900w, 1200w | 80-85% | `/public/optimized/content/` |

#### Reglas de Implementación

##### ✅ SIEMPRE Hacer

1. **Optimizar TODAS las imágenes** antes de usar en producción
2. **Usar componentes optimizados** (HeroImage, OptimizedLogo, TrustLogo, OptimizedImage)
3. **Incluir alt text descriptivo** en todas las imágenes
4. **Usar priority={true}** solo para imágenes críticas (hero, logos principales)
5. **Definir sizes apropiados** para responsive images
6. **Ejecutar npm run optimize-images** después de agregar nuevas imágenes
7. **Verificar que se generen todos los tamaños** en `/public/optimized/`

##### ❌ NUNCA Hacer

1. ❌ Usar `<img>` HTML directamente sin optimización
2. ❌ Importar imágenes grandes desde `src/assets/` sin optimizar
3. ❌ Usar `priority={true}` en imágenes no críticas
4. ❌ Omitir alt text en imágenes
5. ❌ Usar imágenes sin fallback WebP/PNG
6. ❌ Preload todas las imágenes (solo críticas)
7. ❌ Usar imágenes sin lazy loading en contenido no crítico

#### Métricas de Rendimiento Esperadas

| Tipo | Antes | Después |
|------|-------|---------|
| Favicon | 1MB+ (inaceptable) | <10KB (instantáneo) |
| Imagen Hero | 1.5MB+ (lenta) | <100KB (rápida) |
| Logo | 1MB+ (pesado) | <50KB (ligero) |

---

## 10. Animaciones y Transiciones

### 🎭 Transiciones Estándar

```css
/* Transición suave para la mayoría de elementos */
.transition-smooth { 
  @apply transition-all duration-300 ease-in-out; 
}

/* Transición con rebote para elementos especiales */
.transition-bounce { 
  @apply transition-all duration-300 cubic-bezier(0.68, -0.55, 0.265, 1.55); 
}
```

### 🎬 Estados de Hover

```css
/* Hover para cards */
.hover:scale-105 transition-smooth

/* Hover para números circulares */
.group-hover:scale-110 transition-smooth

/* Hover para botones */
.hover:shadow-lg transition-smooth
```

### ⏱️ Animation Delays (para elementos decorativos)

```css
/* Delays para círculos de fondo animados */
.delay-500   /* 500ms animation delay */
.delay-1000  /* 1000ms animation delay */
```

**⚠️ IMPORTANTE**: Los delays de animación son clases **nativas de Tailwind**, NO tokens custom.

**Clases disponibles por defecto**:
- `delay-75` (75ms)
- `delay-100` (100ms)
- `delay-150` (150ms)
- `delay-200` (200ms)
- `delay-300` (300ms)
- `delay-500` (500ms) ← Usado en elementos decorativos
- `delay-700` (700ms)
- `delay-1000` (1000ms) ← Usado en elementos decorativos

### 🎪 Framer Motion - Animaciones Escalonadas

**Patrón dinámico con índice** (recomendado para listas):

```jsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1  // Stagger: 0s, 0.1s, 0.2s, 0.3s...
    }}
  >
    {/* Contenido */}
  </motion.div>
))}
```

**Patrón fijo** (para elementos conocidos):
```jsx
<motion.div transition={{ duration: 0.6, delay: 0.1 }}>Item 1</motion.div>
<motion.div transition={{ duration: 0.6, delay: 0.2 }}>Item 2</motion.div>
<motion.div transition={{ duration: 0.6, delay: 0.3 }}>Item 3</motion.div>
```

---

## 11. Modales Estandarizados

### 🎭 Patrón Base para Todos los Modales

```jsx
<Dialog open={isOpen} onOpenChange={onClose}>
  {/* DialogContent usa clases base, solo agregar estilos específicos */}
  <DialogContent className="bg-gradient-to-br from-white via-brand-mint-200/5 to-white border-brand-mint-200/30 shadow-soft">
    
    {/* Header con diseño sofisticado */}
    <DialogHeader className="relative bg-gradient-to-br from-white via-brand-mint-200/20 to-white border-b border-brand-mint-200/30 -m-6 mb-6 p-6 sm:p-8">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 left-4 w-16 h-16 bg-brand-teal-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-20 h-20 bg-brand-mint-200/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          {/* Logo circular con gradiente */}
          <div className="flex justify-center sm:justify-start">
            <div className="p-3 bg-gradient-to-r from-brand-teal-500 to-primary rounded-full shadow-soft">
              <IconComponent className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <DialogTitle className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-ink-900 leading-tight mb-3">
              Título del Modal
            </DialogTitle>
            
            {/* Badges opcionales */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <Badge variant="outline" className="text-xs sm:text-sm w-fit px-3 py-1">
                Información relevante
              </Badge>
            </div>
            
            {/* Descripción */}
            <p className="font-body text-sm sm:text-base md:text-lg text-brand-olive-500 leading-relaxed">
              Descripción del contenido del modal
            </p>
          </div>
        </div>
      </div>
    </DialogHeader>

    {/* Contenido del modal con animaciones */}
    <div className="space-y-6 sm:space-y-8">
      {/* Tu contenido aquí */}
    </div>

    <Separator className="my-6 sm:my-8 border-brand-mint-200/30" />

    {/* Botón de cierre */}
    <div className="flex justify-center px-4 sm:px-0">
      <Button 
        onClick={onClose} 
        className="bg-brand-ink-800 hover:bg-brand-ink-900 text-white px-8 py-3 text-sm sm:text-base font-heading font-semibold shadow-soft hover:shadow-lg transition-smooth"
      >
        Cerrar
      </Button>
    </div>
  </DialogContent>
</Dialog>
```

### ⚠️ Características Obligatorias de Modales

✅ **Header sofisticado**: Gradiente sutil + elementos decorativos animados  
✅ **Logo circular**: Icono principal dentro de círculo con gradiente  
✅ **Elementos decorativos**: Círculos animados con blur en el fondo  
✅ **Tipografía consistente**: `font-heading` y `font-body`  
✅ **Responsividad completa**: Anchos y padding adaptables  
✅ **Animaciones suaves**: `animate-pulse` con delays escalonados

---

## 15. Reglas SIEMPRE/NUNCA

### ✅ SIEMPRE Hacer

1. **Usar elementos decorativos de fondo** en páginas de contenido educativo (/aprende, /recursos, /ayuda)
2. **Incluir logo circular con gradiente** en headers de páginas de contenido educativo
3. **Implementar frase destacada** con icono y etiqueta en páginas de contenido educativo
4. **Usar contraste mejorado** para iconos y números (WCAG AA) - UNIVERSAL
5. **Aplicar animaciones escalonadas** en grids - UNIVERSAL
6. **Usar hover effects** en elementos interactivos - UNIVERSAL
7. **Implementar responsividad completa** con breakpoints - UNIVERSAL
8. **Mantener consistencia visual** entre secciones - UNIVERSAL
9. **Rotar colores de cards** para evitar monotonía - UNIVERSAL
10. **Usar HeroSection** en página principal (/)
11. **Usar AppShellCard** en página de quiz (/quiz)
12. **Mantener diseño consistente** en páginas especiales (/about) sin GlobalHeader
13. **Alcanzar el nivel de sofisticación** documentado en este sistema de diseño
14. **Optimizar TODAS las imágenes** antes de usar en producción - UNIVERSAL
15. **Usar componentes optimizados** (HeroImage, OptimizedLogo, TrustLogo, OptimizedImage) - UNIVERSAL
16. **Ejecutar npm run optimize-images** después de agregar nuevas imágenes - UNIVERSAL

### ❌ NUNCA Hacer

1. ❌ Usar colores genéricos (red, green, blue) en lugar de colores de marca
2. ❌ Crear elementos con contraste insuficiente (<4.5:1)
3. ❌ Ignorar la responsividad en móviles
4. ❌ Omitir animaciones y transiciones
5. ❌ Usar un solo color para todas las cards
6. ❌ Sobrescribir clases de `DialogContent` base para modales
7. ❌ Crear tap targets menores a 44px
8. ❌ Olvidar ARIA labels en iconos sin texto
9. ❌ Usar `<img>` HTML directamente sin optimización - UNIVERSAL
10. ❌ Importar imágenes grandes desde `src/assets/` sin optimizar - UNIVERSAL
11. ❌ Usar `priority={true}` en imágenes no críticas - UNIVERSAL
12. ❌ Omitir alt text en imágenes - UNIVERSAL
13. ❌ Usar imágenes sin fallback WebP/PNG - UNIVERSAL
14. ❌ Preload todas las imágenes (solo críticas) - UNIVERSAL

---

## 14. Checklist de Verificación

### ✅ Componentes Universales (Aplican en TODO el proyecto)

#### Fundamentos
- [ ] Paleta de colores de marca implementada
- [ ] Tipografía responsiva aplicada
- [ ] Espaciado consistente utilizado
- [ ] Border radius y sombras estandarizadas

#### Componentes Base
- [ ] Botones con variantes primary-brand, outline, asChild
- [ ] Cards con sistema de colores rotativos
- [ ] Modales con sistema estandarizado
- [ ] Contraste WCAG AA en todos los elementos
- [ ] Imágenes optimizadas con componentes especializados
- [ ] Lazy loading implementado en imágenes no críticas
- [ ] Preload hints para imágenes críticas

### ✅ Patrones de Página por Tipo

#### 📚 Páginas de Contenido Educativo (/aprende, /recursos, /ayuda)
- [ ] Elementos decorativos de fondo animados (3 círculos con blur)
- [ ] Header con gradiente sutil y logo circular
- [ ] Frase destacada con icono y etiqueta
- [ ] Sección de introducción con layout de 2 columnas
- [ ] Headers de sección con iconos circulares
- [ ] Sección de puntos clave con números circulares

#### 🏠 Páginas Hero (/)
- [ ] HeroSection con elementos decorativos
- [ ] Responsividad completa en Hero
- [ ] Accesibilidad en elementos interactivos
- [ ] Consistencia visual con sistema de diseño

#### 🎮 Páginas Interactivas (/quiz)
- [ ] AppShellCard con sistema de diseño
- [ ] StepHeader consistente
- [ ] OptionGrid responsivo
- [ ] Accesibilidad WCAG AA en pasos

#### ℹ️ Páginas Especiales (/about)
- [ ] Diseño consistente sin GlobalHeader
- [ ] Responsividad completa
- [ ] Accesibilidad básica
- [ ] Consistencia visual con sistema de diseño

#### ⚠️ Páginas de Error (/*)
- [ ] Diseño consistente
- [ ] Mensaje claro
- [ ] Navegación de retorno
- [ ] Accesibilidad básica

---

## 16. Errores Comunes y Soluciones

### ⚙️ Configuración

#### Plugin Tailwind (import vs require)
```typescript
// ✅ CORRECTO
import animate from "tailwindcss-animate";

// ❌ INCORRECTO
const animate = require("tailwindcss-animate");
```

#### Safelist Patterns
```typescript
// ✅ CORRECTO - Protege colores rotativos dinámicos
safelist: [
  {
    pattern: /^(bg|text|border|ring|fill|stroke)-(brand-(teal|olive|mint|ink)-(200|500|800|900))(\/\d+)?$/,
    variants: ['hover', 'focus', 'focus-visible', 'active', 'group-hover', 'sm', 'md', 'lg']
  }
]

// ❌ INCORRECTO - Sin safelist para clases dinámicas
safelist: [] // Las clases dinámicas se perderán en producción
```

#### Custom Properties (hsl() vs sin hsl())
```css
/* ✅ CORRECTO - Tokens SIN hsl() */
--brand-teal-500: 200 50% 46%;

/* ❌ INCORRECTO - Tokens CON hsl() */
--brand-teal-500: hsl(200, 50%, 46%);
```

#### Shadows (RGBA vs HSL)
```css
/* ✅ CORRECTO - RGBA directo */
--shadow-soft: 0 4px 16px rgba(0,0,0,0.08);

/* ❌ INCORRECTO - HSL con var() */
--shadow-soft: 0 4px 16px hsl(var(--brand-ink-900) / 0.08);
```

### 🎨 Implementación

#### Colores Rotativos sin Safelist
```jsx
// ❌ PROBLEMA - Clases dinámicas se pierden en producción
const colorIndex = index % 3;
const colors = [
  "bg-brand-teal-500/10",
  "bg-brand-mint-200/20", 
  "bg-brand-olive-500/10"
];
<div className={colors[colorIndex]}>

// ✅ SOLUCIÓN - Usar safelist + clases dinámicas
// El safelist protege estas clases automáticamente
```

#### Opacidades Incorrectas
```jsx
// ❌ PROBLEMA - Contraste insuficiente
<div className="bg-brand-mint-200/30 text-brand-teal-500">

// ✅ SOLUCIÓN - Usar /60 para alto contraste
<div className="bg-brand-mint-200/60 text-brand-ink-800">
```

#### Contraste Insuficiente
```jsx
// ❌ PROBLEMA - No pasa WCAG AA
<p className="text-brand-teal-500">Texto normal</p>

// ✅ SOLUCIÓN - Solo para títulos grandes
<h1 className="text-brand-teal-500 text-xl font-bold">Título grande</h1>
```

### 🖼️ Imágenes sin Optimizar
```jsx
// ❌ PROBLEMA - Imagen sin optimizar
<img src="/assets/imagen.png" alt="Descripción" />

// ✅ SOLUCIÓN - Usar componente optimizado
<OptimizedImage 
  src="imagen.png" 
  alt="Descripción"
  className="w-full h-auto"
  priority={false}
/>
```

---

## 20. Proceso de Implementación Recomendado

### 📋 Orden de Pasos

1. **Configurar dependencias** (2-4 horas)
   - Instalar React, TypeScript, Tailwind CSS
   - Configurar shadcn/ui
   - Instalar Framer Motion, Lucide React

2. **Crear estructura de archivos** (1 hora)
   - Establecer carpetas src/
   - Crear archivos de configuración base

3. **Implementar index.css** (1-2 horas)
   - Copiar tokens completos de marca
   - Configurar variables CSS
   - Agregar utilities personalizadas

4. **Configurar tailwind.config.ts** (1 hora)
   - Referenciar variables CSS
   - Configurar safelist
   - Extender theme correctamente

5. **Instalar componentes shadcn/ui** (2-3 horas)
   - Button, Card, Dialog, Tooltip
   - Personalizar con variante primary-brand
   - Configurar sistema de colores rotativos

6. **Crear componentes especializados** (2-3 horas)
   - GlobalHeader
   - HeroSection
   - Componentes de optimización de imágenes
   - Hooks personalizados

7. **Implementar primera página** (3-4 horas)
   - Elegir página de contenido educativo
   - Aplicar todos los patrones
   - Verificar responsividad

8. **Verificar accesibilidad** (1-2 horas)
   - Contraste WCAG AA
   - Navegación por teclado
   - ARIA labels

9. **Optimizar imágenes** (1-2 horas)
   - Ejecutar script de optimización
   - Implementar componentes optimizados
   - Configurar lazy loading

10. **Testing completo** (2-3 horas)
    - Verificar en diferentes dispositivos
    - Probar todas las interacciones
    - Validar rendimiento

### ⏱️ Tiempo Estimado Total: ~15-20 horas

### 🎯 Objetivos de Verificación

Al finalizar la implementación, el proyecto debe:

1. ✅ **Replicar la identidad visual** del proyecto original
2. ✅ **Cumplir con WCAG AA** en todos los elementos
3. ✅ **Funcionar perfectamente** en móviles y desktop
4. ✅ **Cargar rápidamente** con imágenes optimizadas
5. ✅ **Mantener consistencia** en todos los componentes
6. ✅ **Soportar animaciones** suaves y responsivas
7. ✅ **Permitir escalabilidad** para futuras páginas

### 🚀 Próximos Pasos Naturales

Después de completar la implementación base:

1. **Agregar más páginas** usando los patrones establecidos
2. **Implementar funcionalidad específica** del negocio
3. **Optimizar rendimiento** con análisis detallado
4. **Agregar tests** para componentes críticos
5. **Documentar componentes** específicos del proyecto

---

## 📚 Recursos y Referencias

### 🔗 Enlaces Externos

- **Lucide Icons**: https://lucide.dev/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/
- **Framer Motion**: https://www.framer.com/motion/
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/

### 📁 Archivos de Referencia en el Proyecto Original

#### Páginas por Tipo
- **Página de contenido educativo**: `src/pages/TuFamilia.tsx`
- **Página hero**: `src/pages/Index.tsx`
- **Página interactiva**: `src/pages/Quiz.tsx`
- **Página especial**: `src/pages/About.tsx`

#### Componentes Universales
- **Componente modal**: `src/components/ui/dialog.tsx`
- **Componente card**: `src/components/ui/card.tsx`
- **Componente botón**: `src/components/ui/button.tsx`

#### Configuración
- **Estilos globales**: `src/index.css`
- **Configuración Tailwind**: `tailwind.config.ts`

---

## 🎯 Conclusión

Esta guía proporciona todo lo necesario para replicar el sistema de diseño de Hogares Seguros en un nuevo proyecto. Al seguir estos patrones y reglas, cualquier sistema AI puede crear interfaces que mantengan la identidad de marca, cumplan con estándares de accesibilidad y ofrezcan una experiencia visual sofisticada y consistente.

**Recuerda**: El objetivo es alcanzar el mismo nivel de sofisticación visual y atención al detalle que caracteriza al proyecto original, creando una experiencia cohesiva y profesional para los usuarios.

---

*Última actualización: Diciembre 2024*  
*Sistema de Diseño: Hogares Seguros / Secure Home Quiz*
