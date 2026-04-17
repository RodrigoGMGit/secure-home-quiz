# Mapeo Quiz Personalizado → Recomendaciones

## Introducción

Este documento explica cómo las respuestas del usuario en el quiz personalizado se traducen en recomendaciones específicas y personalizadas. El sistema utiliza un motor de composición que filtra y prioriza acciones basándose en las respuestas del usuario.

### Flujo General

```
Respuestas del Quiz
    ↓
PlanInput (estructura de datos)
    ↓
Análisis de Seguridad y Emergencia (detecta gaps y missing_resources)
    ↓
Filtrado de ContentBlocks (por edad, plataforma, preocupaciones)
    ↓
Generación de Plan (secciones con acciones priorizadas)
    ↓
Medidas Específicas (top 6 recomendaciones más importantes)
```

### Conceptos Clave

- **Gaps**: Vacíos detectados en la configuración de seguridad (ej: falta de supervisión)
- **Missing Resources**: Recursos de emergencia que el usuario no conoce o no sabe usar
- **Tags**: Etiquetas en las acciones que permiten filtrar por edad, plataforma, preocupación
- **Prioridad**: Nivel de urgencia asignado a cada sección del plan (urgent, high, medium, low)

---

## 1. Mapeo por Pregunta del Quiz

### 1.1 Pregunta: Edad del hijo/a

**Pregunta**: "¿En qué rango de edad está?"

**Opciones de Respuesta**:

| Opción | Valor | Descripción |
|--------|-------|-------------|
| 6-8 años | `'6-8'` | Primaria temprana |
| 9-12 años | `'9-12'` | Primaria tardía |
| 13-15 años | `'13-15'` | Secundaria |
| 16-17 años | `'16-17'` | Preparatoria |

**Impacto en Recomendaciones**:

- **Filtrado por Tags de Edad**: Solo se incluyen acciones que tienen el tag `age:{banda_seleccionada}` o `age:all`
- **Ejemplo**: Si el usuario selecciona "9-12 años":
  - ✅ Se incluyen acciones con tags: `age:9-12`, `age:all`
  - ❌ Se excluyen acciones con tags: `age:6-8`, `age:13-15`, `age:16-17`

**Prioridades por Edad** (en `getTopPriorities`):

| Edad | Prioridades Sugeridas |
|------|----------------------|
| 6-8 | Controles parentales básicos, Supervisión constante, Contenido educativo |
| 9-12 | Límites de tiempo, Educación sobre riesgos, Comunicación abierta |
| 13-15 | Privacidad en redes sociales, Prevención de grooming, Manejo de presión social |
| 16-17 | Ciudadanía digital, Prevención de sexting, Preparación para independencia |

---

### 1.2 Pregunta: Plataformas que usa

**Pregunta**: "¿Qué plataformas usa con más frecuencia?"

**Opciones de Respuesta**:

| Opción | Valor | Edad Mínima | Restricción de Edad |
|--------|-------|-------------|---------------------|
| YouTube Kids | `'youtube-kids'` | 3 años | - |
| WhatsApp | `'whatsapp'` | 13 años | ⚠️ Si edad < 13 |
| YouTube | `'youtube'` | 13 años | ⚠️ Si edad < 13 |
| Minecraft | `'minecraft'` | 10 años | ⚠️ Si edad < 10 |
| Roblox | `'roblox'` | 13 años | ⚠️ Si edad < 13 |
| TikTok | `'tiktok'` | 13 años | ⚠️ Si edad < 13 |
| Instagram | `'instagram'` | 13 años | ⚠️ Si edad < 13 |
| Snapchat | `'snapchat'` | 13 años | ⚠️ Si edad < 13 |
| Discord | `'discord'` | 13 años | ⚠️ Si edad < 13 |
| Facebook | `'facebook'` | 13 años | ⚠️ Si edad < 13 |
| Fortnite | `'fortnite'` | 13 años | ⚠️ Si edad < 13 |
| Free Fire | `'free-fire'` | 13 años | ⚠️ Si edad < 13 |
| Otros | `'otros'` | - | - |
| No estoy seguro/a | `unknown_platforms: true` | - | - |

**Impacto en Recomendaciones**:

1. **Búsqueda de Bloques por Plataforma**: Para cada plataforma seleccionada, el sistema busca bloques con tag `platform:{plataforma}`

2. **Filtrado por Edad**: De las acciones encontradas, solo se incluyen las que tienen tag de edad compatible

3. **Sección Activada**: "Controles Parentales" con acciones específicas por plataforma

**Ejemplo de Mapeo**:

Si el usuario selecciona:
- **Plataformas**: `['youtube', 'tiktok']`
- **Edad**: `'9-12'`

**Acciones Incluidas**:

