import Image from "next/image";
import { Reveal, Stagger, RevealItem } from "./motion/Reveal";

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
    <section id="gallery" className="bg-stone-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal direction="up">
          <h2 className="mb-3 text-center text-3xl font-bold text-teal-800 sm:mb-4 sm:text-4xl">
            Gallery
          </h2>
          <p className="mb-8 text-center text-sm text-stone-600 sm:mb-12 sm:text-base">
            Explore our farmstay — rooms, surroundings, cattle, and nature.
          </p>
        </Reveal>

        <Stagger
          gap={0.06}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {images.map((image) => (
            <RevealItem key={image.src} direction="blur">
              <div className="mo-group mo-card relative h-40 overflow-hidden rounded-xl shadow-md sm:h-56">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="mo-img object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
                <span className="mo-wash" />
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}