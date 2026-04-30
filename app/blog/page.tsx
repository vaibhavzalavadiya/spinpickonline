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
        slug: "spin-wheel-for-giveaways",
        title: "How to Use a Spin Wheel for Giveaways and Contests",
        description: "Run fair, exciting giveaways on Instagram, YouTube, TikTok, and Twitch using a spin wheel. Covers setup, entry verification, live streaming, and winner announcement best practices.",
        date: "2026-03-01",
        category: "Giveaways",
        color: "from-purple-500 to-pink-500",
    },
    {
        slug: "random-team-generator",
        title: "How to Create Random Teams Fairly: A Complete Guide",
        description: "Build unbiased teams for sports, school projects, work events, and games. Covers psychology of team formation bias, practical methods, and when to balance vs. randomize.",
        date: "2026-03-05",
        category: "Team Building",
        color: "from-teal-500 to-green-500",
    },
    {
        slug: "wheel-of-fortune-classroom",
        title: "Wheel of Fortune Games for the Classroom: 15 Ideas",
        description: "15 creative spin-wheel games for every subject and grade level. From vocabulary drills to Friday fun, these activities boost engagement and make learning memorable.",
        date: "2026-03-08",
        category: "Education",
        color: "from-orange-500 to-yellow-500",
    },
    {
        slug: "picking-names-for-prizes",
        title: "The Right Way to Pick Names for Prizes (Without Arguments)",
        description: "Best practices for fair, dispute-proof prize selection. Covers verification steps, live selection methods, documentation, and how to handle alternate winner situations.",
        date: "2026-03-12",
        category: "Raffles",
        color: "from-yellow-500 to-orange-500",
    },
    {
        slug: "virtual-team-building-ideas",
        title: "25 Virtual Team Building Ideas for Remote Teams",
        description: "25 activities organized by category — ice breakers, games, creative projects, wellness, and professional development — to keep remote teams connected and engaged.",
        date: "2026-03-15",
        category: "Team Building",
        color: "from-indigo-500 to-blue-500",
    },
    {
        slug: "overcoming-choice-paralysis",
        title: "Choice Paralysis: Why We Can't Decide and How to Fix It",
        description: "The psychology of analysis paralysis, Barry Schwartz's paradox of choice, and 7 science-backed strategies to make better decisions faster — including when to use a random tool.",
        date: "2026-03-18",
        category: "Productivity",
        color: "from-violet-500 to-purple-500",
    },
    {
        slug: "office-party-game-ideas",
        title: "15 Office Party Game Ideas Using a Spin Wheel",
        description: "Make your next office party unforgettable with spin wheel games for Secret Santa, trivia teams, karaoke, photo challenges, and employee appreciation.",
        date: "2026-03-22",
        category: "Team Building",
        color: "from-rose-500 to-pink-500",
    },
    {
        slug: "chore-wheel-for-families",
        title: "How to Set Up a Chore Wheel for Your Family (That Actually Works)",
        description: "End chore arguments with a fair rotating system. Covers age-appropriate tasks for ages 2–16, wheel setup methods, enforcement strategies, and how to keep kids engaged for months.",
        date: "2026-03-25",
        category: "Families",
        color: "from-lime-500 to-green-500",
    },
    {
        slug: "spin-wheel-for-teachers",
        title: "The Ultimate Spin Wheel Guide for Teachers in 2026",
        description: "Everything teachers need: setup guide, 20 classroom use cases, grade-level adaptations from elementary to university, and strategies for managing common challenges.",
        date: "2026-04-01",
        category: "Education",
        color: "from-sky-500 to-blue-500",
    },
    {
        slug: "random-number-generator-uses",
        title: "10 Creative Ways to Use a Random Number Generator",
        description: "From statistical sampling to game design, workout randomization to creative writing prompts — 10 practical applications of RNG with real-world examples.",
        date: "2026-04-05",
        category: "Technology",
        color: "from-cyan-500 to-teal-500",
    },
    {
        slug: "how-to-run-instagram-giveaway",
        title: "How to Run a Fair Instagram Giveaway in 2026",
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
