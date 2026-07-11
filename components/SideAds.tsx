"use client";

import { useState, useEffect } from "react";
import { getAdSlot } from "@/lib/ads";

interface SideAdProps {
  slot: string;
  side: "left" | "right";
}

/**
 * A single fixed side-panel ad using srcdoc iframe.
 *
 * Fixed-position elements are always "in viewport" so IntersectionObserver
 * won't help here. Instead we use requestIdleCallback (fallback: setTimeout 1.5s)
 * which fires AFTER the browser has finished painting the critical page content
 * (wheel, title, fonts) — protecting LCP without delaying the ad much.
 */
function SideAd({ slot, side }: SideAdProps) {
  const ad = getAdSlot(slot);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!ad) return;

    // requestIdleCallback fires when browser is idle after LCP paint.
    // Fallback setTimeout 1500ms for Safari (which doesn't support rIC).
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        const id = (window as Window & typeof globalThis).requestIdleCallback(
          () => setIsLoaded(true),
          { timeout: 2000 } // force-fire after 2s even if browser stays busy
        );
        return () =>
          (window as Window & typeof globalThis).cancelIdleCallback(id);
      } else {
        const timer = setTimeout(() => setIsLoaded(true), 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [ad]);

  if (!ad) return null;

  const isDev = process.env.NODE_ENV === "development";

  const iframeDoc = `<!DOCTYPE html>
<html>
<head>
<style>* { margin:0; padding:0; box-sizing:border-box; } body { overflow:hidden; background:transparent; }</style>
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
      style={{
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        [side]: 0,
        width: ad.width,
        height: ad.height,
        zIndex: 40,
      }}
    >
      {isDev ? (
        /* ── DEV PLACEHOLDER ── */
        <div
          style={{ width: ad.width, height: ad.height }}
          className="flex flex-col items-center justify-center rounded border-2 border-dashed border-purple-400 bg-purple-50 text-purple-500 text-xs font-mono select-none text-center p-2"
        >
          📢 Side Ad<br />{side.toUpperCase()}<br />{ad.width}×{ad.height}
        </div>
      ) : isLoaded ? (
        /* ── PRODUCTION: iframe loads after browser is idle ── */
        <iframe
          srcDoc={iframeDoc}
          width={ad.width}
          height={ad.height}
          scrolling="no"
          frameBorder="0"
          title={`Advertisement - ${side}`}
          style={{ border: "none", overflow: "hidden", display: "block" }}
        />
      ) : null /* nothing rendered until browser is idle */}
    </div>
  );
}

/**
 * <SideAds slot="skyscraper-160x600" />
 *
 * Renders two fixed side-panel ads (left + right) outside the main container.
 * Only visible on screens ≥ 1550px wide via CSS media query.
 * Place once in layout.tsx to apply globally.
 */
export default function SideAds({ slot }: { slot: string }) {
  return (
    <>
      {/* Outer wrapper hides both panels below 1550px */}
      <style>{`
        .side-ads-wrapper { display: none; }
        @media (min-width: 1550px) { .side-ads-wrapper { display: block; } }
      `}</style>
      <div className="side-ads-wrapper">
        <SideAd slot={slot} side="left" />
        <SideAd slot={slot} side="right" />
      </div>
    </>
  );
}
