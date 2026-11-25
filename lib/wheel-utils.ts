import { WheelEntry, WheelState, SavedWheel } from "./types";
import { SITE_CONFIG } from "./constants";

// Generate cryptographically secure random number in [0, 1)
export function getSecureRandom(): number {
  const cryptoApi = typeof globalThis !== "undefined" ? globalThis.crypto : undefined;
  if (cryptoApi?.getRandomValues) {
    const array = new Uint32Array(1);
    cryptoApi.getRandomValues(array);
    return array[0] / 4294967296;
  }
  return Math.random();
}

// Generate an unbiased cryptographically secure integer in [0, max)
export function getSecureRandomInt(max: number): number {
  if (max <= 1) return 0;
  const cryptoApi = typeof globalThis !== "undefined" ? globalThis.crypto : undefined;
  if (cryptoApi?.getRandomValues) {
    const range = 4294967296;
    const limit = range - (range % max);
    const array = new Uint32Array(1);
    let value = 0;
    do {
      cryptoApi.getRandomValues(array);
      value = array[0];
    } while (value >= limit);
    return value % max;
  }
  return Math.floor(Math.random() * max);
}

// Unbiased Fisher-Yates shuffle backed by Web Crypto API
export function shuffleArraySecure<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = getSecureRandomInt(i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Clamp entry weight to a finite integer >= 1
export function getEntryWeight(entry: Pick<WheelEntry, "weight">): number {
  if (typeof entry.weight !== "number" || !Number.isFinite(entry.weight) || entry.weight < 1) {
    return 1;
  }
  return Math.min(100, Math.round(entry.weight));
}

// Pick winning entry index respecting segment weights via CSPRNG
export function pickWeightedEntryIndex(entries: WheelEntry[]): number {
  if (entries.length === 0) return 0;
  const totalWeight = entries.reduce((sum, entry) => sum + getEntryWeight(entry), 0);
  const target = getSecureRandom() * totalWeight;
  let cumulative = 0;
  for (let i = 0; i < entries.length; i++) {
    cumulative += getEntryWeight(entries[i]);
    if (target < cumulative) {
      return i;
    }
  }
  return entries.length - 1;
}

// Generate random result from entries
export function spinWheel(entries: WheelEntry[]): string {
  if (entries.length === 0) return "";
  return entries[pickWeightedEntryIndex(entries)].label;
}

// Generate default colors for entries
export function generateDefaultColors(count: number): string[] {
  const colors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8",
    "#F7DC6F", "#BB8FCE", "#85C1E2", "#F8B739", "#52BE80",
    "#EC7063", "#5DADE2", "#58D68D", "#F4D03F", "#AF7AC5",
  ];

  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(colors[i % colors.length]);
  }
  return result;
}

// Save wheel state to localStorage with optional key
export function saveWheelToStorage(state: WheelState, storageKey: string = "wheelState"): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save wheel state:", error);
  }
}

// Load wheel state from localStorage with optional key
export function loadWheelFromStorage(storageKey: string = "wheelState"): WheelState | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(storageKey);
    if (!stored) return null;

    return JSON.parse(stored) as WheelState;
  } catch (error) {
    console.error("Failed to load wheel state:", error);
    return null;
  }
}

