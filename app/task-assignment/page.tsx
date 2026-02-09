import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { FiEdit, FiRotateCw, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Task Assignment Wheel | Delegate Random Tasks | SpinPickOnline",
    description: "Use our task assignment wheel to randomly assign tasks and responsibilities fairly. Perfect for teams, families, and classrooms. No signup required.",
    alternates: {
        canonical: "/task-assignment",
    },
};


// Default task entries
const TASK_ENTRIES = [
    { id: "1", label: "Write Code", color: "#3b82f6" },
    { id: "2", label: "Review PR", color: "#ef4444" },
    { id: "3", label: "Team Meeting", color: "#22c55e" },
    { id: "4", label: "Documentation", color: "#f59e0b" },
    { id: "5", label: "Bug Fixing", color: "#8b5cf6" },
];

export default function TaskAssignmentPage() {
    // Generate schemas for SEO
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How does the task assignment wheel work?",
            answer: "Enter your list of tasks and names of team members. You can spin the wheel to randomly assign one task at a time, or spin for names to assign a person to a specific task. Our cryptographic RNG ensures the selection is completely fair and unbiased."
        },
        {
            question: "Can I use this for work assignments?",
            answer: "Absolutely! Teams use our task randomizer for daily standups, odd jobs, or choosing who leads the next meeting. It eliminates bias and makes task delegation quick and transparent."
        },
        {
            question: "Is it really fair?",
            answer: "Yes, we use a cryptographically secure random number generator (RNG) for all our wheels. This means every task or person has a mathematically equal chance of being selected, ensuring total fairness in your assignments."
        },
        {
            question: "Can I save my task list?",
            answer: "Yes! Your entries are saved automatically in your browser's local storage. You can also generate a shareable link to save your specific wheel configuration and share it with your team members."
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
                title="Task Assignment"
                h1="Task Assignment Wheel - Randomly Delegate Tasks"
                description="Delegating tasks shouldn't be a headache. Our Task Assignment wheel makes it fair and fun to distribute work, chores, or responsibilities across your team or family."
                ctaText="Assign Tasks Now"
                defaultEntries={TASK_ENTRIES}
                benefits={[
                    "Unbiased Delegation",
                    "Ends Arguments Quickly",
                    "Teams & Family Friendly",
                    "Customizable Lists",
                    "Instant Random Results",
                    "Save & Share Features"
                ]}
                useCases={[
                    "Work Project Tasks",
                    "Classroom Helpers",
                    "Household Management",
                    "Meeting Roles",
                    "Lab Responsibilities",
                    "Presentation Order"
                ]}
            />

            {/* Content Section */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Master Task Delegation with our Random Picker</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                        <p>
                            Effective task management often starts with fair distribution. Use our task assignment wheel as a randomizer to skip the debate and get straight to work. Whether it's choosing who takes the meeting notes or who handles the dishes tonight, our spinner wheel provides a transparent solution everyone can trust.
                        </p>
                        <p>
                            Built on a cryptographically secure random number generator (RNG), this tool ensures that no person is unfairly targeted and every task has an equal chance of being assigned. It's the perfect decision wheel for professional offices, remote teams, and growing families.
                        </p>
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">How to Use the Task Spinner</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-linear-to-br from-blue-50 to-blue-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-blue-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiEdit />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1. List Your Tasks</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Add your tasks to the entries list. You can add as many as you need, and even use custom colors for categorization.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-purple-50 to-purple-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-purple-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiRotateCw />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Spin the Wheel</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Let the animation build excitement. Our randomizer ensures that the landing spot is mathematically fair every single time.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-green-50 to-green-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-green-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiCheckCircle />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Assign & Save</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Once a task is picked, assign it to someone and save the results. You can even generate a shareable link for transparency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="bg-white py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Where a Task Wheel Makes a Difference</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: "💼", title: "Remote Teams", desc: "Randomly assign feature reviews or documentation bug hunts to spread the workload fairly." },
                            { icon: "🏠", title: "Households", desc: "A fair way to choose who handles the laundry, dishes, or taking out the trash each day." },
                            { icon: "🎓", title: "Classrooms", desc: "Teachers use it to pick students for special duties like board erasing or line leadership." },
                            { icon: "🏃", title: "Fitness Groups", desc: "Randomly choose the next exercise or who selects the playlist for today's workout." },
                            { icon: "🎨", title: "Creative Agencies", desc: "An unbiased way to assign client brainstorms or social media copy duties." },
                            { icon: "🎪", title: "Meetups & Events", desc: "Fairly select moderators, room cleaners, or setup volunteers for your next gathering." }
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

            {/* Related Tools */}
            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Try Our Other Picker Tools</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link href="/chore-assignment" className="group bg-gradient-to-br from-blue-50 to-blue-100 md:p-5 p-4 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">🏠 Chore Assignment</h3>
                            <p className="text-sm text-gray-600 mb-2">Fair chore rotation for families and roommates.</p>
                            <span className="text-sm font-semibold text-blue-600 inline-flex items-center gap-1">Learn more <FiArrowRight className="text-xs" /></span>
                        </Link>
                        <Link href="/team-picker" className="group bg-gradient-to-br from-green-50 to-green-100 md:p-5 p-4 rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">👥 Team Picker</h3>
                            <p className="text-sm text-gray-600 mb-2">Random team generator for sports and projects.</p>
                            <span className="text-sm font-semibold text-green-600 inline-flex items-center gap-1">Learn more <FiArrowRight className="text-xs" /></span>
                        </Link>
                        <Link href="/lunch-decisions" className="group bg-gradient-to-br from-orange-50 to-orange-100 md:p-5 p-4 rounded-xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600">🍱 Lunch Decisions</h3>
                            <p className="text-sm text-gray-600 mb-2">End the "where to eat" debate instantly.</p>
                            <span className="text-sm font-semibold text-orange-600 inline-flex items-center gap-1">Learn more <FiArrowRight className="text-xs" /></span>
                        </Link>
                    </div>
                </div>
            </section>

            <CallToAction />
        </>
    );
}
