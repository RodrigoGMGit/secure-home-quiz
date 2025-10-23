## Plan de implementación por fases — Plan personalizado (HTML → PDF + Email)

### Objetivo
- Definir, paso a paso, cómo generar un plan personalizado a partir de las respuestas del quiz y el contenido de `manual.md`, renderizarlo como página HTML fiel al sistema de diseño y convertirlo a PDF en backend, con entrega mediante descarga directa y/o envío por correo.

### Alcance
- Incluye: vista imprimible HTML del plan, lógica de personalización, función serverless para generación de PDF, envío por email, métricas.
- **NO incluye**: almacenamiento persistente, tokens JWT, base de datos para planes.
- No incluye: reescritura del quiz, cambios en la arquitectura de navegación principal, ni rediseño del sistema de diseño.

### Principios
- Mantener consistencia con el Sistema de Diseño del proyecto (colores, tipografía, accesibilidad WCAG AA, responsivo).
- Reutilizar contenido de `markdown_files/manual.md` como fuente de verdad.
- Separar responsabilidades: personalización/UI en frontend, generación de PDF y entrega en backend.
- Respetar privacidad: **enfoque temporal sin persistencia**; datos solo en memoria del navegador; no exponer datos sensibles en URLs.

---

## Fase 1 — Vista HTML imprimible del plan

### Resultado esperado
- Ruta dedicada que renderiza el plan personalizado con el mismo look & feel del sitio y está optimizada para impresión.

### Especificaciones
- Ruta: `GET /print/plan` (no enlazada en navegación principal; accesible desde el quiz completado).
- Datos de entrada: objeto completo de respuestas del quiz en memoria (estado React).
- Origen de datos: respuestas del quiz (estado temporal en memoria) + bloques de contenido extraídos/mapeados desde `manual.md`.
- Lógica de personalización: motor determinístico que, en función de edad, plataformas seleccionadas y riesgos, compone secciones del plan (títulos, descripciones, checklists, llamadas a la acción, recursos).
- Diseño:
  - Aplicar tokens y componentes conforme al sistema de diseño (tipografías, espaciado, colores, iconografía Lucide).
  - Estructura responsiva móvil→desktop; usar patrones de páginas de contenido donde aplique.
  - Optimización de impresión con `@media print` (quitar elementos no necesarios, definir márgenes, saltos de página, color de fondo habilitado, desactivar animaciones).
  - Accesibilidad: contraste AA, semántica, orden lógico de lectura, tamaños mínimos clicables en vista web.
- Seguridad:
  - No transmitir PII por querystring ni URLs.
  - Datos solo existen en memoria del navegador; se pierden al cerrar la pestaña.
- Estados de carga/errores: placeholders claros, mensajes en ES-MX.

### Entregables de la fase
- Ruta funcional `print/plan` con contenido correcto según un set de fixtures de respuestas.
- Documento de mapeo "respuestas → secciones del plan" (tabla o JSON de especificación interna).
- Checklist de contraste y accesibilidad verificado.

### Criterios de aceptación
- La página muestra secciones correctas para al menos 6 combinaciones de respuestas (diferentes edades/plataformas/riesgos).
- La impresión desde navegador produce un resultado visualmente consistente (previa a PDF serverless).
- No hay fugas de datos en URL; datos solo existen en memoria del navegador.

---

---

## Fase 2 — Optimización de CSS para Impresión

### Resultado esperado
- CSS de impresión optimizado que produce resultados visualmente consistentes y de alta calidad al imprimir desde el navegador.

### Especificaciones
- **Objetivo principal**: Lograr que la impresión desde navegador (`Ctrl+P`) produzca un resultado idéntico al diseño web.
- **Optimizaciones críticas**:
  - Forzar impresión de colores y fondos con `print-color-adjust: exact`
  - Optimizar márgenes de página (`@page` margin: 16mm)
  - Mapear gradientes a colores sólidos equivalentes
  - Configurar tipografías para impresión con fallbacks
  - Controlar saltos de página y cortes de secciones
- **Elementos a optimizar**:
  - Fondos de cards y contenedores
  - Colores de marca (teal, mint, olive, ink)
  - Iconos y elementos decorativos
  - Espaciado y márgenes
  - Tipografía y legibilidad
