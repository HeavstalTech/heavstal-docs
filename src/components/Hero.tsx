// src/components/Hero.tsx
import React from 'react';
import { BookOpen } from 'lucide-react';

interface Props {
  logoSrc: string;
}

export default function Hero({ logoSrc }: Props) {
  return (
    <div className="flex flex-col items-center justify-center text-center font-sans mt-4 mb-12">
      
      <img 
        src={logoSrc} 
        alt="Heavstal Docs" 
        className="w-20 h-20 mb-3 drop-shadow-md" 
      />
      
      <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white m-0 leading-tight">
        Heavstal Tech Documentation
      </h1>
      
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-md mt-3 mb-6 font-medium leading-snug">
        Building Tomorrow's Web, Today - Explore the Heavstal Tech ecosystem.
      </p>
    
      <a 
        href="/apis/introduction/" 
        className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-[#1a73e8] hover:bg-[#1557b0] !text-white rounded-full font-bold text-sm shadow-sm transition-all hover:-translate-y-0.5 no-underline"
      >
        <span>Get Started</span>
        <span className="text-lg leading-none">&rarr;</span>
      </a>

      <div className="flex items-center gap-3 mt-16">
        <h2 className="!m-0 text-3xl font-bold text-gray-900 dark:text-white leading-none">
          Heavstal Docs
        </h2>
        <div className="flex items-center justify-center p-1.5 rounded-lg bg-sky-500/15 text-sky-600 dark:bg-sky-400/20 dark:text-sky-400">
          <BookOpen className="w-[1em] h-[1em] text-3xl" strokeWidth={2.5} />
        </div>
      </div>
      
    </div>
  );
}
