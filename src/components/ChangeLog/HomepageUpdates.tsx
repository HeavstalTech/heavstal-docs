// src/components/ChangeLog/HomepageUpdates.tsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import changelogData from '../../data/changelog.json';

const formatPreviewText = (text: string, wordLimit: number = 50) => {
  const stripped = text.replace(/[#_*~`>\[\]\(\)]/g, '').trim();
  const words = stripped.split(/\s+/);
  
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return stripped;
};

export default function HomepageUpdates() {
  if (!changelogData || changelogData.length === 0) return null;

  const topUpdates = changelogData.slice(0, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 font-sans not-content">
      {topUpdates.map((update: any) => (
        <div 
          key={update.id} 
          className="flex flex-col p-6 rounded-2xl border border-[var(--sl-color-gray-5)] bg-[var(--sl-color-bg-nav)] shadow-sm hover:border-[var(--sl-color-accent)] hover:shadow-md transition-all h-full"
        >
          <div className="text-[12px] font-semibold text-[var(--sl-color-gray-3)] tracking-wide uppercase mb-3">
            {update.date}
          </div>
          
          <hr className="border-t border-[var(--sl-color-gray-5)] mb-3" />

          <h3 className="text-xl font-bold text-[var(--sl-color-white)] m-0 mb-3 leading-tight line-clamp-2">
            {update.title}
          </h3>
          
          <hr className="border-t border-[var(--sl-color-gray-5)] mb-3" />

          <p className="text-[var(--sl-color-gray-3)] text-[14.5px] leading-relaxed mb-6 flex-grow m-0">
            {formatPreviewText(update.text, 50)}
          </p>
          
          <hr className="border-t border-[var(--sl-color-gray-5)] mb-4 mt-auto" />

          <div className="flex justify-end mt-auto">
            <a 
              href={`/changelog/#${update.id}`}
              className="inline-flex items-center gap-1.5 text-[var(--sl-color-accent)] hover:opacity-80 font-bold text-sm transition-opacity no-underline"
            >
              Read Update
              <ExternalLink size={16} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
