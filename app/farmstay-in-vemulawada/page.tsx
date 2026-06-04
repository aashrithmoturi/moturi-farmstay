import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Farmstay in Vemulawada | Best Farmhouse Stay – Moturi Farmstay",
  description:
    "Experience the best farmstay in Vemulawada at Moturi Farmstay. Enjoy nature, cattle farming, open spaces & comfortable farmhouse accommodation near Raja Rajeshwara Temple, Sircilla district.",
  keywords: [
    "farmstay in vemulawada", "farmhouse in vemulawada", "farm stay vemulawada",
    "best farmstay vemulawada", "farmhouse near temple vemulawada",
    "farmstay sircilla", "farmhouse sircilla", "vemulawada farmstay",
    "nature stay vemulawada", "farmhouse near raja rajeshwara temple",
  ],
  alternates: { canonical: "/farmstay-in-vemulawada" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-teal-800">
          Best Farmstay in Vemulawada – Moturi Farmstay
        </h1>

        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-6">
          Moturi Farmstay is the best <strong>farmstay in Vemulawada</strong>, offering a one-of-a-kind <strong>farmhouse experience</strong> surrounded by greenery, cattle, and open fields. Located on Marupaka Road near Reddy Bhavan, our <strong>farmhouse in Vemulawada</strong> is the ideal escape from city life while being close to the sacred <strong>Raja Rajeshwara Temple</strong>.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          The Farmstay Experience
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-stone-700 text-base sm:text-lg mb-8">
          <li><strong>Authentic farmhouse living</strong> — wake up to nature, fresh air, and cattle sounds</li>
          <li>Explore our <strong>cattle farm</strong> with cows, calves, and farm animals</li>
          <li>Open grasslands perfect for <strong>photoshoots</strong> and outdoor activities</li>
          <li>Spacious <strong>1BHK farmstay</strong> accommodating up to 10 adults</li>
          <li><strong>Family-friendly farmhouse</strong> with kitchen, living room, and washroom</li>
          <li>Music and speaker facility for <strong>celebrations and get-togethers</strong></li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Farmhouse Near Raja Rajeshwara Temple
        </h2>
        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-6">
          Unlike a typical hotel, our <strong>farmstay in Vemulawada</strong> offers a unique nature retreat just 6 km from <strong>Sri Raja Rajeshwara Swamy Temple</strong>. Combine your spiritual visit with a peaceful <strong>farmhouse stay</strong> — enjoy temple darshan during the day and relax amidst nature in the evening.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Farmstay in Sircilla District
        </h2>
        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-6">
          Our <strong>farmhouse in Vemulawada</strong> is one of the few <strong>farmstay options in Rajanna Sircilla</strong> district. Visitors from Sircilla, Karimnagar, Hyderabad, and across Telangana choose Moturi Farmstay for its unique combination of nature, comfort, and temple proximity. Experience the real village life at our <strong>farmstay near Sircilla</strong>.
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
