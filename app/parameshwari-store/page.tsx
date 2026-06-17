import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import StoreContent from "../../components/StoreContent";

export const metadata: Metadata = {
  title: "Parameshwari Store Vemulawada | Idols, Photo Frames, Toys & Wholesale Items",
  description:
    "Parameshwari Store in Vemulawada offers idols, Lord Shiva photo frames, sports goods, household items, children's toys and general items at wholesale prices. Bulk & retail orders welcome.",
  keywords: [
    "parameshwari store",
    "parameshwari store vemulawada",
    "wholesale store vemulawada",
    "idols shop vemulawada",
    "lord shiva photo frames",
    "god idols wholesale",
    "toys shop vemulawada",
    "household items vemulawada",
    "sports items vemulawada",
    "general store vemulawada",
    "wholesale shop sircilla",
  ],
  alternates: { canonical: "/parameshwari-store" },
  openGraph: {
    title: "Parameshwari Store Vemulawada | Wholesale Idols, Frames, Toys & More",
    description:
      "Idols, Lord Shiva photo frames, sports goods, household items, toys and general items at wholesale prices in Vemulawada.",
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Parameshwari Store",
  description:
    "Wholesale and retail store in Vemulawada selling idols, Lord Shiva photo frames, sports goods, household items, children's toys and general items.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vemulawada",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  telephone: ["+919505834657", "+919440134657"],
  priceRange: "₹ (Wholesale)",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <StoreContent />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