**YouTube** (bloque `parental_controls_youtube`):
- ✅ "Activar Modo Restringido" (tags: `platform:youtube`, `age:9-12`) → **INCLUIDA**
- ✅ "Usar YouTube Kids" (tags: `platform:youtube`, `age:9-12`) → **INCLUIDA**
- ✅ "Supervisar contenido visto" (tags: `platform:youtube`, `age:all`) → **INCLUIDA**

**TikTok** (bloque `parental_controls_tiktok`):
- ❌ "Configurar Emparejamiento Familiar" (tags: `platform:tiktok`, `age:13-15`) → **EXCLUIDA** (edad no coincide)
- ❌ "Configurar Privacidad" (tags: `platform:tiktok`, `age:13-15`) → **EXCLUIDA** (edad no coincide)
- ✅ "Establecer Límites de Tiempo" (tags: `platform:tiktok`, `age:all`) → **INCLUIDA**

**Prioridades Adicionales** (en `getTopPriorities`):

| Plataforma | Prioridad Agregada |
|------------|-------------------|
| youtube | Filtrado de contenido |
| tiktok | Configuración de privacidad |
| whatsapp | Seguridad en mensajería |

**Nota sobre Plataformas Inapropiadas**:

Si el usuario selecciona una plataforma con edad mínima mayor a la edad del hijo (ej: TikTok para un niño de 9 años), se marca como `inappropriatePlatforms` y se muestra una advertencia, pero aún se generan recomendaciones de supervisión especial.

---

### 1.3 Pregunta: Configuración de Seguridad

**Pregunta**: "Hablemos de qué medidas de protección ya tienes implementadas"

Esta sección contiene **5 sub-preguntas** que detectan gaps en la configuración de seguridad.

#### 1.3.1 Supervisión

**Pregunta**: "¿Tu hijo/hija usa su dispositivo con una cuenta infantil supervisada por ti?"

| Opción | Valor | Gap Generado | Impacto en Prioridad |
|--------|-------|--------------|---------------------|
| Sí, está supervisada | `'yes_supervised'` | Ninguno (strength) | - |
| No, usa cuenta sin supervisión | `'no_unsupervised'` | `'supervision'` | **URGENT** en Controles Parentales |
| No estoy seguro/a | `'not_sure'` | `'supervision'` | **URGENT** en Controles Parentales |

**Lógica**:
```typescript
if (supervision === 'yes_supervised') {
  strengths.push('supervision');
} else if (supervision === 'no_unsupervised' || supervision === 'not_sure') {
  gaps.push('supervision');
  // → Sección "Controles Parentales" recibe prioridad "urgent"
}
```

#### 1.3.2 Comunicación

**Pregunta**: "¿Con qué frecuencia hablas con tu hijo/hija sobre su vida digital?"

| Opción | Valor | Gap Generado | Impacto en Prioridad |
|--------|-------|--------------|---------------------|
| Sí, hablamos regularmente | `'yes_regular'` | Ninguno (strength) | - |
| No, raramente o nunca | `'no_rarely'` | `'communication'` | **URGENT** en Comunicación |

**Lógica**:
```typescript
if (communication === 'yes_regular') {
  strengths.push('communication');
} else if (communication === 'no_rarely') {
  gaps.push('communication');
  // → Sección "Comunicación y Acompañamiento" recibe prioridad "urgent"
}
```

#### 1.3.3 SafeSearch

**Pregunta**: "¿Tienes activado Google SafeSearch?"

| Opción | Valor | Gap Generado | Impacto en Prioridad |
|--------|-------|--------------|---------------------|
| Sí, está activado | `'yes_active'` | Ninguno (strength) | - |
| No, no está activado | `'no_inactive'` | `'safesearch'` | - |
| No sé qué es SafeSearch | `'dont_know'` | `'safesearch'` | - |

**Lógica**:
```typescript
if (safesearch === 'yes_active') {
  strengths.push('safesearch');
} else if (safesearch === 'no_inactive' || safesearch === 'dont_know') {
  gaps.push('safesearch');
  // → Se incluyen acciones sobre configuración de SafeSearch
}
```

#### 1.3.4 Reglas Familiares

**Pregunta**: "¿Tienes establecidas reglas familiares básicas sobre el uso de dispositivos?"

| Opción | Valor | Gap Generado | Impacto en Prioridad |
|--------|-------|--------------|---------------------|
| Sí, tenemos horarios y reglas claras | `'yes_clear'` | Ninguno (strength) | - |
| Tenemos algunas pero no son consistentes | `'some_inconsistent'` | `'family_rules'` | **URGENT** en Reglas Familiares |
| No tenemos reglas formales | `'no_formal'` | `'family_rules'` | **URGENT** en Reglas Familiares |

