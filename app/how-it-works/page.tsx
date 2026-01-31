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
      </div>
    </div>
  );
}
