import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { IoTicketOutline, IoShieldCheckmarkOutline, IoSparklesOutline, IoPeopleOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Raffle Wheel | Free Online Raffle Spinner | SpinPickOnline",
    description: "Free raffle wheel spinner for fair ticket drawings. Perfect for fundraisers, charity events, and raffles. No signup, cryptographically secure randomization.",
    alternates: {
        canonical: "/raffle-wheel",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Raffle Wheel | Free Online Raffle Spinner | SpinPickOnline",
        description: "Free raffle wheel spinner for fair ticket drawings. Perfect for fundraisers and charity events.",
        type: "website",
        url: "https://spinpickonline.com/raffle-wheel",
    },
};

// Default raffle entries
const RAFFLE_ENTRIES = [
    { id: "1", label: "Ticket #001", color: "#3b82f6" },
    { id: "2", label: "Ticket #002", color: "#ef4444" },
    { id: "3", label: "Ticket #003", color: "#22c55e" },
    { id: "4", label: "Ticket #004", color: "#f59e0b" },
    { id: "5", label: "Ticket #005", color: "#8b5cf6" },
];

export default function RaffleWheelPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How do I enter raffle tickets into the wheel?",
            answer: "Simply enter your raffle ticket numbers or participant names into the wheel. You can add unlimited entries - perfect for large fundraising raffles or small community drawings!"
        },
        {
            question: "Is the raffle wheel truly random?",
            answer: "Yes! Our raffle wheel uses cryptographically secure random number generation (RNG) to ensure every ticket has an equal chance. The transparent spinning process builds trust with your raffle participants."
        },
        {
            question: "Can I use this for charity fundraisers?",
            answer: "Absolutely! Our raffle wheel is perfect for charity events, school fundraisers, and community raffles. The visual spinning wheel creates excitement while ensuring transparent, verifiable winner selection. Completely free - no signup required!"
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
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-pink-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Raffle Wheel – Free Online Raffle Spinner
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Run fair and exciting raffle drawings with our free raffle wheel. Perfect for fundraisers, charity events, school raffles, and community gatherings. Completely transparent and verifiable.
                        </p>
                    </div>
                    <HomeWheel defaultEntries={RAFFLE_ENTRIES} storageKey="raffleWheelState" />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Choose Our Raffle Wheel?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The trusted choice for organizations running fair raffle drawings
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-pink-200 hover:shadow-lg transition-shadow">
                            <div className="bg-pink-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoTicketOutline className="text-xl text-pink-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Ticket Numbers</h3>
                            <p className="md:text-base text-sm text-gray-600">Enter raffle ticket numbers directly. Perfect for traditional ticket-based raffles.</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShieldCheckmarkOutline className="text-xl text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Transparent Process</h3>
                            <p className="md:text-base text-sm text-gray-600">Everyone can watch the wheel spin. Build trust with transparent winner selection.</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Multi-Prize Support</h3>
                            <p className="md:text-base text-sm text-gray-600">Remove winners and spin again for multiple prizes. Perfect for large raffles.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoPeopleOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Any Group Size</h3>
                            <p className="md:text-base text-sm text-gray-600">Works for small community raffles or large fundraising events with hundreds of tickets.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Use Raffle Wheel */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How to Run a Raffle Drawing
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {[
                                { step: "1", title: "Enter Ticket Numbers", desc: "Add all sold raffle ticket numbers to the wheel (e.g., 001, 002, 003...)" },
                                { step: "2", title: "Or Add Names", desc: "Alternatively, enter participant names directly if you're not using tickets" },
                                { step: "3", title: "Display to Audience", desc: "Show the wheel on a screen so everyone can watch the drawing" },
                                { step: "4", title: "Spin & Announce", desc: "Click spin, wait for the result, and announce your raffle winner!" },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-4 items-start bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center font-bold">
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
                            Perfect Raffle Occasions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Charity Fundraisers
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Run transparent raffle drawings at charity events. Donors trust the process when they see the wheel spin.</p>
                            <Link href="/lucky-draw-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Try Lucky Draw <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> School Events
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Perfect for PTA meetings, school fairs, and student organization events. Easy to use on any device.</p>
                            <Link href="/classroom-activities" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Classroom Tools <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Community Events
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Host fair raffles at community gatherings, festivals, and local events. Works on phones and tablets.</p>
                            <Link href="/prize-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Prize Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Sports Clubs
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Run 50/50 raffles or prize drawings at sports events. Engage fans with exciting wheel spins.</p>
                            <Link href="/team-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Team Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            More Wheel Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/lucky-draw-wheel", label: "Lucky Draw" },
                            { href: "/prize-wheel", label: "Prize Wheel" },
                            { href: "/spin-wheel-for-giveaway", label: "Giveaway Wheel" },
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/picker-wheel", label: "Picker Wheel" },
                            { href: "/decision-wheel", label: "Decision Wheel" },
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
