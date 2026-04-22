"use client";

import { motion } from "framer-motion";
import { Award, HeartHandshake, Sparkles, Target, Trophy, Users } from "lucide-react";
import Card from "../ui/Card";

const pillars = [
  {
    title: "Technique + Expression",
    description: "Every class balances strong fundamentals with expressive choreography.",
    icon: Target,
  },
  {
    title: "Community-Led Growth",
    description: "You grow inside a positive tribe where every dancer is encouraged.",
    icon: Users,
  },
  {
    title: "Performance Mindset",
    description: "From class routines to stage events, students train with confidence.",
    icon: Trophy,
  },
  {
    title: "Mentorship Focus",
    description: "Founder-led guidance ensures personal attention at each skill level.",
    icon: HeartHandshake,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-300/35 bg-pink-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-pink-100">
            <Sparkles className="h-4 w-4" />
            About The Academy
          </div>
          <h2 className="font-display text-5xl text-white sm:text-6xl">Built For Dancers Who Want More</h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Feel The Beat blends discipline, energy, and creativity to build stage-ready confidence.
            Located in Khanda Colony, Panvel, the academy has trained dancers for fitness, celebration,
            and professional performances since 2015.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/40 to-pink-500/35 text-white">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{pillar.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mt-8 grid gap-4 rounded-2xl p-6 md:grid-cols-3"
        >
          {[
            { icon: Award, title: "Founder-Led Quality", detail: "Aniket Gaikwad personally mentors key batches." },
            { icon: Users, title: "Beginner Friendly", detail: "Clear progress path from zero to stage-ready." },
            { icon: Sparkles, title: "Energetic Atmosphere", detail: "Every session is designed to feel alive and motivating." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <item.icon className="h-5 w-5 text-cyan-200" />
              <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
