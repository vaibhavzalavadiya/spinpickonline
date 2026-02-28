import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { IoGiftOutline, IoTrophyOutline, IoSparklesOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Lucky Draw Wheel | Free Online Spinner | SpinPickOnline",
    description: "Free lucky draw wheel for instant winner selection. Perfect for events, parties, and promotions. Cryptographically fair, mobile-friendly, no signup required.",
    alternates: {
        canonical: "/lucky-draw-wheel",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Lucky Draw Wheel | Free Online Spinner | SpinPickOnline",
        description: "Free lucky draw wheel for instant winner selection. Perfect for events, parties, and promotions.",
        type: "website",
        url: "https://spinpickonline.com/lucky-draw-wheel",
    },
};

// Default lucky draw entries
const LUCKY_DRAW_ENTRIES = [
    { id: "1", label: "Entry 1", color: "#3b82f6" },
    { id: "2", label: "Entry 2", color: "#ef4444" },
    { id: "3", label: "Entry 3", color: "#22c55e" },
    { id: "4", label: "Entry 4", color: "#f59e0b" },
    { id: "5", label: "Entry 5", color: "#8b5cf6" },
];

export default function LuckyDrawWheelPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How does the lucky draw wheel ensure fairness?",
            answer: "Our lucky draw wheel uses cryptographically secure random number generation (RNG) to ensure every participant has an equal chance. Our randomizer provides transparent, verifiable results for your events and promotions."
        },
        {
            question: "Can I use this for trade show lucky draws?",
            answer: "Absolutely! Our lucky draw spinner is perfect for trade shows, conferences, and promotional events. The visual wheel creates excitement and engagement at your booth while ensuring fair winner selection!"
        },
        {
            question: "Is the lucky draw wheel free to use?",
            answer: "Yes! Our lucky draw wheel is 100% free with unlimited draws and participants. No signup, no downloads - just open the page and start your lucky draw!"
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
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-yellow-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
                            <IoGiftOutline className="text-lg" />
                            <span>Free Lucky Draw Tool</span>
                        </div>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Lucky Draw Wheel – Free Online Winner Picker
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Create exciting lucky draws for your events, promotions, or parties. Our lucky draw wheel ensures fair, transparent winner selection every time.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={LUCKY_DRAW_ENTRIES} storageKey="luckyDrawWheelState" />
                </div>
            </section>

            {/* Why Use Lucky Draw Wheel */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use Our Lucky Draw Wheel?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The perfect tool for hosting fair and exciting lucky draws at any event
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-yellow-200 hover:shadow-lg transition-shadow">
                            <div className="bg-yellow-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoTrophyOutline className="text-xl text-yellow-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Instant Winners</h3>
                            <p className="md:text-base text-sm text-gray-600">Select winners instantly with our smooth spinning animation. Build excitement at your events!</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShieldCheckmarkOutline className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">100% Fair</h3>
                            <p className="md:text-base text-sm text-gray-600">Cryptographically secure randomization ensures every participant has an equal chance.</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Fully Customizable</h3>
                            <p className="md:text-base text-sm text-gray-600">Add unlimited entries, customize colors, and make your lucky draw unique.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoGiftOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Perfect for Events</h3>
                            <p className="md:text-base text-sm text-gray-600">Ideal for corporate events, parties, trade shows, and promotional giveaways.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Use */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How to Run a Lucky Draw
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {[
                                { step: "1", title: "Add Participants", desc: "Enter all participant names or ticket numbers into the wheel" },
                                { step: "2", title: "Customize Look", desc: "Choose colors and labels to match your event theme" },
                                { step: "3", title: "Spin to Win", desc: "Click spin and let the wheel select your lucky winner!" },
                                { step: "4", title: "Announce & Repeat", desc: "Announce the winner and spin again for more prizes" },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-4 items-start bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold">
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

            {/* Popular Use Cases */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Popular Lucky Draw Uses
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Corporate Events
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Perfect for office parties, team events, and company giveaways. Make your lucky draw professional and exciting.</p>
                            <Link href="/giveaway-winner" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Learn more <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Trade Shows
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Attract visitors to your booth with exciting lucky draw prizes. Collect leads while creating engagement.</p>
                            <Link href="/prize-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Try Prize Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Social Media Giveaways
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Run transparent Instagram, YouTube, or TikTok giveaways. Show your audience the fair selection process.</p>
                            <Link href="/spin-wheel-for-giveaway" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Giveaway Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Party Games
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Add excitement to birthday parties, weddings, or celebrations with door prize drawings.</p>
                            <Link href="/raffle-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Try Raffle Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Planning Your Lucky Draw */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Planning Your Lucky Draw Event
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 md:p-6 p-4 md:rounded-xl rounded-lg border border-yellow-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">📋 Before the Event</h3>
                                <ul className="space-y-2 md:text-base text-sm text-gray-700">
                                    <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">•</span> Define clear entry rules and eligibility criteria</li>
                                    <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">•</span> Decide on prizes and announce them in advance</li>
                                    <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">•</span> Set up your lucky draw wheel with all participant names</li>
                                    <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">•</span> Test the wheel on the device you&apos;ll use at the event</li>
                                    <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">•</span> Prepare a backup plan (save the wheel link)</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-6 p-4 md:rounded-xl rounded-lg border border-green-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">🎤 During the Event</h3>
                                <ul className="space-y-2 md:text-base text-sm text-gray-700">
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span> Display the wheel on a large screen for everyone to see</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span> Build anticipation – explain the process before spinning</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span> Let someone from the audience press the spin button</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span> Remove winners between rounds if drawing multiple prizes</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span> Record the spin for social media content</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lucky Draw Ideas */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Creative Lucky Draw Ideas
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-5 gap-3">
                            {[
                                { emoji: "🎄", title: "Holiday Office Party", desc: "Add all employee names for a year-end bonus lucky draw or Secret Santa assignment" },
                                { emoji: "🎓", title: "School Fundraiser", desc: "Sell raffle tickets and use the wheel to pick winners for donated prizes at school events" },
                                { emoji: "🏪", title: "Store Grand Opening", desc: "Collect customer info and run an exciting lucky draw to drive foot traffic and buzz" },
                                { emoji: "📱", title: "App Launch Event", desc: "Reward early adopters with prizes through a live lucky draw during your launch stream" },
                                { emoji: "💒", title: "Wedding Reception", desc: "Add table numbers or guest names for fun door prizes throughout the evening" },
                                { emoji: "🏆", title: "Sports League Awards", desc: "Draw for bonus prizes after the main awards ceremony to keep everyone engaged" },
                                { emoji: "📺", title: "Live Stream Milestone", desc: "Celebrate follower milestones by spinning a lucky draw for your most engaged viewers" },
                                { emoji: "🏢", title: "Employee Appreciation", desc: "Monthly or quarterly lucky draws for gift cards, extra PTO, or other perks" },
                            ].map((idea, index) => (
                                <div key={index} className="bg-white md:p-4 p-3 md:rounded-xl rounded-lg shadow-sm border border-gray-100 flex gap-3 items-start">
                                    <span className="text-2xl flex-shrink-0">{idea.emoji}</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base">{idea.title}</h3>
                                        <p className="text-xs md:text-sm text-gray-600">{idea.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links Section */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            Explore More Wheel Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/raffle-wheel", label: "Raffle Wheel" },
                            { href: "/prize-wheel", label: "Prize Wheel" },
                            { href: "/giveaway-winner", label: "Giveaway Winner" },
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/wheel-spinner", label: "Wheel Spinner" },
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
