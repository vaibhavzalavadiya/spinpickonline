# Adsterra Ad Integration & Restoration Guide

> **Purpose**: This guide provides complete, step-by-step instructions and preserved code to restore or re-add Adsterra ads to this project if ever needed in the future.

---

## ⚠️ Important Precautions: Adsterra + Google AdSense

If you choose to run Adsterra alongside Google AdSense in the future:
1. **Never use Adsterra Popunders or Social Bar**: AdSense strictly prohibits intrusive popups, popunders, and unexpected redirects. Stick only to **Display Banners (320×50, 728×90, 160×600)**.
2. **Never overlay ads**: Ensure Adsterra banners never overlap AdSense Auto-Ads or interactive elements (like the spin wheel or spin button).
3. **Update `ads.txt`**: When adding Adsterra, you will need to append their authorized seller lines to `public/ads.txt` while keeping the `google.com` AdSense line intact.

---

## 1. Central Configuration (`lib/ads.ts`)

Create `lib/ads.ts` to manage all ad slots in a single, typed location:

```typescript
// lib/ads.ts

export interface AdSlot {
  /** Unique identifier used in <AdBanner slot="..."> */
  id: string;
  /** Human-readable label (for debugging) */
  label: string;
  /** Adsterra atOptions key */
  key: string;
  /** Ad format (usually 'iframe') */
  format: string;
  /** Width in pixels */
  width: number;
  /** Height in pixels */
  height: number;
  /** The invoke.js script URL from Adsterra */
  src: string;
  /** Optional extra atOptions parameters */
  params?: Record<string, unknown>;
}

const adSlots: AdSlot[] = [
  // Slot 1: Mobile / Mid-content 320x50 Banner
  {
    id: "banner-320x50",
    label: "320×50 Banner (highperformanceformat)",
    key: "9f06d537ef6713c238622dd92dfdeede", // Replace with your Adsterra banner key
    format: "iframe",
    width: 320,
    height: 50,
    src: "https://www.highperformanceformat.com/9f06d537ef6713c238622dd92dfdeede/invoke.js",
    params: {},
  },

  // Slot 2: 160x600 Wide Skyscraper (Side panels)
  {
    id: "skyscraper-160x600",
    label: "160×600 Wide Skyscraper (highperformanceformat)",
    key: "fc19cdc52a843e30b3db635c3a974b51", // Replace with your Adsterra skyscraper key
    format: "iframe",
    width: 160,
    height: 600,
    src: "https://www.highperformanceformat.com/fc19cdc52a843e30b3db635c3a974b51/invoke.js",
    params: {},
  },
];

export function getAdSlot(id: string): AdSlot | undefined {
  return adSlots.find((slot) => slot.id === id);
}

export function getAllAdSlots(): AdSlot[] {
  return adSlots;
}

export default adSlots;
```

---

## 2. In-Page Banner Component (`components/AdBanner.tsx`)

This component isolates the third-party script inside a sandboxed `srcDoc` iframe and lazy-loads via `IntersectionObserver` to protect **Core Web Vitals (LCP & CLS)**:

```tsx
// components/AdBanner.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { getAdSlot } from "@/lib/ads";

interface AdBannerProps {
  slot: string;
  className?: string;
}

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
          observer.disconnect();
        }
      },
      {
        rootMargin: "150px", // Starts loading 150px before entering viewport
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
        <div
          style={{ width: ad.width, height: ad.height }}
          className="flex items-center justify-center rounded border-2 border-dashed border-blue-400 bg-blue-50 text-blue-500 text-xs font-mono select-none"
        >
          📢 Ad · {ad.label} · {ad.width}×{ad.height}
        </div>
      ) : isVisible ? (
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
        <div style={{ width: ad.width, height: ad.height }} />
      )}
    </div>
  );
}
```

---

## 3. Side Skyscraper Component (`components/SideAds.tsx`)

Renders fixed left and right skyscraper ads on ultra-wide screens (≥ 1550px) without shifting mobile/tablet layouts:

```tsx
// components/SideAds.tsx
"use client";

import { useState, useEffect } from "react";
import { getAdSlot } from "@/lib/ads";

interface SideAdProps {
  slot: string;
  side: "left" | "right";
}

function SideAd({ slot, side }: SideAdProps) {
  const ad = getAdSlot(slot);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!ad) return;

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        const id = (window as Window & typeof globalThis).requestIdleCallback(
          () => setIsLoaded(true),
          { timeout: 2000 }
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
        <div
          style={{ width: ad.width, height: ad.height }}
          className="flex flex-col items-center justify-center rounded border-2 border-dashed border-purple-400 bg-purple-50 text-purple-500 text-xs font-mono select-none text-center p-2"
        >
          📢 Side Ad<br />{side.toUpperCase()}<br />{ad.width}×{ad.height}
        </div>
      ) : isLoaded ? (
        <iframe
          srcDoc={iframeDoc}
          width={ad.width}
          height={ad.height}
          scrolling="no"
          frameBorder="0"
          title={`Advertisement - ${side}`}
          style={{ border: "none", overflow: "hidden", display: "block" }}
        />
      ) : null}
    </div>
  );
}

export default function SideAds({ slot }: { slot: string }) {
  return (
    <>
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
```

---

## 4. Where to Place the Components

### A. Global Side Skyscrapers (`app/layout.tsx`)
Import and place right above the footer:
```tsx
import SideAds from "@/components/SideAds";

// Inside RootLayout JSX:
<main className="min-h-screen">{children}</main>
<Footer />
<SideAds slot="skyscraper-160x600" />
```

### B. Homepage Placements (`app/page.tsx`)
```tsx
import AdBanner from "@/components/AdBanner";

// 1. Above "How It Works" Section:
<div className="flex justify-center mb-6">
  <AdBanner slot="banner-320x50" />
</div>

// 2. Mobile Mid-Content (between sections):
<div className="md:hidden w-full flex justify-center py-3 bg-white">
  <AdBanner slot="banner-320x50" />
</div>
```

### C. Wheel Creator Page (`app/wheel/page.tsx`)
```tsx
import AdBanner from "@/components/AdBanner";

// Desktop: Below wheel canvas
<AdBanner slot="banner-320x50" className="hidden md:flex mt-8" />

// Mobile: Below spin button
<AdBanner slot="banner-320x50" className="md:hidden flex" />

// Above SEO Article section
<div className="flex justify-center mb-6">
  <AdBanner slot="banner-320x50" />
</div>
```

### D. Result Modal (`components/ResultModal.tsx`)
```tsx
import AdBanner from "@/components/AdBanner";

// Below the winner actions buttons:
<div className="flex justify-center mt-6">
  <AdBanner slot="banner-320x50" />
</div>
```

---

## 5. Security Headers (`next.config.ts`)

Because Adsterra loads through dynamic iframe invocation, ensure `next.config.ts` allows iframe communication by setting `X-Frame-Options` to `SAMEORIGIN`:

```typescript
// next.config.ts
headers: async () => [
  {
    source: "/(.*)",
    headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    ],
  },
],
```

