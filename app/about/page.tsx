import { Metadata } from "next";
import Link from "next/link";
import { FiTarget, FiShield, FiHeart, FiUsers, FiZap, FiGlobe, FiArrowRight, FiInfo } from "react-icons/fi";
import { IoSchoolOutline, IoGiftOutline, IoGameControllerOutline } from "react-icons/io5";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
    title: "About Us | SpinPickOnline - Free Random Picker Wheel",
    description: "Learn about SpinPickOnline - the free, fair, and fun random picker wheel tool. Our mission is to make random selection easy for teachers, content creators, and everyone.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About SpinPickOnline | Free Random Picker Wheel",
        description: "Learn about SpinPickOnline - the free, fair, and fun random picker wheel tool.",
        type: "website",
        url: "https://spinpickonline.com/about",
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-gray-50">
            {/* Header Section with subtle bg */}
            <div className="bg-gradient-to-b from-blue-50 to-white py-8 sm:py-12 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                                <FiInfo className="text-2xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                            About SpinPickOnline
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
                            The free, fair, and fun random picker wheel for everyone.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">

                {/* Mission Section */}
                <section className="py-8 lg:py-16 bg-white rounded-2xl md:rounded-3xl mx-2 md:mx-4 my-6 shadow-sm border border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center md:mb-8 mb-6">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Mission</h2>
                                <p className="text-gray-600 md:text-base text-sm max-w-3xl mx-auto leading-relaxed">
                                    We built SpinPickOnline with one simple goal: <strong>to provide the best free random picker wheel on the internet</strong>. No signups, no limits, no hidden costs - just a beautiful, fair, and fun way to make random selections.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-6 gap-4">
                                <div className="text-center md:p-6 p-4 bg-blue-50/50 md:rounded-xl rounded-lg border border-blue-100">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <FiTarget className="text-lg md:text-xl text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Fair & Transparent</h3>
                                    <p className="text-sm text-gray-600">Cryptographically secure randomization ensures every spin is truly fair and unbiased.</p>
                                </div>

                                <div className="text-center md:p-6 p-4 bg-blue-50/50 md:rounded-xl rounded-lg border border-blue-100">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <FiHeart className="text-lg md:text-xl text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">100% Free Forever</h3>
                                    <p className="text-sm text-gray-600">No premium tiers, no feature limits. Full access to all features without paying a dime.</p>
                                </div>

                                <div className="text-center md:p-6 p-4 bg-blue-50/50 md:rounded-xl rounded-lg border border-blue-100">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <FiUsers className="text-lg md:text-xl text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Built for Everyone</h3>
                                    <p className="text-sm text-gray-600">Teachers, streamers, event organizers, or anyone who needs fair random selection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Offer */}
                <section className="py-10 lg:py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center md:mb-8 mb-6">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">What We Offer</h2>
                                <p className="text-gray-600 md:text-base text-sm max-w-2xl mx-auto">
                                    SpinPickOnline provides a suite of free random selection tools designed for various use cases
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                                <Link href="/random-picker-wheel" className="group bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                                        <FiZap className="text-lg text-gray-600 group-hover:text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">Random Picker Wheel</h3>
                                    <p className="text-sm text-gray-600">The core tool for random selection from any list of options.</p>
                                </Link>

                                <Link href="/name-picker" className="group bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                                        <FiUsers className="text-lg text-gray-600 group-hover:text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">Name Picker</h3>
                                    <p className="text-sm text-gray-600">Perfect for teachers, raffles, and fair name selection.</p>
                                </Link>

                                <Link href="/spin-wheel-for-giveaway" className="group bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                                        <IoGiftOutline className="text-lg text-gray-600 group-hover:text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">Giveaway Wheel</h3>
                                    <p className="text-sm text-gray-600">Transparent winner selection for Instagram, YouTube & more.</p>
                                </Link>

                                <Link href="/yes-no-wheel" className="group bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                                        <FiTarget className="text-lg text-gray-600 group-hover:text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">Yes/No Wheel</h3>
                                    <p className="text-sm text-gray-600">Quick decision maker with fair 50/50 probability.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Uses SpinPickOnline */}
                <section className="py-10 lg:py-16 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 rounded-2xl md:rounded-3xl mx-2 md:mx-4 my-6">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center md:mb-8 mb-6">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">Who Uses SpinPickOnline?</h2>
                                <p className="text-gray-600 md:text-base text-sm max-w-2xl mx-auto">
                                    Thousands of people use our tools every day for fair random selection
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                                <div className="flex gap-3 md:gap-4 md:p-5 p-4 bg-white md:rounded-xl rounded-lg border border-gray-200">
                                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <IoSchoolOutline className="text-lg md:text-xl text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Teachers & Educators</h3>
                                        <p className="text-sm text-gray-600 mb-2">Use our name picker for fair student selection, group assignments, and classroom activities.</p>
                                        <Link href="/classroom-activities" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                            Classroom Tools <FiArrowRight className="text-xs" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex gap-3 md:gap-4 md:p-5 p-4 bg-white md:rounded-xl rounded-lg border border-gray-200">
                                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <IoGiftOutline className="text-lg md:text-xl text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Content Creators</h3>
                                        <p className="text-sm text-gray-600 mb-2">Run transparent giveaways on Instagram, YouTube, TikTok, and Twitch.</p>
                                        <Link href="/giveaway-winner" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                            Giveaway Tools <FiArrowRight className="text-xs" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex gap-3 md:gap-4 md:p-5 p-4 bg-white md:rounded-xl rounded-lg border border-gray-200">
                                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <IoGameControllerOutline className="text-lg md:text-xl text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Event Organizers</h3>
                                        <p className="text-sm text-gray-600 mb-2">Perfect for raffles, lucky draws, prize wheels, and fair winner selection.</p>
                                        <Link href="/raffle-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                            Raffle Wheel <FiArrowRight className="text-xs" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex gap-3 md:gap-4 md:p-5 p-4 bg-white md:rounded-xl rounded-lg border border-gray-200">
                                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <FiUsers className="text-lg md:text-xl text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Teams & Groups</h3>
                                        <p className="text-sm text-gray-600 mb-2">Form fair teams, assign tasks randomly, or decide who picks lunch.</p>
                                        <Link href="/team-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                            Team Picker <FiArrowRight className="text-xs" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-10 lg:py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center md:mb-8 mb-6">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Core Values</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                                <div className="bg-blue-50/50 md:p-6 p-4 md:rounded-xl rounded-lg border border-blue-100">
                                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <FiShield className="text-lg md:text-xl text-blue-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900">Privacy First</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">Your data stays on your device. We don't collect personal information or track your wheel entries.</p>
                                </div>

                                <div className="bg-purple-50/50 md:p-6 p-4 md:rounded-xl rounded-lg border border-purple-100">
                                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <FiZap className="text-lg md:text-xl text-purple-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900">Fast & Reliable</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">No downloads, no installations. Open the page and start spinning instantly on any device.</p>
                                </div>

                                <div className="bg-green-50/50 md:p-6 p-4 md:rounded-xl rounded-lg border border-green-100">
                                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <FiGlobe className="text-lg md:text-xl text-green-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900">Accessible to All</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">Designed to work everywhere - mobile, tablet, desktop. No signup required.</p>
                                </div>

                                <div className="bg-pink-50/50 md:p-6 p-4 md:rounded-xl rounded-lg border border-pink-100">
                                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                                        <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                                            <FiHeart className="text-lg md:text-xl text-pink-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900">Community Driven</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">We listen to user feedback and continuously improve. Have a suggestion? Let us know!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-10 lg:py-16 bg-blue-600 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-xl sm:text-2xl font-bold mb-3">Ready to Spin?</h2>
                            <p className="text-blue-100 mb-6 text-sm sm:text-base">
                                Try our free random picker wheel now. No signup required.
                            </p>
                            <Link
                                href="/wheel"
                                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm md:text-base"
                            >
                                Try the Wheel Now <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Contact Link */}
                <section className="py-10 lg:py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Get in Touch</h2>
                            <p className="text-gray-600 mb-5 md:text-base text-sm">
                                Have questions, suggestions, or feedback? We'd love to hear from you!
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gray-900 text-white font-semibold md:rounded-lg rounded-lg hover:bg-gray-800 transition-colors text-sm md:text-base"
                            >
                                Contact Us <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </section>

                <CallToAction />
            </div>
        </div>
    );
}

