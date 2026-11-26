"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { WheelEntry } from "@/lib/types";
import Wheel from "@/components/Wheel";
import AdSenseDisplay from "@/components/AdSenseDisplay";
import Toast from "@/components/Toast";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSoundEffects } from "@/lib/useSoundEffects";
import { useSavedWheelsEvents } from "@/lib/useSavedWheelsEvents";
import { trackEvent } from "@/lib/analytics";
import { WHEEL_UI_LOCALES, WheelUILabels } from "@/lib/wheel-locales";
import {
  generateEntryId,
  generateDefaultColors,
  generateShareUrl,
  generateEmbedUrl,
  decodeWheelFromShare,
  shuffleArraySecure,
  getEntryWeight,
  saveWheelById,
  generateWheelId,
  copyToClipboard,
} from "@/lib/wheel-utils";
import {
  FiShuffle,
  FiList,
  FiRotateCcw,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiCheckCircle,
  FiX,
  FiArrowRight,
  FiArrowUp,
  FiArrowDown,
  FiShare2,
  FiVolume2,
  FiVolumeX,
  FiClipboard,
  FiBarChart2,
  FiDisc,
  FiMaximize2,
  FiMinimize2,
  FiMoon,
  FiSun,
  FiSave,
  FiFileText,
  FiCopy,
} from "react-icons/fi";
import { IoTrophyOutline, IoRocketOutline } from "react-icons/io5";

const ResultModal = dynamic(() => import("@/components/ResultModal"), { ssr: false });
const Confetti = dynamic(() => import("@/components/Confetti"), { ssr: false });
const ConfirmationModal = dynamic(() => import("@/components/ConfirmationModal"), { ssr: false });
const BulkAddModal = dynamic(() => import("@/components/BulkAddModal"), { ssr: false });
const ShareModal = dynamic(() => import("@/components/ShareModal"), { ssr: false });

const DEFAULT_ENTRIES: WheelEntry[] = [
  { id: "1", label: "Alice", color: "#3b82f6" },
  { id: "2", label: "Bob", color: "#ef4444" },
  { id: "3", label: "Charlie", color: "#10b981" },
  { id: "4", label: "Diana", color: "#f59e0b" },
  { id: "5", label: "Eve", color: "#8b5cf6" },
];

const WEIGHT_STEPS = [1, 2, 3, 5] as const;

export interface WheelPresetMode {
  id: string;
  label: string;
  entries: WheelEntry[];
}

export interface HomeWheelProps {
  defaultEntries?: WheelEntry[];
  storageKey?: string;
  disableStorage?: boolean;
  showAd?: boolean;
  showWheelNameInput?: boolean;
  showClearAll?: boolean;
  showFullEditorLink?: boolean;
  shareTargetPath?: string;
  locale?: keyof typeof WHEEL_UI_LOCALES;
  presetModes?: WheelPresetMode[];
  showColorHexCopy?: boolean;
}

function formatEntriesAsText(entries: WheelEntry[]): string {
  return entries
    .map((e) => {
      const w = getEntryWeight(e);
      return w > 1 ? `${e.label} *${w}` : e.label;
    })
    .join("\n");
}

function parseTextToEntries(text: string, existingEntries: WheelEntry[]): WheelEntry[] {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
  const colors = generateDefaultColors(Math.max(lines.length, 1));

  return lines.map((line, index) => {
    const match = line.match(/^(.*?)\s*\*(\d+)$/);
    const rawLabel = match ? match[1].trim() : line;
    const weight = match ? Math.min(100, Math.max(1, parseInt(match[2], 10))) : 1;
    const preservedColor = existingEntries[index]?.color || colors[index % colors.length];
    return {
      id: existingEntries[index]?.id || generateEntryId(),
      label: rawLabel || line,
      color: preservedColor,
      ...(weight > 1 ? { weight } : {}),
    };
  });
}

