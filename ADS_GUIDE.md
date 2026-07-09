# Ads Integration Guide

> **Purpose**: Complete reference for all ad-related code in this project.
> If you want to add, modify, or completely remove ads, start here.

---

## Files Involved in Ads

| File | Role |
|---|---|
| `lib/ads.ts` | Central config - all ad slots defined here |
| `components/AdBanner.tsx` | Inline / mid-content banner component |
| `components/SideAds.tsx` | Fixed left+right skyscraper component |
| `app/layout.tsx` | Global side ads injected here |
| `app/page.tsx` | Homepage-specific ad placements (2 ads) |
| `components/HomeWheel.tsx` | Wheel ad placements used on feature/use-case pages |
| `app/wheel/page.tsx` | /wheel page + shared wheel (/wheel?share=...) - 3 ads |
| `next.config.ts` | X-Frame-Options changed for iframe ads |

---

## Ad Slots (lib/ads.ts)

All ad slots are registered in one place:

| Slot ID | Size | Network | Used in |
|---|---|---|---|
| `banner-320x50` | 320x50 | highperformanceformat.com | `page.tsx`, `HomeWheel.tsx`, `app/wheel/page.tsx` |
| `skyscraper-160x600` | 160x600 | highperformanceformat.com | `layout.tsx` (via SideAds) |

**To add a new slot** - edit `lib/ads.ts` only. No component changes needed.

---

## Ad Placements (All Locations)

### 1. Homepage - above "How It Works" heading
- **File**: `app/page.tsx` ~line 35
- **Visible on**: All screens (mobile + desktop)
- **Slot**: `banner-320x50`
- **Code**:

```tsx
{/* Ad banner above section title - lazy-loads via IntersectionObserver */}
<div className="flex justify-center mb-6">
  <AdBanner slot="banner-320x50" />
</div>
```

---

### 2. Homepage - between "Perfect For" and "Why Choose Us"
- **File**: `app/page.tsx` ~line 149
- **Visible on**: Mobile only (`md:hidden`)
- **Slot**: `banner-320x50`
- **Code**:

```tsx
{/* Mid-content ad - mobile only, between sections (SEO safe: well below fold) */}
<div className="md:hidden w-full flex justify-center py-3 bg-white">
  <AdBanner slot="banner-320x50" />
</div>
```

---

### 3. Feature/Use-case Wheel - below the wheel canvas (desktop)
- **File**: `components/HomeWheel.tsx` ~line 365
- **Visible on**: Desktop only (`hidden md:flex`)
- **Slot**: `banner-320x50`
- **Note**: Used on all `/[slug]` feature and use-case pages
- **Code**:

```tsx
{/* Ad Banner - below wheel, desktop only */}
<AdBanner slot="banner-320x50" className="hidden md:flex mt-8" />
```

---

### 4. Feature/Use-case Wheel - below Spin button (mobile)
- **File**: `components/HomeWheel.tsx` ~line 597
- **Visible on**: Mobile only (`md:hidden`)
- **Slot**: `banner-320x50`
- **Note**: Used on all `/[slug]` feature and use-case pages
- **Code**:

```tsx
{/* Ad Banner - mobile only (below md/768px) */}
<AdBanner slot="banner-320x50" className="md:hidden flex" />
```

---

### 5. /wheel Page - above "Create Your Custom Random Picker Wheel" section
- **File**: `app/wheel/page.tsx` ~line 748
- **Visible on**: All screens (mobile + desktop)
- **Slot**: `banner-320x50`
- **Note**: Appears below the main wheel tool, at the very top of the first SEO content section.
  Also shown when someone opens a shared link (`/wheel?share=...`).
- **Code**:

```tsx
{/* Ad Banner - above section title */}
<div className="flex justify-center mb-6">
  <AdBanner slot="banner-320x50" />
</div>
```

---

### 6. /wheel Page - below the wheel canvas (desktop)
- **File**: `app/wheel/page.tsx` ~line 350
- **Visible on**: Desktop only (`hidden md:flex`)
- **Slot**: `banner-320x50`
- **Note**: Also shown when someone opens a shared link (`/wheel?share=...`)
- **Code**:

```tsx
{/* Ad Banner - below wheel, desktop only */}
<AdBanner slot="banner-320x50" className="hidden md:flex mt-8" />
```

---

### 7. /wheel Page - below Spin button (mobile)
- **File**: `app/wheel/page.tsx` ~line 590
- **Visible on**: Mobile only (`md:hidden`)
- **Slot**: `banner-320x50`
- **Note**: Also shown when someone opens a shared link (`/wheel?share=...`)
- **Code**:

```tsx
{/* Ad Banner - mobile only (below md/768px) */}
<AdBanner slot="banner-320x50" className="md:hidden flex" />
```

---

### 8. Side Skyscraper Ads - left + right panels
- **File**: `app/layout.tsx` ~line 65
- **Visible on**: Screens >= 1400px only (CSS media query in `SideAds.tsx`)
- **Slot**: `skyscraper-160x600`
- **Note**: Global - appears on every page of the site
- **Code**:

