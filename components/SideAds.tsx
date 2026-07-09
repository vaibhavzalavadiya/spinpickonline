"use client";

import { getAdSlot } from "@/lib/ads";

interface SideAdProps {
  slot: string;
  side: "left" | "right";
}

/**
 * A single fixed side-panel ad using srcdoc iframe.
 * document.write() works correctly inside an iframe's own document context.
 */
function SideAd({ slot, side }: SideAdProps) {
  const ad = getAdSlot(slot);

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
        <div
          style={{ width: ad.width, height: ad.height }}
          className="flex flex-col items-center justify-center rounded border-2 border-dashed border-purple-400 bg-purple-50 text-purple-500 text-xs font-mono select-none text-center p-2"
        >
          📢 Side Ad<br />{side.toUpperCase()}<br />{ad.width}×{ad.height}
        </div>
      ) : (
        <iframe
          srcDoc={iframeDoc}
          width={ad.width}
          height={ad.height}
          scrolling="no"
          frameBorder="0"
          title={`Advertisement - ${side}`}
          style={{ border: "none", overflow: "hidden", display: "block" }}
        />
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
