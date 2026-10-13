"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { FiPlus, FiTrash2, FiRotateCcw, FiShuffle, FiVolume2, FiVolumeX, FiEdit2, FiCheck, FiX, FiPlay } from "react-icons/fi";
import { IoSparkles, IoTrophyOutline, IoWineOutline } from "react-icons/io5";
import { useSoundEffects } from "@/lib/useSoundEffects";
import ResultModal from "@/components/ResultModal";
import Confetti from "@/components/Confetti";
import Toast from "@/components/Toast";
import AdBanner from "@/components/AdBanner";

export interface BottlePlayer {
    id: string;
    label: string;
    color: string;
    emoji: string;
}

const DEFAULT_PLAYERS: BottlePlayer[] = [
    { id: "1", label: "Player 1", color: "#ec4899", emoji: "🙋‍♂️" },
    { id: "2", label: "Player 2", color: "#3b82f6", emoji: "🙋‍♀️" },
    { id: "3", label: "Player 3", color: "#10b981", emoji: "🧑" },
    { id: "4", label: "Player 4", color: "#f59e0b", emoji: "👩" },
    { id: "5", label: "Player 5", color: "#8b5cf6", emoji: "👱" },
    { id: "6", label: "Player 6", color: "#ef4444", emoji: "🧑‍🦰" },
    { id: "7", label: "Player 7", color: "#06b6d4", emoji: "🧔" },
    { id: "8", label: "Player 8", color: "#f97316", emoji: "👧" },
];

const PRESETS = [
    {
        name: "Classic 8",
        players: DEFAULT_PLAYERS,
    },
    {
        name: "Truth or Dare",
        players: [
            { id: "td1", label: "Truth", color: "#3b82f6", emoji: "🤔" },
            { id: "td2", label: "Dare", color: "#ef4444", emoji: "🔥" },
            { id: "td3", label: "Truth", color: "#6366f1", emoji: "💬" },
            { id: "td4", label: "Dare", color: "#f97316", emoji: "💪" },
            { id: "td5", label: "Double Dare", color: "#ec4899", emoji: "⚡" },
            { id: "td6", label: "Pass", color: "#6b7280", emoji: "🛡️" },
        ],
    },
    {
        name: "Actions",
        players: [
            { id: "act1", label: "Hug", color: "#ec4899", emoji: "🤗" },
            { id: "act2", label: "Compliment", color: "#3b82f6", emoji: "💖" },
            { id: "act3", label: "High Five", color: "#10b981", emoji: "✋" },
            { id: "act4", label: "Secret", color: "#8b5cf6", emoji: "🤫" },
            { id: "act5", label: "Dance", color: "#f59e0b", emoji: "💃" },
            { id: "act6", label: "Sing", color: "#06b6d4", emoji: "🎤" },
        ],
    },
];

