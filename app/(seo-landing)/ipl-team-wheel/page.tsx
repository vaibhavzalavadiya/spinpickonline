import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import { generateMetadata as genMeta, generateFAQSchema, generateWebApplicationSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { IoTrophyOutline, IoShieldCheckmarkOutline, IoFlashOutline, IoPeopleOutline, IoSettingsOutline, IoStarOutline } from "react-icons/io5";

export const metadata: Metadata = genMeta({
    title: "IPL Team Wheel – Spin to Pick an IPL Franchise Free",
    description: "Spin the IPL team wheel and randomly pick an Indian Premier League franchise. All 10 IPL teams pre-loaded. Free, fair, instant. No signup required.",
    canonical: "/ipl-team-wheel",
});

const DEFAULT_ENTRIES = [
    { id: "1", label: "CSK 💛", color: "#f5c518" },
    { id: "2", label: "MI 💙", color: "#004ba0" },
    { id: "3", label: "RCB ❤️", color: "#d32f2f" },
    { id: "4", label: "KKR 💜", color: "#3b2071" },
    { id: "5", label: "SRH 🧡", color: "#f26522" },
    { id: "6", label: "DC 🔵", color: "#17479e" },
    { id: "7", label: "RR 💗", color: "#ea1a85" },
    { id: "8", label: "PBKS 🔴", color: "#ed1b24" },
    { id: "9", label: "GT 🩵", color: "#1c2c5b" },
    { id: "10", label: "LSG 🩶", color: "#4aa5d0" },
];

export default function IplTeamWheelPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "IPL Team Wheel",
        url: `${SITE_CONFIG.url}/ipl-team-wheel`,
        description: "Free IPL team wheel spinner. All 10 Indian Premier League franchises pre-loaded. Spin to randomly pick a team for fantasy drafts, prediction games, and more.",
        featureList: "IPL team wheel, IPL franchise picker, Random IPL team generator, Fantasy IPL draft, IPL prediction game wheel",
    });

    const faqSchema = generateFAQSchema([
        { question: "Which IPL teams are on the wheel?", answer: "All 10 current IPL franchises: Chennai Super Kings (CSK), Mumbai Indians (MI), Royal Challengers Bengaluru (RCB), Kolkata Knight Riders (KKR), Sunrisers Hyderabad (SRH), Delhi Capitals (DC), Rajasthan Royals (RR), Punjab Kings (PBKS), Gujarat Titans (GT), and Lucknow Super Giants (LSG)." },
        { question: "Can I use this for IPL fantasy drafts?", answer: "Absolutely! Spin the wheel to randomly assign IPL teams to players in your fantasy league, determine draft order, or assign teams for prediction contests." },
        { question: "Can I add retired or old IPL teams?", answer: "Yes. Click any entry and edit it. You can add teams like Deccan Chargers, Kochi Tuskers, Rising Pune Supergiant, Gujarat Lions, or any custom team name." },
        { question: "Is the IPL wheel fair for all teams?", answer: "Yes. We use the Web Crypto API for cryptographically secure randomness. Every IPL franchise has an exactly equal 10% chance of being selected." },
        { question: "Can I share the IPL wheel with my cricket group?", answer: "Yes! Generate a shareable link and send it to your IPL fan group on WhatsApp, Telegram, or Discord. They can spin the same wheel." },
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Use the IPL Team Wheel",
        description: "Spin the wheel to randomly pick an IPL franchise in seconds.",
        steps: [
            { position: 1, name: "Open the IPL Wheel", text: "The wheel comes pre-loaded with all 10 current IPL franchises with their colors and emojis." },
            { position: 2, name: "Customize If Needed", text: "Add retired teams, change abbreviations to full names, or remove specific teams you don't want in the draw." },
            { position: 3, name: "Spin and Pick", text: "Press Spin! The wheel randomly selects an IPL franchise. Remove it and spin again for multiple picks." },
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
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            IPL Team Wheel – Spin &amp; Pick a Franchise
                        </h1>
                    </div>
                    <HomeWheel defaultEntries={DEFAULT_ENTRIES} storageKey="iplTeamWheelState" />
                </div>
            </section>

            {/* All IPL Teams */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            All 10 IPL Franchises on the Wheel
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-xl mx-auto">
                            Every current IPL team is ready to spin
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-4xl mx-auto">
                        {[
                            { name: "CSK", full: "Chennai Super Kings", color: "bg-yellow-400", text: "text-yellow-900" },
                            { name: "MI", full: "Mumbai Indians", color: "bg-blue-700", text: "text-white" },
                            { name: "RCB", full: "Royal Challengers", color: "bg-red-600", text: "text-white" },
                            { name: "KKR", full: "Kolkata Knight Riders", color: "bg-purple-800", text: "text-white" },
                            { name: "SRH", full: "Sunrisers Hyderabad", color: "bg-orange-500", text: "text-white" },
                            { name: "DC", full: "Delhi Capitals", color: "bg-blue-600", text: "text-white" },
                            { name: "RR", full: "Rajasthan Royals", color: "bg-pink-600", text: "text-white" },
                            { name: "PBKS", full: "Punjab Kings", color: "bg-red-500", text: "text-white" },
                            { name: "GT", full: "Gujarat Titans", color: "bg-slate-800", text: "text-white" },
                            { name: "LSG", full: "Lucknow Super Giants", color: "bg-cyan-600", text: "text-white" },
                        ].map((team) => (
                            <div key={team.name} className={`${team.color} ${team.text} p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow`}>
                                <p className="font-bold text-lg">{team.name}</p>
                                <p className="text-xs opacity-80 mt-1">{team.full}</p>
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
                            Why IPL Fans Love This Wheel
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
                        {[
                            { icon: <IoStarOutline className="text-xl text-yellow-600" />, ibg: "bg-yellow-100", title: "All 10 Franchises", desc: "Every current IPL team is pre-loaded with authentic team color themes. Ready to spin out of the box." },
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-emerald-600" />, ibg: "bg-emerald-100", title: "Mathematically Fair", desc: "Cryptographic randomness — each team has an exactly equal 10% chance. No hidden bias." },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, ibg: "bg-amber-100", title: "Instant & Free", desc: "No signup, no app download. Open the page and spin. Works perfectly on mobile and desktop." },
                            { icon: <IoPeopleOutline className="text-xl text-purple-600" />, ibg: "bg-purple-100", title: "Fantasy Draft Tool", desc: "Perfect for assigning random IPL teams to fantasy league participants. Fair and unbiased." },
                            { icon: <IoSettingsOutline className="text-xl text-rose-600" />, ibg: "bg-rose-100", title: "Customizable", desc: "Add retired teams (Deccan Chargers, Gujarat Lions), change names, or swap in full team names." },
                            { icon: <IoTrophyOutline className="text-xl text-blue-600" />, ibg: "bg-blue-100", title: "Prediction Games", desc: "Assign random teams to friends for IPL season prediction competitions. Great for WhatsApp groups." },
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
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                        Fun Ways to Use the IPL Wheel
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { emoji: "🎯", title: "Fantasy IPL Draft", desc: "Each participant spins the wheel to get a random IPL team. The team you get is your team for the entire season. No swaps allowed!", tag: "Fantasy League", tagColor: "bg-indigo-50 text-indigo-700" },
                            { emoji: "🏏", title: "Prediction Contests", desc: "Before each match, spin to predict the winner. Track scores throughout the IPL season. The best predictor wins!", tag: "Predictions", tagColor: "bg-yellow-50 text-yellow-700" },
                            { emoji: "🍿", title: "Watch Party Decider", desc: "Can't agree on which match to watch? Add the playing teams to the wheel and spin to pick. No arguments!", tag: "Watch Parties", tagColor: "bg-pink-50 text-pink-700" },
                            { emoji: "👕", title: "Jersey Challenge", desc: "Spin to get a random IPL team and wear that team's jersey for the day. Forfeit penalties for the losers!", tag: "Challenges", tagColor: "bg-green-50 text-green-700" },
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
                        <div className="inline-block bg-indigo-100 text-indigo-800 font-semibold text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                            🏆 Top IPL Queries &amp; Search Intent
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Popular Ways IPL Fans Search &amp; Use This Wheel
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            From fantasy auction lotteries to match prediction wagers and gaming nights — here is how IPL enthusiasts spin every season.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                query: "\"Which IPL Team Should I Support?\"",
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

            {/* Deep Article */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl space-y-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
                        The IPL Fan&apos;s Guide to Random Team Selection
                    </h2>
                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            The <strong>Indian Premier League</strong> has grown from a cricket tournament into a global sporting phenomenon. With 10 franchises commanding passionate fan bases across India and the world, IPL season brings a unique energy — and with it, endless debates about team loyalties, predictions, and bragging rights.
                        </p>
                        <p>
                            An <strong>IPL team wheel</strong> adds an element of randomness to the IPL experience. Instead of choosing your fantasy team based on form, you let the wheel decide — creating hilarious, unpredictable, and intensely competitive scenarios within your friend group.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            How Fantasy IPL Drafts Work with the Wheel
                        </h3>
                        <p>
                            Before the IPL season starts, gather your fantasy league group (in person or on a video call). Each participant takes turns spinning the IPL team wheel. The team the wheel lands on becomes their team for the entire season. At the end of the tournament, whoever&apos;s team finishes highest on the points table wins the fantasy league. It&apos;s pure chaos — and that&apos;s what makes it exciting.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            IPL Trivia You Should Know
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Most titles:</strong> CSK and MI are tied with 5 IPL titles each, making them the most successful franchises in tournament history.</li>
                            <li><strong>Newest teams:</strong> Gujarat Titans (GT) and Lucknow Super Giants (LSG) joined the IPL in 2022, expanding the league to 10 teams.</li>
                            <li><strong>Mega auctions:</strong> IPL mega auctions happen every few years, reshuffling team squads and creating entirely new team dynamics.</li>
                            <li><strong>Fan base:</strong> RCB is widely considered to have the most passionate (and vocal!) fan base despite not having won a title yet.</li>
                        </ul>
                        <p>
                            Also check out our broader{" "}
                            <Link href="/cricket-team-picker" className="text-indigo-600 hover:underline font-medium">Cricket Team Picker</Link>{" "}
                            with all international cricket teams, or the{" "}
                            <Link href="/random-sports-team-generator" className="text-indigo-600 hover:underline font-medium">Random Sports Team Generator</Link>{" "}
                            for any sport.
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
                            { q: "Are all 10 current IPL teams included?", a: "Yes — CSK, MI, RCB, KKR, SRH, DC, RR, PBKS, GT, and LSG are all pre-loaded with matching team colors.", color: "bg-indigo-500" },
                            { q: "Can I use this on WhatsApp group calls?", a: "Yes! Open the page on your phone, share your screen during a WhatsApp video call, and let everyone watch the spin live.", color: "bg-green-500" },
                            { q: "What if a new IPL team is added?", a: "Simply click 'Add Entry' and type the new team name. The wheel adapts to any number of entries automatically.", color: "bg-amber-500" },
                            { q: "Is there a limit on spins?", a: "No. Spin unlimited times, completely free, forever. No account or signup needed.", color: "bg-rose-500" },
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
                            { href: "/cricket-team-picker", label: "Cricket Team Picker" },
                            { href: "/random-sports-team-generator", label: "Sports Team Generator" },
                            { href: "/tournament-draw-generator", label: "Tournament Draws" },
                            { href: "/nfl-team-wheel", label: "NFL Team Wheel" },
                            { href: "/nba-team-wheel", label: "NBA Team Wheel" },
                            { href: "/football-club-picker", label: "Football Club Picker" },
                            { href: "/team-picker", label: "Team Picker" },
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
