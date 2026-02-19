import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { CallToAction } from "@/components/CallToAction";
import { generateFAQSchema, generateWebApplicationSchema } from "@/lib/seo";
import { FiSmartphone, FiZap, FiWifi, FiMonitor } from "react-icons/fi";

export const metadata: Metadata = {
    title: "Mobile Friendly Spin Wheel | Works on Phone & Tablet | SpinPickOnline",
    description: "Spin the wheel anywhere on any device. Our mobile-friendly random picker wheel works perfectly on iPhone, Android, iPad, and desktop. Touch-optimized spinner wheel - no app download needed. Free mobile name picker.",
    alternates: {
        canonical: "/mobile-friendly",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function MobileFriendlyPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "Do I need to download an app to use the mobile spin wheel?",
            answer: "No! Our mobile-friendly spin wheel works directly in your phone's browser - Safari, Chrome, Firefox, or any other. No app store download required. Just visit SpinPickOnline and start spinning instantly on any smartphone or tablet."
        },
        {
            question: "Does the mobile spinner wheel work offline?",
            answer: "Our random picker wheel requires an internet connection for the initial page load. However, once loaded, the spinning wheel and randomizer work with minimal data usage, making it perfect for areas with weak mobile signals."
        },
        {
            question: "Is the mobile experience the same as desktop?",
            answer: "Yes! Our responsive design ensures every feature available on desktop - custom colors, shareable links, wheel of names, sound effects, and the full random picker wheel experience - works identically on mobile devices with touch-optimized controls."
        },
        {
            question: "Will the spin wheel drain my phone's battery?",
            answer: "No. Our mobile spinner wheel is designed to be lightweight and battery-efficient. The animations are optimized for mobile GPUs, so you can use our random name picker during long classroom sessions or events without worrying about battery drain."
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

            {/* What is Section */}
            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Mobile-Friendly Random Picker Wheel</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4">
                        <p>
                            Our mobile-friendly spin wheel (also known as a mobile name picker, portable wheel of names, or responsive spinner wheel) works perfectly on all devices - iPhones, Android phones, iPads, tablets, and desktops. Unlike apps that require downloads from the App Store or Google Play, our web-based random picker wheel runs directly in your mobile browser, making it the perfect on-the-go decision wheel and name spinner for any situation.
                        </p>
                        <p>
                            Whether you need a mobile random name generator for classroom activities on tablets, a portable spinning wheel for outdoor team-building events, or a touch-optimized picker wheel for livestreams from your phone, our responsive design ensures smooth performance everywhere. Perfect for teachers using iPads, influencers streaming from phones, coaches at the field, or anyone needing a reliable mobile randomizer that works without installation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Device Features Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">How Our Mobile Wheel Works Better</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-linear-to-br from-blue-50 to-blue-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-blue-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiSmartphone />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No App Download Required</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Access our spinner wheel instantly from any mobile browser. No App Store or Google Play downloads needed - just visit and spin your wheel of names on iPhone, Android, iPad, or any device.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-purple-50 to-purple-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-purple-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiZap />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Touch-Optimized Interface</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Large touch targets, intuitive swipe gestures, and mobile-first design make our random picker wheel easy to use on phones and tablets. Perfectly sized buttons for mobile name selection and decision making.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-green-50 to-green-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-green-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiWifi />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Mobile Performance</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Optimized for mobile networks and devices. Our spinning wheel loads quickly on 4G and 5G connections and runs smoothly even on older smartphones with limited processing power.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-pink-50 to-pink-100/50 md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-pink-200">
                            <div className="flex items-start gap-4 sm:flex-row flex-col">
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl">
                                    <FiMonitor />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Adaptive Screen Sizing</h3>
                                    <p className="text-gray-700 leading-relaxed md:text-base text-sm">Our wheel automatically resizes to fit your screen perfectly - from small phone displays to large tablet screens. The random picker wheel always looks crisp and professional on every resolution.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Mobile Matters Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-linear-to-br from-gray-50 to-blue-50 md:p-6 lg:p-10 p-4 lg:rounded-2xl rounded-xl">
                        <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Why a Mobile Spin Wheel Matters</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Spin Anywhere, Anytime</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Take your random picker wheel to outdoor events, classrooms, restaurants, or anywhere you need quick random selection. No laptop or desktop required.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Perfect for Livestreams</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Stream directly from your phone while using our mobile spinner wheel for Instagram Live, TikTok Live, or YouTube Live giveaway selections.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Classroom Tablet Ready</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Teachers love using our wheel of names on classroom iPads and tablets. The large touch targets make it easy for students to interact with the name spinner too.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="text-2xl sm:block hidden">✅</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Battery Efficient Design</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">Our lightweight design means the random name picker won&apos;t drain your phone battery during long events, multi-hour classroom sessions, or extended gaming nights.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Mobile Uses Section */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Popular Mobile Spinner Wheel Uses</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: "🏃", title: "Outdoor Sports", desc: "Use our mobile team picker at the park, gym, or field for instant random team generation without needing a laptop" },
                            { icon: "🍕", title: "Restaurant Decisions", desc: "Can't decide what to eat? Our mobile decision wheel helps your group pick a restaurant or menu item in seconds" },
                            { icon: "📚", title: "Tablet Classrooms", desc: "Teachers use our mobile name picker on iPads for random student selection during lessons and group activities" },
                            { icon: "🎤", title: "Live Events", desc: "Event hosts use our mobile spinner wheel on stage for raffle drawings, door prizes, and audience interaction" },
                            { icon: "✈️", title: "Travel Games", desc: "Keep friends and family entertained with mobile spinner games during road trips, flights, and vacations" },
                            { icon: "🎉", title: "Party Games", desc: "The mobile spin wheel is perfect for party games, truth or dare, or choosing who goes next at any gathering" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white md:p-5 p-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Mobile Spin Wheel FAQs</h2>
                    <div className="space-y-4">
                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Do I need to download an app to use the mobile spin wheel?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                No! Our mobile-friendly spin wheel works directly in your phone&apos;s browser - Safari, Chrome, Firefox, or any other. No app store download required. Just visit SpinPickOnline and start spinning instantly on any smartphone or tablet.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Is the mobile experience the same as desktop?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Yes! Our responsive design ensures every feature available on desktop - custom colors, shareable links, wheel of names, sound effects, and the full random picker wheel experience - works identically on mobile devices with touch-optimized controls.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Which mobile devices are supported?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                Our mobile spinner wheel supports all modern smartphones and tablets including iPhone (iOS 14+), Android phones (Android 10+), iPad, Samsung Galaxy tablets, and more. Any device with a modern web browser can run our random picker wheel smoothly.
                            </p>
                        </div>

                        <div className="bg-white md:p-6 md:rounded-xl p-4 rounded-lg border-2 border-gray-200">
                            <h3 className="sm:text-xl text-lg font-semibold text-gray-900 sm:mb-3 mb-2">Will the spin wheel drain my phone&apos;s battery?</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">
                                No. Our mobile spinner wheel is designed to be lightweight and battery-efficient. The animations are optimized for mobile GPUs, so you can use our random name picker during long classroom sessions or events without worrying about battery drain.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction />
        </>
    );
}
