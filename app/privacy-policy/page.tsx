import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export const metadata: Metadata = {
    title: "Privacy Policy | Spin Wheel Data Protection | SpinPickOnline",
    description: "Read our privacy policy for SpinPickOnline's spin the wheel, random picker, and wheel of names tools. Client-side security, no data storage. Your randomizer data stays private and secure.",
    alternates: {
        canonical: "/privacy-policy",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-white pb-8 lg:pb-12">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 mb-5 sm:mb-8">
                <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors mb-6 sm:mb-8"
                    >
                        <FiArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="bg-linear-to-br from-blue-100 to-blue-200 p-4 sm:p-5 rounded-2xl shadow-lg">
                            <IoShieldCheckmarkOutline className="text-3xl sm:text-4xl text-blue-600" />
                        </div>
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 text-center">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500 text-base sm:text-lg text-center">Last updated: January 1, 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 lg:py-6 py-4 max-w-4xl">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6 lg:p-12">
                    <div className="md:space-y-6 space-y-4">

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">1. Introduction</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Welcome to SpinPickOnline (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This privacy policy outlines how we handle your data when you use our spin the wheel, random picker wheel, wheel of names, and other randomizer tools on our website. We believe transparent data practices are essential to building trust with our users.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">2. Data Collection</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm mb-3">
                                <strong>Good news: We collect very little data.</strong> SpinPickOnline is designed as a client-side tool. The lists of names or items you enter into our spinner wheel, name picker, decision wheel, or any random picker tool are processed locally on your device and are NOT sent to our servers or stored by us, unless you explicitly choose to use a &quot;Save/Share&quot; feature that generates a unique link.
                            </p>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm mb-3">
                                We may collect standard non-personal analytical data (like browser type, time spent on site, pages visited) via tools like Google Analytics to help us improve the user experience of our spinning wheel and randomizer features.
                            </p>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                When you use our shareable wheel feature, the names and options you enter are encoded into the URL itself. This data is stored to enable the sharing functionality but is not linked to any personal identifier or user account.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">3. Use of Information</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm mb-3">
                                We use the minimal information we collect to:
                            </p>
                            <ul className="list-disc ps-6 space-y-2 text-gray-700 md:text-base text-sm">
                                <li>Operate and maintain the website, including our spin wheel, random name picker, and wheel of names tools.</li>
                                <li>Analyze usage trends to improve features and user experience of our spinner wheel and decision-making tools.</li>
                                <li>Prevent abuse, spam, and unauthorized access to our free randomizer services.</li>
                                <li>Improve the performance and reliability of our random picker wheel and all randomization features.</li>
                                <li>Understand how users interact with our tools to develop new features and enhancements.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">4. Cookies</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm mb-3">
                                We may use cookies and local storage to store your preferences (like sound settings, theme choices, or saved wheel configurations) locally on your device specifically to enhance your experience with our spin the wheel and random picker tools. These cookies are used solely to remember your settings between visits.
                            </p>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                You can disable cookies in your browser settings, though some convenient features may not function properly. Disabling cookies will not affect the core functionality of our random number generator or spinning wheel animations.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">5. Data Security</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm mb-3">
                                We take data security seriously. Our random picker wheel uses cryptographically secure random number generators (CSPRNG) that operate entirely on your device. This means:
                            </p>
                            <ul className="list-disc ps-6 space-y-2 text-gray-700 md:text-base text-sm">
                                <li>Your spin wheel entries are processed locally in your browser, never on our servers.</li>
                                <li>The randomization algorithm uses browser-level security APIs for maximum fairness.</li>
                                <li>No personal data is transmitted during the spinning process of our wheel of names.</li>
                                <li>Shared wheel URLs use encoded data that cannot be traced to individual users.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">6. Third-Party Links</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Our website may contain links to other sites. We are not responsible for the privacy practices of those external sites. We recommend carefully reviewing the privacy policies of any third-party websites you visit after leaving SpinPickOnline. Detailed diligence is encouraged when navigating away from our platform.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">7. Children&apos;s Privacy</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                SpinPickOnline is designed to be safe for all ages. Our spin the wheel, name picker, and wheel of names tools do not collect personally identifiable information from children. Teachers and parents can use our random picker wheel with students of all ages without privacy concerns, as all data is processed locally on the device.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">8. Changes to This Policy</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify users of any significant changes by updating the &quot;Last updated&quot; date at the top of this page. Your continued use of our spin wheel and randomizer tools after any modifications constitutes acceptance of the updated privacy policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">9. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                If you have questions about this privacy policy or how we handle data for our spin the wheel, random picker wheel, or wheel of names tools, please contact us at <a href="mailto:support@spinpickonline.com" className="text-blue-600 hover:text-blue-800 no-underline hover:underline font-semibold">support@spinpickonline.com</a>. We are happy to clarify any aspects of our data practices and respond to all inquiries within 48 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
