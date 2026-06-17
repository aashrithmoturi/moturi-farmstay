import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919505834657"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition z-50"
    >
      <FaWhatsapp className="mr-2 inline align-[-0.125em]" />WhatsApp
    </a>
  );
}