"use client";

import { useEffect } from "react";

interface LogoutSuccessfulPopUpProps {
  onClose: () => void;
}

export default function LogoutSuccessfulPopUp({ onClose }: LogoutSuccessfulPopUpProps) {
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
      className="fixed top-4 right-4 z-60 w-[320px] max-w-[90vw] rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 shadow-lg"
    >
      <div className="flex items-start gap-3">
        {/* Logout Icon */}
        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </div>

        <div className="flex-1">
          <p className="text-sm font-semibold text-orange-900">Logged out</p>
          <p className="mt-0.5 text-xs text-orange-800">
            You've been successfully logged out.
          </p>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="rounded-md p-1 text-orange-800/70 hover:bg-orange-100 hover:text-orange-900"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}