import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://docs.heavstal.com',
  integrations: [
    starlight({
      title: 'Heavstal Docs',
      customCss: [
        './src/tailwind.css',
      ],
      sidebar: [
        { label: 'Introduction', link: '/' }
      ],
    }),
    tailwind({
      // Prevents Tailwind from overwriting Starlight's default beautiful styles
      applyBaseStyles: false,
    }),
  ],
});
