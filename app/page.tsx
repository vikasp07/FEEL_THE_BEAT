import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Classes from "@/components/sections/Classes";
import BatchRecommender from "@/components/sections/BatchRecommender";
import DanceQuiz from "@/components/sections/DanceQuiz";
import BookDemo from "@/components/sections/BookDemo";
import Events from "@/components/sections/Events";
import InstagramFeed from "@/components/sections/InstagramFeed";
import DanceTribe from "@/components/sections/DanceTribe";
import FounderStory from "@/components/sections/FounderStory";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import SectionReveal from "@/components/ui/SectionReveal";
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
      <SectionReveal delay={0.02}><About /></SectionReveal>
      <SectionReveal delay={0.03}><Classes /></SectionReveal>
      <SectionReveal delay={0.04}><BatchRecommender /></SectionReveal>
      <SectionReveal delay={0.05}><DanceQuiz /></SectionReveal>
      <SectionReveal delay={0.06}><Events /></SectionReveal>
      <SectionReveal delay={0.07}><FounderStory /></SectionReveal>
      <SectionReveal delay={0.08}><DanceTribe /></SectionReveal>
      <SectionReveal delay={0.09}><InstagramFeed /></SectionReveal>
      <SectionReveal delay={0.1}><Testimonials /></SectionReveal>
      <SectionReveal delay={0.11}><BookDemo /></SectionReveal>
      <SectionReveal delay={0.12}><Contact /></SectionReveal>
    </div>
  );
}
