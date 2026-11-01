import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import { generateMetadata as genMeta, generateFAQSchema, generateWebApplicationSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { IoTrophyOutline, IoShieldCheckmarkOutline, IoFlashOutline, IoPeopleOutline, IoSettingsOutline, IoAmericanFootballOutline } from "react-icons/io5";

export const metadata: Metadata = genMeta({
    title: "NFL Team Wheel – Randomly Pick an NFL Team Free",
    description: "Spin the NFL team wheel and randomly pick a football team. All 32 NFL teams pre-loaded by division. Free, fair, instant. Great for fantasy drafts and prediction games.",
    canonical: "/nfl-team-wheel",
});

const DEFAULT_ENTRIES = [
    { id: "1", label: "Chiefs 🏈", color: "#e31837" },
    { id: "2", label: "49ers 🏈", color: "#aa0000" },
    { id: "3", label: "Eagles 🏈", color: "#004c54" },
    { id: "4", label: "Bills 🏈", color: "#00338d" },
    { id: "5", label: "Cowboys 🏈", color: "#003594" },
    { id: "6", label: "Ravens 🏈", color: "#241773" },
    { id: "7", label: "Lions 🏈", color: "#0076b6" },
    { id: "8", label: "Dolphins 🏈", color: "#008e97" },
    { id: "9", label: "Packers 🏈", color: "#203731" },
    { id: "10", label: "Bengals 🏈", color: "#fb4f14" },
    { id: "11", label: "Texans 🏈", color: "#03202f" },
    { id: "12", label: "Steelers 🏈", color: "#ffb612" },
];

export default function NflTeamWheelPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "NFL Team Wheel",
        url: `${SITE_CONFIG.url}/nfl-team-wheel`,
        description: "Free online NFL team wheel spinner. Pre-loaded with popular NFL teams. Spin to randomly pick a team for fantasy drafts, Madden games, and prediction contests.",
        featureList: "NFL team wheel, Random NFL team picker, Fantasy football draft wheel, NFL team randomizer, Madden team selector",
    });

    const faqSchema = generateFAQSchema([
        { question: "Which NFL teams are on the wheel?", answer: "The wheel comes pre-loaded with 12 popular NFL teams including the Chiefs, 49ers, Eagles, Bills, Cowboys, Ravens, Lions, Dolphins, Packers, Bengals, Texans, and Steelers. You can easily add all 32 teams or customize the list." },
        { question: "Can I add all 32 NFL teams?", answer: "Yes! Click 'Add Entry' to add any missing teams. You can add all 32 NFL franchises, or just the teams in your fantasy league or Madden roster." },
        { question: "Can I use this for fantasy football drafts?", answer: "Absolutely. Use the wheel to randomly assign draft order, determine team assignments, or select random teams for Madden challenges with friends." },
        { question: "Is this NFL wheel fair and random?", answer: "Yes. We use the Web Crypto API for cryptographically secure randomness. Every team on the wheel has mathematically equal odds of being selected." },
        { question: "Does this work for Madden team selection?", answer: "Yes! It's one of the most popular uses. Spin to pick random teams for Madden NFL matches with friends. No more fighting over who gets the Chiefs!" },
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Pick a Random NFL Team",
        description: "Spin the NFL team wheel to randomly pick a team in seconds.",
        steps: [
            { position: 1, name: "Check Your Teams", text: "The wheel comes pre-loaded with popular NFL teams. Add or remove teams to match your needs." },
            { position: 2, name: "Spin the Wheel", text: "Click Spin and watch the wheel randomly land on a team. Fair, unbiased, and fun." },
            { position: 3, name: "Use Your Pick", text: "Use the selected team for your fantasy draft, Madden game, prediction contest, or Super Bowl party game." },
        ],
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Random Sports Team Generator", item: `${SITE_CONFIG.url}/random-sports-team-generator` },
        { name: "NFL Team Wheel", item: `${SITE_CONFIG.url}/nfl-team-wheel` },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Hero + Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-blue-50/60 to-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            NFL Team Wheel – Spin &amp; Pick a Team
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">Spin to randomly pick an NFL team for Madden games, fantasy football drafts, or Super Bowl prediction pools. Popular AFC and NFC teams pre-loaded and ready to spin.</p>
                    </div>
                    <HomeWheel defaultEntries={DEFAULT_ENTRIES} storageKey="nflTeamWheelState" />
                </div>
            </section>

            {/* How It Works */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">How to Use the NFL Wheel</h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-xl mx-auto">Pick a random NFL team in three easy steps</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 max-w-4xl mx-auto">
                        {[
                            { num: "1", bg: "from-blue-50 to-indigo-50", border: "border-blue-200", numBg: "bg-blue-600", title: "Add NFL Teams", desc: "Use the pre-loaded popular teams or add all 32 franchises. Edit names, colors, and emojis freely." },
                            { num: "2", bg: "from-red-50 to-rose-50", border: "border-red-200", numBg: "bg-red-600", title: "Spin the Wheel", desc: "Click Spin and watch the wheel land on a random NFL team. Powered by cryptographic randomness." },
                            { num: "3", bg: "from-amber-50 to-yellow-50", border: "border-amber-200", numBg: "bg-amber-600", title: "Use Your Pick", desc: "Got your team? Use it for fantasy, Madden, predictions, or Super Bowl party games. Remove it and spin again!" },
                        ].map((step) => (
                            <div key={step.num} className={`relative bg-gradient-to-br ${step.bg} md:p-6 p-5 md:rounded-xl rounded-lg border-2 ${step.border} hover:shadow-lg transition-shadow`}>
                                <div className={`w-10 h-10 ${step.numBg} text-white rounded-full flex items-center justify-center font-bold text-lg mb-4`}>{step.num}</div>
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
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">Why Football Fans Love This Wheel</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
                        {[
                            { icon: <IoAmericanFootballOutline className="text-xl text-blue-600" />, ibg: "bg-blue-100", title: "NFL Teams Pre-Loaded", desc: "Popular NFL franchises ready to spin out of the box. Add more teams in seconds." },
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-emerald-600" />, ibg: "bg-emerald-100", title: "Truly Random", desc: "Cryptographic randomness ensures no team is favored. Fair and verifiable." },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, ibg: "bg-amber-100", title: "Free & Instant", desc: "No account, no download. Open and spin immediately on any device." },
                            { icon: <IoPeopleOutline className="text-xl text-purple-600" />, ibg: "bg-purple-100", title: "Fantasy Draft Ready", desc: "Perfect for randomly assigning teams, draft picks, or Madden rosters." },
                            { icon: <IoSettingsOutline className="text-xl text-rose-600" />, ibg: "bg-rose-100", title: "Fully Customizable", desc: "Add all 32 teams, historic teams, or just your league's teams. Change colors to match." },
                            { icon: <IoTrophyOutline className="text-xl text-cyan-600" />, ibg: "bg-cyan-100", title: "Super Bowl Games", desc: "Great for Super Bowl party games, watch-party bets, and playoff prediction contests." },
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

            {/* Use Cases */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Fun Ways to Use the NFL Wheel</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { emoji: "🎯", title: "Fantasy Football Draft", desc: "Spin to determine draft order or randomly assign teams to league members. No more snake-draft arguments!", tag: "Fantasy", tagColor: "bg-blue-50 text-blue-700" },
                            { emoji: "🎮", title: "Madden Team Selection", desc: "Playing Madden NFL with friends? Spin the wheel so nobody picks the same OP team every time.", tag: "Gaming", tagColor: "bg-red-50 text-red-700" },
                            { emoji: "🏟️", title: "Super Bowl Party Games", desc: "Assign random teams to guests at your Super Bowl party. The person whose team scores first wins a prize!", tag: "Parties", tagColor: "bg-amber-50 text-amber-700" },
                            { emoji: "📊", title: "Season Prediction Contest", desc: "Each participant spins for a random team. Track results throughout the NFL season. Best team record wins!", tag: "Predictions", tagColor: "bg-green-50 text-green-700" },
                        ].map((c, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">{c.emoji} {c.title}</h3>
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
                        <div className="inline-block bg-blue-100 text-blue-800 font-semibold text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                            🏈 Top NFL Queries &amp; Search Intent
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Popular Ways NFL Fans Search &amp; Use This Wheel
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            From Madden head-to-head battles to fantasy draft lotteries and Super Bowl parties — here is how football fans spin.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                query: "Madden NFL Random Team Challenge",
                                keyword: "madden random team generator picker wheel",
                                icon: "🎮",
                                tag: "Madden Gaming",
                                tagColor: "bg-red-100 text-red-700",
                                desc: "Gamers spin before online friendlies or couch matches so neither player can default to the Chiefs or 49ers. Creates fair, unpredictable gridiron matchups.",
                            },
                            {
                                query: "Fantasy Football Draft Order Lottery",
                                keyword: "fantasy football draft order randomizer",
                                icon: "📊",
                                tag: "Fantasy Football",
                                tagColor: "bg-blue-100 text-blue-700",
                                desc: "Commissioners spin the wheel live on Discord or Zoom to assign picks 1 through 12. Transparent cryptographic randomness guarantees no draft order cheating.",
                            },
                            {
                                query: "Super Bowl Party Games & Squares",
                                keyword: "super bowl party game team picker",
                                icon: "🍕",
                                tag: "Super Bowl",
                                tagColor: "bg-amber-100 text-amber-800",
                                desc: "Party hosts spin to assign AFC/NFC rooting allegiances to guests, trigger fun touchdown dares, or randomly allocate team squares on party game boards.",
                            },
                            {
                                query: "\"Which NFL Team Should I Root For?\"",
                                keyword: "which NFL team should I root for wheel",
                                icon: "❓",
                                tag: "Fan Decider",
                                tagColor: "bg-purple-100 text-purple-700",
                                desc: "International fans or neutral viewers spin across all 32 NFL franchises to find a team to support throughout the regular season and playoffs.",
                            },
                            {
                                query: "NFL Survivor Pool & Pick'em Tiebreaker",
                                keyword: "NFL survivor pool random pick decider",
                                icon: "🏆",
                                tag: "Survivor & Pools",
                                tagColor: "bg-emerald-100 text-emerald-700",
                                desc: "When two matchup picks look 50/50 on Sunday morning, survivor pool contestants let the wheel break choice paralysis with mathematically fair RNG.",
                            },
                            {
                                query: "Division Rivalry Simulation Clash",
                                keyword: "NFL division matchup wheel generator",
                                icon: "🗺️",
                                tag: "Rivalry Clashes",
                                tagColor: "bg-teal-100 text-teal-700",
                                desc: "Filter by NFC East or AFC North to randomly generate intense rivalry games for weekend simulation tournaments and football watch parties.",
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
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">The NFL Fan&apos;s Guide to Random Team Selection</h2>
                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            The <strong>National Football League</strong> consists of 32 teams divided into two conferences (AFC and NFC), each with four divisions. From the perennial contenders like the Chiefs and 49ers to underdogs making playoff runs, every NFL team brings its own identity and passionate fan base.
                        </p>
                        <p>
                            An <strong>NFL team wheel</strong> introduces an element of chance that makes fantasy leagues, Madden sessions, and watch parties far more exciting. Instead of picking your favorite team every time, the wheel decides — creating memorable moments and unexpected rivalries.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">NFL Divisions at a Glance</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>AFC East:</strong> Bills, Dolphins, Patriots, Jets</li>
                            <li><strong>AFC North:</strong> Ravens, Bengals, Browns, Steelers</li>
                            <li><strong>AFC South:</strong> Texans, Colts, Jaguars, Titans</li>
                            <li><strong>AFC West:</strong> Chiefs, Broncos, Chargers, Raiders</li>
                            <li><strong>NFC East:</strong> Cowboys, Eagles, Giants, Commanders</li>
                            <li><strong>NFC North:</strong> Bears, Lions, Packers, Vikings</li>
                            <li><strong>NFC South:</strong> Falcons, Panthers, Saints, Buccaneers</li>
                            <li><strong>NFC West:</strong> 49ers, Cardinals, Rams, Seahawks</li>
                        </ul>
                        <p>
                            For other sports, check out our{" "}
                            <Link href="/nba-team-wheel" className="text-blue-600 hover:underline font-medium">NBA Team Wheel</Link>,{" "}
                            <Link href="/football-club-picker" className="text-blue-600 hover:underline font-medium">Football Club Picker</Link>, or the{" "}
                            <Link href="/random-sports-team-generator" className="text-blue-600 hover:underline font-medium">Random Sports Team Generator</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {[
                            { q: "Can I organize teams by division?", a: "Yes. Edit the entries to group teams by division — add 'AFC East' dividers or create separate wheel configurations for each division.", color: "bg-blue-500" },
                            { q: "Is this good for Madden drafts?", a: "Yes! It's one of the most popular use cases. Spin to assign random teams for Madden NFL sessions with friends.", color: "bg-red-500" },
                            { q: "Can I share my NFL wheel?", a: "Yes. Generate a shareable link and send it to your fantasy league group or gaming buddies.", color: "bg-emerald-500" },
                            { q: "Does it work on mobile?", a: "Perfectly. The spinner is fully responsive on iPhone, Android, tablets, and desktop browsers.", color: "bg-amber-500" },
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
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Explore More Sports Wheels</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/nba-team-wheel", label: "NBA Team Wheel" },
                            { href: "/football-club-picker", label: "Football Club Picker" },
                            { href: "/random-sports-team-generator", label: "Sports Team Generator" },
                            { href: "/cricket-team-picker", label: "Cricket Team Picker" },
                            { href: "/ipl-team-wheel", label: "IPL Team Wheel" },
                            { href: "/tournament-draw-generator", label: "Tournament Draws" },
                            { href: "/team-picker", label: "Team Picker" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all">
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
