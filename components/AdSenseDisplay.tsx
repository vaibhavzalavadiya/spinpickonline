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

    const tryPushAd = () => {
      const el = adRef.current;
      if (!el || isInitialized.current) return false;

      // Element must not be hidden via display: none (offsetParent is null when hidden via display:none)
      if (el.offsetParent === null) {
        return false;
      }

      // Check if AdSense has already processed this ins element
      if (el.getAttribute("data-adsbygoogle-status") === "done") {
        isInitialized.current = true;
        return true;
      }

      try {
        isInitialized.current = true;
        const w = window as unknown as { adsbygoogle?: unknown[] };
        (w.adsbygoogle = w.adsbygoogle || []).push({});
        return true;
      } catch (err) {
        console.warn("AdSense push:", err);
      }
      return false;
    };

    // Try on next frame
    const rafId = requestAnimationFrame(() => {
      if (tryPushAd()) return;

      // Fallback timer in case layout takes a moment to compute
      const timer = setTimeout(() => {
        tryPushAd();
      }, 300);

      const onResize = () => {
        if (tryPushAd()) {
          window.removeEventListener("resize", onResize);
        }
      };
      window.addEventListener("resize", onResize);

      cleanupRef.current = () => {
        clearTimeout(timer);
        window.removeEventListener("resize", onResize);
      };
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
        {...(responsive
          ? {
              "data-ad-format": format,
              "data-full-width-responsive": "true",
            }
          : {})}
      />
    </div>
  );
}
