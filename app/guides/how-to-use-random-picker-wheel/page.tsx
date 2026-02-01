import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiClock, FiUser } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
    title: "How to Use Random Picker Wheel | Complete Guide | SpinPickOnline",
    description: "Learn how to use a random picker wheel step by step. Complete guide with screenshots, tips for teachers, giveaways, and decision making. Free, fair, and easy!",
    alternates: {
        canonical: "/guides/how-to-use-random-picker-wheel",
    },
    openGraph: {
        title: "How to Use Random Picker Wheel | Complete Guide",
        description: "Step-by-step guide to using a random picker wheel for names, giveaways, classrooms, and decisions.",
        type: "article",
        url: "https://spinpickonline.com/guides/how-to-use-random-picker-wheel",
    },
};

export default function HowToUsePickerWheelGuide() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Article Header */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
                {/* Back Button */}
                <Link
                    href="/guides"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors mb-5 sm:mb-6"
                >
                    <FiArrowLeft className="w-4 h-4" />
                    Back to Guides
                </Link>

                {/* Article Meta */}
                <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500 mb-4">
                        <span className="inline-flex items-center gap-1">
                            <FiClock className="w-4 h-4" />
                            8 min read
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <FiUser className="w-4 h-4" />
                            SpinPickOnline Team
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                            Tutorial
                        </span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How to Use a Random Picker Wheel: Complete Step-by-Step Guide
                    </h1>
                    <p className="md:text-lg text-base text-gray-600">
                        Whether you're a teacher picking students, running a giveaway, or just can't decide where to eat,
                        this guide will show you exactly how to use our random picker wheel effectively.
                    </p>
                </div>

                {/* Table of Contents */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 mb-8">
                    <h2 className="font-bold text-gray-900 mb-3">📖 In This Guide</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#what-is" className="text-blue-600 hover:underline">What is a Random Picker Wheel?</a></li>
                        <li><a href="#step-by-step" className="text-blue-600 hover:underline">Step-by-Step: How to Use the Wheel</a></li>
                        <li><a href="#use-cases" className="text-blue-600 hover:underline">Popular Use Cases</a></li>
                        <li><a href="#tips" className="text-blue-600 hover:underline">Pro Tips for Best Results</a></li>
                        <li><a href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a></li>
                    </ul>
                </div>

                {/* What Is Section */}
                <section id="what-is" className="mb-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        What is a Random Picker Wheel?
                    </h2>
                    <p className="text-gray-700 mb-4 md:text-base text-sm leading-relaxed">
                        A random picker wheel (also called a spinner wheel, wheel of names, or decision wheel) is a digital tool
                        that randomly selects one item from a list. Unlike flipping a coin or rolling dice, a picker wheel:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-4 md:text-base text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span>Works with <strong>any number of options</strong> (not limited to 2 or 6)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span>Shows a <strong>visual spinning animation</strong> that builds excitement</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span>Provides <strong>transparent selection</strong> everyone can watch</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span>Uses <strong>cryptographically secure randomization</strong> for true fairness</span>
                        </li>
                    </ul>
                    <p className="text-gray-700 md:text-base text-sm leading-relaxed">
                        Our <Link href="/random-picker-wheel" className="text-blue-600 hover:underline font-medium">Random Picker Wheel</Link> is
                        free, works on any device, and requires no signup or download.
                    </p>
                </section>

                {/* Step by Step Section */}
                <section id="step-by-step" className="mb-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                        Step-by-Step: How to Use the Picker Wheel
                    </h2>

                    {/* Step 1 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                1
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Add Your Entries</h3>
                        </div>
                        <p className="text-gray-700 mb-4 md:text-base text-sm">
                            Start by entering the names, options, or items you want to randomly select from. You can add items one by one
                            or paste a list. Each entry gets its own colorful segment on the wheel.
                        </p>
                        <div className="bg-gray-100 rounded-lg p-4 mb-4">
                            <Image
                                src="/images/guides/wheel-add-entries.png"
                                alt="Screenshot showing how to add entries to the random picker wheel"
                                width={600}
                                height={400}
                                className="rounded-lg mx-auto"
                            />
                        </div>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                            <p className="text-sm text-gray-700">
                                <strong>💡 Tip:</strong> You can edit or remove any entry by clicking the icons next to it.
                                Use the shuffle button to randomize the order before spinning!
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                2
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Click Spin</h3>
                        </div>
                        <p className="text-gray-700 mb-4 md:text-base text-sm">
                            Once your entries are added, click the large "SPIN" button in the center of the wheel.
                            The wheel will spin with realistic physics and gradually slow down to land on a random selection.
                        </p>
                        <div className="bg-gray-100 rounded-lg p-4 mb-4">
                            <Image
                                src="/images/guides/wheel-spinning.png"
                                alt="Screenshot of the wheel spinning in motion"
                                width={600}
                                height={400}
                                className="rounded-lg mx-auto"
                            />
                        </div>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                            <p className="text-sm text-gray-700">
                                <strong>ℹ️ Note:</strong> The spinning uses cryptographically secure random number generation (RNG),
                                ensuring each entry has an exactly equal chance of being selected.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                3
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Get Your Result</h3>
                        </div>
                        <p className="text-gray-700 mb-4 md:text-base text-sm">
                            When the wheel stops, a celebration popup shows your randomly selected winner!
                            You can choose to spin again or remove the winner from the wheel for subsequent spins.
                        </p>
                        <div className="bg-gray-100 rounded-lg p-4 mb-4">
                            <Image
                                src="/images/guides/wheel-winner-result.png"
                                alt="Screenshot showing the winner result popup with confetti"
                                width={600}
                                height={400}
                                className="rounded-lg mx-auto"
                            />
                        </div>
                        <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg">
                            <p className="text-sm text-gray-700">
                                <strong>✅ Perfect for:</strong> Drawing multiple winners by removing each winner after they're selected,
                                then spinning again for the next prize!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section id="use-cases" className="mb-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                        Popular Use Cases for Picker Wheels
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-5 rounded-xl border border-blue-200">
                            <h3 className="font-bold text-gray-900 mb-2">🎓 Classroom & Teaching</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Teachers use picker wheels to fairly select students for questions, presentations, or group assignments.
                            </p>
                            <Link href="/classroom-activities" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Classroom Activities <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 sm:p-5 rounded-xl border border-pink-200">
                            <h3 className="font-bold text-gray-900 mb-2">🎁 Giveaways & Contests</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Content creators run transparent giveaways on Instagram, YouTube, and TikTok with the wheel.
                            </p>
                            <Link href="/giveaway-winner" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Giveaway Winner <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-5 rounded-xl border border-green-200">
                            <h3 className="font-bold text-gray-900 mb-2">👥 Name Picking</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Select random names for raffles, team selection, or deciding who goes first in games.
                            </p>
                            <Link href="/name-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Name Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 sm:p-5 rounded-xl border border-purple-200">
                            <h3 className="font-bold text-gray-900 mb-2">🤔 Decision Making</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Can't decide? Add your options and let the wheel break the tie for restaurants, movies, or activities.
                            </p>
                            <Link href="/decision-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Decision Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Pro Tips Section */}
                <section id="tips" className="mb-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                        Pro Tips for Best Results
                    </h2>

                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4 sm:p-6">
                        <div className="space-y-4 text-sm sm:text-base text-gray-700">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">🎯</span>
                                <div>
                                    <strong>Use Fullscreen for Presentations:</strong> Press F11 to go fullscreen when presenting
                                    the wheel on a projector or screen share. It looks more professional!
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">🔀</span>
                                <div>
                                    <strong>Shuffle Before Spinning:</strong> Use the shuffle feature to randomize the order of entries
                                    before spinning. This adds an extra layer of randomness.
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">📱</span>
                                <div>
                                    <strong>Works on Mobile:</strong> The wheel is fully touch-optimized. You can spin by tapping
                                    the center button on any phone or tablet.
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">🎬</span>
                                <div>
                                    <strong>Record Your Spins:</strong> When running giveaways, screen record the spin so you can
                                    share the video as proof of fair selection.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        <details className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                            <summary className="p-4 sm:p-5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50">
                                Is the random picker wheel really random?
                            </summary>
                            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-700 md:text-base text-sm">
                                Yes! We use cryptographically secure random number generation (CSPRNG) which provides true randomness.
                                Unlike weaker pseudo-random generators, our method is the same used by security applications.
                                Every entry has an exactly equal probability of being selected.
                            </div>
                        </details>

                        <details className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                            <summary className="p-4 sm:p-5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50">
                                How many entries can I add to the wheel?
                            </summary>
                            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-700 md:text-base text-sm">
                                There's no hard limit! You can add hundreds of entries if needed. However, for the best visual experience,
                                we recommend keeping it under 50 entries so the text remains readable on the wheel segments.
                                For larger lists, consider using our <Link href="/name-picker" className="text-blue-600 hover:underline">Name Picker</Link> which
                                is optimized for longer lists.
                            </div>
                        </details>

                        <details className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                            <summary className="p-4 sm:p-5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50">
                                Can I use this for Instagram/YouTube giveaways?
                            </summary>
                            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-700 md:text-base text-sm">
                                Absolutely! Our picker wheel is perfect for social media giveaways. We recommend screen recording
                                the spin so you can share the video with your audience. This builds trust and shows the selection was fair.
                                Check out our dedicated <Link href="/spin-wheel-for-giveaway" className="text-blue-600 hover:underline">Giveaway Wheel</Link> page
                                for more tips.
                            </div>
                        </details>

                        <details className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                            <summary className="p-4 sm:p-5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50">
                                Do I need to create an account?
                            </summary>
                            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-700 md:text-base text-sm">
                                No! Our random picker wheel is 100% free and requires no signup, login, or download.
                                Just visit the page, add your entries, and start spinning. Your data stays on your device
                                and is never sent to our servers.
                            </div>
                        </details>

                        <details className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                            <summary className="p-4 sm:p-5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50">
                                Can I remove a winner and spin again?
                            </summary>
                            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-700 md:text-base text-sm">
                                Yes! After a spin, you can click "Remove Winner" to remove the selected entry from the wheel.
                                This is perfect for selecting multiple winners one by one, like drawing 1st, 2nd, and 3rd place
                                in a raffle.
                            </div>
                        </details>

                        <details className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                            <summary className="p-4 sm:p-5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50">
                                Does it work on mobile phones?
                            </summary>
                            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-700 md:text-base text-sm">
                                Yes! The picker wheel is fully responsive and touch-optimized. It works perfectly on iPhones,
                                Android phones, iPads, and tablets. Just tap the spin button to spin the wheel.
                            </div>
                        </details>

                        <details className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                            <summary className="p-4 sm:p-5 cursor-pointer font-bold text-gray-900 hover:bg-gray-50">
                                Can I use this for my classroom?
                            </summary>
                            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-700 md:text-base text-sm">
                                Teachers love our picker wheel! It's great for selecting students for questions, forming groups,
                                assigning tasks, or making classroom activities more fun. Check out our
                                <Link href="/classroom-activities" className="text-blue-600 hover:underline ml-1">Classroom Activities</Link> page
                                for more ideas.
                            </div>
                        </details>
                    </div>
                </section>

                {/* Related Pages */}
                <section className="mb-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                        Related Tools & Guides
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker Wheel" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/wheel-spinner", label: "Wheel Spinner" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/classroom-activities", label: "Classroom Activities" },
                            { href: "/giveaway-winner", label: "Giveaway Winner" },
                            { href: "/spin-wheel-for-giveaway", label: "Giveaway Wheel" },
                            { href: "/guides", label: "All Guides" },
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
                </section>

                {/* Try It CTA */}
                <section className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-center text-white mb-10">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3">Ready to Try the Picker Wheel?</h2>
                    <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                        Start using our free random picker wheel now. No signup required – just add your entries and spin!
                    </p>
                    <Link
                        href="/wheel"
                        className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
                    >
                        Try the Wheel Now <FiArrowRight />
                    </Link>
                </section>
            </article>

            <CallToAction />
        </div>
    );
}
