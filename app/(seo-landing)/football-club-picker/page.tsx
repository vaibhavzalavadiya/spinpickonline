import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import { generateMetadata as genMeta, generateFAQSchema, generateWebApplicationSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { IoTrophyOutline, IoShieldCheckmarkOutline, IoFlashOutline, IoPeopleOutline, IoSettingsOutline, IoFootballOutline, IoFlameOutline } from "react-icons/io5";

export const metadata: Metadata = genMeta({
    title: "Football Club Picker – Random Football Team Generator (Premier League & World Clubs)",
    description: "Spin the football club picker to randomly pick a football team. Premier League, Champions League, La Liga, MLS & top European clubs pre-loaded. 100% fair & free!",
    canonical: "/football-club-picker",
});

const DEFAULT_ENTRIES = [
    { id: "1", label: "Real Madrid 👑", color: "#FEBE10" },
    { id: "2", label: "Barcelona 🔵🔴", color: "#A50044" },
    { id: "3", label: "Man City 🩵", color: "#6CADDF" },
    { id: "4", label: "Arsenal 🔴", color: "#EF0107" },
    { id: "5", label: "Liverpool 🔴", color: "#C8102E" },
    { id: "6", label: "Chelsea 💙", color: "#034694" },
    { id: "7", label: "Man United 🔴", color: "#DA291C" },
    { id: "8", label: "Tottenham ⚪", color: "#132257" },
    { id: "9", label: "Bayern Munich 🇩🇪", color: "#DC052D" },
    { id: "10", label: "PSG 🇫🇷", color: "#004170" },
    { id: "11", label: "Juventus ⚪⚫", color: "#000000" },
    { id: "12", label: "Inter Milan 🔵⚫", color: "#010E80" },
    { id: "13", label: "AC Milan 🔴⚫", color: "#FB090B" },
    { id: "14", label: "Dortmund 🟡", color: "#FDE100" },
    { id: "15", label: "Seattle Sounders 🟢", color: "#005595" },
    { id: "16", label: "Inter Miami 💗", color: "#F7B5CD" },
];

export default function FootballClubPickerPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "Football Club Picker – Random Football Team Generator",
        url: `${SITE_CONFIG.url}/football-club-picker`,
        description: "Free online football club picker wheel. Top European clubs pre-loaded — English Premier League, La Liga, Serie A, Bundesliga, and MLS. Spin to randomly pick a club for EA Sports FC 25, FIFA matches, and fantasy football.",
        featureList: "Football club picker, Random football team generator, Premier League football clubs, FIFA random team selector, EA Sports FC 25 club picker, Champions League draw wheel, MLS football clubs, Fantasy football draft wheel",
    });

    const faqSchema = generateFAQSchema([
        {
            question: "Which football clubs and leagues are on this wheel?",
            answer: "The wheel comes pre-loaded with 16 world-famous football clubs including Arsenal, Manchester City, Liverpool, Chelsea, Manchester United, Tottenham, Real Madrid, Barcelona, Bayern Munich, Paris Saint-Germain, Juventus, Inter Milan, AC Milan, Borussia Dortmund, Seattle Sounders, and Inter Miami. You can add any club from any league worldwide."
        },
        {
            question: "How do I pick a random English Premier League (EPL) football club?",
            answer: "Our picker includes top Premier League giants like Arsenal football club, Man City, Liverpool, and Chelsea. You can also customize the wheel with all 20 EPL clubs (including Newcastle, Aston Villa, West Ham, and Everton) to spin for fantasy drafts or match predictions."
        },
        {
            question: "Can I use this football club picker for EA Sports FC 25 / FIFA?",
            answer: "Yes! It is one of the most popular tools for EA Sports FC 25 and FIFA gamers. Before kicking off Play Now or Kick-Off matches, both players spin the wheel to pick random clubs. This prevents players from always spamming Real Madrid or Man City and keeps matches balanced and competitive."
        },
        {
            question: "Can I pick Major League Soccer (MLS) and international clubs?",
            answer: "Yes! Popular MLS teams like Seattle Sounders FC, Inter Miami, NYCFC, and LAFC are supported. You can easily click 'Add Entry' to add clubs from the MLS, Saudi Pro League, Brazilian Serie A, Argentine Primera, or any global football league."
        },
        {
            question: "Can I use this wheel for Champions League draw simulations?",
            answer: "Absolutely. Recreate the UEFA Champions League draw right in your browser. Add all qualified clubs and spin the wheel to simulate group stage pools or knockout round-of-16 brackets without seeding bias."
        },
        {
            question: "Is this random football club picker fair and unbiased?",
            answer: "Yes! SpinPickOnline uses the browser's cryptographic Web Crypto API (crypto.getRandomValues). Every club on the wheel has a mathematically equal chance of being selected on every spin."
        }
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Pick a Random Football Club",
        description: "Spin the football club wheel to randomly select a team for gaming, fantasy drafts, or predictions.",
        steps: [
            { position: 1, name: "Choose Your Clubs", text: "Use our pre-loaded list of top Premier League and European clubs, or customize with your favorite league." },
            { position: 2, name: "Spin the Wheel", text: "Click Spin and watch the wheel land on a random football club using cryptographic randomness." },
            { position: 3, name: "Play or Compete", text: "Use the selected club for your EA Sports FC 25 / FIFA match, fantasy draft, or pub quiz wager." },
        ],
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Random Sports Team Generator", item: `${SITE_CONFIG.url}/random-sports-team-generator` },
        { name: "Football Club Picker", item: `${SITE_CONFIG.url}/football-club-picker` },
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
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Football Club Picker – Random Football Team Generator
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Need a random football team? Spin our free <strong>football club picker</strong> featuring elite clubs like Arsenal, Manchester City, Liverpool, Real Madrid, Bayern Munich, and Seattle Sounders. Perfect for <strong>EA Sports FC 25 / FIFA</strong> matchups, fantasy drafts, and Champions League predictions!
                        </p>
                    </div>
                    <HomeWheel defaultEntries={DEFAULT_ENTRIES} storageKey="footballClubPickerState" />
                </div>
            </section>

            {/* How It Works */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">How to Pick a Random Football Club</h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-xl mx-auto">Three quick steps to randomly select a club</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 max-w-4xl mx-auto">
                        {[
                            { num: "1", bg: "from-green-50 to-emerald-50", border: "border-green-200", numBg: "bg-green-600", title: "Select Football Clubs", desc: "Use the pre-loaded European and Premier League giants or customize with La Liga, Serie A, Bundesliga, MLS, or Saudi Pro League teams." },
                            { num: "2", bg: "from-blue-50 to-indigo-50", border: "border-blue-200", numBg: "bg-blue-600", title: "Spin the Wheel", desc: "Click Spin and let cryptographic randomness pick your team. Every club has a mathematically equal chance with zero algorithm bias." },
                            { num: "3", bg: "from-amber-50 to-yellow-50", border: "border-amber-200", numBg: "bg-amber-600", title: "Play & Compete", desc: "Use the picked club for EA Sports FC 25, FIFA 1v1 blacktop matches, Career Mode rebuild saves, or Fantasy Premier League challenges." },
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
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">Why Football Fans Love This Picker</h2>
                        <p className="text-sm text-gray-600 max-w-2xl mx-auto">Engineered for gamers, fantasy managers, and football enthusiasts worldwide</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
                        {[
                            { icon: <IoFootballOutline className="text-xl text-green-600" />, ibg: "bg-green-100", title: "Elite Clubs Pre-Loaded", desc: "Top clubs from the English Premier League, La Liga, Serie A, Bundesliga, Ligue 1, and MLS ready to spin." },
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-emerald-600" />, ibg: "bg-emerald-100", title: "Cryptographically Fair", desc: "Powered by the Web Crypto API. Every club has provably equal probability with zero rigged results." },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, ibg: "bg-amber-100", title: "Instant & Free Forever", desc: "No signup, no apps to download. Spin on mobile, tablet, or desktop in any modern browser." },
                            { icon: <IoPeopleOutline className="text-xl text-purple-600" />, ibg: "bg-purple-100", title: "EA FC & FIFA Ready", desc: "Level the playing field! Spin before Kick-Off matches so neither player can cherry-pick Real Madrid or Man City." },
                            { icon: <IoSettingsOutline className="text-xl text-rose-600" />, ibg: "bg-rose-100", title: "Any League Worldwide", desc: "Add clubs from any league — Championship, MLS, Scottish Premiership, Saudi Pro League, or lower tiers." },
                            { icon: <IoTrophyOutline className="text-xl text-blue-600" />, ibg: "bg-blue-100", title: "Champions League Simulator", desc: "Recreate UEFA Champions League draws, group stage pools, and knockout bracket predictions at home." },
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

            {/* UNIQUE AUTHORITY SECTION: Top Football Clubs Matrix, Stadiums & EA FC Challenge Playbook */}
            <section className="py-10 lg:py-16 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-8 sm:mb-12">
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 inline-block mb-3">
                            Football Directory &amp; Records
                        </span>
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Elite Football Clubs Directory: Leagues, Stadiums &amp; European Titles
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                            The essential reference matrix of the world&apos;s most searched football clubs — league affiliations, legendary home stadiums, and Champions League trophies.
                        </p>
                    </div>

                    {/* Table 1: Master Directory Table */}
                    <div className="bg-gradient-to-br from-emerald-50/50 to-green-50/30 p-5 sm:p-7 rounded-2xl border border-emerald-200 shadow-sm mb-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                            <h3 className="text-lg sm:text-xl font-bold text-emerald-950 flex items-center gap-2">
                                <span>🏆</span> Legendary Football Clubs Matrix
                            </h3>
                            <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-1 rounded-full self-start sm:self-auto">
                                Europe &amp; Global Giants
                            </span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b border-emerald-200 text-emerald-900 font-semibold">
                                        <th className="py-2.5">Club Name</th>
                                        <th className="py-2.5">League</th>
                                        <th className="py-2.5">Home Stadium &amp; City</th>
                                        <th className="py-2.5 text-right">UCL / Continental Titles</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-emerald-100 text-gray-800">
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Real Madrid CF 🇪🇸</td>
                                        <td className="py-2.5 text-emerald-700 font-medium">La Liga</td>
                                        <td className="py-2.5 text-gray-600">Santiago Bernabéu, Madrid</td>
                                        <td className="py-2.5 text-right font-bold text-amber-600">15 UCL (Record)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Manchester City FC 🏴󠁧󠁢󠁥󠁮󠁧󠁿</td>
                                        <td className="py-2.5 text-emerald-700 font-medium">Premier League</td>
                                        <td className="py-2.5 text-gray-600">Etihad Stadium, Manchester</td>
                                        <td className="py-2.5 text-right font-bold text-amber-600">1 UCL (2023 Treble)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Liverpool FC 🏴󠁧󠁢󠁥󠁮󠁧󠁿</td>
                                        <td className="py-2.5 text-emerald-700 font-medium">Premier League</td>
                                        <td className="py-2.5 text-gray-600">Anfield, Liverpool</td>
                                        <td className="py-2.5 text-right font-bold text-amber-600">6 UCL Titles</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Arsenal FC 🏴󠁧󠁢󠁥󠁮󠁧󠁿</td>
                                        <td className="py-2.5 text-emerald-700 font-medium">Premier League</td>
                                        <td className="py-2.5 text-gray-600">Emirates Stadium, London</td>
                                        <td className="py-2.5 text-right font-bold text-gray-600">13 English League Titles</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">FC Barcelona 🇪🇸</td>
                                        <td className="py-2.5 text-emerald-700 font-medium">La Liga</td>
                                        <td className="py-2.5 text-gray-600">Spotify Camp Nou, Barcelona</td>
                                        <td className="py-2.5 text-right font-bold text-amber-600">5 UCL Titles</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Bayern Munich 🇩🇪</td>
                                        <td className="py-2.5 text-emerald-700 font-medium">Bundesliga</td>
                                        <td className="py-2.5 text-gray-600">Allianz Arena, Munich</td>
                                        <td className="py-2.5 text-right font-bold text-amber-600">6 UCL Titles</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Chelsea FC 🏴󠁧󠁢󠁥󠁮󠁧󠁿</td>
                                        <td className="py-2.5 text-emerald-700 font-medium">Premier League</td>
                                        <td className="py-2.5 text-gray-600">Stamford Bridge, London</td>
                                        <td className="py-2.5 text-right font-bold text-amber-600">2 UCL Titles</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Manchester United FC 🏴󠁧󠁢󠁥󠁮󠁧󠁿</td>
                                        <td className="py-2.5 text-emerald-700 font-medium">Premier League</td>
                                        <td className="py-2.5 text-gray-600">Old Trafford, Manchester</td>
                                        <td className="py-2.5 text-right font-bold text-amber-600">3 UCL / 20 English Titles</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Juventus FC 🇮🇹</td>
                                        <td className="py-2.5 text-emerald-700 font-medium">Serie A</td>
                                        <td className="py-2.5 text-gray-600">Allianz Stadium, Turin</td>
                                        <td className="py-2.5 text-right font-bold text-amber-600">2 UCL / 36 Serie A</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Paris Saint-Germain 🇫🇷</td>
                                        <td className="py-2.5 text-emerald-700 font-medium">Ligue 1</td>
                                        <td className="py-2.5 text-gray-600">Parc des Princes, Paris</td>
                                        <td className="py-2.5 text-right font-bold text-gray-600">12 French League Titles</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Seattle Sounders FC 🇺🇸</td>
                                        <td className="py-2.5 text-emerald-700 font-medium">Major League Soccer (MLS)</td>
                                        <td className="py-2.5 text-gray-600">Lumen Field, Seattle</td>
                                        <td className="py-2.5 text-right font-bold text-emerald-600">1 CONCACAF Champions Cup</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Inter Miami CF 🇺🇸</td>
                                        <td className="py-2.5 text-emerald-700 font-medium">Major League Soccer (MLS)</td>
                                        <td className="py-2.5 text-gray-600">Chase Stadium, Fort Lauderdale</td>
                                        <td className="py-2.5 text-right font-bold text-emerald-600">1 Supporters&apos; Shield / Leagues Cup</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* EA Sports FC 25 & Career Mode Playbook */}
                    <div className="bg-gradient-to-r from-slate-900 to-emerald-950 text-white p-5 sm:p-8 rounded-2xl shadow-md mb-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-lg sm:text-2xl font-bold flex items-center gap-2">
                                    <span>🎮</span> EA Sports FC 25 &amp; Gaming Challenge Playbook
                                </h3>
                                <p className="text-xs sm:text-sm text-emerald-200 mt-1">
                                    How competitive gamers and streamers use our random football club picker:
                                </p>
                            </div>
                            <div className="text-xs bg-emerald-800/60 border border-emerald-700/60 px-3.5 py-2 rounded-xl text-emerald-200 self-start md:self-auto">
                                Cryptographic RNG Engine
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                            <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800/60">
                                <h4 className="font-bold text-amber-300 text-sm mb-2">1. The Fair Play Derby</h4>
                                <p className="text-emerald-100 leading-relaxed">
                                    Before kicking off 1v1 online or sofa friendlies, both players spin the wheel once. Whichever team is picked must be played with — eliminating debates over 5-star overpowered squads!
                                </p>
                            </div>
                            <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800/60">
                                <h4 className="font-bold text-amber-300 text-sm mb-2">2. Career Mode Rebuild Save</h4>
                                <p className="text-emerald-100 leading-relaxed">
                                    Tired of choosing the same big-budget team? Spin across mid-table Premier League, Championship, or Bundesliga teams to find your next tactical youth academy rebuild challenge.
                                </p>
                            </div>
                            <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800/60">
                                <h4 className="font-bold text-amber-300 text-sm mb-2">3. FPL Draft Order Wheel</h4>
                                <p className="text-emerald-100 leading-relaxed">
                                    Fantasy Premier League draft commissioners spin the wheel to fairly establish picking slots 1 through 10, ensuring an unhackable, transparent draft order for the whole league.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Search Queries & User Scenarios */}
            <section className="py-10 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center md:mb-10 mb-6">
                        <div className="inline-block bg-emerald-100 text-emerald-800 font-semibold text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                            ⚽ Popular Football Game Scenarios
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Popular Ways Football Fans Search &amp; Use This Wheel
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            From EA Sports FC challenges to Champions League draw simulations and FPL drafts — how soccer fans spin.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                query: "EA Sports FC / FIFA Random Club Challenge",
                                keyword: "EA Sports FC random club generator FIFA",
                                icon: "🎮",
                                tag: "EA FC / FIFA",
                                tagColor: "bg-green-100 text-green-800",
                                desc: "Gamers spin before kick-off matches so neither player can default to Real Madrid or Man City. Level the playing field with thrilling underdog clubs.",
                            },
                            {
                                query: "Champions League Draw & Group Simulator",
                                keyword: "Champions League draw generator UCL pool",
                                icon: "🏆",
                                tag: "UCL Draw",
                                tagColor: "bg-blue-100 text-blue-700",
                                desc: "Simulate UEFA Champions League draws by spinning top European clubs into pot allocations and round-of-16 knockout brackets with zero seeded bias.",
                            },
                            {
                                query: "Career Mode \"Which Club to Manage?\"",
                                keyword: "FIFA career mode team picker wheel",
                                icon: "👔",
                                tag: "Career Mode",
                                tagColor: "bg-purple-100 text-purple-700",
                                desc: "Stuck on who to manage in your next FC 25 or FM save? Spin across Premier League, La Liga, or Bundesliga sides to find your next tactical rebuild challenge.",
                            },
                            {
                                query: "Fantasy Premier League (FPL) Draft Allocator",
                                keyword: "fantasy football club picker FPL draft",
                                icon: "📊",
                                tag: "Fantasy FPL",
                                tagColor: "bg-teal-100 text-teal-700",
                                desc: "FPL draft leagues spin the wheel to determine draft order, allocate clubs for clean sheet challenges, or randomly assign weekend captain picks.",
                            },
                            {
                                query: "Pub Quiz & Derby Watch Party Games",
                                keyword: "football pub quiz team decider games",
                                icon: "🍻",
                                tag: "Watch Parties",
                                tagColor: "bg-amber-100 text-amber-800",
                                desc: "Event organizers and watch party hosts spin to randomly assign club allegiances or wagers to guests during massive Champions League or derby fixtures.",
                            },
                            {
                                query: "European Derby Clash Decider",
                                keyword: "football derby match picker wheel",
                                icon: "🔥",
                                tag: "Derby Clashes",
                                tagColor: "bg-rose-100 text-rose-700",
                                desc: "Can't decide which marquee derby to stream or simulate? Spin between El Clásico, the North London derby, or the Milan derby for weekend game nights.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-lg transition-all flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${item.tagColor}`}>{item.tag}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1 text-base">{item.query}</h3>
                                    <p className="text-xs text-emerald-600 font-mono mb-2.5">{item.keyword}</p>
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
                        The Football Fan&apos;s Guide to Random Club Selection
                    </h2>
                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            <strong>Football</strong> (soccer) is the world&apos;s most watched sport, with billions of supporters across every continent. From the fierce competitiveness of the <strong>English Premier League</strong> and the tactical masterclasses of <strong>La Liga</strong> and <strong>Serie A</strong> to the global appeal of the <strong>UEFA Champions League</strong> and <strong>Major League Soccer</strong>, football passion knows no borders.
                        </p>
                        <p>
                            A <strong>football club picker wheel</strong> brings pure cryptographic fairness to game nights, gaming lobbies, and sports discussions. Whether you need an unbiased club for an EA Sports FC 25 tournament, a fair order for your Fantasy Premier League draft, or a fun way to adopt a new club to follow, our spinner eliminates all bias.
                        </p>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            Top Football Leagues Covered by the Picker
                        </h3>
                        <p>
                            While our default wheel showcases global giants, you can easily customize the entries to include all 20 clubs from any premier competition:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>English Premier League (EPL):</strong> Arsenal, Manchester City, Liverpool, Chelsea, Manchester United, Tottenham Hotspur, Aston Villa, Newcastle United, and more.
                            </li>
                            <li>
                                <strong>La Liga (Spain):</strong> Real Madrid, FC Barcelona, Atlético Madrid, Athletic Club, Real Sociedad, and Sevilla.
                            </li>
                            <li>
                                <strong>Serie A (Italy):</strong> Inter Milan, AC Milan, Juventus, Napoli, AS Roma, and Lazio.
                            </li>
                            <li>
                                <strong>Bundesliga (Germany):</strong> Bayern Munich, Borussia Dortmund, Bayer Leverkusen, and RB Leipzig.
                            </li>
                            <li>
                                <strong>Major League Soccer (MLS):</strong> Seattle Sounders FC, Inter Miami CF, New York City FC (NYCFC), Los Angeles FC (LAFC), and FC Dallas.
                            </li>
                        </ul>

                        <p className="pt-2">
                            Explore our other sports randomizers: spin the{" "}
                            <Link href="/cricket-team-picker" className="text-emerald-700 hover:underline font-semibold">Cricket Team Picker</Link>,{" "}
                            <Link href="/ipl-team-wheel" className="text-emerald-700 hover:underline font-semibold">IPL Team Wheel</Link>,{" "}
                            <Link href="/nba-team-wheel" className="text-emerald-700 hover:underline font-semibold">NBA Team Wheel</Link>, or the{" "}
                            <Link href="/nfl-team-wheel" className="text-emerald-700 hover:underline font-semibold">NFL Team Wheel</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Accordion FAQs */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                        Frequently Asked Questions About Football Clubs
                    </h2>
                    <div className="space-y-3">
                        {[
                            {
                                q: "Can I create a full 20-team Premier League wheel?",
                                a: "Yes! Simply edit or add entries for all 20 Premier League clubs (Arsenal, Man City, Liverpool, Chelsea, Man United, Spurs, Aston Villa, etc.). The wheel dynamically adjusts slice angles for any number of teams.",
                                color: "bg-green-500"
                            },
                            {
                                q: "How do gamers use this for EA Sports FC 25 / FIFA?",
                                a: "Both players spin the wheel once before the match starts. The club selected by the wheel is the club each player must use. This prevents everyone from defaulting to 5-star teams like Real Madrid or Manchester City.",
                                color: "bg-blue-500"
                            },
                            {
                                q: "Can I include clubs from MLS, Saudi Pro League, or lower divisions?",
                                a: "Yes! Click 'Add Entry' to include teams from the MLS (Seattle Sounders, Inter Miami, NYCFC), Saudi Pro League (Al-Nassr, Al-Hilal), English Championship, or Scottish Premiership.",
                                color: "bg-amber-500"
                            },
                            {
                                q: "Can I use this for Champions League draw pools?",
                                a: "Yes. Add all 32 or 36 qualified UCL teams and spin to simulate random pot allocations, group stage draws, or knockout tournament brackets with zero human seeding bias.",
                                color: "bg-purple-500"
                            },
                            {
                                q: "Is the football club picker 100% free and fair?",
                                a: "Yes! It is 100% free with no account or signup needed. Every spin is generated using the browser's cryptographic Web Crypto API, guaranteeing equal mathematical probability for every club.",
                                color: "bg-emerald-500"
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
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Explore More Sports Wheels</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/cricket-team-picker", label: "🏏 Cricket Team Picker" },
                            { href: "/ipl-team-wheel", label: "🏏 IPL Team Wheel" },
                            { href: "/nba-team-wheel", label: "🏀 NBA Team Wheel" },
                            { href: "/nfl-team-wheel", label: "🏈 NFL Team Wheel" },
                            { href: "/random-sports-team-generator", label: "🏆 Sports Team Generator" },
                            { href: "/tournament-draw-generator", label: "🎯 Tournament Draws" },
                            { href: "/team-picker", label: "👥 Team Picker" },
                            { href: "/flip-a-coin", label: "🪙 Flip a Coin" },
                            { href: "/dice-roller", label: "🎲 Dice Roller" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-green-300 hover:text-green-600 transition-all">
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
