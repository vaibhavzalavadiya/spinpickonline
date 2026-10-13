import { Metadata } from "next";
import BottleSpinner from "@/components/BottleSpinner";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { IoFlashOutline, IoSparklesOutline, IoPeopleOutline, IoWineOutline, IoHeartOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema, generateMetadata, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generateMetadata({
    title: "Spin the Bottle Online – Free Virtual Party Game",
    description: "Play spin the bottle online for free! Interactive spinner for party games, truth or dare, kisses, and friend groups. No real bottle needed. Spin now!",
    canonical: "/spin-the-bottle",
});

export default function SpinTheBottlePage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "Spin the Bottle Online",
        url: `${SITE_CONFIG.url}/spin-the-bottle`,
        description: "Free online Spin the Bottle virtual party game. Fair, fun, and easy for parties, game nights, and virtual meetups.",
        featureList: "Spin the bottle online, Virtual bottle spinner, Party game picker, Truth or dare bottle, Friend selector",
    });

    const faqSchema = generateFAQSchema([
        {
            question: "How do you play Spin the Bottle online?",
            answer: "Sit your players in a circle or join a video call. Type all players' names into the wheel entries (or use Player 1-8). Take turns clicking Spin. Whoever the pointer lands on is selected for the turn's prompt, dare, or kiss!",
        },
        {
            question: "Can I customize the player names on the bottle spinner?",
            answer: "Yes! Click the entries list on the right (or below on mobile) and type in the real names of your friends. You can add as many players as you like, change colors, or add emojis.",
        },
        {
            question: "Is this online bottle spinner truly random?",
            answer: "Yes. Our tool uses the Web Crypto API for cryptographically secure pseudo-random generation. Every participant in the circle has an exactly equal statistical probability of being selected.",
        },
        {
            question: "Can we play Spin the Bottle over Zoom, Discord, or FaceTime?",
            answer: "Absolutely! Simply share your screen on your video call app so everyone can see the wheel spin in real time. It's the most popular way to host virtual party games.",
        },
        {
            question: "Is this Spin the Bottle tool free?",
            answer: "Yes, it is 100% free with no account creation, no subscriptions, and no downloads required.",
        },
    ]);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Spin the Bottle", item: `${SITE_CONFIG.url}/spin-the-bottle` },
    ]);

    const howToSchema = generateHowToSchema({
        name: "How to Play Virtual Spin the Bottle",
        description: "Quick steps to play a safe, fun game of Spin the Bottle with friends using a virtual browser spinner.",
        steps: [
            { name: "Add Player Names", text: "Enter each participant's name into the wheel entries list so everyone is represented.", position: 1 },
            { name: "Establish the House Rules", text: "Agree whether the chosen player does a Truth, a Dare, a Compliment, or a silly challenge before each spin.", position: 2 },
            { name: "Spin and Play", text: "Tap Spin! The needle selects the target player fairly. Laugh, complete the action, and pass to the next host.", position: 3 },
        ],
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

            {/* Hero + Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-rose-50/60 to-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Spin the Bottle Online
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The classic party game, reimagined for the digital age. Add your friends&apos; names, tap spin, and see who fate chooses next! No glass bottle or floor space required.
                        </p>
                    </div>
                    <BottleSpinner />
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-10 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Play Spin the Bottle Online?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Modern convenience meets classic party excitement.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        {[
                            { icon: <IoShieldCheckmarkOutline className="text-xl text-rose-600" />, bg: "from-rose-50 to-pink-50", border: "border-rose-200", ibg: "bg-rose-100", title: "100% Unbiased & Fair", desc: "Real glass bottles can wobble or land on slanted floors. Our cryptographic spinner guarantees completely equal odds." },
                            { icon: <IoPeopleOutline className="text-xl text-blue-600" />, bg: "from-blue-50 to-indigo-50", border: "border-blue-200", ibg: "bg-blue-100", title: "Video Call Friendly", desc: "Long-distance friends or college roommates studying abroad? Play across Zoom, Discord, or FaceTime easily." },
                            { icon: <IoFlashOutline className="text-xl text-amber-600" />, bg: "from-amber-50 to-yellow-50", border: "border-amber-200", ibg: "bg-amber-100", title: "No Broken Glass", desc: "No need to look for an empty soda or glass bottle that might scratch tabletops or break on the floor." },
                            { icon: <IoSparklesOutline className="text-xl text-purple-600" />, bg: "from-purple-50 to-violet-50", border: "border-purple-200", ibg: "bg-purple-100", title: "Customizable Rules", desc: "Switch from players' names to custom dares, actions, questions, or drinking rules in seconds." },
                        ].map((c, i) => (
                            <div key={i} className={`bg-gradient-to-br ${c.bg} md:p-5 p-4 md:rounded-xl rounded-lg border-2 ${c.border} hover:shadow-lg transition-shadow`}>
                                <div className={`${c.ibg} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>{c.icon}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Game Modes & Variations */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                        Popular Spin the Bottle Game Variations
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg text-rose-700 mb-3 flex items-center gap-2">
                                💋 The Classic Party Mode
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                The traditional teen party game. The spinner sits in the center. Whoever spins must hug, high-five, or kiss the cheek of whoever the needle lands on!
                            </p>
                            <span className="text-xs bg-rose-50 text-rose-700 font-semibold px-2.5 py-1 rounded-full">Best for: Close Friends</span>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg text-indigo-700 mb-3 flex items-center gap-2">
                                🔥 Truth or Dare Bottle
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Combine two legendary games! The bottle chooses who must answer a juicy truth question or perform an outrageous dare given by the group.
                            </p>
                            <span className="text-xs bg-indigo-50 text-indigo-700 font-semibold px-2.5 py-1 rounded-full">Best for: Sleepovers & Dorms</span>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg text-emerald-700 mb-3 flex items-center gap-2">
                                🍕 The Chore or Bill Decider
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Eating dinner at a restaurant with friends and can&apos;t agree on who pays for dessert or drinks? Spin the bottle to make a fair, hilarious decision!
                            </p>
                            <span className="text-xs bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-full">Best for: Dinners & Roommates</span>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg text-amber-700 mb-3 flex items-center gap-2">
                                🎯 Compliment & Icebreaker
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                A wholesome party variation where whoever is picked must receive a genuine, heartwarming compliment from the person who spun the wheel.
                            </p>
                            <span className="text-xs bg-amber-50 text-amber-700 font-semibold px-2.5 py-1 rounded-full">Best for: Team Building</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Article Guide */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl space-y-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
                        Rules, History, and Safe Party Etiquette
                    </h2>

                    <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            <strong>Spin the Bottle</strong> first gained widespread popularity in North America during the 1920s and remains a staple of pop culture, movies, and teenage lore. In traditional games, players sit in a circle around an empty glass bottle. One player spins the bottle, and when it stops, its neck points to another player.
                        </p>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            Golden Rule of Modern Party Games: Consent & Comfort
                        </h3>
                        <p>
                            The best party games are the ones where everyone feels comfortable and respected. We strongly encourage all party hosts to implement the <strong>&ldquo;Free Pass&rdquo; rule</strong>:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Every player has 1 or 2 Free Passes per night that they can use on any spin with zero questions asked or penalties.</li>
                            <li>Never pressure anyone into romantic gestures, dares, or disclosures they are uncomfortable with.</li>
                            <li>You can easily substitute any dare with a funny dance, joke, or silly impression.</li>
                        </ul>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-2">
                            Need More Party Inspiration?
                        </h3>
                        <p>
                            Keep the momentum going by switching between different games! Try our{" "}
                            <Link href="/would-you-rather-wheel" className="text-rose-600 hover:underline font-medium">
                                Would You Rather Wheel
                            </Link>{" "}
                            for hilarious debate dilemmas, or check out our{" "}
                            <Link href="/truth-or-dare-wheel" className="text-rose-600 hover:underline font-medium">
                                Truth or Dare Wheel
                            </Link>{" "}
                            for premade questions.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-8 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-3">
                        {[
                            { q: "How many players can join the online bottle spin?", a: "You can add from 2 up to 100+ players! The wheel slices automatically adjust to fit all participant names cleanly.", color: "bg-rose-500" },
                            { q: "Does the bottle spinner work on iPhone and Android?", a: "Yes! It is fully responsive and optimized for mobile screens. You don't need to install any app from the App Store or Play Store.", color: "bg-blue-500" },
                            { q: "Can I remove a player after they've been chosen?", a: "Yes. Once the spinner stops on a winner, a popup gives you the option to 'Remove Winner' so each person is only picked once.", color: "bg-emerald-500" },
                            { q: "Can we use this for drinking games?", a: "Yes, many adult groups use the spinner to assign funny party tasks, drinks, or dares. Always remember to drink responsibly!", color: "bg-amber-500" },
                        ].map((item, i) => (
                            <details key={i} className="group bg-white rounded-xl p-4 md:p-5 border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className={`flex-shrink-0 w-6 h-6 rounded-full ${item.color} text-white text-xs font-bold flex items-center justify-center`}>Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">{item.q}</span>
                                </summary>
                                <p className="text-sm text-gray-600 mt-3 ml-9 leading-relaxed">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Tools */}
            <section className="py-10 lg:py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            Explore More Party & Game Wheels
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/would-you-rather-wheel", label: "Would You Rather Wheel" },
                            { href: "/truth-or-dare-wheel", label: "Truth or Dare Wheel" },
                            { href: "/lucky-spin", label: "Lucky Spin Wheel" },
                            { href: "/dice-roller", label: "Dice Roller" },
                            { href: "/flip-a-coin", label: "Flip a Coin" },
                            { href: "/random-picker-wheel", label: "Random Picker Wheel" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-rose-300 hover:text-rose-600 transition-all"
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
