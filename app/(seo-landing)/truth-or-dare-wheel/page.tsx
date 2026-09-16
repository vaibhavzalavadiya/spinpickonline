import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiHelpCircle } from "react-icons/fi";
import { IoFlashOutline, IoHeartOutline, IoPeopleOutline, IoShuffleOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema, generateMetadata, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generateMetadata({
    title: "Truth or Dare Wheel – Free Spin the Wheel Game Online",
    description: "Spin the truth or dare wheel for instant fun! Free online truth or dare spinner for parties, sleepovers, and game nights. No app needed. Play instantly!",
    canonical: "/truth-or-dare-wheel",
});

const TRUTH_OR_DARE_ENTRIES = [
    { id: "1", label: "Truth 🤔", color: "#3b82f6" },
    { id: "2", label: "Dare 🔥", color: "#ef4444" },
    { id: "3", label: "Truth 💬", color: "#6366f1" },
    { id: "4", label: "Dare 💪", color: "#f97316" },
    { id: "5", label: "Truth 👀", color: "#8b5cf6" },
    { id: "6", label: "Dare 🎭", color: "#ec4899" },
];

export default function TruthOrDareWheelPage() {
    const webAppSchema = generateWebApplicationSchema({
        name: "Truth or Dare Wheel",
        url: `${SITE_CONFIG.url}/truth-or-dare-wheel`,
        description: "Free online truth or dare spinner wheel for parties and game nights.",
        featureList: "Truth or dare spinner, Random truth or dare, Party game wheel, Sleepover games, Game night spinner, Custom truth or dare",
    });
    const faqSchema = generateFAQSchema([
        {
            question: "How does the truth or dare wheel work?",
            answer: "Simply spin the wheel and it will randomly land on either Truth or Dare. If it lands on Truth, the player must answer a question honestly. If it lands on Dare, the player must complete a challenge. Our wheel uses cryptographically secure randomization for completely fair results."
        },
        {
            question: "Can I customize the truth or dare wheel with my own options?",
            answer: "Yes! While the wheel comes pre-loaded with Truth and Dare segments, you can fully customize it. Add specific truths, dares, or even mix in options like 'Double Dare', 'Truth Bomb', or 'Pass' to make the game more exciting."
        },
        {
            question: "Is the truth or dare wheel free to use?",
            answer: "Absolutely! Our truth or dare spinner is 100% free with no signup, no downloads, and no limits. Play as many rounds as you want on any device – phone, tablet, or computer."
        },
        {
            question: "What age group is this truth or dare wheel suitable for?",
            answer: "The wheel itself is suitable for all ages. You control what truths and dares are used. For kids' parties, use age-appropriate questions. For adult game nights, you can customize with more challenging options. The tool is just the spinner – the content is up to you!"
        },
        {
            question: "Can I use this for virtual parties and video calls?",
            answer: "Yes! Our truth or dare wheel works perfectly for virtual game nights. Just share your screen on Zoom, Google Meet, or Discord, and everyone can watch the wheel spin in real time. You can also share a link to your custom wheel so everyone can spin on their own device."
        }
    ]);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: SITE_CONFIG.url },
        { name: "Truth or Dare Wheel", item: `${SITE_CONFIG.url}/truth-or-dare-wheel` },
    ]);
    const howToSchema = generateHowToSchema({
        name: "How to Play Truth or Dare with a Spinner Wheel",
        description: "Use our free truth or dare wheel to play the classic party game instantly.",
        steps: [
            { name: "Gather Your Players", text: "Get your friends, family, or party guests together in person or on a video call.", position: 1 },
            { name: "Spin the Wheel", text: "Click the Spin button and watch the truth or dare wheel spin. It will randomly land on Truth or Dare.", position: 2 },
            { name: "Complete the Challenge", text: "If it lands on Truth, answer a question honestly. If it lands on Dare, complete the challenge. Then pass to the next player!", position: 3 },
        ],
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            {/* Hero Section with Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-pink-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Truth or Dare Wheel – Free Party Game
                        </h1>
                    </div>
                    <HomeWheel defaultEntries={TRUTH_OR_DARE_ENTRIES} storageKey="truthOrDareWheelState" />
                </div>
            </section>

            {/* Why Truth or Dare Wheel */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use a Truth or Dare Spinner?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Take the classic party game to the next level with a digital spin
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-pink-200 hover:shadow-lg transition-shadow">
                            <div className="bg-pink-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShuffleOutline className="text-xl text-pink-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">No Repeats</h3>
                            <p className="md:text-base text-sm text-gray-600">The wheel adds variety and randomness. No one can game the system or always pick the same thing.</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoFlashOutline className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Instant Fun</h3>
                            <p className="md:text-base text-sm text-gray-600">No cards, no boards, no setup. Open the page, spin, and start playing in seconds on any device.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoPeopleOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Any Group Size</h3>
                            <p className="md:text-base text-sm text-gray-600">Works with 2 players or 20. Perfect for intimate hangouts or large party gatherings alike.</p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow">
                            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoHeartOutline className="text-xl text-orange-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Build Connections</h3>
                            <p className="md:text-base text-sm text-gray-600">Truth questions spark deep conversations. Dares create hilarious shared memories with friends.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Truth or Dare Ideas */}
            <section className="py-10 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Truth or Dare Ideas to Get You Started
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-5xl mx-auto">
                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg shadow-sm border border-blue-100">
                            <h3 className="font-bold text-blue-700 mb-4 text-lg flex items-center gap-2">🤔 Truth Questions</h3>
                            <ul className="space-y-2 md:text-base text-sm text-gray-700">
                                <li>• What&apos;s the most embarrassing thing you&apos;ve done?</li>
                                <li>• Who was your first crush?</li>
                                <li>• What&apos;s a secret talent nobody knows about?</li>
                                <li>• What&apos;s the last lie you told?</li>
                                <li>• If you could swap lives with someone for a day, who?</li>
                                <li>• What&apos;s your guilty pleasure TV show?</li>
                                <li>• Have you ever pretended to like a gift you hated?</li>
                            </ul>
                        </div>

                        <div className="bg-white md:p-6 p-4 md:rounded-xl rounded-lg shadow-sm border border-red-100">
                            <h3 className="font-bold text-red-700 mb-4 text-lg flex items-center gap-2">🔥 Dare Challenges</h3>
                            <ul className="space-y-2 md:text-base text-sm text-gray-700">
                                <li>• Do your best celebrity impression for 30 seconds</li>
                                <li>• Let someone post anything on your social media</li>
                                <li>• Sing the chorus of the last song you listened to</li>
                                <li>• Keep a straight face while others try to make you laugh</li>
                                <li>• Do 10 push-ups right now</li>
                                <li>• Talk in an accent for the next 3 rounds</li>
                                <li>• Send a funny selfie to the 5th contact in your phone</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Occasions to Play */}
            <section className="py-8 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Perfect Occasions for Truth or Dare
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 max-w-5xl mx-auto">
                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🎉 House Parties</h3>
                            <p className="md:text-base text-sm text-gray-600">Break the ice at any gathering. The truth or dare wheel gets everyone laughing and talking within minutes, even guests who don&apos;t know each other well.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🌙 Sleepovers</h3>
                            <p className="md:text-base text-sm text-gray-600">The ultimate sleepover activity for kids, teens, and adults. Spin the wheel instead of arguing about who picks truth or dare next.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">💻 Virtual Game Nights</h3>
                            <p className="md:text-base text-sm text-gray-600">Share your screen on Zoom, Discord, or Google Meet. Everyone watches the spinner wheel in real time – perfect for remote friend groups.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🏕️ Road Trips & Camping</h3>
                            <p className="md:text-base text-sm text-gray-600">No Wi-Fi? No problem. Load the wheel once and it works offline. Pass the phone around the campfire for hours of entertainment.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">💑 Date Nights</h3>
                            <p className="md:text-base text-sm text-gray-600">Spice up date night with couples-edition truths and dares. Learn surprising things about your partner and create unforgettable memories together.</p>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">🏢 Team Building</h3>
                            <p className="md:text-base text-sm text-gray-600">Use work-appropriate truths and dares to help coworkers bond. Great for onboarding events, offsites, and Friday afternoon team activities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extensive SEO Content */}
            <section className="py-10 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
                            The Complete Guide to Truth or Dare Wheel Games
                        </h2>

                        <div className="lg:space-y-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                Truth or Dare is one of the most iconic party games in the world, played by millions of people across every culture and age group. The premise is beautifully simple: a player chooses between answering a personal question honestly (<strong>truth</strong>) or completing a fun challenge (<strong>dare</strong>). What makes our <strong>truth or dare wheel</strong> special is that it removes the choice entirely – the wheel decides for you, adding an extra layer of suspense and excitement to every round.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">The History of Truth or Dare</h3>
                            <p>
                                The origins of truth or dare can be traced back centuries. Early versions of the game were played in ancient Greece, where participants would answer philosophical questions or face physical challenges as forfeits. The modern version of truth or dare became popular in the 1700s as a parlor game called &quot;Questions and Commands.&quot; Players who refused to answer a question truthfully or failed to follow a command had to pay a forfeit, often something embarrassing or funny.
                            </p>
                            <p>
                                Today, truth or dare has evolved into a staple of teenage sleepovers, college parties, and even corporate team-building events. Our digital <strong>truth or dare spinner</strong> brings the classic game into the modern era, making it easier than ever to play anywhere – whether you&apos;re sitting around a campfire, on a video call, or at a birthday party. Instead of going around the circle and letting each person choose, the <Link href="/random-picker-wheel" className="text-blue-600 hover:underline">random picker wheel</Link> adds true randomness that makes the game feel more fair and exciting.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">How to Customize Your Truth or Dare Wheel</h3>
                            <p>
                                While our default wheel alternates between Truth and Dare segments, the real fun begins when you customize it. Here are some creative ways to modify the spinner for different groups and occasions:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Add &quot;Double Dare&quot;:</strong> A dare so extreme that the player can pass it to someone else – but the next person can&apos;t refuse!</li>
                                <li><strong>Include &quot;Group Dare&quot;:</strong> Everyone has to do the dare together. Great for getting the whole party involved.</li>
                                <li><strong>Add a &quot;Pass&quot; Option:</strong> Give players a safety net with one or two &quot;free pass&quot; segments on the wheel. Use sparingly to keep the game challenging.</li>
                                <li><strong>Mix in &quot;Confess&quot;:</strong> A hybrid between truth and dare where a player has to confess something specific (e.g., &quot;Confess your most unpopular opinion&quot;).</li>
                                <li><strong>Add &quot;Drink&quot; or &quot;Skip&quot;:</strong> For adult game nights, you can add a segment where the player takes a sip of their beverage instead of answering or performing.</li>
                            </ul>
                            <p>
                                To customize, simply edit the entries in the panel next to the wheel. You can change labels, add new segments, remove ones you don&apos;t want, and even pick different colors for each slice. If you want to save your custom truth or dare wheel for future games, your configuration is automatically saved in your browser.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Tips for a Great Truth or Dare Session</h3>
                            <p>
                                Whether you&apos;re playing with close friends or acquaintances, these tips will help ensure everyone has a great time:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Set boundaries first:</strong> Before playing, agree on what topics are off-limits and what types of dares are too extreme. Everyone should feel comfortable and safe.</li>
                                <li><strong>Know your audience:</strong> Tailor the truths and dares to the group. Kids&apos; parties should have silly, age-appropriate questions. Adult game nights can push boundaries more.</li>
                                <li><strong>Keep it moving:</strong> Don&apos;t let one person deliberate for 5 minutes. Set a timer – answer the truth in 30 seconds or complete the dare in 60 seconds.</li>
                                <li><strong>Escalate gradually:</strong> Start with easy, lighthearted truths and dares. As the game progresses, gradually increase the intensity to keep things exciting.</li>
                                <li><strong>Respect &quot;No&quot;:</strong> If someone genuinely doesn&apos;t want to answer or do something, let them spin again. The goal is fun, not discomfort.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Truth or Dare Wheel vs. Other Party Games</h3>
                            <p>
                                Truth or dare stands out because it combines two types of entertainment: personal revelation (truth) and physical comedy (dare). Unlike static card games like &quot;Never Have I Ever,&quot; the truth or dare wheel adds visual excitement and genuine suspense. Will it land on truth? Or will fate challenge you to a dare? The spinning animation keeps everyone on the edge of their seat.
                            </p>
                            <p>
                                If you enjoy the interactive element of our truth or dare spinner, you might also love our other party-friendly tools. Our <Link href="/yes-no-wheel" className="text-blue-600 hover:underline">Yes or No Wheel</Link> is perfect for quick binary decisions during games. The <Link href="/name-picker" className="text-blue-600 hover:underline">Random Name Picker</Link> can determine who goes first or who has to answer next. And for choosing what activity to do next at your party, our <Link href="/decision-wheel" className="text-blue-600 hover:underline">Decision Wheel</Link> lets you add any options and spin to choose.
                            </p>

                            <div className="mt-8 p-4 sm:p-6 bg-pink-50 rounded-xl md:rounded-2xl border border-pink-200">
                                <h4 className="font-bold text-pink-900 mb-2">Pro Tip for Game Hosts 🎯</h4>
                                <p className="text-pink-800 text-sm">
                                    Create two separate wheels: one with player names using our <Link href="/name-picker" className="text-blue-600 hover:underline">Name Picker</Link> to determine whose turn it is, and this truth or dare wheel to determine what they have to do. This double-wheel system adds maximum randomness and prevents any player from always choosing the easier option!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Pages */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            More Party & Game Tools
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 max-w-4xl mx-auto">
                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Yes/No Wheel
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Quick binary decisions. Should we play another round? Let the wheel decide!</p>
                            <Link href="/yes-no-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Yes/No Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Name Picker
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Randomly pick whose turn it is. Add all player names and spin to select.</p>
                            <Link href="/name-picker" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Name Picker <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Decision Wheel
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Can&apos;t decide what game to play next? Add options and let the wheel choose.</p>
                            <Link href="/decision-wheel" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Decision Wheel <FiArrowRight className="text-xs" />
                            </Link>
                        </div>

                        <div className="bg-white md:p-5 p-4 md:rounded-xl rounded-lg border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <FiCheck className="text-green-500" /> Flip a Coin
                            </h3>
                            <p className="md:text-base text-sm text-gray-600 mb-3">Need a quick heads or tails? Our 3D coin flipper is perfect for 50/50 decisions.</p>
                            <Link href="/flip-a-coin" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                Flip a Coin <FiArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-8 lg:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            Explore More Wheels
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/spin-wheel-for-giveaway", label: "Giveaway Wheel" },
                            { href: "/wheel-of-names", label: "Wheel of Names" },
                            { href: "/lucky-draw-wheel", label: "Lucky Draw" },
                            { href: "/team-picker", label: "Team Picker" },
                            { href: "/prize-wheel", label: "Prize Wheel" },
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

            {/* FAQ Section */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Truth or Dare Wheel FAQ</h2>
                        <div className="space-y-4">
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">How does the truth or dare wheel work?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Simply spin the wheel and it will randomly land on either Truth or Dare. If it lands on Truth, the player must answer a question honestly. If it lands on Dare, the player must complete a challenge. Our wheel uses cryptographically secure randomization for completely fair results.
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Can I customize the truth or dare wheel?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Yes! While the wheel comes pre-loaded with Truth and Dare segments, you can fully customize it. Add specific truths, dares, or mix in options like &quot;Double Dare&quot;, &quot;Truth Bomb&quot;, or &quot;Pass&quot; to make the game more exciting.
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Is the truth or dare wheel free to use?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Absolutely! Our truth or dare spinner is 100% free with no signup, no downloads, and no limits. Play as many rounds as you want on any device – phone, tablet, or computer.
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">What age group is this suitable for?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    The wheel itself is suitable for all ages. You control what truths and dares are used. For kids&apos; parties, use age-appropriate questions. For adult game nights, customize with more challenging options. The tool is just the spinner – the content is up to you!
                                </p>
                            </details>
                            <details className="group bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
                                <summary className="flex items-center gap-3 cursor-pointer list-none">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                                    <span className="text-sm md:text-base font-bold text-gray-900 flex-1">Can I use this for virtual parties?</span>
                                </summary>
                                <p className="text-sm md:text-base text-gray-600 mt-3 ml-9 leading-relaxed">
                                    Yes! Our truth or dare wheel works perfectly for virtual game nights. Just share your screen on Zoom, Google Meet, or Discord, and everyone can watch the wheel spin in real time. You can also share a link to your custom wheel so everyone can spin on their own device.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
}
