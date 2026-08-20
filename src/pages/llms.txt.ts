// src/pages/llms.txt.ts
import { getCollection } from 'astro:content';

export const GET = async () => {
  const docs = await getCollection('docs');
  let content = `# Heavstal Tech\n\n`;
  content += `> Heavstal Tech is a software company providing REST APIs, OAuth 2.0 identity provider, enterprise NPM modules, and automation bots for developers.\n\n`;
  content += `This is the concise routing index. To ingest all documentation at once, fetch [https://docs.heavstal.com.ng/llms-full.txt](https://docs.heavstal.com.ng/llms-full.txt).\n\n`;

  const categories = {
    'Getting Started & Core': docs.filter(d => d.id === 'index.mdx' || d.id === 'overview.mdx' || d.id === 'apis/introduction.mdx' || d.id.startsWith('oauth/')),
    'Heavstal APIs': docs.filter(d => d.id.startsWith('apis/') && d.id !== 'apis/introduction.mdx'),
    'NPM Modules & SDKs': docs.filter(d => d.id.startsWith('modules/')),
    'Automation Bots': docs.filter(d => d.id.startsWith('bots/') || d.id.startsWith('guides/heavstal-bots/')),
    'Optional': docs.filter(d => d.id.startsWith('guides/') && !d.id.startsWith('guides/heavstal-bots/'))
  };

  for (const [category, items] of Object.entries(categories)) {
    if (items.length === 0) continue   
    content += `## ${category}\n\n`;
    items.sort((a, b) => a.data.title.localeCompare(b.data.title)).forEach(doc => {
      if (doc.id.includes('404')) return
      const url = `https://docs.heavstal.com.ng/${doc.id.replace(/\.(md|mdx)$/, '')}/`;
      const title = doc.data.title;
      const desc = doc.data.description || "Documentation page.";      
      content += `- [${title}](${url}): ${desc}\n`;
    });
    content += `\n`;
  }

  return new Response(content.trim() + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=43200, must-revalidate',
    },
  });
};
