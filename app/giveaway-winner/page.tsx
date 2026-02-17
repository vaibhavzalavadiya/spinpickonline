import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { FiUserPlus, FiSettings, FiVideo, FiShare2 } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Giveaway Winner Picker | Viral Contest Tool | SpinPickOnline",
    description: "Pick a random winner for your Instagram, TikTok, or YouTube giveaway. Visual, trustworthy, and exciting proof of fairness.",
    alternates: {
        canonical: "/giveaway-winner",
    },
};

// Default giveaway entries
const GIVEAWAY_ENTRIES = [
    { id: "1", label: "Participant 1", color: "#3b82f6" },
    { id: "2", label: "Participant 2", color: "#ef4444" },
    { id: "3", label: "Participant 3", color: "#22c55e" },
    { id: "4", label: "Participant 4", color: "#f59e0b" },
    { id: "5", label: "Participant 5", color: "#8b5cf6" },
];

export default function GiveawayWinnerPage() {
    // Generate schemas for SEO
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "Is this random picker truly fair for contest winners?",
            answer: "Yes! Our giveaway winner picker uses a cryptographically secure random number generator (RNG), ensuring every participant has an equal chance of winning. Our randomizer provides transparent, verifiable results that protect your brand reputation."
        },
        {
            question: "Can I use this wheel of names for Instagram and YouTube giveaways?",
            answer: "Absolutely! Influencers and brands love using our name spinner for social media contests. The visual spinning wheel creates engaging content for Instagram Stories, YouTube videos, TikTok reveals, and Twitch streams!"
        },
        {
            question: "How is this different from other giveaway tools?",
            answer: "Our random picker wheel offers unlimited entries, custom random color generator for branding, shareable links, screen-recording friendly interface, and super smooth animations perfect for livestreams. Our spinning wheel is specifically designed for social media reveals with engaging visuals!"
        },
        {
            question: "Can I record the wheel spin for later announcement?",
            answer: "Yes! Our picker wheel works perfectly for both live and recorded reveals. Screen record the random name generator in action for YouTube videos, Instagram Reels, or TikTok content. The spinner wheel animation creates exciting content that keeps your audience engaged throughout the selection process!"
        }
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <WheelPageTemplate
                title="Giveaway Winner Picker"
                h1="Giveaway Winner Picker"
                description="Running a contest? Don't just pick a name from a list—spin the wheel! Create excitement for your audience and show them the selection is 100% random and fair."
                ctaText="Pick a Winner"
                defaultEntries={GIVEAWAY_ENTRIES}
                storageKey="giveawayWinnerWheelState"
                benefits={[
                    "Builds Suspense",
                    "Visually Fair",
                    "Great for Livestreams",
                    "Shareable Results",
                    "Custom Branding",
                    "Exciting Animation"
                ]}
                useCases={[
                    "Instagram Giveaways",
                    "YouTube Contests",
                    "Streamer Raffles",
                    "Event Door Prizes",
                    "Customer Appreciation",
                    "Employee Rewards"
                ]}
            />

            {/* What is Section */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">What is a Giveaway Winner Picker Wheel?</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                        <p>
                            A giveaway winner picker (also called a contest randomizer, random name picker, or prize wheel) is a transparent tool that uses a random number generator (RNG) to fairly select winners for social media giveaways, raffles, and contests. Unlike simply announcing a winner or using basic Google spinner tools, our spin the wheel provides visual proof of fairness that builds trust with your audience and creates excitement during the selection process.
                        </p>
                        <p>
                            Whether you need a random picker for Instagram giveaways, a wheel of names for YouTube contests, or a randomizer for TikTok challenges, our free tool delivers. It works perfectly as a spinning wheel for livestream reveals, picker wheel for raffle drawings, and name spinner for any contest - ideal for influencers, brands, streamers, and event organizers who want transparent winner selection.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Use Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">How to Use the Contest Winner Randomizer</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-linear-to-br from-blue-50 to-blue-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-blue-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiUserPlus />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Participant Names</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Add all giveaway entries to the wheel of names. Our random name picker supports unlimited participants for large contests.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-purple-50 to-purple-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-purple-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiSettings />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Customize Your Wheel</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Use our random color generator to match your brand colors. Make your picker wheel perfect for streaming and recording.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-green-50 to-green-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-green-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiVideo />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Spin Live or Record</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Spin the wheel during your livestream or record it for later! The spinning wheel creates perfect content for social media reveals.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-pink-50 to-pink-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-pink-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiShare2 />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Announce & Share</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Share the random picker results with winners. Screenshot or record the spinning wheel for transparency proof!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-linear-to-br from-gray-50 to-blue-50 md:p-6 lg:p-10 p-4 lg:rounded-2xl rounded-xl">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Use Our Random Winner Picker?</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Build Audience Trust</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Our wheel of names provides visual proof of fairness that builds credibility and trust with your audience!</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Perfect for Livestreams</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">The spinning wheel animation creates suspense and engagement! Perfect name spinner for Twitch, YouTube Live, Instagram Live, or TikTok Live reveals.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">True Random RNG</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Our random number generator uses cryptographic algorithms for transparent and verifiable fair selection.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Free Forever</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">100% free random picker for unlimited contests and giveaways. No signup, no watermarks - better than paid alternatives!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Use Cases Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Popular Giveaway Types</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: "📷", title: "Instagram Giveaways", desc: "Use our random name picker for Instagram contest winners - builds trust with followers" },
                            { icon: "🎥", title: "YouTube Contests", desc: "Perfect spinner wheel for YouTube channel giveaways and subscriber appreciation raffles" },
                            { icon: "🎮", title: "Twitch Raffles", desc: "Streamers love our wheel of names for sub giveaways, follower raffles, and viewer rewards" },
                            { icon: "💃", title: "TikTok Challenges", desc: "Viral-ready random picker for TikTok contest reveals and challenge winner announcements" },
                            { icon: "🛍️", title: "Brand Promotions", desc: "E-commerce brands use our randomizer for customer appreciation giveaways and product launches" },
                            { icon: "🎪", title: "Event Door Prizes", desc: "Perfect decision wheel for conference raffles, trade show prizes, and live event giveaways" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white md:p-5 p-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform-Specific Tips Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Platform-Specific Giveaway Tips</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border-2 border-pink-200">
                            <div className="text-2xl mb-2">📷</div>
                            <h3 className="font-bold text-gray-900 mb-2">Instagram Giveaways</h3>
                            <p className="text-sm text-gray-600">Use our wheel of names in Instagram Stories or Reels. Screen record the spin for transparent, engaging winner reveals!</p>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border-2 border-red-200">
                            <div className="text-2xl mb-2">🎥</div>
                            <h3 className="font-bold text-gray-900 mb-2">YouTube Contests</h3>
                            <p className="text-sm text-gray-600">Include our random picker wheel spin in your video. Perfect for subscriber milestone giveaways and collab contests!</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border-2 border-purple-200">
                            <div className="text-2xl mb-2">🎵</div>
                            <h3 className="font-bold text-gray-900 mb-2">TikTok Challenges</h3>
                            <p className="text-sm text-gray-600">Our spinner wheel creates viral-ready content. The spinning animation is perfect for TikTok's fast-paced, visual format!</p>
                        </div>
                        <div className="bg-gradient-to-br from-violet-50 to-violet-100 p-4 rounded-xl border-2 border-violet-200">
                            <div className="text-2xl mb-2">🎮</div>
                            <h3 className="font-bold text-gray-900 mb-2">Twitch Raffles</h3>
                            <p className="text-sm text-gray-600">Spin live during your stream! Our name picker builds suspense and keeps viewers engaged for sub and follow giveaways.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Running Fair Giveaway Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">How to Run a Fair Giveaway</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-2">✅ Before the Spin</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Clearly announce contest rules and entry requirements</li>
                                <li>• Collect all eligible entries into your random picker wheel</li>
                                <li>• Show the full list of entries for transparency</li>
                                <li>• Consider going live for real-time winner selection</li>
                            </ul>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-2">🎯 During the Spin</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Screen record the entire spin the wheel process</li>
                                <li>• Let viewers see our cryptographic RNG in action</li>
                                <li>• Build suspense with our animated spinning wheel</li>
                                <li>• Celebrate the winner with our confetti animation!</li>
                            </ul>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-2">📣 After Selection</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Announce the winner clearly on all platforms</li>
                                <li>• Save and share the random picker wheel result</li>
                                <li>• Keep proof of fair selection for any disputes</li>
                                <li>• Thank all participants for entering</li>
                            </ul>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-2">🔒 Legal Considerations</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Follow platform-specific contest guidelines</li>
                                <li>• Include "not sponsored by platform" disclaimers</li>
                                <li>• Keep records of entries and winner selection</li>
                                <li>• Use age-appropriate prizes and requirements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Giveaway Winner Picker FAQs</h2>
                    <div className="space-y-4">
                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Is this random picker truly fair for contest winners?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Yes! Our giveaway winner picker uses a cryptographically secure random number generator (RNG), ensuring every participant has an equal chance of winning. Our randomizer provides transparent, verifiable results that protect your brand reputation.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I use this wheel of names for Instagram and YouTube giveaways?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Absolutely! Influencers and brands love using our name spinner for social media contests. The visual spinning wheel creates engaging content for Instagram Stories, YouTube videos, TikTok reveals, and Twitch streams!
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">How is this different from other giveaway tools?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Our random picker wheel offers unlimited entries, custom random color generator for branding, shareable links, screen-recording friendly interface, and super smooth animations perfect for livestreams. Our spinning wheel is specifically designed for social media reveals with engaging visuals!
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I record the wheel spin for later announcement?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Yes! Our picker wheel works perfectly for both live and recorded reveals. Screen record the random name generator in action for YouTube videos, Instagram Reels, or TikTok content. The spinner wheel animation creates exciting content that keeps your audience engaged throughout the selection process!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction />

        </>
    );
}
