import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import TempleContent from "../../components/TempleContent";

export const metadata: Metadata = {
  title: "Sri Raja Rajeshwara Swamy Temple Vemulawada | Timings, History & Darshan",
  description:
    "Complete guide to Sri Raja Rajeshwara Swamy Temple, Vemulawada — the 'Dakshina Kashi' of Telangana. Darshan timings, history, festivals, Kode Mokku ritual, and nearby stay at Moturi Farmstay.",
  keywords: [
    "raja rajeshwara temple",
    "raja rajeshwara swamy temple vemulawada",
    "vemulawada temple",
    "vemulawada temple timings",
    "dakshina kashi telangana",
    "raja rajeshwara temple history",
    "kode mokku vemulawada",
    "shiva temple telangana",
    "vemulawada darshan timings",
    "stay near raja rajeshwara temple",
  ],
  alternates: { canonical: "/raja-rajeshwara-temple" },
  openGraph: {
    title: "Sri Raja Rajeshwara Swamy Temple Vemulawada | Timings, History & Darshan",
    description:
      "The 'Dakshina Kashi' of Telangana — darshan timings, history, festivals and nearby stay at Moturi Farmstay.",
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["PlaceOfWorship", "TouristAttraction"],
  name: "Sri Raja Rajeshwara Swamy Temple",
  description:
    "An ancient and revered Shiva temple in Vemulawada, Telangana, known as the 'Dakshina Kashi'.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vemulawada",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.4636,
    longitude: 78.8676,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <TempleContent />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
