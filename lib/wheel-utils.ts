import { WheelEntry, WheelState, SavedWheel } from "./types";
import { SITE_CONFIG } from "./constants";

// Generate cryptographically secure random number
export function getSecureRandom(): number {
  // Use crypto.getRandomValues for secure randomness
  if (typeof window !== "undefined" && window.crypto) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] / (0xffffffff + 1);
  }
  // Fallback to Math.random (less secure but works)
  return Math.random();
}

// Generate random result from entries
export function spinWheel(entries: WheelEntry[]): string {
  if (entries.length === 0) return "";

  const random = getSecureRandom();
  const index = Math.floor(random * entries.length);
  return entries[index].label;
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
  return `wheel-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
}

// Validate wheel entries
export function validateEntries(entries: WheelEntry[]): boolean {
  if (entries.length === 0) return false;

  // Check for duplicate labels
  const labels = entries.map(e => e.label.trim().toLowerCase());
  const uniqueLabels = new Set(labels);

  if (labels.length !== uniqueLabels.size) return false;

  // Check for empty labels
  return entries.every(e => e.label.trim().length > 0);
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

// Encode wheel data for sharing via URL
export function encodeWheelForShare(entries: WheelEntry[], wheelName?: string, results?: string[]): string {
  // v2 format: ["v2", "wheelName", ["label1", "color1", "label2", "color2"], ["result1", "result2"]]
  // This drastically reduces JSON bloat compared to array of objects.
  const compactEntries: string[] = [];
  entries.forEach((e) => {
    compactEntries.push(e.label);
    compactEntries.push(e.color.replace("#", ""));
  });

  const data = [
    "v2",
    wheelName || "",
    compactEntries,
    results || [],
  ];

  try {
    const jsonString = JSON.stringify(data);
    // Use base64 encoding for URL safety
    const encoded = btoa(encodeURIComponent(jsonString));
    return encoded;
  } catch (error) {
    console.error("Failed to encode wheel data:", error);
    return "";
  }
}

// Decode wheel data from shared URL
export function decodeWheelFromShare(encodedData: string): { entries: WheelEntry[]; wheelName?: string; results?: string[] } | null {
  try {
    const jsonString = decodeURIComponent(atob(encodedData));
    const data = JSON.parse(jsonString);

    // Handle v2 (compact array format)
    if (Array.isArray(data) && data[0] === "v2") {
      const wheelName = data[1] || undefined;
      const compactEntries = data[2] as string[];
      const results = data[3] as string[];

      const entries: WheelEntry[] = [];
      for (let i = 0; i < compactEntries.length; i += 2) {
        entries.push({
          id: generateEntryId(),
          label: compactEntries[i],
          color: `#${compactEntries[i + 1]}`,
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

// Generate share URL
export function generateShareUrl(entries: WheelEntry[], wheelName?: string, results?: string[]): string {
  const encoded = encodeWheelForShare(entries, wheelName, results);
  if (!encoded) return "";

  const baseUrl = typeof window !== "undefined"
    ? `${window.location.origin}/wheel`
    : `${SITE_CONFIG.url}/wheel`;

  return `${baseUrl}?share=${encoded}`;
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
