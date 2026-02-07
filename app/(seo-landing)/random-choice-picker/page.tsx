import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiList } from "react-icons/fi";
import { IoOptionsOutline, IoShuffleOutline, IoSparklesOutline, IoFlashOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Random Choice Picker | Free Choice Wheel | SpinPickOnline",
    description: "Free random choice picker wheel. Can't decide? Let the wheel choose for you! Perfect for quick decisions, food choices, and picking from options.",
    alternates: {
        canonical: "/random-choice-picker",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Random Choice Picker | Free Choice Wheel | SpinPickOnline",
        description: "Free random choice picker wheel. Let the wheel decide for you!",
        type: "website",
        url: "https://spinpickonline.com/random-choice-picker",
    },
};

// Default choice entries
const CHOICE_ENTRIES = [
    { id: "1", label: "Coffee", color: "#6f4e37" },
    { id: "2", label: "Tea", color: "#22c55e" },
    { id: "3", label: "Juice", color: "#f59e0b" },
    { id: "4", label: "Smoothie", color: "#8b5cf6" },
];

export default function RandomChoicePickerPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How does the random choice picker work?",
            answer: "Our choice picker uses cryptographic random number generation to select from your options. Just add your choices (restaurants, movies, activities, etc.), spin the wheel, and let randomness decide! Perfect for ending decision paralysis."
        },
        {
            question: "Can I use this to decide what to eat?",
            answer: "Absolutely! Our random choice picker is perfect for food decisions. Add restaurant names or meal options, spin, and solve the eternal \"where should we eat?\" debate. It's the ultimate choice randomizer!"
        },
        {
            question: "Is the choice picker really random?",
            answer: "Yes! We use cryptographically secure randomization to ensure every option has exactly equal chance of being selected. No bias, completely fair choice picker wheel!"
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
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-cyan-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
                            <IoOptionsOutline className="text-lg" />
                            <span>Choice Picker</span>
                        </div>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Random Choice Picker – Let the Wheel Decide
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Can't decide between options? Add your choices to our random choice picker and let the wheel make the decision for you. No more endless debates or decision fatigue!
                        </p>
                    </div>
                    <HomeWheel defaultEntries={CHOICE_ENTRIES} />
                </div>
            </section>

            {/* Benefits */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use a Random Choice Picker?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            End decision paralysis and make choices fun again
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-cyan-50 to-teal-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-cyan-200 hover:shadow-lg transition-shadow">
                            <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoFlashOutline className="text-xl text-cyan-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Instant Decisions</h3>
                            <p className="md:text-base text-sm text-gray-600">Stop overthinking. Get an answer in seconds and move on with your day.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShuffleOutline className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">No Bias</h3>
                            <p className="md:text-base text-sm text-gray-600">Fair random selection means no favoritism. Every option has equal chance.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Fun Factor</h3>
                            <p className="md:text-base text-sm text-gray-600">Spinning a wheel is more exciting than just picking randomly. Add some fun to decisions!</p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow">
                            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiList className="text-xl text-orange-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Any Options</h3>
                            <p className="md:text-base text-sm text-gray-600">Add any choices you want: foods, activities, movies, places, or anything else.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Use */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How to Use the Choice Picker
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {[
                                { step: "1", title: "Add Your Options", desc: "Type in all the choices you're considering (restaurants, movies, activities, etc.)" },
                                { step: "2", title: "Remove Bad Options", desc: "Already ruled something out? Remove it to focus on real contenders" },
                                { step: "3", title: "Spin the Wheel", desc: "Click spin and let random chance make the decision for you" },
                                { step: "4", title: "Accept the Result", desc: "Go with what the wheel chose! If you're disappointed, that tells you something too" },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-4 items-start bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                                        <p className="md:text-base text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Popular Choice Picker Uses
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Where to Eat
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">"I don't know, where do you want to eat?" Sound familiar? Add your restaurant options and spin!</p>
                            <Link href="/decision-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Decision Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Movie Night
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Can't agree on what to watch? Add movie options and let the wheel choose tonight's film.</p>
                            <Link href="/picker-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Picker Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Weekend Activities
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Beach, hiking, shopping, or staying home? Add activities and see where the weekend takes you.</p>
                            <Link href="/wheel-spinner" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Wheel Spinner <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> What to Cook
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Weekly meal planning got you stuck? Add recipe ideas and spin for dinner inspiration.</p>
                            <Link href="/yes-no-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Yes/No Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            More Decision Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/yes-no-wheel", label: "Yes/No Wheel" },
                            { href: "/picker-wheel", label: "Picker Wheel" },
                            { href: "/wheel-spinner", label: "Wheel Spinner" },
                            { href: "/random-picker-wheel", label: "Random Picker" },
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
