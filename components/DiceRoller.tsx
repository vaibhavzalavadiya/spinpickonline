"use client";

import { useState, useCallback } from "react";

interface DiceResult {
    value: number;
    timestamp: number;
}

export default function DiceRoller() {
    const [diceCount, setDiceCount] = useState(1);
    const [sides, setSides] = useState(6);
    const [results, setResults] = useState<number[]>([]);
    const [isRolling, setIsRolling] = useState(false);
    const [history, setHistory] = useState<DiceResult[]>([]);
    const [totalRolls, setTotalRolls] = useState(0);

    const getDiceFace = (value: number, maxSides: number) => {
        if (maxSides !== 6) return value.toString();
        const faces: Record<number, string> = {
            1: "⚀", 2: "⚁", 3: "⚂", 4: "⚃", 5: "⚄", 6: "⚅",
        };
        return faces[value] || value.toString();
    };

    const rollDice = useCallback(() => {
        if (isRolling) return;
        setIsRolling(true);

        // Animate through random values
        let animCount = 0;
        const animInterval = setInterval(() => {
            const tempResults = Array.from({ length: diceCount }, () => {
                const arr = new Uint32Array(1);
                crypto.getRandomValues(arr);
                return (arr[0] % sides) + 1;
            });
            setResults(tempResults);
            animCount++;
            if (animCount >= 12) {
                clearInterval(animInterval);
                // Final roll with crypto
                const finalResults = Array.from({ length: diceCount }, () => {
                    const arr = new Uint32Array(1);
                    crypto.getRandomValues(arr);
                    return (arr[0] % sides) + 1;
                });
                setResults(finalResults);
                setHistory((prev) => [
                    { value: finalResults.reduce((a, b) => a + b, 0), timestamp: Date.now() },
                    ...prev.slice(0, 19),
                ]);
                setTotalRolls((prev) => prev + 1);
                setIsRolling(false);
            }
        }, 60);
    }, [isRolling, diceCount, sides]);

    const total = results.reduce((a, b) => a + b, 0);

    return (
        <div className="space-y-6">
            {/* Dice Display */}
            <div className="flex flex-wrap justify-center gap-4 min-h-[120px] items-center">
                {results.length === 0 ? (
                    <div className="text-gray-400 text-lg">Press Roll to start</div>
                ) : (
                    results.map((value, index) => (
                        <div
                            key={index}
                            className={`
                                flex items-center justify-center
                                ${sides === 6 ? "w-20 h-20 sm:w-24 sm:h-24 rounded-2xl" : "w-20 h-20 sm:w-24 sm:h-24 rounded-2xl"}
                                bg-white border-2 border-gray-200 shadow-lg
                                ${isRolling ? "animate-bounce" : ""}
                                transition-all duration-200
                            `}
                        >
                            <span className={`font-bold ${sides === 6 ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl text-gray-900"}`}>
                                {getDiceFace(value, sides)}
                            </span>
                        </div>
                    ))
                )}
            </div>

            {/* Total Display */}
            {results.length > 0 && diceCount > 1 && (
                <div className="text-center">
                    <span className="text-sm text-gray-500">Total: </span>
                    <span className="text-2xl font-bold text-gray-900">{total}</span>
                </div>
            )}

            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                    <label className="text-sm font-medium text-gray-700">Dice:</label>
                    <select
                        value={diceCount}
                        onChange={(e) => { setDiceCount(Number(e.target.value)); setResults([]); }}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={n}>{n} {n === 1 ? "die" : "dice"}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-3">
                    <label className="text-sm font-medium text-gray-700">Sides:</label>
                    <select
                        value={sides}
                        onChange={(e) => { setSides(Number(e.target.value)); setResults([]); }}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    >
                        {[4, 6, 8, 10, 12, 20, 100].map((n) => (
                            <option key={n} value={n}>D{n}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Roll Button */}
            <div className="text-center">
                <button
                    onClick={rollDice}
                    disabled={isRolling}
                    className={`
                        lg:px-10 px-7 lg:py-3.5 py-3 cursor-pointer rounded-xl font-bold lg:text-lg text-base text-white
                        transition-all duration-200 shadow-lg
                        ${isRolling
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-95"
                        }
                    `}
                >
                    {isRolling ? "Rolling..." : "🎲 Roll Dice"}
                </button>
            </div>

            {/* Stats */}
            {totalRolls > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <div className="text-xs text-blue-600 font-medium">Total Rolls</div>
                        <div className="text-lg font-bold text-blue-900">{totalRolls}</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg text-center">
                        <div className="text-xs text-green-600 font-medium">Last Result</div>
                        <div className="text-lg font-bold text-green-900">{history[0]?.value || "-"}</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg text-center col-span-2 sm:col-span-1">
                        <div className="text-xs text-purple-600 font-medium">Average</div>
                        <div className="text-lg font-bold text-purple-900">
                            {history.length > 0
                                ? (history.reduce((a, b) => a + b.value, 0) / history.length).toFixed(1)
                                : "-"}
                        </div>
                    </div>
                </div>
            )}

            {/* History */}
            {history.length > 1 && (
                <div className="mt-4">
                    <div className="text-xs font-medium text-gray-500 mb-2">Recent Rolls</div>
                    <div className="flex flex-wrap gap-2">
                        {history.slice(0, 12).map((roll, index) => (
                            <span
                                key={roll.timestamp}
                                className={`px-2.5 py-1 rounded-full text-sm font-medium ${index === 0
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-gray-100 text-gray-600"
                                    }`}
                            >
                                {roll.value}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
