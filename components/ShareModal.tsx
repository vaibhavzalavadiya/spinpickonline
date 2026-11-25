"use client";

import { useState, useEffect, useRef } from "react";
import { FiX, FiCopy, FiCheck, FiShare2, FiLink, FiCode, FiMonitor } from "react-icons/fi";
import { trackEvent } from "@/lib/analytics";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
  embedUrl?: string;
  obsUrl?: string;
  wheelName?: string;
}

export default function ShareModal({
  isOpen,
  onClose,
  shareUrl,
  embedUrl,
  obsUrl,
  wheelName,
}: ShareModalProps) {
  const [activeTab, setActiveTab] = useState<"link" | "embed" | "obs">("link");
  const [embedDark, setEmbedDark] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

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

  useEffect(() => {
    if (!isOpen) {
      setCopied(false);
      setActiveTab("link");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const resolvedEmbedUrl = embedUrl
    ? embedDark
      ? `${embedUrl}${embedUrl.includes("?") ? "&" : "?"}theme=dark`
      : embedUrl
    : shareUrl;

  const iframeSnippet = `<iframe src="${resolvedEmbedUrl}" width="100%" height="560" style="border:none;border-radius:16px;max-width:720px;" title="${wheelName || "SpinPickOnline Interactive Wheel"}" loading="lazy"></iframe>`;

  const currentPayload =
    activeTab === "link"
      ? shareUrl
      : activeTab === "embed"
        ? iframeSnippet
        : obsUrl || resolvedEmbedUrl;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(currentPayload);
      } else {
        inputRef.current?.select();
        document.execCommand("copy");
      }
      setCopied(true);
      trackEvent(activeTab === "link" ? "wheel_share_copy" : "embed_copy", {
        mode: activeTab,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
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
      trackEvent("wheel_share_copy", { mode: "native_share" });
    } catch {
      // User cancelled or not supported
    }
  };

  const handleInputClick = () => {
    inputRef.current?.select();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto overflow-hidden share-modal-enter"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 lg:px-6 lg:py-5 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <FiShare2 className="text-xl" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Share &amp; Embed Wheel</h2>
                <p className="text-xs sm:text-sm text-blue-100">
                  {wheelName ? `"${wheelName}"` : "Share link, embed on Notion/Canvas, or OBS overlay"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 end-3 min-w-[36px] min-h-[36px] inline-flex items-center justify-center p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <FiX className="text-lg" />
            </button>
          </div>

          {/* Mode Tabs */}
          {(embedUrl || obsUrl) && (
            <div className="flex border-b border-gray-200 bg-gray-50 px-2 pt-2 gap-1">
              <button
                type="button"
                onClick={() => { setActiveTab("link"); setCopied(false); }}
                className={`flex-1 py-2 px-2 rounded-t-lg text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                  activeTab === "link" ? "bg-white text-blue-700 border-t border-x border-gray-200" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FiLink className="text-xs" /> Share Link
              </button>
              {embedUrl && (
                <button
                  type="button"
                  onClick={() => { setActiveTab("embed"); setCopied(false); }}
                  className={`flex-1 py-2 px-2 rounded-t-lg text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                    activeTab === "embed" ? "bg-white text-blue-700 border-t border-x border-gray-200" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <FiCode className="text-xs" /> Embed
                </button>
              )}
              {obsUrl && (
                <button
                  type="button"
                  onClick={() => { setActiveTab("obs"); setCopied(false); }}
                  className={`flex-1 py-2 px-2 rounded-t-lg text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                    activeTab === "obs" ? "bg-white text-blue-700 border-t border-x border-gray-200" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <FiMonitor className="text-xs" /> OBS Overlay
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div className="lg:p-6 p-4 space-y-4">
            {activeTab === "embed" && (
              <label className="inline-flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={embedDark}
                  onChange={(e) => { setEmbedDark(e.target.checked); setCopied(false); }}
                  className="rounded border-gray-300 text-blue-600"
                />
                Use dark background inside iframe
              </label>
            )}

            <div>
              <label
                htmlFor="share-payload-input"
                className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2 flex items-center gap-1.5"
              >
                {activeTab === "link" && <FiLink className="text-sm" />}
                {activeTab === "embed" && <FiCode className="text-sm" />}
                {activeTab === "obs" && <FiMonitor className="text-sm" />}
                {activeTab === "link"
                  ? "Shareable Link"
                  : activeTab === "embed"
                    ? "HTML Iframe Embed Code"
                    : "OBS Browser Source URL (Transparent)"}
              </label>
              <input
                id="share-payload-input"
                ref={inputRef}
                type="text"
                readOnly
                value={currentPayload}
                onClick={handleInputClick}
                className="w-full px-3 py-2.5 text-xs sm:text-sm text-gray-800 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-blue-400 cursor-text select-all font-mono"
              />
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className={`w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                  copied
                    ? "bg-green-600 text-white shadow-lg shadow-green-200"
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
                    <span>
                      {activeTab === "link"
                        ? "Copy Share Link"
                        : activeTab === "embed"
                          ? "Copy Embed Code"
                          : "Copy OBS Overlay URL"}
                    </span>
                  </>
                )}
              </button>

              {activeTab === "link" && canNativeShare && (
                <button
                  type="button"
                  onClick={handleNativeShare}
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl font-semibold text-sm bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer"
                >
                  <FiShare2 className="text-lg" />
                  <span>Share via...</span>
                </button>
              )}
            </div>

            <p className="text-xs text-gray-600 text-center">
              {activeTab === "obs"
                ? "Add as Browser Source (500x500) in OBS Studio or Streamlabs for giveaways."
                : activeTab === "embed"
                  ? "Paste into Notion, Canvas LMS, Google Sites, or any blog."
                  : "Anyone with the link can load this wheel and spin it — no account needed."}
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
