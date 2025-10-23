# Mapeo de Preguntas del Quiz → Contenido del Plan (PDF)

Este documento describe cómo cada respuesta del Quiz Personalizado impacta el contenido del Plan impreso (pantalla de impresión/PDF).

## Flujo del Quiz y Claves de Datos

Orden de pasos y claves capturadas (ver `src/pages/QuizPersonalizado.tsx` y `src/hooks/useQuizState.tsx`):
- welcome → (sin datos)
- gender → `answers.child_gender?`
- age → `answers.age_band` (6-8 | 9-12 | 13-15 | 16-17)
- platforms → `answers.platforms: Platform[]`, `answers.other_platforms?`, `answers.unknown_platforms?`
- measures → `answers.measures: { [key in Platform]?: string[] }`
- habits_signals → `answers.habits: string[]`, `answers.signals: string[]`
- concerns → `answers.concerns: string[]`
- done → genera `PlanInput` y `buildPlan(PlanInput)`

PlanInput final (ver `src/types/quiz.ts` y uso en `DoneStep`):
```ts
{
  age_band,
  platforms,
  other_platforms?,
  unknown_platforms,
  measures,
  habits,
  signals,
  concerns,
  ab_variant_plan_email
}
```

## Generación del Plan

El plan se genera con `buildPlan` (`src/data/plan/rules.ts`) consumiendo `contentBlocks` (`src/data/plan/blocks.ts`). El PDF (pantalla `src/pages/print/Plan.tsx`) renderiza secciones:
- `PlanCover`
- `PlanPriorities`
- `PlanPlatforms`
- `PlanScripts`
- `PlanChecklist`
- `PlanResources`

### Resumen (PlanCover)
- Muestra: `summary.age_band`, `summary.platforms`, fecha y métricas.
- Fuente: `Plan.summary` creado en `buildPlan` con:
  - `age_band: input.age_band`
  - `platforms: input.platforms`
  - `top_priorities: getTopPriorities(input)`
  - `total_actions: suma de acciones en todas las secciones`
  - `urgent_actions: número de acciones urgentes`
- Notas de formato: Mapea nombres de plataformas a texto visible.

### Acciones Prioritarias (PlanPriorities)
- Incluye: acciones de secciones con `priority === 'urgent'` y `priority === 'high'` (máx. 5 de alta).
- Fuente: Acciones provienen de:
  - Urgentes: bloque `urgent_signals` si `signals.length > 0` y si los tags de la acción incluyen `signal:{id}` de la señal elegida.
  - Altas: secciones construidas por reglas de `buildPlan` (parental controls, family rules, concerns) filtradas por edad/medidas implementadas.

### Guías por Plataforma (PlanPlatforms)
- Agrupa acciones por `action.platform` y muestra pasos.
- Fuente: Sección "Controles Parentales" del plan formada desde `contentBlocks` con tags `platform:{platform}` y filtro por edad y medidas ya implementadas.
- Cobertura actual de plataformas en `contentBlocks`:
  - YouTube: ✅ (bloque `parental_controls_youtube`)
  - WhatsApp: ✅ (bloque `parental_controls_whatsapp`)
  - TikTok: ✅ (bloque `parental_controls_tiktok`)
  - Instagram: ❌ (no hay bloque)
  - Roblox: ❌ (no hay bloque)
  - Minecraft: ❌ (no hay bloque)

### Scripts de Conversación (PlanScripts)
- Muestra acciones que tengan `conversationScript` (de cualquier sección).
- Fuente: Se recorre `plan.sections[*].actions` y se filtra `action.conversationScript`.

### Checklist (PlanChecklist)
- Combina items fijos + items derivados de acciones del plan con `severity === 'high'` (seguimiento semanal).
- No usa directamente las respuestas; depende de las acciones presentes en el plan.

### Recursos (PlanResources)
- Recursos específicos se basan en `plan.summary.concerns` y `plan.summary.platforms`:
  - Si incluye `youtube`/`tiktok`/`whatsapp` → link a `Tu familia > Redes sociales`.
  - Si incluye `roblox`/`minecraft` → link a `Tu familia > Videojuegos`.
  - Preocupaciones: `ciberacoso`, `grooming`, `sexting` → links a `Riesgos digitales`.
- Recursos generales siempre visibles (Controles, Comunicación, Recursos, Ayuda).

## Reglas del Motor (`buildPlan`)

1) Acciones Urgentes (`urgent_actions`)
- Condición: `input.signals.length > 0`.
- Fuente: bloque `urgent_signals`.
- Filtro: acción incluida si `action.tags` tiene `signal:{signalId}` para algún `signalId` en `input.signals`.
- Mapeo esperado de señales (IDs usados en el paso):
  - `sleep_issues` → no mapeado en `blocks` (no dispara urgentes)
  - `secretive_behavior` → corresponde a `signal:secreto_dispositivos`
  - `aislamiento` y `cambios_conducta` aparecen en fixtures, pero el UI actual usa `sleep_issues`/`secretive_behavior`.
