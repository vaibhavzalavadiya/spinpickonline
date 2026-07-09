"use client";

import { useEffect, useRef } from "react";
import { getAdSlot } from "@/lib/ads";

interface SideAdProps {
  slot: string;
  side: "left" | "right";
}

/**
 * A single fixed side-panel ad panel.
 * Injects atOptions then invoke.js via useEffect to guarantee load order.
 */
function SideAd({ slot, side }: SideAdProps) {
  const ad = getAdSlot(slot);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ad || !containerRef.current) return;
    const container = containerRef.current;
    if (container.querySelector("script")) return;

    // 1. Set atOptions inline (sync)
    const optScript = document.createElement("script");
    optScript.type = "text/javascript";
    optScript.text = `
      atOptions = {
        'key'    : '${ad.key}',
        'format' : '${ad.format}',
        'height' : ${ad.height},
        'width'  : ${ad.width},
        'params' : ${JSON.stringify(ad.params ?? {})}
      };
    `;
    container.appendChild(optScript);

    // 2. Load invoke.js after atOptions exists
    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src = ad.src;
    invokeScript.async = true;
    container.appendChild(invokeScript);

    return () => {
      if (container.contains(optScript)) container.removeChild(optScript);
      if (container.contains(invokeScript)) container.removeChild(invokeScript);
    };
  }, [ad]);

  if (!ad) return null;

  const isDev = process.env.NODE_ENV === "development";

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
        <div
          style={{ width: ad.width, height: ad.height }}
          className="flex flex-col items-center justify-center rounded border-2 border-dashed border-purple-400 bg-purple-50 text-purple-500 text-xs font-mono select-none text-center p-2"
        >
          📢 Side Ad<br />{side.toUpperCase()}<br />{ad.width}×{ad.height}
        </div>
      ) : (
        <div ref={containerRef} />
      )}
    </div>
  );
}

/**
 * <SideAds slot="skyscraper-160x600" />
 *
 * Renders two fixed side-panel ads (left + right) outside the main container.
 * Only visible on screens ≥ 1400px wide via CSS media query wrapper.
 * Place once in layout.tsx to apply globally.
 */
export default function SideAds({ slot }: { slot: string }) {
  return (
    <>
      {/* Outer wrapper hides both panels below 1400px */}
      <style>{`
        .side-ads-wrapper { display: none; }
        @media (min-width: 1400px) { .side-ads-wrapper { display: block; } }
      `}</style>
      <div className="side-ads-wrapper">
        <SideAd slot={slot} side="left" />
        <SideAd slot={slot} side="right" />
      </div>
    </>
  );
}
