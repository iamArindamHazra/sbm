import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import StructuredData from "@/components/StructuredData";

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: {
    icon: "/img/favicon.ico",
  },
  title: `${site.name} - The Best Puffed Rice (Muri), Good quality Muri, Galsi, Bardhaman, India, ${site.company}`,
  description: `${site.name}—premium FSSAI-approved puffed rice from West Bengal since 2009. Machine-made, pure, stone-free. Bulk orders across India & USA. Visit our factory for packaged or loose muri. ${site.company}.`,
  keywords:
    "sonar bangla muri, puffed rice, muri, jhalmuri, west bengal, FSSAI, galsi, bardhaman, krishna sagar, wholesale muri, bulk puffed rice, india usa delivery, muri export",
  authors: [{ name: site.credits.name }],
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: `${site.name} – Premium Puffed Rice Since 2009`,
    url: site.url,
    description: `FSSAI-approved puffed rice from West Bengal. Bulk orders in India & USA. Visit factory for packaged or loose muri. ${site.company}.`,
    type: "website",
    siteName: site.name,
    images: [
      {
        url: "/img/website1200.webp",
        width: 1200,
        height: 630,
        alt: `${site.name} puffed rice packaging and factory`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – Premium Puffed Rice Since 2009`,
    description: `FSSAI-approved puffed rice from West Bengal. Bulk orders in India & USA. ${site.company}.`,
    images: [
      {
        url: "/img/website1200.webp",
        width: 1200,
        height: 630,
        alt: `${site.name} puffed rice packaging and factory`,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
};

const organizationSchema = {
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/img/logo2.webp`,
  sameAs: site.social.map((social) => social.href),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phones[0]?.tel ?? "",
      contactType: "customer service",
      email: site.email,
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.cityState,
    postalCode: site.address.pincode,
    addressCountry: "IN",
  },
};

const localBusinessSchema = {
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  image: `${site.url}/img/website1200.webp`,
  telephone: site.phones[0]?.tel ?? "",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.cityState,
    postalCode: site.address.pincode,
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="font-sans min-h-screen bg-background">
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@graph": [organizationSchema, localBusinessSchema],
          }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
