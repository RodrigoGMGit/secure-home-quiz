# Estructura del Proyecto - Secure Home Quiz

## Introducción

Este documento explica la organización de archivos y directorios del proyecto **Secure Home Quiz**, una aplicación web educativa para padres mexicanos sobre seguridad digital infantil. La estructura sigue convenciones estándar de desarrollo web moderno con React, TypeScript y Vite.

---

## 🏗️ Arquitectura General del Proyecto

### Separación Principal: `/public` vs `/src`

#### 📁 `/public` - Archivos Estáticos Públicos
```
public/
├── _redirects          # Configuración de redirecciones (Netlify)
├── assets/             # Recursos multimedia estáticos
│   ├── door.mp4        # Video para scrollytelling
│   ├── lottie/         # Animaciones Lottie
│   ├── svg/            # Iconos SVG
│   └── topo/           # Imágenes topográficas
├── favicon.ico         # Icono del sitio
├── placeholder.svg     # Imagen placeholder
└── robots.txt          # Configuración para motores de búsqueda
```

**¿Por qué existe `/public`?**
- **Convención estándar**: Todos los frameworks web modernos (React, Vue, Angular) usan esta estructura
- **Servido directamente**: Los archivos aquí se sirven tal como están, sin procesamiento
- **Acceso directo**: URLs como `/favicon.ico` apuntan directamente a `public/favicon.ico`
- **Assets estáticos**: Videos, imágenes, fuentes que no necesitan transformación

#### 📁 `/src` - Código Fuente de la Aplicación
```
src/
├── components/         # Componentes reutilizables
├── pages/             # Páginas de la aplicación
├── hooks/             # Custom React hooks
├── types/             # Definiciones TypeScript
├── utils/             # Funciones utilitarias
├── data/              # Datos estáticos
├── integrations/      # Integraciones externas
├── lib/               # Librerías y configuraciones
├── assets/            # Assets que SÍ se procesan
├── App.tsx            # Componente raíz
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

**¿Por qué existe `/src`?**
- **Código fuente**: Todo el código que se compila y transforma
- **Procesamiento**: TypeScript → JavaScript, CSS → CSS optimizado
- **Bundling**: Vite empaqueta todo en archivos optimizados
- **Organización**: Separación clara entre código y assets estáticos

---

## 📂 Estructura Detallada por Directorio

### `/src/components/` - Componentes Reutilizables

```
components/
├── ui/                    # Componentes base (shadcn/ui)
│   ├── button.tsx         # Botón reutilizable
│   ├── card.tsx           # Card reutilizable
│   ├── dialog.tsx         # Modal reutilizable
│   └── ...                # Otros componentes UI
├── quiz/                  # Componentes específicos del quiz
│   ├── AppShellCard.tsx   # Contenedor principal del quiz
│   ├── OptionGrid.tsx     # Grid de opciones
│   ├── StepHeader.tsx     # Header de pasos
│   └── steps/             # Pasos individuales del quiz
│       ├── AgeStep.tsx
│       ├── GenderStep.tsx
│       └── ...
├── risks/                 # Componentes de riesgos
│   ├── RiskCard.tsx       # Tarjeta de riesgo
│   └── RiskDetailModal.tsx # Modal de detalle
├── GlobalHeader.tsx       # Header global
├── HeroSection.tsx        # Sección hero
└── ...
```

**Convención**: Separación por funcionalidad y reutilización
- `ui/`: Componentes base reutilizables en toda la app
- `quiz/`: Componentes específicos del flujo de quiz
- `risks/`: Componentes específicos de riesgos
- Archivos sueltos: Componentes únicos y específicos

### `/src/pages/` - Páginas de la Aplicación

```
pages/
├── Index.tsx              # Página principal (/)
├── Quiz.tsx               # Página del quiz (/quiz)
├── About.tsx              # Página sobre nosotros (/about)
├── TuFamilia.tsx          # Página educativa (/aprende/tu-familia)
├── RiesgosDigitales.tsx   # Página de riesgos (/aprende/riesgos)
├── ControlesParentales.tsx # Página de controles (/aprende/controles)
├── ComunicacionYApoyo.tsx # Página de comunicación (/aprende/comunicacion)
├── Recursos.tsx           # Página de recursos (/recursos)
├── Ayuda.tsx              # Página de ayuda (/ayuda)
├── AccionesLegales.tsx    # Página legal (/acciones-legales)
├── NotFound.tsx           # Página 404
└── EnConstruccion.tsx     # Página de construcción
```

**Convención**: Un archivo por página, mapeo 1:1 con rutas
- Cada archivo representa una ruta de la aplicación
- Nombres en PascalCase (convención React)
- Separación clara de responsabilidades

### `/src/hooks/` - Custom React Hooks

```
hooks/
├── use-mobile.tsx         # Hook para detectar móvil
├── use-toast.ts           # Hook para notificaciones
├── useNavigationLoading.tsx # Hook para loading de navegación
├── useQuizState.tsx       # Hook para estado del quiz
└── useScrollToTop.tsx     # Hook para scroll automático
```

**Convención**: Lógica reutilizable encapsulada
- Prefijo `use-` (convención React)
- Lógica de estado y efectos reutilizable
- Separación de lógica de presentación

### `/src/types/` - Definiciones TypeScript

```
types/
├── quiz.ts                # Tipos del quiz
└── risks.ts               # Tipos de riesgos
```

**Convención**: Definiciones de tipos centralizadas
- Un archivo por dominio de tipos
- Reutilización en toda la aplicación
- Type safety garantizado

### `/src/utils/` - Funciones Utilitarias

```
utils/
├── analytics.ts           # Funciones de analytics
├── localStorage.ts        # Utilidades de localStorage
├── planGenerator.ts       # Generador de planes de acción
└── scroll.ts              # Utilidades de scroll
```

**Convención**: Funciones puras y reutilizables
- Sin dependencias de React
- Funciones de utilidad general
- Fácil testing

### `/src/data/` - Datos Estáticos

```
data/
└── risks.ts               # Datos de riesgos digitales
```

**Convención**: Datos que no cambian frecuentemente
- Información estática de la aplicación
- Fácil de mantener y actualizar
- Separado de la lógica

### `/src/integrations/` - Integraciones Externas

```
integrations/
└── supabase/
    ├── client.ts          # Cliente de Supabase
    └── types.ts           # Tipos de Supabase
