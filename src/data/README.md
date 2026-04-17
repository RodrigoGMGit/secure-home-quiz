# Datos (`src/data/`)

Aquí vive el **contenido estructurado** (textos, listas, reglas) que las páginas importan. Si cambias copy masivo o reglas de negocio, empieza por el archivo indicado y luego revisa la página que lo consume (ver [`docs/NAVEGACION-CODIGO.md`](../../docs/NAVEGACION-CODIGO.md)).

## Archivos en la raíz de `data/`

| Archivo | Contenido típico | Consumido por (ejemplos) |
|---------|------------------|---------------------------|
| `risks.ts` | Riesgos digitales y categorías | `RiesgosDigitales`, modales en `components/risks/` |
| `caseStories.ts` | Historias para comunicación | `ComunicacionYApoyo` |
| `glossary.ts` | Definiciones para `<GlossaryTerm termKey="..." />` | Varios aprende + `GlossaryTerm` |
| `recursos.ts` | Descargables, términos de glosario en recursos, plataformas externas, colores de cards | `Recursos` |
| `faqLinks.ts` | Metadatos de enlaces FAQ por ruta | `Ayuda` (`getFAQLinkInfo`) |
| `learningPath.ts` | Configuración del recorrido “Aprende” y navegación | `LearningPathNav` y páginas aprende |
| `emergencyContacts.ts` | Contactos de emergencia | Pasos del quiz / emergencia |
| `expressQuizMapping.ts` | Mapeo de respuestas express a mensajes o categorías | Lógica relacionada con quiz express / resultados |

## Carpeta `plan/`

Motor del **plan personalizado** (texto que se arma según respuestas del quiz):

| Archivo | Rol |
|---------|-----|
| `plan/rules.ts` | **`buildPlan(input)`**: función principal que genera el objeto `Plan`. |
| `plan/blocks.ts` | Bloques de contenido reutilizables y mapas medida → acciones. |
| `plan/spec.ts` | Especificación, casos de prueba de composición, utilidades documentadas. |
| `plan/fixtures.ts` | Datos de ejemplo para pruebas locales. |
| `plan/fixtures/cases.ts` | Casos límite y validación de estructura. |

## Glosario en UI

Las claves de `glossary.ts` deben coincidir con `termKey` en el componente `GlossaryTerm` (ver [`src/components/ui/GlossaryTerm.tsx`](../components/ui/GlossaryTerm.tsx)).
