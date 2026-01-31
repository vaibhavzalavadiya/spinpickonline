import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
    title: "Shareable Spin Wheel | Save & Share Results | SpinPickOnline",
    description: "Create a wheel and share it with friends instantly. Save your custom wheels and come back to them anytime.",
    alternates: {
        canonical: "/shareable-wheels",
    },
};

export default function ShareableWheelsPage() {
    return (
        <>
            <WheelPageTemplate
                title="Shareable Wheels"
                h1="Shareable Spin Wheels"
                description="Collaboration made easy. Create your perfect wheel configuration and share the link with colleagues, students, or friends so they can spin it too."
                ctaText="Create & Share"
                benefits={[
                    "Unique Share Links",
                    "Social Media Sharing",
                    "Save Configurations",
                    "No Account Needed",
                    "Instant Access",
                    "Clone Functionality"
                ]}
                useCases={[
                    "Remote Meetings",
                    "Viral Challenges",
                    "Teacher Resources",
                    "Event Planning",
                    "Group Decisions",
                    "Social Polls"
                ]}
            />

            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Share Your Random Picker Wheel</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4 md:text-base text-sm">
                        <p>
                            Our shareable spin wheel (also known as a collaborative name picker, shared wheel of names, or team spinner wheel) lets you create custom random picker wheels and share them instantly with anyone. Whether you need a shared decision wheel for remote teams, a collaborative name spinner for online classrooms, or a viral spinning wheel for social media contests, our free tool makes sharing effortless.
                        </p>
                        <p>
                            Perfect for creating shareable picker wheels for Instagram giveaways, collaborative random name generators for virtual meetings, team decision wheels for remote work, or reusable name spinners for recurring events. Share via link, social media, or embed on your website - no signup required for you or your audience.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Sharing Features</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">🔗 Instant Share Links</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">Generate unique URLs for your custom spinner wheel. Share your wheel of names via email, messaging apps, or social media with one click.</p>
                        </div>
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">📱 Social Media Ready</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">Share your random picker wheel directly to Instagram, Facebook, Twitter, or TikTok. Perfect for viral giveaways and contests.</p>
                        </div>
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">💾 Save & Reuse</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">Save your wheel configurations and access them anytime. Perfect for teachers, event planners, and team leaders who need recurring random selection.</p>
                        </div>
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">👥 No Account Required</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">Recipients can access and spin your shared wheel without creating accounts. Instant access for everyone - perfect for quick decisions and transparent selection.</p>
                        </div>
                    </div>
                </div>
            </section>
                        <CallToAction/>
            
        </>
    );
}
