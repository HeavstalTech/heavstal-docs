// Docs/src/content.config.ts
import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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
