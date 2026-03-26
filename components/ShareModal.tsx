"use client";

import { useState, useEffect, useRef } from "react";
import { FiX, FiCopy, FiCheck, FiShare2, FiLink } from "react-icons/fi";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
  wheelName?: string;
}

export default function ShareModal({ isOpen, onClose, shareUrl, wheelName }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check native share support
  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Reset copied state when modal closes
  useEffect(() => {
    if (!isOpen) setCopied(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        // Fallback
        inputRef.current?.select();
        document.execCommand("copy");
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Try selecting the input as last resort
      inputRef.current?.select();
    }
  };

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: wheelName ? `Spin: ${wheelName}` : "Check out my spin wheel!",
        text: "Spin this wheel and try your luck!",
        url: shareUrl,
      });
    } catch {
      // User cancelled or not supported — ignore
    }
  };

  const handleInputClick = () => {
    inputRef.current?.select();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto overflow-hidden share-modal-enter"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 lg:px-6 lg:py-5 p-3 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <FiShare2 className="text-xl" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Share Your Wheel</h2>
                <p className="text-sm text-blue-100">
                  {wheelName ? `"${wheelName}"` : "Copy the link and share with anyone"}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-2 right-3 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <FiX className="text-lg" />
            </button>
          </div>

          {/* Body */}
          <div className="lg:p-6 p-4 space-y-4">
            {/* URL Preview */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FiLink className="text-sm" />
                Shareable Link
              </label>
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  readOnly
                  value={shareUrl}
                  onClick={handleInputClick}
                  className="flex-1 px-3 py-2.5 text-sm text-gray-700 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-300 cursor-text select-all font-mono truncate"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              {/* Copy Link */}
              <button
                onClick={handleCopy}
                className={`w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${copied
                  ? "bg-green-500 text-white shadow-lg shadow-green-200"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                  } transform hover:scale-[1.02] active:scale-[0.98]`}
              >
                {copied ? (
                  <>
                    <FiCheck className="text-lg" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="text-lg" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              {/* Native Share (mobile / supported browsers) */}
              {canNativeShare && (
                <button
                  onClick={handleNativeShare}
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl font-semibold text-sm bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FiShare2 className="text-lg" />
                  <span>Share via...</span>
                </button>
              )}
            </div>

            {/* Tip */}
            <p className="text-xs text-gray-400 text-center">
              Anyone with the link can load this wheel and spin it — no account needed.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .share-modal-enter {
          animation: modalSlideIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(16px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
}
