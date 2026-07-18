"use client";

import { useState, useEffect, useRef } from "react";
import { SavedWheel } from "@/lib/types";
import {
  getSavedWheels,
  deleteSavedWheel,
} from "@/lib/wheel-utils";
import {
  FiSave,
  FiTrash2,
  FiEdit2,
  FiCheckCircle,
  FiX,
  FiFolder,
} from "react-icons/fi";
import Toast from "./Toast";

export default function SavedWheelsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [wheels, setWheels] = useState<SavedWheel[]>([]);
  const [saveName, setSaveName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  // Load saved wheels when panel opens
  useEffect(() => {
    if (isOpen) {
      setWheels(getSavedWheels());
    }
  }, [isOpen]);

  // Listen for wheelsUpdated from other components
  useEffect(() => {
    const handleWheelsUpdated = () => setWheels(getSavedWheels());
    window.addEventListener("wheelsUpdated", handleWheelsUpdated);
    return () => window.removeEventListener("wheelsUpdated", handleWheelsUpdated);
  }, []);

  // Close panel on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSave = () => {
    const name = saveName.trim();
    if (!name) {
      setToast({ message: "Please enter a name for your wheel", type: "error" });
      return;
    }
    
    // Dispatch event to active wheel component
    window.dispatchEvent(new CustomEvent("requestSaveWheel", { detail: { name } }));
    setIsSaving(false);
    setSaveName("");
  };

  const handleLoad = (wheel: SavedWheel) => {
    window.dispatchEvent(new CustomEvent("requestLoadWheel", { detail: { wheel } }));
    setIsOpen(false);
  };

  const handleDelete = (id: string, name: string) => {
    deleteSavedWheel(id);
    setWheels(getSavedWheels());
    setToast({ message: `"${name}" deleted`, type: "info" });
  };

  const handleRename = (id: string) => {
    const trimmed = editName.trim();
    if (!trimmed) return;

    // We can dispatch an update or just save it directly since we just rename it
    // Renaming doesn't depend on the current active wheel entries, so we can do it directly.
    const wheel = wheels.find((w) => w.id === id);
    if (wheel) {
      // Need to import saveWheelById if we do it directly. Wait, we can dispatch it.
      // Let's just dispatch rename.
      window.dispatchEvent(new CustomEvent("requestRenameWheel", { detail: { id, newName: trimmed } }));
      setEditingId(null);
      setEditName("");
    }
  };

  const handleUpdate = (wheel: SavedWheel) => {
    window.dispatchEvent(new CustomEvent("requestUpdateWheel", { detail: { wheel } }));
  };

  return (
    <>
      <div className="relative" ref={panelRef}>
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center p-2 lg:px-3 lg:py-2 lg:gap-1.5 lg:bg-gray-100 lg:hover:bg-gray-200 text-gray-700 hover:text-blue-600 lg:hover:text-gray-900 rounded-full transition-colors cursor-pointer relative text-sm font-semibold"
          title="My Saved Wheels"
        >
          <FiFolder className="w-[22px] h-[22px] lg:w-4 lg:h-4 lg:text-blue-600" />
          <span className="hidden lg:inline">Save</span>
          {wheels.length > 0 && (
            <span className="absolute top-0 right-0 lg:-top-1 lg:-right-1 bg-blue-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white">
              {wheels.length}
            </span>
          )}
        </button>

        {/* Panel Dropdown */}
        {isOpen && (
          <div className="fixed right-4 top-16 w-[300px] sm:absolute sm:right-0 sm:top-full sm:mt-3 sm:w-[360px] bg-white rounded-xl shadow-2xl border border-gray-200 z-[60] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                <FiFolder className="w-4 h-4 text-blue-600" />
                My Saved Wheels
                <span className="text-xs text-gray-500 font-normal">
                  ({wheels.length}/10)
                </span>
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer p-1"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>

            {/* Save Current Wheel */}
            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
              {isSaving ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={saveName}
                    onChange={(e) => setSaveName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSave()}
                    placeholder="Name this wheel..."
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                    maxLength={30}
                  />
                  <button
                    onClick={handleSave}
                    className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    <FiCheckCircle className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setIsSaving(false);
                      setSaveName("");
                    }}
                    className="px-3 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSaving(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-sm cursor-pointer active:scale-[0.98]"
                >
                  <FiSave className="w-4 h-4" />
                  Save Current Wheel
                </button>
              )}
            </div>

            {/* Wheels List */}
            <div className="max-h-[350px] overflow-y-auto custom-scrollbar">
              {wheels.length === 0 ? (
                <div className="px-4 py-10 text-center">
                  <FiFolder className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-600">No saved wheels yet</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Save your custom wheel to use it later!
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {wheels.map((wheel) => (
                    <div
                      key={wheel.id}
                      className="group px-4 py-3 hover:bg-blue-50/50 transition-colors flex flex-col justify-center"
                    >
                      {editingId === wheel.id ? (
                        /* Rename Mode */
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            onKeyDown={(e) =>
                              e.key === "Enter" && handleRename(wheel.id)
                            }
                            className="flex-1 px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            autoFocus
                            maxLength={30}
                          />
                          <button
                            onClick={() => handleRename(wheel.id)}
                            className="text-green-600 hover:text-green-700 cursor-pointer p-1"
                          >
                            <FiCheckCircle className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => {
                              setEditingId(null);
                              setEditName("");
                            }}
                            className="text-gray-400 hover:text-gray-600 cursor-pointer p-1"
                          >
                            <FiX className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        /* Normal Mode */
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => handleLoad(wheel)}
                            className="flex-1 text-left cursor-pointer mr-2 overflow-hidden"
                          >
                            <p className="text-sm font-bold text-gray-800 group-hover:text-blue-700 transition-colors truncate">
                              {wheel.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {wheel.entries.length} entries
                              {wheel.results.length > 0 &&
                                ` · ${wheel.results.length} spins`}
                            </p>
                          </button>

                          <div className="flex items-center gap-1 shrink-0">
                            {/* Update button */}
                            <button
                              onClick={() => handleUpdate(wheel)}
                              title="Update with current entries"
                              className="p-1.5 text-blue-500 hover:text-blue-700 hover:bg-blue-100 rounded transition-colors cursor-pointer"
                            >
                              <FiSave className="w-4 h-4" />
                            </button>
                            {/* Rename button */}
                            <button
                              onClick={() => {
                                setEditingId(wheel.id);
                                setEditName(wheel.name);
                              }}
                              title="Rename"
                              className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded transition-colors cursor-pointer"
                            >
                              <FiEdit2 className="w-4 h-4" />
                            </button>
                            {/* Delete button */}
                            <button
                              onClick={() => handleDelete(wheel.id, wheel.name)}
                              title="Delete"
                              className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors cursor-pointer"
                            >
                              <FiTrash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
