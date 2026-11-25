"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Wheel from "@/components/Wheel";
import { WheelEntry } from "@/lib/types";
import { decodeWheelFromShare, generateDefaultColors, generateEntryId } from "@/lib/wheel-utils";
import { useSoundEffects } from "@/lib/useSoundEffects";
import { trackEvent } from "@/lib/analytics";
import { FiDisc, FiVolume2, FiVolumeX, FiRotateCcw } from "react-icons/fi";
import { IoTrophyOutline } from "react-icons/io5";

const DEFAULT_EMBED_ENTRIES: WheelEntry[] = [
  { id: "1", label: "Alice", color: "#3b82f6" },
  { id: "2", label: "Bob", color: "#ef4444" },
  { id: "3", label: "Charlie", color: "#10b981" },
  { id: "4", label: "Diana", color: "#f59e0b" },
  { id: "5", label: "Eve", color: "#8b5cf6" },
];

export default function EmbedWheelPage() {
  const [entries, setEntries] = useState<WheelEntry[]>(DEFAULT_EMBED_ENTRIES);
  const [wheelName, setWheelName] = useState<string>("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [obsMode, setObsMode] = useState(false);

  const { isMuted, toggleMute, playTick, playWinFanfare, playClick } = useSoundEffects();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);

    const shareParam = params.get("share");
    const entriesParam = params.get("entries");
    const titleParam = params.get("title");
    const themeParam = params.get("theme");
    const obsParam = params.get("obs");

    const isObs = obsParam === "1" || obsParam === "true";
    setObsMode(isObs);
    setDarkMode(themeParam === "dark" || isObs);

    if (shareParam) {
      const decoded = decodeWheelFromShare(shareParam);
      if (decoded && decoded.entries.length > 0) {
        setEntries(decoded.entries);
        if (decoded.wheelName) setWheelName(decoded.wheelName);
      }
    } else if (entriesParam) {
      const labels = entriesParam
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      if (labels.length > 0) {
        const colors = generateDefaultColors(labels.length);
        setEntries(
          labels.map((label, idx) => ({
            id: generateEntryId(),
            label,
            color: colors[idx % colors.length],
          }))
        );
      }
    }

    if (titleParam) setWheelName(titleParam);
    trackEvent("embed_view", { obs: isObs, dark: themeParam === "dark" });
  }, []);

  const handleSpin = () => {
    if (entries.length === 0 || isSpinning) return;
    playClick();
    setResult(null);
    setIsSpinning(true);
  };

  const handleSegmentTick = useCallback(() => {
    playTick();
  }, [playTick]);

  const handleResult = (winner: string) => {
    setResult(winner);
    setIsSpinning(false);
    playWinFanfare();
    trackEvent("wheel_spin", { mode: obsMode ? "obs" : "embed", entry_count: entries.length });
  };

  const bgClass = obsMode
    ? "bg-transparent text-white"
    : darkMode
      ? "bg-slate-950 text-white"
      : "bg-white text-gray-900";

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center p-3 sm:p-5 ${bgClass}`}>
      {wheelName && (
        <h1 className="text-base sm:text-xl font-bold mb-2 text-center tracking-tight">
          {wheelName}
        </h1>
      )}

      <div className="w-full max-w-[440px]">
        <Wheel
          entries={entries}
          onResult={handleResult}
          isSpinning={isSpinning}
          result={result}
          showButton={false}
          onSpinRequest={handleSpin}
          onSegmentTick={handleSegmentTick}
          darkMode={darkMode}
        />
      </div>

      {/* Result & Compact Action Row */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2.5">
        <button
          type="button"
          onClick={handleSpin}
          disabled={entries.length === 0 || isSpinning}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold shadow-md hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 flex items-center gap-2 cursor-pointer"
        >
          <FiDisc className={isSpinning ? "animate-spin" : ""} />
          <span>{isSpinning ? "Spinning..." : "Spin"}</span>
        </button>

        <button
          type="button"
          onClick={toggleMute}
          className={`min-w-[38px] min-h-[38px] inline-flex items-center justify-center rounded-xl border cursor-pointer transition-colors ${
            darkMode
              ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
              : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
          }`}
          aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
        >
          {isMuted ? <FiVolumeX /> : <FiVolume2 className="text-blue-500" />}
        </button>

        {result && (
          <button
            type="button"
            onClick={() => setResult(null)}
            className={`min-w-[38px] min-h-[38px] px-3 rounded-xl border text-xs font-semibold flex items-center gap-1 cursor-pointer ${
              darkMode
                ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
                : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FiRotateCcw /> Clear
          </button>
        )}
      </div>

      {result && (
        <div
          className={`mt-3 px-4 py-2.5 rounded-xl border flex items-center gap-2 shadow-sm ${
            darkMode
              ? "bg-slate-900/90 border-blue-500/50 text-white"
              : "bg-blue-50 border-blue-200 text-blue-950"
          }`}
          role="status"
          aria-live="polite"
        >
          <IoTrophyOutline className="text-lg text-amber-500 flex-shrink-0" />
          <span className="text-sm font-bold">Winner: {result}</span>
        </div>
      )}

      {!obsMode && (
        <div className="mt-4 text-center">
          <Link
            href="/shareable-wheels"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[11px] font-medium hover:underline ${
              darkMode ? "text-slate-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Powered by SpinPickOnline.com
          </Link>
        </div>
      )}
    </div>
  );
}
