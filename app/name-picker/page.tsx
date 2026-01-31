import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { FiEdit, FiSettings, FiRotateCw, FiShare2 } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
    title: "Random Name Picker | Pick A Random Name | SpinPickOnline",
    description: "The fair and fun way to pick a random name from a list. Perfect for raffles, teachers, and contests. No signup required.",
    alternates: {
        canonical: "/name-picker",
    },
};

export default function NamePickerPage() {
    return (
        <>
            <WheelPageTemplate
                title="Random Name Picker"
                h1="Wheel of Names - Random Name Picker"
                description="Need to pick a name fairly? Our Random Name Picker wheel does the heavy lifting for you. Just enter the names and spin to see who the lucky winner is!"
                ctaText="Pick a Name Now"
                benefits={[
                    "100% Fair & Random",
                    "Unlimited Names",
                    "Nice Visual Animations",
                    "Confetti Celebration",
                    "Works on Mobile",
                    "Instant Re-spin"
                ]}
                useCases={[
                    "Classroom Participation",
                    "Raffle Drawings",
                    "Job Assignments",
                    "Secret Santa Pairs",
                    "Winner Selection",
                    "Volunteer Picking"
                ]}
            />

            {/* What is Section */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">What is a Random Name Picker Wheel?</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 md:text-base text-sm">
                        <p>
                            A random name picker (also known as a name spinner, wheel of names, or name wheel) is a digital tool that uses a random number generator (RNG) to fairly select one name from a list. Unlike manual selection or basic Google spinner tools, our random picker wheel provides a transparent, engaging, and cryptographically secure way to choose names for any purpose.
                        </p>
                        <p>
                            Whether you need a name picker for classroom activities, a randomizer for giveaway winners, or a spinning wheel for team selection, our free tool handles it all. It works as a versatile decision wheel, spinner wheel, and random selector - perfect for teachers, event organizers, and anyone who needs fair, unbiased random selection.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Use Section */}
            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">How to Use Our Name Picker Spinner</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-linear-to-br from-blue-50 to-blue-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-blue-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiEdit />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Names</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Add names to your wheel of names - perfect for creating a custom random name generator or name spinner wheel. Enter student names, participant names, or any list you need to randomize.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-purple-50 to-purple-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-purple-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiSettings />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Customize Your Spinner</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Use our random color generator to assign unique colors or choose your own. Make your picker wheel visually appealing for presentations or streaming.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-green-50 to-green-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-green-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiRotateCw />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Spin the Wheel</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Click to spin the wheel and watch our RNG randomizer select a winner! The spinning wheel animation builds excitement while our cryptographic algorithm ensures fairness.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-pink-50 to-pink-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-pink-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiShare2 />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Results</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Share your random picker results instantly. Perfect for Instagram giveaways, YouTube contests, or classroom transparency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="bg-white py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-linear-to-br from-gray-50 to-blue-50 md:p-6 lg:p-10 p-4 lg:rounded-2xl rounded-xl">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Choose Our Random Name Picker?</h2>
                        <div className="grid sm:grid-cols-2 md:gap-6 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Unlimited Names & Features</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">We offer unlimited names, custom colors, and shareable links for your wheel spinner with no restrictions.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Cryptographic RNG</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Our random number generator uses cryptographic algorithms - more secure than basic randomizer tools or simple roulette wheels.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Multi-Purpose Tool</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Works as a decision wheel, yes or no wheel, team picker, random word generator, or any custom spin wheel you need!</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">100% Free Forever</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Free random name picker, unlimited spins, no signup. Better than paid alternatives or limited free trials!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Use Cases Section */}
            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Popular Uses for Name Picker Wheels</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: "🎓", title: "Classroom Name Picker", desc: "Teachers use our random name spinner for fair student selection and participation" },
                            { icon: "🎁", title: "Giveaway Randomizer", desc: "Instagram & YouTube creators trust our picker wheel for transparent contest winners" },
                            { icon: "👥", title: "Team Random Picker", desc: "Perfect random group generator for sports teams and work projects" },
                            { icon: "🎯", title: "Decision Maker", desc: "Use as a yes or no wheel or decision randomizer for quick choices" },
                            { icon: "🎪", title: "Event Name Wheel", desc: "Raffle drawings, prize wheels, and game show spinner needs" },
                            { icon: "💼", title: "Work Name Selector", desc: "Random assignment of tasks, presentations, or volunteer roles" }
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

            {/* FAQ Section */}
            <section className="bg-white py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Name Picker FAQs</h2>
                    <div className="space-y-4">
                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Is this name picker truly random?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Yes! Our random name picker uses a cryptographically secure random number generator (RNG), making it far more reliable than basic spinner wheel tools. Every name has an equal chance of being selected.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I use this as a wheel of names for my classroom?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Absolutely! Teachers love using our name spinner and wheel of names for fair student selection. It works perfectly as a classroom random picker, participation spinner, or question randomizer. The visual spinning wheel keeps students engaged!
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">How is this different from other picker wheels?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                We offer unlimited entries, custom random color generator, mobile optimization, and shareable links. Our randomizer is also more secure with cryptographic RNG for truly fair selection!
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I use this for giveaways and contests?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Yes! Our random picker wheel is perfect for transparent giveaway selection. Use it as a name picker for Instagram contests, YouTube giveaways, or any random name generator needs. The wheel spinner builds excitement and trust with your audience!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction/>
        </>
    );
}

