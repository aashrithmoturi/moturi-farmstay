"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FaPhoneAlt as FaPhone, FaWhatsapp } from "react-icons/fa";
import { Reveal, Stagger, RevealItem } from "./motion/Reveal";

const categories = [
  {
    icon: "🪔",
    name: "Idols & Statues",
    desc: "Brass, marble & resin idols of gods and goddesses for home and gifting.",
    tint: "from-amber-100 to-orange-100",
  },
  {
    icon: "🕉️",
    name: "Lord Shiva Photo Frames",
    desc: "Beautifully crafted photo frames of Lord Shiva and other deities.",
    tint: "from-teal-100 to-emerald-100",
  },
  {
    icon: "🏏",
    name: "Sports Items",
    desc: "Cricket bats, balls, badminton, and outdoor games for all ages.",
    tint: "from-lime-100 to-green-100",
  },
  {
    icon: "🏠",
    name: "Household Items",
    desc: "Everyday kitchenware, storage, and home essentials at wholesale rates.",
    tint: "from-sky-100 to-cyan-100",
  },
  {
    icon: "🧸",
    name: "Children's Toys",
    desc: "Safe, colourful and fun toys that kids love — at unbeatable prices.",
    tint: "from-pink-100 to-rose-100",
  },
  {
    icon: "🛍️",
    name: "General Items",
    desc: "A wide range of daily-use and general goods — all under one roof.",
    tint: "from-violet-100 to-purple-100",
  },
];

const benefits = [
  { icon: "💰", title: "Wholesale Prices", text: "Direct factory and bulk rates — save big on every purchase." },
  { icon: "📦", title: "Wide Variety", text: "Hundreds of products across idols, toys, sports & household." },
  { icon: "✅", title: "Trusted Quality", text: "Hand-picked, durable products you can rely on." },
  { icon: "🤝", title: "Friendly Service", text: "Personal help for retailers, resellers & families alike." },
];

export default function StoreContent() {
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
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-800 to-amber-700 px-4 py-20 text-center text-white">
        <span className="mo-blob left-[10%] top-[20%] h-44 w-44 bg-amber-300/40" />
        <span
          className="mo-blob right-[12%] bottom-[14%] h-56 w-56 bg-emerald-300/40"
          style={{ animationDelay: "3s" }}
        />
        <span className="mo-float absolute left-[14%] top-[26%] text-4xl opacity-80">🪔</span>
        <span className="mo-float-slow absolute right-[16%] top-[32%] text-4xl opacity-80">🧸</span>

        <motion.div variants={heroText} initial="hidden" animate="visible" className="relative z-10 max-w-3xl">
          <motion.p variants={heroItem} className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 sm:text-sm">
            Wholesale · Retail · Bulk Orders
          </motion.p>
          <motion.h1 variants={heroItem} className="mb-4 text-4xl font-bold drop-shadow-lg sm:text-6xl">
            <span className="mo-gradient-text">Parameshwari Store</span>
          </motion.h1>
          <motion.p variants={heroItem} className="mx-auto mb-8 max-w-2xl text-lg text-green-100 sm:text-xl">
            Idols, Lord Shiva photo frames, sports goods, household items,
            children&apos;s toys & general items — all at wholesale prices.
          </motion.p>
          <motion.div variants={heroItem} className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <motion.a
              href="tel:9505834657"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="mo-sweep rounded-lg bg-amber-500 px-7 py-3 font-semibold text-teal-950 shadow-lg transition hover:bg-amber-400"
            >
              <FaPhone className="mr-2 inline align-[-0.125em]" />Call to Order
            </motion.a>
            <motion.a
              href="https://wa.me/919505834657"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="mo-sweep rounded-lg bg-white px-7 py-3 font-semibold text-emerald-800 shadow-lg transition hover:bg-gray-100"
            >
              <FaWhatsapp className="mr-2 inline align-[-0.125em]" />WhatsApp Enquiry
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="bg-stone-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal direction="up">
            <h2 className="mb-3 text-center text-3xl font-bold text-teal-800 sm:text-4xl">
              What We Sell
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-stone-600">
              A one-stop shop for devotional, household, sports and kids&apos;
              products — buy single pieces or in bulk at wholesale prices.
            </p>
          </Reveal>

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <RevealItem key={c.name} direction="zoom">
                <div className="mo-card mo-sweep group h-full rounded-3xl border border-stone-200 bg-white p-7 shadow-md">
                  <div
                    className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${c.tint} text-3xl`}
                  >
                    <span className="mo-float-slow">{c.icon}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-teal-800">{c.name}</h3>
                  <p className="leading-7 text-stone-600">{c.desc}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-teal-800 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal direction="up">
            <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
              Why Buy From Parameshwari Store
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {benefits.map((b) => (
              <RevealItem key={b.title} direction="up">
                <div className="mo-card h-full rounded-2xl border border-teal-600 bg-teal-700/50 p-6 text-center">
                  <span className="mo-float mb-3 block text-3xl">{b.icon}</span>
                  <h3 className="mb-2 font-bold text-white">{b.title}</h3>
                  <p className="text-sm text-green-100">{b.text}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-amber-50 py-16 sm:py-24">
        <span className="mo-blob -left-10 top-6 h-52 w-52 bg-teal-300/40" />
        <span className="mo-blob -right-10 bottom-0 h-52 w-52 bg-amber-300/50" style={{ animationDelay: "4s" }} />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal direction="zoom">
            <div className="rounded-3xl border border-amber-200 bg-white p-8 shadow-xl sm:p-12">
              <h2 className="mb-3 text-2xl font-bold text-teal-800 sm:text-3xl">
                Bulk orders? Retailer enquiry?
              </h2>
              <p className="mb-7 text-stone-600">
                Call or WhatsApp us for the latest wholesale price list and
                product availability. We deliver value you can count on.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:9505834657"
                  className="mo-sweep rounded-lg bg-green-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700"
                >
                  <FaPhone className="mr-2 inline align-[-0.125em]" />9505834657
                </a>
                <a
                  href="https://wa.me/919505834657"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mo-sweep rounded-lg bg-emerald-500 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-600"
                >
                  <FaWhatsapp className="mr-2 inline align-[-0.125em]" />WhatsApp Us
                </a>
              </div>
              <p className="mt-6 text-sm text-stone-500">
                📍 Vemulawada, Rajanna Sircilla District, Telangana
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
