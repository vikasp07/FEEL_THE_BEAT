"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Sparkles, UsersRound } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

type Tribe = {
  name: string;
  age: string;
  members: number;
  vibe: string;
  style: string;
};

const tribeMap: Record<string, Tribe[]> = {
  "Hip-Hop": [
    { name: "Street Breakers", age: "16-25", members: 45, vibe: "Urban freestyle and cyphers", style: "Hip-Hop" },
    { name: "Rhythm Crushers", age: "18-30", members: 33, vibe: "Power drills and stage sets", style: "Hip-Hop" },
  ],
  Bollywood: [
    { name: "Desi Motion", age: "14-35", members: 52, vibe: "Expressive storytelling routines", style: "Bollywood" },
    { name: "Wedding Squad", age: "18-40", members: 48, vibe: "Performance-ready choreography", style: "Bollywood" },
  ],
  Contemporary: [
    { name: "Fluid Collective", age: "16-34", members: 27, vibe: "Emotion-led movement training", style: "Contemporary" },
    { name: "Modern Drift", age: "18-38", members: 24, vibe: "Technique + artistry sessions", style: "Contemporary" },
  ],
  Kids: [
    { name: "Little Groove Crew", age: "5-10", members: 38, vibe: "Playful rhythm learning", style: "Kids" },
    { name: "Junior Stage Stars", age: "9-13", members: 31, vibe: "Confidence with choreography", style: "Kids" },
  ],
  Ladies: [
    { name: "Power Queens", age: "22-42", members: 44, vibe: "Fitness and expressive dance", style: "Ladies" },
    { name: "Grace Collective", age: "28-48", members: 36, vibe: "Comfort-first structured classes", style: "Ladies" },
  ],
};

const ageGroups = ["5-12", "12-18", "18-30", "30-45", "45+"];
const styles = Object.keys(tribeMap);

export default function DanceTribe() {
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [showResults, setShowResults] = useState(false);

  const matchedTribes = useMemo(() => {
    if (!selectedStyle) {
      return [] as Tribe[];
    }

    return tribeMap[selectedStyle] ?? [];
  }, [selectedStyle]);

  return (
    <section className="section-wrap">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.35 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <h2 className="section-title">Find Your Dance Tribe</h2>
          <p className="section-lead text-white/80">
            Match with a community group based on your age and favorite style.
          </p>
        </motion.div>

        <Card className="mx-auto max-w-4xl rounded-3xl p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-white/90">Select Age Group</label>
              <select
                value={selectedAge}
                onChange={(event) => setSelectedAge(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-white outline-none"
              >
                <option value="">Choose age group</option>
                {ageGroups.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-white/90">Preferred Style</label>
              <select
                value={selectedStyle}
                onChange={(event) => setSelectedStyle(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-white outline-none"
              >
                <option value="">Choose style</option>
                {styles.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Button
            className="mt-5"
            onClick={() => setShowResults(Boolean(selectedAge && selectedStyle))}
            disabled={!selectedAge || !selectedStyle}
          >
            <Sparkles className="mr-2 h-4 w-4" /> Show My Tribe
          </Button>
        </Card>

        {showResults ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {matchedTribes.map((tribe, index) => (
              <motion.div
                key={tribe.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="rounded-2xl p-5" gradient>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{tribe.name}</h3>
                      <p className="mt-1 text-sm text-white/80">{tribe.vibe}</p>
                    </div>
                    <div className="rounded-full bg-red-500/25 p-2 text-red-100">
                      <UsersRound className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/90">
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Style: {tribe.style}</span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Age: {tribe.age}</span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">{tribe.members} Members</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
