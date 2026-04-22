import type { Metadata } from "next";
import Events from "@/components/sections/Events";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover Dhatingnaach highlights, countdown, reels and stage-performance opportunities.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen text-white">
      <Events />
      <InstagramFeed />
      <Testimonials />
    </div>
  );
}
