import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://huespo.app',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
});
