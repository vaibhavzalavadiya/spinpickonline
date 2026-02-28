import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
    title: "10 Fun Team Building Activities Using a Spin Wheel | SpinPickOnline",
    description: "Creative team building ideas using a spin wheel to add randomness and excitement. Perfect for office parties, team retreats, and remote teams.",
    alternates: { canonical: "/blog/best-team-building-activities" },
    robots: { index: true, follow: true },
    openGraph: {
        title: "10 Fun Team Building Activities Using a Spin Wheel",
        description: "Team building activities made fun with a spin wheel.",
        type: "article",
        url: "https://spinpickonline.com/blog/best-team-building-activities",
    },
};

export default function TeamBuildingPost() {
    return (
        <div className="min-h-screen bg-white">
            <article className="container mx-auto px-4 py-8 lg:py-12">
                <div className="max-w-3xl mx-auto">
                    <Link href="/blog" className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 mb-6">
                        <FiArrowLeft className="text-xs" /> Back to Blog
                    </Link>
                    <div className="mb-8">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white">Team Building</span>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            10 Fun Team Building Activities Using a Spin Wheel
                        </h1>
                        <p className="text-gray-500 text-sm">Published February 10, 2026 · 5 min read</p>
                    </div>

                    <div className="prose prose-gray max-w-none space-y-6">
                        <p className="md:text-lg text-base text-gray-700 leading-relaxed">
                            Team building doesn&apos;t have to be forced or awkward. Adding a <Link href="/wheel-spinner" className="text-blue-600 hover:text-blue-700 font-semibold">spin wheel</Link> to your activities introduces an element of randomness that breaks down barriers and makes everything more fun.
                        </p>

                        <div className="space-y-6 mt-8">
                            {[
                                {
                                    num: "1", title: "Random Buddy Pairs", emoji: "👥",
                                    desc: "Add all team members to the wheel. Spin twice to create random pairs for a buddy lunch, coffee chat, or collaboration session. This is especially powerful for remote teams who need cross-functional connections.",
                                    tip: "Remove selected names after each spin to avoid repeats."
                                },
                                {
                                    num: "2", title: "Two Truths and a Lie Challenge", emoji: "🤥",
                                    desc: "Spin to select who goes next. The selected person shares two truths and one lie about themselves. The rest of the team guesses which is the lie. Adds structure and excitement to this classic icebreaker.",
                                    tip: "Works great for both in-person and virtual teams."
                                },
                                {
                                    num: "3", title: "Skill Share Roulette", emoji: "🎓",
                                    desc: "Add topics each team member is knowledgeable about (coding, cooking, photography, fitness). Spin to select a topic, then spin again for who presents a 5-minute mini-lesson on it.",
                                    tip: "Perfect for learning & development budgets – it's free!"
                                },
                                {
                                    num: "4", title: "Random Acts of Kindness", emoji: "💝",
                                    desc: "Each team member's name goes on the wheel. Spin to assign secret kindness buddies for the week. Each person does something nice for their buddy – a compliment, helping with a task, bringing coffee.",
                                    tip: "Reveal buddies at the end of the week during a team meeting."
                                },
                                {
                                    num: "5", title: "Mystery Lunch Challenge", emoji: "🍕",
                                    desc: "Add different restaurants or cuisines to the wheel. Spin to decide where the team eats together. No debate, no indecision – the wheel has spoken! Great for breaking lunch routine.",
                                    tip: "Try adding adventurous options the team wouldn't normally pick."
                                },
                                {
                                    num: "6", title: "Trivia Team Tournament", emoji: "🧠",
                                    desc: "Use the wheel to form random trivia teams and to select categories. Spin for which team answers next. The randomness prevents strong players from always teaming up.",
                                    tip: "Use a separate category wheel for subject selection."
                                },
                                {
                                    num: "7", title: "Compliment Circle", emoji: "⭐",
                                    desc: "Spin the wheel to select a team member. Everyone else shares one genuine compliment about that person's work, character, or contribution. Surprisingly powerful for morale and belonging.",
                                    tip: "Best done at the end of a successful project or quarter."
                                },
                                {
                                    num: "8", title: "Meeting Role Rotation", emoji: "📋",
                                    desc: "Add meeting roles to the wheel: facilitator, note-taker, timekeeper, devil's advocate. Spin at the start of each meeting to assign roles. This develops leadership skills across the team.",
                                    tip: "Using the wheel removes politics from role assignment."
                                },
                                {
                                    num: "9", title: "Show & Tell Friday", emoji: "🎨",
                                    desc: "Spin to select who presents at the weekly show & tell. The chosen person shares something they're working on, learning, or excited about – work-related or personal.",
                                    tip: "Keep presentations to 5 minutes max to maintain energy."
                                },
                                {
                                    num: "10", title: "Wheel of Dares", emoji: "😂",
                                    desc: "Add fun, work-appropriate dares to the wheel: sing a song, do a silly dance, tell your worst joke, share your phone wallpaper. Spin at the end of meetings for light-hearted fun.",
                                    tip: "Always keep dares optional – never force uncomfortable activities."
                                },
                            ].map((activity) => (
                                <div key={activity.num} className="bg-gray-50 p-5 rounded-xl">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-2xl">{activity.emoji}</span>
                                        <h2 className="text-lg md:text-xl font-bold text-gray-900">{activity.num}. {activity.title}</h2>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed mb-2">{activity.desc}</p>
                                    <p className="text-sm text-blue-700 bg-blue-50 p-2 rounded-lg"><strong>💡 Tip:</strong> {activity.tip}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Why Randomness Makes Team Building Better</h2>
                        <p className="text-gray-700 leading-relaxed">
                            When activities are structured predictably, people default to their comfort zones – sitting with friends, pairing with familiar colleagues, avoiding activities they&apos;re unsure about. A <Link href="/random-choice-picker" className="text-blue-600 hover:text-blue-700 font-semibold">random choice picker</Link> breaks these patterns and creates unexpected, memorable interactions.
                        </p>
                    </div>

                    <div className="mt-12 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                        <h3 className="font-bold text-gray-900 mb-4">Team Building Tools</h3>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/wheel-spinner" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:text-green-600 border border-gray-200 hover:border-green-300 transition-all inline-flex items-center gap-1">
                                Wheel Spinner <FiArrowRight className="text-xs" />
                            </Link>
                            <Link href="/random-choice-picker" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:text-green-600 border border-gray-200 hover:border-green-300 transition-all inline-flex items-center gap-1">
                                Choice Picker <FiArrowRight className="text-xs" />
                            </Link>
                            <Link href="/name-picker" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:text-green-600 border border-gray-200 hover:border-green-300 transition-all inline-flex items-center gap-1">
                                Name Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
            <CallToAction />
        </div>
    );
}
