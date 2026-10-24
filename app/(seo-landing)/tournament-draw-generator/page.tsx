import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import { generateMetadata as genMeta, generateFAQSchema, generateWebApplicationSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { IoTrophyOutline, IoShieldCheckmarkOutline, IoFlashOutline, IoGitBranchOutline, IoSettingsOutline, IoLayersOutline } from "react-icons/io5";

export const metadata: Metadata = genMeta({
    title: "Tournament Draw Generator – Random Brackets & Matchups Free",
    description: "Generate random tournament draws, brackets, and matchups with our free spinner wheel. Perfect for sports leagues, e-sports, and office tournaments. Fair & instant.",
    canonical: "/tournament-draw-generator",
});

const DEFAULT_ENTRIES = [
    { id: "1", label: "Team 1", color: "#ef4444" },
    { id: "2", label: "Team 2", color: "#3b82f6" },
    { id: "3", label: "Team 3", color: "#10b981" },
    { id: "4", label: "Team 4", color: "#f59e0b" },
    { id: "5", label: "Team 5", color: "#8b5cf6" },
    { id: "6", label: "Team 6", color: "#ec4899" },
    { id: "7", label: "Team 7", color: "#06b6d4" },
    { id: "8", label: "Team 8", color: "#f97316" },
];

export default function TournamentDrawGeneratorPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "Tournament Draw Generator",
        url: `${SITE_CONFIG.url}/tournament-draw-generator`,
        description: "Free online tournament draw generator. Randomly create brackets, matchups, group-stage pools, and seedings for any sport or competition.",
        featureList: "Tournament draw generator, Random bracket maker, Matchup generator, Pool allocation wheel, Seeding randomizer, Fixture generator",
    });

    const faqSchema = generateFAQSchema([
        { question: "How do I generate a random tournament draw?", answer: "Add all participating teams or players to the wheel, then spin to determine the draw order. The first team picked goes into Slot 1, the second into Slot 2, and so on. This creates a fully random bracket." },
        { question: "Can I use this for knockout tournament brackets?", answer: "Yes. Add all teams, spin to pick the first team, then spin again for their opponent. Continue until all bracket slots are filled. Each spin removes the picked team to avoid duplicates." },
        { question: "Is this suitable for official league draws?", answer: "Yes. Our spinner uses the Web Crypto API for cryptographically secure randomness, providing verifiable fairness. Many amateur leagues and office tournament organizers use our tool for official draws." },
        { question: "Can I generate group-stage pools?", answer: "Yes. To create groups, spin the wheel for Group A's first team, then Group B, then Group C, and repeat. The random order ensures unbiased pool allocation." },
        { question: "How many teams can I add to the draw?", answer: "Unlimited. Whether you have 4 teams in a local tournament or 64 teams in a large bracket, the wheel handles any size." },
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Generate a Random Tournament Draw",
        description: "Use the free tournament draw wheel to create random brackets and matchups.",
        steps: [
            { position: 1, name: "Add All Teams", text: "Enter every participating team or player name into the wheel. Each gets a colorful segment." },
            { position: 2, name: "Spin for Each Slot", text: "Spin the wheel to fill each bracket slot or group. Remove picked teams after each spin to avoid duplicates." },
            { position: 3, name: "Build Your Bracket", text: "Use the draw order to fill out your tournament bracket, schedule fixtures, or allocate groups." },
        ],
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Random Sports Team Generator", item: `${SITE_CONFIG.url}/random-sports-team-generator` },
        { name: "Tournament Draw Generator", item: `${SITE_CONFIG.url}/tournament-draw-generator` },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Hero + Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-amber-50/60 to-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tournament Draw Generator
                        </h1>
                    </div>
                    <HomeWheel defaultEntries={DEFAULT_ENTRIES} storageKey="tournamentDrawState" />
                </div>
            </section>

            {/* How It Works */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How to Generate a Tournament Draw
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-xl mx-auto">
                            Create unbiased brackets in three easy steps
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 max-w-4xl mx-auto">
                        {[
                            { num: "1", bg: "from-amber-50 to-yellow-50", border: "border-amber-200", numBg: "bg-amber-600", title: "Enter All Teams", desc: "Type or paste every team name. Works for 4-team local tournaments or 64-team large brackets." },
                            { num: "2", bg: "from-blue-50 to-indigo-50", border: "border-blue-200", numBg: "bg-blue-600", title: "Spin for Each Slot", desc: "Spin the wheel to pick the first team for Slot 1. Remove it, spin again for Slot 2. Repeat for the full bracket." },
                            { num: "3", bg: "from-emerald-50 to-green-50", border: "border-emerald-200", numBg: "bg-emerald-600", title: "Build the Bracket", desc: "Use the draw order to fill your bracket. Teams picked in consecutive pairs become first-round opponents." },
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
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Organizers Trust Our Draw Generator
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
                        {[
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-emerald-600" />, ibg: "bg-emerald-100", title: "Verifiable Fairness", desc: "Web Crypto API randomness — not Math.random(). Every team has provably equal odds of landing in any bracket position." },
                            { icon: <IoGitBranchOutline className="text-xl text-blue-600" />, ibg: "bg-blue-100", title: "Any Bracket Format", desc: "Works for single-elimination, double-elimination, round-robin, group stages, Swiss system, and custom formats." },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, ibg: "bg-amber-100", title: "Instant & Free", desc: "No signup, no downloads. Open the page, add teams, and start drawing. Results in seconds." },
                            { icon: <IoLayersOutline className="text-xl text-purple-600" />, ibg: "bg-purple-100", title: "Group Stage Pools", desc: "Spin to assign teams to pools/groups. Alternate between groups for each spin to create balanced pools." },
                            { icon: <IoSettingsOutline className="text-xl text-rose-600" />, ibg: "bg-rose-100", title: "Remove After Pick", desc: "Remove each picked team so no team appears twice. Perfect for filling a bracket slot by slot." },
                            { icon: <IoTrophyOutline className="text-xl text-cyan-600" />, ibg: "bg-cyan-100", title: "Live Draw Events", desc: "Share your screen during a video call or project it at an event. Maximum transparency and excitement." },
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

            {/* Tournament Formats */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                        Tournament Formats You Can Draw
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { emoji: "🏆", title: "Single Elimination", desc: "Draw teams in pairs. Each pair becomes a first-round matchup. Losers are eliminated. Classic knockout format for any sport.", tag: "Knockout", tagColor: "bg-red-50 text-red-700" },
                            { emoji: "🔄", title: "Group Stage + Knockout", desc: "First, spin to allocate teams into groups. Then run round-robin within groups. Top teams advance to a knockout bracket.", tag: "World Cup Style", tagColor: "bg-blue-50 text-blue-700" },
                            { emoji: "📊", title: "Round Robin", desc: "Use the wheel to randomize the order of fixtures. Every team plays every other team once. Great for league formats.", tag: "League", tagColor: "bg-green-50 text-green-700" },
                            { emoji: "🎮", title: "E-Sports Brackets", desc: "Generate random seedings, map orders, or team assignments for competitive gaming tournaments and scrimmages.", tag: "E-Sports", tagColor: "bg-purple-50 text-purple-700" },
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
                        <div className="inline-block bg-rose-100 text-rose-800 font-semibold text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                            🏆 Top Tournament Queries &amp; Search Intent
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Popular Ways Tournament Organizers Search &amp; Use This Wheel
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            From single-elimination brackets to esports lobbies and party games — how commissioners generate tournament matchups.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                query: "Single & Double Elimination Bracket Draws",
                                keyword: "single elimination bracket generator draw",
                                icon: "🥊",
                                tag: "Knockout Brackets",
                                tagColor: "bg-red-100 text-red-700",
                                desc: "Commissioners spin teams sequentially into bracket slots (Seed 1 to 16). Creating a live, dramatic draw ceremony without seeded favoritism or backroom bias.",
                            },
                            {
                                query: "Round Robin Group Stage Pool Allocator",
                                keyword: "group stage draw generator round robin",
                                icon: "🌐",
                                tag: "Group Stages",
                                tagColor: "bg-blue-100 text-blue-700",
                                desc: "Divide 16, 24, or 32 teams into Group A, B, C, and D by spinning teams sequentially into each pot. Ensures balanced pools for football and cricket leagues.",
                            },
                            {
                                query: "Esports & LAN Party Matchup Generator",
                                keyword: "esports tournament draw Valorant CS2",
                                icon: "🕹️",
                                tag: "Esports & Gaming",
                                tagColor: "bg-purple-100 text-purple-700",
                                desc: "Tournament admins in gaming servers spin registered squads into opening round fixtures for Valorant, Rocket League, CS2, and FIFA tournaments.",
                            },
                            {
                                query: "Beer Pong, Cornhole & Backyard Sports",
                                keyword: "beer pong bracket draw cornhole tournament",
                                icon: "🍺",
                                tag: "Party Games",
                                tagColor: "bg-amber-100 text-amber-800",
                                desc: "Party hosts enter team pairs and spin to generate instant knockout brackets for backyard sports, cornhole, ping pong, darts, and pool table games.",
                            },
                            {
                                query: "Office Ping Pong & Pool Tournaments",
                                keyword: "office tournament draw maker table tennis",
                                icon: "🏢",
                                tag: "Corporate Contests",
                                tagColor: "bg-emerald-100 text-emerald-700",
                                desc: "Companies running workplace table tennis, chess, or foosball leagues project the wheel on an office monitor to fairly pair up coworkers for round one.",
                            },
                            {
                                query: "Wildcard & Lucky Loser Lottery Picker",
                                keyword: "wildcard tournament draw lucky loser picker",
                                icon: "🎲",
                                tag: "Wildcard Draws",
                                tagColor: "bg-teal-100 text-teal-700",
                                desc: "When one bracket spot remains open or an alternate team needs to be chosen, the wheel acts as a transparent lottery for the wildcard bye spot.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-lg transition-all flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${item.tagColor}`}>{item.tag}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1 text-base">{item.query}</h3>
                                    <p className="text-xs text-rose-600 font-mono mb-2.5">{item.keyword}</p>
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
                        The Complete Guide to Fair Tournament Draws
                    </h2>
                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            A <strong>tournament draw</strong> is the process of randomly assigning teams or players to positions within a bracket, group, or fixture schedule. The integrity of any competition depends on the perceived fairness of its draw. Whether it&apos;s a local office table tennis tournament or a regional cricket league, a transparent, random draw builds trust and excitement.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            Why Random Draws Matter
                        </h3>
                        <p>
                            In any competition, participants need to believe the draw is unbiased. Manual draws (pulling names from a hat) are prone to suspicion. Digital random draws using cryptographic algorithms provide mathematical proof of fairness. Our wheel uses the <strong>Web Crypto API</strong>, the same standard used by security applications, ensuring no human can influence the outcome.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            Step-by-Step: Creating a Knockout Bracket
                        </h3>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Add all participating teams to the wheel.</li>
                            <li>Spin once — the selected team goes to <strong>Bracket Position 1</strong>.</li>
                            <li>Remove the selected team and spin again — this team goes to <strong>Bracket Position 2</strong>.</li>
                            <li>Teams in positions 1 and 2 play each other in Round 1. Continue for positions 3-4, 5-6, and so on.</li>
                            <li>The bracket is complete when all teams are assigned. Share the bracket with all participants.</li>
                        </ol>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            Tips for Live Draw Events
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Share your screen</strong> on Zoom, Google Meet, or project onto a big screen so everyone sees each spin live.</li>
                            <li><strong>Have a commentator</strong> narrate each pick for added excitement — &quot;And Team 5 has been drawn against the defending champions!&quot;</li>
                            <li><strong>Record the draw</strong> for transparency. Participants can review the video if they have concerns.</li>
                            <li><strong>Remove teams after each pick</strong> using the remove-winner feature so no team is drawn twice.</li>
                        </ul>
                        <p>
                            For sport-specific draws, check out our{" "}
                            <Link href="/cricket-team-picker" className="text-amber-700 hover:underline font-medium">Cricket Team Picker</Link>,{" "}
                            <Link href="/nfl-team-wheel" className="text-amber-700 hover:underline font-medium">NFL Team Wheel</Link>, or{" "}
                            <Link href="/nba-team-wheel" className="text-amber-700 hover:underline font-medium">NBA Team Wheel</Link>.
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
                            { q: "Can I use this for seeded draws?", a: "Yes. Add seeded teams first into designated slots, then spin only for the remaining unseeded positions to maintain competitive balance.", color: "bg-amber-500" },
                            { q: "How do I create a double-elimination bracket?", a: "Draw teams as you would for single elimination. After Round 1, losers go into a losers' bracket. Use the wheel again if needed to determine losers' bracket matchups.", color: "bg-blue-500" },
                            { q: "Can I save my tournament draw?", a: "You can generate a shareable link of your wheel configuration. Screenshot or record your draw sequence for reference.", color: "bg-emerald-500" },
                            { q: "Is this free for tournament organizers?", a: "Yes, 100% free. No account, no subscription, no hidden costs. Used by thousands of amateur league and office tournament organizers.", color: "bg-purple-500" },
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
                            Explore More Sports Wheels
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-sports-team-generator", label: "Sports Team Generator" },
                            { href: "/cricket-team-picker", label: "Cricket Team Picker" },
                            { href: "/ipl-team-wheel", label: "IPL Team Wheel" },
                            { href: "/nfl-team-wheel", label: "NFL Team Wheel" },
                            { href: "/nba-team-wheel", label: "NBA Team Wheel" },
                            { href: "/football-club-picker", label: "Football Club Picker" },
                            { href: "/team-picker", label: "Team Picker" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-amber-300 hover:text-amber-600 transition-all">
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
