import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} - The Best Puffed Rice (Muri), Good quality Muri, Galsi, Bardhaman, India, ${site.company}`,
  description: `${site.name}—premium FSSAI-approved puffed rice from West Bengal since 2009. Machine-made, pure, stone-free. Bulk orders across India & USA. Visit our factory for packaged or loose muri. ${site.company}.`,
  keywords:
    "sonar bangla muri, puffed rice, muri, jhalmuri, west bengal, FSSAI, galsi, bardhaman, krishna sagar, wholesale muri, bulk puffed rice, india usa delivery, muri export",
  authors: [{ name: site.credits.name }],
  openGraph: {
    title: `${site.name} – Premium Puffed Rice Since 2009`,
    url: site.url,
    description: `FSSAI-approved puffed rice from West Bengal. Bulk orders in India & USA. Visit factory for packaged or loose muri. ${site.company}.`,
    type: "website",
    siteName: site.name,
    images: [{ url: "/img/website1200.jpg", width: 1200 }],
  },
  twitter: {
    card: "summary",
    title: `${site.name} – Premium Puffed Rice Since 2009`,
    description: `FSSAI-approved puffed rice from West Bengal. Bulk orders in India & USA. ${site.company}.`,
    images: ["/img/website.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