**Lógica**:
```typescript
if (family_rules === 'yes_clear') {
  strengths.push('family_rules');
} else if (family_rules === 'some_inconsistent' || family_rules === 'no_formal') {
  gaps.push('family_rules');
  // → Sección "Reglas Familiares y Rutinas" recibe prioridad "urgent"
}
```

**Acciones Incluidas** (siempre, filtradas por edad):
- "Crear Zonas Libres de Dispositivos" (tags: `family_rules`, `age:all`)
- "Establecer Horarios de Pantalla" (tags: `family_rules`, `age:all`)
- "Reglas Durante Comidas" (tags: `family_rules`, `age:all`)
- "Rutina de Dispositivos Antes de Dormir" (tags: `family_rules`, `age:all`)

#### 1.3.5 Conocimiento Legal

**Pregunta**: "¿Sabes dónde reportar un incidente digital grave?"

| Opción | Valor | Gap Generado | Impacto en Prioridad |
|--------|-------|--------------|---------------------|
| Sí, conozco Policía Cibernética y Te Protejo | `'yes_know'` | Ninguno (strength) | - |
| He oído pero no sé cómo usarlos | `'heard_dont_use'` | `'legal_knowledge'` | - |
| No tenía idea de que existieran | `'no_idea'` | `'legal_knowledge'` | - |

**Lógica**:
```typescript
if (legal_knowledge === 'yes_know') {
  strengths.push('legal_knowledge');
} else if (legal_knowledge === 'heard_dont_use' || legal_knowledge === 'no_idea') {
  gaps.push('legal_knowledge');
  // → Se incluyen acciones sobre recursos de reporte en sección "Recursos de Emergencia"
}
```

#### Resumen: Nivel de Protección

El sistema calcula un nivel general basado en los strengths:

| Strengths | Nivel de Protección |
|-----------|---------------------|
| 4-5 strengths | `'protected'` |
| 2-3 strengths | `'in-process'` |
| 0-1 strengths | `'at-risk'` |

---

### 1.4 Pregunta: Recursos de Emergencia

**Pregunta**: "¿Sabes con quién acudir en caso de emergencias digitales?"

Esta sección contiene **4 sub-preguntas** que detectan missing_resources.

#### 1.4.1 Acción de Emergencia

**Pregunta**: "¿Sabes qué hacer si tu hijo/hija está siendo contactado/a por un extraño?"

| Opción | Valor | Missing Resource | Impacto en Prioridad |
|--------|-------|------------------|---------------------|
| Sí, sé exactamente qué hacer | `'know_exactly'` | Ninguno (available) | - |
| Tengo idea general pero no estoy seguro/a | `'general_idea'` | `'emergency_action'` | - |
| No tengo idea de qué hacer | `'no_idea'` | `'emergency_action'` | - |

**Lógica**:
```typescript
if (emergency_action === 'know_exactly') {
  available_resources.push('emergency_action');
} else if (emergency_action === 'general_idea' || emergency_action === 'no_idea') {
  missing_resources.push('emergency_action');
  // → Se incluyen acciones sobre plan de emergencia
}
```

#### 1.4.2 Recursos de Reporte

**Pregunta**: "¿Conoces los números y sitios web para reportar grooming, ciberacoso o contenido ilegal?"

| Opción | Valor | Missing Resource | Impacto en Prioridad |
|--------|-------|------------------|---------------------|
| Sí, conozco Policía Cibernética y Te Protejo | `'yes_know'` | Ninguno (available) | - |
| He oído pero no sé cómo usarlos | `'heard_dont_use'` | `'report_resources'` | - |
| No tenía idea de que existieran | `'no_idea'` | `'report_resources'` | - |

**Lógica**:
```typescript
if (report_resources === 'yes_know') {
  available_resources.push('report_resources');
} else if (report_resources === 'heard_dont_use' || report_resources === 'no_idea') {
  missing_resources.push('report_resources');
  // → Se incluyen acciones sobre recursos de reporte
}
```

#### 1.4.3 Apoyo Emocional

**Pregunta**: "¿Sabes dónde buscar apoyo emocional si tu hijo/hija ha sido víctima?"

| Opción | Valor | Missing Resource | Impacto en Prioridad |
|--------|-------|------------------|---------------------|
| Sí, conozco recursos especializados | `'yes_know_resources'` | Ninguno (available) | - |
| Tengo idea general pero no estoy seguro/a | `'general_idea'` | `'emotional_support'` | - |
| No sé dónde buscar ayuda | `'dont_know'` | `'emotional_support'` | - |

**Lógica**:
```typescript
if (emotional_support === 'yes_know_resources') {
  available_resources.push('emotional_support');
} else if (emotional_support === 'general_idea' || emotional_support === 'dont_know') {
  missing_resources.push('emotional_support');
  // → Se incluyen acciones sobre recursos de apoyo emocional
}
```