export default function BottleSpinner() {
    const [players, setPlayers] = useState<BottlePlayer[]>(DEFAULT_PLAYERS);
    const [newPlayerName, setNewPlayerName] = useState("");
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [activePlayerIndex, setActivePlayerIndex] = useState<number | null>(null);
    const [winner, setWinner] = useState<string | null>(null);
    const [results, setResults] = useState<string[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [activeTab, setActiveTab] = useState<"players" | "results">("players");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editValue, setEditValue] = useState("");
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

    const animationRef = useRef<number | undefined>(undefined);
    const prevTickSegmentRef = useRef<number>(-1);
    const { isMuted, toggleMute, playTick, playWinFanfare, playClick } = useSoundEffects();

    // Storage persistence
    useEffect(() => {
        try {
            const saved = localStorage.getItem("spinTheBottlePlayers");
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setPlayers(parsed);
                }
            }
        } catch { }
    }, []);

    const savePlayersToStorage = (updated: BottlePlayer[]) => {
        try {
            localStorage.setItem("spinTheBottlePlayers", JSON.stringify(updated));
        } catch { }
    };

    // Spin physics calculation
    const spinBottle = useCallback(() => {
        if (isSpinning || players.length === 0) return;

        playClick();
        setIsSpinning(true);
        setWinner(null);
        setShowConfetti(false);
        prevTickSegmentRef.current = -1;

        const numPlayers = players.length;
        const anglePerPlayer = (2 * Math.PI) / numPlayers;

        // Choose random target player
        const targetIndex = Math.floor(Math.random() * numPlayers);
        // Angle pointing to that player (offset by small random jitter so it doesn't land dead center)
        const jitter = (Math.random() * 0.4 - 0.2) * anglePerPlayer;
        
        // In our coordinate system, 0 radians points UP (north) where index 0 is located.
        const targetAngle = targetIndex * anglePerPlayer + jitter;

        // Full spins (between 6 and 9 full spins for dramatic suspense)
        const extraSpins = 6 + Math.floor(Math.random() * 3);
        const totalTargetRotation = rotation + (extraSpins * 2 * Math.PI) + (targetAngle - (rotation % (2 * Math.PI)));

        const startRotation = rotation;
        const deltaRotation = totalTargetRotation - startRotation;
        const startTime = Date.now();
        const duration = 3800; // 3.8 seconds spin duration

        const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth cubic ease-out
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentRotation = startRotation + deltaRotation * easeOut;

            setRotation(currentRotation);

            // Compute current pointed player for active highlighting and audio ticks
            const normalizedAngle = (currentRotation % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
            const currentPointingIndex = Math.round(normalizedAngle / anglePerPlayer) % numPlayers;
            setActivePlayerIndex(currentPointingIndex);

            if (prevTickSegmentRef.current !== currentPointingIndex && prevTickSegmentRef.current !== -1) {
                playTick();
            }
            prevTickSegmentRef.current = currentPointingIndex;

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                // Done spinning!
                setIsSpinning(false);
                const finalWinningPlayer = players[targetIndex];
                setWinner(finalWinningPlayer.label);
                setResults((prev) => [finalWinningPlayer.label, ...prev]);
                setShowConfetti(true);
                setShowModal(true);
                playWinFanfare();

                setTimeout(() => setShowConfetti(false), 4500);
            }
        };

        animationRef.current = requestAnimationFrame(animate);
    }, [isSpinning, players, rotation, playClick, playTick, playWinFanfare]);

    useEffect(() => {
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    // Player management
    const addPlayer = () => {
        const trimmed = newPlayerName.trim();
        if (!trimmed) return;

        playClick();
        const colors = ["#ec4899", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444", "#06b6d4", "#f97316"];
        const emojis = ["🙋‍♂️", "🙋‍♀️", "🧑", "👩", "👱", "🧑‍🦰", "🧔", "👧", "😎", "🥳"];
        const newPlayer: BottlePlayer = {
            id: String(Date.now()),
            label: trimmed,
            color: colors[players.length % colors.length],
            emoji: emojis[players.length % emojis.length],
        };

        const updated = [...players, newPlayer];
        setPlayers(updated);
        savePlayersToStorage(updated);
        setNewPlayerName("");
        setToast({ message: `Added ${trimmed}!`, type: "success" });
    };

    const removePlayer = (id: string) => {
        playClick();
        const updated = players.filter((p) => p.id !== id);
        setPlayers(updated);
        savePlayersToStorage(updated);
    };

    const shufflePlayers = () => {
        playClick();
        const shuffled = [...players].sort(() => Math.random() - 0.5);
        setPlayers(shuffled);
        savePlayersToStorage(shuffled);
        setToast({ message: "Shuffled players order!", type: "info" });
    };

    const resetToPreset = (presetPlayers: BottlePlayer[]) => {
        playClick();
        setPlayers(presetPlayers);
        savePlayersToStorage(presetPlayers);
        setWinner(null);
        setActivePlayerIndex(null);
        setToast({ message: "Loaded preset!", type: "info" });
    };

    const startEditing = (p: BottlePlayer) => {
        setEditingId(p.id);
        setEditValue(p.label);
    };

    const saveEdit = (id: string) => {
        if (!editValue.trim()) return;
        const updated = players.map((p) => (p.id === id ? { ...p, label: editValue.trim() } : p));
        setPlayers(updated);
        savePlayersToStorage(updated);
        setEditingId(null);
    };

    const handleRemoveWinner = () => {
        if (winner) {
            const updated = players.filter((p) => p.label !== winner);
            setPlayers(updated);
            savePlayersToStorage(updated);
            setShowModal(false);
            setWinner(null);
        }
    };

    // Responsive circle radius
    const [circleRadius, setCircleRadius] = useState(135);
    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                if (window.innerWidth < 420) {
                    setCircleRadius(110);
                } else if (window.innerWidth < 640) {
                    setCircleRadius(125);
                } else {
                    setCircleRadius(138);
                }
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const numPlayers = players.length;

    return (
        <div className="w-full mx-auto">
            <Confetti isActive={showConfetti} />

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full">
                
                {/* LEFT: Bottle & Players Circle Arena */}
                <div className="lg:col-span-7 flex flex-col items-center justify-center w-full">
                    {/* Circle Arena Container */}
                    <div className="relative w-full max-w-[340px] sm:max-w-[410px] aspect-square flex items-center justify-center p-3 select-none">
                        
                        {/* Circular Arena Floor / Glow */}
                        <div className="absolute inset-2 sm:inset-3 rounded-full bg-gradient-to-br from-rose-50/80 via-white to-pink-50/60 border-4 border-rose-100/90 shadow-2xl flex items-center justify-center">
                            {/* Inner concentric ring */}
                            <div className="w-3/4 h-3/4 rounded-full border border-dashed border-rose-200/70 pointer-events-none" />
                        </div>

                        {/* Players Distributed in a Circle */}
                        {players.map((player, index) => {
                            // Compute angle around circle (0 is at top, increasing clockwise)
                            const angle = (index * (2 * Math.PI)) / numPlayers - Math.PI / 2;
                            const x = Math.cos(angle) * circleRadius;
                            const y = Math.sin(angle) * circleRadius;

                            const isActive = activePlayerIndex === index;

                            return (
                                <div
                                    key={player.id}
                                    style={{
                                        left: "50%",
                                        top: "50%",
                                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                                    }}
                                    className={`absolute z-10 transition-all duration-200 flex flex-col items-center cursor-pointer ${
                                        isActive
                                            ? "scale-110 z-20"
                                            : "hover:scale-105"
                                    }`}
                                    onClick={() => !isSpinning && spinBottle()}
                                    title={`Click bottle to spin! (${player.label})`}
                                >
                                    <div
                                        className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                                            isActive
                                                ? "bg-rose-600 text-white border-rose-400 ring-4 ring-rose-300 shadow-rose-500/40"
                                                : "bg-white text-gray-800 border-gray-200 hover:border-rose-300"
                                        }`}
                                    >
                                        <span className="text-sm">{player.emoji}</span>
                                        <span className="max-w-[70px] sm:max-w-[90px] truncate">{player.label}</span>
                                    </div>
                                </div>
                            );
                        })}

                        {/* CENTER: The Realistic Rotating Glass Bottle */}
                        <div
                            className="relative z-10 cursor-pointer select-none flex items-center justify-center"
                            onClick={spinBottle}
                            title="Tap to Spin the Bottle!"
                        >
                            <div
                                style={{
                                    transform: `rotate(${rotation}rad)`,
                                    transformOrigin: "center center",
                                    transition: isSpinning ? "none" : "transform 0.4s ease-out",
                                }}
                                className="w-[85px] sm:w-[105px] h-[170px] sm:h-[200px] flex items-center justify-center relative filter drop-shadow-2xl active:scale-95 transition-transform"
                            >
                                {/* SVG Ultra-Realistic Green Glass Bottle */}
                                <svg
                                    viewBox="0 0 100 200"
                                    className="w-full h-full"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Definitions for 3D glass lighting, reflections and shadows */}
                                    <defs>
                                        {/* Main glass body gradient */}
                                        <linearGradient id="bottleGlassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#064e3b" />
                                            <stop offset="25%" stopColor="#047857" />
                                            <stop offset="50%" stopColor="#10b981" />
                                            <stop offset="75%" stopColor="#047857" />
                                            <stop offset="100%" stopColor="#064e3b" />
                                        </linearGradient>

                                        {/* Specular glass reflection streak */}
                                        <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                                            <stop offset="60%" stopColor="rgba(255,255,255,0.2)" />
                                            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                                        </linearGradient>

                                        {/* Bottle label gradient */}
                                        <linearGradient id="labelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#fef3c7" />
                                            <stop offset="50%" stopColor="#ffffff" />
                                            <stop offset="100%" stopColor="#fef3c7" />
                                        </linearGradient>

                                        {/* Cap gradient */}
                                        <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#b45309" />
                                            <stop offset="50%" stopColor="#f59e0b" />
                                            <stop offset="100%" stopColor="#92400e" />
                                        </linearGradient>
                                    </defs>

                                    {/* Bottle Silhouette (Neck points UP at y=5) */}
                                    {/* Mouth ring / Lip */}
                                    <rect x="42" y="6" width="16" height="5" rx="2" fill="url(#bottleGlassGrad)" />
                                    {/* Bottle Cap / Cork */}
                                    <rect x="44" y="2" width="12" height="5" rx="1.5" fill="url(#capGrad)" />

                                    {/* Main Bottle Body Path */}
                                    <path
                                        d="M 44 11 
                                           L 44 48 
                                           C 44 65, 26 78, 26 100 
                                           L 26 182 
                                           C 26 192, 34 195, 50 195 
                                           C 66 195, 74 192, 74 182 
                                           L 74 100 
                                           C 74 78, 56 65, 56 48 
                                           L 56 11 
                                           Z"
                                        fill="url(#bottleGlassGrad)"
                                        stroke="#022c22"
                                        strokeWidth="1.5"
                                    />

                                    {/* Glass Specular Highlight (Left curvature shine) */}
                                    <path
                                        d="M 47 14 
                                           L 47 46 
                                           C 47 62, 32 75, 32 98 
                                           L 32 178 
                                           C 32 185, 36 188, 42 188 
                                           C 36 186, 30 180, 30 172 
                                           L 30 98 
                                           C 30 76, 45 62, 45 46 
                                           L 45 14 
                                           Z"
                                        fill="url(#glassReflection)"
                                    />

                                    {/* Bottle Label (Mid-section) */}
                                    <rect x="29" y="108" width="42" height="48" rx="2" fill="url(#labelGrad)" stroke="#d97706" strokeWidth="0.8" />
                                    
                                    {/* Label Text / Graphics */}
                                    <text x="50" y="125" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="#991b1b" fontFamily="sans-serif">SPIN</text>
                                    <text x="50" y="134" textAnchor="middle" fontSize="4.5" fontWeight="700" fill="#1f2937" fontFamily="sans-serif">THE BOTTLE</text>
                                    <line x1="34" y1="138" x2="66" y2="138" stroke="#d97706" strokeWidth="0.8" />
                                    <text x="50" y="148" textAnchor="middle" fontSize="3.8" fill="#4b5563" fontFamily="sans-serif">★ FAIR PLAY ★</text>

                                    {/* Right Glass Rim Shadow for Depth */}
                                    <path
                                        d="M 53 14 L 53 46 C 53 62, 68 75, 68 98 L 68 180 C 66 188, 62 192, 56 193 C 65 190, 71 184, 71 178 L 71 98 C 71 76, 55 62, 55 46 L 55 14 Z"
                                        fill="rgba(0,0,0,0.22)"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Central Spin Trigger Button (Placed underneath the arena, never overlapping players!) */}
                    <button
                        onClick={spinBottle}
                        disabled={isSpinning || players.length === 0}
                        className="mt-6 px-8 py-3.5 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 hover:from-rose-700 hover:to-pink-700 disabled:opacity-50 text-white font-extrabold rounded-full shadow-xl hover:shadow-rose-500/40 transition-all active:scale-95 flex items-center gap-2.5 text-base sm:text-lg cursor-pointer"
                    >
                        <IoWineOutline className="text-xl" />
                        <span>{isSpinning ? "Spinning..." : "SPIN THE BOTTLE"}</span>
                    </button>

                    {/* Quick Helper Subtitle */}
                    <p className="text-xs text-gray-500 mt-2.5 text-center">
                        Tap the bottle or click <strong>SPIN THE BOTTLE</strong> to let fate choose!
                    </p>

                    {/* Ad Banner on desktop */}
                    <AdBanner slot="banner-320x50" className="hidden md:flex mt-8" />
                </div>

                {/* RIGHT: Control Panel (Entries & Results) */}
                <div className="lg:col-span-5 w-full bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden sticky top-4">
                    {/* Header Tabs */}
                    <div className="flex border-b-2 border-gray-100 bg-gradient-to-r from-rose-50 to-pink-50">
                        <button
                            onClick={() => { setActiveTab("players"); playClick(); }}
                            className={`flex-1 px-4 py-3.5 text-sm font-semibold transition-all relative cursor-pointer ${
                                activeTab === "players" ? "text-rose-700" : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <IoWineOutline className="text-lg" />
                                <span>Players ({players.length})</span>
                            </div>
                            {activeTab === "players" && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-600 to-pink-600" />
                            )}
                        </button>

                        <button
                            onClick={() => { setActiveTab("results"); playClick(); }}
                            className={`flex-1 px-4 py-3.5 text-sm font-semibold transition-all relative cursor-pointer ${
                                activeTab === "results" ? "text-rose-700" : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <IoTrophyOutline className="text-lg" />
                                <span>History ({results.length})</span>
                            </div>
                            {activeTab === "results" && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-600 to-pink-600" />
                            )}
                        </button>

                        {/* Sound Toggle */}
                        <button
                            onClick={toggleMute}
                            className="px-4 py-3 text-gray-500 hover:text-gray-900 transition-colors flex items-center cursor-pointer"
                            title={isMuted ? "Unmute sounds" : "Mute sounds"}
                            aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
                        >
                            {isMuted ? <FiVolumeX className="text-lg" /> : <FiVolume2 className="text-lg text-rose-600" />}
                        </button>
                    </div>

                    {/* Tab 1: Players Management */}
                    {activeTab === "players" ? (
                        <div className="p-4 sm:p-5 space-y-4">
                            {/* Action Bar (Shuffle & Presets) */}
                            <div className="flex flex-wrap gap-2 items-center justify-between">
                                <button
                                    onClick={shufflePlayers}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-lg font-medium border border-rose-200 transition-all cursor-pointer"
                                >
                                    <FiShuffle />
                                    <span>Shuffle Circle</span>
                                </button>

                                <div className="flex items-center gap-1.5">
                                    <span className="text-[11px] font-semibold text-gray-400 uppercase">Presets:</span>
                                    {PRESETS.map((preset) => (
                                        <button
                                            key={preset.name}
                                            onClick={() => resetToPreset(preset.players)}
                                            className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition-all font-medium cursor-pointer"
                                        >
                                            {preset.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Add Player Input */}
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={newPlayerName}
                                    onChange={(e) => setNewPlayerName(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && addPlayer()}
                                    placeholder="Add friend's name..."
                                    maxLength={25}
                                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                                />
                                <button
                                    onClick={addPlayer}
                                    className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1 cursor-pointer"
                                >
                                    <FiPlus />
                                    <span>Add</span>
                                </button>
                            </div>

                            {/* Players List */}
                            <div className="max-h-[300px] overflow-y-auto space-y-1.5 pr-1">
                                {players.map((p, idx) => (
                                    <div
                                        key={p.id}
                                        className="flex items-center justify-between p-2.5 rounded-lg border border-gray-100 bg-gray-50/70 hover:bg-white hover:border-gray-200 transition-all text-sm"
                                    >
                                        <div className="flex items-center gap-2 flex-1 min-w-0">
                                            <span className="w-5 text-center text-xs font-bold text-gray-400">
                                                {idx + 1}.
                                            </span>
                                            <span className="text-base">{p.emoji}</span>

                                            {editingId === p.id ? (
                                                <div className="flex items-center gap-1 flex-1">
                                                    <input
                                                        type="text"
                                                        value={editValue}
                                                        onChange={(e) => setEditValue(e.target.value)}
                                                        className="px-2 py-1 text-xs border rounded w-full"
                                                        autoFocus
                                                    />
                                                    <button onClick={() => saveEdit(p.id)} className="text-green-600 p-1">
                                                        <FiCheck />
                                                    </button>
                                                    <button onClick={() => setEditingId(null)} className="text-gray-400 p-1">
                                                        <FiX />
                                                    </button>
                                                </div>
                                            ) : (
                                                <span className="font-medium text-gray-800 truncate">{p.label}</span>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-1">
                                            {editingId !== p.id && (
                                                <button
                                                    onClick={() => startEditing(p)}
                                                    className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"
                                                    title="Edit player name"
                                                >
                                                    <FiEdit2 className="text-xs" />
                                                </button>
                                            )}
                                            {players.length > 2 && (
                                                <button
                                                    onClick={() => removePlayer(p.id)}
                                                    className="p-1.5 text-gray-400 hover:text-rose-600 transition-colors"
                                                    title="Remove player"
                                                >
                                                    <FiTrash2 className="text-xs" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Tab 2: Results History */
                        <div className="p-4 sm:p-5 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-gray-500 uppercase">Past Picks</span>
                                {results.length > 0 && (
                                    <button
                                        onClick={() => setResults([])}
                                        className="text-xs text-rose-600 hover:underline cursor-pointer"
                                    >
                                        Clear History
                                    </button>
                                )}
                            </div>

                            {results.length === 0 ? (
                                <div className="text-center py-10 text-gray-400 text-sm">
                                    <IoWineOutline className="text-4xl mx-auto mb-2 opacity-50" />
                                    No spins yet. Tap the bottle to start!
                                </div>
                            ) : (
                                <div className="max-h-[300px] overflow-y-auto space-y-1.5 pr-1">
                                    {results.map((res, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between p-2.5 rounded-lg border border-gray-100 bg-rose-50/50 text-sm font-medium text-gray-800"
                                        >
                                            <span className="text-xs font-bold text-rose-600">Round #{results.length - i}</span>
                                            <span className="font-bold text-gray-900">{res}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Winner Pop-up Modal */}
            {winner && (
                <ResultModal
                    result={winner}
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onContinue={() => setShowModal(false)}
                    onRemove={handleRemoveWinner}
                />
            )}

            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </div>
    );
}
