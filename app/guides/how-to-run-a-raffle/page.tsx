import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
    title: "How to Run a Raffle: The Complete Step-by-Step Guide | SpinPickOnline",
    description: "Everything you need to run a successful raffle online or in person. Covers entry collection, legal requirements, winner selection, and best practices.",
    alternates: { canonical: "/guides/how-to-run-a-raffle" },
    robots: { index: true, follow: true },
    openGraph: {
        title: "How to Run a Raffle: The Complete Step-by-Step Guide",
        description: "Complete guide to running a raffle from entry collection to winner announcement.",
        type: "article",
        url: "https://spinpickonline.com/guides/how-to-run-a-raffle",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Run a Raffle: The Complete Step-by-Step Guide",
    "description": "Everything you need to run a successful raffle online or in person.",
    "datePublished": "2026-03-10",
    "dateModified": "2026-03-10",
    "author": { "@type": "Organization", "name": "SpinPickOnline", "url": "https://spinpickonline.com" },
    "publisher": { "@type": "Organization", "name": "SpinPickOnline", "url": "https://spinpickonline.com" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://spinpickonline.com/guides/how-to-run-a-raffle" },
};

export default function HowToRunARafflePage() {
    return (
        <div className="min-h-screen bg-white">
            <SchemaScript schema={articleSchema} />
            <article className="container mx-auto px-4 py-8 lg:py-12">
                <div className="max-w-3xl mx-auto">
                    <Link href="/guides" className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 mb-6">
                        <FiArrowLeft className="text-xs" /> Back to Guides
                    </Link>
                    <div className="mb-8">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white">Raffles</span>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            How to Run a Raffle: The Complete Step-by-Step Guide
                        </h1>
                        <p className="text-gray-500 text-sm">Updated March 10, 2026 · 12 min read</p>
                    </div>

                    <div className="prose prose-gray max-w-none space-y-6">
                        <p className="md:text-lg text-base text-gray-700 leading-relaxed">
                            Raffles are one of the most effective fundraising and engagement tools available to nonprofits, schools, sports clubs, businesses, and community groups. A well-run raffle generates excitement, builds community, and can raise significant funds — but a poorly run raffle can damage your organization&apos;s reputation and create legal liability. This complete guide walks through every step of running a successful, legal, and transparent raffle.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Step 1: Understand the Legal Requirements</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Before organizing any raffle, research the laws in your jurisdiction. Raffle regulations vary significantly by country, state, and even municipality. In most regions, charitable raffles (where proceeds benefit a nonprofit or charitable cause) are treated differently from commercial raffles. Key legal considerations include:
                        </p>
                        <ul className="space-y-2 text-gray-700 list-disc pl-6">
                            <li><strong>Permits and licensing:</strong> Many jurisdictions require a lottery or raffle permit, especially for high-value prizes. Apply well in advance — permits can take weeks.</li>
                            <li><strong>Who can legally run a raffle:</strong> In many places, only registered charities and nonprofits can legally run raffles. For-profit businesses face more restrictions.</li>
                            <li><strong>Ticket pricing and prize value limits:</strong> Some jurisdictions cap ticket prices or total prize values for unlicensed raffles.</li>
                            <li><strong>Record-keeping requirements:</strong> You may need to document all ticket sales, prize values, and winner selection for government audit.</li>
                            <li><strong>Tax implications:</strong> Prize winners may be required to report winnings as income above certain thresholds.</li>
                        </ul>
                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                            <p className="text-sm text-gray-700"><strong>⚠️ Important:</strong> This guide provides general information only. Always consult a legal professional or your local gaming/lottery authority before running a raffle, especially for high-value prizes or ticket sales.</p>
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Step 2: Choose Your Prize</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The prize is the entire reason people buy raffle tickets. A compelling prize drives ticket sales; an uninspiring prize kills them. Best-performing raffle prizes:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 my-4">
                            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                                <h3 className="font-bold text-green-800 mb-2 text-sm">✅ High-Performing Prizes</h3>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Electronics (tablets, earbuds, smart speakers)</li>
                                    <li>• Travel experiences or hotel stays</li>
                                    <li>• Restaurant gift cards or dinner for two</li>
                                    <li>• Spa or wellness experiences</li>
                                    <li>• Cash prizes (universally appealing)</li>
                                    <li>• Sports tickets or event experiences</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                                <h3 className="font-bold text-red-800 mb-2 text-sm">❌ Poor Prize Choices</h3>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Very niche items with limited appeal</li>
                                    <li>• Donated items of uncertain quality</li>
                                    <li>• Prizes requiring specific eligibility (car if many don&apos;t drive)</li>
                                    <li>• Perishable items that are hard to deliver</li>
                                    <li>• Items your audience already owns</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Step 3: Set Your Ticket Price and Sales Goal</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Pricing should be accessible but meaningful. Common strategies:
                        </p>
                        <ul className="space-y-2 text-gray-700 list-disc pl-6">
                            <li><strong>Fixed price per ticket:</strong> Simple and easy to communicate. Most common. Example: $5 per ticket.</li>
                            <li><strong>Bundle pricing:</strong> Buy 5 for the price of 4. Increases average purchase size. Example: $5 each or 5 for $20.</li>
                            <li><strong>Tiered prizes:</strong> Multiple prize tiers (1st, 2nd, 3rd) with different ticket prices for each. More complex but keeps more participants engaged.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            Set a ticket sales goal based on your prize cost plus operating expenses (permits, printing, processing fees) plus your fundraising target. Price tickets so you can cover all costs and hit your goal at a realistic attendance figure.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Step 4: Collect Entries (Online vs. In-Person)</h2>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>In-person ticket sales:</strong> Use numbered physical tickets with a stub system — one number stays with the buyer, one goes in the draw barrel. Number all tickets sequentially before distribution. Keep a sales ledger recording who purchased each ticket number.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Online raffles:</strong> Use a payment platform with raffle features, or simply collect entries via form and assign sequential ticket numbers manually. Send each buyer a confirmation with their ticket number(s). Publish the total number of tickets sold before the draw so participants can calculate their odds.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Step 5: Select the Winner Transparently</h2>
                        <p className="text-gray-700 leading-relaxed">
                            For in-person raffles: place all stubs in a container, mix thoroughly, and have a neutral party draw without looking. Film the entire process.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            For online raffles: assign each ticket a number and use a <Link href="/raffle-wheel" className="text-blue-600 font-semibold">raffle wheel</Link> or verified RNG to select the winner. Stream or record the selection. Publish the full ticket list before drawing so participants can verify inclusion.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Step 6: Announce the Winner and Deliver the Prize</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Announce publicly and immediately. Contact the winner privately to arrange prize delivery. Document the winner claim with their acknowledgment. For high-value prizes, require ID verification and a signed prize acceptance form. Keep all records for the legally required period. Publish a post-raffle report showing: total tickets sold, total raised, winner selection method, and prize delivery confirmation. This transparency builds trust for your next raffle.
                        </p>

                        <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                            <h3 className="font-bold text-gray-900 mb-3">Raffle Winner Selection Tools</h3>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/raffle-wheel" className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors inline-flex items-center gap-1">
                                    Raffle Wheel <FiArrowRight className="text-xs" />
                                </Link>
                                <Link href="/random-number-wheel" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-purple-300 transition-all inline-flex items-center gap-1">
                                    Random Number Wheel <FiArrowRight className="text-xs" />
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
