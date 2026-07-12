import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiList } from "react-icons/fi";
import { IoOptionsOutline, IoShuffleOutline, IoSparklesOutline, IoFlashOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema, generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
    title: "Team Name Generator – Random Team Name Spinner",
    description: "Need a cool team name? Spin our random team name generator wheel to instantly find the perfect name for your sports team, trivia night, or work group.",
    canonical: "/team-name-generator",
});

// Default choice entries
const TEAM_ENTRIES = [
    { id: "1", label: "The Dominators", color: "#ef4444" },
    { id: "2", label: "Trivia Titans", color: "#3b82f6" },
    { id: "3", label: "Brain Trust", color: "#f59e0b" },
    { id: "4", label: "Goal Diggers", color: "#10b981" },
    { id: "5", label: "Victorious Secret", color: "#8b5cf6" },
    { id: "6", label: "The Untouchables", color: "#f97316" },
    { id: "7", label: "Mind Benders", color: "#eab308" },
    { id: "8", label: "Code Blooded", color: "#22c55e" },
];

export default function TeamNameGeneratorPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How do I generate a random team name?",
            answer: "Our team name generator wheel comes pre-loaded with fun and clever team names. Just spin the wheel to select one randomly! If you have your own list of ideas, you can type them in and let the wheel pick the winner."
        },
        {
            question: "Is this good for fantasy football and trivia nights?",
            answer: "Yes! The team name generator is perfect for fantasy football leagues, pub trivia nights, office team building, hackathons, or intramural sports teams."
        },
        {
            question: "Can I use my own list of team names?",
            answer: "Absolutely. Just clear the default names using the 'Clear All' button, and type in your own list of name ideas. Then spin the wheel to randomly select the best one."
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
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-blue-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                            <IoOptionsOutline className="text-lg" />
                            <span>Name Generator</span>
                        </div>
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Random Team Name Generator
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Can't agree on a team name? Spin the wheel to instantly select a clever, funny, or cool name for your sports, trivia, or work team.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={TEAM_ENTRIES} storageKey="teamNameGeneratorState" />
                </div>
            </section>

            {/* Benefits */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use a Team Name Generator?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Skip the brainstorming and get a team name instantly
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-red-50 to-rose-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-red-200 hover:shadow-lg transition-shadow">
                            <div className="bg-red-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShuffleOutline className="text-xl text-red-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Instant Ideas</h3>
                            <p className="md:text-base text-sm text-gray-600">No more blank-canvas paralysis. Get hilarious and clever name suggestions instantly.</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-sky-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Fun & Social</h3>
                            <p className="md:text-base text-sm text-gray-600">Spin with your team and react together. Makes the naming process a bonding moment.</p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-amber-200 hover:shadow-lg transition-shadow">
                            <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoFlashOutline className="text-xl text-amber-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Tiebreaker</h3>
                            <p className="md:text-base text-sm text-gray-600">Can't agree on a name? Put your finalists on the wheel and let randomness settle the debate.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiList className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">All Categories</h3>
                            <p className="md:text-base text-sm text-gray-600">Trivia, fantasy sports, corporate hackathons, intramurals — names for every occasion.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extensive SEO Content Section */}
            <section className="py-10 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
                            The Ultimate Team Name Generator Guide
                        </h2>

                        <div className="lg:space-y-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                Whether you are signing up for a local trivia night, joining a recreational softball league, or organizing a corporate team-building retreat, you are going to need a team name. And as anyone who has ever been put on the spot knows, coming up with a clever, funny, and unique team name is surprisingly difficult. That's why we created the ultimate <strong>team name generator</strong> wheel—to do the brainstorming for you!
                            </p>
                            <p>
                                Instead of staring blankly at a sign-up sheet while your teammates argue over bad puns, you can let our digital spinning wheel decide your fate. We have pre-loaded the wheel with a massive database of the most popular, creative, and hilarious team names across various categories. Just tap to spin, and walk away with a team identity in seconds.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">How to Use the Random Team Name Wheel</h3>
                            <p>
                                Using our <strong>funny team names generator</strong> is designed to be a fun, collaborative experience for your whole squad. Here is the best way to use it:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Gather the Team:</strong> Don't do this alone! Bring your teammates around your phone or share your screen on a Zoom call.</li>
                                <li><strong>Spin the Wheel:</strong> Click the center of the wheel to trigger the spin animation.</li>
                                <li><strong>Vote on the Result:</strong> Does the wheel land on a name that makes everyone laugh? Keep it! If it's a dud, use the "Remove" button to delete it from the wheel and spin again.</li>
                                <li><strong>Mix and Match (Optional):</strong> Sometimes the wheel gives you two names on back-to-back spins that sound even funnier when combined. Feel free to use the wheel as a brainstorming jumping-off point!</li>
                            </ol>
                            <p>
                                If you haven't even formed your teams yet, you should pause and go use our <Link href="/random-group-generator" className="text-blue-600 hover:underline">Random Group Generator</Link> first to fairly divide your large group into smaller squads!
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Categories of Great Team Names</h3>
                            <p>
                                What makes a good team name? It usually falls into one of a few distinct categories. When you are using our <strong>team name creator</strong>, keep an eye out for these distinct styles:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>The Punny Names:</strong> These are the undisputed kings of trivia nights. Names like "Tequila Mockingbird," "Les Quizerables," or "Let's Get Quizzical" rely on pop culture puns. They are designed to make the trivia host groan when reading them out loud.</li>
                                <li><strong>The Intimidating Names:</strong> If you are playing a physical sport like flag football or dodgeball, you might want something that sounds tough. "The Nightmares," "Apex Predators," or "The Untouchables" set a competitive tone.</li>
                                <li><strong>The Self-Deprecating Names:</strong> Sometimes it's best to set expectations low. Names like "We Tried," "The Benchwarmers," or "Here for the Beer" are crowd favorites for casual intramural sports.</li>
                                <li><strong>Corporate Appropriate:</strong> If this is for a workplace hackathon, you need to keep it HR-friendly. Names like "The Brain Trust," "Synergy Squad," or "The Problem Solvers" strike the right balance of fun and professional.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Customizing the Generator</h3>
                            <p>
                                Our wheel comes pre-loaded with a massive, diverse list of names, but you are not locked into our choices! Because this tool is built on our highly customizable wheel engine, you can edit the inputs at any time.
                            </p>
                            <p>
                                If your team is trying to decide between five specific names that you brainstormed yourselves, simply delete our default list from the text box on the right. Type in your five custom names, and spin the wheel to break the tie. The wheel acts as an impartial judge.
                            </p>
                            <p>
                                If you have a massive list of ideas and you just need to randomly pick one without the visual wheel, you can also use our text-based <Link href="/random-picker-wheel" className="text-blue-600 hover:underline">Random Picker Wheel</Link>. Or, if the team is completely deadlocked between exactly two names, settle it the old-fashioned way using our digital <Link href="/flip-a-coin" className="text-blue-600 hover:underline">Coin Flip Simulator</Link>.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Why Do We Struggle With Naming Things?</h3>
                            <p>
                                Psychologists refer to the difficulty of coming up with a team name as a form of "blank canvas paralysis." When you are told you can name your team <em>anything</em> in the world, the sheer volume of possibilities is overwhelming. Your brain attempts to filter ideas for humor, appropriateness, and originality all at the same time, leading to a creative block.
                            </p>
                            <p>
                                A <strong>random team name generator</strong> solves this by introducing constraints. By forcing you to react to a specific, randomly generated name, it bypasses the blank canvas paralysis. Even if you don't use the exact name the wheel lands on, it often sparks a tangential idea that becomes your final choice.
                            </p>
                            <p>
                                If you ever find yourself needing a random letter to start a brainstorming session instead of a full word, we also offer a free <Link href="/random-letter-generator" className="text-blue-600 hover:underline">Random Letter Generator</Link> that can help kickstart your creative process!
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Perfect for Fantasy Sports</h3>
                            <p>
                                One of the biggest spikes in traffic we see to this tool happens in August, right before the NFL Fantasy Football season begins. A clever fantasy football team name is a badge of honor among friends.
                            </p>
                            <p>
                                If you need to determine the draft order for your fantasy league before you pick your team name, you can use our <Link href="/random-number-wheel/1-10" className="text-blue-600 hover:underline">1-10 Number Wheel</Link> (or 1-12, depending on your league size) to randomly assign draft positions to all your league members!
                            </p>
                            <p>
                                Don't waste another hour staring at a blank screen. Spin the wheel, find your team name, and get ready to dominate your league or trivia night!
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
                            { href: "/random-group-generator", label: "Group Generator" },
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/flip-a-coin", label: "Flip a Coin" },
                            { href: "/food-picker-wheel", label: "Food Picker" },
                            { href: "/instagram-giveaway-picker", label: "Giveaway Picker" },
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
