import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build
export default defineConfig({
  site: 'https://bridge2ai.org',
  integrations: [react()],
});
