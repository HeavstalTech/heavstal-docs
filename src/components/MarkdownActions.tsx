// src/components/MarkdownActions.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Copy, ExternalLink, ChevronDown, FileText } from 'lucide-react';
import toast from 'react-hot-toast';

interface Props {
  rawMarkdown: string;
  mdUrl: string;
  txtUrl: string;
}

export default function MarkdownActions({ rawMarkdown, mdUrl, txtUrl }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(rawMarkdown);
    toast.success('Markdown copied to clipboard!', {
      style: { borderRadius: '9999px', background: '#1e3a8a', color: '#ffffff' }
    });
    setIsOpen(false);
  };

  const PROMPT = `Use your web browsing tool to read this file and load its contents into our context so we can discuss it: ${txtUrl}`;
  const promptText = encodeURIComponent(PROMPT);
  const links = {
    chatgpt: `https://chatgpt.com/?q=${promptText}`,
    claude: `https://claude.ai/new?q=${promptText}`,
  };

  return (
    <div className="relative inline-flex items-center z-50 font-sans" ref={dropdownRef}>
      <div className="flex shadow-sm rounded-md ring-1 ring-inset ring-gray-300 dark:ring-gray-700">
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-x-2 rounded-l-md bg-white dark:bg-[#1e1e20] px-3 py-1.5 text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#2a2a2d] transition-colors"
        >
          <Copy size={15} />
          Copy Markdown
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative -ml-px inline-flex items-center rounded-r-md bg-white dark:bg-[#1e1e20] px-2 py-1.5 text-gray-900 dark:text-gray-200 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-[#2a2a2d] transition-colors border-l border-gray-300 dark:border-gray-700"
        >
          <ChevronDown size={16} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-[#1e1e20] shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-700 focus:outline-none overflow-hidden">
          <div className="py-1">
            <a href={links.claude} target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2a2d] transition-colors">
              <img src="/claude.svg" alt="Claude" className="h-4 w-4 shrink-0" />
              <span>Open in Claude</span>
              <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </a>
            <a href={links.chatgpt} target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2a2d] transition-colors">
              <img src="/chatgpt.svg" alt="ChatGPT" className="h-4 w-4 shrink-0" />
              <span>Open in ChatGPT</span>
              <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </a>
          </div>
          
          <div className="py-1 border-t border-gray-200 dark:border-gray-700">
            <button onClick={handleCopy} className="w-full group flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2a2d] transition-colors text-left">
              <Copy size={16} className="text-gray-400 dark:text-gray-500 shrink-0" />
              <span>Copy Markdown</span>
            </button>
            <a href={mdUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2a2d] transition-colors">
              <FileText size={16} className="text-gray-400 dark:text-gray-500 shrink-0" />
              <span>View as Markdown</span>
              <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
