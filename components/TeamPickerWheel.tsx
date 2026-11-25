"use client";

import { useState, useEffect } from "react";
import { WheelEntry } from "@/lib/types";
import Wheel from "@/components/Wheel";
import AdSenseDisplay from "@/components/AdSenseDisplay";
import Toast from "@/components/Toast";
import BulkAddModal from "@/components/BulkAddModal";
import { trackEvent } from "@/lib/analytics";
import {
  generateEntryId,
  generateDefaultColors,
  generateShareUrl,
  decodeWheelFromShare,
  shuffleArraySecure,
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
  FiCopy,
  FiCheck,
  FiShare2,
  FiDownload,
} from "react-icons/fi";
import { IoTrophyOutline, IoSparkles } from "react-icons/io5";
import { BsClipboardCheck } from "react-icons/bs";
import { MdOutlineCasino } from "react-icons/md";

interface Team {
  name: string;
  members: string[];
  color: string;
}

const DEFAULT_ENTRIES: WheelEntry[] = [
  { id: "1", label: "Player 1", color: "#3b82f6" },
  { id: "2", label: "Player 2", color: "#ef4444" },
  { id: "3", label: "Player 3", color: "#22c55e" },
  { id: "4", label: "Player 4", color: "#f59e0b" },
  { id: "5", label: "Player 5", color: "#8b5cf6" },
];

