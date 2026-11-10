"use client";

import { useEffect, useRef, useState } from "react";

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
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const el = adRef.current;
    if (!el) return;

    // Observe when Google inserts the ad iframe into <ins>
    const observer = new MutationObserver(() => {
      if (
        el.getAttribute("data-ad-status") === "filled" ||
        el.querySelector("iframe") !== null
      ) {
        setAdLoaded(true);
      }
    });

    observer.observe(el, {
      attributes: true,
      attributeFilter: ["data-ad-status", "data-adsbygoogle-status"],
      childList: true,
    });

    const tryPushAd = () => {
      const currentEl = adRef.current;
      if (!currentEl || isInitialized.current) return false;

      if (currentEl.offsetParent === null) {
        return false;
      }

      if (currentEl.getAttribute("data-adsbygoogle-status") === "done") {
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

    const rafId = requestAnimationFrame(() => {
      if (tryPushAd()) return;

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
      observer.disconnect();
      cancelAnimationFrame(rafId);
      cleanupRef.current();
    };
  }, []);

  return (
    <div className={`adsense-wrapper overflow-hidden text-center ${className}`}>
      {/* Show "ADVERTISEMENT" only while the ad is loading; hide once live ad renders */}
      {!adLoaded && (
        <span className="block text-[10px] tracking-wider uppercase text-gray-400 mb-1">
          Advertisement
        </span>
      )}
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
