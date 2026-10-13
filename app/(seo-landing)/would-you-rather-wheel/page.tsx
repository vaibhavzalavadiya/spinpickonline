import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { IoFlashOutline, IoSparklesOutline, IoPeopleOutline, IoHappyOutline, IoDiceOutline, IoChatbubblesOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema, generateMetadata, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generateMetadata({
    title: "Would You Rather Wheel – Free Online Dilemma Game",
    description: "Spin the Would You Rather wheel for funny party dilemmas and icebreakers! 100% free online game for game nights, classrooms, and friends. Spin now!",
    canonical: "/would-you-rather-wheel",
});

const WOULD_YOU_RATHER_ENTRIES = [
    { id: "1", label: "Be Able to Fly 🦅", color: "#3b82f6" },
    { id: "2", label: "Be Invisible 👻", color: "#8b5cf6" },
    { id: "3", label: "Read Minds 🧠", color: "#ec4899" },
    { id: "4", label: "Teleport Anywhere ⚡", color: "#f59e0b" },
    { id: "5", label: "Travel to Future 🚀", color: "#10b981" },
    { id: "6", label: "Travel to Past ⏳", color: "#06b6d4" },
    { id: "7", label: "Unlimited Wealth 💰", color: "#f97316" },
    { id: "8", label: "Unlimited Free Time 🏖️", color: "#6366f1" },
];

export default function WouldYouRatherWheelPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "Would You Rather Wheel",
        url: `${SITE_CONFIG.url}/would-you-rather-wheel`,
        description: "Free online Would You Rather wheel spinner game with funny dilemmas for parties and classrooms.",
        featureList: "Would you rather spinner, Random dilemma wheel, Party game spinner, Icebreaker wheel, Custom questions",
    });

    const faqSchema = generateFAQSchema([
        {
            question: "How do you play Would You Rather with a spinner wheel?",
            answer: "Gather your group, take turns spinning the wheel, and face the dilemma it lands on! You must pick your favorite side and explain why. It sparks hilarious debates and friendly arguments.",
        },
        {
            question: "Can I enter my own Would You Rather dilemmas on the wheel?",
            answer: "Yes! You can completely customize the wheel segments. Click the entries list to type your own funny, extreme, or classroom-friendly dilemmas.",
        },
        {
            question: "Is this Would You Rather game free to play?",
            answer: "Yes, 100% free with no registration, no app downloads, and no spin limits. It runs smoothly on mobile phones, tablets, and desktop computers directly in your browser.",
        },
        {
            question: "Can I use this for classroom icebreakers or work meetings?",
            answer: "Absolutely! The Would You Rather wheel is one of the most popular team-building icebreakers. You can pre-load lighthearted work or school dilemmas to get everyone talking.",
        },
        {
            question: "Are the spin results truly random?",
            answer: "Yes. Our wheel uses the browser's Web Crypto API for cryptographically secure pseudo-random generation. Every single slice has an equal, fair chance of being selected.",
        },
    ]);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Would You Rather Wheel", item: `${SITE_CONFIG.url}/would-you-rather-wheel` },
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Play Would You Rather Wheel Game",
        description: "Step-by-step instructions to host a fun Would You Rather session using an online spinner.",
        steps: [
            { name: "Pick or Customize Dilemmas", text: "Use our pre-loaded funny dilemmas or enter your own custom questions into the entries list.", position: 1 },
            { name: "Spin the Wheel", text: "Click or tap Spin to let the physics-based wheel pick a random dilemma for the current player.", position: 2 },
            { name: "Defend Your Choice", text: "The player must choose an option and give a 30-second explanation why. Pass to the next friend!", position: 3 },
        ],
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

            {/* Hero + Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-indigo-50/60 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                            <IoSparklesOutline className="text-lg" />
                            <span>Party Game Edition · 100% Free</span>
                        </div>
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Would You Rather Wheel
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Spin the wheel for hilarious dilemmas, tough choices, and lively debates. Perfect for party game nights, road trips, and classroom icebreakers!
                        </p>
                    </div>
                    <HomeWheel defaultEntries={WOULD_YOU_RATHER_ENTRIES} storageKey="wouldYouRatherWheelState" />
                </div>
            </section>

            {/* Why Play Would You Rather */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use an Online Dilemma Spinner?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Ditch boring questionnaires and let the wheel choose the drama.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        {[
                            { icon: <IoChatbubblesOutline className="text-xl text-indigo-600" />, bg: "from-indigo-50 to-blue-50", border: "border-indigo-200", ibg: "bg-indigo-100", title: "Spark Instant Debates", desc: "No awkward silence. Every spin forces friends to choose a side and passionately defend their reasoning." },
                            { icon: <IoHappyOutline className="text-xl text-pink-600" />, bg: "from-pink-50 to-rose-50", border: "border-pink-200", ibg: "bg-pink-100", title: "Hilarious Scenarios", desc: "Mix absurd superpowers, funny real-world situations, and impossible challenges for nonstop laughs." },
                            { icon: <IoPeopleOutline className="text-xl text-emerald-600" />, bg: "from-emerald-50 to-teal-50", border: "border-emerald-200", ibg: "bg-emerald-100", title: "Great for Groups", desc: "Works whether you have 2 friends on a couch, a family dinner, or a 30-person classroom on Zoom." },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, bg: "from-amber-50 to-orange-50", border: "border-amber-200", ibg: "bg-amber-100", title: "Zero Preparation", desc: "No cards to shuffle or apps to install. Open the link on any phone or browser and start playing right away." },
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

            {/* Popular Dilemma Ideas */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                        Popular Would You Rather Dilemma Ideas
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg text-indigo-700 mb-3 flex items-center gap-2">
                                🦸 Superpowers & Abilities
                            </h3>
                            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                                <li>Fly at 50 mph OR Teleport anywhere once per day?</li>
                                <li>Be invisible in the dark OR Read minds when making eye contact?</li>
                                <li>Never have to sleep again OR Never feel physical pain?</li>
                                <li>Speak all human languages OR Talk to animals fluently?</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg text-emerald-700 mb-3 flex items-center gap-2">
                                🍕 Funny & Everyday Life
                            </h3>
                            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                                <li>Only eat sweet foods OR Only eat spicy foods forever?</li>
                                <li>Always speak in rhymes OR Always sing your thoughts out loud?</li>
                                <li>Arrive 30 minutes early OR Arrive 15 minutes late to everything?</li>
                                <li>Have free Wi-Fi everywhere OR Free unlimited coffee/boba?</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg text-purple-700 mb-3 flex items-center gap-2">
                                ⏳ Deep & Philosophical
                            </h3>
                            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                                <li>Know the exact day of your future OR Be able to rewrite the past?</li>
                                <li>Live in a world without music OR Live without movies and shows?</li>
                                <li>Have 100 average acquaintances OR Just 1 deeply loyal best friend?</li>
                                <li>Achieve global fame OR Quietly amass unlimited financial freedom?</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg text-rose-700 mb-3 flex items-center gap-2">
                                🎒 Classroom & Team Friendly
                            </h3>
                            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                                <li>Have homework on weekends OR An extra 1-hour school day?</li>
                                <li>Give a presentation in front of 500 people OR Write a 50-page paper?</li>
                                <li>Work in a quiet cabin in the woods OR In a bustling city rooftop?</li>
                                <li>Be the captain of the losing team OR Bench player on the winning team?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Article Guide */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl space-y-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
                        The Complete Guide to Hosting a Would You Rather Night
                    </h2>

                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            <strong>Would You Rather</strong> is one of the most enduring party games in the world because it requires zero equipment and naturally exposes people’s personal quirks, values, and humor. Pairing the game with a digital <strong>dilemma wheel spinner</strong> elevates the excitement because no one knows what unpredictable choice is waiting next.
                        </p>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            How to Structure Your Game for Maximum Fun
                        </h3>
                        <p>
                            To prevent the game from feeling repetitive, we recommend following these 3 simple host rules:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Set a 30-Second Timer:</strong> Do not let players overthink their choice. First instincts are almost always the funniest.</li>
                            <li><strong>Enforce the "Pick One" Rule:</strong> Players are not allowed to say "Neither" or "Both". Half the fun comes from being forced into choosing the lesser of two absurd evils.</li>
                            <li><strong>Open the Floor for Counter-Arguments:</strong> Once the player picks an option, allow other players 1 minute to argue why that choice is terrible. This produces legendary party debates!</li>
                        </ol>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            Pairing with Other Party Tools
                        </h3>
                        <p>
                            Looking to build the ultimate party game night playlist? Combine this Would You Rather Wheel with our classic{" "}
                            <Link href="/truth-or-dare-wheel" className="text-indigo-600 hover:underline font-medium">
                                Truth or Dare Wheel
                            </Link>{" "}
                            or virtual{" "}
                            <Link href="/spin-the-bottle" className="text-indigo-600 hover:underline font-medium">
                                Spin the Bottle
                            </Link>{" "}
                            to keep energy high and laughter rolling for hours.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-8 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-3">
                        {[
                            { q: "Can I save my custom Would You Rather questions?", a: "Yes! Your custom wheel slices are stored locally on your device so your questions will still be there when you revisit the page.", color: "bg-indigo-500" },
                            { q: "Is this suitable for children and family gatherings?", a: "Yes! The default questions are 100% family-friendly, and you can edit or add any questions to match your group's age group.", color: "bg-pink-500" },
                            { q: "How do I show the wheel on Zoom or Google Meet?", a: "Simply open this webpage in your browser, start your meeting, and click 'Share Screen' or 'Share Tab'. Everyone can watch the wheel spin live!", color: "bg-emerald-500" },
                            { q: "Can I spin again if we don't like a dilemma?", a: "Of course! You can spin as many times as you like. You can also use the 'Remove Winner' button to retire a dilemma once answered.", color: "bg-amber-500" },
                        ].map((item, i) => (
                            <details key={i} className="group bg-white rounded-xl p-4 md:p-5 border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className={`flex-shrink-0 w-6 h-6 rounded-full ${item.color} text-white text-xs font-bold flex items-center justify-center`}>Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">{item.q}</span>
                                </summary>
                                <p className="text-sm text-gray-600 mt-3 ml-9 leading-relaxed">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Tools */}
            <section className="py-10 lg:py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            Explore More Party & Game Wheels
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/truth-or-dare-wheel", label: "Truth or Dare Wheel" },
                            { href: "/spin-the-bottle", label: "Spin the Bottle" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/yes-no-wheel", label: "Yes/No Wheel" },
                            { href: "/dice-roller", label: "Dice Roller" },
                            { href: "/flip-a-coin", label: "Flip a Coin" },
                            { href: "/random-picker-wheel", label: "Random Picker Wheel" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-all"
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
