"use client";

import { useState, useMemo, useCallback } from "react";
import Wheel from "@/components/Wheel";
import ResultModal from "@/components/ResultModal";
import { WheelEntry } from "@/lib/types";
import { FiSettings, FiType, FiRotateCcw } from "react-icons/fi";
import { MdOutlineCasino } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";

type Mode = 'yes-no' | 'yes-no-maybe';

export default function YesNoWheel() {
    const [mode, setMode] = useState<Mode>('yes-no');
    const [sets, setSets] = useState<number>(2);
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [yesCount, setYesCount] = useState(0);
    const [noCount, setNoCount] = useState(0);
    const [maybeCount, setMaybeCount] = useState(0);

    const entries = useMemo(() => {
        const newEntries: WheelEntry[] = [];
        // Using distinct colors for Yes/No/Maybe
        // Yes: Green, No: Red, Maybe: Orange
        const yesColor = "#10b981";
        const noColor = "#ef4444";
        const maybeColor = "#f59e0b";

        for (let i = 0; i < sets; i++) {
            // Interleave the entries: Yes, No, Maybe, Yes, No, Maybe...
            // Or Yes, No, Yes, No...
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
        setResult(null);
        setIsSpinning(true);
    };

    const handleResult = (val: string) => {
        setResult(val);
        setIsSpinning(false);
        setShowModal(true);

        // Update counts
        if (val === "YES") setYesCount(prev => prev + 1);
        else if (val === "NO") setNoCount(prev => prev + 1);
        else if (val === "MAYBE") setMaybeCount(prev => prev + 1);
    };

    const resetCounts = () => {
        setYesCount(0);
        setNoCount(0);
        setMaybeCount(0);
    };

    return (
        <>
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
                            />
                        </div>
                    </div>

                    {/* Right: Controls Section */}
                    <div className="md:space-y-6 space-y-4 order-2 lg:order-2">

                        {/* Scoreboard - Made more compact & stylish */}
                        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Results</h3>
                                <button
                                    onClick={resetCounts}
                                    className="text-gray-400 cursor-pointer hover:text-blue-600 text-xs font-semibold flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-blue-50"
                                >
                                    <FiRotateCcw /> Reset
                                </button>
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

                        {/* PRIMARY ACTION BUTTON - Moved out for easy access */}
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

                        {/* Settings Panel - Cleaned up */}
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
                                            onClick={() => setMode('yes-no')}
                                            className={`py-3 cursor-pointer px-2 rounded-xl sm:text-sm text-[13px] font-bold transition-all border-2 relative overflow-hidden ${mode === 'yes-no'
                                                ? 'bg-gray-900 text-white border-gray-900 shadow-lg'
                                                : 'bg-white text-gray-600 border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                                                }`}
                                        >
                                            YES / NO
                                            {mode === 'yes-no' && <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-bl-lg"></div>}
                                        </button>
                                        <button
                                            onClick={() => setMode('yes-no-maybe')}
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
                                                onClick={() => setSets(num)}
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
                    onContinue={() => setShowModal(false)}
                    onRemove={() => setShowModal(false)}
                />
            )}
        </>
    );
}
