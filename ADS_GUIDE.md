# 📢 Ads Integration Guide

> **Purpose**: Complete reference for all ad-related code in this project.
> If you want to add, modify, or completely remove ads — start here.

---

## 📁 Files Involved in Ads

| File | Role |
|---|---|
| `lib/ads.ts` | Central config — all ad slots defined here |
| `components/AdBanner.tsx` | Inline / mid-content banner component |
| `components/SideAds.tsx` | Fixed left+right skyscraper component |
| `app/layout.tsx` | Global side ads injected here |
| `app/page.tsx` | Homepage-specific ad placements |
| `components/HomeWheel.tsx` | Wheel-page ad placements (used on `/` feature/use-case pages) |
| `app/wheel/page.tsx` | Shared wheel page ad placements (`/wheel?share=...`) |
| `next.config.ts` | `X-Frame-Options` changed for iframe ads |

---

## 🗂️ Ad Slots (`lib/ads.ts`)

All ad slots are registered in one place:

| Slot ID | Size | Network | Used in |
|---|---|---|---|
| `banner-320x50` | 320×50 | highperformanceformat.com | `page.tsx`, `HomeWheel.tsx` |
| `skyscraper-160x600` | 160×600 | highperformanceformat.com | `layout.tsx` (via SideAds) |

**To add a new slot** — edit `lib/ads.ts` only. No component changes needed.

---

## 📍 Ad Placements (All Locations)

### 1. Homepage — above "How It Works" heading
- **File**: `app/page.tsx` ~line 35
- **Visible on**: All screens (mobile + desktop)
- **Slot**: `banner-320x50`
- **Code**:
```tsx
{/* Ad banner above section title – lazy-loads via IntersectionObserver */}
<div className="flex justify-center mb-6">
  <AdBanner slot="banner-320x50" />
</div>
```

---

### 2. Homepage — between "Perfect For" and "Why Choose Us"
- **File**: `app/page.tsx` ~line 149
- **Visible on**: Mobile only (`md:hidden`)
- **Slot**: `banner-320x50`
- **Code**:
```tsx
{/* Mid-content ad – mobile only, between sections (SEO safe: well below fold) */}
<div className="md:hidden w-full flex justify-center py-3 bg-white">
  <AdBanner slot="banner-320x50" />
</div>
```

---

### 3. Wheel — below the wheel canvas (desktop)
- **File**: `components/HomeWheel.tsx` ~line 365
- **Visible on**: Desktop only (`hidden md:flex`)
- **Slot**: `banner-320x50`
- **Code**:
```tsx
{/* Ad Banner – below wheel, desktop only */}
<AdBanner slot="banner-320x50" className="hidden md:flex mt-8" />
```

---

### 4. Wheel — below Spin button (mobile)
- **File**: `components/HomeWheel.tsx` ~line 597
- **Visible on**: Mobile only (`md:hidden`)
- **Slot**: `banner-320x50`
- **Code**:
```tsx
{/* Ad Banner – mobile only (below md/768px) */}
<AdBanner slot="banner-320x50" className="md:hidden flex" />
```

---

### 5. Shared Wheel Page — below the wheel canvas (desktop)
- **File**: `app/wheel/page.tsx` ~line 350
- **Visible on**: Desktop only (`hidden md:flex`)
- **Slot**: `banner-320x50`
- **Code**:
```tsx
{/* Ad Banner – below wheel, desktop only */}
<AdBanner slot="banner-320x50" className="hidden md:flex mt-8" />
```

---

### 6. Shared Wheel Page — below Spin button (mobile)
- **File**: `app/wheel/page.tsx` ~line 587
- **Visible on**: Mobile only (`md:hidden`)
- **Slot**: `banner-320x50`
- **Code**:
```tsx
{/* Ad Banner – mobile only (below md/768px) */}
<AdBanner slot="banner-320x50" className="md:hidden flex" />
```

---

