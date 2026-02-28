import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
    title: "How Teachers Use Random Name Pickers in the Classroom | SpinPickOnline",
    description: "Discover how random name pickers boost classroom engagement, reduce bias, and keep students attentive. Practical tips for K-12 and higher education teachers.",
    alternates: { canonical: "/blog/random-name-picker-for-teachers" },
    robots: { index: true, follow: true },
    openGraph: {
        title: "How Teachers Use Random Name Pickers in the Classroom",
        description: "Random name pickers for better classroom engagement and fairness.",
        type: "article",
        url: "https://spinpickonline.com/blog/random-name-picker-for-teachers",
    },
};

export default function TeacherNamePickerPost() {
    return (
        <div className="min-h-screen bg-white">
            <article className="container mx-auto px-4 py-8 lg:py-12">
                <div className="max-w-3xl mx-auto">
                    <Link href="/blog" className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 mb-6">
                        <FiArrowLeft className="text-xs" /> Back to Blog
                    </Link>
                    <div className="mb-8">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white">Education</span>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            How Teachers Use Random Name Pickers in the Classroom
                        </h1>
                        <p className="text-gray-500 text-sm">Published February 12, 2026 · 5 min read</p>
                    </div>

                    <div className="prose prose-gray max-w-none space-y-6">
                        <p className="md:text-lg text-base text-gray-700 leading-relaxed">
                            Every teacher knows the challenge: you ask a question and the same three hands shoot up. The rest of the class mentally checks out. A random <Link href="/name-picker" className="text-blue-600 hover:text-blue-700 font-semibold">name picker</Link> wheel changes this dynamic completely.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">The Problem with Hand-Raising</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Traditional hand-raising creates an uneven classroom dynamic. Confident, extroverted students dominate discussions while quieter students fade into the background. Research from the Harvard Graduate School of Education shows that <strong>in a typical class, only 20% of students account for 80% of all responses</strong>.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This isn&apos;t just an engagement problem – it&apos;s an assessment problem. If you never hear from most students, you can&apos;t gauge their understanding.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">How Random Calling Changes the Classroom</h2>
                        <p className="text-gray-700 leading-relaxed">
                            When students know they might be called on at any time, the entire dynamic shifts:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                <h3 className="font-bold text-blue-800 mb-2">📈 Increased Preparation</h3>
                                <p className="text-sm text-gray-700">Students come to class more prepared when they can&apos;t predict who&apos;ll be called. Research shows a 40% increase in homework completion rates when random calling is used.</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                                <h3 className="font-bold text-green-800 mb-2">🤝 Reduced Anxiety</h3>
                                <p className="text-sm text-gray-700">Paradoxically, random selection reduces anxiety because students know the selection is fair. There&apos;s no feeling of being &quot;picked on&quot; – it&apos;s just the wheel.</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                                <h3 className="font-bold text-purple-800 mb-2">⚖️ Equal Participation</h3>
                                <p className="text-sm text-gray-700">Every student gets roughly equal airtime. Shy students get comfortable speaking up. Dominant students learn to listen and let others contribute.</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                <h3 className="font-bold text-amber-800 mb-2">🎯 Better Assessment</h3>
                                <p className="text-sm text-gray-700">You hear from every student, giving you a true picture of class understanding. This helps you identify who needs extra help early.</p>
                            </div>
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">7 Ways to Use a Name Picker in Class</h2>
                        <div className="space-y-3">
                            {[
                                { num: "1", title: "Question & Answer", desc: "Spin the wheel to select who answers next. Students stay engaged because anyone could be called." },
                                { num: "2", title: "Reading Aloud", desc: "Use the wheel to determine who reads the next paragraph. Spin between sections to keep attention." },
                                { num: "3", title: "Group Formation", desc: "Spin multiple times to form random groups for projects. This mixes social circles and builds new connections." },
                                { num: "4", title: "Presentation Order", desc: "Let the wheel decide who presents first. Students can't argue with random selection." },
                                { num: "5", title: "Daily Helper", desc: "Spin for classroom jobs like line leader, materials distributor, or board eraser." },
                                { num: "6", title: "Review Games", desc: "Use the wheel in quiz-show format. Spin for who answers, then spin again for the question topic." },
                                { num: "7", title: "Reward Distribution", desc: "When giving out stickers or small prizes, use the wheel for a fun, fair selection process." },
                            ].map((item) => (
                                <div key={item.num} className="flex gap-3 bg-gray-50 p-4 rounded-lg">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        {item.num}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Tips for Using Name Pickers Effectively</h2>
                        <ul className="space-y-2 text-gray-700 list-disc pl-6">
                            <li><strong>Give think time:</strong> After spinning, give the selected student 5-10 seconds to think before they respond. This reduces anxiety and improves response quality.</li>
                            <li><strong>Allow &quot;phone a friend&quot;:</strong> If a student is struggling, let them ask a classmate for help. This keeps the atmosphere supportive.</li>
                            <li><strong>Celebrate participation:</strong> Thank students for answering regardless of correctness. The goal is engagement, not getting the right answer.</li>
                            <li><strong>Be consistent:</strong> Use the wheel daily so it becomes normal routine, not a surprise.</li>
                            <li><strong>Project the wheel:</strong> Show it on the classroom projector so students can see the transparent selection.</li>
                        </ul>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Setting Up Your Classroom Wheel</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Setting up a <Link href="/picker-wheel" className="text-blue-600 hover:text-blue-700 font-semibold">picker wheel</Link> for your classroom takes just a few minutes. Add each student&apos;s name, customize the colors to match your class theme, and bookmark the URL for quick daily access. Our wheel works on any device – laptop, tablet, or interactive whiteboard.
                        </p>
                    </div>

                    <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                        <h3 className="font-bold text-gray-900 mb-4">Tools for Teachers</h3>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/name-picker" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:text-blue-600 border border-gray-200 hover:border-blue-300 transition-all inline-flex items-center gap-1">
                                Name Picker <FiArrowRight className="text-xs" />
                            </Link>
                            <Link href="/picker-wheel" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:text-blue-600 border border-gray-200 hover:border-blue-300 transition-all inline-flex items-center gap-1">
                                Picker Wheel <FiArrowRight className="text-xs" />
                            </Link>
                            <Link href="/random-picker-wheel" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:text-blue-600 border border-gray-200 hover:border-blue-300 transition-all inline-flex items-center gap-1">
                                Random Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
            <CallToAction />
        </div>
    );
}
