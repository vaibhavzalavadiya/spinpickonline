"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { WheelEntry, WheelState } from "@/lib/types";
import Wheel from "@/components/Wheel";
import ResultModal from "@/components/ResultModal";
import Toast from "@/components/Toast";
import ConfirmationModal from "@/components/ConfirmationModal";
import BulkAddModal from "@/components/BulkAddModal";
import {
  generateEntryId,
  generateDefaultColors,
  saveWheelToStorage,
  loadWheelFromStorage,
  validateEntries,
  decodeWheelFromShare,
  generateShareUrl,
  copyToClipboard
} from "@/lib/wheel-utils";
import {
  FiPlus,
  FiTrash2,
  FiShare2,
  FiRotateCcw,
  FiEdit2,
  FiShuffle,
  FiList,
  FiCheckCircle,
  FiX
} from "react-icons/fi";
import {
  IoSparkles,
  IoTrophyOutline
} from "react-icons/io5";
import { MdOutlineCasino } from "react-icons/md";

// Metadata must be exported from a server component
// This is handled in layout or a separate metadata file

const DEFAULT_ENTRIES: WheelEntry[] = [
  { id: "1", label: "Alice", color: "#3b82f6" },
  { id: "2", label: "Bob", color: "#ef4444" },
  { id: "3", label: "Charlie", color: "#10b981" },
  { id: "4", label: "Diana", color: "#f59e0b" },
  { id: "5", label: "Eve", color: "#8b5cf6" },
];

