import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://heavstal-docs.vercel.app',
  integrations: [
    starlight({
      title: 'Heavstal Docs',
      // TODO: upload ht_icon.svg to src/assets/ - DONE
      logo: {
        src: './src/assets/ht_icon.svg', 
      },
      social: {
        github: 'https://github.com/HeavstalTech',
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
        }
      ],
    }),
    ],
    vite: {
    plugins: [tailwind()],
  },
});
