import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Best Hotel in Vemulawada | Moturi Farmstay – Affordable Rooms & Stay",
  description:
    "Looking for the best hotel in Vemulawada? Moturi Farmstay offers affordable rooms, family-friendly accommodation near Raja Rajeshwara Temple. Book your stay in Vemulawada, Sircilla today.",
  keywords: [
    "hotel in vemulawada", "best hotel in vemulawada", "vemulawada hotel",
    "cheap hotel vemulawada", "hotel near temple vemulawada", "sircilla hotel",
    "hotel in sircilla", "rajanna sircilla hotel", "vemulawada accommodation",
  ],
  alternates: { canonical: "/hotel-in-vemulawada" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-teal-800">
          Best Hotel in Vemulawada – Moturi Farmstay
        </h1>

        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-6">
          Moturi Farmstay is one of the <strong>best hotels in Vemulawada</strong>, offering a unique blend of comfort, nature, and affordability. Located on Marupaka Road near Reddy Bhavan, our <strong>hotel in Vemulawada</strong> is the perfect choice for families, temple visitors, and groups looking for a peaceful stay in the <strong>Rajanna Sircilla</strong> district.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Why Choose Our Hotel in Vemulawada?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-stone-700 text-base sm:text-lg mb-8">
          <li><strong>Affordable hotel rooms</strong> with spacious 1BHK farmstay layout</li>
          <li>Accommodates up to <strong>10 adults</strong> comfortably</li>
          <li>Just <strong>6 km from Sri Raja Rajeshwara Swamy Temple</strong></li>
          <li>Surrounded by greenery, cattle farm, and open spaces</li>
          <li>Perfect for <strong>Bonalu celebrations</strong>, family gatherings, and photoshoots</li>
          <li>Easy access from <strong>Sircilla</strong> and nearby towns</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Hotel Near Raja Rajeshwara Temple, Vemulawada
        </h2>
        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-6">
          Our <strong>hotel near Raja Rajeshwara Temple</strong> in Vemulawada provides the most convenient stay for devotees. Whether you are visiting during <strong>Bonalu season</strong> or for a weekend temple trip, Moturi Farmstay is the ideal <strong>hotel in Vemulawada</strong> that combines spiritual proximity with a natural farmhouse experience.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Hotel in Sircilla District
        </h2>
        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-8">
          Serving as the top <strong>hotel in Sircilla</strong> district, Moturi Farmstay is easily reachable from Sircilla town, Karimnagar, and Hyderabad. Whether you search for a <strong>hotel in Vemulawada</strong> or a <strong>hotel in Sircilla</strong>, our farmstay delivers the best value with nature, comfort, and temple proximity.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="tel:+919505834657" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">📞 Call Now</a>
          <a href="https://wa.me/919505834657" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">💬 WhatsApp</a>
          <a href="/" className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold transition">🏠 Home</a>
        </div>
      </main>
      <Footer />
    </>
  );
}