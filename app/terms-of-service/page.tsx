import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

export const metadata: Metadata = {
    title: "Terms of Service | Spin Wheel Usage Policy | SpinPickOnline",
    description: "Read the Terms of Service for using SpinPickOnline's spin the wheel, random picker, wheel spinner, and name picker tools. Free use for personal and commercial giveaways. Fair randomizer usage guidelines.",
    alternates: {
        canonical: "/terms-of-service",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsOfServicePage() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-white pb-8 lg:pb-12">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 mb-5 sm:mb-8">
                <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors mb-4 sm:mb-5"
                    >
                        <FiArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <div className="bg-linear-to-br from-purple-100 to-purple-200 p-3 sm:p-4 rounded-xl shadow-md">
                            <IoDocumentTextOutline className="text-2xl sm:text-3xl text-purple-600" />
                        </div>
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 text-center">
                        Terms of Service
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base text-center">Last updated: January 1, 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 lg:py-6 py-4 max-w-4xl">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6 lg:p-12">
                    <div className="md:space-y-6 space-y-4">

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">1. Agreement to Terms</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm mb-3">
                                By accessing or using SpinPickOnline (the &quot;Site&quot;), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Site. These terms apply to all visitors, users, and others who access or use our spin the wheel, random picker wheel, wheel of names, spinner wheel, and all other randomizer tools available on the platform.
                            </p>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                SpinPickOnline provides free online tools for random selection, including name pickers, decision wheels, team generators, and giveaway randomizers. By using any of these tools, you acknowledge and accept these terms in their entirety.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">2. Use License</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm mb-3">
                                Permission is granted to use SpinPickOnline&apos;s spin the wheel, random picker, wheel of names, and spinning wheel tools for personal, educational, or commercial purposes (such as selecting giveaway winners, forming teams, or making group decisions). This includes:
                            </p>
                            <ul className="list-disc ps-6 space-y-2 text-gray-700 md:text-base text-sm mb-3">
                                <li>Using our spinner wheel for classroom activities, team meetings, and educational purposes.</li>
                                <li>Using our random name picker for social media giveaways on Instagram, YouTube, TikTok, and other platforms.</li>
                                <li>Using our decision wheel for personal and professional decision-making.</li>
                                <li>Creating and sharing custom wheel configurations via our shareable wheel links.</li>
                                <li>Recording or streaming our spin the wheel tool for content creation purposes.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm mb-3">
                                However, you may not:
                            </p>
                            <ul className="list-disc ps-6 space-y-2 text-gray-700 md:text-base text-sm">
                                <li>Reverse engineer, decompile, or scrape the underlying software or algorithms.</li>
                                <li>Use the site to generate illegal, harmful, or offensive content.</li>
                                <li>Attempt to disrupt the service, overload servers, or interfere with other users&apos; experience.</li>
                                <li>Misrepresent SpinPickOnline as your own product or create derivative works without permission.</li>
                                <li>Use automated bots or scripts to interact with our random picker wheel or spin the wheel features.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">3. Free Tool Policy</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                All features of SpinPickOnline — including our spin the wheel, random picker wheel, wheel of names, name spinner, decision wheel, team picker, yes or no wheel, and all customization options — are provided completely free of charge. There are no hidden fees, premium tiers, or paid upgrades. We reserve the right to introduce optional premium features in the future, but existing free features will remain free.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">4. Randomization Disclaimer</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm mb-3">
                                SpinPickOnline uses Cryptographically Secure Pseudo-Random Number Generators (CSPRNG) to provide fair, unbiased random selection through our spinner wheel and randomizer tools. While our random number generator meets high standards of statistical randomness:
                            </p>
                            <ul className="list-disc ps-6 space-y-2 text-gray-700 md:text-base text-sm">
                                <li>Our tools are designed for entertainment, education, and general decision-support purposes.</li>
                                <li>Results should not be used for high-stakes gambling, legally binding selections requiring certified audits, or scenarios where regulatory compliance mandates specific randomization standards.</li>
                                <li>We make no warranties regarding the suitability of our randomizer for specific regulated use cases.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">5. Disclaimer of Warranties</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm mb-3">
                                The tools on SpinPickOnline are provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we strive for 100% uptime, accurate randomness, and smooth performance across all devices, we make no warranties, expressed or implied, regarding:
                            </p>
                            <ul className="list-disc ps-6 space-y-2 text-gray-700 md:text-base text-sm">
                                <li>Uninterrupted availability of our spin the wheel and random picker services.</li>
                                <li>Compatibility with all browsers, devices, or operating systems.</li>
                                <li>The fitness of our tools for any particular purpose beyond general entertainment and decision support.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">6. User Generated Content</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm mb-3">
                                You are solely responsible for the content (names, text, emojis, and other entries) you enter into our spinner wheel, wheel of names, or any random picker tool. We do not monitor user input and accept no liability for how you use the tool or the content you add to your custom wheels.
                            </p>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                When you create a shareable wheel link, the content you entered is encoded into the URL. You are responsible for ensuring that shared wheel content is appropriate and does not violate any laws or third-party rights.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">7. Intellectual Property</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                The SpinPickOnline brand, logo, website design, spin the wheel interface, random picker wheel animations, and all associated intellectual property are owned by SpinPickOnline. You may not use our branding, design elements, or proprietary features without written permission. However, you are free to screenshot, record, or stream our tools in use for personal and commercial content creation.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">8. Changes to Terms</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                We reserve the right to modify these terms at any time. Significant changes will be communicated by updating the &quot;Last updated&quot; date at the top of this page. Continued use of the website and our spin wheel, random picker, and wheel of names tools after any such changes constitutes your acceptance of the new Terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">9. Governing Law</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                These terms are governed by and construed in accordance with the laws of the jurisdiction in which SpinPickOnline operates, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of our spinner wheel and randomizer tools will be resolved under the applicable laws of that jurisdiction.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">10. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                If you have any questions about these Terms of Service, our spin the wheel tools, or how to use our random picker wheel and wheel of names features, please contact us at <a href="mailto:support@spinpickonline.com" className="text-blue-600 hover:text-blue-800 no-underline hover:underline font-semibold">support@spinpickonline.com</a>. We are happy to assist and typically respond within 24-48 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
