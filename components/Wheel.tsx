"use client";

import { useEffect, useRef, useState } from "react";
import { WheelEntry } from "@/lib/types";
import { spinWheel } from "@/lib/wheel-utils";
import { FiPlay } from "react-icons/fi";

interface WheelProps {
  entries: WheelEntry[];
  onResult: (result: string) => void;
  isSpinning: boolean;
  result: string | null;
  onSpinRequest?: () => void;
  showButton?: boolean;
}

export default function Wheel({ entries, onResult, isSpinning, result, onSpinRequest, showButton = true }: WheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const spinTriggerRef = useRef<boolean>(isSpinning);
  const [canvasSize, setCanvasSize] = useState({ width: 500, height: 500 });

  // Calculate which segment is selected based on rotation (arrow on top)
  useEffect(() => {
    if (entries.length === 0) return;

    const anglePerSegment = (2 * Math.PI) / entries.length;

    // Calculate which segment the arrow is pointing to
    // When rotation=0, segment 0 should be at top
    // Segments drawn: startAngle = index * anglePerSegment + rotation - π/2
    // Arrow at -π/2, so we need: index * anglePerSegment + rotation - π/2 ≤ -π/2 < (index+1) * anglePerSegment + rotation - π/2
    // Simplifies to: index * anglePerSegment ≤ -rotation < (index+1) * anglePerSegment
    let normalizedRotation = (-rotation) % (2 * Math.PI);
    if (normalizedRotation < 0) normalizedRotation += 2 * Math.PI;

    const index = Math.floor(normalizedRotation / anglePerSegment) % entries.length;
    setSelectedIndex(index);
  }, [rotation, entries]);

  // Trigger spin when isSpinning changes from false to true externally
  useEffect(() => {
    if (isSpinning && !spinTriggerRef.current && entries.length > 0) {
      spinTriggerRef.current = true;
      // Don't use spinWheel result - instead pick result based on final rotation
      // This ensures arrow always points to the actual winner
      const anglePerSegment = (2 * Math.PI) / entries.length;
      const randomIndex = Math.floor(Math.random() * entries.length);
      const result = entries[randomIndex].label;
      const resultIndex = randomIndex;

      // Add small offset to avoid landing exactly on border
      const offset = (Math.random() * 0.4 - 0.2) * anglePerSegment;
      const targetRotation = -(resultIndex * anglePerSegment + anglePerSegment / 2 + offset);

      // Add multiple spins for effect
      const spins = 5;
      const totalRotation = targetRotation - (spins * 2 * Math.PI);

      let currentRotation = rotation;
      const startTime = Date.now();
      const duration = 3000;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOut = 1 - Math.pow(1 - progress, 3);

        currentRotation = rotation + (totalRotation * easeOut);
        setRotation(currentRotation);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          // Use detection logic to find what arrow actually points to
          let finalRotation = currentRotation;
          let normalizedRotation = (-finalRotation) % (2 * Math.PI);
          if (normalizedRotation < 0) normalizedRotation += 2 * Math.PI;
          const detectedIndex = Math.floor(normalizedRotation / anglePerSegment) % entries.length;

          setSelectedIndex(detectedIndex);
          onResult(entries[detectedIndex].label);
        }
      };

      animate();
    } else if (!isSpinning) {
      spinTriggerRef.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSpinning]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setCanvasSize({ width: rect.width, height: rect.height });
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current || entries.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use device pixel ratio for crisp rendering
    const dpr = typeof window !== "undefined" ? (window.devicePixelRatio || 1) : 1;
    const displayWidth = canvasSize.width;
    const displayHeight = canvasSize.height;
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    ctx.scale(dpr, dpr);

    const size = Math.min(displayWidth, displayHeight);
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = Math.max(size / 2 - 10, 10); // Ensure radius is at least 10
    const anglePerSegment = (2 * Math.PI) / entries.length;

    // Clear canvas
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    // Only draw if radius is large enough
    if (radius < 20) return;

    // Draw outer rim for realistic look
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 6, 0, 2 * Math.PI);
    ctx.fillStyle = "#4a5568";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 3, 0, 2 * Math.PI);
    ctx.fillStyle = "#718096";
    ctx.fill();

    // Draw wheel segments - start from top (-π/2) to match arrow
    entries.forEach((entry, index) => {
      const startAngle = index * anglePerSegment + rotation - Math.PI / 2;
      const endAngle = (index + 1) * anglePerSegment + rotation - Math.PI / 2;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      // Create gradient for depth
      const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.2, centerX, centerY, radius);
      gradient.addColorStop(0, entry.color);
      gradient.addColorStop(1, entry.color + 'CC');
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw text - properly centered in each segment
      ctx.save();
      ctx.translate(centerX, centerY);

      // Rotate to the middle of the segment
      const middleAngle = startAngle + anglePerSegment / 2;
      ctx.rotate(middleAngle);

      // Much smaller desktop font sizing
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const fontSize = isMobile
        ? (entries.length > 8 ? Math.max(8, radius / 14) : Math.max(10, radius / 12))
        : (entries.length > 8 ? Math.max(8, radius / 13) : Math.max(9, radius / 11));

      ctx.font = `bold ${fontSize}px Inter, Arial, sans-serif`;
      ctx.fillStyle = "#1e293b";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Position text at 65% of radius from center
      const textRadius = radius * 0.65;

      // Truncate text if too long based on number of entries
      const maxLength = entries.length > 12 ? 8 : entries.length > 8 ? 10 : 12;
      const text = entry.label.length > maxLength
        ? entry.label.substring(0, maxLength - 2) + "..."
        : entry.label;

      // Add text shadow for better readability
      ctx.shadowColor = "rgba(255, 255, 255, 0.7)";
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // Text points outward along the radius (horizontal orientation)
      ctx.fillText(text, textRadius, 0);

      ctx.shadowBlur = 0;
      ctx.restore();
    });

    // Draw center hub without black border
    const hubGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 45);
    hubGradient.addColorStop(0, "#f7fafc");
    hubGradient.addColorStop(0.6, "#e2e8f0");
    hubGradient.addColorStop(1, "#cbd5e0");

    ctx.beginPath();
    ctx.arc(centerX, centerY, 45, 0, 2 * Math.PI);
    ctx.fillStyle = hubGradient;
    ctx.fill();

    // Draw realistic arrow without black outline
    const arrowSize = 28;
    const arrowY = 8;
    ctx.save();
    ctx.translate(centerX, arrowY);

    // Arrow shadow
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 3;

    // Arrow gradient
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
  }, [entries, rotation, selectedIndex, isSpinning, canvasSize]);

  const handleSpin = () => {
    if (entries.length === 0 || isSpinning) return;

    if (onSpinRequest) {
      onSpinRequest();
    } else {
      const anglePerSegment = (2 * Math.PI) / entries.length;
      const randomIndex = Math.floor(Math.random() * entries.length);
      const result = entries[randomIndex].label;
      const resultIndex = randomIndex;

      const offset = (Math.random() * 0.4 - 0.2) * anglePerSegment;
      const targetRotation = -(resultIndex * anglePerSegment + anglePerSegment / 2 + offset);

      const spins = 5;
      const totalRotation = targetRotation - (spins * 2 * Math.PI);

      let currentRotation = rotation;
      const startTime = Date.now();
      const duration = 3000;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOut = 1 - Math.pow(1 - progress, 3);

        currentRotation = rotation + (totalRotation * easeOut);
        setRotation(currentRotation);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          let finalRotation = currentRotation;
          let normalizedRotation = (-finalRotation) % (2 * Math.PI);
          if (normalizedRotation < 0) normalizedRotation += 2 * Math.PI;
          const detectedIndex = Math.floor(normalizedRotation / anglePerSegment) % entries.length;

          setSelectedIndex(detectedIndex);
          onResult(entries[detectedIndex].label);
        }
      };

      animate();
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
      {/* Wheel Container - Reduced Desktop Size */}
      <div className="relative w-full max-w-[450px] aspect-square">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
        />

        {/* Centered Play Button */}
        <button
          onClick={handleSpin}
          disabled={isSpinning || entries.length === 0}
          className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-xl border-4 border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-110 active:scale-95 z-10"
          aria-label="Spin the wheel"
        >
          {isSpinning ? (
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <FiPlay className="text-4xl text-blue-600 ml-1" />
          )}
        </button>
      </div>
    </div>
  );
}
