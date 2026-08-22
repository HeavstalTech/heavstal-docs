import React, { useState, useEffect } from 'react';
import { X, Download, FileText, PlayCircle, Music } from 'lucide-react';

export default function MediaViewer({ media }: { media: string[] }) {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedMedia(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (!media || media.length === 0) return null;

  const isVideo = (url: string) => url.match(/\.(mp4|webm|ogg|mov)$/i) || url.startsWith('data:video');
  const isAudio = (url: string) => url.match(/\.(mp3|wav|ogg|m4a)$/i) || url.startsWith('data:audio');
  const isImage = (url: string) => url.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i) || url.startsWith('data:image');

  const renderThumbnail = (src: string, index: number) => {
    if (isVideo(src)) {
      return (
        <div key={index} className="relative w-full aspect-video rounded overflow-hidden bg-black flex items-center justify-center border border-[var(--sl-color-gray-5)]">
          <video src={src} className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <PlayCircle size={32} className="text-white relative z-10" />
        </div>
      );
    }
    
    if (isAudio(src)) {
      return (
        <div key={index} className="w-full flex items-center justify-center bg-[var(--sl-color-bg-nav)] aspect-video rounded border border-[var(--sl-color-gray-5)]">
          <div className="flex flex-col items-center gap-2 text-[var(--sl-color-gray-3)]">
            <Music size={32} />
            <span className="text-sm font-medium">Audio</span>
          </div>
        </div>
      );
    }

    if (isImage(src)) {
      return (
        <div key={index} className="relative w-full aspect-video rounded overflow-hidden border border-[var(--sl-color-gray-5)] bg-[var(--sl-color-bg-nav)]">
          <img src={src} alt="Attachment" className="w-full h-full object-cover" />
        </div>
      );
    }

    return (
      <div key={index} className="w-full flex flex-col items-center justify-center bg-[var(--sl-color-bg-nav)] aspect-video rounded border border-[var(--sl-color-gray-5)]">
        <FileText size={32} className="text-[var(--sl-color-gray-3)] mb-2" />
        <span className="text-sm font-medium text-[var(--sl-color-gray-3)] px-4 text-center break-all line-clamp-1">
          {src.split('/').pop() || 'Attachment'}
        </span>
      </div>
    );
  };

  return (
    <div className="mt-4">
      <div className={`grid gap-3 ${media.length > 1 ? 'grid-cols-2' : 'grid-cols-1 max-w-lg'}`}>
        {media.map((src, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedMedia(src)}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            {renderThumbnail(src, idx)}
          </div>
        ))}
      </div>

      {selectedMedia && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 font-sans"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="absolute top-4 right-4 flex items-center gap-4 z-[110]">
            <a 
              href={selectedMedia} 
              download 
              target="_blank" 
              rel="noreferrer"
              title="Download"
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Download size={24} />
            </a>
            <button 
              onClick={() => setSelectedMedia(null)}
              title="Close"
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer border-none"
            >
              <X size={24} />
            </button>
          </div>

          <div 
            className="relative w-full max-w-5xl flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo(selectedMedia) ? (
              <video src={selectedMedia} controls autoPlay className="max-w-full max-h-[85vh] rounded shadow-2xl bg-black" />
            ) : isAudio(selectedMedia) ? (
              <div className="bg-[#1a1a1c] p-8 rounded-xl shadow-2xl border border-gray-800 flex flex-col items-center min-w-[300px]">
                <Music size={48} className="text-gray-400 mb-6" />
                <audio src={selectedMedia} controls autoPlay className="w-full" />
              </div>
            ) : isImage(selectedMedia) ? (
              <img src={selectedMedia} alt="Expanded Media" className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl" />
            ) : (
              <div className="bg-[#1a1a1c] p-12 rounded-xl shadow-2xl border border-gray-800 flex flex-col items-center min-w-[300px] text-center">
                <FileText size={64} className="text-gray-400 mb-4" />
                <p className="text-white font-medium mb-6">File Attachment</p>
                <a 
                  href={selectedMedia} 
                  download 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-2 bg-[var(--sl-color-accent)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity no-underline"
                >
                  Download File
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
