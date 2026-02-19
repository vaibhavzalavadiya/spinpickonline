import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { CallToAction } from "@/components/CallToAction";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";
import Link from "next/link";
import { FiLink, FiShare2, FiSave, FiUsers, FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
    title: "Shareable Spin Wheel | Save & Share Custom Wheels | SpinPickOnline",
    description: "Create a custom spin wheel and share it with friends, students, or teammates instantly. Save your wheel of names, random picker wheel, and spinner configurations. Free shareable wheel tool - no signup required.",
    alternates: {
        canonical: "/shareable-wheels",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ShareableWheelsPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How do I share my spin wheel with others?",
            answer: "Simply create your custom wheel with names or options, then click the 'Share' button to generate a unique link. Send this link via email, social media, or messaging apps. Recipients can open and spin the wheel instantly - no account needed!"
        },
        {
            question: "Can recipients edit my shared wheel of names?",
            answer: "No, shared wheels are read-only for recipients to maintain the integrity of your original configuration. However, recipients can clone (copy) your wheel to create their own editable version with all your settings preserved."
        },
        {
            question: "Do shared spinner wheels expire?",
            answer: "No! Your shared wheel links are permanent and will work indefinitely. Whether you share it today or months from now, the link will always open your custom random picker wheel exactly as you designed it."
        },
        {
            question: "Is creating and sharing wheels really free?",
            answer: "Yes, 100% free! Creating, saving, and sharing custom spin wheels requires no signup, no payment, and no limits. Share as many custom wheels as you need with unlimited recipients."
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
                title="Shareable Wheels"
                h1="Shareable Spin Wheels"
                description="Collaboration made easy. Create your perfect wheel configuration and share the link with colleagues, students, or friends so they can spin it too."
                ctaText="Create & Share"
                benefits={[
                    "Unique Share Links",
                    "Social Media Sharing",
                    "Save Configurations",
                    "No Account Needed",
                    "Instant Access",
                    "Clone Functionality"
                ]}
                useCases={[
                    "Remote Meetings",
                    "Viral Challenges",
                    "Teacher Resources",
                    "Event Planning",
                    "Group Decisions",
                    "Social Polls"
                ]}
            />

            {/* What is Section */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">What is a Shareable Spin Wheel?</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                        <p>
                            A shareable spin wheel (also known as a collaborative name picker, shared wheel of names, or team spinner wheel) is a free online tool that lets you create custom random picker wheels and share them instantly with anyone via a unique link. Unlike traditional randomizers, our shareable spinner wheel allows you to save your configuration and distribute it to colleagues, students, friends, or followers - making collaborative random selection effortless.
                        </p>
                        <p>
                            Whether you need a shared decision wheel for remote teams, a collaborative name spinner for online classrooms, or a viral spinning wheel for social media contests, our free tool makes sharing effortless. Perfect for creating shareable picker wheels for Instagram giveaways, collaborative random name generators for virtual meetings, team decision wheels for remote work, or reusable name spinners for recurring events. Share via link, social media, or embed on your website - no signup required for you or your audience.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Share Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">How to Create & Share Your Wheel</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-linear-to-br from-blue-50 to-blue-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-blue-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiLink />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Your Custom Wheel</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Add names, options, or choices to your spin wheel. Customize colors with our random color generator and set up your perfect wheel of names or decision wheel configuration.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-purple-50 to-purple-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-purple-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiShare2 />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Generate Shareable Link</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Click the share button to create a unique URL for your spinner wheel. This link preserves all your entries, colors, and settings for anyone who opens it.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-green-50 to-green-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-green-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiSave />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Save for Later</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Bookmark or save your wheel link for recurring use. Perfect for teachers who reuse the same name picker wheel weekly or teams with regular random selection needs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-pink-50 to-pink-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-pink-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiUsers />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborate Instantly</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Recipients can spin your shared random picker wheel immediately - no account or signup required. Everyone sees the same fair, transparent randomizer results.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sharing Features Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-linear-to-br from-gray-50 to-blue-50 md:p-6 lg:p-10 p-4 lg:rounded-2xl rounded-xl">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Share Your Random Picker Wheel?</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Transparent Selection Process</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Sharing your wheel of names allows all participants to see the exact entries and verify the fairness of the random selection. Build trust with transparent randomization.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Remote Team Collaboration</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Perfect for distributed teams who need a shared decision wheel for standups, task assignments, or brainstorming. Everyone spins the same spinner wheel from anywhere.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Reusable Configurations</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Save time by creating a wheel once and reusing it. Teachers can share classroom name picker wheels each semester. Event planners reuse raffle wheels across events.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Zero Friction Sharing</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">No accounts, no downloads, no app installations. Share a link and recipients can spin your random picker wheel instantly in any browser on any device.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Uses Shareable Wheels Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Who Uses Shareable Spin Wheels?</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: "👩‍🏫", title: "Teachers & Educators", desc: "Share name picker wheels with students or other teachers for classroom activities, group projects, and fair participation selection" },
                            { icon: "📱", title: "Social Media Influencers", desc: "Share giveaway spinner wheels on Instagram, YouTube, and TikTok to let followers verify fair random winner selection" },
                            { icon: "💼", title: "Remote Teams & Managers", desc: "Create shared decision wheels for standup order, task assignment, and team building activities across distributed offices" },
                            { icon: "🎉", title: "Event Organizers", desc: "Share raffle wheels and prize spinner links with event attendees for transparent and exciting drawings at any gathering" },
                            { icon: "🎮", title: "Gaming Communities", desc: "Share custom randomizer wheels for game night, character selection, map picks, or tournament bracket randomization" },
                            { icon: "👨‍👩‍👧‍👦", title: "Families & Friend Groups", desc: "Create shared decision wheels for choosing restaurants, movie nights, chore assignments, or travel destination picks" }
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

            {/* Sharing Best Practices Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Best Practices for Sharing Your Wheel</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-xl border-2 border-blue-200">
                            <h3 className="font-bold text-gray-900 mb-2">🎯 For Giveaways & Contests</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                Share your random picker wheel link publicly so all participants can verify their name is included. This transparency builds trust and increases engagement for your Instagram, YouTube, or TikTok giveaways.
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Consider going live while spinning the shared wheel for maximum credibility and audience excitement during winner selection.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-5 rounded-xl border-2 border-purple-200">
                            <h3 className="font-bold text-gray-900 mb-2">📚 For Classrooms & Education</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                Teachers can create a class name spinner wheel once and share it via Google Classroom, Microsoft Teams, or email. Students love seeing the visual spinning animation for random participation selection.
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Update your shared wheel of names at the start of each term or when new students join the class. The saved configuration makes setup instant.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Shareable Wheels FAQs</h2>
                    <div className="space-y-4">
                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">How do I share my spin wheel with others?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Simply create your custom wheel with names or options, then click the &apos;Share&apos; button to generate a unique link. Send this link via email, social media, or messaging apps. Recipients can open and spin the wheel instantly - no account needed!
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Can recipients edit my shared wheel of names?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                No, shared wheels are read-only for recipients to maintain the integrity of your original configuration. However, recipients can clone (copy) your wheel to create their own editable version with all your settings preserved.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Do shared spinner wheels expire?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                No! Your shared wheel links are permanent and will work indefinitely. Whether you share it today or months from now, the link will always open your custom random picker wheel exactly as you designed it.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Is creating and sharing wheels really free?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Yes, 100% free! Creating, saving, and sharing custom spin wheels requires no signup, no payment, and no limits. Share as many custom wheels as you need with unlimited recipients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction />
        </>
    );
}
