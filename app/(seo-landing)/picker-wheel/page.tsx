import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiTarget } from "react-icons/fi";
import { IoHandLeftOutline, IoListOutline, IoShieldCheckmarkOutline, IoSparklesOutline } from "react-icons/io5";

export const metadata: Metadata = {
    title: "Picker Wheel | Free Random Selection Wheel | SpinPickOnline",
    description: "Free picker wheel for random selection. Pick names, items, or options instantly. Perfect for teachers, teams, and anyone needing fair random picks.",
    alternates: {
        canonical: "/picker-wheel",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Picker Wheel | Free Random Selection Wheel | SpinPickOnline",
        description: "Free picker wheel for random selection. Pick names, items, or options instantly.",
        type: "website",
        url: "https://spinpickonline.com/picker-wheel",
    },
};

export default function PickerWheelPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            {/* Hero Section with Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-emerald-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                            <FiTarget className="text-lg" />
                            <span>Random Picker</span>
                        </div>
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Picker Wheel – Free Random Selection Tool
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Need to pick something randomly? Our picker wheel makes selection easy and fun. Add your items, spin the wheel, and get an instant random pick. No bias, no favoritism – just fair random selection.
                        </p>
                    </div>
                    <HomeWheel />
                </div>
            </section>

            {/* Benefits */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use a Picker Wheel?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The fairest way to randomly pick from any list
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-emerald-50 to-green-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-emerald-200 hover:shadow-lg transition-shadow">
                            <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShieldCheckmarkOutline className="text-xl text-emerald-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Unbiased Selection</h3>
                            <p className="md:text-base text-sm text-gray-600">Cryptographically random picks ensure no favoritism. Everyone and everything has equal chance.</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoListOutline className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Any List Works</h3>
                            <p className="md:text-base text-sm text-gray-600">Pick from names, items, tasks, options – anything you can put in a list works with our picker.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Visual & Engaging</h3>
                            <p className="md:text-base text-sm text-gray-600">Watching the wheel spin is more exciting than clicking a button. Makes selection memorable.</p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow">
                            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoHandLeftOutline className="text-xl text-orange-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Easy to Use</h3>
                            <p className="md:text-base text-sm text-gray-600">Add entries, click spin, done. No learning curve, no complicated setup needed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Use */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            How to Use the Picker Wheel
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {[
                                { step: "1", title: "Add Your Items", desc: "Type in names, options, or items you want to pick from" },
                                { step: "2", title: "Customize If Needed", desc: "Change colors or edit entries to match your needs" },
                                { step: "3", title: "Spin the Wheel", desc: "Click the spin button and watch the picker in action" },
                                { step: "4", title: "Use Your Pick", desc: "The randomly selected item is displayed. Remove it and spin again for more picks!" },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-4 items-start bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-full flex items-center justify-center font-bold">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                                        <p className="md:text-base text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Picker Wheel Use Cases
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Team Assignments
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Pick team captains, assign tasks, or select who goes first in team activities.</p>
                            <Link href="/team-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Team Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Student Selection
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Teachers pick students for questions, presentations, or group assignments fairly.</p>
                            <Link href="/name-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Name Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Prize Drawings
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Pick prize winners at events, meetings, or celebrations with transparent selection.</p>
                            <Link href="/prize-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Prize Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-gray-50 md:p-5 p-4 md:rounded-xl rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Decision Making
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Pick from options when you can't decide. Let the wheel make the choice for you.</p>
                            <Link href="/decision-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Decision Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            More Picker Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/random-choice-picker", label: "Choice Picker" },
                            { href: "/wheel-spinner", label: "Wheel Spinner" },
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/team-picker", label: "Team Picker" },
                            { href: "/yes-no-wheel", label: "Yes/No Wheel" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
}
