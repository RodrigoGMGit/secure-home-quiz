# Proyecto: Manual Hogares Seguros → Sitio web educativo + Diagnóstico

> **Propósito:** Convertir el manual en una experiencia web que **eduque**, **diagnostique** (quiz → plan personalizado) y **sirva de referencia**. Público principal: madres/padres/tutores en México (ES-MX).

---

## 0) Estado actual (Fase 1 cerrada, Fase 2 en curso, Fase 3 iniciada)
- **F1 Fundamentos:** ✅ idioma ES-MX; audiencias MX; bandas de edad para hijos (6–8, 9–12, 13–15, 16–17); plataformas v1 (WhatsApp, YouTube/YouTube Kids, Roblox/Minecraft, TikTok); riesgos v1 (contenido inapropiado, contacto/grooming, ciberacoso, tiempo/sueño, privacidad/seguridad, sexting 13+); tono cálido/accionable; paleta y tipografías (Brandon/Uniform). Opt-ins granulares (enviar plan por email y suscripción futura). KPI nuevo: **conversión scrolly → Tool**.
- **F2 Métricas & Personalización:** ✅ matriz v1 edad×plataforma×riesgo → acciones + guiones; ✅ taxonomía de eventos (incl. UTMs/referrer/device). **Pendiente ligero:** aviso corto de privacidad; props finales de atribución; escoger stack de analítica (Plausible/PostHog/Mixpanel/Matomo); conversión OTF→WOFF2 (en proceso).
- **F3 Historia/Mensajes:** **Hero v1 implementado** (ver UI). **Pendiente:** blueprint de scrollytelling (6 escenas) y mapa de contenidos del hub v1.

---

## 1) Objetivos y métricas (para dev)
**Objetivo de producto:** Aumentar conductas de protección en el hogar digital.

**KPIs v1**
1. % que **inician** el Diagnóstico/Tool.
2. % que **completan** el Tool.
3. % que **realizan al menos 1 acción** (autorreporte simple en plan).
4. % que **conversan** con hijas/hijos usando un script (autorreporte).
5. % que **regresan** a actualizar plan (30–60 días).
6. % que **no clicaron el Tool en HERO** pero **sí después del scrollytelling**.

---

## 2) Reglas de personalización (motor del plan)
- **Bandas de edad (hijas/os):** 6–8 · 9–12 · 13–15 · 16–17.
- **Plataformas v1:** WhatsApp · YouTube/YouTube Kids · Roblox/Minecraft · TikTok (13+).
- **Riesgos v1:** contenido inapropiado · contacto/grooming · ciberacoso · tiempo/sueño · privacidad/seguridad · sexting (13+).
- El Diagnóstico recolecta **edad en banda**, **plataformas en uso**, **preocupaciones** → genera **acciones próximas** + **scripts de conversación** por combinación.
- **Scrollytelling** es para adultos; solo *guiños* de personalización por edad (no 4 historias distintas).

> **Nota dev:** el motor puede implementarse como **reglas JSON** consumidas por el cliente (para iterar sin deploy backend) o servidas desde un endpoint. Ver \[3.2\].

---

## 3) Arquitectura de contenido (sin UI)
### 3.1 HERO (implementado)
- Variantes probables: **Acción inmediata** / **Empoderamiento** / **Historia primero**. La v1 actual empuja a **Hacer el Quiz ahora** y **Conocer más** (scrolly).
- Microcopy base: “En 3 minutos obtienes un plan simple…”.

### 3.2 Scrollytelling (pendiente implementar)
**6 escenas**, cada una con objetivo, dato/idea, micro-acción (CTA) y evento:
1) Conciencia (la puerta es el Wi‑Fi) → seleccionar plataformas.
2) Plataformas MX (WA, YT/YTK, Roblox/Minecraft, TikTok 13+) → quick fixes.
3) Señales (ánimo/sueño/chats) → abrir guion de conversación.
4) Mini-casos (elige tu camino) → añadir paso al plan.
5) “Lo que cambia en 3 minutos” → **CTA fuerte al Tool**.
6) Cierre de confianza → CTA “Hacer mi diagnóstico”.

### 3.3 Hub de referencia v1
- Filtros: **Edad** · **Plataforma** · **Objetivo** (Configurar · Conversar · Limitar · Denunciar).
- Guías priorizadas v1 (2–3 min, “por qué / cómo / si ya pasó / habla así”).

---

## 4) Analítica y datos
### 4.1 Eventos (nombres y props)
```text
page_view {path}
session_start {utm_source, utm_medium, utm_campaign, utm_content, referrer, device_type, os, browser, lang, connection, first_visit}
hero_tool_cta_view
hero_tool_cta_click {variant}
scrolly_start
scrolly_scene_view {scene_id, order}
scrolly_to_tool_cta_view {scene_id}
scrolly_to_tool_cta_click {scene_id}
platform_quick_fix_click {platform}
script_open {topic}
scenario_choice {case_id, choice_id}
tool_start {entry_source: hero|scrolly|nav}
tool_question_view {q_id}
tool_question_answer {q_id, value}
tool_progress {percent}
tool_complete {age_band, platforms_selected, risks_selected}
plan_generated {areas_prioritized}
plan_section_expand {section_id}
plan_download_pdf
plan_send_email_click
plan_email_sent
plan_share_link_copy
action_taken {action_type: parental_control|conversation|rule_set|report_made}
return_checkin_click
return_checkin_complete
```

### 4.2 Atribución y device (sin invadir privacidad)
- Capturar **UTMs**, `document.referrer`, **UA parse** (os/browser/in‑app: Instagram/TikTok/FB), `navigator.language`, `navigator.connection.effectiveType` (si disponible), **viewport→device_type**.
- **Geo** aprox server-side (país/estado) guardando **solo región** (no IP).
- **Visitor ID** first‑party (UUID en LocalStorage) para revisitas; sin PII por defecto.

