"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Reveal, Stagger, RevealItem } from "./motion/Reveal";
import SmartImage from "./SmartImage";
import { FaPhoneAlt as FaPhone, FaWhatsapp } from "react-icons/fa";

/**
 * Three split images of the temple — drop your photos at these paths and
 * they appear automatically (an elegant gradient placeholder shows until then).
 * temple-1 = wide gopuram panorama, temple-2 = sacred shrine, temple-3 = deity.
 * Tip: run `python scripts/split_temple.py` to auto-slice one collage photo.
 */
const wideShot = {
  src: "/images/temple2.png",
  alt: "Raja Rajeshwara Temple — Gopuram Panorama",
  label: "Add temple photo 1 (wide gopuram view)",
};
const pairShots = [
  { src: "/images/temple-3.png", alt: "Raja Rajeshwara Temple — Sacred Shivalingam", label: "Add temple photo 2 (shrine)" },
  { src: "/images/temple1.png", alt: "Raja Rajeshwara Temple — Lord Shiva Statue", label: "Add temple photo 3 (deity)" },
];

const timings = [
  { label: "Morning Darshan", time: "4:00 AM – 12:30 PM" },
  { label: "Abhishekam", time: "5:00 AM – 7:00 AM" },
  { label: "Evening Darshan", time: "4:00 PM – 9:00 PM" },
  { label: "Maha Mangala Harati", time: "8:30 PM" },
];

const festivals = [
  { icon: "🔱", name: "Maha Shivaratri", text: "The grandest festival — thousands of devotees throng for night-long prayers." },
  { icon: "🎊", name: "Bonalu", text: "Vibrant Telangana celebrations with processions and offerings." },
  { icon: "🪔", name: "Karthika Masam", text: "Holy month of lamps and special abhishekams to Lord Shiva." },
  { icon: "🌸", name: "Kalyanotsavam", text: "Celestial wedding ceremonies performed with grandeur." },
];

