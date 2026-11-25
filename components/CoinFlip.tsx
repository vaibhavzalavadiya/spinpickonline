"use client";

import { useState, useCallback, useEffect } from "react";
import { getSecureRandomInt } from "@/lib/wheel-utils";
import { trackEvent } from "@/lib/analytics";

type FlipResult = "heads" | "tails";
type CoinCount = 1 | 2 | 3 | 5;

interface CoinFlipStats {
  heads: number;
  tails: number;
  total: number;
  history: FlipResult[];
}

export default function CoinFlip() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [coinCount, setCoinCount] = useState<CoinCount>(1);
  const [headsLabel, setHeadsLabel] = useState("HEADS");
  const [tailsLabel, setTailsLabel] = useState("TAILS");
  const [showCustomLabels, setShowCustomLabels] = useState(false);
  const [coinResults, setCoinResults] = useState<FlipResult[]>([]);
  const [result, setResult] = useState<FlipResult | null>(null);
  const [stats, setStats] = useState<CoinFlipStats>({
    heads: 0,
    tails: 0,
    total: 0,
    history: [],
  });

  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const flipCoin = useCallback(() => {
    if (isFlipping) return;
    setIsFlipping(true);

    const outcomes: FlipResult[] = Array.from({ length: coinCount }, () =>
      getSecureRandomInt(2) === 0 ? "heads" : "tails"
    );
    const primaryOutcome = outcomes[0];

    const extraHalfTurns = 7 + getSecureRandomInt(4);
    const totalHalfTurns =
      primaryOutcome === "heads" ? extraHalfTurns * 2 : extraHalfTurns * 2 + 1;
    const targetRotation = rotation + totalHalfTurns * 180;
    setRotation(targetRotation);

    setTimeout(() => {
      setCoinResults(outcomes);
      setResult(primaryOutcome);
      const headsHit = outcomes.filter((o) => o === "heads").length;
      const tailsHit = outcomes.filter((o) => o === "tails").length;
      setStats((prev) => ({
        heads: prev.heads + headsHit,
        tails: prev.tails + tailsHit,
        total: prev.total + outcomes.length,
        history: [...prev.history, ...outcomes].slice(-20),
      }));
      setIsFlipping(false);
      trackEvent("tool_action", {
        tool_type: "coin_flip",
        coin_count: coinCount,
        heads_hit: headsHit,
        tails_hit: tailsHit,
      });
    }, 1200);
  }, [isFlipping, rotation, coinCount]);

  const resetStats = useCallback(() => {
    setStats({ heads: 0, tails: 0, total: 0, history: [] });
    setCoinResults([]);
    setResult(null);
  }, []);

  // Keyboard Spacebar support (skip when user types inside custom label inputs)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.code === "Space" && !isFlipping) {
        e.preventDefault();
        flipCoin();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [flipCoin, isFlipping]);

  const headsPercent = stats.total > 0 ? ((stats.heads / stats.total) * 100).toFixed(1) : "0.0";
  const tailsPercent = stats.total > 0 ? ((stats.tails / stats.total) * 100).toFixed(1) : "0.0";

  const headsDisplay = headsLabel.trim() || "HEADS";
  const tailsDisplay = tailsLabel.trim() || "TAILS";
  const headsShort = headsDisplay.charAt(0).toUpperCase();
  const tailsShort = tailsDisplay.charAt(0).toUpperCase();

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!mounted ? (
        <div className="flex flex-col items-center gap-4 sm:gap-5 py-8">
          <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full bg-gradient-to-br from-amber-100 to-orange-100 animate-pulse" />
          <div className="w-40 h-10 rounded-lg bg-gray-100 animate-pulse" />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          {/* Quick Options Bar: Coin Count + Custom Side Labels */}
          <div className="w-full flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-100">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-gray-600 mr-1">Coins:</span>
              {([1, 2, 3, 5] as const).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => { setCoinCount(n); setCoinResults([]); setResult(null); }}
                  disabled={isFlipping}
                  className={`min-h-[32px] px-2.5 py-1 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                    coinCount === n
                      ? "bg-amber-500 text-white border-amber-500"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:border-amber-300"
                  }`}
                >
                  {n}x
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setShowCustomLabels((v) => !v)}
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 cursor-pointer px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100"
            >
              {showCustomLabels ? "Hide Custom Sides" : "Customize Sides"}
            </button>
          </div>

          {showCustomLabels && (
            <div className="w-full grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
              <div>
                <label htmlFor="coin-heads-label" className="block text-[11px] font-semibold text-gray-700 mb-1">
                  Side 1 (Heads)
                </label>
                <input
                  id="coin-heads-label"
                  type="text"
                  maxLength={14}
                  value={headsLabel}
                  onChange={(e) => setHeadsLabel(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-white border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="coin-tails-label" className="block text-[11px] font-semibold text-gray-700 mb-1">
                  Side 2 (Tails)
                </label>
                <input
                  id="coin-tails-label"
                  type="text"
                  maxLength={14}
                  value={tailsLabel}
                  onChange={(e) => setTailsLabel(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-white border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Result Text */}
          <div className="text-center min-h-[32px]">
            {result && !isFlipping && (
              <div className="space-y-1 animate-fade-in">
                {coinCount === 1 ? (
                  <p className={`text-lg sm:text-2xl font-bold tracking-wide ${result === "heads" ? "text-amber-700" : "text-blue-700"}`}>
                    {result === "heads" ? `🪙 ${headsDisplay}!` : `🪙 ${tailsDisplay}!`}
                  </p>
                ) : (
                  <div className="flex flex-wrap justify-center gap-2">
                    {coinResults.map((res, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold border ${
                          res === "heads"
                            ? "bg-amber-50 text-amber-800 border-amber-300"
                            : "bg-blue-50 text-blue-800 border-blue-300"
                        }`}
                      >
                        Coin {idx + 1}: {res === "heads" ? headsDisplay : tailsDisplay}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
            {isFlipping && <p className="text-base sm:text-lg text-gray-600 animate-pulse">Flipping...</p>}
            {!result && !isFlipping && (
              <p className="text-sm sm:text-base text-gray-600">Tap the coin or press the button</p>
            )}
          </div>

          {/* The Coin */}
          <div
            className="coin-container cursor-pointer select-none"
            onClick={flipCoin}
            onKeyDown={(e) => { if (e.key === "Enter") flipCoin(); }}
            role="button"
            aria-label={`Flip ${coinCount === 1 ? "the coin" : `${coinCount} coins`}`}
            tabIndex={0}
          >
            <div
              className={`coin ${isFlipping ? "flipping" : ""}`}
              style={{
                transform: `rotateY(${rotation}deg)`,
                transition: isFlipping ? "transform 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)" : "transform 0.1s",
              }}
            >
              <div className="coin-face coin-heads">
                <div className="coin-inner-ring">
                  <span className="coin-text">{headsShort}</span>
                  <span className="coin-label">{headsDisplay}</span>
                </div>
              </div>
              <div className="coin-face coin-tails">
                <div className="coin-inner-ring">
                  <span className="coin-text">{tailsShort}</span>
                  <span className="coin-label">{tailsDisplay}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flip Button */}
          <button
            type="button"
            onClick={flipCoin}
            disabled={isFlipping}
            className="w-full max-w-[250px] cursor-pointer sm:max-w-[280px] py-2.5 sm:py-3 px-5 sm:px-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm sm:text-base rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
          >
            {isFlipping ? "Flipping..." : coinCount === 1 ? "FLIP COIN" : `FLIP ${coinCount} COINS`}
          </button>

          <p className="text-xs text-gray-600 sm:block hidden">
            or press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-700 font-mono text-xs border border-gray-300">Space</kbd>
          </p>
        </div>
      )}

      {/* Stats Section */}
      {stats.total > 0 && (
        <div className="mt-5 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm font-semibold text-gray-700">Session Stats</h2>
              <button
                type="button"
                onClick={resetStats}
                className="text-xs text-gray-600 hover:text-red-600 transition-colors cursor-pointer"
              >
                Reset
              </button>
            </div>

            <div className="w-full h-6 sm:h-8 bg-gray-100 rounded-full overflow-hidden flex mb-2 sm:mb-3">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center transition-all duration-500"
                style={{ width: `${headsPercent}%` }}
              >
                {stats.heads > 0 && <span className="text-xs font-bold text-white drop-shadow-sm">{headsPercent}%</span>}
              </div>
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center transition-all duration-500"
                style={{ width: `${tailsPercent}%` }}
              >
                {stats.tails > 0 && <span className="text-xs font-bold text-white drop-shadow-sm">{tailsPercent}%</span>}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="bg-amber-50 rounded-lg py-1.5 sm:py-2 px-2 sm:px-3">
                <p className="text-lg sm:text-xl font-bold text-amber-700">{stats.heads}</p>
                <p className="text-xs text-amber-800 font-medium">{headsDisplay}</p>
              </div>
              <div className="bg-gray-50 rounded-lg py-1.5 sm:py-2 px-2 sm:px-3">
                <p className="text-lg sm:text-xl font-bold text-gray-800">{stats.total}</p>
                <p className="text-xs text-gray-600 font-medium">Total</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-1.5 sm:py-2 px-2 sm:px-3">
                <p className="text-lg sm:text-xl font-bold text-blue-700">{stats.tails}</p>
                <p className="text-xs text-blue-800 font-medium">{tailsDisplay}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Flip History</h2>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {stats.history.map((flip, i) => (
                <span
                  key={i}
                  className={`w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full text-[10px] sm:text-xs font-bold ${
                    flip === "heads" ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {flip === "heads" ? headsShort : tailsShort}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .coin-container {
          perspective: 800px;
          width: 150px;
          height: 150px;
        }
        @media (min-width: 640px) {
          .coin-container {
            width: 200px;
            height: 200px;
          }
        }
        .coin {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
        }
        .coin.flipping {
          animation: coinBounce 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes coinBounce {
          0% { top: 0; }
          30% { top: -50px; }
          60% { top: -15px; }
          80% { top: -5px; }
          100% { top: 0; }
        }
        @media (min-width: 640px) {
          @keyframes coinBounce {
            0% { top: 0; }
            30% { top: -80px; }
            60% { top: -20px; }
            80% { top: -5px; }
            100% { top: 0; }
          }
        }
        .coin-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 4px 15px rgba(0, 0, 0, 0.15),
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            inset 0 -2px 4px rgba(0, 0, 0, 0.1);
        }
        .coin-heads {
          background: linear-gradient(145deg, #f59e0b, #d97706, #b45309);
        }
        .coin-tails {
          background: linear-gradient(145deg, #3b82f6, #2563eb, #1d4ed8);
          transform: rotateY(180deg);
        }
        .coin-inner-ring {
          width: 80%;
          height: 80%;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }
        .coin-text {
          font-size: 2rem;
          font-weight: 900;
          color: white;
          line-height: 1;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        @media (min-width: 640px) {
          .coin-text {
            font-size: 3rem;
          }
        }
        .coin-label {
          font-size: 0.65rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
