import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { generateWebApplicationSchema } from "@/lib/seo";
import SchemaScript from "@/components/SchemaScript";
import { FiLock, FiTarget, FiDollarSign, FiSmartphone, FiShare2, FiDroplet } from "react-icons/fi";

export const metadata: Metadata = generateMetadata({
  title: "Random Picker Wheel | Free & Fast | SpinPickOnline",
  description: "Random Picker Wheel - Free online tool to randomly pick from a list. Customizable, shareable, and 100% fair. Create your wheel in seconds, no account needed.",
  canonical: "/random-picker-wheel",
});

export default function RandomPickerWheelPage() {
  const webAppSchema = generateWebApplicationSchema();

  return (
    <>
      <SchemaScript schema={webAppSchema} />

      <div className="bg-gradient-to-b from-gray-50 to-white py-10 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center lg:mb-12 mb-6">
            <div className="inline-block bg-linear-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
              <span className="text-blue-700 font-semibold text-sm">🎲 Free Random Picker Tool</span>
            </div>
            <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold text-gray-900 md:mb-6 mb-3">Random Picker Wheel</h1>
            <p className="md:text-base text-sm text-gray-600 max-w-5xl mx-auto md:mb-8 mb-5">
              The ultimate spin the wheel tool for fair random selection. Use our wheel of names, spinner wheel, and decision wheel for instant, unbiased results. Perfect for teams, classrooms, giveaways, and daily decisions.
            </p>
            <Link
              href="/wheel"
              className="inline-block sm:px-8 px-4 sm:py-4 py-2.5 sm:text-base text-sm bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Create Your Random Picker Wheel Now
            </Link>
          </div>

          <h2 className="md:text-2xl text-xl font-bold text-gray-900 md:mb-4 md:mt-5 mb-3 mt-4">What is a Random Picker Wheel?</h2>
          <p className="text-gray-700 mb-4 md:text-base text-sm">
            A random picker wheel (also known as spin the wheel, wheel of names, spinner wheel, or decision wheel) is a visual tool that helps you make fair, unbiased random selections from a list of options. Our free randomizer uses cryptographic RNG (random number generator) to ensure truly random results. Simply add your entries, spin the wheel, and get instant random results. Perfect for teams, classrooms, giveaways, and daily decisions.
          </p>

          <h2 className="md:text-2xl text-xl font-bold text-gray-900 md:mb-4 md:mt-5 mb-3 mt-4">How to Use a Random Picker Wheel</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 md:text-base text-sm">
            <li>Add your entries - Enter items, names, or options to your wheel spinner (works as name wheel, random name picker, or random word generator)</li>
            <li>Customize your wheel - Choose colors with our random color generator and personalize the spinning wheel appearance</li>
            <li>Spin the wheel - Click to spin a wheel and get an instant random result using our secure RNG randomizer</li>
            <li>Share results - Copy or share your picker wheel results with others via social media or email</li>
          </ol>

          <h2 className="md:text-2xl text-xl font-bold text-gray-900 md:mb-4 md:mt-5 mb-3 mt-4">Random Picker Wheel Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:text-base text-sm">
            <div>
              <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-2">Customizable Colors and Labels</h3>
              <p className="text-gray-700">Personalize each segment with custom colors using our random color generator. Make your wheel spin unique and branded!</p>
            </div>
            <div>
              <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-2">Shareable Wheel Links</h3>
              <p className="text-gray-700">Generate shareable links with spin the wheel custom options. Share your random wheel, name spinner, or decision wheel with anyone!</p>
            </div>
            <div>
              <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-2">Mobile-Friendly Spinner</h3>
              <p className="text-gray-700">Works perfectly on all devices as a mobile spinner wheel. Touch-optimized wheel picker for phones, tablets, and desktop browsers!</p>
            </div>
            <div>
              <h3 className="md:text-xl text-lg font-semibold text-gray-900 mb-2">Fair Randomization Algorithm</h3>
              <p className="text-gray-700">Cryptographically secure random number generator (RNG) for truly fair results and unbiased random selection!</p>
            </div>
          </div>

          <h2 className="md:text-2xl text-lg font-bold text-gray-900 md:mb-4 md:mt-5 mb-3 mt-4">Random Picker Wheel Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mb-6 mb-5">
            <Link href="/team-picker" className="block p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all group">
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600">Team Selection & Random Group Generator</h3>
              <p className="text-sm text-gray-600">Fair team distribution for sports and work using our random team picker and wheel of names</p>
            </Link>
            <Link href="/lunch-decisions" className="block p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all group">
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-gray-900 group-hover:text-purple-600">Lunch Decisions & Yes or No Wheel</h3>
              <p className="text-sm text-gray-600">Quick and fair meal choices with our decision wheel and spinner wheel randomizer</p>
            </Link>
            <Link href="/classroom-activities" className="block p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-green-200 hover:border-green-400 hover:shadow-md transition-all group">
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-gray-900 group-hover:text-green-600">Classroom Activities & Name Picker</h3>
              <p className="text-sm text-gray-600">Fair student selection and participation using our random name picker and name wheel</p>
            </Link>
            <Link href="/giveaway-winner" className="block p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg border-2 border-pink-200 hover:border-pink-400 hover:shadow-md transition-all group">
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-gray-900 group-hover:text-pink-600">Giveaway Winners & Contest Randomizer</h3>
              <p className="text-sm text-gray-600">Transparent contest winner selection with our RNG randomizer and picker wheel</p>
            </Link>
            <Link href="/spin-wheel-for-giveaway" className="block p-4 bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg border-2 border-rose-200 hover:border-rose-400 hover:shadow-md transition-all group">
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-gray-900 group-hover:text-rose-600">Spin Wheel for Giveaways</h3>
              <p className="text-sm text-gray-600">Perfect for Instagram, YouTube, and TikTok giveaways with transparent selection</p>
            </Link>
            <Link href="/guides/how-to-use-random-picker-wheel" className="block p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border-2 border-amber-200 hover:border-amber-400 hover:shadow-md transition-all group">
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-gray-900 group-hover:text-amber-600">📖 Complete Guide</h3>
              <p className="text-sm text-gray-600">Step-by-step tutorial with screenshots on how to use the random picker wheel</p>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 md:p-8 p-4 lg:p-12 lg:mb-12 mb-8">
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Random Picker Wheel?</h2>
            <div className="grid md:grid-cols-2 lg:gap-6 gap-5">
              <div className="flex items-start md:gap-4 gap-3 sm:flex-row flex-col">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiLock className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Cryptographic RNG</h3>
                  <p className="text-gray-700 text-sm">Our wheel spinner uses cryptographic random number generation for truly random results and fair selection</p>
                </div>
              </div>
              <div className="flex items-start md:gap-4 gap-3 sm:flex-row flex-col">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiTarget className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Multiple Tools in One</h3>
                  <p className="text-gray-700 text-sm">Works as spin the wheel, wheel of names, random name generator, decision wheel, yes or no wheel, and random word generator</p>
                </div>
              </div>
              <div className="flex items-start md:gap-4 gap-3 sm:flex-row flex-col">
                <div className="w-12 h-12 bg-linear-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiDollarSign className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">100% Free Randomizer</h3>
                  <p className="text-gray-700 text-sm">Unlimited spins with our free spinner wheel, random picker, and wheel decide tool - no signup or credit card required</p>
                </div>
              </div>
              <div className="flex items-start md:gap-4 gap-3 sm:flex-row flex-col">
                <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiSmartphone className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Mobile Spinner Wheel</h3>
                  <p className="text-gray-700 text-sm">Touch-optimized spinning wheel and picker wheel that works perfectly on phones, tablets, and desktop</p>
                </div>
              </div>
              <div className="flex items-start md:gap-4 gap-3 sm:flex-row flex-col">
                <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiShare2 className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Shareable Results</h3>
                  <p className="text-gray-700 text-sm">Create custom wheel links with spin the wheel custom options and share your random wheel with anyone</p>
                </div>
              </div>
              <div className="flex items-start md:gap-4 gap-3 sm:flex-row flex-col">
                <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiDroplet className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Full Customization</h3>
                  <p className="text-gray-700 text-sm">Use our random color generator and customize every aspect of your name wheel and spinner wheel</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/wheel"
              className="inline-block sm:px-8 px-4 sm:py-3 py-2.5 sm:text-base text-sm bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Your Random Picker Wheel - Free Spinner Tool
            </Link>
          </div>

          {/* Explore More Tools */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="md:text-2xl text-lg font-bold text-gray-900 mb-4 text-center">Explore More Wheel Tools</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/name-picker", label: "Name Picker" },
                { href: "/yes-no-wheel", label: "Yes/No Wheel" },
                { href: "/decision-wheel", label: "Decision Wheel" },
                { href: "/picker-wheel", label: "Picker Wheel" },
                { href: "/wheel-spinner", label: "Wheel Spinner" },
                { href: "/lucky-draw-wheel", label: "Lucky Draw" },
                { href: "/raffle-wheel", label: "Raffle Wheel" },
                { href: "/prize-wheel", label: "Prize Wheel" },
                { href: "/random-number-wheel", label: "Number Wheel" },
                { href: "/random-choice-picker", label: "Choice Picker" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


