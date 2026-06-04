export default function GoogleMap() {
  return (
    <section id="location" className="py-12 sm:py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-teal-800">
            Find Moturi Farmstay
          </h2>

          <p className="text-base sm:text-lg text-gray-600">
            Marupaka Road, Near Reddy Bhavan,
            Vemulawada, Telangana
          </p>

          <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">
            Conveniently located near major temples and attractions in
            Vemulawada.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7965180675887!2d78.83299197442871!3d18.447545771402343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccfdc315e5edad%3A0x55b7686956cdf043!2sHotel%20Moturi%20Farmstay%20Vemulawada!5e0!3m2!1sen!2sin!4v1780575138252!5m2!1sen!2sin"
            width="100%"
            height="350"
            className="sm:h-[500px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Moturi Farmstay Vemulawada Location"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <a
            href="https://maps.app.goo.gl/dCrcgJqSKvj3YGEW9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 sm:px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Get Directions
          </a>

          <a
            href="tel:+919505834657"
            className="bg-green-600 text-white px-5 sm:px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition text-sm sm:text-base"
          >
            Call 9505834657
          </a>

          <a
            href="https://wa.me/919505834657"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-5 sm:px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition text-sm sm:text-base"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}