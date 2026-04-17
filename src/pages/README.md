# Páginas (`src/pages/`)

Cada archivo aquí corresponde a **una ruta** registrada en [`App.tsx`](../App.tsx). El mapa completo URL → archivo está en [`docs/NAVEGACION-CODIGO.md`](../../docs/NAVEGACION-CODIGO.md).

| Archivo | Ruta(s) | Notas |
|---------|---------|--------|
| `Index.tsx` | `/` | Inicio: `GlobalHeader` + `HeroSection`. |
| `About.tsx` | `/about` | Sin `GlobalHeader` del resto del sitio; secciones con scroll. |
| `QuizExpress.tsx` | `/quiz` | Quiz corto; estado en `useExpressQuizState`. |
| `QuizPersonalizado.tsx` | `/quiz/personalizado` | Quiz largo por pasos; estado en `useQuizState`. |
| `TuFamilia.tsx` | `/aprende/tu-familia` | Contenido familia y pantallas. |
| `TuFamiliaRedesSociales.tsx` | `/aprende/tu-familia/redes-sociales` | Plataformas y redes (mucho contenido en el mismo archivo). |
| `TuFamiliaVideojuegos.tsx` | `/aprende/tu-familia/videojuegos` | Videojuegos y `GlossaryTerm`. |
| `RiesgosDigitales.tsx` | `/aprende/riesgos` | Datos desde `@/data/risks`. |
| `ControlesParentales.tsx` | `/aprende/controles` | Controles parentales (accordion, secciones). |
| `ComunicacionYApoyo.tsx` | `/aprende/comunicacion` | Historias: `@/data/caseStories`. |
| `AccionesLegales.tsx` | `/aprende/acciones-legales` | Enlaces y CTA al quiz. |
| `Recursos.tsx` | `/recursos` | Descargables y glosario: `@/data/recursos`. |
| `Ayuda.tsx` | `/ayuda` | FAQs: `@/data/faqLinks`. |
| `EnConstruccion.tsx` | `/en-construccion` | Placeholder. |
| `NotFound.tsx` | `*` (catch-all) | 404. |
| `print/Plan.tsx` | `/print/plan` | Plan para imprimir: `buildPlan`, `localStorage`, componentes `plan/*`. |

Al añadir una página nueva: crea el `.tsx` aquí, regístrala en `App.tsx` con `lazy`, y actualiza `docs/NAVEGACION-CODIGO.md` y este README.