export default function TempleContent() {
  const reduce = useReducedMotion();

  const heroText: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const heroItem: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-[58vh] items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-800 to-amber-700 px-4 py-20 text-center text-white">
        <span className="mo-blob left-[10%] top-[18%] h-48 w-48 bg-amber-300/40" />
        <span className="mo-blob right-[12%] bottom-[12%] h-56 w-56 bg-emerald-300/40" style={{ animationDelay: "3s" }} />
        {/* Breathing glow */}
        <span className="mo-glow absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/20 blur-3xl" />
        <span className="mo-float absolute left-[12%] top-[24%] text-4xl opacity-80">🔱</span>

        <motion.div variants={heroText} initial="hidden" animate="visible" className="relative z-10 max-w-3xl">
          <motion.p variants={heroItem} className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 sm:text-sm">
            Vemulawada · Telangana
          </motion.p>
          <motion.h1 variants={heroItem} className="mb-4 text-3xl font-bold drop-shadow-lg sm:text-5xl md:text-6xl">
            <span className="mo-gradient-text">Sri Raja Rajeshwara Swamy Temple</span>
          </motion.h1>
          {/* Gold shimmer divider */}
          <motion.div variants={heroItem} className="mx-auto mb-6 h-[3px] w-40 rounded-full mo-shimmer" />
          <motion.p variants={heroItem} className="mx-auto mb-8 max-w-2xl text-lg text-amber-50 sm:text-xl">
            The “Dakshina Kashi” of Telangana — one of the most revered Shiva
            temples, just 6 km from Moturi Farmstay.
          </motion.p>
          <motion.div variants={heroItem}>
            <a
              href="/#contact"
              className="mo-sweep inline-block rounded-lg bg-white px-7 py-3 font-semibold text-teal-900 shadow-lg transition hover:bg-amber-100"
            >
              🏡 Stay Near the Temple
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Triptych split images — one collage, three sacred frames */}
      <section className="bg-stone-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal direction="up">
            <h2 className="mb-3 text-center text-3xl font-bold text-teal-800 sm:text-4xl">
              A Glimpse of the Divine
            </h2>
            <div className="mx-auto mb-4 h-[3px] w-32 rounded-full mo-shimmer" />
            <p className="mx-auto mb-12 max-w-2xl text-center text-stone-600">
              The majestic gopurams, the sacred Shivalingam, and Lord Shiva
              presiding over the holy town of Vemulawada.
            </p>
          </Reveal>

          {/* Wide panorama with a slow Ken Burns drift */}
          <Reveal direction="up" className="mb-4 sm:mb-6">
            <div className="mo-group mo-card relative h-64 overflow-hidden rounded-3xl shadow-xl sm:h-[26rem]">
              <SmartImage
                src={wideShot.src}
                alt={wideShot.alt}
                label={wideShot.label}
                className="mo-kenburns object-cover"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              <span className="mo-wash" />
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-lg font-medium text-white">{wideShot.alt}</p>
              </div>
            </div>
          </Reveal>

          {/* Two shrines side by side with a 3D tilt on hover */}
          <Stagger gap={0.18} className="mo-stage grid gap-4 sm:grid-cols-2 sm:gap-6">
            {pairShots.map((img, i) => (
              <RevealItem key={img.src} direction={i === 0 ? "right" : "left"}>
                <div className="mo-group mo-tilt relative h-72 overflow-hidden rounded-3xl shadow-lg sm:h-96">
                  <SmartImage
                    src={img.src}
                    alt={img.alt}
                    label={img.label}
                    className="mo-img object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="mo-wash" />
                  <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="font-medium text-white">{img.alt}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* About the temple */}
      <section className="relative overflow-hidden bg-amber-50 py-16 sm:py-24">
        <span className="mo-blob -right-10 top-10 h-56 w-56 bg-orange-200/50" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal direction="up">
            <h2 className="mb-6 text-3xl font-bold text-teal-800 sm:text-4xl">
              About the <span className="mo-gradient-text">Temple</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mb-4 text-base leading-8 text-stone-700 sm:text-lg">
              The Sri Raja Rajeshwara Swamy Temple, located in Vemulawada, is one
              of the most ancient and revered Shaivite temples in Telangana.
              Affectionately called <strong>“Dakshina Kashi”</strong>, it draws
              lakhs of devotees who come to seek the blessings of Lord Shiva,
              worshipped here as Sri Raja Rajeshwara Swamy.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="mb-4 text-base leading-8 text-stone-700 sm:text-lg">
              The temple complex also houses shrines of Sri Raja Rajeshwari Devi,
              Lord Anantha Padmanabha Swamy, and many other deities. A unique
              ritual here is <strong>“Kode Mokku”</strong>, where devotees
              circumambulate the temple with a bull to fulfil their vows.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-base leading-8 text-stone-700 sm:text-lg">
              With its rich history, serene atmosphere, and architectural beauty,
              a visit to this temple is a deeply spiritual experience — perfectly
              paired with a peaceful stay at Moturi Farmstay nearby.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timings */}
      <section className="bg-teal-800 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal direction="up">
            <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
              Darshan Timings
            </h2>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {timings.map((t) => (
              <RevealItem key={t.label} direction="up">
                <div className="mo-card flex items-center justify-between rounded-2xl border border-teal-600 bg-teal-700/50 px-6 py-5">
                  <span className="font-medium text-white">🕉️ {t.label}</span>
                  <span className="font-semibold text-amber-300">{t.time}</span>
                </div>
              </RevealItem>
            ))}
          </Stagger>
          <Reveal direction="up" delay={0.1}>
            <p className="mt-6 text-center text-sm text-green-200">
              * Timings may vary on festival days. Please confirm before visiting.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Festivals */}
      <section className="bg-stone-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal direction="up">
            <h2 className="mb-12 text-center text-3xl font-bold text-teal-800 sm:text-4xl">
              Festivals & Celebrations
            </h2>
          </Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {festivals.map((f) => (
              <RevealItem key={f.name} direction="zoom">
                <div className="mo-card mo-sweep h-full rounded-3xl border border-stone-200 bg-white p-6 text-center shadow-md">
                  <span className="mo-float mb-3 block text-4xl">{f.icon}</span>
                  <h3 className="mb-2 font-bold text-teal-800">{f.name}</h3>
                  <p className="text-sm leading-6 text-stone-600">{f.text}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-800 to-amber-700 py-16 text-center text-white sm:py-24">
        <span className="mo-blob left-[12%] top-[20%] h-44 w-44 bg-amber-300/40" />
        <span className="mo-blob right-[12%] bottom-[16%] h-52 w-52 bg-emerald-300/30" style={{ animationDelay: "2s" }} />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal direction="zoom">
            <h2 className="mb-4 text-2xl font-bold sm:text-4xl">
              Planning a Temple Visit?
            </h2>
            <div className="mx-auto mb-6 h-[3px] w-32 rounded-full mo-shimmer" />
            <p className="mx-auto mb-8 max-w-xl text-amber-50">
              Stay just 6 km away at Moturi Farmstay — peaceful, family-friendly,
              and perfect for devotees and pilgrims.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:9505834657"
                className="mo-sweep rounded-lg bg-white px-7 py-3 font-semibold text-teal-900 shadow-lg transition hover:bg-amber-100"
              >
                <FaPhone className="mr-2 inline align-[-0.125em]" />Call Now
              </a>
              <a
                href="https://wa.me/919505834657"
                target="_blank"
                rel="noopener noreferrer"
                className="mo-sweep rounded-lg bg-emerald-500 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-600"
              >
                <FaWhatsapp className="mr-2 inline align-[-0.125em]" />WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
