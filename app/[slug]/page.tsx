import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMetadata as genMeta } from "@/lib/seo";
import { FEATURES, USE_CASES } from "@/lib/constants";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import HomeWheel from "@/components/HomeWheel";
import { generateDefaultColors } from "@/lib/wheel-utils";
import { WheelEntry } from "@/lib/types";
import { FiCheckCircle, FiZap, FiArrowRight } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";

// Related tools for cross-linking
const ALL_TOOLS = [
  { href: "/name-picker", label: "Name Picker", emoji: "🎯" },
  { href: "/yes-no-wheel", label: "Yes/No Wheel", emoji: "✅" },
  { href: "/team-picker", label: "Team Picker", emoji: "👥" },
  { href: "/random-picker-wheel", label: "Random Picker", emoji: "🎡" },
  { href: "/name-spinner", label: "Name Spinner", emoji: "🔄" },
  { href: "/giveaway-winner", label: "Giveaway Winner", emoji: "🏆" },
  { href: "/decision-wheel", label: "Decision Wheel", emoji: "🤔" },
  { href: "/classroom-activities", label: "Classroom Picker", emoji: "📚" },
  { href: "/raffle-wheel", label: "Raffle Wheel", emoji: "🎟️" },
  { href: "/prize-wheel", label: "Prize Wheel", emoji: "🎁" },
  { href: "/lucky-draw-wheel", label: "Lucky Draw", emoji: "🍀" },
  { href: "/wheel-spinner", label: "Wheel Spinner", emoji: "🌀" },
];

