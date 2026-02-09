import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { FiEdit, FiRotateCw, FiSettings, FiArrowRight, FiHome, FiUsers, FiSave } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Chore Assignment Wheel | Randomly Assign House Chores | SpinPickOnline",
    description: "End chore arguments with our random chore assignment wheel. A fair and fun way to distribute household tasks to family members or roommates.",
    alternates: {
        canonical: "/chore-assignment",
    },
};


// Default chore entries
const CHORE_ENTRIES = [
    { id: "1", label: "Dishes", color: "#3b82f6" },
    { id: "2", label: "Laundry", color: "#ef4444" },
    { id: "3", label: "Vacuuming", color: "#22c55e" },
    { id: "4", label: "Trash", color: "#f59e0b" },
    { id: "5", label: "Cleaning", color: "#8b5cf6" },
];

export default function ChoreAssignmentPage() {
    // Generate schemas for SEO
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How do I fairly assign chores to roommates?",
            answer: "Simply list all the chores that need to be done and spin the wheel for each person, or vice versa. Our chore spinner uses a mathematically fair RNG to ensure no one is stuck with the 'bad' chores every time."
        },
        {
            question: "Can I use this for kids' chore charts?",
            answer: "Yes! Kids love the interactive element of the spinning wheel. It turns 'chore time' into a little game, making them more engaged and less likely to argue about their assignments."
        },
        {
            question: "Is it really random?",
            answer: "Absolutely. We use cryptographically secure randomization for every spin. Unlike manual choosing, the wheel doesn't have favorites!"
        },
        {
            question: "Can I save our weekly chores list?",
            answer: "Yes, your entries are automatically saved in your browser. You can also generate a shareable link to send the wheel to your family or roommates so everyone can see the assignments."
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
                title="Chore Assignment"
                h1="Chore Assignment Wheel - Fair Household Delegation"
                description="Make household chores fair again. Our chore assignment wheel removes the bias and ends the arguments by randomly assigning tasks to everyone in the house."
                ctaText="Assign Chores Now"
                defaultEntries={CHORE_ENTRIES}
                benefits={[
                    "Ends Family Arguments",
                    "Mathematically Fair",
                    "Fun for Kids",
                    "Quick Roommate Decisions",
                    "Save Recurring Lists",
                    "Works on Mobile"
                ]}
                useCases={[
                    "Weekly Cleaning",
                    "Dish Rotation",
                    "Pet Duties",
                    "Yard Work",
                    "Grocery Trips",
                    "Laundry Days"
                ]}
            />

            {/* Content Section */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">A Fair Way to Manage Your Home</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                        <p>
                            Who's doing the dishes tonight? Who's turn is it to vacuum the living room? These simple questions often lead to unnecessary friction in households and shared apartments. Our chore assignment wheel acts as an unbiased mediator. By putting your chores—or your names—on the spinning wheel, you let math and chance decide the outcome.
                        </p>
                        <p>
                            Teachers also use this tool to assign classroom 'jobs' like board cleaner or plant waterer. It builds a sense of fairness because children see that the selection process is transparent and random. For roommates, it's the ultimate tool to ensure that the least desirable tasks are rotated fairly over time.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Use Section */}
            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">How to Use the Chore Picker</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-linear-to-br from-blue-50 to-blue-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-blue-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiEdit />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Your Chores</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">List all the household tasks that need to be done. From dishes to vacuuming, add everything that needs to be assigned.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-purple-50 to-purple-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-purple-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiUsers />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Family Members</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Create a second wheel with family member names, or alternate between spinning for chores and spinning for people.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-green-50 to-green-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-green-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiRotateCw />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Spin to Assign</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Let the wheel decide who does what. The visual spinning builds excitement and makes even boring chores a little more fun!</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-pink-50 to-pink-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-pink-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiSave />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Save for Next Week</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Your chore list is saved automatically. Come back next week and spin again for a fresh, fair assignment rotation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why it works Section */}
            <section className="bg-white py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-linear-to-br from-gray-50 to-blue-50 md:p-6 lg:p-10 p-4 lg:rounded-2xl rounded-xl">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Families Trust the Chore Picker</h2>
                        <div className="grid sm:grid-cols-2 md:gap-6 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">🏠</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Household Harmonizer</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">When the wheel makes the choice, feelings aren't hurt and no one feels picked on. It's the fair arbiter every home needs.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">🎮</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Engaging for Kids</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Turning chores into a spin-the-wheel game actually makes children more excited to participate in household duties.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">🎨</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Fully Customizable</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Add your specific tasks, from 'Scrub the Tub' to 'Walk the Dog'. You can even assign color codes to different difficulty levels.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">📱</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Works on Any Device</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Use it on your phone at the dinner table or on the family TV. Our responsive design works perfectly everywhere.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Popular Chore Wheel Uses</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: "🍽️", title: "Kitchen Duties", desc: "Rotate dish washing, table setting, and meal prep responsibilities fairly." },
                            { icon: "🧹", title: "Room Cleaning", desc: "Assign bedrooms, bathrooms, and common area cleaning without arguments." },
                            { icon: "🐕", title: "Pet Care", desc: "Decide who walks the dog, feeds the cat, or cleans the fish tank." },
                            { icon: "🌿", title: "Yard Work", desc: "Rotate mowing, raking, watering, and garden maintenance duties." },
                            { icon: "🛒", title: "Errands", desc: "Fairly assign grocery runs, mail pickup, and other outside tasks." },
                            { icon: "🗑️", title: "Trash Duty", desc: "No more fighting over who takes out the garbage and recycling." }
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
            <section className="bg-white py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Manage Everything Fairly</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link href="/task-assignment" className="group md:p-5 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 transition-all text-center">
                            <h3 className="font-bold text-gray-900 group-hover:text-blue-600">📋 Task Assignment</h3>
                        </Link>
                        <Link href="/team-picker" className="group md:p-5 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 transition-all text-center">
                            <h3 className="font-bold text-gray-900 group-hover:text-blue-600">👥 Team Picker</h3>
                        </Link>
                        <Link href="/lunch-decisions" className="group md:p-5 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 transition-all text-center">
                            <h3 className="font-bold text-gray-900 group-hover:text-blue-600">🍱 Lunch Decisions</h3>
                        </Link>
                        <Link href="/yes-no-wheel" className="group md:p-5 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 transition-all text-center">
                            <h3 className="font-bold text-gray-900 group-hover:text-blue-600">✅ Yes/No Wheel</h3>
                        </Link>
                    </div>
                </div>
            </section>

            <CallToAction />
        </>
    );
}
