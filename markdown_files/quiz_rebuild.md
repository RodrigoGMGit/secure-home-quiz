# Secure Home Quiz — Especificación de Experiencia (Draft Refinado)

## 1. Propósito
Diseñar una experiencia de quiz ágil, visual y educativa que:
- Evalúe rápidamente el nivel de protección familiar y entregue valor en < 1 minuto (Diagnóstico Exprés).
- Profundice opcionalmente en 3–4 minutos para generar un plan personalizado por edad, plataformas y preocupaciones (Evaluación Personalizada).
- Mantenga consistencia con el Sistema de Diseño del proyecto y las guías de accesibilidad (WCAG AA).

Tono: cálido, empático y accionable (ES-MX).

---

## 2. Arquitectura de la experiencia
- Ruta principal: `/quiz` (Páginas Interactivas según DS)
- Patrones DS aplicables:
  - AppShellCard (contenedor, progreso, contexto)
  - StepHeader (titulares y subtítulos)
  - OptionGrid (selección visual, taps ≥44px)
- No usar los elementos decorativos de fondo de páginas de contenido educativo en `/quiz`. Mantener gradientes sutiles y sombreados suaves ya presentes en `AppShellCard`.

Componentes existentes a reutilizar:
- `AppShellCard`, `StepHeader`, `OptionGrid`, `ChecklistByPlatform`, `Notice`, `SpecificMeasures`
- Steps existentes: `WelcomeStep`, `GenderStep`, `AgeStep`, `PlatformsStep`, `MeasuresStep`, `HabitsSignalsStep`, `ConcernsStep`, `DoneStep`
- Estado/navegación: `useQuizState` (localStorage + analytics placeholders)
- A/B Email Gate disponible: `ABGateEmail` (variantes A/B/C)

---

## 3. Nivel 1 — Diagnóstico Exprés (nuevo "modo exprés")
Objetivo: Micro-evaluación de 7 preguntas Sí/No (< 60s) con resultado visual inmediato y rutas de acción.

- UI
  - Contenedor: `AppShellCard` con `showProgress=true` y barra de porcentaje.
  - Encabezado por paso: `StepHeader` (títulos en `font-heading`, subtítulos en `font-body`).
  - Opciones: dos botones grandes (Sí / No).
    - Sí: `variant="primary-brand"` (bg brand-ink-800, hover brand-ink-900, texto white)
    - No: `variant="outline"` (border brand-teal-500, hover bg-brand-mint-200/20)
  - Animación: transiciones suaves (`transition-smooth`) y entrada escalonada en listas (Framer Motion).

- Lógica de puntaje
  - Sí = 1 punto; 0–7 total.
  - 6–7: 🟢 "Familia protegida"
  - 3–5: 🟡 "En proceso"
  - 0–2: 🔴 "En riesgo"
  - Copys alineados a DS (sin alarmismo, acción concreta).

- Pantalla de resultado exprés
  - Fondo sutil acorde a categoría (no bloques saturados; usar bordes/acentos según DS).
  - Iconografía: `Shield`, `CheckCircle`, `AlertCircle` (Lucide) con colores DS:
    - Texto: `text-brand-ink-900`/`text-brand-olive-500`
    - Acentos: `text-brand-teal-500` (títulos ≥18px o con subrayado si es enlace)
  - CTA primario: `variant="primary-brand"` → "Crear mi plan personalizado"
  - CTA secundario: `variant="outline"` → "Explorar recursos"

- Navegación
  - Integración recomendada:
    - Opción A: Subruta `/quiz/express` con su propio pequeño estado.
    - Opción B: Modo inicial dentro de `/quiz` que, al terminar, ofrece "continuar a evaluación personalizada".
  - Accesibilidad: `aria-live` para el resultado, `role="progressbar"` con `aria-valuenow` en la barra.

- Analytics (eventos sugeridos)
  - `express_start`, `express_answer` (q_index, value), `express_result` (score, category), `express_cta_click` (cta_type)

---

## 4. Nivel 2 — Evaluación Personalizada (3–4 minutos)
Usa los steps existentes y copy revisado para claridad y calidez. Mantener estructura y tipos en `src/types/quiz.ts`.

- Paso: Bienvenida (`WelcomeStep`)
  - Subcopy: "Este diagnóstico es anónimo y dura 3–4 minutos. Usamos tus respuestas para crear tu plan personal."
  - Badges informativos preexistentes (tiempo, anonimato, plan personal).

- Paso: Género (`GenderStep`) — Requerido
  - Mantener `OptionGrid` con 3 opciones.
  - Mensaje de ayuda breve al seleccionar: "Perfecto, continuemos con la edad."

- Paso: Edad (`AgeStep`) — Requerido
  - 4 rangos: 6–8, 9–12, 13–15, 16–17.
  - Mensaje contextual al seleccionar: "Excelente, ahora veamos qué plataformas usa."

- Paso: Plataformas (`PlatformsStep`) — Requerido
  - Multi-select en `OptionGrid` (WhatsApp, YouTube, Instagram, Roblox, Minecraft, TikTok 13+ y "Otros" con input).
  - Opción "No estoy seguro/a" con `Notice` de ayuda y fallback.
  - Reglas DS de contraste: íconos principales con buen contraste; texto `text-brand-ink-800` sobre fondos claros.
  - Si no hay plataformas o "no seguro", se salta "Measures" (ya implementado en `useQuizState`).

- Paso: Medidas por plataforma (`MeasuresStep`) — Opcional contextual
  - `ChecklistByPlatform` con feedback positivo/neutral en `Notice`.
  - Copys de refuerzo: "Te ayudaremos con las que faltan."

