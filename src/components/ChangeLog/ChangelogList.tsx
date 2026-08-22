// src/components/ChangeLog/ChangelogList.tsx
import React, { useEffect } from 'react';
import ChangelogCard from './ChangelogCard';
import changelogData from '../../data/changelog.json';

export default function ChangelogList() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetElement.classList.add('ring-2', 'ring-[var(--sl-color-accent)]', 'ring-offset-2', 'ring-offset-[var(--sl-color-bg)]', 'bg-[var(--sl-color-accent-low)]');
        
        setTimeout(() => {
          targetElement.classList.remove('ring-2', 'ring-[var(--sl-color-accent)]', 'ring-offset-2', 'ring-offset-[var(--sl-color-bg)]', 'bg-[var(--sl-color-accent-low)]');
        }, 3000);
      }
    }
  }, []);

  if (!changelogData || changelogData.length === 0) {
    return (
      <div className="text-center p-12 border border-[var(--sl-color-gray-5)] rounded-2xl bg-[var(--sl-color-bg-nav)]">
        <p className="text-[var(--sl-color-gray-3)] m-0 font-medium">No updates found. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 font-sans mt-8">
      {changelogData.map((update: any) => (
        <ChangelogCard 
          key={update.id}
          id={update.id.toString()}
          title={update.title}
          text={update.text}
          date={update.date}
          media={update.media}
        />
      ))}
    </div>
  );
}
