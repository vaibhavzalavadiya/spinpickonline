import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { IoColorPaletteOutline, IoSparklesOutline, IoSchoolOutline, IoBrushOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema, generateMetadata, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generateMetadata({
    title: "Color Wheel Spinner – Free Random Color Picker Online",
    description: "Spin the color wheel to pick a random color instantly! Free online color spinner for art projects, design, classrooms, and games. No signup needed.",
    canonical: "/color-wheel-spinner",
});

const COLOR_ENTRIES = [
    { id: "1", label: "Red 🔴", color: "#ef4444" },
    { id: "2", label: "Blue 🔵", color: "#3b82f6" },
    { id: "3", label: "Green 🟢", color: "#22c55e" },
    { id: "4", label: "Yellow 🟡", color: "#eab308" },
    { id: "5", label: "Purple 🟣", color: "#a855f7" },
    { id: "6", label: "Orange 🟠", color: "#f97316" },
    { id: "7", label: "Pink 💗", color: "#ec4899" },
    { id: "8", label: "Cyan 💎", color: "#06b6d4" },
];

export default function ColorWheelSpinnerPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "Color Wheel Spinner",
        url: `${SITE_CONFIG.url}/color-wheel-spinner`,
        description: "Free online random color picker wheel for art, design, games, and classrooms.",
        featureList: "Random color picker, Color wheel spinner, Art project color selector, Design color randomizer, Classroom color picker, Custom color wheel",
    });
    const faqSchema = generateFAQSchema([
        {
            question: "How does the color wheel spinner work?",
            answer: "Our color wheel spinner randomly selects a color for you. Simply spin the wheel and it will land on a random color. The spinner uses cryptographically secure randomization to ensure completely fair, unpredictable results every time."
        },
        {
            question: "Can I add custom colors to the wheel?",
            answer: "Yes! The wheel comes pre-loaded with 8 popular colors, but you can fully customize it. Add any colors you want, change labels, add hex codes, or create themed color palettes. You can even add specific shades like 'Coral', 'Teal', or 'Burgundy'."
        },
        {
            question: "What can I use a random color picker for?",
            answer: "Our color wheel spinner is perfect for art projects (pick a color palette challenge), classroom activities (assign colors to teams), game nights (choose player colors), design brainstorming (random color inspiration), fashion choices, and any creative decision that involves colors."
        },
        {
            question: "Is the color wheel spinner free?",
            answer: "Yes, our color wheel spinner is completely free! No signup, no downloads, and no limits. Spin as many times as you want on any device – mobile, tablet, or desktop."
        },
        {
            question: "Can I use this in the classroom?",
            answer: "Absolutely! Teachers love using our color wheel for assigning team colors, art class exercises, and making learning interactive. Project the wheel on your classroom screen and let students watch the color selection in real time."
        }
    ]);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Color Wheel Spinner", item: `${SITE_CONFIG.url}/color-wheel-spinner` },
    ]);
    const howToSchema = generateHowToSchema({
        name: "How to Use the Color Wheel Spinner",
        description: "Pick a random color instantly using our free color wheel spinner.",
        steps: [
            { name: "Choose Your Colors", text: "Use the default color set or customize with your own colors, shades, and labels.", position: 1 },
            { name: "Spin the Color Wheel", text: "Click the Spin button and watch the wheel rotate through all the colors.", position: 2 },
            { name: "Use Your Random Color", text: "The wheel stops on a random color. Use it for your art project, game, or creative task!", position: 3 },
        ],
    });

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            {/* Hero Section with Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-violet-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Color Wheel Spinner – Random Color Picker
                        </h1>
                    </div>
                    <HomeWheel defaultEntries={COLOR_ENTRIES} storageKey="colorWheelSpinnerState" />
                </div>
            </section>

            {/* Why Use a Color Wheel */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use a Random Color Spinner?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Unleash your creativity with the element of surprise
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-red-50 to-rose-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-red-200 hover:shadow-lg transition-shadow">
                            <div className="bg-red-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoColorPaletteOutline className="text-xl text-red-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Break Creative Blocks</h3>
                            <p className="md:text-base text-sm text-gray-600">Stuck on what color to use? Let randomness spark new ideas and push your artistic boundaries.</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSchoolOutline className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Classroom Ready</h3>
                            <p className="md:text-base text-sm text-gray-600">Assign team colors, pick art project palettes, or create colorful learning activities in seconds.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Fun Challenges</h3>
                            <p className="md:text-base text-sm text-gray-600">Try &quot;draw using only random colors&quot; challenges. Great for social media content and art streams.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoBrushOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Design Inspiration</h3>
                            <p className="md:text-base text-sm text-gray-600">Discover unexpected color combinations for web design, interiors, fashion, or branding projects.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Creative Uses */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Creative Ways to Use the Color Spinner
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 max-w-5xl mx-auto">
                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🎨 Art Challenges</h3>
                            <p className="md:text-base text-sm text-gray-600">Spin 3-5 times to create a random color palette, then create an entire artwork using only those colors. A favorite among digital artists on TikTok and Instagram.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">👕 Fashion Decisions</h3>
                            <p className="md:text-base text-sm text-gray-600">Can&apos;t decide what color shirt to wear today? Spin the wheel and let your wardrobe choice be decided by chance. Great for outfit-of-the-day inspiration.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🏠 Interior Design</h3>
                            <p className="md:text-base text-sm text-gray-600">Struggling to pick a wall color or accent shade? Add your shortlisted paint colors and let the wheel narrow it down. Takes the stress out of home decor decisions.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🎮 Board Game Nights</h3>
                            <p className="md:text-base text-sm text-gray-600">Assign player colors randomly before starting a board game. No more fighting over who gets to be the red piece! Fair and instant color assignment.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">📱 Content Creation</h3>
                            <p className="md:text-base text-sm text-gray-600">YouTube and TikTok creators use random color pickers for &quot;painting with random colors&quot; videos, nail art challenges, and surprise makeover content.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">📚 Teaching Colors</h3>
                            <p className="md:text-base text-sm text-gray-600">Perfect for early education. Help young children learn color names with an interactive, visual spinner. Kids love watching the wheel and calling out the color it lands on!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Color Palettes Section */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center md:mb-8 mb-6">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                Popular Color Wheel Themes
                            </h2>
                            <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                                Customize your wheel with these themed color sets
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 md:p-6 p-4 md:rounded-xl rounded-lg border border-red-100">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">🌈 Rainbow Colors</h3>
                                <p className="md:text-base text-sm text-gray-700 mb-3">The classic ROYGBIV spectrum – Red, Orange, Yellow, Green, Blue, Indigo, and Violet. Perfect for general-purpose randomization and learning color order.</p>
                                <div className="flex gap-1.5">
                                    <span className="w-8 h-8 rounded-full bg-red-500"></span>
                                    <span className="w-8 h-8 rounded-full bg-orange-500"></span>
                                    <span className="w-8 h-8 rounded-full bg-yellow-400"></span>
                                    <span className="w-8 h-8 rounded-full bg-green-500"></span>
                                    <span className="w-8 h-8 rounded-full bg-blue-500"></span>
                                    <span className="w-8 h-8 rounded-full bg-indigo-500"></span>
                                    <span className="w-8 h-8 rounded-full bg-violet-500"></span>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-pink-50 to-rose-50 md:p-6 p-4 md:rounded-xl rounded-lg border border-pink-100">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">🌸 Pastel Palette</h3>
                                <p className="md:text-base text-sm text-gray-700 mb-3">Soft, muted tones – Blush Pink, Lavender, Mint, Baby Blue, Peach, and Lilac. Ideal for nursery decor, wedding planning, and delicate art projects.</p>
                                <div className="flex gap-1.5">
                                    <span className="w-8 h-8 rounded-full bg-pink-300"></span>
                                    <span className="w-8 h-8 rounded-full bg-purple-300"></span>
                                    <span className="w-8 h-8 rounded-full bg-green-300"></span>
                                    <span className="w-8 h-8 rounded-full bg-blue-300"></span>
                                    <span className="w-8 h-8 rounded-full bg-orange-300"></span>
                                    <span className="w-8 h-8 rounded-full bg-violet-300"></span>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-50 to-slate-50 md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">🖤 Monochrome</h3>
                                <p className="md:text-base text-sm text-gray-700 mb-3">Various shades of a single color from lightest to darkest. Great for design exercises, learning about tints and shades, and minimalist art.</p>
                                <div className="flex gap-1.5">
                                    <span className="w-8 h-8 rounded-full bg-gray-200"></span>
                                    <span className="w-8 h-8 rounded-full bg-gray-300"></span>
                                    <span className="w-8 h-8 rounded-full bg-gray-400"></span>
                                    <span className="w-8 h-8 rounded-full bg-gray-500"></span>
                                    <span className="w-8 h-8 rounded-full bg-gray-700"></span>
                                    <span className="w-8 h-8 rounded-full bg-gray-900"></span>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 md:p-6 p-4 md:rounded-xl rounded-lg border border-amber-100">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">🍂 Earth Tones</h3>
                                <p className="md:text-base text-sm text-gray-700 mb-3">Natural, grounded colors – Terracotta, Forest Green, Sand, Clay, Olive, and Mahogany. Perfect for landscape painting and nature-inspired design.</p>
                                <div className="flex gap-1.5">
                                    <span className="w-8 h-8 rounded-full bg-amber-700"></span>
                                    <span className="w-8 h-8 rounded-full bg-green-800"></span>
                                    <span className="w-8 h-8 rounded-full bg-yellow-600"></span>
                                    <span className="w-8 h-8 rounded-full bg-orange-800"></span>
                                    <span className="w-8 h-8 rounded-full bg-lime-800"></span>
                                    <span className="w-8 h-8 rounded-full bg-red-900"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extensive SEO Content */}
            <section className="py-10 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
                            Everything About Color Wheel Spinners
                        </h2>

                        <div className="lg:space-y-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                Color plays a fundamental role in art, design, psychology, and everyday decision-making. From choosing what to paint to picking a brand identity, color choices can feel overwhelming when you&apos;re faced with millions of possible hues. That&apos;s where a <strong>color wheel spinner</strong> becomes invaluable – it removes the paralysis of choice and introduces the exciting element of randomness into your creative process.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">The Science Behind Color Theory</h3>
                            <p>
                                The traditional color wheel was invented by Sir Isaac Newton in 1666 when he mapped the visible light spectrum into a circle. The wheel organizes colors by their chromatic relationships: <strong>primary colors</strong> (red, blue, yellow), <strong>secondary colors</strong> (green, orange, purple), and <strong>tertiary colors</strong> (the mixtures in between). Understanding these relationships helps artists and designers create harmonious or contrasting palettes.
                            </p>
                            <p>
                                Our <strong>random color picker</strong> takes a different approach. Instead of following strict color theory rules, it embraces the beauty of randomness. Some of the most striking and original color combinations in art history were discovered by accident. Jackson Pollock&apos;s drip paintings, Mondrian&apos;s primary color compositions, and even modern brand palettes like Spotify&apos;s neon green on black were unconventional choices that broke the &quot;rules.&quot; Our color spinner encourages this same spirit of creative experimentation.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">How Artists and Designers Use Random Color Pickers</h3>
                            <p>
                                Professional artists and designers regularly use randomization techniques to break out of creative ruts. Here are some proven methods that work brilliantly with our color wheel spinner:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Limited Palette Challenge:</strong> Spin the wheel 3 times and create an entire artwork using only those 3 random colors. This constraint forces you to mix, blend, and innovate in ways you never would with your go-to palette.</li>
                                <li><strong>Complementary Discovery:</strong> Spin twice and see if the random pair creates an unexpected harmony. Many designers have discovered their signature color combinations this way.</li>
                                <li><strong>Mood Board Creation:</strong> Use the spinner to generate 5-7 random colors, then build a mood board around them. This exercise is popular in UX/UI design bootcamps and art schools.</li>
                                <li><strong>Daily Color Challenge:</strong> Spin the wheel once each morning and incorporate that color into something creative during the day – your outfit, a sketch, a social media post, or even the food you eat.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Color Wheel Spinner in the Classroom</h3>
                            <p>
                                Teachers and educators have found creative ways to incorporate color spinners into their lessons across multiple subjects, not just art class. In <strong>early childhood education</strong>, the color wheel helps children learn color names through an interactive, game-like experience. Kids get excited watching the wheel spin and love shouting out the color it lands on.
                            </p>
                            <p>
                                In <strong>math and probability classes</strong>, teachers use the color wheel to demonstrate basic probability concepts. With 8 equal segments on our default wheel, each color has a 1-in-8 (12.5%) chance of being selected. Students can track results over multiple spins and learn about theoretical vs. experimental probability.
                            </p>
                            <p>
                                For <strong>team assignments</strong>, teachers spin the wheel to assign team colors randomly. This eliminates the social dynamics of students picking their own teams and ensures fairness. If you need to randomly select students rather than colors, check out our <Link href="/classroom-activities" className="text-blue-600 hover:underline">Classroom Activities Wheel</Link> or the <Link href="/name-picker" className="text-blue-600 hover:underline">Random Name Picker</Link>.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Color Spinner vs. Other Color Tools</h3>
                            <p>
                                There are many digital color tools available online – from Coolors.co to Adobe Color to basic RGB generators. However, our color wheel spinner offers a fundamentally different experience. Traditional color tools are analytical: they generate palettes based on mathematical relationships like complementary, analogous, or triadic schemes. Our spinner is experiential: the visual animation of the spinning wheel, the anticipation of where it lands, and the surprise of the result make it far more engaging and fun.
                            </p>
                            <p>
                                This is why our tool excels in interactive settings – classrooms, live streams, group activities, and game nights – where the experience matters as much as the result. For more structured decision-making tools, you might also explore our <Link href="/decision-wheel" className="text-blue-600 hover:underline">Decision Wheel</Link> for general choices, or our <Link href="/random-picker-wheel" className="text-blue-600 hover:underline">Random Picker Wheel</Link> for any type of random selection. And if you just need a simple yes-or-no answer about a color choice, try our <Link href="/yes-no-wheel" className="text-blue-600 hover:underline">Yes or No Wheel</Link>.
                            </p>

                            <div className="mt-8 p-4 sm:p-6 bg-violet-50 rounded-xl md:rounded-2xl border border-violet-200">
                                <h4 className="font-bold text-violet-900 mb-2">Fun Color Fact 🎨</h4>
                                <p className="text-violet-800 text-sm">
                                    The human eye can distinguish approximately 10 million different colors, yet most languages only have between 2 and 12 basic color terms. Russian speakers, for example, have separate words for light blue (goluboy) and dark blue (siniy), which actually helps them distinguish those shades faster than English speakers. Our color wheel helps you explore beyond your linguistic color boundaries!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Pages */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            More Creative Tools
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Random Letter Generator
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Need a random letter for word games, scattergories, or name brainstorming? Spin for a letter!</p>
                            <Link href="/random-letter-generator" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Letter Generator <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Team Name Generator
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Already picked team colors? Now spin for a creative team name to match!</p>
                            <Link href="/team-name-generator" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Team Names <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Classroom Activities
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Randomly pick students for participation, group assignments, and classroom games.</p>
                            <Link href="/classroom-activities" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Classroom Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Randomizer Wheel
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">The ultimate blank canvas. Add anything and spin – not just colors!</p>
                            <Link href="/randomizer-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Randomizer <FiArrowRight className="text-xs" />
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
                            Explore More Wheels
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/random-number-wheel", label: "Number Wheel" },
                            { href: "/wheel-of-names", label: "Wheel of Names" },
                            { href: "/flip-a-coin", label: "Flip a Coin" },
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
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Color Wheel Spinner FAQ</h2>
                        <div className="space-y-4">
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">How does the color wheel spinner work?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Our color wheel spinner randomly selects a color for you. Simply spin the wheel and it will land on a random color. The spinner uses cryptographically secure randomization to ensure completely fair, unpredictable results every time.
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Can I add custom colors?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Yes! The wheel comes pre-loaded with 8 popular colors, but you can fully customize it. Add any colors you want, change labels, add hex codes, or create themed color palettes. You can even add specific shades like &quot;Coral&quot;, &quot;Teal&quot;, or &quot;Burgundy&quot;.
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">What can I use a random color picker for?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Our color wheel spinner is perfect for art projects, classroom activities, game nights, design brainstorming, fashion choices, and any creative decision that involves colors. Spin multiple times to create a full random palette!
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Is the color wheel free?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Yes, our color wheel spinner is completely free! No signup, no downloads, and no limits. Spin as many times as you want on any device – mobile, tablet, or desktop.
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Can I use this in the classroom?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Absolutely! Teachers love using our color wheel for assigning team colors, art class exercises, and making learning interactive. Project the wheel on your classroom screen and let students watch the color selection in real time.
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
