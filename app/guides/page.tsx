import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiBook } from "react-icons/fi";
import { IoRocketOutline, IoColorPaletteOutline, IoTrophyOutline, IoSchoolOutline, IoPeopleOutline, IoHelpCircleOutline } from "react-icons/io5";
import { CallToAction } from "@/components/CallToAction";
import { generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Guides & Tutorials | How to Use Spin Wheel | SpinPickOnline",
    description: "Learn how to use our spin the wheel, random picker wheel, wheel of names, and randomizer. Complete guides for creating the perfect spinner wheel and decision wheel. Step-by-step tutorials for beginners and pros.",
    alternates: {
        canonical: "/guides",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function GuidesPage() {
    const faqSchema = generateFAQSchema([
        {
            question: "How do I get started with the spin wheel?",
            answer: "Getting started is simple! Visit the homepage, click 'Create Wheel,' add your names or options, and click 'Spin.' Our random picker wheel handles the rest with fair, cryptographic randomization. No signup or download needed."
        },
        {
            question: "Can I customize the spinner wheel for my brand?",
            answer: "Yes! You can customize individual segment colors to match your brand, add emojis, adjust spin duration, toggle sound effects, and save your configuration. Our random color generator can also auto-assign beautiful colors."
        },
        {
            question: "How do I use the wheel for Instagram giveaways?",
            answer: "Add all participant names to the wheel, customize it with your brand colors, go fullscreen, and spin live on camera. Share the wheel link for full transparency. Our cryptographic RNG ensures fair, verifiable selection."
        }
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-6 sm:py-10">
                <div className="mx-auto max-w-4xl px-4 sm:px-6">
                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors mb-5 sm:mb-6"
                    >
                        <FiArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    {/* Header */}
                    <div className="text-center mb-5 sm:mb-8">
                        <div className="flex justify-center mb-3">
                            <div className="bg-linear-to-br from-blue-500 to-purple-600 p-2.5 sm:p-3 rounded-lg shadow-md">
                                <FiBook className="text-xl sm:text-2xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Spin Wheel Guides & Tutorials</h1>
                        <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
                            Master our random picker wheel, wheel of names, and spinner wheel with these step-by-step guides. Learn everything from basic setup to advanced customization and professional giveaway hosting.
                        </p>
                    </div>

                    {/* Featured Guide */}
                    <Link href="/guides/how-to-use-random-picker-wheel" className="block bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 md:p-6 shadow-lg mb-6 hover:shadow-xl transition-shadow group">
                        <div className="flex items-center gap-2 text-blue-100 text-sm mb-2">
                            <span className="bg-white/20 px-2 py-1 rounded text-xs font-semibold">FEATURED GUIDE</span>
                        </div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:underline">
                            How to Use a Random Picker Wheel: Complete Guide
                        </h2>
                        <p className="text-blue-100 text-sm mb-3">
                            Step-by-step tutorial with screenshots, tips for teachers, giveaways, and decision making. Learn everything you need to know about creating and using spinner wheels!
                        </p>
                        <span className="text-white font-semibold text-sm inline-flex items-center gap-2">
                            Read Full Guide →
                        </span>
                    </Link>

                    {/* Guides */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <IoRocketOutline className="text-xl text-blue-600" />
                                </div>
                                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Getting Started with Spin the Wheel</h2>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                Learn how to create your first random picker wheel, wheel of names, or decision wheel in seconds. This beginner-friendly guide walks you through every step of the process, from adding names to spinning for results.
                            </p>
                            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold mt-0.5">1.</span>
                                    <span>Go to the homepage and click &quot;Create Wheel&quot; to start your spinner wheel or random name picker</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold mt-0.5">2.</span>
                                    <span>Enter your list of names, numbers, or items for your wheel of names or random picker</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold mt-0.5">3.</span>
                                    <span>Click &quot;Spin&quot; to use our RNG (random number generator) and pick a random winner!</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold mt-0.5">4.</span>
                                    <span>Use &quot;Shuffle&quot; button to randomize order before spinning your wheel spinner or decision wheel</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="bg-purple-100 p-2 rounded-lg">
                                    <IoColorPaletteOutline className="text-xl text-purple-600" />
                                </div>
                                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Customizing Your Random Picker Wheel</h2>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                Make your spinning wheel unique with custom colors and settings. Perfect for branded events, giveaways, or themed decision wheels. Our customization options let you create professional-looking wheels in minutes.
                            </p>
                            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-600 font-bold">•</span>
                                    <span><strong>Random Color Generator:</strong> We auto-assign beautiful colors to your wheel spinner, but you can customize each segment for your name wheel or picker wheel</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-600 font-bold">•</span>
                                    <span><strong>Spin Duration:</strong> Control how long your spin the wheel animation runs for added suspense in your randomizer</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-600 font-bold">•</span>
                                    <span><strong>Sound Effects:</strong> Toggle sound on/off for your wheel of names or decision wheel in quiet environments</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-600 font-bold">•</span>
                                    <span><strong>Custom Entries:</strong> Add unlimited names, numbers, or options to your random picker wheel or yes or no wheel</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <IoTrophyOutline className="text-xl text-green-600" />
                                </div>
                                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Using Spinner Wheel for Events & Giveaways</h2>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                Our random picker wheel is perfect for live events, streams, classrooms, Instagram giveaways, and YouTube contests. Build trust with transparent randomization and make your selection process exciting for everyone!
                            </p>
                            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span><strong>Fullscreen Mode:</strong> Press F11 for a clean look when using your wheel spinner or name picker on projectors or streams</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span><strong>Mobile Friendly:</strong> Our spinner wheel works perfectly on phones and tablets for on-the-go random selection</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span><strong>Fair Randomness:</strong> Show your audience our cryptographic RNG to prove your wheel of names or randomizer is unbiased</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span><strong>Shareable Links:</strong> Create custom wheel links with spin the wheel custom options to share your random picker with anyone</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span><strong>Multiple Uses:</strong> Perfect as a random name picker, random group generator, decision wheel, yes or no wheel, or team picker</span>
                                </li>
                            </ul>
                        </div>

                        {/* New Guide: Teachers & Classrooms */}
                        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="bg-orange-100 p-2 rounded-lg">
                                    <IoSchoolOutline className="text-xl text-orange-600" />
                                </div>
                                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Spin Wheel Guide for Teachers & Educators</h2>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                Teachers and educators around the world use our wheel of names and random name picker to make classroom activities more engaging and fair. Here&apos;s how to get the most out of our tools in educational settings.
                            </p>
                            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-600 font-bold">•</span>
                                    <span><strong>Student Name Picker:</strong> Enter your class roster into the wheel of names for random student selection during lessons and discussions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-600 font-bold">•</span>
                                    <span><strong>Group Formation:</strong> Use our random group generator to create fair, unbiased teams for class projects and collaborative activities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-600 font-bold">•</span>
                                    <span><strong>Presentation Order:</strong> Spin the wheel to determine who presents first, removing any perceived favoritism or bias from the selection process</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-600 font-bold">•</span>
                                    <span><strong>Classroom Games:</strong> Create trivia wheels, vocabulary spinners, or topic selection wheels to make learning interactive and fun</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-600 font-bold">•</span>
                                    <span><strong>Save & Reuse:</strong> Save your class wheel configuration so you can reuse it every day without re-entering student names</span>
                                </li>
                            </ul>
                        </div>

                        {/* New Guide: Team Building */}
                        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="bg-teal-100 p-2 rounded-lg">
                                    <IoPeopleOutline className="text-xl text-teal-600" />
                                </div>
                                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Using the Spin Wheel for Team Building</h2>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                Our random picker wheel and team generator are ideal for workplace team building, standup meetings, and collaborative exercises. Make your team interactions more dynamic and fair with these tips.
                            </p>
                            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 font-bold">•</span>
                                    <span><strong>Standup Order:</strong> Spin the wheel to randomly select who speaks first in daily standups - keeps meetings fresh and engaging</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 font-bold">•</span>
                                    <span><strong>Task Assignment:</strong> Use the decision wheel to fairly distribute tasks, code reviews, or responsibilities among team members</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 font-bold">•</span>
                                    <span><strong>Icebreaker Activities:</strong> Create themed spinner wheels with icebreaker questions or activities for team bonding sessions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-teal-600 font-bold">•</span>
                                    <span><strong>Cross-Team Pairing:</strong> Randomly pair team members for mentoring or collaboration opportunities using the name picker</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-xl p-5 sm:p-6 border-2 border-blue-200">
                            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">Pro Tips for Your Random Picker Wheel</h2>
                            <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                                <p><strong>✓ Advanced Features:</strong> Our wheel spinner offers unlimited entries, custom colors, and shareable links with professional-grade randomization</p>
                                <p><strong>✓ Secure Technology:</strong> We use cryptographic RNG for verifiable fairness with enterprise-level security standards</p>
                                <p><strong>✓ Free Forever:</strong> Unlimited spins with our free random picker wheel, name spinner, wheel of names, and randomizer - no signup required!</p>
                                <p><strong>✓ Works Everywhere:</strong> Our mobile-friendly spinner wheel runs on iPhones, Android phones, iPads, tablets, and desktops</p>
                                <p><strong>✓ Share Instantly:</strong> Generate a unique link to share your custom wheel configuration with colleagues, students, or followers</p>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="bg-indigo-100 p-2 rounded-lg">
                                    <IoHelpCircleOutline className="text-xl text-indigo-600" />
                                </div>
                                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">How do I get started with the spin wheel?</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Getting started is simple! Visit the homepage, click &quot;Create Wheel,&quot; add your names or options, and click &quot;Spin.&quot; Our random picker wheel handles the rest with fair, cryptographic randomization. No signup or download needed.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Can I customize the spinner wheel for my brand?</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Yes! You can customize individual segment colors to match your brand, add emojis, adjust spin duration, toggle sound effects, and save your configuration. Our random color generator can also auto-assign beautiful colors.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">How do I use the wheel for Instagram giveaways?</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Add all participant names to the wheel, customize it with your brand colors, go fullscreen, and spin live on camera. Share the wheel link for full transparency. Our cryptographic RNG ensures fair, verifiable selection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CallToAction />
        </>
    );
}
