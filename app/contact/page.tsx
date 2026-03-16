import { Metadata } from "next";
import Link from "next/link";
import { FiMail, FiArrowLeft } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | Spin Wheel Support | SpinPickOnline",
    description: "Contact SpinPickOnline for support with our spin the wheel tool, random picker wheel, or wheel of names spinner. Get help with features, feedback, or custom requests. Free support.",
    alternates: {
        canonical: "/contact",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50/30 to-white py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-2xl px-4 sm:px-6">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors mb-6 sm:mb-8"
                >
                    <FiArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                {/* Header */}
                <div className="text-center mb-5 sm:mb-8">
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <div className="bg-linear-to-br from-blue-500 to-purple-600 p-3 sm:p-4 rounded-xl shadow-lg">
                            <IoMailOutline className="text-2xl sm:text-3xl text-white" />
                        </div>
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-3">Contact Us</h1>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed px-2">
                        Have questions about our spin wheel, random picker, or wheel of names features? We're here to help!
                    </p>
                </div>

                {/* Contact Form Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8">
                    <ContactForm />

                    {/* Direct Email Section */}
                    <div className="mt-6 text-center pt-5 border-t border-gray-200">
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">
                            Or email us at:
                        </p>
                        <a
                            href="mailto:support@spinpickonline.com"
                            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            <FiMail className="w-4 h-4" />
                            support@spinpickonline.com
                        </a>
                    </div>
                </div>

                {/* Help Topics */}
                <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white p-4 sm:p-5 rounded-xl border-2 border-gray-100 hover:border-blue-300 transition-all">
                        <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">🎯 Feature Requests</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Suggest new features for our wheel spinner and random picker tools</p>
                    </div>
                    <div className="bg-white p-4 sm:p-5 rounded-xl border-2 border-gray-100 hover:border-purple-300 transition-all">
                        <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">🐛 Bug Reports</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Report issues with spin the wheel or randomizer functionality</p>
                    </div>
                    <div className="bg-white p-4 sm:p-5 rounded-xl border-2 border-gray-100 hover:border-green-300 transition-all">
                        <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">💼 Business Inquiries</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Custom wheel of names solutions for your organization</p>
                    </div>
                    <div className="bg-white p-4 sm:p-5 rounded-xl border-2 border-gray-100 hover:border-pink-300 transition-all">
                        <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">❓ General Support</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Questions about using our decision wheel and picker wheel</p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-8 sm:mt-10">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">Contact FAQ</h2>
                    <div className="space-y-3">
                        <details className="group bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                            <summary className="flex items-center gap-2 cursor-pointer list-none">
                                <span className="flex-shrink-0 w-5 h-5 rounded bg-blue-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                <span className="text-sm font-bold text-gray-900 flex-1">How quickly do you respond to support requests?</span>
                                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="text-sm text-gray-600 mt-2.5 ml-7 leading-relaxed">
                                We typically respond to all spin wheel and random picker wheel support requests within 24-48 hours. For urgent issues with our wheel of names tool, please mention it in your message subject.
                            </p>
                        </details>

                        <details className="group bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                            <summary className="flex items-center gap-2 cursor-pointer list-none">
                                <span className="flex-shrink-0 w-5 h-5 rounded bg-purple-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                <span className="text-sm font-bold text-gray-900 flex-1">Do you offer custom random picker wheel solutions?</span>
                                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="text-sm text-gray-600 mt-2.5 ml-7 leading-relaxed">
                                Yes! We offer custom wheel of names and spin wheel solutions for businesses and organizations. Contact us for branded spinner wheels, embedded solutions, or API access for your giveaways and events.
                            </p>
                        </details>

                        <details className="group bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                            <summary className="flex items-center gap-2 cursor-pointer list-none">
                                <span className="flex-shrink-0 w-5 h-5 rounded bg-green-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                <span className="text-sm font-bold text-gray-900 flex-1">Is support for the free spin wheel also free?</span>
                                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="text-sm text-gray-600 mt-2.5 ml-7 leading-relaxed">
                                Absolutely! Support for our random picker wheel, name picker, decision wheel, and all other tools is 100% free. We're committed to providing the best free wheel spinner experience with helpful support.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}