- **Testing**: Validación mediante vista previa de impresión del navegador

### Entregables de la fase
- CSS de impresión optimizado en `src/index.css`
- Documentación de cambios realizados
- Checklist de elementos verificados en impresión

### Criterios de aceptación
- La impresión desde navegador (`Ctrl+P`) muestra todos los colores y fondos correctamente
- Los márgenes y espaciado son apropiados para formato A4
- Las tipografías se renderizan correctamente
- Los elementos decorativos mantienen su apariencia visual
- No hay cortes feos de secciones o contenido

---

## Fase 3 — Generación de PDF con Playwright

### Resultado esperado
- Endpoint backend que convierte la ruta HTML imprimible en un PDF de alta fidelidad para descarga directa.

### Especificaciones
- Endpoint: `POST /api/generate-plan`
  - Entrada: objeto completo de respuestas del quiz (datos en memoria).
  - Salida: `application/pdf` (descarga directa).
- Motor de renderizado: **Playwright** (recomendado sobre Puppeteer por mejor mantenimiento y performance).
- Captura:
  - Navegar a la página `/print/plan` del frontend local.
  - Inyectar datos del quiz usando `window.mockQuizAnswers` y eventos personalizados.
  - Esperar a que se renderice el contenido con `waitForSelector('.print-container')`.
  - Generar PDF en formato A4, `printBackground` activado, márgenes coherentes, escala adecuada.
- Performance:
  - Tiempo objetivo: < 3 s por plan bajo carga normal.
  - Configuración optimizada para serverless (args de Chromium).
- Observabilidad: logging básico (inicio/fin, duración, errores), sin volcar PII.
- Seguridad y configuración:
  - Variables de entorno para URLs del frontend.
  - Validación de los datos de entrada.
  - Límites de tasa (rate limiting) para evitar abuso.

### Entregables de la fase
- Express server local funcional con endpoint de generación PDF.
- PDF generado con fidelidad visual equivalente a la vista HTML.
- Documentación de configuración y requisitos de runtime.

### Criterios de aceptación
- La generación de PDF funciona para las mismas 6 combinaciones usadas en Fase 1.
- El archivo respeta el sistema de diseño (colores, tipografías, iconos, espaciado) y cortes de página.
- Manejo de errores controlado (respuestas 4xx/5xx predecibles).
- No se persisten datos en base de datos; todo es temporal.
- **Dependencia**: Requiere que la Fase 2 (CSS optimizado) esté completada.

---

## Fase 4 — Envío por Correo del PDF

### Resultado esperado
- Capacidad de enviar el PDF generado al correo proporcionado por la persona usuaria usando Resend.

### Especificaciones
- Extensión del endpoint: `POST /api/generate-plan`
  - Entrada: objeto completo de respuestas del quiz + `email` opcional.
  - Salida: JSON de confirmación cuando se envía por email, PDF directo cuando no hay email.
- Proveedor de email: **Resend** (recomendado sobre Gmail por analytics, webhooks y dominio personalizado).
- Configuración:
  - Usar capa gratuita de Resend (3,000 emails/mes, dominio personalizado incluido).
  - Configurar `noreply@hogares-seguros.mx` como dirección de envío.
  - Implementar plantilla HTML profesional con branding del proyecto.
- Flujo:
  - Generar PDF usando la funcionalidad de Fase 3.
  - Adjuntar PDF al email con nombre descriptivo.
  - Enviar email con plantilla personalizada en ES-MX.
- Métricas: registrar eventos de "PDF generado", "email enviado" usando analytics de Resend.

### Entregables de la fase
- Envío funcional a una casilla de prueba, con adjunto correcto.
- Plantilla de correo aprobada con branding del proyecto.
- Integración completa PDF + Email funcionando.

### Criterios de aceptación
- Entrega confiable en bandeja de entrada (sin spam) en pruebas controladas.
- El adjunto abre correctamente y corresponde a los datos del quiz solicitado.
- No se almacenan datos del usuario; todo es temporal.
- Analytics básicos funcionando (entregas, aperturas).
- **Dependencia**: Requiere que la Fase 3 (Playwright) esté completada.

