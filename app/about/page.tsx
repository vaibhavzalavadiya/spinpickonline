import { Metadata } from "next";
import Link from "next/link";
import {
    FiTarget, FiShield, FiHeart, FiUsers, FiZap, FiGlobe,
    FiArrowRight, FiCheck, FiSmartphone, FiLock, FiStar,
    FiTrendingUp, FiAward, FiClock, FiMonitor, FiEye
} from "react-icons/fi";
import {
    IoSchoolOutline, IoGiftOutline, IoGameControllerOutline,
    IoPeopleOutline, IoRocketOutline, IoSparklesOutline,
    IoShieldCheckmarkOutline, IoFlashOutline
} from "react-icons/io5";
import { CallToAction } from "@/components/CallToAction";
import SchemaScript from "@/components/SchemaScript";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: "About Us | SpinPickOnline - Free Random Picker Wheel & Spin Wheel Tool",
    description: "Learn about SpinPickOnline - the free, fair, and fun random picker wheel tool trusted by teachers, content creators, and event organizers worldwide. No signup, no limits, 100% free.",
    alternates: {
        canonical: "/about",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "About SpinPickOnline | Free Random Picker Wheel & Spin Wheel",
        description: "Learn about SpinPickOnline - the free, fair, and fun random picker wheel tool trusted by thousands worldwide.",
        type: "website",
        url: `${SITE_CONFIG.url}/about`,
    },
};

const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About SpinPickOnline",
    "description": "SpinPickOnline is a free online random picker wheel and spin wheel tool for fair and instant random selection.",
    "url": `${SITE_CONFIG.url}/about`,
    "mainEntity": {
        "@type": "Organization",
        "name": SITE_CONFIG.name,
        "url": SITE_CONFIG.url,
        "description": SITE_CONFIG.description,
        "foundingDate": "2024",
        "sameAs": [],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": `${SITE_CONFIG.url}/contact`
        }
    }
};

