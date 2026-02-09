import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { FiEdit, FiRotateCw, FiShare2, FiSettings, FiArrowRight, FiCoffee } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Lunch Decisions Wheel | Random Restaurant Picker | SpinPickOnline",
    description: "End lunch arguments with our restaurant picker wheel. A fun way to choose where to eat with friends or coworkers. Randomly select your next meal instantly.",
    alternates: {
        canonical: "/lunch-decisions",
    },
};

// Force dynamic rendering to prevent Vercel SSG caching
export const dynamic = "force-dynamic";

// Default lunch entries
const LUNCH_ENTRIES = [
    { id: "1", label: "Pizza", color: "#ef4444" },
    { id: "2", label: "Sushi", color: "#3b82f6" },
    { id: "3", label: "Burgers", color: "#f59e0b" },
    { id: "4", label: "Tacos", color: "#22c55e" },
    { id: "5", label: "Salads", color: "#10b981" },
    { id: "6", label: "Chinese", color: "#8b5cf6" },
];

export default function LunchDecisionsPage() {
    // Generate schemas for SEO
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How do I pick a place to eat with coworkers?",
            answer: "Simply list everyone's favorite lunch spots on the wheel and spin it! It's an unbiased way to make a group decision and ensures that everyone's preferences have an equal chance of being picked."
        },
        {
            question: "Is this restaurant picker free?",
            answer: "Yes! Our lunch decision wheel is 100% free with no signup required. You can add as many restaurants as you like and spin as many times as needed to find the perfect meal."
        },
        {
            question: "Does it work on my phone while we're walking?",
            answer: "Absolutely. Our wheel is fully optimized for mobile devices. Just pull it up on your smartphone browser and spin it right outside the office or in the car. It's touch-responsive and fast."
        },
        {
            question: "Can I save my favorite restaurants?",
            answer: "Yes! Your entries are saved automatically in your local browser storage. You can also generate a shareable link to send the final choice (or the wheel itself) to your lunch group via Slack, WhatsApp, or iMessage."
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
                title="Lunch Decisions"
                h1="Lunch Decisions Wheel - Pick Your Next Meal"
                description="Can't decide where to eat? Stop the 'I don't know, you pick' cycle. Our restaurant picker wheel makes lunch decisions fair, fast, and fun for everyone."
                ctaText="Decide Lunch Now"
                defaultEntries={LUNCH_ENTRIES}
                benefits={[
                    "Ends Group Indecision",
                    "Fair Restaurant Selection",
                    "Discover New Spots",
                    "Mobile & On-the-Go",
                    "Save Your Favorites",
                    "Instant Decision Making"
                ]}
                useCases={[
                    "Office Lunch Groups",
                    "Dinner with Friends",
                    "Date Night Choices",
                    "Takeout Decisions",
                    "Healthy Eating Picks",
                    "Breaking Meal Ropes"
                ]}
            />

            {/* Content Section */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">The Solution to Lunchtime Indecision</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                        <p>
                            We've all been there: a group of hungry people spending 20 minutes debating where to go for lunch, only to end up at the same place as yesterday. Our lunch decision wheel is designed to break this cycle. Whether you're craving Thai, Italian, or just a quick sandwich, putting your options on the wheel builds excitement and guarantees a decision in seconds.
                        </p>
                        <p>
                            This tool isn't just for lunch! It works perfectly as a <strong>restaurant picker</strong> for dinner, a <strong>meal randomizer</strong> for weekly cooking plans, or a <strong>takeout wheel</strong> for those nights you just can't choose between pizza and sushi.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Use Section */}
            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">How to Use the Lunch Spinner</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-linear-to-br from-orange-50 to-orange-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-orange-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiEdit />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Your Options</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">List your favorite restaurants, cuisines, or meal ideas. Everyone in the group can contribute their preferences.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-red-50 to-red-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-red-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiRotateCw />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Spin to Decide</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Let the wheel make the choice! The visual spinning builds anticipation and makes the decision fun for everyone.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-green-50 to-green-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-green-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiShare2 />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Share the Result</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Send the winning restaurant to your group chat instantly. Everyone knows where to meet without endless back-and-forth.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-blue-50 to-blue-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-blue-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiSettings />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Save for Tomorrow</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Your restaurant list is saved automatically. Come back tomorrow for another quick decision without re-entering options.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why it works Section */}
            <section className="bg-white py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-linear-to-br from-gray-50 to-orange-50 md:p-6 lg:p-10 p-4 lg:rounded-2xl rounded-xl">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Groups Love the Lunch Spinner</h2>
                        <div className="grid sm:grid-cols-2 md:gap-6 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">🧠</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">No More Decision Fatigue</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Save your mental energy for the afternoon meetings. Let the wheel take over the stress of making the mid-day meal choice.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">🗣️</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Everyone's Voice Heard</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Every person gets to add their favorite spot. The wheel ensures that everyone has a fair shot at their preference being picked.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">📱</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Instant Sharing</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Once the wheel lands, share the result instantly via your favorite messaging app so the whole group knows the plan.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">🎉</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Discover New Places</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Add those restaurants you've been meaning to try. The wheel might push you to finally visit that new spot around the corner!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Perfect for Every Eating Occasion</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: "🏢", title: "Office Lunch", desc: "End the daily 'where should we eat?' debate with your coworkers in seconds." },
                            { icon: "👫", title: "Date Night", desc: "Let the wheel decide and add some spontaneity to your evening plans." },
                            { icon: "🍕", title: "Takeout Night", desc: "Can't decide between pizza and Chinese? Let the wheel pick your delivery." },
                            { icon: "👨‍👩‍👧‍👦", title: "Family Dinners", desc: "Fair way to let each family member's preference have an equal chance." },
                            { icon: "🥗", title: "Healthy Eating", desc: "Add only healthy options to ensure your random pick is also nutritious." },
                            { icon: "🍳", title: "Meal Planning", desc: "Use it to randomize your weekly cooking schedule and break routine." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white md:p-5 p-4 rounded-xl border-2 border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Tools */}
            <section className="bg-white py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Need More Decisions Made?</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link href="/decision-wheel" className="group bg-gradient-to-br from-blue-50 to-blue-100 md:p-5 p-4 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">🎯 General Decision Wheel</h3>
                            <p className="text-sm text-gray-600 mb-2">For all your life's random choices and decisions.</p>
                            <span className="text-sm font-semibold text-blue-600 inline-flex items-center gap-1">Learn more <FiArrowRight className="text-xs" /></span>
                        </Link>
                        <Link href="/random-choice-picker" className="group bg-gradient-to-br from-purple-50 to-purple-100 md:p-5 p-4 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">🎲 Choice Picker</h3>
                            <p className="text-sm text-gray-600 mb-2">When you need to pick between multiple options.</p>
                            <span className="text-sm font-semibold text-purple-600 inline-flex items-center gap-1">Learn more <FiArrowRight className="text-xs" /></span>
                        </Link>
                        <Link href="/yes-no-wheel" className="group bg-gradient-to-br from-green-50 to-green-100 md:p-5 p-4 rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">✅ Yes/No Wheel</h3>
                            <p className="text-sm text-gray-600 mb-2">Simple binary decisions made instantly.</p>
                            <span className="text-sm font-semibold text-green-600 inline-flex items-center gap-1">Learn more <FiArrowRight className="text-xs" /></span>
                        </Link>
                    </div>
                </div>
            </section>

            <CallToAction />
        </>
    );
}
