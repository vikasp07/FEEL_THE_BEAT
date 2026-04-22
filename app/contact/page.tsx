import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import BookDemo from "@/components/sections/BookDemo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, WhatsApp, or visit us in Khanda Colony, Panvel. Check map location and working hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white">
      <Contact />
      <BookDemo />
    </div>
  );
}
