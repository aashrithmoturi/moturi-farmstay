import { FaPhoneAlt as FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-teal-200">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">🌿 Moturi Farmstay</h3>
            <p className="text-sm leading-6 text-teal-300">
              A peaceful 1BHK farm stay in Vemulawada, near Sri Raja Rajeshwara
              Swamy Temple — ideal for families, pilgrims & weekend getaways.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold text-white">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="mo-link transition hover:text-white">Home</a></li>
              <li><a href="/raja-rajeshwara-temple" className="mo-link transition hover:text-white">Raja Rajeshwara Temple</a></li>
              <li><a href="/parameshwari-store" className="mo-link transition hover:text-white">Parameshwari Store</a></li>
              <li><a href="/#gallery" className="mo-link transition hover:text-white">Gallery</a></li>
              <li><a href="/#contact" className="mo-link transition hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:9505834657" className="transition hover:text-white"><FaPhone className="mr-2 inline align-[-0.125em]" />9505834657</a></li>
              <li><a href="tel:9440134657" className="transition hover:text-white"><FaPhone className="mr-2 inline align-[-0.125em]" />9440134657</a></li>
              <li><a href="https://wa.me/919505834657" target="_blank" rel="noopener noreferrer" className="transition hover:text-white"><FaWhatsapp className="mr-2 inline align-[-0.125em]" />WhatsApp</a></li>
              <li>📍 Marupaka Road, Vemulawada, Telangana</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-teal-800 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Moturi Farmstay Vemulawada. All rights reserved.
        </div>
      </div>
    </footer>
  );
}