export default function TeamPickerWheel() {
  const [entries, setEntries] = useState<WheelEntry[]>(DEFAULT_ENTRIES);
  const [newEntry, setNewEntry] = useState("");
  const [numTeams, setNumTeams] = useState(2);
  const [teams, setTeams] = useState<Team[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [activeTab, setActiveTab] = useState<"entries" | "teams">("entries");
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);
  const [copiedTeams, setCopiedTeams] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const shareData = new URLSearchParams(window.location.search).get("share");
    if (shareData) {
      const decoded = decodeWheelFromShare(shareData);
      if (decoded && decoded.entries.length > 0) {
        setEntries(decoded.entries);
        setToast({ message: "Loaded shared team roster!", type: "success" });
      }
    }
  }, []);

  const addEntry = () => {
    const trimmed = newEntry.trim();
    if (!trimmed) return;
    const colors = generateDefaultColors(entries.length + 1);
    setEntries([
      ...entries,
      { id: generateEntryId(), label: trimmed, color: colors[entries.length % colors.length] },
    ]);
    setNewEntry("");
  };

  const handleBulkAdd = (newLabels: string[]) => {
    const cleaned = newLabels.map((l) => l.trim()).filter((l) => l.length > 0);
    if (cleaned.length === 0) {
      setToast({ message: "Please enter at least one player name!", type: "info" });
      return;
    }
    const palette = generateDefaultColors(entries.length + cleaned.length);
    const addedEntries = cleaned.map((label, index) => ({
      id: generateEntryId(),
      label,
      color: palette[entries.length + index] || "#3b82f6",
    }));
    setEntries([...entries, ...addedEntries]);
    trackEvent("entry_bulk_add", { tool_type: "team_picker", added_count: cleaned.length });
    setToast({ message: `Added ${cleaned.length} players!`, type: "success" });
  };

  const removeEntry = (id: string) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  const shuffleEntries = () => {
    setEntries(shuffleArraySecure(entries));
  };

  const sortEntries = () => {
    setEntries([...entries].sort((a, b) => a.label.localeCompare(b.label)));
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
    updatedEntries[editingIndex] = { ...updatedEntries[editingIndex], label: trimmed };
    setEntries(updatedEntries);
    setEditingIndex(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditValue("");
  };

  const resetToDefault = () => {
    setEntries(DEFAULT_ENTRIES);
    setTeams([]);
    setToast({ message: "Reset to default!", type: "info" });
  };

  const generateTeams = () => {
    if (entries.length < numTeams) {
      setToast({ message: `Need at least ${numTeams} players!`, type: "error" });
      return;
    }
    if (isSpinning) return;
    setIsSpinning(true);

    setTimeout(() => {
      const shuffled = shuffleArraySecure(entries);
      const colors = generateDefaultColors(numTeams);
      const newTeams: Team[] = Array.from({ length: numTeams }, (_, i) => ({
        name: `Team ${i + 1}`,
        members: [],
        color: colors[i],
      }));
      shuffled.forEach((entry, index) => {
        newTeams[index % numTeams].members.push(entry.label);
      });
      setTeams(newTeams);
      setIsSpinning(false);
      setActiveTab("teams");
      trackEvent("tool_action", {
        tool_type: "team_picker",
        num_teams: numTeams,
        entry_count: entries.length,
      });
      setToast({ message: `${numTeams} teams generated fairly!`, type: "success" });
    }, 3000);
  };

  const copyTeamsText = async () => {
    if (teams.length === 0) return;
    const text = teams.map((t) => `${t.name}: ${t.members.join(", ")}`).join("\n");
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedTeams(true);
      trackEvent("tool_action", { tool_type: "team_picker_copy", num_teams: teams.length });
      setToast({ message: "Teams copied to clipboard!", type: "success" });
      setTimeout(() => setCopiedTeams(false), 2000);
    }
  };

  const downloadTeamsCsv = () => {
    if (teams.length === 0) return;
    const rows = ["Team,Player"];
    teams.forEach((team) => {
      team.members.forEach((m) => {
        rows.push(`"${team.name.replace(/"/g, '""')}","${m.replace(/"/g, '""')}"`);
      });
    });
    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "spinpick-teams.csv";
    link.click();
    URL.revokeObjectURL(url);
    trackEvent("tool_action", { tool_type: "team_picker_csv", num_teams: teams.length });
  };

  const shareResults = async () => {
    const shareUrl = generateShareUrl(
      entries,
      `Team Results - ${numTeams} Teams`,
      teams.map((t) => `${t.name}: ${t.members.join(", ")}`),
      "/team-picker"
    );
    if (!shareUrl) {
      setToast({ message: "Failed to generate share link", type: "error" });
      return;
    }
    const success = await copyToClipboard(shareUrl);
    if (success) {
      trackEvent("wheel_share_copy", { tool_type: "team_picker" });
      setToast({ message: "Share link copied to clipboard!", type: "success" });
    } else {
      setToast({ message: "Failed to copy link", type: "error" });
    }
  };

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr] gap-5 md:gap-10 lg:gap-16 items-start">
        <div className="flex flex-col items-center justify-start">
          <div className="relative w-full max-w-3xl">
            <Wheel
              entries={entries}
              onResult={() => {}}
              isSpinning={isSpinning}
              result={null}
              showButton={false}
              onSpinRequest={generateTeams}
            />
          </div>

          {/* Bounded Display Ad below wheel on BOTH Mobile and Desktop */}
          <div className="w-full max-w-2xl mt-7">
            <AdSenseDisplay slotId="6084518347" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden sticky top-4">
          <div className="flex border-b-2 border-gray-100 bg-linear-to-r from-blue-50 to-purple-50">
            <button
              type="button"
              onClick={() => setActiveTab("entries")}
              className={`flex-1 sm:px-6 px-4 py-4 cursor-pointer text-sm font-semibold transition-all relative ${
                activeTab === "entries" ? "text-blue-700" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <BsClipboardCheck className="text-lg" />
                <span>Entries ({entries.length})</span>
              </div>
              {activeTab === "entries" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-purple-600"></div>}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("teams")}
              className={`flex-1 sm:px-6 px-4 py-4 cursor-pointer text-sm font-semibold transition-all relative ${
                activeTab === "teams" ? "text-blue-700" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <IoTrophyOutline className="text-lg" />
                <span>Teams ({teams.length})</span>
              </div>
              {activeTab === "teams" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-purple-600"></div>}
            </button>
          </div>

          <div className="lg:p-6 p-4 pb-16 sm:pb-6">
            {activeTab === "entries" ? (
              <div className="lg:space-y-5 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={shuffleEntries} className="flex cursor-pointer items-center gap-2 sm:px-4 px-3 py-2.5 text-sm bg-linear-to-r from-blue-50 to-blue-100 text-blue-700 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all font-medium border border-blue-200">
                    <FiShuffle className="text-base" />
                    <span className="sm:text-sm text-xs">Shuffle</span>
                  </button>
                  <button type="button" onClick={sortEntries} className="flex cursor-pointer items-center gap-2 sm:px-4 px-3 py-2.5 text-sm bg-linear-to-r from-purple-50 to-purple-100 text-purple-700 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all font-medium border border-purple-200">
                    <FiList className="text-base" />
                    <span className="sm:text-sm text-xs">Sort A-Z</span>
                  </button>
                  <button type="button" onClick={resetToDefault} className="flex cursor-pointer items-center gap-2 sm:px-4 px-3 py-2.5 text-sm bg-linear-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg hover:from-gray-100 hover:to-gray-200 transition-all font-medium border border-gray-200">
                    <FiRotateCcw className="text-base" />
                    <span className="sm:text-sm text-xs hidden sm:inline">Reset</span>
                  </button>
                </div>

                <div className="bg-linear-to-r from-blue-50 to-purple-50 sm:p-4 p-3 rounded-xl border-2 border-blue-100">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="team-new-entry" className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <FiPlus className="text-base text-blue-600" />
                      <span>Add New Entry</span>
                    </label>
                    <button type="button" onClick={() => setShowBulkModal(true)} className="text-xs font-semibold text-blue-700 hover:text-blue-900 hover:bg-blue-100 px-2 py-1 rounded transition-colors flex items-center gap-1 cursor-pointer">
                      <FiList className="text-xs" />
                      Bulk Add
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="team-new-entry"
                      type="text"
                      value={newEntry}
                      onChange={(e) => setNewEntry(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addEntry()}
                      placeholder="Type a player name..."
                      className="flex-1 w-full sm:px-4 px-3 sm:py-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-blue-400 transition-all bg-white"
                    />
                    <button type="button" onClick={addEntry} className="sm:px-6 px-3 py-2 sm:py-3 cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-semibold shadow-md hover:shadow-lg">Add</button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <FiList className="text-base text-blue-600" />
                      <span>Your Entries</span>
                    </h2>
                    <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full">{entries.length} items</span>
                  </div>
                  <div className="max-h-72 overflow-y-auto space-y-2 pe-1 custom-scrollbar">
                    {entries.map((entry, index) => (
                      <div key={entry.id} className="flex items-center justify-between last:pb-0 pb-2 border-b border-gray-200 last:border-b-0">
                        {editingIndex === index ? (
                          <div className="flex items-center gap-2 flex-1">
                            <input type="color" value={entry.color} onChange={(e) => updateEntryColor(index, e.target.value)} className="w-7 h-7 rounded-sm border border-gray-300 cursor-pointer px-0.5 flex-shrink-0" aria-label={`Color for ${entry.label}`} />
                            <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") saveEdit(); if (e.key === "Escape") cancelEdit(); }} className="flex-1 px-3 py-2 text-sm border-2 border-blue-300 rounded-lg w-full" aria-label={`Edit ${entry.label}`} autoFocus />
                            <button type="button" onClick={saveEdit} className="min-w-[36px] min-h-[36px] p-2 cursor-pointer bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors" aria-label="Save"><FiCheckCircle className="text-base" /></button>
                            <button type="button" onClick={cancelEdit} className="min-w-[36px] min-h-[36px] p-2 cursor-pointer bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors" aria-label="Cancel"><FiX className="text-base" /></button>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <input type="color" value={entry.color} onChange={(e) => updateEntryColor(index, e.target.value)} className="w-6 h-6 rounded-sm border border-gray-300 cursor-pointer px-0.5 flex-shrink-0" aria-label={`Color for ${entry.label}`} />
                              <span className="text-sm text-gray-900 font-medium truncate">{entry.label}</span>
                            </div>
                            <div className="flex gap-1">
                              <button type="button" onClick={() => startEdit(index)} className="min-w-[36px] min-h-[36px] inline-flex items-center justify-center p-2 rounded-lg cursor-pointer text-blue-600 hover:text-blue-700 hover:bg-blue-50" aria-label={`Edit ${entry.label}`}><FiEdit2 className="text-sm" /></button>
                              <button type="button" onClick={() => removeEntry(entry.id)} className="min-w-[36px] min-h-[36px] inline-flex items-center justify-center p-2 rounded-lg cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50" aria-label={`Remove ${entry.label}`}><FiTrash2 className="text-sm" /></button>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-xl border-2 border-green-200">
                  <label htmlFor="num-teams-input" className="block text-sm font-semibold text-gray-800 mb-2">Number of Teams</label>
                  <input
                    id="num-teams-input"
                    type="number"
                    min="2"
                    value={numTeams}
                    onChange={(e) => {
                      const num = parseInt(e.target.value, 10);
                      if (!isNaN(num) && num >= 2) {
                        setNumTeams(num);
                      }
                    }}
                    onBlur={(e) => {
                      const num = parseInt(e.target.value, 10);
                      if (isNaN(num) || num < 2) {
                        setNumTeams(2);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        generateTeams();
                      }
                    }}
                    className="w-full px-4 py-2.5 text-sm bg-white border-2 border-gray-200 rounded-lg focus:border-green-500"
                  />
                </div>

                <button type="button" onClick={generateTeams} disabled={entries.length < numTeams || isSpinning} className="w-full cursor-pointer lg:text-lg text-sm lg:px-6 lg:py-3 px-4 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                  {isSpinning ? (
                    <>
                      <MdOutlineCasino className="text-2xl animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <MdOutlineCasino className="lg:text-2xl text-lg" />
                      <span>Generate Teams!</span>
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {teams.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <IoSparkles className="text-green-600" />
                        Team Results
                      </h2>
                      <div className="flex items-center gap-1.5">
                        <button type="button" onClick={copyTeamsText} className="px-2.5 py-1.5 text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center gap-1 cursor-pointer">
                          {copiedTeams ? <FiCheck className="text-green-600" /> : <FiCopy />}
                          <span>{copiedTeams ? "Copied" : "Copy"}</span>
                        </button>
                        <button type="button" onClick={downloadTeamsCsv} className="px-2.5 py-1.5 text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg flex items-center gap-1 cursor-pointer">
                          <FiDownload />
                          <span>CSV</span>
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                      {teams.map((team, index) => (
                        <div key={index} className="border-2 rounded-xl p-4" style={{ borderColor: team.color, backgroundColor: `${team.color}15` }}>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-5 h-5 rounded-full shadow-sm" style={{ backgroundColor: team.color }} />
                            <h3 className="font-bold text-gray-900 text-lg">{team.name}</h3>
                            <span className="text-xs text-gray-700 bg-white px-2.5 py-1 rounded-full font-medium shadow-sm">{team.members.length} {team.members.length === 1 ? "player" : "players"}</span>
                          </div>
                          <ul className="space-y-2">
                            {team.members.map((member, idx) => (
                              <li key={idx} className="text-sm text-gray-800 flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                                <span className="text-xs font-bold text-gray-700 bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center">{idx + 1}</span>
                                {member}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-4 sm:flex-row flex-col">
                      <button type="button" onClick={generateTeams} disabled={isSpinning} className="flex-1 cursor-pointer px-4 py-2.5 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm">
                        <FiShuffle className="text-base" />
                        Regenerate
                      </button>
                      <button type="button" onClick={shareResults} className="flex-1 cursor-pointer px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 text-sm">
                        <FiShare2 className="text-base" />
                        Share Link
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12 bg-linear-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-gray-300">
                    <MdOutlineCasino className="text-6xl text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium mb-2">No teams generated yet</p>
                    <p className="text-sm text-gray-600">Switch to Entries tab and generate teams</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <BulkAddModal isOpen={showBulkModal} onClose={() => setShowBulkModal(false)} onAdd={handleBulkAdd} />
    </div>
  );
}
