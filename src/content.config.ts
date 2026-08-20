// Docs/src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

export const collections = {
  docs: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
    schema: docsSchema({
      extend: z.object({
        hideTitle: z.boolean().default(false),
        hidePagination: z.boolean().default(false),
      })
    }),
  }),
};
