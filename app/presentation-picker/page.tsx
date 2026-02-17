import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { FiEdit, FiRotateCw, FiShare2, FiSettings, FiArrowRight, FiMic } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Presentation Picker Wheel | Choose Presenters Fairly | SpinPickOnline",
    description: "Randomly pick presenters for meetings and classes with our fair presentation picker wheel. Transparent selection, instant results, and fun animations.",
    alternates: {
        canonical: "/presentation-picker",
    },
};


// Default presentation entries
const PRESENTATION_ENTRIES = [
    { id: "1", label: "Speaker 1", color: "#3b82f6" },
    { id: "2", label: "Speaker 2", color: "#ef4444" },
    { id: "3", label: "Speaker 3", color: "#22c55e" },
    { id: "4", label: "Speaker 4", color: "#f59e0b" },
    { id: "5", label: "Speaker 5", color: "#8b5cf6" },
];

export default function PresentationPickerPage() {
    // Generate schemas for SEO
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How do I choose the next presenter fairly?",
            answer: "Simply enter the names of all potential presenters into our wheel. Click spin, and our cryptographically secure randomizer will select one person at a time. It's perfectly fair and builds anticipation in the room!"
        },
        {
            question: "Is this better than drawing names from a hat?",
            answer: "Yes! Our digital presentation picker is 100% transparent. Everyone in the meeting can see the wheel spin and land on a result. This eliminates any doubt about fairness and adds a fun, interactive element to your presentations."
        },
        {
            question: "Can I use this on a large projector or Smartboard?",
            answer: "Absolutely! The picker wheel is designed to look great on large screens. It's a favorite for teachers and corporate moderators who want to keep the audience engaged while selecting the next speaker."
        },
        {
            question: "Can I remove names after they've presented?",
            answer: "Yes! Once someone has been selected, you can easily remove their entry so they aren't picked again. This makes it perfect for managing a full day of speakers or students."
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
                title="Presentation Picker"
                h1="Presentation Picker Wheel - Fairly Select Presenters"
                description="Who's next? Eliminate the anxiety of picking presenters by leaving it to chance. Our presentation picker wheel ensures everyone gets a fair turn in meetings and classrooms."
                ctaText="Pick a Presenter"
                defaultEntries={PRESENTATION_ENTRIES}
                storageKey="presentationPickerWheelState"
                benefits={[
                    "Fair Turn Ordering",
                    "Reduces Selection Bias",
                    "Builds Anticipation",
                    "Classroom & Office Ready",
                    "Touch-Screen Friendly",
                    "Clear Winner Highlight"
                ]}
                useCases={[
                    "Classroom Presentations",
                    "Corporate Standups",
                    "Webinar Q&A Sessions",
                    "Pitch Competitions",
                    "Workshop Volunteers",
                    "Conference Spotlights"
                ]}
            />

            {/* Content Section */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">The Fair Way to Set the Presentation Order</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                        <p>
                            Deciding who speaks next can be stressful for both the moderator and the participants. Our presentation picker wheel turns a potentially awkward moment into an engaging activity. Whether you're a teacher rotating students for book reports or a scrum master choosing the next lead for a demo, our spinner wheel provides the transparency needed for a smooth session.
                        </p>
                        <p>
                            Unlike manual randomizing, our wheel uses a high-quality RNG (Random Number Generator) for mathematically unbiased results. Every name on the list has a mathematically equal chance, making it the most trusted presentation randomizer available online.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Use Section */}
            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Moderators Love the Presentation Wheel</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-linear-to-br from-blue-50 to-blue-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-blue-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiMic />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Eliminates 'Why Me?' Conversations</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">When the wheel decides, the result is final and verifiably random. It removes personal bias from the moderator and makes participants more accepting of the order.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-green-50 to-green-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-green-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiRotateCw />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive & Visual</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">The spinning motion and sound effects create a shared moment of excitement. It's a great way to re-energize a room during long sessions or heavy meetings.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-purple-50 to-purple-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-purple-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiShare2 />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Remote-Meeting Ready</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Simply share your screen on Zoom, Teams, or Google Meet. Everyone watching sees the same spin in real-time, building trust with your remote audience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-orange-50 to-orange-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-orange-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiSettings />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Configuration</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Bulk add your whole class or team list in seconds. You can save your speaker lists for future meetings, making recurring standups even faster.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="bg-white py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Perfect for Every Presentation Scenario</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: "🎓", title: "Student Presentations", desc: "Teachers use it to randomly select students for book reports, show-and-tell, and class presentations." },
                            { icon: "💼", title: "Team Standups", desc: "Scrum masters love using it for daily standup order to keep things fresh and unbiased." },
                            { icon: "🎤", title: "Conference Talks", desc: "Event organizers use it to select speakers for Q&A slots or lightning talks." },
                            { icon: "📊", title: "Sales Pitches", desc: "Sales teams use it to pick who presents their pitch first in competitive scenarios." },
                            { icon: "🎪", title: "Workshop Activities", desc: "Trainers use it to select participants for demos and group activities." },
                            { icon: "📚", title: "Reading Groups", desc: "Book clubs use it to select who leads the next discussion or reads aloud." }
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
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Explore More Professional Randomizers</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link href="/classroom-activities" className="group bg-gradient-to-br from-green-50 to-green-100 md:p-5 p-4 rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">🎓 Classroom Activities</h3>
                            <p className="text-sm text-gray-600 mb-2">Perfect name picker for teachers and classroom random selection.</p>
                            <span className="text-sm font-semibold text-green-600 inline-flex items-center gap-1">Learn more <FiArrowRight className="text-xs" /></span>
                        </Link>
                        <Link href="/task-assignment" className="group bg-gradient-to-br from-blue-50 to-blue-100 md:p-5 p-4 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">📋 Task Assignment</h3>
                            <p className="text-sm text-gray-600 mb-2">Randomly assign tasks and responsibilities to team members.</p>
                            <span className="text-sm font-semibold text-blue-600 inline-flex items-center gap-1">Learn more <FiArrowRight className="text-xs" /></span>
                        </Link>
                        <Link href="/name-picker" className="group bg-gradient-to-br from-purple-50 to-purple-100 md:p-5 p-4 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">👤 Name Picker</h3>
                            <p className="text-sm text-gray-600 mb-2">The classic random name picker for any selection needs.</p>
                            <span className="text-sm font-semibold text-purple-600 inline-flex items-center gap-1">Learn more <FiArrowRight className="text-xs" /></span>
                        </Link>
                    </div>
                </div>
            </section>

            <CallToAction />
        </>
    );
}