```

**Convención**: Configuraciones de servicios externos
- Separación de responsabilidades
- Fácil cambio de proveedor
- Configuración centralizada

---

## 🔧 Archivos de Configuración

### Archivos de Build y Desarrollo

```
├── package.json           # Dependencias y scripts
├── package-lock.json      # Versiones exactas de dependencias
├── vite.config.ts         # Configuración de Vite
├── tailwind.config.ts     # Configuración de Tailwind CSS
├── tsconfig.json          # Configuración de TypeScript
├── tsconfig.app.json      # Configuración TS para app
├── tsconfig.node.json     # Configuración TS para Node
├── postcss.config.js      # Configuración de PostCSS
└── eslint.config.js       # Configuración de ESLint
```

### Archivos de Deployment

```
├── netlify.toml           # Configuración de Netlify
├── vercel.json            # Configuración de Vercel
└── public/_redirects      # Redirecciones (Netlify)
```

### Archivos de Documentación

```
├── README.md              # Documentación principal
├── ARCHITECTURE.md        # Arquitectura del proyecto
├── COMPONENTS.md          # Documentación de componentes
├── DEVELOPMENT.md         # Guía de desarrollo
├── CONTRIBUTING.md        # Guía de contribución
└── markdown_files/        # Documentación adicional
    ├── manual.md          # Manual de contenido
    ├── new_sections.md    # Nuevas secciones
    └── ...
