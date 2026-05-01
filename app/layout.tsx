import type { Metadata } from "next";
import { headers } from "next/headers";
import { LanguageProvider } from "../src/components/LanguageProvider";
import "./globals.css";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cenote Maravilla",
  image: "https://www.cenotemaravilla.online/og-image.webp",
  url: "https://www.cenotemaravilla.online/",
  telephone: "+52 999 123 4567",
  description:
    "Cenote Maravilla en Puerto Morelos, Quintana Roo. Cenotes, caballos y experiencias en la Ruta de los Cenotes, Riviera Maya.",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ruta de los Cenotes",
    addressLocality: "Puerto Morelos",
    addressRegion: "Quintana Roo",
    postalCode: "77580",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.8497,
    longitude: -86.8756,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    "Puerto Morelos",
    "Ruta de los Cenotes",
    "Riviera Maya",
    "Quintana Roo",
  ],
  knowsAbout: [
    "cenotes en Puerto Morelos",
    "Ruta de los Cenotes",
    "caballos en Puerto Morelos",
    "experiencias en la selva",
    "Riviera Maya",
    "cenote in Puerto Morelos",
    "cenote tour Puerto Morelos",
    "horseback riding Puerto Morelos",
    "jungle tour Puerto Morelos",
    "cenotes near Cancun",
  ],
};

const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Cenote Maravilla",
  url: "https://www.cenotemaravilla.online/",
  description:
    "Natural cenote attraction in Puerto Morelos with swimming, horseback riding and jungle experiences.",
  image: "https://www.cenotemaravilla.online/og-image.webp",
  touristType: ["Families", "Couples", "Groups", "Adventure Travelers"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puerto Morelos",
    addressRegion: "Quintana Roo",
    addressCountry: "MX",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Cenote Maravilla located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cenote Maravilla is located in Puerto Morelos, on the Ruta de los Cenotes in the Riviera Maya, Mexico.",
      },
    },
    {
      "@type": "Question",
      name: "What experiences are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visitors can swim in crystal-clear cenote water, enjoy horseback riding and book private jungle experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Is Cenote Maravilla suitable for families and groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, experiences can be adapted for families, couples and groups.",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cenotemaravilla.online"),
  title: {
    default: "Cenote Maravilla",
    template: "%s | Cenote Maravilla",
  },
  description:
    "Discover Cenote Maravilla in Puerto Morelos, Mexico. Swim in crystal-clear cenotes, explore the Ruta de los Cenotes, enjoy horseback riding, jungle experiences and private tours in the Riviera Maya.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Cenote Maravilla",
    description:
      "Discover Cenote Maravilla in Puerto Morelos, Mexico. Swim in crystal-clear cenotes, explore the Ruta de los Cenotes, enjoy horseback riding, jungle experiences and private tours in the Riviera Maya.",
    url: "https://www.cenotemaravilla.online/",
    type: "website",
    siteName: "Cenote Maravilla",
    locale: "en_US",
    images: [
      {
        url: "https://www.cenotemaravilla.online/og-image.webp",
        alt: "Cenote Maravilla in Puerto Morelos, Riviera Maya, Mexico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cenote Maravilla",
    description:
      "Discover Cenote Maravilla in Puerto Morelos, Mexico. Swim in crystal-clear cenotes, explore the Ruta de los Cenotes, enjoy horseback riding, jungle experiences and private tours in the Riviera Maya.",
    images: ["https://www.cenotemaravilla.online/og-image.webp"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale") === "es" ? "es" : "en";

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
