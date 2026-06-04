export default function Hero() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-[85vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black">
      <img
        src="/images/poster-farmstay3.png"
        alt="Moturi Farmstay Vemulawada"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 bg-black/30 backdrop-blur-sm p-6 sm:p-10 rounded-2xl text-center text-white max-w-2xl mx-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
          Moturi Farmstay Vemulawada
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-green-100">
          Peaceful Farm Stay Near Rajarajeshwara Temple
        </p>

        <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
          <a
            href="tel:9505834657"
            className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition shadow-lg text-sm sm:text-base"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919505834657"
            target="_blank"
            className="bg-white hover:bg-gray-100 text-green-800 px-6 sm:px-8 py-3 rounded-lg font-semibold transition shadow-lg text-sm sm:text-base"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}