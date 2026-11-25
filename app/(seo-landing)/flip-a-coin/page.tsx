import { Metadata } from "next";
import { generateMetadata, generateWebApplicationSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import CoinFlip from "@/components/CoinFlip";
import AdSenseDisplay from "@/components/AdSenseDisplay";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight, FiList, FiShield, FiTrendingUp } from "react-icons/fi";
import { IoSparklesOutline, IoFlashOutline, IoHelpCircleOutline } from "react-icons/io5";

export const metadata: Metadata = generateMetadata({
  title: "Flip a Coin – Free Coin Flip & Heads or Tails Simulator Online",
  description: "Flip a coin online with our free 3D coin toss simulator. Instant, fair 50/50 heads or tails coin flipper with streak tracker for decisions, games & sports.",
  canonical: "/flip-a-coin",
});

export default function FlipACoinPage() {
  const applicationSchema = generateWebApplicationSchema({
    name: "Online Coin Flip Simulator",
    url: `${SITE_CONFIG.url}/flip-a-coin`,
    description: "Free online coin flip simulator for heads or tails. Fair cryptographic coin toss generator for quick decisions, games, and sports.",
    featureList: "Coin flip simulator, Heads or tails, 3D coin toss, Flip a coin 3 times, Session statistics, Keyboard spacebar flip, Fair 50/50 probability",
  });

  const faqSchema = generateFAQSchema([
    {
      question: "Is this online coin flip truly random and 50/50?",
      answer: "Yes! Our coin flip simulator uses the cryptographically secure Web Crypto API (crypto.getRandomValues). Unlike physical coins that have subtle weight imbalances from engravings, our digital coin flipper guarantees a mathematically unbiased, exact 50% chance of landing on Heads and 50% on Tails."
    },
    {
      question: "How do I flip a coin on this website?",
      answer: "You can flip the coin in three easy ways: click or tap the 3D coin directly, press the 'FLIP COIN' button, or simply press the Spacebar on your keyboard. The coin will spin in full 3D and land on either heads or tails."
    },
    {
      question: "How do I flip a coin 3 times for 'best 2 out of 3'?",
      answer: "Simply tap or press Spacebar three times. Our built-in session statistics tracker records every flip in your recent history and shows the exact count and percentage of Heads vs. Tails, making it easy to determine the winner of a best-of-three or best-of-five contest."
    },
    {
      question: "Is a physical coin flip actually 50/50?",
      answer: "Surprisingly, no! Research conducted at Stanford University by mathematician Persi Diaconis revealed that physical coins land on the same face they started on roughly 51% of the time due to precession during the toss. Our digital coin toss generator eliminates this physical bias, making it fairer than tossing a real quarter."
    },
    {
      question: "Can I use this coin toss generator for sports matches?",
      answer: "Absolutely. Referees, coaches, and players regularly use our mobile-friendly coin flipper for football kickoffs, basketball possessions, cricket tosses, and casual pickup games when they don't have a physical coin."
    },
    {
      question: "Can you flip a coin for me without downloading an app?",
      answer: "Yes! SpinPickOnline's coin flip simulator works 100% in your browser on iPhone, Android, tablet, Mac, and Windows PC. No app download, signup, or installation required."
    }
  ]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: SITE_CONFIG.url },
    { name: "Flip a Coin", item: `${SITE_CONFIG.url}/flip-a-coin` },
  ]);

  const howToSchema = generateHowToSchema({
    name: "How to Flip a Coin Online",
    description: "Get an instant, fair heads or tails result using our free coin toss simulator.",
    steps: [
      { name: "Tap to Flip", text: "Click the coin, tap the Flip button, or hit Spacebar on your keyboard.", position: 1 },
      { name: "Watch the 3D Toss", text: "Watch the realistic 3D coin flip animation spin through the air.", position: 2 },
      { name: "See Your Result & Stats", text: "The coin lands on Heads or Tails, and your session statistics update automatically.", position: 3 },
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
      <section className="pb-6 sm:pb-10 lg:pb-16 lg:pt-10 pt-6 sm:pt-8 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center lg:mb-10 sm:mb-8 mb-4">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Flip a Coin Online – Free Coin Flip Simulator
            </h1>
            <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
              Need to make a fast decision or settle a bet? Flip 1, 2, 3, or 5 coins at once or customize coin labels with our cryptographically fair 3D heads or tails coin toss generator.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-4 sm:p-8">
            <CoinFlip />
          </div>
          <div className="max-w-3xl mx-auto mt-6">
            <AdSenseDisplay slotId="6084518347" />
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center md:mb-10 mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Why Use Our Online Coin Flip Generator?
            </h2>
            <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
              Designed for speed, mathematical fairness, and effortless decision-making
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 md:p-6 p-4 md:rounded-2xl rounded-xl border border-amber-200 hover:shadow-md transition-shadow">
              <div className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FiShield className="text-2xl text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">100% Cryptographic Fairness</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Powered by the browser&apos;s Web Crypto API for genuine 50/50 probability. No hidden algorithms, no weighted bias.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-sky-50 md:p-6 p-4 md:rounded-2xl rounded-xl border border-blue-200 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FiTrendingUp className="text-2xl text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Live Flip Stats & History</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Tracks your total coin flips, live Heads vs. Tails percentage ratio, and displays your last 20 flip results.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 md:p-6 p-4 md:rounded-2xl rounded-xl border border-emerald-200 hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <IoSparklesOutline className="text-2xl text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Realistic 3D Coin Animation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Enjoy smooth, hardware-accelerated 3D coin spins with suspenseful rotation before revealing Heads or Tails.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-6 p-4 md:rounded-2xl rounded-xl border border-purple-200 hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <IoFlashOutline className="text-2xl text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Spacebar & Tap Controls</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Click the coin, tap the button on mobile, or hit Spacebar on your desktop keyboard for instant rapid coin flipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Section: Streak Odds, Gambler's Fallacy & Comparison Matrix */}
      <section className="py-10 lg:py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 inline-block mb-3">
              Probability &amp; Science
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Coin Toss Streak Odds &amp; Probability Matrix
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              What are the odds of flipping 5 Heads in a row? Understand the true mathematics of coin tossing and why the Gambler&apos;s Fallacy tricks our brains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Streak Probability Table */}
            <div className="bg-gradient-to-br from-gray-50 to-amber-50/40 p-5 sm:p-7 rounded-2xl border border-amber-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span>📊</span> Consecutive Streak Probabilities
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  The cumulative mathematical odds of flipping the same side multiple times consecutively:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-amber-200/70 text-gray-700">
                        <th className="py-2 font-semibold">Consecutive Flips</th>
                        <th className="py-2 font-semibold">Exact Formula</th>
                        <th className="py-2 font-semibold">Odds</th>
                        <th className="py-2 font-semibold">Percentage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100/60 text-gray-800">
                      <tr><td className="py-2 font-medium">1 Flip</td><td className="py-2 font-mono text-xs">(1/2)¹</td><td className="py-2">1 in 2</td><td className="py-2 font-bold text-amber-700">50.0%</td></tr>
                      <tr><td className="py-2 font-medium">2 in a row</td><td className="py-2 font-mono text-xs">(1/2)²</td><td className="py-2">1 in 4</td><td className="py-2 font-bold text-amber-700">25.0%</td></tr>
                      <tr><td className="py-2 font-medium">3 in a row</td><td className="py-2 font-mono text-xs">(1/2)³</td><td className="py-2">1 in 8</td><td className="py-2 font-bold text-amber-700">12.5%</td></tr>
                      <tr><td className="py-2 font-medium">4 in a row</td><td className="py-2 font-mono text-xs">(1/2)⁴</td><td className="py-2">1 in 16</td><td className="py-2 font-bold text-amber-700">6.25%</td></tr>
                      <tr><td className="py-2 font-medium">5 in a row</td><td className="py-2 font-mono text-xs">(1/2)⁵</td><td className="py-2">1 in 32</td><td className="py-2 font-bold text-amber-700">3.12%</td></tr>
                      <tr><td className="py-2 font-medium">10 in a row</td><td className="py-2 font-mono text-xs">(1/2)¹⁰</td><td className="py-2">1 in 1,024</td><td className="py-2 font-bold text-amber-700">0.098%</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-200/60 text-xs text-gray-700 leading-relaxed bg-white/70 p-3 rounded-xl">
                💡 <strong>The Gambler&apos;s Fallacy:</strong> Even if you flip Heads 9 times in a row, the 10th flip still has an <em>exact 50% probability</em> of landing on Heads! Coins have no memory.
              </div>
            </div>

            {/* Comparison Matrix: Digital Simulator vs Google vs Physical Coin */}
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span>⚖️</span> Digital Simulator vs. Google vs. Physical Coin
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  How our online coin flipper compares to other ways of tossing a coin:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-700">
                        <th className="py-2 font-semibold">Feature</th>
                        <th className="py-2 font-semibold text-amber-700">SpinPickOnline</th>
                        <th className="py-2 font-semibold text-gray-500">Google Coin</th>
                        <th className="py-2 font-semibold text-gray-500">Physical Coin</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700">
                      <tr>
                        <td className="py-2.5 font-medium">Fairness</td>
                        <td className="py-2.5 text-emerald-700 font-bold">100% Crypto Fair</td>
                        <td className="py-2.5 text-gray-700">Standard Math</td>
                        <td className="py-2.5 text-rose-600">51% Bias (Weight)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-medium">Session History</td>
                        <td className="py-2.5 text-emerald-700 font-bold">✅ Live Stats &amp; History</td>
                        <td className="py-2.5 text-rose-500">❌ No Tracking</td>
                        <td className="py-2.5 text-rose-500">❌ Manual Count</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-medium">Best of 3 / Stats</td>
                        <td className="py-2.5 text-emerald-700 font-bold">✅ Heads/Tails Ratio %</td>
                        <td className="py-2.5 text-rose-500">❌ None</td>
                        <td className="py-2.5 text-rose-500">❌ None</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-medium">Controls</td>
                        <td className="py-2.5 text-emerald-700 font-bold">Tap, Button, Spacebar</td>
                        <td className="py-2.5 text-gray-700">Click only</td>
                        <td className="py-2.5 text-gray-700">Hand toss</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-medium">No Coin Required</td>
                        <td className="py-2.5 text-emerald-700 font-bold">✅ Any Device</td>
                        <td className="py-2.5 text-emerald-700">✅ Browser</td>
                        <td className="py-2.5 text-rose-500">❌ Need quarter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-600 leading-relaxed">
                Enjoy zero-bias randomness, full 3D physics animations, and instant session audits on any smartphone or desktop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth SEO Content Section */}
      <section className="py-10 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-5 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
              The Ultimate Guide to Flipping a Coin Online
            </h2>

            <div className="lg:space-y-6 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                Whether you need to break a tie, make a tough life choice, or decide who gets the ball first in a sports game, our <strong>online coin toss</strong> is the fastest and fairest tool available. When you don&apos;t have a physical nickel, dime, or quarter in your pocket, our digital <strong>coin flipper</strong> turns your smartphone or computer into a realistic, random coin toss simulator in seconds.
              </p>
              <p>
                For millennia, flipping a coin—traditionally known as <strong>heads or tails</strong>—has served as humanity&apos;s go-to method for resolving binary dilemmas. From ancient Roman emperors deciding legal disputes to NFL referees conducting the pre-game coin toss, this simple act removes human bias and places the outcome in the hands of pure chance.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-6 mb-3">
                Is a Coin Flip Actually 50/50? (Physics vs. Cryptographic Randomness)
              </h3>
              <p>
                Most people assume that tossing a real coin gives an exact 50% chance of landing on Heads and 50% on Tails. However, scientific studies have shown that <strong>physical coin flips are not completely 50/50</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Same-Side Bias (51% Odds):</strong> A famous study by Stanford mathematician Persi Diaconis proved that when a human flips a coin, it experiences precession (wobble) in midair, causing it to land on the <em>same side it started on</em> roughly 51% of the time.
                </li>
                <li>
                  <strong>Engraving Weight Disparities:</strong> On many physical coins, the &quot;Heads&quot; side with the portrait has slightly more metal raised than the &quot;Tails&quot; side, causing the center of gravity to subtly favor one side over thousands of flips.
                </li>
                <li>
                  <strong>Spinning on a Table:</strong> When spun on its edge on a table, a US penny lands on Tails almost 80% of the time because the Lincoln head side is heavier!
                </li>
              </ul>
              <p>
                Our <strong>coin flip online generator</strong> completely eliminates these physical flaws. By utilizing the <code>window.crypto.getRandomValues</code> API, our simulator produces hardware-level entropy where each outcome has an absolute, unskewed <strong>50.000% mathematical probability</strong>.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-6 mb-3">
                How to Flip a Coin 3 Times (Best 2 Out of 3 Rules)
              </h3>
              <p>
                When a single coin flip feels too high-stakes, the universal standard is to <strong>flip a coin 3 times</strong> for a &quot;Best Two out of Three&quot; (Bo3) showdown. Here is how to run it fairly using our simulator:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Designate Sides:</strong> Player 1 calls Heads; Player 2 takes Tails.</li>
                <li><strong>Flip #1:</strong> Click the coin or press Spacebar. Note the result in the live session tracker.</li>
                <li><strong>Flip #2:</strong> Toss the coin a second time. If one player wins both flips (2-0), they win the contest immediately!</li>
                <li><strong>Flip #3 (The Decider):</strong> If the score is tied 1-1, flip the coin one final time. Whichever side appears takes the tiebreaker.</li>
              </ol>
              <p>
                Our tool tracks your total session count and history automatically, so you never have to argue about who scored what.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-6 mb-3">
                Popular Use Cases for an Online Coin Flipper
              </h3>
              <p>
                A simple heads or tails coin toss simulator is one of the most versatile decision utilities in the world:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">🏈 Sports &amp; Games</h4>
                  <p className="text-sm text-gray-600">Determine kickoff possession in football, serve order in tennis, or pick starting sides in soccer and pickup basketball games.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">🎮 Tabletop &amp; Card Games</h4>
                  <p className="text-sm text-gray-600">Perfect for Pokémon TCG coin flips, Magic: The Gathering flip mechanics, and board game tiebreakers when physical coins aren&apos;t handy.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">🤝 Settle Friendly Arguments</h4>
                  <p className="text-sm text-gray-600">Who washes the dishes? Who gets the front seat? Who picks the movie tonight? An impartial coin toss eliminates all bias.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">🧠 The Psychological &quot;Coin Test&quot;</h4>
                  <p className="text-sm text-gray-600">Stuck between two choices? Flip a coin. If you feel relief when it lands on Heads, that&apos;s your answer. If you feel disappointed, choose Tails!</p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-6 mb-3">
                When to Use a Coin Flip vs. Our Other Randomizers
              </h3>
              <p>
                A coin toss is the ultimate solution for <strong>binary (2-option) choices</strong>. But what if you have 3, 5, or 20 options? SpinPickOnline offers a full suite of free randomizers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Need numbers or dice? Try our <Link href="/dice-roller" className="text-blue-600 hover:underline font-semibold">Online Dice Roller</Link> to roll D6, D20, or multi-dice sets (1-6).
                </li>
                <li>
                  Deciding between Yes and No with visual excitement? Check out our <Link href="/yes-no-wheel" className="text-blue-600 hover:underline font-semibold">Yes or No Wheel</Link>.
                </li>
                <li>
                  Choosing where to eat dinner? Spin our specialized <Link href="/food-picker-wheel" className="text-blue-600 hover:underline font-semibold">Food Picker Wheel</Link>.
                </li>
                <li>
                  Selecting a winner from a classroom or contest list? Use our custom <Link href="/random-picker-wheel" className="text-blue-600 hover:underline font-semibold">Random Picker Wheel</Link>.
                </li>
              </ul>

              <div className="mt-8 p-5 sm:p-6 bg-amber-50 rounded-2xl border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                  <IoHelpCircleOutline className="text-xl text-amber-600" />
                  Historical Fun Fact: Roman Coin Tossing
                </h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  In ancient Rome, coin tossing was known as <em>&quot;Navia aut Caput&quot;</em> (Ship or Head) because early Roman bronze coins displayed the head of the two-faced god Janus or the Emperor on the obverse and a ship&apos;s prow on the reverse. Roman citizens frequently flipped coins to resolve legal disputes, believing the resulting face was an expression of divine justice!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation / Related Tools */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Explore More Random Decision Tools
            </h2>
            <p className="text-sm text-gray-600">Quick, free randomizers for every situation</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              { href: "/dice-roller", label: "🎲 Dice Roller (D6, D20)" },
              { href: "/yes-no-wheel", label: "✅ Yes/No Wheel" },
              { href: "/random-picker-wheel", label: "🎡 Random Picker" },
              { href: "/food-picker-wheel", label: "🍕 Food Picker" },
              { href: "/randomizer-wheel", label: "⚙️ Randomizer Wheel" },
              { href: "/random-number-wheel", label: "🔢 Number Wheel" },
              { href: "/team-picker", label: "👥 Team Picker" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-sm transition-all"
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
