import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { FEATURES } from "@/lib/constants";
import Link from "next/link";
import { FiDroplet, FiSmartphone, FiLock } from "react-icons/fi";

export const metadata: Metadata = genMeta({
  title: "Features | Random Picker Wheel | SpinPickOnline",
  description: "Discover the features of our free random picker wheel. Customization, mobile-friendly design, shareable wheels, and fair randomization. All features available for free.",
  canonical: "/features",
});

export default function FeaturesPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-10 lg:py-16">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center lg:mb-12 mb-6">
          <div className="inline-block bg-linear-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-4">
            <span className="text-purple-700 font-semibold text-sm">🎯 Powerful Features</span>
          </div>
          <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold text-gray-900 md:mb-6 mb-3">Random Picker Wheel Features</h1>
          <p className="md:text-base text-sm text-gray-600 max-w-5xl mx-auto md:mb-8 mb-5">
            Our free spin the wheel and random picker comes with powerful features including customization, mobile-friendly design, shareable wheels, fair RNG randomization, and more. All features available for free with our wheel of names and spinner wheel tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {FEATURES.map((feature, index) => (
            <Link
              key={feature.slug}
              href={`/${feature.slug}`}
              className="block md:p-6 p-4 bg-white rounded-xl shadow-sm border-2 border-gray-200 hover:shadow-xl hover:border-purple-400 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-purple-100 to-blue-100 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="sm:w-10 sm:h-10 w-8 h-8 bg-linear-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{feature.featureName}</h2>
                </div>
                <p className="text-sm text-gray-600 md:mb-4 mb-2 leading-relaxed">{feature.featureDescription}</p>
                <ul className="space-y-2">
                  {feature.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        {/* What Sets Us Apart Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg border-2 border-blue-200 md:p-8 p-4 lg:p-12 mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">What Sets Our Random Picker Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">🔐</div>
              <h3 className="font-bold text-gray-900 mb-2">Cryptographic RNG</h3>
              <p className="text-sm text-gray-600">Unlike basic Math.random() functions, our random number generator uses Web Crypto API for truly unpredictable results.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">∞</div>
              <h3 className="font-bold text-gray-900 mb-2">Unlimited Everything</h3>
              <p className="text-sm text-gray-600">No caps on entries, spins, or features. Our randomizer supports unlimited options, unlimited customization, and unlimited use.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-bold text-gray-900 mb-2">Zero Latency</h3>
              <p className="text-sm text-gray-600">All spinner wheel calculations happen locally in your browser. No server round-trips means instant, responsive spinning!</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">🔗</div>
              <h3 className="font-bold text-gray-900 mb-2">Shareable Wheels</h3>
              <p className="text-sm text-gray-600">Create unique links for your custom random picker wheel. Share with friends, students, or audiences anywhere!</p>
            </div>
          </div>
        </div>


        {/* Why Section */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 md:p-8 p-4 lg:p-12 mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center">Why Our Spinner Wheel Stands Out</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="md:w-16 md:h-16 w-10 h-10 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDroplet className="md:text-3xl text-lg text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Full Customization</h3>
              <p className="text-sm text-gray-600">Customize your wheel of names with colors, text, and themes. Use our random color generator for instant styling.</p>
            </div>
            <div className="text-center">
              <div className="md:w-16 md:h-16 w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiSmartphone className="md:text-3xl text-lg text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Mobile Optimized</h3>
              <p className="text-sm text-gray-600">Perfect spinner wheel experience on phones, tablets, and desktops. Touch-friendly random picker interface.</p>
            </div>
            <div className="text-center">
              <div className="md:w-16 md:h-16 w-10 h-10 bg-linear-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiLock className="md:text-3xl text-lg text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Secure RNG</h3>
              <p className="text-sm text-gray-600">Cryptographic random number generator ensures fair results for your decision wheel and name picker.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">Random Picker Wheel Features FAQ</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border-2 border-gray-200 hover:border-purple-300 transition-all">
              <summary className="flex items-center gap-3 cursor-pointer list-none">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                <span className="text-sm md:text-base font-bold text-gray-900 flex-1">How can I customize the random picker wheel?</span>
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-sm text-gray-600 mt-3 ml-9 leading-relaxed">
                Our spinner wheel offers full customization! Change colors for each segment using our random color generator, add custom labels, adjust wheel size, and save your configurations. Perfect for creating branded wheels of names for events or classrooms.
              </p>
            </details>

            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border-2 border-gray-200 hover:border-blue-300 transition-all">
              <summary className="flex items-center gap-3 cursor-pointer list-none">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Does the spin wheel work on mobile devices?</span>
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-sm text-gray-600 mt-3 ml-9 leading-relaxed">
                Yes! Our random picker wheel is fully optimized for mobile with a touch-friendly interface. Works perfectly on phones and tablets - no app download needed, just open in your mobile browser and start spinning!
              </p>
            </details>

            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border-2 border-gray-200 hover:border-green-300 transition-all">
              <summary className="flex items-center gap-3 cursor-pointer list-none">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Can I share my wheel of names with others?</span>
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-sm text-gray-600 mt-3 ml-9 leading-relaxed">
                Absolutely! Generate shareable links for your custom wheels, share directly on social media, or copy results to clipboard. Perfect for Instagram giveaways, YouTube contests, and team activities with live spin results!
              </p>
            </details>

            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border-2 border-gray-200 hover:border-pink-300 transition-all">
              <summary className="flex items-center gap-3 cursor-pointer list-none">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Is the randomization truly fair and unbiased?</span>
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-sm text-gray-600 mt-3 ml-9 leading-relaxed">
                Yes! We use cryptographically secure random number generation (RNG) via the Web Crypto API. This professional-grade randomization ensures every entry has exactly equal probability - no bias, no patterns, completely transparent results.
              </p>
            </details>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-linear-to-br from-purple-50 to-blue-50 md:p-8 p-4 lg:p-12 rounded-2xl border-2 border-purple-200">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center">All Features, Completely Free</h2>
          <p className="text-gray-700 text-center md:text-base text-sm md:mb-6 mb-4 max-w-3xl mx-auto">
            Enjoy unlimited access to our random picker wheel, wheel spinner, name picker, decision wheel, random name generator, random color generator, random group generator, and yes or no wheel. No signup required, no limits - just free, fair randomization with our spinning wheel and RNG randomizer!
          </p>
          <div className="text-center">
            <Link
              href="/wheel"
              className="inline-block sm:px-8 px-4 sm:py-4 py-2.5 sm:text-base text-sm bg-linear-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Try All Features Now - Free Wheel of Names
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

