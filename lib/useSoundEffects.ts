"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// All sounds are synthesized with Web Audio API — zero external files

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    return audioCtx;
}

function resumeAudioContext() {
    const ctx = getAudioContext();
    if (ctx && ctx.state === "suspended") {
        ctx.resume();
    }
}

export function useSoundEffects() {
    const [isMuted, setIsMuted] = useState(true); // default muted
    const lastTickRef = useRef(0);

    // Load mute preference
    useEffect(() => {
        if (typeof window === "undefined") return;
        const saved = localStorage.getItem("spinpick_sound_muted");
        if (saved !== null) {
            setIsMuted(saved === "true");
        }
    }, []);

    // Save mute preference
    const toggleMute = useCallback(() => {
        setIsMuted((prev) => {
            const next = !prev;
            localStorage.setItem("spinpick_sound_muted", String(next));
            if (!next) resumeAudioContext();
            return next;
        });
    }, []);

    // TICK SOUND — short percussive click for segment passing
    const playTick = useCallback(() => {
        if (isMuted) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        resumeAudioContext();

        // Rate-limit: max one tick per 40ms
        const now = Date.now();
        if (now - lastTickRef.current < 40) return;
        lastTickRef.current = now;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(1800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.03);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.05);
    }, [isMuted]);

    // WIN FANFARE — celebratory ascending chord
    const playWinFanfare = useCallback(() => {
        if (isMuted) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        resumeAudioContext();

        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        const delays = [0, 0.08, 0.16, 0.28];

        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, ctx.currentTime + delays[i]);

            gain.gain.setValueAtTime(0, ctx.currentTime + delays[i]);
            gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + delays[i] + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delays[i] + 0.5);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + delays[i]);
            osc.stop(ctx.currentTime + delays[i] + 0.5);
        });
    }, [isMuted]);

    // CLICK — subtle UI feedback
    const playClick = useCallback(() => {
        if (isMuted) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        resumeAudioContext();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(1000, ctx.currentTime);

        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.06);
    }, [isMuted]);

    return {
        isMuted,
        toggleMute,
        playTick,
        playWinFanfare,
        playClick,
    };
}
