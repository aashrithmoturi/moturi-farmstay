import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moturifarmstay.in"),
  title: {
    default: "Moturi Farmstay Vemulawada | Best Hotel, Rooms & Farm Stay in Vemulawada, Sircilla",
    template: "%s | Moturi Farmstay Vemulawada",
  },

  description:
    "Moturi Farmstay is the best hotel and farmhouse stay in Vemulawada, Rajanna Sircilla district, Telangana. Affordable rooms, family-friendly accommodation near Sri Raja Rajeshwara Swamy Temple. Ideal for Bonalu celebrations, family trips, friends get-togethers, and weekend stays.",

  keywords: [
    "hotel in vemulawada",
    "best hotel in vemulawada",
    "rooms in vemulawada",
    "hotel rooms vemulawada",
    "lodge in vemulawada",
    "lodges in vemulawada",
    "farmstay in vemulawada",
    "farmhouse in vemulawada",
    "farm stay vemulawada",
    "accommodation in vemulawada",
    "stay in vemulawada",
    "vemulawada hotel",
    "vemulawada rooms",
    "vemulawada lodge",
    "vemulawada farmstay",
    "vemulawada temple",
    "vemulawada temple stay",
    "temple stay vemulawada",
    "stay near temple vemulawada",
    "sircilla hotel",
    "hotel in sircilla",
    "rooms in sircilla",
    "lodge in sircilla",
    "farmhouse near sircilla",
    "rajanna sircilla hotel",
    "rajanna sircilla lodge",
    "stay near raja rajeshwara temple",
    "hotel near raja rajeshwara temple",
    "lodge near raja rajeshwara temple",
    "raja rajeshwara temple accommodation",
    "raja rajeshwara temple hotel",
    "bonalu celebrations vemulawada",
    "moturi farmstay",
    "moturi farmstay vemulawada",
  ],

  openGraph: {
    title: "Moturi Farmstay Vemulawada | Best Hotel & Farmhouse Stay",
    description:
      "Best hotel, rooms & farmhouse stay in Vemulawada, Sircilla. Family-friendly accommodation near Sri Raja Rajeshwara Swamy Temple.",
    type: "website",
    locale: "en_IN",
    siteName: "Moturi Farmstay Vemulawada",
  },

  twitter: {
    card: "summary_large_image",
    title: "Moturi Farmstay Vemulawada | Best Hotel & Farmhouse Stay",
    description:
      "Best hotel, rooms & farmhouse stay in Vemulawada, Sircilla. Near Raja Rajeshwara Temple.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  verification: {
    google: "T_HRgkWyrOkgVSMnMJKjhaMp_r4WdOXaIVLl7iHUOEU",
  },

  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LodgingBusiness"],
  name: "Hotel Moturi Farmstay Vemulawada",
  description:
    "Best hotel and farmhouse stay in Vemulawada, Rajanna Sircilla district, Telangana. Affordable rooms, family-friendly accommodation near Sri Raja Rajeshwara Swamy Temple.",
  url: "https://www.moturifarmstay.in",
  image: "https://www.moturifarmstay.in/images/poster-farmstay3.png",
  telephone: ["+919505834657", "+919440134657"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Marupaka Road, Near Reddy Bhavan",
    addressLocality: "Vemulawada",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.447545,
    longitude: 78.832992,
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "1BHK Farmstay" },
    { "@type": "LocationFeatureSpecification", name: "Accommodates 10 Adults" },
    { "@type": "LocationFeatureSpecification", name: "Family Friendly" },
    { "@type": "LocationFeatureSpecification", name: "Cattle Farm" },
    { "@type": "LocationFeatureSpecification", name: "Nature Experience" },
    { "@type": "LocationFeatureSpecification", name: "Photoshoot Location" },
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/moturi_farmstay",
  ],
  hasMap: "https://maps.app.goo.gl/qkqvn5jU1RFSxZnx9",
  checkinTime: "11:00",
  checkoutTime: "10:00",
  containsPlace: [
    { "@type": "TouristAttraction", name: "Sri Raja Rajeshwara Swamy Temple" },
    { "@type": "TouristAttraction", name: "Nampally Narasimha Swamy Temple" },
  ],
  areaServed: ["Vemulawada", "Sircilla", "Rajanna Sircilla", "Hyderabad"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="G-EYEZKNLMPV" />
    </html>
  );
}