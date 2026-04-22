import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BeatToggle from "@/components/ui/BeatToggle";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://feelthebeatacademy.in"),
  title: {
    default: "Aniket's Feel The Beat Dance Academy",
    template: "%s | Feel The Beat Dance Academy",
  },
  description:
    "Premium dance training in Khanda Colony, Panvel. Join hip-hop, Bollywood, contemporary, kids, ladies, and self-defence batches with Aniket Gaikwad.",
  keywords: [
    "dance academy panvel",
    "khanda colony dance classes",
    "hip hop classes panvel",
    "bollywood dance panvel",
    "aniket feel the beat",
    "demo class booking",
  ],
  authors: [{ name: "Aniket Gaikwad" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aniket's Feel The Beat Dance Academy",
    description:
      "Dance with purpose. Perform with confidence. Train with Panvel's high-energy dance community.",
    url: "/",
    type: "website",
    locale: "en_IN",
    siteName: "Feel The Beat Dance Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket's Feel The Beat Dance Academy",
    description:
      "Modern dance academy website with demo booking, events, quiz, and personalized batch recommendations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${bebas.variable} font-body`}>
        <div className="relative min-h-screen beat-active">
          <Navbar />
          <BeatToggle />
          <main className="pt-20 md:pt-24">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
