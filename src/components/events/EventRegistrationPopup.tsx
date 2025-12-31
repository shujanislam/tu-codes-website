"use client";

import { useEffect } from "react";

interface EventRegistrationPopupProps {
  message: string;
  type: "success" | "info";
  onClose: () => void;
}

export default function EventRegistrationPopup({ message, type, onClose }: EventRegistrationPopupProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";
  const bgColor = isSuccess ? "bg-green-50" : "bg-blue-50";
  const borderColor = isSuccess ? "border-green-200" : "border-blue-200";
  const iconBgColor = isSuccess ? "bg-green-600" : "bg-blue-600";
  const textColor = isSuccess ? "text-green-900" : "text-blue-900";
  const textSecondaryColor = isSuccess ? "text-green-800" : "text-blue-800";
  const hoverBgColor = isSuccess ? "hover:bg-green-100" : "hover:bg-blue-100";
  const hoverTextColor = isSuccess ? "hover:text-green-900" : "hover:text-blue-900";
  const iconTextColor = isSuccess ? "text-green-800/70" : "text-blue-800/70";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed top-4 right-4 z-50 w-[320px] max-w-[90vw] rounded-xl border ${borderColor} ${bgColor} px-4 py-3 shadow-lg`}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full ${iconBgColor}`}>
          {isSuccess ? (
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
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          )}
        </div>

        <div className="flex-1">
          <p className={`text-sm font-semibold ${textColor}`}>
            {isSuccess ? "Registration Successful" : "Already Registered"}
          </p>
          <p className={`mt-0.5 text-xs ${textSecondaryColor}`}>
            {message}
          </p>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className={`rounded-md p-1 ${iconTextColor} ${hoverBgColor} ${hoverTextColor}`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