- Desalineación actual: los IDs de `HabitsSignalsStep` no coinciden 1:1 con tags de `urgent_signals`.
  - UI: `sleep_issues`, `secretive_behavior`
  - Blocks: `signal:aislamiento`, `signal:cambios_conducta`, `signal:secreto_dispositivos`

2) Controles Parentales (`parental_controls`)
- Condición: `input.platforms.length > 0`.
- Fuente: bloques con `tags` que incluyen `platform:{platform}`.
- Filtro: por edad (`age:{band}` o `age:all`) y excluye acciones ya implementadas según `measureToActionMap`.
- Desalineación actual: faltan bloques para `roblox` y `minecraft` (aunque aparecen en UI y en `PlanPlatforms` mapeo visual).

3) Reglas Familiares (`family_rules`)
- Siempre incluidas. Filtra por edad y excluye acciones ya implementadas.

4) Comunicación y Apoyo (`communication`)
- Siempre incluidas. Filtra por edad.

5) Preocupaciones Específicas (`concerns`)
- Condición: `input.concerns.length > 0`.
- Fuente: bloques con `tags` `concern:{id}`.
- IDs de preocupaciones en UI vs bloques:
  - UI: `inappropriate_content`, `grooming`, `cyberbullying`, `tiempo_sueno`, `privacy_data`, `no_se`, `sexting (13+)`.
  - Blocks: `concern:ciberacoso`, `concern:grooming`, `concern:sexting`, `concern:tiempo_excesivo`.
- Desalineación actual: nombres no coinciden (inglés vs español/otros conceptos). Estas no activarán acciones si no hay match exacto.

## Mapeo Resumen: Quiz → PDF

- `age_band` → Portada (edad), prioridades (por edad), filtros de edad en acciones.
- `platforms` → Portada (lista), Controles parentales (YouTube/TikTok/WhatsApp hoy), Recursos (redes/videojuegos), Prioridades (añade ítems según plataformas).
- `measures` → Filtrado de acciones ya implementadas vía `measureToActionMap` (YouTube/TikTok/WhatsApp hoy).
- `habits` → No impactan directamente el PDF; sirven para contexto (no hay bloques específicos).
- `signals` → Si hay coincidencia exacta con tags de `urgent_signals`, aparecen Acciones Urgentes y se reflejan en Prioridades.
- `concerns` → Si hay coincidencia exacta con `concern:{id}`, se agregan acciones en la sección de Riesgos Específicos y recursos.

## Desalineaciones Detectadas (a corregir)

1) Señales (urgent_signals):
- UI usa: `sleep_issues`, `secretive_behavior`.
- Blocks usan: `signal:aislamiento`, `signal:cambios_conducta`, `signal:secreto_dispositivos`.
- Solución propuesta: estandarizar IDs en UI o agregar alias en regla (mapear UI→tags).

2) Plataformas Juegos:
- UI ofrece `roblox`, `minecraft`, pero `contentBlocks` no tiene bloques de controles parentales para estas.
- Efecto: no salen guías de plataforma en el PDF para juegos.
- Solución propuesta: agregar bloques `parental_controls_roblox` y `parental_controls_minecraft` con `platform:{id}` y pasos.

3) Preocupaciones:
- UI: `inappropriate_content`, `cyberbullying`, `tiempo_sueno`, `privacy_data`, `no_se`.
- Blocks: `ciberacoso`, `tiempo_excesivo`, etc.
- Efecto: varias preocupaciones no disparan acciones.
- Solución propuesta: alinear valores de `ConcernsStep` con los `concern:{id}` existentes o ampliar `blocks`.

## Rutas y Componentes PDF
- Página de impresión: `src/pages/print/Plan.tsx` (usa `window.print()` como stub de PDF).
- Secciones:
  - Portada: `src/components/plan/PlanCover.tsx`
  - Prioridades: `src/components/plan/PlanPriorities.tsx`
  - Plataformas: `src/components/plan/PlanPlatforms.tsx`
  - Scripts: `src/components/plan/PlanScripts.tsx`
  - Checklist: `src/components/plan/PlanChecklist.tsx`
  - Recursos: `src/components/plan/PlanResources.tsx`

## Referencias del Motor
- Reglas: `src/data/plan/rules.ts`
- Bloques: `src/data/plan/blocks.ts`
- Tipos: `src/types/plan.ts`, `src/types/quiz.ts`

## Notas
- La pantalla “Ver mi Plan Completo” navega con el plan generado en estado (ver `DoneStep` → `navigate('/print/plan', { state: { plan } })`).
- En ausencia de estado, `Plan.tsx` genera un mock para desarrollo.
