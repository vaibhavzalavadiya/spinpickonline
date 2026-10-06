import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import { generateMetadata as genMeta } from "@/lib/seo";
import Link from "next/link";
import { IoSparklesOutline, IoGiftOutline, IoGameControllerOutline, IoDiceOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = genMeta({
    title: "Lucky Spin Wheel – Free Online Random Spinner Game | SpinPickOnline",
    description: "Try the free lucky spin wheel to make random choices, pick names, or play games. Add your options and spin to win. 100% fair and secure.",
    canonical: "/lucky-spin",
});

const LUCKY_SPIN_ENTRIES = [
    { id: "1", label: "Try Again", color: "#f59e0b" },
    { id: "2", label: "Jackpot! 🎰", color: "#ec4899" },
    { id: "3", label: "Bonus Spin", color: "#3b82f6" },
    { id: "4", label: "Miss a Turn", color: "#6b7280" },
    { id: "5", label: "Double Points", color: "#10b981" },
    { id: "6", label: "Mystery Box", color: "#8b5cf6" },
];

export default function LuckySpinPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "What is a lucky spin wheel?",
            answer: "A lucky spin wheel is a digital roulette that randomly selects an outcome from a list of options. It's often used for games, giveaways, and decision-making.",
        },
        {
            question: "Is this lucky spin game free?",
            answer: "Yes, our lucky spin tool is 100% free to use. You don't need to sign up, download any apps, or pay to spin.",
        },
        {
            question: "Can I customize the options on the wheel?",
            answer: "Absolutely! You can easily edit the text, add emojis, and change the colors of every slice on the lucky spin wheel.",
        },
        {
            question: "Is the spin result fair?",
            answer: "Yes, the lucky spin wheel uses a secure cryptographic algorithm to generate random numbers, ensuring that every spin is completely fair and unbiased.",
        },
        {
            question: "Can I use it on my mobile phone?",
            answer: "Yes! Our lucky spin wheel is fully responsive and works perfectly on iPhones, iPads, and Android devices straight from your browser.",
        },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero + Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-pink-50/60 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
                            <IoSparklesOutline className="text-lg" />
                            <span>100% Free · No Download</span>
                        </div>
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Lucky Spin Wheel
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Customizable and fun. Add your options, tap the <strong>lucky spin</strong>, and let fate decide your next move, prize, or winner!
                        </p>
                    </div>
                    <HomeWheel defaultEntries={LUCKY_SPIN_ENTRIES} storageKey="luckySpinState" />
                </div>
            </section>

            {/* Features */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Make Every Spin Count
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            A versatile tool for fun, games, and serious decisions.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        {[
                            { icon: <IoGameControllerOutline className="text-xl text-blue-600" />, bg: "from-blue-50 to-indigo-50", border: "border-blue-200", ibg: "bg-blue-100", title: "Fun & Games", desc: "Perfect for party games, truth or dare, or deciding the rules of your next board game session." },
                            { icon: <IoGiftOutline className="text-xl text-pink-600" />, bg: "from-pink-50 to-rose-50", border: "border-pink-200", ibg: "bg-pink-100", title: "Giveaways", desc: "Host your own lucky spin event for friends or social media followers easily." },
                            { icon: <IoDiceOutline className="text-xl text-green-600" />, bg: "from-green-50 to-emerald-50", border: "border-green-200", ibg: "bg-green-100", title: "Random Choices", desc: "Can't decide where to eat? Let the lucky spin choose your next meal!" },
                            { icon: <IoSparklesOutline className="text-xl text-amber-600" />, bg: "from-amber-50 to-yellow-50", border: "border-amber-200", ibg: "bg-amber-100", title: "Customizable", desc: "Change text, colors, and options in seconds to match any theme or idea you have." },
                        ].map((c, i) => (
                            <div key={i} className={`bg-gradient-to-br ${c.bg} md:p-5 p-4 md:rounded-xl rounded-lg border-2 ${c.border} hover:shadow-lg transition-shadow`}>
                                <div className={`${c.ibg} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>{c.icon}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Article Section */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                            How to Use a Lucky Spin Wheel
                        </h2>
                        
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 text-lg">More Than Just a Game</h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                The concept of a <strong>lucky spin</strong> goes beyond simple games. It taps into the psychology of anticipation and reward. When the wheel is spinning, the brain releases dopamine, making the experience thrilling whether you're deciding who pays for dinner, what movie to watch, or who wins a prize.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Our tool brings that casino-style excitement right to your phone or computer, without any of the risks. You create the stakes, you create the options, and the cryptographically secure random number generator ensures the outcome is 100% fair.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Lucky Spin FAQs
                        </h2>
                        <div className="space-y-3">
                            {[
                                { q: "Do I need to create an account to save my lucky spin wheel?", a: "No! Your wheel's state is automatically saved in your browser. You can close the tab and come back later, and your options will still be there.", color: "bg-pink-500" },
                                { q: "Can I use emojis on the wheel?", a: "Yes, you can use any standard emojis in the text fields. They will render perfectly on the wheel slices.", color: "bg-blue-500" },
                                { q: "How do I share my lucky spin wheel?", a: "You can click the 'Share' button to generate a unique link. Anyone who clicks the link will see your exact wheel with the options you configured.", color: "bg-green-500" },
                            ].map((item, i) => (
                                <details key={i} className="group bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-200 hover:shadow-md transition-all">
                                    <summary className="flex items-center gap-3 cursor-pointer list-none">
                                        <span className={`flex-shrink-0 w-6 h-6 rounded-full ${item.color} text-white text-xs font-bold flex items-center justify-center`}>Q</span>
                                        <span className="text-sm md:text-base font-bold text-gray-900 flex-1">{item.q}</span>
                                    </summary>
                                    <p className="text-sm text-gray-600 mt-3 ml-9 leading-relaxed">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Link Pills */}
            <section className="py-10 lg:py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            Explore More Spinner Wheels
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker Wheel" },
                            { href: "/wheel-of-names", label: "Wheel of Names" },
                            { href: "/lucky-draw-wheel", label: "Lucky Draw Wheel" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/yes-no-wheel", label: "Yes/No Wheel" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-pink-300 hover:text-pink-600 transition-all"
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
