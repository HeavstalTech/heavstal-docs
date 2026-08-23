//src/components/ChangeLog/HomepageUpdates.tsx
import React from 'react';
import { ExternalLink } from 'lucide-react'; 
import changelogData from '../../data/changelog.json';
import RichText from './RichText';

export default function HomepageUpdates() {
  if (!changelogData || changelogData.length === 0) return null;

  const topUpdates = changelogData.slice(0, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 font-sans not-content">
      {topUpdates.map((update: any) => (
        <div 
          key={update.id} 
          className="flex flex-col p-6 sm:p-8 rounded-2xl border border-[var(--sl-color-gray-5)] bg-[var(--sl-color-bg-nav)] shadow-sm hover:border-[var(--sl-color-accent)] hover:shadow-md transition-all h-full"
        >
          <div className="text-[13px] font-bold text-[var(--sl-color-gray-3)] tracking-wider uppercase mb-4">
            {update.date}
          </div>
          
          <hr className="border-t border-[var(--sl-color-gray-5)] mb-4" />

          <h3 className="text-xl md:text-2xl font-bold text-[var(--sl-color-white)] m-0 mb-4 leading-tight line-clamp-2">
            {update.title}
          </h3>
          
          <hr className="border-t border-[var(--sl-color-gray-5)] mb-4" />

          <div className="mb-6 flex-grow">
            <RichText text={update.text} className="line-clamp-4 overflow-hidden" />
          </div>
          
          <hr className="border-t border-[var(--sl-color-gray-5)] mb-4 mt-auto" />

          <div className="flex justify-end mt-auto">
            <a 
              href={`/changelog/#${update.id}`}
              className="inline-flex items-center gap-1.5 text-[var(--sl-color-accent)] hover:opacity-80 font-bold text-[15px] transition-opacity no-underline"
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
