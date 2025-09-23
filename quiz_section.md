# Quiz Section - Documentación Técnica

## Resumen Ejecutivo

El quiz de diagnóstico de seguridad digital es el componente central de la aplicación Secure Home Quiz. Es un flujo interactivo de 7 pasos que recopila información sobre el perfil digital del niño/a y genera un plan personalizado de seguridad digital para padres mexicanos.

## Arquitectura General

### Flujo del Quiz
```
Welcome → Gender → Age → Platforms → Measures → Habits/Signals → Concerns → Done
```

### Componentes Principales
- **Estado Global**: `useQuizState` hook para manejo de estado
- **Shell**: `AppShellCard` para estructura común
- **Pasos**: 8 componentes individuales por paso
- **Utilidades**: Componentes compartidos (`OptionGrid`, `Notice`, etc.)

## Detalle por Pasos

### 1. Welcome Step (`WelcomeStep.tsx`)
**Propósito**: Introducción y contexto del diagnóstico

**Funcionalidades**:
- Presentación del diagnóstico (3-4 minutos)
- Garantías de anonimato
- Promesa de plan personalizado
- Información sobre múltiples hijos
- Capacidad de saltar preguntas

**Datos recopilados**: Ninguno (solo navegación)

**UI Elements**:
- StepHeader con título y subtítulo
- Notice informativo con instrucciones
- Grid de 3 columnas con beneficios (tiempo, anonimato, personalización)
- Botón "Comenzar diagnóstico"

### 2. Gender Step (`GenderStep.tsx`)
**Propósito**: Identificación del género del niño/a (opcional)

**Funcionalidades**:
- Selección única de género
- Opción "Prefiero no especificar"
- Capacidad de saltar el paso
- Validación opcional

**Datos recopilados**:
```typescript
child_gender?: 'Niño' | 'Niña' | 'Prefiero no especificar'
```

**UI Elements**:
- OptionGrid con 3 opciones
- Botones "Atrás" y "Continuar/Saltar"
- Feedback visual cuando se selecciona

### 3. Age Step (`AgeStep.tsx`)
**Propósito**: Definición de la banda de edad (requerido)

**Funcionalidades**:
- Selección única de banda de edad
- 4 rangos: 6-8, 9-12, 13-15, 16-17
- Validación requerida para continuar
- Adaptación de contenido según edad

**Datos recopilados**:
```typescript
age_band: '6-8' | '9-12' | '13-15' | '16-17' // REQUERIDO
```

**UI Elements**:
- OptionGrid con 4 opciones de edad
- Iconos específicos por edad
- Descripciones contextuales
- Validación de paso requerido

### 4. Platforms Step (`PlatformsStep.tsx`)
**Propósito**: Identificación de plataformas digitales utilizadas

**Funcionalidades**:
- Selección múltiple de plataformas
- Campo de texto opcional para "Otros"
- Opción "No estoy seguro/a" con ayuda
- Restricciones por edad (ej: TikTok para menores)
- Validación de plataformas seleccionadas

**Datos recopilados**:
```typescript
platforms?: Platform[]
other_platforms?: string
unknown_platforms?: boolean
```

**Plataformas soportadas**:
- WhatsApp (mensajería)
- YouTube (videos)
- Instagram (red social)
- Roblox (juegos)
- Minecraft (juegos)
- TikTok (videos cortos, +13)
- Otros (campo de texto libre)

**UI Elements**:
- OptionGrid con selección múltiple
- Campo Input para plataformas adicionales
- Botón de ayuda "No estoy seguro/a"
- Notice de ayuda con tips de descubrimiento
- Validación condicional por edad

### 5. Measures Step (`MeasuresStep.tsx`)
**Propósito**: Evaluación de medidas de seguridad implementadas

**Funcionalidades**:
- Checklist por plataforma seleccionada
- Medidas específicas por plataforma
- Área clickeable completa para cada medida
- Conteo de medidas implementadas
- Flujo alternativo si no hay plataformas

**Datos recopilados**:
```typescript
measures: { [key in Platform]?: string[] }
```

**Medidas por plataforma**:

**WhatsApp**:
- Verificación en dos pasos
- Solo contactos pueden agregar a grupos
- Foto y última conexión solo para contactos
- Ubicación desactivada
- Saber bloquear y reportar

**YouTube**:
- Modo restringido activado
- Temporizador configurado
- Comentarios desactivados
- Lista de canales seguros

**Instagram**:
- Cuenta privada activada
- Mensajes directos limitados
- Historias solo para amigos cercanos
- Ubicación desactivada
- Saber bloquear y reportar

**Roblox**:
- Cuenta con restricciones
- Chat limitado/desactivado
- Servidores privados
- Compras desactivadas
- Saber bloquear y reportar

**Minecraft**:
- Servidor privado/familiar
- Chat desactivado en multijugador
- Minecraft Realms familiar
- No descargar mods desconocidos

