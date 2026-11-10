"use client";

import { useEffect, useRef } from "react";

interface AdSenseDisplayProps {
  slotId?: string;
  client?: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function AdSenseDisplay({
  slotId = "6084518347",
  client = "ca-pub-9187153323911677",
  format = "auto",
  responsive = true,
  className = "",
  style = { display: "block" },
}: AdSenseDisplayProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isInitialized.current) return;

    const tryPushAd = () => {
      const el = adRef.current;
      if (!el || isInitialized.current) return false;

      // Guard: element must be visible AND have a real width
      // This prevents the "No slot size for availableWidth=0" error
      if (el.offsetParent === null || el.clientWidth === 0) {
        return false;
      }

      // Already processed by AdSense
      if (el.getAttribute("data-adsbygoogle-status") === "done") {
        isInitialized.current = true;
        return true;
      }

      try {
        isInitialized.current = true;
        const w = window as unknown as { adsbygoogle?: unknown[] };
        (w.adsbygoogle = w.adsbygoogle || []).push({});
      } catch {
        // Silently ignore — ad blockers or missing script
      }
      return true;
    };

    // Wait for layout to stabilize before first attempt
    const rafId = requestAnimationFrame(() => {
      if (tryPushAd()) return;

      // If element is hidden now (e.g. mobile), watch for resize to desktop
      const onResize = () => {
        if (tryPushAd()) {
          window.removeEventListener("resize", onResize);
        }
      };
      window.addEventListener("resize", onResize);

      // Cleanup listener if component unmounts
      cleanupRef.current = () => window.removeEventListener("resize", onResize);
    });

    const cleanupRef = { current: () => {} };

    return () => {
      cancelAnimationFrame(rafId);
      cleanupRef.current();
    };
  }, []);

  return (
    <div className={`adsense-wrapper overflow-hidden text-center ${className}`}>
      <span className="block text-[10px] tracking-wider uppercase text-gray-400 mb-1">
        Advertisement
      </span>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client={client}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
