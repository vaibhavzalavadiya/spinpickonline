import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
    title: "15 Office Party Game Ideas Using a Spin Wheel | SpinPickOnline",
    description: "Make your next office party unforgettable with these 15 fun spin wheel game ideas. Perfect for team events, holiday parties, and company celebrations.",
    alternates: { canonical: "/blog/office-party-game-ideas" },
    robots: { index: true, follow: true },
    openGraph: {
        title: "15 Office Party Game Ideas Using a Spin Wheel",
        description: "15 fun office party spin wheel games for team events and company celebrations.",
        type: "article",
        url: "https://spinpickonline.com/blog/office-party-game-ideas",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "15 Office Party Game Ideas Using a Spin Wheel",
    "description": "Make your next office party unforgettable with these 15 fun spin wheel game ideas.",
    "datePublished": "2026-03-22",
    "dateModified": "2026-03-22",
    "author": { "@type": "Organization", "name": "SpinPickOnline", "url": "https://spinpickonline.com" },
    "publisher": { "@type": "Organization", "name": "SpinPickOnline", "url": "https://spinpickonline.com" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://spinpickonline.com/blog/office-party-game-ideas" },
};

const games = [
    { icon: "🎁", title: "Spin the Secret Santa Wheel", desc: "Instead of drawing names from a hat, use a spin wheel to assign Secret Santa pairings publicly. Everyone can see the assignment process is truly random. Spin each person's name to reveal who they buy for — the anticipation in the room is electric." },
    { icon: "🏆", title: "Employee Awards Roulette", desc: "Create quirky award categories (Best Zoom Background, Most Likely to Reply Instantly, Coffee Connoisseur) and put employee names on the wheel. Spin for each category. Everyone gets a silly title and the randomness prevents hurt feelings about who chose whom." },
    { icon: "🎵", title: "Song Selection Wheel", desc: "Put music genres, decades, or specific playlist names on the wheel. Spin to pick the background music for each hour of the party. Adds variety and gives everyone input into the selection process." },
    { icon: "🍕", title: "Lunch Order Decision Wheel", desc: "Can't agree on which restaurant to order from? Put the top contenders on the wheel and let it decide. Especially useful for large offices where consensus is impossible. Follow the wheel, no questions asked." },
    { icon: "🎤", title: "Karaoke Volunteer Picker", desc: "Put everyone's name on the wheel. Spin to pick the next karaoke performer. No more awkward silence waiting for volunteers — the wheel eliminates the social pressure of self-selection while keeping it completely fair." },
    { icon: "🧠", title: "Trivia Team Builder", desc: "Use the wheel to randomly assign trivia teams. This prevents friend groups from stacking teams with all the smart people. Random teams often produce more competitive, exciting games — and the cross-team mingling strengthens workplace relationships." },
    { icon: "🎨", title: "White Elephant Spin Order", desc: "In traditional white elephant, the order you choose in dramatically affects your outcome. Use a spin wheel to determine the picking order. Everyone can see it's fair, and the dramatic spinning replaces the usual number-drawing chaos." },
    { icon: "💃", title: "Dance Challenge Spinner", desc: "Put different dance moves or genres on the wheel (salsa step, robot, disco point). The person whose name is spun must perform the dance move selected. Works best at parties where the atmosphere is already light." },
    { icon: "📸", title: "Photo Challenge Wheel", desc: "Create 8–10 fun photo challenges (best team selfie, funniest face, most creative use of office prop). Spin to reveal the challenge, set a 5-minute timer, then vote on the best submission. Creates shareable content and great memories." },
    { icon: "🍪", title: "Bake-Off Judge Selector", desc: "If your office runs a holiday bake-off, use the wheel to randomly select which employees judge each round. Prevents the same people always judging and reduces perceptions of favoritism." },
    { icon: "🎯", title: "Party Activity Planner", desc: "Can't agree on party activities? Put all proposed activities on the wheel at the planning meeting. Spin to finalize the schedule. The wheel makes the decision for the committee and prevents any one person from dominating the planning." },
    { icon: "🏅", title: "Raffle Prize Distribution", desc: "For office raffle drawings, add all ticket numbers to the wheel and spin for each prize tier. Project it on the party screen. Far more exciting than drawing from a hat and allows remote participants to watch the selection live." },
    { icon: "❓", title: "Confession or Compliment Wheel", desc: "Alternate between two wheel types: one with employee names, one with prompts (&apos;share a work win from this year,&apos; &apos;give someone in the room a genuine compliment,&apos; &apos;reveal your hidden talent&apos;). Creates authentic connection." },
    { icon: "🎮", title: "Game Night Randomizer", desc: "Have a board game collection at the party? Put all game names on the wheel. Spin to pick what everyone plays. Eliminates the 30-minute negotiation about which game to choose." },
    { icon: "🌟", title: "Spotlight Appreciation Spin", desc: "At the end of the party, spin a wheel with all employee names. The selected person receives 60 seconds of appreciation from anyone who wants to share something positive. Ends the event on a warm, genuine high note." },
];

export default function OfficePartyGamesPost() {
    return (
        <div className="min-h-screen bg-white">
            <SchemaScript schema={articleSchema} />
            <article className="container mx-auto px-4 py-8 lg:py-12">
                <div className="max-w-3xl mx-auto">
                    <Link href="/blog" className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 mb-6">
                        <FiArrowLeft className="text-xs" /> Back to Blog
                    </Link>
                    <div className="mb-8">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white">Team Building</span>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            15 Office Party Game Ideas Using a Spin Wheel
                        </h1>
                        <p className="text-gray-500 text-sm">Published March 22, 2026 · 8 min read · By SpinPickOnline Team</p>
                    </div>

                    <div className="prose prose-gray max-w-none space-y-6">
                        <p className="md:text-lg text-base text-gray-700 leading-relaxed">
                            Office parties live or die by the energy in the room. Great games remove social awkwardness, get everyone involved — including the introverts — and create moments people talk about for months afterward. A spin wheel is one of the simplest, most effective tools you can add to any office event. It adds fairness, excitement, and a touch of randomness that makes every activity feel fresh and unpredictable.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            These 15 office party games work for in-person and hybrid teams, holiday parties, quarterly celebrations, onboarding events, and everyday team lunches. Most can be set up in under two minutes using a free <Link href="/wheel" className="text-blue-600 font-semibold">spin wheel tool</Link> — no downloads, no accounts required.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Why Spin Wheels Make Office Parties Better</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Office parties have unique social dynamics that can make them stressful: hierarchies are present, people have professional reputations to maintain, and not everyone knows everyone else well. A spin wheel neutralizes these dynamics beautifully. When the wheel picks someone, there is no perception that a senior person chose a junior person, or that popular employees get picked more often. The wheel&apos;s fairness removes social friction, and its visual spinning creates shared excitement that bonds the group.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">The 15 Games</h2>
                        <div className="grid sm:grid-cols-1 gap-4">
                            {games.map((game) => (
                                <div key={game.title} className="flex gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <div className="text-3xl flex-shrink-0">{game.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{game.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{game.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Tips for Running Spin Wheel Games at Office Events</h2>
                        <ul className="space-y-2 text-gray-700 list-disc pl-6">
                            <li><strong>Project it on a large screen:</strong> The spinning animation is most effective when everyone in the room can see it clearly. Connect a laptop to a TV or projector.</li>
                            <li><strong>Build suspense:</strong> Count down from 3 before spinning, or ask the group to chant the wheel into action. Small rituals amplify the excitement.</li>
                            <li><strong>Keep participation voluntary for personal games:</strong> For games that involve performance or sharing, allow people to &quot;pass&quot; and spin again. No one should feel coerced at a company event.</li>
                            <li><strong>Prepare wheels in advance:</strong> Set up your spin wheel configurations before the party starts. Save different configurations for different games so you can switch between them instantly.</li>
                        </ul>

                        <div className="mt-8 p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200">
                            <h3 className="font-bold text-gray-900 mb-3">Set Up Your Party Wheel</h3>
                            <p className="text-sm text-gray-700 mb-3">Free, instant, works on any laptop or tablet. Perfect for office parties of any size.</p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/wheel" className="px-4 py-2 bg-rose-500 text-white rounded-full text-sm font-semibold hover:bg-rose-600 transition-colors inline-flex items-center gap-1">
                                    Open Spin Wheel <FiArrowRight className="text-xs" />
                                </Link>
                                <Link href="/name-picker" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-rose-300 transition-all inline-flex items-center gap-1">
                                    Name Picker <FiArrowRight className="text-xs" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <CallToAction />
        </div>
    );
}
