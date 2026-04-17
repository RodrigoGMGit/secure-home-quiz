# Hooks (`src/hooks/`)

Hooks de React con **estado o efectos reutilizables**. Úsalos desde páginas o componentes con `import { ... } from '@/hooks/...'`.

| Archivo | Uso típico |
|---------|------------|
| `useScrollToTop.tsx` | Al cambiar de ruta, llevar el scroll al inicio (la mayoría de las páginas lo llaman al montar). |
| `useQuizState.tsx` | Estado completo del **quiz personalizado** (pasos, respuestas, `localStorage`, analíticas). Usado en [`QuizPersonalizado.tsx`](../pages/QuizPersonalizado.tsx). |
| `useExpressQuizState.tsx` | Estado del **quiz express** (preguntas cortas, persistencia propia). Usado en [`QuizExpress.tsx`](../pages/QuizExpress.tsx). |
| `useNavigationLoading.tsx` | Navegar mostrando estado de carga (`navigateWithLoading`). |
| `useMobileDetection.tsx` | `useMobileDetection`, `useTelephoneCapability` (detección móvil / capacidad tel). |
| `use-mobile.tsx` | `useIsMobile()` por ancho de ventana (breakpoint 768px). Patrón shadcn. |
| `use-toast.ts` | Toasts de notificación (shadcn/ui). |

Los hooks **no** sustituyen a `src/data/`: guardan flujo y respuestas; el copy largo sigue en datos o en la página.
