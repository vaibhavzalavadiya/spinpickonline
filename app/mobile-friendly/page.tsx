import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
    title: "Mobile Friendly Spin Wheel | Works on Phone & Tablet | SpinPickOnline",
    description: "Spin the wheel anywhere, anytime. Our Mobile Friendly design ensures a perfect experience on all devices, from phones to large screens.",
    alternates: {
        canonical: "/mobile-friendly",
    },
};

export default function MobileFriendlyPage() {
    return (
        <>
            <WheelPageTemplate
                title="Mobile Friendly"
                h1="Mobile Friendly Spin Wheel"
                description="Designed for the modern world. Our wheel works flawlessly on smartphones, tablets, and desktops. No app download needed—just open your browser and spin!"
                ctaText="Try on Mobile"
                benefits={[
                    "Responsive Design",
                    "Touch Optimized",
                    "Fast Loading",
                    "No App Store Needed",
                    "Works on iOS & Android",
                    "Battery Efficient"
                ]}
                useCases={[
                    "On-the-go Decisions",
                    "Outdoor Activities",
                    "Parties & Pubs",
                    "Classroom Tablets",
                    "Quick Meetings",
                    "Travel Games"
                ]}
            />

            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Mobile-Friendly Random Picker Wheel</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4 md:text-base text-sm">
                        <p>
                            Our mobile-friendly spin wheel (also known as a mobile name picker, portable wheel of names, or responsive spinner wheel) works perfectly on all devices - smartphones, tablets, iPads, and desktops. Unlike apps that require downloads, our web-based random picker wheel runs directly in your mobile browser, making it the perfect on-the-go decision wheel and name spinner.
                        </p>
                        <p>
                            Whether you need a mobile random name generator for classroom activities on tablets, a portable spinning wheel for outdoor events, or a touch-optimized picker wheel for livestreams, our responsive design ensures smooth performance. Perfect for teachers using iPads, influencers streaming from phones, or anyone needing a reliable mobile randomizer.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why Our Mobile Wheel Works Better</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">📱 No App Download Required</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">Access our spinner wheel instantly from any mobile browser. No App Store or Google Play downloads needed - just visit and spin your wheel of names.</p>
                        </div>
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">☝️ Touch-Optimized Interface</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">Large touch targets and swipe gestures make our random picker wheel easy to use on phones and tablets. Perfect for mobile name selection and decision making.</p>
                        </div>
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">⚡ Fast Mobile Performance</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">Optimized for mobile networks and devices. Our spinning wheel loads quickly and runs smoothly even on older smartphones.</p>
                        </div>
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">🔋 Battery Efficient</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">Lightweight design means our random name picker won't drain your phone battery during long events or classroom sessions.</p>
                        </div>
                    </div>
                </div>
            </section>
                        <CallToAction/>
            
        </>
    );
}
