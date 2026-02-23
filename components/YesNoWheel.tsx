"use client";

import { useState, useMemo, useCallback } from "react";
import Wheel from "@/components/Wheel";
import ResultModal from "@/components/ResultModal";
import Confetti from "@/components/Confetti";
import Toast from "@/components/Toast";
import { useSoundEffects } from "@/lib/useSoundEffects";
import { WheelEntry } from "@/lib/types";
import { FiSettings, FiRotateCcw, FiShare2, FiVolume2, FiVolumeX } from "react-icons/fi";
import { MdOutlineCasino } from "react-icons/md";
import { generateShareUrl, copyToClipboard } from "@/lib/wheel-utils";

type Mode = 'yes-no' | 'yes-no-maybe';

export default function YesNoWheel() {
    const [mode, setMode] = useState<Mode>('yes-no');
    const [sets, setSets] = useState<number>(2);
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [yesCount, setYesCount] = useState(0);
    const [noCount, setNoCount] = useState(0);
    const [maybeCount, setMaybeCount] = useState(0);
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

    const { isMuted, toggleMute, playTick, playWinFanfare, playClick } = useSoundEffects();

    const entries = useMemo(() => {
        const newEntries: WheelEntry[] = [];
        const yesColor = "#10b981";
        const noColor = "#ef4444";
        const maybeColor = "#f59e0b";

        for (let i = 0; i < sets; i++) {
            newEntries.push({ id: `yes-${i}`, label: "YES", color: yesColor });
            newEntries.push({ id: `no-${i}`, label: "NO", color: noColor });

            if (mode === 'yes-no-maybe') {
                newEntries.push({ id: `maybe-${i}`, label: "MAYBE", color: maybeColor });
            }
        }
        return newEntries;
    }, [mode, sets]);

    const handleSpin = () => {
        if (isSpinning) return;
        playClick();
        setResult(null);
        setShowConfetti(false);
        setIsSpinning(true);
    };

    const handleSegmentTick = useCallback(() => {
        playTick();
    }, [playTick]);

    const handleResult = (val: string) => {
        setResult(val);
        setIsSpinning(false);
        setShowConfetti(true);
        setShowModal(true);
        playWinFanfare();

        // Update counts
        if (val === "YES") setYesCount(prev => prev + 1);
        else if (val === "NO") setNoCount(prev => prev + 1);
        else if (val === "MAYBE") setMaybeCount(prev => prev + 1);

        setTimeout(() => setShowConfetti(false), 4000);
    };

    const resetCounts = () => {
        playClick();
        setYesCount(0);
        setNoCount(0);
        setMaybeCount(0);
    };

    const shareWheel = async () => {
        playClick();
        const shareUrl = generateShareUrl(entries, undefined, []);
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
        <>
            {/* Confetti */}
            <Confetti isActive={showConfetti} />

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] md:gap-8 gap-5 lg:gap-12 items-start">

                {/* Left: Wheel Section */}
                <div className="flex flex-col items-center justify-start order-1 lg:order-1">
                    <div className="relative w-full max-w-[500px] lg:max-w-full">
                        <Wheel
                            entries={entries}
                            onResult={handleResult}
                            isSpinning={isSpinning}
                            result={result}
                            showButton={false}
                            onSpinRequest={handleSpin}
                            onSegmentTick={handleSegmentTick}
                        />
                    </div>
                </div>

                {/* Right: Controls Section */}
                <div className="md:space-y-6 space-y-4 order-2 lg:order-2">

                    {/* Scoreboard */}
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <div className="flex justify-between items-center mb-3.5">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Results</h3>
                            <div className="flex items-center gap-4">
                               
                                 <button
                                    onClick={resetCounts}
                                    className="text-gray-400 cursor-pointer hover:text-blue-600 text-xs font-semibold flex items-center gap-1 transition-colors rounded hover:bg-blue-50"
                                >
                                    <FiRotateCcw /> Reset
                                </button>
                                <button
                                    onClick={toggleMute}
                                    className="cursor-pointer text-gray-400 hover:text-blue-600 transition-colors rounded hover:bg-blue-50"
                                    aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
                                    title={isMuted ? "Turn on sounds" : "Mute sounds"}
                                >
                                    {isMuted ? (
                                        <FiVolumeX className="text-base" />
                                    ) : (
                                        <FiVolume2 className="text-base text-blue-600" />
                                    )}
                                </button>
                              
                            </div>
                        </div>
                        <div className={`grid ${mode === 'yes-no-maybe' ? 'grid-cols-3' : 'grid-cols-2'} gap-3`}>
                            <div className="bg-white rounded-xl sm:p-3 p-2 text-center shadow-sm border-b-4 border-green-500 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                                <div className="sm:text-3xl text-2xl md:text-4xl font-black text-gray-800">{yesCount}</div>
                                <div className="text-[10px] sm:text-xs font-bold text-green-600 uppercase tracking-wider mt-1">YES</div>
                            </div>
                            <div className="bg-white rounded-xl sm:p-3 p-2 text-center shadow-sm border-b-4 border-red-500 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                                <div className="sm:text-3xl text-2xl md:text-4xl font-black text-gray-800">{noCount}</div>
                                <div className="text-[10px] sm:text-xs font-bold text-red-500 uppercase tracking-wider mt-1">NO</div>
                            </div>
                            {mode === 'yes-no-maybe' && (
                                <div className="bg-white rounded-xl sm:p-3 p-2 text-center shadow-sm border-b-4 border-orange-400 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                                    <div className="sm:text-3xl text-2xl md:text-4xl font-black text-gray-800">{maybeCount}</div>
                                    <div className="text-[10px] sm:text-xs font-bold text-orange-500 uppercase tracking-wider mt-1">MAYBE</div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* PRIMARY ACTION BUTTON */}
                    <button
                        onClick={handleSpin}
                        disabled={isSpinning}
                        className="w-full cursor-pointer md:py-5 py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-base md:text-xl md:rounded-2xl rounded-xl shadow-xl hover:shadow-2xl hover:shadow-blue-300 transform hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                        {isSpinning ? (
                            <>
                                <MdOutlineCasino className="md:text-3xl text-xl animate-spin" />
                                <span>SPINNING...</span>
                            </>
                        ) : (
                            <>
                                <MdOutlineCasino className="md:text-3xl text-xl group-hover:rotate-12 transition-transform" />
                                <span>SPIN THE WHEEL</span>
                            </>
                        )}
                    </button>


                    {/* Settings Panel */}
                    <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
                        <div className="bg-gray-50/50 border-b border-gray-100 p-4 flex justify-between items-center">
                            <h3 className="font-bold text-gray-800 flex items-center gap-2 text-sm uppercase tracking-wide">
                                <FiSettings className="text-gray-400" />
                                Configure Wheel
                            </h3>
                            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">{entries.length} Segments</span>
                        </div>

                        <div className="md:p-5 p-4 md:space-y-6 space-y-4">
                            {/* Mode Selection */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-3">Answer Format</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => { setMode('yes-no'); playClick(); }}
                                        className={`py-3 cursor-pointer px-2 rounded-xl sm:text-sm text-[13px] font-bold transition-all border-2 relative overflow-hidden ${mode === 'yes-no'
                                            ? 'bg-gray-900 text-white border-gray-900 shadow-lg'
                                            : 'bg-white text-gray-600 border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        YES / NO
                                        {mode === 'yes-no' && <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-bl-lg"></div>}
                                    </button>
                                    <button
                                        onClick={() => { setMode('yes-no-maybe'); playClick(); }}
                                        className={`py-3 cursor-pointer px-2 rounded-xl sm:text-sm text-[13px] font-bold transition-all border-2 relative overflow-hidden ${mode === 'yes-no-maybe'
                                            ? 'bg-gray-900 text-white border-gray-900 shadow-lg'
                                            : 'bg-white text-gray-600 border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        YES / NO / MAYBE
                                        {mode === 'yes-no-maybe' && <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-bl-lg"></div>}
                                    </button>
                                </div>
                            </div>

                            {/* Number of Input Sets */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-3">
                                    Wheel Segments (Multiplier)
                                </label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => { setSets(num); playClick(); }}
                                            className={`flex-1 cursor-pointer sm:py-3 py-2 sm:text-sm text-[13px] md:rounded-xl rounded-md text-sm font-bold transition-all border-2 ${sets === num
                                                ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
                                                : 'bg-white text-gray-600 border-gray-100 hover:border-blue-200 hover:text-blue-600'
                                                }`}
                                        >
                                            {num}x
                                        </button>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-400 mt-2 text-center">
                                    Increases fairness by adding more segments
                                </p>
                            </div>

                            {/* Share Wheel */}
                            <div>
                                <button
                                    onClick={shareWheel}
                                    className="w-full cursor-pointer md:px-6 px-4 lg:py-3 py-2 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 text-sm active:scale-[0.98]"
                                >
                                    <FiShare2 className="text-lg" />
                                    <span>Share Wheel</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Result Modal */}
            {/* Toast Notification */}
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}

            {result && (
                <ResultModal
                    result={result}
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onContinue={() => setShowModal(false)}
                    onRemove={() => setShowModal(false)}
                />
            )}
        </>
    );
}
