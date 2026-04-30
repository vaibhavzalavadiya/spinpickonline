import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
    title: "How to Ensure Fair Random Selection Every Time | SpinPickOnline",
    description: "Learn what makes a selection truly random and fair. Covers cryptographic randomness, equal entry weighting, bias elimination, and how to prove fairness to participants.",
    alternates: { canonical: "/guides/fair-random-selection" },
    robots: { index: true, follow: true },
    openGraph: {
        title: "How to Ensure Fair Random Selection Every Time",
        description: "A guide to ensuring truly fair, bias-free random selection in any context.",
        type: "article",
        url: "https://spinpickonline.com/guides/fair-random-selection",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Ensure Fair Random Selection Every Time",
    "description": "Learn what makes a selection truly random and fair. Covers cryptographic randomness and bias elimination.",
    "datePublished": "2026-04-01",
    "dateModified": "2026-04-01",
    "author": { "@type": "Organization", "name": "SpinPickOnline", "url": "https://spinpickonline.com" },
    "publisher": { "@type": "Organization", "name": "SpinPickOnline", "url": "https://spinpickonline.com" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://spinpickonline.com/guides/fair-random-selection" },
};

export default function FairRandomSelectionPage() {
    return (
        <div className="min-h-screen bg-white">
            <SchemaScript schema={articleSchema} />
            <article className="container mx-auto px-4 py-8 lg:py-12">
                <div className="max-w-3xl mx-auto">
                    <Link href="/guides" className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 mb-6">
                        <FiArrowLeft className="text-xs" /> Back to Guides
                    </Link>
                    <div className="mb-8">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white">Fairness Guide</span>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            How to Ensure Fair Random Selection Every Time
                        </h1>
                        <p className="text-gray-500 text-sm">Updated April 1, 2026 · 9 min read</p>
                    </div>

                    <div className="prose prose-gray max-w-none space-y-6">
                        <p className="md:text-lg text-base text-gray-700 leading-relaxed">
                            &quot;Was that really random?&quot; is the question every giveaway winner picker, teacher, raffle organizer, and team builder must be prepared to answer convincingly. The perception of fairness is just as important as actual fairness — if participants don&apos;t believe the selection was truly random, the result is challenged regardless of how correctly you ran the process. This guide covers what makes selection genuinely fair and how to demonstrate that fairness to your audience.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">What &quot;Random&quot; Actually Means</h2>
                        <p className="text-gray-700 leading-relaxed">
                            True randomness means that every possible outcome has an equal, independent probability of occurring. There is no pattern, no correlation with previous outcomes, and no way to predict the next result based on any available information. This is harder to achieve than it sounds. Most common randomization methods fall short:
                        </p>
                        <div className="space-y-3 my-4">
                            {[
                                { method: "Manual selection (&apos;I&apos;ll just pick someone&apos;)", problem: "Heavily biased by recency, familiarity, visual salience, and unconscious preferences. Not random." },
                                { method: "Alphabetical or sequential order", problem: "Predictable, not random. Systematically advantages or disadvantages certain entries." },
                                { method: "Standard programming Math.random()", problem: "Pseudorandom — deterministic if seed is known. Sufficient for games, not for high-stakes selection." },
                                { method: "Shuffling a physical deck of cards", problem: "Seven or more riffle shuffles needed for true randomization. Most people don&apos;t shuffle enough." },
                                { method: "Cryptographically secure RNG (CSPRNG)", problem: "✅ Truly unpredictable. Sourced from physical entropy. The gold standard for fair selection." },
                            ].map((item, idx) => (
                                <div key={idx} className={`p-4 rounded-xl border ${idx === 4 ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"}`}>
                                    <p className="font-semibold text-gray-900 text-sm">{item.method}</p>
                                    <p className="text-sm text-gray-600 mt-1">{item.problem}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">The 4 Requirements for Provably Fair Selection</h2>
                        <div className="grid sm:grid-cols-2 gap-4 my-4">
                            {[
                                { num: "1", title: "True Randomness", desc: "Use a CSPRNG that sources entropy from physical processes rather than mathematical formulas. SpinPickOnline uses the Web Crypto API&apos;s getRandomValues(), which meets this standard." },
                                { num: "2", title: "Complete Entry List", desc: "Every eligible participant must be included — no omissions. Before drawing, publish or display the complete entry list so participants can verify inclusion." },
                                { num: "3", title: "No Post-Selection Editing", desc: "The result must be final from the moment of selection. Re-spinning because you don&apos;t like the result invalidates the entire process, even if the re-spin is genuinely random." },
                                { num: "4", title: "Witnessed or Recorded", desc: "The selection must be witnessed by participants in real time, or fully recorded without cuts. Unwitnessed selections require participants to simply trust you — undermining the whole point." },
                            ].map((req) => (
                                <div key={req.num} className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                    <div className="flex items-start gap-3">
                                        <span className="bg-blue-500 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">{req.num}</span>
                                        <div>
                                            <h3 className="font-bold text-blue-900 mb-1 text-sm">{req.title}</h3>
                                            <p className="text-xs text-gray-700">{req.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Common Sources of Bias to Eliminate</h2>

                        <h3 className="text-lg font-bold text-gray-900 mt-6">1. Unequal Entry Weighting</h3>
                        <p className="text-gray-700 leading-relaxed">
                            If all entries are supposed to have equal probability but some appear more times than others, the selection is biased. Always verify that each participant appears exactly the correct number of times in your entry pool. For bonus-entry contests where more entries are allowed, this inequality is intentional and should be explicitly stated in your rules.
                        </p>

                        <h3 className="text-lg font-bold text-gray-900 mt-6">2. Excluding Valid Entries</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Accidentally omitting entries is the most common fairness failure. Always verify your entry count against your records before drawing. For large entry pools, spot-check that known participants appear in the list. Publish the total entry count before drawing so the math can be verified.
                        </p>

                        <h3 className="text-lg font-bold text-gray-900 mt-6">3. Favorable Seeding</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Some pseudorandom generators produce predictable sequences if the seed is known or guessable. For example, seeding with the current timestamp allows anyone to reproduce your exact sequence if they know when you ran it. A CSPRNG eliminates this by using unpredictable entropy.
                        </p>

                        <h3 className="text-lg font-bold text-gray-900 mt-6">4. Human Influence at Any Stage</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Any point where a human makes a subjective decision introduces potential bias. The selection tool, the entry list construction, and the winner notification should all be mechanical and documented. If you find a &quot;winner is ineligible&quot; situation after selection, return to the wheel and select an alternate publicly — never substitute a winner privately.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">How to Prove Fairness to Skeptical Participants</h2>
                        <ul className="space-y-2 text-gray-700 list-disc pl-6">
                            <li><strong>Pre-draw: Publish the entry list</strong> — show all participants their entry is included before drawing.</li>
                            <li><strong>During: Use a visible, real-time tool</strong> — a spin wheel on camera is harder to dispute than an invisible RNG.</li>
                            <li><strong>Post-draw: Share the recording</strong> — an unedited video of the complete selection process is your strongest evidence.</li>
                            <li><strong>Documentation: Keep your records</strong> — entry list, selection method, winner communication, prize delivery all documented and available on request.</li>
                        </ul>

                        <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-200">
                            <h3 className="font-bold text-gray-900 mb-3">SpinPickOnline Uses Cryptographic Randomness</h3>
                            <p className="text-sm text-gray-700 mb-3">Every spin uses the Web Crypto API (CSPRNG) for verifiably fair, unpredictable results.</p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/fair-randomization" className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-1">
                                    Fair Randomization <FiArrowRight className="text-xs" />
                                </Link>
                                <Link href="/wheel" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-green-300 transition-all inline-flex items-center gap-1">
                                    Try the Wheel <FiArrowRight className="text-xs" />
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
