import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiList } from "react-icons/fi";
import { IoOptionsOutline, IoShuffleOutline, IoSparklesOutline, IoFlashOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema, generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
    title: "Food Picker Wheel – Random Restaurant Generator",
    description: "Can't decide what to eat? Spin the food picker wheel to randomly choose a restaurant, cuisine, or meal. The ultimate what to eat generator.",
    canonical: "/food-picker-wheel",
});

// Default choice entries
const FOOD_ENTRIES = [
    { id: "1", label: "Pizza", color: "#ef4444" },
    { id: "2", label: "Sushi", color: "#3b82f6" },
    { id: "3", label: "Burgers", color: "#f59e0b" },
    { id: "4", label: "Tacos", color: "#10b981" },
    { id: "5", label: "Thai", color: "#8b5cf6" },
    { id: "6", label: "Indian", color: "#f97316" },
    { id: "7", label: "Pasta", color: "#eab308" },
    { id: "8", label: "Salad", color: "#22c55e" },
];

export default function FoodPickerWheelPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How does the food picker wheel work?",
            answer: "Simply enter the names of the restaurants, cuisines, or fast food places you are deciding between. Once your options are added, spin the wheel, and it will randomly select what you should eat!"
        },
        {
            question: "Can I use the what to eat generator with a group?",
            answer: "Yes! In fact, the food picker wheel is the best way to solve the \"I don't know, where do you want to eat?\" debate. Have everyone input one restaurant they like, and let the wheel make the final, unbiased decision."
        },
        {
            question: "Can I save my favorite restaurants?",
            answer: "Yes, your list of food options is automatically saved in your browser's local storage. If you close the page and come back later, your favorite takeout spots will still be on the wheel ready to spin."
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
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-orange-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Food Picker Wheel
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Stop arguing over where to eat. Enter your restaurant options and spin the food picker wheel to instantly decide your next meal!
                        </p>
                    </div>
                    <HomeWheel defaultEntries={FOOD_ENTRIES} storageKey="foodPickerWheelState" />
                </div>
            </section>

            {/* Benefits */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use a Food Picker Wheel?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            End the &quot;where should we eat?&quot; debate forever
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow">
                            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoFlashOutline className="text-xl text-orange-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Instant Decision</h3>
                            <p className="md:text-base text-sm text-gray-600">Stop debating and get an answer in seconds. Spin once, eat happy.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShuffleOutline className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">No Bias</h3>
                            <p className="md:text-base text-sm text-gray-600">Cryptographically fair selection. Every restaurant gets an equal chance.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Fun for Groups</h3>
                            <p className="md:text-base text-sm text-gray-600">Share your screen and spin together. The whole group accepts the result!</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-sky-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiList className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Saves Your List</h3>
                            <p className="md:text-base text-sm text-gray-600">Your favorite restaurants are saved locally. Come back tomorrow and spin again.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extensive SEO Content Section */}
            <section className="py-10 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
                            The Ultimate &quot;What Should I Eat?&quot; Generator
                        </h2>

                        <div className="lg:space-y-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                We&apos;ve all been there: it&apos;s 6:00 PM, you&apos;re hungry, your partner or friends are hungry, but nobody wants to make the final decision on where to eat. The conversation goes in endless circles. &quot;I don&apos;t know, what do you want?&quot; &quot;I&apos;m fine with anything.&quot; &quot;How about sushi?&quot; &quot;No, I had sushi yesterday.&quot; This phenomenon is known as decision fatigue, and our <strong>food picker wheel</strong> is the ultimate solution to this daily dilemma.
                            </p>
                            <p>
                                Instead of spending 30 minutes debating between pizza, tacos, or Thai food, you can turn the process into a fun, suspenseful game. Just type the cuisines or local restaurants you&apos;re considering into the <strong>what to eat generator</strong>, and click spin. Our digital wheel handles the heavy lifting of decision-making for you, leaving you with nothing left to do but order your food and enjoy your meal!
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">How to Use the Food Picker Wheel</h3>
                            <p>
                                Using our restaurant randomizer is incredibly simple. We&apos;ve pre-loaded the wheel with some of the most popular takeout categories—Pizza, Sushi, Burgers, Tacos, Thai, Indian, Pasta, and Salad. If those sound good to you, simply click the spin button in the center of the wheel!
                            </p>
                            <p>
                                However, if you want to customize your options, you can easily do so. Follow these steps for the best experience:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Gather Options:</strong> Have everyone in your group suggest exactly one restaurant or cuisine they would be happy eating.</li>
                                <li><strong>Enter Choices:</strong> Use the text box next to the wheel to type in those specific restaurant names (e.g., &quot;Chipotle&quot;, &quot;Local Italian Place&quot;, &quot;Domino&apos;s&quot;). You can add as many options as you like.</li>
                                <li><strong>Remove Vetoes:</strong> If someone absolutely hates an option (e.g., they are allergic to seafood so the local crab shack is out), do not put it on the wheel. Only spin if every option is viable!</li>
                                <li><strong>Spin the Wheel:</strong> Click the wheel to start the randomized spinning animation.</li>
                                <li><strong>Accept the Result:</strong> Whatever the wheel lands on is where you eat. No take-backs, no arguing!</li>
                            </ol>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">The &quot;Gut Check&quot; Method</h3>
                            <p>
                                Sometimes, the food wheel serves a psychological purpose rather than a strictly random one. Behavioral psychologists suggest using a randomized tool to discover what you <em>actually</em> want. We call this the &quot;Gut Check&quot; method.
                            </p>
                            <p>
                                Here&apos;s how it works: Spin the <strong>what to eat generator</strong>. When the wheel stops and announces the winning restaurant, pay very close attention to your immediate emotional reaction.
                            </p>
                            <p>
                                Did the wheel land on &quot;Burgers&quot; and you felt a sudden wave of disappointment? That means you actually didn&apos;t want burgers at all! By randomly selecting an option you didn&apos;t want, the wheel helped you eliminate it from your mental list. Conversely, if the wheel lands on &quot;Tacos&quot; and you feel a sense of relief, you know you&apos;ve found the right choice. If you just need a simple Yes or No on whether you should order takeout tonight at all, you might want to try our <Link href="/yes-no-wheel" className="text-blue-600 hover:underline">Yes/No Wheel</Link> first to decide if you&apos;re cooking or ordering!
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Perfect for Groups and Coworkers</h3>
                            <p>
                                Deciding where to eat as a couple is hard enough, but deciding where to go for a team lunch with five coworkers is nearly impossible. Everyone has different budgets, dietary restrictions, and preferences.
                            </p>
                            <p>
                                The food picker wheel acts as a neutral, unbiased third party. Because our wheel uses cryptographically secure random number generation (via the Web Crypto API), nobody can claim that the selection was rigged or biased. If you need to randomly assign tasks to those coworkers after lunch, or randomly pick who pays the bill, you can easily use our generalized <Link href="/random-picker-wheel" className="text-blue-600 hover:underline">Random Picker Wheel</Link> or our <Link href="/name-picker" className="text-blue-600 hover:underline">Name Picker Wheel</Link>.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Other Fun Ways to Use the Dinner Spinner</h3>
                            <p>
                                While choosing a restaurant is the most common use case, our users have gotten incredibly creative with this tool. Here are some other food-related ways to use the wheel:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Meal Prep Roulette:</strong> If you cook at home but hate meal planning, add 10 of your favorite recipes to the wheel. Spin it on Sunday night to randomly assign your dinners for the week.</li>
                                <li><strong>The &quot;Who Cooks?&quot; Wheel:</strong> Add the names of everyone in your household to the wheel. Whoever it lands on has to cook dinner tonight! (If you need to assign multiple chores like dishes and sweeping, our <Link href="/task-assignment" className="text-blue-600 hover:underline">Task Assignment Wheel</Link> is built for that).</li>
                                <li><strong>Dessert Decider:</strong> Can&apos;t decide between ice cream, cookies, or brownies? Let the wheel pick your sweet treat.</li>
                                <li><strong>Grocery Store Challenge:</strong> If you&apos;re feeling adventurous, add different aisles or food types to the wheel while at the grocery store, and force yourself to buy and cook whatever the wheel lands on.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Why Our Wheel is the Best</h3>
                            <p>
                                There are many randomizer websites out there, but our Food Picker Wheel is designed to be the fastest, fairest, and most user-friendly. First, it requires absolutely no signup or account creation. Second, it is fully mobile optimized—meaning you can easily pull it up on your smartphone while standing in the middle of a food court.
                            </p>
                            <p>
                                Finally, we prioritize privacy. The restaurant options you type into the wheel are saved locally in your browser&apos;s memory using localStorage. We do not send your data to our servers. This means if you close the tab and come back tomorrow, your favorite local restaurants will still be saved on the wheel, ready for your next spin!
                            </p>
                            <p>
                                If you ever find yourself needing a binary decision instead of a list of options, don&apos;t forget that we also offer a free digital <Link href="/flip-a-coin" className="text-blue-600 hover:underline">Coin Flip Simulator</Link> for classic heads-or-tails choices!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            More Decision Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-choice-picker", label: "Choice Picker" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/yes-no-wheel", label: "Yes/No Wheel" },
                            { href: "/flip-a-coin", label: "Flip a Coin" },
                            { href: "/randomizer-wheel", label: "Randomizer Wheel" },
                            { href: "/random-picker-wheel", label: "Random Picker" },
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
