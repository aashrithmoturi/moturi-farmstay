import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/poster-farmstay3.png", alt: "Moturi Farmstay Poster" },
    { src: "/images/Main-Hotel.png", alt: "Moturi Farmstay Main View" },
    { src: "/images/Bedroom-hotel-1.png", alt: "Farmstay Bedroom" },
    { src: "/images/Bedroom-Hotel-2.png", alt: "Farmstay Bedroom 2" },
    { src: "/images/Living-Room-Hotel.jpg", alt: "Living Room" },
    { src: "/images/Living-room-hotel-2.png", alt: "Living Room 2" },
    { src: "/images/Kitchen-Hotel.jpg", alt: "Kitchen" },
    { src: "/images/Washroom-Hotel.jpg", alt: "Washroom" },
    { src: "/images/Grass-Hotel.jpg", alt: "Green Grass Area" },
    { src: "/images/Grass-Land-Hotel.jpg", alt: "Farmstay Grassland" },
    { src: "/images/Cattle-Hotel.jpg", alt: "Cattle at Farmstay" },
    { src: "/images/Cattle-Tree-Hotel.jpg", alt: "Cattle under Tree" },
    { src: "/images/small-cow-hotel.png", alt: "Calf at Farmstay" },
    { src: "/images/Water-Farm-Hotel.jpg", alt: "Water Body at Farm" },
    { src: "/images/Grandpa-statue-hotel.png", alt: "Grandpa Statue" },
    { src: "/images/small-temple-hotel.png", alt: "Small Temple" },
  ];

  return (
    <section id="gallery" className="py-12 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center text-teal-800">
          Gallery
        </h2>
        <p className="text-center text-stone-600 mb-8 sm:mb-12 text-sm sm:text-base">
          Explore our farmstay — rooms, surroundings, cattle, and nature.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((image) => (
            <div key={image.src} className="relative h-40 sm:h-56 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}