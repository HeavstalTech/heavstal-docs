//src/components/FeedbackWidget.tsx
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function FeedbackWidget() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleFeedback = (isHelpful: boolean) => {
    if (submitted) return;
    // For future API request based on user feedback
    setSubmitted(true);
    
    toast.success('Thanks for your feedback!', {
      style: {
        borderRadius: '8px',
        background: '#1e3a8a',
        color: '#fff',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#1e3a8a',
      },
    });
  };

  return (
    <div className="mt-16 mb-8 border-t border-gray-200 dark:border-gray-800 pt-8">
      <Toaster position="bottom-right" />
      
      <div className="flex flex-col sm:flex-row items-center justify-between bg-blue-50 dark:bg-slate-900 rounded-lg p-6 border border-blue-100 dark:border-slate-800">
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white m-0">Was this page helpful?</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Let us know how we can improve our documentation.</p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => handleFeedback(true)}
            disabled={submitted}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ThumbsUp size={18} />
            <span>Yes</span>
          </button>
          <button 
            onClick={() => handleFeedback(false)}
            disabled={submitted}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ThumbsDown size={18} />
            <span>No</span>
          </button>
        </div>
      </div>
    </div>
  );
}
