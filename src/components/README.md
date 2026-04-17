# Componentes (`src/components/`)

Piezas de interfaz reutilizables. La página solo **orquesta**; el detalle visual y de interacción suele vivir aquí o en `src/data/`.

## Subcarpetas (qué es cada una)

| Carpeta | Rol |
|---------|-----|
| **`ui/`** | Primitivos estilo shadcn/Radix (botón, diálogo, card). **Evita editarlos** salvo actualización de la librería o cambios muy puntuales; para marca global usa tokens en [`src/index.css`](../index.css) y composición en `shared/`. |
| **`shared/`** | Patrones de página educativa: cabeceras de sección, fondos decorativos, cajas destacadas, CTA al quiz. Buen lugar si varias páginas repiten el mismo layout. |
| **`quiz/`** | Shell del cuestionario (`AppShellCard`), pasos del quiz personalizado (`steps/`), flujo express (`express/`). |
| **`plan/`** | Bloques del plan imprimible (portada, prioridades, checklist, recursos). Consumidos sobre todo por [`src/pages/print/Plan.tsx`](../pages/print/Plan.tsx). |
| **`risks/`** | Tarjetas y modales de riesgos (usados en Riesgos digitales y relacionados). |
| **`help/`** | Solicitud de taller / modales de ayuda. |
| **`learning-navigation/`** | Navegación lateral o entre temas del recorrido “Aprende”. |
| **`icons/platforms/`** | Iconos de marca de plataformas (TikTok, Discord, etc.). Punto de entrada: `index.ts` para reexportaciones. |

## Componentes en la raíz de `components/`

Ejemplos que verás en muchas rutas:

- **`GlobalHeader.tsx`**: menú principal del sitio.
- **`HeroSection.tsx`**: hero de la página de inicio.
- **`HeroImage.tsx`**, **`OptimizedLogo.tsx`**, **`TrustLogo.tsx`**: imágenes con rutas optimizadas bajo `public/`.
- **`EmergencyButton.tsx`**, **`FEInfoButton.tsx`**: flotantes globales (configurados desde `App.tsx`).

## Relación con datos

Los textos largos o listas suelen venir de [`src/data/`](../data/). El componente solo **mapea** datos a UI.

## Más contexto

- Mapa de rutas y páginas: [`docs/NAVEGACION-CODIGO.md`](../../docs/NAVEGACION-CODIGO.md)
- Sistema de diseño (Cursor): [`.cursor/rules/projectdesignsystem.mdc`](../../.cursor/rules/projectdesignsystem.mdc)
