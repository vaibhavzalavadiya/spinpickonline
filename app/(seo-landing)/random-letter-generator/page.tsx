import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiList } from "react-icons/fi";
import { IoOptionsOutline, IoShuffleOutline, IoSparklesOutline, IoFlashOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema, generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
    title: "Random Letter Generator – Spin the Alphabet Wheel",
    description: "Use our free random letter generator wheel to instantly pick a random letter from the alphabet. Perfect for games like scattergories, teaching, and fun.",
    canonical: "/random-letter-generator",
});

// Default choice entries: A to Z
const LETTER_ENTRIES = Array.from({ length: 26 }, (_, i) => {
    const letter = String.fromCharCode(65 + i); // A-Z
    const hue = (i * 137.508) % 360; // Golden angle for nice color distribution
    return {
        id: i.toString(),
        label: letter,
        color: `hsl(${hue}, 70%, 50%)`
    };
});

export default function RandomLetterGeneratorPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "What is a random letter generator used for?",
            answer: "A random letter generator is perfect for playing word games like Scattergories or Stop, selecting a random initial for name generation, educational activities for kids learning the alphabet, or any situation where you need an unbiased letter from A to Z."
        },
        {
            question: "Can I remove letters from the wheel?",
            answer: "Yes! If you are playing a game and want to exclude difficult letters like X, Q, or Z, simply click the 'X' next to those letters in the input list, and the wheel will automatically update to exclude them."
        },
        {
            question: "Is every letter equally likely to be chosen?",
            answer: "Absolutely. Our random letter generator uses a cryptographically secure randomization algorithm. As long as the letters are on the wheel, they all have the exact same mathematical probability of being landed on."
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
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-purple-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                            <IoOptionsOutline className="text-lg" />
                            <span>Alphabet Wheel</span>
                        </div>
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Random Letter Generator Wheel
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Need a random letter from the alphabet? Spin the wheel to instantly generate a random letter from A to Z for word games, naming, and teaching.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={LETTER_ENTRIES} storageKey="randomLetterGeneratorState" />
                </div>
            </section>

            {/* Benefits */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use a Random Letter Generator?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Instantly pick a truly random letter for any purpose
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShuffleOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">True Randomness</h3>
                            <p className="md:text-base text-sm text-gray-600">Cryptographically secure selection ensures no letter is favored. Every letter has equal odds.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Fun & Visual</h3>
                            <p className="md:text-base text-sm text-gray-600">The spinning wheel makes letter selection exciting. Great for classroom projection and group games.</p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow">
                            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoFlashOutline className="text-xl text-orange-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Customizable</h3>
                            <p className="md:text-base text-sm text-gray-600">Remove difficult letters, add phonics combos like CH or TH, or use foreign alphabets.</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-sky-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiList className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Multi-Purpose</h3>
                            <p className="md:text-base text-sm text-gray-600">Word games, phonics lessons, password creation, and creative brainstorming all in one tool.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extensive SEO Content Section */}
            <section className="py-10 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
                            The Ultimate Random Letter Generator Guide
                        </h2>

                        <div className="lg:space-y-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                Have you ever needed a random letter of the alphabet to start a game, create a password, or teach a phonics lesson? While picking a number from 1 to 10 is easy to do in your head, coming up with a truly random letter from A to Z is surprisingly difficult for the human brain. We naturally gravitate toward common letters like A, S, or T, and rarely think of Q, X, or Z. That is where our <strong>random letter generator</strong> wheel comes in.
                            </p>
                            <p>
                                Our free <strong>alphabet wheel</strong> is a digital tool that instantly selects a mathematically random letter for you. Built with a stunning spinning animation, it adds a layer of excitement to what would otherwise be a boring text output. Whether you're playing Scattergories with your family or teaching preschoolers their ABCs, this tool is the perfect companion.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">How to Use the Alphabet Wheel</h3>
                            <p>
                                Using the <strong>random alphabet generator</strong> is completely intuitive. We've pre-configured the wheel with all 26 letters of the modern English alphabet (A through Z).
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Spin for a Letter:</strong> Simply click or tap the wheel in the center of your screen. The wheel will spin rapidly before slowing down and landing on your random letter.</li>
                                <li><strong>Customize the Alphabet:</strong> If you are teaching younger students and only want to focus on vowels (A, E, I, O, U), you can easily delete the consonants from the input box. The wheel will automatically re-size itself to fit only your selected letters.</li>
                                <li><strong>Foreign Alphabets:</strong> Are you studying Spanish, Greek, or Russian? You can easily delete the English alphabet from the text box and paste in the characters of the language you are studying!</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Perfect for Word Games and Board Games</h3>
                            <p>
                                The most common use for an <strong>alphabet wheel</strong> is tabletop gaming. Many popular party games require a random starting letter.
                            </p>
                            <p>
                                For example, in the classic game <em>Scattergories</em>, players roll a 20-sided die featuring various letters to determine the starting letter for that round's categories. If you lose that specialized die, the game is ruined. However, with our web app, you can instantly replace it! Just pull out your phone, load this page, and tap to spin.
                            </p>
                            <p>
                                It's also fantastic for road trip games. If you're playing "I Spy" or the "License Plate Game," you can use the wheel to determine which letter everyone has to search for next. If you need to divide the car into teams to play these games, use our <Link href="/random-group-generator" className="text-blue-600 hover:underline">Random Group Generator</Link> to split the passengers up fairly!
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Educational Uses for Teachers and Parents</h3>
                            <p>
                                Early childhood educators absolutely love using digital spin wheels in the classroom because the bright colors and spinning motion hold students' attention much better than flashcards.
                            </p>
                            <p>
                                You can project this <strong>random letter generator</strong> onto a smartboard at the front of the class. Spin the wheel, and when it lands on a letter, ask the class to shout out the phonetic sound that letter makes, or ask them to name an animal that starts with that letter. (e.g., The wheel lands on 'B', the students shout 'Bear!').
                            </p>
                            <p>
                                If you want to randomly select which student gets to answer the question, you can open our <Link href="/name-picker" className="text-blue-600 hover:underline">Name Picker Wheel</Link> in a second tab. Put all your students' names on that wheel, and alternate between spinning for the letter and spinning for the student! This keeps the entire classroom engaged and on their toes.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Generating Secure Acronyms and Passwords</h3>
                            <p>
                                While we highly recommend using a dedicated password manager to generate secure, encrypted passwords, a random letter generator can be a great way to brainstorm secure acronyms, passphrases, or project codenames.
                            </p>
                            <p>
                                By spinning the wheel 5 times, you might get "X-T-P-L-Q". You can then use those random letters as the foundation for a memorable mnemonic passphrase (e.g., Xylophones Take Practice Like Quizzes). Because the letters were generated using our cryptographically secure Web Crypto API integration, they are completely free from human bias and much harder for hackers to guess via social engineering.
                            </p>
                            <p>
                                If you need random numbers to append to the end of your new passphrase, be sure to check out our <Link href="/random-number-wheel/1-10" className="text-blue-600 hover:underline">1-10 Number Wheel</Link> or <Link href="/random-number-wheel/1-100" className="text-blue-600 hover:underline">1-100 Number Wheel</Link>.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">How Fair is the Alphabet Spinner?</h3>
                            <p>
                                Unlike a physical 26-sided die which might have slight weight imbalances, our digital <strong>alphabet wheel</strong> is mathematically perfect.
                            </p>
                            <p>
                                The application uses advanced browser-level cryptography to generate a random seed number. That number calculates the exact degree rotation of the wheel. This means every single letter, from A to Z, has an exactly equal 1-in-26 chance of being selected on every single spin. The physics of the spin animation are purely cosmetic to build suspense—the actual result is determined instantly and fairly the moment you click.
                            </p>
                            <p>
                                If you ever find yourself needing to decide between just two options instead of 26, remember that we also offer a free digital <Link href="/flip-a-coin" className="text-blue-600 hover:underline">Coin Flip Simulator</Link> that uses the exact same secure randomization technology. Bookmark this page so you'll never be stuck trying to think of a random letter again!
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
                            More Random Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/random-choice-picker", label: "Choice Picker" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
                            { href: "/food-picker-wheel", label: "Food Picker" },
                            { href: "/flip-a-coin", label: "Flip a Coin" },
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
