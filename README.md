# Hogares Seguros (Secure Home Quiz)

Plataforma web educativa en **español (México)** para padres y familias: contenidos sobre seguridad digital infantil, recursos y un cuestionario interactivo. Este documento está pensado para **personas nuevas en el proyecto**: cómo obtener el código, instalarlo, ejecutarlo en la computadora y saber **dónde editar** textos, colores e imágenes.

## Tabla de contenidos

1. [Requisitos previos](#requisitos-previos)
2. [Obtener el código desde Azure Repos](#obtener-el-código-desde-azure-repos)
3. [Instalación](#instalación)
4. [Ejecutar el proyecto en local](#ejecutar-el-proyecto-en-local)
5. [Variables de entorno](#variables-de-entorno)
6. [Cómo está organizado el proyecto](#cómo-está-organizado-el-proyecto)
7. [Documentación del código](#documentación-del-código)
8. [¿Quiero cambiar…?](#quiero-cambiar)
9. [Sección `/about` (Scrollytelling)](#sección-about-scrollytelling)
10. [Comandos útiles](#comandos-útiles)
11. [Despliegue en Azure Static Web Apps (opcional)](#despliegue-en-azure-static-web-apps-opcional)
12. [Solución de problemas](#solución-de-problemas)

---

## Requisitos previos

Instala en tu equipo:

| Herramienta | Para qué sirve |
|-------------|----------------|
| **Node.js** (versión **LTS** recomendada) | Ejecuta el proyecto y los scripts de npm |
| **npm** | Viene con Node.js; instala dependencias |
| **Git** | Clonar y actualizar el repositorio |

- En **Windows**, los scripts de despliegue del repo usan **PowerShell**.
- Un editor de código (por ejemplo **Visual Studio Code**) facilita editar archivos.

---

## Obtener el código desde Azure Repos

El código suele estar en **Azure DevOps** (repositorio Git). La URL exacta la da el administrador del proyecto.

1. Inicia sesión en Azure DevOps y abre el proyecto.
2. Ve a **Repos** → **Files**.
3. Pulsa **Clone** y copia la URL (**HTTPS** o **SSH**).
4. En una terminal, en la carpeta donde guardes proyectos:

```bash
git clone <URL_QUE_TE_DIERON>
cd secure-home-quiz
```

(El nombre de la carpeta puede variar según el nombre del repositorio.)

**Permisos:** necesitas acceso de lectura al repo. Si `git clone` pide usuario y contraseña, en HTTPS a menudo se usa un **Personal Access Token (PAT)** en lugar de la contraseña; tu organización te indicará cómo generarlo.

---

## Instalación

En la **raíz del proyecto** (donde está `package.json`):

```bash
npm install
```

- **`npm install`**: adecuado para desarrollo en tu máquina.
- **`npm ci`**: instala exactamente lo que dice `package-lock.json` (útil en servidores o en los scripts de despliegue del repo). Requiere que exista `package-lock.json`.

---

## Ejecutar el proyecto en local

```bash
npm run dev
```

Vite mostrará una dirección local (por ejemplo `http://localhost:8080`). Ábrela en el navegador.

- El servidor de desarrollo usa el puerto **8080** por configuración en `vite.config.ts`.
- Al guardar cambios en el código, la página suele **recargarse sola** (recarga en caliente).

Para ver una **versión de prueba** del sitio ya compilado:

```bash
npm run build
npm run preview
```

---

## Variables de entorno

El repositorio incluye plantillas seguras para que cada developer copie sus variables locales sin subir secretos:

- `.env.example` → base para `.env` (por ejemplo `SWA_TOKEN` para despliegue manual)
- `.env.dev.example` → base para `.env.dev`
- `.env.development.example` → base para `.env.development`
- `.env.prod.example` → base para `.env.prod`
- `.env.production.example` → base para `.env.production`

### Cómo copiarlas

En PowerShell (Windows):

```powershell
Copy-Item .env.example .env
Copy-Item .env.dev.example .env.dev
Copy-Item .env.development.example .env.development
Copy-Item .env.prod.example .env.prod
Copy-Item .env.production.example .env.production
```

En Bash (macOS/Linux/Git Bash):

```bash
cp .env.example .env
cp .env.dev.example .env.dev
cp .env.development.example .env.development
cp .env.prod.example .env.prod
cp .env.production.example .env.production
```

Después de copiar, reemplaza los valores `YOUR_*` con credenciales reales entregadas por el equipo.

**Importante:**

- **No subas secretos** a Git ni los pegues en chats públicos.
- **No copies** el contenido real de tus `.env` al README.
- Para despliegue manual a Azure Static Web Apps, usa **`SWA_TOKEN`** (desde Azure Portal → Static Web App → Manage deployment token).

Si no tienes todas las variables, el sitio puede arrancar en local; algunas funciones opcionales (por ejemplo telemetría) podrían no activarse hasta configurarlas.

---

## Cómo está organizado el proyecto

Stack principal: **Vite**, **React**, **TypeScript**, **React Router**, **Tailwind CSS** y componentes de interfaz basados en **Radix** / estilo shadcn.

| Carpeta o archivo | Qué encontrarás ahí |
|-------------------|---------------------|
| `src/pages/` | Pantallas: una página por ruta (inicio, quiz, “Aprende”, recursos, ayuda, etc.). |
| `src/App.tsx` | **Definición de rutas** (`<Route path="..." />`). Si agregas una página nueva, casi siempre debes registrarla aquí. |
| `src/components/` | Piezas reutilizables: botones, diálogos, cabecera, secciones del quiz, imágenes del hero, etc. |
| `src/components/ui/` | Componentes de interfaz base (botones, tarjetas, modales…). |
| `src/data/` | Textos y datos en **objetos o listas** (glosario, recursos, riesgos, rutas de aprendizaje, reglas del plan, etc.). |
| `src/hooks/` | Lógica reutilizable de React (por ejemplo estado del quiz, scroll al inicio). |
| `src/index.css` | **Tokens de color**, tipografía y utilidades CSS globales (fuente de verdad visual junto con Tailwind). |
| `tailwind.config.ts` | Configuración de Tailwind; enlaza colores y tokens con `index.css`. |
| `public/` | Archivos estáticos servidos tal cual (favicon, etc.). Las imágenes **optimizadas** generadas por el script suelen referenciarse bajo rutas como `/optimized/...` dentro de `public` cuando existan. |
| `src/assets/` | Origen de imágenes **antes** de optimizar (según el flujo del script del proyecto). |
| `scripts/` | Por ejemplo `optimize-images.js` y scripts de despliegue (`deploy-dev.ps1`, `deploy-prod.ps1`). |
| `staticwebapp.config.json` | Configuración para **Azure Static Web Apps** (enrutamiento de SPA). |
| `.cursor/rules/` | Reglas internas del equipo (puerto, sistema de diseño); no son obligatorias para ejecutar el proyecto, pero ayudan a mantener consistencia. |

**Iconos:** en muchos componentes se usa **lucide-react** (iconos importados como componentes).

---

## Documentación del código

Además de esta guía de instalación y uso, el repositorio incluye un **mapa técnico** para orientarte en el código (rutas, datos, componentes).

### Enlaces a la documentación

| Documento | Para qué sirve |
|-----------|----------------|
| [docs/NAVEGACION-CODIGO.md](docs/NAVEGACION-CODIGO.md) | **Hub central:** tabla URL → archivo de página, diagrama de relaciones, convenciones `@/` y `lazy`, enlaces a datos y estilos. |
| [src/pages/README.md](src/pages/README.md) | Lista de cada pantalla y su ruta. |
| [src/components/README.md](src/components/README.md) | Qué hay en cada subcarpeta de componentes (`quiz/`, `shared/`, `plan/`, `ui/`, etc.). |
| [src/data/README.md](src/data/README.md) | Qué archivo de datos alimenta qué tipo de contenido. |
| [src/hooks/README.md](src/hooks/README.md) | Hooks reutilizables (quiz, scroll, navegación). |

### Cómo navegar esta documentación (si eres principiante)

1. **Empieza aquí:** abre [docs/NAVEGACION-CODIGO.md](docs/NAVEGACION-CODIGO.md). Ahí ves todas las rutas del sitio y el archivo `.tsx` que corresponde a cada una, más un diagrama de cómo encajan página, datos y componentes.
2. **Si ya sabes la pantalla** pero quieres el nombre exacto del archivo: usa la tabla del hub o [src/pages/README.md](src/pages/README.md).
3. **Si vas a tocar tarjetas, modales o el quiz:** lee primero la introducción de [src/components/README.md](src/components/README.md) y entra solo a la subcarpeta que toque (por ejemplo `quiz/` o `plan/`).
4. **Si el texto no aparece en la página** (listas largas, riesgos, recursos): mira [src/data/README.md](src/data/README.md) y el archivo que indique (p. ej. `risks.ts`, `recursos.ts`).
5. **Si el cambio es comportamiento del cuestionario o scroll:** [src/hooks/README.md](src/hooks/README.md).
6. **Cuando ya tengas el archivo abierto:** al inicio de cada página en `src/pages/` hay un comentario que resume ruta, datos y componentes grandes; en [src/App.tsx](src/App.tsx) los comentarios agrupan rutas por bloque.

**Flujo sugerido en una frase:** abre el hub en `docs/`, pasa al README de la carpeta que corresponda a tu tarea, abre el archivo fuente y apóyate en el comentario del inicio del archivo.

---

## ¿Quiero cambiar?

### Textos en pantalla

1. Abre la **página** correspondiente en `src/pages/` (por ejemplo `TuFamilia.tsx`, `RiesgosDigitales.tsx`).
2. Si el texto no está en el archivo de la página, búscalo en `src/data/` (archivos como `recursos.ts`, `risks.ts`, `glossary.ts`, `learningPath.ts`, etc.).

### Rutas o páginas nuevas

1. Crea un componente de página en `src/pages/`.
2. Registra la ruta en `src/App.tsx` dentro de `<Routes>` (y el `import` con `lazy` si sigues el patrón actual del archivo).

### Colores y estilo global

- **Colores de marca y tokens:** edita las variables en `src/index.css` (secciones de paleta y mapeo semántico). El sistema de diseño del proyecto considera esa archivo la **fuente de verdad** para valores HSL.
- **Clases Tailwind:** muchas pantallas usan clases como `text-brand-ink-900` o `bg-brand-mint-200/20`; esos nombres salen de `tailwind.config.ts` enlazado a `index.css`.
- **Componentes reutilizables** (botones, tarjetas): `src/components/ui/` y `src/components/ui/button.tsx`, etc.

### Imágenes

1. Coloca la imagen original según el script: por ejemplo imágenes del hero en `src/assets/hero/` y logos en `src/assets/logos/` (lista exacta en `scripts/optimize-images.js`). El favicon se toma de `public/favicon-hogares-digitales.png`.
2. Ejecuta:

```bash
npm run optimize-images
```

3. En el código, para el hero y variantes responsivas, se usan componentes como **`HeroImage`**, **`OptimizedLogo`** y **`TrustLogo`** en `src/components/`. Revisa cómo pasan la prop `src` o el nombre de archivo en una página existente y **copia el mismo patrón**.

Si cambias rutas de build (`base` en Vite) o el hosting, verifica que las URLs de las imágenes sigan siendo correctas.

### Iconos

Suelen importarse desde `lucide-react` en el mismo archivo `.tsx` donde se muestran.

---

## Sección `/about` (Scrollytelling)

La ruta `/about` usa una experiencia de scrollytelling de 6 escenas optimizada para escritorio y móvil.

### Arquitectura principal

- Página: `src/pages/About.tsx`
- Orquestador de experiencia: `src/components/scrolly/ScrollyExperience.tsx`
- Hook de scroll y progreso: `src/components/scrolly/useScrollyController.ts`
- Wrapper de escena: `src/components/scrolly/ScrollyScene.tsx`
- Escena visual sticky desktop: `src/components/scrolly/ScrollyStage.tsx`
- Escenas de contenido: `src/components/scrolly/scenes/Scene01Puerta.tsx` a `Scene06Cierre.tsx`
- Stages visuales por escena: `src/components/scrolly/stages/*`
- Datos/copy (fuente de verdad): `src/content/scrolly.ts`
- Componentes nuevos de navegación/cierre: `src/components/scrolly/ScrollyNav.tsx`, `src/components/scrolly/ScrollyHero.tsx`, `src/components/scrolly/ScrollyClosing.tsx`

### Comportamiento responsive esperado

- **Desktop (`md` en adelante):**
  - Layout de 2 columnas.
  - Columna izquierda sticky con visual (`ScrollyStage`).
  - Columna derecha con el texto de escenas.
- **Mobile:**
  - Flujo de una sola columna.
  - El visual de cada escena va **antes** del bloque de texto (no después).
  - Sin scroll horizontal; la página debe mantenerse en ancho del viewport.
  - Navegación de escenas (`ScrollyNav`) posicionada centrada abajo.

### Reglas para futuras integraciones en `/about`

1. Si agregas una escena, actualiza `SCROLLY_SCENE_COUNT` y `scrollyScenes` en `src/content/scrolly.ts`.
2. Mantén sincronizados:
   - índices `data-scrolly-scene`
   - dots de `ScrollyNav`
   - render condicional de `ScrollyStage`
3. Evita valores fijos grandes en px para mobile (alto riesgo de overflow y scroll horizontal).
4. Si un stage necesita animación ligada al scroll, usa `sceneProgresses` desde `useScrollyController`.
5. Antes de mergear cambios en `/about`, valida en desktop y móvil con captura visual y consola limpia de errores runtime.

### QA recomendado con Chrome DevTools MCP

Para cambios en `/about`, seguir este ciclo rápido:

1. Abrir `/about` en local (`npm run dev`, puerto 8080).
2. Validar en desktop.
3. Validar en móvil con viewport `390x844` (iPhone 12 Pro equivalente) y también `320x568`.
4. Revisar:
   - `scrollWidth === innerWidth` (sin scroll horizontal)
   - CTA visibles y tap targets correctos
   - progreso/animaciones de escenas (especialmente Scene 4 y Scene 5)
   - consola sin errores de JavaScript

---

## Comandos útiles

| Comando | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo con recarga en caliente (puerto 8080). |
| `npm run build` | Compila el sitio para producción; salida en la carpeta `dist/`. |
| `npm run build:dev` | Build en modo development (según `package.json`). |
| `npm run preview` | Sirve localmente la carpeta `dist/` para probar el build. |
| `npm run lint` | Ejecuta ESLint sobre el código. |
| `npm run optimize-images` | Genera versiones optimizadas de imágenes según `scripts/optimize-images.js`. |

---

## Despliegue en Azure Static Web Apps (opcional)

El repositorio incluye:

- **`staticwebapp.config.json`**: ayuda a que las rutas de una SPA (React Router) redirijan correctamente a `index.html`.
- **`scripts/deploy-dev.ps1`**: instala dependencias, construye en modo desarrollo y despliega al entorno **staging** de Azure SWA.
- **`scripts/deploy-prod.ps1`**: similar para **producción**.

En general necesitarás un archivo **`.env`** en la raíz con `SWA_TOKEN=...`. Recomendado: copiar primero `.env.example` a `.env` y luego completar el token real (Azure Portal: Static Web App → **Manage deployment token**). No compartas ese token.

Los scripts copian `staticwebapp.config.json` dentro de `dist/` antes de desplegar, porque Vite no lo copia solo.

Desde PowerShell en la raíz del repo (ejemplo):

```powershell
.\scripts\deploy-prod.ps1
```

**Nota sobre la URL base (`base`):** en `vite.config.ts`, la opción `base` puede depender de variables de entorno (por ejemplo para GitHub Pages). Si al publicar el sitio ves **pantalla en blanco** o **404 en archivos `.js` / `.css`**, revisa con el equipo si `base` debe ser `/` o una subruta, según dónde esté hospedado el sitio (Azure en la raíz del dominio suele usar `/`).

---

## Solución de problemas

| Problema | Qué probar |
|----------|------------|
| **Puerto 8080 ocupado** | Cierra la otra aplicación que use ese puerto, o cambia temporalmente el puerto en `vite.config.ts` (sección `server.port`) con acuerdo del equipo. |
| **`npm install` falla** | Usa Node LTS; borra `node_modules` y vuelve a ejecutar `npm install`. Si persiste, copia el mensaje de error y consúltalo con quien mantenga el repo. |
| **Sitio publicado en blanco o sin estilos** | Revisa la opción **`base`** en `vite.config.ts` y la URL desde la que sirves el sitio (raíz del dominio vs subcarpeta). |
| **Rutas internas dan 404 en el servidor** | En hosting estático hace falta regla SPA; en Azure SWA debe estar `staticwebapp.config.json` en el artefacto desplegado (los scripts del repo lo copian a `dist/`). |

---

## Más ayuda

Si algo de este README no coincide con la política de tu organización (nombres de ramas, pipelines de Azure DevOps en lugar de scripts locales, etc.), pide la guía interna actualizada al equipo que administra el repositorio.
