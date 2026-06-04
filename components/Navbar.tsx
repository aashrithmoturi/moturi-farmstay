"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-teal-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
          🌿 Moturi Farmstay
        </h1>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-green-100 font-medium hover:text-white transition">About</a>
          <a href="#gallery" className="text-green-100 font-medium hover:text-white transition">Gallery</a>
          <a href="#attractions" className="text-green-100 font-medium hover:text-white transition">Nearby Places</a>
          <a href="#contact" className="text-green-100 font-medium hover:text-white transition">Contact</a>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-teal-900 border-t border-teal-700 px-4 pb-4 flex flex-col gap-3">
          <a href="#about" onClick={() => setOpen(false)} className="text-green-100 font-medium hover:text-white transition py-2">About</a>
          <a href="#gallery" onClick={() => setOpen(false)} className="text-green-100 font-medium hover:text-white transition py-2">Gallery</a>
          <a href="#attractions" onClick={() => setOpen(false)} className="text-green-100 font-medium hover:text-white transition py-2">Nearby Places</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-green-100 font-medium hover:text-white transition py-2">Contact</a>
        </div>
      )}
    </nav>
  );
}