import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Attractions Near Vemulawada | Temples & Places to Visit",
  description:
    "Discover top attractions and temples near Vemulawada. Visit Sri Raja Rajeshwara Swamy Temple, Nampally Narasimha Temple & more. Stay at Moturi Farmstay for the best temple visit experience.",
  keywords: [
    "attractions near vemulawada", "temples near vemulawada",
    "places to visit vemulawada", "vemulawada temple", "raja rajeshwara temple",
    "vemulawada tourist places", "sircilla attractions", "things to do vemulawada",
  ],
  alternates: { canonical: "/attractions" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-teal-800">
          Attractions & Temples Near Vemulawada
        </h1>

        <p className="text-base sm:text-lg leading-8 text-stone-700 mb-8">
          Vemulawada in <strong>Rajanna Sircilla</strong> district is one of the most important pilgrimage destinations in Telangana. Here are the top <strong>attractions near Vemulawada</strong> that you can visit while staying at Moturi Farmstay.
        </p>

        <div className="space-y-8 mb-8">
          <div className="bg-amber-50 p-6 sm:p-8 rounded-xl border border-amber-100">
            <h2 className="text-2xl font-bold text-teal-800 mb-2">Sri Raja Rajeshwara Swamy Temple</h2>
            <p className="text-green-700 font-medium mb-3">📍 Approx. 6 km from Moturi Farmstay</p>
            <p className="text-stone-700 leading-7">
              The <strong>Sri Raja Rajeshwara Swamy Temple</strong> is one of Telangana&apos;s most famous Shiva temples, attracting lakhs of devotees from across India. The temple is especially significant during <strong>Bonalu celebrations</strong>, Maha Shivaratri, and Kartika Masam. The ancient temple complex features stunning architecture and a deeply spiritual atmosphere.
            </p>
          </div>

          <div className="bg-amber-50 p-6 sm:p-8 rounded-xl border border-amber-100">
            <h2 className="text-2xl font-bold text-teal-800 mb-2">Nampally Narasimha Swamy Temple</h2>
            <p className="text-green-700 font-medium mb-3">📍 Approx. 6 km from Moturi Farmstay</p>
            <p className="text-stone-700 leading-7">
              A scenic hill temple dedicated to Lord Narasimha with breathtaking views of the surrounding landscape. The trek to the temple is a rewarding experience, and the peaceful hilltop setting offers a meditative atmosphere for devotees and nature lovers alike.
            </p>
          </div>

          <div className="bg-amber-50 p-6 sm:p-8 rounded-xl border border-amber-100">
            <h2 className="text-2xl font-bold text-teal-800 mb-2">Agraharam Temple</h2>
            <p className="text-green-700 font-medium mb-3">📍 Approx. 5 km from Moturi Farmstay</p>
            <p className="text-stone-700 leading-7">
              A peaceful and historic temple known for its traditional architecture and serene surroundings. The Agraharam area preserves the rich cultural heritage of Vemulawada and offers visitors a glimpse into the region&apos;s spiritual traditions.
            </p>
          </div>

          <div className="bg-amber-50 p-6 sm:p-8 rounded-xl border border-amber-100">
            <h2 className="text-2xl font-bold text-teal-800 mb-2">Moturi Farmstay Nature Experience</h2>
            <p className="text-green-700 font-medium mb-3">📍 At the farmstay</p>
            <p className="text-stone-700 leading-7">
              Beyond temples, Moturi Farmstay itself is an attraction — explore our <strong>cattle farm</strong>, walk through green grasslands, enjoy the water body views, and experience authentic village life. Perfect for <strong>photoshoots</strong>, family picnics, and weekend getaways.
            </p>
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
