// @ts-check

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://JuanJoII.github.io',
  base: '/My-webfolio',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
