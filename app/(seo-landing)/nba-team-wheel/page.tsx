import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import { generateMetadata as genMeta, generateFAQSchema, generateWebApplicationSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { IoTrophyOutline, IoShieldCheckmarkOutline, IoFlashOutline, IoPeopleOutline, IoSettingsOutline, IoBasketballOutline } from "react-icons/io5";

export const metadata: Metadata = genMeta({
    title: "NBA Team Wheel – Randomly Pick an NBA Team Free",
    description: "Spin the NBA team wheel and randomly select a basketball team. Popular NBA teams pre-loaded. Perfect for fantasy drafts, 2K games, and prediction contests. Free!",
    canonical: "/nba-team-wheel",
});

const DEFAULT_ENTRIES = [
    { id: "1", label: "Lakers 💛", color: "#552583" },
    { id: "2", label: "Celtics ☘️", color: "#007a33" },
    { id: "3", label: "Warriors 💙", color: "#1d428a" },
    { id: "4", label: "Bulls 🐂", color: "#ce1141" },
    { id: "5", label: "Nuggets ⛏️", color: "#0e2240" },
    { id: "6", label: "Bucks 🦌", color: "#00471b" },
    { id: "7", label: "Heat 🔥", color: "#98002e" },
    { id: "8", label: "76ers 🔔", color: "#006bb6" },
    { id: "9", label: "Mavericks 🐴", color: "#00538c" },
    { id: "10", label: "Suns ☀️", color: "#e56020" },
    { id: "11", label: "Nets 🏀", color: "#000000" },
    { id: "12", label: "Knicks 🗽", color: "#f58426" },
];

export default function NbaTeamWheelPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "NBA Team Wheel",
        url: `${SITE_CONFIG.url}/nba-team-wheel`,
        description: "Free online NBA team wheel spinner. Popular NBA teams pre-loaded. Spin to randomly pick a team for fantasy drafts, NBA 2K games, and prediction contests.",
        featureList: "NBA team wheel, Random NBA team picker, Fantasy basketball draft wheel, NBA 2K team selector, NBA team randomizer",
    });

    const faqSchema = generateFAQSchema([
        { question: "Which NBA teams are on the wheel?", answer: "The wheel comes pre-loaded with 12 popular NBA teams including the Lakers, Celtics, Warriors, Bulls, Nuggets, Bucks, Heat, 76ers, Mavericks, Suns, Nets, and Knicks. You can add all 30 NBA teams easily." },
        { question: "Can I add all 30 NBA teams?", answer: "Yes! Click 'Add Entry' to add any missing teams. The wheel adapts to any number of entries — add 30 NBA teams or even include G-League and WNBA teams." },
        { question: "Can I use this for fantasy basketball drafts?", answer: "Absolutely. Use the wheel to randomly determine draft order, assign team affiliations, or pick random matchups for your fantasy basketball league." },
        { question: "Is this great for NBA 2K?", answer: "Yes! It's perfect for NBA 2K team selection. Spin the wheel so neither player gets to cherry-pick the best team. Random is fair!" },
        { question: "Is the NBA wheel truly random?", answer: "Yes. We use the Web Crypto API for cryptographically secure randomness. Every team has mathematically equal odds — no hidden bias." },
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Pick a Random NBA Team",
        description: "Spin the NBA team wheel to randomly pick a basketball team in seconds.",
        steps: [
            { position: 1, name: "Check the Teams", text: "The wheel comes with 12 popular NBA teams. Add more or customize as needed." },
            { position: 2, name: "Spin the Wheel", text: "Press Spin and watch the wheel land on a random NBA team. Every spin is fair." },
            { position: 3, name: "Play or Draft", text: "Use the picked team for your NBA 2K game, fantasy draft, or prediction contest." },
        ],
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Random Sports Team Generator", item: `${SITE_CONFIG.url}/random-sports-team-generator` },
        { name: "NBA Team Wheel", item: `${SITE_CONFIG.url}/nba-team-wheel` },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Hero + Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-orange-50/60 to-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            NBA Team Wheel – Spin &amp; Pick a Team
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">Pick a random NBA team for your fantasy basketball draft, NBA 2K matchup, or prediction contest. All 12 popular teams are pre-loaded — add any of the 30 NBA franchises in seconds.</p>
                    </div>
                    <HomeWheel defaultEntries={DEFAULT_ENTRIES} storageKey="nbaTeamWheelState" />
                </div>
            </section>

            {/* How It Works */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">How to Use the NBA Wheel</h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-xl mx-auto">Pick a random NBA team in three steps</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 max-w-4xl mx-auto">
                        {[
                            { num: "1", bg: "from-orange-50 to-amber-50", border: "border-orange-200", numBg: "bg-orange-600", title: "Add NBA Teams", desc: "Use the pre-loaded teams or add all 30 NBA franchises. Customize names, colors, and emojis." },
                            { num: "2", bg: "from-blue-50 to-indigo-50", border: "border-blue-200", numBg: "bg-blue-600", title: "Spin the Wheel", desc: "Click Spin and let cryptographic randomness pick your team. Every franchise has equal odds." },
                            { num: "3", bg: "from-green-50 to-emerald-50", border: "border-green-200", numBg: "bg-green-600", title: "Play & Compete", desc: "Use the selected team for 2K, fantasy drafts, or season prediction contests. Remove it and spin again!" },
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
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">Why Basketball Fans Love This Wheel</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
                        {[
                            { icon: <IoBasketballOutline className="text-xl text-orange-600" />, ibg: "bg-orange-100", title: "NBA Teams Ready", desc: "Popular NBA franchises pre-loaded with authentic colors. Add all 30 teams in seconds." },
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-emerald-600" />, ibg: "bg-emerald-100", title: "Cryptographically Fair", desc: "Web Crypto API randomness — every team has provably equal odds. No bias possible." },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, ibg: "bg-amber-100", title: "Instant & Free", desc: "No signup, no app download. Open and spin immediately on any device." },
                            { icon: <IoPeopleOutline className="text-xl text-purple-600" />, ibg: "bg-purple-100", title: "NBA 2K Perfect", desc: "Stop fighting over who gets the Warriors. Spin the wheel for truly random team assignment." },
                            { icon: <IoSettingsOutline className="text-xl text-rose-600" />, ibg: "bg-rose-100", title: "Fully Customizable", desc: "Add historic teams, WNBA teams, or G-League squads. Change colors to match jerseys." },
                            { icon: <IoTrophyOutline className="text-xl text-blue-600" />, ibg: "bg-blue-100", title: "Playoff Predictions", desc: "Assign random teams for bracket predictions. Track results through the NBA playoffs." },
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
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Fun Ways to Use the NBA Wheel</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { emoji: "🎮", title: "NBA 2K Team Selection", desc: "Playing NBA 2K with friends? Spin the wheel so nobody always picks the same overpowered team. Random keeps it competitive!", tag: "Gaming", tagColor: "bg-orange-50 text-orange-700" },
                            { emoji: "📋", title: "Fantasy Basketball Draft", desc: "Use the wheel to determine draft order or randomly assign NBA teams for your fantasy league. Fair and unbiased.", tag: "Fantasy", tagColor: "bg-blue-50 text-blue-700" },
                            { emoji: "🏆", title: "Playoff Bracket Challenge", desc: "Assign random teams to friends for playoff bracket predictions. Whoever's team goes furthest wins the pool!", tag: "Playoffs", tagColor: "bg-green-50 text-green-700" },
                            { emoji: "👕", title: "Jersey Day Challenge", desc: "Spin the wheel and wear that NBA team's jersey or colors for the day. Losing team buys lunch!", tag: "Fun", tagColor: "bg-purple-50 text-purple-700" },
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
                        <div className="inline-block bg-orange-100 text-orange-800 font-semibold text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                            🏀 Top NBA Queries &amp; Search Intent
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Popular Ways NBA Fans Search &amp; Use This Wheel
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            From 2K random roster showdowns to fantasy draft lotteries and pickup squads — how basketball fans spin.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                query: "NBA 2K Random Team Challenge",
                                keyword: "NBA 2K random team generator wheel",
                                icon: "🎮",
                                tag: "NBA 2K Gaming",
                                tagColor: "bg-orange-100 text-orange-800",
                                desc: "Gamers spin before Play Now Online or local 1v1 blacktop matches, stopping friends from spamming the Celtics, Lakers, or Warriors every game.",
                            },
                            {
                                query: "Fantasy Basketball Draft Pick Order",
                                keyword: "fantasy basketball draft order generator",
                                icon: "📊",
                                tag: "Fantasy Hoops",
                                tagColor: "bg-blue-100 text-blue-700",
                                desc: "Commissioners spin live during draft night to assign picks 1 through 12, deciding who earns the #1 overall selection with unhackable cryptographic RNG.",
                            },
                            {
                                query: "\"Which NBA Team Should I Support?\"",
                                keyword: "which NBA team should I support wheel",
                                icon: "🗽",
                                tag: "Fan Decider",
                                tagColor: "bg-purple-100 text-purple-700",
                                desc: "New hoops watchers or neutral observers spin to pick a team to follow throughout the 82-game regular season and playoff push.",
                            },
                            {
                                query: "Pickup Basketball Team Divider",
                                keyword: "pickup basketball team generator 5v5",
                                icon: "⛹️",
                                tag: "Pickup Courts",
                                tagColor: "bg-emerald-100 text-emerald-700",
                                desc: "At the gym or blacktop court, players enter 10 names and spin to divide into two balanced 5v5 squads without schoolyard captain picking.",
                            },
                            {
                                query: "NBA Playoff Bracket & Finals Predictions",
                                keyword: "NBA playoff bracket prediction wheel",
                                icon: "🏆",
                                tag: "Playoffs & Finals",
                                tagColor: "bg-amber-100 text-amber-800",
                                desc: "Friends gathering at sports bars spin through Western and Eastern Conference brackets to simulate underdog upsets for playoff pools.",
                            },
                            {
                                query: "All-Star Captain Draft Simulator",
                                keyword: "NBA all star draft generator team picker",
                                icon: "🌟",
                                tag: "All-Star Draft",
                                tagColor: "bg-teal-100 text-teal-700",
                                desc: "Recreate the iconic All-Star team captain draft by entering all 24 superstars and spinning to build Team East vs Team West fantasy squads.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-lg transition-all flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${item.tagColor}`}>{item.tag}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1 text-base">{item.query}</h3>
                                    <p className="text-xs text-orange-600 font-mono mb-2.5">{item.keyword}</p>
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
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">The Basketball Fan&apos;s Guide to Random Team Picks</h2>
                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            The <strong>National Basketball Association</strong> features 30 teams divided between the Eastern and Western Conferences. From legendary franchises like the Lakers and Celtics to modern dynasties like the Warriors and Nuggets, the NBA offers incredible depth for fans and gamers alike.
                        </p>
                        <p>
                            An <strong>NBA team wheel</strong> is perfect for situations where you want randomness — whether it&apos;s a 2K gaming session where everyone always picks the same team, a fantasy draft that needs a fair order, or a playoff prediction contest where the random element adds excitement.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">NBA Conferences &amp; Divisions</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Eastern Conference — Atlantic:</strong> Celtics, Nets, Knicks, 76ers, Raptors</li>
                            <li><strong>Eastern Conference — Central:</strong> Bulls, Cavaliers, Pistons, Pacers, Bucks</li>
                            <li><strong>Eastern Conference — Southeast:</strong> Hawks, Hornets, Heat, Magic, Wizards</li>
                            <li><strong>Western Conference — Northwest:</strong> Nuggets, Timberwolves, Thunder, Trail Blazers, Jazz</li>
                            <li><strong>Western Conference — Pacific:</strong> Warriors, Clippers, Lakers, Suns, Kings</li>
                            <li><strong>Western Conference — Southwest:</strong> Mavericks, Rockets, Grizzlies, Pelicans, Spurs</li>
                        </ul>
                        <p>
                            For other sports, check out our{" "}
                            <Link href="/nfl-team-wheel" className="text-orange-600 hover:underline font-medium">NFL Team Wheel</Link>,{" "}
                            <Link href="/football-club-picker" className="text-orange-600 hover:underline font-medium">Football Club Picker</Link>, or the{" "}
                            <Link href="/random-sports-team-generator" className="text-orange-600 hover:underline font-medium">Random Sports Team Generator</Link>.
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
                            { q: "Can I add WNBA or G-League teams?", a: "Yes! Click 'Add Entry' and type any team name. You can mix NBA, WNBA, G-League, EuroLeague, or any basketball team.", color: "bg-orange-500" },
                            { q: "Is this good for NBA 2K sessions?", a: "It's one of the most popular uses. Spin to assign random teams for 2K matchups — no more cherry-picking the Warriors every game.", color: "bg-blue-500" },
                            { q: "Can I share my NBA wheel?", a: "Yes. Generate a shareable link and send it to your basketball group chat.", color: "bg-emerald-500" },
                            { q: "How many spins can I do?", a: "Unlimited. Completely free, forever. No account or signup required.", color: "bg-purple-500" },
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
                            { href: "/nfl-team-wheel", label: "NFL Team Wheel" },
                            { href: "/football-club-picker", label: "Football Club Picker" },
                            { href: "/random-sports-team-generator", label: "Sports Team Generator" },
                            { href: "/cricket-team-picker", label: "Cricket Team Picker" },
                            { href: "/ipl-team-wheel", label: "IPL Team Wheel" },
                            { href: "/tournament-draw-generator", label: "Tournament Draws" },
                            { href: "/team-picker", label: "Team Picker" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-orange-300 hover:text-orange-600 transition-all">
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
