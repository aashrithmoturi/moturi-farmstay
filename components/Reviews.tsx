"use client";

import { useEffect, useRef, useState } from "react";

/** Trustindex widget hash (Google reviews, auto-updating). */
const TRUSTINDEX_ID = "50cd08e74b1825870936d7da4d5";

/** Google reviews link shown in the fallback CTA. */
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Moturi+Farmstay+Vemulawada+reviews";

type Status = "loading" | "loaded" | "failed";

/**
 * Live Google reviews for Moturi Farmstay via the Trustindex widget.
 * If the widget can't load (offline, blocked, or trial expired), it
 * gracefully falls back to a "Read our reviews on Google" card.
 */
export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const host = containerRef.current;
    if (!host) return;

    let settled = false;
    const done = (s: Status) => {
      if (!settled) {
        settled = true;
        setStatus(s);
      }
    };

    const script = document.createElement("script");
    script.src = `https://cdn.trustindex.io/loader.js?${TRUSTINDEX_ID}`;
    script.async = true;
    script.defer = true;
    script.onerror = () => done("failed");
    script.onload = () => {
      // The loader injects the widget shortly after; verify it rendered.
      window.setTimeout(() => {
        const hasWidget =
          host.querySelector("[class*='ti-widget'], iframe, .ti-reviews-container-wrapper") !==
            null || host.childElementCount > 1;
        done(hasWidget ? "loaded" : "failed");
      }, 4000);
    };
    host.appendChild(script);

    // Safety net: if nothing happens at all, fall back.
    const guard = window.setTimeout(() => done("failed"), 9000);

    return () => {
      window.clearTimeout(guard);
      host.innerHTML = "";
    };
  }, []);

  return (
    <section id="reviews" className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4 text-teal-800">
          Guest Reviews
        </h2>
        <p className="text-center text-stone-600 mb-8 sm:mb-12 text-sm sm:text-base">
          What our guests say about their stay at Moturi Farmstay in Vemulawada.
        </p>

        {/* Live Trustindex widget mounts here */}
        <div ref={containerRef} aria-live="polite" />

        {status === "loading" && (
          <p className="text-center text-stone-500 text-sm">
            Loading guest reviews…
          </p>
        )}

        {status === "failed" && (
          <div className="mx-auto max-w-xl rounded-2xl border border-amber-100 bg-amber-50 p-8 text-center shadow-sm">
            <p className="text-lg font-semibold text-teal-800">
              ⭐ Loved by our guests
            </p>
            <p className="mt-2 text-stone-600 text-sm sm:text-base">
              Read genuine reviews from families, pilgrims, and weekend
              travellers who stayed with us.
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-800"
            >
              Read our reviews on Google
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
