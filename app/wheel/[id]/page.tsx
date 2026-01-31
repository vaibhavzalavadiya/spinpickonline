import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";

// In production, this would fetch from a database
// For now, this is a placeholder that shows the structure
async function getWheel(id: string): Promise<any | null> {
  // This would fetch from your database/API
  // For demo purposes, returning null (not found)
  return null;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  // Return empty array since we don't have any shared wheels yet
  // In production, this would fetch IDs from database
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const wheel = await getWheel(id);

  if (!wheel) {
    return genMeta({
      title: "Random Picker Wheel | SpinPickOnline",
      description: "View shared random picker wheel results. Create your own free wheel - no signup required.",
      canonical: `/wheel/${id}`,
      robots: "noindex, follow",
    });
  }

  // Dynamic metadata based on wheel data
  const title = wheel.wheelName
    ? `${wheel.wheelName.substring(0, 30)} - Random Picker Wheel | SpinPickOnline`
    : "Random Picker Wheel Results | SpinPickOnline";

  const description = wheel.description
    ? `${wheel.description.substring(0, 100)}... Create your own free random picker wheel.`
    : `Random picker wheel with ${wheel.entryCount} entries. Create your own free wheel - no signup required.`;

  // Determine if should be indexed
  const shouldIndex =
    wheel.isPublic &&
    wheel.shareCount > 0 &&
    wheel.entryCount >= 2 &&
    wheel.hasMeaningfulContent;

  return genMeta({
    title: title.length > 60 ? title.substring(0, 57) + "..." : title,
    description: description.length > 160 ? description.substring(0, 157) + "..." : description,
    canonical: `/wheel/${id}`,
    robots: shouldIndex ? "index, follow" : "noindex, follow",
  });
}

export default async function SharedWheelPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const wheel = await getWheel(id);

  if (!wheel) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {wheel.wheelName || "Random Picker Wheel Results"}
      </h1>

      {wheel.description && (
        <p className="text-lg text-gray-700 mb-6">{wheel.description}</p>
      )}

      {wheel.result && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg lg:p-6 p-4 mb-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Result</h2>
          <p className="text-3xl font-semibold text-blue-700">{wheel.result}</p>
        </div>
      )}

      {wheel.entries && wheel.entries.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Entries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {wheel.entries.map((entry: any, index: number) => (
              <div
                key={index}
                className="p-3 bg-gray-50 rounded-lg text-center"
                style={{ borderLeft: `4px solid ${entry.color}` }}
              >
                <p className="text-sm font-medium text-gray-900">{entry.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 text-center space-y-4">
        <Link
          href="/wheel"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create Your Own Wheel
        </Link>
        <p className="text-sm text-gray-600">
          Want to make your own random picker wheel? It's free and takes just seconds!
        </p>
      </div>
    </div>
  );
}

