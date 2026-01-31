import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { FiZap, FiTarget, FiSmile, FiSmartphone, FiArrowRight, FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = generateMetadata({
  title: "Yes or No Wheel | Free Decision Maker | SpinPickOnline",
  description: "Free yes or no wheel for quick decisions. Spin the wheel to get instant yes/no answers. Fair, fast, and fun decision maker. No signup required.",
  canonical: "/yes-no-wheel",
});

export default function YesNoWheelPage() {
  return (
    <WheelPageTemplate
      title="Yes or No Wheel"
      description="Make quick decisions with our yes or no wheel"
      h1="Yes or No Wheel – Free Decision Maker"
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
    </WheelPageTemplate>
  );
}
