import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://speedyturtle599.github.io',
  integrations: [preact()],
});
