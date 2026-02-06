"use client";

import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { IoSparkles, IoTrophyOutline } from "react-icons/io5";
import { MdOutlineCasino } from "react-icons/md";

interface ResultModalProps {
    result: string;
    onClose: () => void;
    onContinue: () => void;
    onRemove?: () => void;
    isOpen: boolean;
}

export default function ResultModal({
    result,
    onClose,
    onContinue,
    onRemove,
    isOpen,
}: ResultModalProps) {
    // Close on Escape key
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

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <div
                    className="bg-white rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto animate-scale-in relative overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 p-2 text-white hover:text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all z-20 cursor-pointer shadow-lg"
                        aria-label="Close"
                    >
                        <FiX className="text-xl" />
                    </button>

                    {/* Success Header with Confetti Effect */}
                    <div className="relative bg-linear-to-r from-green-500 via-emerald-500 to-green-500 p-4 text-center overflow-hidden">
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 left-1/4 w-16 h-16 bg-white rounded-full animate-float-1" />
                            <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white rounded-full animate-float-2" />
                            <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-white rounded-full animate-float-3" />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-2 animate-bounce-slow">
                                <IoTrophyOutline className="text-3xl text-white drop-shadow-lg" />
                            </div>
                            <h2 className="text-lg font-bold text-white drop-shadow-md">
                                🎉 We have a winner! 🎉
                            </h2>
                        </div>
                    </div>

                    {/* Result Display */}
                    <div className="md:p-6 p-4 text-center">
                        <div className="mb-4">
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-2">
                                The result is...
                            </p>
                            <div className="inline-block">
                                <div className="bg-linear-to-r from-pink-100 via-purple-100 to-pink-100 md:px-6 px-4 md:py-3 py-2 rounded-xl border-2 border-pink-200 shadow-lg transform hover:scale-105 transition-transform">
                                    <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-linear-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        {result}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Sparkles */}
                        <div className="flex justify-center gap-2 mb-4">
                            <IoSparkles className="text-yellow-400 text-xl animate-pulse" />
                            <IoSparkles className="text-pink-400 text-lg animate-pulse delay-75" />
                            <IoSparkles className="text-purple-400 text-xl animate-pulse delay-150" />
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2.5">
                            <button
                                onClick={onContinue}
                                className="w-full cursor-pointer md:text-sm text-xs md:px-5 px-4 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm"
                            >
                                <MdOutlineCasino className="text-lg" />
                                <span>Spin Again</span>
                            </button>

                            {onRemove && (
                                <button
                                    onClick={onRemove}
                                    className="w-full cursor-pointer md:text-sm text-xs md:px-5 px-4 py-2.5 bg-linear-to-r from-red-50 to-pink-50 text-red-600 font-semibold rounded-xl hover:from-red-100 hover:to-pink-100 transition-all border-2 border-red-200 hover:border-red-300 flex items-center justify-center gap-2 text-sm"
                                >
                                    <FiX className="text-base" />
                                    <span>Remove "{result}" and continue</span>
                                </button>
                            )}

                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes float-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -20px) scale(1.1);
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-15px, 15px) scale(0.9);
          }
        }

        @keyframes float-3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(10px, -25px) scale(1.2);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 2.5s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 3.5s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
        </>
    );
}
