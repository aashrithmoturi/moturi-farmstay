import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Moturi Farmstay Vemulawada – Photos & Videos",
  description:
    "View photos and videos of Moturi Farmstay Vemulawada. See our rooms, farmhouse, cattle farm, grasslands, and nature surroundings. Best hotel and farmstay in Vemulawada, Sircilla.",
  keywords: [
    "moturi farmstay photos", "vemulawada hotel photos", "farmstay vemulawada images",
    "hotel rooms vemulawada gallery", "vemulawada farmhouse photos",
  ],
  alternates: { canonical: "/gallery" },
};

const images = [
  { src: "/images/poster-farmstay3.png", alt: "Moturi Farmstay Vemulawada" },
  { src: "/images/Main-Hotel.png", alt: "Moturi Farmstay Main View" },
  { src: "/images/Bedroom-hotel-1.png", alt: "Hotel Room in Vemulawada - Bedroom" },
  { src: "/images/Bedroom-Hotel-2.png", alt: "Farmstay Bedroom Vemulawada" },
  { src: "/images/Living-Room-Hotel.jpg", alt: "Living Room - Hotel in Vemulawada" },
  { src: "/images/Living-room-hotel-2.png", alt: "Living Room - Farmstay Vemulawada" },
  { src: "/images/Kitchen-Hotel.jpg", alt: "Kitchen - Lodge in Vemulawada" },
  { src: "/images/Washroom-Hotel.jpg", alt: "Washroom - Rooms in Vemulawada" },
  { src: "/images/Grass-Hotel.jpg", alt: "Farmstay Greenery Vemulawada" },
  { src: "/images/Grass-Land-Hotel.jpg", alt: "Grassland - Farmhouse Vemulawada" },
  { src: "/images/Cattle-Hotel.jpg", alt: "Cattle Farm - Farmstay Vemulawada" },
  { src: "/images/Cattle-Tree-Hotel.jpg", alt: "Cattle under Tree - Farm Stay" },
  { src: "/images/small-cow-hotel.png", alt: "Calf at Moturi Farmstay" },
  { src: "/images/Water-Farm-Hotel.jpg", alt: "Water Body - Farmhouse Vemulawada" },
  { src: "/images/Grandpa-statue-hotel.png", alt: "Grandpa Statue at Farmstay" },
  { src: "/images/small-temple-hotel.png", alt: "Small Temple at Farmstay Vemulawada" },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-teal-800 text-center">
          Moturi Farmstay Gallery
        </h1>
        <p className="text-center text-stone-600 mb-10 text-base sm:text-lg">
          Explore photos of our farmstay — rooms, surroundings, cattle, and nature in Vemulawada.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="rounded-xl shadow-md h-40 sm:h-56 w-full object-cover hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            />
          ))}
        </div>

        <div className="text-center">
          <a href="/" className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold transition inline-block">🏠 Back to Home</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
