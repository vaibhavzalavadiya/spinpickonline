"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import Link from "next/link";
import Wheel from "@/components/Wheel";
import AdSenseDisplay from "@/components/AdSenseDisplay";
import dynamic from "next/dynamic";
import Toast from "@/components/Toast";
import { useSoundEffects } from "@/lib/useSoundEffects";
import { WheelEntry } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";
import { generateShareUrl, generateEmbedUrl, copyToClipboard } from "@/lib/wheel-utils";
import { FiSettings, FiRotateCcw, FiShare2, FiVolume2, FiVolumeX } from "react-icons/fi";
import { MdOutlineCasino } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";

const ResultModal = dynamic(() => import("@/components/ResultModal"), { ssr: false });
const Confetti = dynamic(() => import("@/components/Confetti"), { ssr: false });
const ShareModal = dynamic(() => import("@/components/ShareModal"), { ssr: false });

type Mode = "yes-no" | "yes-no-maybe";
type SeriesTarget = 1 | 2 | 3; // 1 = Free Spin, 2 = Best of 3, 3 = Best of 5

export default function YesNoWheel() {
  const [mode, setMode] = useState<Mode>("yes-no");
  const [sets, setSets] = useState<number>(2);
  const [seriesTarget, setSeriesTarget] = useState<SeriesTarget>(1);
  const [question, setQuestion] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [seriesWinner, setSeriesWinner] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [embedUrl, setEmbedUrl] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [maybeCount, setMaybeCount] = useState(0);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  const { isMuted, toggleMute, playTick, playWinFanfare, playClick } = useSoundEffects();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuestion(q);
  }, []);

  const entries = useMemo(() => {
    const newEntries: WheelEntry[] = [];
    const yesColor = "#10b981";
    const noColor = "#ef4444";
    const maybeColor = "#f59e0b";

    for (let i = 0; i < sets; i++) {
      newEntries.push({ id: `yes-${i}`, label: "YES", color: yesColor });
      newEntries.push({ id: `no-${i}`, label: "NO", color: noColor });

      if (mode === "yes-no-maybe") {
        newEntries.push({ id: `maybe-${i}`, label: "MAYBE", color: maybeColor });
      }
    }
    return newEntries;
  }, [mode, sets]);

  const handleSpin = () => {
    if (isSpinning) return;
    playClick();
    if (seriesWinner) {
      setYesCount(0);
      setNoCount(0);
      setMaybeCount(0);
      setSeriesWinner(null);
    }
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

    const nextYes = yesCount + (val === "YES" ? 1 : 0);
    const nextNo = noCount + (val === "NO" ? 1 : 0);
    const nextMaybe = maybeCount + (val === "MAYBE" ? 1 : 0);

    setYesCount(nextYes);
    setNoCount(nextNo);
    setMaybeCount(nextMaybe);

    if (seriesTarget > 1) {
      if (nextYes >= seriesTarget) setSeriesWinner("YES");
      else if (nextNo >= seriesTarget) setSeriesWinner("NO");
      else if (mode === "yes-no-maybe" && nextMaybe >= seriesTarget) setSeriesWinner("MAYBE");
    }

    trackEvent("tool_action", {
      tool_type: "yes_no_wheel",
      mode,
      series_target: seriesTarget,
      outcome: val,
    });

    setTimeout(() => setShowConfetti(false), 4000);
  };

  const resetCounts = () => {
    playClick();
    setYesCount(0);
    setNoCount(0);
    setMaybeCount(0);
    setSeriesWinner(null);
  };

  const shareWheel = async () => {
    playClick();
    const url = generateShareUrl(
      entries,
      question.trim() || "Yes or No Wheel",
      result ? [result] : [],
      "/yes-no-wheel"
    );
    if (!url) {
      setToast({ message: "Failed to generate share link", type: "error" });
      return;
    }
    setShareUrl(url);
    setEmbedUrl(generateEmbedUrl(entries, { wheelName: question.trim() || "Yes or No Wheel" }));
    setShowShareModal(true);
    await copyToClipboard(url);
  };

  return (
    <>
      <Confetti isActive={showConfetti} />

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start">
        {/* Left: Wheel Section */}
        <div className="flex flex-col items-center justify-start order-1 lg:order-1">
          {question.trim() && (
            <p className="mb-3 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-sm font-semibold text-blue-800 text-center max-w-md">
              “{question.trim()}”
            </p>
          )}
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

          {/* Bounded Display Ad below wheel on BOTH Mobile and Desktop */}
          <div className="w-full max-w-xl mt-6">
            <AdSenseDisplay slotId="6084518347" />
          </div>
        </div>

        {/* Right: Controls Section */}
        <div className="md:space-y-6 space-y-4 order-2 lg:order-2">
          {/* Scoreboard */}
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
            <div className="flex justify-between items-center mb-3.5">
              <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                {seriesTarget > 1 ? `Best of ${seriesTarget === 2 ? "3" : "5"} Scoreboard` : "Results"}
              </h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={resetCounts}
                  className="min-h-[36px] px-2.5 py-1 text-gray-600 cursor-pointer hover:text-blue-700 text-xs font-semibold flex items-center gap-1 transition-colors rounded-lg hover:bg-blue-50"
                >
                  <FiRotateCcw /> Reset
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="min-w-[36px] min-h-[36px] inline-flex items-center justify-center cursor-pointer text-gray-600 hover:text-blue-700 transition-colors rounded-lg hover:bg-blue-50"
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

            {seriesWinner && (
              <div className="mb-3 p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-bold text-emerald-900 flex items-center gap-1.5">
                  <IoTrophyOutline className="text-base text-amber-500" />
                  Series Winner: {seriesWinner} (First to {seriesTarget})
                </span>
                <button
                  type="button"
                  onClick={resetCounts}
                  className="text-xs font-semibold text-blue-700 hover:underline cursor-pointer"
                >
                  New Match
                </button>
              </div>
            )}

            <div className={`grid ${mode === "yes-no-maybe" ? "grid-cols-3" : "grid-cols-2"} gap-3`}>
              <div className="bg-white rounded-xl sm:p-3 p-2 text-center shadow-sm border-b-4 border-green-500">
                <div className="sm:text-3xl text-2xl md:text-4xl font-black text-gray-800">{yesCount}</div>
                <div className="text-[11px] font-bold text-green-700 uppercase tracking-wider mt-1">YES</div>
              </div>
              <div className="bg-white rounded-xl sm:p-3 p-2 text-center shadow-sm border-b-4 border-red-500">
                <div className="sm:text-3xl text-2xl md:text-4xl font-black text-gray-800">{noCount}</div>
                <div className="text-[11px] font-bold text-red-700 uppercase tracking-wider mt-1">NO</div>
              </div>
              {mode === "yes-no-maybe" && (
                <div className="bg-white rounded-xl sm:p-3 p-2 text-center shadow-sm border-b-4 border-orange-400">
                  <div className="sm:text-3xl text-2xl md:text-4xl font-black text-gray-800">{maybeCount}</div>
                  <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wider mt-1">MAYBE</div>
                </div>
              )}
            </div>
          </div>

          {/* Settings Panel */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
            <div className="bg-gray-50/50 border-b border-gray-100 p-4 flex justify-between items-center">
              <h2 className="font-bold text-gray-800 flex items-center gap-2 text-sm uppercase tracking-wide">
                <FiSettings className="text-gray-600" />
                Configure Wheel
              </h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                {entries.length} Segments
              </span>
            </div>

            <div className="md:p-5 p-4 md:space-y-5 space-y-4">
              {/* Optional Question Input */}
              <div>
                <label htmlFor="yesno-question" className="block text-xs font-bold text-gray-600 uppercase mb-2">
                  Your Question (Optional)
                </label>
                <input
                  id="yesno-question"
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="e.g., Should we order pizza tonight?"
                  maxLength={90}
                  className="w-full px-3.5 py-2.5 text-sm border-2 border-gray-200 rounded-xl focus:border-blue-400 transition-colors"
                />
              </div>

              {/* Match Mode (Single vs Best of 3 / Best of 5) */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Decision Mode</label>
                <div className="grid grid-cols-3 gap-2">
                  {([
                    { val: 1, label: "Single Spin" },
                    { val: 2, label: "Best of 3" },
                    { val: 3, label: "Best of 5" },
                  ] as const).map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => {
                        setSeriesTarget(item.val);
                        setSeriesWinner(null);
                        playClick();
                      }}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border-2 transition-all cursor-pointer ${
                        seriesTarget === item.val
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "bg-white text-gray-700 border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mode Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Answer Format</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => { setMode("yes-no"); playClick(); }}
                    className={`py-3 cursor-pointer px-2 rounded-xl sm:text-sm text-[13px] font-bold transition-all border-2 relative overflow-hidden ${
                      mode === "yes-no"
                        ? "bg-gray-900 text-white border-gray-900 shadow-lg"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    YES / NO
                    {mode === "yes-no" && <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-bl-lg"></div>}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setMode("yes-no-maybe"); playClick(); }}
                    className={`py-3 cursor-pointer px-2 rounded-xl sm:text-sm text-[13px] font-bold transition-all border-2 relative overflow-hidden ${
                      mode === "yes-no-maybe"
                        ? "bg-gray-900 text-white border-gray-900 shadow-lg"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    YES / NO / MAYBE
                    {mode === "yes-no-maybe" && <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-bl-lg"></div>}
                  </button>
                </div>
              </div>

              {/* Number of Input Sets */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-2">
                  Wheel Segments (Multiplier)
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => { setSets(num); playClick(); }}
                      className={`flex-1 cursor-pointer sm:py-2.5 py-2 sm:text-sm text-[13px] rounded-lg font-bold transition-all border-2 ${
                        sets === num
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-700"
                      }`}
                    >
                      {num}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Spin Button */}
              <button
                type="button"
                onClick={handleSpin}
                disabled={isSpinning}
                className="w-full cursor-pointer md:py-4 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black lg:text-base text-sm md:text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSpinning ? (
                  <>
                    <MdOutlineCasino className="md:text-2xl text-xl animate-spin" />
                    <span>SPINNING...</span>
                  </>
                ) : (
                  <>
                    <MdOutlineCasino className="md:text-2xl text-xl group-hover:rotate-12 transition-transform" />
                    <span>{seriesWinner ? "START NEW SERIES" : "SPIN THE WHEEL"}</span>
                  </>
                )}
              </button>

              {/* Share Wheel */}
              <button
                type="button"
                onClick={shareWheel}
                className="w-full cursor-pointer px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <FiShare2 className="text-lg" />
                <span>Share &amp; Embed Wheel</span>
              </button>

              {/* Alternative Decision Pickers */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                <span className="font-medium text-gray-600">Need 50/50?</span>
                <div className="flex gap-2">
                  <Link
                    href="/flip-a-coin"
                    className="px-2.5 py-1 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 rounded-lg border border-gray-200 transition-colors font-medium flex items-center gap-1"
                  >
                    <span>🪙 Flip Coin</span>
                  </Link>
                  <Link
                    href="/dice-roller"
                    className="px-2.5 py-1 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 rounded-lg border border-gray-200 transition-colors font-medium flex items-center gap-1"
                  >
                    <span>🎲 Dice Roller</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {result && (
        <ResultModal
          result={question.trim() ? `${result} (${question.trim()})` : result}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onContinue={() => { setShowModal(false); handleSpin(); }}
          onRemove={() => setShowModal(false)}
        />
      )}

      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        shareUrl={shareUrl}
        embedUrl={embedUrl}
        wheelName={question.trim() || "Yes or No Wheel"}
      />
    </>
  );
}
