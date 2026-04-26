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
    <section id="about" className="section-wrap">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.35 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-200">
            <Sparkles className="h-4 w-4" />
            About The Academy
          </div>
          <h2 className="section-title">Built For Dancers Who Want More</h2>
          <p className="section-lead">
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
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: false, amount: 0.25 }}
            >
              <Card className="group h-full transition-all duration-300 hover:border-red-400/60 hover:bg-red-500/12 hover:shadow-[0_20px_60px_-30px_rgba(220,38,38,0.75)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/50 to-red-600/40 text-white transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-white/80 transition-colors duration-300 group-hover:text-white">{pillar.description}</p>
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
            <div key={item.title} className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
              <item.icon className="h-5 w-5 text-red-300" />
              <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-white/80">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
