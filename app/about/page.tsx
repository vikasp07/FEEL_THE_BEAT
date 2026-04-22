import type { Metadata } from "next";
import About from "@/components/sections/About";
import FounderStory from "@/components/sections/FounderStory";
import DanceTribe from "@/components/sections/DanceTribe";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the journey of founder Aniket Gaikwad and the community culture at Feel The Beat Dance Academy in Panvel.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      <About />
      <FounderStory />
      <DanceTribe />
    </div>
  );
}
