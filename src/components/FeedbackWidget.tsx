// src/components/FeedbackWidget.tsx
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';
import toast, { Toaster } from 'react-hot-toast';

const questions = {
  yes: [
    ["Accurate", "accurate"],
    ["Easy to understand", "easy-to-understand"],
    ["Solved my problem", "solved-my-problem"],
    ["Helped me decide to use the product", "helped-me-decide-to-use-the-product"],
    ["Other", "other-yes"],
  ],
  no: [
    ["Hard to understand", "hard-to-understand"],
    ["Incorrect information", "incorrect-information"],
    ["Missing the information", "missing-the-information"],
    ["Other", "other-no"],
  ],
} as const;

export default function FeedbackWidget() {
  const [title, setTitle] = useState("Was this helpful?");
  const [option, setOption] = useState<"yes" | "no" | undefined>();
  const [submitted, setSubmitted] = useState(false);
  const [selectedReason, setSelectedReason] = useState(false);
  const [passedTurnstile, setPassedTurnstile] = useState(false);

  const handleMockSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set("option", option!);
    console.log("Feedback Payload:", Object.fromEntries(formData.entries())); // we'll use this until I make a documentation feedback API later on...

    setTimeout(() => {
      setTitle("Thank you for helping improve Heavstal's documentation!");
      setSubmitted(true);
      toast.success('Thanks for your feedback!', {
        duration: 4000,
        position: 'top-center',
        style: {
          borderRadius: '9999px',
          background: 'var(--sl-color-bg-nav)',
          color: 'var(--sl-color-text)',
          border: '1px solid var(--sl-color-accent)',
        },
      });
    }, 400);
  };

  return (
    <div className="mt-12 mb-12 w-full font-sans relative">
      <div className="absolute -top-5 left-0 right-0 z-50 pointer-events-none">
        <Toaster containerStyle={{ position: 'absolute', inset: 0 }} />
      </div>

      <div className="p-6 bg-[var(--sl-color-bg-nav)] border border-[var(--sl-color-hairline)] rounded-xl shadow-sm">
        {!submitted && (
          <p className="m-0 text-[12px] font-semibold tracking-widest uppercase text-[var(--sl-color-gray-3)]">
            {title}
          </p>
        )}

        {!option && !submitted && (
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => { setTitle("What did you like?"); setOption("yes"); }}
              className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-lg border border-[var(--sl-color-gray-5)] bg-[var(--sl-color-bg)] px-4 text-sm font-medium text-[var(--sl-color-text)] transition-all duration-200 hover:border-[var(--sl-color-accent)] hover:text-[var(--sl-color-accent)] hover:-translate-y-0.5 shadow-sm"
            >
              <ThumbsUp size={16} />
              <span>Yes</span>
            </button>
            <button
              onClick={() => { setTitle("What went wrong?"); setOption("no"); }}
              className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-lg border border-[var(--sl-color-gray-5)] bg-[var(--sl-color-bg)] px-4 text-sm font-medium text-[var(--sl-color-text)] transition-all duration-200 hover:border-[var(--sl-color-accent)] hover:text-[var(--sl-color-accent)] hover:-translate-y-0.5 shadow-sm"
            >
              <ThumbsDown size={16} />
              <span>No</span>
            </button>
          </div>
        )}

        {option && !submitted && (
          <form onSubmit={handleMockSubmit} className="mt-4 flex flex-col gap-3">
            <fieldset className="m-0 border-0 p-0">
              <legend className="sr-only">
                {option === "yes" ? "What did you like?" : "What went wrong?"}
              </legend>
              <div className="flex flex-col gap-2">
                {questions[option].map(([label, value]) => (
                  <label
                    key={value}
                    className="relative flex cursor-pointer items-center gap-3 rounded-lg border border-[var(--sl-color-gray-5)] bg-[var(--sl-color-bg)] px-3 py-2.5 text-sm transition-colors duration-150 select-none hover:bg-[var(--sl-color-gray-6)] has-[:checked]:border-[var(--sl-color-accent)] has-[:focus-visible]:border-[var(--sl-color-accent)] text-[var(--sl-color-text)]"
                  >
                    <input
                      type="radio"
                      name="reason"
                      value={value}
                      onChange={() => setSelectedReason(true)}
                      className="peer absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
                    />
                    <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[var(--sl-color-gray-3)] peer-checked:border-[var(--sl-color-accent)] transition-all duration-150">
                      <span className="h-2 w-2 scale-0 rounded-full bg-[var(--sl-color-accent)] transition-transform duration-150 [label:has(:checked)_&]:scale-100" />
                    </span>
                    <span className="leading-tight">{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <textarea
              name="info"
              rows={2}
              placeholder="Tell us more about your experience (optional)."
              className="mt-2 w-full resize-none rounded-lg border border-[var(--sl-color-gray-5)] bg-[var(--sl-color-bg)] px-3 py-2 text-sm text-[var(--sl-color-text)] outline-none transition-colors duration-150 placeholder:text-[var(--sl-color-gray-4)] focus:border-[var(--sl-color-accent)]"
            />
            
            <div className="mt-1">
              <Turnstile
                siteKey="1x00000000000000000000AA"
                options={{ size: "compact", theme: "auto" }}
                onSuccess={() => setPassedTurnstile(true)}
              />
            </div>

            <div className="flex gap-2 mt-2">
              <button
                type="submit"
                disabled={!selectedReason || !passedTurnstile}
                className="inline-flex h-9 cursor-pointer items-center justify-center rounded-lg border-0 bg-[var(--sl-color-accent)] px-5 text-sm font-medium text-white transition-colors duration-150 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Submit Feedback
              </button>
              <button
                type="button"
                onClick={() => setOption(undefined)}
                className="inline-flex h-9 cursor-pointer items-center justify-center rounded-lg border border-[var(--sl-color-gray-5)] bg-transparent px-4 text-sm font-medium text-[var(--sl-color-text)] transition-colors duration-150 hover:bg-[var(--sl-color-gray-6)]"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {submitted && (
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400">
            <CheckCircle2 size={18} className="shrink-0" />
            <span className="font-medium">Thank you! Your feedback will help us improve our documentation.</span>
          </div>
        )}
      </div>
    </div>
  );
                    }
