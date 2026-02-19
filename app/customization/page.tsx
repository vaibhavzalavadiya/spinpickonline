import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { CallToAction } from "@/components/CallToAction";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";
import { FiDroplet, FiType, FiSave, FiStar } from "react-icons/fi";

export const metadata: Metadata = {
    title: "Custom Spin Wheel | Personalize Colors & Design | SpinPickOnline",
    description: "Create a fully customizable spin the wheel with personalized colors, text, emojis, and themes. Perfect for branded events, classroom activities, games, and decision making. Free custom wheel builder - no signup needed.",
    alternates: {
        canonical: "/customization",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CustomizationPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "Can I customize the colors on each wheel segment?",
            answer: "Yes! You can choose any color for each individual segment of your spinner wheel. Click on a segment's color picker to select your exact brand color, or use our random color generator to automatically assign beautiful, contrasting colors to all segments at once."
        },
        {
            question: "Can I add emojis and special characters to my wheel?",
            answer: "Absolutely! Our custom spin wheel supports full emoji and special character input. Add 🎉, ⭐, 🏆, or any Unicode character to make your wheel of names creative and engaging for parties, classrooms, or social media content."
        },
        {
            question: "Can I save my custom wheel configuration for later?",
            answer: "Yes! Your custom wheel settings are automatically saved in your browser. You can also generate a shareable link that preserves all your colors, entries, and settings - perfect for reusing the same custom random picker wheel across sessions."
        },
        {
            question: "Is the custom spin wheel builder free?",
            answer: "Yes, 100% free with no limits! Customize colors, add unlimited entries, use emojis, save configurations, and share your custom wheels - all without signup, payment, or watermarks. Our full customization suite is completely free."
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
                title="Customization"
                h1="Fully Customizable Spin Wheel & Name Picker"
                description="Make it yours! Whether you need a custom spinning wheel for brand colors, themed decision wheels, or a personalized random picker wheel with unique entry names, our tool gives you complete control. Perfect as a wheel of names spinner, randomizer, or picker wheel for any occasion."
                ctaText="Create Your Custom Wheel"
                benefits={[
                    "Custom Colors for Every Segment - Brand your spinner wheel",
                    "Unlimited Entries - Add as many options as needed",
                    "Emoji & Special Character Support - Make it fun and unique",
                    "Dark & Light Theme Options - Match your style",
                    "Edit Titles & Labels - Perfect for name wheels",
                    "Save & Reuse Settings - Quick setup for repeat use",
                    "Export & Share Custom Wheels - Send to anyone",
                    "Random Color Generator - Auto-assign vibrant colors",
                ]}
                useCases={[
                    "Branded Corporate Events & Giveaways",
                    "Themed Parties - Birthday, Halloween, Christmas wheels",
                    "Color-Coordinated Classroom Activities",
                    "Visual Learning Tools for Teachers",
                    "Custom Game Shows & Trivia Nights",
                    "Personalized Decision Wheels for Teams",
                    "Social Media Contest Wheels - Instagram, YouTube",
                    "Wedding & Event Planning Tools",
                ]}
            />

            {/* What is Section */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">What is a Custom Spin Wheel?</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                        <p>
                            A custom spin wheel (also known as a personalized name picker, branded wheel of names, or custom spinner wheel) is a free online tool that lets you create a unique random picker wheel tailored to your exact needs. Unlike generic spinners, our customization features allow you to set individual segment colors, add custom text with emojis, and save your configuration for repeated use - making it the most flexible decision wheel and name spinner available online.
                        </p>
                        <p>
                            Whether you need a custom picker wheel for brand-matched giveaways, personalized spinning wheels for themed classroom activities, branded random name generators for corporate events, or uniquely styled decision makers for parties, our free wheel spinner supports unlimited customization options including individual colors, text formatting, emoji support, and shareable links.
                        </p>
                    </div>
                </div>
            </section>

            {/* Customization Features Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Powerful Customization Features</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-linear-to-br from-blue-50 to-blue-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-blue-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiDroplet />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Segment Colors</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Choose any color for each individual segment of your spinner wheel. Match your brand palette, create themed wheels for holidays, or use our random color generator for instant visual appeal with perfectly contrasting colors.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-purple-50 to-purple-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-purple-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiType />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Text & Emojis</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Add any text, names, numbers, or emojis to your wheel of names. Create fun decision wheels with emoji icons, professional name pickers with formatted text, or creative game spinners with special characters.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-green-50 to-green-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-green-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiSave />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Save & Reuse Configurations</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Save your custom wheel configurations and reuse them anytime. Perfect for recurring events, weekly classroom activities, regular team meetings, or any situation where you need the same random picker wheel setup repeatedly.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-pink-50 to-pink-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-pink-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiStar />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Random Color Generator</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Let our random color generator automatically assign vibrant, high-contrast colors to your spinner wheel segments. One click creates a beautiful, professional-looking custom wheel without manual color selection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Customize Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-linear-to-br from-gray-50 to-blue-50 md:p-6 lg:p-10 p-4 lg:rounded-2xl rounded-xl">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Customize Your Random Picker Wheel?</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Brand Recognition</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Match your company or event colors for professional-looking giveaway wheels. Custom branded spinner wheels look great in livestreams, presentations, and social media content.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Engaging Visual Experience</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Custom colors and emojis make the spinning wheel more fun and engaging. Students, audiences, and participants are more excited when the wheel looks vibrant and personalized.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Theme Matching</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Create themed wheels for specific occasions - red and green for Christmas events, orange for Halloween, or school colors for classroom activities and sports team picks.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Improved Readability</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Custom color choices improve text contrast and readability on each segment. Make your wheel of names easy to read on any screen size, from phone displays to projectors.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Custom Wheel Ideas Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Popular Custom Wheel Ideas</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: "🎄", title: "Holiday Theme Wheels", desc: "Create festive custom spinner wheels for Christmas, Halloween, Easter, or any holiday celebration with matching colors and emoji" },
                            { icon: "🏢", title: "Corporate Branded Wheels", desc: "Match your company brand colors for professional giveaway wheels at trade shows, conferences, and corporate events" },
                            { icon: "🎓", title: "School Color Wheels", desc: "Teachers create custom name picker wheels using school colors for engaging classroom participation and group activities" },
                            { icon: "🎮", title: "Game Night Spinners", desc: "Design fun, colorful custom decision wheels for trivia nights, party games, truth or dare, and family game evenings" },
                            { icon: "🎂", title: "Birthday Party Wheels", desc: "Create personalized birthday spinner wheels with guest names and party colors for gift exchanges and party game selection" },
                            { icon: "📱", title: "Social Media Wheels", desc: "Design eye-catching custom wheels for Instagram stories, TikTok videos, and YouTube content that match your personal brand aesthetic" }
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
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Custom Wheel FAQs</h2>
                    <div className="space-y-4">
                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I customize the colors on each wheel segment?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Yes! You can choose any color for each individual segment of your spinner wheel. Click on a segment&apos;s color picker to select your exact brand color, or use our random color generator to automatically assign beautiful, contrasting colors to all segments at once.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I add emojis and special characters to my wheel?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Absolutely! Our custom spin wheel supports full emoji and special character input. Add 🎉, ⭐, 🏆, or any Unicode character to make your wheel of names creative and engaging for parties, classrooms, or social media content.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can I save my custom wheel configuration for later?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Yes! Your custom wheel settings are automatically saved in your browser. You can also generate a shareable link that preserves all your colors, entries, and settings - perfect for reusing the same custom random picker wheel across sessions.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Is the custom spin wheel builder free?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Yes, 100% free with no limits! Customize colors, add unlimited entries, use emojis, save configurations, and share your custom wheels - all without signup, payment, or watermarks. Our full customization suite is completely free.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction />
        </>
    );
}
