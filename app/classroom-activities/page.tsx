import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { FiUserPlus, FiSettings, FiRotateCw, FiSave } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Classroom Activities Wheel | Teachers Tool | SpinPickOnline",
    description: "Engage your students with the Classroom Activities Wheel. Randomize questions, student selection, and rewards.",
    alternates: {
        canonical: "/classroom-activities",
    },
};

// Default classroom entries
const CLASSROOM_ENTRIES = [
    { id: "1", label: "Student 1", color: "#3b82f6" },
    { id: "2", label: "Student 2", color: "#ef4444" },
    { id: "3", label: "Student 3", color: "#22c55e" },
    { id: "4", label: "Student 4", color: "#f59e0b" },
    { id: "5", label: "Student 5", color: "#8b5cf6" },
];

export default function ClassroomActivitiesPage() {
    // Generate schemas for SEO
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "Is this random name picker truly fair for students?",
            answer: "Yes! Our classroom wheel uses a cryptographically secure random number generator (RNG), ensuring every student has an equal chance of being selected. Our randomizer provides transparent, unbiased results that students and parents can trust."
        },
        {
            question: "Can I use this wheel of names on my classroom Smartboard?",
            answer: "Absolutely! Our spinner wheel works perfectly on interactive whiteboards, Smartboards, iPads, and all devices. The touch-friendly name spinner makes it easy for both teachers and students to spin the wheel during lessons."
        },
        {
            question: "How is this different from other random pickers?",
            answer: "Our random picker offers unlimited names, custom color generator for visual appeal, save and share features, and works offline after initial load. Our spinning wheel is specifically designed for education with engaging animations that keep students excited about participation!"
        },
        {
            question: "Can I save my student names for daily use?",
            answer: "Yes! Our picker wheel lets you save classroom configurations for recurring use. Perfect for daily morning meetings, random questioning routines, or consistent group formation. Create multiple wheels for different classes or purposes - all free with no account required!"
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
                title="Classroom Activities"
                h1="Classroom Activity Wheel"
                description="Make learning interactive! Use the wheel to pick random students for questions, assign classroom jobs, or choose the next fun activity. Teachers love the engagement it brings."
                ctaText="Spin for Activities"
                defaultEntries={CLASSROOM_ENTRIES}
                storageKey="classroomActivitiesWheelState"
                benefits={[
                    "Increases Participation",
                    "Fair Student Selection",
                    "Visual & Fun",
                    "Quick Setup",
                    "No Login Needed",
                    "Student Favorite"
                ]}
                useCases={[
                    "Picking Volunteers",
                    "Random Questioning",
                    "Classroom Job Rotation",
                    "Reward Selection",
                    "Group Formation",
                    "Activity Transition"
                ]}
            />

            {/* What is Section */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">What is a Classroom Activity Wheel?</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                        <p>
                            A classroom activity wheel (also known as a student picker, random name picker, or teacher spinner wheel) is an educational tool that uses a random number generator to fairly select students, assign tasks, or choose activities. Unlike traditional methods like popsicle sticks or Google spinner, our wheel of names provides an engaging, visual, and transparent way to make classroom decisions that keeps students excited and involved.
                        </p>
                        <p>
                            Whether you need a name spinner for random questioning, a decision wheel for activity selection, or a randomizer for group formation, our free tool works perfectly. It functions as a spin the wheel game for education, picker wheel for participation, and spinning wheel for classroom management - ideal for teachers, educators, and instructors at all grade levels.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Use Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">How Teachers Use the Random Student Picker</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-linear-to-br from-blue-50 to-blue-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-blue-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiUserPlus />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Student Names</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Enter all student names into the wheel of names. Our random name picker supports full class rosters for fair participation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-purple-50 to-purple-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-purple-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiSettings />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Customize for Your Class</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Use the random color generator to assign colors, add classroom jobs, or create themed activity wheels for special lessons.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-green-50 to-green-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-green-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiRotateCw />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Spin for Selection</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Click to spin the wheel and build anticipation! Students love watching the name spinner select who answers next.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-pink-50 to-pink-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-pink-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiSave />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Save & Reuse</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Save your classroom wheel configurations for daily use. Perfect for consistent random picker routines!</p>
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
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Teachers Love This Random Name Picker</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Digital & Always Available</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Our wheel of names is visual, engaging, and impossible to lose. Students love the spinning wheel animation!</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Increases Participation</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">The randomizer keeps all students on their toes! No one knows who the random name picker will choose next, increasing attention and readiness.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Multi-Purpose Tool</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Works as a decision wheel for activities, yes or no wheel for choices, team picker for groups, or random word generator for games.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">100% Free for Teachers</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Free random picker with unlimited spins, no signup required. Better than paid classroom management tools!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Use Cases Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Popular Classroom Uses</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: "🙋", title: "Random Questioning", desc: "Use the name spinner to fairly select students to answer questions throughout the lesson" },
                            { icon: "👥", title: "Group Formation", desc: "Create random groups with our team picker and random group generator for collaborative projects" },
                            { icon: "⭐", title: "Student of the Day", desc: "Spin the wheel of names to select daily helpers, line leaders, or special recognitions" },
                            { icon: "📚", title: "Reading Order", desc: "Fair random picker for selecting who reads next during literacy activities or presentations" },
                            { icon: "🎨", title: "Activity Selection", desc: "Let the decision wheel choose between classroom activities or which game to play during free time" },
                            { icon: "🏆", title: "Reward Distribution", desc: "Use the randomizer to fairly distribute prizes, stickers, or special privileges to students" }
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

            {/* Grade-Level Tips Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Random Picker by Grade Level</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border-2 border-green-200">
                            <h3 className="font-bold text-gray-900 mb-2">🌱 Elementary School</h3>
                            <p className="text-sm text-gray-600 mb-2">Young students love our colorful wheel of names! Use for:</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Line leaders and helpers</li>
                                <li>• Reading out loud turns</li>
                                <li>• Class job rotations</li>
                                <li>• Show & tell order</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border-2 border-blue-200">
                            <h3 className="font-bold text-gray-900 mb-2">📚 Middle School</h3>
                            <p className="text-sm text-gray-600 mb-2">Keep pre-teens engaged with our spinner wheel for:</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Group project teams</li>
                                <li>• Presentation order</li>
                                <li>• Discussion starters</li>
                                <li>• Lab partner assignments</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border-2 border-purple-200">
                            <h3 className="font-bold text-gray-900 mb-2">🎓 High School</h3>
                            <p className="text-sm text-gray-600 mb-2">Fair random selection for older students:</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Debate topic assignments</li>
                                <li>• Pop quiz respondents</li>
                                <li>• Extra credit opportunities</li>
                                <li>• College prep activities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Classroom Management Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Classroom Management with Random Selection</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-2">🌟 Increase Participation</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                When students know our random name picker could select anyone at any time, they stay more alert and prepared. The element of surprise keeps everyone engaged and ready to participate!
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-2">⚖️ Eliminate Perceived Favoritism</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Our transparent randomizer shows students the selection is completely fair. No one can accuse you of playing favorites when our cryptographic RNG makes the choice!
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-2">🎯 Build Anticipation</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                The spinning wheel animation creates excitement! Students watch with anticipation as the decision wheel slows down, making even routine activities more engaging.
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-2">📱 Easy Integration</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Our picker wheel works on Smartboards, iPads, and any browser. Save your class roster and spin anytime - our wheel of names is always ready when you need it!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Classroom Wheel FAQs</h2>
                    <div className="space-y-4">
                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Is this random name picker truly fair for students?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Yes! Our classroom wheel uses a cryptographically secure random number generator (RNG), ensuring every student has an equal chance of being selected. Our randomizer provides transparent, unbiased results that students and parents can trust.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I use this wheel of names on my classroom Smartboard?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Absolutely! Our spinner wheel works perfectly on interactive whiteboards, Smartboards, iPads, and all devices. The touch-friendly name spinner makes it easy for both teachers and students to spin the wheel during lessons.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">How is this different from other random pickers?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Our random picker offers unlimited names, custom color generator for visual appeal, save and share features, and works offline after initial load. Our spinning wheel is specifically designed for education with engaging animations that keep students excited about participation!
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I save my student names for daily use?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Yes! Our picker wheel lets you save classroom configurations for recurring use. Perfect for daily morning meetings, random questioning routines, or consistent group formation. Create multiple wheels for different classes or purposes - all free with no account required!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction />

        </>
    );
}