// Generate unique ID for wheel entries
export function generateEntryId(): string {
  return `entry-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// ── Saved Wheels (multi-wheel localStorage) ──

const SAVED_WHEELS_KEY = "savedWheels";
const MAX_SAVED_WHEELS = 10;

/** Get all saved wheels from localStorage */
export function getSavedWheels(): SavedWheel[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(SAVED_WHEELS_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as SavedWheel[];
  } catch {
    return [];
  }
}

/** Save or update a wheel. Returns false if at max capacity (for new wheels). */
export function saveWheelById(wheel: SavedWheel): boolean {
  if (typeof window === "undefined") return false;
  try {
    const wheels = getSavedWheels();
    const existingIndex = wheels.findIndex((w) => w.id === wheel.id);

    if (existingIndex >= 0) {
      // Update existing
      wheels[existingIndex] = { ...wheel, updatedAt: new Date().toISOString() };
    } else {
      // Add new — check capacity
      if (wheels.length >= MAX_SAVED_WHEELS) return false;
      wheels.unshift({ ...wheel, updatedAt: new Date().toISOString() });
    }

    localStorage.setItem(SAVED_WHEELS_KEY, JSON.stringify(wheels));
    return true;
  } catch {
    return false;
  }
}

/** Delete a saved wheel by ID */
export function deleteSavedWheel(id: string): void {
  if (typeof window === "undefined") return;
  try {
    const wheels = getSavedWheels().filter((w) => w.id !== id);
    localStorage.setItem(SAVED_WHEELS_KEY, JSON.stringify(wheels));
  } catch {
    // silently fail
  }
}

/** Get a single saved wheel by ID */
export function getSavedWheelById(id: string): SavedWheel | null {
  return getSavedWheels().find((w) => w.id === id) || null;
}

/** Generate a unique wheel ID */
export function generateWheelId(): string {
  return `wheel-${Date.now()}-${getSecureRandomInt(1000000).toString(36)}`;
}

// Validate wheel entries (duplicates permitted so weighted odds & repeated names work cleanly)
export function validateEntries(entries: WheelEntry[]): boolean {
  if (entries.length === 0) return false;
  return entries.every((e) => e.label.trim().length > 0);
}

// Calculate wheel segment angles
export function calculateSegmentAngles(count: number): number[] {
  const anglePerSegment = 360 / count;
  const angles: number[] = [];

  for (let i = 0; i < count; i++) {
    angles.push(i * anglePerSegment);
  }

  return angles;
}

// Format wheel result for display
export function formatResult(result: string): string {
  return result.trim();
}

// ============================================
// SHARE LINK UTILITIES
// ============================================

interface ShareableWheelData {
  entries: { l: string; c: string }[]; // l=label, c=color (shortened for URL)
  name?: string;
  results?: string[]; // All spin results to share with other users
}

function toUrlSafeBase64(input: string): string {
  return btoa(encodeURIComponent(input))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function decodeBase64Flexible(encodedData: string): string {
  let normalized = encodedData.trim();
  // Restore space-mangled "+" if legacy URL wasn't percent-encoded
  if (!normalized.includes("-") && !normalized.includes("_")) {
    normalized = normalized.replace(/ /g, "+");
  } else {
    normalized = normalized.replace(/-/g, "+").replace(/_/g, "/");
  }
  while (normalized.length % 4 !== 0) {
    normalized += "=";
  }
  return decodeURIComponent(atob(normalized));
}

// Encode wheel data for sharing via URL (URL-safe Base64)
export function encodeWheelForShare(entries: WheelEntry[], wheelName?: string, results?: string[]): string {
  // v2 format: ["v2", "wheelName", ["label1", "color1", ...], ["result1", ...], [optional weights]]
  const compactEntries: string[] = [];
  const weights: number[] = [];
  let hasCustomWeights = false;

  entries.forEach((e) => {
    compactEntries.push(e.label);
    compactEntries.push(e.color.replace("#", ""));
    const w = getEntryWeight(e);
    weights.push(w);
    if (w !== 1) hasCustomWeights = true;
  });

  const data: unknown[] = [
    "v2",
    wheelName || "",
    compactEntries,
    results || [],
  ];
  if (hasCustomWeights) {
    data.push(weights);
  }

  try {
    return toUrlSafeBase64(JSON.stringify(data));
  } catch (error) {
    console.error("Failed to encode wheel data:", error);
    return "";
  }
}

// Decode wheel data from shared URL
export function decodeWheelFromShare(encodedData: string): { entries: WheelEntry[]; wheelName?: string; results?: string[] } | null {
  try {
    const jsonString = decodeBase64Flexible(encodedData);
    const data = JSON.parse(jsonString);

    // Handle v2 (compact array format, with optional v2[4] weights)
    if (Array.isArray(data) && (data[0] === "v2" || data[0] === "v3")) {
      const wheelName = data[1] || undefined;
      const compactEntries = data[2] as string[];
      const results = (data[3] as string[]) || [];
      const weights = Array.isArray(data[4]) ? (data[4] as number[]) : undefined;

      const entries: WheelEntry[] = [];
      for (let i = 0; i < compactEntries.length; i += 2) {
        const entryIdx = i / 2;
        const rawWeight = weights?.[entryIdx];
        const weight = typeof rawWeight === "number" && rawWeight > 1 ? Math.round(rawWeight) : undefined;
        entries.push({
          id: generateEntryId(),
          label: compactEntries[i],
          color: `#${compactEntries[i + 1]}`,
          ...(weight ? { weight } : {}),
        });
      }

      return {
        entries,
        wheelName,
        results: results.length > 0 ? results : undefined,
      };
    }

    // Handle v1 (legacy object format)
    const legacyData = data as ShareableWheelData;
    const entries: WheelEntry[] = legacyData.entries.map((e) => ({
      id: generateEntryId(),
      label: e.l,
      color: e.c.startsWith("#") ? e.c : `#${e.c}`,
    }));

    return {
      entries,
      wheelName: legacyData.name,
      results: legacyData.results,
    };
  } catch (error) {
    console.error("Failed to decode wheel data:", error);
    return null;
  }
}

// Generate share URL (preserves current path when requested, defaults to /wheel)
export function generateShareUrl(
  entries: WheelEntry[],
  wheelName?: string,
  results?: string[],
  targetPath?: string
): string {
  const encoded = encodeWheelForShare(entries, wheelName, results);
  if (!encoded) return "";

  const origin = typeof window !== "undefined" ? window.location.origin : SITE_CONFIG.url;
  const resolvedPath =
    targetPath ||
    (typeof window !== "undefined" &&
    window.location.pathname !== "/" &&
    ["/wheel", "/shareable-wheels", "/team-picker", "/yes-no-wheel"].includes(window.location.pathname)
      ? window.location.pathname
      : "/wheel");

  const cleanPath = resolvedPath.startsWith("/") ? resolvedPath : `/${resolvedPath}`;
  const params = new URLSearchParams({ share: encoded });
  return `${origin}${cleanPath}?${params.toString()}`;
}

export function generateEmbedUrl(
  entries: WheelEntry[],
  options?: { wheelName?: string; darkMode?: boolean; obsOverlay?: boolean }
): string {
  const encoded = encodeWheelForShare(entries, options?.wheelName, []);
  const origin = typeof window !== "undefined" ? window.location.origin : SITE_CONFIG.url;
  const params = new URLSearchParams();
  if (encoded) params.set("share", encoded);
  if (options?.darkMode) params.set("theme", "dark");
  if (options?.obsOverlay) params.set("obs", "1");
  const query = params.toString();
  return query ? `${origin}/embed?${query}` : `${origin}/embed`;
}

// Robust copy to clipboard function (handles HTTP/HTTPS)
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      // console.warn("Clipboard API failed, trying fallback...", err);
    }
  }

  // Fallback for HTTP or older browsers
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Ensure it's not visible but part of the DOM
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);

    textArea.focus();
    textArea.select();

    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error("Fallback copy failed:", err);
    return false;
  }
}
