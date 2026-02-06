"use client";

import { useState, useEffect } from "react";
import { WheelEntry } from "@/lib/types";
import Wheel from "@/components/Wheel";
import ResultModal from "@/components/ResultModal";
import Toast from "@/components/Toast";
import ConfirmationModal from "@/components/ConfirmationModal";
import BulkAddModal from "@/components/BulkAddModal";
import {
  generateEntryId,
  generateDefaultColors,
  validateEntries,
  generateShareUrl,
  copyToClipboard
} from "@/lib/wheel-utils";
import Link from "next/link";
import {
  FiShuffle,
  FiList,
  FiRotateCcw,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiCheckCircle,
  FiX,
  FiExternalLink,
  FiArrowRight,
  FiShare2
} from "react-icons/fi";
import {
  IoTrophyOutline,
  IoSparkles,
  IoRocketOutline
} from "react-icons/io5";
import {
  BsClipboardCheck,
  BsBarChart
} from "react-icons/bs";
import { MdOutlineCasino } from "react-icons/md";

const DEFAULT_ENTRIES: WheelEntry[] = [
  { id: "1", label: "Alice", color: "#3b82f6" },
  { id: "2", label: "Bob", color: "#ef4444" },
  { id: "3", label: "Charlie", color: "#10b981" },
  { id: "4", label: "Diana", color: "#f59e0b" },
  { id: "5", label: "Eve", color: "#8b5cf6" },
];

const HOME_WHEEL_STORAGE_KEY = "homeWheelState";

interface HomeWheelProps {
  defaultEntries?: WheelEntry[];
}

