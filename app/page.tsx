import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Videos from "../components/Videos";
import Attractions from "../components/Attractions";
import GoogleMap from "../components/GoogleMap";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Videos />
      <Attractions />
      <section className="py-12 sm:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center text-teal-800">
            Hotel, Rooms & Accommodation in Vemulawada
          </h2>
          <p className="text-center text-stone-600 mb-8 sm:mb-12 text-sm sm:text-base">
            Explore our farmstay, rooms, and lodging options near Raja Rajeshwara Temple, Sircilla district.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <a href="/hotel-in-vemulawada" className="bg-white p-6 rounded-xl border border-amber-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-bold text-teal-800 mb-2">🏨 Best Hotel & Stay</h3>
              <p className="text-stone-600 text-sm">Affordable hotel accommodation near Raja Rajeshwara Temple with nature views and family-friendly rooms.</p>
            </a>
            <a href="/rooms-in-vemulawada" className="bg-white p-6 rounded-xl border border-amber-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-bold text-teal-800 mb-2">🛏️ Spacious 1BHK Rooms</h3>
              <p className="text-stone-600 text-sm">Full 1BHK with bedroom, kitchen, living room, and washroom — fits up to 10 adults comfortably.</p>
            </a>
            <a href="/farmstay-in-vemulawada" className="bg-white p-6 rounded-xl border border-amber-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-bold text-teal-800 mb-2">🌿 Farmhouse Experience</h3>
              <p className="text-stone-600 text-sm">Unique farmstay with cattle farm, open grasslands, and peaceful countryside living in Telangana.</p>
            </a>
            <a href="/lodges-in-vemulawada" className="bg-white p-6 rounded-xl border border-amber-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-bold text-teal-800 mb-2">🏠 Lodge Alternative</h3>
              <p className="text-stone-600 text-sm">More space, privacy, and nature than any regular lodge — ideal for groups and families.</p>
            </a>
            <a href="/stay-near-raja-rajeshwara-temple" className="bg-white p-6 rounded-xl border border-amber-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-bold text-teal-800 mb-2">🛕 Temple Stay & Darshan</h3>
              <p className="text-stone-600 text-sm">Just 6 km from Sri Raja Rajeshwara Swamy Temple — perfect for Bonalu and weekend pilgrimages.</p>
            </a>
            <a href="/booking" className="bg-white p-6 rounded-xl border border-amber-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-bold text-teal-800 mb-2">� Book Your Stay</h3>
              <p className="text-stone-600 text-sm">Call or WhatsApp to check availability and reserve your farmstay in Vemulawada today.</p>
            </a>
            <a href="/raja-rajeshwara-temple" className="bg-white p-6 rounded-xl border border-amber-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-bold text-teal-800 mb-2">🛕 Raja Rajeshwara Temple</h3>
              <p className="text-stone-600 text-sm">Darshan timings, history, festivals and the famous Kode Mokku ritual at the Dakshina Kashi of Telangana.</p>
            </a>
            <a href="/parameshwari-store" className="bg-white p-6 rounded-xl border border-amber-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-lg font-bold text-teal-800 mb-2">🛍️ Parameshwari Store</h3>
              <p className="text-stone-600 text-sm">Idols, Lord Shiva photo frames, sports goods, household items & toys — all at wholesale prices.</p>
            </a>
          </div>
        </div>
      </section>
      <GoogleMap />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}