import { defineConfig } from 'file:///C:/tmp/top-euro-tscheck/node_modules/vite/dist/node/index.js';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const harnessRoot = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(harnessRoot, '..', '..');
const tempModules = 'C:/tmp/top-euro-tscheck/node_modules';

export default defineConfig({
  root: harnessRoot,
  publicDir: resolve(projectRoot, 'public'),
  resolve: {
    alias: [
      { find: '@/components/ui/image', replacement: resolve(harnessRoot, 'image.tsx') },
      { find: '@/lib/scroll-to-top', replacement: resolve(harnessRoot, 'scroll-to-top.tsx') },
      { find: '@/integrations/errorHandlers/ErrorPage', replacement: resolve(harnessRoot, 'error-page.tsx') },
      { find: '@', replacement: resolve(projectRoot, 'src') },
      { find: 'react/jsx-runtime', replacement: `${tempModules}/react/jsx-runtime.js` },
      { find: 'react-dom/client', replacement: `${tempModules}/react-dom/client.js` },
      { find: 'react-router-dom', replacement: `${tempModules}/react-router-dom/dist/index.mjs` },
      { find: 'lucide-react', replacement: `${tempModules}/lucide-react/dist/esm/lucide-react.js` },
      { find: 'react', replacement: `${tempModules}/react/index.js` }
    ],
  },
  server: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true,
    fs: { allow: [projectRoot, harnessRoot, tempModules] },
  },
  build: {
    outDir: resolve(projectRoot, 'tmp-preview-dist'),
    emptyOutDir: true,
  },
});
