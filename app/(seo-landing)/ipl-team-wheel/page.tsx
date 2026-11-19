import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import { generateMetadata as genMeta, generateFAQSchema, generateWebApplicationSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { IoTrophyOutline, IoShieldCheckmarkOutline, IoFlashOutline, IoPeopleOutline, IoSettingsOutline, IoStarOutline } from "react-icons/io5";

export const metadata: Metadata = genMeta({
    title: "IPL Team Wheel – Spin to Pick All 10 IPL Teams (Indian Premier League)",
    description: "Spin the IPL team wheel to randomly pick an Indian Premier League franchise. All 10 IPL teams pre-loaded with official colors. Perfect for fantasy cricket & match predictions!",
    canonical: "/ipl-team-wheel",
});

const DEFAULT_ENTRIES = [
    { id: "1", label: "CSK 💛", color: "#F5C518" },
    { id: "2", label: "MI 💙", color: "#004BA0" },
    { id: "3", label: "RCB ❤️", color: "#D32F2F" },
    { id: "4", label: "KKR 💜", color: "#3B2071" },
    { id: "5", label: "SRH 🧡", color: "#F26522" },
    { id: "6", label: "DC 🔵", color: "#17479E" },
    { id: "7", label: "RR 💗", color: "#EA1A85" },
    { id: "8", label: "PBKS 🔴", color: "#ED1B24" },
    { id: "9", label: "GT 🩵", color: "#1C2C5B" },
    { id: "10", label: "LSG 🩶", color: "#4AA5D0" },
];

export default function IplTeamWheelPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "IPL Team Wheel – Random IPL Franchise Picker",
        url: `${SITE_CONFIG.url}/ipl-team-wheel`,
        description: "Free online Indian Premier League team wheel spinner. Spin to randomly pick any of the 10 IPL franchises for fantasy cricket drafts, match predictions, and games.",
        featureList: "IPL team wheel, Wheel of IPL teams, Indian Premier League franchise picker, Random IPL team generator, IPL match today prediction wheel, Fantasy cricket draft order, All 10 IPL teams",
    });

    const faqSchema = generateFAQSchema([
        {
            question: "How many teams play in the Indian Premier League (IPL)?",
            answer: "There are currently 10 teams in the Indian Premier League: Chennai Super Kings (CSK), Mumbai Indians (MI), Kolkata Knight Riders (KKR), Royal Challengers Bengaluru (RCB), Sunrisers Hyderabad (SRH), Rajasthan Royals (RR), Delhi Capitals (DC), Punjab Kings (PBKS), Gujarat Titans (GT), and Lucknow Super Giants (LSG)."
        },
        {
            question: "Which team has won the most IPL championships?",
            answer: "Chennai Super Kings (CSK) and Mumbai Indians (MI) are tied as the most successful franchises in IPL history, with 5 tournament titles each. Kolkata Knight Riders (KKR) is the third most successful team with 3 titles (2012, 2014, 2024)."
        },
        {
            question: "Who are the owners of the 10 IPL franchises?",
            answer: "The 10 IPL teams are owned by major business conglomerates: CSK (Chennai Super Kings Cricket Ltd / N. Srinivasan), MI (Reliance Industries / Mukesh & Nita Ambani), KKR (Red Chillies Entertainment & Mehta Group / Shah Rukh Khan & Juhi Chawla), RCB (United Spirits / Diageo), SRH (Sun TV Network / Kalanithi Maran), RR (Royals Sports Group), DC (JSW & GMR Group), PBKS (Preity Zinta, Ness Wadia, Mohit Burman), GT (CVC Capital Partners), and LSG (RPSG Group / Sanjiv Goenka)."
        },
        {
            question: "How can I use this wheel for IPL match today predictions?",
            answer: "Before any IPL match today, load the two competing teams onto the wheel (or use the full 10-team wheel). Spin the wheel to randomly predict the match winner, toss winner, or which team friends will support during watch parties!"
        },
        {
            question: "What are the Orange Cap and Purple Cap awards in IPL?",
            answer: "The Orange Cap is awarded to the highest run-scorer (most runs) in an IPL season, while the Purple Cap is awarded to the leading wicket-taker (most wickets). You can customize our wheel with top players like Virat Kohli, Ruturaj Gaikwad, Jasprit Bumrah, or Jos Buttler to predict cap winners!"
        },
        {
            question: "How do the IPL points table and playoff standings work?",
            answer: "In the 14-match league stage, teams earn 2 points for a win, 0 for a loss, and 1 for a tie/no result. Ties in points are broken by Net Run Rate (NRR). The top 4 teams qualify for the IPL Playoffs (Qualifier 1, Eliminator, Qualifier 2, and the Grand Final)."
        },
        {
            question: "Can I add retired or former IPL teams to the wheel?",
            answer: "Yes! Click any entry to edit it or add past franchises like Deccan Chargers (2009 champions), Kochi Tuskers Kerala, Pune Warriors India, Rising Pune Supergiant, or Gujarat Lions."
        },
        {
            question: "Is this IPL team wheel 100% fair and random?",
            answer: "Yes! We use the browser's cryptographic Web Crypto API (crypto.getRandomValues). Every IPL franchise has an exactly equal 10.0% probability of being selected with zero weighted bias."
        }
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Pick a Random IPL Team Online",
        description: "Spin the IPL team wheel to randomly pick an Indian Premier League franchise in seconds.",
        steps: [
            { position: 1, name: "View All 10 Franchises", text: "The wheel comes pre-loaded with all 10 active IPL teams with official franchise colors and emojis." },
            { position: 2, name: "Customize If Needed", text: "Add past teams, change short codes to full names, or filter down to today's competing match teams." },
            { position: 3, name: "Spin and Pick", text: "Click Spin! The cryptographic wheel selects a random IPL franchise for fantasy drafts or today's match prediction." },
        ],
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Cricket Team Picker", item: `${SITE_CONFIG.url}/cricket-team-picker` },
        { name: "IPL Team Wheel", item: `${SITE_CONFIG.url}/ipl-team-wheel` },
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Hero + Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-indigo-50/60 to-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            IPL Team Wheel – Spin to Pick All 10 IPL Teams
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Spin the <strong>IPL team wheel</strong> to randomly pick an <strong>Indian Premier League</strong> franchise. All 10 IPL teams are pre-loaded with official colors. Perfect for <strong>IPL match today</strong> predictions, fantasy cricket leagues, gully cricket team draws, and watch party games!
                        </p>
                    </div>
                    <HomeWheel defaultEntries={DEFAULT_ENTRIES} storageKey="iplTeamWheelState" />
                </div>
            </section>

            {/* All 10 IPL Franchises Ready to Spin */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            All 10 IPL Franchises on the Wheel
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-xl mx-auto">
                            Every active Indian Premier League team is pre-configured and ready to spin
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
                        {[
                            { name: "CSK 💛", full: "Chennai Super Kings", titles: "5 Titles", color: "bg-yellow-400 text-yellow-950" },
                            { name: "MI 💙", full: "Mumbai Indians", titles: "5 Titles", color: "bg-blue-700 text-white" },
                            { name: "KKR 💜", full: "Kolkata Knight Riders", titles: "3 Titles", color: "bg-purple-800 text-white" },
                            { name: "SRH 🧡", full: "Sunrisers Hyderabad", titles: "2 Titles", color: "bg-orange-500 text-white" },
                            { name: "RR 💗", full: "Rajasthan Royals", titles: "1 Title", color: "bg-pink-600 text-white" },
                            { name: "GT 🩵", full: "Gujarat Titans", titles: "1 Title", color: "bg-slate-800 text-white" },
                            { name: "RCB ❤️", full: "Royal Challengers", titles: "3x Finalists", color: "bg-red-600 text-white" },
                            { name: "DC 🔵", full: "Delhi Capitals", titles: "1x Finalists", color: "bg-blue-600 text-white" },
                            { name: "PBKS 🔴", full: "Punjab Kings", titles: "1x Finalists", color: "bg-red-500 text-white" },
                            { name: "LSG 🩶", full: "Lucknow Super Giants", titles: "2x Playoffs", color: "bg-cyan-600 text-white" },
                        ].map((team) => (
                            <div key={team.name} className={`${team.color} p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow`}>
                                <p className="font-bold text-lg">{team.name}</p>
                                <p className="text-xs opacity-90 mt-1">{team.full}</p>
                                <span className="inline-block mt-2 text-[10px] font-semibold bg-black/20 px-2 py-0.5 rounded-full">
                                    {team.titles}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UNIQUE AUTHORITY SECTION: Master IPL Franchises Directory, Owners & Playoff Matrix */}
            <section className="py-10 lg:py-16 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-8 sm:mb-12">
                        <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 inline-block mb-3">
                            IPL Reference &amp; Records
                        </span>
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            All 10 IPL Franchises Master Guide: Trophies, Owners &amp; Stadiums
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                            The complete reference directory of all 10 Indian Premier League teams — championships won, franchise owners, home grounds, and tournament standings rules.
                        </p>
                    </div>

                    {/* Table 1: Complete Directory Table */}
                    <div className="bg-gradient-to-br from-indigo-50/50 to-blue-50/30 p-5 sm:p-7 rounded-2xl border border-indigo-200 shadow-sm mb-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                            <h3 className="text-lg sm:text-xl font-bold text-indigo-950 flex items-center gap-2">
                                <span>🏆</span> Indian Premier League Franchise Directory
                            </h3>
                            <span className="text-xs bg-indigo-100 text-indigo-800 font-semibold px-2.5 py-1 rounded-full self-start sm:self-auto">
                                10 Franchises
                            </span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b border-indigo-200 text-indigo-900 font-semibold">
                                        <th className="py-2.5">Franchise</th>
                                        <th className="py-2.5">Code</th>
                                        <th className="py-2.5">IPL Titles Won</th>
                                        <th className="py-2.5">Franchise Owners</th>
                                        <th className="py-2.5">Home Stadium &amp; City</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-indigo-100 text-gray-800">
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Chennai Super Kings</td>
                                        <td className="py-2.5 font-mono text-indigo-600 font-bold">CSK</td>
                                        <td className="py-2.5 font-bold text-amber-600">5 (2010, 11, 18, 21, 23)</td>
                                        <td className="py-2.5 text-gray-600">Chennai Super Kings Cricket Ltd / N. Srinivasan</td>
                                        <td className="py-2.5 text-gray-600">MA Chidambaram Stadium (Chepauk), Chennai</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Mumbai Indians</td>
                                        <td className="py-2.5 font-mono text-indigo-600 font-bold">MI</td>
                                        <td className="py-2.5 font-bold text-amber-600">5 (2013, 15, 17, 19, 20)</td>
                                        <td className="py-2.5 text-gray-600">Reliance Industries / Mukesh &amp; Nita Ambani</td>
                                        <td className="py-2.5 text-gray-600">Wankhede Stadium, Mumbai</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Kolkata Knight Riders</td>
                                        <td className="py-2.5 font-mono text-indigo-600 font-bold">KKR</td>
                                        <td className="py-2.5 font-bold text-amber-600">3 (2012, 2014, 2024)</td>
                                        <td className="py-2.5 text-gray-600">Red Chillies Ent. &amp; Mehta Group (Shah Rukh Khan)</td>
                                        <td className="py-2.5 text-gray-600">Eden Gardens, Kolkata</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Sunrisers Hyderabad</td>
                                        <td className="py-2.5 font-mono text-indigo-600 font-bold">SRH</td>
                                        <td className="py-2.5 font-bold text-amber-600">2 (2009*, 2016)</td>
                                        <td className="py-2.5 text-gray-600">Sun TV Network / Kalanithi Maran</td>
                                        <td className="py-2.5 text-gray-600">Rajiv Gandhi Intl Cricket Stadium, Hyderabad</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Rajasthan Royals</td>
                                        <td className="py-2.5 font-mono text-indigo-600 font-bold">RR</td>
                                        <td className="py-2.5 font-bold text-amber-600">1 (2008 Inaugural)</td>
                                        <td className="py-2.5 text-gray-600">Royals Sports Group (Manoj Badale)</td>
                                        <td className="py-2.5 text-gray-600">Sawai Mansingh Stadium, Jaipur</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Gujarat Titans</td>
                                        <td className="py-2.5 font-mono text-indigo-600 font-bold">GT</td>
                                        <td className="py-2.5 font-bold text-amber-600">1 (2022 Debut)</td>
                                        <td className="py-2.5 text-gray-600">CVC Capital Partners (Irelia Company)</td>
                                        <td className="py-2.5 text-gray-600">Narendra Modi Stadium, Ahmedabad</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Royal Challengers Bengaluru</td>
                                        <td className="py-2.5 font-mono text-indigo-600 font-bold">RCB</td>
                                        <td className="py-2.5 text-gray-500">3x Runners-Up</td>
                                        <td className="py-2.5 text-gray-600">United Spirits / Diageo</td>
                                        <td className="py-2.5 text-gray-600">M. Chinnaswamy Stadium, Bengaluru</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Delhi Capitals</td>
                                        <td className="py-2.5 font-mono text-indigo-600 font-bold">DC</td>
                                        <td className="py-2.5 text-gray-500">1x Runners-Up (2020)</td>
                                        <td className="py-2.5 text-gray-600">JSW Sports &amp; GMR Group</td>
                                        <td className="py-2.5 text-gray-600">Arun Jaitley Stadium, New Delhi</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Punjab Kings</td>
                                        <td className="py-2.5 font-mono text-indigo-600 font-bold">PBKS</td>
                                        <td className="py-2.5 text-gray-500">1x Runners-Up (2014)</td>
                                        <td className="py-2.5 text-gray-600">Preity Zinta, Ness Wadia, Mohit Burman</td>
                                        <td className="py-2.5 text-gray-600">Maharaja Yadavindra Singh Stadium, Mullanpur</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 font-bold text-gray-900">Lucknow Super Giants</td>
                                        <td className="py-2.5 font-mono text-indigo-600 font-bold">LSG</td>
                                        <td className="py-2.5 text-gray-500">2x Playoffs (2022, 23)</td>
                                        <td className="py-2.5 text-gray-600">RPSG Group / Sanjiv Goenka</td>
                                        <td className="py-2.5 text-gray-600">BRSABV Ekana Cricket Stadium, Lucknow</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-3 text-xs text-gray-500">
                            *SRH won in 2016; franchise heritage includes 2009 title won by Deccan Chargers.
                        </p>
                    </div>

                    {/* Table 2: IPL Points Table Rules & Playoff Format */}
                    <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-5 sm:p-8 rounded-2xl shadow-md mb-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-lg sm:text-2xl font-bold flex items-center gap-2">
                                    <span>📊</span> How the IPL Points Table &amp; Playoff System Works
                                </h3>
                                <p className="text-xs sm:text-sm text-indigo-200 mt-1">
                                    The mathematics of qualification: points system, Net Run Rate (NRR), and the 4-match playoff bracket:
                                </p>
                            </div>
                            <div className="text-xs bg-indigo-800/60 border border-indigo-700/60 px-3.5 py-2 rounded-xl text-indigo-200 self-start md:self-auto">
                                League Stage: <strong>14 Matches Per Team</strong>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                            <div className="bg-indigo-900/40 p-4 rounded-xl border border-indigo-800/60">
                                <h4 className="font-bold text-amber-300 text-sm mb-2">Points &amp; Standings System:</h4>
                                <ul className="space-y-1.5 text-indigo-200">
                                    <li>• <strong>Win:</strong> 2 Points</li>
                                    <li>• <strong>No Result / Abandoned:</strong> 1 Point each</li>
                                    <li>• <strong>Loss:</strong> 0 Points</li>
                                    <li>• <strong>Tiebreaker (NRR):</strong> Net Run Rate = (Total runs scored / Total overs faced) − (Total runs conceded / Total overs bowled).</li>
                                </ul>
                            </div>
                            <div className="bg-indigo-900/40 p-4 rounded-xl border border-indigo-800/60">
                                <h4 className="font-bold text-amber-300 text-sm mb-2">The IPL Playoff System (Top 4):</h4>
                                <ul className="space-y-1.5 text-indigo-200">
                                    <li>• <strong>Qualifier 1 (Rank 1 vs 2):</strong> Winner goes straight to Final; loser gets second chance in Qualifier 2.</li>
                                    <li>• <strong>Eliminator (Rank 3 vs 4):</strong> Winner advances to Qualifier 2; loser is eliminated from tournament.</li>
                                    <li>• <strong>Qualifier 2:</strong> Loser of Q1 plays Winner of Eliminator for the second Final spot.</li>
                                    <li>• <strong>Grand Final:</strong> Winner of Q1 vs Winner of Q2 for the IPL Trophy!</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-8 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Cricket Fans Love This Wheel
                        </h2>
                        <p className="text-sm text-gray-600 max-w-2xl mx-auto">Fast, provably fair, and customized for Indian Premier League watch parties and fantasy games</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
                        {[
                            { icon: <IoStarOutline className="text-xl text-yellow-600" />, ibg: "bg-yellow-100", title: "All 10 Franchises", desc: "Every active IPL team is pre-loaded with authentic franchise colors. Ready to spin right out of the box." },
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-emerald-600" />, ibg: "bg-emerald-100", title: "Mathematically Fair", desc: "Powered by the Web Crypto API. Each team has an exact, unbiased 10.0% probability on every spin." },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, ibg: "bg-amber-100", title: "Instant & 100% Free", desc: "No signup, no app download. Open the page and spin immediately on iPhone, Android, tablet, or desktop." },
                            { icon: <IoPeopleOutline className="text-xl text-purple-600" />, ibg: "bg-purple-100", title: "Fantasy Auction Drafts", desc: "Spin to determine auction paddle order, draft lottery slots, or random team assignments for fantasy leagues." },
                            { icon: <IoSettingsOutline className="text-xl text-rose-600" />, ibg: "bg-rose-100", title: "Fully Customizable", desc: "Add historic teams (Deccan Chargers, Rising Pune Supergiant), change abbreviations to full names, or add player names." },
                            { icon: <IoTrophyOutline className="text-xl text-blue-600" />, ibg: "bg-blue-100", title: "Today Match Predictions", desc: "Assign random teams to friends for today IPL match predictions and tournament watch party challenges." },
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

            {/* Popular Ways IPL Fans Search & Use This Wheel */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center md:mb-10 mb-6">
                        <div className="inline-block bg-indigo-100 text-indigo-800 font-semibold text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                            🏏 Top IPL Queries &amp; Search Intent
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Popular Ways Cricket Fans Use the IPL Wheel
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            From fantasy auction lotteries to match prediction wagers and gaming nights — here is how IPL enthusiasts spin every season.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                query: "Which IPL Team Should I Support?",
                                keyword: "which IPL team should I support wheel",
                                icon: "💛",
                                tag: "Fan Decider",
                                tagColor: "bg-yellow-100 text-yellow-800",
                                desc: "New cricket watchers or neutral fans spin to adopt an IPL franchise for the entire season — whether landing on Dhoni's CSK, Rohit's MI, or Kohli's RCB.",
                            },
                            {
                                query: "Cricket 24 & Real Cricket Matchups",
                                keyword: "IPL team randomizer for video games",
                                icon: "🎮",
                                tag: "Gaming & Streams",
                                tagColor: "bg-purple-100 text-purple-700",
                                desc: "Content creators and gamers streaming Cricket 24 or Real Cricket spin the wheel to pick random IPL franchises for head-to-head multiplayer challenges.",
                            },
                            {
                                query: "IPL Fantasy Draft & Auction Priority",
                                keyword: "IPL fantasy auction draft order picker",
                                icon: "📊",
                                tag: "Fantasy IPL",
                                tagColor: "bg-blue-100 text-blue-700",
                                desc: "Fantasy leagues spin to assign draft slots, decide auction paddle order, or randomly allocate team franchises for season-long leaderboard contests.",
                            },
                            {
                                query: "IPL Watch Party Prediction Games",
                                keyword: "IPL match prediction game wheel",
                                icon: "🍿",
                                tag: "Watch Parties",
                                tagColor: "bg-pink-100 text-pink-700",
                                desc: "Friends gathering for big match nights spin the wheel to assign teams, wager lighthearted party dares, or make unpredictable scoreline forecasts.",
                            },
                            {
                                query: "Office & College IPL Pool Contests",
                                keyword: "office IPL pool random team allocator",
                                icon: "🏢",
                                tag: "Corporate Pools",
                                tagColor: "bg-emerald-100 text-emerald-700",
                                desc: "Companies and college hostels assign random IPL teams to colleagues and dorm rooms, running tournament-long sweepstakes with fair lottery draws.",
                            },
                            {
                                query: "Marquee Derby Decider (CSK vs MI)",
                                keyword: "IPL derby match selector wheel",
                                icon: "🔥",
                                tag: "Rivalry Clashes",
                                tagColor: "bg-rose-100 text-rose-700",
                                desc: "Settle friend group arguments on which marquee derby to stream or simulate during weekend cricket gaming sessions and watch parties.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-lg transition-all flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${item.tagColor}`}>{item.tag}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1 text-base">{item.query}</h3>
                                    <p className="text-xs text-indigo-600 font-mono mb-2.5">{item.keyword}</p>
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
                        The Complete Guide to IPL Teams, Standings &amp; Random Selection
                    </h2>
                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            The <strong>Indian Premier League (IPL)</strong> is the biggest Twenty20 cricket tournament on the planet. Since its inaugural season in 2008, the IPL has transformed modern sports entertainment, attracting the world&apos;s best international cricketers, record-breaking broadcast viewership, and unmatched fan devotion.
                        </p>
                        <p>
                            Whether you are predicting the winner of an <strong>IPL match today</strong>, managing a fantasy cricket league with friends, or deciding which jersey to wear on game day, an <strong>IPL team wheel</strong> adds fair, unbiased excitement. Instead of picking the same predictable favorites, let the wheel decide!
                        </p>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            How the 10-Franchise Indian Premier League Works
                        </h3>
                        <p>
                            In 2022, the IPL expanded from 8 to 10 teams with the addition of the Gujarat Titans and Lucknow Super Giants. In the tournament, teams play a grueling 14-game league schedule where wins earn 2 points, ties earn 1 point, and net run rate (NRR) separates closely matched contenders on the <strong>IPL points table</strong>.
                        </p>
                        <p>
                            The top 4 teams qualify for the IPL Playoffs. The first and second-ranked teams clash in <strong>Qualifier 1</strong>, with the victor earning an automatic ticket to the Grand Final. The loser gets a second chance in <strong>Qualifier 2</strong> against the winner of the high-pressure <strong>Eliminator</strong> match between the 3rd and 4th place teams.
                        </p>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            Orange Cap &amp; Purple Cap: Celebrating IPL Excellence
                        </h3>
                        <p>
                            Beyond the championship trophy, two prestigious individual awards define every IPL season:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>The Orange Cap:</strong> Awarded to the batsman with the <em>most runs</em> in the tournament. Cricket legends like Virat Kohli (holding the all-time single-season record of 973 runs), David Warner, Chris Gayle, Jos Buttler, and Ruturaj Gaikwad have famously worn the Orange Cap.
                            </li>
                            <li>
                                <strong>The Purple Cap:</strong> Awarded to the bowler who takes the <em>most wickets</em> across the season. Spearheaded by elite strike bowlers like Jasprit Bumrah, Yuzvendra Chahal, Dwayne Bravo, and Harshal Patel.
                            </li>
                        </ul>

                        <p className="pt-2">
                            Explore more sports randomizers: spin our{" "}
                            <Link href="/cricket-team-picker" className="text-indigo-600 hover:underline font-semibold">Cricket Team Picker</Link>{" "}
                            with all international cricket teams, the{" "}
                            <Link href="/nba-team-wheel" className="text-indigo-600 hover:underline font-semibold">NBA Team Wheel</Link>,{" "}
                            <Link href="/nfl-team-wheel" className="text-indigo-600 hover:underline font-semibold">NFL Team Wheel</Link>, or the{" "}
                            <Link href="/random-sports-team-generator" className="text-indigo-600 hover:underline font-semibold">Random Sports Team Generator</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Accordion FAQs */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                        Frequently Asked Questions About the IPL Team Wheel
                    </h2>
                    <div className="space-y-3">
                        {[
                            {
                                q: "Which 10 teams are on the IPL wheel?",
                                a: "All 10 active IPL franchises are pre-loaded: Chennai Super Kings (CSK), Mumbai Indians (MI), Royal Challengers Bengaluru (RCB), Kolkata Knight Riders (KKR), Sunrisers Hyderabad (SRH), Delhi Capitals (DC), Rajasthan Royals (RR), Punjab Kings (PBKS), Gujarat Titans (GT), and Lucknow Super Giants (LSG).",
                                color: "bg-indigo-500"
                            },
                            {
                                q: "Which team has won the most IPL titles?",
                                a: "Chennai Super Kings (CSK) and Mumbai Indians (MI) are tied for the most IPL championships with 5 titles each. KKR has won 3 titles, SRH has 2 titles (including 2009 as Deccan Chargers), and RR and GT have 1 title each.",
                                color: "bg-yellow-500"
                            },
                            {
                                q: "Can I use this for IPL match today predictions?",
                                a: "Yes! Simply edit the wheel to keep only the two teams playing in today's IPL match, then spin to predict the match winner or toss outcome during watch parties with friends.",
                                color: "bg-emerald-500"
                            },
                            {
                                q: "How do I use this for fantasy cricket leagues?",
                                a: "Spin the wheel to assign random IPL franchises to each member of your fantasy league, or use it to decide auction bidding order before player auctions begin.",
                                color: "bg-purple-500"
                            },
                            {
                                q: "Can I add former IPL teams like Deccan Chargers or Gujarat Lions?",
                                a: "Yes! Click 'Add Entry' to add any team name with custom colors and emojis. The wheel smoothly recalculates slice angles for any number of teams.",
                                color: "bg-rose-500"
                            },
                            {
                                q: "Is this IPL wheel 100% fair?",
                                a: "Yes! Powered by the Web Crypto API (crypto.getRandomValues), every spin produces cryptographically secure, mathematical entropy with equal 10.0% probability across all franchises.",
                                color: "bg-blue-500"
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
                            { href: "/cricket-team-picker", label: "🏏 Cricket Team Picker" },
                            { href: "/nba-team-wheel", label: "🏀 NBA Team Wheel" },
                            { href: "/nfl-team-wheel", label: "🏈 NFL Team Wheel" },
                            { href: "/football-club-picker", label: "⚽ Football Club Picker" },
                            { href: "/random-sports-team-generator", label: "🏆 Sports Team Generator" },
                            { href: "/tournament-draw-generator", label: "🎯 Tournament Draws" },
                            { href: "/team-picker", label: "👥 Team Picker" },
                            { href: "/flip-a-coin", label: "🪙 Flip a Coin" },
                            { href: "/dice-roller", label: "🎲 Dice Roller" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-all">
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
