// src/components/FeedbackWidget.tsx
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function FeedbackWidget() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleFeedback = (_isHelpful: boolean) => {
    if (submitted) return;
    setSubmitted(true);
    
    toast.success('Thanks for your feedback!', {
      duration: 4000,
      position: 'top-center',
      style: {
        borderRadius: '9999px',
        background: '#1e3a8a',
        color: '#ffffff',
        padding: '12px 24px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: '1px solid #3b82f6',
      },
      iconTheme: {
        primary: '#ffffff',
        secondary: '#1e3a8a',
      },
    });
  };

  return (
    <div className="ht-feedback-container">
      <style>{`
        .ht-feedback-container {
          position: relative;
          margin-top: 3rem;
          margin-bottom: 3rem;
          width: 100%;
          font-family: inherit;
        }
        .ht-feedback-toast-wrapper {
          position: absolute;
          top: -20px;
          left: 0;
          right: 0;
          z-index: 50;
          pointer-events: none;
        }
        .ht-feedback-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.5rem 2rem;
          background: var(--sl-color-bg-nav);
          border: 1px solid var(--sl-color-hairline);
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        @media (min-width: 640px) {
          .ht-feedback-card {
            flex-direction: row;
            align-items: center;
          }
        }
        .ht-feedback-title {
          margin: 0 !important;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--sl-color-white);
        }
        .ht-feedback-desc {
          margin: 0.25rem 0 0 0 !important;
          font-size: 0.875rem;
          color: var(--sl-color-gray-3);
        }
        .ht-feedback-buttons {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .ht-feedback-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.5rem;
          background: var(--sl-color-bg);
          border: 1px solid var(--sl-color-gray-5);
          border-radius: 9999px;
          color: var(--sl-color-text);
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .ht-feedback-btn:hover {
          border-color: var(--sl-color-accent);
          color: var(--sl-color-accent);
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .ht-feedback-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
        .ht-feedback-success {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.5rem;
          color: var(--sl-color-accent);
          font-weight: 500;
        }
      `}</style>

      <div className="ht-feedback-toast-wrapper">
        <Toaster 
          position="top-center" 
          containerStyle={{ position: 'absolute', inset: 0 }} 
        />
      </div>

      <div className="ht-feedback-card">
        <div>
          <h3 className="ht-feedback-title">Was this page helpful?</h3>
          <p className="ht-feedback-desc">Your feedback helps us improve our documentation.</p>
        </div>
        
        <div className="ht-feedback-buttons">
          {!submitted ? (
            <>
              <button 
                onClick={() => handleFeedback(true)}
                disabled={submitted}
                className="ht-feedback-btn"
              >
                <ThumbsUp size={18} />
                <span>Yes</span>
              </button>
              <button 
                onClick={() => handleFeedback(false)}
                disabled={submitted}
                className="ht-feedback-btn"
              >
                <ThumbsDown size={18} />
                <span>No</span>
              </button>
            </>
          ) : (
            <div className="ht-feedback-success">
              <CheckCircle2 size={20} />
              <span>Thank you!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
