import { useState, useEffect } from "react";
import { FiX, FiCheck } from "react-icons/fi";

interface BulkAddModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (entries: string[]) => void;
}

export default function BulkAddModal({ isOpen, onClose, onAdd }: BulkAddModalProps) {
    const [text, setText] = useState("");

    // Handle escape key and body scroll lock
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleAdd = () => {
        const entries = text
            .split(/[\n,]+/) // Split by newline or comma
            .map((s) => s.trim())
            .filter((s) => s.length > 0);

        if (entries.length > 0) {
            onAdd(entries);
            setText("");
            onClose();
        }
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
                onClick={onClose}
            />

            {/* Modal Wrapper - Ensures proper scrolling/centering on small screens */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <div
                    className="bg-white rounded-2xl shadow-xl w-full max-w-[470px] pointer-events-auto flex flex-col max-h-[90vh] animate-scale-in overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="p-4 sm:px-5 bg-gray-50 border-b border-gray-100 flex items-center justify-between shrink-0">
                        <h3 className="text-base sm:text-lg font-bold text-gray-800">Bulk Add Entries</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                            aria-label="Close modal"
                        >
                            <FiX className="text-xl" />
                        </button>
                    </div>

                    {/* Body - Scrollable content area */}
                    <div className="p-4 sm:p-5 overflow-y-auto custom-scrollbar">
                        <p className="text-sm text-gray-600 mb-3">
                            Paste your list below. Separate items with <strong>newlines</strong> or <strong>commas</strong>.
                        </p>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder={"Alice\nBob\nCharlie\nDiana"}
                            className="w-full h-48 sm:h-56 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all resize-none text-sm leading-relaxed custom-scrollbar"
                            autoFocus
                        />
                        <div className="mt-2 text-right text-xs text-gray-500 font-medium">
                            {text.split(/[\n,]+/).filter(s => s.trim().length > 0).length} entries detected
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 sm:px-5 bg-gray-50 border-t border-gray-100 flex justify-end gap-3 shrink-0 rounded-b-2xl">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-200 rounded-lg transition-colors text-sm cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleAdd}
                            disabled={!text.trim()}
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer text-sm"
                        >
                            <FiCheck className="text-lg" />
                            Add Entries
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
