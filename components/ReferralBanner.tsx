"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const REFERRAL_URL = "https://swcapp.com/i/zalavadiyavaibhav";

export default function ReferralBanner() {
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render nothing on the server — avoids hydration mismatch
  if (!mounted || dismissed) return null;

  return (
    <div className="sm:hidden w-full relative overflow-hidden animate-fade-in">
      {/* Animated gradient background */}
      <div className="relative flex items-center justify-between gap-2 px-3 py-2.5 bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 animate-shimmer">
        {/* Shimmer overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2.5s linear infinite",
          }}
        />

        {/* Left: Icon + Text */}
        <Link
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center gap-2 flex-1 min-w-0"
        >
          <span
            className="text-xl flex-shrink-0 animate-bounce"
            style={{ animationDuration: "1.4s" }}
          >
            🪙
          </span>

          <div className="min-w-0">
            <p className="text-white font-bold text-[12px] leading-tight truncate">
              Earn with Referrals!
            </p>
            <p className="text-purple-100 text-[10.5px] leading-tight truncate">
              Join SWC &amp; earn real money — tap to start
            </p>
          </div>
        </Link>

        {/* CTA button */}
        <Link
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex-shrink-0 bg-white text-purple-700 font-bold text-[11px] px-3 py-1.5 rounded-full shadow-md active:scale-95 transition-transform whitespace-nowrap"
        >
          Join Now →
        </Link>

        {/* Close button */}
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss referral banner"
          className="flex-shrink-0 text-white/70 hover:text-white text-base leading-none ml-1 active:scale-90 transition-transform"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
