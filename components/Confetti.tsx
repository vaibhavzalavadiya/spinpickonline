"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    rotation: number;
    rotationSpeed: number;
    width: number;
    height: number;
    color: string;
    opacity: number;
    type: "rect" | "circle" | "streamer";
    life: number;
    maxLife: number;
}

const CONFETTI_COLORS = [
    "#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6",
    "#ec4899", "#06b6d4", "#f97316", "#14b8a6", "#a855f7",
    "#eab308", "#22c55e", "#e11d48", "#6366f1",
];

interface ConfettiProps {
    isActive: boolean;
    duration?: number;
}

export default function Confetti({ isActive, duration = 3000 }: ConfettiProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animFrameRef = useRef<number>(0);
    const startTimeRef = useRef<number>(0);

    const createParticles = useCallback(() => {
        const particles: Particle[] = [];
        const count = typeof window !== "undefined" && window.innerWidth < 768 ? 60 : 120;

        for (let i = 0; i < count; i++) {
            const type = Math.random() < 0.4 ? "circle" : Math.random() < 0.7 ? "rect" : "streamer";
            const maxLife = 2000 + Math.random() * 1500;

            particles.push({
                x: window.innerWidth * Math.random(),
                y: -20 - Math.random() * 100,
                vx: (Math.random() - 0.5) * 8,
                vy: Math.random() * 3 + 2,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 12,
                width: type === "streamer" ? 3 + Math.random() * 2 : 6 + Math.random() * 8,
                height: type === "streamer" ? 15 + Math.random() * 20 : 6 + Math.random() * 8,
                color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
                opacity: 1,
                type,
                life: 0,
                maxLife,
            });
        }
        return particles;
    }, []);

    useEffect(() => {
        if (!isActive || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas to full viewport
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        particlesRef.current = createParticles();
        startTimeRef.current = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTimeRef.current;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const particles = particlesRef.current;
            let alive = false;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.life += 16; // ~60fps

                // Gravity + air resistance
                p.vy += 0.12;
                p.vx *= 0.99;
                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotationSpeed;

                // Fade out in last 30% of life
                if (p.life > p.maxLife * 0.7) {
                    p.opacity = Math.max(0, 1 - (p.life - p.maxLife * 0.7) / (p.maxLife * 0.3));
                }

                if (p.opacity <= 0 || p.y > canvas.height + 50) continue;
                alive = true;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = p.opacity;

                if (p.type === "circle") {
                    ctx.beginPath();
                    ctx.arc(0, 0, p.width / 2, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.fill();
                } else if (p.type === "rect") {
                    ctx.fillStyle = p.color;
                    ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
                } else {
                    // Streamer — wavy ribbon
                    ctx.strokeStyle = p.color;
                    ctx.lineWidth = p.width;
                    ctx.lineCap = "round";
                    ctx.beginPath();
                    ctx.moveTo(0, -p.height / 2);
                    ctx.quadraticCurveTo(p.width * 2, 0, 0, p.height / 2);
                    ctx.stroke();
                }
                ctx.restore();
            }

            if (alive && elapsed < duration + 2000) {
                animFrameRef.current = requestAnimationFrame(animate);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        };

        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resize);
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [isActive, duration, createParticles]);

    if (!isActive) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[100] pointer-events-none"
            aria-hidden="true"
        />
    );
}
