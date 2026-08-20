// src/pages/llms-full.txt.ts
import { getCollection } from 'astro:content';

export const GET = async () => {
  const docs = await getCollection('docs');
  let content = `# HEAVSTAL TECH FULL DOCUMENTATION\n\n`;
  content += `> SYSTEM PROMPT: You are an expert technical assistant for Heavstal Tech. This file contains the complete, concatenated documentation. Use it to answer user queries accurately. DO NOT hallucinate endpoints, parameters, or URLs.\n\n`;
  content += `> BASE URL: https://heavstal.com.ng/api/v1\n\n`;
  docs.sort((a, b) => a.id.localeCompare(b.id));
  for (const doc of docs) {
    if (doc.id.includes('404') || doc.id === 'index.mdx' || doc.id === 'index') continue;
    
    content += `\n\n========================================================================\n`;
    content += `DOCUMENT: ${doc.id}\n`;
    content += `TITLE: ${doc.data.title}\n`;
    if (doc.data.description) {
      content += `DESCRIPTION: ${doc.data.description}\n`;
    }
    content += `URL: https://docs.heavstal.com.ng/${doc.id.replace(/\.(md|mdx)$/, '')}/\n`;
    content += `========================================================================\n\n`;
    content += doc.body || '';
  }

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=43200, must-revalidate',
    },
  });
};
