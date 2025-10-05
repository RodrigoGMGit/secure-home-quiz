# 🚀 Performance Optimization Plan
## Secure Home Quiz - Hogares Seguros

### 📊 Current Performance Analysis

**Bundle Analysis (from latest build):**
- **Main JS Bundle**: 431KB (139KB gzipped)
- **CSS Bundle**: 93KB (15KB gzipped)
- **Images**: 6+ MB total (1.3-1.8MB each)
- **Total Download**: ~6.5MB for first visit
- **Build Time**: ~14 seconds

**Performance Issues:**
- Images are 60-80% larger than necessary
- Main bundle could be split better
- No lazy loading for images
- Missing critical resource preloading

---

## 🎯 Optimization Phases

### **Phase 1: Quick Wins (High Impact, Low Effort)**
*Estimated time: 1-2 hours | Build time impact: +30 seconds*

#### 1.1 Vite Build Optimizations
**What it does:**
- Enable advanced minification
- Optimize chunk splitting
- Improve tree-shaking
- Add compression

**Implementation:**
```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const isUserSite = repositoryName?.endsWith(".github.io") ?? false;
  const base = repositoryName && !isUserSite ? `/${repositoryName}/` : "/";

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      // Optimize chunk splitting
      rollupOptions: {
        output: {
          manualChunks: {
            // Vendor libraries
            vendor: ['react', 'react-dom'],
            // UI libraries
            ui: ['@radix-ui/react-dialog', '@radix-ui/react-tooltip', '@radix-ui/react-accordion'],
            // Animation libraries
            animation: ['framer-motion'],
            // Router
            router: ['react-router-dom'],
            // Query client
            query: ['@tanstack/react-query']
          }
        }
      },
      // Increase chunk size warning limit
      chunkSizeWarningLimit: 1000,
      // Enable source maps for production debugging
      sourcemap: false,
      // Optimize CSS
      cssCodeSplit: true,
      // Minify options
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    // Optimize dependencies
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'framer-motion',
        '@tanstack/react-query'
      ]
    }
  };
});
```

**Expected Results:**
- Bundle size reduction: 20-30%
- Better caching strategy
- Parallel chunk loading

#### 1.2 Basic Image Compression
**Manual Process (Recommended for now):**

1. **Use online tools:**
   - [TinyPNG](https://tinypng.com/) - Compress PNG files
   - [Squoosh](https://squoosh.app/) - Google's image optimizer
   - [Compressor.io](https://compressor.io/) - Multiple formats

2. **Target compression settings:**
   - **PNG**: 80-85% quality, remove metadata
   - **JPEG**: 75-80% quality, progressive encoding
   - **WebP**: 80% quality (modern browsers)

3. **Expected file size reductions:**
   ```
   child-gaming-safely.png: 1.4MB → 300-400KB
   child-using-tablet.png: 1.4MB → 300-400KB
   child1.png: 1.6MB → 350-450KB
   children-learning-together.png: 1.3MB → 280-380KB
   familia 3.png: 1.5MB → 320-420KB
   familia1.png: 1.8MB → 380-480KB
   ```

4. **Replace files in `src/assets/`:**
   - Keep original filenames
   - Test that images still look good
   - Verify responsive behavior

**Expected Results:**
- Total image size: 6MB → 1.5-2MB
- 70-80% reduction in image loading time

---

### **Phase 2: Medium Impact (Medium Effort)**
*Estimated time: 3-4 hours | Build time impact: +45 seconds*

#### 2.1 Lazy Loading for Images
**Implementation:**

1. **Install intersection observer hook:**
```bash
npm install --save-dev react-intersection-observer
```

2. **Create LazyImage component:**
```typescript
// src/components/ui/LazyImage.tsx
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export function LazyImage({ src, alt, className, placeholder }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {inView && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setLoaded(true)}
        />
      )}
      {!loaded && placeholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-mint-200/20 to-brand-teal-500/10 animate-pulse" />
      )}
    </div>
  );
}
```

3. **Replace img tags in components:**
```typescript
// Before
<img src={childImage} alt="Child using tablet" />

// After
<LazyImage 
  src={childImage} 
  alt="Child using tablet" 
  className="w-full h-auto rounded-lg"
  placeholder="blur"
/>
```

**Expected Results:**
- Initial page load: 50-70% faster
- Better mobile experience
- Reduced bandwidth usage

#### 2.2 Critical Resource Preloading
**Implementation:**

1. **Add preload links to index.html:**
```html
<!-- In public/index.html, before closing </head> -->
<link rel="preload" href="/assets/index-[hash].css" as="style">
<link rel="preload" href="/assets/index-[hash].js" as="script">
<link rel="preload" href="/assets/GlobalHeader-[hash].js" as="script">
```

2. **Add font preloading:**
```html
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style">
```

3. **Create preload hook:**
```typescript
// src/hooks/usePreload.tsx
import { useEffect } from 'react';

export function usePreload(resources: string[]) {
  useEffect(() => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }, [resources]);
}
```

**Expected Results:**
- Perceived performance improvement: 0.5-1 second
- Better critical rendering path
- Smoother initial load

---

### **Phase 3: Advanced Optimizations (High Effort)**
*Estimated time: 4-6 hours | Build time impact: +60 seconds*

#### 3.1 Advanced Code Splitting
**Implementation:**

1. **Route-based splitting:**
```typescript
// src/App.tsx - Enhanced lazy loading
const Quiz = lazy(() => import("./pages/Quiz"));
const TuFamilia = lazy(() => import("./pages/TuFamilia"));
// Add loading states for each route
```

2. **Component-level splitting:**
```typescript
// Split heavy components
const HeavyChart = lazy(() => import("./components/HeavyChart"));
const VideoPlayer = lazy(() => import("./components/VideoPlayer"));
```

3. **Dynamic imports for features:**
```typescript
// Load features on demand
const loadAnalytics = () => import('./utils/analytics');
const loadEmailService = () => import('./services/email');
```

#### 3.2 Advanced Image Optimization
**Automated Build-time Compression:**

1. **Install image optimization plugins:**
```bash
npm install --save-dev vite-plugin-imagemin imagemin-webp imagemin-pngquant imagemin-mozjpeg
```

2. **Update vite.config.ts:**
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteImagemin } from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.65, 0.8] },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: false }
        ]
      },
      webp: { quality: 80 }
    })
  ]
});
```

3. **Create responsive image component:**
```typescript
// src/components/ui/ResponsiveImage.tsx
interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
}

