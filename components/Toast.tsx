"use client";

import { useEffect } from "react";
import { FiCheck, FiX, FiAlertCircle, FiInfo } from "react-icons/fi";

interface ToastProps {
    message: string;
    type?: "success" | "error" | "info" | "warning";
    onClose: () => void;
    duration?: number;
}

export default function Toast({ message, type = "info", onClose, duration = 3000 }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const styles = {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        warning: "bg-yellow-500 text-white",
    };

    const icons = {
        success: <FiCheck className="text-xl" />,
        error: <FiX className="text-xl" />,
        info: <FiInfo className="text-xl" />,
        warning: <FiAlertCircle className="text-xl" />,
    };

    return (
        <div className="fixed top-20 right-4 z-50 animate-slide-in-right">
            <div
                className={`${styles[type]} sm:px-6 sm:py-4 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 sm:min-w-75 sm:max-w-md max-w-75`}
            >
                {icons[type]}
                <p className="flex-1 font-medium text-sm">{message}</p>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
                    aria-label="Close"
                >
                    <FiX className="text-lg" />
                </button>
            </div>
        </div>
    );
}
