import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiList } from "react-icons/fi";
import { IoOptionsOutline, IoShuffleOutline, IoSparklesOutline, IoFlashOutline } from "react-icons/io5";
import { FiShield, FiTarget } from "react-icons/fi";
import { generateFAQSchema, generateWebApplicationSchema, generateMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generateMetadata({
    title: "Randomizer Wheel – Free Random Selector & Generator Tool",
    description: "Free randomizer wheel to randomly select from any list. Perfect random selector for games, giveaways, content creation, and decisions. No signup, works on any device.",
    canonical: "/randomizer-wheel",
});

// Default choice entries
const RANDOMIZER_ENTRIES = [
    { id: "1", label: "Option A", color: "#3b82f6" },
    { id: "2", label: "Option B", color: "#ef4444" },
    { id: "3", label: "Option C", color: "#10b981" },
    { id: "4", label: "Option D", color: "#f59e0b" },
    { id: "5", label: "Option E", color: "#8b5cf6" },
];

export default function RandomizerWheelPage() {
    const webAppSchema = generateWebApplicationSchema();
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Randomizer Wheel", item: `${SITE_CONFIG.url}/randomizer-wheel` },
    ]);
    const faqSchema = generateFAQSchema([
        {
            question: "What is a randomizer and how does it work?",
            answer: "A randomizer is a tool that selects one or more items from a list using an unpredictable algorithm. Our randomizer wheel uses the Web Crypto API—the same cryptographic engine used in online banking—to guarantee that every selection is mathematically unbiased and impossible to predict."
        },
        {
            question: "How is a randomizer different from a picker wheel?",
            answer: "While both tools spin a wheel, a picker wheel is designed to pick names from a roster. A randomizer is a general-purpose selection tool optimized for any type of input: words, numbers, actions, challenges, or custom options. Think of it as a blank-canvas generator for any situation."
        },
        {
            question: "Can I use this randomizer for board games and D&D?",
            answer: "Absolutely! Tabletop gamers use our randomizer to decide turn order, generate random encounters, pick random challenges, or select loot drops. It replaces physical dice when you need more than 6 or 20 options."
        },
        {
            question: "Is the randomizer fair enough for contests and giveaways?",
            answer: "Yes. Our randomizer uses cryptographically secure randomness (CSPRNG), meaning results cannot be manipulated or predicted. It meets the fairness requirements for social media giveaways, classroom raffles, and informal contests."
        },
        {
            question: "How many options can I add to the randomizer?",
            answer: "You can add up to 1,000 options. The wheel is optimized to render large lists smoothly without browser lag or performance issues."
        },
        {
            question: "Does the randomizer save my data?",
            answer: "Your options are stored in your browser's localStorage on your own device. Nothing is ever sent to our servers. Clear your browser data to remove all saved randomizer wheels."
        },
        {
            question: "What is the difference between a randomizer and a random number generator?",
            answer: "A random number generator outputs a number within a range (e.g., 1–100). A randomizer selects from a custom list of text options you define. Use our randomizer when you need to select from specific labeled choices rather than numeric ranges."
        }
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* Hero Section with Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-teal-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
                            <IoOptionsOutline className="text-lg" />
                            <span>Random Selector Tool</span>
                        </div>
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Randomizer Wheel – Random Selector & Generator
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The ultimate random selection tool. Type any options — words, actions, challenges, or ideas — spin the wheel, and let the randomizer choose for you. 100% free, cryptographically fair, and unlimited.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={RANDOMIZER_ENTRIES} storageKey="randomizerWheelState" />
                </div>
            </section>

            {/* Benefits */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use Our Random Selector?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            A blank-canvas randomizer for any situation — games, decisions, content, and more
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-teal-200 hover:shadow-lg transition-shadow">
                            <div className="bg-teal-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiTarget className="text-xl text-teal-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">General Purpose</h3>
                            <p className="md:text-base text-sm text-gray-600">Not limited to names — randomize words, actions, challenges, topics, or any custom list.</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-sky-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiShield className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Cryptographic Fairness</h3>
                            <p className="md:text-base text-sm text-gray-600">Uses Web Crypto API — the same security standard as online banking — for true randomness.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Gamified Experience</h3>
                            <p className="md:text-base text-sm text-gray-600">The spinning animation builds suspense and makes random selection feel exciting, not mechanical.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiList className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Up to 1,000 Options</h3>
                            <p className="md:text-base text-sm text-gray-600">Handle massive option lists without lag. Paste from spreadsheets, docs, or type manually.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extensive SEO Content Section */}
            <section className="py-10 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
                            The Complete Guide to Randomizers: How Random Selection Works
                        </h2>

                        <div className="lg:space-y-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                A <strong>randomizer</strong> is any tool, algorithm, or system that produces unpredictable outcomes from a defined set of options. Unlike a simple coin flip that is limited to two outcomes, or a dice roll limited to six, a digital randomizer lets you define <em>any</em> number of custom options and select one (or more) at random. It is the most versatile form of random selection available.
                            </p>
                            <p>
                                Our <strong>randomizer wheel</strong> brings this concept to life in a visual, interactive format. You type your options into the input panel, and each option becomes a color-coded slice on the wheel. When you click to spin, a cryptographically secure algorithm determines the result — the animated wheel is purely visual. The outcome is decided by math, not physics, ensuring perfect fairness every time.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Randomizer vs. Random Number Generator: When to Use Each</h3>
                            <p>
                                People often confuse randomizers with random number generators (RNGs), but they serve different purposes. A <strong>random number generator</strong> produces a number within a range — for example, a random integer between 1 and 100. This is useful when your options are inherently numeric, like lottery numbers or dice rolls. You can try our <Link href="/random-number-wheel/1-10" className="text-blue-600 hover:underline">Random Number Wheel</Link> for that purpose.
                            </p>
                            <p>
                                A <strong>randomizer</strong>, on the other hand, works with labeled options. Instead of &quot;pick a number between 1 and 5,&quot; you say &quot;pick between Pizza, Sushi, Tacos, Burgers, and Salad.&quot; The output is the option itself, not a number that maps to an option. This eliminates the extra step of number-to-label conversion and makes the result immediately meaningful.
                            </p>
                            <p>
                                <strong>Use a randomizer when:</strong> your options are words, phrases, actions, or anything that is not a simple number. <strong>Use a random number generator when:</strong> you need a number within a specific range, like rolling a virtual die.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Creative Ways to Use a Randomizer</h3>
                            <p>
                                Because the randomizer is a blank canvas, the only limit is your creativity. Here are some of the most popular and inventive ways people use our random selector tool:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Tabletop RPGs & D&D:</strong> Generate random encounters, pick random loot drops, determine turn order, or select random character traits. When you need more than 20 options, the randomizer wheel replaces physical dice entirely.</li>
                                <li><strong>Content Creation:</strong> YouTubers and TikTokers use the randomizer to pick video topics, random challenges, or &quot;spin the wheel&quot; format content. The visual spin makes great on-camera content.</li>
                                <li><strong>Workout Routines:</strong> Fitness coaches load exercises (Pushups, Burpees, Planks, Mountain Climbers, Squats) onto the wheel and spin to create randomized HIIT circuits that keep clients engaged and surprised.</li>
                                <li><strong>Travel Planning:</strong> Can&apos;t decide on a vacation destination? Load your top 5 choices and let the randomizer break the deadlock. Commit to the result for maximum spontaneity!</li>
                                <li><strong>Language Learning:</strong> ESL teachers put vocabulary words or conversation topics on the wheel. Each spin assigns a student a random word to define or a topic to discuss, making practice sessions more dynamic.</li>
                                <li><strong>Writing Prompts:</strong> Authors and creative writing students use the randomizer to generate story elements — character names, plot twists, settings, or genre constraints — to overcome writer&apos;s block.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">The Psychology Behind Random Selection</h3>
                            <p>
                                Why do people prefer a visual wheel over a simple text-based generator that instantly spits out an answer? The answer lies in psychology. Watching a wheel spin engages the same neural pathways as slot machines and game shows — it triggers dopamine release through anticipation. The journey of the spin is as satisfying as the result.
                            </p>
                            <p>
                                This psychological effect has practical benefits too. When people <em>see</em> the random selection process happen in front of them — the wheel accelerating, ticking past options, and slowly decelerating — they are far more likely to accept the outcome as fair. This is critical in group settings where trust matters. A hidden algorithm that instantly outputs a result feels opaque and suspicious. A visible, animated wheel feels transparent and trustworthy.
                            </p>
                            <p>
                                If you specifically need a simple yes-or-no answer, our <Link href="/yes-no-wheel" className="text-blue-600 hover:underline">Yes/No Wheel</Link> provides the same visual experience optimized for binary decisions. For choosing what to eat, try the <Link href="/food-picker-wheel" className="text-blue-600 hover:underline">Food Picker Wheel</Link> pre-loaded with popular cuisines.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">How We Ensure True Randomness</h3>
                            <p>
                                Not all randomizers are created equal. Many websites use <code>Math.random()</code>, a pseudo-random number generator (PRNG) that produces <em>seemingly</em> random numbers from a deterministic seed. While adequate for casual use, PRNGs can theoretically be reverse-engineered.
                            </p>
                            <p>
                                Our randomizer uses the browser&apos;s <strong>Web Crypto API</strong> (<code>crypto.getRandomValues()</code>), which is a cryptographically secure pseudo-random number generator (CSPRNG). This API harvests entropy from hardware-level sources — mouse movements, CPU timing jitter, and other unpredictable system events — to produce numbers that are provably impossible to predict. It is the same technology that secures your online banking transactions and HTTPS connections.
                            </p>
                            <p>
                                In practical terms, this means every slice on the wheel has an exactly equal probability of being selected, and no amount of observation or analysis can predict the next result. Whether you are running a casual office lottery or a public giveaway, our randomizer meets the highest standard of fairness.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Privacy and Local-Only Processing</h3>
                            <p>
                                Every option you type into our randomizer stays on your device. We use browser <code>localStorage</code> to persist your wheel state between sessions, so your custom options are still there when you come back tomorrow. But that data never leaves your browser — it is never transmitted to our servers, never logged, and never shared with third parties.
                            </p>
                            <p>
                                This local-only architecture means you can use the randomizer with sensitive data — employee names for a raffle, student names for assignments, or private project codenames — without any privacy concerns. To clear all saved data, simply clear your browser&apos;s local storage or use incognito mode for a completely ephemeral session.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Specialized Tools for Specific Needs</h3>
                            <p>
                                While this randomizer is the ultimate general-purpose tool, we have also built specialized versions for common scenarios. If your use case matches one of these, the dedicated tool may serve you better:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Choosing what to eat:</strong> The <Link href="/food-picker-wheel" className="text-blue-600 hover:underline">Food Picker Wheel</Link> comes pre-loaded with popular cuisines and restaurant categories.</li>
                                <li><strong>Picking a name from a roster:</strong> The <Link href="/name-picker" className="text-blue-600 hover:underline">Name Picker Wheel</Link> is optimized for handling large lists of human names with remove-after-pick functionality.</li>
                                <li><strong>Making a yes/no decision:</strong> The <Link href="/yes-no-wheel" className="text-blue-600 hover:underline">Yes/No Wheel</Link> is streamlined for binary choices.</li>
                                <li><strong>Assigning people to groups:</strong> The <Link href="/random-group-generator" className="text-blue-600 hover:underline">Random Group Generator</Link> helps teachers and coaches split rosters into balanced teams.</li>
                                <li><strong>Flipping a coin:</strong> The <Link href="/flip-a-coin" className="text-blue-600 hover:underline">Coin Flip Simulator</Link> is the fastest way to settle a 50/50 decision.</li>
                                <li><strong>Running a social media contest:</strong> The <Link href="/instagram-giveaway-picker" className="text-blue-600 hover:underline">Instagram Giveaway Picker</Link> is built specifically for selecting winners from comment sections.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            Explore More Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/food-picker-wheel", label: "Food Picker" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/flip-a-coin", label: "Flip a Coin" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/random-number-wheel/1-10", label: "Number Generator" },
                            { href: "/yes-no-wheel", label: "Yes/No Wheel" },
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

            <CallToAction />
        </div>
    );
}