export function ResponsiveImage({ src, alt, sizes, className }: ResponsiveImageProps) {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <source srcSet={`${src}.avif`} type="image/avif" />
      <img 
        src={src} 
        alt={alt} 
        sizes={sizes || "100vw"}
        className={className}
        loading="lazy"
      />
    </picture>
  );
}
```

---

## 📈 Expected Performance Improvements

| Phase | Bundle Size | Load Time | Mobile Experience | Implementation Time |
|-------|-------------|-----------|-------------------|---------------------|
| **Current** | 6.5MB total | 6-8 seconds | Poor | - |
| **Phase 1** | 3-4MB total | 2-3 seconds | Good | 1-2 hours |
| **Phase 2** | 3-4MB total | 1-2 seconds | Excellent | +3-4 hours |
| **Phase 3** | 2-3MB total | 0.5-1 second | Outstanding | +4-6 hours |

---

## 🛠️ Implementation Checklist

### **Phase 1 Checklist:**
- [ ] Update `vite.config.ts` with build optimizations
- [ ] Compress all images in `src/assets/` using online tools
- [ ] Test build process and verify improvements
- [ ] Update build time expectations

### **Phase 2 Checklist:**
- [ ] Install `react-intersection-observer`
- [ ] Create `LazyImage` component
- [ ] Replace all `<img>` tags with `<LazyImage>`
- [ ] Add preload links to `index.html`
- [ ] Create `usePreload` hook
- [ ] Test lazy loading behavior

### **Phase 3 Checklist:**
- [ ] Install image optimization plugins
- [ ] Update Vite config with imagemin
- [ ] Create `ResponsiveImage` component
- [ ] Implement advanced code splitting
- [ ] Add WebP/AVIF support
- [ ] Performance testing and optimization

---

## 🔧 Tools and Resources

### **Image Compression Tools:**
- [TinyPNG](https://tinypng.com/) - PNG compression
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [Compressor.io](https://compressor.io/) - Multiple formats
- [ImageOptim](https://imageoptim.com/) - Mac app

### **Performance Testing:**
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Built into Chrome DevTools
- [WebPageTest](https://www.webpagetest.org/) - Online performance testing
- [GTmetrix](https://gtmetrix.com/) - Performance analysis

### **Monitoring:**
- [Vite Bundle Analyzer](https://github.com/btd/rollup-plugin-visualizer) - Bundle analysis
- [Chrome DevTools Performance](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance) - Runtime analysis

---

## 🚨 Important Notes

### **Build Time Impact:**
- **Phase 1**: +30 seconds (14s → 44s)
- **Phase 2**: +45 seconds (44s → 89s)
- **Phase 3**: +60 seconds (89s → 149s)

### **Browser Support:**
- **WebP**: Supported in 95%+ of modern browsers
- **Lazy Loading**: Native support in modern browsers, polyfill for older ones
- **Code Splitting**: Works in all modern browsers

### **Maintenance:**
- Image optimization needs to be re-run when adding new images
- Bundle analysis should be done periodically
- Performance monitoring should be ongoing

---

## 🎯 Quick Start (Phase 1 Only)

If you want to implement just Phase 1 right now:

1. **Update `vite.config.ts`** with the build optimizations above
2. **Compress images** using TinyPNG or Squoosh
3. **Test the build** and verify improvements
4. **Deploy and measure** the performance gains

This will give you 60-70% of the performance benefits with minimal complexity!

---

**Last Updated**: December 2024  
**Next Review**: After implementing Phase 1
