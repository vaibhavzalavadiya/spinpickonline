import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiGift } from "react-icons/fi";
import { IoRibbonOutline, IoSparklesOutline, IoStarOutline, IoTrophyOutline } from "react-icons/io5";

export const metadata: Metadata = {
    title: "Prize Wheel | Free Spin to Win Wheel | SpinPickOnline",
    description: "Free prize wheel spinner for instant rewards. Perfect for trade shows, retail promotions, and gaming. Spin to win with our customizable prize wheel.",
    alternates: {
        canonical: "/prize-wheel",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Prize Wheel | Free Spin to Win Wheel | SpinPickOnline",
        description: "Free prize wheel spinner for instant rewards. Perfect for trade shows and promotions.",
        type: "website",
        url: "https://spinpickonline.com/prize-wheel",
    },
};

export default function PrizeWheelPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            {/* Hero Section with Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-amber-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                            <IoRibbonOutline className="text-lg" />
                            <span>Spin to Win</span>
                        </div>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Prize Wheel – Free Spin to Win Spinner
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Create exciting spin-to-win experiences with our free prize wheel. Add your prizes, customize colors, and let visitors spin for rewards. Perfect for promotions, trade shows, and customer engagement.
                        </p>
                    </div>
                    <HomeWheel />
                </div>
            </section>

            {/* Why Prize Wheel */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use a Prize Wheel?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Engage customers and create memorable experiences with instant win mechanics
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-amber-200 hover:shadow-lg transition-shadow">
                            <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-amber-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Instant Engagement</h3>
                            <p className="md:text-base text-sm text-gray-600">People love spinning wheels! Create instant excitement and engagement at your booth or store.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiGift className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Custom Prizes</h3>
                            <p className="md:text-base text-sm text-gray-600">Add your own prizes: discounts, free items, upgrades, or grand prizes. Full control over rewards.</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoStarOutline className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Everyone Wins</h3>
                            <p className="md:text-base text-sm text-gray-600">Configure your wheel so everyone wins something. Boost satisfaction and brand loyalty.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoTrophyOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Memorable Experience</h3>
                            <p className="md:text-base text-sm text-gray-600">Create lasting impressions. The spinning wheel experience stays with customers long after they leave.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Set Up */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How to Create Your Prize Wheel
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {[
                                { step: "1", title: "Add Your Prizes", desc: "Enter prizes like '10% Off', 'Free Coffee', 'Grand Prize', or 'Try Again'" },
                                { step: "2", title: "Customize Colors", desc: "Match your brand colors or event theme for a professional look" },
                                { step: "3", title: "Set Up Display", desc: "Show the wheel on a tablet, laptop, or large screen at your event" },
                                { step: "4", title: "Let Visitors Spin", desc: "Invite customers to spin and claim their prizes!" },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-4 items-start bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold">
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

            {/* Prize Wheel Ideas */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Prize Wheel Use Cases
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Trade Show Booths
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Attract traffic to your booth with a spin-to-win wheel. Collect leads while giving away branded prizes.</p>
                            <Link href="/lucky-draw-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Lucky Draw Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Retail Promotions
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Boost sales with in-store prize wheels. Customers spin for discounts, free items, or bonus rewards.</p>
                            <Link href="/spin-wheel-for-giveaway" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Giveaway Spinner <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Restaurant Promos
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Happy hour wheel spins, dessert giveaways, or loyalty rewards. Make dining fun and interactive.</p>
                            <Link href="/random-choice-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Choice Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Gaming & Streaming
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Twitch streamers and YouTubers use prize wheels for viewer giveaways and challenge selection.</p>
                            <Link href="/wheel-spinner" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Wheel Spinner <FiArrowRight className="text-xs" />
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
                            Related Wheel Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/lucky-draw-wheel", label: "Lucky Draw" },
                            { href: "/raffle-wheel", label: "Raffle Wheel" },
                            { href: "/giveaway-winner", label: "Giveaway Winner" },
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/picker-wheel", label: "Picker Wheel" },
                            { href: "/wheel-spinner", label: "Wheel Spinner" },
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
