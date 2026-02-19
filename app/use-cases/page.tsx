import { Metadata } from "next";
import { generateMetadata as genMeta, generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";
import { USE_CASES } from "@/lib/constants";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { FiDisc, FiUser, FiTarget, FiUsers, FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = genMeta({
    title: "Use Cases | Random Picker Wheel for Every Need | SpinPickOnline",
    description: "Discover how to use our free random picker wheel. Team selection, classroom activities, giveaways, decision making, and more. Spin the wheel for fair randomization - all use cases available for free with no signup.",
    canonical: "/use-cases",
});

export default function UseCasesPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "What can I use a random picker wheel for?",
            answer: "Our random picker wheel works for countless scenarios: team selection for sports and work, classroom name picking for teachers, giveaway winner selection for social media, decision making for groups, task assignment, party games, and more. It's a versatile tool for any situation requiring fair, unbiased random selection."
        },
        {
            question: "Is the spin wheel suitable for professional use?",
            answer: "Absolutely! Businesses use our spinner wheel for task delegation, meeting order, and team formation. Teachers rely on our wheel of names for student participation. Event planners use our randomizer for raffle drawings. Our cryptographic RNG ensures professional-grade fairness."
        },
        {
            question: "Can I use the same wheel for different purposes?",
            answer: "Yes! Simply update the entries on your random picker wheel to match your current need. Switch from a name picker to a decision wheel to a team generator in seconds. You can also save multiple wheel configurations for different use cases."
        },
        {
            question: "Are all use cases completely free?",
            answer: "Yes, every use case on SpinPickOnline is 100% free with no hidden charges. Whether you need a name picker, decision wheel, team generator, or giveaway randomizer, all features are available without signup or payment."
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
            <div className="bg-gradient-to-b from-gray-50 to-white py-10 lg:py-16">
                <div className="container px-4 mx-auto max-w-6xl">
                    {/* Hero Section */}
                    <div className="text-center lg:mb-12 mb-6">
                        <div className="inline-block bg-linear-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
                            <span className="text-blue-700 font-semibold text-sm">🎯 Perfect for Every Need</span>
                        </div>
                        <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold text-gray-900 md:mb-6 mb-3">Random Picker Wheel Use Cases</h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-5xl mx-auto md:mb-8 mb-5">
                            Discover how our spin the wheel, wheel of names, and random picker tools help with team selection, classroom activities, giveaways, decision making, and more. All use cases available for free with our spinner wheel and randomizer.
                        </p>
                    </div>

                    {/* Use Cases Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {USE_CASES.map((useCase, index) => (
                            <Link
                                key={useCase.slug}
                                href={`/${useCase.slug}`}
                                className="block md:p-6 p-4 bg-white rounded-xl shadow-sm border-2 border-gray-200 hover:shadow-xl hover:border-blue-400 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-100 to-purple-100 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="sm:w-10 sm:h-10 w-8 h-8 bg-linear-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{useCase.useCase}</h2>
                                    </div>
                                    <p className="text-sm text-gray-600 md:mb-4 mb-2 leading-relaxed">{useCase.context}</p>
                                    <ul className="space-y-2">
                                        {useCase.benefits.slice(0, 3).map((benefit, idx) => (
                                            <li key={idx} className="text-sm text-gray-700 flex items-start">
                                                <span className="text-blue-600 mr-2 font-bold">✓</span>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* What is Section */}
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 md:p-8 p-4 lg:p-12 mb-8 lg:mb-14">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What Can You Do with a Random Picker Wheel?</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                            <p>
                                A random picker wheel (also called a spin wheel, spinner wheel, or wheel of names) is a versatile online tool that uses a random number generator (RNG) to select options fairly. From classroom activities and team formation to giveaway winner selection and everyday decision making, our free random picker wheel adapts to any scenario where unbiased, transparent random selection is needed.
                            </p>
                            <p>
                                Unlike basic randomizers, our spinning wheel creates an engaging visual experience that builds excitement around the selection process. Whether you&apos;re a teacher picking student names, a streamer selecting giveaway winners, a manager assigning tasks, or a coach forming teams, our picker wheel delivers fair results with a fun, interactive animation that everyone can watch and trust.
                            </p>
                        </div>
                    </div>

                    {/* Popular Tools Section */}
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 md:p-8 p-4 lg:p-12 lg:mb-14 mb-8">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">Popular Random Picker Tools</h2>
                        <div className="grid md:grid-cols-4 md:gap-6 gap-4">
                            <div className="text-center">
                                <div className="md:w-16 md:h-16 w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <FiDisc className="md:text-3xl text-lg text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1 text-sm">Spin the Wheel</h3>
                                <p className="text-xs text-gray-600">Random spinner wheel for instant decisions</p>
                            </div>
                            <div className="text-center">
                                <div className="md:w-16 md:h-16 w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <FiUser className="md:text-3xl text-lg text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1 text-sm">Wheel of Names</h3>
                                <p className="text-xs text-gray-600">Name picker for fair selection</p>
                            </div>
                            <div className="text-center">
                                <div className="md:w-16 md:h-16 w-10 h-10 bg-linear-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <FiTarget className="md:text-3xl text-lg text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1 text-sm">Decision Wheel</h3>
                                <p className="text-xs text-gray-600">Yes or no wheel for quick choices</p>
                            </div>
                            <div className="text-center">
                                <div className="md:w-16 md:h-16 w-10 h-10 bg-linear-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <FiUsers className="md:text-3xl text-lg text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1 text-sm">Random Group Generator</h3>
                                <p className="text-xs text-gray-600">Team picker for group formation</p>
                            </div>
                        </div>
                    </div>

                    {/* Use Case Categories Section */}
                    <div className="mb-8 lg:mb-14">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Spin Wheel Use Cases by Category</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-xl border-2 border-blue-200">
                                <h3 className="font-bold text-gray-900 mb-3">🎓 Education & Classrooms</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Random student name picker for participation</li>
                                    <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Group project team formation with fair randomization</li>
                                    <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Quiz and trivia question randomizer for lessons</li>
                                    <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">•</span> Presentation order spinner for class assignments</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-5 rounded-xl border-2 border-purple-200">
                                <h3 className="font-bold text-gray-900 mb-3">💼 Business & Professional</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Meeting standup order randomizer for teams</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Task and project assignment decision wheel</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Team building activity selector and icebreakers</li>
                                    <li className="flex items-start gap-2"><span className="text-purple-600 font-bold">•</span> Workshop breakout group generator for events</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 p-5 rounded-xl border-2 border-pink-200">
                                <h3 className="font-bold text-gray-900 mb-3">🎁 Social Media & Giveaways</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2"><span className="text-pink-600 font-bold">•</span> Instagram giveaway winner selection picker</li>
                                    <li className="flex items-start gap-2"><span className="text-pink-600 font-bold">•</span> YouTube subscriber contest randomizer</li>
                                    <li className="flex items-start gap-2"><span className="text-pink-600 font-bold">•</span> TikTok challenge participant selector</li>
                                    <li className="flex items-start gap-2"><span className="text-pink-600 font-bold">•</span> Twitch stream raffle and reward spinner wheel</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-5 rounded-xl border-2 border-green-200">
                                <h3 className="font-bold text-gray-900 mb-3">🎮 Games & Fun</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span> Party game decision maker and turn selector</li>
                                    <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span> Truth or dare spinner for friend groups</li>
                                    <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span> Movie and restaurant choice randomizer</li>
                                    <li className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span> Travel destination picker for vacation planning</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-linear-to-br from-blue-50 to-purple-50 md:p-8 p-4 lg:p-12 rounded-2xl border-2 border-blue-200 mb-8 lg:mb-14">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center">Perfect for Every Random Selection Need</h2>
                        <p className="text-gray-700 text-center md:text-base text-sm md:mb-6 mb-4 max-w-3xl mx-auto">
                            Whether you need a name picker for classrooms, a decision wheel for quick choices, a random group generator for teams, or a spinning wheel for giveaways - our free randomizer and wheel spinner handle it all. Works as wheel of names, yes or no wheel, random name generator, random word generator, random color generator, and more!
                        </p>
                        <div className="text-center">
                            <Link
                                href="/wheel"
                                className="inline-block sm:px-8 px-4 sm:py-4 py-2.5 sm:text-base text-sm bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                            >
                                Try Our Random Picker Wheel - Free Spinner Tool
                            </Link>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 md:mb-6 mb-4">Use Cases FAQs</h2>
                        <div className="space-y-4">
                            <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                                <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">What can I use a random picker wheel for?</h3>
                                <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                    Our random picker wheel works for countless scenarios: team selection for sports and work, classroom name picking for teachers, giveaway winner selection for social media, decision making for groups, task assignment, party games, and more. It&apos;s a versatile tool for any situation requiring fair, unbiased random selection.
                                </p>
                            </div>

                            <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                                <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Is the spin wheel suitable for professional use?</h3>
                                <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                    Absolutely! Businesses use our spinner wheel for task delegation, meeting order, and team formation. Teachers rely on our wheel of names for student participation. Event planners use our randomizer for raffle drawings. Our cryptographic RNG ensures professional-grade fairness.
                                </p>
                            </div>

                            <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                                <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I use the same wheel for different purposes?</h3>
                                <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                    Yes! Simply update the entries on your random picker wheel to match your current need. Switch from a name picker to a decision wheel to a team generator in seconds. You can also save multiple wheel configurations for different use cases.
                                </p>
                            </div>

                            <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                                <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Are all use cases completely free?</h3>
                                <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                    Yes, every use case on SpinPickOnline is 100% free with no hidden charges. Whether you need a name picker, decision wheel, team generator, or giveaway randomizer, all features are available without signup or payment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