export async function generateStaticParams() {
  const featureParams = FEATURES.map((feature) => ({
    slug: feature.slug,
  }));
  const useCaseParams = USE_CASES.map((useCase) => ({
    slug: useCase.slug,
  }));
  return [...featureParams, ...useCaseParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = FEATURES.find((f) => f.slug === slug);
  const useCase = USE_CASES.find((u) => u.slug === slug);
  const data = feature || useCase;

  if (!data) {
    return genMeta({
      title: "Page Not Found | SpinPickOnline",
      description: "The requested page could not be found.",
      canonical: "/",
    });
  }

  return genMeta({
    title: data.title,
    description: data.description,
    canonical: `/${data.slug}`,
  });
}

function RelatedTools({ currentSlug }: { currentSlug: string }) {
  const tools = ALL_TOOLS.filter((t) => !t.href.includes(currentSlug)).slice(0, 8);
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-10 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Explore More Free Tools
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Try our other free spinner wheel tools — no signup required.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex items-center gap-2 bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50 rounded-xl px-3 py-3 transition-all hover:shadow-md"
            >
              <span className="text-xl">{tool.emoji}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">
                {tool.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function InlineCTA() {
  return (
    <section className="py-10 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Ready to Spin Your Wheel?
        </h2>
        <p className="text-blue-100 text-sm mb-5">
          Create your custom random picker wheel in seconds — free, no signup needed.
        </p>
        <Link
          href="/wheel"
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm sm:text-base"
        >
          <IoRocketOutline className="text-lg" />
          Create Free Wheel
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

// Generic How-To Steps
function HowToUse({ steps }: { steps: string[] }) {
  return (
    <section className="py-10 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">How to Use This Tool</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-sm text-gray-700 leading-relaxed pt-0.5">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why use section
function WhyUse({ points }: { points: { icon: string; title: string; desc: string }[] }) {
  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Why Choose Our Tool?</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {points.map((p, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 border border-blue-100">
              <div className="text-2xl mb-2">{p.icon}</div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{p.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Generic FAQ
function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="py-10 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{item.q}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = FEATURES.find((f) => f.slug === slug);
  const useCase = USE_CASES.find((u) => u.slug === slug);

  if (feature) {
    const breadcrumbItems = [
      { name: "Features", href: "/features" },
      { name: feature.featureName, href: `/${feature.slug}` },
    ];

    const colors = generateDefaultColors(feature.defaultEntries.length);
    const formattedEntries: WheelEntry[] = feature.defaultEntries.map((label, index) => ({
      id: `default-${index}`,
      label,
      color: colors[index],
    }));

    return (
      <div className="min-h-screen bg-white">
        {/* Hero + Wheel */}
        <section className="pt-8 pb-10 lg:pt-12 lg:pb-14 bg-gradient-to-b from-blue-50/40 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 mt-4">
              {feature.h1}
            </h1>
            <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-2xl">
              {feature.featureDescription}
            </p>
            <HomeWheel
              defaultEntries={formattedEntries}
              storageKey={`wheelState-${feature.slug}`}
            />
          </div>
        </section>

        {/* Benefits + How It Works */}
        <section className="py-10 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FiCheckCircle className="text-blue-500" />
                  Core Benefits
                </h2>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FiZap className="text-purple-500" />
                  How It Works
                </h2>
                <ol className="space-y-3">
                  {feature.howItWorks.map((step, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <WhyUse points={[
          { icon: "🎲", title: "100% Free Forever", desc: "No signup, no credit card. Use unlimited times with unlimited entries." },
          { icon: "📱", title: "Works on Any Device", desc: "Fully responsive — use on your phone, tablet, or desktop Smartboard." },
          { icon: "🔒", title: "Cryptographic RNG", desc: "Our random number generator uses secure algorithms for truly fair results." },
        ]} />

        <HowToUse steps={[
          "Type a name or item in the input field and press Add (or Enter)",
          "Add as many entries as you need — there's no limit",
          "Click 'Spin the Wheel!' and watch it pick a random winner",
          "Use 'Remove & Continue' to pick multiple winners in sequence",
        ]} />

        <FAQ items={[
          {
            q: "Is this tool free to use?",
            a: "Yes! 100% free, forever. No signup or credit card required. You can use it unlimited times with unlimited entries."
          },
          {
            q: "Is the selection truly random?",
            a: "Yes. We use a cryptographically secure random number generator (RNG) so every spin gives a genuinely fair result — not pseudo-random like simple alternatives."
          },
          {
            q: "Can I save my wheel entries?",
            a: "Your entries are automatically saved in your browser's local storage, so they'll be there next time you visit. You can also share your configured wheel via the Share Wheel button."
          },
          {
            q: "Does it work on mobile?",
            a: "Absolutely. The spinner wheel is fully touch-friendly and works great on phones and tablets."
          },
        ]} />

        <RelatedTools currentSlug={slug} />
        <InlineCTA />
      </div>
    );
  }

  if (useCase) {
    const breadcrumbItems = [
      { name: "Use Cases", href: "/use-cases" },
      { name: useCase.useCase, href: `/${useCase.slug}` },
    ];

    const colors = generateDefaultColors(useCase.defaultEntries.length);
    const formattedEntries: WheelEntry[] = useCase.defaultEntries.map((label, index) => ({
      id: `default-${index}`,
      label,
      color: colors[index],
    }));

    return (
      <div className="min-h-screen bg-white">
        {/* Hero + Wheel */}
        <section className="pt-8 pb-10 lg:pt-12 lg:pb-14 bg-gradient-to-b from-purple-50/40 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 mt-4">
              {useCase.h1}
            </h1>
            <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-2xl">
              {useCase.context}
            </p>
            <HomeWheel
              defaultEntries={formattedEntries}
              storageKey={`wheelState-${useCase.slug}`}
            />
          </div>
        </section>

        {/* Why + Steps */}
        <section className="py-10 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FiCheckCircle className="text-green-500" />
                  Why Use This?
                </h2>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FiZap className="text-orange-500" />
                  Steps to Get Started
                </h2>
                <ol className="space-y-3">
                  {useCase.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <WhyUse points={[
          { icon: "🎲", title: "100% Free Forever", desc: "No signup, no credit card. Use unlimited times with unlimited entries." },
          { icon: "📱", title: "Works on Any Device", desc: "Fully responsive — use on your phone, tablet, or desktop Smartboard." },
          { icon: "🔒", title: "Cryptographic RNG", desc: "Our random number generator uses secure algorithms for truly fair results." },
        ]} />

        <HowToUse steps={[
          "Type a name or item in the input field and press Add (or Enter)",
          "Add as many entries as you need — there's no limit",
          "Click 'Spin the Wheel!' and watch it pick a random winner",
          "Use 'Remove & Continue' to pick multiple winners in sequence",
        ]} />

        <FAQ items={[
          {
            q: `What is a ${useCase.useCase.toLowerCase()} wheel?`,
            a: `A ${useCase.useCase.toLowerCase()} wheel is a free online spinner tool that uses a secure random number generator to fairly pick one option from your list. It's transparent, instant, and requires no signup.`
          },
          {
            q: "Is this tool free to use?",
            a: "Yes! 100% free, forever. No signup or credit card required."
          },
          {
            q: "Is the selection truly random?",
            a: "Yes. We use a cryptographically secure RNG for genuinely fair, unbiased results every time."
          },
          {
            q: "Can I save my entries for next time?",
            a: "Yes — entries are automatically saved in your browser. No account needed. You can also generate a shareable link to store and share your configuration."
          },
        ]} />

        <RelatedTools currentSlug={slug} />
        <InlineCTA />
      </div>
    );
  }

  notFound();
}
