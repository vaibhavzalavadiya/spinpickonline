import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Embed Spin Wheel – Free Iframe & OBS Stream Overlay | SpinPickOnline",
  description:
    "Embed an ad-free custom spin wheel into Notion, Canvas LMS, Google Sites, or OBS Studio Browser Source.",
  canonical: "/embed",
});

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
