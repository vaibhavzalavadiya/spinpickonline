"use client";

import { useEffect, useRef, useState } from "react";

interface AdSenseDisplayProps {
  slotId?: string;
  client?: string;
  format?: string;
  responsive?: boolean;
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function AdSenseDisplay({
  slotId = "6084518347",
  client = "ca-pub-9187153323911677",
  format = "auto",
  responsive = true,
  fullWidthResponsive = true,
  className = "",
  style = { display: "block" },
}: AdSenseDisplayProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const isInitialized = useRef(false);
  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isLocal =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (isLocal) {
      setIsLocalhost(true);
      // On localhost, Google AdSense never serves ads and throws "availableWidth=0".
      // Do not push to adsbygoogle on localhost.
      return;
    }

    const tryPushAd = () => {
      const currentEl = adRef.current;
      if (!currentEl || isInitialized.current) return false;

      // Element must be visible and have actual width
      if (currentEl.offsetParent === null) {
        return false;
      }

      // Check parent and element width
      const computedWidth = currentEl.parentElement?.offsetWidth || currentEl.offsetWidth;
      if (computedWidth === 0) {
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
      }, 500);

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
    <div className={`adsense-wrapper w-full text-center ${className}`}>
      {/* Dev placeholder for localhost */}
      {isLocalhost && (
        <div className="py-2.5 px-3 border border-dashed border-gray-300 rounded-lg bg-gray-50 text-gray-500 text-xs my-2">
          <span className="font-semibold block uppercase tracking-wider text-[10px] text-gray-600">
            Google Ad Placeholder (Localhost)
          </span>
          <span className="text-[10px] text-gray-400">
            Slot: {slotId} • Real ads render on live domain
          </span>
        </div>
      )}

      {/* Only render the actual <ins> on production / non-localhost */}
      {!isLocalhost && (
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block", width: "100%", ...style }}
          data-ad-client={client}
          data-ad-slot={slotId}
          {...(responsive
            ? {
                "data-ad-format": format,
                "data-full-width-responsive": fullWidthResponsive ? "true" : "false",
              }
            : {})}
        />
      )}
    </div>
  );
}
