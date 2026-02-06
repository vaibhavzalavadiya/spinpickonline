import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateMetadata as genMeta, generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo";
import SchemaScript from "@/components/SchemaScript";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = genMeta({
  title: "Spin the Wheel – Free Random Picker Wheel Online",
  description: "Spin the wheel online for free. Create random name pickers, yes-or-no wheels, giveaway winners, and more. No signup required. Fast, fun, and mobile-friendly.",
  canonical: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <SchemaScript schema={organizationSchema} />
        <SchemaScript schema={websiteSchema} />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
