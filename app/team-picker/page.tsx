import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { FiUsers, FiHash, FiRotateCw, FiShare2 } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Team Picker Wheel | Random Group Generator | SpinPickOnline",
    description: "Divide groups into random teams instantly with our team picker wheel. Fair random team generator for sports, classrooms, and events. Free name picker tool - no signup needed.",
    alternates: {
        canonical: "/team-picker",
    },
    robots: {
        index: true,
        follow: true,
    },
};

// Default team entries
const TEAM_ENTRIES = [
    { id: "1", label: "Player 1", color: "#3b82f6" },
    { id: "2", label: "Player 2", color: "#ef4444" },
    { id: "3", label: "Player 3", color: "#22c55e" },
    { id: "4", label: "Player 4", color: "#f59e0b" },
    { id: "5", label: "Player 5", color: "#8b5cf6" },
    { id: "6", label: "Player 6", color: "#ec4899" },
];

export default function TeamPickerPage() {
    // Generate schemas for SEO
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How does the random team generator ensure fairness?",
            answer: "Our team picker wheel uses a cryptographically secure random number generator (RNG) to ensure every person has an equal chance of being assigned to any team. Our randomizer provides transparent, verifiable results."
        },
        {
            question: "Can I use this as a wheel of names for classroom teams?",
            answer: "Absolutely! Teachers love using our random group generator and name spinner for fair classroom team formation. It works perfectly as a student selector, participation randomizer, or group project team picker. The visual spinning wheel keeps students engaged while ensuring fairness."
        },
        {
            question: "How is this different from other team pickers?",
            answer: "Our random team picker offers smart team balancing, handles odd numbers automatically, includes a random color generator for team identification, and provides shareable results. Our spinner wheel is also more secure with cryptographic RNG for truly fair team formation."
        },
        {
            question: "Can I save my team picker results?",
            answer: "Yes! Our random picker wheel lets you save and share team assignments. Perfect for sending team lists to participants via email, posting to social media, or documenting fair team selection for sports leagues, classroom activities, or corporate events."
        }
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <WheelPageTemplate
                title="Team Picker & Random Group Generator"
                h1="Random Team Picker | Group Generator Wheel"
                description="Avoid arguments and let our spin the wheel decide the teams! Perfect random team selector for sports, board games, or classroom projects. Works as a name picker, random group generator, and team randomizer. Fair, fast, and completely free - no signup required."
                ctaText="Generate Teams Now"
                defaultEntries={TEAM_ENTRIES}
                benefits={[
                    "Instant Team Sorting & Distribution - Fair random selection",
                    "Random Group Generator - Create balanced teams quickly",
                    "Works as Name Picker - Select team captains or members",
                    "Handles Odd Numbers - Smart team balancing algorithm",
                    "Mobile-Friendly Interface - Use on any device",
                    "100% Free - Unlimited team generation, no signup",
                    "Save & Share Results - Export team lists easily",
                    "Fun & Engaging Spinner - Makes team selection exciting",
                ]}
                useCases={[
                    "Pickup Sports Games - Soccer, Basketball, Volleyball teams",
                    "Classroom Group Projects - Fair student team distribution",
                    "Board Game Teams - Settle who plays together",
                    "Office Team Building - Random work group assignments",
                    "Hackathon & Competition Groups - Fair team formation",
                    "Workshop Breakout Sessions - Random participant grouping",
                    "PE Class Teams - Physical education fair selection",
                    "Esports Team Formation - Gaming squad randomizer",
                ]}
            />

            {/* What is Section */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">What is a Team Picker Wheel?</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                        <p>
                            A team picker wheel (also called a random group generator, team randomizer, or random team selector) is a free online tool that uses a random number generator (RNG) to fairly divide people into teams or groups. Unlike manual selection or traditional methods, our spin the wheel team picker provides an unbiased, transparent, and engaging way to create balanced teams for any activity.
                        </p>
                        <p>
                            Whether you need a random name picker for sports teams, a decision wheel for classroom groups, or a spinner wheel for work projects, our tool handles it all. It works perfectly as a wheel of names for team selection, random picker for group distribution, and randomizer for fair team formation - ideal for teachers, coaches, managers, and event organizers.
                        </p>
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">How to Use the Random Team Generator</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-linear-to-br from-blue-50 to-blue-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-blue-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiUsers />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Team Members</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Add all player names or participant names to your wheel of names. Our random name picker supports unlimited entries for large groups.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-purple-50 to-purple-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-purple-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiHash />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Set Team Count</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Specify how many teams needed. The random group generator automatically balances team sizes, even with odd numbers.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-green-50 to-green-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-green-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiRotateCw />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Spin the Team Picker</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Click to spin the wheel and watch our RNG randomizer assign teams! The spinning wheel makes fair selection fun and transparent.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-pink-50 to-pink-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-pink-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiShare2 />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Team Lists</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Save and share your random team picker results. Perfect for sending team assignments via email or social media.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-linear-to-br from-gray-50 to-blue-50 md:p-6 lg:p-10 p-4 lg:rounded-2xl rounded-xl">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Use Our Team Picker Wheel?</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Eliminates Selection Bias</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Our random team generator eliminates bias and ensures fair distribution every time with cryptographic randomization.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Smart Team Balancing</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Our randomizer automatically handles odd numbers and creates balanced teams with intelligent algorithms.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Multiple Use Cases</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Works as a picker wheel for sports, decision wheel for classrooms, name spinner for events, or yes or no wheel for quick choices.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Free Team Randomizer</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">100% free random group generator with unlimited spins. No signup, no limits - better than paid alternatives!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Use Cases Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Popular Team Picker Uses</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: "⚽", title: "Sports Team Picker", desc: "Random team generator for soccer, basketball, volleyball, and pickup games" },
                            { icon: "🎓", title: "Classroom Group Maker", desc: "Teachers use our wheel of names for fair student group projects and activities" },
                            { icon: "🎮", title: "Gaming Squad Randomizer", desc: "Esports and gaming teams love our random picker for fair team formation" },
                            { icon: "💼", title: "Work Team Builder", desc: "Office managers use our team randomizer for workshops and project groups" },
                            { icon: "🎪", title: "Event Team Selector", desc: "Conference and event organizers trust our spinner wheel for breakout sessions" },
                            { icon: "🏃", title: "PE Class Divider", desc: "Physical education teachers use our random group generator for fair teams" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white md:p-5 p-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Selection Tips Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Team Formation Best Practices</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-xl border-2 border-blue-200">
                            <h3 className="font-bold text-gray-900 mb-2">🎯 Pre-Selection Tips</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                For balanced teams in sports or skill-based activities, consider using our random picker wheel to assign team captains first, then let captains alternate picks. This combines randomness with strategy!
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                For fully random teams, simply add all names to the wheel of names and spin repeatedly, assigning each result to teams in rotation.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-5 rounded-xl border-2 border-purple-200">
                            <h3 className="font-bold text-gray-900 mb-2">⚖️ Ensuring Fair Distribution</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                Our random group generator uses cryptographic RNG to ensure every person has an equal chance of being assigned to any team. Show the spin the wheel process to all participants for full transparency.
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                For odd numbers, our team picker automatically handles the extra player fairly through random assignment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits of Our Team Picker Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Use Our Random Team Generator?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">⚖️ Conflict-Free Selection</h3>
                            <p className="text-sm text-gray-700">Eliminate selection bias and the "last person picked" awkwardness. Our team picker delivers fair, random results every time.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">⚡ Speed Up Your Activity</h3>
                            <p className="text-sm text-gray-700">Create balanced teams in seconds, whether for a classroom project, a corporate workshop, or a pickup sports game.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🔗 Easy Link Sharing</h3>
                            <p className="text-sm text-gray-700">Save your team lists and share the selection link with all participants so they can see the random process for themselves.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQ Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Team Picker FAQs</h2>
                    <div className="space-y-4">
                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">How does the random team generator ensure fairness?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Our team picker wheel uses a cryptographically secure random number generator (RNG) to ensure every person has an equal chance of being assigned to any team. Our randomizer provides transparent, verifiable results.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I use this as a wheel of names for classroom teams?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Absolutely! Teachers love using our random group generator and name spinner for fair classroom team formation. It works perfectly as a student selector, participation randomizer, or group project team picker. The visual spinning wheel keeps students engaged while ensuring fairness.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">How is this different from other team pickers?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Our random team picker offers smart team balancing, handles odd numbers automatically, includes a random color generator for team identification, and provides shareable results. Our spinner wheel is also more secure with cryptographic RNG for truly fair team formation.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I save my team picker results?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Yes! Our random picker wheel lets you save and share team assignments. Perfect for sending team lists to participants via email, posting to social media, or documenting fair team selection for sports leagues, classroom activities, or corporate events.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction />

        </>
    );
}