#### 1.4.4 Preparación Preventiva

**Pregunta**: "¿Has hablado con tu hijo/hija sobre qué hacer si algo le incomoda en línea?"

| Opción | Valor | Missing Resource | Impacto en Prioridad |
|--------|-------|------------------|---------------------|
| Sí, hemos hablado específicamente | `'yes_specific'` | Ninguno (available) | - |
| Hemos hablado en general pero no específicamente | `'general_talk'` | `'preventive_prep'` | **URGENT** en Comunicación |
| No hemos tenido esta conversación | `'no_conversation'` | `'preventive_prep'` | **URGENT** en Comunicación |

**Lógica**:
```typescript
if (preventive_prep === 'yes_specific') {
  available_resources.push('preventive_prep');
} else if (preventive_prep === 'general_talk' || preventive_prep === 'no_conversation') {
  missing_resources.push('preventive_prep');
  // → Sección "Comunicación y Acompañamiento" recibe prioridad "urgent"
}
```

#### Resumen: Nivel de Preparación

El sistema calcula un nivel de preparación basado en los available_resources:

| Available Resources | Nivel de Preparación |
|---------------------|---------------------|
| 3-4 resources | `'high'` |
| 1-2 resources | `'medium'` |
| 0 resources | `'low'` → **URGENT** en Recursos de Emergencia |

**Acciones Incluidas** (siempre, filtradas por edad):
- "Crear Plan de Emergencia Digital" (tags: `communication`, `age:all`)
- Acciones sobre recursos de reporte (Policía Cibernética, Te Protejo México)
- Acciones sobre apoyo emocional

---

### 1.5 Pregunta: Preocupaciones

**Pregunta**: "¿Qué te preocupa más ahora?"

**Opciones de Respuesta** (selección múltiple):

| Opción | Valor | Disponible para Edad | Tag de Búsqueda |
|--------|-------|----------------------|-----------------|
| Contenido inapropiado | `'inappropriate_content'` | Todas | ⚠️ **No tiene bloque específico** |
| Contacto con extraños (grooming) | `'grooming'` | Todas | `concern:grooming` |
| Ciberacoso | `'cyberbullying'` | Todas | `concern:ciberacoso` |
| Tiempo de pantalla y sueño | `'tiempo_sueno'` | Todas | `concern:tiempo_excesivo` |
| Privacidad y datos personales | `'privacy_data'` | Todas | ⚠️ **No tiene bloque específico** |
| Sexting o contenido sexual | `'sexting'` | Solo 13-15, 16-17 | `concern:sexting` |
| No estoy seguro/a | `'no_se'` | Todas | ⚠️ **No tiene bloque específico** |

**Impacto en Recomendaciones**:

1. **Búsqueda de Bloques por Preocupación**: Para cada preocupación seleccionada, el sistema busca bloques con tag `concern:{preocupacion}`

2. **Filtrado por Edad**: De las acciones encontradas, solo se incluyen las que tienen tag de edad compatible

3. **Sección Activada**: "Prevención de Riesgos Específicos" con prioridad "high"

**Ejemplo de Mapeo**:

Si el usuario selecciona:
- **Preocupaciones**: `['ciberacoso', 'grooming']`
- **Edad**: `'13-15'`

**Acciones Incluidas**:

**Ciberacoso** (bloque `concern_cyberbullying`):
- ✅ "Prevenir Ciberacoso" (tags: `concern:ciberacoso`, `age:13-15`) → **INCLUIDA**
- ✅ "Responder al Ciberacoso" (tags: `concern:ciberacoso`, `age:all`) → **INCLUIDA**

**Grooming** (bloque `concern_grooming`):
- ✅ "Prevenir Grooming" (tags: `concern:grooming`, `age:13-15`) → **INCLUIDA**
- ✅ "Responder al Grooming" (tags: `concern:grooming`, `age:all`, `urgent`) → **INCLUIDA** (prioridad alta)

**Tiempo Excesivo** (bloque `concern_excessive_screen_time`):
- ✅ "Evaluar Uso Actual de Pantallas" (tags: `concern:tiempo_excesivo`, `age:all`) → **INCLUIDA**
- ✅ "Reducir Tiempo en Pantallas" (tags: `concern:tiempo_excesivo`, `age:all`) → **INCLUIDA**

**Prioridades Adicionales** (en `getTopPriorities`):

| Preocupación | Prioridad Agregada |
|--------------|-------------------|
| ciberacoso | Prevención de ciberacoso |
| grooming | Detección de grooming |
| sexting | Educación sobre sexting |