**TikTok**:
- Cuenta privada
- Mensajes directos limitados
- Filtro de palabras
- Control de tiempo
- Transmisiones en vivo desactivadas

**Otros**:
- Controles parentales configurados
- Configuración de privacidad revisada
- Reglas de uso seguro establecidas

**UI Elements**:
- ChecklistByPlatform component
- Área clickeable completa por medida
- Notices de feedback según medidas seleccionadas
- Flujo condicional si no hay plataformas

### 6. Habits/Signals Step (`HabitsSignalsStep.tsx`)
**Propósito**: Evaluación de hábitos digitales y señales de alerta

**Funcionalidades**:
- Dos secciones: Hábitos y Señales
- Selección múltiple en ambas secciones
- Hábitos positivos y desafíos
- Señales de comportamiento preocupante

**Datos recopilados**:
```typescript
habits: string[]
signals: string[]
```

**Hábitos evaluados**:
- Hábitos positivos (comunicación abierta, límites claros, etc.)
- Desafíos comunes (resistencia a límites, uso excesivo, etc.)

**Señales de alerta**:
- Cambios de comportamiento
- Secretismo digital
- Aislamiento social
- Problemas académicos
- Cambios físicos/emocionales

**UI Elements**:
- Dos OptionGrid separados
- Categorización visual de hábitos vs señales
- Feedback contextual según selecciones

### 7. Concerns Step (`ConcernsStep.tsx`)
**Propósito**: Identificación de preocupaciones específicas de los padres

**Funcionalidades**:
- Selección múltiple de preocupaciones
- Opciones adaptadas por edad
- Preocupaciones específicas por banda etaria
- Opción "No estoy seguro/a"

**Datos recopilados**:
```typescript
concerns: string[]
```

**Preocupaciones base**:
- Contenido inapropiado
- Contacto con extraños
- Ciberacoso
- Tiempo de pantalla y sueño
- Privacidad y datos personales
- No estoy seguro/a

**Preocupaciones por edad**:
- **6-8**: Enfoque en contenido apropiado y tiempo
- **9-12**: Agregar aspectos sociales básicos
- **13-15**: Incluir redes sociales y presión social
- **16-17**: Agregar temas de relaciones y contenido adulto

**UI Elements**:
- OptionGrid con opciones dinámicas por edad
- Iconos específicos por preocupación
- Descripciones contextuales

### 8. Done Step (`DoneStep.tsx`)
**Propósito**: Finalización y recopilación de email para plan

**Funcionalidades**:
- Resumen de completado
- A/B testing para recopilación de email
- Opción de saltar email
- Generación de plan personalizado

**Variantes A/B**:
- **Variante A**: Enfoque en beneficios del plan
- **Variante B**: Enfoque en urgencia/acción
- **Variante C**: Enfoque en comunidad/apoyo

**Datos recopilados**:
```typescript
email?: string
wants_reminders?: boolean
```

**UI Elements**:
- Mensaje de completado
- ABGateEmail component
- Opciones de email y recordatorios
- Botón de saltar

## Gestión de Estado

### Hook Principal: `useQuizState`
**Ubicación**: `src/hooks/useQuizState.tsx`

**Funcionalidades**:
- Estado persistente en localStorage
- Navegación entre pasos
- Validación de pasos requeridos
- Auto-save de respuestas
- Tracking de analytics
- Generación de PlanInput

**Estado principal**:
```typescript
interface QuizState {
  currentStep: QuizStep
  answers: QuizAnswers
  visitorId: string
  abVariant: ABVariant
  startTime: number
}
```

**Métodos principales**:
- `updateAnswers()`: Actualizar respuestas
- `nextStep()`: Avanzar al siguiente paso
- `previousStep()`: Retroceder al paso anterior
- `completeQuiz()`: Finalizar y generar plan
- `canProceed()`: Validar si puede continuar
- `getStepNumber()`: Obtener número de paso actual

### Persistencia
- **localStorage**: Estado del quiz y respuestas
- **Auto-save**: Cada cambio se guarda automáticamente
- **Recuperación**: Estado se restaura al recargar página

## Componentes Compartidos

### AppShellCard
**Propósito**: Shell común para todos los pasos

**Funcionalidades**:
- Barra de progreso
- Botón de retroceso
- Estructura consistente
- Responsive design

### OptionGrid
**Propósito**: Grid de opciones reutilizable

**Funcionalidades**:
- Selección única o múltiple
- Iconos y descripciones
- Validación por edad
- Estados visuales

### Notice
**Propósito**: Mensajes informativos contextuales

**Tipos**:
- `info`: Información general
- `success`: Confirmación positiva
- `warning`: Advertencias
- `help`: Ayuda contextual

### ChecklistByPlatform
**Propósito**: Checklist de medidas por plataforma

**Funcionalidades**:
- Medidas específicas por plataforma
- Área clickeable completa
- Descripciones detalladas
- Conteo de selecciones

