"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { WheelEntry } from "@/lib/types";
import { getEntryWeight, getSecureRandom, pickWeightedEntryIndex } from "@/lib/wheel-utils";
import { FiPlay } from "react-icons/fi";

interface WheelProps {
  entries: WheelEntry[];
  onResult: (result: string) => void;
  isSpinning: boolean;
  result: string | null;
  onSpinRequest?: () => void;
  showButton?: boolean;
  onSegmentTick?: () => void;
  darkMode?: boolean;
}

interface SegmentGeometry {
  entry: WheelEntry;
  startAngle: number; // relative to wheel rotation 0 (radians in [0, 2π))
  endAngle: number;
  arcAngle: number;
  weight: number;
}

function getContrastTextColor(hexColor: string): string {
  const clean = hexColor.replace("#", "");
  if (clean.length !== 6) return "#0f172a";
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  if ([r, g, b].some(Number.isNaN)) return "#0f172a";
  // Relative YIQ luminance check for crisp label readability
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq < 135 ? "#ffffff" : "#0f172a";
}

function buildSegments(entries: WheelEntry[]): SegmentGeometry[] {
  if (entries.length === 0) return [];
  const totalWeight = entries.reduce((sum, entry) => sum + getEntryWeight(entry), 0);
  let cursor = 0;
  return entries.map((entry) => {
    const weight = getEntryWeight(entry);
    const arcAngle = (weight / totalWeight) * 2 * Math.PI;
    const startAngle = cursor;
    cursor += arcAngle;
    return {
      entry,
      startAngle,
      endAngle: cursor,
      arcAngle,
      weight,
    };
  });
}

function findSegmentIndexAtRotation(segments: SegmentGeometry[], rot: number): number {
  if (segments.length === 0) return 0;
  let normalized = (-rot) % (2 * Math.PI);
  if (normalized < 0) normalized += 2 * Math.PI;

  for (let i = 0; i < segments.length; i++) {
    if (normalized >= segments[i].startAngle && normalized < segments[i].endAngle) {
      return i;
    }
  }
  return segments.length - 1;
}

