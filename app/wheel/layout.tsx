import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
    title: "Random Picker Wheel Creator | SpinPickOnline",
    description: "Create custom random picker wheels online for free! Customize colors, labels, and settings. Fair, fast, mobile-friendly. No signup.",
    canonical: "/wheel",
});

export default function WheelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
