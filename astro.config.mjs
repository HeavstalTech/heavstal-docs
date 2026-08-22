import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
///import tailwind from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://docs.heavstal.com.ng',
  markdown: {
    gfm: true,
  },
  integrations:[
    react(),
    starlight({
      title: 'Heavstal Docs',
      description: 'Documentation for the Heavstal Tech.',
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/ht_iconDocs.svg', 
      },
      components: {
        Pagination: './src/components/Feedback.astro',
        PageTitle: './src/components/PageTitleOverride.astro',
        PageFrame: './src/components/PageFrameOverride.astro',
       // Icon: './src/components/IconOverride.astro', // Astro doesn't support it
      },
      head:[
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/favicon.ico' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://docs.heavstal.com.ng/social-banner.png' } },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://docs.heavstal.com.ng/social-banner.png' } },
      ],
      editLink: {
        baseUrl: 'https://github.com/HeavstalTech/heavstal-docs/edit/main/',
      },
      lastUpdated: true,
      customCss: ['./src/tailwind.css'],
      sidebar:[
        {
          label: 'Getting Started',
          link: '/',
        },
        {
          label: 'REST APIs',
          collapsed: true,
          autogenerate: { directory: 'apis' },
        },
        {
          label: 'Auth Provider',
          collapsed: true,
          autogenerate: { directory: 'oauth' },
        },
        {
          label: 'Packages',
          collapsed: true,
          autogenerate: { directory: 'modules' },
        },
        {
          label: 'Automation Bots', 
          collapsed: true,
          autogenerate: { directory: 'bots' },
        },
        {
          label: 'Ecosystem Guides',
          collapsed: true,
          items:[
            {
              label: 'Overview',
              link: '/overview/',
            },
            {
              label: 'Heavstal Tech Platform',
              collapsed: true,
              items:[
                { label: 'Introduction', link: '/guides/heavstal-tech/' },
              ]
            },
            {
              label: 'Heavstal Bots',
              collapsed: true,
              items:[
                { label: 'Introduction', link: '/guides/heavstal-bots/' },
                { label: 'How to Make an Authcode', link: '/guides/heavstal-bots/auth-code/' },
                { label: 'Terms & Privacy', link: '/guides/heavstal-bots/terms/' },
                { label: 'Pricing', link: '/guides/heavstal-bots/pricing/' },
              ]
            },
            {
              label: 'Heavstal Accounts',
              collapsed: true,
              items:[
                { label: 'Introduction', link: '/guides/heavstal-accounts/' },
              ]
            }
          ]
        }
      ],
    }),
    mdx(),
  ],
//  vite: {
//    plugins: [tailwind()],
//  },
})