---

## Fase 5 — Analytics y conversión

### Resultado esperado
- Medición clara del funnel: fin de quiz → vista del plan → generación PDF → email/descarga.

### Especificaciones
- Eventos mínimos:
  - `quiz_completed`, `plan_viewed`, `pdf_requested`, `pdf_generated`, `email_sent`, `pdf_downloaded`.
- Dashboard simple con tasas de conversión y tiempos promedio.
- **NOTA**: No incluir `planId` en eventos; usar identificadores anónimos si es necesario.

### Criterios de aceptación
- Eventos visibles en el sistema de analytics actual del proyecto.
- Reporte básico de conversión disponible para el equipo.

---

## Fase 6 — Despliegue multi-plataforma

### Resultado esperado
- Capacidad de operar en Vercel (actual), Netlify (alternativa) y Azure (futuro) con cambios mínimos.

### Especificaciones
- Vercel:
  - Función serverless Node con navegador headless empaquetado (dependencias adecuadas).
  - Variable `SITE_URL` y secretos de email configurados.
- Netlify:
  - Funciones equivalentes; ajustar build/zip si se requiere para Chromium.
- Azure:
  - Azure Functions Linux; considerar contenedor si se prefiere portabilidad total.

### Criterios de aceptación
- Generación y envío funcionando al menos en el hosting primario (Vercel) y probada en la alternativa elegida.

---

## Seguridad y privacidad (transversal)

### Requisitos
- No incluir PII en rutas ni nombres de archivo.
- Datos solo existen en memoria del navegador; se pierden al cerrar la pestaña.
- Encriptar secretos en variables de entorno del hosting.
- No persistir datos del usuario; enfoque temporal por diseño.

---

## QA y accesibilidad

### Requisitos
- Revisión de contraste WCAG AA en todos los textos y elementos críticos.
- Verificación de legibilidad en PDF impreso (tipografías, tamaños, márgenes).
- Pruebas con diferentes combinaciones de respuestas.

---

## Dependencias y configuración

### Variables de entorno (ejemplo de nombres)
- `SITE_URL` (URL pública para capturar la ruta imprimible).
- `FRONTEND_URL` (URL del frontend local para desarrollo).
- `RESEND_API_KEY` y `EMAIL_FROM` (proveedor de email Resend).
- ~~`SUPABASE_URL` / `SUPABASE_ANON_KEY` (si aplica almacenamiento).~~ **NO REQUERIDO** para enfoque temporal.

### Contenido
- `markdown_files/manual.md` como fuente de texto y mensajes educativos; mantener un mapeo claro a secciones del plan.

---

## Entregables finales
- Vista imprimible del plan, endpoint de generación PDF, envío por email, documentación de configuración. **NO incluye almacenamiento persistente**.

## Criterios de éxito
- Fidelidad visual del PDF respecto a la vista HTML.
- Tiempos de generación aceptables en producción.
- Entrega de correo confiable y medible.
- Cumplimiento de accesibilidad y privacidad.
- **Enfoque temporal**: datos no persisten; privacidad por diseño.

---

## Riesgos y mitigaciones
- Dependencias de navegador headless en serverless: validar tamaño y runtime; usar imágenes base o alternativas soportadas por el hosting.
- Tipografías de marca: revisar licencias; si no es posible incrustarlas, usar fallbacks compatibles y asegurar contraste.
- Volumen de generación: añadir cola/reintentos si la demanda crece; considerar pre-generación bajo demanda con almacenamiento temporal.
- Cambios futuros de hosting: mantener configuración desacoplada vía variables de entorno; evitar APIs propietarias.

---

## Roadmap sugerido
1. F1: Implementar `print/plan` con 6 casos de prueba representativos (datos en memoria).
2. F2: Optimizar CSS de impresión para lograr resultados perfectos desde navegador.
3. F3: Implementar Express server local con Playwright para generación de PDF.
4. F4: Integrar Resend para envío por email con plantilla profesional.
5. F5: Instrumentar analytics básicos del funnel (sin PII).
6. F6: Pruebas de despliegue y performance; checklist final de accesibilidad.


