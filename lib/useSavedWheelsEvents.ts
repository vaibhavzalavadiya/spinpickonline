import { useEffect, useRef } from "react";
import { SavedWheel, WheelEntry } from "./types";
import { generateWheelId, saveWheelById, getSavedWheelById } from "./wheel-utils";

interface UseSavedWheelsEventsProps {
  entries: WheelEntry[];
  results: string[];
  setEntries: (entries: WheelEntry[]) => void;
  setResults: (results: string[]) => void;
  setResult: (result: string | null) => void;
  setWheelName?: (name: string) => void;
  setToast: (toast: { message: string; type: "success" | "error" | "info" }) => void;
}

export function useSavedWheelsEvents({
  entries,
  results,
  setEntries,
  setResults,
  setResult,
  setWheelName,
  setToast,
}: UseSavedWheelsEventsProps) {
  // Use refs so event listeners always access the latest state without rebinding
  const stateRef = useRef({ entries, results });
  useEffect(() => {
    stateRef.current = { entries, results };
  }, [entries, results]);

  useEffect(() => {
    const handleSaveReq = (e: Event) => {
      const customEvent = e as CustomEvent<{ name: string }>;
      const { entries: currentEntries, results: currentResults } = stateRef.current;
      
      if (currentEntries.length === 0) {
        setToast({ message: "Add some entries before saving", type: "error" });
        return;
      }
      
      const success = saveWheelById({
        id: generateWheelId(),
        name: customEvent.detail.name,
        entries: currentEntries,
        results: currentResults,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      
      if (success) {
        window.dispatchEvent(new Event("wheelsUpdated"));
        setToast({ message: `"${customEvent.detail.name}" saved!`, type: "success" });
      } else {
        setToast({ message: "Maximum 10 wheels. Delete one to save a new one.", type: "error" });
      }
    };

    const handleLoadReq = (e: Event) => {
      const customEvent = e as CustomEvent<{ wheel: SavedWheel }>;
      const w = customEvent.detail.wheel;
      setEntries(w.entries);
      setResults(w.results);
      setResult(w.results.length > 0 ? w.results[w.results.length - 1] : null);
      if (setWheelName) setWheelName(w.name);
      setToast({ message: `Loaded "${w.name}"`, type: "success" });
    };

    const handleUpdateReq = (e: Event) => {
      const customEvent = e as CustomEvent<{ wheel: SavedWheel }>;
      const w = customEvent.detail.wheel;
      const { entries: currentEntries, results: currentResults } = stateRef.current;
      
      if (currentEntries.length === 0) {
        setToast({ message: "Cannot update with empty wheel", type: "error" });
        return;
      }
      
      saveWheelById({
        ...w,
        entries: currentEntries,
        results: currentResults,
        updatedAt: new Date().toISOString(),
      });
      window.dispatchEvent(new Event("wheelsUpdated"));
      setToast({ message: `"${w.name}" updated`, type: "success" });
    };

    const handleRenameReq = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string; newName: string }>;
      const { id, newName } = customEvent.detail;
      const wheel = getSavedWheelById(id);
      if (wheel) {
        saveWheelById({ ...wheel, name: newName });
        window.dispatchEvent(new Event("wheelsUpdated"));
        setToast({ message: `Renamed to "${newName}"`, type: "success" });
      }
    };

    window.addEventListener("requestSaveWheel", handleSaveReq);
    window.addEventListener("requestLoadWheel", handleLoadReq);
    window.addEventListener("requestUpdateWheel", handleUpdateReq);
    window.addEventListener("requestRenameWheel", handleRenameReq);

    return () => {
      window.removeEventListener("requestSaveWheel", handleSaveReq);
      window.removeEventListener("requestLoadWheel", handleLoadReq);
      window.removeEventListener("requestUpdateWheel", handleUpdateReq);
      window.removeEventListener("requestRenameWheel", handleRenameReq);
    };
  }, [setEntries, setResults, setResult, setWheelName, setToast]);
}
