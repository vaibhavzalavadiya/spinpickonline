import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiCpu } from "react-icons/fi";
import { IoShieldCheckmarkOutline, IoSpeedometerOutline, IoLockClosedOutline, IoEyeOffOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "How It Works | Random Wheel Technology | SpinPickOnline",
  description: "Learn how our spin the wheel, random picker wheel, and wheel of names use cryptographic RNG for fair, unbiased results. Transparent randomizer technology explained.",
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-6 sm:py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors mb-5 sm:mb-6"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-5 sm:mb-8">
          <div className="flex justify-center mb-3">
            <div className="bg-linear-to-br from-blue-500 to-purple-600 p-2.5 sm:p-3 rounded-lg shadow-md">
              <FiCpu className="text-xl sm:text-2xl text-white" />
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">How Our Random Picker Wheel Works</h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
            The technology behind our spin the wheel, wheel of names, and randomizer - ensuring fair, unbiased results every time
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <IoShieldCheckmarkOutline className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-blue-600">True Randomness</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Our random picker wheel uses crypto-secure <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">window.crypto.getRandomValues()</code> instead of basic <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">Math.random()</code>. This ensures every spin the wheel result is unpredictable and cryptographically secure with professional-grade randomization.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <IoSpeedometerOutline className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-purple-600">Physics Engine</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Our wheel spinner isn't just animation - it simulates real physics! We calculate friction, velocity, and deceleration for a natural spinning wheel that builds suspense. The wheel of names feels authentic, making your random name picker or decision wheel more engaging.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border-2 border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <IoLockClosedOutline className="text-2xl text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-green-600">Zero Bias</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Every segment on our random picker wheel has exactly equal probability (unless weighted). The angle is calculated to millionths of a degree. Our RNG (random number generator) ensures your wheel of names, name picker, or randomizer is 100% fair - no manipulation possible.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border-2 border-orange-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <IoEyeOffOutline className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-orange-600">Client-Side Privacy</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              All calculations happen in your browser. Your list of names for the wheel of names or random name picker is NEVER sent to our servers. Your spinner wheel data stays 100% private - unlike cloud-based randomizers or decision wheels.
            </p>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-xl p-4 md:p-6 border-2 border-blue-200 mb-6">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 text-center">Why Does This Matter?</h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            Whether you're using our random picker wheel for valuable prize giveaways, Instagram contests, YouTube raffles, classroom name selection, or team assignments, you need to trust the tool. Our commitment to transparent, secure randomization means you can use our spin the wheel, wheel of names, and randomizer with total confidence. Professional-grade security and fairness guaranteed!
          </p>
        </div>

        {/* Technical Details */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4">Technical Advantages</h2>
          <div className="space-y-3 text-xs sm:text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">✓</span>
              <p><strong>Cryptographic RNG:</strong> Our random number generator uses Web Crypto API for true randomness - more secure than basic randomizers, roulette wheels, or yes or no wheel alternatives</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600 font-bold mt-0.5">✓</span>
              <p><strong>No Server Processing:</strong> Your wheel spinner, name wheel, and random picker data never leaves your device - complete privacy for your wheel of names entries</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <p><strong>Instant Results:</strong> Our spinning wheel and decision wheel provide immediate random selection - no waiting, no delays in your randomizer</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-600 font-bold mt-0.5">✓</span>
              <p><strong>Mobile Optimized:</strong> Our picker wheel and wheel spinner work perfectly on phones and tablets - touch-friendly random name picker for any device</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-600 font-bold mt-0.5">✓</span>
              <p><strong>Unlimited Uses:</strong> Free forever - use our random picker wheel, spin the wheel, wheel of names, and randomizer as much as you need without limits</p>
            </div>
          </div>
        </div>

        {/* Industry Use Cases Section */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200 mb-6">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4">Who Benefits from Our Random Picker Wheel</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎓</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Teachers & Educators</h3>
                <p className="text-xs sm:text-sm text-gray-600">Use our wheel of names for fair student selection, random questioning, and group formation. Works perfectly on Smartboards!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📷</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Content Creators</h3>
                <p className="text-xs sm:text-sm text-gray-600">Run transparent Instagram, YouTube, and TikTok giveaways with our random picker. Build trust with visual spin proof!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎮</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Streamers</h3>
                <p className="text-xs sm:text-sm text-gray-600">Perfect name spinner for Twitch subscriber giveaways and viewer rewards. Spin live for maximum engagement!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💼</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Event Organizers</h3>
                <p className="text-xs sm:text-sm text-gray-600">Raffle wheels, prize drawings, and door prizes made easy. Our decision wheel creates excitement at any event!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚽</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Sports & Recreation</h3>
                <p className="text-xs sm:text-sm text-gray-600">Random team generator for pickup games, tournaments, and leagues. Fair team formation every time!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Families & Friends</h3>
                <p className="text-xs sm:text-sm text-gray-600">Yes or no wheel for decisions, game night choices, or settling debates. Make picking fun with our spinner wheel!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Deep Dive Section */}
        <div className="bg-linear-to-br from-green-50 to-blue-50 rounded-xl p-4 md:p-6 border-2 border-green-200 mb-6">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">Understanding Our Cryptographic Security</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">🎲 True Random vs Pseudo-Random</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Most "random" tools use Math.random() which is pseudo-random and can be predicted. Our spin the wheel uses cryptographic randomness from your system's entropy source, making results truly unpredictable.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">🔒 Web Crypto API</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We use window.crypto.getRandomValues() – the same technology used by banks and security applications. This random number generator meets the highest standards for fairness.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">📏 Precise Calculation</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our randomizer calculates wheel position to millionths of a degree precision. Every segment has exactly equal probability – no bias from angle rounding or animation timing.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">🛡️ Tamper-Proof Results</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                The random number is generated before animation starts and cannot be changed. Our wheel of names result is determined the moment you click spin – the animation just reveals it!
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-xl p-4 md:p-6 border border-gray-200 mt-6">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">How It Works FAQ</h2>
          <div className="space-y-3">
            <details className="group bg-white rounded-lg p-3.5 sm:p-4 shadow-sm border border-gray-200">
              <summary className="flex items-center gap-2 cursor-pointer list-none">
                <span className="flex-shrink-0 w-5 h-5 rounded bg-blue-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 flex-1 leading-tight">What makes your random picker wheel more secure than others?</span>
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-xs sm:text-sm text-gray-600 mt-2.5 ml-7 leading-relaxed">
                We use the Web Crypto API instead of basic Math.random(). This cryptographic random number generator provides true randomness that cannot be predicted, making our spin wheel and randomizer professional-grade for giveaways and contests.
              </p>
            </details>

            <details className="group bg-white rounded-lg p-3.5 sm:p-4 shadow-sm border border-gray-200">
              <summary className="flex items-center gap-2 cursor-pointer list-none">
                <span className="flex-shrink-0 w-5 h-5 rounded bg-purple-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 flex-1 leading-tight">How does the physics engine make the wheel of names feel realistic?</span>
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-xs sm:text-sm text-gray-600 mt-2.5 ml-7 leading-relaxed">
                Our spinner wheel simulates real physics including friction, velocity, and deceleration. This creates natural spinning motion that builds suspense, making giveaways and classroom activities more engaging and fun to watch.
              </p>
            </details>

            <details className="group bg-white rounded-lg p-3.5 sm:p-4 shadow-sm border border-gray-200">
              <summary className="flex items-center gap-2 cursor-pointer list-none">
                <span className="flex-shrink-0 w-5 h-5 rounded bg-green-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 flex-1 leading-tight">Do you store or track my wheel entries and results?</span>
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-xs sm:text-sm text-gray-600 mt-2.5 ml-7 leading-relaxed">
                No! All random picker wheel calculations happen entirely in your browser. Your names, entries, and results are never sent to our servers. This ensures complete privacy for your wheel of names data - unlike cloud-based alternatives.
              </p>
            </details>

            <details className="group bg-white rounded-lg p-3.5 sm:p-4 shadow-sm border border-gray-200">
              <summary className="flex items-center gap-2 cursor-pointer list-none">
                <span className="flex-shrink-0 w-5 h-5 rounded bg-pink-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 flex-1 leading-tight">Can contestants verify that the spin wheel selection was fair?</span>
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-xs sm:text-sm text-gray-600 mt-2.5 ml-7 leading-relaxed">
                Yes! Our transparent algorithm means every segment has mathematically equal probability. Show the live spin to audiences for giveaways. The cryptographic RNG and visible wheel make results verifiable for Instagram, YouTube, and live events.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
