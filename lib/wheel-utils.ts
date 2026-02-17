import { WheelEntry, WheelState } from "./types";

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

// Generate shareable wheel ID
export function generateWheelId(): string {
  return `wheel-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
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
  const data: ShareableWheelData = {
    entries: entries.map(e => ({ l: e.label, c: e.color })),
    name: wheelName,
    results: results && results.length > 0 ? results : undefined,
  };

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
    const data: ShareableWheelData = JSON.parse(jsonString);

    const entries: WheelEntry[] = data.entries.map((e) => ({
      id: generateEntryId(),
      label: e.l,
      color: e.c,
    }));

    return {
      entries,
      wheelName: data.name,
      results: data.results,
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
    : "https://spinpickonline.com/wheel";

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
