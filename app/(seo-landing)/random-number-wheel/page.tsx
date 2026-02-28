import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiHash } from "react-icons/fi";
import { IoCalculatorOutline, IoShieldCheckmarkOutline, IoSparklesOutline, IoDiceOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Random Number Wheel | Free Number Spinner | SpinPickOnline",
    description: "Free random number wheel spinner. Generate random numbers instantly with our spinning wheel. Perfect for games, lotteries, and  number selection.",
    alternates: {
        canonical: "/random-number-wheel",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Random Number Wheel | Free Number Spinner | SpinPickOnline",
        description: "Free random number wheel spinner. Generate random numbers with our spinning wheel.",
        type: "website",
        url: "https://spinpickonline.com/random-number-wheel",
    },
};

// Default number entries (1-10)
const NUMBER_ENTRIES = [
    { id: "1", label: "1", color: "#3b82f6" },   // Blue
    { id: "2", label: "2", color: "#ef4444" },   // Red
    { id: "3", label: "3", color: "#22c55e" },   // Green
    { id: "4", label: "4", color: "#f59e0b" },   // Amber
    { id: "5", label: "5", color: "#8b5cf6" },   // Purple
    { id: "6", label: "6", color: "#ec4899" },   // Pink
    { id: "7", label: "7", color: "#14b8a6" },   // Teal
    { id: "8", label: "8", color: "#f97316" },   // Orange
    { id: "9", label: "9", color: "#6366f1" },   // Indigo
    { id: "10", label: "10", color: "#84cc16" }, // Lime
];

export default function RandomNumberWheelPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How does the random number wheel work?",
            answer: "Our number wheel uses cryptographically secure random number generation to select numbers fairly. Add your custom number range (1-10, 1-100, or specific numbers), spin the wheel, and watch the visual animation reveal your random number!"
        },
        {
            question: "Can I customize the number range?",
            answer: "Yes! You can add any numbers you want to the wheel - use 1-10 for simple games, 1-100 for more options, or add specific custom numbers. Perfect for dice replacement, lottery picks, or any number selection needs!"
        },
        {
            question: "Is this better than a random number generator?",
            answer: "Our random number wheel combines the reliability of cryptographic RNG with engaging visual spinning animation. It's more fun and interactive than a basic number generator while maintaining true randomness. Perfect for classrooms, games, and presentations!"
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
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-indigo-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Random Number Wheel – Free Number Spinner
                        </h1>
                    </div>
                    <HomeWheel defaultEntries={NUMBER_ENTRIES} storageKey="randomNumberWheelState" />
                </div>
            </section>

            {/* Benefits */}
            <section className="pb-10 lg:pb-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use a Random Number Wheel?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            More visual and engaging than traditional random number generators
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-indigo-200 hover:shadow-lg transition-shadow">
                            <div className="bg-indigo-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoDiceOutline className="text-xl text-indigo-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Visual Excitement</h3>
                            <p className="md:text-base text-sm text-gray-600">Watch the wheel spin and build suspense. Much more engaging than clicking a button for a number.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShieldCheckmarkOutline className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Truly Random</h3>
                            <p className="md:text-base text-sm text-gray-600">Uses cryptographically secure randomization. Each number has exactly equal probability.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoCalculatorOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Custom Ranges</h3>
                            <p className="md:text-base text-sm text-gray-600">Add any numbers you want: 1-10, 1-100, or specific numbers for your use case.</p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow">
                            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-orange-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Multi-Purpose</h3>
                            <p className="md:text-base text-sm text-gray-600">Use for games, education, decision making, or any scenario needing random numbers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Use */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How to Generate Random Numbers
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {[
                                { step: "1", title: "Add Your Numbers", desc: "Enter the numbers you want on the wheel (e.g., 1, 2, 3... or specific values)" },
                                { step: "2", title: "Customize Colors", desc: "Each number gets its own color segment for easy identification" },
                                { step: "3", title: "Spin the Wheel", desc: "Click spin and watch the wheel rotate to select a random number" },
                                { step: "4", title: "Use Your Result", desc: "The selected number is displayed clearly. Spin again as needed!" },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-4 items-start bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                                        <p className="md:text-base text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Random Number Wheel Uses
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Board Games
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Replace dice with a number wheel. More visual and can handle any number range, not just 1-6.</p>
                            <Link href="/decision-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Decision Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Math Education
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Teachers use number wheels for math games, probability lessons, and random student selection.</p>
                            <Link href="/classroom-activities" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Classroom Tools <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Lottery Numbers
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Generate lottery number picks or simulate number drawings for games and activities.</p>
                            <Link href="/raffle-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Raffle Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Party Games
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Use for drinking games, truth or dare numbers, or any party activity needing random numbers.</p>
                            <Link href="/random-choice-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Choice Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Number Wheel Uses */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Random Number Generator Uses
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-3">
                            {[
                                { emoji: "🎲", title: "Board Games", desc: "Replace lost or broken dice. Set up a number wheel from 1-6 and spin for each turn" },
                                { emoji: "📚", title: "Student Numbering", desc: "Assign random numbers to students for anonymous grading, seating, or test versions" },
                                { emoji: "🏠", title: "Chore Rotation", desc: "Number your chores and family members, then spin to assign weekly responsibilities randomly" },
                                { emoji: "🎰", title: "Lottery Practice", desc: "Generate random lottery-style numbers for fun or to practice number picking strategies" },
                                { emoji: "📊", title: "Sampling", desc: "Generate random numbers for survey sampling, quality control checks, or research randomization" },
                                { emoji: "🎮", title: "Game Design", desc: "Test probability systems, generate random encounters, or create randomized game elements" },
                            ].map((use, index) => (
                                <div key={index} className="bg-gradient-to-br from-gray-50 to-white md:p-4 p-3 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                    <span className="text-2xl block mb-2">{use.emoji}</span>
                                    <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">{use.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-600">{use.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Number Wheel vs Traditional RNG */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Number Wheel vs Traditional RNG
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg shadow-sm border-2 border-blue-200">
                                <h3 className="font-bold text-blue-700 mb-3 text-lg">🎡 Number Wheel (Visual)</h3>
                                <ul className="space-y-2 md:text-base text-sm text-gray-700">
                                    <li>✅ See the spinning animation build excitement</li>
                                    <li>✅ Perfect for group settings and presentations</li>
                                    <li>✅ Transparent – everyone sees the selection process</li>
                                    <li>✅ Customizable range with individual colors</li>
                                    <li>⚠️ Best for smaller number ranges (2-50)</li>
                                </ul>
                            </div>
                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg shadow-sm border-2 border-gray-200">
                                <h3 className="font-bold text-gray-700 mb-3 text-lg">⌨️ Traditional RNG (Text)</h3>
                                <ul className="space-y-2 md:text-base text-sm text-gray-700">
                                    <li>✅ Instant generation, no animation wait</li>
                                    <li>✅ Better for very large number ranges</li>
                                    <li>✅ Can generate batch numbers at once</li>
                                    <li>❌ No visual engagement – just a number</li>
                                    <li>❌ Hard to prove fairness to others</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-center mt-6 md:text-base text-sm text-gray-600">
                            Both use cryptographically secure randomization. Choose the number wheel when you want the visual experience, or combine both for different needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            More Random Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/random-choice-picker", label: "Choice Picker" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/wheel-spinner", label: "Wheel Spinner" },
                            { href: "/picker-wheel", label: "Picker Wheel" },
                            { href: "/yes-no-wheel", label: "Yes/No Wheel" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
}
