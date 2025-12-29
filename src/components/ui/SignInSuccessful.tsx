"use client";

import { useEffect } from "react";

interface SignInSuccessfulPopUpProps {
  onClose: () => void;
}

export default function SignInSuccessfulPopUp({ onClose }: SignInSuccessfulPopUpProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-4 right-4 z-50 w-[320px] max-w-[90vw] rounded-xl border border-green-200 bg-green-50 px-4 py-3 shadow-lg"
    >
      <div className="flex items-start gap-3">
        {/* Check Icon */}
        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <div className="flex-1">
          <p className="text-sm font-semibold text-green-900">Signed in</p>
          <p className="mt-0.5 text-xs text-green-800">
            You've successfully signed in to your account.
          </p>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="rounded-md p-1 text-green-800/70 hover:bg-green-100 hover:text-green-900"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}