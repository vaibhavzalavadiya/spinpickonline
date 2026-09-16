import { Metadata } from "next";
import { generateMetadata, generateWebApplicationSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import DiceRoller from "@/components/DiceRoller";
import { CallToAction } from "@/components/CallToAction";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { FiShield, FiTrendingUp } from "react-icons/fi";
import { IoGameControllerOutline, IoSparklesOutline, IoFlashOutline, IoSettingsOutline } from "react-icons/io5";

export const metadata: Metadata = generateMetadata({
    title: "Dice Roller Online – Free Virtual Dice | Roll D4 to D20",
    description: "Roll dice online instantly with our free virtual dice roller. Supports D4, D6, D8, D10, D12, D20, and D100. Roll up to 6 dice at once. No app needed!",
    canonical: "/dice-roller",
});

export default function DiceRollerPage() {
    const applicationSchema = generateWebApplicationSchema({
        name: "Online Dice Roller",
        url: `${SITE_CONFIG.url}/dice-roller`,
        description: "Free online dice roller supporting D4, D6, D8, D10, D12, D20, and D100. Roll up to 6 dice at once.",
        featureList: "Virtual dice roller, D6 dice, D20 dice, Multiple dice, Dice statistics, Roll history, Board game dice, DnD dice roller",
    });

    const faqSchema = generateFAQSchema([
        {
            question: "Is the online dice roller truly random?",
            answer: "Yes! Our dice roller uses the Web Crypto API (cryptographically secure random number generation) to ensure every roll is perfectly fair. Each face of the die has an exactly equal probability of appearing – no weighted dice here!"
        },
        {
            question: "What types of dice can I roll?",
            answer: "We support all standard RPG and board game dice: D4 (4-sided), D6 (standard 6-sided), D8, D10, D12, D20 (used in Dungeons & Dragons), and D100 (percentile die). You can roll 1 to 6 dice at once."
        },
        {
            question: "Can I roll multiple dice at the same time?",
            answer: "Absolutely! Select how many dice you want (1 to 6) and the number of sides. Click Roll and all dice will be rolled simultaneously. The total sum is displayed automatically, which is perfect for board games and TTRPGs."
        },
        {
            question: "Is the dice roller free to use?",
            answer: "Yes, our online dice roller is completely free with no signup required. Roll as many times as you want on any device – phone, tablet, or computer. No app download needed."
        },
        {
            question: "Can I use this for Dungeons & Dragons?",
            answer: "Absolutely! Our D20 option is perfect for DnD attack rolls, ability checks, and saving throws. Use D6 for damage rolls, D8 for hit dice, D10 for percentile checks, and D12 for barbarian damage. Roll multiple dice at once for fireball damage (8d6) and more."
        }
    ]);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Dice Roller", item: `${SITE_CONFIG.url}/dice-roller` },
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Roll Dice Online",
        description: "Get instant dice roll results using our free virtual dice roller.",
        steps: [
            { name: "Choose Your Dice", text: "Select how many dice to roll (1-6) and the type of die (D4 through D100).", position: 1 },
            { name: "Click Roll", text: "Press the Roll Dice button to roll all dice simultaneously with smooth animation.", position: 2 },
            { name: "See Your Results", text: "View individual dice values, total sum, and track your roll history and statistics.", position: 3 },
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
                    <div className="text-center lg:mb-12 sm:mb-8 mb-4">
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Dice Roller Online – Free Virtual Dice
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Roll any dice instantly! From classic D6 for board games to D20 for Dungeons &amp; Dragons. Supports multiple dice, stat tracking, and cryptographically fair randomization.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow border border-gray-100 p-3 sm:p-8">
                        <DiceRoller />
                    </div>
                </div>
            </section>

            {/* Ad Banner */}
            <div className="container mx-auto px-4">
                <AdBanner slot="banner-320x50" className="flex justify-center" />
            </div>

            {/* Benefits */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use Our Online Dice Roller?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The fastest, fairest digital dice on the internet
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-indigo-200 hover:shadow-lg transition-shadow">
                            <div className="bg-indigo-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiShield className="text-xl text-indigo-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Truly Random</h3>
                            <p className="md:text-base text-sm text-gray-600">Web Crypto API ensures perfectly fair rolls. No weighted dice, no bias – guaranteed equal probability for every face.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSettingsOutline className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">All Dice Types</h3>
                            <p className="md:text-base text-sm text-gray-600">D4, D6, D8, D10, D12, D20, and D100. Every die you need for board games, RPGs, and tabletop sessions.</p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-amber-200 hover:shadow-lg transition-shadow">
                            <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiTrendingUp className="text-xl text-amber-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Stats & History</h3>
                            <p className="md:text-base text-sm text-gray-600">Track your total rolls, last result, running average, and full roll history. See probability in action.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoGameControllerOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Multi-Dice</h3>
                            <p className="md:text-base text-sm text-gray-600">Roll up to 6 dice simultaneously with automatic sum calculation. Perfect for damage rolls and skill checks.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dice Types Explained */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Dice Types Explained
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 max-w-5xl mx-auto">
                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🎲 D6 – Standard Die</h3>
                            <p className="md:text-base text-sm text-gray-600">The classic six-sided die used in Monopoly, Yahtzee, Craps, and most board games. Range: 1-6. The most common die in the world.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">⚔️ D20 – The Iconic</h3>
                            <p className="md:text-base text-sm text-gray-600">The twenty-sided icosahedron. The signature die of Dungeons &amp; Dragons used for attack rolls, ability checks, and saving throws. Range: 1-20.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🔺 D4 – Caltrops</h3>
                            <p className="md:text-base text-sm text-gray-600">The four-sided tetrahedron. Used in DnD for dagger damage and magic missile. Range: 1-4. Nicknamed &quot;caltrops&quot; because stepping on one hurts!</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">💎 D8 – Octahedron</h3>
                            <p className="md:text-base text-sm text-gray-600">The eight-sided die. Common for longsword damage, healing spells, and cleric hit dice in DnD. Range: 1-8.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🔟 D10 – Decahedron</h3>
                            <p className="md:text-base text-sm text-gray-600">The ten-sided die. Used for percentile rolls (pair two D10s for D100) and various RPG mechanics. Range: 1-10 (or 0-9).</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🛡️ D12 – Dodecahedron</h3>
                            <p className="md:text-base text-sm text-gray-600">The twelve-sided die. The barbarian&apos;s favorite in DnD – used for greataxe damage and barbarian hit dice. Range: 1-12.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center md:mb-8 mb-6">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                When to Use a Dice Roller
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                            <div className="bg-green-50 md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-green-200">
                                <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                                    <FiCheck className="text-green-500" /> Perfect For
                                </h3>
                                <ul className="space-y-2 md:text-base text-sm text-gray-700">
                                    <li>• Dungeons &amp; Dragons and tabletop RPGs</li>
                                    <li>• Board game nights (when you lose the dice!)</li>
                                    <li>• Classroom math &amp; probability exercises</li>
                                    <li>• Quick random number generation (1-6, 1-20)</li>
                                    <li>• Party games and icebreakers</li>
                                    <li>• Wargaming and miniature games</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-blue-200">
                                <h3 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                                    <IoSparklesOutline className="text-blue-500" /> Popular Combinations
                                </h3>
                                <ul className="space-y-2 md:text-base text-sm text-gray-700">
                                    <li>• <strong>2d6</strong> – Monopoly, Catan, backgammon</li>
                                    <li>• <strong>1d20</strong> – DnD attack rolls &amp; checks</li>
                                    <li>• <strong>4d6</strong> – DnD ability score generation</li>
                                    <li>• <strong>2d10</strong> – Percentile rolls (D100)</li>
                                    <li>• <strong>6d6</strong> – Yahtzee, Farkle</li>
                                    <li>• <strong>1d100</strong> – Percentile checks, wild magic</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extensive SEO Content Section */}
            <section className="py-10 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
                            The Complete Guide to Online Dice Rolling
                        </h2>

                        <div className="lg:space-y-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                Dice have been humanity&apos;s go-to randomization tool for over 5,000 years. From ancient Mesopotamian bone dice unearthed by archaeologists to the precision-engineered polyhedral sets used by modern tabletop RPG players, the humble die has shaped games, decisions, and even history. Our free <strong>online dice roller</strong> brings this ancient tradition into the digital age with the fairness guarantee of cryptographic randomization and the convenience of working on any device with a web browser.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Why Digital Dice Are Fairer Than Physical Dice</h3>
                            <p>
                                Physical dice are never perfectly balanced. Manufacturing imperfections, rounded edges, and material density variations all introduce subtle biases. Casino-grade dice cost $3-5 each and are inspected with calipers to within 1/10,000th of an inch, yet even these have measurable (though tiny) biases. Standard gaming dice from hobby shops? They can have significant imbalances.
                            </p>
                            <p>
                                Our <strong>virtual dice roller</strong> eliminates all physical bias by using the <code>Web Crypto API</code>. This is the same cryptographic standard used by banks and security systems. Every face of every die has mathematically exact equal probability. Whether you&apos;re rolling a D6 for Monopoly or a D20 for a critical hit in DnD, you can trust that the result is genuinely random.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Dice in Dungeons &amp; Dragons and TTRPGs</h3>
                            <p>
                                Tabletop role-playing games like <strong>Dungeons &amp; Dragons (DnD)</strong>, Pathfinder, and Call of Cthulhu rely heavily on dice rolls to determine outcomes. The standard DnD dice set includes seven polyhedral dice: D4, D6, D8, D10, D12, D20, and D100 (percentile). Each serves a specific purpose:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>D20 (Twenty-sided):</strong> The most iconic RPG die. Used for attack rolls, ability checks, and saving throws. Rolling a natural 20 (&quot;nat 20&quot;) is a critical hit – the most exciting moment in any DnD session.</li>
                                <li><strong>D6 (Six-sided):</strong> Used for ability score generation (roll 4d6, drop the lowest), damage for many weapons (shortsword = 1d6), and spells like Fireball (8d6 fire damage).</li>
                                <li><strong>D8 (Eight-sided):</strong> Common for longsword damage (1d8), healing spells (Cure Wounds = 1d8 + modifier), and cleric hit dice.</li>
                                <li><strong>D12 (Twelve-sided):</strong> The barbarian&apos;s signature – greataxe damage is 1d12. Also used for wild magic surges and certain spell effects.</li>
                                <li><strong>D4 (Four-sided):</strong> Used for dagger damage (1d4) and the Magic Missile spell. The smallest and most painful die to step on.</li>
                                <li><strong>D10/D100 (Percentile):</strong> Roll two D10s together for a D100 result (1-100). Used for random encounter tables, wild magic effects, and treasure generation.</li>
                            </ul>
                            <p>
                                Our roller supports all of these configurations. Need to roll 8d6 for a Fireball? Set dice to 6 and sides to D6, and we&apos;ll handle the math for you. Playing online via <strong>Discord or Roll20</strong>? Share your screen and use our roller for visible, trustworthy results everyone can see.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Dice for Board Games and Education</h3>
                            <p>
                                Beyond RPGs, dice are central to thousands of board games. <strong>Monopoly</strong> uses 2d6 for movement, <strong>Settlers of Catan</strong> uses 2d6 for resource production, <strong>Yahtzee</strong> uses 5d6 for scoring, and <strong>Risk</strong> uses D6 for attack and defense rolls. If you&apos;ve ever lost your game dice, our online roller is the perfect replacement – no download needed, works on your phone at the table.
                            </p>
                            <p>
                                In <strong>education</strong>, teachers use dice to teach probability, statistics, and basic arithmetic. Rolling dice in class helps students visualize concepts like expected value, variance, and the law of large numbers. Our built-in stats tracker makes this even easier – students can watch the average converge toward the theoretical mean (3.5 for a D6) over many rolls. For more classroom tools, check out our <Link href="/classroom-activities" className="text-blue-600 hover:underline">Classroom Activities Wheel</Link> and <Link href="/random-number-wheel" className="text-blue-600 hover:underline">Random Number Wheel</Link>.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Dice Roller vs. Spinner Wheel: When to Use Each</h3>
                            <p>
                                Both dice rollers and spinner wheels generate random results, but they serve different needs. Dice are best when you need a <strong>numerical result within a fixed range</strong> (1-6, 1-20, etc.) and especially when you need to roll multiple dice and sum the results. Spinner wheels are best when you need to choose from <strong>custom options</strong> (names, food choices, activities) with visual engagement.
                            </p>
                            <p>
                                For example: deciding who goes first in a game? Use our <Link href="/name-picker" className="text-blue-600 hover:underline">Name Picker Wheel</Link>. Rolling for damage in combat? Use this dice roller. Need a yes-or-no answer? Try our <Link href="/yes-no-wheel" className="text-blue-600 hover:underline">Yes/No Wheel</Link> or <Link href="/flip-a-coin" className="text-blue-600 hover:underline">Coin Flipper</Link>. Each tool has its ideal use case, and we&apos;ve built them all to work together seamlessly.
                            </p>

                            <div className="mt-8 p-4 sm:p-6 bg-indigo-50 rounded-xl md:rounded-2xl border border-indigo-200">
                                <h4 className="font-bold text-indigo-900 mb-2">Did You Know? 🎲</h4>
                                <p className="text-indigo-800 text-sm">
                                    The oldest known dice were found in a 5,000-year-old backgammon set in southeastern Iran. They were made from human knucklebones (astragali), which naturally have four distinct faces. The word &quot;dice&quot; comes from the Latin &quot;datum,&quot; meaning &quot;something given or played.&quot; Today, the global dice market is worth over $300 million annually, driven largely by the tabletop gaming renaissance!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Tools */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            More Randomization Tools
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Random Number Wheel
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Visual number spinner with custom ranges. See the number selection happen in real time on a spinning wheel.</p>
                            <Link href="/random-number-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Number Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Flip a Coin
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Need a 50/50 decision? Our 3D coin flipper with heads-or-tails history tracking.</p>
                            <Link href="/flip-a-coin" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Coin Flipper <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Random Picker Wheel
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Pick from any custom list of options. Add names, items, or choices and spin to select.</p>
                            <Link href="/random-picker-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Picker Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Team Picker
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Randomly assign players to teams for board games, sports, or classroom activities.</p>
                            <Link href="/team-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Team Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-8 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            Explore More Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/yes-no-wheel", label: "Yes/No Wheel" },
                            { href: "/randomizer-wheel", label: "Randomizer" },
                            { href: "/wheel-spinner", label: "Wheel Spinner" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Online Dice Roller FAQ</h2>
                        <div className="space-y-4">
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Is the online dice roller truly random?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Yes! Our dice roller uses the Web Crypto API for cryptographically secure random number generation. Every face has exactly equal probability – no weighted dice, no bias.
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">What dice types are supported?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    We support D4, D6, D8, D10, D12, D20, and D100. You can roll 1 to 6 dice at once with automatic total calculation.
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Can I roll multiple dice at once?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Absolutely! Select how many dice you want (1 to 6) and click Roll. All dice are rolled simultaneously and the total sum is displayed automatically.
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Can I use this for Dungeons &amp; Dragons?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Absolutely! Our D20 is perfect for DnD attack rolls, ability checks, and saving throws. Use D6 for damage, D8 for hit dice, and D10/D100 for percentile checks. Roll multiple dice at once for area-of-effect spells.
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Is the dice roller free?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Yes, our online dice roller is completely free with no signup required. Roll as many times as you want on any device – phone, tablet, or computer. No app download needed.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
}