**Nota sobre Preocupaciones sin Bloques**:

Las siguientes preocupaciones **NO tienen bloques específicos** en `contentBlocks`:
- `inappropriate_content` → Se cubre indirectamente con controles parentales por plataforma
- `privacy_data` → Se cubre indirectamente con acciones de privacidad por plataforma
- `no_se` → Se incluyen recomendaciones generales de todas las secciones

---

## 2. Tabla de Mapeo Completo

### 2.1 Mapeo de Gaps y Missing Resources

| Respuesta | Gap/Missing Resource | Sección Afectada | Prioridad Resultante |
|-----------|---------------------|------------------|---------------------|
| `supervision: 'no_unsupervised'` | `gap: 'supervision'` | Controles Parentales | **urgent** |
| `supervision: 'not_sure'` | `gap: 'supervision'` | Controles Parentales | **urgent** |
| `communication: 'no_rarely'` | `gap: 'communication'` | Comunicación | **urgent** |
| `safesearch: 'no_inactive'` | `gap: 'safesearch'` | - | - |
| `safesearch: 'dont_know'` | `gap: 'safesearch'` | - | - |
| `family_rules: 'some_inconsistent'` | `gap: 'family_rules'` | Reglas Familiares | **urgent** |
| `family_rules: 'no_formal'` | `gap: 'family_rules'` | Reglas Familiares | **urgent** |
| `legal_knowledge: 'heard_dont_use'` | `gap: 'legal_knowledge'` | Recursos de Emergencia | high |
| `legal_knowledge: 'no_idea'` | `gap: 'legal_knowledge'` | Recursos de Emergencia | high |
| `emergency_action: 'general_idea'` | `missing: 'emergency_action'` | Recursos de Emergencia | high |
| `emergency_action: 'no_idea'` | `missing: 'emergency_action'` | Recursos de Emergencia | high |
| `report_resources: 'heard_dont_use'` | `missing: 'report_resources'` | Recursos de Emergencia | high |
| `report_resources: 'no_idea'` | `missing: 'report_resources'` | Recursos de Emergencia | high |
| `emotional_support: 'general_idea'` | `missing: 'emotional_support'` | Recursos de Emergencia | high |
| `emotional_support: 'dont_know'` | `missing: 'emotional_support'` | Recursos de Emergencia | high |
| `preventive_prep: 'general_talk'` | `missing: 'preventive_prep'` | Comunicación | **urgent** |
| `preventive_prep: 'no_conversation'` | `missing: 'preventive_prep'` | Comunicación | **urgent** |
| `emergencyAnalysis.preparedness === 'low'` | - | Recursos de Emergencia | **urgent** |

### 2.2 Mapeo de Plataformas a Acciones

| Plataforma | Bloque ID | Acciones Disponibles | Tags de Edad |
|------------|----------|---------------------|--------------|
| youtube | `parental_controls_youtube` | Activar Modo Restringido | 6-8, 9-12, 13-15 |
| youtube | `parental_controls_youtube` | Usar YouTube Kids | 6-8, 9-12 |
| youtube | `parental_controls_youtube` | Supervisar contenido visto | all |
| tiktok | `parental_controls_tiktok` | Configurar Emparejamiento Familiar | 13-15, 16-17 |
| tiktok | `parental_controls_tiktok` | Configurar Privacidad | 13-15, 16-17 |
| tiktok | `parental_controls_tiktok` | Establecer Límites de Tiempo | all |
| whatsapp | `parental_controls_whatsapp` | Configurar Privacidad | 13-15, 16-17 |
| whatsapp | `parental_controls_whatsapp` | Configurar Seguridad en Grupos | all |
| whatsapp | `parental_controls_whatsapp` | Bloquear Contactos Desconocidos | all |

### 2.3 Mapeo de Preocupaciones a Acciones

| Preocupación | Bloque ID | Acciones Disponibles | Tags de Edad |
|--------------|----------|---------------------|--------------|
| ciberacoso | `concern_cyberbullying` | Prevenir Ciberacoso | 9-12, 13-15, 16-17 |
| ciberacoso | `concern_cyberbullying` | Responder al Ciberacoso | all |
| grooming | `concern_grooming` | Prevenir Grooming | 9-12, 13-15, 16-17 |
| grooming | `concern_grooming` | Responder al Grooming | all (urgent) |
| sexting | `concern_sexting` | Prevenir Sexting | 13-15, 16-17 |
| sexting | `concern_sexting` | Responder al Sexting | 13-15, 16-17 |
| tiempo_sueno | `concern_excessive_screen_time` | Evaluar Uso Actual | all |
| tiempo_sueno | `concern_excessive_screen_time` | Reducir Tiempo en Pantallas | all |

---

## 3. Ejemplos de Flujos Completos

