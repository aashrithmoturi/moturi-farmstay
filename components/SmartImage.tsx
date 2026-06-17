"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Image that gracefully falls back to an elegant gradient placeholder
 * if the source is missing (handy while real photos are being added).
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  sizes,
  priority,
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Caption shown on the placeholder when the image is missing. */
  label?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-teal-700 via-emerald-600 to-amber-500 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="px-4 text-center text-sm font-medium text-white/90">
          {label ?? "📷 Add photo here"}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "100vw"}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
