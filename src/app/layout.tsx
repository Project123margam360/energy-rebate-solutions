import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victorian Energy Rebates | VEU Upgrades, Solar , Heat Pump & Air Conditioning Rebates",
  description:
    "Access Victorian Energy Rebates through the Victorian Energy Upgrades (VEU) program. Save on heat pumps, air conditioning, solar panels and battery storage upgrades across Victoria.",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "https://energyrebatesolutions.com.au/",
  },
  openGraph: {
    title: "Victorian Energy Rebates | Energy Rebate Solutions",
    description:
      "Access Victorian Energy Rebates through the VEU program for solar, heat pumps, air conditioning and battery storage.",
    url: "https://energyrebatesolutions.com.au/",
    type: "website",
    images: [
      {
        url: "https://energyrebatesolutions.com.au/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victorian Energy Rebates | Energy Rebate Solutions",
    description:
      "Save with Victorian Energy Upgrade rebates for solar, heat pumps, air conditioning and battery systems.",
    images: ["https://energyrebatesolutions.com.au/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": "Victoria",
    "geo.position": "-37.8136;144.9631",
    "ICBM": "-37.8136, 144.9631",
    "keywords":
      "victorian energy rebates, veu rebates victoria, energy upgrades victoria, heat pump rebates victoria, solar rebates victoria , Air Conditioner rebates victoria, battery storage rebates victoria, energy efficiency rebates victoria, home energy upgrades victoria, renewable energy rebates victoria ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Energy Rebate Solutions",
              url: "https://energyrebatesolutions.com.au",
              logo: "https://energyrebatesolutions.com.au/logo.png",
              image: "https://energyrebatesolutions.com.au/logo.png",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Victoria",
                addressCountry: "AU",
              },
              areaServed: {
                "@type": "State",
                name: "Victoria",
              },
              sameAs: [
                "https://www.facebook.com/",
                "https://www.linkedin.com/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the Victorian Energy Upgrades program?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Victorian Energy Upgrades program provides rebates for energy-efficient appliances including heat pumps, air conditioners and solar systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who qualifies for Victorian Energy Rebates?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most homeowners and renters in Victoria can qualify for rebates under the VEU program depending on the appliance and property type.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://energyrebatesolutions.com.au",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Rebates",
                  item: "https://energyrebatesolutions.com.au/rebates",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Services",
                  item: "https://energyrebatesolutions.com.au/services",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Heat Pumps",
                  item: "https://energyrebatesolutions.com.au/services/heat-pumps",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Air Conditioning",
                  item: "https://energyrebatesolutions.com.au/services/air-conditioning",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Solar",
                  item: "https://energyrebatesolutions.com.au/services/solar",
                },
                {
                  "@type": "ListItem",
                  position: 7,
                  name: "Battery",
                  item: "https://energyrebatesolutions.com.au/services/battery",
                },
                {
                  "@type": "ListItem",
                  position: 8,
                  name: "Contact",
                  item: "https://energyrebatesolutions.com.au/contact",
                },
                {
                  "@type": "ListItem",
                  position: 9,
                  name: "About",
                  item: "https://energyrebatesolutions.com.au/about",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
