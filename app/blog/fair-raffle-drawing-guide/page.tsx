import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
    title: "How to Run a Fair Raffle Drawing Online | SpinPickOnline",
    description: "Complete guide to running fair, transparent raffle drawings online. Covers entry collection, winner selection, legal considerations, and best practices.",
    alternates: { canonical: "/blog/fair-raffle-drawing-guide" },
    robots: { index: true, follow: true },
    openGraph: {
        title: "How to Run a Fair Raffle Drawing Online",
        description: "Complete guide to fair online raffle drawings.",
        type: "article",
        url: "https://spinpickonline.com/blog/fair-raffle-drawing-guide",
    },
};

export default function RaffleGuidePost() {
    return (
        <div className="min-h-screen bg-white">
            <article className="container mx-auto px-4 py-8 lg:py-12">
                <div className="max-w-3xl mx-auto">
                    <Link href="/blog" className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 mb-6">
                        <FiArrowLeft className="text-xs" /> Back to Blog
                    </Link>
                    <div className="mb-8">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white">Raffles</span>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                            How to Run a Fair Raffle Drawing Online
                        </h1>
                        <p className="text-gray-500 text-sm">Published February 8, 2026 · 6 min read</p>
                    </div>

                    <div className="prose prose-gray max-w-none space-y-6">
                        <p className="md:text-lg text-base text-gray-700 leading-relaxed">
                            Raffles are one of the most effective fundraising tools for schools, charities, and community organizations. Moving your raffle online expands your reach, reduces overhead, and makes the drawing process more transparent with tools like a <Link href="/raffle-wheel" className="text-blue-600 hover:text-blue-700 font-semibold">raffle wheel</Link>.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Is Your Raffle Legal?</h2>
                        <div className="bg-amber-50 p-5 rounded-xl border border-amber-200 my-4">
                            <h3 className="font-bold text-amber-800 mb-2">⚠️ Important Legal Note</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Raffle laws vary significantly by country, state, and locality. In many jurisdictions, raffles are considered a form of lottery and require permits or licenses. Generally, <strong>nonprofit organizations</strong> have more flexibility to run raffles than businesses. Always check your local regulations before organizing a raffle.
                            </p>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Key legal considerations in most regions:
                        </p>
                        <ul className="space-y-2 text-gray-700 list-disc pl-6">
                            <li>Many jurisdictions require a raffle license or permit</li>
                            <li>The organization running the raffle may need to be a registered nonprofit</li>
                            <li>There may be limits on ticket prices and total prize value</li>
                            <li>Tax obligations may apply to both the organization and winners</li>
                            <li>Online raffles may have additional regulations due to anti-gambling laws</li>
                        </ul>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Step-by-Step: Running Your Online Raffle</h2>

                        <h3 className="text-lg font-bold text-gray-900 mt-6">1. Set Up Entry Collection</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Use a Google Form, Typeform, or dedicated raffle platform to collect entries. Each entry should include the participant&apos;s name, contact info, and payment confirmation (if applicable). Assign each entry a unique ticket number for tracking.
                        </p>

                        <h3 className="text-lg font-bold text-gray-900 mt-6">2. Verify Entries</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Before the drawing, verify that all entries are valid. Check payment statuses, remove duplicates, and ensure all participants meet eligibility requirements. Export your clean list of valid entries.
                        </p>

                        <h3 className="text-lg font-bold text-gray-900 mt-6">3. Prepare the Drawing</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Add all valid ticket numbers or names to your <Link href="/raffle-wheel" className="text-blue-600 hover:text-blue-700 font-semibold">raffle wheel</Link>. If you have many entries, consider using ticket numbers instead of names – they&apos;re shorter and easier to read on the wheel.
                        </p>

                        <h3 className="text-lg font-bold text-gray-900 mt-6">4. Draw Winners Publicly</h3>
                        <p className="text-gray-700 leading-relaxed">
                            This is where transparency matters most. The best approaches:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                                <h4 className="font-bold text-purple-800 mb-2">🎥 Live Stream</h4>
                                <p className="text-sm text-gray-700">Host a Facebook Live, YouTube stream, or Zoom call. Show the complete entry list, then spin the wheel live.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                <h4 className="font-bold text-blue-800 mb-2">📹 Recorded Video</h4>
                                <p className="text-sm text-gray-700">Record the entire process in one continuous shot. Post the unedited video to your website and social media.</p>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mt-6">5. Follow Through</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Contact winners within 24 hours. Post results publicly on your website and social media. Document prize delivery. Thank all participants and share the total amount raised for your cause. This builds trust for your next raffle.
                        </p>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:mt-8 mt-5">Online Raffle Best Practices</h2>
                        <div className="space-y-3">
                            {[
                                "Set a clear, specific drawing date and stick to it",
                                "Publish complete rules before selling tickets",
                                "Use a separate bank account for raffle proceeds",
                                "Keep detailed records of all entries and transactions",
                                "Announce winners through multiple channels",
                                "Report income and distribute tax forms as required",
                            ].map((practice, index) => (
                                <div key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <p className="text-sm text-gray-700">{practice}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                        <h3 className="font-bold text-gray-900 mb-4">Raffle Tools</h3>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/raffle-wheel" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:text-purple-600 border border-gray-200 hover:border-purple-300 transition-all inline-flex items-center gap-1">
                                Raffle Wheel <FiArrowRight className="text-xs" />
                            </Link>
                            <Link href="/prize-wheel" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:text-purple-600 border border-gray-200 hover:border-purple-300 transition-all inline-flex items-center gap-1">
                                Prize Wheel <FiArrowRight className="text-xs" />
                            </Link>
                            <Link href="/lucky-draw-wheel" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:text-purple-600 border border-gray-200 hover:border-purple-300 transition-all inline-flex items-center gap-1">
                                Lucky Draw <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
            <CallToAction />
        </div>
    );
}
