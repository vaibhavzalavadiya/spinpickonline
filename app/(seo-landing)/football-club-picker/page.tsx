import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import { generateMetadata as genMeta, generateFAQSchema, generateWebApplicationSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { IoTrophyOutline, IoShieldCheckmarkOutline, IoFlashOutline, IoPeopleOutline, IoSettingsOutline, IoFootballOutline } from "react-icons/io5";

export const metadata: Metadata = genMeta({
    title: "Football Club Picker – Random Football Team Generator Free",
    description: "Randomly pick a football club with our free spinner wheel. Premier League, La Liga, Serie A, Bundesliga clubs pre-loaded. Perfect for FIFA, fantasy drafts & more.",
    canonical: "/football-club-picker",
});

const DEFAULT_ENTRIES = [
    { id: "1", label: "Real Madrid 🇪🇸", color: "#febe10" },
    { id: "2", label: "Barcelona 🇪🇸", color: "#a50044" },
    { id: "3", label: "Man City 🏴", color: "#6caddf" },
    { id: "4", label: "Liverpool 🏴", color: "#c8102e" },
    { id: "5", label: "Bayern Munich 🇩🇪", color: "#dc052d" },
    { id: "6", label: "PSG 🇫🇷", color: "#004170" },
    { id: "7", label: "Arsenal 🏴", color: "#ef0107" },
    { id: "8", label: "Juventus 🇮🇹", color: "#000000" },
    { id: "9", label: "AC Milan 🇮🇹", color: "#fb090b" },
    { id: "10", label: "Chelsea 🏴", color: "#034694" },
    { id: "11", label: "Inter Milan 🇮🇹", color: "#010e80" },
    { id: "12", label: "Dortmund 🇩🇪", color: "#fde100" },
];

export default function FootballClubPickerPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "Football Club Picker",
        url: `${SITE_CONFIG.url}/football-club-picker`,
        description: "Free online football club picker wheel. Top European clubs pre-loaded — Premier League, La Liga, Serie A, Bundesliga. Spin to randomly pick a club.",
        featureList: "Football club picker, Random football team generator, FIFA team selector, Premier League wheel, La Liga wheel, Fantasy football team picker",
    });

    const faqSchema = generateFAQSchema([
        { question: "Which football clubs are on the wheel?", answer: "The wheel is pre-loaded with 12 top European clubs: Real Madrid, Barcelona, Man City, Liverpool, Bayern Munich, PSG, Arsenal, Juventus, AC Milan, Chelsea, Inter Milan, and Dortmund. You can add any club from any league." },
        { question: "Can I add Premier League or other league teams?", answer: "Yes! You can add all 20 Premier League clubs, La Liga teams, Serie A, Bundesliga, Ligue 1, or any club from any league in the world. There are no limits." },
        { question: "Is this good for FIFA team selection?", answer: "Absolutely! It's one of the most popular uses. Spin the wheel to pick random teams for FIFA matches so nobody always gets to play as the same club." },
        { question: "Can I use this for fantasy football?", answer: "Yes. Use the wheel to randomly assign clubs to fantasy league participants, determine draft order, or assign random clubs for a league-long prediction contest." },
        { question: "Is the football club picker fair?", answer: "Yes. We use the Web Crypto API for cryptographically secure randomness. Every club on the wheel has an exactly equal chance of being selected." },
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Pick a Random Football Club",
        description: "Spin the wheel to randomly pick a football club in seconds.",
        steps: [
            { position: 1, name: "Choose Your Clubs", text: "Use the pre-loaded top European clubs or replace them with clubs from your favorite league — PL, La Liga, Serie A, etc." },
            { position: 2, name: "Spin the Wheel", text: "Click Spin and watch the wheel randomly land on a football club. Cryptographic fairness guaranteed." },
            { position: 3, name: "Play or Draft", text: "Use the picked club for your FIFA game, fantasy draft, prediction contest, or pub quiz challenge." },
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
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-green-50/60 to-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Football Club Picker – Spin &amp; Select
                        </h1>
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
                            { num: "1", bg: "from-green-50 to-emerald-50", border: "border-green-200", numBg: "bg-green-600", title: "Add Football Clubs", desc: "Use the pre-loaded European giants or replace with Premier League, La Liga, Serie A, Bundesliga, or custom clubs." },
                            { num: "2", bg: "from-blue-50 to-indigo-50", border: "border-blue-200", numBg: "bg-blue-600", title: "Spin the Wheel", desc: "Click Spin and watch the wheel randomly land on a club. Powered by cryptographic randomness." },
                            { num: "3", bg: "from-amber-50 to-yellow-50", border: "border-amber-200", numBg: "bg-amber-600", title: "Play or Compete", desc: "Use the picked club for FIFA, fantasy football, prediction contests, or just settle a debate." },
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
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
                        {[
                            { icon: <IoFootballOutline className="text-xl text-green-600" />, ibg: "bg-green-100", title: "Top Clubs Pre-Loaded", desc: "Elite European clubs from Premier League, La Liga, Serie A, Bundesliga, and Ligue 1 ready to spin." },
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-emerald-600" />, ibg: "bg-emerald-100", title: "Truly Fair", desc: "Cryptographic randomness — every club has mathematically equal odds. No bias possible." },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, ibg: "bg-amber-100", title: "Free & Instant", desc: "No signup, no downloads. Open the page and start spinning on any device." },
                            { icon: <IoPeopleOutline className="text-xl text-purple-600" />, ibg: "bg-purple-100", title: "FIFA Game Ready", desc: "Perfect for random FIFA/FC team selection. No more fighting over Real Madrid or Man City!" },
                            { icon: <IoSettingsOutline className="text-xl text-rose-600" />, ibg: "bg-rose-100", title: "Any League, Any Club", desc: "Add clubs from any league worldwide — MLS, A-League, J-League, Indian Super League, and more." },
                            { icon: <IoTrophyOutline className="text-xl text-blue-600" />, ibg: "bg-blue-100", title: "Champions League Fun", desc: "Use for UCL draw simulations, group-stage predictions, or random club assignment challenges." },
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

            {/* League Configurations */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Popular League Configurations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", title: "Premier League", desc: "Add all 20 Premier League clubs — Arsenal, Man City, Liverpool, Chelsea, Man United, Tottenham, Newcastle, and more.", tag: "England", tagColor: "bg-purple-50 text-purple-700" },
                            { emoji: "🇪🇸", title: "La Liga", desc: "Real Madrid, Barcelona, Atlético Madrid, Real Sociedad, Athletic Bilbao, Sevilla, and all 20 Spanish clubs.", tag: "Spain", tagColor: "bg-red-50 text-red-700" },
                            { emoji: "🇮🇹", title: "Serie A", desc: "Inter Milan, AC Milan, Juventus, Napoli, Roma, Lazio, Atalanta, and all 20 Italian top-flight clubs.", tag: "Italy", tagColor: "bg-blue-50 text-blue-700" },
                            { emoji: "🇩🇪", title: "Bundesliga", desc: "Bayern Munich, Borussia Dortmund, RB Leipzig, Bayer Leverkusen, and all 18 German Bundesliga clubs.", tag: "Germany", tagColor: "bg-yellow-50 text-yellow-700" },
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
                        <div className="inline-block bg-emerald-100 text-emerald-800 font-semibold text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                            ⚽ Top Football Queries &amp; Search Intent
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

            {/* Deep Article */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl space-y-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">The Football Fan&apos;s Guide to Random Club Selection</h2>
                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            <strong>Football</strong> (soccer) is the world&apos;s most popular sport, with hundreds of professional leagues and thousands of clubs across every continent. From the glamour of the Premier League and Champions League to the passion of local derbies, football inspires fierce loyalty — and equally fierce debates about which club is best.
                        </p>
                        <p>
                            A <strong>football club picker wheel</strong> is the perfect solution for scenarios where you need randomness: FIFA gaming sessions, fantasy league drafts, Champions League draw simulations, or settling the eternal &quot;which club should I follow?&quot; question.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">Popular Use Cases</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>FIFA / EA FC random teams:</strong> Spin the wheel before each match so neither player gets to pick their go-to club. Random selection keeps it competitive and forces you to learn different playstyles.</li>
                            <li><strong>Career mode challenges:</strong> Spin to get a random club for your FIFA Career Mode. Managing Getafe is a very different challenge from managing Man City!</li>
                            <li><strong>Fantasy Football Premier League (FPL):</strong> Use the wheel to randomly assign which club each participant must primarily pick players from.</li>
                            <li><strong>UCL draw simulations:</strong> Recreate the Champions League draw at home. Add all qualified teams and spin to create groups or knockout matchups.</li>
                            <li><strong>Pub quiz challenges:</strong> Spin to get a random club and test your friends on their knowledge of that team&apos;s history, players, and achievements.</li>
                        </ul>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">Top 5 European Leagues Covered</h3>
                        <p>
                            The pre-loaded wheel focuses on Europe&apos;s elite, but you can customize it to include any league: the <strong>Premier League</strong> (England), <strong>La Liga</strong> (Spain), <strong>Serie A</strong> (Italy), <strong>Bundesliga</strong> (Germany), and <strong>Ligue 1</strong> (France). You can also add clubs from the MLS, A-League, J-League, ISL, Saudi Pro League, and more.
                        </p>
                        <p>
                            For American sports, check out our{" "}
                            <Link href="/nfl-team-wheel" className="text-green-700 hover:underline font-medium">NFL Team Wheel</Link>{" "}
                            and{" "}
                            <Link href="/nba-team-wheel" className="text-green-700 hover:underline font-medium">NBA Team Wheel</Link>.
                            For cricket, try the{" "}
                            <Link href="/cricket-team-picker" className="text-green-700 hover:underline font-medium">Cricket Team Picker</Link>.
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
                            { q: "Can I create a full Premier League wheel?", a: "Yes! Add all 20 Premier League clubs by editing or adding entries. The wheel adapts to any number of clubs.", color: "bg-green-500" },
                            { q: "Is this good for FIFA / EA FC games?", a: "Absolutely. It's one of the most popular uses. Spin for random team assignment so nobody picks the same OP team every match.", color: "bg-blue-500" },
                            { q: "Can I include clubs from lower divisions?", a: "Yes. Add any club from any league or division — Championship, League One, 2. Bundesliga, Serie B, Segunda División, etc.", color: "bg-amber-500" },
                            { q: "Is the picker completely free?", a: "Yes, 100% free forever. No signup, no download, no hidden costs. Just open and spin.", color: "bg-purple-500" },
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
                            { href: "/random-sports-team-generator", label: "Sports Team Generator" },
                            { href: "/cricket-team-picker", label: "Cricket Team Picker" },
                            { href: "/ipl-team-wheel", label: "IPL Team Wheel" },
                            { href: "/nfl-team-wheel", label: "NFL Team Wheel" },
                            { href: "/nba-team-wheel", label: "NBA Team Wheel" },
                            { href: "/tournament-draw-generator", label: "Tournament Draws" },
                            { href: "/team-picker", label: "Team Picker" },
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
