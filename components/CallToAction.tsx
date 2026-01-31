import Link from "next/link";
import { IoSparkles, IoRocketOutline } from "react-icons/io5";

export function CallToAction() {
    return (
        <section className="lg:py-16 py-10 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                        <IoSparkles className="text-base" />
                        <span>Start Creating Now</span>
                    </div>
                    <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                        Ready to Spin Your Wheel?
                    </h2>
                    <p className="lg:text-lg text-sm text-gray-600 lg:mb-6 mb-4 max-w-2xl mx-auto">
                        Create your custom random picker wheel in seconds - no signup required!
                    </p>
                    <Link
                        href="/wheel"
                        className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 sm:px-8 sm:py-4 px-6 py-3 sm:text-base text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        <IoRocketOutline className="sm:text-xl text-lg" />
                        <span>Create Free Wheel</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
