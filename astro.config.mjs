import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://heavstal-docs.vercel.app',
  integrations: [
    starlight({
      title: 'Heavstal Docs',
      description: 'Official documentation for the Heavstal Tech Ecosystem.',
      favicon: '/favicon.ico',
      logo: {
        src: './src/assets/ht_icon.svg', 
      },
      head: [
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/favicon.ico' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://heavstal-docs.vercel.app/social-banner.png' } },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://heavstal-docs.vercel.app/social-banner.png' } },
      ],
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
