export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-20 bg-teal-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
          Contact Moturi Farmstay
        </h2>

        <p className="text-center text-gray-300 mb-8 sm:mb-12 text-sm sm:text-base">
          Plan your stay, Bonalu celebrations, family trips,
          friends gatherings and temple visits.
        </p>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              <p>
                📞 <strong>9505834657</strong>
              </p>

              <p>
                📞 <strong>9440134657</strong>
              </p>

              <p>
                📍 Marupaka Road, Near Reddy Bhavan,
                Vemulawada, Telangana
              </p>

              <p>
                🏡 1BHK Farmstay
              </p>

              <p>
                👨‍👩‍👧‍👦 Accommodates Up To 10 Adults
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="tel:+919505834657"
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919505834657"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold"
              >
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/moturi_farmstay?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg font-semibold"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="bg-teal-800/60 border border-teal-700 rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Why Stay With Us?
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>🌿 Peaceful Nature Environment</li>
              <li>🐄 Experience Village & Cattle Life</li>
              <li>📸 Ideal For Photoshoots</li>
              <li>🎉 Bonalu Celebrations</li>
              <li>👨‍👩‍👧‍👦 Family Friendly Stay</li>
              <li>🎶 Music & Speaker Facility Available</li>
              <li>🙏 Close To Major Temples</li>
              <li>👥 Perfect For Friends Get-Together</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}