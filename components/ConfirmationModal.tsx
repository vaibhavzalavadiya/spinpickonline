"use client";

import { useEffect } from "react";
import { FiAlertTriangle, FiX } from "react-icons/fi";

interface ConfirmationModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    onCancel: () => void;
    type?: "danger" | "warning" | "info";
}

export default function ConfirmationModal({
    isOpen,
    title,
    message,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    onConfirm,
    onCancel,
    type = "warning",
}: ConfirmationModalProps) {
    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onCancel();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onCancel]);

    if (!isOpen) return null;

    const typeStyles = {
        danger: "bg-red-100 text-red-600",
        warning: "bg-yellow-100 text-yellow-600",
        info: "bg-blue-100 text-blue-600",
    };

    const buttonStyles = {
        danger: "bg-red-600 hover:bg-red-700",
        warning: "bg-yellow-600 hover:bg-yellow-700",
        info: "bg-blue-600 hover:bg-blue-700",
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
                onClick={onCancel}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <div
                    className="bg-white sm:rounded-2xl rounded-xl shadow-2xl max-w-sm w-full pointer-events-auto animate-scale-in overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="sm:p-6 p-4 text-center">
                        <div className={`inline-flex items-center justify-center sm:w-16 sm:h-16 w-12 h-12 rounded-full sm:mb-4 mb-3 ${typeStyles[type]}`}>
                            <FiAlertTriangle className="sm:text-3xl text-2xl" />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-600 sm:mb-8 mb-5 sm:text-base text-sm">{message}</p>

                        <div className="flex gap-3">
                            <button
                                onClick={onCancel}
                                className="flex-1 px-4 py-2.5 sm:text-base text-sm bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all cursor-pointer"
                            >
                                {cancelLabel}
                            </button>
                            <button
                                onClick={onConfirm}
                                className={`flex-1 px-4 py-2.5 sm:text-base text-sm text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer ${buttonStyles[type]}`}
                            >
                                {confirmLabel}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
