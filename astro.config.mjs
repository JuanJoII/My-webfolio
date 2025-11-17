// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  
  site: 'hhttps://JuanJoII.github.io',
  base: 'My-webfolio',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