### Ejemplo 1: Niño 9-12 años, sin supervisión, preocupa ciberacoso

**Respuestas del Usuario**:
```typescript
{
  age_band: '9-12',
  platforms: ['youtube', 'tiktok'],
  securityConfig: {
    supervision: 'no_unsupervised',  // → gap: 'supervision'
    communication: 'yes_regular',
    safesearch: 'dont_know',         // → gap: 'safesearch'
    family_rules: 'yes_clear',
    legal_knowledge: 'no_idea'       // → gap: 'legal_knowledge'
  },
  emergencyResources: {
    emergency_action: 'know_exactly',
    report_resources: 'yes_know',
    emotional_support: 'yes_know_resources',
    preventive_prep: 'yes_specific'
  },
  concerns: ['ciberacoso']
}
```

**Análisis Generado**:
```typescript
securityAnalysis: {
  level: 'in-process',
  gaps: ['supervision', 'safesearch', 'legal_knowledge'],
  strengths: ['communication', 'family_rules']
}

emergencyAnalysis: {
  preparedness: 'high',
  missing_resources: [],
  available_resources: ['emergency_action', 'report_resources', 'emotional_support', 'preventive_prep']
}
```

**Plan Generado**:

**1. Controles Parentales** (prioridad: **urgent** por gap de supervisión):
- **YouTube**:
  - ✅ "Activar Modo Restringido" (age:9-12)
  - ✅ "Usar YouTube Kids" (age:9-12)
  - ✅ "Supervisar contenido visto" (age:all)
- **TikTok**:
  - ✅ "Establecer Límites de Tiempo" (age:all)
  - ❌ "Configurar Emparejamiento Familiar" (age:13-15) → EXCLUIDA
  - ❌ "Configurar Privacidad" (age:13-15) → EXCLUIDA

**2. Reglas Familiares** (prioridad: high):
- ✅ "Crear Zonas Libres de Dispositivos" (age:all)
- ✅ "Establecer Horarios de Pantalla" (age:all)
- ✅ "Reglas Durante Comidas" (age:all)
- ✅ "Rutina de Dispositivos Antes de Dormir" (age:all)

**3. Comunicación y Acompañamiento** (prioridad: medium):
- ✅ "Mantener Diálogo Abierto sobre Internet" (age:all)
- ✅ "Enseñar a Reportar Contenido Inapropiado" (age:9-12)
- ✅ "Enseñar Ciudadanía Digital" (age:all)
- ✅ "Crear Plan de Emergencia Digital" (age:all)

**4. Recursos de Emergencia** (prioridad: high por gap de legal_knowledge):
- Acciones sobre recursos de reporte (Policía Cibernética, Te Protejo México)

**5. Prevención de Riesgos Específicos** (prioridad: high):
- **Ciberacoso**:
  - ✅ "Prevenir Ciberacoso" (age:9-12)
  - ✅ "Responder al Ciberacoso" (age:all)

**Medidas Específicas (Top 6)**:
1. "Activar Modo Restringido" (YouTube) - **high**
2. "Usar YouTube Kids" (YouTube) - **high**
3. "Prevenir Ciberacoso" - **high**
4. "Establecer Horarios de Pantalla" - **high**
5. "Rutina de Dispositivos Antes de Dormir" - **high**
6. "Responder al Ciberacoso" - **high**

---

### Ejemplo 2: Adolescente 13-15 años, comunicación regular, preocupa grooming

**Respuestas del Usuario**:
```typescript
{
  age_band: '13-15',
  platforms: ['instagram', 'whatsapp'],
  securityConfig: {
    supervision: 'yes_supervised',
    communication: 'yes_regular',
    safesearch: 'yes_active',
    family_rules: 'some_inconsistent',  // → gap: 'family_rules'
    legal_knowledge: 'yes_know'
  },
  emergencyResources: {
    emergency_action: 'general_idea',    // → missing: 'emergency_action'
    report_resources: 'yes_know',
    emotional_support: 'yes_know_resources',
    preventive_prep: 'yes_specific'
  },
  concerns: ['grooming']
}
```

**Análisis Generado**:
```typescript
securityAnalysis: {
  level: 'protected',
  gaps: ['family_rules'],
  strengths: ['supervision', 'communication', 'safesearch', 'legal_knowledge']
}

emergencyAnalysis: {
  preparedness: 'medium',
  missing_resources: ['emergency_action'],
  available_resources: ['report_resources', 'emotional_support', 'preventive_prep']
}
```

**Plan Generado**:

**1. Controles Parentales** (prioridad: high):
- **Instagram**: (si hay bloque específico)
- **WhatsApp**:
  - ✅ "Configurar Privacidad" (age:13-15)
  - ✅ "Configurar Seguridad en Grupos" (age:all)
  - ✅ "Bloquear Contactos Desconocidos" (age:all)

