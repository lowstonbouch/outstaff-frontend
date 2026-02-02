import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const themePath = path.resolve(import.meta.dirname, '../../libs/ui/src/lib/theme');

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/outstaff-frontend',
  resolve: {
    conditions: ['@outstaff-frontend/source', 'import', 'module', 'browser', 'default'],
  },
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [themePath],
      },
    },
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
