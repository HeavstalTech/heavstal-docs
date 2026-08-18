// src/components/MarkdownActions.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Copy, ExternalLink, ChevronDown, FileText } from 'lucide-react';
import toast from 'react-hot-toast';

interface Props {
  rawMarkdown: string;
  mdUrl: string;
}

export default function MarkdownActions({ rawMarkdown, mdUrl }: Props) {
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
      style: {
        borderRadius: '9999px',
        background: '#1e3a8a',
        color: '#ffffff',
      }
    });
    setIsOpen(false);
  };

  const PROMPT = "Load the contents of {url} into this chat's context so we can discuss it.";
  const promptText = encodeURIComponent(PROMPT.replace('{url}', mdUrl));
  const links = {
    chatgpt: `https://chatgpt.com/?q=${promptText}`,
    claude: `https://claude.ai/new?q=${promptText}`,
    gemini: `https://gemini.google.com/app?q=${promptText}`,
  };

  return (
    <div className="relative inline-flex items-center z-50 font-sans" ref={dropdownRef}>
      <div className="flex shadow-sm rounded-md ring-1 ring-inset ring-gray-300 dark:ring-gray-700">
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-x-2 rounded-l-md bg-white dark:bg-[#151b23] px-3 py-1.5 text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <Copy size={15} />
          Copy Markdown
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative -ml-px inline-flex items-center rounded-r-md bg-white dark:bg-[#151b23] px-2 py-1.5 text-gray-900 dark:text-gray-200 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <ChevronDown size={16} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-[#151b23] shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-700 focus:outline-none overflow-hidden">
          <div className="py-1">
            <a href={links.claude} target="_blank" rel="noreferrer" className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <img src="/claude.svg" alt="Claude" className="mr-3 h-4 w-4" />
              Open in Claude
              <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href={links.chatgpt} target="_blank" rel="noreferrer" className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <img src="/chatgpt.svg" alt="ChatGPT" className="mr-3 h-4 w-4" />
              Open in ChatGPT
              <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href={links.gemini} target="_blank" rel="noreferrer" className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <img src="/gemini.svg" alt="Gemini" className="mr-3 h-4 w-4" />
              Open in Gemini
              <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          
          <div className="py-1 border-t border-gray-200 dark:border-gray-700">
            <button onClick={handleCopy} className="w-full group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left">
              <Copy size={16} className="mr-3 text-gray-400 dark:text-gray-500" />
              Copy Markdown
            </button>
            <a href={mdUrl} target="_blank" rel="noreferrer" className="group flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <FileText size={16} className="mr-3 text-gray-400 dark:text-gray-500" />
              View as Markdown
              <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
