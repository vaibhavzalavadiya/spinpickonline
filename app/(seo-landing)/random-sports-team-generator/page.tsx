import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import { generateMetadata as genMeta, generateFAQSchema, generateWebApplicationSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { IoFootballOutline, IoTrophyOutline, IoShieldCheckmarkOutline, IoFlashOutline, IoPeopleOutline, IoSettingsOutline } from "react-icons/io5";

export const metadata: Metadata = genMeta({
    title: "Random Sports Team Generator – Spin & Pick Teams Free",
    description: "Generate random sports teams instantly with our free spinner wheel. Pick teams for football, cricket, basketball, and more. Fair, fast, no signup needed.",
    canonical: "/random-sports-team-generator",
});

const DEFAULT_ENTRIES = [
    { id: "1", label: "Team Alpha", color: "#ef4444" },
    { id: "2", label: "Team Bravo", color: "#3b82f6" },
    { id: "3", label: "Team Charlie", color: "#10b981" },
    { id: "4", label: "Team Delta", color: "#f59e0b" },
    { id: "5", label: "Team Echo", color: "#8b5cf6" },
    { id: "6", label: "Team Foxtrot", color: "#ec4899" },
    { id: "7", label: "Team Golf", color: "#06b6d4" },
    { id: "8", label: "Team Hotel", color: "#f97316" },
];

export default function RandomSportsTeamGeneratorPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "Random Sports Team Generator",
        url: `${SITE_CONFIG.url}/random-sports-team-generator`,
        description: "Free online random sports team generator. Spin the wheel to pick teams for any sport — football, cricket, basketball, and more.",
        featureList: "Random sports team picker, Team wheel spinner, Sports team randomizer, Fair team selection, Custom team lists",
    });

    const faqSchema = generateFAQSchema([
        { question: "How does the random sports team generator work?", answer: "Simply type or paste team names into the wheel, click Spin, and the wheel randomly selects a team using cryptographically secure randomness. Every team has an exactly equal chance of being picked." },
        { question: "Can I add my own custom team names?", answer: "Yes! You can add any team name you want — real sports teams, school teams, or custom names. There is no limit to the number of teams you can add." },
        { question: "Is this random team generator truly fair?", answer: "Absolutely. We use the Web Crypto API (not basic Math.random) for cryptographically secure pseudo-random generation. Every team on the wheel has an identical, unbiased probability of being selected." },
        { question: "Can I use this for tournament draws?", answer: "Yes. Many coaches, league organizers, and tournament directors use our spinner to randomly draw matchups, assign pools, or select seedings fairly." },
        { question: "Does it work on mobile phones?", answer: "Yes. The spinner is fully responsive and works perfectly on iPhone, Android, tablets, and desktop browsers. No app download required." },
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Generate Random Sports Teams",
        description: "Use the free sports team wheel to randomly pick teams in seconds.",
        steps: [
            { position: 1, name: "Add Team Names", text: "Type or paste your list of sports team names into the wheel. Each team gets its own colorful segment." },
            { position: 2, name: "Customize If Needed", text: "Change colors, add emojis (like team flags), or remove teams as needed." },
            { position: 3, name: "Spin and Pick", text: "Press the Spin button. The wheel spins and fairly selects a random team using cryptographic randomness." },
        ],
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Random Sports Team Generator", item: `${SITE_CONFIG.url}/random-sports-team-generator` },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Hero + Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-emerald-50/60 to-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Random Sports Team Generator
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">Generate random teams across any sport — NBA, NFL, football, cricket, or IPL. Perfect for fantasy drafts, video game matchups, and prediction contests. Free, instant, and completely fair.</p>
                    </div>
                    <HomeWheel defaultEntries={DEFAULT_ENTRIES} storageKey="sportsTeamGenState" />
                </div>
            </section>

            {/* How It Works */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How It Works
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-xl mx-auto">
                            Three simple steps to randomly pick a sports team
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 max-w-4xl mx-auto">
                        {[
                            { num: "1", bg: "from-emerald-50 to-green-50", border: "border-emerald-200", numBg: "bg-emerald-600", title: "Add Teams", desc: "Type in team names from any sport, league, or custom list. Paste an entire roster at once or add one by one." },
                            { num: "2", bg: "from-blue-50 to-indigo-50", border: "border-blue-200", numBg: "bg-blue-600", title: "Customize Your Wheel", desc: "Change segment colors, add team logos as emojis, or remove teams. Tailor it to your exact needs." },
                            { num: "3", bg: "from-amber-50 to-yellow-50", border: "border-amber-200", numBg: "bg-amber-600", title: "Spin & Pick", desc: "Press Spin and watch the wheel land on a randomly selected team. Completely fair — every team has equal probability." },
                        ].map((step) => (
                            <div key={step.num} className={`relative bg-gradient-to-br ${step.bg} md:p-6 p-5 md:rounded-xl rounded-lg border-2 ${step.border} hover:shadow-lg transition-shadow`}>
                                <div className={`w-10 h-10 ${step.numBg} text-white rounded-full flex items-center justify-center font-bold text-lg mb-4`}>
                                    {step.num}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="md:text-sm text-xs text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-8 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use Our Sports Team Generator?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Built for coaches, league organizers, and sports fans who need fair, instant team selection.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
                        {[
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-emerald-600" />, ibg: "bg-emerald-100", title: "Cryptographically Fair", desc: "Uses the Web Crypto API — not basic Math.random() — so every team has an identical, verifiable chance." },
                            { icon: <IoFootballOutline className="text-xl text-blue-600" />, ibg: "bg-blue-100", title: "Works for Any Sport", desc: "Football, cricket, basketball, baseball, hockey, rugby — add any team from any sport or league." },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, ibg: "bg-amber-100", title: "Instant & No Signup", desc: "Open the page and start spinning. No account creation, no downloads, no emails — totally free." },
                            { icon: <IoPeopleOutline className="text-xl text-purple-600" />, ibg: "bg-purple-100", title: "Unlimited Teams", desc: "No cap on teams. Add 4 teams or 400. The wheel adapts to any list size automatically." },
                            { icon: <IoSettingsOutline className="text-xl text-rose-600" />, ibg: "bg-rose-100", title: "Fully Customizable", desc: "Change colors, reorder, add emojis, and remove winners after each spin to avoid duplicates." },
                            { icon: <IoTrophyOutline className="text-xl text-cyan-600" />, ibg: "bg-cyan-100", title: "Tournament Ready", desc: "Perfect for random draws, seeding assignments, pool allocation, and bracket generation." },
                        ].map((f, i) => (
                            <div key={i} className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                                <div className={`${f.ibg} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>{f.icon}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                                <p className="md:text-base text-sm text-gray-600">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Use Cases */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                        Popular Ways to Use the Sports Team Generator
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { emoji: "🏏", title: "Cricket Team Selection", desc: "Randomly pick playing XIs, assign batting orders, or select which team bats first in gully cricket matches.", tag: "Cricket", tagColor: "bg-green-50 text-green-700" },
                            { emoji: "⚽", title: "Football / Soccer Drafts", desc: "Use for FIFA game drafts, fantasy football picks, or deciding which club your friend group supports for the season.", tag: "Football", tagColor: "bg-blue-50 text-blue-700" },
                            { emoji: "🏀", title: "Basketball Pickup Games", desc: "Fairly split players into teams for pickup basketball at the park or gym. Everyone gets assigned randomly.", tag: "Basketball", tagColor: "bg-orange-50 text-orange-700" },
                            { emoji: "🏆", title: "Tournament Bracket Draws", desc: "Generate random first-round matchups, assign pool groups, and create seeding orders for any tournament format.", tag: "Tournaments", tagColor: "bg-purple-50 text-purple-700" },
                        ].map((c, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                                    {c.emoji} {c.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">{c.desc}</p>
                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.tagColor}`}>{c.tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Search Queries & User Scenarios */}
            <section className="py-10 lg:py-16 bg-gradient-to-b from-gray-50 to-white border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center md:mb-10 mb-6">
                        <div className="inline-block bg-blue-100 text-blue-700 font-semibold text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                            🔍 Top User Queries &amp; Search Intent
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Popular Ways Users Search &amp; Use This Wheel
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            From video game showdowns to fantasy drafts and gym class drills — here are the most common search scenarios our users rely on every day.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                query: "Video Game Random Team Challenge",
                                keyword: "random sports team generator for video games",
                                icon: "🎮",
                                tag: "Gaming & Esports",
                                tagColor: "bg-purple-100 text-purple-700",
                                desc: "Gamers spin before EA Sports FC, Madden, NBA 2K, or Rocket League matches so neither player can pick an overpowered 5-star team. Creates thrilling, unpredictable underdog matchups.",
                            },
                            {
                                query: "Fantasy League Draft Order Picker",
                                keyword: "fantasy sports draft pick order generator",
                                icon: "📊",
                                tag: "Fantasy Leagues",
                                tagColor: "bg-blue-100 text-blue-700",
                                desc: "Fantasy commissioners add manager names to randomize first-round pick orders. Live screen-sharing ensures 100% fair, verifiable lottery results without arguments.",
                            },
                            {
                                query: "PE Class & School Sports Divider",
                                keyword: "sports team picker for PE teachers",
                                icon: "🏃",
                                tag: "Coaching & Schools",
                                tagColor: "bg-emerald-100 text-emerald-700",
                                desc: "Coaches and physical education teachers enter student rosters to divide the class into balanced scrimmage squads, eliminating playground favoritism and hurt feelings.",
                            },
                            {
                                query: "Sports Trivia & Pub Quiz Team Picker",
                                keyword: "pub quiz team generator sports trivia",
                                icon: "🍻",
                                tag: "Trivia & Socials",
                                tagColor: "bg-amber-100 text-amber-700",
                                desc: "Event hosts randomly assign participants to rival sports squads or table groups, keeping social gatherings competitive, spontaneous, and high-energy.",
                            },
                            {
                                query: "Tournament Bracket & Pool Allocation",
                                keyword: "tournament draw generator bracket maker",
                                icon: "🏆",
                                tag: "Tournaments",
                                tagColor: "bg-rose-100 text-rose-700",
                                desc: "Organizers randomly allocate registered teams into Group A, B, C, or D, guaranteeing neutral scheduling and unbiased knockout tournament brackets.",
                            },
                            {
                                query: "\"Which Team Should I Root For?\" Wheel",
                                keyword: "random sports team to support wheel",
                                icon: "🎲",
                                tag: "Fan Decider",
                                tagColor: "bg-teal-100 text-teal-700",
                                desc: "Neutral fans or newcomers to a sport spin the wheel to adopt a team for the season, playoffs, or a world championship tournament.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-lg transition-all flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${item.tagColor}`}>{item.tag}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1 text-base">{item.query}</h3>
                                    <p className="text-xs text-blue-600 font-mono mb-2.5">{item.keyword}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Article */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl space-y-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
                        The Complete Guide to Random Sports Team Selection
                    </h2>
                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            Whether you&apos;re organizing a weekend cricket match in the park, running a fantasy football draft, or managing a corporate sports day, one of the most common challenges is <strong>fairly dividing players or choosing which team goes first</strong>. Traditionally, this meant coin tosses, drawing names from a hat, or letting a captain pick — methods that are either biased or tedious. A random sports team generator solves this instantly with transparent, verifiable fairness.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            Why Randomization Matters in Sports
                        </h3>
                        <p>
                            In competitive environments — from amateur leagues to professional tournaments — the perception of fairness is just as important as actual fairness. When teams are drawn randomly using a cryptographic algorithm (like the Web Crypto API our tool uses), every participant can verify that no human bias influenced the selection. This builds trust among players, parents, coaches, and organizers.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            Use Cases Across Sports
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Cricket:</strong> Select playing XIs from a larger squad, assign batting/bowling orders, or pick which team fields first in informal matches.</li>
                            <li><strong>Football / Soccer:</strong> Draft fantasy teams, pick clubs for FIFA game challenges, or assign players to 5-a-side teams.</li>
                            <li><strong>Basketball:</strong> Create balanced teams for pickup games at the court. Assign positions or shooting order randomly.</li>
                            <li><strong>Baseball:</strong> Generate batting lineups, pick teams for backyard wiffle ball, or run a fantasy baseball draft.</li>
                            <li><strong>E-sports:</strong> Randomly assign game rosters, draft champions, or select map order for competitive gaming sessions.</li>
                        </ul>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            Tips for Organizers
                        </h3>
                        <p>
                            When using a wheel for tournament draws, consider doing a live spin with all participants watching (share your screen on Zoom or project onto a big screen). This maximizes transparency and creates an exciting, memorable moment. You can also save and share your wheel configuration so participants can verify the setup beforehand.
                        </p>
                        <p>
                            Explore our specialized sports wheels: the{" "}
                            <Link href="/cricket-team-picker" className="text-emerald-600 hover:underline font-medium">Cricket Team Picker</Link>,{" "}
                            <Link href="/ipl-team-wheel" className="text-emerald-600 hover:underline font-medium">IPL Team Wheel</Link>,{" "}
                            <Link href="/nfl-team-wheel" className="text-emerald-600 hover:underline font-medium">NFL Team Wheel</Link>, and{" "}
                            <Link href="/nba-team-wheel" className="text-emerald-600 hover:underline font-medium">NBA Team Wheel</Link>{" "}
                            for pre-loaded team lists tailored to each league.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-3">
                        {[
                            { q: "Can I use this for fantasy sports drafts?", a: "Yes! Add all players or teams to the wheel and spin to determine draft order, pick sequence, or random team assignment.", color: "bg-emerald-500" },
                            { q: "How many teams can I add?", a: "Unlimited. Add 2 teams or 200+ — the wheel adapts to any list size.", color: "bg-blue-500" },
                            { q: "Can I remove a team after it's picked?", a: "Yes. After each spin, you can remove the selected team so it won't be picked again. Great for elimination-style draws.", color: "bg-amber-500" },
                            { q: "Does it work offline?", a: "Once the page is loaded, the spinner works without an internet connection. All randomness is generated locally in your browser.", color: "bg-purple-500" },
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
            <section className="py-10 lg:py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            Explore More Sports & Team Wheels
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/cricket-team-picker", label: "Cricket Team Picker" },
                            { href: "/ipl-team-wheel", label: "IPL Team Wheel" },
                            { href: "/tournament-draw-generator", label: "Tournament Draw Generator" },
                            { href: "/nfl-team-wheel", label: "NFL Team Wheel" },
                            { href: "/nba-team-wheel", label: "NBA Team Wheel" },
                            { href: "/football-club-picker", label: "Football Club Picker" },
                            { href: "/team-picker", label: "Team Picker" },
                            { href: "/random-picker-wheel", label: "Random Picker Wheel" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-emerald-300 hover:text-emerald-600 transition-all"
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
