import { Metadata } from "next";
import { generateMetadata, generateWebApplicationSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import CoinFlip from "@/components/CoinFlip";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiList } from "react-icons/fi";
import { IoShuffleOutline, IoSparklesOutline, IoFlashOutline } from "react-icons/io5";
import { FiShield, FiTrendingUp } from "react-icons/fi";

export const metadata: Metadata = generateMetadata({
  title: "Flip a Coin Online – Free Coin Toss | Heads or Tails",
  description: "Flip a coin instantly with our free online coin toss. Fair, random 3D coin flipper for heads or tails. No signup needed. Perfect for quick decisions.",
  canonical: "/flip-a-coin",
});

export default function FlipACoinPage() {
  const applicationSchema = generateWebApplicationSchema();

  const faqSchema = generateFAQSchema([
    {
      question: "Is this online coin flip truly random?",
      answer: "Yes! Our coin flipper uses cryptographically secure random number generation (Web Crypto API) to ensure a perfectly fair 50/50 split between heads and tails, just like a real coin toss."
    },
    {
      question: "How do I flip the coin?",
      answer: "It's simple: just tap the coin, click the 'FLIP COIN' button, or press the Spacebar on your keyboard. The coin will flip in 3D and land on either heads or tails."
    },
    {
      question: "Does it track my flip history?",
      answer: "Yes, our coin toss simulator automatically tracks your current session's statistics, showing you the total number of flips, how many were heads vs tails, and your recent flip history."
    },
    {
      question: "Can I use this for sports coin tosses?",
      answer: "Absolutely. Many users use our digital coin flipper for football, basketball, or casual sports when they don't have a physical coin handy. It's fast, fair, and works perfectly on mobile devices."
    }
  ]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: SITE_CONFIG.url },
    { name: "Flip a Coin", item: `${SITE_CONFIG.url}/flip-a-coin` },
  ]);

  const howToSchema = generateHowToSchema({
    name: "How to Flip a Coin Online",
    description: "Get an instant heads or tails result using our free coin toss simulator.",
    steps: [
      { name: "Tap to Flip", text: "Click the coin, press the Flip button, or hit Spacebar to start the toss.", position: 1 },
      { name: "Wait for the Toss", text: "Watch the 3D coin flip animation in the air.", position: 2 },
      { name: "See Your Result", text: "The coin lands on Heads or Tails, and your session stats update automatically.", position: 3 },
    ],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationSchema) }}
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

      {/* Hero Section */}
      <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center lg:mb-12 sm:mb-8 mb-5">
            <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flip a Coin – Free Online Coin Toss
            </h1>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl shadow-amber-900/5 border border-gray-100 p-4 sm:p-10">
            <CoinFlip />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center md:mb-8 mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Why Use Our Online Coin Flipper?
            </h2>
            <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
              The fastest, fairest digital coin toss on the internet
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-amber-200 hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <FiShield className="text-xl text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Truly Random</h3>
              <p className="md:text-base text-sm text-gray-600">Web Crypto API ensures perfect 50/50 probability. No bias, completely fair every time.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-sky-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <FiTrendingUp className="text-xl text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Stat Tracking</h3>
              <p className="md:text-base text-sm text-gray-600">Live heads vs tails ratio tracking and full flip history in your session.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-emerald-200 hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <IoSparklesOutline className="text-xl text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3D Animation</h3>
              <p className="md:text-base text-sm text-gray-600">Watch the coin flip in realistic 3D. Builds suspense before revealing your result.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <IoFlashOutline className="text-xl text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Multiple Inputs</h3>
              <p className="md:text-base text-sm text-gray-600">Tap the coin, click the button, or press Spacebar. Works on mobile and desktop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extensive SEO Content Section */}
      <section className="py-10 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
              The Ultimate Guide to Online Coin Flipping
            </h2>

            <div className="lg:space-y-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Whether you need to break a tie, make a quick decision, or decide who gets the ball first in a sports game, our <strong>online coin toss</strong> is the perfect tool. You no longer need a physical quarter in your pocket when you have a digital <strong>coin flipper</strong> right on your smartphone. Over the centuries, flipping a coin—also known as heads or tails—has been the universally accepted method for settling disputes and making fair 50/50 decisions. Today, our free digital coin flip simulator brings that ancient tradition into the modern era with stunning 3D graphics and mathematically proven fairness.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Why Use Our Heads or Tails Simulator?</h3>
              <p>
                Many people wonder if an online <strong>heads or tails</strong> generator is truly random. Unlike simple randomizer scripts that can have hidden biases based on system time, our coin flip tool uses the highly advanced <code>Web Crypto API</code>. This ensures that every single toss has exactly a 50% chance of landing on Heads and a 50% chance of landing on Tails.
              </p>
              <p>
                Furthermore, we built this tool with the user experience in mind. We've noticed that other coin flip websites are cluttered with ads or require you to click tiny buttons. Our interface is designed to be completely frictionless. You can click the coin, tap the large button, or even just smack the <strong>Spacebar</strong> on your keyboard to instantly trigger a coin flip. The fluid 3D animation builds just the right amount of suspense before revealing your fate.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Common Use Cases for a Coin Toss</h3>
              <p>
                A simple two-sided coin is incredibly versatile. Here are some of the most common ways our users utilize this heads or tails generator:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Sports and Athletics:</strong> From the Super Bowl to local pickup basketball games, a coin toss determines who gets possession of the ball first or which side of the field a team defends. If you forgot your referee coin, this digital app works perfectly.</li>
                <li><strong>Resolving Arguments:</strong> Can't decide who has to take out the trash or who gets to sit in the front seat? Leave it up to chance. It's the ultimate neutral arbitrator.</li>
                <li><strong>Gaming and Board Games:</strong> Many tabletop RPGs (like Dungeons &amp; Dragons) and trading card games (like Pokémon TCG) require frequent coin flips. If you don't have physical dice or coins, you can also use our <Link href="/random-number-wheel/1-6" className="text-blue-600 hover:underline">1-6 Number Wheel</Link> as a digital dice roller.</li>
                <li><strong>Financial Decisions:</strong> While we don't recommend making major investment choices based on a coin flip, many behavioral economists study the "coin flip test"—if you flip a coin to make a decision and feel disappointed by the result, it reveals what you actually wanted to do all along!</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">When to Use a Coin Flip vs. Other Randomizers</h3>
              <p>
                A coin flip is strictly for binary, 50/50 decisions. It gives you exactly two options: Heads or Tails. However, life is rarely just about two choices. If you find yourself needing to decide between three, four, or fifty different options, you will need a more robust tool.
              </p>
              <p>
                For example, if you are trying to decide where to eat dinner and have five different restaurants in mind, a coin flip won't help you. Instead, you should use our <Link href="/food-picker-wheel" className="text-blue-600 hover:underline">Food Picker Wheel</Link>, which is specifically designed to handle multiple culinary options.
              </p>
              <p>
                Similarly, if you are a teacher trying to randomly call on one student out of a class of 30, a coin toss is useless. For that scenario, we highly recommend our <Link href="/name-picker" className="text-blue-600 hover:underline">Random Name Picker</Link>. You simply paste your entire class roster into the tool, and the wheel will randomly select one student for you. If you just need a straightforward "Yes" or "No" answer to a burning question but want the visual excitement of a spinning wheel rather than a coin, our <Link href="/yes-no-wheel" className="text-blue-600 hover:underline">Yes/No Wheel</Link> is the perfect alternative.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">The Mathematics of Flipping a Coin</h3>
              <p>
                The probability of a fair coin landing on heads is exactly 0.5 (or 50%). The probability of it landing on tails is also 0.5. However, this is a theoretical probability. In the real world, physical coins are not perfectly balanced. The side with the head is often slightly heavier due to the raised engraving, which can minutely skew the results over thousands of flips. Furthermore, Stanford researchers have proven that a physical coin is slightly more likely to land on the same face it started on before it was flipped (a 51% bias).
              </p>
              <p>
                Because our digital <strong>coin flipper</strong> relies on algorithmic randomization, it completely eliminates these physical biases. It doesn't matter what face the coin starts on, and there is no physical weight disparity. The digital coin toss is actually <em>more</em> fair than flipping a physical quarter!
              </p>
              <p>
                This is also why we included a <strong>Session Stats</strong> tracker directly below the coin. As you flip, you can watch the law of large numbers in action. If you flip the coin 10 times, you might get 7 Heads and 3 Tails. But if you sit there and flip it 1,000 times, you will see the ratio converge closer and closer to a perfect 50/50 split.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Explore More Randomization Tools</h3>
              <p>
                We are obsessed with fair randomization and helping people make decisions easily. If you enjoyed using our heads or tails simulator, we have an entire suite of free tools designed to help you randomize anything:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong><Link href="/randomizer-wheel" className="text-blue-600 hover:underline">The Ultimate Randomizer Wheel</Link>:</strong> A blank canvas where you can input anything—names, numbers, chores, or prizes—and spin the wheel to select a winner.
                </li>
                <li>
                  <strong><Link href="/team-name-generator" className="text-blue-600 hover:underline">Team Name Generator</Link>:</strong> Need a funny or clever name for your trivia team or fantasy football league? Spin this specialized wheel to get instant inspiration.
                </li>
                <li>
                  <strong><Link href="/random-group-generator" className="text-blue-600 hover:underline">Random Group Generator</Link>:</strong> The easiest way to split a large list of people into smaller, randomized teams or groups. Ideal for teachers, camp counselors, and corporate team-building events.
                </li>
                <li>
                  <strong><Link href="/instagram-giveaway-picker" className="text-blue-600 hover:underline">Instagram Giveaway Picker</Link>:</strong> Running a contest on social media? Paste the usernames of everyone who commented, and spin the wheel on camera to prove to your followers that you picked the winner fairly.
                </li>
              </ul>

              <div className="mt-8 p-4 sm:p-6 bg-amber-50 rounded-xl md:rounded-2xl border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-2">Did You Know?</h4>
                <p className="text-amber-800 text-sm">
                  The practice of flipping coins to make decisions dates back to the Roman Empire! Back then, it was known as &quot;navia aut caput&quot; (ship or head), because some coins featured a ship&apos;s prow on one side and the head of the emperor on the other. If the coin landed on the emperor&apos;s head, it was believed to be an expression of the divine will of the gods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              More Decision Tools
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/yes-no-wheel", label: "Yes/No Wheel" },
              { href: "/decision-wheel", label: "Decision Wheel" },
              { href: "/random-picker-wheel", label: "Random Picker" },
              { href: "/food-picker-wheel", label: "Food Picker" },
              { href: "/randomizer-wheel", label: "Randomizer Wheel" },
              { href: "/random-number-wheel", label: "Number Wheel" },
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