### 4.3 Opt‑ins y perfilamiento
- Plan **en pantalla** sin PII.
- **Opcional 1:** enviar plan por **email** (un campo + consentimiento).
- **Opcional 2:** **suscripción** a contenidos futuros (checkbox separado).
- **Módulo de investigación post‑plan** (opt‑in 60–90s): estado/ciudad, relación (madre/padre/tutor), cómo nos conoció, tiempo disponible, tema prioritario, canal preferido, autoconfianza 1–5.
- **Retención:** PII 12 meses (ajustable por ONG). Borrado fácil.

---

## 5) Diseño (tokens y lineamientos)
### 5.1 Tipografía
- **Títulos:** Brandon Grotesque **Bold** **MAYÚSCULAS**.
- **Cuerpo:** Uniform Regular y Uniform Bold.
- **Fallbacks:** Brandon→`Montserrat, Arial, sans-serif`; Uniform→`Inter, Arial, sans-serif`.
- **Accesibilidad:** base 16px, interlínea 1.5, tap‑target ≥ 44px, foco visible.
- **Entrega:** convertir `.otf` → `.woff2` y servir con `font-display: swap`.

### 5.2 Paleta → CSS custom properties
```css
:root{
  --brand-ink-900:#002B36; /* PMS 547C */
  --brand-ink-800:#003556; /* PMS 302C */
  --brand-teal-500:#3994B2;/* PMS 7459C */
  --brand-olive-500:#576D5B;/* PMS 5615C */
  --brand-mint-200:#B0E0D6;/* PMS 573C */
  --neutral-100:#D5D6D5;   /* Cool Gray 1C */
  --white:#FFFFFF;

  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-6:24px; --space-8:32px;
  --radius-sm:8px; --radius-md:12px; --radius-lg:16px; --radius-xl:20px;
  --shadow-card:0 4px 16px rgba(0,0,0,.08);
}
```
**Uso:** botón primario `--brand-ink-800` (texto blanco), hover `--brand-ink-900`; enlaces/acento `--brand-teal-500`; fondos suaves `--brand-mint-200`/`--neutral-100`; texto principal `--brand-ink-900` sobre blanco.

---

## 6) Requisitos de accesibilidad y rendimiento
- WCAG **AA**: contraste, foco visible, navegación por teclado, captions/audio‑descripción.
- Preferencia del usuario: **prefers‑reduced‑motion** (fallback sin animaciones en scrolly).
- Performance budgets: imágenes responsive, lazy‑load, evitar bundles pesados; soporte Android gama media/red inestable.

---

## 7) A/B/C del plan por email (para dev y data)
- **A (Teaser‑gate):** mostrar 3–5 pasos prioritarios y pedir email para PDF completo.
- **B (Open + Optional):** plan completo en pantalla; descargar PDF por email (beneficio: imprimible + recordatorio 30 días).
- **C (Hard gate, baseline):** resumen sólo; email obligatorio para ver completo.
**Métrica primaria:** `email_submit_rate` (emails / plan_generated). **Secundarias:** rebote post‑tool; `plan_download_pdf`; retorno.

---

## 8) Propuesta técnica (alto nivel, aún flexible)
- **FE:** React/Next con IntersectionObserver/ScrollTimeline para scrolly (y fallback sin motion).
- **CMS del hub:** Sanity/Strapi (o MDX si volumen bajo).
- **Motor de reglas del plan:** JSON versionado (en repo o headless) para iteración rápida.
- **PDF:** server‑side render (calidad) o html→pdf cliente en MVP.
- **Analítica:** Plausible/PostHog/Mixpanel/Matomo con eventos personalizados (ver §4.1).

---

## 9) Archivos / estructura sugerida
```
/analytics/schema.md            # eventos + props
/content/rules/plan.v1.json     # reglas edad×plataforma×riesgo
/content/hub/
  whatsapp/*.md
  youtube/*.md
  roblox-minecraft/*.md
  tiktok/*.md
/scrolly/blueprint.md           # guion de 6 escenas (pendiente)
/ui/tokens.css                  # variables de diseño
/ui/fonts/
  BrandonGrotesque-Bold.woff2
  Uniform-Regular.woff2
  Uniform-Bold.woff2
/experiments/plan-email-abc.md  # hipótesis, variantes, métricas
/privacy/notice-short.md        # aviso claro ES-MX (pendiente)
```

---

## 10) Qué sigue (orden recomendado)
1) **Escribir blueprint del scrollytelling** (6 escenas con copy e interacciones).
2) **Definir 6 guías del hub** para v1 (profundas) y crear sus borradores.
3) **Redactar aviso corto de privacidad** (ES‑MX) y publicar en `/privacy`.
4) **Elegir stack de analítica** y cablear eventos base (§4.1).
5) **Subir fuentes WOFF2** y tokens CSS.
6) **Configurar experimento A/B/C** del plan por email.

---

## 11) Criterios de aceptación (dev)
- HERO: CTA primario y secundario registran `hero_tool_cta_click {variant}`.
- Scrolly: mínimo `scrolly_start`, `scrolly_scene_view`, `scrolly_to_tool_cta_click`.
- Tool: `tool_start {entry_source}`, `tool_complete {age_band, platforms_selected, risks_selected}`.
- Plan: render completo en pantalla, `plan_generated`, `plan_download_pdf` y flujo de email.
- Accesibilidad AA en hero y scrolly (reduced motion probado). Performance LCP < 2.5s en móvil gama media.

---

## 12) Contacto y gobierno
- Aprobación de contenidos/tokens: responsable designado por la ONG (definido aparte).
- Bitácora de decisiones y cambios versionados en docs del repo.

