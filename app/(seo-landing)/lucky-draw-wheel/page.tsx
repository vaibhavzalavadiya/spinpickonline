import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { IoGiftOutline, IoTrophyOutline, IoSparklesOutline, IoShieldCheckmarkOutline } from "react-icons/io5";

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

export default function LuckyDrawWheelPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
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
                    <HomeWheel />
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