## Tipos TypeScript

### Tipos Principales
```typescript
// Pasos del quiz
type QuizStep = 'welcome' | 'gender' | 'age' | 'platforms' | 'measures' | 'habits_signals' | 'concerns' | 'done'

// Género del niño/a
type ChildGender = 'Niño' | 'Niña' | 'Prefiero no especificar'

// Bandas de edad
type AgeBand = '6-8' | '9-12' | '13-15' | '16-17'

// Plataformas soportadas
type Platform = 'whatsapp' | 'youtube' | 'instagram' | 'roblox' | 'minecraft' | 'tiktok' | 'otros'

// Variantes A/B
type ABVariant = 'A' | 'B' | 'C'
```

### Interfaces de Datos
```typescript
// Respuestas del usuario
interface QuizAnswers {
  child_gender?: ChildGender
  age_band?: AgeBand
  platforms?: Platform[]
  other_platforms?: string
  unknown_platforms?: boolean
  measures?: { [key in Platform]?: string[] }
  habits?: string[]
  signals?: string[]
  concerns?: string[]
}

// Input para generación de plan
interface PlanInput {
  age_band: AgeBand
  platforms: Platform[]
  other_platforms?: string
  unknown_platforms: boolean
  measures: { [key in Platform]?: string[] }
  habits: string[]
  signals: string[]
  concerns: string[]
  ab_variant_plan_email: ABVariant
}
```

## Analytics y Tracking

### Eventos Trackeados
- `session_start`: Inicio de sesión
- `quiz_step_view`: Visualización de paso
- `platform_select`: Selección de plataformas
- `measures_selected`: Selección de medidas
- `quiz_complete`: Completado del quiz
- `plan_email_request`: Solicitud de email

### Datos Capturados
- Información del dispositivo
- Parámetros UTM
- Duración del quiz
- Respuestas agregadas (sin datos personales)
- Variante A/B

## Validaciones y Reglas de Negocio

### Pasos Requeridos
- **Age Step**: Requerido para continuar
- **Otros pasos**: Opcionales, pueden saltarse

### Lógica Condicional
- **Measures Step**: Se salta si no hay plataformas seleccionadas
- **Platforms**: Restricciones por edad (ej: TikTok +13)
- **Concerns**: Opciones adaptadas por banda de edad

### Navegación
- **Adelante**: Validación de pasos requeridos
- **Atrás**: Navegación libre con lógica de saltos
- **Persistencia**: Estado se mantiene entre navegaciones

## Mejoras Implementadas Recientemente

### Campo de Texto para "Otros" Plataformas
- **Fecha**: Implementado en sesión actual
- **Funcionalidad**: Campo opcional cuando se selecciona "Otros"
- **Comportamiento**: Se limpia automáticamente al deseleccionar
- **Validación**: Completamente opcional

### Reemplazo de YouTube Kids por Instagram
- **Fecha**: Implementado en sesión actual
- **Cambio**: YouTube Kids → Instagram
- **Razón**: Mayor relevancia entre jóvenes
- **Impacto**: Actualizado en tipos, opciones y medidas

### Área Clickeable Completa en Medidas
- **Fecha**: Implementado en sesión actual
- **Problema**: Solo checkbox era clickeable
- **Solución**: Toda el área del elemento es clickeable
- **UX**: Mejor experiencia de usuario

## Capacidades Actuales

### ✅ Implementado
- Flujo completo de 7 pasos
- Persistencia de estado
- Validaciones por edad
- A/B testing
- Analytics tracking
- Responsive design
- Navegación bidireccional
- Campo de texto para plataformas adicionales
- Área clickeable completa en medidas
- Medidas específicas por plataforma

### 🔄 En Desarrollo
- Generación de plan personalizado
- Integración con backend
- Envío de emails con planes

### 📋 Pendiente
- Tests unitarios
- Tests de integración
- Optimización de performance
- Accesibilidad mejorada
- Internacionalización

## Consideraciones Técnicas

### Performance
- Componentes funcionales con hooks
- Estado local optimizado
- Lazy loading de componentes
- Memoización donde necesario

### Accesibilidad
- Labels apropiados
- Navegación por teclado
- Contraste adecuado
- Screen reader friendly

### Responsive Design
- Mobile-first approach
- Breakpoints consistentes
- Touch-friendly interfaces
- Adaptación de contenido

### Seguridad
- Datos anónimos
- No almacenamiento de información personal
- Validación client-side
- Sanitización de inputs

## Próximos Pasos

1. **Implementar generación de plan**: Backend integration
2. **Mejorar analytics**: Más eventos y métricas
3. **Optimizar UX**: Micro-interacciones y feedback
4. **Agregar tests**: Cobertura completa
5. **Documentar APIs**: Especificaciones técnicas
6. **Performance audit**: Optimización adicional

---

*Documento generado automáticamente - Última actualización: Diciembre 2024*
