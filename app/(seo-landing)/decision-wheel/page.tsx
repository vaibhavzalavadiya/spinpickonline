import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiHelpCircle } from "react-icons/fi";
import { IoCompassOutline, IoFlashOutline, IoHeartOutline, IoRestaurantOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Decision Wheel | Free Decision Maker Spinner | SpinPickOnline",
    description: "Free decision wheel to help you decide. Can't make up your mind? Let the wheel decide for you! Perfect for restaurants, activities, and life choices.",
    alternates: {
        canonical: "/decision-wheel",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Decision Wheel | Free Decision Maker Spinner | SpinPickOnline",
        description: "Free decision wheel. Can't decide? Let the wheel make the choice!",
        type: "website",
        url: "https://spinpickonline.com/decision-wheel",
    },
};

// Default decision entries (food choices)
const DECISION_ENTRIES = [
    { id: "1", label: "Pizza", color: "#ef4444" },
    { id: "2", label: "Sushi", color: "#f59e0b" },
    { id: "3", label: "Burgers", color: "#22c55e" },
    { id: "4", label: "Thai Food", color: "#8b5cf6" },
];

export default function DecisionWheelPage() {
    // Generate schemas for SEO
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "What is a decision wheel and how does it work?",
            answer: "A decision wheel is a random picker tool that helps you make choices when you're stuck between options. Simply add your options to the wheel, spin it, and let randomness decide for you. Our decision maker uses cryptographic RNG for truly fair, unbiased results."
        },
        {
            question: "Is the decision wheel truly random?",
            answer: "Yes! Unlike basic randomizers, our spin the wheel uses Web Crypto API for cryptographically secure random number generation. Every option has exactly equal probability of being selected – no hidden bias or patterns."
        },
        {
            question: "Can I use the decision wheel for what to eat?",
            answer: "Absolutely! Our decision wheel is perfect for food choices. Add restaurants like pizza, sushi, Thai, or burgers, and spin to end the \"what should we eat?\" debate. It's the ultimate lunch decision randomizer!"
        },
        {
            question: "How is this different from flipping a coin?",
            answer: "Our decision wheel handles any number of options (not just two), provides visual excitement, and offers a more engaging experience than a coin flip. Plus, you can save your wheels and share them with friends for group decisions!"
        }
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* Hero Section with Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-blue-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Decision Wheel – Free Decision Maker
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Stuck on a decision? Add your options to our decision wheel and let fate decide for you. No more analysis paralysis – just spin and go with the result!
                        </p>
                    </div>
                    <HomeWheel defaultEntries={DECISION_ENTRIES} storageKey="decisionWheelState" />
                </div>
            </section>

            {/* Why Decision Wheel */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Decision Wheels Work
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Sometimes the best decision is letting go of deciding
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoFlashOutline className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">End Overthinking</h3>
                            <p className="md:text-base text-sm text-gray-600">Stop analyzing endlessly. If all options are acceptable, just pick one and move forward.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoCompassOutline className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Reveal True Preference</h3>
                            <p className="md:text-base text-sm text-gray-600">Disappointed with the result? That tells you what you really wanted. Spin or choose!</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoHeartOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Remove Conflict</h3>
                            <p className="md:text-base text-sm text-gray-600">Can't agree with others? Let the wheel be the neutral decision maker. No blame, no arguments.</p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow">
                            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoRestaurantOutline className="text-xl text-orange-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Add Excitement</h3>
                            <p className="md:text-base text-sm text-gray-600">Turn mundane decisions into mini-adventures. The anticipation makes any choice more fun!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Decision Types */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Decisions the Wheel Can Make
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 max-w-5xl mx-auto">
                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🍕 Where to Eat</h3>
                            <p className="md:text-base text-sm text-gray-600">Pizza, sushi, Thai, or burgers? Add the options and spin. No more "I don't know, you pick."</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🎬 What to Watch</h3>
                            <p className="md:text-base text-sm text-gray-600">Movie night indecision solved. Add your watchlist and let the wheel choose tonight's film.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🏖️ Weekend Plans</h3>
                            <p className="md:text-base text-sm text-gray-600">Beach, hiking, shopping, or staying home? Add activities and see where the day takes you.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🎮 Game Selection</h3>
                            <p className="md:text-base text-sm text-gray-600">Which game to play next? Board games, video games, or party activities – let the wheel decide.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">📚 Book Selection</h3>
                            <p className="md:text-base text-sm text-gray-600">Too many books on your reading list? Add them to the wheel and discover your next read.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🏃 Workout Type</h3>
                            <p className="md:text-base text-sm text-gray-600">Running, gym, yoga, or swimming? Add workout options and let random chance keep fitness interesting.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick vs Complex Decisions */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center md:mb-8 mb-6">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                When to Use a Decision Wheel
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                            <div className="bg-green-50 md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-green-200">
                                <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                                    <FiCheck className="text-green-500" /> Perfect For
                                </h3>
                                <ul className="space-y-2 md:text-base text-sm text-gray-700">
                                    <li>• Low-stakes decisions (food, entertainment)</li>
                                    <li>• When all options are roughly equal</li>
                                    <li>• Resolving group disagreements</li>
                                    <li>• Breaking out of indecision paralysis</li>
                                    <li>• Adding spontaneity to routine choices</li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-orange-200">
                                <h3 className="font-bold text-orange-700 mb-4 flex items-center gap-2">
                                    <FiHelpCircle className="text-orange-500" /> Consider Carefully
                                </h3>
                                <ul className="space-y-2 md:text-base text-sm text-gray-700">
                                    <li>• Major life decisions (career, relationships)</li>
                                    <li>• Financial decisions with big consequences</li>
                                    <li>• When you strongly prefer one option</li>
                                    <li>• Decisions affecting others significantly</li>
                                    <li>• When you need more information first</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Pages */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            More Decision Tools
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Yes/No Wheel
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">For simple binary decisions. Should I or shouldn't I? Let fate decide.</p>
                            <Link href="/yes-no-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Yes/No Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Random Choice Picker
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Similar to decision wheel, perfect for quick picks from any list of options.</p>
                            <Link href="/random-choice-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Choice Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Picker Wheel
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">General purpose picker for selecting from any type of list.</p>
                            <Link href="/picker-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Picker Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Wheel Spinner
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Our most versatile wheel tool for any spinning wheel need.</p>
                            <Link href="/wheel-spinner" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Wheel Spinner <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            Explore More Wheels
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/random-number-wheel", label: "Number Wheel" },
                            { href: "/prize-wheel", label: "Prize Wheel" },
                            { href: "/lucky-draw-wheel", label: "Lucky Draw" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/spin-wheel-for-giveaway", label: "Giveaway Wheel" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Decision Wheel FAQ</h2>
                        <div className="space-y-4">
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">What is a decision wheel and how does it work?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    A decision wheel is a random picker tool that helps you make choices when you're stuck between options. Simply add your options to the wheel, spin it, and let randomness decide for you. Our decision maker uses cryptographic RNG for truly fair, unbiased results.
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Is the decision wheel truly random?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Yes! Unlike basic randomizers, our spin the wheel uses Web Crypto API for cryptographically secure random number generation. Every option has exactly equal probability of being selected – no hidden bias or patterns.
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Can I use the decision wheel for what to eat?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Absolutely! Our decision wheel is perfect for food choices. Add restaurants like pizza, sushi, Thai, or burgers, and spin to end the "what should we eat?" debate. It's the ultimate lunch decision randomizer!
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">How is this different from flipping a coin?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Our decision wheel handles any number of options (not just two), provides visual excitement, and offers a more engaging experience than a coin flip. Plus, you can save your wheels and share them with friends for group decisions!
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
}
