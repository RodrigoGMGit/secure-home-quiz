# Secure Home Quiz (Hogares Seguros)

Plataforma educativa en español para padres y familias mexicanas sobre seguridad digital infantil: contenidos, recursos y un cuestionario interactivo.

## Requisitos

- Node.js (recomendado: LTS actual)
- npm

## Desarrollo local

```sh
npm install
npm run dev
```

El servidor de desarrollo usa el puerto **8080** (ver configuración en Vite).

## Scripts útiles

| Comando | Descripción |
| -------- | ------------- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Compilación de producción |
| `npm run preview` | Vista previa del build local |
| `npm run lint` | ESLint |
| `npm run optimize-images` | Optimización de imágenes del proyecto |

## Stack principal

- Vite
- TypeScript
- React
- React Router
- Tailwind CSS
- shadcn/ui (Radix)

## Despliegue

Genera el sitio estático con `npm run build` y publica el directorio `dist` según tu hosting (por ejemplo GitHub Pages, Azure Static Web Apps, Vercel o Firebase, según scripts en `package.json` si aplica).
