import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
    title: "Free Giveaway Rules Template + How to Write Your Own | SpinPickOnline",
    description: "Download a free giveaway rules template and learn how to write clear, legally compliant contest rules for Instagram, TikTok, YouTube, and any platform.",
    alternates: { canonical: "/guides/giveaway-rules-template" },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Free Giveaway Rules Template + How to Write Your Own",
        description: "Free template and complete guide to writing legally compliant giveaway rules.",
        type: "article",
        url: "https://spinpickonline.com/guides/giveaway-rules-template",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Free Giveaway Rules Template + How to Write Your Own",
    "description": "Download a free giveaway rules template and learn how to write clear, legally compliant contest rules.",
    "datePublished": "2026-04-15",
    "dateModified": "2026-04-15",
    "author": { "@type": "Organization", "name": "SpinPickOnline", "url": "https://spinpickonline.com" },
    "publisher": { "@type": "Organization", "name": "SpinPickOnline", "url": "https://spinpickonline.com" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://spinpickonline.com/guides/giveaway-rules-template" },
};

export default function GiveawayRulesTemplatePage() {
    return (
        <div className="min-h-screen bg-white">
            <SchemaScript schema={articleSchema} />
            <article className="container mx-auto px-4 py-8 lg:py-12">
                <div className="max-w-3xl mx-auto">
                    <Link href="/guides" className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 mb-6">
                        <FiArrowLeft className="text-xs" /> Back to Guides
                    </Link>
                    <div className="mb-8">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white">Giveaways</span>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            Free Giveaway Rules Template + How to Write Your Own
                        </h1>
                        <p className="text-gray-500 text-sm">Updated April 15, 2026 · 10 min read</p>
                    </div>

                    <div className="prose prose-gray max-w-none space-y-6">
                        <p className="md:text-lg text-base text-gray-700 leading-relaxed">
                            Clear giveaway rules are the foundation of a successful, dispute-free contest. Vague or missing rules invite arguments, complaints, and even legal exposure. The good news: writing solid giveaway rules takes less than 20 minutes when you have the right template. This guide provides a complete free template plus a clause-by-clause explanation so you can customize it for any giveaway on any platform.
                        </p>

                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                            <p className="text-sm text-gray-700"><strong>⚠️ Legal Notice:</strong> This template is a starting point for general informational purposes only and is not legal advice. Laws governing sweepstakes, contests, and giveaways vary significantly by jurisdiction. For high-value prizes or large-scale promotions, consult a lawyer familiar with promotion law in your region.</p>
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">The Free Giveaway Rules Template</h2>

                        <div className="bg-gray-900 text-gray-100 p-6 rounded-xl font-mono text-sm leading-relaxed space-y-4">
                            <p className="text-gray-400 text-xs">// COPY AND CUSTOMIZE THIS TEMPLATE</p>
                            <div>
                                <p className="text-yellow-300 font-bold">OFFICIAL GIVEAWAY RULES</p>
                                <p className="text-white mt-2">[SPONSOR NAME] (&quot;Sponsor&quot;) is conducting a giveaway (&quot;Giveaway&quot;) subject to these Official Rules.</p>
                            </div>
                            <div>
                                <p className="text-blue-300 font-bold">1. ELIGIBILITY</p>
                                <p>Open to legal residents of [COUNTRY/STATE/REGION], age [MINIMUM AGE] or older at time of entry. Employees of Sponsor, their immediate family members, and those living in the same household are not eligible. Void where prohibited by law.</p>
                            </div>
                            <div>
                                <p className="text-blue-300 font-bold">2. ENTRY PERIOD</p>
                                <p>Giveaway begins [START DATE] at [TIME] [TIMEZONE] and ends [END DATE] at [TIME] [TIMEZONE]. Entries submitted outside this period will not be considered.</p>
                            </div>
                            <div>
                                <p className="text-blue-300 font-bold">3. HOW TO ENTER</p>
                                <p>To enter, you must: [LIST ENTRY REQUIREMENTS - e.g., follow @account on Instagram, like this post, tag one friend in the comments]. Limit one (1) entry per person unless bonus entries are specified. Multiple entries in excess of the limit will be disqualified.</p>
                            </div>
                            <div>
                                <p className="text-blue-300 font-bold">4. PRIZE</p>
                                <p>One (1) winner will receive: [PRIZE DESCRIPTION]. Approximate Retail Value: [VALUE]. Prize is non-transferable, non-exchangeable, and has no cash equivalent. Sponsor reserves the right to substitute a prize of equal or greater value.</p>
                            </div>
                            <div>
                                <p className="text-blue-300 font-bold">5. WINNER SELECTION</p>
                                <p>Winner will be selected by random drawing from all eligible entries on or around [DRAW DATE] using a random selection tool. Odds of winning depend on the number of eligible entries received.</p>
                            </div>
                            <div>
                                <p className="text-blue-300 font-bold">6. WINNER NOTIFICATION</p>
                                <p>Winner will be notified via [PLATFORM/METHOD] within [TIMEFRAME] of the drawing. Winner must respond within [48/72] hours of notification or an alternate winner will be selected. Sponsor is not responsible for lost or delayed communications.</p>
                            </div>
                            <div>
                                <p className="text-blue-300 font-bold">7. GENERAL CONDITIONS</p>
                                <p>By entering, entrants agree to these Official Rules. Sponsor reserves the right to disqualify entrants who violate rules, tamper with the entry process, or act in an unsportsmanlike manner. Sponsor reserves the right to cancel, modify, or suspend the Giveaway for any reason.</p>
                            </div>
                            <div>
                                <p className="text-blue-300 font-bold">8. PLATFORM DISCLAIMER</p>
                                <p>This Giveaway is in no way sponsored, endorsed, administered by, or associated with [PLATFORM NAME]. By entering, you release [PLATFORM NAME] from any liability arising from or related to this Giveaway.</p>
                            </div>
                            <div>
                                <p className="text-blue-300 font-bold">9. PRIVACY</p>
                                <p>Information collected from entrants will only be used to administer this Giveaway and will not be sold or shared with third parties except as required by law.</p>
                            </div>
                            <div>
                                <p className="text-blue-300 font-bold">10. GOVERNING LAW</p>
                                <p>This Giveaway is governed by the laws of [JURISDICTION]. Any disputes shall be resolved exclusively in [JURISDICTION].</p>
                            </div>
                            <div>
                                <p className="text-blue-300 font-bold">SPONSOR CONTACT</p>
                                <p>[SPONSOR NAME] | [CONTACT EMAIL OR WEBSITE]</p>
                            </div>
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Clause-by-Clause Explanation</h2>

                        <div className="space-y-4">
                            {[
                                { clause: "1. Eligibility", explanation: "Always specify geographic eligibility. Many prizes (electronics, gift cards) cannot be legally delivered everywhere. Age minimums protect you from legal issues involving minors. Excluding employees prevents conflicts of interest that undermine trust." },
                                { clause: "2. Entry Period", explanation: "Include the exact date, time, and timezone — not just the date. Timezone ambiguity (is midnight EST or PST?) creates disputes. Be consistent: whatever time you state is when entries close, actually close them at that time." },
                                { clause: "3. How to Enter", explanation: "Be exhaustive. List every required action. If following your account is required, say so explicitly. Specify whether commenting once counts as one entry or whether additional tags earn bonus entries. Ambiguity here is your biggest risk." },
                                { clause: "4. Prize", explanation: "Describe the prize precisely. If you are giving a gift card, specify the exact amount. If giving a product, specify the model and color if relevant. Include the ARV (approximate retail value) — this is legally required in many jurisdictions for any prize over a certain threshold." },
                                { clause: "5. Winner Selection", explanation: "This clause validates your selection process. Specifying that you use a random selection tool establishes that winner selection is mechanical rather than subjective. Mentioning odds (dependent on entries received) is legally required in many jurisdictions." },
                                { clause: "6. Winner Notification", explanation: "Specify the response deadline explicitly — 48 hours is standard. Having a written policy for alternate winner selection protects you legally and operationally. Document your notification attempt if a winner doesn't respond." },
                                { clause: "8. Platform Disclaimer", explanation: "Every platform (Instagram, TikTok, YouTube, Twitter/X) requires this disclaimer. Without it, your post can be removed. Instagram's specific required language is: 'This promotion is in no way sponsored, endorsed or administered by, or associated with Instagram.'" },
                            ].map((item) => (
                                <div key={item.clause} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.clause}</h3>
                                    <p className="text-sm text-gray-600">{item.explanation}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Where to Post Your Giveaway Rules</h2>
                        <ul className="space-y-2 text-gray-700 list-disc pl-6">
                            <li><strong>In the caption:</strong> For simple giveaways with short rules. Summarize the key rules and link to full rules if they are extensive.</li>
                            <li><strong>In your bio link:</strong> Create a dedicated page on your website or link tree with your full Official Rules. Reference this link in your caption.</li>
                            <li><strong>Pinned comment:</strong> Post your rules in a pinned comment on the giveaway post so participants can find them easily without searching through other comments.</li>
                            <li><strong>Your website:</strong> Hosting full rules on your website adds legitimacy and permanence that platform posts do not.</li>
                        </ul>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Documenting Your Winner Selection</h2>
                        <p className="text-gray-700 leading-relaxed">
                            After your rules are in place, the selection process itself must be documented. Screen record or livestream your selection using a <Link href="/spin-wheel-for-giveaway" className="text-blue-600 font-semibold">giveaway wheel</Link>. The video should show: the entry list (proving all valid entries were included), the selection in real time, and the winning result. Keep this recording for at least 90 days after the giveaway ends.
                        </p>

                        <div className="mt-8 p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-200">
                            <h3 className="font-bold text-gray-900 mb-3">Run Your Giveaway Transparently</h3>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/spin-wheel-for-giveaway" className="px-4 py-2 bg-pink-600 text-white rounded-full text-sm font-semibold hover:bg-pink-700 transition-colors inline-flex items-center gap-1">
                                    Giveaway Wheel <FiArrowRight className="text-xs" />
                                </Link>
                                <Link href="/lucky-draw-wheel" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-pink-300 transition-all inline-flex items-center gap-1">
                                    Lucky Draw <FiArrowRight className="text-xs" />
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
