import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaPhoneAlt as FaPhone, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Book Hotel in Vemulawada | Moturi Farmstay Booking",
  description:
    "Book your stay at Moturi Farmstay Vemulawada. Affordable hotel rooms, farmhouse stay & lodge near Raja Rajeshwara Temple. Call or WhatsApp to book now in Sircilla district.",
  keywords: [
    "book hotel vemulawada", "hotel booking vemulawada", "farmstay booking vemulawada",
    "room booking vemulawada", "lodge booking vemulawada", "vemulawada stay booking",
    "book rooms sircilla", "moturi farmstay booking",
  ],
  alternates: { canonical: "/booking" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-teal-800">
          Book Your Stay at Moturi Farmstay
        </h1>

        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-8">
          Booking a stay at the best <strong>hotel in Vemulawada</strong> is easy! Simply call or WhatsApp us to check availability and reserve your <strong>farmstay in Vemulawada</strong>. Whether you need <strong>rooms for a temple visit</strong>, family gathering, Bonalu celebration, or a weekend getaway — we are ready to host you.
        </p>

        <div className="bg-amber-50 p-6 sm:p-8 rounded-xl border border-amber-100 mb-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">What You Get</h2>
          <ul className="list-disc pl-6 space-y-3 text-stone-700 text-base sm:text-lg">
            <li><strong>1BHK Farmstay</strong> — Bedroom, Living Room, Kitchen, Washroom</li>
            <li>Capacity: up to <strong>10 adults</strong></li>
            <li><strong>Nature surroundings</strong> — greenery, cattle farm, open fields</li>
            <li>Just <strong>6 km from Raja Rajeshwara Temple</strong></li>
            <li>Music &amp; speaker facility for celebrations</li>
            <li><strong>Photoshoot-friendly</strong> location</li>
          </ul>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          How to Book
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 text-center">
            <span className="text-3xl block mb-3">1️⃣</span>
            <h3 className="font-bold text-teal-800 mb-2">Call or WhatsApp</h3>
            <p className="text-stone-600 text-sm">Contact us with your dates and group size</p>
          </div>
          <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 text-center">
            <span className="text-3xl block mb-3">2️⃣</span>
            <h3 className="font-bold text-teal-800 mb-2">Confirm Availability</h3>
            <p className="text-stone-600 text-sm">We will confirm your dates and pricing</p>
          </div>
          <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 text-center">
            <span className="text-3xl block mb-3">3️⃣</span>
            <h3 className="font-bold text-teal-800 mb-2">Arrive &amp; Enjoy</h3>
            <p className="text-stone-600 text-sm">Check in and enjoy your farmstay experience</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919505834657" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition text-lg"><FaPhone className="mr-2 inline align-[-0.125em]" />Call 9505834657</a>
          <a href="https://wa.me/919505834657" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition text-lg"><FaWhatsapp className="mr-2 inline align-[-0.125em]" />WhatsApp Now</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
