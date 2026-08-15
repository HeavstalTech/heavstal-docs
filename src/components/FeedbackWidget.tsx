// Docs/src/components/FeedbackWidget.tsx
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function FeedbackWidget() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleFeedback = (isHelpful: boolean) => {
    if (submitted) return;
    setSubmitted(true);
    
    toast.success('Thanks for your feedback!', {
      duration: 4000,
      style: {
        borderRadius: '9999px',
        background: '#1e3a8a', 
        color: '#fff',
        padding: '12px 24px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#1e3a8a',
      },
    });
  };

  return (
    <div className="relative mt-8 w-full">
      <div className="absolute -top-16 left-0 right-0 z-[100] flex justify-center pointer-events-none">
        <Toaster 
          position="top-center" 
          containerStyle={{ position: 'relative' }} 
        />
      </div>

      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-slate-900 shadow-sm transition-all hover:shadow-md">
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent pointer-events-none" />
        
        <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white m-0">Was this page helpful?</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Your feedback helps us improve our documentation.</p>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            {!submitted ? (
              <>
                <button 
                  onClick={() => handleFeedback(true)}
                  className="group flex items-center gap-2.5 px-6 py-2.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-full hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 text-gray-600 dark:text-gray-300 font-medium transition-all shadow-sm hover:shadow cursor-pointer"
                >
                  <ThumbsUp size={18} className="transition-transform group-hover:-translate-y-1" />
                  <span>Yes</span>
                </button>
                <button 
                  onClick={() => handleFeedback(false)}
                  className="group flex items-center gap-2.5 px-6 py-2.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-full hover:border-red-500 hover:text-red-600 dark:hover:border-red-400 dark:hover:text-red-400 text-gray-600 dark:text-gray-300 font-medium transition-all shadow-sm hover:shadow cursor-pointer"
                >
                  <ThumbsDown size={18} className="transition-transform group-hover:translate-y-1" />
                  <span>No</span>
                </button>
              </>
            ) : (
              <div className="flex items-center gap-2 px-6 py-2.5 text-blue-600 dark:text-blue-400 font-medium">
                <CheckCircle2 size={20} />
                <span>Thank you!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