### 7. Side Skyscraper Ads — left + right panels
- **File**: `app/layout.tsx` ~line 65
- **Visible on**: Screens ≥ 1400px only (CSS media query in `SideAds.tsx`)
- **Slot**: `skyscraper-160x600`
- **Code**:
```tsx
{/* Side skyscraper ads – fixed left & right, visible only ≥ 1400px */}
<SideAds slot="skyscraper-160x600" />
```

---

## ⚙️ How the Components Work

### `AdBanner` — lazy-loaded via IntersectionObserver
- Renders a **blank placeholder** (exact height) until the element scrolls into view
- Fires 150px **before** the ad enters the viewport (so it's ready when seen)
- In **production**: renders a `<iframe srcdoc>` containing the ad scripts
- In **development**: renders a dashed blue placeholder box
- Why `srcdoc` iframe? — `invoke.js` uses `document.write()` which is blocked in async script tags. An iframe gets its own fresh document where `document.write()` works correctly.

### `SideAds` — deferred via `requestIdleCallback`
- Fixed-position panels — `IntersectionObserver` does not apply (always "in viewport")
- Uses `requestIdleCallback` to load **after** browser finishes painting main content
- Fallback: `setTimeout(1500ms)` for Safari (no `requestIdleCallback` support)
- Only rendered via CSS at `≥ 1400px` screen width

---

## 🔧 Config Changed (`next.config.ts`)

```diff
- { key: "X-Frame-Options", value: "DENY" },
+ { key: "X-Frame-Options", value: "SAMEORIGIN" },
```

**Why**: `DENY` was blocking the ad network's iframe communication.
`SAMEORIGIN` still protects the site from being embedded in third-party frames.

---

## 🗑️ HOW TO COMPLETELY REMOVE ALL ADS

Follow these steps in order. Each step is self-contained.

### Step 1 — Remove from `app/layout.tsx`
Delete the `SideAds` import and component:
```tsx
// DELETE these two lines:
import SideAds from "@/components/SideAds";
<SideAds slot="skyscraper-160x600" />
```

### Step 2 — Remove from `app/page.tsx`
Delete the `AdBanner` import and all 2 placements:
```tsx
// DELETE import:
import AdBanner from "@/components/AdBanner";

// DELETE placement 1 (above "How It Works"):
<div className="flex justify-center mb-6">
  <AdBanner slot="banner-320x50" />
</div>

// DELETE placement 2 (mobile between sections):
<div className="md:hidden w-full flex justify-center py-3 bg-white">
  <AdBanner slot="banner-320x50" />
</div>
```

### Step 3 — Remove from `components/HomeWheel.tsx`
Delete the `AdBanner` import and both placements:
```tsx
// DELETE import:
import AdBanner from "@/components/AdBanner";

// DELETE placement 1 (desktop, below wheel ~line 365):
<AdBanner slot="banner-320x50" className="hidden md:flex mt-8" />

// DELETE placement 2 (mobile, below spin button ~line 597):
<AdBanner slot="banner-320x50" className="md:hidden flex" />
```

### Step 4 — Revert `next.config.ts`
```tsx
// REVERT back to DENY if you want stricter security:
{ key: "X-Frame-Options", value: "DENY" },
```

### Step 5 — Delete component files (optional)
These files are safe to delete once all usages above are removed:
```
components/AdBanner.tsx
components/SideAds.tsx
lib/ads.ts
```

---

## 📊 SEO Notes

| Placement | SEO Risk | Notes |
|---|---|---|
| Above "How It Works" (all screens) | Low | Below fold, lazy-loaded |
| Between sections (mobile) | Low | 3rd scroll, between content |
| Below wheel (desktop) | Low | After main tool |
| Below spin button (mobile) | Low | After interaction |
| Side ads (≥1400px) | None | Google crawls at 1024px |
| **Total mobile ads** | Watch | 3 placements — monitor rankings |

> **Recommendation**: If Google Search Console shows mobile ranking drops,
> remove **placement 2** (between sections) first — it is the most aggressive.

---

## 🌐 Ad Network Details

| Network | Dashboard URL |
|---|---|
| highperformanceformat.com | https://www.highperformanceformat.com |

All keys and script URLs are stored in `lib/ads.ts` — update them there if the network changes keys.

---

*Last updated: July 2026*
