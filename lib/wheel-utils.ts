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

// Save wheel state to localStorage
export function saveWheelToStorage(state: WheelState): void {
  if (typeof window === "undefined") return;
  
  try {
    localStorage.setItem("wheelState", JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save wheel state:", error);
  }
}

// Load wheel state from localStorage
export function loadWheelFromStorage(): WheelState | null {
  if (typeof window === "undefined") return null;
  
  try {
    const stored = localStorage.getItem("wheelState");
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