export default function HomeWheel({ defaultEntries }: HomeWheelProps = {}) {
  const [entries, setEntries] = useState<WheelEntry[]>(defaultEntries || DEFAULT_ENTRIES);
  const [newEntry, setNewEntry] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [results, setResults] = useState<string[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [activeTab, setActiveTab] = useState<"entries" | "results">("entries");
  const [showModal, setShowModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
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
    onConfirm: () => { },
  });

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const saved = localStorage.getItem(HOME_WHEEL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.entries && parsed.entries.length > 0) {
          setEntries(parsed.entries);
        }
        if (parsed.results && parsed.results.length > 0) {
          setResults(parsed.results);
        }
      }
    } catch (e) {
      console.error("Failed to load home wheel state:", e);
    }
  }, []);

  // Save to localStorage whenever entries or results change
  useEffect(() => {
    if (typeof window === "undefined" || entries.length === 0) return;

    try {
      localStorage.setItem(HOME_WHEEL_STORAGE_KEY, JSON.stringify({ entries, results }));
    } catch (e) {
      console.error("Failed to save home wheel state:", e);
    }
  }, [entries, results]);

  // Share wheel function - generates live shareable link with results
  const shareWheel = async () => {
    const shareUrl = generateShareUrl(entries, undefined, results);
    if (!shareUrl) {
      setToast({ message: "Failed to generate share link", type: "error" });
      return;
    }

    const success = await copyToClipboard(shareUrl);
    if (success) {
      setToast({ message: "Share link copied to clipboard!", type: "success" });
    } else {
      setToast({ message: "Failed to copy link", type: "error" });
    }
  };


  const addEntry = () => {
    const trimmed = newEntry.trim();
    if (!trimmed) return;

    if (entries.some(e => e.label.toLowerCase() === trimmed.toLowerCase())) {
      setToast({ message: "This entry already exists!", type: "error" });
      return;
    }

    const colors = generateDefaultColors(entries.length + 1);
    const newEntries: WheelEntry[] = [
      ...entries,
      {
        id: generateEntryId(),
        label: trimmed,
        color: colors[entries.length % colors.length],
      },
    ];

    setEntries(newEntries);
    setNewEntry("");
  };

  const handleBulkAdd = (newLabels: string[]) => {
    // 1. Deduplicate the new list itself
    const uniqueInput = Array.from(new Set(newLabels.map(l => l.trim()))).filter(l => l.length > 0);

    // 2. Filter out entries that already exist in the wheel
    const uniqueNewLabels = uniqueInput.filter(
      (label) => !entries.some((e) => e.label.toLowerCase() === label.toLowerCase())
    );

    if (uniqueNewLabels.length === 0) {
      setToast({ message: "No new unique entries to add!", type: "info" });
      return;
    }

    const addedEntries = uniqueNewLabels.map((label, index) => ({
      id: generateEntryId(),
      label,
      color: generateDefaultColors(entries.length + uniqueNewLabels.length)[entries.length + index] || "#3b82f6",
    }));

    setEntries([...entries, ...addedEntries]);
    setToast({ message: `Added ${uniqueNewLabels.length} entries!`, type: "success" });
  };

  const removeEntry = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
    if (result && entries.find(e => e.id === id)?.label === result) {
      setResult(null);
    }
  };

  const shuffleEntries = () => {
    const shuffled = [...entries].sort(() => Math.random() - 0.5);
    setEntries(shuffled);
  };

  const sortEntries = () => {
    const sorted = [...entries].sort((a, b) => a.label.localeCompare(b.label));
    setEntries(sorted);
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

    const updatedEntries = [...entries];
    updatedEntries[editingIndex] = {
      ...updatedEntries[editingIndex],
      label: trimmed,
    };
    setEntries(updatedEntries);
    setEditingIndex(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditValue("");
  };

  const handleResult = (wheelResult: string) => {
    setResult(wheelResult);
    setResults([...results, wheelResult]);
    setIsSpinning(false);
    setShowModal(true);
  };

  const handleSpin = () => {
    if (entries.length === 0) {
      setToast({ message: "Please add at least one entry!", type: "error" });
      return;
    }

    // Check for duplicates
    const labels = entries.map(e => e.label.trim().toLowerCase());
    const uniqueLabels = new Set(labels);
    if (labels.length !== uniqueLabels.size) {
      setToast({ message: "Remove duplicate entries before spinning!", type: "error" });
      return;
    }

    if (isSpinning) return;
    setResult(null);
    setIsSpinning(true);
  };

  const handleContinue = () => {
    setShowModal(false);
    setResult(null);
  };

  const handleRemoveAndContinue = () => {
    if (result) {
      const entryToRemove = entries.find(e => e.label === result);
      if (entryToRemove) {
        removeEntry(entryToRemove.id);
      }
      setShowModal(false);
      setResult(null);
      // Auto-spin if entries remain
      if (entries.length > 1) {
        setTimeout(() => handleSpin(), 300);
      }
    }
  };

  const clearAll = () => {
    setConfirmModal({
      isOpen: true,
      title: "Reset to Default",
      message: "Are you sure you want to clear all current entries and reset the wheel to default?",
      onConfirm: () => {
        setEntries(DEFAULT_ENTRIES);
        setResult(null);
        setResults([]);
        setConfirmModal((prev) => ({ ...prev, isOpen: false }));
        setToast({ message: "Wheel reset to default!", type: "info" });
      },
    });
  };

  const resetToDefault = () => {
    setConfirmModal({
      isOpen: true,
      title: "Reset to Default",
      message: "Are you sure you want to reset all entries to the default names? This will clear your current entries and results.",
      onConfirm: () => {
        setEntries(DEFAULT_ENTRIES);
        setResult(null);
        setResults([]);
        setConfirmModal((prev) => ({ ...prev, isOpen: false }));
        setToast({ message: "Wheel reset to default!", type: "info" });
      },
    });
  };

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr] gap-5 md:gap-10 lg:gap-16 items-start">
        {/* Left: Wheel Section - Larger and Better Spaced */}
        <div className="flex flex-col items-center justify-start">
          <div className="relative w-full max-w-3xl">
            {/* Wheel Component */}
            <Wheel
              entries={entries}
              onResult={handleResult}
              isSpinning={isSpinning}
              result={result}
              showButton={false}
              onSpinRequest={handleSpin}
            />
          </div>
        </div>

        {/* Right: Enhanced Control Panel */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden sticky top-4">
          {/* Tabs with gradient and react-icons */}
          <div className="flex border-b-2 border-gray-100 bg-linear-to-r from-blue-50 to-purple-50">
            <button
              onClick={() => setActiveTab("entries")}
              className={`flex-1 sm:px-6 px-4 py-4 cursor-pointer text-sm font-semibold transition-all relative ${activeTab === "entries"
                ? "text-blue-700"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <BsClipboardCheck className="text-lg" />
                <span>Entries ({entries.length})</span>
              </div>
              {activeTab === "entries" && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-purple-600"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`flex-1 sm:px-6 px-4 py-4 cursor-pointer text-sm font-semibold transition-all relative ${activeTab === "results"
                ? "text-blue-700"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <IoTrophyOutline className="text-lg" />
                <span>Results ({results.length})</span>
              </div>
              {activeTab === "results" && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-purple-600"></div>
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="lg:p-6 p-4">
            {activeTab === "entries" ? (
              <div className="lg:space-y-5 space-y-4">
                {/* Action Buttons - Using react-icons */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={shuffleEntries}
                    className="flex cursor-pointer items-center gap-2 sm:px-4 px-3 py-2.5 text-sm bg-linear-to-r from-blue-50 to-blue-100 text-blue-700 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all font-medium border border-blue-200"
                    title="Shuffle entries"
                  >
                    <FiShuffle className="text-base" />
                    <span className="sm:text-sm text-xs">Shuffle</span>
                  </button>
                  <button
                    onClick={sortEntries}
                    className="flex cursor-pointer items-center gap-2 sm:px-4 px-3 py-2.5 text-sm bg-linear-to-r from-purple-50 to-purple-100 text-purple-700 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all font-medium border border-purple-200"
                    title="Sort alphabetically"
                  >
                    <FiList className="text-base" />
                    <span className="sm:text-sm text-xs">Sort A-Z</span>
                  </button>
                  <button
                    onClick={resetToDefault}
                    className="flex cursor-pointer items-center gap-2 sm:px-4 px-3 py-2.5 text-sm bg-linear-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg hover:from-gray-100 hover:to-gray-200 transition-all font-medium border border-gray-200"
                  >
                    <FiRotateCcw className="text-base" />
                    <span className="sm:text-sm text-xs lg:block hidden">Reset</span>
                  </button>
                </div>

                {/* Add Entry - Enhanced with react-icons */}
                <div className="bg-linear-to-r from-blue-50 to-purple-50 sm:p-4 p-3 rounded-xl border-2 border-blue-100">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <FiPlus className="text-base text-blue-600" />
                      <span>Add New Entry</span>
                    </label>
                    <button
                      onClick={() => setShowBulkModal(true)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <FiList className="text-xs" />
                      Bulk Add
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newEntry}
                      onChange={(e) => setNewEntry(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addEntry()}
                      placeholder="Type a name or item..."
                      className="flex-1 w-full sm:px-4 px-3 sm:py-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-400 transition-all"
                    />
                    <button
                      onClick={addEntry}
                      className="sm:px-6 px-3 py-2 sm:py-3 cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      Add
                    </button>
                  </div>
                </div>

                {/* Entries List - Enhanced with react-icons */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <FiList className="text-base text-blue-600" />
                      <span>Your Entries</span>
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {entries.length} items
                    </span>
                  </div>
                  <div className="max-h-80 overflow-y-auto space-y-2.5  pe-2 custom-scrollbar">
                    {entries.map((entry, index) => (
                      <div
                        key={entry.id}
                        className="flex items-center justify-between last:pb-0 pb-2.5 border-b border-gray-200 last:border-b-0"
                      >
                        {editingIndex === index ? (
                          <div className="flex items-center gap-2 flex-1">
                            <input
                              type="color"
                              value={entry.color}
                              onChange={(e) => updateEntryColor(index, e.target.value)}
                              className="w-6 h-6 rounded-sm border border-gray-300 cursor-pointer px-0.5 flex-shrink-0"
                              title="Change color"
                            />
                            <input
                              type="text"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") saveEdit();
                                if (e.key === "Escape") cancelEdit();
                              }}
                              className="flex-1 px-3 py-2 text-sm border-2 border-blue-300 rounded-lg focus:outline-none w-full"
                              autoFocus
                            />
                            <button
                              onClick={saveEdit}
                              className="sm:p-2 p-1.5 cursor-pointer bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                              title="Save"
                            >
                              <FiCheckCircle className="text-base" />
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="sm:p-2 p-1.5 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                              title="Cancel"
                            >
                              <FiX className="text-base" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <input
                                type="color"
                                value={entry.color}
                                onChange={(e) => updateEntryColor(index, e.target.value)}
                                className="w-6 h-6 rounded-sm border border-gray-300 cursor-pointer px-0.5 flex-shrink-0"
                                title="Change color"
                              />
                              <span className="text-sm text-gray-900 font-medium truncate">{entry.label}</span>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => startEdit(index)}
                                className="cursor-pointer text-blue-600 hover:text-blue-700"
                                title="Edit"
                              >
                                <FiEdit2 className="text-sm" />
                              </button>
                              <button
                                onClick={() => removeEntry(entry.id)}
                                className="cursor-pointer text-red-600 hover:text-red-700"
                                title="Remove"
                              >
                                <FiTrash2 className="text-sm" />
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spin Button - Enhanced with react-icon */}
                <button
                  onClick={handleSpin}
                  disabled={entries.length === 0 || isSpinning}
                  className="w-full cursor-pointer lg:text-lg text-sm lg:px-6 lg:py-3 px-4 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  {isSpinning ? (
                    <>
                      <MdOutlineCasino className="text-2xl animate-spin" />
                      <span>Spinning...</span>
                    </>
                  ) : (
                    <>
                      <MdOutlineCasino className="lg:text-2xl text-lg" />
                      <span>Spin the Wheel!</span>
                    </>
                  )}
                </button>

                {/* Share Button */}
                {entries.length > 0 && (
                  <button
                    onClick={shareWheel}
                    className="w-full cursor-pointer md:px-6 px-4 lg:py-3 py-2 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <FiShare2 className="text-lg" />
                    <span>Share Wheel</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {result && (
                  <div className="p-5 bg-linear-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <IoTrophyOutline className="text-xl text-blue-600" />
                      <p className="text-sm font-semibold text-gray-700">Latest Result</p>
                    </div>
                    <p className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{result}</p>
                  </div>
                )}
                {results.length > 0 ? (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <BsBarChart className="text-base text-blue-600" />
                      <span>Spin History</span>
                    </h3>
                    <div className="space-y-2 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                      {results.slice().reverse().map((res, index) => (
                        <div
                          key={index}
                          className="p-4 bg-linear-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <IoTrophyOutline className={`text-xl ${index === 0 ? "text-yellow-500" :
                                index === 1 ? "text-gray-400" :
                                  index === 2 ? "text-orange-600" :
                                    "text-blue-500"
                                }`} />
                              <span className="text-base font-semibold text-gray-900">{res}</span>
                            </div>
                            <span className="text-xs font-medium text-gray-500 bg-white px-3 py-1 rounded-full">
                              #{results.length - index}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                ) : (
                  <div className="text-center py-12 bg-linear-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-gray-300">
                    <MdOutlineCasino className="text-6xl text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium mb-2">No results yet!</p>
                    <p className="text-sm text-gray-500">Switch to Entries tab and spin the wheel</p>
                  </div>
                )}
              </div>
            )}

            {/* Link to Full Editor - Always visible at bottom */}
            <div className="lg:mt-5 mt-3 text-center">
              <Link
                href="/wheel"
                className="inline-flex items-center gap-2 lg:text-lg text-sm lg:px-6 lg:py-3 px-4 py-2.5 bg-white border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm hover:shadow-md group w-full justify-center"
              >
                <IoRocketOutline className="text-lg" />
                <span>Open Full Editor</span>
                <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Result Modal */}
      {result && (
        <ResultModal
          result={result}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onContinue={handleContinue}
          onRemove={handleRemoveAndContinue}
        />
      )}

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Confirmation Modal */}
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
    </div>
  );
}
