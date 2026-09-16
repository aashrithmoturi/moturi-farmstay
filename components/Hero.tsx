"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FaPhoneAlt as FaPhone, FaWhatsapp } from "react-icons/fa";

// Pre-computed golden sparkles (deterministic so SSR & client match)
const sparkles = [
  { left: "9%", top: "28%", size: 5, delay: 0, duration: 7 },
  { left: "20%", top: "62%", size: 3, delay: 2.5, duration: 9 },
  { left: "31%", top: "18%", size: 6, delay: 1, duration: 8 },
  { left: "44%", top: "72%", size: 4, delay: 3.5, duration: 10 },
  { left: "57%", top: "22%", size: 7, delay: 0.6, duration: 7.5 },
  { left: "66%", top: "58%", size: 3, delay: 4, duration: 9.5 },
  { left: "74%", top: "30%", size: 5, delay: 1.8, duration: 8.5 },
  { left: "85%", top: "66%", size: 4, delay: 2.2, duration: 9 },
  { left: "90%", top: "24%", size: 6, delay: 3, duration: 7 },
  { left: "50%", top: "44%", size: 3, delay: 5, duration: 11 },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  return (
    <section className="relative flex min-h-[640px] items-center justify-center overflow-hidden bg-teal-950 px-4 py-24 sm:h-[90vh] sm:min-h-[680px] sm:px-6 sm:py-28">
      {/* Cinematic background — gentle fade-in + perpetual Ken Burns drift */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: reduce ? 1 : 1.12 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <Image
          src="/images/poster-farmstay3.png"
          alt="Moturi Farmstay Vemulawada"
          fill
          priority
          className={reduce ? "object-cover" : "mo-kenburns object-cover"}
          sizes="100vw"
        />
      </motion.div>

      {/* Deep green veil preserves the landscape while giving the copy room to breathe. */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 via-teal-950/10 to-teal-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_28%,transparent_38%,rgba(4,35,31,0.72)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,35,30,0.55), transparent 32%, transparent 68%, rgba(3,35,30,0.48))",
        }}
      />

      {/* Drifting luminous blobs + a breathing golden halo */}
      <span className="mo-blob left-[8%] top-[18%] h-40 w-40 bg-emerald-400/40" />
      <span
        className="mo-blob right-[10%] bottom-[14%] h-52 w-52 bg-amber-400/40"
        style={{ animationDelay: "3s" }}
      />
      <span className="mo-glow pointer-events-none absolute left-1/2 top-1/2 h-[44vmin] w-[44vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/20 blur-3xl" />

      {/* Sweeping divine light ray */}
      <span
        className="mo-shimmer pointer-events-none absolute -inset-x-1/4 top-0 h-full opacity-20"
        style={{ transform: "skewX(-12deg)" }}
      />

      {/* Floating golden sparkles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {sparkles.map((s, i) => (
          <span
            key={i}
            className={reduce ? "absolute rounded-full bg-amber-200" : "mo-float absolute rounded-full bg-amber-200"}
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              boxShadow: "0 0 10px 2px rgba(251,191,36,0.7)",
            }}
          />
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-4xl text-center text-white"
      >
        <motion.p
          variants={item}
          className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-amber-200 sm:text-sm"
        >
          <span className="h-px w-10 bg-amber-300/70 sm:w-16" />
          Vemulawada · Telangana
          <span className="h-px w-10 bg-amber-300/70 sm:w-16" />
        </motion.p>

        <motion.h1
          variants={item}
          className="mb-5 font-display text-5xl font-semibold leading-[0.95] tracking-wide text-amber-50 drop-shadow-[0_5px_24px_rgba(0,0,0,0.55)] sm:mb-7 sm:text-7xl md:text-8xl"
        >
          <span className="block">Moturi</span>
          <span className="mo-gradient-text block italic">Farmstay</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mx-auto mb-6 flex items-center justify-center gap-3 sm:mb-8"
        >
          <span className="h-px w-16 bg-amber-200/50 sm:w-24" />
          <span className="h-2 w-2 rotate-45 border border-amber-200 bg-amber-300 shadow-[0_0_16px_rgba(251,191,36,0.85)]" />
          <span className="h-px w-16 bg-amber-200/50 sm:w-24" />
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-green-50/95 drop-shadow-md sm:mb-10 sm:text-xl md:text-2xl"
        >
          A warm, unhurried stay among open fields, garden lights, and the quiet beauty of Vemulawada.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <motion.a
            href="tel:9505834657"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="mo-sweep rounded-full bg-amber-300 px-7 py-3.5 text-sm font-semibold text-teal-950 shadow-[0_14px_30px_-12px_rgba(251,191,36,0.8)] transition hover:bg-amber-200 sm:px-9 sm:text-base"
          >
            <FaPhone className="mr-2 inline align-[-0.125em]" />Call Now
          </motion.a>

          <motion.a
            href="https://wa.me/919505834657"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="mo-sweep rounded-full border border-amber-100/70 bg-teal-950/25 px-7 py-3.5 text-sm font-semibold text-amber-50 shadow-lg backdrop-blur-sm transition hover:bg-teal-900/60 sm:px-9 sm:text-base"
          >
            <FaWhatsapp className="mr-2 inline align-[-0.125em]" />WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-16 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-100/70 sm:flex">
        <span className="h-px w-10 bg-amber-200/40" />
        Explore the farmstay
        <span className="h-px w-10 bg-amber-200/40" />
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-2xl text-amber-100/80"
        animate={reduce ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        ↓
      </motion.div>
    </section>
  );
}