# Commit Changes

## Propósito
Crear commits siguiendo las convenciones del proyecto Secure Home Quiz.

## Pasos para Commit

### 1. Agregar Cambios
```bash
git add .
```

### 2. Crear Commit
```bash
git commit -m "feat: [descripción específica del cambio]

- Detalle 1 del cambio
- Detalle 2 del cambio
- Referencia a sección implementada"
```

## Tipos de Commit Recomendados
- `feat:` - Nueva funcionalidad o página
- `improve:` - Mejoras en código existente
- `fix:` - Corrección de bugs
- `style:` - Cambios de formato/estilo
- `refactor:` - Refactorización de código
- `docs:` - Actualización de documentación

## Ejemplos de Mensajes de Commit

### Para nuevas páginas:
```
feat: implementar página TuFamiliaVideojuegos

- Agregar header principal con elementos decorativos
- Implementar sección de introducción con puntos clave
- Crear grid de consejos con sistema de colores rotativos
- Aplicar responsividad completa mobile-first
```

### Para mejoras:
```
improve: optimizar responsividad en ControlesParentales

- Ajustar breakpoints para mejor experiencia móvil
- Mejorar espaciado en cards
- Optimizar tipografía responsiva
```

### Para correcciones:
```
fix: corregir navegación en página Recursos

- Arreglar enlaces rotos en menú lateral
- Corregir scroll automático
```
