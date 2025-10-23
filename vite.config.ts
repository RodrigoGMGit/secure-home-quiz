import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
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
    plugins: [
      react(), 
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        workbox: {
          navigateFallback: '/offline.html',
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
              handler: 'StaleWhileRevalidate',
            },
            {
              urlPattern: ({url}) => url.origin.includes('fonts.gstatic.com'),
              handler: 'CacheFirst',
              options: { cacheName: 'google-fonts' },
            },
          ],
        },
      }),
      mode === "development" && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

