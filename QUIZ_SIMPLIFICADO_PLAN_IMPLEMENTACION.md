# Plan de Implementación: Quiz Simplificado con 5 Preguntas de Alto Valor

## Objetivo

Simplificar el quiz personalizado reemplazando los pasos complejos (`MeasuresStep` y `HabitsSignalsStep`) con 2 nuevos pasos enfocados en configuraciones de seguridad esenciales y preparación para emergencias digitales, manteniendo los primeros 4 pasos y los últimos 2 pasos sin cambios.

## Estructura Final Propuesta (8 pasos)

### **MANTENER (4 pasos iniciales):**
```
1. WelcomeStep ✅ (sin cambios)
2. GenderStep ✅ (sin cambios)  
3. AgeStep ✅ (sin cambios)
4. PlatformsStep ✅ (sin cambios)
```

### **CAMBIAR (1 paso):**
```
5. SecurityConfigStep ⭐ NUEVO (reemplaza MeasuresStep)
```

### **AGREGAR (1 paso nuevo):**
```
6. EmergencyResourcesStep ⭐ NUEVO (conocimiento de recursos)
```

### **MANTENER (2 pasos finales):**
```
7. ConcernsStep ✅ (sin cambios)
8. DoneStep ✅ (sin cambios)
```

---

## Paso 5: SecurityConfigStep ⭐ **NUEVO**
*Reemplaza MeasuresStep con las 5 preguntas de alto valor*

**"Para crear tu plan personalizado, necesitamos conocer qué medidas de protección ya tienes implementadas."**

### 5.1 Supervisión de Cuenta Infantil ⭐ **MÁS CRÍTICA**
**"¿Tu {hijo/hija} usa su dispositivo con una cuenta infantil supervisada por ti?"**
- [ ] Sí, está supervisada (Family Link en Android o Tiempo en Pantalla en iPhone/iPad)
- [ ] No, usa una cuenta sin supervisión
- [ ] No estoy seguro/a

### 5.2 Comunicación Familiar ⭐ **PRIMERA LÍNEA DE DEFENSA**
**"¿Con qué frecuencia hablas con tu {hijo/hija} sobre su vida digital y las plataformas que usa?"**
- [ ] Sí, hablamos regularmente sobre su vida digital
- [ ] No, raramente o nunca hablamos de estos temas

### 5.3 SafeSearch Activado ⭐ **CONFIGURACIÓN INDISPENSABLE**
**"¿Tienes activado Google SafeSearch en los dispositivos que usa tu {hijo/hija}?"**
- [ ] Sí, está activado
- [ ] No, no está activado
- [ ] No sé qué es SafeSearch

### 5.4 Reglas Familiares Básicas ⭐ **FUNDACIÓN DEL HOGAR DIGITAL**
**"¿Tienes establecidas reglas familiares básicas sobre el uso de dispositivos?"**
- [ ] Sí, tenemos horarios y reglas claras (comidas sin pantallas, cargador fuera del cuarto)
- [ ] Tenemos algunas reglas pero no son consistentes
- [ ] No tenemos reglas formales establecidas

### 5.5 Conocimiento de Recursos Legales ⭐ **PREPARACIÓN CRÍTICA**
**"¿Sabes dónde reportar un incidente digital grave (como grooming o ciberacoso)?"**
- [ ] Sí, conozco la Policía Cibernética (088) y Te Protejo México
- [ ] He oído de estos recursos pero no sé cómo usarlos
- [ ] No tenía idea de que existieran

---

## Paso 6: EmergencyResourcesStep ⭐ **NUEVO**
*Conocimiento de recursos y preparación para emergencias*

**"¿Sabes con quién acudir en caso de emergencias digitales?"**

### 6.1 Situaciones de Emergencia
**"¿Sabes qué hacer si tu {hijo/hija} está siendo contactado/a por un extraño de manera insistente?"**
- [ ] Sí, sé exactamente qué hacer y a quién contactar
- [ ] Tengo una idea general pero no estoy seguro/a de los pasos
- [ ] No tengo idea de qué hacer

### 6.2 Recursos de Reporte
**"¿Conoces los números y sitios web para reportar grooming, ciberacoso o contenido ilegal?"**
- [ ] Sí, conozco la Policía Cibernética (088) y Te Protejo México
- [ ] He oído de estos recursos pero no sé cómo usarlos
- [ ] No tenía idea de que existieran

