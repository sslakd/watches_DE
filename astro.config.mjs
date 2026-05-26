import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://uhrgeschichten.com',
  outDir: './dist',
  build: { format: 'file' }
});
