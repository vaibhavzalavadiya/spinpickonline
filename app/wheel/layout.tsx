import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...genMeta({
    title: "Random Picker Wheel Creator – Free Online Tool | SpinPickOnline",
    description: "Create your free random picker wheel instantly. Add entries, customize colors, spin and share results. No signup required. Perfect for names, decisions, and giveaways.",
    canonical: "/wheel",
  }),
  authors: [{ name: "SpinPickOnline Team", url: "https://www.spinpickonline.com" }],
};

export default function WheelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

