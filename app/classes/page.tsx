import type { Metadata } from "next";
import Classes from "@/components/sections/Classes";
import BatchRecommender from "@/components/sections/BatchRecommender";
import DanceQuiz from "@/components/sections/DanceQuiz";

export const metadata: Metadata = {
  title: "Classes & Batches",
  description:
    "Explore hip-hop, Bollywood, contemporary, ladies, kids and self-defence batches with smart recommendation tools.",
};

export default function ClassesPage() {
  return (
    <div className="min-h-screen text-white">
      <Classes />
      <BatchRecommender />
      <DanceQuiz />
    </div>
  );
}
