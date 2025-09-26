# Guía de Deployment Manual

## Opciones de Deployment

### 1. Vercel (Recomendado)

#### Instalación
```bash
npm install -g vercel
```

#### Deployment
```bash
# Deploy a producción
npm run deploy:vercel

# Deploy de preview
npm run deploy:preview
```

#### Configuración inicial
1. Ejecuta `vercel login`
2. Ejecuta `vercel` para configurar el proyecto
3. Usa `vercel --prod` para deploy a producción

### 2. GitHub Pages

#### Instalación
```bash
npm install --save-dev gh-pages
```

#### Deployment
```bash
npm run deploy:github
```

#### Configuración
1. Ve a Settings > Pages en tu repositorio
2. Selecciona "GitHub Actions" como fuente
3. El workflow se ejecutará automáticamente

### 3. Firebase Hosting

#### Instalación
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

#### Deployment
```bash
npm run deploy:firebase
```

### 4. GitHub Actions (Deployment Manual)

Puedes usar el workflow manual desde GitHub:
1. Ve a Actions en tu repositorio
2. Selecciona "Deploy Manual"
3. Haz clic en "Run workflow"
4. Selecciona la plataforma y ambiente

## Variables de Entorno Necesarias

### Para Vercel
- `VERCEL_TOKEN`: Token de API de Vercel
- `VERCEL_ORG_ID`: ID de tu organización
- `VERCEL_PROJECT_ID`: ID de tu proyecto

### Para Firebase
- `FIREBASE_TOKEN`: Token de Firebase
- `FIREBASE_PROJECT_ID`: ID de tu proyecto

## Comandos Útiles

```bash
# Build local
npm run build

# Preview local
npm run preview

# Lint antes de deploy
npm run lint

# Deploy completo con verificación
npm run lint && npm run build && npm run deploy:vercel
```
