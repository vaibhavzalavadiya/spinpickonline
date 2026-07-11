"use client";

import { useState, useCallback, useEffect } from "react";

type FlipResult = "heads" | "tails";

interface CoinFlipStats {
  heads: number;
  tails: number;
  total: number;
  history: FlipResult[];
}

export default function CoinFlip() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<FlipResult | null>(null);
  const [flipCount, setFlipCount] = useState(0);
  const [stats, setStats] = useState<CoinFlipStats>({
    heads: 0,
    tails: 0,
    total: 0,
    history: [],
  });

  const [rotation, setRotation] = useState(0);

  const flipCoin = useCallback(() => {
    if (isFlipping) return;
    setIsFlipping(true);

    // Use crypto for true randomness
    const randomValue = crypto.getRandomValues(new Uint32Array(1))[0];
    const newResult: FlipResult = randomValue % 2 === 0 ? "heads" : "tails";

    // Calculate rotation: heads = even * 180, tails = odd * 180
    // Add extra full rotations (7-10 half turns) for visual effect
    const extraHalfTurns = 7 + Math.floor(Math.random() * 4); // 7-10 half turns
    const totalHalfTurns = newResult === "heads"
      ? extraHalfTurns * 2 // Even number = lands on heads
      : extraHalfTurns * 2 + 1; // Odd number = lands on tails (180deg offset)
    const targetRotation = rotation + totalHalfTurns * 180;
    setRotation(targetRotation);

    // Increment flip count for key reset
    setFlipCount((prev) => prev + 1);

    // Wait for animation to finish before showing result
    setTimeout(() => {
      setResult(newResult);
      setStats((prev) => ({
        heads: prev.heads + (newResult === "heads" ? 1 : 0),
        tails: prev.tails + (newResult === "tails" ? 1 : 0),
        total: prev.total + 1,
        history: [...prev.history.slice(-19), newResult],
      }));
      setIsFlipping(false);
    }, 1200);
  }, [isFlipping]);

  const resetStats = useCallback(() => {
    setStats({ heads: 0, tails: 0, total: 0, history: [] });
    setResult(null);
  }, []);

  // Keyboard support - spacebar to flip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Coin Container */}
      <div className="flex flex-col items-center gap-6 sm:gap-8">
        {/* The Coin */}
        <div
          className="coin-container cursor-pointer select-none"
          onClick={flipCoin}
          role="button"
          aria-label="Flip the coin"
          tabIndex={0}
        >
          <div
            className={`coin ${isFlipping ? "flipping" : ""}`}
            style={{
              transform: `rotateY(${rotation}deg)`,
              transition: isFlipping ? "transform 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)" : "transform 0.1s",
            }}
          >
            {/* Heads side */}
            <div className="coin-face coin-heads">
              <div className="coin-inner-ring">
                <span className="coin-text">H</span>
                <span className="coin-label">HEADS</span>
              </div>
            </div>
            {/* Tails side */}
            <div className="coin-face coin-tails">
              <div className="coin-inner-ring">
                <span className="coin-text">T</span>
                <span className="coin-label">TAILS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Result Text */}
        <div className="text-center min-h-[2.5rem]">
          {result && !isFlipping && (
            <p
              className={`text-2xl sm:text-3xl font-bold tracking-wide animate-fade-in ${result === "heads" ? "text-amber-600" : "text-blue-600"
                }`}
            >
              {result === "heads" ? "🪙 HEADS!" : "🪙 TAILS!"}
            </p>
          )}
          {isFlipping && (
            <p className="text-lg text-gray-400 animate-pulse">Flipping...</p>
          )}
          {!result && !isFlipping && (
            <p className="text-base text-gray-400">Tap the coin or press the button</p>
          )}
        </div>

        {/* Flip Button */}
        <button
          onClick={flipCoin}
          disabled={isFlipping}
          className="w-full max-w-[280px] py-3.5 px-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
        >
          {isFlipping ? "Flipping..." : "FLIP COIN"}
        </button>

        <p className="text-xs text-gray-400 -mt-3 sm:block hidden">
          or press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-500 font-mono text-xs border border-gray-200">Space</kbd>
        </p>
      </div>

      {/* Stats Section */}
      {stats.total > 0 && (
        <div className="mt-8 sm:mt-10 space-y-4">
          {/* Heads vs Tails Bar */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-semibold text-gray-700">Session Stats</h3>
              <button
                onClick={resetStats}
                className="text-xs text-gray-400 hover:text-red-500 transition-colors"
              >
                Reset
              </button>
            </div>

            {/* Visual Bar */}
            <div className="w-full h-8 bg-gray-100 rounded-full overflow-hidden flex mb-3">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center transition-all duration-500"
                style={{ width: `${headsPercent}%` }}
              >
                {stats.heads > 0 && (
                  <span className="text-xs font-bold text-white drop-shadow-sm">
                    {headsPercent}%
                  </span>
                )}
              </div>
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center transition-all duration-500"
                style={{ width: `${tailsPercent}%` }}
              >
                {stats.tails > 0 && (
                  <span className="text-xs font-bold text-white drop-shadow-sm">
                    {tailsPercent}%
                  </span>
                )}
              </div>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-amber-50 rounded-lg py-2 px-3">
                <p className="text-xl font-bold text-amber-600">{stats.heads}</p>
                <p className="text-xs text-amber-700 font-medium">Heads</p>
              </div>
              <div className="bg-gray-50 rounded-lg py-2 px-3">
                <p className="text-xl font-bold text-gray-700">{stats.total}</p>
                <p className="text-xs text-gray-500 font-medium">Total</p>
              </div>
              <div className="bg-blue-50 rounded-lg py-2 px-3">
                <p className="text-xl font-bold text-blue-600">{stats.tails}</p>
                <p className="text-xs text-blue-700 font-medium">Tails</p>
              </div>
            </div>
          </div>

          {/* Flip History */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Flip History</h3>
            <div className="flex flex-wrap gap-1.5">
              {stats.history.map((flip, i) => (
                <span
                  key={i}
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold ${flip === "heads"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-blue-100 text-blue-700"
                    }`}
                >
                  {flip === "heads" ? "H" : "T"}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .coin-container {
          perspective: 800px;
          width: 160px;
          height: 160px;
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
        /* When flipping, add a bounce effect via CSS animation while the inline transform handles the rotation */
        .coin.flipping {
          animation: coinBounce 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes coinBounce {
          0% { top: 0; }
          30% { top: -80px; }
          60% { top: -20px; }
          80% { top: -5px; }
          100% { top: 0; }
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
          font-size: 2.5rem;
          font-weight: 900;
          color: white;
          line-height: 1;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        @media (min-width: 640px) {
          .coin-text {
            font-size: 3.5rem;
          }
        }
        .coin-label {
          font-size: 0.65rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0.15em;
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
