// src/components/ChangeLog/RichText.tsx
import React from 'react';
import { marked } from 'marked';

export default function RichText({ text }: { text: string }) {
  const renderer = new marked.Renderer();

  renderer.link = ({ href, title, text: linkText }) => {
    if (linkText === href) {
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-[var(--sl-color-accent)] hover:underline font-medium break-all">${linkText}</a>`;
    }
    
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[var(--sl-color-accent)] hover:underline font-medium break-all decoration-[var(--sl-color-accent)]/30 underline-offset-2">
      ${linkText}
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 mb-0.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
    </a>`;
  };
  
  marked.use({ renderer, gfm: true, breaks: true });

  const htmlContent = marked.parse(text) as string;

  return (
    <div 
      className="prose prose-invert max-w-none text-[var(--sl-color-gray-2)] text-[15px] leading-relaxed [&>p]:m-0 [&>p]:mb-3 [&>h1]:text-2xl [&>h2]:text-xl [&>h3]:text-lg [&>h1]:font-bold [&>h2]:font-bold [&>h3]:font-bold [&>h1]:mb-2 [&>h2]:mb-2 [&>h3]:mb-2"
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
    />
  );
}
