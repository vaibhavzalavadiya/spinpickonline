import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiList } from "react-icons/fi";
import { IoOptionsOutline, IoShuffleOutline, IoSparklesOutline, IoFlashOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema, generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
    title: "Randomizer Wheel – Free Online Spinner Wheel",
    description: "Use our free randomizer wheel to spin and make random selections instantly. Add names, words, or numbers. 100% fair and easy to use on any device.",
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
    const faqSchema = generateFAQSchema([
        {
            question: "How do I use the randomizer wheel?",
            answer: "Simply type your options (names, numbers, choices) into the text box next to the wheel. The randomizer wheel updates instantly. Once you've added all your items, click the wheel to spin and receive a random result."
        },
        {
            question: "Is this randomizer truly random?",
            answer: "Yes. Our randomizer wheel uses an advanced cryptographic random number generation formula to ensure that every spin is mathematically fair and unbiased."
        },
        {
            question: "How many items can I add to the randomizer?",
            answer: "You can add up to 1000 items to the wheel. It is designed to handle very large lists smoothly without lagging your browser."
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
            {/* Hero Section with Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-teal-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
                            <IoOptionsOutline className="text-lg" />
                            <span>Ultimate Randomizer</span>
                        </div>
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Randomizer Wheel
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The fastest way to randomize anything. Input your choices, spin the wheel, and let fate decide. 100% free, fair, and unlimited usage.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={RANDOMIZER_ENTRIES} storageKey="randomizerWheelState" />
                </div>
            </section>

            {/* Benefits */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use a Randomizer Wheel?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The ultimate blank-canvas decision tool
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-teal-200 hover:shadow-lg transition-shadow">
                            <div className="bg-teal-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoFlashOutline className="text-xl text-teal-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Instant Results</h3>
                            <p className="md:text-base text-sm text-gray-600">End decision paralysis in seconds. Type, spin, done.</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-sky-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShuffleOutline className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">100% Fair</h3>
                            <p className="md:text-base text-sm text-gray-600">Cryptographic randomization ensures every option has perfectly equal odds.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Fun Animations</h3>
                            <p className="md:text-base text-sm text-gray-600">Gameshow-like spin with ticking sounds builds real suspense.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiList className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Up to 1000 Items</h3>
                            <p className="md:text-base text-sm text-gray-600">Handle massive lists without lag. Perfect for large rosters or surveys.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extensive SEO Content Section */}
            <section className="py-10 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
                            The Ultimate Randomizer Wheel Guide
                        </h2>

                        <div className="lg:space-y-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                In a world full of endless options, making a decision can be paralyzing. From figuring out what movie to watch on Netflix, to deciding who pays the tab at dinner, human beings waste countless hours debating trivial choices. That is why we created the ultimate <strong>randomizer wheel</strong>—a flexible, digital spinning wheel designed to make any decision for you in seconds.
                            </p>
                            <p>
                                Unlike specialized tools that only do one thing, this <strong>random generator</strong> is a blank canvas. You can input literally anything into the text box, and our cryptographically secure algorithm will fairly and impartially select a winner. It is the perfect blend of utility and entertainment, adding a gameshow-like thrill to everyday decision-making.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">How to Use the Spin Wheel</h3>
                            <p>
                                We designed our <strong>randomizer</strong> to be as frictionless as possible. There are no accounts to create, no apps to download, and no limits on how many times you can spin. Here is how you get started:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Brainstorm Your Options:</strong> Gather all the possible choices for your decision.</li>
                                <li><strong>Type Them In:</strong> Use the input box located next to (or below, on mobile) the wheel. Type each option on a new line. The wheel will instantly update its slices in real-time as you type.</li>
                                <li><strong>Customize (Optional):</strong> If you want to change the colors or adjust the spin duration, you can tweak the settings to make the wheel look exactly how you want.</li>
                                <li><strong>Click to Spin:</strong> Click the center of the wheel. The wheel will accelerate, tick through the options, and slowly come to a dramatic stop on your random result.</li>
                            </ol>
                            <p>
                                If you are specifically trying to decide between exactly two options, you might actually prefer using our <Link href="/flip-a-coin" className="text-blue-600 hover:underline">Flip a Coin</Link> tool or our binary <Link href="/yes-no-wheel" className="text-blue-600 hover:underline">Yes/No Wheel</Link> for a faster resolution.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Endless Use Cases for a Randomizer</h3>
                            <p>
                                Because the wheel is a blank slate, the possibilities are truly endless. Here are some of the most creative ways our users utilize the wheel:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Entertainment Decisions:</strong> Put 5 movies, TV shows, or video games on the wheel. Spin it to decide how you&apos;ll spend your Friday night.</li>
                                <li><strong>Workout Routines:</strong> Fitness instructors put different exercises (Pushups, Burpees, Planks, Squats) on the wheel and spin it to create a randomized, high-intensity interval training (HIIT) routine on the fly.</li>
                                <li><strong>Travel Destinations:</strong> Can&apos;t decide where to go for your next vacation or weekend road trip? Put 4 destinations on the wheel and let fate decide your next adventure!</li>
                                <li><strong>Gift Exchanges:</strong> Use it during the holidays to randomly assign who buys a gift for whom in a Secret Santa exchange.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Why is a Visual Wheel Better Than a Random Number Generator?</h3>
                            <p>
                                If you just want a random result, you could technically assign a number to each of your options and use our <Link href="/random-number-wheel/1-10" className="text-blue-600 hover:underline">Random Number Generator</Link> to pick the winner. So why bother typing out the words onto a colored wheel?
                            </p>
                            <p>
                                The answer is psychology. Humans are visual creatures. Watching a wheel spin builds anticipation and dopamine. When the flapper slows down and ticks past an option you <em>really</em> wanted to win, you feel a surge of excitement. A simple text-based number generator provides the result instantly, stripping away all the suspense and fun of the gamble. The journey of the spin is just as important as the final decision!
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Specialized Versions of the Wheel</h3>
                            <p>
                                While this page serves as a great general-purpose <strong>randomizer wheel</strong>, we have actually built specialized versions of this tool pre-configured for specific scenarios. If you are doing any of the following tasks, you might want to check out our dedicated tools:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Choosing what to eat:</strong> Use the <Link href="/food-picker-wheel" className="text-blue-600 hover:underline">Food Picker Wheel</Link>, which is pre-loaded with the most popular cuisines.</li>
                                <li><strong>Picking a student or employee:</strong> Use the <Link href="/name-picker" className="text-blue-600 hover:underline">Name Picker Wheel</Link>, optimized for handling large rosters of human names.</li>
                                <li><strong>Creating teams:</strong> Don&apos;t use a standard wheel to draft teams one by one. Use our <Link href="/random-group-generator" className="text-blue-600 hover:underline">Random Group Generator</Link> to instantly divide a list of people into balanced squads.</li>
                                <li><strong>Social Media Contests:</strong> Running a promo on Instagram? Use our <Link href="/instagram-giveaway-picker" className="text-blue-600 hover:underline">Instagram Giveaway Picker</Link> to ensure you pick a valid winner from your comments section.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Data Privacy and Local Storage</h3>
                            <p>
                                When you type personal options, names, or sensitive information into our <strong>random generator</strong>, you want to know that data is safe.
                            </p>
                            <p>
                                Unlike many competitor websites that send your wheel data back to their servers to be logged and monetized, our application runs entirely in your local browser environment. We use browser localStorage to save your wheel state. This means your lists are saved on your specific device, so they will still be there if you refresh the page tomorrow, but they are never transmitted to our databases. You get the convenience of saved wheels with the absolute security of local processing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            More Random Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/food-picker-wheel", label: "Food Picker" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/flip-a-coin", label: "Flip a Coin" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/random-number-wheel", label: "Number Wheel" },
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