```

---

## 🎯 Convenciones de Nomenclatura

### Archivos y Directorios

| Tipo | Convención | Ejemplo | Razón |
|------|------------|---------|-------|
| Componentes React | PascalCase | `Button.tsx` | Convención React estándar |
| Hooks | kebab-case | `use-mobile.tsx` | Convención React hooks |
| Utilidades | camelCase | `localStorage.ts` | Convención JavaScript |
| Páginas | PascalCase | `Index.tsx` | Convención React |
| Tipos | camelCase | `quiz.ts` | Convención TypeScript |
| CSS | kebab-case | `index.css` | Convención CSS estándar |

### Estructura de Imports

```typescript
// 1. Imports de React
import React from 'react';
import { useState, useEffect } from 'react';

// 2. Imports de librerías externas
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 3. Imports de componentes internos
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// 4. Imports de utilidades
import { cn } from '@/lib/utils';
import { useScrollToTop } from '@/hooks/useScrollToTop';

// 5. Imports de tipos
import type { QuizStep } from '@/types/quiz';
```

---

## 🚀 Flujo de Desarrollo

### 1. Desarrollo Local
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Linting del código
```

### 2. Proceso de Build
1. **Vite** lee `vite.config.ts`
2. **TypeScript** compila `.tsx` → `.js`
3. **Tailwind** procesa clases CSS
4. **PostCSS** optimiza CSS
5. **Vite** empaqueta todo en `/dist`

### 3. Estructura de Build Final
```
dist/
├── index.html           # HTML principal
├── assets/
│   ├── index-[hash].js  # JavaScript empaquetado
│   ├── index-[hash].css # CSS empaquetado
│   └── [images]         # Imágenes optimizadas
└── [static files]       # Archivos de /public
```

---

## 📚 Convenciones de la Industria

### ¿Por qué esta estructura es estándar?

1. **Separación de responsabilidades**
   - Código fuente vs assets estáticos
   - Lógica vs presentación
   - Configuración vs implementación

2. **Escalabilidad**
   - Fácil agregar nuevas funcionalidades
   - Estructura predecible para nuevos desarrolladores
   - Separación clara de dominios

3. **Herramientas de desarrollo**
   - IDEs entienden la estructura
   - Build tools optimizados para esta organización
   - Testing frameworks esperan esta estructura

4. **Colaboración**
   - Convenciones conocidas por la comunidad
   - Fácil onboarding de nuevos desarrolladores
   - Estándares de la industria

### Frameworks que usan estructura similar:
- **Next.js**: `/pages`, `/components`, `/public`
- **Nuxt.js**: `/pages`, `/components`, `/static`
- **Angular**: `/src/app`, `/src/assets`
- **Vue CLI**: `/src/components`, `/public`

---

## 🔍 Mejores Prácticas Aplicadas

### ✅ Lo que está bien implementado:

1. **Separación clara** entre `/public` y `/src`
2. **Componentes organizados** por funcionalidad
3. **Hooks personalizados** para lógica reutilizable
4. **Tipos TypeScript** centralizados
5. **Utilidades puras** separadas de componentes
6. **Configuración externa** en directorio dedicado
7. **Documentación** bien estructurada

### 🎯 Beneficios de esta estructura:

- **Mantenibilidad**: Fácil encontrar y modificar código
- **Escalabilidad**: Estructura que crece con el proyecto
- **Colaboración**: Convenciones estándar de la industria
- **Performance**: Build optimizado por Vite
- **Developer Experience**: Herramientas de desarrollo optimizadas

---

## 📖 Recursos Adicionales

### Documentación del Proyecto:
- `README.md` - Información general
- `ARCHITECTURE.md` - Arquitectura técnica
- `COMPONENTS.md` - Documentación de componentes
- `DEVELOPMENT.md` - Guía de desarrollo

### Archivos de Configuración:
- `package.json` - Dependencias y scripts
- `vite.config.ts` - Configuración de build
- `tailwind.config.ts` - Sistema de diseño
- `tsconfig.json` - Configuración TypeScript

---

*Este documento se actualiza conforme evoluciona la estructura del proyecto. Para sugerencias o preguntas sobre la organización, consulta con el equipo de desarrollo.*
