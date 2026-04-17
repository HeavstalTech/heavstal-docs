import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://heavstal-docs.vercel.app',
  integrations: [
    starlight({
      title: 'Heavstal Docs',
      // We will leave this commented out until you upload ht_icon.svg to src/assets/
      // logo: {
      //   src: './src/assets/ht_icon.svg', 
      // },
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
    tailwind({ applyBaseStyles: false }),
  ],
});
