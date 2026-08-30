import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://citadelchristian.org"),
  title: {
    default: "Citadel Christian School | Classical • Biblical • Exceptional",
    template: "%s | Citadel Christian School",
  },
  description:
    "Citadel Christian School is an accredited, Classical Christian school delivering holistic, life-equipping education to PK-12th grade students through highly-qualified, caring teachers.",
  keywords: [
    "Citadel Christian School",
    "Classical Christian School",
    "Christian School Brenham TX",
    "University-Model School",
    "Private Christian School Texas",
    "PK-12 Christian Education",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://citadelchristian.org",
    siteName: "Citadel Christian School",
    title: "Citadel Christian School | Classical • Biblical • Exceptional",
    description:
      "Citadel Christian School is an accredited, Classical Christian school delivering holistic, life-equipping education to PK-12th grade students through highly-qualified, caring teachers.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Citadel Christian School Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Citadel Christian School | Classical • Biblical • Exceptional",
    description:
      "Citadel Christian School is an accredited, Classical Christian school delivering holistic, life-equipping education to PK-12th grade students through highly-qualified, caring teachers.",
    images: ["/favicon.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Citadel Christian School",
  url: "https://citadelchristian.org",
  logo: "https://citadelchristian.org/favicon.png",
  image: "https://citadelchristian.org/favicon.png",
  description:
    "Citadel Christian School is an accredited, Classical Christian school delivering holistic, life-equipping education to PK-12th grade students through highly-qualified, caring teachers in Brenham, TX.",
  telephone: "(979) 830-1177",
  email: "info@citadelchristian.org",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1005 N Park St",
    addressLocality: "Brenham",
    addressRegion: "TX",
    postalCode: "77833",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/WisdomandVirtue",
    "https://www.instagram.com/citadelchristianschool/",
    "https://www.youtube.com/channel/UC0pBmmZTffKEkIsOS05IrBg",
    "https://www.linkedin.com/company/citadel-christian-school/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${roboto.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-slate-900 font-sans"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
