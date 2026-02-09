import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { FiLock, FiTarget, FiShield, FiArrowRight, FiZap, FiCheck } from "react-icons/fi";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Fair Randomization Wheel | Cryptographically Secure Picker | SpinPickOnline",
    description: "Experience truly unbiased random selection with our fair randomization wheel. Powered by cryptographic RNG algorithms for verifiable fairness.",
    alternates: {
        canonical: "/fair-randomization",
    },
};

// Force dynamic rendering to prevent Vercel SSG caching
export const dynamic = "force-dynamic";

// Default randomization entries
const FAIR_ENTRIES = [
    { id: "1", label: "Result A", color: "#3b82f6" },
    { id: "2", label: "Result B", color: "#ef4444" },
    { id: "3", label: "Result C", color: "#22c55e" },
    { id: "4", label: "Result D", color: "#f59e0b" },
    { id: "5", label: "Result E", color: "#8b5cf6" },
];

export default function FairRandomizationPage() {
    // Generate schemas for SEO
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "What makes this picker wheel 'fair'?",
            answer: "Our wheel uses a cryptographically secure random number generator (RNG) built into your browser. This is the same grade of randomness used in modern security and encryption, ensuring that every spin is mathematically independent and unbiased."
        },
        {
            question: "Is it better than a physical spinner?",
            answer: "Yes. Physical spinners can have manufacturing defects, friction imbalances, or subtle surface gradients that bias the result. Our digital wheel eliminates all physical interference, providing a perfectly equal probability for every segment."
        },
        {
            question: "Are the segments truly equal?",
            answer: "Absolutely. The wheel geometry is calculated with precision to ensure every entry takes up exactly the same percentage of the wheel's surface area. Combined with our RNG, this guarantees a fair 1/N chance for every spin."
        },
        {
            question: "How can I trust the results?",
            answer: "We provide a transparent visual spinning animation that mirrors the underlying math. What you see is a live representation of the random selection process happening in your device's memory."
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
                title="Fair Randomization"
                h1="Fair Randomization Wheel - Verifiably Unbiased Picker"
                description="Trust is built on fairness. Our randomization wheel uses enterprise-grade cryptographic algorithms to ensure every spin is 100% random and unbiased."
                ctaText="Test Fairness Now"
                defaultEntries={FAIR_ENTRIES}
                benefits={[
                    "Cryptographic RNG",
                    "Mathematically Unbiased",
                    "Transparent Animation",
                    "Zero Pattern Logic",
                    "Security-First Design",
                    "Verifiable Results"
                ]}
                useCases={[
                    "Official Contests",
                    "Scientific Sampling",
                    "Legal Jury Selection",
                    "Competitive Gaming",
                    "Fair Team Distribution",
                    "Transparency Audits"
                ]}
            />

            {/* Technical Section */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">The Science Behind the Fair Spin</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                        <p>
                            At SpinPickOnline, we believe that a random picker should be exactly that—random. Most online spinners use simple 'Math.random()' functions which, while okay for casual use, lack the statistical rigor required for true fairness. Our system utilizes <strong>Cryptographically Secure Pseudo-Random Number Generators (CSPRNG)</strong>.
                        </p>
                        <p>
                            This technology ensures that there are no discernible patterns, no 'hot streaks,' and no biases. Whether you are running a high-stakes giveaway or assigning critical project tasks, you can rest assured that the landing outcome is as fair as a flip of a coin or a roll of the dice in a controlled laboratory.
                        </p>
                    </div>
                </div>
            </section>

            {/* Feature Highlights */}
            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Engineered for Transparency</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-linear-to-br from-blue-50 to-blue-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-blue-200 text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                                <FiLock />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Secure RNG</h3>
                            <p className="text-gray-600 md:text-base text-sm">We leverage browser-level security APIs for randomness that meets information security standards.</p>
                        </div>
                        <div className="bg-linear-to-br from-purple-50 to-purple-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-purple-200 text-center">
                            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                                <FiTarget />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Area Logic</h3>
                            <p className="text-gray-600 md:text-base text-sm">Every segment is calculated down to the decimal to ensure geometric and statistical alignment.</p>
                        </div>
                        <div className="bg-linear-to-br from-green-50 to-green-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-green-200 text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                                <FiShield />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Pattern-Free</h3>
                            <p className="text-gray-600 md:text-base text-sm">Our algorithm prevents predictable outcomes, making it impossible to 'game' the wheel or predict the landing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Matters Section */}
            <section className="bg-white py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-linear-to-br from-gray-50 to-blue-50 md:p-6 lg:p-10 p-4 lg:rounded-2xl rounded-xl">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Fair Randomization Matters</h2>
                        <div className="grid sm:grid-cols-2 md:gap-6 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Contest Integrity</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">When running giveaways or contests, participants trust that the selection is unbiased. Our cryptographic RNG provides that guarantee.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Scientific Validity</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">For research and sampling, you need randomness that meets statistical standards. Our RNG delivers exactly that.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Legal Compliance</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Some jurisdictions require verifiable randomness for official selections. Our transparent system can be audited.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Team Trust</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">When assigning tasks or selecting team members, fairness builds morale and prevents accusations of favoritism.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Statement */}
            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-linear-to-br from-blue-600 to-purple-700 lg:rounded-3xl rounded-2xl md:p-8 lg:p-16 p-6 text-white text-center">
                        <div className="max-w-3xl mx-auto">
                            <div className="flex justify-center mb-6">
                                <FiZap className="text-4xl md:text-5xl text-yellow-400 animate-pulse" />
                            </div>
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Built for Professionals, Free for Everyone</h2>
                            <p className="md:text-lg text-base opacity-90 leading-relaxed mb-6 md:mb-8">
                                While we use industrial-grade randomization, we keep our tool simple and free. There's no account registration needed to access our fair picker features. Start your verified random journey today.
                            </p>
                            <Link href="/wheel" className="inline-block px-8 md:px-10 py-3 md:py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl text-base md:text-lg">
                                Open the Master Wheel
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Tools */}
            <section className="bg-white py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Explore Our Fair Randomizers</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link href="/giveaway-winner" className="group bg-gradient-to-br from-pink-50 to-pink-100 md:p-5 p-4 rounded-xl border-2 border-pink-200 hover:border-pink-400 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-pink-600">🎁 Giveaway Winner</h3>
                            <p className="text-sm text-gray-600 mb-2">Pick contest winners with verified fairness.</p>
                            <span className="text-sm font-semibold text-pink-600 inline-flex items-center gap-1">Learn more <FiArrowRight className="text-xs" /></span>
                        </Link>
                        <Link href="/raffle-wheel" className="group bg-gradient-to-br from-purple-50 to-purple-100 md:p-5 p-4 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">🎫 Raffle Wheel</h3>
                            <p className="text-sm text-gray-600 mb-2">Fair raffle drawings anyone can trust.</p>
                            <span className="text-sm font-semibold text-purple-600 inline-flex items-center gap-1">Learn more <FiArrowRight className="text-xs" /></span>
                        </Link>
                        <Link href="/team-picker" className="group bg-gradient-to-br from-blue-50 to-blue-100 md:p-5 p-4 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">👥 Team Picker</h3>
                            <p className="text-sm text-gray-600 mb-2">Fair team generation with no bias.</p>
                            <span className="text-sm font-semibold text-blue-600 inline-flex items-center gap-1">Learn more <FiArrowRight className="text-xs" /></span>
                        </Link>
                    </div>
                </div>
            </section>

            <CallToAction />
        </>
    );
}
