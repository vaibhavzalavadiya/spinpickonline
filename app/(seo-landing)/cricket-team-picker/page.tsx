import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import { generateMetadata as genMeta, generateFAQSchema, generateWebApplicationSchema, generateHowToSchema, generateBreadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { IoTrophyOutline, IoShieldCheckmarkOutline, IoFlashOutline, IoPeopleOutline, IoSettingsOutline, IoBaseballOutline } from "react-icons/io5";

export const metadata: Metadata = genMeta({
    title: "Cricket Team Picker – Spin the Wheel & Pick Teams Free",
    description: "Randomly pick cricket teams with our free spinner wheel. Choose from custom teams, gully cricket squads, or international sides. Fair selection, instant results.",
    canonical: "/cricket-team-picker",
});

const DEFAULT_ENTRIES = [
    { id: "1", label: "India 🇮🇳", color: "#1d4ed8" },
    { id: "2", label: "Australia 🇦🇺", color: "#eab308" },
    { id: "3", label: "England 🏴", color: "#1e3a5f" },
    { id: "4", label: "Pakistan 🇵🇰", color: "#16a34a" },
    { id: "5", label: "South Africa 🇿🇦", color: "#059669" },
    { id: "6", label: "New Zealand 🇳🇿", color: "#171717" },
    { id: "7", label: "West Indies 🏏", color: "#7c2d12" },
    { id: "8", label: "Sri Lanka 🇱🇰", color: "#1e40af" },
    { id: "9", label: "Bangladesh 🇧🇩", color: "#15803d" },
    { id: "10", label: "Afghanistan 🇦🇫", color: "#0284c7" },
];

export default function CricketTeamPickerPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "Cricket Team Picker",
        url: `${SITE_CONFIG.url}/cricket-team-picker`,
        description: "Free online cricket team picker wheel. Spin to randomly select cricket teams — international sides, IPL franchises, or custom gully cricket squads.",
        featureList: "Cricket team picker, Random cricket team generator, Cricket spinner wheel, International cricket teams, Custom cricket team selection",
    });

    const faqSchema = generateFAQSchema([
        { question: "How does the cricket team picker work?", answer: "Add cricket team names to the wheel (or use our pre-loaded list of international teams), click Spin, and the wheel randomly selects a team using cryptographically secure randomness. Every team has an exactly equal chance." },
        { question: "Can I add IPL or local gully cricket teams?", answer: "Yes! Click on any entry and change it to any team name — IPL franchises, county sides, Big Bash teams, or your neighborhood gully cricket squad. You can add unlimited teams." },
        { question: "Is this useful for fantasy cricket drafts?", answer: "Absolutely. Use the wheel to randomly assign draft picks, determine picking order, or assign random teams to players in your fantasy cricket league." },
        { question: "Can I use this to decide batting or bowling order?", answer: "Yes. Replace team names with player names and spin to determine batting order, bowling rotation, or who opens the innings in casual matches." },
        { question: "Does it work for T20 World Cup pools?", answer: "Yes. Add all participating nations and spin to randomly assign teams to pools/groups. Great for prediction games and fantasy tournaments." },
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Pick a Random Cricket Team",
        description: "Use the free cricket team wheel to randomly pick teams in seconds.",
        steps: [
            { position: 1, name: "Add Cricket Teams", text: "Use the pre-loaded international teams or replace them with IPL teams, local clubs, or player names." },
            { position: 2, name: "Customize the Wheel", text: "Change colors to match team jerseys, add flag emojis, or adjust the number of entries." },
            { position: 3, name: "Spin and Pick", text: "Press Spin. The wheel fairly selects a random team. Remove the winner and spin again for elimination-style picks." },
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
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Cricket Team Picker – Spin &amp; Select
                        </h1>
                    </div>
                    <HomeWheel defaultEntries={DEFAULT_ENTRIES} storageKey="cricketTeamPickerState" />
                </div>
            </section>

            {/* How It Works */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How to Pick a Cricket Team
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-xl mx-auto">
                            Three quick steps to randomly select a cricket team
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 max-w-4xl mx-auto">
                        {[
                            { num: "1", bg: "from-blue-50 to-indigo-50", border: "border-blue-200", numBg: "bg-blue-600", title: "Add Cricket Teams", desc: "Use the pre-loaded 10 international teams or replace them with IPL, Big Bash, CPL, PSL, or any custom teams." },
                            { num: "2", bg: "from-green-50 to-emerald-50", border: "border-green-200", numBg: "bg-green-600", title: "Customize Colors", desc: "Change segment colors to match team jerseys — blue for India, yellow for Australia, green for Pakistan, and so on." },
                            { num: "3", bg: "from-amber-50 to-yellow-50", border: "border-amber-200", numBg: "bg-amber-600", title: "Spin & Pick", desc: "Click Spin! The wheel uses cryptographic randomness to fairly select one team. Remove the picked team and spin again if needed." },
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
                            Why Cricketers Love This Tool
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
                        {[
                            { icon: <IoBaseballOutline className="text-xl text-blue-600" />, ibg: "bg-blue-100", title: "Pre-Loaded Teams", desc: "Starts with all 10 major international cricket teams. Swap in IPL, BBL, or local teams instantly." },
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-emerald-600" />, ibg: "bg-emerald-100", title: "Truly Fair Selection", desc: "Cryptographic randomness ensures no team is favored. Every side has mathematically equal odds." },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, ibg: "bg-amber-100", title: "Instant Results", desc: "No loading, no delays. Spin and get your result in seconds. Works even without internet once loaded." },
                            { icon: <IoPeopleOutline className="text-xl text-purple-600" />, ibg: "bg-purple-100", title: "Perfect for Gully Cricket", desc: "Settle team disputes at the park, playground, or street. No more arguing about who picks first." },
                            { icon: <IoSettingsOutline className="text-xl text-rose-600" />, ibg: "bg-rose-100", title: "Fully Customizable", desc: "Add player names instead of teams to pick batting orders, man-of-the-match nominees, or toss winners." },
                            { icon: <IoTrophyOutline className="text-xl text-cyan-600" />, ibg: "bg-cyan-100", title: "Fantasy Cricket Ready", desc: "Use for fantasy league drafts — spin to assign teams, determine pick order, or create random matchups." },
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

            {/* Cricket Team Variations */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                        Popular Cricket Wheel Configurations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { emoji: "🏏", title: "International Test Nations", desc: "All ICC Full Member nations — India, Australia, England, Pakistan, South Africa, New Zealand, West Indies, Sri Lanka, Bangladesh, Afghanistan.", tag: "Test Cricket", tagColor: "bg-blue-50 text-blue-700" },
                            { emoji: "🏆", title: "IPL Franchises", desc: "All Indian Premier League teams — CSK, MI, RCB, KKR, SRH, DC, RR, PBKS, GT, LSG. Perfect for IPL prediction games.", tag: "IPL", tagColor: "bg-indigo-50 text-indigo-700" },
                            { emoji: "🌏", title: "T20 World Cup Groups", desc: "Add all T20 World Cup participating nations and spin to randomly create group-stage pools for prediction contests.", tag: "T20 World Cup", tagColor: "bg-green-50 text-green-700" },
                            { emoji: "🏟️", title: "Gully Cricket Teams", desc: "Add your friend group names and spin to fairly divide everyone into two balanced teams for a street cricket match.", tag: "Gully Cricket", tagColor: "bg-amber-50 text-amber-700" },
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
                        <div className="inline-block bg-emerald-100 text-emerald-800 font-semibold text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                            🏏 Top Cricket Queries &amp; Search Intent
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Popular Ways Cricket Fans Search &amp; Use This Wheel
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            From street matches to fantasy auctions and match tosses — here is how players and fans pick cricket teams with our wheel.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                query: "Gully Cricket Team Divider",
                                keyword: "gully cricket team picker street match",
                                icon: "🏏",
                                tag: "Street Cricket",
                                tagColor: "bg-amber-100 text-amber-800",
                                desc: "Neighborhood players spin on a mobile phone to fairly divide players into two balanced squads. Prevents arguments over who gets the best all-rounder or fast bowler.",
                            },
                            {
                                query: "Fantasy Cricket Auction Draft Order",
                                keyword: "fantasy cricket team picker draft order",
                                icon: "📊",
                                tag: "Fantasy Leagues",
                                tagColor: "bg-blue-100 text-blue-700",
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
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
                        The Ultimate Guide to Picking Cricket Teams Fairly
                    </h2>
                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            Every cricket fan has been there — standing at the maidan or park, arguing about team composition. &quot;You always get the best bowler,&quot; someone says. &quot;The captain always picks his friends first,&quot; another complains. A <strong>random cricket team picker</strong> eliminates all of that drama by using transparent, mathematically fair randomization.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            From Gully Cricket to Fantasy Leagues
                        </h3>
                        <p>
                            This tool isn&apos;t just for casual street cricket. Fantasy cricket league managers use it to randomly assign draft picks. School tournament organizers use it to create unbiased group-stage pools. Even corporate cricket tournament coordinators use random selection to ensure no team gets a perceived advantage in scheduling.
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            How to Set Up the Perfect Cricket Wheel
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>For team selection:</strong> Add all international/IPL team names and spin to randomly assign teams to players in your fantasy group.</li>
                            <li><strong>For batting order:</strong> Replace team names with player names and spin to determine who bats at each position.</li>
                            <li><strong>For toss decisions:</strong> Put just two entries (Bat First / Bowl First) and spin to decide.</li>
                            <li><strong>For man-of-the-match:</strong> Add all eligible players and let the wheel pick the star performer when it&apos;s too close to call.</li>
                        </ul>
                        <p>
                            For IPL-specific team selection, try our dedicated{" "}
                            <Link href="/ipl-team-wheel" className="text-blue-600 hover:underline font-medium">IPL Team Wheel</Link>{" "}
                            pre-loaded with all current franchises. Or explore the{" "}
                            <Link href="/random-sports-team-generator" className="text-blue-600 hover:underline font-medium">Random Sports Team Generator</Link>{" "}
                            for multi-sport support.
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
                            { q: "Which cricket teams are pre-loaded?", a: "India, Australia, England, Pakistan, South Africa, New Zealand, West Indies, Sri Lanka, Bangladesh, and Afghanistan — all ICC Full Members.", color: "bg-blue-500" },
                            { q: "Can I add IPL teams instead?", a: "Yes! Simply edit the existing entries and replace them with CSK, MI, RCB, KKR, SRH, DC, RR, PBKS, GT, LSG, or any IPL teams you want.", color: "bg-indigo-500" },
                            { q: "Is this free to use?", a: "100% free, forever. No signup, no download, no ads blocking the spinner. Just open and spin.", color: "bg-emerald-500" },
                            { q: "Can I share my cricket wheel with friends?", a: "Yes. Generate a shareable link and send it to your cricket group. They can open and spin the same wheel.", color: "bg-amber-500" },
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
                            { href: "/ipl-team-wheel", label: "IPL Team Wheel" },
                            { href: "/random-sports-team-generator", label: "Sports Team Generator" },
                            { href: "/tournament-draw-generator", label: "Tournament Draw Generator" },
                            { href: "/nfl-team-wheel", label: "NFL Team Wheel" },
                            { href: "/nba-team-wheel", label: "NBA Team Wheel" },
                            { href: "/team-picker", label: "Team Picker" },
                            { href: "/random-picker-wheel", label: "Random Picker Wheel" },
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
