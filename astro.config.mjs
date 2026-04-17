import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://heavstal-docs.vercel.app',
  integrations: [
    starlight({
      title: 'Heavstal Docs',
      logo: {
        src: './src/assets/ht_icon.svg', 
      },
      customCss: ['./src/tailwind.css'],
      sidebar: [
        {
          label: 'Getting Started',
          link: '/',
        },
        {
          label: 'Heavstal APIs',
          autogenerate: { directory: 'apis' },
        },
        {
          label: 'Heavstal Auth Provider',
          autogenerate: { directory: 'oauth' },
        },
        {
          label: 'NPM Libraries (Modules)',
          autogenerate: { directory: 'modules' },
        }
      ],
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});
