"use client";

import { useEffect } from "react";

export default function DocumentLangSync({ lang }: { lang: string }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.lang = "en";
      }
    };
  }, [lang]);

  return null;
}
