export default function Videos() {
  const videos = [
    { src: "/videos/small-outside-view.mp4", title: "Outside View" },
    { src: "/videos/VID-20260305-WA0004.mp4", title: "Farmstay Tour" },
    { src: "/videos/VID-20260601-WA0005.mp4", title: "Farm Experience" },
  ];

  return (
    <section id="videos" className="py-12 sm:py-20 bg-teal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center text-white">
          Videos
        </h2>
        <p className="text-center text-green-200 mb-8 sm:mb-12 text-sm sm:text-base">
          Watch our farmstay in action — the surroundings, rooms, and nature.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {videos.map((video) => (
            <div key={video.src} className="rounded-xl overflow-hidden shadow-lg bg-teal-900">
              <video
                src={video.src}
                controls
                preload="metadata"
                className="w-full h-48 sm:h-56 object-cover bg-black"
              />
              <p className="text-white font-medium text-center py-3">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
