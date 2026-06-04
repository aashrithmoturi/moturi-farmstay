import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Lodge in Vemulawada | Best Lodges & Accommodation – Moturi Farmstay",
  description:
    "Find the best lodge in Vemulawada at Moturi Farmstay. Affordable lodges near Raja Rajeshwara Temple with family-friendly accommodation in Rajanna Sircilla district, Telangana.",
  keywords: [
    "lodge in vemulawada", "lodges in vemulawada", "best lodge vemulawada",
    "cheap lodge vemulawada", "vemulawada lodge", "lodge near temple vemulawada",
    "lodge in sircilla", "sircilla lodge", "rajanna sircilla lodge",
    "accommodation vemulawada", "lodge near raja rajeshwara temple",
  ],
  alternates: { canonical: "/lodges-in-vemulawada" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-teal-800">
          Best Lodge in Vemulawada – Moturi Farmstay
        </h1>

        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-6">
          Searching for a <strong>lodge in Vemulawada</strong>? Moturi Farmstay offers the best alternative to traditional <strong>lodges in Vemulawada</strong> with a spacious farmhouse stay that gives you more space, comfort, and nature than any regular lodge. Located on Marupaka Road near Reddy Bhavan in the <strong>Rajanna Sircilla</strong> district.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Better Than a Regular Lodge
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-stone-700 text-base sm:text-lg mb-8">
          <li><strong>More space</strong> than a typical lodge — full 1BHK with bedroom, living room, kitchen</li>
          <li>Accommodates <strong>10 adults</strong> — perfect for groups and families</li>
          <li>Surrounded by <strong>nature, greenery, and cattle farm</strong> instead of city noise</li>
          <li><strong>Affordable pricing</strong> — better value than most lodges in Vemulawada</li>
          <li>Just 6 km from <strong>Sri Raja Rajeshwara Swamy Temple</strong></li>
          <li>Ideal for <strong>Bonalu celebrations</strong>, family trips, and friends gatherings</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Lodge Near Raja Rajeshwara Temple
        </h2>
        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-6">
          Most visitors to Vemulawada look for a <strong>lodge near Raja Rajeshwara Temple</strong> for their temple visit. Moturi Farmstay offers the perfect stay — close enough to the temple for easy darshan, yet set in a peaceful natural environment away from the town crowd. Unlike regular <strong>lodges in Vemulawada</strong>, you get a full farmhouse experience.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Lodge in Sircilla District
        </h2>
        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-8">
          As a top <strong>lodge in Sircilla</strong> district, Moturi Farmstay is easily accessible from Sircilla town, Karimnagar, and Hyderabad. Whether you are looking for a <strong>lodge in Vemulawada</strong> or a <strong>lodge near Sircilla</strong>, our farmstay delivers the best value with spacious rooms, nature views, and temple proximity.
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
