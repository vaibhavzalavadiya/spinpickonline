import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiList } from "react-icons/fi";
import { IoOptionsOutline, IoShuffleOutline, IoSparklesOutline, IoFlashOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema, generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
    title: "Instagram Giveaway Picker – Free Comment Winner Selector",
    description: "Host fair giveaways with our random Instagram giveaway picker wheel. Paste your follower or commenter names and spin the wheel to select a random winner.",
    canonical: "/instagram-giveaway-picker",
});

// Default choice entries
const GIVEAWAY_ENTRIES = [
    { id: "1", label: "@user_one", color: "#f59e0b" },
    { id: "2", label: "@happy_scroller", color: "#ec4899" },
    { id: "3", label: "@giveaway_fan", color: "#8b5cf6" },
    { id: "4", label: "@lucky_winner22", color: "#3b82f6" },
    { id: "5", label: "@insta_guru", color: "#10b981" },
];

export default function InstagramGiveawayPickerPage() {
    const webAppSchema = generateWebApplicationSchema();
    const faqSchema = generateFAQSchema([
        {
            question: "How do I use this as an Instagram giveaway picker?",
            answer: "First, copy the list of usernames who entered your giveaway. Then, paste that list into the text box next to our wheel. Click spin, and the wheel will randomly land on the winning username!"
        },
        {
            question: "Is this giveaway picker free to use?",
            answer: "Yes, our Instagram giveaway picker wheel is 100% free with absolutely no hidden fees or account registration required."
        },
        {
            question: "How can I prove to my followers that the giveaway was fair?",
            answer: "We highly recommend screen-recording your phone or computer while you spin the wheel! A visual spinning wheel is the most transparent and trusted way to show your audience that the winner was selected completely at random."
        }
    ]);

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
            {/* Hero Section with Wheel */}
            <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-pink-50/50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:mb-12 sm:mb-8 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
                            <IoOptionsOutline className="text-lg" />
                            <span>Social Media Contests</span>
                        </div>
                        <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Instagram Giveaway Picker
                        </h1>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            Host transparent, exciting giveaways. Paste your list of entrants, screen record the spin, and instantly pick a fair, random winner!
                        </p>
                    </div>
                    <HomeWheel defaultEntries={GIVEAWAY_ENTRIES} storageKey="instagramGiveawayPickerState" />
                </div>
            </section>

            {/* Benefits */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center md:mb-8 mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Why Use Our Giveaway Picker?
                        </h2>
                        <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
                            The most transparent way to pick a winner
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-pink-200 hover:shadow-lg transition-shadow">
                            <div className="bg-pink-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoShuffleOutline className="text-xl text-pink-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Provably Fair</h3>
                            <p className="md:text-base text-sm text-gray-600">Cryptographic randomization your audience can trust. Screen record the proof.</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoSparklesOutline className="text-xl text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Visual Proof</h3>
                            <p className="md:text-base text-sm text-gray-600">Post the spinning wheel video to Stories and Reels for total transparency.</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-sky-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <IoFlashOutline className="text-xl text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">No Account Needed</h3>
                            <p className="md:text-base text-sm text-gray-600">No Instagram login or API connection required. Fully secure and private.</p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-amber-200 hover:shadow-lg transition-shadow">
                            <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <FiList className="text-xl text-amber-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Multiple Winners</h3>
                            <p className="md:text-base text-sm text-gray-600">Remove winners after each spin to easily draw 2nd and 3rd place prizes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extensive SEO Content Section */}
            <section className="py-10 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
                            The Ultimate Instagram Giveaway Picker Guide
                        </h2>

                        <div className="lg:space-y-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                Running an Instagram giveaway is one of the most effective ways to organically grow your following, increase engagement on your posts, and reward your loyal community. However, once the contest ends and you have hundreds or thousands of comments, a massive problem arises: how do you pick a winner fairly and transparently? That&apos;s where our <strong>Instagram giveaway picker</strong> comes in.
                            </p>
                            <p>
                                Our free random comment picker wheel is designed specifically for social media managers, influencers, and small businesses who need a reliable, visually appealing way to select contest winners. By using a visual spinning wheel, you can screen-record the winner selection process and post it to your Instagram Stories. This proves to your audience that the contest was 100% fair and builds immense trust for your brand.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">How to Use the Giveaway Wheel</h3>
                            <p>
                                While some paid tools require you to link your Instagram account (which can be a security risk) or pay a monthly subscription, our tool is completely free, secure, and requires no account connection. Here is the step-by-step process for using our <strong>random comment picker</strong>:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Export the Comments:</strong> Once your giveaway is over, use a free web tool to export your Instagram post comments to a spreadsheet, or simply copy the usernames of the qualified entries.</li>
                                <li><strong>Filter the Entries:</strong> Before pasting into the wheel, make sure you&apos;ve filtered out users who didn&apos;t follow the rules (e.g., people who didn&apos;t tag a friend, or people who didn&apos;t follow your account).</li>
                                <li><strong>Paste into the Wheel:</strong> Paste the final list of qualified usernames into the input box next to our wheel. The wheel will instantly update to show all the names.</li>
                                <li><strong>Screen Record:</strong> Open your phone&apos;s screen recorder (or use OBS on desktop). Start recording your screen.</li>
                                <li><strong>Spin to Win:</strong> Click the wheel to start the spin! The animation and sound effects will build suspense.</li>
                                <li><strong>Post the Video:</strong> Once the wheel stops on the winning username, stop the recording and post that video directly to your Instagram Reels or Stories!</li>
                            </ol>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Why Transparency is Crucial for Giveaways</h3>
                            <p>
                                In the early days of Instagram, many accounts ran &quot;fake giveaways.&quot; They would promise expensive prizes like iPhones or laptops, gain thousands of followers, and then either never pick a winner or secretly pick a friend. Because of this, modern social media users are highly skeptical of giveaways.
                            </p>
                            <p>
                                If you simply post a text story saying &quot;@username won the giveaway!&quot;, people might doubt you. By using a visual <strong>giveaway wheel</strong> and recording the spin, you provide irrefutable video evidence of a fair drawing. Our wheel uses a cryptographically secure random number generator (the Web Crypto API) to ensure that the outcome cannot be rigged or predicted. Every single slice on the wheel has the exact same mathematical probability of winning.
                            </p>
                            <p>
                                If you are picking a winner from a smaller, private group (like a Patreon community or a Discord server), you can also use our generalized <Link href="/name-picker" className="text-blue-600 hover:underline">Name Picker Wheel</Link> or our <Link href="/random-picker-wheel" className="text-blue-600 hover:underline">Random Picker Wheel</Link> to handle those drawings.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Best Practices for Instagram Contests</h3>
                            <p>
                                A great giveaway requires more than just a fair drawing. To ensure your contest is successful and complies with Instagram&apos;s terms of service, follow these best practices:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Clear Rules:</strong> State exactly what users must do to enter (e.g., &quot;Like this post, follow our account, and tag 2 friends&quot;). Don&apos;t make the entry requirements too difficult, or participation will drop.</li>
                                <li><strong>State the Deadline:</strong> Be extremely clear about when the giveaway ends, including the timezone (e.g., &quot;Giveaway ends Friday at 11:59 PM EST&quot;).</li>
                                <li><strong>Release of Liability:</strong> Instagram requires you to state that the giveaway is in no way sponsored, endorsed, or administered by Instagram.</li>
                                <li><strong>Beware of Scammers:</strong> Remind your followers that you will never ask them to click a link or provide credit card information to claim their prize. Scammers often create fake clone accounts and message your followers pretending they won.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Handling Multiple Winners</h3>
                            <p>
                                What if your giveaway has three prizes (e.g., a 1st place grand prize, and two runner-up prizes)? Our wheel handles this perfectly!
                            </p>
                            <p>
                                Simply paste all the names into the wheel and spin it for the 1st place winner. Once the winner is announced, use the &quot;Remove&quot; button that pops up. This deletes the winner from the list so they cannot win twice. Then, spin the wheel again for the 2nd place winner, remove them, and spin a final time for the 3rd place winner. This elimination method is visually exciting and very easy for your audience to follow.
                            </p>
                            <p>
                                If you need to randomly split a massive list of entrants into different prize tiers or brackets, you might find our <Link href="/random-group-generator" className="text-blue-600 hover:underline">Random Group Generator</Link> incredibly useful!
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Beyond Instagram: YouTube, TikTok, and Twitter</h3>
                            <p>
                                While we call this the Instagram giveaway picker, it works flawlessly for <em>any</em> social media platform.
                            </p>
                            <p>
                                If you are a Twitch streamer or a YouTuber, you can capture this web page in OBS (Open Broadcaster Software) and spin the wheel live on stream to give away Steam keys or merchandise. The wheel is completely responsive, so it scales perfectly into a 16:9 stream layout.
                            </p>
                            <p>
                                If you&apos;re running a Twitter (X) retweet contest, just paste the Twitter handles into the wheel. If you ever find yourself needing a simple 50/50 decision (like &quot;Should we do a giveaway today?&quot;), don&apos;t forget we have a <Link href="/flip-a-coin" className="text-blue-600 hover:underline">Flip a Coin</Link> tool and a <Link href="/yes-no-wheel" className="text-blue-600 hover:underline">Yes/No Wheel</Link> for rapid decision making.
                            </p>
                            <p>
                                Stop stressing over how to pick a winner. Paste your list, spin the wheel, and celebrate with your community today!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-10 lg:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            More Giveaway Tools
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { href: "/name-picker", label: "Name Picker" },
                            { href: "/random-picker-wheel", label: "Random Picker" },
                            { href: "/random-group-generator", label: "Group Generator" },
                            { href: "/flip-a-coin", label: "Flip a Coin" },
                            { href: "/randomizer-wheel", label: "Randomizer Wheel" },
                            { href: "/team-name-generator", label: "Team Names" },
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
