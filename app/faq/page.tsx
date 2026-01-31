import { Metadata } from "next";
import { FAQS } from "@/lib/constants";
import Link from "next/link";
import { FiArrowLeft, FiHelpCircle } from "react-icons/fi";
import { IoSparklesOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "FAQ - Spin Wheel Questions | Free Random Picker | SpinPickOnline",
  description: "Get answers about our spin the wheel tool, random picker wheel, wheel of names, and spinner features. Learn about randomization, customization, and more. 100% free.",
  alternates: {
    canonical: "/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-6 sm:py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
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
              <FiHelpCircle className="text-xl sm:text-2xl text-white" />
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Everything about our spin the wheel and random picker
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <details key={index} className="group bg-white rounded-lg p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all border border-gray-200">
              <summary className="flex items-center gap-2 cursor-pointer list-none">
                <span className="flex-shrink-0 w-5 h-5 rounded bg-blue-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 flex-1 leading-tight">{faq.question}</span>
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-xs sm:text-sm text-gray-600 mt-2.5 ml-7 leading-relaxed">{faq.answer}</p>
            </details>
          ))}

          {/* Additional SEO FAQs */}
          <div className="mt-5 pt-5 border-t-2 border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <IoSparklesOutline className="text-lg text-purple-600" />
              <h2 className="text-base sm:text-lg font-bold text-gray-900">More Questions</h2>
            </div>

            <div className="space-y-3">
              <details className="group bg-blue-50 rounded-lg p-3.5 sm:p-4 border border-blue-200">
                <summary className="flex items-start gap-2 cursor-pointer list-none">
                  <span className="flex-shrink-0 w-5 h-5 rounded bg-blue-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">Q</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-900 flex-1 leading-tight">Is this the same as a wheel of names spinner?</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-xs sm:text-sm text-gray-700 mt-2.5 ml-7 leading-relaxed">
                  Yes! Our tool works as a wheel of names, random name picker, name spinner, and general purpose spin wheel. Whether you call it a wheel spinner, picker wheel, or randomizer, it's the same powerful tool.
                </p>
              </details>

              <details className="group bg-purple-50 rounded-lg p-3.5 sm:p-4 border border-purple-200">
                <summary className="flex items-start gap-2 cursor-pointer list-none">
                  <span className="flex-shrink-0 w-5 h-5 rounded bg-purple-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">Q</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-900 flex-1 leading-tight">Can I use this as a random number generator?</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-xs sm:text-sm text-gray-700 mt-2.5 ml-7 leading-relaxed">
                  Absolutely! Use it as a random number generator, random word generator, or random color generator. Our cryptographically secure RNG ensures truly random results every time you spin.
                </p>
              </details>

              <details className="group bg-green-50 rounded-lg p-3.5 sm:p-4 border border-green-200">
                <summary className="flex items-start gap-2 cursor-pointer list-none">
                  <span className="flex-shrink-0 w-5 h-5 rounded bg-green-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">Q</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-900 flex-1 leading-tight">What makes this random picker wheel special?</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-xs sm:text-sm text-gray-700 mt-2.5 ml-7 leading-relaxed">
                  Our random picker wheel offers full customization, unlimited entries, and shareable links. Advanced cryptographic RNG ensures professional-grade randomization, and it's completely free without signup requirements.
                </p>
              </details>

              <details className="group bg-pink-50 rounded-lg p-3.5 sm:p-4 border border-pink-200">
                <summary className="flex items-start gap-2 cursor-pointer list-none">
                  <span className="flex-shrink-0 w-5 h-5 rounded bg-pink-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">Q</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-900 flex-1 leading-tight">Can I use this for yes or no decisions?</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-xs sm:text-sm text-gray-700 mt-2.5 ml-7 leading-relaxed">
                  Yes! Our yes or no wheel is perfect for quick binary decisions. Add "Yes" and "No" as entries and spin. Also works as a coin flipper alternative with "Heads" and "Tails".
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
