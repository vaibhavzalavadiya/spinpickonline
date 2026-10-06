import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiUsers, FiGift, FiZap, FiShare2 } from "react-icons/fi";
import { IoPersonOutline, IoSchoolOutline, IoTrophyOutline, IoGameControllerOutline, IoShieldCheckmarkOutline, IoInfiniteOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema, generateHowToSchema, generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
    title: "Wheel of Names – Free Random Name Spinner Wheel | Pick Instantly",
    description: "Spin the wheel of names and pick a random name instantly. Free name wheel for teachers, giveaways, and team selection. No signup, unlimited names.",
    canonical: "/wheel-of-names",
});

// Default name wheel entries
const NAME_ENTRIES = [
    { id: "1", label: "Alice", color: "#6366f1" },
    { id: "2", label: "Bob", color: "#ec4899" },
    { id: "3", label: "Charlie", color: "#f59e0b" },
    { id: "4", label: "Diana", color: "#10b981" },
    { id: "5", label: "Ethan", color: "#3b82f6" },
    { id: "6", label: "Fiona", color: "#ef4444" },
];

export default function WheelOfNamesPage() {
    const webAppSchema = generateWebApplicationSchema();
    const howToSchema = generateHowToSchema({
        name: "How to Use the Wheel of Names",
        description: "Spin a free wheel of names to randomly pick a winner, student, or team member in seconds.",
        steps: [
            { position: 1, name: "Add Your Names", text: "Type or paste your list of names into the wheel. Each name gets its own colorful segment." },
            { position: 2, name: "Add as Many as You Need", text: "There is no limit. Add 2 names or 2,000. The wheel handles any size list fairly." },
            { position: 3, name: "Click Spin", text: "Press the Spin button. Watch the wheel spin and land on a randomly selected name." },
        ],
    });
    const faqSchema = generateFAQSchema([
        {
            question: "Is the wheel of names completely free?",
            answer: "Yes, completely free forever. No signup required, no limits on spins, and no limits on how many names you can add."
        },
        {
            question: "How many names can I add to the wheel?",
            answer: "Unlimited. You can add as many names as you need with no restrictions. The wheel scales to handle any list size."
        },
        {
            question: "Can I remove a name after it is picked?",
            answer: "Yes. You can set the wheel to automatically remove each picked name so no one is chosen twice in a single session."
        },
        {
            question: "Can I share my wheel of names with others?",
            answer: "Yes. Generate a shareable link and send your wheel to anyone. They can open it and spin it too — no account needed."
        },
        {
            question: "Is the name selection truly random?",
            answer: "Yes. We use cryptographic random number generation (Web Crypto API) for completely unbiased, fair results. Every name has exactly equal probability."
        },
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />

            {/* Hero Section with Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-purple-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Wheel of Names – Free Random Name Picker
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-xl mx-auto">
                            Free name wheel — spin and pick instantly. No signup, unlimited names.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={NAME_ENTRIES} storageKey="wheelOfNamesState" />
                </div>
            </section>

            {/* How to Use Section */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How to Use the Wheel of Names
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-xl mx-auto">
                            Three simple steps to pick your random name in seconds
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-br from-purple-50 to-violet-50 md:p-6 p-5 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                                1
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Type or Paste Names</h3>
                            <p className="md:text-sm text-xs text-gray-600">
                                Enter names one by one or paste an entire list at once. Each name automatically gets its own colorful segment on the wheel.
                            </p>
                        </div>

                        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 md:p-6 p-5 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                                2
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Add Unlimited Names</h3>
                            <p className="md:text-sm text-xs text-gray-600">
                                There is no name limit. Add 2 names or 2,000. The wheel automatically adjusts to fit your entire list with no restrictions.
                            </p>
                        </div>

                        <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 md:p-6 p-5 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                                3
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Click Spin & Pick a Winner</h3>
                            <p className="md:text-sm text-xs text-gray-600">
                                Press the Spin button and watch the animated wheel land on a randomly selected name. Completely fair, every spin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Our Name Wheel */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Choose Our Wheel of Names?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Built for speed, fairness, and simplicity — trusted by teachers, streamers, and event hosts
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoInfiniteOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Unlimited Names</h3>
                            <p className="md:text-base text-sm text-gray-600">No limits on how many names you add. Whether it&apos;s 5 students or 500 contest entries, the wheel handles it.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShieldCheckmarkOutline className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Cryptographically Fair</h3>
                            <p className="md:text-base text-sm text-gray-600">We use the Web Crypto API for true randomness — not basic Math.random(). Every name has an identical, unbiased chance.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiZap className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Instant & No Signup</h3>
                            <p className="md:text-base text-sm text-gray-600">Open the page and start spinning immediately. No account, no download, no email. Works in your browser on any device.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiShare2 className="text-xl text-orange-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Shareable Wheels</h3>
                            <p className="md:text-base text-sm text-gray-600">Generate a shareable link and send your name wheel to anyone. Perfect for remote teams, online classrooms, and streamed giveaways.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="bg-pink-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiUsers className="text-xl text-pink-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Remove & Re-Spin</h3>
                            <p className="md:text-base text-sm text-gray-600">Remove each selected name after picking so no one is chosen twice. Great for drawing multiple winners from a single list.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="bg-teal-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiGift className="text-xl text-teal-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Free Forever</h3>
                            <p className="md:text-base text-sm text-gray-600">No trial period, no premium tier, no hidden paywall. The full wheel of names is free forever for everyone, always.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Who Uses the Wheel of Names?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Millions of people use a name spinner wheel every day for these popular use cases
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 md:p-6 p-5 md:rounded-xl rounded-lg border-2 border-blue-200">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <IoSchoolOutline className="text-xl text-blue-600" />
                                </div>
                                <h3 className="font-bold text-gray-900">Teacher Name Picker</h3>
                            </div>
                            <p className="md:text-base text-sm text-gray-600 mb-3">
                                Teachers add their class roster and spin to randomly call on students. It&apos;s completely fair, keeps every student engaged, and removes any perception of teacher favoritism. Works for cold calling, group assignments, and picking class helpers.
                            </p>
                            <Link href="/classroom-activities" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Classroom Activities <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 md:p-6 p-5 md:rounded-xl rounded-lg border-2 border-pink-200">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-pink-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FiGift className="text-xl text-pink-600" />
                                </div>
                                <h3 className="font-bold text-gray-900">Giveaway Winner Picker</h3>
                            </div>
                            <p className="md:text-base text-sm text-gray-600 mb-3">
                                Content creators on Instagram, YouTube, and TikTok paste all their entries into the name wheel and spin live on stream. The animated spin builds excitement for viewers and proves the selection is completely transparent and fair.
                            </p>
                            <Link href="/giveaway-winner" className="text-sm font-semibold text-pink-600 hover:text-pink-700 inline-flex items-center gap-1">
                                Giveaway Winner Tool <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-6 p-5 md:rounded-xl rounded-lg border-2 border-green-200">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FiUsers className="text-xl text-green-600" />
                                </div>
                                <h3 className="font-bold text-gray-900">Team Selection</h3>
                            </div>
                            <p className="md:text-base text-sm text-gray-600 mb-3">
                                Building fair, random teams from a name list is effortless with the name wheel. Add all participants, spin to pick the first team captain, remove that name, and continue. No more awkward team captain picks — the wheel decides impartially.
                            </p>
                            <Link href="/team-picker" className="text-sm font-semibold text-green-600 hover:text-green-700 inline-flex items-center gap-1">
                                Team Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-6 p-5 md:rounded-xl rounded-lg border-2 border-purple-200">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <IoGameControllerOutline className="text-xl text-purple-600" />
                                </div>
                                <h3 className="font-bold text-gray-900">Party Games</h3>
                            </div>
                            <p className="md:text-base text-sm text-gray-600 mb-3">
                                Add everyone&apos;s name to the wheel and spin to decide who goes first in board games, charades, or party games. Spin to assign dares in truth-or-dare, or pick who presents next. Adds a fun, spontaneous energy to any group gathering.
                            </p>
                            <Link href="/random-choice-picker" className="text-sm font-semibold text-purple-600 hover:text-purple-700 inline-flex items-center gap-1">
                                Random Choice Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Content: Name Wheel for Classrooms */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Why Teachers Love the Name Wheel
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-5">
                            <div className="bg-white md:p-6 p-5 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">Eliminates Favoritism</h3>
                                <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                                    Research consistently shows that unconscious bias affects which students teachers call on most often. High-achieving students or those seated at the front tend to get more attention. A wheel of names removes this entirely — every student has an equal, fair shot at participation regardless of their seat, confidence level, or prior performance.
                                </p>
                            </div>
                            <div className="bg-white md:p-6 p-5 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">Improves Engagement</h3>
                                <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                                    When students know they might be called on at any moment, they stay more alert and prepared. Unlike predictable cold-calling patterns, the random wheel keeps the entire class engaged throughout the lesson. The animated spin also creates a brief moment of excitement that re-energizes the room.
                                </p>
                            </div>
                            <div className="bg-white md:p-6 p-5 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">Saves Preparation Time</h3>
                                <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                                    Enter your class roster once and reuse it every lesson. The wheel remembers your names so you never have to re-enter them. For recurring classes, simply open the saved wheel and start spinning. What used to require a randomizer spreadsheet or paper slips now takes seconds.
                                </p>
                            </div>
                            <div className="bg-white md:p-6 p-5 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">Transparent to Students</h3>
                                <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                                    Project the wheel on the classroom screen. Students can see the spin happening live and know the result is truly random. This transparency builds trust and eliminates any student complaints about unfair selection — they watched the wheel pick the name themselves.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips for Best Results */}
            <section className="pb-10 lg:pb-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Pro Tips for Your Name Wheel
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-5 gap-4">
                            {[
                                { emoji: "🎯", title: "Project It on Screen", tip: "Display the wheel on a projector or shared screen when running classroom activities or livestream giveaways. Full-screen mode makes it even more dramatic." },
                                { emoji: "🔀", title: "Remove Winners After Picking", tip: "Enable the \"remove winner\" option to pick multiple names without repeats. Ideal for raffles, prize draws, and assigning tasks in order." },
                                { emoji: "📋", title: "Paste a List at Once", tip: "Don't type names one by one. Copy a list from your spreadsheet, email, or document and paste it directly into the input. The wheel adds all entries instantly." },
                                { emoji: "🔗", title: "Save Your Wheel Link", tip: "Bookmark your shareable link to return to the same name wheel anytime. Share it with co-teachers, collaborators, or event co-hosts so everyone uses the same list." },
                                { emoji: "📱", title: "Use It on Mobile", tip: "The wheel of names is fully touch-optimized. You can run it from your phone during live events, class, or game nights without needing a laptop." },
                                { emoji: "🎬", title: "Screen Record for Proof", tip: "When picking giveaway winners, screen-record the spin to share as proof of fair selection on your social media post or stream replay." },
                            ].map((tip) => (
                                <div key={tip.title} className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 flex gap-4 hover:shadow-md transition-shadow">
                                    <span className="text-2xl flex-shrink-0">{tip.emoji}</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                                        <p className="md:text-sm text-xs text-gray-600">{tip.tip}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison: SpinPickOnline vs Alternatives */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Best Free Wheel of Names Alternatives Compared
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto text-center mb-8">
                            Looking for the best name spinner wheel? Here&apos;s how SpinPickOnline compares to other wheel of names tools in 2026.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-purple-50">
                                        <th className="text-left p-3 border border-gray-200 font-bold text-gray-900">Feature</th>
                                        <th className="text-center p-3 border border-gray-200 font-bold text-purple-700">SpinPickOnline</th>
                                        <th className="text-center p-3 border border-gray-200 font-bold text-gray-600">Other Wheel Tools</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { feature: "Price", us: "100% Free Forever", them: "Free with limits / Paid plans" },
                                        { feature: "Signup Required", us: "No signup needed", them: "Often requires account" },
                                        { feature: "Name Limit", us: "Unlimited names", them: "Often 50-100 max free" },
                                        { feature: "Shareable Links", us: "✅ Free sharing", them: "Premium feature" },
                                        { feature: "Crypto-Secure RNG", us: "✅ Web Crypto API", them: "Basic Math.random()" },
                                        { feature: "Mobile Optimized", us: "✅ Full touch support", them: "Varies" },
                                        { feature: "Customizable Colors", us: "✅ Per-segment colors", them: "Limited themes" },
                                        { feature: "Remove After Pick", us: "✅ Built-in", them: "Sometimes available" },
                                        { feature: "Ads", us: "Non-intrusive", them: "Heavy ads / Paywall" },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                            <td className="p-3 border border-gray-200 font-medium text-gray-900">{row.feature}</td>
                                            <td className="p-3 border border-gray-200 text-center text-green-700 font-medium">{row.us}</td>
                                            <td className="p-3 border border-gray-200 text-center text-gray-500">{row.them}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Article: The Complete Guide to Name Wheels */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                            The Complete Guide to Using a Wheel of Names
                        </h2>
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 text-lg">What Is a Wheel of Names?</h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                A <strong>wheel of names</strong> is a digital random selection tool that displays names on a spinning wheel and picks one at random when you press Spin. Unlike drawing names from a hat or using a basic random number generator, a name wheel provides a visual, transparent, and engaging way to select from a list of people. The spinning animation creates anticipation and excitement — and because everyone can see the wheel spin and land, there&apos;s zero doubt about whether the selection was fair.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Our <strong>wheel of names</strong> uses the Web Crypto API — the same cryptographic standard that protects online banking transactions — to generate truly random results. This means the outcome of every spin is statistically impossible to predict or manipulate. Every name on the wheel has an exactly equal chance of being selected, regardless of position, color, or order.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">Name Wheels for Remote Teams</h3>
                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                    In the era of remote work, team meetings on Zoom, Teams, and Google Meet are the norm. Deciding who speaks first, who leads the standup, or who takes notes often becomes awkward or biased. A <strong>name spinner wheel</strong> eliminates this friction entirely. Simply paste your team roster, share your screen, and spin — the wheel picks randomly while everyone watches.
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Many managers use our shareable wheel links to create a &quot;team wheel&quot; that the whole team can access. Bookmark it once and use it every meeting. The randomness keeps meetings fresh, ensures everyone participates equally, and removes the awkward &quot;any volunteers?&quot; silence.
                                </p>
                            </div>
                            <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">Name Wheels for Content Creators</h3>
                                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                    YouTubers, Twitch streamers, and Instagram influencers use name wheels daily for live giveaways. The visual spin creates exciting content that viewers love watching — the suspense of the slowing wheel, the moment it lands on a name, the winner&apos;s reaction. It&apos;s far more engaging than simply announcing &quot;the random winner is...&quot;
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Our <Link href="/shareable-wheels" className="text-blue-600 hover:underline">shareable wheel feature</Link> lets creators save their giveaway wheel and share a permanent link in the video description as proof of fair selection. Followers can click the link and see the exact wheel that was used, building trust and encouraging more entries in future giveaways.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Link Pills */}
            <section className="py-10 lg:py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            Explore More Spinner Wheels
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker Wheel" },
                            { href: "/wheel-spinner", label: "Wheel Spinner" },
                            { href: "/picker-wheel", label: "Picker Wheel" },
                            { href: "/raffle-wheel", label: "Raffle Wheel" },
                            { href: "/lucky-draw-wheel", label: "Lucky Draw Wheel" },
                            { href: "/prize-wheel", label: "Prize Wheel" },
                            { href: "/random-choice-picker", label: "Random Choice Picker" },
                            { href: "/spin-wheel-for-giveaway", label: "Giveaway Wheel" },
                            { href: "/shareable-wheels", label: "Shareable Wheels" },
                            { href: "/flip-a-coin", label: "Flip a Coin" },
                            { href: "/truth-or-dare-wheel", label: "Truth or Dare" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-purple-300 hover:text-purple-600 transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Wheel of Names – Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    color: "bg-purple-500",
                                    q: "Is the wheel of names completely free?",
                                    a: "Yes, free forever. No signup required, no limits on spins, and no limits on how many names you can add. It will always be free."
                                },
                                {
                                    color: "bg-blue-500",
                                    q: "How many names can I add to the wheel?",
                                    a: "Unlimited. Add as many names as you need with no restrictions. The wheel automatically adjusts to fit your entire list, whether it's 5 names or 500."
                                },
                                {
                                    color: "bg-green-500",
                                    q: "Can I remove a name after it is picked?",
                                    a: "Yes. You can set the wheel to automatically remove each picked name so no one is chosen twice in a single session. Perfect for raffles with multiple prizes."
                                },
                                {
                                    color: "bg-orange-500",
                                    q: "Can I share my wheel of names with others?",
                                    a: "Yes. Generate a shareable link and send your wheel to anyone. They can open it and spin it too — no account needed on their end either."
                                },
                                {
                                    color: "bg-pink-500",
                                    q: "Is the name selection truly random?",
                                    a: "Yes. We use cryptographic random number generation (Web Crypto API) for completely unbiased, fair results. Every name has exactly equal probability of being selected on every spin."
                                },
                            ].map((item, i) => (
                                <details key={i} className="group bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-200 hover:shadow-md transition-all">
                                    <summary className="flex items-center gap-3 cursor-pointer list-none">
                                        <span className={`flex-shrink-0 w-6 h-6 rounded-full ${item.color} text-white text-xs font-bold flex items-center justify-center`}>Q</span>
                                        <span className="text-sm md:text-base font-bold text-gray-900 flex-1">{item.q}</span>
                                    </summary>
                                    <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-10 lg:py-16 bg-gradient-to-br from-purple-600 to-indigo-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                        Spin Your Wheel of Names Now
                    </h2>
                    <p className="text-purple-100 md:text-lg text-base mb-8 max-w-xl mx-auto">
                        Free, instant, and completely fair. No signup.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/wheel"
                            className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-8 py-4 rounded-full hover:bg-purple-50 transition-colors shadow-lg text-lg"
                        >
                            Create Your Name Wheel Free <FiArrowRight />
                        </Link>
                        <Link
                            href="/name-picker"
                            className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-lg"
                        >
                            Try Name Picker <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
}
