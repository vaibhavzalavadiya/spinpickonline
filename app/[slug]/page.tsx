import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMetadata as genMeta } from "@/lib/seo";
import { FEATURES, USE_CASES } from "@/lib/constants";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import HomeWheel from "@/components/HomeWheel";
import { generateDefaultColors } from "@/lib/wheel-utils";
import { WheelEntry } from "@/lib/types";

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
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <h1 className="text-4xl font-bold text-gray-900 mb-8">{feature.h1}</h1>

        <div className="mb-12">
          <HomeWheel 
            defaultEntries={formattedEntries} 
            storageKey={`wheelState-${feature.slug}`} 
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">{feature.featureDescription}</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Core Benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            {feature.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            {feature.howItWorks.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
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
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <h1 className="text-4xl font-bold text-gray-900 mb-8">{useCase.h1}</h1>

        <div className="mb-12">
          <HomeWheel 
            defaultEntries={formattedEntries} 
            storageKey={`wheelState-${useCase.slug}`} 
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">{useCase.context}</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Use This?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            {useCase.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Steps to Get Started</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            {useCase.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  notFound();
}

