// src/pages/[...slug].md.ts
import { getCollection } from 'astro:content';

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

export const GET = async ({ props }) => {
  const { doc } = props;
  return new Response(doc.body || '', {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
