import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import { generateMetadata as genMeta, generateFAQSchema, generateWebApplicationSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { IoTrophyOutline, IoShieldCheckmarkOutline, IoFlashOutline, IoPeopleOutline, IoSettingsOutline, IoBasketballOutline, IoFlameOutline, IoSparklesOutline } from "react-icons/io5";

export const metadata: Metadata = genMeta({
    title: "NBA Team Wheel – Spin the Wheel of All 30 NBA Teams Free",
    description: "Spin the NBA team wheel to randomly pick from all 30 NBA teams. Perfect for NBA 2K matchups, fantasy basketball drafts, and playoff bracket pools. 100% fair & free!",
    canonical: "/nba-team-wheel",
});

const DEFAULT_ENTRIES = [
    // Eastern Conference - Atlantic Division
    { id: "1", label: "Celtics ☘️", color: "#007A33" },
    { id: "2", label: "Nets 🏀", color: "#111111" },
    { id: "3", label: "Knicks 🗽", color: "#F58426" },
    { id: "4", label: "76ers 🔔", color: "#006BB6" },
    { id: "5", label: "Raptors 🦖", color: "#CE1141" },
    // Eastern Conference - Central Division
    { id: "6", label: "Bulls 🐂", color: "#CE1141" },
    { id: "7", label: "Cavaliers ⚔️", color: "#860038" },
    { id: "8", label: "Pistons 🏎️", color: "#1D42BA" },
    { id: "9", label: "Pacers 🏎️", color: "#FDBB30" },
    { id: "10", label: "Bucks 🦌", color: "#00471B" },
    // Eastern Conference - Southeast Division
    { id: "11", label: "Hawks 🦅", color: "#E03A3E" },
    { id: "12", label: "Hornets 🐝", color: "#1D1160" },
    { id: "13", label: "Heat 🔥", color: "#98002E" },
    { id: "14", label: "Magic 🪄", color: "#0077C0" },
    { id: "15", label: "Wizards 🧙", color: "#002B5C" },
    // Western Conference - Northwest Division
    { id: "16", label: "Nuggets ⛏️", color: "#0E2240" },
    { id: "17", label: "Timberwolves 🐺", color: "#0C2340" },
    { id: "18", label: "Thunder ⚡", color: "#007AC1" },
    { id: "19", label: "Trail Blazers 🌲", color: "#E03A3E" },
    { id: "20", label: "Jazz 🎷", color: "#002B5C" },
    // Western Conference - Pacific Division
    { id: "21", label: "Warriors 💙", color: "#1D428A" },
    { id: "22", label: "Clippers ⛵", color: "#C8102E" },
    { id: "23", label: "Lakers 💛", color: "#552583" },
    { id: "24", label: "Suns ☀️", color: "#E56020" },
    { id: "25", label: "Kings 👑", color: "#5A2D81" },
    // Western Conference - Southwest Division
    { id: "26", label: "Mavericks 🐴", color: "#00538C" },
    { id: "27", label: "Rockets 🚀", color: "#CE1141" },
    { id: "28", label: "Grizzlies 🐻", color: "#5D76A9" },
    { id: "29", label: "Pelicans 🕊️", color: "#0C2340" },
    { id: "30", label: "Spurs 🤠", color: "#8A8D8F" },
];

export default function NbaTeamWheelPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "NBA Team Wheel – Random NBA Team Generator",
        url: `${SITE_CONFIG.url}/nba-team-wheel`,
        description: "Free online wheel of all 30 NBA teams. Spin to randomly pick an NBA franchise for NBA 2K25, fantasy basketball drafts, and playoff bracket pools.",
        featureList: "Wheel of NBA teams, NBA team wheel, All 30 NBA teams wheel, Random NBA team picker, NBA 2K random team generator, Fantasy basketball draft order wheel, Eastern and Western conference selector",
    });

    const faqSchema = generateFAQSchema([
        {
            question: "How many teams are in the NBA?",
            answer: "There are currently 30 teams in the National Basketball Association (NBA), divided equally into two conferences: 15 in the Eastern Conference and 15 in the Western Conference. Each conference is further subdivided into three divisions of 5 teams each."
        },
        {
            question: "Which NBA teams are on this wheel?",
            answer: "All 30 active NBA franchises are pre-loaded on our wheel, including powerhouse teams like the Boston Celtics, Los Angeles Lakers, Golden State Warriors, Chicago Bulls, Milwaukee Bucks, Denver Nuggets, New York Knicks, and Miami Heat. You can spin all 30 at once or customize the list."
        },
        {
            question: "How many games are played in an NBA regular season?",
            answer: "Each NBA team plays an 82-game regular season schedule (41 home games and 41 away games), totaling 1,230 games across the league before the NBA Play-In Tournament and NBA Playoffs begin."
        },
        {
            question: "How do I use this NBA team wheel for NBA 2K25 and video games?",
            answer: "Before starting an NBA 2K Play Now or Blacktop match, both players spin the wheel once. Whichever team the wheel lands on is the team you must play with. This eliminates arguing over 'overpowered' teams and forces players to master different NBA lineups and playstyles."
        },
        {
            question: "Can I use the wheel for fantasy basketball draft order and playoff predictions?",
            answer: "Yes! Spin the wheel to determine random draft lottery positions for your fantasy hoops league, or assign random NBA franchises to friends for playoff bracket pools and finals winner challenges."
        },
        {
            question: "How do NBA draft lottery odds work?",
            answer: "The 14 NBA teams that do not make the playoffs enter the NBA Draft Lottery. The three teams with the worst regular season records each share an equal top 14.0% chance of winning the #1 overall pick. Our cryptographic wheel provides genuine 1-in-30 equal probability across all franchises."
        },
        {
            question: "Is this NBA team wheel truly fair and unbiased?",
            answer: "Yes! SpinPickOnline uses the browser's native Web Crypto API (crypto.getRandomValues). Every spin is calculated with hardware-grade random entropy, guaranteeing 100% mathematical fairness with zero weighted bias."
        }
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Pick a Random NBA Team",
        description: "Spin the NBA team wheel to randomly pick a basketball team in seconds.",
        steps: [
            { position: 1, name: "Check the 30 Teams", text: "The wheel comes pre-loaded with all 30 NBA franchises across the Eastern and Western Conferences." },
            { position: 2, name: "Spin the Wheel", text: "Press Spin and watch the wheel land on a random NBA team. Every spin is cryptographically fair." },
            { position: 3, name: "Play or Draft", text: "Use the picked team for your NBA 2K game, fantasy draft, or playoff prediction contest." },
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
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            NBA Team Wheel – Spin the Wheel of All 30 NBA Teams
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Need a random NBA team? Spin our free <strong>wheel of NBA teams</strong> featuring all 30 franchises across the Eastern and Western Conferences. Perfect for <strong>NBA 2K</strong> matchups, <strong>fantasy basketball</strong> draft orders, and playoff prediction brackets!
                        </p>
                    </div>
                    <HomeWheel defaultEntries={DEFAULT_ENTRIES} storageKey="nbaTeamWheelState" />
                </div>
            </section>

            {/* How It Works */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">How to Use the NBA Team Wheel</h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-xl mx-auto">Pick a random NBA franchise in three simple steps</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 max-w-4xl mx-auto">
                        {[
                            { num: "1", bg: "from-orange-50 to-amber-50", border: "border-orange-200", numBg: "bg-orange-600", title: "Review the 30 NBA Teams", desc: "All 30 active NBA franchises are pre-loaded with official colors and emojis. Customize, remove, or add custom teams at any time." },
                            { num: "2", bg: "from-blue-50 to-indigo-50", border: "border-blue-200", numBg: "bg-blue-600", title: "Spin the Wheel", desc: "Click Spin and let cryptographic randomness pick your team. Every franchise has an exact 1-in-30 (3.33%) equal probability." },
                            { num: "3", bg: "from-green-50 to-emerald-50", border: "border-green-200", numBg: "bg-green-600", title: "Play & Compete", desc: "Use the selected team for NBA 2K, fantasy basketball draft order, or playoff bracket pools. Remove winners to draft multiple teams!" },
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
                        <p className="text-sm text-gray-600 max-w-2xl mx-auto">Engineered for competitive gamers, fantasy basketball commissioners, and hoops fans</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
                        {[
                            { icon: <IoBasketballOutline className="text-xl text-orange-600" />, ibg: "bg-orange-100", title: "All 30 NBA Franchises", desc: "Every Eastern and Western Conference team is pre-loaded with official franchise jersey colors and icons." },
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-emerald-600" />, ibg: "bg-emerald-100", title: "Cryptographically Fair", desc: "Powered by the Web Crypto API. Every team has provably equal 3.33% odds with zero algorithm bias." },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, ibg: "bg-amber-100", title: "Instant & Free", desc: "No signup, no app installation required. Works smoothly on iPhone, Android, iPad, Mac, and Windows PC." },
                            { icon: <IoPeopleOutline className="text-xl text-purple-600" />, ibg: "bg-purple-100", title: "NBA 2K & Gaming Ready", desc: "Eliminate disputes over overpowered teams. Spin before Play Now Online or 1v1 Blacktop matches." },
                            { icon: <IoSettingsOutline className="text-xl text-rose-600" />, ibg: "bg-rose-100", title: "Fully Customizable", desc: "Add historic classic teams (96 Bulls, 01 Lakers), WNBA teams, or EuroLeague clubs in seconds." },
                            { icon: <IoTrophyOutline className="text-xl text-blue-600" />, ibg: "bg-blue-100", title: "Playoff & Draft Lotteries", desc: "Assign random teams for playoff pool sweepstakes or determine fantasy basketball draft slot picks." },
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

            {/* UNIQUE AUTHORITY SECTION: All 30 NBA Teams Directory, Divisions & Lottery Odds Matrix */}
            <section className="py-10 lg:py-16 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-8 sm:mb-12">
                        <span className="text-xs font-bold text-orange-700 uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
                            NBA Reference &amp; Odds
                        </span>
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Complete 30 NBA Teams Directory &amp; Conference Matrix
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                            The National Basketball Association is split into two 15-team conferences and six 5-team divisions. Here is the full breakdown of all franchises, championships, and draft lottery odds.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start mb-8">
                        {/* Eastern Conference Table */}
                        <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 p-5 sm:p-7 rounded-2xl border border-blue-200 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg sm:text-xl font-bold text-blue-950 flex items-center gap-2">
                                    <span>🗽</span> Eastern Conference (15 Teams)
                                </h3>
                                <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-1 rounded-full">3 Divisions</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs sm:text-sm">
                                    <thead>
                                        <tr className="border-b border-blue-200 text-blue-900 font-semibold">
                                            <th className="py-2">Division</th>
                                            <th className="py-2">Franchise</th>
                                            <th className="py-2 text-right">Titles</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-blue-100 text-gray-800">
                                        <tr><td className="py-2 font-medium text-blue-900">Atlantic</td><td className="py-2">Boston Celtics ☘️</td><td className="py-2 text-right font-bold text-orange-600">18</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Atlantic</td><td className="py-2">Philadelphia 76ers 🔔</td><td className="py-2 text-right font-bold text-orange-600">3</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Atlantic</td><td className="py-2">New York Knicks 🗽</td><td className="py-2 text-right font-bold text-orange-600">2</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Atlantic</td><td className="py-2">Toronto Raptors 🦖</td><td className="py-2 text-right font-bold text-orange-600">1</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Atlantic</td><td className="py-2">Brooklyn Nets 🏀</td><td className="py-2 text-right text-gray-500">0</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Central</td><td className="py-2">Chicago Bulls 🐂</td><td className="py-2 text-right font-bold text-orange-600">6</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Central</td><td className="py-2">Detroit Pistons 🏎️</td><td className="py-2 text-right font-bold text-orange-600">3</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Central</td><td className="py-2">Milwaukee Bucks 🦌</td><td className="py-2 text-right font-bold text-orange-600">2</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Central</td><td className="py-2">Cleveland Cavaliers ⚔️</td><td className="py-2 text-right font-bold text-orange-600">1</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Central</td><td className="py-2">Indiana Pacers 🏎️</td><td className="py-2 text-right text-gray-500">0</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Southeast</td><td className="py-2">Miami Heat 🔥</td><td className="py-2 text-right font-bold text-orange-600">3</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Southeast</td><td className="py-2">Atlanta Hawks 🦅</td><td className="py-2 text-right font-bold text-orange-600">1</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Southeast</td><td className="py-2">Washington Wizards 🧙</td><td className="py-2 text-right font-bold text-orange-600">1</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Southeast</td><td className="py-2">Orlando Magic 🪄</td><td className="py-2 text-right text-gray-500">0</td></tr>
                                        <tr><td className="py-2 font-medium text-blue-900">Southeast</td><td className="py-2">Charlotte Hornets 🐝</td><td className="py-2 text-right text-gray-500">0</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Western Conference Table */}
                        <div className="bg-gradient-to-br from-orange-50/50 to-red-50/30 p-5 sm:p-7 rounded-2xl border border-orange-200 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg sm:text-xl font-bold text-orange-950 flex items-center gap-2">
                                    <span>🤠</span> Western Conference (15 Teams)
                                </h3>
                                <span className="text-xs bg-orange-100 text-orange-800 font-semibold px-2.5 py-1 rounded-full">3 Divisions</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs sm:text-sm">
                                    <thead>
                                        <tr className="border-b border-orange-200 text-orange-900 font-semibold">
                                            <th className="py-2">Division</th>
                                            <th className="py-2">Franchise</th>
                                            <th className="py-2 text-right">Titles</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-orange-100 text-gray-800">
                                        <tr><td className="py-2 font-medium text-orange-900">Pacific</td><td className="py-2">Los Angeles Lakers 💛</td><td className="py-2 text-right font-bold text-orange-600">17</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Pacific</td><td className="py-2">Golden State Warriors 💙</td><td className="py-2 text-right font-bold text-orange-600">7</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Pacific</td><td className="py-2">Sacramento Kings 👑</td><td className="py-2 text-right font-bold text-orange-600">1</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Pacific</td><td className="py-2">Phoenix Suns ☀️</td><td className="py-2 text-right text-gray-500">0</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Pacific</td><td className="py-2">LA Clippers ⛵</td><td className="py-2 text-right text-gray-500">0</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Southwest</td><td className="py-2">San Antonio Spurs 🤠</td><td className="py-2 text-right font-bold text-orange-600">5</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Southwest</td><td className="py-2">Houston Rockets 🚀</td><td className="py-2 text-right font-bold text-orange-600">2</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Southwest</td><td className="py-2">Dallas Mavericks 🐴</td><td className="py-2 text-right font-bold text-orange-600">1</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Southwest</td><td className="py-2">Memphis Grizzlies 🐻</td><td className="py-2 text-right text-gray-500">0</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Southwest</td><td className="py-2">New Orleans Pelicans 🕊️</td><td className="py-2 text-right text-gray-500">0</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Northwest</td><td className="py-2">Denver Nuggets ⛏️</td><td className="py-2 text-right font-bold text-orange-600">1</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Northwest</td><td className="py-2">Seattle / OKC Thunder ⚡</td><td className="py-2 text-right font-bold text-orange-600">1</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Northwest</td><td className="py-2">Portland Trail Blazers 🌲</td><td className="py-2 text-right font-bold text-orange-600">1</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Northwest</td><td className="py-2">Utah Jazz 🎷</td><td className="py-2 text-right text-gray-500">0</td></tr>
                                        <tr><td className="py-2 font-medium text-orange-900">Northwest</td><td className="py-2">Minnesota Timberwolves 🐺</td><td className="py-2 text-right text-gray-500">0</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Real NBA Draft Lottery Odds Table vs Spin Wheel */}
                    <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-5 sm:p-8 rounded-2xl shadow-md mb-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-lg sm:text-2xl font-bold flex items-center gap-2">
                                    <span>🎰</span> NBA Draft Lottery Odds vs. Spin Wheel Probability
                                </h3>
                                <p className="text-xs sm:text-sm text-indigo-200 mt-1">
                                    How the NBA awards the #1 overall draft pick to non-playoff teams vs. our 100% equal wheel:
                                </p>
                            </div>
                            <div className="text-xs bg-indigo-800/60 border border-indigo-700/60 px-3.5 py-2 rounded-xl text-indigo-200 self-start md:self-auto">
                                Wheel Probability: <strong>1 in 30 (3.33% Each)</strong>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b border-indigo-800 text-indigo-300">
                                        <th className="py-2 font-semibold">Regular Season Seed</th>
                                        <th className="py-2 font-semibold">Team Position</th>
                                        <th className="py-2 font-semibold">Official #1 Pick Odds</th>
                                        <th className="py-2 font-semibold">Top 4 Pick Odds</th>
                                        <th className="py-2 font-semibold">Wheel Selector Odds</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-indigo-900/60 text-indigo-100">
                                    <tr><td className="py-2 font-bold text-amber-400">Worst Record (Seed 1)</td><td className="py-2 text-indigo-200">Bottom 3 Finish</td><td className="py-2 font-bold text-emerald-400">14.0%</td><td className="py-2">52.1%</td><td className="py-2 font-mono text-indigo-300">3.33% (Equal)</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">2nd Worst (Seed 2)</td><td className="py-2 text-indigo-200">Bottom 3 Finish</td><td className="py-2 font-bold text-emerald-400">14.0%</td><td className="py-2">52.1%</td><td className="py-2 font-mono text-indigo-300">3.33% (Equal)</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">3rd Worst (Seed 3)</td><td className="py-2 text-indigo-200">Bottom 3 Finish</td><td className="py-2 font-bold text-emerald-400">14.0%</td><td className="py-2">52.1%</td><td className="py-2 font-mono text-indigo-300">3.33% (Equal)</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">4th Worst (Seed 4)</td><td className="py-2 text-indigo-200">4th Lottery Slot</td><td className="py-2 font-semibold text-amber-300">12.5%</td><td className="py-2">48.1%</td><td className="py-2 font-mono text-indigo-300">3.33% (Equal)</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">5th Worst (Seed 5)</td><td className="py-2 text-indigo-200">5th Lottery Slot</td><td className="py-2 font-semibold text-amber-300">10.5%</td><td className="py-2">42.1%</td><td className="py-2 font-mono text-indigo-300">3.33% (Equal)</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">6th to 14th Seeds</td><td className="py-2 text-indigo-200">Play-In / Fringe Teams</td><td className="py-2 text-indigo-300">9.0% down to 0.5%</td><td className="py-2">37.2% to 2.4%</td><td className="py-2 font-mono text-indigo-300">3.33% (Equal)</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 pt-3 border-t border-indigo-800/80 text-xs text-indigo-300">
                            💡 <strong>Tip for Fantasy Leagues:</strong> If you want weighted odds matching the real NBA Draft Lottery, simply add multiple duplicate entries for the bottom teams on the wheel before spinning!
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Ways NBA Fans Search & Use This Wheel */}
            <section className="py-10 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center md:mb-10 mb-6">
                        <div className="inline-block bg-orange-100 text-orange-800 font-semibold text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                            🏀 Popular Basketball Game Modes
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Exciting Ways to Use the NBA Team Wheel
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            From NBA 2K random franchise tournaments to fantasy basketball draft order lotteries and pickup squads.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                query: "NBA 2K Random Team Challenge",
                                keyword: "NBA 2K random team generator wheel",
                                icon: "🎮",
                                tag: "NBA 2K25",
                                tagColor: "bg-orange-100 text-orange-800",
                                desc: "Stop friends from cherry-picking the Celtics or Warriors. Spin before Play Now Online or local 1v1 blacktop matches for balanced, thrilling gameplay.",
                            },
                            {
                                query: "Fantasy Basketball Draft Pick Order",
                                keyword: "fantasy basketball draft order generator",
                                icon: "📊",
                                tag: "Fantasy Hoops",
                                tagColor: "bg-blue-100 text-blue-700",
                                desc: "Commissioners spin live during draft night to assign picks 1 through 12. Decide who gets Nikola Jokic or Luka Doncic with unhackable cryptographic RNG.",
                            },
                            {
                                query: "Which NBA Team Should I Support?",
                                keyword: "which NBA team should I support wheel",
                                icon: "🗽",
                                tag: "Fan Decider",
                                tagColor: "bg-purple-100 text-purple-700",
                                desc: "New hoops watcher or neutral observer? Spin the wheel to adopt an NBA team to follow through the 82-game regular season and playoff push.",
                            },
                            {
                                query: "Pickup Basketball Team Divider",
                                keyword: "pickup basketball team generator 5v5",
                                icon: "⛹️",
                                tag: "Pickup Courts",
                                tagColor: "bg-emerald-100 text-emerald-700",
                                desc: "At the gym or blacktop court, enter 10 names and spin to divide into two balanced 5v5 squads without awkward schoolyard captain picking.",
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
                                desc: "Recreate the iconic All-Star team captain draft by entering superstar names and spinning to build Team East vs Team West fantasy squads.",
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

            {/* In-Depth SEO Guide */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl space-y-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
                        The Ultimate Guide to NBA Teams &amp; Random Selection
                    </h2>
                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            The <strong>National Basketball Association (NBA)</strong> is the premier professional basketball league in the world, featuring 30 storied franchises across North America. From dynasty franchises like the 18-time champion Boston Celtics and 17-time champion Los Angeles Lakers to modern contenders like the Golden State Warriors, Denver Nuggets, and Milwaukee Bucks, the NBA delivers unmatched competitive drama.
                        </p>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            How Many Teams Are in the NBA &amp; How Are They Structured?
                        </h3>
                        <p>
                            There are exactly <strong>30 teams in the NBA</strong> (29 based in the United States and 1 in Canada, the Toronto Raptors). The league is divided evenly into two conferences:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Eastern Conference (15 Teams):</strong> Organized into the Atlantic Division (Celtics, Nets, Knicks, 76ers, Raptors), Central Division (Bulls, Cavaliers, Pistons, Pacers, Bucks), and Southeast Division (Hawks, Hornets, Heat, Magic, Wizards).
                            </li>
                            <li>
                                <strong>Western Conference (15 Teams):</strong> Organized into the Northwest Division (Nuggets, Timberwolves, Thunder, Trail Blazers, Jazz), Pacific Division (Warriors, Clippers, Lakers, Suns, Kings), and Southwest Division (Mavericks, Rockets, Grizzlies, Pelicans, Spurs).
                            </li>
                        </ul>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            How the 82-Game NBA Regular Season &amp; Playoffs Work
                        </h3>
                        <p>
                            Each NBA team plays an <strong>82-game regular season schedule</strong>. The top 6 teams in each conference automatically punch their ticket to the NBA Playoffs, while teams ranked 7th through 10th compete in the high-stakes <strong>NBA Play-In Tournament</strong> for the final two playoff seeds. All four rounds of the NBA Playoffs (First Round, Conference Semifinals, Conference Finals, and NBA Finals) are contested in a best-of-seven series format.
                        </p>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            Why Use a Random Wheel of NBA Teams?
                        </h3>
                        <p>
                            Whether playing video games like <em>NBA 2K25</em>, running a season-long fantasy league draft, or creating a workplace tournament bracket pool, human picking often leads to arguments, bias, or everyone picking the same 3 favorite superstars. Our <strong>NBA team wheel</strong> introduces pure cryptographic randomness via the browser&apos;s Web Crypto API, guaranteeing that every single spin is 100% fair, unbiased, and unpredictable.
                        </p>

                        <p className="pt-2">
                            Looking for other sport randomizers? Spin our{" "}
                            <Link href="/ipl-team-wheel" className="text-orange-600 hover:underline font-semibold">IPL Team Wheel</Link>,{" "}
                            <Link href="/nfl-team-wheel" className="text-orange-600 hover:underline font-semibold">NFL Team Wheel</Link>,{" "}
                            <Link href="/football-club-picker" className="text-orange-600 hover:underline font-semibold">Football Club Picker</Link>, or the{" "}
                            <Link href="/random-sports-team-generator" className="text-orange-600 hover:underline font-semibold">Random Sports Team Generator</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Accordion FAQs */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                        Frequently Asked Questions About NBA Teams
                    </h2>
                    <div className="space-y-3">
                        {[
                            {
                                q: "How many teams are in the NBA?",
                                a: "There are currently 30 teams in the National Basketball Association (NBA) — 15 in the Eastern Conference and 15 in the Western Conference. 29 teams are based in the United States and 1 team (Toronto Raptors) is based in Canada.",
                                color: "bg-orange-500"
                            },
                            {
                                q: "Are all 30 NBA teams included on this wheel?",
                                a: "Yes! All 30 active NBA franchises across both conferences are pre-loaded on the wheel with their official colors and emojis. You can spin with all 30 teams, filter by conference, or add customized entries.",
                                color: "bg-blue-500"
                            },
                            {
                                q: "How many games are in an NBA regular season?",
                                a: "Every NBA team plays an 82-game regular season schedule (41 home games and 41 away games), totaling 1,230 games across the league before the NBA Play-In Tournament and NBA Playoffs begin.",
                                color: "bg-emerald-500"
                            },
                            {
                                q: "How do I use this NBA team wheel for NBA 2K25?",
                                a: "Spin the wheel before your match to determine which team each player must use. This prevents players from always picking top-tier teams like the Celtics, Nuggets, or Warriors, making every game fresh, fun, and competitive.",
                                color: "bg-purple-500"
                            },
                            {
                                q: "Can I use the wheel for fantasy basketball draft lotteries?",
                                a: "Absolutely! Simply spin the wheel to determine draft order 1 through 12. You can click 'Remove Entry' after each spin to draw draft slots without duplicate teams.",
                                color: "bg-rose-500"
                            },
                            {
                                q: "Is this NBA wheel 100% random and fair?",
                                a: "Yes! SpinPickOnline uses the browser's native Web Crypto API (crypto.getRandomValues). Every spin is calculated with hardware-grade random entropy, guaranteeing mathematically equal 1-in-30 odds with zero algorithm bias.",
                                color: "bg-amber-500"
                            },
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
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Explore More Sports &amp; Randomizer Wheels</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/ipl-team-wheel", label: "🏏 IPL Team Wheel" },
                            { href: "/nfl-team-wheel", label: "🏈 NFL Team Wheel" },
                            { href: "/football-club-picker", label: "⚽ Football Club Picker" },
                            { href: "/cricket-team-picker", label: "🏏 Cricket Team Picker" },
                            { href: "/random-sports-team-generator", label: "🏆 Sports Team Generator" },
                            { href: "/tournament-draw-generator", label: "🎯 Tournament Draws" },
                            { href: "/team-picker", label: "👥 Team Picker" },
                            { href: "/flip-a-coin", label: "🪙 Flip a Coin" },
                            { href: "/dice-roller", label: "🎲 Dice Roller" },
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