export default function AboutPage() {
    return (
        <div className="bg-gradient-to-b from-blue-50/50 via-white to-gray-50">
            <SchemaScript schema={aboutSchema} />

            {/* Hero Section */}
            <section className="py-10 text-center lg:py-16 bg-gradient-to-b from-blue-50 to-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                        <IoSparklesOutline className="text-lg" />
                        <span>Trusted by thousands worldwide</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">SpinPickOnline</span>
                    </h1>
                    <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                        The free, fair, and fun random picker wheel trusted by teachers, content creators, event organizers, and millions of users around the world.
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">100%</div>
                            <div className="text-xs sm:text-sm text-gray-500 mt-1">Free Forever</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                            <div className="text-2xl sm:text-3xl font-extrabold text-green-600">10+</div>
                            <div className="text-xs sm:text-sm text-gray-500 mt-1">Free Tools</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                            <div className="text-2xl sm:text-3xl font-extrabold text-purple-600">0</div>
                            <div className="text-xs sm:text-sm text-gray-500 mt-1">Signup Required</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                            <div className="text-2xl sm:text-3xl font-extrabold text-amber-500">∞</div>
                            <div className="text-xs sm:text-sm text-gray-500 mt-1">Unlimited Spins</div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Our Story Section */}
            <section className="py-10 lg:py-16">
                <div className="container px-4 mx-auto">
                    <div className="text-center md:mb-10 mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
                            <IoRocketOutline className="text-sm" />
                            <span>Our Story</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why We Built SpinPickOnline</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">The Problem</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                We noticed that most random picker wheel tools online were either cluttered with ads, required signups, had limited features, or charged premium prices for basic functionality.
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Teachers needed a simple name picker for classrooms. Content creators needed a fair giveaway spinner. Event organizers needed reliable raffle wheels. But finding a truly free, feature-rich, and privacy-respecting tool was nearly impossible.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 md:p-8 rounded-2xl border border-purple-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">The Solution</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                That's why we created SpinPickOnline — a completely free, beautifully designed random picker wheel that works on every device with no signup required.
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We built it with modern web technologies to ensure lightning-fast performance, cryptographic fairness, and complete privacy. Every wheel entry stays on your device — we never collect or store your data.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-8 lg:py-16 bg-white rounded-2xl md:rounded-3xl mx-2 md:mx-4 my-6 shadow-sm border border-gray-100">
                <div className="container px-4 mx-auto">
                    <div className="text-center md:mb-8 mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold mb-4">
                            <FiTarget className="text-sm" />
                            <span>Our Mission</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">Making Random Selection Simple, Fair & Free</h2>
                        <p className="text-gray-600 md:text-base text-sm max-w-3xl mx-auto leading-relaxed">
                            We built SpinPickOnline with one simple goal: <strong>to provide the best free random picker wheel on the internet</strong>. No signups, no limits, no hidden costs — just a beautiful, fair, and fun way to make random selections for teachers, content creators, and everyone.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-6 gap-4">
                        <div className="text-center md:p-6 p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 md:rounded-xl rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-200">
                                <FiTarget className="text-xl text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Fair & Transparent</h3>
                            <p className="text-sm text-gray-600">Cryptographically secure randomization ensures every spin is truly fair, unbiased, and verifiable.</p>
                        </div>

                        <div className="text-center md:p-6 p-4 bg-gradient-to-br from-purple-50 to-purple-100/50 md:rounded-xl rounded-lg border border-purple-200 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-200">
                                <FiHeart className="text-xl text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">100% Free Forever</h3>
                            <p className="text-sm text-gray-600">No premium tiers, no feature limits. Full access to all our random picker tools without paying a dime.</p>
                        </div>

                        <div className="text-center md:p-6 p-4 bg-gradient-to-br from-green-50 to-green-100/50 md:rounded-xl rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-green-200">
                                <FiUsers className="text-xl text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Built for Everyone</h3>
                            <p className="text-sm text-gray-600">Teachers, streamers, event organizers, or anyone who needs fair random selection — we've got you covered.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="py-10 lg:py-16">
                <div className="container px-4 mx-auto">
                    <div className="text-center md:mb-10 mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-4">
                            <FiStar className="text-sm" />
                            <span>What Makes Us Different</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">Why Choose SpinPickOnline?</h2>
                        <p className="text-gray-600 md:text-base text-sm max-w-2xl mx-auto">
                            Here&apos;s what sets us apart from other random picker wheel tools online
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { icon: <FiLock className="text-xl text-blue-600" />, title: "Privacy-First Approach", desc: "All data stays in your browser. We never collect, store, or transmit your wheel entries or personal information.", bg: "from-blue-50 to-indigo-50", border: "border-blue-100" },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, title: "Lightning Fast", desc: "Built with modern Next.js technology for instant loading. No unnecessary scripts, no bloated frameworks.", bg: "from-amber-50 to-orange-50", border: "border-amber-100" },
                            { icon: <FiSmartphone className="text-xl text-green-600" />, title: "Works Everywhere", desc: "Fully responsive design optimized for mobile, tablet, and desktop. Touch-friendly with native-like interactions.", bg: "from-green-50 to-emerald-50", border: "border-green-100" },
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-purple-600" />, title: "Cryptographic Fairness", desc: "Uses the Web Crypto API for true randomization. Every spin result is mathematically verifiable and unbiased.", bg: "from-purple-50 to-violet-50", border: "border-purple-100" },
                            { icon: <FiEye className="text-xl text-pink-600" />, title: "Beautiful Design", desc: "Premium-quality animations, smooth transitions, and vibrant colors that make every spin exciting and engaging.", bg: "from-pink-50 to-rose-50", border: "border-pink-100" },
                            { icon: <FiMonitor className="text-xl text-teal-600" />, title: "No App Required", desc: "Works directly in your web browser. No downloads, no installations, no updates. Just open and spin.", bg: "from-teal-50 to-cyan-50", border: "border-teal-100" },
                        ].map((item, i) => (
                            <div key={i} className={`bg-gradient-to-br ${item.bg} p-4 md:p-6 rounded-xl border ${item.border} hover:shadow-md transition-all`}>
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Offer (Tools) */}
            <section className="py-10 lg:py-16 bg-white rounded-2xl md:rounded-3xl mx-2 md:mx-4 my-6 shadow-sm border border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center md:mb-8 mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-4">
                                <FiZap className="text-sm" />
                                <span>Our Tools</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">Free Random Selection Tools</h2>
                            <p className="text-gray-600 md:text-base text-sm max-w-2xl mx-auto">
                                SpinPickOnline provides a complete suite of free tools designed for every random selection need
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-5 gap-3">
                            {[
                                { href: "/random-picker-wheel", icon: <FiZap className="text-lg" />, title: "Random Picker Wheel", desc: "The core spin wheel tool for random selection from any list of options.", color: "blue" },
                                { href: "/name-picker", icon: <FiUsers className="text-lg" />, title: "Name Picker Wheel", desc: "Perfect wheel of names for teachers, raffles, and fair name selection.", color: "purple" },
                                { href: "/yes-no-wheel", icon: <FiTarget className="text-lg" />, title: "Yes/No Wheel", desc: "Quick decision maker spinner with fair 50/50 probability.", color: "green" },
                                { href: "/team-picker", icon: <IoPeopleOutline className="text-lg" />, title: "Team Picker", desc: "Create random, balanced teams fairly for sports, work, or school.", color: "amber" },
                                { href: "/giveaway-winner", icon: <IoGiftOutline className="text-lg" />, title: "Giveaway Spinner", desc: "Transparent giveaway winner picker for Instagram, YouTube & more.", color: "pink" },
                                { href: "/decision-wheel", icon: <FiTrendingUp className="text-lg" />, title: "Decision Wheel", desc: "Can't decide? Let the decision wheel make the choice for you!", color: "indigo" },
                                { href: "/raffle-wheel", icon: <FiAward className="text-lg" />, title: "Raffle Wheel", desc: "Fair raffle draws with exciting spin animations for events.", color: "teal" },
                                { href: "/prize-wheel", icon: <FiStar className="text-lg" />, title: "Prize Wheel", desc: "Spin to win prize spinner for contests and promotional events.", color: "orange" },
                            ].map((tool) => (
                                <Link
                                    key={tool.href}
                                    href={tool.href}
                                    className="group bg-gray-50 hover:bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                                >
                                    <div className={`w-10 h-10 bg-${tool.color}-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-${tool.color}-200 transition-colors`}>
                                        <span className={`text-${tool.color}-600 group-hover:text-${tool.color}-700`}>{tool.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-blue-600 transition-colors text-sm">{tool.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{tool.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Uses SpinPickOnline */}
            <section className="py-10 lg:py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-4">
                            <FiUsers className="text-sm" />
                            <span>Our Users</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">Who Uses SpinPickOnline?</h2>
                        <p className="text-gray-600 md:text-base text-sm max-w-2xl mx-auto">
                            Thousands of people use our random picker wheel and spin wheel tools every day
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                        <div className="flex gap-3 md:gap-4 md:p-6 p-4 bg-white md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                                <IoSchoolOutline className="text-xl text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Teachers & Educators</h3>
                                <p className="text-sm text-gray-600 mb-2">Use our name picker wheel and random student selector for fair classroom participation, group assignments, and interactive activities that keep students engaged.</p>
                                <Link href="/classroom-activities" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                    Classroom Tools <FiArrowRight className="text-xs" />
                                </Link>
                            </div>
                        </div>

                        <div className="flex gap-3 md:gap-4 md:p-6 p-4 bg-white md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-200">
                                <IoGiftOutline className="text-xl text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Content Creators & Influencers</h3>
                                <p className="text-sm text-gray-600 mb-2">Run transparent, verifiable giveaways on Instagram, YouTube, TikTok, and Twitch. Build trust with followers using our fair spin wheel.</p>
                                <Link href="/giveaway-winner" className="text-sm font-semibold text-pink-600 hover:text-pink-700 inline-flex items-center gap-1">
                                    Giveaway Tools <FiArrowRight className="text-xs" />
                                </Link>
                            </div>
                        </div>

                        <div className="flex gap-3 md:gap-4 md:p-6 p-4 bg-white md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
                                <IoGameControllerOutline className="text-xl text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Event Organizers</h3>
                                <p className="text-sm text-gray-600 mb-2">Perfect for raffles, lucky draws, prize wheels, and fair winner selection at live events, conferences, and corporate gatherings.</p>
                                <Link href="/raffle-wheel" className="text-sm font-semibold text-purple-600 hover:text-purple-700 inline-flex items-center gap-1">
                                    Raffle Wheel <FiArrowRight className="text-xs" />
                                </Link>
                            </div>
                        </div>

                        <div className="flex gap-3 md:gap-4 md:p-6 p-4 bg-white md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-200">
                                <FiUsers className="text-xl text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Teams & Workplaces</h3>
                                <p className="text-sm text-gray-600 mb-2">Form fair teams, assign tasks randomly, make group decisions, or decide who picks lunch — all with transparent, unbiased random selection.</p>
                                <Link href="/team-picker" className="text-sm font-semibold text-green-600 hover:text-green-700 inline-flex items-center gap-1">
                                    Team Picker <FiArrowRight className="text-xs" />
                                </Link>
                            </div>
                        </div>

                        <div className="flex gap-3 md:gap-4 md:p-6 p-4 bg-white md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <IoPeopleOutline className="text-xl text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Families & Friend Groups</h3>
                                <p className="text-sm text-gray-600 mb-2">Settle debates, assign household chores, pick movie night films, or decide where to eat — all with a fun, fair spin of the wheel.</p>
                                <Link href="/decision-wheel" className="text-sm font-semibold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1">
                                    Decision Wheel <FiArrowRight className="text-xs" />
                                </Link>
                            </div>
                        </div>

                        <div className="flex gap-3 md:gap-4 md:p-6 p-4 bg-white md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-200">
                                <FiGlobe className="text-xl text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Anyone Who Needs Fairness</h3>
                                <p className="text-sm text-gray-600 mb-2">Whether you&apos;re picking a random name, making a tough decision, or running a contest — SpinPickOnline ensures everyone gets an equal chance.</p>
                                <Link href="/random-picker-wheel" className="text-sm font-semibold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1">
                                    Try Now <FiArrowRight className="text-xs" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Values */}
            <section className="py-10 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl md:rounded-3xl mx-2 md:mx-4 my-6">
                <div className="container px-4 mx-auto">
                    <div className="text-center md:mb-8 mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-100 text-rose-700 rounded-full text-xs font-semibold mb-4">
                            <FiHeart className="text-sm" />
                            <span>Our Values</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">What We Stand For</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-3 md:mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                                    <FiShield className="text-lg text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900">Privacy First</h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">Your data stays on your device. We don&apos;t collect personal information, track wheel entries, or sell user data. What you spin stays with you.</p>
                            <ul className="mt-3 space-y-1.5">
                                <li className="flex items-center gap-2 text-xs text-gray-500"><FiCheck className="text-green-500 flex-shrink-0" /> No data collection</li>
                                <li className="flex items-center gap-2 text-xs text-gray-500"><FiCheck className="text-green-500 flex-shrink-0" /> No tracking cookies</li>
                                <li className="flex items-center gap-2 text-xs text-gray-500"><FiCheck className="text-green-500 flex-shrink-0" /> Browser-only processing</li>
                            </ul>
                        </div>

                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-3 md:mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                                    <FiZap className="text-lg text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900">Speed & Reliability</h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">No downloads, no installations. Open the page and start spinning instantly on any device, any browser, anywhere.</p>
                            <ul className="mt-3 space-y-1.5">
                                <li className="flex items-center gap-2 text-xs text-gray-500"><FiCheck className="text-green-500 flex-shrink-0" /> Instant page load</li>
                                <li className="flex items-center gap-2 text-xs text-gray-500"><FiCheck className="text-green-500 flex-shrink-0" /> Smooth 60fps animations</li>
                                <li className="flex items-center gap-2 text-xs text-gray-500"><FiCheck className="text-green-500 flex-shrink-0" /> Works offline after first visit</li>
                            </ul>
                        </div>

                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-3 md:mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-sm">
                                    <FiGlobe className="text-lg text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900">Accessible to All</h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">Designed to work everywhere — mobile, tablet, desktop. No signup required. Available to anyone with a web browser.</p>
                            <ul className="mt-3 space-y-1.5">
                                <li className="flex items-center gap-2 text-xs text-gray-500"><FiCheck className="text-green-500 flex-shrink-0" /> All devices supported</li>
                                <li className="flex items-center gap-2 text-xs text-gray-500"><FiCheck className="text-green-500 flex-shrink-0" /> No signup needed</li>
                                <li className="flex items-center gap-2 text-xs text-gray-500"><FiCheck className="text-green-500 flex-shrink-0" /> Keyboard accessible</li>
                            </ul>
                        </div>

                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-3 md:mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center shadow-sm">
                                    <FiHeart className="text-lg text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900">Community Driven</h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">We listen to user feedback and continuously improve. Every feature we build is driven by real user needs and suggestions.</p>
                            <ul className="mt-3 space-y-1.5">
                                <li className="flex items-center gap-2 text-xs text-gray-500"><FiCheck className="text-green-500 flex-shrink-0" /> Regular updates</li>
                                <li className="flex items-center gap-2 text-xs text-gray-500"><FiCheck className="text-green-500 flex-shrink-0" /> User-requested features</li>
                                <li className="flex items-center gap-2 text-xs text-gray-500"><FiCheck className="text-green-500 flex-shrink-0" /> Open to feedback</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-10 lg:py-16">
                <div className="container px-4 mx-auto">
                    <div className="text-center md:mb-10 mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold mb-4">
                            <FiClock className="text-sm" />
                            <span>Simple & Quick</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">How SpinPickOnline Works</h2>
                        <p className="text-gray-600 md:text-base text-sm max-w-2xl mx-auto">
                            Start spinning in seconds — it&apos;s as easy as 1, 2, 3
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { step: "1", title: "Add Your Entries", desc: "Type names, options, or choices into the wheel. Add as many entries as you need — there's no limit.", color: "blue" },
                            { step: "2", title: "Customize & Spin", desc: "Personalize colors, adjust settings, then hit the spin button or tap the wheel to start spinning.", color: "purple" },
                            { step: "3", title: "Get Fair Results", desc: "Watch the exciting animation and get your truly random result. Share it or spin again — it's that simple!", color: "green" },
                        ].map((item) => (
                            <div key={item.step} className="text-center relative">
                                <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-${item.color}-200`}>
                                    <span className="text-2xl font-extrabold text-white">{item.step}</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-10 lg:py-16">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center md:mb-8 mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold mb-4">
                                <FiHeart className="text-sm" />
                                <span>Common Questions</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">About SpinPickOnline FAQ</h2>
                            <p className="text-gray-600 md:text-base text-sm max-w-3xl mx-auto">
                                Common questions about our free random picker wheel, spin wheel, and wheel of names tools
                            </p>
                        </div>

                        <div className="space-y-3">
                            {[
                                { q: "What is SpinPickOnline and what does it offer?", a: "SpinPickOnline is a free online random picker wheel tool (also known as wheel of names or spin wheel). We provide fair, instant random selection tools including name pickers, decision wheels, yes/no wheels, team pickers, and giveaway spinners for teachers, content creators, event organizers, and anyone who needs unbiased random picks.", color: "blue" },
                                { q: "Is SpinPickOnline completely free to use?", a: "Yes! SpinPickOnline is 100% free forever with no hidden fees, premium tiers, or feature limits. You get full access to our random picker wheel, name picker, decision wheel, yes/no wheel, and all customization options without paying anything or signing up.", color: "purple" },
                                { q: "How does the random picker wheel ensure fair results?", a: "We use cryptographically secure random number generation (RNG) via the Web Crypto API. This ensures every spin the wheel result is truly random and unbiased. Each entry on the wheel of names has exactly equal probability of being selected — no patterns, no bias.", color: "green" },
                                { q: "Who uses the SpinPickOnline wheel spinner?", a: "Teachers use our name picker for classroom activities. Content creators run transparent Instagram and YouTube giveaways. Event organizers use our spin wheel for raffles and prize draws. Teams use the random picker for fair task assignment. Families use the decision wheel for everyday choices. Anyone needing random selection!", color: "pink" },
                                { q: "Is my data private when using the spin wheel?", a: "Absolutely! All wheel entries and random calculations happen locally in your browser. Your data is never sent to our servers. We don't collect, store, or track your wheel of names entries, making SpinPickOnline one of the most privacy-focused random picker tools available.", color: "orange" },
                                { q: "Can I use SpinPickOnline on my phone or tablet?", a: "Yes! SpinPickOnline is fully optimized for mobile devices with a responsive design, touch-friendly interface, and fast loading times. Our spin wheel works perfectly on smartphones, tablets, laptops, and desktops — no app download required.", color: "teal" },
                                { q: "How many entries can I add to the wheel?", a: "You can add as many entries as you need — there's no hard limit. Whether you have 2 options or 200 names, the wheel automatically adjusts. For the best visual experience, we recommend keeping it under 100 entries.", color: "indigo" },
                                { q: "Can I customize the wheel appearance?", a: "Yes! You can customize colors, labels, and wheel appearance. Choose vibrant colors for each segment, add custom text, personalize the wheel to match your brand or event theme. All customization features are completely free.", color: "amber" },
                            ].map((faq, i) => (
                                <details key={i} className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                    <summary className="flex items-center gap-3 cursor-pointer list-none">
                                        <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-${faq.color}-500 text-white text-xs font-bold flex items-center justify-center`}>Q</span>
                                        <span className="text-sm md:text-base font-bold text-gray-900 flex-1">{faq.q}</span>
                                        <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
}