### 6.3 Apoyo Emocional
**"¿Sabes dónde buscar apoyo emocional si tu {hijo/hija} ha sido víctima de ciberacoso o grooming?"**
- [ ] Sí, conozco recursos de apoyo psicológico especializados
- [ ] Tengo una idea general pero no estoy seguro/a
- [ ] No sé dónde buscar ayuda emocional

### 6.4 Preparación Preventiva
**"¿Has hablado con tu {hijo/hija} sobre qué hacer si algo le incomoda o preocupa en línea?"**
- [ ] Sí, hemos hablado específicamente sobre esto
- [ ] Hemos hablado en general pero no específicamente
- [ ] No hemos tenido esta conversación

---

## Requisitos de Mapeo para el Plan de Resultados (Actualizado)

### 1) Entradas que deben influir el plan
- Edad (`AgeStep`)
- Género para texto dinámico (`GenderStep`) → usar `{hijo/hija}` en todo el plan
- Plataformas seleccionadas y banderas de edad mínima (`PlatformsStep`)
- Respuestas del paso 5 (`SecurityConfigStep`)
- Respuestas del paso 6 (`EmergencyResourcesStep`)
- Preocupaciones seleccionadas (`ConcernsStep`)

### 2) Orden de secciones del plan (priorización)
1. Controles parentales y configuraciones críticas
2. Reglas y hábitos familiares
3. Conversaciones y acompañamiento
4. Plataformas que usa tu {hijo/hija}
5. Recursos de reporte y legales (088, Te Protejo México)
6. Preparación ante emergencias (qué hacer y a quién acudir)
7. Prevención por preocupaciones seleccionadas

El orden 1→6 puede subir o bajar según las condiciones de mapeo debajo.

### 3) Reglas de mapeo por cada nueva pregunta

#### Paso 5: SecurityConfigStep
- 5.1 Supervisión de cuenta (sí/no/NS)
  - No/NS → Incluir primero “Activa supervisión del dispositivo (Family Link/Tiempo en Pantalla)” con checklist por edad; marcar sección como PRIORIDAD ALTA.
  - Sí → Omitir básicos y sugerir “siguiente nivel” (ajustes avanzados por edad y plataformas).

- 5.2 Comunicación familiar (sí/no)
  - No → Subir “Conversaciones y acompañamiento” al Top-3; incluir scripts iniciales y frecuencia sugerida por edad.
  - Sí → Mantener en posición base con recordatorios breves.

- 5.3 SafeSearch (sí/no/No sé)
  - No/No sé → Incluir “Filtros de búsqueda (SafeSearch)” dentro de “Controles críticos” con pasos por dispositivo.
  - Sí → Omitir configuración básica, sugerir verificación periódica.

- 5.4 Reglas familiares (sí claras / algunas / no formales)
  - No formales → Incluir “Reglas y hábitos” inmediatamente después de “Controles críticos” con plantilla de acuerdo digital.
  - Algunas → Incluir sección con mejoras y consistencia.
  - Sí claras → Mantener una validación positiva breve; proponer ajustes por edad.

- 5.5 Conocimiento de recursos legales (sí/escucho-no-uso/no idea)
  - Escuché/no uso o No idea → Subir “Recursos de reporte y legales” al Top-3; incluir 088, Te Protejo, cuándo y cómo reportar.
  - Sí → Mantener al final con recordatorio y enlaces rápidos.

#### Paso 6: EmergencyResourcesStep
- 6.1 Qué hacer ante contacto insistente (sí exacto / idea general / no idea)
  - Idea general / No idea → Incluir “Preparación ante emergencias” con guía paso a paso (sin activar alertas de urgencia).

- 6.2 Conoce números y sitios (sí / escuché-no-uso / no idea)
  - Escuché-no-uso / No idea → “Recursos de reporte y legales” debe aparecer antes que “Plataformas”.

- 6.3 Apoyo emocional (sí / idea general / no idea)
  - Idea general / No idea → Añadir bloque de “Apoyo emocional y contención” (líneas de apoyo, pautas de acompañamiento) dentro de “Conversaciones y acompañamiento”.

- 6.4 Conversación preventiva con {hijo/hija} (sí específico / general / no)
  - General / No → Incluir scripts concretos por edad y plataforma; subir “Conversaciones y acompañamiento”.

### 4) Reglas de mapeo por Plataformas y Edad
- Mostrar badge de edad mínima recomendada en resultados.
- Si alguna plataforma tiene edad mínima superior a la edad del {hijo/hija} → incluir “Advertencia por edad” en “Plataformas” y mover ese bloque justo después de “Controles críticos”.
- Si hay plataformas de mayor riesgo (según catálogo interno) → resaltar con callouts y priorizar sus controles específicos.