**2. Reglas Familiares** (prioridad: **urgent** por gap):
- ✅ "Crear Zonas Libres de Dispositivos" (age:all)
- ✅ "Establecer Horarios de Pantalla" (age:all)
- ✅ "Reglas Durante Comidas" (age:all)
- ✅ "Rutina de Dispositivos Antes de Dormir" (age:all)

**3. Comunicación y Acompañamiento** (prioridad: medium):
- ✅ "Mantener Diálogo Abierto sobre Internet" (age:all)
- ✅ "Enseñar a Reportar Contenido Inapropiado" (age:13-15)
- ✅ "Enseñar Ciudadanía Digital" (age:all)
- ✅ "Crear Plan de Emergencia Digital" (age:all)

**4. Recursos de Emergencia** (prioridad: high por missing emergency_action):
- Acciones sobre plan de emergencia específico

**5. Prevención de Riesgos Específicos** (prioridad: high):
- **Grooming**:
  - ✅ "Prevenir Grooming" (age:13-15)
  - ✅ "Responder al Grooming" (age:all, urgent)

**Medidas Específicas (Top 6)**:
1. "Responder al Grooming" - **high** (urgent)
2. "Prevenir Grooming" - **high**
3. "Configurar Privacidad" (WhatsApp) - **high**
4. "Establecer Horarios de Pantalla" - **high**
5. "Rutina de Dispositivos Antes de Dormir" - **high**
6. "Crear Plan de Emergencia Digital" - **high**

---

### Ejemplo 3: Adolescente 16-17 años, múltiples preocupaciones

**Respuestas del Usuario**:
```typescript
{
  age_band: '16-17',
  platforms: ['tiktok', 'instagram', 'whatsapp'],
  securityConfig: {
    supervision: 'not_sure',           // → gap: 'supervision'
    communication: 'no_rarely',        // → gap: 'communication'
    safesearch: 'yes_active',
    family_rules: 'no_formal',         // → gap: 'family_rules'
    legal_knowledge: 'heard_dont_use'  // → gap: 'legal_knowledge'
  },
  emergencyResources: {
    emergency_action: 'no_idea',       // → missing: 'emergency_action'
    report_resources: 'heard_dont_use', // → missing: 'report_resources'
    emotional_support: 'dont_know',    // → missing: 'emotional_support'
    preventive_prep: 'no_conversation' // → missing: 'preventive_prep'
  },
  concerns: ['sexting', 'ciberacoso']
}
```

**Análisis Generado**:
```typescript
securityAnalysis: {
  level: 'at-risk',
  gaps: ['supervision', 'communication', 'family_rules', 'legal_knowledge'],
  strengths: ['safesearch']
}

emergencyAnalysis: {
  preparedness: 'low',  // → URGENT
  missing_resources: ['emergency_action', 'report_resources', 'emotional_support', 'preventive_prep'],
  available_resources: []
}
```

**Plan Generado**:

**1. Controles Parentales** (prioridad: **urgent**):
- **TikTok**:
  - ✅ "Configurar Emparejamiento Familiar" (age:16-17)
  - ✅ "Configurar Privacidad" (age:16-17)
  - ✅ "Establecer Límites de Tiempo" (age:all)
- **Instagram**: (si hay bloque específico)
- **WhatsApp**:
  - ✅ "Configurar Privacidad" (age:16-17)
  - ✅ "Configurar Seguridad en Grupos" (age:all)
  - ✅ "Bloquear Contactos Desconocidos" (age:all)

**2. Reglas Familiares** (prioridad: **urgent**):
- ✅ Todas las acciones de reglas familiares

**3. Comunicación y Acompañamiento** (prioridad: **urgent** por gaps):
- ✅ Todas las acciones de comunicación

**4. Recursos de Emergencia** (prioridad: **urgent** por preparedness: 'low'):
- ✅ Todas las acciones sobre recursos de emergencia y reporte

**5. Prevención de Riesgos Específicos** (prioridad: high):
- **Sexting**:
  - ✅ "Prevenir Sexting" (age:16-17)
  - ✅ "Responder al Sexting" (age:16-17)
- **Ciberacoso**:
  - ✅ "Prevenir Ciberacoso" (age:16-17)
  - ✅ "Responder al Ciberacoso" (age:all)

**Medidas Específicas (Top 6)**:
1. "Configurar Emparejamiento Familiar" (TikTok) - **high**
2. "Prevenir Sexting" - **high**
3. "Responder al Ciberacoso" - **high**
4. "Establecer Horarios de Pantalla" - **high**
5. "Crear Plan de Emergencia Digital" - **high**
6. "Mantener Diálogo Abierto sobre Internet" - **high**

