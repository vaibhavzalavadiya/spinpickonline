import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import { generateMetadata as genMeta, generateFAQSchema, generateWebApplicationSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { IoTrophyOutline, IoShieldCheckmarkOutline, IoFlashOutline, IoPeopleOutline, IoSettingsOutline, IoBaseballOutline, IoShuffleOutline } from "react-icons/io5";

export const metadata: Metadata = genMeta({
    title: "Cricket Team Picker – Random Cricket Team Generator & Player Divider",
    description: "Free cricket team picker & random team generator. Split players into two teams, divide squads for gully cricket, or pick international & IPL teams. 100% fair & free!",
    canonical: "/cricket-team-picker",
});

const DEFAULT_ENTRIES = [
    { id: "1", label: "India 🇮🇳", color: "#1D4ED8" },
    { id: "2", label: "Australia 🇦🇺", color: "#EAB308" },
    { id: "3", label: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿", color: "#1E3A5F" },
    { id: "4", label: "Pakistan 🇵🇰", color: "#16A34A" },
    { id: "5", label: "South Africa 🇿🇦", color: "#059669" },
    { id: "6", label: "New Zealand 🇳🇿", color: "#171717" },
    { id: "7", label: "West Indies 🏏", color: "#7C2D12" },
    { id: "8", label: "Sri Lanka 🇱🇰", color: "#1E40AF" },
    { id: "9", label: "Bangladesh 🇧🇩", color: "#15803D" },
    { id: "10", label: "Afghanistan 🇦🇫", color: "#0284C7" },
];

export default function CricketTeamPickerPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "Cricket Team Picker – Random Cricket Team Generator",
        url: `${SITE_CONFIG.url}/cricket-team-picker`,
        description: "Free online cricket team generator and player divider. Split players into two balanced cricket teams, pick international ICC teams, or run tournament group draws.",
        featureList: "Cricket team picker, Random cricket team generator, Cricket team maker, Divide players into teams, Split players into two teams, Cricket player picker, Balanced team generator, Gully cricket team selector, Cricket tournament draw generator",
    });

    const faqSchema = generateFAQSchema([
        {
            question: "How do I split players into two cricket teams using this tool?",
            answer: "Click 'Bulk Add' or edit the entries to enter your list of player names (e.g., 10, 12, or 22 players). Spin the wheel to assign players: the first spin goes to Team A, the second spin goes to Team B, and so forth. Remove each selected player to divide the squad into two perfectly balanced cricket teams without schoolyard captain favoritism."
        },
        {
            question: "Can I use this as a balanced cricket team generator for gully or box cricket?",
            answer: "Yes! For gully cricket or box cricket matches, input the group of players and spin to divide teams randomly. If you have two marquee players or captains, place one on Team A and one on Team B, then let the wheel fairly distribute the remaining all-rounders, batsmen, and bowlers."
        },
        {
            question: "Which international cricket teams are pre-loaded on the wheel?",
            answer: "The wheel comes pre-configured with all 10 ICC Full Member cricket nations: India, Australia, England, Pakistan, South Africa, New Zealand, West Indies, Sri Lanka, Bangladesh, and Afghanistan. You can spin between them or replace them with IPL franchises in one click."
        },
        {
            question: "How does the cricket player picker and batting order generator work?",
            answer: "Simply type your 11 player names into the entries list and click Spin. The first player picked opens the innings (#1), the second is your non-striking opener (#2), the third is #3, and so on down to #11. This guarantees every player gets a fair batting opportunity during practice and friendly matches."
        },
        {
            question: "Can I use this tool as a cricket tournament draw generator?",
            answer: "Absolutely! Box cricket, corporate league, and tournament organizers enter participating team names into the wheel. Spin to draw teams alternately into Group A and Group B for unbiased, transparent pool allocation."
        },
        {
            question: "Can I use this for the match toss (bat or bowl first)?",
            answer: "Yes! If you don't have a physical coin at the pitch or park, add just two entries: 'Bat First' and 'Bowl First'. Spin the wheel for an instantaneous, tamper-proof digital toss."
        },
        {
            question: "Is this online cricket team maker 100% fair and random?",
            answer: "Yes! SpinPickOnline uses the browser's cryptographic Web Crypto API (crypto.getRandomValues). Every spin is calculated with hardware-grade entropy, giving every player and team mathematically equal odds with zero bias."
        }
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Generate Cricket Teams & Divide Players",
        description: "Split players into two balanced teams or pick random cricket teams in seconds.",
        steps: [
            { position: 1, name: "Enter Players or Teams", text: "Enter player names for a street match, or use the pre-loaded ICC international cricket teams." },
            { position: 2, name: "Spin the Wheel", text: "Click Spin and let cryptographic randomness pick a player or team with zero human bias." },
            { position: 3, name: "Divide and Play", text: "Alternate picks to split players into Team A and Team B, or use the result for your tournament pool draw." },
        ],
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Random Sports Team Generator", item: `${SITE_CONFIG.url}/random-sports-team-generator` },
        { name: "Cricket Team Picker", item: `${SITE_CONFIG.url}/cricket-team-picker` },
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
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Cricket Team Picker – Random Team Generator &amp; Player Divider
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Need to <strong>split players into two teams</strong> or pick a random cricket side? Use our free <strong>cricket team generator</strong>, player divider, and tournament draw wheel. 100% fair, instant, and mobile-friendly!
                        </p>
                    </div>
                    <HomeWheel defaultEntries={DEFAULT_ENTRIES} storageKey="cricketTeamPickerState" />
                </div>
            </section>

            {/* How It Works */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How to Split Players &amp; Pick Cricket Teams
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-xl mx-auto">
                            Three easy steps to divide players or generate a cricket team
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 max-w-4xl mx-auto">
                        {[
                            { num: "1", bg: "from-blue-50 to-indigo-50", border: "border-blue-200", numBg: "bg-blue-600", title: "Add Players or Teams", desc: "Type your player names using 'Bulk Add' to divide squads, or use the pre-loaded 10 international cricket nations." },
                            { num: "2", bg: "from-green-50 to-emerald-50", border: "border-green-200", numBg: "bg-green-600", title: "Spin the Wheel", desc: "Click Spin! The wheel uses cryptographic randomness (Web Crypto API) to select a player or nation with 100% fair odds." },
                            { num: "3", bg: "from-amber-50 to-yellow-50", border: "border-amber-200", numBg: "bg-amber-600", title: "Divide & Take the Field", desc: "Assign alternate picks to Team A and Team B. Remove selected players to build two balanced squads in under 60 seconds!" },
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
                            Why Cricketers &amp; Coaches Love This Tool
                        </h2>
                        <p className="text-sm text-gray-600 max-w-2xl mx-auto">Fast, provably fair, and tailored for street matches, turf box cricket, and tournament pools</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
                        {[
                            { icon: <IoShuffleOutline className="text-xl text-blue-600" />, ibg: "bg-blue-100", title: "Balanced Team Divider", desc: "Easily split 10, 12, or 22 players into two equal squads for gully cricket, box turf matches, and school games." },
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-emerald-600" />, ibg: "bg-emerald-100", title: "Cryptographically Fair", desc: "Powered by the Web Crypto API. Every player and team has mathematically equal odds with zero favoritism." },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, ibg: "bg-amber-100", title: "Instant & Free Forever", desc: "No signup, no downloads, and works instantly on mobile at the ground, park, or beach without delays." },
                            { icon: <IoPeopleOutline className="text-xl text-purple-600" />, ibg: "bg-purple-100", title: "Batting Order Decider", desc: "Settle lineup arguments! Spin all 11 player names to establish a fair batting rotation from opener to #11." },
                            { icon: <IoSettingsOutline className="text-xl text-rose-600" />, ibg: "bg-rose-100", title: "Fully Customizable", desc: "Swap international teams for IPL franchises, Big Bash clubs, county sides, or your local club squad." },
                            { icon: <IoTrophyOutline className="text-xl text-cyan-600" />, ibg: "bg-cyan-100", title: "Tournament Draw Pools", desc: "Draw participating clubs randomly into Group A and Group B pools for local cricket championships." },
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

            {/* UNIQUE AUTHORITY SECTION: Cricket Team Generator & Squad Balancing Playbook */}
            <section className="py-10 lg:py-16 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-8 sm:mb-12">
                        <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block mb-3">
                            Squad Selection &amp; Records
                        </span>
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Cricket Team Generator Playbook: How to Divide &amp; Split Players Fairly
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                            Stop fighting over who gets the best batsman or strike bowler. Here is the proven mathematical framework to divide any group into two balanced cricket teams.
                        </p>
                    </div>

                    {/* Table 1: Squad Division Matrix */}
                    <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 p-5 sm:p-7 rounded-2xl border border-blue-200 shadow-sm mb-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                            <h3 className="text-lg sm:text-xl font-bold text-blue-950 flex items-center gap-2">
                                <span>🏏</span> Cricket Squad Division Matrix (By Match Format)
                            </h3>
                            <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-1 rounded-full self-start sm:self-auto">
                                2 Balanced Teams
                            </span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b border-blue-200 text-blue-900 font-semibold">
                                        <th className="py-2.5">Format</th>
                                        <th className="py-2.5">Total Players</th>
                                        <th className="py-2.5">Team A Squad</th>
                                        <th className="py-2.5">Team B Squad</th>
                                        <th className="py-2.5">Recommended Selection Method</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-blue-100 text-gray-800">
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Box Turf Cricket</td>
                                        <td className="py-2.5 font-mono font-semibold">12 Players</td>
                                        <td className="py-2.5 text-blue-700 font-semibold">6 Players</td>
                                        <td className="py-2.5 text-blue-700 font-semibold">6 Players</td>
                                        <td className="py-2.5 text-gray-600">Alternate wheel spin (Pick 1 to A, Pick 2 to B)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Gully / Street Cricket</td>
                                        <td className="py-2.5 font-mono font-semibold">14 to 16 Players</td>
                                        <td className="py-2.5 text-blue-700 font-semibold">7 to 8 Players</td>
                                        <td className="py-2.5 text-blue-700 font-semibold">7 to 8 Players</td>
                                        <td className="py-2.5 text-gray-600">Seed 2 captains, then wheel-spin all remaining players</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Full Ground Match</td>
                                        <td className="py-2.5 font-mono font-semibold">22 Players</td>
                                        <td className="py-2.5 text-blue-700 font-semibold">11 Players (XI)</td>
                                        <td className="py-2.5 text-blue-700 font-semibold">11 Players (XI)</td>
                                        <td className="py-2.5 text-gray-600">Bucket into All-Rounders, Batsmen, Bowlers &amp; spin each bucket</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Tournament Pool Draw</td>
                                        <td className="py-2.5 font-mono font-semibold">8 to 16 Clubs</td>
                                        <td className="py-2.5 text-emerald-700 font-semibold">Group A</td>
                                        <td className="py-2.5 text-emerald-700 font-semibold">Group B</td>
                                        <td className="py-2.5 text-gray-600">Elimination draw: Alternate groups on each spin</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Table 2: International ICC Full Member Records */}
                    <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white p-5 sm:p-8 rounded-2xl shadow-md mb-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-lg sm:text-2xl font-bold flex items-center gap-2">
                                    <span>🌍</span> ICC Full Member Cricket Nations &amp; World Trophies
                                </h3>
                                <p className="text-xs sm:text-sm text-blue-200 mt-1">
                                    International teams pre-loaded on our cricket wheel with historical World Cup honours:
                                </p>
                            </div>
                            <div className="text-xs bg-blue-800/60 border border-blue-700/60 px-3.5 py-2 rounded-xl text-blue-200 self-start md:self-auto">
                                10 Full ICC Members
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b border-blue-800 text-blue-300">
                                        <th className="py-2">Nation</th>
                                        <th className="py-2">Short Code</th>
                                        <th className="py-2">ODI World Cups</th>
                                        <th className="py-2">T20 World Cups</th>
                                        <th className="py-2">WTC Titles</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-blue-900/60 text-blue-100">
                                    <tr><td className="py-2 font-bold text-amber-400">Australia 🇦🇺</td><td className="py-2 font-mono text-blue-300">AUS</td><td className="py-2 font-bold text-emerald-400">6 Titles (Record)</td><td className="py-2">1 Title (2021)</td><td className="py-2 font-bold text-amber-300">1 Title (2023)</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">India 🇮🇳</td><td className="py-2 font-mono text-blue-300">IND</td><td className="py-2 font-bold text-emerald-400">2 Titles (1983, 2011)</td><td className="py-2 font-bold text-emerald-400">2 Titles (2007, 2024)</td><td className="py-2">2x Finalists</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">West Indies 🏏</td><td className="py-2 font-mono text-blue-300">WI</td><td className="py-2 font-bold text-emerald-400">2 Titles (1975, 1979)</td><td className="py-2 font-bold text-emerald-400">2 Titles (2012, 2016)</td><td className="py-2 text-gray-400">—</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</td><td className="py-2 font-mono text-blue-300">ENG</td><td className="py-2">1 Title (2019)</td><td className="py-2 font-bold text-emerald-400">2 Titles (2010, 2022)</td><td className="py-2 text-gray-400">—</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">Pakistan 🇵🇰</td><td className="py-2 font-mono text-blue-300">PAK</td><td className="py-2">1 Title (1992)</td><td className="py-2">1 Title (2009)</td><td className="py-2 text-gray-400">—</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">Sri Lanka 🇱🇰</td><td className="py-2 font-mono text-blue-300">SL</td><td className="py-2">1 Title (1996)</td><td className="py-2">1 Title (2014)</td><td className="py-2 text-gray-400">—</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">New Zealand 🇳🇿</td><td className="py-2 font-mono text-blue-300">NZ</td><td className="py-2">2x Finalists</td><td className="py-2">1x Finalist</td><td className="py-2 font-bold text-amber-300">1 Title (2021)</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">South Africa 🇿🇦</td><td className="py-2 font-mono text-blue-300">SA</td><td className="py-2">5x Semifinalists</td><td className="py-2">1x Finalist (2024)</td><td className="py-2 text-gray-400">—</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">Bangladesh 🇧🇩</td><td className="py-2 font-mono text-blue-300">BAN</td><td className="py-2 text-gray-400">Quarterfinalists</td><td className="py-2 text-gray-400">Super 8s</td><td className="py-2 text-gray-400">—</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">Afghanistan 🇦🇫</td><td className="py-2 font-mono text-blue-300">AFG</td><td className="py-2 text-gray-400">6th Place (2023)</td><td className="py-2 text-emerald-400 font-semibold">Semifinalists (2024)</td><td className="py-2 text-gray-400">—</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Ways Cricket Fans Search & Use This Wheel */}
            <section className="py-10 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center md:mb-10 mb-6">
                        <div className="inline-block bg-blue-100 text-blue-800 font-semibold text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                            🏏 Practical Cricket Use Cases
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Popular Ways Cricket Players &amp; Fans Use This Wheel
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            From neighborhood street cricket to fantasy auction drafts and match tosses — how cricketers spin.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                query: "Divide Players into Two Teams",
                                keyword: "divide players into teams cricket generator",
                                icon: "🏏",
                                tag: "Street Cricket",
                                tagColor: "bg-blue-100 text-blue-800",
                                desc: "At the park, playground, or box turf, players spin on a mobile phone to fairly divide players into two balanced squads without captain favoritism.",
                            },
                            {
                                query: "Fantasy Cricket Auction Draft Order",
                                keyword: "fantasy cricket team picker draft order",
                                icon: "📊",
                                tag: "Fantasy Hoops",
                                tagColor: "bg-indigo-100 text-indigo-700",
                                desc: "Dream11 and fantasy cricket groups use the wheel to determine bidding order, assign franchise allegiances, or pick differential captain picks in tied matches.",
                            },
                            {
                                query: "Digital Toss & Match Decider",
                                keyword: "cricket toss simulator bat or bowl first",
                                icon: "🪙",
                                tag: "Match Toss",
                                tagColor: "bg-yellow-100 text-yellow-800",
                                desc: "Forgot a coin at the ground? Teams spin a two-option wheel (Bat First vs Bowl First) for an indisputable, tamper-proof digital match toss.",
                            },
                            {
                                query: "Fair Batting & Bowling Rotation",
                                keyword: "cricket batting order generator picker",
                                icon: "🔢",
                                tag: "Lineup Management",
                                tagColor: "bg-purple-100 text-purple-700",
                                desc: "In casual friend matches, captains enter all player names and spin to assign batting positions from opener to #11, ensuring everyone gets a fair turn to bat.",
                            },
                            {
                                query: "World Cup & Tournament Group Draws",
                                keyword: "cricket tournament draw pool generator",
                                icon: "🌍",
                                tag: "Tournaments",
                                tagColor: "bg-emerald-100 text-emerald-700",
                                desc: "Organizers of local box cricket and tennis ball tournaments spin participating clubs into Group A and Group B pools with zero seeding bias.",
                            },
                            {
                                query: "Player of the Match (MVP) Decider",
                                keyword: "cricket man of the match picker wheel",
                                icon: "⭐",
                                tag: "Awards & MVP",
                                tagColor: "bg-rose-100 text-rose-700",
                                desc: "When two players had equally great performances with both bat and ball, the committee uses the wheel for an impartial, celebratory MVP pick.",
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

            {/* In-Depth SEO Guide */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl space-y-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
                        The Complete Guide to Picking Cricket Teams &amp; Dividing Players Fairly
                    </h2>
                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            Every cricket lover has experienced it: standing at the local ground, maidan, or box turf venue, arguing about team balance. <em>&quot;Team A has all the fast bowlers!&quot;</em> or <em>&quot;The captains picked their best friends first!&quot;</em> A transparent, <strong>random cricket team picker and player divider</strong> removes all disputes by placing squad selection into the hands of pure, unbiased mathematics.
                        </p>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            How to Use as an Online Cricket Team Maker
                        </h3>
                        <p>
                            Whether you need to <strong>make two cricket teams</strong> for a weekend match or generate random tournament draw pools, SpinPickOnline offers full customization:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>For 2-Team Matches:</strong> Enter all 12, 14, or 22 player names. Click Spin to assign odd-numbered spins to Team A and even-numbered spins to Team B.
                            </li>
                            <li>
                                <strong>For Batting Lineup Generation:</strong> Put player names on the wheel and spin to establish the exact batting order from Opener #1 down to #11.
                            </li>
                            <li>
                                <strong>For Match Toss (Bat or Bowl First):</strong> When you have no physical rupee coin or quarter at the pitch, spin between two slices (Bat / Bowl) for an indisputable digital coin toss.
                            </li>
                            <li>
                                <strong>For Tournament Draws:</strong> Box cricket and corporate league organizers spin participating teams to divide them into Group A and Group B pools.
                            </li>
                        </ul>

                        <p className="pt-2">
                            For dedicated Indian Premier League team selection, spin our{" "}
                            <Link href="/ipl-team-wheel" className="text-blue-600 hover:underline font-semibold">IPL Team Wheel</Link>{" "}
                            with all 10 current franchises. Also check out the{" "}
                            <Link href="/football-club-picker" className="text-blue-600 hover:underline font-semibold">Football Club Picker</Link>,{" "}
                            <Link href="/nba-team-wheel" className="text-blue-600 hover:underline font-semibold">NBA Team Wheel</Link>, or the{" "}
                            <Link href="/random-sports-team-generator" className="text-blue-600 hover:underline font-semibold">Random Sports Team Generator</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Accordion FAQs */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                        Frequently Asked Questions About Cricket Team Selection
                    </h2>
                    <div className="space-y-3">
                        {[
                            {
                                q: "How do I split players into two teams with this wheel?",
                                a: "Click 'Bulk Add' and paste your list of player names. Spin the wheel: the 1st player picked joins Team A, the 2nd joins Team B, the 3rd joins Team A, and so forth. Remove each player after spinning to quickly divide the squad into two balanced teams.",
                                color: "bg-blue-500"
                            },
                            {
                                q: "Which international cricket teams are pre-loaded?",
                                a: "All 10 ICC Full Member nations: India, Australia, England, Pakistan, South Africa, New Zealand, West Indies, Sri Lanka, Bangladesh, and Afghanistan. You can spin with them or replace them with local club or IPL names.",
                                color: "bg-indigo-500"
                            },
                            {
                                q: "Can I use this for tournament group draws?",
                                a: "Yes! Add all participating cricket club names and spin to draw teams into Group A and Group B pools. This eliminates accusations of rigged tournament brackets.",
                                color: "bg-emerald-500"
                            },
                            {
                                q: "How can I use this as a cricket match toss simulator?",
                                a: "Simply edit the wheel to have two entries: 'Bat First' and 'Bowl First'. Spin the wheel right on your mobile screen at the pitch for an instantaneous, fair match toss.",
                                color: "bg-amber-500"
                            },
                            {
                                q: "Is this cricket team picker 100% free and fair?",
                                a: "Yes, completely free forever with no signup or app installation needed. Every spin uses the browser's cryptographic Web Crypto API, guaranteeing equal mathematical probability for every player.",
                                color: "bg-purple-500"
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
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            Explore More Sports Wheels
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/ipl-team-wheel", label: "🏏 IPL Team Wheel" },
                            { href: "/football-club-picker", label: "⚽ Football Club Picker" },
                            { href: "/nba-team-wheel", label: "🏀 NBA Team Wheel" },
                            { href: "/nfl-team-wheel", label: "🏈 NFL Team Wheel" },
                            { href: "/random-sports-team-generator", label: "🏆 Sports Team Generator" },
                            { href: "/tournament-draw-generator", label: "🎯 Tournament Draws" },
                            { href: "/team-picker", label: "👥 Team Picker" },
                            { href: "/flip-a-coin", label: "🪙 Flip a Coin" },
                            { href: "/dice-roller", label: "🎲 Dice Roller" },
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
