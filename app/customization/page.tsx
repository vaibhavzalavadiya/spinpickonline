import { Metadata } from "next";
import { WheelPageTemplate } from "@/components/WheelPageTemplate";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
    title: "Custom Spin Wheel | Personalize Colors & Design | SpinPickOnline",
    description: "Create a fully customizable spin the wheel with personalized colors, text, and themes. Perfect for branded events, games, and decision making. 100% free spinner tool.",
    alternates: {
        canonical: "/customization",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CustomizationPage() {
    return (
        <>
            <WheelPageTemplate
                title="Customization"
                h1="Fully Customizable Spin Wheel & Name Picker"
                description="Make it yours! Whether you need a custom spinning wheel for brand colors, themed decision wheels, or a personalized random picker wheel with unique entry names, our tool gives you complete control. Perfect as a wheel of names spinner, randomizer, or picker wheel for any occasion."
                ctaText="Create Your Custom Wheel"
                benefits={[
                    "Custom Colors for Every Segment - Brand your spinner wheel",
                    "Unlimited Entries - Add as many options as needed",
                    "Emoji & Special Character Support - Make it fun and unique",
                    "Dark & Light Theme Options - Match your style",
                    "Edit Titles & Labels - Perfect for name wheels",
                    "Save & Reuse Settings - Quick setup for repeat use",
                    "Export & Share Custom Wheels - Send to anyone",
                    "Random Color Generator - Auto-assign vibrant colors",
                ]}
                useCases={[
                    "Branded Corporate Events & Giveaways",
                    "Themed Parties - Birthday, Halloween, Christmas wheels",
                    "Color-Coordinated Classroom Activities",
                    "Visual Learning Tools for Teachers",
                    "Custom Game Shows & Trivia Nights",
                    "Personalized Decision Wheels for Teams",
                    "Social Media Contest Wheels - Instagram, YouTube",
                    "Wedding & Event Planning Tools",
                ]}
            />

            <section className="bg-white pb-10 lg:pb-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Customize Your Random Picker Wheel</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed md:text-base text-sm space-y-4 md:text-base text-sm">
                        <p>
                            Our customizable spin wheel (also known as a custom name picker, personalized wheel of names, or branded spinner wheel) lets you create a unique random picker that matches your exact needs. Whether you need a decision wheel with custom colors, a name spinner with themed designs, or a randomizer wheel for branded events, our free tool provides complete customization control.
                        </p>
                        <p>
                            Perfect for creating custom picker wheels for giveaways, personalized spinning wheels for classrooms, branded random name generators for corporate events, or themed decision makers for parties. Our wheel spinner supports unlimited customization options including colors, text, emojis, and more.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-10 lg:py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 md:mb-6 mb-4">Customization Features</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">🎨 Custom Colors</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">Choose any color for each segment of your spinner wheel. Perfect for brand matching, themed events, or creating visually appealing random picker wheels for social media.</p>
                        </div>
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">✏️ Custom Text & Emojis</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">Add any text, names, or emojis to your wheel of names. Create fun decision wheels with emojis or professional name pickers with formatted text.</p>
                        </div>
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">💾 Save & Reuse</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">Save your custom wheel configurations and reuse them anytime. Perfect for recurring events, weekly classroom activities, or regular team meetings.</p>
                        </div>
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">🎲 Random Color Generator</h3>
                            <p className="text-gray-700 leading-relaxed md:text-base text-sm">Let our random color generator automatically assign vibrant, contrasting colors to your spinner wheel segments for instant visual appeal.</p>
                        </div>
                    </div>
                </div>
            </section>
                        <CallToAction/>
            
        </>
    );
}