---

## 4. Notas Técnicas

### 4.1 Sistema de Tags

Las acciones en `contentBlocks` utilizan un sistema de tags para filtrado:

**Formato de Tags**:
- `platform:{plataforma}`: Identifica la plataforma (ej: `platform:youtube`)
- `age:{banda}`: Identifica la edad (ej: `age:9-12`)
- `age:all`: Aplica a todas las edades
- `concern:{preocupacion}`: Identifica la preocupación (ej: `concern:ciberacoso`)
- `family_rules`: Identifica reglas familiares
- `communication`: Identifica comunicación
- `emergency_resources`: Identifica recursos de emergencia
- `urgent`: Marca acciones urgentes

**Ejemplo de Acción con Tags**:
```typescript
{
  id: 'youtube_restricted_mode',
  title: 'Activar Modo Restringido',
  tags: ['platform:youtube', 'age:6-8', 'age:9-12', 'age:13-15'],
  severity: 'high',
  platform: 'youtube'
}
```

### 4.2 Filtrado por Edad

El sistema filtra acciones usando la siguiente lógica:

```typescript
const ageMatch = action.tags.some(tag => 
  tag === `age:${input.age_band}` || tag === 'age:all'
);
```

**Ejemplo**:
- Usuario selecciona edad: `'9-12'`
- Acción con tags: `['platform:youtube', 'age:9-12']` → ✅ **INCLUIDA**
- Acción con tags: `['platform:youtube', 'age:all']` → ✅ **INCLUIDA**
- Acción con tags: `['platform:tiktok', 'age:13-15']` → ❌ **EXCLUIDA**

### 4.3 Determinación de Prioridad

La prioridad de cada sección se determina así:

| Condición | Prioridad |
|-----------|-----------|
| `gaps.includes('supervision')` | **urgent** (Controles Parentales) |
| `gaps.includes('communication')` | **urgent** (Comunicación) |
| `gaps.includes('family_rules')` | **urgent** (Reglas Familiares) |
| `missing_resources.includes('preventive_prep')` | **urgent** (Comunicación) |
| `emergencyAnalysis.preparedness === 'low'` | **urgent** (Recursos de Emergencia) |
| Por defecto | **high** o **medium** según sección |

### 4.4 Limitaciones Actuales

1. **Preocupaciones sin Bloques Específicos**:
   - `inappropriate_content`: No tiene bloque específico, se cubre con controles parentales
   - `privacy_data`: No tiene bloque específico, se cubre con acciones de privacidad por plataforma
   - `no_se`: No tiene bloque específico, se incluyen recomendaciones generales

2. **Plataformas sin Bloques Específicos**:
   - Algunas plataformas (ej: `instagram`, `roblox`, `minecraft`) pueden no tener bloques completos en `contentBlocks`
   - En estos casos, se incluyen recomendaciones generales de la sección "Controles Parentales"

3. **Acciones Urgentes**:
   - La función `getUrgentActions()` actualmente retorna un array vacío (TODO pendiente)
   - Las señales de alerta no se generan automáticamente desde las respuestas

4. **Medidas Específicas**:
   - Actualmente limitadas a las 6 más prioritarias
   - Se ordenan por prioridad (high → medium → low)
   - Si hay menos de 6 acciones, se muestran todas

### 4.5 Estructura de ContentBlocks

Cada bloque en `contentBlocks` tiene la siguiente estructura:

```typescript
{
  id: string,                    // ID único del bloque
  title: string,                 // Título del bloque
  body: string,                  // Descripción del bloque
  actions: PlanAction[],         // Array de acciones
  tags: string[],                // Tags del bloque (para búsqueda)
  refs: {
    manualHeading: string,       // Referencia al manual
    manualSection?: string
  }
}
```

Cada acción tiene:

```typescript
{
  id: string,                    // ID único de la acción
  title: string,                 // Título de la acción
  description: string,           // Descripción
  tags: string[],                // Tags para filtrado
  severity?: 'high' | 'medium' | 'low',
  platform?: Platform,           // Plataforma asociada
  steps?: string[],              // Pasos a seguir
  conversationScript?: string    // Script de conversación
}
```

---

## 5. Referencias

- **Archivo de Reglas**: `src/data/plan/rules.ts`
- **Archivo de Bloques**: `src/data/plan/blocks.ts`
- **Análisis de Seguridad**: `src/utils/planGenerator.ts` → `analyzeSecurity()`
- **Análisis de Emergencia**: `src/utils/planGenerator.ts` → `analyzeEmergencyPreparedness()`
- **Componente DoneStep**: `src/components/quiz/steps/DoneStep.tsx`

---

**Última actualización**: Diciembre 2024