export default function Wheel({
  entries,
  onResult,
  isSpinning,
  onSpinRequest,
  onSegmentTick,
  darkMode = false,
}: WheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);
  const animationRef = useRef<number | undefined>(undefined);
  const spinTriggerRef = useRef<boolean>(isSpinning);
  const [canvasSize, setCanvasSize] = useState({ width: 500, height: 500 });
  const prevSegmentRef = useRef<number>(-1);

  const segments = useMemo(() => buildSegments(entries), [entries]);

  const startSpinAnimation = useCallback(() => {
    if (segments.length === 0) return;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Cryptographically fair weighted selection via Web Crypto API
    const selectedIndex = pickWeightedEntryIndex(entries);
    const selectedSeg = segments[selectedIndex];
    const jitter = (getSecureRandom() * 0.4 - 0.2) * selectedSeg.arcAngle;
    const targetPointerAngle = selectedSeg.startAngle + selectedSeg.arcAngle / 2 + jitter;

    const startRotation = rotationRef.current;
    // Land cleanly at `-targetPointerAngle (mod 2π)` relative to top pointer
    const desiredFinalMod = ((-targetPointerAngle) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    const currentMod = ((startRotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    let deltaToTarget = desiredFinalMod - currentMod;
    if (deltaToTarget > 0) deltaToTarget -= 2 * Math.PI;

    const extraSpins = 5;
    const totalRotation = deltaToTarget - extraSpins * 2 * Math.PI;
    const startTime = Date.now();
    const duration = 3000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const nextRotation = startRotation + totalRotation * easeOut;
      rotationRef.current = nextRotation;
      setRotation(nextRotation);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        const detectedIndex = findSegmentIndexAtRotation(segments, nextRotation);
        onResult(segments[detectedIndex]?.entry.label || entries[selectedIndex].label);
      }
    };

    animate();
  }, [entries, onResult, segments]);

  // Fire tick when crossing segment boundary under top pointer
  useEffect(() => {
    if (segments.length === 0) return;
    const index = findSegmentIndexAtRotation(segments, rotation);
    if (prevSegmentRef.current !== -1 && prevSegmentRef.current !== index && isSpinning) {
      onSegmentTick?.();
    }
    prevSegmentRef.current = index;
  }, [rotation, segments, isSpinning, onSegmentTick]);

  // Trigger spin when isSpinning transitions false -> true
  useEffect(() => {
    if (isSpinning && !spinTriggerRef.current && segments.length > 0) {
      spinTriggerRef.current = true;
      prevSegmentRef.current = -1;
      startSpinAnimation();
    } else if (!isSpinning) {
      spinTriggerRef.current = false;
    }
  }, [isSpinning, segments.length, startSpinAnimation]);

  // Handle canvas resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setCanvasSize({ width: rect.width, height: rect.height });
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Draw wheel segments on canvas
  useEffect(() => {
    if (!canvasRef.current || segments.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const displayWidth = canvasSize.width;
    const displayHeight = canvasSize.height;
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    ctx.scale(dpr, dpr);

    const size = Math.min(displayWidth, displayHeight);
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = Math.max(size / 2 - 10, 10);

    ctx.clearRect(0, 0, displayWidth, displayHeight);
    if (radius < 20) return;

    // Outer rim
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 6, 0, 2 * Math.PI);
    ctx.fillStyle = darkMode ? "#1e293b" : "#4a5568";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 3, 0, 2 * Math.PI);
    ctx.fillStyle = darkMode ? "#334155" : "#718096";
    ctx.fill();

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    segments.forEach((seg) => {
      const startAngle = seg.startAngle + rotation - Math.PI / 2;
      const endAngle = seg.endAngle + rotation - Math.PI / 2;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();

      const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.2, centerX, centerY, radius);
      gradient.addColorStop(0, seg.entry.color);

      let edgeColor = seg.entry.color;
      if (seg.entry.color.startsWith("#") && seg.entry.color.length === 7) {
        edgeColor = seg.entry.color + "CC";
      }
      gradient.addColorStop(1, edgeColor);

      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = darkMode ? "#0f172a" : "#ffffff";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Label text inside slice
      ctx.save();
      ctx.translate(centerX, centerY);
      const middleAngle = startAngle + seg.arcAngle / 2;
      ctx.rotate(middleAngle);

      const fontSize = isMobile
        ? segments.length > 8
          ? Math.max(8, radius / 14)
          : Math.max(10, radius / 12)
        : segments.length > 8
          ? Math.max(8, radius / 13)
          : Math.max(9, radius / 11);

      const textColor = getContrastTextColor(seg.entry.color);
      ctx.font = `bold ${fontSize}px Inter, Arial, sans-serif`;
      ctx.fillStyle = textColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const textRadius = radius * 0.65;
      const maxLength = segments.length > 12 ? 8 : segments.length > 8 ? 10 : 12;
      const displayLabel = seg.weight > 1 ? `${seg.entry.label} (${seg.weight}x)` : seg.entry.label;
      const text =
        displayLabel.length > maxLength ? displayLabel.substring(0, maxLength - 2) + "..." : displayLabel;

      ctx.shadowColor = textColor === "#ffffff" ? "rgba(0, 0, 0, 0.55)" : "rgba(255, 255, 255, 0.7)";
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      ctx.fillText(text, textRadius, 0);
      ctx.shadowBlur = 0;
      ctx.restore();
    });

    // Center hub
    const hubGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 45);
    hubGradient.addColorStop(0, darkMode ? "#1e293b" : "#f7fafc");
    hubGradient.addColorStop(0.6, darkMode ? "#0f172a" : "#e2e8f0");
    hubGradient.addColorStop(1, darkMode ? "#334155" : "#cbd5e0");

    ctx.beginPath();
    ctx.arc(centerX, centerY, 45, 0, 2 * Math.PI);
    ctx.fillStyle = hubGradient;
    ctx.fill();

    // Top pointer arrow
    const arrowSize = 28;
    const arrowY = 8;
    ctx.save();
    ctx.translate(centerX, arrowY);
    ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 3;

    const arrowGradient = ctx.createLinearGradient(-arrowSize / 2, 0, arrowSize / 2, 0);
    arrowGradient.addColorStop(0, "#2563eb");
    arrowGradient.addColorStop(0.5, "#3b82f6");
    arrowGradient.addColorStop(1, "#2563eb");

    ctx.beginPath();
    ctx.moveTo(0, arrowSize + 2);
    ctx.lineTo(-arrowSize / 2, 0);
    ctx.lineTo(arrowSize / 2, 0);
    ctx.closePath();
    ctx.fillStyle = arrowGradient;
    ctx.fill();
    ctx.restore();
  }, [segments, rotation, isSpinning, canvasSize, darkMode]);

  const handleSpin = () => {
    if (entries.length === 0 || isSpinning) return;
    if (onSpinRequest) {
      onSpinRequest();
    } else {
      startSpinAnimation();
    }
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px] aspect-square">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          role="img"
          aria-label={`Interactive random picker wheel with ${entries.length} options`}
        >
          Interactive random picker wheel with {entries.length} options: {entries.map((e) => e.label).join(", ")}
        </canvas>

        <button
          type="button"
          onClick={handleSpin}
          disabled={isSpinning || entries.length === 0}
          className={`absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full shadow-xl border-4 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-110 active:scale-95 z-10 ${
            darkMode
              ? "bg-slate-900 border-slate-600 hover:bg-slate-800 hover:border-blue-400"
              : "bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-300"
          }`}
          aria-label="Spin the wheel"
        >
          {isSpinning ? (
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          ) : (
            <FiPlay className={`text-4xl ml-1 ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
          )}
        </button>
      </div>
    </div>
  );
}
