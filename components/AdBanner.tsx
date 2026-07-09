"use client";

import Script from "next/script";
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
 * Renders an ad banner by slot id.
 * All ad configurations live in lib/ads.ts — edit that file to add/remove banners.
 * Returns null silently if the slot id is not found.
 *
 * NOTE: Ads will NOT appear on localhost — ad networks block local domains by design.
 * A dev placeholder is shown instead so you can verify layout/positioning.
 */
export default function AdBanner({ slot, className = "" }: AdBannerProps) {
  const ad = getAdSlot(slot);

  // Unknown slot → render nothing
  if (!ad) return null;

  const isDev = process.env.NODE_ENV === "development";

  const optionsScript = `
    atOptions = {
      'key'    : '${ad.key}',
      'format' : '${ad.format}',
      'height' : ${ad.height},
      'width'  : ${ad.width},
      'params' : ${JSON.stringify(ad.params ?? {})}
    };
  `;

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
        /* ── PRODUCTION: real ad scripts ── */
        <>
          <Script
            id={`ad-options-${slot}`}
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: optionsScript }}
          />
          <Script
            id={`ad-invoke-${slot}`}
            strategy="afterInteractive"
            src={ad.src}
          />
        </>
      )}
    </div>
  );
}
