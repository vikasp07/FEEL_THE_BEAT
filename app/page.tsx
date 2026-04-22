import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Classes from "@/components/sections/Classes";
import BatchRecommender from "@/components/sections/BatchRecommender";
import DanceQuiz from "@/components/sections/DanceQuiz";
import ImageUpload from "@/components/sections/ImageUpload";
import BookDemo from "@/components/sections/BookDemo";
import Events from "@/components/sections/Events";
import InstagramFeed from "@/components/sections/InstagramFeed";
import DanceTribe from "@/components/sections/DanceTribe";
import FounderStory from "@/components/sections/FounderStory";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover classes, events, and demo bookings at Aniket's Feel The Beat Dance Academy in Khanda Colony, Panvel.",
};

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Hero />
      <About />
      <Classes />
      <BatchRecommender />
      <DanceQuiz />
      <ImageUpload />
      <Events />
      <FounderStory />
      <DanceTribe />
      <InstagramFeed />
      <Testimonials />
      <BookDemo />
      <Contact />
    </div>
  );
}
