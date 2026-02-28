import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiTarget } from "react-icons/fi";
import { IoHandLeftOutline, IoListOutline, IoShieldCheckmarkOutline, IoSparklesOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Picker Wheel | Free Random Selection Wheel | SpinPickOnline",
    description: "Free picker wheel for random selection. Pick names, items, or options instantly. Perfect for teachers, teams, and anyone needing fair random picks.",
    alternates: {
        canonical: "/picker-wheel",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Picker Wheel | Free Random Selection Wheel | SpinPickOnline",
        description: "Free picker wheel for random selection. Pick names, items, or options instantly.",
        type: "website",
        url: "https://spinpickonline.com/picker-wheel",
    },
};

// Default picker entries
const PICKER_ENTRIES = [
    { id: "1", label: "Option 1", color: "#3b82f6" },
    { id: "2", label: "Option 2", color: "#ef4444" },
    { id: "3", label: "Option 3", color: "#22c55e" },
    { id: "4", label: "Option 4", color: "#f59e0b" },
    { id: "5", label: "Option 5", color: "#8b5cf6" },
];

export default function PickerWheelPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How does the picker wheel ensure fairness?",
            answer: "Our picker wheel uses cryptographic random number generation (RNG) to ensure every item has an equal chance of being selected. No favoritism, no bias – just truly random picks every time."
        },
        {
            question: "Can I use this for classroom name picking?",
            answer: "Absolutely! Teachers love our random picker for fair student selection. It works perfectly as a name spinner, question randomizer, or participation picker - keeping students engaged with visual spinning!"
        },
        {
            question: "Is the picker wheel free to use?",
            answer: "Yes! Our picker wheel is 100% free with unlimited spins and entries. No signup, no hidden costs - just open the page and start picking randomly!"
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
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-emerald-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                            <FiTarget className="text-lg" />
                            <span>Random Picker</span>
                        </div>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Picker Wheel – Free Random Selection Tool
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Need to pick something randomly? Our picker wheel makes selection easy and fun. Add your items, spin the wheel, and get an instant random pick. No bias, no favoritism – just fair random selection.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={PICKER_ENTRIES} storageKey="pickerWheelState" />
                </div>
            </section>

            {/* Benefits */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use a Picker Wheel?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The fairest way to randomly pick from any list
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-emerald-50 to-green-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-emerald-200 hover:shadow-lg transition-shadow">
                            <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShieldCheckmarkOutline className="text-xl text-emerald-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Unbiased Selection</h3>
                            <p className="md:text-base text-sm text-gray-600">Cryptographically random picks ensure no favoritism. Everyone and everything has equal chance.</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoListOutline className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Any List Works</h3>
                            <p className="md:text-base text-sm text-gray-600">Pick from names, items, tasks, options – anything you can put in a list works with our picker.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Visual & Engaging</h3>
                            <p className="md:text-base text-sm text-gray-600">Watching the wheel spin is more exciting than clicking a button. Makes selection memorable.</p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow">
                            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoHandLeftOutline className="text-xl text-orange-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Easy to Use</h3>
                            <p className="md:text-base text-sm text-gray-600">Add entries, click spin, done. No learning curve, no complicated setup needed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Use */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How to Use the Picker Wheel
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {[
                                { step: "1", title: "Add Your Items", desc: "Type in names, options, or items you want to pick from" },
                                { step: "2", title: "Customize If Needed", desc: "Change colors or edit entries to match your needs" },
                                { step: "3", title: "Spin the Wheel", desc: "Click the spin button and watch the picker in action" },
                                { step: "4", title: "Use Your Pick", desc: "The randomly selected item is displayed. Remove it and spin again for more picks!" },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-4 items-start bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-full flex items-center justify-center font-bold">
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
                            Picker Wheel Use Cases
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Team Assignments
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Pick team captains, assign tasks, or select who goes first in team activities.</p>
                            <Link href="/team-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Team Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Student Selection
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Teachers pick students for questions, presentations, or group assignments fairly.</p>
                            <Link href="/name-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Name Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Prize Drawings
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Pick prize winners at events, meetings, or celebrations with transparent selection.</p>
                            <Link href="/prize-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Prize Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Decision Making
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Pick from options when you can't decide. Let the wheel make the choice for you.</p>
                            <Link href="/decision-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Decision Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Picker Wheel in Professional Settings */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Picker Wheel in Professional Settings
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 md:p-6 p-4 md:rounded-xl rounded-lg border border-emerald-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">📊 Project Management</h3>
                                <p className="md:text-base text-sm text-gray-700 leading-relaxed mb-3">
                                    When multiple team members could handle a task equally well, use the picker wheel to assign work fairly. This eliminates favoritism perception and keeps morale high. Many Agile teams use random pickers for sprint retrospective facilitators, demo presenters, and code review assignments.
                                </p>
                                <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                                    <strong>Pro tip:</strong> Save your team wheel so you can quickly spin for any assignment without re-entering names every time.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-sky-50 md:p-6 p-4 md:rounded-xl rounded-lg border border-blue-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">🎓 Education & Training</h3>
                                <p className="md:text-base text-sm text-gray-700 leading-relaxed mb-3">
                                    Teachers and trainers use picker wheels to maintain engagement during sessions. Random student selection encourages everyone to stay prepared and pay attention. Studies show that random calling patterns increase student participation by up to 40% compared to voluntary hand-raising.
                                </p>
                                <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                                    <strong>Pro tip:</strong> Use the picker wheel on a projector or shared screen so students can see the transparent selection process.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 md:p-6 p-4 md:rounded-xl rounded-lg border border-purple-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">🏢 HR & Team Building</h3>
                                <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                                    HR departments use random pickers for Secret Santa pairings, office lottery draws, seating arrangements at events, and selecting employees for special opportunities like training programs or conference attendance. The randomness ensures every employee gets equal opportunity.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 md:p-6 p-4 md:rounded-xl rounded-lg border border-orange-200">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">🎪 Events & Conferences</h3>
                                <p className="md:text-base text-sm text-gray-700 leading-relaxed">
                                    Event organizers use picker wheels for door prizes, booth visitor giveaways, speaker order selection, and audience interaction segments. The visual spinning wheel adds entertainment value and keeps audiences engaged during transitions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Complete Guide */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Tips for Getting the Most From Your Picker Wheel
                        </h2>
                        <div className="space-y-4">
                            {[
                                { title: "Keep Lists Manageable", desc: "While our picker supports unlimited entries, wheels with 5-20 items provide the best visual experience. For larger lists (100+ names), consider grouping into smaller pools first." },
                                { title: "Use Meaningful Colors", desc: "Assign colors that relate to your entries. For example, team colors for sports picks, or category colors for mixed-type selections. This makes the wheel more intuitive at a glance." },
                                { title: "Remove After Picking", desc: "If you're selecting multiple winners without repeats, remove each selected entry after spinning. This ensures no one gets picked twice and gives remaining entries equal odds." },
                                { title: "Share for Transparency", desc: "When picking for contests or assignments, share your screen or send the wheel link. Seeing the random spin builds trust in the selection process." },
                                { title: "Save Your Frequent Wheels", desc: "Use the shareable link feature to bookmark wheels you use regularly – like your class roster or team list. This saves setup time for repeated uses." },
                            ].map((tip, index) => (
                                <div key={index} className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                                    <p className="md:text-base text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            More Picker Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/random-choice-picker", label: "Choice Picker" },
                            { href: "/wheel-spinner", label: "Wheel Spinner" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/team-picker", label: "Team Picker" },
                            { href: "/yes-no-wheel", label: "Yes/No Wheel" },
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
