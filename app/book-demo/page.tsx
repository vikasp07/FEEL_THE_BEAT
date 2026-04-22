import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import BookDemo from "@/components/sections/BookDemo";
import ImageUpload from "@/components/sections/ImageUpload";

export const metadata: Metadata = {
  title: "Book Demo",
  description:
    "Book your trial class at Aniket's Feel The Beat Dance Academy and reserve your preferred slot instantly.",
};

export default function BookDemoPage() {
  return (
    <div className="min-h-screen text-white">
      <Hero compact />
      <BookDemo />
      <ImageUpload />
    </div>
  );
}