### 5) Reglas de mapeo por Preocupaciones (ConcernsStep)
- Cada preocupación seleccionada debe generar un sub-bloque en “Prevención por preocupaciones seleccionadas” con:
  - Qué observar (signos tempranos)
  - Qué configurar (técnico y de privacidad)
  - Qué conversar (scripts breves por edad)
  - Qué hacer si ya ocurrió (pasos concretos y a quién acudir)
- Si “No estoy seguro/a” → incluir bloque “Qué vigilar esta semana” con lista corta de observables por edad.

### 6) Personalización por Edad
- 6–8: Controles básicos + acompañamiento cercano + reglas simples.
- 9–12: Supervisión activa + SafeSearch + conversaciones guiadas + hábitos consistentes.
- 13–15: Privacidad, reportes, presión social, riesgos de interacción; scripts sensibles.
- 16–17: Autogestión responsable, límites negociados, preparación para incidentes y reporte.

### 7) Requisitos de salida (formato de la página de resultados)
- Títulos y copy con `{hijo/hija}` según género; tono cálido y accionable.
- Secciones en el orden definido por la priorización anterior.
- Cada sección con “Acción inmediata” (si aplica) y “Siguiente paso” para continuidad.
- Botones de acceso rápido a guías/plataformas mencionadas.
- Resumen inicial de 3–5 acciones priorizadas según mapeo.

---

## Beneficios Esperados

### Para el Usuario:
- **Menos complejidad**: De 16+ opciones a 5 preguntas esenciales
- **Más claro**: Enfoque en lo crítico según el manual
- **Más rápido**: Flujo más directo y eficiente
- **Más accionable**: Plan más personalizado y específico

### Para el Desarrollo:
- **Menos código**: Eliminar 2 componentes complejos
- **Más simple**: Lógica más directa y mantenible
- **Más alineado**: Cada pregunta mapea a secciones del manual
- **Más efectivo**: Plan más personalizado y accionable

### Para el Plan Generado:
- **Más preciso**: Respuestas claras = recomendaciones específicas
- **Más urgente**: Detecta situaciones críticas inmediatamente
- **Más personalizado**: Evita redundancias, enfoca gaps reales
- **Más alineado**: Basado en las configuraciones indispensables del manual

---

## Casos de Validación

### Caso 1: Padre sin controles implementados
**Entrada:** Todas las respuestas en SecurityConfigStep: "No"
**Salida esperada:** Plan debe priorizar Family Link, SafeSearch, reglas familiares

### Caso 2: Madre con controles implementados
**Entrada:** SecurityConfigStep: "Sí" en supervisión y comunicación
**Salida esperada:** Plan debe validar esfuerzos existentes y enfocar en siguiente nivel

### Caso 3: Situación de emergencia detectada
**Entrada:** EmergencyResourcesStep: "No tengo idea" en situaciones críticas
**Salida esperada:** Priorizar sección de recursos de emergencia con contactos inmediatos

---

## Consideraciones de Accesibilidad

### Requisitos WCAG AA:
- Contraste mínimo 4.5:1 en todos los elementos
- Touch targets mínimos de 44px
- Navegación por teclado completa
- Compatible con lectores de pantalla
- Textos descriptivos para elementos interactivos

### Implementación:
- Usar `OptionGrid` existente (ya cumple accesibilidad)
- Incluir `aria-label` descriptivos
- Implementar `focus-visible` para navegación por teclado
- Validar con herramientas de accesibilidad

---

## Métricas de Éxito

### Métricas de UX:
- **Tasa de finalización**: >85% (vs 80% actual)
- **Tiempo promedio**: 3-4 minutos (vs 4-6 minutos actual)
- **Tasa de abandono en paso 5**: <10% (vs 15% actual en measures)

### Métricas de Efectividad:
- **Usuarios que implementan recomendaciones**: >70%
- **Satisfacción con plan generado**: >80%
- **Reducción en preocupaciones reportadas**: >50%

### Métricas Técnicas:
- **Tiempo de generación de plan**: <2 segundos
- **Tasa de error**: <1%
- **Compatibilidad móvil**: 100%

---

## Conclusión

Esta implementación simplifica significativamente el quiz mientras mantiene su efectividad, enfocándose en las configuraciones de seguridad más críticas según el manual "Hogares Digitales Seguros y Responsables". 

La estructura resultante es más mantenible, más alineada con el contenido del manual, y proporciona planes más personalizados y accionables para las familias mexicanas.

**Tiempo total estimado**: 5 días
**Impacto esperado**: Mejora significativa en UX y efectividad del plan generado