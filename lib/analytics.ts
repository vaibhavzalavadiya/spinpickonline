"use client";

export interface AnalyticsParams {
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Push a non-PII product interaction event to GA4 / GTM without blocking UI.
 */
export function trackEvent(eventName: string, params: AnalyticsParams = {}): void {
  if (typeof window === "undefined") return;

  const cleanParams: Record<string, string | number | boolean> = {
    page_path: window.location.pathname,
  };

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      cleanParams[key] = value;
    }
  }

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, cleanParams);
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...cleanParams,
    });
  } catch {
    // Analytics must never interrupt interactive tool flows.
  }
}
