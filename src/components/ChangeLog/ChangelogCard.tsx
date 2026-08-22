// src/components/ChangeLog/ChangelogCard.tsx
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import RichText from './RichText';
import MediaViewer from './MediaViewer';

interface ChangelogCardProps {
  id: string;
  title: string;
  text: string;
  date: string;
  media?: string[];
}

export default function ChangelogCard({ id, title, text, date, media = [] }: ChangelogCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id={id} 
      className="scroll-mt-24 p-6 rounded-2xl border border-[var(--sl-color-gray-5)] bg-[var(--sl-color-bg)] shadow-sm transition-all duration-700 relative"
    >
      <div className="text-[13px] font-semibold text-[var(--sl-color-gray-3)] tracking-wide uppercase mb-3">
        {date}
      </div>

      <hr className="border-t border-[var(--sl-color-gray-5)] mb-4" />
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-[var(--sl-color-white)] m-0 leading-tight">
          {title}
        </h3>
        
        <button 
          onClick={handleCopy}
          title="Copy Link to Update"
          className="shrink-0 p-2 rounded-lg border border-[var(--sl-color-gray-5)] text-[var(--sl-color-gray-3)] hover:text-[var(--sl-color-accent)] hover:border-[var(--sl-color-accent)] hover:bg-[var(--sl-color-bg-nav)] transition-all cursor-pointer bg-transparent"
        >
          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
        </button>
      </div>

      <hr className="border-t border-[var(--sl-color-gray-5)] mb-4" />
      
      <RichText text={text} />

      {media.length > 0 && <hr className="border-t border-[var(--sl-color-gray-5)] my-4" />}

      <MediaViewer media={media} />
    </div>
  );
}
