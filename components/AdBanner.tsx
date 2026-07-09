"use client";

import { useState, useEffect, useRef } from "react";
import { getAdSlot } from "@/lib/ads";

interface AdBannerProps {
  slot: string;
  className?: string;
}

/**
 * <AdBanner slot="banner-320x50" />
 *
 * Lazy-loads the ad iframe only when it scrolls into view (IntersectionObserver).
 * This keeps the ad scripts from competing with LCP-critical resources on page load.
 *
 * - A blank placeholder div reserves the exact ad height until visible → CLS = 0
 * - rootMargin: "150px" pre-loads the ad 150px before it enters the viewport
 *   so the user rarely sees a loading gap.
 *
 * Dev: shows a dashed placeholder (ad networks block localhost).
 */
export default function AdBanner({ slot, className = "" }: AdBannerProps) {
  const ad = getAdSlot(slot);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ad || !wrapperRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // only need to trigger once
        }
      },
      {
        rootMargin: "150px", // start loading 150px before the ad enters view
        threshold: 0.01,
      }
    );

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [ad]);

  if (!ad) return null;

  const isDev = process.env.NODE_ENV === "development";

  const iframeDoc = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { overflow: hidden; background: transparent; }
</style>
</head>
<body>
<script type="text/javascript">
  atOptions = {
    'key'    : '${ad.key}',
    'format' : '${ad.format}',
    'height' : ${ad.height},
    'width'  : ${ad.width},
    'params' : ${JSON.stringify(ad.params ?? {})}
  };
</script>
<script type="text/javascript" src="${ad.src}"></script>
</body>
</html>`;

  return (
    <div
      ref={wrapperRef}
      className={`ad-banner-wrapper flex justify-center items-center ${className}`}
      style={{ minHeight: ad.height }}
      aria-label="Advertisement"
    >
      {isDev ? (
        /* ── DEV PLACEHOLDER ── */
        <div
          style={{ width: ad.width, height: ad.height }}
          className="flex items-center justify-center rounded border-2 border-dashed border-blue-400 bg-blue-50 text-blue-500 text-xs font-mono select-none"
        >
          📢 Ad · {ad.label} · {ad.width}×{ad.height}
        </div>
      ) : isVisible ? (
        /* ── PRODUCTION: iframe loads only when scrolled into view ── */
        <iframe
          srcDoc={iframeDoc}
          width={ad.width}
          height={ad.height}
          scrolling="no"
          frameBorder="0"
          title="Advertisement"
          style={{ border: "none", overflow: "hidden", display: "block" }}
        />
      ) : (
        /* ── PLACEHOLDER: reserves space, zero layout shift ── */
        <div style={{ width: ad.width, height: ad.height }} />
      )}
    </div>
  );
}
