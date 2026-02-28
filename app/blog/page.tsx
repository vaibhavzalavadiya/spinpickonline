import { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
    title: "Blog | Spin Wheel Tips, Guides & Ideas | SpinPickOnline",
    description: "Tips, guides, and creative ideas for using spin wheels. Learn how to run giveaways, pick names fairly, build teams, and make better decisions.",
    alternates: {
        canonical: "/blog",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Blog | Spin Wheel Tips, Guides & Ideas | SpinPickOnline",
        description: "Tips, guides, and ideas for spin wheels, giveaways, team building, and decision making.",
        type: "website",
        url: "https://spinpickonline.com/blog",
    },
};

const BLOG_POSTS = [
    {
        slug: "how-to-run-instagram-giveaway",
        title: "How to Run a Fair Instagram Giveaway in 2025",
        description: "Step-by-step guide to running transparent, engaging Instagram giveaways using a spin wheel. Tips for collecting entries, going live, and announcing winners.",
        date: "2026-02-15",
        category: "Giveaways",
        color: "from-pink-500 to-rose-500",
    },
    {
        slug: "random-name-picker-for-teachers",
        title: "How Teachers Use Random Name Pickers in the Classroom",
        description: "Discover how random name pickers boost classroom engagement, reduce bias, and keep students attentive. Practical tips for K-12 and higher education.",
        date: "2026-02-12",
        category: "Education",
        color: "from-blue-500 to-indigo-500",
    },
    {
        slug: "best-team-building-activities",
        title: "10 Fun Team Building Activities Using a Spin Wheel",
        description: "Creative team building ideas that use a spin wheel to add randomness and excitement. Perfect for office parties, retreats, and remote teams.",
        date: "2026-02-10",
        category: "Team Building",
        color: "from-green-500 to-emerald-500",
    },
    {
        slug: "fair-raffle-drawing-guide",
        title: "How to Run a Fair Raffle Drawing Online",
        description: "Complete guide to running fair, transparent raffle drawings online. Covers entry collection, winner selection, legal considerations, and best practices.",
        date: "2026-02-08",
        category: "Raffles",
        color: "from-purple-500 to-violet-500",
    },
    {
        slug: "decision-making-tips",
        title: "When You Can't Decide: A Guide to Better Decision Making",
        description: "Science-backed tips for overcoming decision fatigue, analysis paralysis, and the paradox of choice. Learn when to use tools like decision wheels.",
        date: "2026-02-05",
        category: "Productivity",
        color: "from-orange-500 to-amber-500",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            {/* Hero */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-indigo-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            SpinPickOnline Blog
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Tips, guides, and creative ideas for using spin wheels in giveaways, classrooms, team building, and everyday decisions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 max-w-6xl mx-auto">
                        {BLOG_POSTS.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group bg-white md:rounded-xl rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className={`h-2 bg-gradient-to-r ${post.color}`} />
                                <div className="md:p-6 p-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${post.color} text-white`}>
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-400">
                                            <FiCalendar className="text-xs" />
                                            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                        </span>
                                    </div>
                                    <h2 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
                                        {post.description}
                                    </p>
                                    <span className="text-sm font-semibold text-blue-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read More <FiArrowRight className="text-xs" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
}
