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
      editLink: {
        baseUrl: 'https://github.com/HeavstalTech/heavstal-docs/edit/main/',
      },
      lastUpdated: true,
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
        },
        {
          label: 'Heavatal Bots (Wa/Tg)',
          autogenerate: { directory: 'bots' },
        }
      ],
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});
