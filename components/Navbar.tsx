"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/raja-rajeshwara-temple", label: "Temple" },
  { href: "/parameshwari-store", label: "Store" },
  { href: "/#attractions", label: "Nearby" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
      className="sticky top-0 z-50 bg-teal-800/95 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-teal-800/80"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <motion.a
          href="/"
          whileHover={{ scale: 1.04 }}
          className="text-xl font-bold tracking-wide text-white sm:text-2xl"
        >
          🌿 Moturi Farmstay
        </motion.a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop links */}
        <div className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mo-link font-medium text-green-100 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-teal-700 bg-teal-900 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-2 font-medium text-green-100 transition hover:text-white"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}