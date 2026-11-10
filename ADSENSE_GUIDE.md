# Google AdSense Integration & Removal Guide

> **Purpose**: This guide provides complete instructions and preserved code to **remove**, **restore**, or **expand** Google AdSense ads on this project.

---

## Current AdSense Details

| Item | Value |
|---|---|
| **Publisher ID** | `ca-pub-9187153323911677` |
| **Display Ad Slot ID (Desktop)** | `6084518347` (Responsive, auto) |
| **Display Ad Slot ID (Mobile Small)** | `9896604995` (Fixed: 330×80) |
| **Auto Ads** | ✅ Enabled (via the global loader script) |
| **Manual Desktop Ad** | ✅ Desktop-only below wheel (`hidden lg:block`) |
| **Manual Mobile Ad** | ✅ Mobile-only below Share button (`lg:hidden`) |

---

## File Map — Where AdSense Code Lives

### 1. Global Loader Script (Auto Ads + Manual Ads)

**File:** `app/layout.tsx` (lines 69–76)

```tsx
{/* Google AdSense */}
<Script
  id="adsbygoogle-init"
  async
  strategy="afterInteractive"
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9187153323911677"
  crossOrigin="anonymous"
/>
```

> This single `<Script>` tag powers **both** Auto Ads and all manual `<ins>` ad units sitewide. It must only exist **once** in the entire project.

---

### 2. Authorized Sellers File

**File:** `public/ads.txt`

```
google.com, pub-9187153323911677, DIRECT, f08c47fec0942fa0
```

> Required by Google AdSense. Must remain at the root of the domain (`spinpickonline.com/ads.txt`).

---

### 3. Reusable Display Ad Component

**File:** `components/AdSenseDisplay.tsx`

```tsx
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
```

---

### 4. Manual Display Ad Placements

The `<AdSenseDisplay />` component is placed in the **left column below the wheel** on desktop only (`hidden lg:block`).

| File | Line | What It Powers |
|---|---|---|
| `components/HomeWheel.tsx` | ~382 | Homepage + all SEO landing pages (30+ pages) |
| `components/YesNoWheel.tsx` | ~122 | `/yes-no-wheel` page |
| `components/TeamPickerWheel.tsx` | ~172 | `/team-picker` page |
| `app/wheel/page.tsx` | ~360 | `/wheel` (full editor) page |

**Each placement looks like:**

```tsx
{/* Desktop Ad: Empty space under wheel (desktop only) */}
{showAd && (
  <div className="hidden lg:block w-full max-w-2xl mt-6">
    <AdSenseDisplay slotId="6084518347" />
  </div>
)}
```

> `HomeWheel.tsx` uses the `showAd` prop (defaults to `true`) so any page can disable the ad by passing `<HomeWheel showAd={false} />`.

---

## How to REMOVE All Google AdSense

### Quick removal (keeps Auto Ads disabled but file intact):

1. **Delete the global loader script** from `app/layout.tsx`:
   - Remove lines 69–76 (the `{/* Google AdSense */}` block with the `<Script>` tag).

2. **Delete the component file:**
   ```
   del components\AdSenseDisplay.tsx
   ```

3. **Remove imports and JSX from these 4 files:**

   | File | Remove |
   |---|---|
   | `components/HomeWheel.tsx` | Line 6: `import AdSenseDisplay...` + Lines ~379–384: the `{showAd && (...)}` block + `showAd` from interface/props |
   | `components/YesNoWheel.tsx` | Line 5: `import AdSenseDisplay...` + Lines ~120–124: the ad `<div>` block |
   | `components/TeamPickerWheel.tsx` | Line 6: `import AdSenseDisplay...` + Lines ~170–174: the ad `<div>` block |
   | `app/wheel/page.tsx` | Line 8: `import AdSenseDisplay...` + Lines ~358–362: the ad `<div>` block |

4. **Optionally delete `public/ads.txt`** (only if you have no other ad networks).

5. **Verify:**
   ```bash
   npx tsc --noEmit   # should pass with 0 errors
   ```

### Grep to verify complete removal:

```bash
git grep -i "AdSenseDisplay\|adsbygoogle\|6084518347\|ca-pub-9187153323911677"
```

Should return **zero results** (except this guide file).

---

## How to RESTORE Google AdSense

1. Re-create `components/AdSenseDisplay.tsx` using the preserved code in Section 3 above.

2. Add the global loader to `app/layout.tsx` inside `<body>`, after the footer:
   ```tsx
   {/* Google AdSense */}
   <Script
     id="adsbygoogle-init"
     async
     strategy="afterInteractive"
     src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9187153323911677"
     crossOrigin="anonymous"
   />
   ```

3. Import and place the component in wheel files:
   ```tsx
   import AdSenseDisplay from "@/components/AdSenseDisplay";

   {/* Desktop Ad: below wheel, desktop only */}
   <div className="hidden lg:block w-full max-w-2xl mt-6">
     <AdSenseDisplay slotId="6084518347" />
   </div>
   ```

4. Ensure `public/ads.txt` contains:
   ```
   google.com, pub-9187153323911677, DIRECT, f08c47fec0942fa0
   ```

---

## How to ADD MORE Ad Placements

### Add a new manual ad unit on any page:

```tsx
import AdSenseDisplay from "@/components/AdSenseDisplay";

// Use the same slot ID or create a new one in AdSense dashboard
<AdSenseDisplay slotId="6084518347" />

// With custom slot
<AdSenseDisplay slotId="YOUR_NEW_SLOT_ID" />

// Desktop only
<div className="hidden lg:block">
  <AdSenseDisplay slotId="6084518347" />
</div>

// With extra spacing
<AdSenseDisplay slotId="6084518347" className="my-8" />
```

### Create a new ad unit in Google AdSense:

1. Go to [AdSense → Ads → By ad unit](https://www.google.com/adsense/new/u/0/pub-9187153323911677/myads/units)
2. Click **Display ads** → Name it → Click **Create**
3. Copy the new **slot ID** from the generated code
4. Use: `<AdSenseDisplay slotId="NEW_SLOT_ID" />`

---

## Important Rules

1. **Never place ads above or over the wheel, spin button, or input fields** — this violates AdSense policies.
2. **Never click your own ads** — Google will ban the account.
3. **One global loader script only** — never add a second `adsbygoogle.js` script tag.
4. **Mobile ads** — let Google Auto Ads handle mobile placement. Manual ads use `hidden lg:block` to show only on desktop ≥ 1024px.
5. **React StrictMode** — the `isInitialized` ref in `AdSenseDisplay.tsx` prevents double-push errors during development.
6. **`availableWidth=0` error** — the `clientWidth === 0` guard prevents this. If you see it, the ad container is likely hidden via CSS when `push()` runs.