function WheelPageContent() {
  const [entries, setEntries] = useState<WheelEntry[]>([]);
  const [newEntry, setNewEntry] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [results, setResults] = useState<string[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelName, setWheelName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"entries" | "results">("entries");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
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

  const searchParams = useSearchParams();
  const [isSharedWheel, setIsSharedWheel] = useState(false);
  const [sharedResult, setSharedResult] = useState<string | null>(null);

  // Load from localStorage or shared URL on mount
  useEffect(() => {
    // Check for shared wheel in URL
    const shareData = searchParams.get("share");
    if (shareData) {
      const decoded = decodeWheelFromShare(shareData);
      if (decoded) {
        setEntries(decoded.entries);
        setWheelName(decoded.wheelName || "");
        setIsSharedWheel(true);

        // If there are shared results, show them
        if (decoded.results && decoded.results.length > 0) {
          setResults(decoded.results);
          const latestResult = decoded.results[decoded.results.length - 1];
          setResult(latestResult);
          setSharedResult(latestResult);
          setShowModal(true);
          setToast({ message: `Shared wheel loaded with ${decoded.results.length} result(s)!`, type: "success" });
        } else {
          setToast({ message: "Shared wheel loaded! You can spin it or save your own version.", type: "success" });
        }
        return;
      }
    }

    // Otherwise load from localStorage
    const saved = loadWheelFromStorage();
    if (saved && saved.entries.length > 0) {
      setEntries(saved.entries);
      setEntries(saved.entries);
      setResult(saved.result);
      if (saved.results) setResults(saved.results);
      setWheelName(saved.wheelName || "");
    } else {
      setEntries(DEFAULT_ENTRIES);
      setResult(null);
      setResults([]);
      setWheelName("");
    }
  }, [searchParams]);

  // Save to localStorage whenever entries change
  useEffect(() => {
    if (entries.length > 0) {
      const state: WheelState = {
        entries,
        result,
        results,
        isSpinning,
        wheelName: wheelName || undefined,
      };
      saveWheelToStorage(state);
    }
  }, [entries, result, results, isSpinning, wheelName]);

  const addEntry = () => {
    const trimmed = newEntry.trim();
    if (!trimmed) return;

    // Check for duplicates
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
        color: colors[entries.length],
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

  const handleResult = (wheelResult: string) => {
    setResult(wheelResult);
    setResults([...results, wheelResult]);
    setIsSpinning(false);
    setShowModal(true);
  };

  const handleSpin = () => {
    if (!validateEntries(entries)) {
      setToast({ message: "Please add at least one entry!", type: "error" });
      return;
    }
    setIsSpinning(true);
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

  const handleContinue = () => {
    setShowModal(false);
    setResult(null);
  };

  const shuffleEntries = () => {
    const shuffled = [...entries].sort(() => Math.random() - 0.5);
    setEntries(shuffled);
  };

  const sortEntries = () => {
    const sorted = [...entries].sort((a, b) => a.label.localeCompare(b.label));
    setEntries(sorted);
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
        setWheelName("");
        setConfirmModal((prev) => ({ ...prev, isOpen: false }));
        setToast({ message: "Wheel reset to default!", type: "info" });
      },
    });
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
    if (editingIndex !== null && editValue.trim()) {
      const updated = [...entries];
      updated[editingIndex] = { ...updated[editingIndex], label: editValue.trim() };
      setEntries(updated);
      setEditingIndex(null);
      setEditValue("");
    }
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditValue("");
  };

  const clearAll = () => {
    setConfirmModal({
      isOpen: true,
      title: "Clear All Entries",
      message: "Are you sure you want to clear all entries? This action cannot be undone.",
      onConfirm: () => {
        setEntries([]);
        setResult(null);
        setResults([]);
        setWheelName("");
        if (typeof window !== "undefined") {
          localStorage.removeItem("wheelState");
        }
        setConfirmModal((prev) => ({ ...prev, isOpen: false }));
        setToast({ message: "All entries cleared!", type: "info" });
      },
    });
  };

  const shareWheel = async () => {
    const shareUrl = generateShareUrl(entries, wheelName, results);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto lg:py-12 py-8">
        <div className="text-center lg:mb-12 sm:mb-8 mb-5">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Create Your Random Picker Wheel
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr] gap-5 md:gap-10 lg:gap-16 items-start">
          {/* Left: Wheel Section */}
          <div className="flex flex-col items-center justify-start">
            {entries.length > 0 ? (
              <>
                <div className="relative w-full max-w-3xl">
                  {/* Decorative glow effect */}

                  <Wheel
                    entries={entries}
                    onResult={handleResult}
                    isSpinning={isSpinning}
                    result={result}
                    showButton={false}
                    onSpinRequest={handleSpin}
                  />
                </div>
              </>
            ) : (
              <div className="w-full max-w-[600px] aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl bg-linear-to-br from-gray-50 to-blue-50">
                <MdOutlineCasino className="text-8xl text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg font-medium mb-2">No entries yet</p>
                <p className="text-gray-400 text-sm">Add entries to create your wheel</p>
              </div>
            )}
          </div>

          {/* Right: Enhanced Control Panel with Tabs */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden sticky top-4">
            {/* Tabs */}
            <div className="flex border-b-2 border-gray-100 bg-linear-to-r from-blue-50 to-purple-50">
              <button
                onClick={() => setActiveTab("entries")}
                className={`flex-1 sm:px-6 px-4 py-4 cursor-pointer text-sm font-semibold transition-all relative cursor-pointer ${activeTab === "entries"
                  ? "text-blue-700"
                  : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <FiList className="text-lg" />
                  <span>Entries ({entries.length})</span>
                </div>
                {activeTab === "entries" && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-purple-600"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab("results")}
                className={`flex-1 sm:px-6 px-4 py-4 cursor-pointer text-sm font-semibold transition-all relative cursor-pointer ${activeTab === "results"
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
                  {/* Wheel Name */}
                  <div>
                    <label htmlFor="wheelName" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <FiEdit2 className="text-base text-blue-600" />
                      <span>Wheel Name (Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="wheelName"
                      value={wheelName}
                      onChange={(e) => setWheelName(e.target.value)}
                      placeholder="My Random Picker Wheel"
                      className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-400 transition-all"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={shuffleEntries}
                      className="flex items-center gap-2 sm:px-4 px-3 py-2.5 text-sm bg-linear-to-r from-blue-50 to-blue-100 text-blue-700 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all font-medium border border-blue-200 cursor-pointer"
                      title="Shuffle entries"
                    >
                      <FiShuffle className="text-base" />
                      <span className="sm:text-sm text-xs">Shuffle</span>
                    </button>
                    <button
                      onClick={sortEntries}
                      className="flex items-center gap-2 sm:px-4 px-3 py-2.5 text-sm bg-linear-to-r from-purple-50 to-purple-100 text-purple-700 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all font-medium border border-purple-200 cursor-pointer"
                      title="Sort alphabetically"
                    >
                      <FiList className="text-base" />
                      <span className="sm:text-sm text-xs">Sort</span>
                    </button>
                    <button
                      onClick={resetToDefault}
                      className="flex items-center gap-2 sm:px-4 px-3 py-2.5 text-sm bg-linear-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg hover:from-gray-100 hover:to-gray-200 transition-all font-medium border border-gray-200 cursor-pointer"
                    >
                      <FiRotateCcw className="text-base" />
                      <span className="sm:text-sm text-xs lg:block hidden">Reset</span>
                    </button>
                  </div>

                  {/* Add Entry */}
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
                        id="newEntry"
                        value={newEntry}
                        onChange={(e) => setNewEntry(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && addEntry()}
                        placeholder="Type a name or item..."
                        className="flex-1 w-full sm:px-4 px-3 sm:py-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-400 transition-all"
                      />
                      <button
                        onClick={addEntry}
                        className="sm:px-6 px-3 py-2 sm:py-3 cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 cursor-pointer"
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  {/* Entries List */}
                  {entries.length > 0 && (
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
                      <div className="max-h-80 overflow-y-auto space-y-2.5 pe-2 custom-scrollbar">
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
                                  className="sm:p-2 p-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors cursor-pointer"
                                  title="Save"
                                >
                                  <FiCheckCircle className="text-base" />
                                </button>
                                <button
                                  onClick={cancelEdit}
                                  className="sm:p-2 p-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
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
                  )}

                  {/* Spin Button */}
                  <button
                    onClick={handleSpin}
                    disabled={entries.length === 0 || isSpinning}
                    className="w-full lg:text-lg text-sm lg:px-6 lg:py-3 px-4 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
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

                  {/* Advanced Actions */}
                  {entries.length > 0 && (
                    <div className="space-y-3">
                      <button
                        onClick={shareWheel}
                        className="w-full md:px-6 px-4  lg:py-3 py-2 bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-700 font-semibold rounded-xl hover:from-green-100 hover:to-emerald-100 hover:border-green-300 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                      >
                        <FiShare2 className="text-lg" />
                        <span>Share Wheel Link</span>
                      </button>
                      <button
                        onClick={clearAll}
                        className="w-full md:px-6 px-4 lg:py-3 py-2 bg-red-50 border-2 border-red-200 text-red-700 font-semibold rounded-xl hover:bg-red-100 hover:border-red-300 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                      >
                        <FiRotateCcw className="text-lg" />
                        <span>Clear All</span>
                      </button>
                    </div>
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
                        <IoSparkles className="text-base text-blue-600" />
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
                                <IoTrophyOutline
                                  className={`text-xl ${index === 0
                                    ? "text-yellow-500"
                                    : index === 1
                                      ? "text-gray-400"
                                      : index === 2
                                        ? "text-orange-600"
                                        : "text-blue-500"
                                    }`}
                                />
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

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>

      {/* SEO Content Sections - Unique for Wheel Creator Page */}
      <section className="bg-white py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Create Your Custom Random Picker Wheel</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 md:text-base text-sm">
            <p>
              Welcome to the most powerful random picker wheel creator online. Our advanced wheel builder lets you design custom spinner wheels for any purpose - from simple name pickers to complex decision makers. Unlike basic random generators, our tool gives you complete control over every aspect of your wheel, from colors and labels to advanced features like bulk entry import and shareable links.
            </p>
            <p>
              Whether you're creating a wheel of names for classroom management, building a giveaway randomizer for social media contests, or designing a custom decision wheel for daily choices, our intuitive interface makes wheel creation fast and fun. Save your configurations, share with others, and spin as many times as you need - all completely free with no account required.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Key Features of Our Random Picker Wheel</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white md:p-6 p-4 rounded-xl shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 md:text-lg text-base">🎨 Full Customization</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Customize colors, labels, and wheel appearance. Our random color generator assigns unique colors automatically, or choose your own for a personalized spinner wheel.
              </p>
            </div>
            <div className="bg-white md:p-6 p-4 rounded-xl shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 md:text-lg text-base">⚡ Instant Results</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Get random results in seconds with our fast RNG randomizer. The spinning wheel animation builds excitement while ensuring cryptographically secure fairness.
              </p>
            </div>
            <div className="bg-white md:p-6 p-4 rounded-xl shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 md:text-lg text-base">🔗 Shareable Links</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Generate shareable links for your custom wheel. Perfect for Instagram giveaways, YouTube contests, or sharing decision wheels with friends and colleagues.
              </p>
            </div>
            <div className="bg-white md:p-6 p-4 rounded-xl shadow-md border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 md:text-lg text-base">📱 Mobile Optimized</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Touch-friendly interface works perfectly on phones and tablets. Our mobile-friendly picker wheel provides smooth animations on any device.
              </p>
            </div>
            <div className="bg-white md:p-6 p-4 rounded-xl shadow-md border-t-4 border-pink-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 md:text-lg text-base">💾 Auto-Save</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Your wheel configuration saves automatically. Return anytime to find your entries and results history preserved in your browser.
              </p>
            </div>
            <div className="bg-white md:p-6 p-4 rounded-xl shadow-md border-t-4 border-red-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 md:text-lg text-base">🎯 Fair & Unbiased</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Cryptographically secure random number generator ensures every entry has equal probability. Truly fair random selection you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Popular Uses for Random Picker Wheels</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 md:p-5 p-4 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-semibold text-gray-900 mb-2 md:text-base text-sm">Classroom Name Picker</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Teachers use our wheel of names for fair student selection, random questioning, and classroom job assignments.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 md:p-5 p-4 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="font-semibold text-gray-900 mb-2 md:text-base text-sm">Giveaway Randomizer</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Content creators trust our random picker for transparent Instagram, YouTube, and social media contest winner selection.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 md:p-5 p-4 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-semibold text-gray-900 mb-2 md:text-base text-sm">Team Picker Wheel</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Random team generator for sports, work projects, and group activities. Fair distribution every time.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 md:p-5 p-4 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2 md:text-base text-sm">Decision Maker</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Use as a yes or no wheel, lunch decision maker, or general choice randomizer for daily decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Choose Our Random Picker Wheel?</h2>
          <div className="bg-white md:p-8 p-5 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl sm:block hidden">✅</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 md:text-base text-sm">100% Free Forever</h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">No signup, no credit card, unlimited spins. Free random picker wheel with all features unlocked.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl sm:block hidden">✅</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 md:text-base text-sm">Cryptographic RNG</h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">Enterprise-grade random number generator ensures mathematically fair results. More secure than basic randomizers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl sm:block hidden">✅</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 md:text-base text-sm">Unlimited Entries</h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">Add as many names, options, or choices as you need. No artificial limits on your spinner wheel.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl sm:block hidden">✅</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 md:text-base text-sm">Works Everywhere</h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">Responsive design works on desktop, tablet, and mobile. No app download or installation required.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Explore More Wheel Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            <Link href="/name-picker" className="group bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-4 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 text-xs sm:text-sm mb-1 transition-colors">Name Picker</h3>
              <p className="text-[10px] sm:text-xs text-gray-600">Random name selector</p>
            </Link>
            <Link href="/yes-no-wheel" className="group bg-gradient-to-br from-purple-50 to-purple-100 p-3 sm:p-4 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 text-xs sm:text-sm mb-1 transition-colors">Yes/No Wheel</h3>
              <p className="text-[10px] sm:text-xs text-gray-600">Quick decisions</p>
            </Link>
            <Link href="/team-picker" className="group bg-gradient-to-br from-green-50 to-green-100 p-3 sm:p-4 rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 text-xs sm:text-sm mb-1 transition-colors">Team Picker</h3>
              <p className="text-[10px] sm:text-xs text-gray-600">Group generator</p>
            </Link>
            <Link href="/classroom-activities" className="group bg-gradient-to-br from-orange-50 to-orange-100 p-3 sm:p-4 rounded-xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 text-xs sm:text-sm mb-1 transition-colors">Classroom</h3>
              <p className="text-[10px] sm:text-xs text-gray-600">Student picker</p>
            </Link>
            <Link href="/giveaway-winner" className="group bg-gradient-to-br from-pink-50 to-pink-100 p-3 sm:p-4 rounded-xl border-2 border-pink-200 hover:border-pink-400 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 text-xs sm:text-sm mb-1 transition-colors">Giveaway</h3>
              <p className="text-[10px] sm:text-xs text-gray-600">Contest winner</p>
            </Link>
            <Link href="/lunch-decisions" className="group bg-gradient-to-br from-red-50 to-red-100 p-3 sm:p-4 rounded-xl border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-red-600 text-xs sm:text-sm mb-1 transition-colors">Lunch Picker</h3>
              <p className="text-[10px] sm:text-xs text-gray-600">Restaurant choice</p>
            </Link>
            <Link href="/decision-wheel" className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-3 sm:p-4 rounded-xl border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 text-xs sm:text-sm mb-1 transition-colors">Decision Wheel</h3>
              <p className="text-[10px] sm:text-xs text-gray-600">Choice maker</p>
            </Link>
            <Link href="/guides/how-to-use-random-picker-wheel" className="group bg-gradient-to-br from-amber-50 to-amber-100 p-3 sm:p-4 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 text-xs sm:text-sm mb-1 transition-colors">How to Guide</h3>
              <p className="text-[10px] sm:text-xs text-gray-600">Step-by-step</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function WheelPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    }>
      <WheelPageContent />
    </Suspense>
  );
}
