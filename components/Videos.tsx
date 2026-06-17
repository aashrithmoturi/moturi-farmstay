import { Reveal, Stagger, RevealItem } from "./motion/Reveal";

export default function Videos() {
  const videos = [
    { src: "/videos/small-outside-view.mp4", title: "Outside View", poster: "/images/Main-Hotel.png" },
    { src: "/videos/VID-20260305-WA0004.mp4", title: "Farmstay Tour", poster: "/images/Grass-Land-Hotel.jpg" },
    { src: "/videos/VID-20260601-WA0005.mp4", title: "Farm Experience", poster: "/images/Cattle-Hotel.jpg" },
  ];

  return (
    <section id="videos" className="bg-teal-800 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal direction="up">
          <h2 className="mb-3 text-center text-3xl font-bold text-white sm:mb-4 sm:text-4xl">
            Videos
          </h2>
          <p className="mb-8 text-center text-sm text-green-200 sm:mb-12 sm:text-base">
            Watch our farmstay in action — the surroundings, rooms, and nature.
          </p>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <RevealItem key={video.src} direction="zoom">
              <div className="mo-card overflow-hidden rounded-xl bg-teal-900 shadow-lg">
                <video
                  src={video.src}
                  controls
                  preload="none"
                  poster={video.poster}
                  className="h-48 w-full bg-black object-cover sm:h-56"
                />
                <p className="py-3 text-center font-medium text-white">
                  {video.title}
                </p>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