export default function HomeWheel({
  defaultEntries,
  storageKey = "homeWheelState",
  disableStorage = false,
  showAd = true,
  showWheelNameInput = false,
  showClearAll = false,
  showFullEditorLink = true,
  shareTargetPath,
  locale = "en",
  presetModes,
  showColorHexCopy = false,
}: HomeWheelProps = {}) {
  const ui: WheelUILabels = WHEEL_UI_LOCALES[locale] || WHEEL_UI_LOCALES.en;
  const initialEntries = defaultEntries || DEFAULT_ENTRIES;

  const [entries, setEntries] = useState<WheelEntry[]>(initialEntries);
  const [wheelName, setWheelName] = useState("");
  const [newEntry, setNewEntry] = useState("");
  const [inputMode, setInputMode] = useState<"list" | "text">("list");
  const [rawText, setRawText] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [results, setResults] = useState<string[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [activeTab, setActiveTab] = useState<"entries" | "results">("entries");
  const [showModal, setShowModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [embedUrl, setEmbedUrl] = useState("");
  const [obsUrl, setObsUrl] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [newlyAddedId, setNewlyAddedId] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(null);
  const [darkStage, setDarkStage] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [savePromptOpen, setSavePromptOpen] = useState(false);
  const [quickSaveName, setQuickSaveName] = useState("");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: "",
    message: "",
    onConfirm: () => {},
  });

  const { isMuted, toggleMute, playTick, playWinFanfare, playClick } = useSoundEffects();
  const newEntryTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // Sync ?share= param or localStorage on client mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const shareData = params.get("share");
    if (shareData) {
      const decoded = decodeWheelFromShare(shareData);
      if (decoded && decoded.entries.length > 0) {
        setEntries(decoded.entries);
        if (decoded.wheelName) setWheelName(decoded.wheelName);
        if (decoded.results && decoded.results.length > 0) {
          setResults(decoded.results);
          setResult(decoded.results[decoded.results.length - 1]);
        }
        setToast({ message: "Shared wheel loaded!", type: "success" });
        return;
      }
    }

    if (disableStorage) return;

    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.entries) && parsed.entries.length > 0) {
          setEntries(parsed.entries);
        }
        if (Array.isArray(parsed.results) && parsed.results.length > 0) {
          setResults(parsed.results);
        }
        if (typeof parsed.wheelName === "string") {
          setWheelName(parsed.wheelName);
        }
      }
    } catch (e) {
      console.error("Failed to load wheel state:", e);
    }
  }, [storageKey, disableStorage]);

  // Persist wheel state to localStorage
  useEffect(() => {
    if (typeof window === "undefined" || entries.length === 0 || disableStorage) return;

    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ entries, results, ...(wheelName ? { wheelName } : {}) })
      );
    } catch (e) {
      console.error("Failed to save wheel state:", e);
    }
  }, [entries, results, wheelName, storageKey, disableStorage]);

  useEffect(() => {
    return () => {
      if (newEntryTimeoutRef.current) clearTimeout(newEntryTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleFsChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  useSavedWheelsEvents({
    entries,
    results,
    setEntries,
    setResults,
    setResult,
    setWheelName,
    setToast,
  });

  const totalWeight = useMemo(
    () => entries.reduce((sum, entry) => sum + getEntryWeight(entry), 0),
    [entries]
  );
  const hasCustomWeights = useMemo(
    () => entries.some((e) => getEntryWeight(e) > 1),
    [entries]
  );

  const shareWheel = () => {
    playClick();
    const url = generateShareUrl(entries, wheelName || undefined, results, shareTargetPath);
    if (!url) {
      setToast({ message: "Failed to generate share link", type: "error" });
      return;
    }
    setShareUrl(url);
    setEmbedUrl(generateEmbedUrl(entries, { wheelName: wheelName || undefined, darkMode: darkStage }));
    setObsUrl(generateEmbedUrl(entries, { wheelName: wheelName || undefined, darkMode: true, obsOverlay: true }));
    setShowShareModal(true);
    trackEvent("wheel_share_open", { entry_count: entries.length });
  };

  const addEntry = () => {
    const trimmed = newEntry.trim();
    if (!trimmed) return;

    playClick();
    const colors = generateDefaultColors(entries.length + 1);
    const newId = generateEntryId();
    const newEntries: WheelEntry[] = [
      ...entries,
      {
        id: newId,
        label: trimmed,
        color: colors[entries.length % colors.length],
      },
    ];

    setEntries(newEntries);
    setNewEntry("");
    setNewlyAddedId(newId);

    if (newEntryTimeoutRef.current) clearTimeout(newEntryTimeoutRef.current);
    newEntryTimeoutRef.current = setTimeout(() => setNewlyAddedId(null), 400);
  };

  const handleBulkAdd = (newLabels: string[]) => {
    const cleaned = newLabels.map((l) => l.trim()).filter((l) => l.length > 0);
    if (cleaned.length === 0) {
      setToast({ message: "Please enter at least one entry!", type: "info" });
      return;
    }

    playClick();
    const palette = generateDefaultColors(entries.length + cleaned.length);
    const addedEntries: WheelEntry[] = cleaned.map((label, index) => ({
      id: generateEntryId(),
      label,
      color: palette[entries.length + index] || "#3b82f6",
    }));

    setEntries([...entries, ...addedEntries]);
    trackEvent("entry_bulk_add", { added_count: cleaned.length, entry_count: entries.length + cleaned.length });
    setToast({ message: `Added ${cleaned.length} entries!`, type: "success" });
  };

  const toggleInputMode = (nextMode: "list" | "text") => {
    playClick();
    if (nextMode === "text") {
      setRawText(formatEntriesAsText(entries));
    }
    setInputMode(nextMode);
  };

  const handleTextareaChange = (nextText: string) => {
    setRawText(nextText);
    const parsed = parseTextToEntries(nextText, entries);
    if (parsed.length > 0) {
      setEntries(parsed);
    }
  };

  const cycleEntryWeight = (index: number) => {
    playClick();
    const updated = [...entries];
    const current = getEntryWeight(updated[index]);
    const currentStepIdx = WEIGHT_STEPS.indexOf(current as (typeof WEIGHT_STEPS)[number]);
    const nextWeight = WEIGHT_STEPS[(currentStepIdx + 1) % WEIGHT_STEPS.length];
    updated[index] = {
      ...updated[index],
      weight: nextWeight === 1 ? undefined : nextWeight,
    };
    setEntries(updated);
  };

  const removeEntry = (id: string) => {
    playClick();
    const target = entries.find((e) => e.id === id);
    setEntries(entries.filter((e) => e.id !== id));
    if (result && target?.label === result) {
      setResult(null);
    }
  };

  const shuffleEntries = () => {
    playClick();
    setEntries(shuffleArraySecure(entries));
  };

  const sortEntries = () => {
    playClick();
    const nextDir = sortDirection === "asc" ? "desc" : "asc";
    const sorted = [...entries].sort((a, b) =>
      nextDir === "asc" ? a.label.localeCompare(b.label) : b.label.localeCompare(a.label)
    );
    setEntries(sorted);
    setSortDirection(nextDir);
  };

  const startEdit = (index: number) => {
    setEditingIndex(index);
    setEditValue(entries[index].label);
  };

  const updateEntryColor = (index: number, color: string) => {
    const updated = [...entries];
    updated[index] = { ...updated[index], color };
    setEntries(updated);
  };

  const saveEdit = () => {
    if (editingIndex === null) return;
    const trimmed = editValue.trim();
    if (!trimmed) return;

    playClick();
    const updatedEntries = [...entries];
    updatedEntries[editingIndex] = { ...updatedEntries[editingIndex], label: trimmed };
    setEntries(updatedEntries);
    setEditingIndex(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditValue("");
  };

  const handleSegmentTick = useCallback(() => {
    playTick();
  }, [playTick]);

  const handleResult = (wheelResult: string) => {
    setResult(wheelResult);
    setResults((prev) => [...prev, wheelResult]);
    setIsSpinning(false);
    setShowConfetti(true);
    setShowModal(true);
    playWinFanfare();
    trackEvent("wheel_spin", {
      entry_count: entries.length,
      weighted: hasCustomWeights,
      fullscreen: isFullscreen,
    });

    setTimeout(() => setShowConfetti(false), 4000);
  };

  const handleSpin = () => {
    if (entries.length === 0) {
      setToast({ message: "Please add at least one entry!", type: "error" });
      return;
    }
    if (isSpinning) return;
    playClick();
    setResult(null);
    setShowConfetti(false);
    setIsSpinning(true);
  };

  const handleContinue = () => {
    setShowModal(false);
    setResult(null);
  };

  const handleRemoveAndContinue = () => {
    if (!result) return;
    const entryToRemove = entries.find((e) => e.label === result);
    const remainingCount = entryToRemove ? entries.length - 1 : entries.length;
    if (entryToRemove) {
      removeEntry(entryToRemove.id);
    }
    setShowModal(false);
    setResult(null);
    if (remainingCount > 1) {
      setTimeout(() => {
        setIsSpinning(true);
      }, 300);
    }
  };

  const toggleFullscreen = async () => {
    playClick();
    const nextState = !isFullscreen;
    setIsFullscreen(nextState);
    trackEvent("fullscreen_toggle", { enabled: nextState });

    try {
      if (nextState && stageRef.current?.requestFullscreen) {
        await stageRef.current.requestFullscreen();
      } else if (!nextState && document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch {
      // Fallback CSS fixed overlay handles fullscreen seamlessly on iOS Safari
    }
  };

  const applyPresetMode = (mode: WheelPresetMode) => {
    playClick();
    setEntries(mode.entries);
    setResult(null);
    if (inputMode === "text") {
      setRawText(formatEntriesAsText(mode.entries));
    }
    trackEvent("preset_select", { preset_id: mode.id, entry_count: mode.entries.length });
    setToast({ message: `Loaded "${mode.label}"`, type: "info" });
  };

  const handleQuickSaveOpen = () => {
    setShowModal(false);
    setQuickSaveName(wheelName.trim() || `My Wheel (${entries.length})`);
    setSavePromptOpen(true);
  };

  const handleConfirmQuickSave = () => {
    const trimmed = quickSaveName.trim() || `Saved Wheel (${entries.length})`;
    const saved = saveWheelById({
      id: generateWheelId(),
      name: trimmed,
      entries,
      results,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    if (saved) {
      window.dispatchEvent(new Event("wheelsUpdated"));
      trackEvent("wheel_save", { entry_count: entries.length });
      setSavePromptOpen(false);
      setToast({ message: `Saved "${trimmed}" to My Saved Wheels!`, type: "success" });
    } else {
      setToast({ message: "Maximum 10 saved wheels reached. Delete one from Save menu.", type: "error" });
    }
  };

  const clearAll = () => {
    setConfirmModal({
      isOpen: true,
      title: ui.clearAll,
      message: "Are you sure you want to clear all current entries?",
      onConfirm: () => {
        setEntries([]);
        setRawText("");
        setResult(null);
        setResults([]);
        setWheelName("");
        if (typeof window !== "undefined" && !disableStorage) {
          localStorage.removeItem(storageKey);
        }
        setConfirmModal((prev) => ({ ...prev, isOpen: false }));
        setToast({ message: "All entries cleared!", type: "info" });
      },
    });
  };

  const resetToDefault = () => {
    playClick();
    setConfirmModal({
      isOpen: true,
      title: ui.reset,
      message: "Reset all entries back to the default wheel options? This clears your current list.",
      onConfirm: () => {
        setEntries(initialEntries);
        setRawText(formatEntriesAsText(initialEntries));
        setResult(null);
        setResults([]);
        setWheelName("");
        setConfirmModal((prev) => ({ ...prev, isOpen: false }));
        setToast({ message: "Wheel reset to default!", type: "info" });
      },
    });
  };

  const winningColor = useMemo(() => {
    if (!result || !showColorHexCopy) return null;
    return entries.find((e) => e.label === result)?.color || null;
  }, [entries, result, showColorHexCopy]);

  return (
    <div className="w-full mx-auto">
      <Confetti isActive={showConfetti} />

      {/* Optional Tool Preset Pills (e.g. Alphabet, Number Ranges, Color Palettes) */}
      {presetModes && presetModes.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
          {presetModes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => applyPresetMode(mode)}
              className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-white border border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-all shadow-xs cursor-pointer"
            >
              {mode.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr] gap-4 sm:gap-6 md:gap-10 lg:gap-16 items-start">
        {/* Left: Interactive Wheel Stage */}
        <div className="flex flex-col items-center justify-start">
          <div
            ref={stageRef}
            className={`relative w-full transition-colors ${
              isFullscreen
                ? `fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-8 overflow-y-auto ${
                    darkStage ? "bg-slate-950 text-white" : "bg-white text-gray-900"
                  }`
                : `max-w-3xl rounded-2xl p-2 sm:p-4 ${darkStage ? "bg-slate-900 text-white shadow-xl" : ""}`
            }`}
          >
            {/* Stage Utility Controls: Dark Projector & Fullscreen */}
            <div className="flex items-center justify-end gap-2 mb-2 w-full">
              <button
                type="button"
                onClick={() => { setDarkStage((v) => !v); playClick(); }}
                className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border ${
                  darkStage
                    ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
                aria-label={darkStage ? ui.lightTheme : ui.darkTheme}
                title={darkStage ? ui.lightTheme : ui.darkTheme}
              >
                {darkStage ? <FiSun className="text-sm text-amber-400" /> : <FiMoon className="text-sm text-slate-600" />}
                <span>{darkStage ? ui.lightTheme : ui.darkTheme}</span>
              </button>
              <button
                type="button"
                onClick={toggleFullscreen}
                className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border ${
                  darkStage
                    ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
                aria-label={isFullscreen ? ui.exitFullscreen : ui.fullscreen}
                title={isFullscreen ? ui.exitFullscreen : ui.fullscreen}
              >
                {isFullscreen ? <FiMinimize2 className="text-sm" /> : <FiMaximize2 className="text-sm" />}
                <span>{isFullscreen ? ui.exitFullscreen : ui.fullscreen}</span>
              </button>
            </div>

            {entries.length > 0 ? (
              <Wheel
                entries={entries}
                onResult={handleResult}
                isSpinning={isSpinning}
                result={result}
                showButton={false}
                onSpinRequest={handleSpin}
                onSegmentTick={handleSegmentTick}
                darkMode={darkStage}
              />
            ) : (
              <div className="w-full max-w-[450px] aspect-square mx-auto flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50">
                <FiDisc className="text-6xl text-gray-400 mb-3" />
                <p className="text-gray-700 text-base font-semibold">No entries yet</p>
                <p className="text-gray-500 text-sm">Add items in the panel to spin</p>
              </div>
            )}

            {isFullscreen && (
              <div className="mt-5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleSpin}
                  disabled={entries.length === 0 || isSpinning}
                  className="px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 cursor-pointer disabled:opacity-50"
                >
                  {isSpinning ? ui.spinningBtn : ui.spinBtn}
                </button>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="px-5 py-3 bg-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-300 cursor-pointer"
                >
                  {ui.exitFullscreen}
                </button>
              </div>
            )}
          </div>

          {/* Color Hex Quick-Copy Banner for Color Wheel Spinner */}
          {showColorHexCopy && winningColor && result && (
            <div className="mt-4 flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-gray-200 shadow-sm">
              <span
                className="w-6 h-6 rounded-md border border-gray-300"
                style={{ backgroundColor: winningColor }}
              />
              <span className="text-sm font-semibold text-gray-800">{result}</span>
              <code className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-700">{winningColor}</code>
              <button
                type="button"
                onClick={async () => {
                  await copyToClipboard(winningColor);
                  setToast({ message: `Copied ${winningColor}`, type: "success" });
                }}
                className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer"
              >
                <FiCopy className="text-xs" /> Copy HEX
              </button>
            </div>
          )}

          {/* Bounded Below-Wheel AdSense Slot (Desktop only — hidden on mobile below wheel) */}
          {showAd && (
            <div className="hidden lg:block w-full max-w-2xl mt-5">
              <AdSenseDisplay slotId="6084518347" />
            </div>
          )}
        </div>

        {/* Right: Enhanced Control Panel */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden sticky top-4">
          {/* Tabs with visible sound toggle */}
          <div className="toggle-btn flex border-b-2 border-gray-100 bg-linear-to-r from-blue-50 to-purple-50">
            <button
              type="button"
              onClick={() => { setActiveTab("entries"); playClick(); }}
              className={`flex-1 sm:px-6 px-4 py-4 cursor-pointer text-sm font-semibold transition-all relative ${
                activeTab === "entries" ? "text-blue-700" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <FiClipboard className="text-lg" />
                <span>{ui.entriesTab} ({entries.length})</span>
              </div>
              {activeTab === "entries" && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-purple-600"></div>
              )}
            </button>

            <button
              type="button"
              onClick={() => { setActiveTab("results"); playClick(); }}
              className={`flex-1 sm:px-6 px-4 py-4 cursor-pointer text-sm font-semibold transition-all relative ${
                activeTab === "results" ? "text-blue-700" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <IoTrophyOutline className="text-lg" />
                <span>{ui.resultsTab} ({results.length})</span>
              </div>
              {activeTab === "results" && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-purple-600"></div>
              )}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="sound-btn min-w-[44px] min-h-[44px] px-3 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors flex items-center justify-center"
              aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
              title={isMuted ? "Turn on sounds" : "Mute sounds"}
            >
              {isMuted ? (
                <FiVolumeX className="text-lg" />
              ) : (
                <FiVolume2 className="text-lg text-blue-600" />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="lg:p-6 p-4 pb-16 sm:pb-6">
            {activeTab === "entries" ? (
              <div className="lg:space-y-4 space-y-3.5">
                {showWheelNameInput && (
                  <div>
                    <label
                      htmlFor={`${storageKey}-wheelName`}
                      className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2"
                    >
                      <FiEdit2 className="text-base text-blue-600" />
                      <span>{ui.wheelNameLabel}</span>
                    </label>
                    <input
                      id={`${storageKey}-wheelName`}
                      name="wheelName"
                      type="text"
                      value={wheelName}
                      onChange={(e) => setWheelName(e.target.value)}
                      placeholder={ui.wheelNamePlaceholder}
                      className="w-full px-3.5 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-400 transition-all"
                    />
                  </div>
                )}

                {/* Action Toolbar + Inline List/Text Switch */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={shuffleEntries}
                      className="flex cursor-pointer items-center gap-1.5 px-3 py-2 text-xs sm:text-sm bg-linear-to-r from-blue-50 to-blue-100 text-blue-700 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all font-medium border border-blue-200 active:scale-95"
                      title={ui.shuffle}
                    >
                      <FiShuffle className="text-sm flex-shrink-0" />
                      <span>{ui.shuffle}</span>
                    </button>
                    <button
                      type="button"
                      onClick={sortEntries}
                      className={`flex cursor-pointer items-center gap-1.5 px-3 py-2 text-xs sm:text-sm bg-linear-to-r from-purple-50 to-purple-100 text-purple-700 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all font-medium border active:scale-95 ${
                        sortDirection ? "border-purple-400 ring-2 ring-purple-200" : "border-purple-200"
                      }`}
                      title={sortDirection === "asc" ? ui.sortDesc : ui.sortAsc}
                    >
                      {sortDirection === "asc" ? (
                        <FiArrowDown className="text-sm flex-shrink-0" />
                      ) : (
                        <FiArrowUp className="text-sm flex-shrink-0" />
                      )}
                      <span>{sortDirection === "asc" ? ui.sortDesc : ui.sortAsc}</span>
                    </button>
                    <button
                      type="button"
                      onClick={resetToDefault}
                      className="flex cursor-pointer items-center gap-1.5 px-3 py-2 text-xs sm:text-sm bg-linear-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg hover:from-gray-100 hover:to-gray-200 transition-all font-medium border border-gray-200 active:scale-95"
                      title={ui.reset}
                    >
                      <FiRotateCcw className="text-sm flex-shrink-0" />
                      <span className="hidden sm:inline">{ui.reset}</span>
                    </button>
                  </div>

                  {/* Quick Mode Toggle: Row List vs Instant Paste Textarea */}
                  <div className="inline-flex rounded-lg bg-gray-100 p-0.5 border border-gray-200">
                    <button
                      type="button"
                      onClick={() => toggleInputMode("list")}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors ${
                        inputMode === "list" ? "bg-white text-blue-700 shadow-xs" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <FiList className="text-xs" /> {ui.listMode}
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleInputMode("text")}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors ${
                        inputMode === "text" ? "bg-white text-blue-700 shadow-xs" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <FiFileText className="text-xs" /> {ui.textMode}
                    </button>
                  </div>
                </div>

                {inputMode === "text" ? (
                  <div>
                    <label
                      htmlFor={`${storageKey}-multiline`}
                      className="block text-xs font-semibold text-gray-700 mb-1.5"
                    >
                      {ui.pasteHint}
                    </label>
                    <textarea
                      id={`${storageKey}-multiline`}
                      name="bulkEntries"
                      value={rawText}
                      onChange={(e) => handleTextareaChange(e.target.value)}
                      rows={9}
                      placeholder={"Alice\nBob *2\nCharlie\nDiana"}
                      className="w-full px-3.5 py-2.5 text-sm border-2 border-blue-200 rounded-xl focus:border-blue-500 font-mono leading-relaxed bg-gray-50/50"
                    />
                  </div>
                ) : (
                  <>
                    {/* Single Entry Input + Bulk Add Trigger */}
                    <div className="bg-linear-to-r from-blue-50 to-purple-50 sm:p-4 p-3 rounded-xl border-2 border-blue-100">
                      <div className="flex items-center justify-between mb-2">
                        <label
                          htmlFor={`${storageKey}-newEntry`}
                          className="block text-sm font-semibold text-gray-700 flex items-center gap-2"
                        >
                          <FiPlus className="text-base text-blue-600" />
                          <span>{ui.addNewEntry}</span>
                        </label>
                        <button
                          type="button"
                          onClick={() => { setShowBulkModal(true); playClick(); }}
                          className="text-xs font-semibold text-blue-700 hover:text-blue-900 hover:bg-blue-100 px-2.5 py-1 rounded transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <FiList className="text-xs" />
                          {ui.bulkAdd}
                        </button>
                      </div>
                      <div className="flex gap-2">
                        <input
                          id={`${storageKey}-newEntry`}
                          name="newEntry"
                          type="text"
                          value={newEntry}
                          onChange={(e) => setNewEntry(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && addEntry()}
                          placeholder={ui.placeholder}
                          className="flex-1 w-full sm:px-4 px-3 sm:py-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-400 transition-all bg-white"
                        />
                        <button
                          type="button"
                          onClick={addEntry}
                          className="sm:px-6 px-3 py-2 sm:py-3 cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-semibold shadow-md hover:shadow-lg active:scale-95"
                        >
                          {ui.addBtn}
                        </button>
                      </div>
                    </div>

                    {/* Entries List (WCAG-compliant touch targets & contrast) */}
                    {entries.length > 0 && (
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <FiList className="text-base text-blue-600" />
                            <span>{ui.yourEntries}</span>
                          </h2>
                          <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full">
                            {ui.itemsCount(entries.length)}
                          </span>
                        </div>
                        <div className="max-h-72 overflow-y-auto space-y-2 pe-1 custom-scrollbar">
                          {entries.map((entry, index) => {
                            const w = getEntryWeight(entry);
                            const pct = totalWeight > 0 ? Math.round((w / totalWeight) * 100) : 0;
                            return (
                              <div
                                key={entry.id}
                                className={`flex items-center justify-between last:pb-0 pb-2 border-b border-gray-200 last:border-b-0 ${
                                  newlyAddedId === entry.id ? "animate-bounce-in" : ""
                                }`}
                              >
                                {editingIndex === index ? (
                                  <div className="flex items-center gap-2 flex-1">
                                    <input
                                      type="color"
                                      value={entry.color}
                                      onChange={(e) => updateEntryColor(index, e.target.value)}
                                      className="w-7 h-7 rounded-sm border border-gray-300 cursor-pointer px-0.5 flex-shrink-0"
                                      title="Change color"
                                      aria-label={`Color for ${entry.label}`}
                                    />
                                    <input
                                      type="text"
                                      value={editValue}
                                      onChange={(e) => setEditValue(e.target.value)}
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter") saveEdit();
                                        if (e.key === "Escape") cancelEdit();
                                      }}
                                      className="flex-1 px-3 py-2 text-sm border-2 border-blue-300 rounded-lg w-full"
                                      aria-label={`Edit ${entry.label}`}
                                      autoFocus
                                    />
                                    <button
                                      type="button"
                                      onClick={saveEdit}
                                      className="min-w-[36px] min-h-[36px] p-2 cursor-pointer bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                      title="Save"
                                      aria-label="Save entry edit"
                                    >
                                      <FiCheckCircle className="text-base" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={cancelEdit}
                                      className="min-w-[36px] min-h-[36px] p-2 cursor-pointer bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                      title="Cancel"
                                      aria-label="Cancel entry edit"
                                    >
                                      <FiX className="text-base" />
                                    </button>
                                  </div>
                                ) : (
                                  <>
                                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                                      <input
                                        type="color"
                                        value={entry.color}
                                        onChange={(e) => updateEntryColor(index, e.target.value)}
                                        className="w-6 h-6 rounded-sm border border-gray-300 cursor-pointer px-0.5 flex-shrink-0"
                                        title="Change color"
                                        aria-label={`Color for ${entry.label}`}
                                      />
                                      <span className="text-sm text-gray-900 font-medium truncate">
                                        {entry.label}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <button
                                        type="button"
                                        onClick={() => cycleEntryWeight(index)}
                                        className={`min-h-[32px] px-2 py-1 text-xs font-bold rounded-md border transition-colors cursor-pointer ${
                                          w > 1
                                            ? "bg-blue-50 text-blue-700 border-blue-300"
                                            : "bg-gray-50 text-gray-600 border-gray-200 hover:border-blue-300"
                                        }`}
                                        title="Click to adjust odds weight (1x, 2x, 3x, 5x)"
                                        aria-label={`Weight ${w}x for ${entry.label}`}
                                      >
                                        {w}x{hasCustomWeights ? ` (${pct}%)` : ""}
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => startEdit(index)}
                                        className="min-w-[36px] min-h-[36px] inline-flex items-center justify-center p-2 rounded-lg cursor-pointer text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                                        title="Edit"
                                        aria-label={`Edit ${entry.label}`}
                                      >
                                        <FiEdit2 className="text-sm" />
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => removeEntry(entry.id)}
                                        className="min-w-[36px] min-h-[36px] inline-flex items-center justify-center p-2 rounded-lg cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors"
                                        title="Remove"
                                        aria-label={`Remove ${entry.label}`}
                                      >
                                        <FiTrash2 className="text-sm" />
                                      </button>
                                    </div>
                                  </>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Spin Button */}
                <button
                  type="button"
                  onClick={handleSpin}
                  disabled={entries.length === 0 || isSpinning}
                  className="w-full cursor-pointer lg:text-lg text-sm lg:px-6 lg:py-3 px-4 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  {isSpinning ? (
                    <>
                      <FiDisc className="text-2xl animate-spin" />
                      <span>{ui.spinningBtn}</span>
                    </>
                  ) : (
                    <>
                      <FiDisc className="lg:text-2xl text-lg" />
                      <span>{ui.spinBtn}</span>
                    </>
                  )}
                </button>

                {/* Share & Quick Save Actions */}
                {entries.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={shareWheel}
                      className="w-full cursor-pointer px-4 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:from-blue-100 hover:to-purple-100 hover:border-blue-300 transition-all flex items-center justify-center gap-2 text-sm active:scale-[0.98]"
                    >
                      <FiShare2 className="text-base" />
                      <span>{ui.shareWheel}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleQuickSaveOpen}
                      className="w-full cursor-pointer px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 text-sm active:scale-[0.98]"
                    >
                      <FiSave className="text-base text-blue-600" />
                      <span>{ui.saveWheel}</span>
                    </button>
                  </div>
                )}

                {showClearAll && entries.length > 0 && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="w-full px-4 py-2.5 bg-red-50 border-2 border-red-200 text-red-700 font-semibold rounded-xl hover:bg-red-100 hover:border-red-300 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    <FiRotateCcw className="text-base" />
                    <span>{ui.clearAll}</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {result && (
                  <div className="p-5 bg-linear-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <IoTrophyOutline className="text-xl text-blue-600" />
                      <p className="text-sm font-semibold text-gray-700">{ui.latestResult}</p>
                    </div>
                    <p className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {result}
                    </p>
                  </div>
                )}
                {results.length > 0 ? (
                  <div>
                    <h2 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <FiBarChart2 className="text-base text-blue-600" />
                      <span>{ui.spinHistory}</span>
                    </h2>
                    <div className="space-y-2 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                      {results.slice().reverse().map((res, index) => (
                        <div
                          key={index}
                          className="p-4 bg-linear-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <IoTrophyOutline
                                className={`text-xl ${
                                  index === 0
                                    ? "text-yellow-500"
                                    : index === 1
                                      ? "text-gray-600"
                                      : index === 2
                                        ? "text-orange-600"
                                        : "text-blue-600"
                                }`}
                              />
                              <span className="text-base font-semibold text-gray-900">{res}</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-700 bg-white px-3 py-1 rounded-full border border-gray-200">
                              #{results.length - index}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 bg-linear-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-gray-300">
                    <FiDisc className="text-6xl text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium mb-2">{ui.noResultsTitle}</p>
                    <p className="text-sm text-gray-600">{ui.noResultsHint}</p>
                  </div>
                )}
              </div>
            )}

            {/* Inline Save Wheel Prompt */}
            {savePromptOpen && (
              <div className="mt-4 p-3.5 bg-blue-50 border border-blue-200 rounded-xl space-y-2.5">
                <label
                  htmlFor={`${storageKey}-quickSave`}
                  className="block text-xs font-semibold text-blue-900"
                >
                  Name your saved wheel list:
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    id={`${storageKey}-quickSave`}
                    type="text"
                    value={quickSaveName}
                    onChange={(e) => setQuickSaveName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleConfirmQuickSave()}
                    className="w-full min-w-0 sm:flex-1 px-3 py-2 text-sm bg-white border border-blue-300 rounded-lg"
                    autoFocus
                  />
                  <div className="flex gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={handleConfirmQuickSave}
                      className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg cursor-pointer"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setSavePromptOpen(false)}
                      className="flex-1 sm:flex-none px-3 py-2 bg-white border border-gray-300 text-gray-700 text-xs font-semibold rounded-lg cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showFullEditorLink && (
              <div className="lg:mt-5 mt-3 text-center">
                <Link
                  href="/wheel"
                  className="inline-flex items-center gap-2 lg:text-lg text-sm lg:px-6 lg:py-3 px-4 py-2.5 bg-white border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm hover:shadow-md group w-full justify-center"
                >
                  <IoRocketOutline className="text-lg" />
                  <span>{ui.openFullEditor}</span>
                  <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {result && (
        <ResultModal
          result={result}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onContinue={handleContinue}
          onRemove={handleRemoveAndContinue}
          onSaveWheel={handleQuickSaveOpen}
        />
      )}

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <ConfirmationModal
        isOpen={confirmModal.isOpen}
        title={confirmModal.title}
        message={confirmModal.message}
        onConfirm={confirmModal.onConfirm}
        onCancel={() => setConfirmModal((prev) => ({ ...prev, isOpen: false }))}
        type="warning"
      />

      <BulkAddModal
        isOpen={showBulkModal}
        onClose={() => setShowBulkModal(false)}
        onAdd={handleBulkAdd}
      />

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        shareUrl={shareUrl}
        embedUrl={embedUrl}
        obsUrl={obsUrl}
        wheelName={wheelName || undefined}
      />
    </div>
  );
}
