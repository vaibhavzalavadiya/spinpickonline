"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

interface ChromeShellProps {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

export default function ChromeShell({ header, footer, children }: ChromeShellProps) {
  const pathname = usePathname();
  const isEmbed = pathname?.startsWith("/embed");

  if (isEmbed) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      {header}
      <main className="min-h-screen">{children}</main>
      {footer}

      {/* Google AdSense */}
      <Script
        id="adsbygoogle-init"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9187153323911677"
        crossOrigin="anonymous"
      />
    </>
  );
}
