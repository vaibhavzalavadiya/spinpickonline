import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiInstagram, FiYoutube } from "react-icons/fi";
import { IoGiftOutline, IoShieldCheckmarkOutline, IoVideocamOutline, IoPeopleOutline } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Spin Wheel for Giveaway | Free Winner Picker | SpinPickOnline",
    description: "Free spin wheel for giveaways. Perfect for Instagram, YouTube, TikTok contests. Transparent winner selection, cryptographically fair, no signup required.",
    alternates: {
        canonical: "/spin-wheel-for-giveaway",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Spin Wheel for Giveaway | Free Winner Picker | SpinPickOnline",
        description: "Free spin wheel for social media giveaways. Transparent and fair winner selection.",
        type: "website",
        url: "https://spinpickonline.com/spin-wheel-for-giveaway",
    },
};

// Default giveaway entries (social media usernames)
const GIVEAWAY_USERNAMES = [
    { id: "1", label: "@user_one", color: "#3b82f6" },
    { id: "2", label: "@user_two", color: "#ef4444" },
    { id: "3", label: "@user_three", color: "#22c55e" },
    { id: "4", label: "@user_four", color: "#f59e0b" },
    { id: "5", label: "@user_five", color: "#8b5cf6" },
];

export default function SpinWheelGiveawayPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How do I run a fair Instagram giveaway?",
            answer: "Collect all eligible participant names from your Instagram comments or story responses. Add them to our giveaway wheel, then screen record the spin or go live to show your followers the transparent winner selection. Share the recording to prove fairness!"
        },
        {
            question: "Can I use this for YouTube subscriber giveaways?",
            answer: " Yes! Our spin wheel for giveaway is perfect for YouTube contests. Add subscriber names or comment authors, record the wheel spin, and include it in your video. It creates engaging content while ensuring transparent winner selection!"
        },
        {
            question: "Is the giveaway wheel really free?",
            answer: "Absolutely! Our giveaway winner picker is 100% free with no signup required. There are no watermarks, no entry limits, and no hidden fees. You can run unlimited giveaways at no cost!"
        },
        {
            question: "How do I prove the giveaway was fair?",
            answer: "Our cryptographic random number generator ensures true fairness. We recommend going live or screen recording your spin the wheel session. Share the video with your audience so they can see the unbiased results first-hand!"
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
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-rose-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
                            <IoGiftOutline className="text-lg" />
                            <span>Giveaway Tool</span>
                        </div>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Spin Wheel for Giveaway – Free Winner Picker
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Run fair, transparent giveaways on Instagram, YouTube, TikTok, or any platform. Our spin wheel builds trust with your audience by showing the random selection process live.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={GIVEAWAY_USERNAMES} storageKey="spinWheelGiveawayState" />
                </div>
            </section>

            {/* Social Platforms */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Perfect for Social Media Giveaways
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Build trust with your followers by showing transparent winner selection
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-pink-200 hover:shadow-lg transition-shadow">
                            <div className="bg-pink-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiInstagram className="text-xl text-pink-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Instagram</h3>
                            <p className="md:text-base text-sm text-gray-600">Perfect for IG giveaways, story contests, and follower engagement campaigns.</p>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-rose-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-red-200 hover:shadow-lg transition-shadow">
                            <div className="bg-red-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiYoutube className="text-xl text-red-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">YouTube</h3>
                            <p className="md:text-base text-sm text-gray-600">Subscriber milestones, comment giveaways, and live stream prize drawings.</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-slate-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="bg-gray-800 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FaTiktok className="text-xl text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">TikTok</h3>
                            <p className="md:text-base text-sm text-gray-600">Duet challenges, follower giveaways, and viral content rewards.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoVideocamOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Twitch</h3>
                            <p className="md:text-base text-sm text-gray-600">Subscriber rewards, bit giveaways, and stream milestone celebrations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Use This */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Content Creators Love Our Giveaway Wheel
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="text-center bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm">
                            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                                <IoShieldCheckmarkOutline className="text-2xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Build Trust</h3>
                            <p className="md:text-base text-sm text-gray-600">Your audience sees the wheel spin live. No hidden algorithms, no accusations of favoritism.</p>
                        </div>

                        <div className="text-center bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm">
                            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                                <IoPeopleOutline className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Boost Engagement</h3>
                            <p className="md:text-base text-sm text-gray-600">The spinning wheel creates excitement and increases viewer retention during live reveals.</p>
                        </div>

                        <div className="text-center bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm">
                            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                                <IoGiftOutline className="text-2xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">No Cost</h3>
                            <p className="md:text-base text-sm text-gray-600">Completely free to use. No watermarks, no signup required, unlimited giveaways.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Run Giveaway */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How to Run Your Giveaway
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {[
                                { step: "1", title: "Collect Entries", desc: "Gather usernames from comments, likes, or however you defined entry requirements" },
                                { step: "2", title: "Add to Wheel", desc: "Enter all valid participant names into the giveaway wheel" },
                                { step: "3", title: "Record or Go Live", desc: "Screen record the spin or do it live for maximum transparency" },
                                { step: "4", title: "Announce Winner", desc: "Share the spin video and tag the winner. Everyone sees it was fair!" },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-4 items-start bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold">
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

            {/* Related Pages */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            More Giveaway Tools
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Giveaway Winner Page
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Dedicated page for running transparent winner selection for any contest or promotion.</p>
                            <Link href="/giveaway-winner" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Giveaway Winner <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Lucky Draw Wheel
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">For event-style lucky draws with prizes and multiple winners.</p>
                            <Link href="/lucky-draw-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Lucky Draw <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Prize Wheel
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Create spin-to-win experiences with custom prizes for followers.</p>
                            <Link href="/prize-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Prize Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Name Picker
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Simple and fast name picker for quick winner selection.</p>
                            <Link href="/name-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Name Picker <FiArrowRight className="text-xs" />
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
                            Explore All Wheel Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/raffle-wheel", label: "Raffle Wheel" },
                            { href: "/wheel-spinner", label: "Wheel Spinner" },
                            { href: "/picker-wheel", label: "Picker Wheel" },
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/random-choice-picker", label: "Choice Picker" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
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
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Giveaway Wheel FAQ</h2>
                        <div className="space-y-4">
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">How do I run a fair Instagram giveaway?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Collect all eligible participant names from your Instagram comments or story responses. Add them to our giveaway wheel, then screen record the spin or go live to show your followers the transparent winner selection. Share the recording to prove fairness!
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Can I use this for YouTube subscriber giveaways?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Yes! Our spin wheel for giveaway is perfect for YouTube contests. Add subscriber names or comment authors, record the wheel spin, and include it in your video. It creates engaging content while ensuring transparent winner selection!
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Is the giveaway wheel really free?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Absolutely! Our giveaway winner picker is 100% free with no signup required. There are no watermarks, no entry limits, and no hidden fees. You can run unlimited giveaways at no cost!
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">How do I prove the giveaway was fair?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Our cryptographic random number generator ensures true fairness. We recommend going live or screen recording your spin the wheel session. Share the video with your audience so they can see the unbiased results first-hand!
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
