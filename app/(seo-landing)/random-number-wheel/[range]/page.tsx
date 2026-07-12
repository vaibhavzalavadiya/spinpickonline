import { Metadata } from "next";
import HomeWheel from "@/components/HomeWheel";
import { CallToAction } from "@/components/CallToAction";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { IoCalculatorOutline, IoShieldCheckmarkOutline, IoSparklesOutline, IoDiceOutline } from "react-icons/io5";
import { generateFAQSchema, generateWebApplicationSchema, generateMetadata as generateBaseMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

// Define the top ranges for static generation based on SEO search volume
export function generateStaticParams() {
  const ranges = [
    "1-2", "1-3", "1-4", "1-5", "1-6", "1-8", "1-10",
    "1-13", "1-15", "1-20", "1-30", "1-31", "1-50", "1-60", "1-100"
  ];
  return ranges.map((range) => ({ range }));
}

type Props = {
  params: Promise<{ range: string }>;
};

// Helper to parse the range
function parseRange(rangeStr: string): { start: number; end: number } | null {
  const match = rangeStr.match(/^(\d+)-(\d+)$/);
  if (!match) return null;
  const start = parseInt(match[1], 10);
  const end = parseInt(match[2], 10);
  if (start >= end || end - start > 1000) return null; // Sanity check limits
  return { start, end };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { range } = await params;
  const parsed = parseRange(range);

  if (!parsed) {
    return generateBaseMetadata({
      title: "Random Number Generator Wheel",
      description: "Spin the wheel for random numbers.",
      canonical: "/random-number-wheel",
    });
  }

  const { start, end } = parsed;
  return generateBaseMetadata({
    title: `Random Number Generator ${start}-${end} | Free Number Spinner`,
    description: `Need a random number between ${start} and ${end}? Spin our free random number wheel to instantly generate a fair, random result from ${start} to ${end}.`,
    canonical: `/random-number-wheel/${range}`,
  });
}

export default async function DynamicRandomNumberWheelPage({ params }: Props) {
  const { range } = await params;
  const parsed = parseRange(range);

  if (!parsed) {
    notFound();
  }

  const { start, end } = parsed;

  // Generate wheel entries based on the range
  const entries = Array.from({ length: end - start + 1 }, (_, i) => {
    const num = start + i;
    // Generate distinct colors based on the number to ensure variety
    const hue = (i * 137.508) % 360;
    return {
      id: num.toString(),
      label: num.toString(),
      color: `hsl(${hue}, 70%, 50%)`,
    };
  });

  const webAppSchema = generateWebApplicationSchema();
  const faqSchema = generateFAQSchema([
    {
      question: `How do I generate a random number between ${start} and ${end}?`,
      answer: `Our wheel is pre-configured to select a number between ${start} and ${end}. Simply tap the wheel or click the spin button. The tool uses cryptographic randomization to ensure every number has exactly the same chance of being picked.`
    },
    {
      question: `Is this ${start}-${end} number generator completely random?`,
      answer: `Yes! We use the Web Crypto API to ensure true cryptographic randomness. Whether you are generating a number for a contest, a game, or decision making, the result between ${start} and ${end} is 100% fair and unbiased.`
    },
    {
      question: "Can I change the range to something else?",
      answer: "Absolutely. If you want a different range, just type your desired numbers into the input box next to the wheel, and the wheel will automatically update to your custom list."
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
      <section className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center lg:mb-12 sm:mb-8 mb-5">
            <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Random Number Generator {start}-{end}
            </h1>
            <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
              Spin the wheel to instantly pick a random number between {start} and {end}. Fair, fast, and completely free to use.
            </p>
          </div>
          <HomeWheel defaultEntries={entries} storageKey={`randomNumberWheelState_${range}`} />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center md:mb-8 mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Why Use a Random Number Wheel?
            </h2>
            <p className="md:text-base text-sm text-gray-600 max-w-2xl mx-auto">
              More visual and engaging than traditional random number generators
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-indigo-200 hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <IoDiceOutline className="text-xl text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visual Excitement</h3>
              <p className="md:text-base text-sm text-gray-600">Watch the wheel spin and build suspense. Much more engaging than clicking a button for a number.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <IoShieldCheckmarkOutline className="text-xl text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Truly Random</h3>
              <p className="md:text-base text-sm text-gray-600">Uses cryptographically secure randomization. Each number has exactly equal probability.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <IoCalculatorOutline className="text-xl text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Custom Ranges</h3>
              <p className="md:text-base text-sm text-gray-600">Add any numbers you want: 1-10, 1-100, or specific numbers for your use case.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 md:p-5 p-4 md:rounded-xl rounded-lg border-2 border-orange-200 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                <IoSparklesOutline className="text-xl text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Multi-Purpose</h3>
              <p className="md:text-base text-sm text-gray-600">Use for games, education, decision making, or any scenario needing random numbers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extensive SEO Content Section */}
      <section className="py-10 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">

          <div className="bg-white p-4 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 lg:mb-6 mb-4">
              The Ultimate Guide to Generating Random Numbers ({start}-{end})
            </h2>

            <div className="lg:space-y-6 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                When you need a <strong>random number generator {start}-{end}</strong>, you usually have a specific task in mind. Perhaps you are running a giveaway, playing a tabletop game, teaching a math lesson, or conducting statistical sampling. Whatever your reason, you need a tool that is mathematically fair, incredibly fast, and easy to use.
              </p>
              <p>
                Unlike basic text-based number generators that simply spit out a digit on a blank screen, our <strong>{start} to {end} number wheel</strong> turns the randomization process into a visual event. By displaying all the numbers from {start} to {end} on a colorful spinning wheel, it builds suspense and makes the final result feel much more impactful and engaging.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">How to Use the {start}-{end} Spinner</h3>
              <p>
                We've pre-configured this specific page so you don't have to do any setup. The wheel is already perfectly sliced into sections containing every single integer from {start} up to {end} inclusive.
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Spin the Wheel:</strong> Simply click or tap anywhere on the wheel. The built-in physics engine will spin the wheel rapidly before naturally decelerating.</li>
                <li><strong>Read the Result:</strong> The flapper at the top will point to your winning number. A pop-up will also display the result clearly in the center of your screen.</li>
                <li><strong>Remove or Keep:</strong> If you are running a raffle and want to ensure a number cannot be picked twice, click the "Remove" button on the popup. This will instantly delete that number from the wheel for your next spin.</li>
              </ol>
              <p>
                If you decide you actually need a different range—for example, if you realize you need a <Link href="/random-number-wheel/1-100" className="text-blue-600 hover:underline">1-100 Number Wheel</Link>—you can simply edit the numbers in the text box next to the wheel, or use our navigation menu to find the exact preset you need.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Common Uses for a {start}-{end} Generator</h3>
              <p>
                Random number generation is a fundamental part of everyday decision making and digital infrastructure. Here is how our users utilize this specific range:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Raffles and Giveaways:</strong> If you sold numbered tickets between {start} and {end} for a fundraiser or a social media contest, this wheel is the perfect way to draw the winner. If you are picking a winner based on their Instagram handle rather than a ticket number, you should use our specialized <Link href="/instagram-giveaway-picker" className="text-blue-600 hover:underline">Instagram Giveaway Picker</Link> instead.</li>
                <li><strong>Classroom Management:</strong> Teachers frequently assign numbers to their students at the beginning of the year. By spinning the wheel, teachers can randomly select a student to answer a question or present their project. (Alternatively, you can just paste the students' actual names into our <Link href="/name-picker" className="text-blue-600 hover:underline">Name Picker Wheel</Link>).</li>
                <li><strong>Tabletop Gaming:</strong> If you are playing Dungeons & Dragons or other RPGs and you forgot your dice, this wheel acts as a perfect digital substitute. </li>
                <li><strong>Draft Orders:</strong> Need to figure out who gets the first pick in your Fantasy Football draft? Assign everyone a number, spin the wheel, and the result gets the first overall pick!</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">The Science of True Randomness</h3>
              <p>
                It is incredibly difficult for a computer to generate a truly random number. Computers are deterministic machines—they follow instructions. If you give a computer the exact same inputs, it will always give you the exact same output. Therefore, to generate a <strong>random number between {start} and {end}</strong>, the computer must rely on external "noise" or complex mathematical algorithms.
              </p>
              <p>
                Many older websites use a basic Javascript function called <code>Math.random()</code>. While this is fine for simple animations, it is <em>not cryptographically secure</em>. A clever hacker could theoretically predict the output.
              </p>
              <p>
                Our <strong>number wheel</strong> is different. It uses the modern browser <code>Web Crypto API</code> to harvest entropy (random noise) directly from your operating system. This guarantees that every single number on the wheel has exactly an equal probability of being chosen. It is mathematically impossible to predict or rig the spin, ensuring absolute fairness for your contests and decisions.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">When Not to Use a Number Wheel</h3>
              <p>
                While generating numbers is incredibly useful, sometimes assigning a number to an option is an unnecessary extra step.
              </p>
              <p>
                For example, if you are trying to randomly divide 20 people into 4 teams, you shouldn't use a number wheel to assign them 1 through 4. It's too tedious. Instead, you should use our dedicated <Link href="/random-group-generator" className="text-blue-600 hover:underline">Random Group Generator</Link>, which handles list splitting instantly.
              </p>
              <p>
                Similarly, if you are just trying to make a binary "Yes" or "No" decision, spinning a wheel with numbers and saying "Even is Yes, Odd is No" is overly complicated. You should simply use our <Link href="/yes-no-wheel" className="text-blue-600 hover:underline">Yes/No Wheel</Link> or our 3D <Link href="/flip-a-coin" className="text-blue-600 hover:underline">Coin Flip Simulator</Link>.
              </p>
              <p>
                Finally, if you need a random letter of the alphabet for a game like Scattergories, don't use numbers! Jump straight over to our <Link href="/random-letter-generator" className="text-blue-600 hover:underline">Random Letter Generator</Link>.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 lg:mt-8 mt-5 mb-3">Mobile Optimization and Privacy</h3>
              <p>
                We designed this <strong>{start}-{end} number generator</strong> to be lightning-fast on mobile devices. You don't need to download an app from the App Store or Google Play. Just bookmark this webpage on your phone's home screen, and it will function exactly like a native app.
              </p>
              <p>
                Furthermore, any customizations you make to the wheel (like changing colors or adding custom numbers) are saved locally on your device. We do not transmit your wheel data to our servers, ensuring your usage remains 100% private and secure. Spin with confidence!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              More Random Tools
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/random-picker-wheel", label: "Random Picker" },
              { href: "/random-choice-picker", label: "Choice Picker" },
              { href: "/decision-wheel", label: "Decision Wheel" },
              { href: "/wheel-spinner", label: "Wheel Spinner" },
              { href: "/picker-wheel", label: "Picker Wheel" },
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
