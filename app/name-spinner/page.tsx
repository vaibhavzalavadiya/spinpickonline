import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { CallToAction } from "@/components/CallToAction";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";
import { FiTarget, FiLock, FiSmartphone } from 'react-icons/fi';
import { IoColorPaletteOutline, IoBriefcaseOutline, IoSchoolOutline, IoGameControllerOutline, IoGiftOutline, IoFootballOutline } from 'react-icons/io5';
import { MdOutlineCasino, MdCheckCircle } from 'react-icons/md';

export const metadata: Metadata = {
    title: "Name Spinner Wheel | Wheel of Names - Free Random Name Picker | SpinPickOnline",
    description: "Free name spinner wheel and wheel of names for fair random selection. Pick random names for meetings, classrooms, giveaways, and team activities. Cryptographic RNG ensures truly fair name picking.",
    alternates: {
        canonical: "/name-spinner",
    },
    robots: {
        index: true,
        follow: true,
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
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How does the name spinner wheel work?",
            answer: "Enter your names into the wheel, click 'Spin,' and our cryptographically secure random number generator (CSPRNG) selects a winner with verifiable fairness. The spinning animation provides visual excitement while the underlying algorithm ensures every name has an equal chance."
        },
        {
            question: "Can I use the wheel of names for classroom activities?",
            answer: "Absolutely! Teachers use our name spinner for random student selection, participation picking, group formation, and presentation order. Save your class roster once and reuse it all semester - works on classroom iPads and projectors too."
        },
        {
            question: "How many names can I add to the name spinner?",
            answer: "There is no limit! Add as many names as you need to your wheel of names. Whether it's 5 names for a small team or 100+ names for a large class or giveaway, our name spinner handles any list size smoothly."
        },
        {
            question: "Is the name spinner really random and fair?",
            answer: "Yes! Our name spinner uses a Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) - the same technology used by security systems. Every name has a mathematically equal probability of being selected, making our wheel of names truly fair."
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

            {/* What is Section */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <div className="mb-16">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">What is a Wheel of Names Spinner?</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                            <p>
                                A wheel of names spinner (also called name spinner, random name picker, or spinner wheel) is an advanced visual tool that uses a random number generator (RNG) to fairly select names from a list. Our spinning wheel provides smooth physics, transparent animations, and cryptographically secure randomization for truly fair results. Unlike simple list randomizers, the visual spinning creates excitement and anticipation that makes the selection process engaging for everyone watching.
                            </p>
                            <p>
                                Whether you need a picker wheel for meetings, a decision wheel for task assignments, a randomizer for giveaways, or a name wheel for classroom activities, our free tool handles it all. It works as a versatile random picker, wheel spinner, and random name generator - perfect for teams, teachers, and event organizers who need engaging, fair random selection. Our name spinner supports unlimited entries, custom colors, shareable links, and works on all devices including mobile phones and tablets.
                            </p>
                        </div>
                    </div>

                    {/* How to Use Section */}
                    <div className="mb-16">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">How to Use the Name Spinner Wheel</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-xl border-2 border-blue-200 text-center">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                                <h3 className="font-bold text-gray-900 mb-2">Add Names</h3>
                                <p className="text-sm text-gray-700">Enter your list of names, one per line. Add as many names as you need - there are no limits on our wheel of names.</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-5 rounded-xl border-2 border-purple-200 text-center">
                                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                                <h3 className="font-bold text-gray-900 mb-2">Customize & Spin</h3>
                                <p className="text-sm text-gray-700">Optionally customize colors, then click &quot;Spin.&quot; Our RNG randomly selects a name with smooth, realistic spinning animation.</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-5 rounded-xl border-2 border-green-200 text-center">
                                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                                <h3 className="font-bold text-gray-900 mb-2">Get Results</h3>
                                <p className="text-sm text-gray-700">The selected name is highlighted with confetti. Share results, remove winner, or spin again for your next random pick.</p>
                            </div>
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

                    <div className="mb-16 bg-linear-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
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

                    {/* FAQ Section */}
                    <div>
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Name Spinner FAQs</h2>
                        <div className="space-y-4">
                            <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                                <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">How does the name spinner wheel work?</h3>
                                <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                    Enter your names into the wheel, click &quot;Spin,&quot; and our cryptographically secure random number generator (CSPRNG) selects a winner with verifiable fairness. The spinning animation provides visual excitement while the underlying algorithm ensures every name has an equal chance.
                                </p>
                            </div>

                            <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                                <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I use the wheel of names for classroom activities?</h3>
                                <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                    Absolutely! Teachers use our name spinner for random student selection, participation picking, group formation, and presentation order. Save your class roster once and reuse it all semester - works on classroom iPads and projectors too.
                                </p>
                            </div>

                            <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                                <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">How many names can I add to the name spinner?</h3>
                                <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                    There is no limit! Add as many names as you need to your wheel of names. Whether it&apos;s 5 names for a small team or 100+ names for a large class or giveaway, our name spinner handles any list size smoothly.
                                </p>
                            </div>

                            <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                                <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Is the name spinner really random and fair?</h3>
                                <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                    Yes! Our name spinner uses a Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) - the same technology used by security systems. Every name has a mathematically equal probability of being selected, making our wheel of names truly fair.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction />
        </>
    );
}
