import { Metadata } from "next";
import { generateMetadata, generateWebApplicationSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import DiceRoller from "@/components/DiceRoller";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiShield, FiTrendingUp } from "react-icons/fi";
import { IoGameControllerOutline, IoSparklesOutline, IoFlashOutline, IoSettingsOutline, IoHelpCircleOutline } from "react-icons/io5";

export const metadata: Metadata = generateMetadata({
    title: "Dice Roller Online – Free Virtual Dice Roller (Roll D6, D20 & D&D Dice)",
    description: "Roll dice online with our free virtual dice roller. Roll a die (1-6), roll 2 dice, D20 for D&D 5e, D4, D8, D10, D12, and D100 with fair random results & instant sums.",
    canonical: "/dice-roller",
});

export default function DiceRollerPage() {
    const applicationSchema = generateWebApplicationSchema({
        name: "Virtual Dice Roller Online",
        url: `${SITE_CONFIG.url}/dice-roller`,
        description: "Free online dice roller supporting D4, D6, D8, D10, D12, D20, and D100. Roll a single die, roll 2 dice, or roll up to 6 dice at once with instant sum calculation.",
        featureList: "Dice roller, Roll a die, Virtual dice roller, Roll 2 dice, D&D dice roller, D20 roller, D6 roller, D100 roll, Board game dice, Multi-dice roller",
    });

    const faqSchema = generateFAQSchema([
        {
            question: "How do I roll 2 dice or multiple dice online?",
            answer: "Simply choose your desired count from the 'Dice' dropdown (1 to 6 dice) and select your die type (D6, D20, etc.). Click 'Roll Dice' or tap the screen. All dice roll simultaneously with realistic animation, and the total sum is automatically calculated and displayed above the dice."
        },
        {
            question: "What are the odds of rolling a 7 with 2 dice (2d6)?",
            answer: "When rolling 2 standard six-sided dice (2d6), the sum 7 has the highest probability: 6 out of 36 possible combinations (16.67% or roughly 1 in 6). The next most probable sums are 6 and 8 (13.89% each), while 2 ('snake eyes') and 12 ('boxcars') are the rarest at 2.78% each."
        },
        {
            question: "What are the odds of rolling a Natural 20 with Advantage in D&D 5e?",
            answer: "With Advantage, you roll two D20 dice and take the higher result. This almost doubles your odds of rolling a Natural 20 (critical hit) from 5.0% (1 in 20) to 9.75% (nearly 1 in 10). Conversely, rolling with Disadvantage drops your chance of a Natural 20 to just 0.25% (1 in 400) and spikes your chance of rolling a Critical Fumble (Nat 1) to 9.75%."
        },
        {
            question: "Can I roll a D100 (percentile die) or multi-dice like 3D6 or 4D6?",
            answer: "Yes! Select D100 from the sides dropdown to roll numbers between 1 and 100 for random encounter tables and wild magic. You can also set the dice count to 3 or 4 to roll 3D6 for classic tabletop stats or 4D6 for D&D character stat generation with instant automatic summation."
        },
        {
            question: "Can I use this virtual dice roller for D&D 5e (Dungeons & Dragons)?",
            answer: "Yes! Our virtual dice roller supports all 7 standard polyhedral D&D dice: D4, D6, D8, D10, D12, D20, and D100. Use D20 for attack rolls, saving throws, and ability checks; D6, D8, and D12 for weapon and spell damage; and pair two D10s or use D100 for percentile tables and wild magic."
        },
        {
            question: "Is this online dice roller truly random and fair?",
            answer: "Yes! Every roll is calculated using the browser's native Web Crypto API (crypto.getRandomValues). Unlike physical dice that can suffer from air bubbles, rounded edges, or uneven paint, our digital dice generator guarantees mathematically exact, unbiased probability for every face."
        },
        {
            question: "What is the difference between 'die' and 'dice'?",
            answer: "'Die' is the singular form (1 die), while 'dice' is the plural form (2 or more dice). However, in modern usage, 'roll a dice' has become widely accepted alongside 'roll a die'. Our roller supports both single-die and multi-dice rolls!"
        },
        {
            question: "Is this online dice roller free with no download?",
            answer: "100% free! There are no signups, no apps to install, and no paywalls. It works seamlessly on iPhone, Android, iPad, Mac, and Windows PC directly in your web browser."
        }
    ]);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Dice Roller", item: `${SITE_CONFIG.url}/dice-roller` },
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Roll Dice Online",
        description: "Roll single or multiple dice online instantly using our free virtual dice roller.",
        steps: [
            { name: "Select Dice Count & Type", text: "Choose how many dice to roll (1 to 6) and pick your die format (D4, D6, D8, D10, D12, D20, or D100).", position: 1 },
            { name: "Roll the Dice", text: "Click the 'Roll Dice' button to trigger the roll animation.", position: 2 },
            { name: "View Results & Total Sum", text: "Inspect the individual face values, view the total sum, and check your roll history.", position: 3 },
        ],
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />

            {/* Hero Section */}
            <section className="pb-6 sm:pb-10 lg:pb-16 lg:pt-10 pt-6 sm:pt-8 bg-gradient-to-b from-indigo-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-10 sm:mb-8 mb-4">
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Dice Roller Online – Free Virtual Dice Roller
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Roll a die (1-6), roll 2 dice, or roll polyhedral D&amp;D dice (D20, D100, D12, D10, D8, D4). 100% free with multi-dice rolling, instant sums, and roll statistics.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-4 sm:p-8">
                        <DiceRoller />
                    </div>
                </div>
            </section>

            {/* Feature Highlights */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use Our Virtual Dice Roller?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Built for tabletop gamers, board game fans, teachers, and everyday decision makers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 md:p-6 p-4 md:rounded-2xl rounded-xl border border-indigo-200 hover:shadow-md transition-shadow">
                            <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                <FiShield className="text-2xl text-indigo-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Cryptographic Fairness</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Uses the Web Crypto API for true mathematical randomization. Zero weighted dice bias, zero predictable patterns.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-6 p-4 md:rounded-2xl rounded-xl border border-green-200 hover:shadow-md transition-shadow">
                            <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                <IoSettingsOutline className="text-2xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">All Polyhedral Types</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Supports D4, D6, D8, D10, D12, D20, and D100. All the polyhedral dice required for tabletop RPGs and board games.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-6 p-4 md:rounded-2xl rounded-xl border border-purple-200 hover:shadow-md transition-shadow">
                            <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                <IoGameControllerOutline className="text-2xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Roll Up to 6 Dice</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Roll 1 die, roll 2 dice, or up to 6 dice simultaneously. Automatic sum calculations save you time during gameplay.</p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 md:p-6 p-4 md:rounded-2xl rounded-xl border border-amber-200 hover:shadow-md transition-shadow">
                            <div className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                <FiTrendingUp className="text-2xl text-amber-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Live Roll History</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Track your recent rolls and cumulative statistics in real time. Ideal for verifying past rolls and probability demos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Section: Master Dice Probability Cheat Sheet & D&D 5e Odds Matrix */}
            <section className="py-10 lg:py-16 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-8 sm:mb-12">
                        <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 inline-block mb-3">
                            Probability &amp; Mathematics
                        </span>
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Master Dice Probability Matrix &amp; D&amp;D 5e Odds Guide
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                            Understand the exact mathematical odds behind every roll. From 2D6 Catan probabilities to D&amp;D 5e Advantage multipliers, here is your definitive dice cheat sheet.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-8">
                        {/* Table 1: Polyhedral Dice Stats & Expected Values */}
                        <div className="bg-gradient-to-br from-gray-50 to-indigo-50/40 p-5 sm:p-7 rounded-2xl border border-indigo-200/80 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <span>📐</span> Polyhedral Dice Expected Values (D4 to D100)
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                                    The mathematical average (expected value) and critical hit odds for each die type:
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-xs sm:text-sm">
                                        <thead>
                                            <tr className="border-b border-indigo-200/70 text-gray-700">
                                                <th className="py-2 font-semibold">Die</th>
                                                <th className="py-2 font-semibold">Shape</th>
                                                <th className="py-2 font-semibold">Range</th>
                                                <th className="py-2 font-semibold">Average (EV)</th>
                                                <th className="py-2 font-semibold">Max Roll %</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-indigo-100/60 text-gray-800">
                                            <tr><td className="py-2 font-bold text-indigo-700">D4</td><td className="py-2 text-gray-600">Tetrahedron</td><td className="py-2">1–4</td><td className="py-2 font-mono font-semibold">2.5</td><td className="py-2 font-bold text-indigo-700">25.0%</td></tr>
                                            <tr><td className="py-2 font-bold text-indigo-700">D6</td><td className="py-2 text-gray-600">Cube (Hexahedron)</td><td className="py-2">1–6</td><td className="py-2 font-mono font-semibold">3.5</td><td className="py-2 font-bold text-indigo-700">16.67%</td></tr>
                                            <tr><td className="py-2 font-bold text-indigo-700">D8</td><td className="py-2 text-gray-600">Octahedron</td><td className="py-2">1–8</td><td className="py-2 font-mono font-semibold">4.5</td><td className="py-2 font-bold text-indigo-700">12.5%</td></tr>
                                            <tr><td className="py-2 font-bold text-indigo-700">D10</td><td className="py-2 text-gray-600">Pentagonal Trapezohedron</td><td className="py-2">1–10</td><td className="py-2 font-mono font-semibold">5.5</td><td className="py-2 font-bold text-indigo-700">10.0%</td></tr>
                                            <tr><td className="py-2 font-bold text-indigo-700">D12</td><td className="py-2 text-gray-600">Dodecahedron</td><td className="py-2">1–12</td><td className="py-2 font-mono font-semibold">6.5</td><td className="py-2 font-bold text-indigo-700">8.33%</td></tr>
                                            <tr><td className="py-2 font-bold text-indigo-700">D20</td><td className="py-2 text-gray-600">Icosahedron</td><td className="py-2">1–20</td><td className="py-2 font-mono font-semibold">10.5</td><td className="py-2 font-bold text-indigo-700">5.0% (Nat 20)</td></tr>
                                            <tr><td className="py-2 font-bold text-indigo-700">D100</td><td className="py-2 text-gray-600">Percentile (2xD10)</td><td className="py-2">1–100</td><td className="py-2 font-mono font-semibold">50.5</td><td className="py-2 font-bold text-indigo-700">1.0%</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="mt-4 pt-3 border-t border-indigo-200/60 text-xs text-gray-700 leading-relaxed bg-white/70 p-3 rounded-xl">
                                💡 <strong>Average Formula:</strong> For any fair N-sided die, the expected average roll is strictly calculated as <code>(N + 1) / 2</code>. A D20 averages 10.5, not 10!
                            </div>
                        </div>

                        {/* Table 2: D&D 5e Advantage vs Normal vs Disadvantage */}
                        <div className="bg-white p-5 sm:p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <span>⚔️</span> D&amp;D 5e: Advantage vs. Normal vs. Disadvantage
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                                    Rolling 2 D20s and taking the higher (Advantage) or lower (Disadvantage) completely alters your probabilities:
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-xs sm:text-sm">
                                        <thead>
                                            <tr className="border-b border-gray-200 text-gray-700">
                                                <th className="py-2 font-semibold">Metric</th>
                                                <th className="py-2 font-semibold text-rose-600">Disadvantage</th>
                                                <th className="py-2 font-semibold text-gray-700">Normal (1d20)</th>
                                                <th className="py-2 font-semibold text-emerald-700">Advantage</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-gray-700">
                                            <tr>
                                                <td className="py-2.5 font-medium">Average Expected Roll</td>
                                                <td className="py-2.5 font-mono text-rose-600 font-semibold">7.18 (-3.32)</td>
                                                <td className="py-2.5 font-mono font-semibold">10.50</td>
                                                <td className="py-2.5 font-mono text-emerald-700 font-bold">13.82 (+3.32)</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2.5 font-medium">Critical Hit (Nat 20)</td>
                                                <td className="py-2.5 text-rose-600">0.25% (1 in 400)</td>
                                                <td className="py-2.5">5.00% (1 in 20)</td>
                                                <td className="py-2.5 text-emerald-700 font-bold">9.75% (~1 in 10)</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2.5 font-medium">Critical Fumble (Nat 1)</td>
                                                <td className="py-2.5 text-rose-600 font-semibold">9.75% (~1 in 10)</td>
                                                <td className="py-2.5">5.00% (1 in 20)</td>
                                                <td className="py-2.5 text-emerald-700 font-bold">0.25% (1 in 400)</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2.5 font-medium">Hit DC 15 Check</td>
                                                <td className="py-2.5 text-rose-600">9.0%</td>
                                                <td className="py-2.5">30.0%</td>
                                                <td className="py-2.5 text-emerald-700 font-bold">51.0%</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2.5 font-medium">Hit DC 10 Check</td>
                                                <td className="py-2.5 text-rose-600">30.25%</td>
                                                <td className="py-2.5">55.0%</td>
                                                <td className="py-2.5 text-emerald-700 font-bold">79.75%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <p className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-600 leading-relaxed">
                                🎯 <strong>Key Takeaway:</strong> In 5th Edition D&amp;D, having Advantage is equivalent to a massive passive boost of roughly <strong>+3.32 to +5</strong> on your roll depending on target DC!
                            </p>
                        </div>
                    </div>

                    {/* Table 3: 2D6 Bell Curve Distribution (Monopoly, Catan, Craps) */}
                    <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-5 sm:p-8 rounded-2xl shadow-md">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-lg sm:text-2xl font-bold flex items-center gap-2">
                                    <span>🎲</span> 2D6 Probability Bell Curve (Sums 2 to 12)
                                </h3>
                                <p className="text-xs sm:text-sm text-indigo-200 mt-1">
                                    Why 7 is the king of board games (Settlers of Catan, Monopoly, Backgammon, Craps):
                                </p>
                            </div>
                            <div className="text-xs bg-indigo-800/60 border border-indigo-700/60 px-3.5 py-2 rounded-xl text-indigo-200 self-start md:self-auto">
                                Total Outcomes: <strong>6 × 6 = 36 Combinations</strong>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b border-indigo-800 text-indigo-300">
                                        <th className="py-2 font-semibold">Sum</th>
                                        <th className="py-2 font-semibold">Combinations</th>
                                        <th className="py-2 font-semibold">Ways</th>
                                        <th className="py-2 font-semibold">Probability</th>
                                        <th className="py-2 font-semibold">Board Game Impact</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-indigo-900/60 text-indigo-100">
                                    <tr><td className="py-2 font-bold text-amber-400">2</td><td className="py-2 text-indigo-300 font-mono text-xs">(1,1)</td><td className="py-2">1 / 36</td><td className="py-2 font-semibold">2.78%</td><td className="py-2 text-xs text-indigo-300">Snake Eyes in Craps &amp; lowest Catan yield</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">3</td><td className="py-2 text-indigo-300 font-mono text-xs">(1,2), (2,1)</td><td className="py-2">2 / 36</td><td className="py-2 font-semibold">5.56%</td><td className="py-2 text-xs text-indigo-300">Craps loss on Come-Out roll</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">4</td><td className="py-2 text-indigo-300 font-mono text-xs">(1,3), (2,2), (3,1)</td><td className="py-2">3 / 36</td><td className="py-2 font-semibold">8.33%</td><td className="py-2 text-xs text-indigo-300">Moderate resource hex in Catan</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">5</td><td className="py-2 text-indigo-300 font-mono text-xs">(1,4), (2,3), (3,2), (4,1)</td><td className="py-2">4 / 36</td><td className="py-2 font-semibold">11.11%</td><td className="py-2 text-xs text-indigo-300">Strong Catan tile (4 pips)</td></tr>
                                    <tr className="bg-indigo-900/40"><td className="py-2.5 font-bold text-emerald-400">6</td><td className="py-2.5 text-indigo-200 font-mono text-xs">(1,5), (2,4), (3,3), (4,2), (5,1)</td><td className="py-2.5">5 / 36</td><td className="py-2.5 font-bold text-emerald-300">13.89%</td><td className="py-2.5 text-xs text-emerald-200 font-semibold">Prime Catan red number (5 pips)</td></tr>
                                    <tr className="bg-indigo-900/70 border-y border-amber-400/40"><td className="py-2.5 font-extrabold text-amber-300 text-base">7</td><td className="py-2.5 text-amber-200 font-mono text-xs">(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)</td><td className="py-2.5 font-bold text-amber-300">6 / 36</td><td className="py-2.5 font-extrabold text-amber-300 text-base">16.67%</td><td className="py-2.5 text-xs text-amber-200 font-bold">Robber in Catan (1 in 6 rolls!), Craps Natural</td></tr>
                                    <tr className="bg-indigo-900/40"><td className="py-2.5 font-bold text-emerald-400">8</td><td className="py-2.5 text-indigo-200 font-mono text-xs">(2,6), (3,5), (4,4), (5,3), (6,2)</td><td className="py-2.5">5 / 36</td><td className="py-2.5 font-bold text-emerald-300">13.89%</td><td className="py-2.5 text-xs text-emerald-200 font-semibold">Prime Catan red number (5 pips)</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">9</td><td className="py-2 text-indigo-300 font-mono text-xs">(3,6), (4,5), (5,4), (6,3)</td><td className="py-2">4 / 36</td><td className="py-2 font-semibold">11.11%</td><td className="py-2 text-xs text-indigo-300">Strong Catan tile (4 pips)</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">10</td><td className="py-2 text-indigo-300 font-mono text-xs">(4,6), (5,5), (6,4)</td><td className="py-2">3 / 36</td><td className="py-2 font-semibold">8.33%</td><td className="py-2 text-xs text-indigo-300">Moderate resource hex in Catan</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">11</td><td className="py-2 text-indigo-300 font-mono text-xs">(5,6), (6,5)</td><td className="py-2">2 / 36</td><td className="py-2 font-semibold">5.56%</td><td className="py-2 text-xs text-indigo-300">Craps win on Come-Out roll (Yo-leven)</td></tr>
                                    <tr><td className="py-2 font-bold text-amber-400">12</td><td className="py-2 text-indigo-300 font-mono text-xs">(6,6)</td><td className="py-2">1 / 36</td><td className="py-2 font-semibold">2.78%</td><td className="py-2 text-xs text-indigo-300">Boxcars in Craps &amp; lowest Catan yield</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4 pt-3 border-t border-indigo-800/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-indigo-300">
                            <span>🎯 <strong>Monopoly Doubles Rule:</strong> Chance of rolling doubles on any turn is 6/36 (16.67%). Three consecutive doubles sends you to jail: (1/6)³ = <strong>0.46% (1 in 216)</strong>.</span>
                            <span className="text-amber-300 font-medium">Sum 7 is 6x more likely than Sum 2 or 12!</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Polyhedral Dice Types Explained */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Polyhedral Dice Types Explained (D4 through D100)
                        </h2>
                        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                            Whether you need a classic 6-sided die or a 20-sided D&amp;D die, our simulator covers every standard tabletop format
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 max-w-5xl mx-auto">
                        <div className="bg-white md:p-6 p-4 rounded-2xl shadow-sm border border-gray-200/80">
                            <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg flex items-center gap-2">
                                <span>🎲</span> D6 – Standard 6-Sided Die (1-6)
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">The most famous die in history. Used in Monopoly, Catan, Yahtzee, Craps, and Risk. Displays traditional pip faces (⚀ through ⚅). Range: 1 to 6.</p>
                        </div>

                        <div className="bg-white md:p-6 p-4 rounded-2xl shadow-sm border border-gray-200/80">
                            <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg flex items-center gap-2">
                                <span>⚔️</span> D20 – The D&amp;D 5e Icon (1-20)
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">The 20-sided icosahedron is the heart of Dungeons &amp; Dragons. Used for attack rolls, saving throws, and ability checks. Rolling a Natural 20 is the ultimate critical hit!</p>
                        </div>

                        <div className="bg-white md:p-6 p-4 rounded-2xl shadow-sm border border-gray-200/80">
                            <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg flex items-center gap-2">
                                <span>🔺</span> D4 – Four-Sided Tetrahedron (1-4)
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">The sharp four-sided pyramid. Used in D&amp;D for daggers, clubs, unarmed combat, and iconic spells like Magic Missile. Range: 1 to 4.</p>
                        </div>

                        <div className="bg-white md:p-6 p-4 rounded-2xl shadow-sm border border-gray-200/80">
                            <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg flex items-center gap-2">
                                <span>💎</span> D8 – Eight-Sided Octahedron (1-8)
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">The double-pyramid 8-sided die. Frequently rolled for one-handed longsword damage, rapier attacks, and cleric hit dice. Range: 1 to 8.</p>
                        </div>

                        <div className="bg-white md:p-6 p-4 rounded-2xl shadow-sm border border-gray-200/80">
                            <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg flex items-center gap-2">
                                <span>🔟</span> D10 – Ten-Sided Decahedron (1-10)
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">The kite-faced 10-sided die. Used for heavy weapon damage (halberds, heavy crossbows) and paired together to roll percentile D100 dice.</p>
                        </div>

                        <div className="bg-white md:p-6 p-4 rounded-2xl shadow-sm border border-gray-200/80">
                            <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg flex items-center gap-2">
                                <span>🛡️</span> D12 &amp; D100 – Big Dice
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">The 12-sided dodecahedron (Barbarian Greataxe damage) and the D100 percentile die (1-100 for random loot tables and wild magic surges).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Multi-Dice Modes */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Popular Dice Rolling Configurations
                        </h2>
                        <p className="text-sm text-gray-600">Select dice count (1 to 6) in our roller to match your game&apos;s exact rules</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                        <div className="bg-indigo-50/60 p-5 sm:p-6 rounded-2xl border border-indigo-200">
                            <h3 className="font-bold text-indigo-900 mb-3 text-lg flex items-center gap-2">
                                <span>🎲</span> Roll 2 Dice (2D6 Board Game Mode)
                            </h3>
                            <p className="text-sm text-indigo-950 mb-3 leading-relaxed">
                                Rolling two 6-sided dice (2d6) produces sums from <strong>2 to 12</strong>. Used in <strong>Monopoly, Settlers of Catan, Backgammon, and Craps</strong>.
                            </p>
                            <div className="bg-white p-3.5 rounded-xl border border-indigo-100 text-xs text-indigo-900 space-y-1">
                                <div className="flex justify-between font-semibold border-b pb-1">
                                    <span>Target Sum</span>
                                    <span>Combinations</span>
                                    <span>Probability</span>
                                </div>
                                <div className="flex justify-between"><span>Sum = 7</span><span>6 ways</span><span className="font-bold text-indigo-600">16.67% (Highest)</span></div>
                                <div className="flex justify-between"><span>Sum = 6 or 8</span><span>5 ways each</span><span>13.89%</span></div>
                                <div className="flex justify-between"><span>Sum = 2 or 12</span><span>1 way each</span><span>2.78% (Lowest)</span></div>
                            </div>
                        </div>

                        <div className="bg-purple-50/60 p-5 sm:p-6 rounded-2xl border border-purple-200">
                            <h3 className="font-bold text-purple-900 mb-3 text-lg flex items-center gap-2">
                                <span>⚔️</span> D&amp;D 5e Dice Rolling (D20 &amp; Multi-Dice)
                            </h3>
                            <p className="text-sm text-purple-950 mb-3 leading-relaxed">
                                Everything you need for your Dungeons &amp; Dragons 5th Edition campaign, Pathfinder, and Call of Cthulhu sessions:
                            </p>
                            <ul className="text-xs text-purple-900 space-y-2">
                                <li className="flex items-start gap-1.5">• <strong>1d20:</strong> Core d20 roll for attack checks, saving throws, and DC skill checks.</li>
                                <li className="flex items-start gap-1.5">• <strong>4d6 (Drop Lowest):</strong> Roll 4 D6 dice to generate character ability stats.</li>
                                <li className="flex items-start gap-1.5">• <strong>Multi-D6 &amp; Multi-D8:</strong> Roll 6d6 for lightning bolts or up to 6d8 for high-level divine smites.</li>
                                <li className="flex items-start gap-1.5">• <strong>D100 Percentile:</strong> Instant 1-100 rolls for DM random encounter and wild magic tables.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Depth SEO Guide Section */}
            <section className="py-10 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-5 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
                            The Complete Guide to Online Dice Rolling
                        </h2>

                        <div className="lg:space-y-6 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                            <p>
                                Dice have been humanity&apos;s trusted tool for gaming and probability for more than 5,000 years. From ancient Mesopotamian knucklebones to the precision-cut polyhedral dice sets used by modern tabletop RPG players, dice remain the bedrock of gaming. Our free <strong>online dice roller</strong> brings this timeless practice into the digital age, offering cryptographically fair randomization, customizable dice counts, and instant sum calculations directly in your browser.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-6 mb-3">
                                Why Digital Dice Rollers Are Fairer Than Physical Dice
                            </h3>
                            <p>
                                Many tabletop players are surprised to learn that <strong>physical dice are almost never 100% fair</strong>. Common mass-produced plastic dice from board game boxes and hobby shops frequently suffer from subtle manufacturing defects:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Internal Air Bubbles:</strong> Plastic injection molding often leaves microscopic air voids inside the die, shifting its center of mass toward one side.
                                </li>
                                <li>
                                    <strong>Uneven Pip Drilling:</strong> On a standard D6, the &quot;6&quot; face has six recessed holes drilled out, making that side slightly lighter than the &quot;1&quot; face, subtly increasing the odds of rolling a 1!
                                </li>
                                <li>
                                    <strong>Tumbled Round Corners:</strong> Industrial tumbling to round dice corners produces irregular vertex angles that favor specific landing edges.
                                </li>
                            </ul>
                            <p>
                                Our <strong>virtual dice simulator</strong> relies on the <code>window.crypto.getRandomValues</code> API. This cryptographic standard provides true hardware-assisted entropy, guaranteeing that every face—whether on a D6, D20, or D100—has an identical, perfectly balanced mathematical chance of appearing on every single roll.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-6 mb-3">
                                How to Roll a Die (1-6) or Roll 2 Dice Online
                            </h3>
                            <p>
                                Playing a board game like Monopoly or Catan and lost the physical dice? You don&apos;t need to stop game night:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>Open <strong>SpinPickOnline Dice Roller</strong> on your phone or tablet.</li>
                                <li>Set <strong>Dice</strong> to <code>2 dice</code> and <strong>Sides</strong> to <code>D6</code>.</li>
                                <li>Tap <strong>Roll Dice</strong>. Both dice roll with smooth animation, and the total sum is instantly calculated on screen.</li>
                                <li>Pass the phone to the next player, or keep it in the center of the table for everyone to see!</li>
                            </ol>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-6 mb-3">
                                Online Dice Roller vs. Spinner Wheel: When to Use Each
                            </h3>
                            <p>
                                Both dice rollers and spinner wheels generate random results, but they serve different purposes:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-1">🎲 When to Use Dice:</h4>
                                    <p className="text-sm text-gray-600">Best for numerical ranges (1-6, 1-20), multi-dice summation (2d6, 3d6), tabletop RPG skill checks, and classic board game movement.</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-1">🎡 When to Use a Wheel:</h4>
                                    <p className="text-sm text-gray-600">Best for custom names, prizes, food options, raffles, and visual presentations where multiple text choices are spinning.</p>
                                </div>
                            </div>
                            <p>
                                If you only need a quick 50/50 decision, check out our <Link href="/flip-a-coin" className="text-blue-600 hover:underline font-semibold">Online Coin Flipper</Link> or <Link href="/yes-no-wheel" className="text-blue-600 hover:underline font-semibold">Yes or No Wheel</Link>. For picking names or raffle winners, spin our <Link href="/random-picker-wheel" className="text-blue-600 hover:underline font-semibold">Random Picker Wheel</Link>.
                            </p>

                            <div className="mt-8 p-5 sm:p-6 bg-indigo-50 rounded-2xl border border-indigo-200">
                                <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                                    <IoHelpCircleOutline className="text-xl text-indigo-600" />
                                    Did You Know? The World&apos;s Oldest 20-Sided Die
                                </h4>
                                <p className="text-indigo-800 text-sm leading-relaxed">
                                    While the D20 was popularized in 1974 with the release of Dungeons &amp; Dragons, 20-sided icosahedral dice have existed for thousands of years! The Metropolitan Museum of Art in New York holds a serpentine D20 dating back to Ptolemaic Egypt (circa 304–30 BC), carved with ancient Greek letters. Long before D&amp;D wizards were casting magic missiles, ancient fortune tellers were rolling d20 dice for divination!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Navigation / Related Tools */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                            Explore More Free Decision &amp; Randomizer Tools
                        </h2>
                        <p className="text-sm text-gray-600">Fast, fair tools to pick winners, break ties, and make decisions</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                        {[
                            { href: "/flip-a-coin", label: "🪙 Flip a Coin" },
                            { href: "/random-number-wheel", label: "🔢 Number Wheel" },
                            { href: "/random-picker-wheel", label: "🎡 Random Picker" },
                            { href: "/yes-no-wheel", label: "✅ Yes/No Wheel" },
                            { href: "/team-picker", label: "👥 Team Picker" },
                            { href: "/food-picker-wheel", label: "🍕 Food Picker" },
                            { href: "/randomizer-wheel", label: "⚙️ Randomizer Wheel" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-sm transition-all"
                            >
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
