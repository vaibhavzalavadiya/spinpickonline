"use client";

import { useEffect, useRef } from "react";
import { getAdSlot } from "@/lib/ads";

interface AdBannerProps {
  /**
   * The slot id defined in lib/ads.ts
   * e.g. "banner-320x50"
   */
  slot: string;
  /** Extra Tailwind / CSS classes for the wrapper div */
  className?: string;
}

/**
 * <AdBanner slot="banner-320x50" />
 *
 * Injects ad scripts directly into the DOM via useEffect so that
 * atOptions is always defined BEFORE invoke.js executes — fixing
 * the timing issue that causes ads not to show in production.
 *
 * Dev: shows a dashed placeholder instead (ad networks block localhost).
 */
export default function AdBanner({ slot, className = "" }: AdBannerProps) {
  const ad = getAdSlot(slot);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ad || !containerRef.current) return;

    const container = containerRef.current;

    // Avoid injecting twice (e.g. React StrictMode double-invoke)
    if (container.querySelector("script")) return;

    // Step 1: define atOptions inline (synchronous)
    const optionsScript = document.createElement("script");
    optionsScript.type = "text/javascript";
    optionsScript.text = `
      atOptions = {
        'key'    : '${ad.key}',
        'format' : '${ad.format}',
        'height' : ${ad.height},
        'width'  : ${ad.width},
        'params' : ${JSON.stringify(ad.params ?? {})}
      };
    `;
    container.appendChild(optionsScript);

    // Step 2: load invoke.js AFTER atOptions is defined
    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src = ad.src;
    invokeScript.async = true;
    container.appendChild(invokeScript);

    // Cleanup on unmount
    return () => {
      if (container.contains(optionsScript)) container.removeChild(optionsScript);
      if (container.contains(invokeScript)) container.removeChild(invokeScript);
    };
  }, [ad]);

  // Unknown slot → render nothing
  if (!ad) return null;

  const isDev = process.env.NODE_ENV === "development";

  return (
    <div
      className={`ad-banner-wrapper flex justify-center items-center ${className}`}
      style={{ minHeight: ad.height }}
      aria-label="Advertisement"
    >
      {isDev ? (
        /* ── DEV PLACEHOLDER (localhost only) ── */
        <div
          style={{ width: ad.width, height: ad.height }}
          className="flex items-center justify-center rounded border-2 border-dashed border-blue-400 bg-blue-50 text-blue-500 text-xs font-mono select-none"
        >
          📢 Ad · {ad.label} · {ad.width}×{ad.height}
        </div>
      ) : (
        /* ── PRODUCTION: script container, filled by useEffect ── */
        <div ref={containerRef} />
      )}
    </div>
  );
}
