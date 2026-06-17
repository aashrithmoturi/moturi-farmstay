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
    <section className="relative flex h-[78vh] min-h-[440px] items-center justify-center overflow-hidden bg-teal-950 sm:h-[85vh]">
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

      {/* Royal gradient veil + soft vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/85 via-teal-950/25 to-amber-900/30" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 38%, transparent 45%, rgba(6,30,28,0.72) 100%)",
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
        className="relative z-10 mx-4 max-w-2xl rounded-3xl border border-white/10 bg-black/30 p-6 text-center text-white shadow-2xl backdrop-blur-md sm:p-10"
      >
        <motion.p
          variants={item}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300 sm:text-sm"
        >
          Vemulawada · Telangana
        </motion.p>

        <motion.h1
          variants={item}
          className="mb-3 text-3xl font-bold drop-shadow-lg sm:mb-4 sm:text-5xl md:text-6xl"
        >
          <span className="mo-gradient-text">Moturi Farmstay</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-6 text-lg text-green-100 sm:mb-8 sm:text-xl md:text-2xl"
        >
          A peaceful farm stay near Sri Raja Rajeshwara Temple
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <motion.a
            href="tel:9505834657"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="mo-sweep rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700 sm:px-8 sm:text-base"
          >
            <FaPhone className="mr-2 inline align-[-0.125em]" />Call Now
          </motion.a>

          <motion.a
            href="https://wa.me/919505834657"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="mo-sweep rounded-lg bg-white px-6 py-3 text-sm font-semibold text-green-800 shadow-lg transition hover:bg-gray-100 sm:px-8 sm:text-base"
          >
            <FaWhatsapp className="mr-2 inline align-[-0.125em]" />WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl text-white/80"
        animate={reduce ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        ↓
      </motion.div>
    </section>
  );
}