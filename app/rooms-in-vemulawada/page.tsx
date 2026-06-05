import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Rooms in Vemulawada | Affordable Hotel Rooms – Moturi Farmstay",
  description:
    "Looking for affordable rooms in Vemulawada? Moturi Farmstay offers spacious 1BHK rooms near Raja Rajeshwara Temple. Best rooms in Vemulawada and Sircilla for families, temple visitors & groups.",
  keywords: [
    "rooms in vemulawada", "hotel rooms vemulawada", "best rooms vemulawada",
    "affordable rooms vemulawada", "rooms near temple vemulawada",
    "rooms in sircilla", "vemulawada rooms", "cheap rooms vemulawada",
    "family rooms vemulawada", "room booking vemulawada",
  ],
  alternates: { canonical: "/rooms-in-vemulawada" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-teal-800">
          Rooms in Vemulawada – Moturi Farmstay
        </h1>

        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-6">
          Looking for the best <strong>rooms in Vemulawada</strong>? Moturi Farmstay offers a spacious 1BHK farmstay with comfortable <strong>rooms near Raja Rajeshwara Temple</strong>. Our property is ideal for families, devotees, and groups visiting <strong>Vemulawada</strong> in the <strong>Rajanna Sircilla</strong> district of Telangana.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          What Our Rooms Offer
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-stone-700 text-base sm:text-lg mb-8">
          <li><strong>Spacious 1BHK layout</strong> — bedroom, living room, kitchen, and washroom</li>
          <li>Comfortable stay for up to <strong>10 adults</strong></li>
          <li>Clean, well-maintained <strong>rooms with natural surroundings</strong></li>
          <li>Open farmland, greenery, and <strong>cattle farm</strong> views</li>
          <li>Affordable pricing — best value <strong>rooms in Vemulawada</strong></li>
          <li>Music and speaker facility available for celebrations</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Room Details & Layout
        </h2>
        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-4">
          Our <strong>rooms in Vemulawada</strong> are designed for comfort and convenience. The bedroom features comfortable bedding with clean linens, suitable for families and couples. The attached living room provides additional seating and sleeping space, making it perfect for large groups travelling together.
        </p>
        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-6">
          The fully functional kitchen allows guests to prepare their own meals — especially useful for families with children or visitors who prefer home-cooked food during their temple visit. The washroom is clean and well-maintained with running water supply. Every room at our <strong>hotel in Vemulawada</strong> is designed with guests&apos; comfort as the top priority.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Rooms Near Raja Rajeshwara Temple
        </h2>
        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-6">
          Our <strong>rooms in Vemulawada</strong> are conveniently located just 6 km from the famous <strong>Sri Raja Rajeshwara Swamy Temple</strong>. Whether you need <strong>rooms for Bonalu celebrations</strong>, weekend temple visits, or family gatherings, Moturi Farmstay provides the perfect accommodation with nature and comfort. Guests can easily visit the temple in the morning and return to relax in the peaceful farmstay environment.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          What Makes Our Rooms Different
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
            <h3 className="font-bold text-teal-800 mb-2">🌿 Nature Views</h3>
            <p className="text-stone-600 text-sm">Wake up to green grasslands and cattle grazing instead of concrete walls and traffic noise.</p>
          </div>
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
            <h3 className="font-bold text-teal-800 mb-2">🍳 Kitchen Access</h3>
            <p className="text-stone-600 text-sm">Full kitchen facilities so you can cook your own meals — perfect for families with dietary preferences.</p>
          </div>
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
            <h3 className="font-bold text-teal-800 mb-2">👥 Group Friendly</h3>
            <p className="text-stone-600 text-sm">Accommodates up to 10 adults — no need to book multiple rooms at separate lodges.</p>
          </div>
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
            <h3 className="font-bold text-teal-800 mb-2">🅿️ Free Parking</h3>
            <p className="text-stone-600 text-sm">Ample parking space for cars and two-wheelers within the farmstay premises.</p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Best Rooms in Sircilla District
        </h2>
        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-6">
          As one of the most affordable and comfortable stays in the <strong>Rajanna Sircilla</strong> district, our <strong>rooms in Vemulawada</strong> attract visitors from Sircilla, Karimnagar, and Hyderabad. Experience village life, cattle farming, and nature while enjoying modern comforts in our farmstay rooms.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 mb-8">
          <div className="bg-stone-50 p-5 rounded-xl">
            <h3 className="font-bold text-teal-800 mb-2">How many people can stay in one room?</h3>
            <p className="text-stone-600">Our 1BHK farmstay comfortably accommodates up to 10 adults with bedroom and living room space.</p>
          </div>
          <div className="bg-stone-50 p-5 rounded-xl">
            <h3 className="font-bold text-teal-800 mb-2">Are bedsheets and pillows provided?</h3>
            <p className="text-stone-600">Yes, clean bedsheets, pillows, and basic amenities are provided for all guests.</p>
          </div>
          <div className="bg-stone-50 p-5 rounded-xl">
            <h3 className="font-bold text-teal-800 mb-2">Can we cook our own food?</h3>
            <p className="text-stone-600">Yes, the room includes a fully functional kitchen with gas stove and basic utensils. You can prepare your own meals.</p>
          </div>
        </div>

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
