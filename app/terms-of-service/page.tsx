import { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

export const metadata: Metadata = {
    title: "Terms of Service | Spin Wheel Usage Policy | SpinPickOnline",
    description: "Read the Terms of Service for using SpinPickOnline's spin the wheel, random picker, wheel spinner, and name picker tools. Free use for personal and commercial giveaways.",
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
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                By accessing or using SpinPickOnline (the "Site"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Site.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">2. Use License</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm mb-3">
                                Permission is granted to use SpinPickOnline for personal, educational, or commercial purposes (such as selecting giveaway winners). However, you may not:
                            </p>
                            <ul className="list-disc ps-6 space-y-2 text-gray-700 md:text-base text-sm">
                                <li>Reverse engineer or scrape the underlying software.</li>
                                <li>Use the site to generate illegal content.</li>
                                <li>Attempt to disrupt the service for other users.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">3. Disclaimer</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm mb-3">
                                The tools on SpinPickOnline are provided on an "as is" basis. While we strive for 100% uptime and accurate randomness, we make no warranties, expressed or implied, regarding reliability or availability.
                            </p>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                <strong>SpinPickOnline is for entertainment and decision-support purposes only.</strong> It should not be used for high-stakes gambling or legally binding scenarios where certified audits are required.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">4. User Generated Content</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                You are solely responsible for the content (names, text) you enter into the wheel. We do not monitor user input and accept no liability for how you use the tool.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">5. Changes to Terms</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                We reserve the right to modify these terms at any time. Continued use of the website after any such changes constitutes your acceptance of the new Terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">6. Governing Law</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                These terms are governed by and construed in accordance with the laws of the jurisdiction in which SpinPickOnline operates, without regard to its conflict of law provisions.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 md:mb-3 mb-2">7. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                If you have any questions about these Terms, please contact us at <a href="mailto:support@spinpickonline.com" className="text-blue-600 hover:text-blue-800 no-underline hover:underline font-semibold">support@spinpickonline.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
