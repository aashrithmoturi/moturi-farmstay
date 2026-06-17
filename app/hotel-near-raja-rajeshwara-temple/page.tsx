import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaPhoneAlt as FaPhone, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Stay Near Raja Rajeshwara Temple | Hotel & Accommodation – Moturi Farmstay",
  description:
    "Best accommodation near Sri Raja Rajeshwara Swamy Temple in Vemulawada. Moturi Farmstay offers hotel rooms, farmhouse stay & lodge near the famous Vemulawada temple, Sircilla district.",
  keywords: [
    "stay near raja rajeshwara temple", "hotel near raja rajeshwara temple",
    "lodge near raja rajeshwara temple", "accommodation near temple vemulawada",
    "vemulawada temple stay", "vemulawada temple hotel", "temple stay vemulawada",
    "stay near temple vemulawada", "raja rajeshwara temple accommodation",
    "bonalu stay vemulawada", "vemulawada temple lodge",
  ],
  alternates: { canonical: "/stay-near-raja-rajeshwara-temple" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-teal-800">
          Stay Near Raja Rajeshwara Temple – Moturi Farmstay
        </h1>

        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-6">
          Planning a visit to the famous <strong>Sri Raja Rajeshwara Swamy Temple</strong> in Vemulawada? Moturi Farmstay is the best place to <strong>stay near Raja Rajeshwara Temple</strong>. Located just 6 km from the temple, our farmstay offers comfortable accommodation with a peaceful nature setting in the <strong>Rajanna Sircilla</strong> district.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          About Sri Raja Rajeshwara Swamy Temple
        </h2>
        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-6">
          The <strong>Sri Raja Rajeshwara Swamy Temple</strong> in Vemulawada is one of Telangana&apos;s most sacred Shiva temples, attracting lakhs of devotees throughout the year. The temple is especially crowded during <strong>Bonalu celebrations</strong>, Maha Shivaratri, and other festivals. Having a comfortable <strong>stay near the temple</strong> makes your visit peaceful and convenient.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Why Stay at Moturi Farmstay for Your Temple Visit?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-stone-700 text-base sm:text-lg mb-8">
          <li>Just <strong>6 km from Raja Rajeshwara Temple</strong> — quick and easy access</li>
          <li>Spacious <strong>1BHK accommodation</strong> for up to 10 adults</li>
          <li>Peaceful <strong>farmhouse environment</strong> to relax after temple darshan</li>
          <li>Ideal for <strong>Bonalu celebrations</strong> — music facility available</li>
          <li>Also near <strong>Nampally Narasimha Swamy Temple</strong> (6 km) and <strong>Agraharam Temple</strong> (5 km)</li>
          <li>Affordable and <strong>family-friendly</strong> — better than hotel rooms</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-700">
          Nearby Temples from Our Stay
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <h3 className="font-bold text-teal-800 mb-2">Sri Raja Rajeshwara Swamy Temple</h3>
            <p className="text-stone-600">📍 Approx. 6 km</p>
            <p className="text-stone-600 text-sm mt-2">Telangana&apos;s most famous Shiva temple</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <h3 className="font-bold text-teal-800 mb-2">Nampally Narasimha Swamy Temple</h3>
            <p className="text-stone-600">📍 Approx. 6 km</p>
            <p className="text-stone-600 text-sm mt-2">Scenic hill temple with beautiful views</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <h3 className="font-bold text-teal-800 mb-2">Agraharam Temple</h3>
            <p className="text-stone-600">📍 Approx. 5 km</p>
            <p className="text-stone-600 text-sm mt-2">Historic temple with traditional architecture</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="tel:+919505834657" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"><FaPhone className="mr-2 inline align-[-0.125em]" />Call Now</a>
          <a href="https://wa.me/919505834657" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"><FaWhatsapp className="mr-2 inline align-[-0.125em]" />WhatsApp</a>
          <a href="/" className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold transition">🏠 Home</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
