import { Metadata } from "next";
import { generateMetadata, generateWebApplicationSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { FiZap, FiTarget, FiSmile, FiSmartphone, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import YesNoWheel from "@/components/YesNoWheel";

export const metadata: Metadata = generateMetadata({
  title: "Yes or No Wheel | Free Decision Maker | SpinPickOnline",
  description: "Free yes or no wheel for quick decisions. Spin the wheel to get instant yes/no answers. Fair, fast, and fun decision maker. No signup required.",
  canonical: "/yes-no-wheel",
});

export default function YesNoWheelPage() {
  const applicationSchema = generateWebApplicationSchema();
  const faqSchema = generateFAQSchema([
    {
      question: "Is the yes or no wheel truly random and fair?",
      answer: "Yes! Our yes or no wheel uses a cryptographically secure random number generator (RNG), ensuring a perfect 50/50 probability. Unlike basic spinner wheels, our decision wheel provides truly unbiased random results."
    },
    {
      question: "How is this different from a coin flip?",
      answer: "While both provide 50/50 odds, our yes no wheel is more engaging with visual spinning motion. It's perfect for streaming, group decisions, and adding excitement. Plus, you can customize it with different options beyond just yes and no!"
    },
    {
      question: "Can I add more options beyond yes and no?",
      answer: "Absolutely! While we default to yes and no for the decision wheel, you can add any options you want. Try \"maybe\", \"ask later\", or any custom choices. Our spin wheel is fully customizable for any decision you need to make."
    },
    {
      question: "Does the yes no spinner work on mobile?",
      answer: "Yes! Our yes or no wheel is fully optimized for mobile devices with touch-friendly controls. The spinner wheel works smoothly on phones, tablets, and desktops. No app download required - just open and spin!"
    }
  ]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: SITE_CONFIG.url },
    { name: "Yes or No Wheel", item: `${SITE_CONFIG.url}/yes-no-wheel` },
  ]);

  return (
    <WheelPageTemplate
      title="Yes or No Wheel"
      description="Make quick decisions with our yes or no wheel"
      h1="Yes or No Wheel – Free Decision Maker"
      showWheel={false}
      benefits={[
        "Instant yes/no decisions",
        "Fair 50/50 random selection",
        "Perfect for quick choices",
        "No bias or overthinking"
      ]}
      useCases={[
        "Daily decision making",
        "Breaking ties",
        "Quick choices",
        "Fun with friends"
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Custom Yes/No Wheel Section */}
      <section id="try-wheel" className="pb-10 lg:pb-16 lg:pt-10 pt-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center lg:mb-12 sm:mb-8 mb-5">
            <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Yes or No Wheel – Spin the Decision Maker Online Free</h1>
          </div>
          <YesNoWheel />
        </div>
      </section>

      {/* What is Section */}
      <section className="pb-10 lg:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">What is a Yes or No Wheel?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed md:text-base text-sm">
            A yes or no wheel (also known as yes no spinner, decision wheel, or choice maker) is a simple random picker tool that randomly selects between "Yes" and "No" answers. Our free spinner wheel provides a fair 50/50 chance for each option, making it perfect for quick decisions when you're stuck between two choices.
          </p>
          <p className="text-gray-700 leading-relaxed md:text-base text-sm">
            Use our yes no wheel as a decision wheel, random picker, spin the wheel tool, or fun way to make choices. Works as a coin flip alternative, randomizer, or quick decision maker. It's completely free, works on mobile, and requires no signup!
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="sm:text-2xl md:text-3xl text-xl font-bold text-gray-900 mb-6">Yes or No Wheel Benefits</h2>
          <div className="grid md:grid-cols-2 md:gap-6 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 md:p-5 p-4 rounded-xl shadow-md border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                <FiZap className="text-white text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Eliminates Decision Fatigue</h3>
              <p className="text-gray-700 md:text-base text-sm">Stop overthinking! Our yes no spinner makes instant decisions for you using fair random selection.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 md:p-5 p-4 rounded-xl shadow-md border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-3">
                <FiTarget className="text-white text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Unbiased Random Selection</h3>
              <p className="text-gray-700 md:text-base text-sm">True 50/50 probability with our RNG randomizer ensures completely fair yes or no results every time.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 md:p-5 p-4 rounded-xl shadow-md border-2 border-green-200 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-3">
                <FiSmile className="text-white text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fun Decision Making</h3>
              <p className="text-gray-700 md:text-base text-sm">Turn boring choices into fun moments with our interactive wheel spinner and decision wheel.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 md:p-5 p-4 rounded-xl shadow-md border-2 border-pink-200 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center mb-3">
                <FiSmartphone className="text-white text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Works Everywhere</h3>
              <p className="text-gray-700 md:text-base text-sm">Mobile-friendly yes no wheel works on phones, tablets, and desktop. No app download needed!</p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use Section */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="sm:text-2xl md:text-3xl text-xl font-bold text-gray-900 mb-6">When to Use a Yes No Wheel</h2>
          <div className="grid md:grid-cols-2 md:gap-6 gap-4">
            <div className="md:p-5 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-l-4 border-blue-500 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <FiArrowRight className="text-blue-600" /> Quick Decisions
              </h3>
              <p className="text-sm text-gray-700">Use our yes or no spinner when you need to make a fast choice without overthinking. Perfect decision wheel for daily choices.</p>
            </div>
            <div className="md:p-5 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-l-4 border-purple-500 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <FiArrowRight className="text-purple-600" /> Breaking Ties
              </h3>
              <p className="text-sm text-gray-700">When you're equally split between two options, let our random picker wheel decide. Fair coin flip alternative!</p>
            </div>
            <div className="md:p-5 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-l-4 border-green-500 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <FiArrowRight className="text-green-600" /> Fun with Friends
              </h3>
              <p className="text-sm text-gray-700">Make group decisions in a fun, fair way with our spin the wheel tool. Great for games and activities!</p>
            </div>
            <div className="md:p-5 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-l-4 border-pink-500 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <FiArrowRight className="text-pink-600" /> Daily Choices
              </h3>
              <p className="text-sm text-gray-700">For everyday decisions like what to eat, watch, or do. Our yes no wheel makes choosing easy and fun!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="sm:text-2xl md:text-3xl text-xl font-bold text-gray-900 mb-6">Popular Yes or No Wheel Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white md:p-5 p-4 rounded-xl shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Should I Go Out Tonight?</h3>
              <p className="text-gray-700 md:text-base text-sm">Let the yes no spinner decide! Perfect decision wheel for social plans and evening activities.</p>
            </div>
            <div className="bg-white md:p-5 p-4 rounded-xl shadow-md border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Should I Buy This?</h3>
              <p className="text-gray-700 md:text-base text-sm">Use our random picker to help with shopping decisions. Fair yes or no wheel for purchase choices.</p>
            </div>
            <div className="bg-white md:p-5 p-4 rounded-xl shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Should I Start a New Project?</h3>
              <p className="text-gray-700 md:text-base text-sm">Spin the wheel for life decisions! Our randomizer helps break analysis paralysis.</p>
            </div>
            <div className="bg-white md:p-5 p-4 rounded-xl shadow-md border-t-4 border-pink-500 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Truth or Dare Games</h3>
              <p className="text-gray-700 md:text-base text-sm">Perfect yes no wheel for party games, icebreakers, and fun group activities with friends!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="sm:text-2xl md:text-3xl text-xl font-bold text-gray-900 mb-6">Why Use Our Yes or No Wheel?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 md:p-5 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FiCheckCircle className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">100% Fair & Random</h3>
                  <p className="text-gray-700 md:text-base text-sm">Our RNG randomizer ensures true 50/50 probability for yes and no. Cryptographically secure random selection for unbiased results!</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 md:p-5 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FiCheckCircle className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Completely Free</h3>
                  <p className="text-gray-700 md:text-base text-sm">No signup, no limits, unlimited spins forever! Free yes no wheel, decision maker, and spinner wheel for everyone.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 md:p-5 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FiCheckCircle className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Mobile Friendly</h3>
                  <p className="text-gray-700 md:text-base text-sm">Touch-optimized yes or no spinner works perfectly on phones, tablets, and desktop. No app download needed!</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 md:p-5 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FiCheckCircle className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Instant Results</h3>
                  <p className="text-gray-700 md:text-base text-sm">Get your yes or no answer in seconds with our fast spin the wheel tool. Quick decision wheel for instant choices!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools Section */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="sm:text-2xl md:text-3xl text-xl font-bold text-gray-900 mb-6">Explore More Decision Tools</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/decision-wheel" className="group bg-white p-4 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">🎯 Decision Wheel</h3>
              <p className="text-sm text-gray-600 mb-2">Add multiple options and let the wheel decide for you.</p>
              <span className="text-sm font-semibold text-blue-600 inline-flex items-center gap-1">Try it <FiArrowRight className="text-xs" /></span>
            </Link>
            <Link href="/random-choice-picker" className="group bg-white p-4 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">🔀 Random Choice Picker</h3>
              <p className="text-sm text-gray-600 mb-2">Pick randomly from any list of options or choices.</p>
              <span className="text-sm font-semibold text-purple-600 inline-flex items-center gap-1">Try it <FiArrowRight className="text-xs" /></span>
            </Link>
            <Link href="/name-picker" className="group bg-white p-4 rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">👤 Name Picker</h3>
              <p className="text-sm text-gray-600 mb-2">Pick random names for raffles, classrooms, and more.</p>
              <span className="text-sm font-semibold text-green-600 inline-flex items-center gap-1">Try it <FiArrowRight className="text-xs" /></span>
            </Link>
            <Link href="/picker-wheel" className="group bg-white p-4 rounded-xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600">🎡 Picker Wheel</h3>
              <p className="text-sm text-gray-600 mb-2">Universal picker wheel for any type of random selection.</p>
              <span className="text-sm font-semibold text-orange-600 inline-flex items-center gap-1">Try it <FiArrowRight className="text-xs" /></span>
            </Link>
            <Link href="/wheel-spinner" className="group bg-white p-4 rounded-xl border-2 border-pink-200 hover:border-pink-400 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-pink-600">🔄 Wheel Spinner</h3>
              <p className="text-sm text-gray-600 mb-2">Create and spin custom wheels for any purpose.</p>
              <span className="text-sm font-semibold text-pink-600 inline-flex items-center gap-1">Try it <FiArrowRight className="text-xs" /></span>
            </Link>
            <Link href="/guides/how-to-use-random-picker-wheel" className="group bg-white p-4 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600">📖 How to Guide</h3>
              <p className="text-sm text-gray-600 mb-2">Learn how to use our random picker wheel step-by-step.</p>
              <span className="text-sm font-semibold text-amber-600 inline-flex items-center gap-1">Read guide <FiArrowRight className="text-xs" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Use Our Yes No Wheel Section */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="sm:text-2xl md:text-3xl text-xl font-bold text-gray-900 mb-6">Why Use Our Yes or No Wheel?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">⚖️ Guaranteed Fairness</h3>
              <p className="text-sm text-gray-700">Powered by the Web Crypto API, our yes no spinner provides true 50/50 probability. No bias, just pure random chance.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">⚡ Instant Decisions</h3>
              <p className="text-sm text-gray-700">End analysis paralysis in seconds. Add your options and spin to get a clear answer immediately.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">🎨 Fully Customizable</h3>
              <p className="text-sm text-gray-700">Beyond simple yes or no, add custom choices like "Maybe," "Later," or "Try Again" to suit your decision.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Advanced Tips Section */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="sm:text-2xl md:text-3xl text-xl font-bold text-gray-900 mb-6">Pro Tips for Using the Yes No Wheel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white md:p-5 p-4 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">💡 Customize Beyond Yes/No</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Add "Maybe" or "Ask Later" for a Magic 8-Ball style randomizer. Try "Heads/Tails" for a virtual coin flipper, or add custom options like "Now/Later" for timing decisions.
              </p>
            </div>
            <div className="bg-white md:p-5 p-4 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">🎯 Honor the Spin</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                To overcome analysis paralysis, commit to following the yes no wheel result before spinning. This turns our random picker into a powerful decision-making tool!
              </p>
            </div>
            <div className="bg-white md:p-5 p-4 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">📱 Use on the Go</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Bookmark our yes or no wheel on your phone for instant decisions anywhere. Our mobile-friendly spinner wheel works offline after initial load!
              </p>
            </div>
            <div className="bg-white md:p-5 p-4 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">🎮 Make It Fun</h3>
              <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                Use for party games like Truth or Dare, choosing who goes first, or settling friendly debates. Our decision wheel adds excitement to any group activity!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="sm:text-2xl md:text-3xl text-xl font-bold text-gray-900 mb-6">Yes or No Wheel FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
              <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Is the yes or no wheel truly random and fair?</h3>
              <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                Yes! Our yes or no wheel uses a cryptographically secure random number generator (RNG), ensuring a perfect 50/50 probability. Unlike basic spinner wheels, our decision wheel provides truly unbiased random results.
              </p>
            </div>

            <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
              <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">How is this different from a coin flip?</h3>
              <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                While both provide 50/50 odds, our yes no wheel is more engaging with visual spinning motion. It's perfect for streaming, group decisions, and adding excitement. Plus, you can customize it with different options beyond just yes and no!
              </p>
            </div>

            <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
              <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I add more options beyond yes and no?</h3>
              <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                Absolutely! While we default to yes and no for the decision wheel, you can add any options you want. Try "maybe", "ask later", or any custom choices. Our spin wheel is fully customizable for any decision you need to make.
              </p>
            </div>

            <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
              <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Does the yes no spinner work on mobile?</h3>
              <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                Yes! Our yes or no wheel is fully optimized for mobile devices with touch-friendly controls. The spinner wheel works smoothly on phones, tablets, and desktops. No app download required - just open and spin!
              </p>
            </div>
          </div>
        </div>
      </section>
    </WheelPageTemplate>
  );
}