- Paso: Hábitos y señales (`HabitsSignalsStep`) — Requerido (al menos un campo)
  - Tres secciones con checkboxes: prácticas positivas, desafíos, señales.
  - Etiquetas claras, íconos con alto contraste (`text-green-600`, `text-amber-600`, `text-red-600` sobre fondo claro).

- Paso: Preocupaciones (`ConcernsStep`) — Requerido
  - Base + opción restringida por edad (sexting 13+).
  - Incluir `GlossaryTerm` para términos técnicos (grooming, sexting).
  - Mensaje de recuento dinámico con lenguaje positivo.

- Paso: Resultado y Plan (`DoneStep`)
  - Mostrar "Medidas específicas" generadas por `generateSpecificMeasures`.
  - Captura de email para plan PDF y recordatorios (ver A/B más abajo).
  - CTAs: "Hacer el quiz de nuevo" (reinicio estado) y "Ver recursos".

- Analytics (eventos sugeridos)
  - `session_start` (ya implementado)
  - `quiz_step_view` (ya implementado)
  - `platform_select`, `measures_selected`, `concern_select` (existentes)
  - `quiz_complete` (existente)
  - `plan_email_request` (al enviar email)
  - Añadir: `ab_gate_view`, `ab_gate_submit`, `ab_gate_skip` cuando se integre `ABGateEmail`.

---

## 5. Diseño de interfaz y DS
- Tipografía
  - Títulos: `font-heading` con escala responsiva del DS (H2/H3 según contexto).
  - Texto: `font-body`, `text-brand-ink-900` para principal, `text-brand-olive-500` para secundario.

- Colores y contraste (WCAG AA)
  - Texto normal ≥4.5:1. Preferir `brand-ink-900` o `brand-olive-500` sobre `white`.
  - `brand-teal-500` en texto solo para títulos grandes (≥18px, semibold) o enlaces subrayados.
  - Evitar `brand-teal-500` sobre `brand-mint-200` para texto normal (insuficiente).

- Contenedores y sombras
  - `AppShellCard` ya aplica `shadow-soft`, bordes sutiles y gradiente de fondo. Conservarlo.
  - Efectos hover: `hover:shadow-lg` en elementos interactivos y `transition-smooth`.

- Interacción y animación
  - Stagger en grids con Framer Motion, delays cortos (0.1s x índice).
  - Respetar `prefers-reduced-motion`.

- Accesibilidad
  - Tap-targets ≥44px (ya contemplado).
  - Focus visibles: `focus-visible-brand`.
  - Progressbar con `aria-*`; botones con `aria-pressed`/`aria-disabled` cuando aplique.
  - `GlossaryTerm` para términos técnicos (nsfw, grooming, sexting, etc.).

---

## 6. A/B de captura de email (recomendado)
Reemplazar la sección de email manual de `DoneStep` por `ABGateEmail` para testear variantes:

- Variantes:
  - A: email requerido (button "Enviar mi plan").
  - B: email opcional + "Ver en pantalla".
  - C: email requerido (button "Recibir mi plan").
- Eventos:
  - `ab_gate_view` (variant)
  - `ab_gate_submit` (variant, email_provided, wants_reminders)
  - `ab_gate_skip` (solo variante B)
- Beneficio: Mejor medición de fricción/aceptación antes del plan y consistencia visual con DS.

---

## 7. Diagnóstico Exprés — Detalle de contenido (propuesto)
- 7 preguntas Sí/No, lenguaje simple:
  1) ¿Tienen reglas sobre uso de dispositivos en comidas o antes de dormir?
  2) ¿Tu hijo/a sabe cómo bloquear o reportar contenido o personas?
  3) ¿Conoces las plataformas que usa con más frecuencia?
  4) ¿Usan controles parentales en al menos un dispositivo?
  5) ¿Hablan periódicamente sobre riesgos en internet?
  6) ¿Mantienen horarios de sueño consistentes sin pantallas?
  7) ¿Has revisado privacidad en sus cuentas principales?
- Copys de feedback final:
  - 🟢 "Tu familia está bien encaminada. Mantén hábitos y refuerza la comunicación."
  - 🟡 "Tu familia puede fortalecerse. Te sugeriremos acciones concretas."
  - 🔴 "Hay aspectos importantes por mejorar. Te acompañaremos paso a paso."

---

## 8. Copys guía (ES-MX)
- "Responder te tomará menos de 2 minutos."
- "Cada respuesta te acerca a una familia más protegida."
- "No hay respuestas malas, solo oportunidades para mejorar."
- "Te ayudaremos con pasos sencillos, uno a la vez."

---

## 9. Analítica y privacidad
- Usar `utils/analytics.ts` (placeholder) + `useQuizState.track`.
- Guardar estado en `localStorage` (ya implementado). Aclarar uso anónimo.
- Eventos clave: ver secciones 3 y 4.
- Respetar privacidad; email para enviar plan y recordatorios opcionales.

---

## 10. Entregables sugeridos
- Subruta `/quiz/express` o modo exprés dentro de `/quiz`.
- Integración de `ABGateEmail` en `DoneStep`.
- Textos del glosario (`src/data/glossary.ts`) ampliados para términos faltantes (nsfw, sexting, etc.).
- Ajustes visuales menores para asegurar contraste AA en cada estado.

---

## 11. Backlog (prioridad recomendada)
1) Implementar "Diagnóstico Exprés" con 7 preguntas y pantalla de resultado.
2) Integrar `ABGateEmail` en el paso final con tracking A/B.
3) Ampliar glosario y reemplazar términos técnicos donde aplique.
4) Validación de contraste y accesibilidad en móviles (QA).
5) Telemetría: revisar embudos (start → complete, email gate → submit).
