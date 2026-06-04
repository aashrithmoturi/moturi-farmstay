import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Contact Moturi Farmstay Vemulawada | Book Your Stay",
  description:
    "Contact Moturi Farmstay Vemulawada for booking. Call or WhatsApp for hotel rooms, farmhouse stay, and lodge accommodation near Raja Rajeshwara Temple, Sircilla district.",
  keywords: [
    "contact moturi farmstay", "book hotel vemulawada", "vemulawada hotel booking",
    "farmstay booking vemulawada", "moturi farmstay phone number",
    "vemulawada accommodation contact", "hotel booking sircilla",
  ],
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-teal-800">
          Contact Moturi Farmstay
        </h1>

        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-8">
          Ready to book your stay at the best <strong>hotel and farmstay in Vemulawada</strong>? Get in touch with us via phone or WhatsApp. We are happy to help you plan your temple visit, family trip, Bonalu celebration, or weekend getaway.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          <div className="bg-amber-50 p-6 sm:p-8 rounded-xl border border-amber-100">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Contact Details</h2>
            <div className="space-y-4 text-stone-700 text-base sm:text-lg">
              <p>📞 <strong><a href="tel:+919505834657" className="text-teal-700 hover:underline">9505834657</a></strong></p>
              <p>📞 <strong><a href="tel:+919440134657" className="text-teal-700 hover:underline">9440134657</a></strong></p>
              <p>📍 Marupaka Road, Near Reddy Bhavan, Vemulawada, Telangana</p>
              <p>🏡 1BHK Farmstay — Accommodates up to 10 Adults</p>
            </div>
          </div>

          <div className="bg-amber-50 p-6 sm:p-8 rounded-xl border border-amber-100">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <a href="tel:+919505834657" className="block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition text-center">📞 Call Now</a>
              <a href="https://wa.me/919505834657" target="_blank" rel="noopener noreferrer" className="block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition text-center">💬 WhatsApp</a>
              <a href="https://www.instagram.com/moturi_farmstay" target="_blank" rel="noopener noreferrer" className="block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition text-center">📸 Instagram</a>
              <a href="https://maps.app.goo.gl/dCrcgJqSKvj3YGEW9" target="_blank" rel="noopener noreferrer" className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition text-center">📍 Get Directions</a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="/" className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold transition inline-block">🏠 Back to Home</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
