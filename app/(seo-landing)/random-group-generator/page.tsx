import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiList } from "react-icons/fi";
import { IoOptionsOutline, IoShuffleOutline, IoSparklesOutline, IoFlashOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema, generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
    title: "Random Group Generator – Free Team Maker & Sorter",
    description: "Easily split lists of names into random groups or teams. Our free random group generator is perfect for teachers, team building, and party games.",
    canonical: "/random-group-generator",
});

// Default choice entries
const GROUP_ENTRIES = [
    { id: "1", label: "Group A", color: "#ef4444" },
    { id: "2", label: "Group B", color: "#3b82f6" },
    { id: "3", label: "Group C", color: "#10b981" },
    { id: "4", label: "Group D", color: "#f59e0b" },
];

export default function RandomGroupGeneratorPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "What is a random group generator?",
            answer: "A random group generator is a tool that takes a list of names and randomly assigns them into different groups. It's often used by teachers to create project groups, or by managers for team-building exercises."
        },
        {
            question: "How do I use this tool to assign groups?",
            answer: "You can use this wheel as a fun, visual way to assign groups one-by-one. Put your Group names on the wheel (e.g., Team 1, Team 2, Team 3). As you call out each person's name, spin the wheel to randomly assign them to a group!"
        },
        {
            question: "Can I use this for the classroom?",
            answer: "Yes, teachers love our random group generator because it completely eliminates bias or favoritism. Students accept the groups because they can see the fair spin of the wheel."
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
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-indigo-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
                            <IoOptionsOutline className="text-lg" />
                            <span>Team & Group Maker</span>
                        </div>
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Random Group Generator
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The fairest way to create random teams. Use this visual spinner to assign people into groups for classrooms, sports, or work events.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={GROUP_ENTRIES} storageKey="randomGroupGeneratorState" />
                </div>
            </section>

            {/* Benefits */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use a Random Group Generator?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The fairest way to build balanced teams
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-indigo-200 hover:shadow-lg transition-shadow">
                            <div className="bg-indigo-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShuffleOutline className="text-xl text-indigo-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Zero Bias</h3>
                            <p className="md:text-base text-sm text-gray-600">Cryptographic randomization eliminates favoritism and perceived unfairness.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoFlashOutline className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Instant Sorting</h3>
                            <p className="md:text-base text-sm text-gray-600">Paste a list, spin, assign. No pen and paper needed.</p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-amber-200 hover:shadow-lg transition-shadow">
                            <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-amber-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Visual &amp; Fun</h3>
                            <p className="md:text-base text-sm text-gray-600">Students and coworkers accept results because they see the fair spin.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiList className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">100% Private</h3>
                            <p className="md:text-base text-sm text-gray-600">All data stays in your browser. Student names are never sent to any server.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extensive SEO Content Section */}
            <section className="py-10 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
                            The Ultimate Random Group Generator Guide
                        </h2>

                        <div className="lg:space-y-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                Whether you are a teacher organizing a classroom project, a manager setting up cross-functional corporate teams, or a coach dividing players for a scrimmage, dividing a large list of people into smaller teams is always a headache. Doing it manually often leads to accusations of bias, favoritism, or unfair skill distribution. That is why we built our <strong>random group generator</strong>—to take the stress out of team creation and ensure a 100% fair, unbiased sorting process.
                            </p>
                            <p>
                                Our free <strong>team generator</strong> uses cryptographically secure randomization to instantly divide any list of names into smaller, perfectly balanced groups. No more picking captains, no more awkward &quot;last person picked&quot; scenarios, and no more spending 20 minutes with a pen and paper trying to balance the numbers.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">How to Use the Team Maker</h3>
                            <p>
                                Using our <strong>random team generator</strong> is incredibly straightforward. While we use a visual spinning wheel to build excitement, the underlying logic is designed to handle massive lists of names effortlessly.
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Compile Your List:</strong> Get your roster of students, players, or coworkers. You can easily copy this list directly from Excel, Google Sheets, or a Word document.</li>
                                <li><strong>Paste the Names:</strong> Paste your entire list into the input box next to the wheel. Our system will automatically separate each line into a unique entry on the wheel.</li>
                                <li><strong>Determine Group Sizes:</strong> Decide how many teams you need, or how many people should be on each team.</li>
                                <li><strong>Spin and Assign:</strong> Click the wheel to pick the first person for Team 1. Once they are selected, use the &quot;Remove&quot; button to take them off the wheel. Spin again for the next person. Repeat this process until all teams are filled!</li>
                            </ol>
                            <p>
                                If you only need to pick one single winner from a list rather than sorting everyone into groups, you can use our generalized <Link href="/name-picker" className="text-blue-600 hover:underline">Name Picker Wheel</Link> or our <Link href="/random-picker-wheel" className="text-blue-600 hover:underline">Random Picker Wheel</Link> instead.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Why Random Teams are Better</h3>
                            <p>
                                In educational and corporate settings, there is a strong temptation to manually curate teams. Teachers often group high-performing students with struggling students, while managers might group people who already get along. However, research shows that <em>randomized</em> teams often yield better results.
                            </p>
                            <p>
                                Random team generation forces people out of their comfort zones. It breaks up existing cliques and forces individuals to collaborate with peers they might not normally interact with. This cross-pollination of ideas is crucial for innovation in the workplace and social development in the classroom. Furthermore, when teams are chosen randomly by a computer algorithm, it completely eliminates the perception of bias. Nobody can complain that the teacher or boss &quot;stacked the deck.&quot;
                            </p>
                            <p>
                                If you need a fun way to name these newly formed random teams, have them spin our <Link href="/team-name-generator" className="text-blue-600 hover:underline">Team Name Generator</Link>!
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Perfect for Sports and Gaming</h3>
                            <p>
                                Beyond the classroom and the office, the random team maker is a staple for recreational sports and online gaming.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Pickup Sports:</strong> If you have 10 people showing up for pickup basketball, don&apos;t waste time shooting free throws for teams. Just paste the 10 names, spin, and instantly create two teams of 5. (If you need to decide who gets the ball first, use our <Link href="/flip-a-coin" className="text-blue-600 hover:underline">Flip a Coin</Link> tool).</li>
                                <li><strong>Esports and Gaming:</strong> Running a custom lobby in games like Valorant, League of Legends, or Counter-Strike? Use the wheel to scramble the teams and ensure the lobbies stay fresh and balanced over multiple matches.</li>
                                <li><strong>Board Game Nights:</strong> Hosting a party games night? Use the random group generator to randomly assign partners for games like Codenames or Spades. It prevents couples from always playing together and mixes up the social dynamics of the party.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">How to Handle &quot;Odd Numbers&quot;</h3>
                            <p>
                                One of the most common issues when creating teams is dealing with uneven numbers. For example, if you have 23 students and need to make groups of 4, you will end up with five groups of 4, and one group of 3.
                            </p>
                            <p>
                                Our wheel makes handling these remainders easy. Just continue spinning and assigning until the wheel is empty. The last group will naturally be the smaller group. If you prefer to have the remainder distributed (e.g., three groups of 4, and one group of 5), you can easily adjust your drafting strategy as the wheel spins.
                            </p>
                            <p>
                                If you ever find yourself needing a simple &quot;Yes&quot; or &quot;No&quot; to decide if a specific player should be moved to balance a team, you can quickly consult our <Link href="/yes-no-wheel" className="text-blue-600 hover:underline">Yes/No Wheel</Link>.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">The Science of True Randomness</h3>
                            <p>
                                You might wonder: is this <strong>team maker</strong> actually random? The answer is a definitive yes.
                            </p>
                            <p>
                                Many older, poorly coded websites use basic math functions (like Math.random()) which are not cryptographically secure and can display predictable patterns over time. Our application utilizes the browser&apos;s native Web Crypto API. This provides true cryptographic randomness based on system-level entropy. It means every single name on your list has the exact same mathematical probability of being selected on any given spin.
                            </p>
                            <p>
                                Because there is no server processing, all the randomization happens locally on your device. This also means your list of names is 100% private. We do not store your rosters, student names, or employee data on our servers. You can use our tool with complete peace of mind regarding data privacy and GDPR compliance.
                            </p>
                            <p>
                                Stop stressing over team assignments. Let the math do the work, and get back to managing your game, class, or project!
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
                            More Team Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/team-name-generator", label: "Team Names" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/flip-a-coin", label: "Flip a Coin" },
                            { href: "/randomizer-wheel", label: "Randomizer Wheel" },
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
