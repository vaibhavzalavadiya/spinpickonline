import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { FiTarget, FiLock, FiSmartphone } from 'react-icons/fi';
import { IoColorPaletteOutline, IoBriefcaseOutline, IoSchoolOutline, IoGameControllerOutline, IoGiftOutline, IoFootballOutline } from 'react-icons/io5';
import { MdOutlineCasino, MdCheckCircle } from 'react-icons/md';

export const metadata: Metadata = {
    title: "Name Spinner Feature | Rotate Through Names | SpinPickOnline",
    description: "The Name Spinner feature lets you effortlessly cycle through names for fair selection. Perfect for meetings and daily standups.",
    alternates: {
        canonical: "/name-spinner",
    },
};

// Default name spinner entries
const NAME_SPINNER_ENTRIES = [
    { id: "1", label: "Alex", color: "#3b82f6" },
    { id: "2", label: "Jordan", color: "#ef4444" },
    { id: "3", label: "Taylor", color: "#22c55e" },
    { id: "4", label: "Casey", color: "#f59e0b" },
    { id: "5", label: "Morgan", color: "#8b5cf6" },
];

export default function NameSpinnerPage() {
    return (
        <>
            <WheelPageTemplate
                title="Name Spinner"
                h1="Wheel of Names - Advanced Name Spinner"
                description="More than just a randomizer. Our wheel of names spinner ensures every name gets a fair chance with our RNG (random number generator). Visualize the selection process with our spinning wheel and build anticipation. Perfect as a random name picker, decision wheel, or picker wheel for any random selection needs!"
                ctaText="Spin the Wheel of Names"
                defaultEntries={NAME_SPINNER_ENTRIES}
                storageKey="nameSpinnerWheelState"
                benefits={[
                    "Visual Integrity - Transparent spinning wheel animation",
                    "Smooth Physics - Realistic wheel spinner motion",
                    "Fair Probability - Cryptographic RNG randomizer",
                    "Large Name Lists - Unlimited entries for your name wheel",
                    "Clear Text Display - Easy-to-read picker wheel",
                    "Winner Highlight - Celebrate results with confetti"
                ]}
                useCases={[
                    "Daily Standups - Random team member selector",
                    "Presentation Order - Fair speaker randomizer",
                    "Q&A Sessions - Random name picker for questions",
                    "Task Delegation - Decision wheel for work assignments",
                    "Shift Scheduling - Random group generator for shifts",
                    "Role Assignment - Yes or no wheel for role selection"
                ]}
            />

            {/* Additional SEO Content */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <div className="mb-16">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">What is a Wheel of Names Spinner?</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                            <p>
                                A wheel of names spinner (also called name spinner, random name picker, or spinner wheel) is an advanced visual tool that uses a random number generator (RNG) to fairly select names from a list. Our spinning wheel provides smooth physics, transparent animations, and cryptographically secure randomization for truly fair results.
                            </p>
                            <p>
                                Whether you need a picker wheel for meetings, a decision wheel for task assignments, a randomizer for giveaways, or a name wheel for classroom activities, our free tool handles it all. It works as a versatile random picker, wheel spinner, and random name generator - perfect for teams, teachers, and event organizers who need engaging, fair random selection.
                            </p>
                        </div>
                    </div>

                    <div className="mb-16 bg-linear-to-br from-blue-50 to-purple-50 p-8 lg:p-10 rounded-2xl">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Choose Our Wheel of Names?</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="text-blue-600 text-3xl"><FiTarget /></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Advanced Features</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Our spinning wheel features realistic physics, smooth animations, and professional design for engaging presentations and events.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-purple-600 text-3xl"><FiLock /></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Enterprise-Grade Security</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Our random number generator uses cryptographic algorithms for maximum security and verifiable fairness in every spin.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-pink-600 text-3xl"><IoColorPaletteOutline /></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Custom Color Generator</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Use our random color generator to create beautiful, branded wheel spinners. Perfect for streaming, presentations, or social media content.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-green-600 text-3xl"><FiSmartphone /></div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Mobile Spinner Wheel</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Touch-optimized picker wheel that works perfectly on phones, tablets, and desktop. No app download needed - works in any browser!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Popular Uses for Name Spinner Wheels</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { icon: <IoBriefcaseOutline />, color: "text-blue-600", title: "Team Meetings", desc: "Random name picker for daily standups, presentations, and Q&A sessions" },
                                { icon: <IoSchoolOutline />, color: "text-green-600", title: "Classroom Spinner", desc: "Teachers use our wheel of names for fair student participation and group activities" },
                                { icon: <IoGameControllerOutline />, color: "text-purple-600", title: "Gaming Randomizer", desc: "Perfect decision wheel for game night, team selection, or turn order" },
                                { icon: <IoGiftOutline />, color: "text-pink-600", title: "Giveaway Wheel", desc: "Transparent random picker for Instagram, YouTube, and social media contests" },
                                { icon: <IoFootballOutline />, color: "text-orange-600", title: "Sports Team Picker", desc: "Random group generator for fair team distribution in sports and games" },
                                { icon: <MdOutlineCasino />, color: "text-red-600", title: "Event Randomizer", desc: "Spinner wheel for raffles, prize drawings, and event activities" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white md:p-5 p-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                                    <div className={`text-4xl mb-3 ${item.color}`}>{item.icon}</div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-linear-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Choose Our Wheel Spinner?</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="text-green-600 text-2xl"><MdCheckCircle /></div>
                                <div>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm"><strong>Unlimited Features:</strong> Our wheel spinner offers unlimited entries, custom colors, smooth animations, and shareable links - perfect for professional use.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-green-600 text-2xl"><MdCheckCircle /></div>
                                <div>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm"><strong>Cryptographic Security:</strong> We use cryptographic RNG for verifiable fairness with enterprise-level security standards.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-green-600 text-2xl"><MdCheckCircle /></div>
                                <div>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm"><strong>Versatile Tool:</strong> Works as a random name picker, yes or no wheel, decision randomizer, team picker, random word generator, or any custom spinner wheel you need!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
