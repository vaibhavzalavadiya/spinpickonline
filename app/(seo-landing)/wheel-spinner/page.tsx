import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiRotateCw } from "react-icons/fi";
import { IoColorPaletteOutline, IoSparklesOutline, IoPhonePortraitOutline, IoShareSocialOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Wheel Spinner | Free Online Spinning Wheel | SpinPickOnline",
    description: "Free wheel spinner online. Create custom spinning wheels for any purpose. Add entries, customize colors, and spin! No download, no signup required.",
    alternates: {
        canonical: "/wheel-spinner",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Wheel Spinner | Free Online Spinning Wheel | SpinPickOnline",
        description: "Free wheel spinner online. Create custom spinning wheels instantly.",
        type: "website",
        url: "https://spinpickonline.com/wheel-spinner",
    },
};

// Default spinner entries
const SPINNER_ENTRIES = [
    { id: "1", label: "Choice A", color: "#3b82f6" },
    { id: "2", label: "Choice B", color: "#ef4444" },
    { id: "3", label: "Choice C", color: "#22c55e" },
    { id: "4", label: "Choice D", color: "#f59e0b" },
    { id: "5", label: "Choice E", color: "#8b5cf6" },
];

export default function WheelSpinnerPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "Can I customize my wheel spinner?",
            answer: "Yes! Our wheel spinner is fully customizable. Change colors for each segment, add custom labels, adjust entries, and create unique spinning wheels for any occasion. Perfect for games, decisions, giveaways, or presentations!"
        },
        {
            question: "Does the wheel spinner work on mobile?",
            answer: "Absolutely! Our spinning wheel works perfectly on desktop, tablet, and mobile devices. No download needed - just open in your browser and start spinning. Optimized for touch screens!"
        },
        {
            question: "Is the wheel spinner free to use?",
            answer: "Yes! Our online spinning wheel is 100% free with unlimited spins and entries. No signup, no watermarks, completely free wheel spinner tool!"
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
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-violet-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold mb-4">
                            <FiRotateCw className="text-lg" />
                            <span>Spin Anything</span>
                        </div>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Wheel Spinner – Free Online Spinning Wheel
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The ultimate free wheel spinner for any purpose. Add your entries, customize colors, and spin! Perfect for games, decisions, raffles, or just for fun. Works on any device, no download needed.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={SPINNER_ENTRIES} />
                </div>
            </section>

            {/* Features */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Our Wheel Spinner?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The most versatile spinning wheel tool online
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-violet-50 to-purple-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-violet-200 hover:shadow-lg transition-shadow">
                            <div className="bg-violet-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoColorPaletteOutline className="text-xl text-violet-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Full Customization</h3>
                            <p className="md:text-base text-sm text-gray-600">Change colors, labels, and entries. Make your wheel spinner unique for any occasion.</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Smooth Animation</h3>
                            <p className="md:text-base text-sm text-gray-600">Realistic physics with smooth deceleration. Watch the wheel spin and slow to reveal your result.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoPhonePortraitOutline className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Works Everywhere</h3>
                            <p className="md:text-base text-sm text-gray-600">Desktop, tablet, or phone – our wheel spinner works perfectly on any device.</p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow">
                            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShareSocialOutline className="text-xl text-orange-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Easy Sharing</h3>
                            <p className="md:text-base text-sm text-gray-600">Share your wheel spinner with others or use it in presentations and live events.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Use */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How to Use the Wheel Spinner
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {[
                                { step: "1", title: "Add Entries", desc: "Type in names, options, or whatever you want on your wheel" },
                                { step: "2", title: "Customize Colors", desc: "Pick colors for each segment to make your wheel visually appealing" },
                                { step: "3", title: "Click Spin", desc: "Hit the spin button and watch the wheel rotate with realistic physics" },
                                { step: "4", title: "Get Results", desc: "The wheel stops on a random entry. Spin again as many times as you want!" },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-4 items-start bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold">
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
                            What Can You Use a Wheel Spinner For?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Games & Entertainment
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Party games, drinking games, truth or dare, and any activity that needs random selection.</p>
                            <Link href="/random-choice-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Choice Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Giveaways & Contests
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Select winners fairly at events, on social media, or for any promotion.</p>
                            <Link href="/spin-wheel-for-giveaway" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Giveaway Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Classroom Activities
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Teachers use wheel spinners for student selection, topic randomization, and interactive lessons.</p>
                            <Link href="/classroom-activities" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Classroom Tools <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Decision Making
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Let the wheel decide when you can't choose. Where to eat, what to do, what to watch.</p>
                            <Link href="/decision-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Decision Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            Explore Wheel Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/picker-wheel", label: "Picker Wheel" },
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/prize-wheel", label: "Prize Wheel" },
                            { href: "/lucky-draw-wheel", label: "Lucky Draw" },
                            { href: "/raffle-wheel", label: "Raffle Wheel" },
                            { href: "/name-picker", label: "Name Picker" },
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
