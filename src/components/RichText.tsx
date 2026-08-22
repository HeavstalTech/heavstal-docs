// src/component/RichText.tsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function RichText({ text }: { text: string }) {
  const tokenRegex = /(\[[^\]]+\]\(https?:\/\/[^\s)]+\)|https?:\/\/[^\s]+)/g;
  const mdLinkRegex = /^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/;
  const parts = text.split(tokenRegex);

  return (
    <p className="text-[var(--sl-color-gray-2)] text-[15px] leading-relaxed whitespace-pre-wrap m-0">
      {parts.map((part, i) => {
        const mdMatch = part.match(mdLinkRegex);
        if (mdMatch) {
          const label = mdMatch[1];
          const url = mdMatch[2];
          return (
            <a 
              key={i} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 text-[var(--sl-color-accent)] hover:underline font-medium break-all"
            >
              {label}
              <ExternalLink size={14} className="shrink-0 mb-0.5" />
            </a>
          );
        }

        if (part.startsWith('http://') || part.startsWith('https://')) {
          return (
            <a 
              key={i} 
              href={part} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[var(--sl-color-accent)] hover:underline font-medium break-all"
            >
              {part}
            </a>
          );
        }

        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </p>
  );
}
