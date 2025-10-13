# 📘 Manual de Implementación – Proyecto Hogares Digitales Seguros

Este documento define lo que se debe implementar en el proyecto actual para habilitar:

* El **Manual Interactivo** (consulta por temas)
* La sección de **Recursos**
* La sección de **Ayuda/Contacto**
* El **Menú Global**

Asegurate de leer y considerar estas Instrucciones de implementación:
*Para la implementación de estas secciones, que la información venga de manual.md
*Utiliza el sistema de diseño del proyeco en todas las cosas a implementar
*Que todo lo que implementes sea reponsivo
*Cuando finalices de implementar algo marca en este documento como finalizado la seccion o tarea

---
## 4. Menú Global (Header) - Hecho!

* Menú fijo con las siguientes entradas principales:
  * **Inicio**
  * **Conoce Más** (scrollytelling)
  * **Quiz**
  * **Aprende** (menú desplegable con: Tu Familia, Riesgos, Controles, Comunicación, Acciones Legales)
  * **Recursos**
  * **Ayuda**
* En móvil: navegación en **menú acordeón**.

## 1. Aprende

### 1.1 Tu Familia ✅ FINALIZADO

* Implementar **checklist interactivo** con 7 preguntas clave para evaluar hábitos en el hogar.
  * Preguntas tipo toggle o checkbox.
  * Mostrar resultados dinámicos con colores (🟢 hogar seguro / 🟡 en riesgo / 🔴 alerta).
* Implementar **infografía interactiva** con datos sobre riesgos más comunes en México.
  * Uso de gráficas tipo barras o donut.
  * Tooltips explicativos al pasar el cursor.
* Implementar **cards por plataforma** (redes sociales y videojuegos):
  * Logo oficial de la app/juego.
  * Breve descripción de la plataforma.
  * ⚠️ Riesgos principales (listado breve).
  * 🔧 Controles parentales recomendados.
  * 📅 Edad mínima recomendada.
  * CTA: “Ver guía completa” → despliega modal o página detallada con tutoriales y configuraciones.

### 1.2 Riesgos Digitales ✅ FINALIZADO

* Implementar **vista en mosaico (grid)** de riesgos.
* Cada tarjeta debe contener 3 bloques claros:
  * 👉 Cómo identificarlo (icono lupa).
  * ⚠️ Qué hacer si ya ocurrió (icono alerta roja).
  * 🛡️ Cómo prevenir (icono escudo verde).
* Interacciones:
  * Clic en tarjeta → expande card o abre modal con ejemplos, frases útiles y recursos.
  * Ejemplos de frases y casos reales del manual deben estar presentes.

### 1.3 Controles Parentales ✅ FINALIZADO

* ✅ Implementar **intro visual** con ilustración de familia + frase clave: "Más que restringir, se trata de acompañar".
* ✅ Implementar subsecciones por dispositivo:
  * Android (Family Link + Google SafeSearch).
  * iPhone (En Familia + Tiempo en Pantalla).
  * Qustodio (dispositivos híbridos).
  * Consolas: Xbox, PlayStation, Nintendo Switch.
  * Router/Wi-Fi.
* ✅ Cada subsección debe usar **UI tipo acordeón**, que al abrirse muestre:
  * Pasos numerados con checkmarks.
  * Imágenes o capturas reales de pantallas.
  * CTA: "Descargar guía PDF" o "Ver video corto".
* Incluir banners visuales con frases del manual (ej. “El silencio también educa”).

### 1.4 Comunicación y Apoyo ✅ FINALIZADO

* ✅ Implementar **listado de señales de alerta** con íconos representativos (ej. tristeza, aislamiento, cambios de humor).
* ✅ Crear **cards con frases sugeridas** para iniciar conversación.
* ✅ Añadir **carrusel de historias reales** extraídas del manual con CTA: "Cómo actuar en este caso".
* ✅ UI de estilo cálido (colores suaves, tipografía legible) para transmitir cercanía y confianza.

### 1.5 Acciones Legales y Apoyo ✅ FINALIZADO

* ✅ Implementar **grid de accesos rápidos** (2x2) con contactos oficiales:
  * 📞 Policía Cibernética.
  * ⚖️ Fiscalía.
  * 🛡️ Te Protejo México.
  * 🌍 Organismos internacionales.
* ✅ Implementar **timeline visual paso a paso**:
  1. Recopilar evidencias.
  2. Presentar denuncia.
  3. Seguir proceso legal.
* ✅ Botón de acción destacado en cada recurso: "Llamar ahora" o "Enviar reporte".
* ✅ Incluir **sección de preguntas frecuentes** sobre lo legal.

### 1.6 Lineamientos comunes

* Cards modulares y reutilizables.
* Colores semánticos: verde (prevención), amarillo (alerta), rojo (riesgo).
* Íconos universales: lupa, escudo, alerta, checklist.
* Interacciones ligeras: acordeones, tooltips, modales.
* Responsive-first (mobile friendly).
* Accesibilidad: contraste, tipografía clara, opción de lectura asistida.

---

## 2. Recursos ✅ FINALIZADO

* ✅ Implementar página dedicada con:
  * ✅ **Decálogo para padres digitales** con botones de visualizar y descargar PDF.
  * ✅ **Acuerdos digitales familiares** con enlaces a Google Docs.
  * ✅ **Guía de preguntas básicas** antes de abrir redes o videojuegos.
  * ✅ **Glosario interactivo** con acordeón expandible y términos del manual.
  * ✅ Ligas externas a recursos confiables (Common Sense Media, ESRB, Te Protejo México).
* ✅ Implementar botones de **visualizar y descargar PDF** en cada recurso.
* ✅ Aplicar sistema de diseño completo con elementos decorativos, colores rotativos y responsividad.

---

## 3. Ayuda / Contacto ✅ FINALIZADO

* ✅ Implementar **botón de emergencia siempre visible** en el sitio → abre contactos inmediatos:
  * Policía Cibernética.
  * Te Protejo México.
* ✅ Sección con **información sobre talleres y charlas** (texto + CTA de contacto).
* ✅ Implementar **formulario simple de contacto** (nombre, correo, mensaje).
* ✅ Implementar **formulario específico para talleres** (7 campos: nombre, institución, email, teléfono, tipo de taller, número de asistentes, mensaje).
* ✅ Implementar **sección de FAQs** con acordeón expandible (7 preguntas frecuentes).
* ✅ Implementar **sección de contactos de emergencia** con grid 2x2 y datos del manual.
* ✅ Crear **componente EmergencyButton.tsx** flotante con modal de emergencia.
* ✅ Integrar **EmergencyButton en App.tsx** (excepto en /about).
* ✅ Agregar **ruta /ayuda** en src/main.tsx.
* ✅ Verificar **responsividad completa** en móvil, tablet y desktop.

---



---

## 5. Consideraciones Generales

* Consistencia visual entre secciones (colores, tipografía, íconos).
* Todas las secciones deben estar enlazadas desde el menú global.
* Diseño responsive optimizado para móvil.
* Garantizar accesibilidad (contraste, textos alternativos, lectura asistida).