```tsx
{/* Side skyscraper ads - fixed left and right, visible only >= 1400px */}
<SideAds slot="skyscraper-160x600" />
```

---

## Placement Map (Quick Reference)

| # | Page / URL | Location | Screens |
|---|---|---|---|
| 1 | `/` Homepage | Above "How It Works" | All |
| 2 | `/` Homepage | Between "Perfect For" and "Why Choose Us" | Mobile only |
| 3 | `/[slug]` Feature pages | Below wheel canvas | Desktop only |
| 4 | `/[slug]` Feature pages | Below Spin button | Mobile only |
| 5 | `/wheel` + `/wheel?share=...` | Above "Create Your Custom..." section | All |
| 6 | `/wheel` + `/wheel?share=...` | Below wheel canvas | Desktop only |
| 7 | `/wheel` + `/wheel?share=...` | Below Spin button | Mobile only |
| 8 | All pages | Fixed left + right skyscrapers | >= 1400px only |

> **Total banner ads visible per session:**
> - Mobile on `/wheel`: 2 visible (placements 7 + 5)
> - Desktop on `/wheel`: 2 visible (placements 6 + 5)
> - Mobile on `/` homepage: 2 visible (placements 1 + 2)
> - Desktop on `/` homepage: 1 visible (placement 1)
> - Mobile on `/[slug]` pages: 2 visible (placements 3 + 4)
> - Desktop on `/[slug]` pages: 2 visible (placements 3 + 4)

---

## How the Components Work

### AdBanner - lazy-loaded via IntersectionObserver
- Renders a blank placeholder (exact height) until the element scrolls into view
- Fires 150px before the ad enters the viewport (so it is ready when seen)
- In **production**: renders a `srcdoc` iframe containing the ad scripts
- In **development**: renders a dashed blue placeholder box
- Why `srcdoc` iframe? `invoke.js` uses `document.write()` which is blocked in async script tags.
  An iframe gets its own fresh document where `document.write()` works correctly.

### SideAds - deferred via requestIdleCallback
- Fixed-position panels - IntersectionObserver does not apply (always in viewport)
- Uses `requestIdleCallback` to load after browser finishes painting main content
- Fallback: `setTimeout(1500ms)` for Safari (no `requestIdleCallback` support)
- Only rendered via CSS at >= 1400px screen width

---

## Config Changed (next.config.ts)

Changed `X-Frame-Options` from `DENY` to `SAMEORIGIN`.

`DENY` was blocking the ad network iframe communication.
`SAMEORIGIN` still protects the site from being embedded in third-party frames.

---

## HOW TO COMPLETELY REMOVE ALL ADS

Follow these steps in order. Each step is self-contained.

### Step 1 - Remove from app/layout.tsx
Delete the `SideAds` import and the `<SideAds slot="skyscraper-160x600" />` component tag.

### Step 2 - Remove from app/page.tsx
Delete the `AdBanner` import and both placement divs:
- Placement 1: above "How It Works" (~line 35)
- Placement 2: mobile mid-content between sections (~line 149)

### Step 3 - Remove from components/HomeWheel.tsx
Delete the `AdBanner` import and both placements:
- Placement 1: desktop below wheel canvas (~line 365)
- Placement 2: mobile below spin button (~line 597)

### Step 4 - Remove from app/wheel/page.tsx
Delete the `AdBanner` import and all 3 placements:
- Placement 1: above "Create Your Custom..." section (~line 748)
- Placement 2: desktop below wheel canvas (~line 350)
- Placement 3: mobile below spin button (~line 590)

### Step 5 - Revert next.config.ts
Change `X-Frame-Options` value back to `DENY` for stricter security.

### Step 6 - Delete component files (optional)
These files are safe to delete once all usages above are removed:
- `components/AdBanner.tsx`
- `components/SideAds.tsx`
- `lib/ads.ts`

---

## SEO Notes

| Placement | Page | SEO Risk | Notes |
|---|---|---|---|
| Above "How It Works" (all screens) | `/` | Low | Below fold, lazy-loaded |
| Between sections (mobile) | `/` | Low | 3rd scroll, between content |
| Below wheel canvas (desktop) | `/[slug]`, `/wheel` | Low | After main tool |
| Below spin button (mobile) | `/[slug]`, `/wheel` | Low | After interaction |
| Above "Create Your Custom..." (all) | `/wheel` | Low | Below tool, top of content area |
| Side ads (>=1400px) | All | None | Google crawls at 1024px |
| Total mobile ads on `/wheel` | `/wheel` | Watch | 2 placements - monitor rankings |

> **Recommendation**: If Google Search Console shows mobile ranking drops on `/wheel`,
> remove placement 7 (below spin button) first - it is closest to the interactive tool.

---

## Ad Network Details

| Network | Dashboard URL |
|---|---|
| highperformanceformat.com | https://www.highperformanceformat.com |

All keys and script URLs are stored in `lib/ads.ts` - update them there if the network changes keys.

---

*Last updated: July 2026*
