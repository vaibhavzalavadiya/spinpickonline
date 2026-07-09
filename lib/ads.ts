/**
 * ============================================================
 *  CENTRAL ADS CONFIGURATION
 * ============================================================
 *  Add, remove, or edit ad slots here.
 *  Each slot is referenced by its `id` in the <AdBanner> component.
 *
 *  Usage in a page/component:
 *    <AdBanner slot="banner-320x50" />
 *    <AdBanner slot="banner-728x90" />
 *
 *  To add a new ad:
 *    1. Copy one of the entries below.
 *    2. Give it a unique `id`.
 *    3. Fill in the `key`, `width`, `height`, and `src` from your ad network.
 *    4. Use <AdBanner slot="your-new-id" /> wherever you want it.
 * ============================================================
 */

export interface AdSlot {
  /** Unique identifier used in the <AdBanner slot="..."> prop */
  id: string;
  /** Human-readable label (for debugging) */
  label: string;
  /** Ad network atOptions key */
  key: string;
  /** Ad format (usually 'iframe') */
  format: string;
  /** Banner width in pixels */
  width: number;
  /** Banner height in pixels */
  height: number;
  /** The invoke.js (or equivalent) script URL from the ad network */
  src: string;
  /** Extra atOptions params (optional) */
  params?: Record<string, unknown>;
}

const adSlots: AdSlot[] = [
  // ── Slot 1: 320×50 Banner ──────────────────────────────────
  {
    id: "banner-320x50",
    label: "320×50 Banner (highperformanceformat)",
    key: "9f06d537ef6713c238622dd92dfdeede",
    format: "iframe",
    width: 320,
    height: 50,
    src: "https://www.highperformanceformat.com/9f06d537ef6713c238622dd92dfdeede/invoke.js",
    params: {},
  },

  // ── Add more slots below ───────────────────────────────────
  // {
  //   id: "banner-728x90",
  //   label: "728×90 Leaderboard",
  //   key: "YOUR_KEY_HERE",
  //   format: "iframe",
  //   width: 728,
  //   height: 90,
  //   src: "https://www.highperformanceformat.com/YOUR_KEY_HERE/invoke.js",
  //   params: {},
  // },
  // {
  //   id: "banner-300x250",
  //   label: "300×250 Rectangle",
  //   key: "YOUR_KEY_HERE",
  //   format: "iframe",
  //   width: 300,
  //   height: 250,
  //   src: "https://www.highperformanceformat.com/YOUR_KEY_HERE/invoke.js",
  //   params: {},
  // },
];

/** Look up an ad slot by its id. Returns undefined if not found. */
export function getAdSlot(id: string): AdSlot | undefined {
  return adSlots.find((slot) => slot.id === id);
}

/** Returns all registered ad slots. */
export function getAllAdSlots(): AdSlot[] {
  return adSlots;
}

export default adSlots;
