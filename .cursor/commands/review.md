# Code Review Checklist

## Propósito
Revisar código siguiendo los estándares del proyecto Secure Home Quiz, enfocándose en el sistema de diseño, accesibilidad y mejores prácticas.

## Contexto
Este proyecto requiere:
- Cumplimiento estricto del sistema de diseño
- Accesibilidad WCAG AA
- Responsividad mobile-first
- Contenido educativo en español (México)
- Performance optimizada

## Checklist de Revisión

### 🎨 Sistema de Diseño
- [ ] **Colores**: Usa solo colores de marca (brand-teal-500, brand-ink-900, etc.)
- [ ] **Tipografía**: Implementa escala responsiva correcta (text-base sm:text-lg)
- [ ] **Espaciado**: Sigue la escala estándar (space-4, space-6, space-8)
- [ ] **Componentes**: Cards con sistema de colores rotativos
- [ ] **Animaciones**: Hover effects y transiciones suaves
- [ ] **Gradientes**: Fondos sutiles y elementos decorativos

### 📱 Responsividad
- [ ] **Mobile-first**: Diseño funciona desde 320px
- [ ] **Breakpoints**: Usa sm:, md:, lg:, xl: correctamente
- [ ] **Touch targets**: Mínimo 44px para elementos interactivos
- [ ] **Texto legible**: Sin zoom necesario en móvil
- [ ] **Navegación**: Intuitiva en dispositivos táctiles

### ♿ Accesibilidad
- [ ] **Contraste**: Ratios WCAG AA cumplidos
- [ ] **Navegación por teclado**: Focus visible y lógico
- [ ] **ARIA labels**: En iconos sin texto
- [ ] **Alt text**: En todas las imágenes
- [ ] **Semántica HTML**: Uso correcto de headings y landmarks

### 📚 Contenido Educativo
- [ ] **Elementos decorativos**: Círculos animados de fondo
- [ ] **Header principal**: Logo circular con gradiente
- [ ] **Frase destacada**: Con icono y etiqueta
- [ ] **Sección introducción**: Layout de 2 columnas
- [ ] **Puntos clave**: Números circulares con colores rotativos

### 🔧 Código Técnico
- [ ] **TypeScript**: Tipos correctos y sin any
- [ ] **Imports**: Organizados y sin dependencias innecesarias
- [ ] **Performance**: Componentes optimizados
- [ ] **SEO**: Meta tags y estructura semántica
- [ ] **Linting**: Sin errores de ESLint

## Comandos de Verificación

```bash
# Linting
npm run lint

# Build test
npm run build

# Type checking
npx tsc --noEmit

# Accessibility audit (Chrome DevTools)
# Lighthouse > Accessibility
```

## Preguntas Clave
1. ¿El componente sigue los patrones del sistema de diseño?
2. ¿Funciona correctamente en móvil y desktop?
3. ¿Es accesible para usuarios con discapacidades?
4. ¿El contenido es claro y útil para padres mexicanos?
5. ¿Mantiene la consistencia visual del proyecto?

## Criterios de Aprobación
- ✅ Todos los checkboxes marcados
- ✅ Lighthouse score > 90 en todas las métricas
- ✅ Sin errores de linting o TypeScript
- ✅ Funcionalidad verificada en diferentes dispositivos
- ✅ Cumple objetivos de accesibilidad y UX

## Notas Adicionales
- Priorizar experiencia del usuario sobre perfección técnica
- Considerar impacto en performance
- Verificar que no se rompan otras páginas
- Documentar decisiones de diseño importantes
