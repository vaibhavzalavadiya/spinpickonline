"use client";

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
 * Uses an srcdoc iframe so the ad script runs in its own fresh document.
 * This ensures document.write() (used by most ad networks) works correctly.
 *
 * Previous approach (dynamic <script> injection) failed because browsers
 * block document.write() in async-loaded scripts.
 *
 * Dev: shows a dashed placeholder (ad networks block localhost).
 */
export default function AdBanner({ slot, className = "" }: AdBannerProps) {
  const ad = getAdSlot(slot);

  if (!ad) return null;

  const isDev = process.env.NODE_ENV === "development";

  // The full HTML document the iframe will render — mirrors the ad network's
  // exact <script> + <script src> snippet as if pasted in a plain HTML file.
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
        /* ── PRODUCTION: srcdoc iframe gives a fresh document context ── */
        <iframe
          srcDoc={iframeDoc}
          width={ad.width}
          height={ad.height}
          scrolling="no"
          frameBorder="0"
          title="Advertisement"
          style={{
            border: "none",
            overflow: "hidden",
            display: "block",
          }}
        />
      )}
    </div>
  );
}
