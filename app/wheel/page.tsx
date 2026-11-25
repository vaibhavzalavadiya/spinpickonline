"use client";

import Link from "next/link";
import HomeWheel from "@/components/HomeWheel";

export default function WheelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto lg:py-12 sm:py-8 py-4">
        <div className="text-center lg:mb-12 sm:mb-8 mb-3">
          <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Create Your Random Picker Wheel
          </h1>
          <p className="text-xs sm:text-base text-gray-600 max-w-2xl mx-auto">
            Add unlimited names, adjust custom slice weights, paste lists directly, and share or embed your wheel anywhere.
          </p>
        </div>

        <HomeWheel
          storageKey="wheelState"
          showWheelNameInput
          showClearAll
          showFullEditorLink={false}
          shareTargetPath="/wheel"
        />
      </div>

      {/* SEO Content Sections - Unique for Wheel Creator Page */}
      <section className="bg-white py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Create Your Custom Random Picker Wheel</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 md:text-base text-sm">
            <p>
              Welcome to our free random picker wheel creator. Design custom spinner wheels for any purpose — from simple name pickers to weighted decision makers. Customize colors, slice odds, bulk-paste lists directly, and generate permanent share links or iframe embeds with no signup required.
            </p>
            <p>
              Whether you&apos;re creating a wheel of names for classroom participation, running a transparent social giveaway, or building a team decision wheel, your entries and history stay local in your browser unless you choose to share them.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Key Features of Our Random Picker Wheel</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white md:p-6 p-4 rounded-xl shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 md:text-lg text-base">🎨 Full Customization &amp; Weights</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Customize colors, duplicate items, or adjust slice weight multipliers (1x, 2x, 3x, 5x) and switch into Dark Stage or Fullscreen projector view.
              </p>
            </div>
            <div className="bg-white md:p-6 p-4 rounded-xl shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 md:text-lg text-base">⚡ Cryptographic RNG</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Powered by <code className="font-mono text-xs bg-gray-100 px-1 rounded">crypto.getRandomValues()</code> so every spin is mathematically unbiased across all configured segment weights.
              </p>
            </div>
            <div className="bg-white md:p-6 p-4 rounded-xl shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 md:text-lg text-base">🔗 Shareable Links, Embeds &amp; OBS</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Generate shareable URLs, copy responsive Notion/Canvas iframe snippets, or launch a transparent OBS Browser Source overlay for livestreams.
              </p>
            </div>
            <div className="bg-white md:p-6 p-4 rounded-xl shadow-md border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 md:text-lg text-base">📱 Mobile Optimized</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Touch-friendly layout works cleanly on smartphones, tablets, laptops, and smartboards with zero app installation needed.
              </p>
            </div>
            <div className="bg-white md:p-6 p-4 rounded-xl shadow-md border-t-4 border-pink-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 md:text-lg text-base">💾 Instant Auto-Save &amp; Presets</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Save up to 10 custom wheel lists locally in your browser so returning teachers and hosts can load rosters in one click.
              </p>
            </div>
            <div className="bg-white md:p-6 p-4 rounded-xl shadow-md border-t-4 border-red-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 md:text-lg text-base">📋 Direct Paste Mode</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Switch between Row List and Paste Text mode to paste rosters from Excel, Google Sheets, or email directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Popular Uses for Random Picker Wheels</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/classroom-activities" className="bg-gradient-to-br from-blue-50 to-blue-100 md:p-5 p-4 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-semibold text-gray-900 mb-2 md:text-base text-sm">Classroom Name Picker</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Fair student selection, random questioning, and classroom job assignments.</p>
            </Link>
            <Link href="/giveaway-winner" className="bg-gradient-to-br from-purple-50 to-purple-100 md:p-5 p-4 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="font-semibold text-gray-900 mb-2 md:text-base text-sm">Giveaway Randomizer</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Transparent Instagram, YouTube, and Twitch contest winner draws.</p>
            </Link>
            <Link href="/team-picker" className="bg-gradient-to-br from-green-50 to-green-100 md:p-5 p-4 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-semibold text-gray-900 mb-2 md:text-base text-sm">Team Picker Wheel</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Balanced random team generator for sports, projects, and games.</p>
            </Link>
            <Link href="/decision-wheel" className="bg-gradient-to-br from-orange-50 to-orange-100 md:p-5 p-4 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2 md:text-base text-sm">Decision Maker</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Fast yes/no decisions, dinner choices, or weighted option draws.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Explore More Wheel Tools &amp; Guides</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            <Link href="/name-picker" className="group bg-white p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 text-xs sm:text-sm mb-1">Name Picker</h3>
              <p className="text-[11px] text-gray-600">Random name selector</p>
            </Link>
            <Link href="/yes-no-wheel" className="group bg-white p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 text-xs sm:text-sm mb-1">Yes/No Wheel</h3>
              <p className="text-[11px] text-gray-600">Quick decisions &amp; Series</p>
            </Link>
            <Link href="/random-letter-generator" className="group bg-white p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 text-xs sm:text-sm mb-1">Letter Wheel</h3>
              <p className="text-[11px] text-gray-600">A–Z alphabet generator</p>
            </Link>
            <Link href="/random-number-wheel" className="group bg-white p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 text-xs sm:text-sm mb-1">Number Wheel</h3>
              <p className="text-[11px] text-gray-600">1–10, 1–20, 1–100</p>
            </Link>
            <Link href="/flip-a-coin" className="group bg-white p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 text-xs sm:text-sm mb-1">Flip a Coin</h3>
              <p className="text-[11px] text-gray-600">Multi-coin 3D simulator</p>
            </Link>
            <Link href="/shareable-wheels" className="group bg-white p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-pink-400 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 text-xs sm:text-sm mb-1">Shareable Wheels</h3>
              <p className="text-[11px] text-gray-600">Create &amp; share wheel links</p>
            </Link>
            <Link href="/guides/spin-wheel-tips" className="group bg-white p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 text-xs sm:text-sm mb-1">Spin Wheel Tips</h3>
              <p className="text-[11px] text-gray-600">Weights &amp; fair draws</p>
            </Link>
            <Link href="/blog/wheel-of-fortune-classroom" className="group bg-white p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 text-xs sm:text-sm mb-1">Classroom Games</h3>
              <p className="text-[11px] text-gray-600">Ideas for teachers</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
