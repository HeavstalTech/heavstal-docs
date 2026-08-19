// src/pages/[...slug].txt.ts
import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIContext } from 'astro';

interface Props {
  doc: CollectionEntry<'docs'>;
}

export async function getStaticPaths() {
  const docs = await getCollection('docs');
  return docs.map((doc) => {
    const slug = doc.id.replace(/\.(md|mdx)$/, '');
    return {
      params: { slug },
      props: { doc },
    };
  });
}

export const GET = async ({ props }: APIContext<Props>) => {
  return new Response(props.doc.body || '', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
